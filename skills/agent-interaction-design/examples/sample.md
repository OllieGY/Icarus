> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Larder Labs, weekly replenishment exceptions

## What the builder brought

"Our replenishment agent proposes order-quantity overrides for the exception SKUs each week
— about 120 per store-week. Right now the planner approves every row and it's miserable.
Can we just let it act and give them an undo? How much should the agent do on its own?"

Evidence on the table, as stated:

- Level L1 chosen in `eval-first-spec`, on a failure taxonomy with three modes. [Fact]
- Cost of one failure, worst mode (over-order on a chilled SKU): £38 per case written off,
  from 40 write-offs invoiced last quarter. [Fact] — money moved, 1.0
- Value of one outcome: £61 of avoided stockout margin per corrected exception, from the
  concierge run. [Fact] — behaviour observed, 0.7
- The staged order file is sent to suppliers by EDI at the Wednesday 16:00 cutoff. [Fact]
- An over-order is noticed at delivery: p95 detection lag 7 days. [Fact]
- θ = 0.82, derived in `guardrail-design` against outcomes on the 20-case golden set. [Fact]
- Per-exception latency measured over 400 runs: p50 1.9s, p95 11s. [Fact] — behaviour, 0.7
- "The planners have said they'd be fine with it just running." [Fact that they said it] —
  verbal commitment, 0.3

## 1. Inputs — what passes and what does not

The cost of one failure is money moved (1.0) and the latency numbers are measured (0.7), so
the spec can proceed. The autonomy ask does not come with it: "planners said they'd be fine
with it running" is a verbal commitment (0.3). It buys nothing above L1, and three planners
saying it is still 0.3 — rungs do not stack.

## 2. Admissibility — the L2 ask fails on one number

| Level | Test | Met? |
|---|---|---|
| L1 | irreversible action present (the EDI send) | YES |
| L2 | undo window ≥ p95 detection lag (7 days) AND undo restores prior state | **NO** |
| L3 | failure compensable after the fact | NO — the case is delivered, chilled, and written off |
| L4 | measured failure rate over N unattended cycles | NO — zero unattended cycles exist |

L2 fails on arithmetic, not taste. The undo window would have to be 7 days to cover the
detection lag, and after 16:00 Wednesday there is nothing to undo at all: the file is gone.

**But the ask is not wrong — the action is.** Splitting it by reversibility resolves it:

| Half of the action | Reversible? | Level |
|---|---|---|
| Write the override into the staged file | Yes, until 16:00 Wednesday | **L2 act-with-undo** |
| Send the file by EDI at cutoff | No | **L1 draft-for-approval**, one approval object over the whole file |

This is the answer to "approving 120 rows is miserable": 119 of the 120 interactions move to
L2 and stop asking. One gate remains, where the irreversibility actually is.

## 3. The grid, filled

| Moment | Spec |
|---|---|
| **Before** | Staged run (L2): plan collapsed to one line — "120 exceptions, 3 stores, cutoff Wed 16:00" — expandable to the per-store list. Cutoff send (L1): the plan is the file itself. |
| **During** | Each override disclosed as it is written, streamed per exception with the SKU named. Interruptible between exceptions; interrupting keeps everything already staged. Internal reads (stock, sales history) shown on demand only; every write shown always. |
| **Approval object** | At cutoff, one object over the file: a per-row diff — SKU · system quantity · proposed quantity · the demand signal that justified it · £ exposure if wrong — rendered in the planner's queue, not linked to the ERP. Per-row edit is one click. There is no Approve All without the rows visible. |
| **Confidence** | No percentages. Rows are banded: **ready** (≥ 0.82), **check this** (below 0.82, pre-opened in the diff), **could not determine** (agent abstained, row left at system quantity with one question attached). |
| **After** | Undo per override, any time before 16:00 Wednesday — window 3 days vs a 0-second post-send window, which is exactly why the send stays at L1. Undo reverts only the agent's row, never a planner edit made after it. |
| **Latency** | p50 1.9s, p95 11s per exception → the 4–15s band → stream partials, name the current SKU, interruptible at each row. Timeout 33s (3 × p95) fires the tool-failure path. |

## 4. Correction capture

Capture event: **edit-before-commit on the approval object**, plus every pre-cutoff undo.
Recoverable from it: proposed quantity, committed quantity, the delta, the reason code, and
that the row was at L1 with θ = 0.82. The field schema is `trace-instrumentation-spec`'s
job, not this spec's.

Correction cost test: approve = 1 action, edit = 1 action (inline number field). Inside the
2× bar. Had the edit required opening the ERP, corrections would have gone to near zero and
`refine-flywheel` would have been fed an accept rate instead of a gradient.

Alarm: the golden set measured an 18% disagreement rate. If live corrections fall below
18 per 100 approvals, investigate the surface before congratulating the model.

## 5. Recovery paths

| Stall | What the planner sees | Max to recovery |
|---|---|---|
| Wrong plan | "Stop" returns to the exception list with the 47 staged overrides intact and editable. Nothing is discarded. | immediate |
| Tool failure | "Stock feed unavailable — stopped at SKU 4411 of 120. 46 overrides staged, 74 untouched. Retry, or work the rest from the queue." Never "something went wrong". | one click to retry |
| Below θ | Row abstains, sits at system quantity, carries one question ("no sales history since the range change — use last year?"). The other 119 keep moving. | end of run |

## 6. Stranger test

A zero-context reader, given only the cutoff approval object: *what changes* — yes, per-row
before/after quantities. *What if it is wrong* — yes, the £ exposure column. *How do I stop
it* — yes, reject-with-reason on any row holds that row at system quantity.

3/3. Book the live session with `usability-test-protocol`; the screens go to `first-mocks`.

## 7. Verdict

**SHIPPABLE — staged edits at L2, cutoff send at L1.**

Kill-line check: no irreversible action sits at L2+ without a diff and an undo. The EDI send
was the only irreversible action and it kept its gate.

What would change the level: the send moves to L2 only if the supplier offers a recall
window, or to L3 only after N unattended cycles with the measured failure rate at or under
the rate derived in `eval-first-spec`. Neither is available on 0.3 evidence, and no amount
of planner enthusiasm will supply it.
