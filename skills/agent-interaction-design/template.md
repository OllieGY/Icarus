# Agent Interaction Spec — <agent / workflow name>

Fill every field. Fill the grid for **one** level: the one that clears admissibility in §2.
A level you cannot evidence is not a level you may spec.

## 1. Inputs (no inputs, no spec)

| Input | Value | Source | Ladder rung + tag |
|---|---|---|---|
| The one action the agent takes | _[verb + object, e.g. "writes the order quantity to the staged file"]_ | — | — |
| Chosen autonomy level (L0–L4) | _[L?]_ | `eval-first-spec` | — |
| Cost of ONE failure, worst mode | _[currency or measured time]_ | `eval-first-spec` | _[money 1.0 / behaviour 0.7 …] [Fact]/[Assumption]_ |
| Value of ONE outcome | _[ ]_ | `eval-first-spec` | _[ ]_ |
| Reversible? | _[fully / partially / not after <event>]_ | workflow | _[ ]_ |
| p95 detection lag (how long before a wrong action is noticed) | _[ ]_ | workflow | _[ ]_ |
| Confidence threshold θ | _[ ]_ | `guardrail-design` | _[derived against observed outcomes? yes/no]_ |

**Stop conditions.** If the cost of one failure is missing, or rests only on opinion (0.1),
stop and ask for it. Do not fill the grid. Do not "default to L1 to be safe".

## 2. Admissibility — is the requested level allowed?

| Level | Test | Met? | Evidence |
|---|---|---|---|
| L0 suggest | always admissible | — | — |
| L1 draft-for-approval | anything irreversible, or cost of one failure > cost of one review | _[Y/N]_ | _[ ]_ |
| L2 act-with-undo | undo restores the prior state AND undo window ≥ p95 detection lag | _[Y/N]_ | _[ ]_ |
| L3 act-and-report | failure detectable + compensable after the fact; cost of one failure ≤ value of one outcome | _[Y/N]_ | _[ ]_ |
| L4 autonomous | measured failure rate ≤ derived acceptable rate over _[N]_ real cycles; cost of one failure ≈ 0 | _[Y/N]_ | _[ ]_ |

**Level specced:** _[L?]_  **Level requested:** _[L?]_
**If they differ, why:** _[the one number that failed the test]_
**Split the action?** _[reversible half → level __ ; irreversible half → level __ ]_

## 3. The grid — fill your level's column only

The other columns are the reference for what each level forces; they are not aspirations.

| Moment | L0 suggest | L1 draft-for-approval | L2 act-with-undo | L3 act-and-report | L4 autonomous |
|---|---|---|---|---|---|
| **Before** — plan, granularity, editable? | Plan *is* the output; no write tool bound | Plan shown at step granularity before the run; plan and inputs editable | Plan collapsed, expandable; edit = cancel and restate | No per-run plan; the standing policy is shown once and is editable | No per-run plan; policy + scope in settings, owner-only change |
| **During** — disclosure, progress, interrupt | n/a — nothing runs | Writes staged, never executed; staged calls named | Every write tool disclosed as it fires; step list maps 1:1 to real calls; interruptible at step boundaries | Writes disclosed in the report, not live; long runs show a step count | Run log only; no live surface |
| **Approval object** — the irreversible gate | none (the human acts) | REQUIRED per write: field-level before/after diff in-surface + the justifying source; approve / edit / reject-with-reason | Only if something irreversible survived §2 — otherwise act now, undo after | none per action; batch report with per-action drill-down + reversal path | none; sampled audit |
| **Confidence** | n/a | Band the draft: ready / check this field / could not determine | Below θ the item drops to L1 | Below θ the item drops to L1 and the abstention is reported | Below θ abstain and page the owner |
| **After** — undo, recovery, capture | none | Committed artefact + the edit captured | Per-action undo, window ≥ p95 detection lag; capture from edit AND undo | Report to a named human inside the detection window | Rate alarm + sampled audit; a reversal is an incident |
| **Latency** | instant | Draft must land inside the pause the user already takes | Act fast, undo cheap | Async by definition — report SLA replaces per-step latency | Throughput + alarm lag |

**Your level, filled concretely:**

| Moment | Spec for _[L?]_ |
|---|---|
| Before | _[what is shown, at what granularity, editable how]_ |
| During | _[which tools disclosed, progress affordance, what is interruptible and where]_ |
| Approval object | _[exactly what is rendered — fields, before, after, source]_ |
| Confidence | _[form: band / reason / abstention. What changes at θ = __ ]_ |
| After | _[undo scope + window, recovery path, capture point]_ |
| Latency | _[p50 / p95 per step + affordance + timeout]_ |

## 4. The approval object, drawn in words

| Element | Content | Visible without leaving the surface? |
|---|---|---|
| What changes | _[field name]_ | _[Y/N]_ |
| Before value | _[ ]_ | _[Y/N]_ |
| After value | _[ ]_ | _[Y/N]_ |
| Why (the source that justified it) | _[record, rule, or row]_ | _[Y/N]_ |
| Blast radius if wrong | _[ ]_ | _[Y/N]_ |

Any `N` above is a defect, not a trade-off.

| Affordance | Actions to reach | Notes |
|---|---|---|
| Approve | _[n]_ | |
| Edit | _[n]_ | must be within ±1 of approve |
| Reject with reason | _[n]_ | reason codes: _[list them]_ |

## 5. Latency budget

| Step | p50 | p95 | Measured or `[Assumption]` | Band | Affordance | Interruptible |
|---|---|---|---|---|---|---|
| _[step]_ | _[ ]_ | _[ ]_ | _[ ]_ | _[<1s / 1–4s / 4–15s / 15–60s / >60s]_ | _[ ]_ | _[Y/N]_ |

**Timeout = 3 × p95, floor 10s:** _[ ]_ → fires the recovery path in §7. A spinner past this
is a defect.

## 6. Correction capture

| Field | Answer |
|---|---|
| Capture event (the ONE moment) | _[e.g. edit-before-commit on the approval object]_ |
| Must be recoverable from it | proposed artefact · committed artefact · the delta · reason code · level + θ in force |
| Where the field list is defined | `trace-instrumentation-spec` — do not write the schema here |
| Actions to approve vs to correct | _[n]_ vs _[n]_ — correction must be ≤ 2× |
| Expected corrections per 100 approvals | _[from the golden-set disagreement rate]_ |
| Alarm | corrections/100 below _[ ]_ ⇒ the surface is suppressing corrections, not the agent improving |

## 7. Recovery paths — the three stall modes

| Stall | What the user sees | Owner | Max time to recovery |
|---|---|---|---|
| Wrong plan | _[interrupt → back to the plan, work so far preserved and editable]_ | _[ ]_ | _[ ]_ |
| Tool failure | _[name the tool, the step, the state left behind, the manual path]_ | _[ ]_ | _[ ]_ |
| Below θ | _[abstain, ask ONE question, rest of the batch keeps moving]_ | _[ ]_ | _[ ]_ |

## 8. Stranger test

Hand a zero-context reader the approval object alone.

| Question | Answerable? | If no, what is missing |
|---|---|---|
| What is about to change? | _[Y/N]_ | _[ ]_ |
| What happens if it is wrong? | _[Y/N]_ | _[ ]_ |
| How do I stop it? | _[Y/N]_ | _[ ]_ |

3/3 or the object is not done. This is a desk check. Book the real session with
`usability-test-protocol`; hand the mocks to `first-mocks`.

## 9. Verdict

**Spec status:** _[SHIPPABLE at L? | BLOCKED — level not admissible | BLOCKED — cost of one failure unevidenced]_

**Kill-line check:** irreversible action at L2+ without an in-surface diff and an undo?
_[none / NAME IT]_ — if named, the spec fails and the level drops.

**What would change the level:** _[the specific observation, at which rung, over how many cycles]_
