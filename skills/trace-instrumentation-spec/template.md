# Trace Instrumentation Spec — <product> v1

Signed off **before** launch, alongside the `v1-launch-bar` gates. Not a logging config: a
list of decisions with the fields that make them answerable. A field with no decision in
its row is deleted, and the deletion is recorded in section 6.

**Semconv version pinned:** `<OpenTelemetry GenAI semantic conventions version you built
against>` — every attribute name below is `[Assumption]` until checked against it.
**Custom namespace:** `<vendor>.` — never invent a `gen_ai.*` name.
**Autonomy level at launch (from `eval-first-spec`):** `<L0–L4>`
**Data-rights clause status (from `data-rights-clause`):** `<signed / not signed>` — if not
signed, cross-tenant aggregation in section 5 is NO.

---

## 1. Decisions first (work backwards)

List the decisions you will actually make in the two quarters after launch. Derive fields
from these. Do not start from what is easy to log.

| # | Decision to be made | The question someone will ask | Minimum field that answers it | Consumer skill |
|---|---|---|---|---|
| D1 | _[e.g. promote or hold autonomy]_ | _["is the customer still editing what we propose?"]_ | _[human-edit delta]_ | `refine-flywheel` |
| D2 | _[accept or roll back a model release]_ | _["was it the model, the prompt, or the product?"]_ | _[prompt version hash + model ID]_ | `refine-flywheel` |
| D3 | _[price the next pilot]_ | _["what does one accepted outcome cost?"]_ | _[tokens per call + per run, cost at write]_ | `metrics-that-matter` |
| D4 | _[where the guardrail goes]_ | _["which step fails, how often, at what confidence?"]_ | _[per-tool-call rows + confidence]_ | `guardrail-design` |
| D5 | _[renew or churn]_ | _["did this account get the outcome it bought?"]_ | _[outcome verdict + adjudicator]_ | `metrics-that-matter` |
| D6 | _[what to build next]_ | _["what did users do instead of telling us?"]_ | _[redacted input/output]_ | `trace-to-interview` |

---

## 2. The field register

Every row: the field, where it maps, the decision it serves (D#), the write-time rule, and
its sampling class. Rows 1–10 are required. A row with an empty **Decision** cell does not
ship — move it to section 6.

| # | Field | Maps to (pinned semconv, or `<vendor>.` custom) | Decision | Consumer | Write-time redaction / retention | Sampling class |
|---|---|---|---|---|---|---|
| 1 | Input, redacted | _[GenAI input-messages attribute]_ | D6 | `trace-to-interview` | _[profile name, runs pre-export; text retention window]_ | _[class]_ |
| 2 | Output, redacted | _[GenAI output-messages attribute]_ | D6 | `trace-to-interview` | _[profile + window]_ | _[class]_ |
| 3 | Per tool call: name, arguments, result, latency, error | _[one child span per call + GenAI tool attributes + `error.type`]_ | D4 | `guardrail-design` | _[argument key allowlist; result truncation rule]_ | _[class]_ |
| 4 | Tokens in / out / cached — **per call and per run** | _[GenAI usage attributes; cached namespaced if absent]_ | D3 | `metrics-that-matter` | none — derived, keep long | every run |
| 5 | Latency per step and end to end | _[span durations + root span duration]_ | D3 | `metrics-that-matter`, `v1-launch-bar` | none — derived | every run |
| 6 | **Prompt version hash + request/response model ID, pinned per run** | _[GenAI request/response model attrs + `<vendor>.prompt.version_hash`]_ | D2 | `refine-flywheel` | none — derived | every run |
| 7 | **Human-edit delta** (see section 3) | `<vendor>.edit.proposed_ref`, `.committed_ref`, `.distance`, `.class` | D1 | `refine-flywheel` | refs point at already-redacted records | 100% of edited/rejected/abandoned |
| 8 | Outcome verdict + adjudicator | `<vendor>.outcome.verdict`, `.adjudicator`, `.adjudicated_at` | D5 | `eval-first-spec`, `refine-flywheel` | none — derived | every run |
| 9 | Session, actor, tenant IDs | _[session/conversation id]_ + `<vendor>.tenant.id` + `<vendor>.actor.pseudonym` | D5 | `data-rights-clause` | pseudonymise at write, per-tenant key | every run |
| 10 | Cost + price sheet version | `<vendor>.cost.amount`, `<vendor>.cost.price_sheet_version` | D3 | `metrics-that-matter` | computed at **write**, never at read | every run |
| 11+ | _[additional field]_ | _[attribute]_ | _[D#, or delete it]_ | _[skill]_ | _[rule]_ | _[class]_ |

**Confidence score.** If the product emits one, log it as `<vendor>.confidence` for D4 — it
is what `guardrail-design`'s threshold is applied to. It is a self-assessment, **0.1 on the
ladder**, and must never be written into row 8.

---

## 3. Human-edit delta — the capture point

This is an interface decision, not a logging one. Name where in the UI it fires.

**Capture point:** _[the exact action — e.g. "the Commit button on the exception review
drawer"]_
**Distance metric and unit:** _[e.g. tokens changed / edited field count / normalised
Levenshtein — state the unit]_

| Class | Fires when | Emitted? |
|---|---|---|
| `clean_accept` | committed unchanged | _[yes]_ |
| `minor_edit` | below _[threshold]_ | _[yes]_ |
| `major_edit` | above _[threshold]_ | _[yes]_ |
| `rejected` | human discarded the proposal | _[yes — required]_ |
| `abandoned` | session closed with no commit | _[yes — required]_ |

**Denominator rule:** every clean-accept rate is reported as `n reviewed / N total`. Runs
auto-committed without review emit no delta and are excluded explicitly, never silently.

Auto-committed share expected at launch: _[n]_% — if above _[n]_%, define the forced
shadow-review sample here: _[rate + who reviews]_.

---

## 4. Sampling

| Run class | Rate | Stated as a number |
|---|---|---|
| Errored / entered safety mode | 100% | 100% |
| Below the `guardrail-design` confidence threshold | 100% | 100% |
| Human edited, rejected, or abandoned | 100% | 100% |
| First N runs after a new prompt hash or model ID | 100% until N | N = _[n]_ |
| Clean-accept, unchanged prompt and model | sampled | _[n]_% |

**Sampling is head-based, keyed on the session ID**, so a trace is kept whole or dropped
whole. Tail sampling is prohibited here: the human edit arrives after the model span
closes, so tail rules drop exactly the runs row 7 exists for.

---

## 5. Tenant isolation and access

| Question | Answer |
|---|---|
| Partition key on every span | `<vendor>.tenant.id` |
| Who can read raw redacted text | _[named role]_ |
| Who can read derived numbers only | _[named role]_ |
| Cross-tenant aggregation permitted? | _[YES only if the `data-rights-clause` grants derived/pooled use — cite the clause line; otherwise NO, and enforced at the query layer, not by convention]_ |
| Raw text retention | _[n]_ days |
| Derived-number retention | _[n]_ years |

---

## 6. Deleted fields (a result, not an omission)

| Field proposed | Decision it would have informed | Why deleted |
|---|---|---|
| _[e.g. thumbs-up widget]_ | _[none]_ | _[opinion 0.1; no decision moves on it; retention with no payoff]_ |

---

## 7. Dry-run verification

Answer each from the register alone. An unanswerable question is a missing field — send it
back to section 1 with its decision named. Do **not** answer it from memory or estimate.

| Consumer question | Rows that answer it | Answerable? | If no, the missing field |
|---|---|---|---|
| `trace-to-interview`: "which behaviour pattern is this, and what did the user do instead of telling us?" | _[1, 2, 3]_ | _[YES/NO]_ | _[field]_ |
| `refine-flywheel`: "has clean-accept held above its gate for N cycles, on what denominator?" | _[7, 6, 9]_ | _[YES/NO]_ | _[field]_ |
| `metrics-that-matter`: "what is cost per accepted outcome, to the cent, this month vs last?" | _[4, 8, 10]_ | _[YES/NO]_ | _[field]_ |
| `guardrail-design`: "which failure mode fired, at what confidence, on which tool call?" | _[3, 11]_ | _[YES/NO]_ | _[field]_ |

---

## 8. Sign-off

Tag every claim `[Fact]` / `[Assumption]` / `[Hypothesis]`. A field being emitted is
`[Fact]` from launch. A number rebuilt later from a window where the field was absent is
`[Assumption]` permanently, and every metric derived from it inherits that ceiling.

**Kill line — return the spec unsigned if any of these is true:**

- [ ] Prompt version hash or model ID is not pinned per run
- [ ] The human-edit delta has no named interface capture point
- [ ] `rejected` or `abandoned` does not fire
- [ ] The outcome verdict has no named adjudicator
- [ ] Any register row has an empty Decision cell
- [ ] Redaction happens at read time rather than before export
- [ ] A clean-accept rate is quoted anywhere without its denominator
- [ ] A dry-run question in section 7 is NO and has no field named to fix it

Signed by: _[owner]_ · Date: _[date]_ · Reviewed against `v1-launch-bar`: _[yes/no]_
