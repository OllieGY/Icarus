> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Foundry Signal, factory copilot v1

Foundry Signal builds a copilot for process engineers on a continuous production line. Its
v1 job, from `eval-first-spec`: when a line throws an out-of-spec reading, propose a
corrective setpoint change with a one-paragraph rationale, for a named engineer to commit
or reject. Autonomy at launch: **L1** — every proposal is human-committed. Four weeks to
pilot start.

## What the builder brought

"We're wiring up tracing before the pilot. The platform team says auto-instrumentation
gives us prompts, completions, tokens and latency out of the box, and we can add anything
else later. Anything we're missing?"

Stated facts:
- Auto-instrumentation covers prompt text, completion text, tokens, latency. [Fact]
- The prompt template lives in the repo and changes roughly weekly. [Fact]
- The review drawer has a Commit button and a Discard button. Discard writes nothing today. [Fact]
- Engineers close the drawer without acting on about a fifth of proposals. [Fact — from a two-week concierge run, behaviour observed 0.7]
- The pilot contract is signed; its data-rights clause grants derived-data retention, and pooled cross-customer use only on anonymised derived numbers. [Fact]
- The plant's shift notes contain worker names and badge IDs. [Fact]

## The challenge, before anything is filled in

"Add anything else later" is the failure this spec exists to stop. Three of the four fields
that matter are not in the auto-instrumented set, and two of them cannot be backfilled at
all. Stated plainly: if this ships as proposed, the first pilot quarter cannot answer
whether the copilot earned an autonomy promotion, and cannot attribute any score movement
to the prompt, the model or the line.

## 1. Decisions first

| # | Decision | Asked as | Field it forces | Consumer |
|---|---|---|---|---|
| D1 | Promote L1 → L2 at pilot end | "are engineers still editing our setpoints?" | human-edit delta | `refine-flywheel` |
| D2 | Take the next model release or hold | "did the miss rate move because of the model or the weekly prompt edit?" | prompt hash + model ID, pinned | `refine-flywheel` |
| D3 | Price pilot #2 | "what does one committed setpoint cost us?" | tokens per call and run, cost at write | `metrics-that-matter` |
| D4 | Where the hard stop goes | "which tool call fails, at what confidence?" | per-tool-call rows + confidence | `guardrail-design` |
| D5 | Renew | "did this plant get the outcome it bought?" | outcome verdict + adjudicator | `metrics-that-matter` |
| D6 | Build next | "what do engineers do instead of telling us?" | redacted input/output | `trace-to-interview` |

## 2. Register (the rows that changed the build)

Semconv version pinned in the header; every attribute name below is `[Assumption]` until
checked against it. Custom namespace `fsig.`.

| # | Field | Maps to | Decision | Write-time rule | Sampling |
|---|---|---|---|---|---|
| 3 | Per tool call: historian query, spec lookup, setpoint validator — name, args, result, latency, error | child span per call + tool attributes + `error.type` | D4 | arg allowlist: tag ID, time window. Everything else dropped | 100% of errored; 5% clean |
| 4 | Tokens in/out/cached, per call and per run | GenAI usage attributes; cached namespaced | D3 | derived, keep | every run |
| 6 | `fsig.prompt.version_hash` = git SHA of the template, + request and response model ID | model attrs + custom | D2 | derived, keep | every run |
| 7 | `fsig.edit.class`, `.distance` (setpoint fields changed, 0–4), `.proposed_ref`, `.committed_ref` | custom | D1 | refs point at already-redacted records | 100% of edited/rejected/abandoned |
| 8 | `fsig.outcome.verdict` (in-spec at +2h), `.adjudicator` = `line_historian_rule_v3` | custom | D5 | derived | every run |
| 10 | `fsig.cost.amount`, `fsig.cost.price_sheet_version` | custom | D3 | computed at write | every run |
| 1/2 | Shift note text in the prompt, completion rationale | GenAI input/output message attrs | D6 | redaction profile `plant-pii-v2` strips worker names and badge IDs **before export**; text retention 30 days, structure kept | 100% of exceptions, 5% clean |

Row 6 was the cheapest and the most load-bearing: one git SHA per run. Without it, a weekly
prompt edit and a model rollout are indistinguishable in the pass-rate series forever.

## 3. The edit-delta capture point

The interface change the spec forced: Discard must write. Today it writes nothing, so a
fifth of all proposals — the fifth engineers silently walk away from — would have been
invisible, and the clean-accept rate would have been computed over the survivors.

| Class | Fires when | Was it wired before this spec? |
|---|---|---|
| `clean_accept` | Commit with 0 fields changed | yes, implicitly |
| `minor_edit` | 1 field changed | no |
| `major_edit` | ≥2 fields changed | no |
| `rejected` | Discard pressed | **no — added** |
| `abandoned` | drawer closed, no action, 30 min timeout | **no — added** |

Denominator rule: every clean-accept figure is reported `n reviewed / N total`.

## 4. Sampling

100% errored, 100% below the confidence threshold, 100% edited/rejected/abandoned, 100%
for the first N = 200 runs after any new prompt hash or model ID, **5%** of clean-accept
runs on an unchanged prompt and model. Head-based, keyed on session ID.

The 5% was argued down from "sample everything at 20%". At L1 the clean-accept runs carry
the least information per row and the most retained text, and text retention is the line
item the plant's security review will ask about.

## 5. Tenant isolation

Partition on `fsig.tenant.id`. Raw redacted text: the named on-call engineer for that
plant only. Derived numbers: the whole team. Cross-tenant aggregation: **YES on anonymised
derived numbers only**, citing the pooled-use line of the signed clause — and enforced at
the query layer, because the clause does not cover pooled raw text.

## 6. Deleted

| Field proposed | Decision | Why deleted |
|---|---|---|
| Thumbs-up / thumbs-down widget on each proposal | none | Opinion, 0.1 on the ladder. It cannot promote autonomy — D1 runs on the commit diff at 0.7 — and no other decision moves on it. Deleted rather than logged. |
| Full raw shift-note text, indefinite retention | none beyond D6, which the 30-day window already serves | Retention with no payoff; a liability in the security review and under the clause |

## 7. Dry-run

| Consumer question | Answerable? | From |
|---|---|---|
| `trace-to-interview`: what did engineers do instead of telling us? | YES | rows 1, 2, 3 — plus `rejected` and `abandoned`, which are the richest rows in the set |
| `refine-flywheel`: has clean-accept held above its gate, on what denominator? | YES | row 7, reported `n reviewed / N total` |
| `metrics-that-matter`: cost per committed setpoint, to the cent? | YES | rows 4 and 10 ÷ row 7 class `clean_accept` + `minor_edit` + `major_edit` |
| `guardrail-design`: which failure mode, at what confidence, on which tool call? | **NO at first pass** | row 3 had latency and error but no confidence value; `fsig.confidence` added as row 11 for D4 |

One NO is the expected result of a real dry-run. The missing confidence field was found
here, before launch, at the cost of one attribute — not in month four at the cost of a
quarter.

## What the numbers looked like at week 4 of the pilot

- Cost per committed setpoint: **$0.41** `[Fact, money moved 1.0 — metered charge, computed at write]`
- Clean-accept: **62%**, denominator `418 reviewed / 511 total` `[Fact, behaviour 0.7]`
- The 93 excluded runs: 71 `abandoned`, 22 `rejected` `[Fact, 0.7]` — invisible under the original build
- Miss rate moved from 4% to 7% in week 3; `fsig.prompt.version_hash` attributed it to a template edit, not the model release the same week `[Fact, 0.7]`

That last line is the whole argument for row 6. Without one git SHA per run, the honest
answer in week 3 would have been `[Assumption]`, and the rollback decision would have been
made on a guess.
