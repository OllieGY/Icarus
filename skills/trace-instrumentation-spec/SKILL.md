---
name: trace-instrumentation-spec
description: >-
  Returns the trace instrumentation spec you sign off BEFORE launch: every span and
  attribute the product must emit, mapped to the OpenTelemetry GenAI semantic conventions
  so it is vendor-neutral, each row naming the decision it informs and the sibling skill
  that consumes it — inputs/outputs with write-time redaction, per-tool-call name, args,
  result, latency and error, tokens in/out/cached, latency per step and end to end, a
  pinned prompt-version hash and model ID, the human-edit delta, outcome verdict and
  adjudicator, tenant-isolated session and actor IDs, and cost computed at write time.
  Fires on "what should we log", "set up observability", "we can't measure what happened",
  "what traces do we need", "instrument the agent". NOT for reading traces you already
  have (use trace-to-interview), NOT for choosing which metric matters (use
  metrics-that-matter), NOT for the post-launch loop itself (use refine-flywheel), NOT for
  the contractual right to the exhaust (use data-rights-clause).
metadata:
  type: generator
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Trace Instrumentation Spec

## What it does

Takes a v1 about to ship and returns the field register it must emit from its first production run: `template.md`, filled. One row per field — the OpenTelemetry GenAI attribute it maps to, the decision it will later inform, the sibling skill that consumes it, its write-time redaction and retention rule, its sampling class. It ends with a dry-run: five questions your downstream skills will ask, answered from the spec alone. An unanswerable question is a missing field; the spec is not signed until it can answer.

It refuses three things: to recommend an observability vendor (the spec is vendor-neutral by construction, which is the point of building on the conventions); to keep a field that informs no decision ("log it just in case" is deleted, not kept); and to reconstruct a number from a window where the field was never emitted — that reconstruction is `[Assumption]`, and nothing built on it rises above that rung.

## The reframe

Instrumentation is treated as plumbing: ship, wire the tracing SaaS, look at dashboards later. That ordering is why teams discover in month four that the field they need was never emitted and the first three months are unreadable.

Instrumentation is a product decision made before launch. A measurement you did not emit is not a measurement you can reconstruct — you can re-run a model, you cannot re-run last quarter's users. So the register is signed off alongside the `v1-launch-bar` gates, and it runs backwards: name the decision first, derive the field second. A field that informs no decision is not neutral — retained input and output text is a live liability under the `data-rights-clause` retention term and the first thing a buyer's security review asks about. The generic version of this task maximises what you capture. This one minimises it, and makes every surviving field prove its decision.

## When to use / When NOT

Use it after `eval-first-spec` has named the job, the failure taxonomy and the autonomy level, and before the `v1-launch-bar` go/no-go. Trigger phrases: "what should we log", "set up observability", "we can't measure what happened", "what traces do we need", "instrument the agent". If the job and autonomy level are not settled, the backward pass has nothing to start from — route to `eval-first-spec` and stop.

| If you want… | Use instead |
|---|---|
| To read traces you already hold and recover the discovery question behind a behaviour | `trace-to-interview` (08). That consumes this spec's output; it does not produce it. |
| To choose which numbers matter — North Star, retention, the cost-per-outcome scorecard | `metrics-that-matter` (08). It picks the metric; this guarantees the metric is computable at all. |
| To stand up the post-launch ship→observe→learn→refine loop and the autonomy ratchet | `refine-flywheel` (08). It reads tweak-time from these fields; without the edit-delta row it has nothing to read. |
| The contractual right to retain, derive from and train on the exhaust | `data-rights-clause` (06). It wins the right; this decides what is worth having the right to. |
| Where the human sign-off sits and at what confidence threshold | `guardrail-design` (07). It sets the threshold; this emits the confidence value the threshold is applied to. |

## Method

Fill `template.md`. Seven steps, in order. Steps 1 and 7 are the same list seen from both ends; if they disagree, the register is wrong.

### Step 1 — Work backwards from decisions, never forwards from fields

List the decisions the team will make in the two quarters after launch. Write each as the question someone will actually ask, then derive the minimum field that answers it. Never start from "what can we log".

| Decision to be made | Question it is asked as | Field it forces |
|---|---|---|
| Promote or hold autonomy | "Is the customer still editing what we propose?" | human-edit delta |
| Accept or roll back a model release | "Did the pass rate move because of the model, the prompt, or the product?" | prompt version hash + model ID, pinned per run |
| Price the next pilot | "What does one accepted outcome cost us?" | tokens per call and per run, cost at write time |
| Put a guardrail somewhere | "Which step fails, and how often?" | per-tool-call name, args, result, latency, error |
| Renew or churn an account | "Did this account get the outcome it bought?" | outcome verdict + who adjudicated it |

A field that reaches the register with no decision in this column is deleted, and the deletion is stated in the artifact — a deleted field is a result, not an omission.

### Step 2 — Map every field to the semantic conventions

Build on the OpenTelemetry GenAI semantic conventions so the spec outlives your vendor choice. Two rules. **Pin the semconv version in the spec header** — those conventions are experimental and attribute names have moved between releases, so any name you write down is `[Assumption]` until checked against the pinned version; never quote one from memory into a signed document. And **anything not in the conventions goes in one namespace you own**, e.g. `<vendor>.prompt.version_hash` — never invent a `gen_ai.*` name, it collides the day the real one lands.

The canonical rows, with the consumer named in the same row:

| # | Field | Maps to | Consumer |
|---|---|---|---|
| 1 | Input, redacted | GenAI input-messages attribute | `trace-to-interview` |
| 2 | Output, redacted | GenAI output-messages attribute | `trace-to-interview` |
| 3 | Per tool call: name, arguments, result, latency, error | one child span per call + the GenAI tool attributes + `error.type` | `guardrail-design` |
| 4 | Tokens in / out / cached, per call AND per run | GenAI usage attributes; cached tokens namespaced if absent from your pinned version | `metrics-that-matter` |
| 5 | Latency per step and end to end | span durations, root span duration | `metrics-that-matter`, `v1-launch-bar` |
| 6 | Prompt version hash + request and response model ID | GenAI request/response model attributes + `<vendor>.prompt.version_hash` | `refine-flywheel` |
| 7 | Human-edit delta | `<vendor>.edit.*` (see step 5) | `refine-flywheel` |
| 8 | Outcome verdict + adjudicator | `<vendor>.outcome.verdict`, `.adjudicator`, `.adjudicated_at` | `eval-first-spec`, `refine-flywheel` |
| 9 | Session, actor, tenant IDs | session/conversation id + `<vendor>.tenant.id` + pseudonymised actor | `data-rights-clause` |
| 10 | Cost in currency, computed at write time | `<vendor>.cost.amount` + `<vendor>.cost.price_sheet_version` | `metrics-that-matter` |

Rows 6, 7, 8 and 10 are the ones teams omit. Rows 6 and 7 cannot be backfilled at all.

### Step 3 — Redaction and retention, per field, at write time

Redaction applied at read time is not redaction: the raw text already reached disk, the vendor and the backup. Every text-bearing field gets a rule that runs before export.

| Class | Write-time rule | Retention |
|---|---|---|
| Free-text customer input/output | named redaction profile runs pre-export; record which profile ran | short window, then drop text and keep structure |
| Identifiers (actor, account) | pseudonymise at write with a per-tenant key | as long as the tenant relationship |
| Tool arguments | allowlist the keys you keep; drop the rest | short window |
| Derived numbers (tokens, latency, cost, edit distance) | no redaction needed — this is why they are separate fields | long, they are the compounding asset |

Splitting derived numbers from raw text is what lets the numbers be kept for years under the `data-rights-clause` terms while the text expires in weeks.

### Step 4 — Set sampling, and state the rate

| Run class | Rate | Why |
|---|---|---|
| Errored, or entered a safety mode | 100% | the failure taxonomy is built from these |
| Below the `guardrail-design` confidence threshold | 100% | the low-confidence band is where the threshold is tuned |
| Human edited, rejected, or abandoned the output | 100% | this is the edit-delta signal itself |
| First N runs of any new prompt hash or model ID | 100% until N | attribution needs a dense window around every change |
| Clean-accept, unchanged prompt and model | a stated rate | state it as a number in the artifact, not "sampled" |

Sample at the **head**, keyed on the session ID, so a trace is kept whole or dropped whole. Tail sampling drops exactly the runs you need: the human edit lands minutes after the model span closed.

### Step 5 — Define the edit-delta capture point in the interface

The field most often missing, and the one `refine-flywheel` cannot compute without. It is an interface decision, not a logging one: the capture point is the commit action, and it emits four things.

| Attribute | What it holds |
|---|---|
| `proposed_ref` | pointer to what the system proposed, as proposed |
| `committed_ref` | pointer to what the human actually committed |
| `distance` | the stated distance metric between them, with its unit |
| `class` | `clean_accept` / `minor_edit` / `major_edit` / `rejected` / `abandoned` |

`rejected` and `abandoned` must fire too. A capture point wired only to the save button measures the runs that survived and nothing else; its clean-accept rate is survivorship. Always state the denominator with the rate.

### Step 6 — Tenant isolation and access

Every span carries a tenant ID and is partitioned by it. Name who can read raw text versus derived numbers, and state whether cross-tenant aggregation is permitted — that permission lives in the signed clause, not the tracing config. If the `data-rights-clause` does not grant pooled or derived use, the spec must make pooled queries impossible at the query layer, not merely discouraged.

### Step 7 — Verify by dry-run

Answer one real question from each downstream skill using the register alone, and write the answers into the artifact. An unanswerable question is a missing field; it goes back to step 1 with its decision named.

| Ask it as | From |
|---|---|
| "Which behaviour pattern is this, and what did the user do instead of telling us?" | `trace-to-interview` |
| "Has clean-accept held above its gate for N cycles, on what denominator?" | `refine-flywheel` |
| "What is cost per accepted outcome, to the cent, this month versus last?" | `metrics-that-matter` |
| "Which failure mode fired, at what confidence, on which tool call?" | `guardrail-design` |
| "Sample 50 runs to saturation and open-code them — is the trace self-contained enough to code without opening the product?" | `failure-mode-mining` |

## Evidence standard

The register is where the evidence ladder becomes a schema. A field is worth the rung of the act it records, not the rung of the dashboard that renders it.

| What the field records | Rung | Weight |
|---|---|---|
| The metered charge actually billed for the run | Money moved | 1.0 |
| The human's committed edit, a rejection, an abandon, a tool call that ran | Behaviour observed | 0.7 |
| A file or document the user brought and attached | Artefact shown | 0.5 |
| An in-product "I'd accept this next time" | Verbal commitment | 0.3 |
| Thumbs-up, star rating, the model's own confidence score, an LLM judge's self-grade | Opinion | 0.1 |

Rungs never stack: five hundred thumbs-up is 0.1, not 50. A claim's weight is its best rung, never the sum and never the average — so a satisfaction field never substitutes for the edit delta, however many rows it has.

**The reconstruction rule.** A field not emitted at the time cannot be recovered above `[Assumption]`, and a metric built on it inherits that ceiling permanently. Tag every claim `[Fact]`, `[Assumption]` or `[Hypothesis]`: a field you are emitting is `[Fact]` from launch; a number rebuilt from summary emails is `[Assumption]` whatever the dashboard shows.

**Kill line.** The spec fails, and must be returned rather than signed, if any one holds: the prompt version hash or model ID is not pinned per run; the human-edit delta has no interface capture point, or does not fire on reject and abandon; the outcome verdict has no named adjudicator; any field survives with no decision in its row; redaction is applied at read time; a clean-accept rate is quoted without its denominator.

## What good looks like

Foundry Signal, factory copilot, about to start a paid pilot. Extract of the register:

| Field | Decision | Consumer | Write rule | Sampling |
|---|---|---|---|---|
| `edit.class` + `edit.distance` (tokens changed) | promote L1→L2 or hold | `refine-flywheel` | none — derived | 100% of edited, rejected, abandoned |
| `prompt.version_hash` (git SHA of the template) | attribute a score move | `refine-flywheel` | none | every run |
| `cost.amount` + `cost.price_sheet_version` | pilot price floor | `metrics-that-matter` | none | every run |
| operator note on the exception | which unmet need to build next | `trace-to-interview` | redaction profile `plant-pii-v2` pre-export, 30-day text retention | 100% of exceptions, 5% of clean |

Dry-run: cost per accepted outcome $0.41 `[Fact, 1.0 — metered charge]`; clean-accept 62% on a denominator of 418 reviewed of 511 total `[Fact, 0.7]`, with the 93 auto-committed runs excluded and said so. Deleted in step 1: a thumbs-up widget — no decision moved on it, and at 0.1 none could have.

## Gotchas

**Adding the prompt hash "later".** A hash that starts in month two makes months zero and one permanently unattributable. When the pass rate moves in month three, no analysis recovers whether the prompt, the model or the customer changed. Rows 6 and 7 are pre-launch rows or they are nothing.

**Tail sampling.** The keep/drop decision is made when the root span closes; the human edit arrives ten minutes later. Tail-sampled products systematically drop their own edit-delta signal. Head-sample on session ID.

**Confidence logged as outcome.** The model's self-reported confidence is a self-assessment: 0.1, floor, never above. Useful as the value `guardrail-design`'s threshold is applied to; never a verdict, never written into the outcome row.

**Cost computed at read time.** Multiplying last quarter's tokens by today's price sheet reprices history silently and hides the inversion `metrics-that-matter` watches for. Compute at write; stamp the price sheet version alongside.

**Run-level tokens only.** A run with nine tool calls and one token total cannot say which step burns the budget. Tokens go on the call and on the run.

**"Log everything, we'll figure it out later."** The liability position, not the safe one: un-needed input and output text is retention you defend in the buyer's security review and account for under the `data-rights-clause`. Deleting a field is a finding.

**Redaction as a read-time filter.** If the dashboard masks it but the store holds it, it was never redacted — it was hidden from you and from nobody else.

**Edit delta on the reviewed subset.** Above L2 most runs are not reviewed, so clean-accept describes the reviewed minority. State the denominator every time, and define a forced shadow-review sample if you need the rate to mean anything.

## Related skills

| Skill | Handoff |
|---|---|
| `eval-first-spec` (07) | Upstream. Supplies the job, the failure taxonomy and the autonomy level that step 1 works backwards from. No spec, no register. |
| `guardrail-design` (07) | Sets the confidence threshold and sign-off point; this emits the confidence value and the per-tool-call error rows it needs. |
| `v1-launch-bar` (07) | The register is signed off alongside its go/no-go gates. Its "corrections mechanism is wired" gate is row 7 of this register. |
| `data-rights-clause` (06) | Owns the contractual right to retain, derive and train. This decides what is worth retaining and for how long. Run the clause first. |
| `refine-flywheel` (08) | Primary consumer. Reads rows 6, 7 and 8 to run the autonomy ratchet. |
| `trace-to-interview` (08) | Consumer. Reads rows 1, 2 and 3 as interviews that already happened. |
| `metrics-that-matter` (08) | Consumer. Reads rows 4, 5 and 10 for cost-per-outcome and the retention scorecard. |

Supersedes: none.
