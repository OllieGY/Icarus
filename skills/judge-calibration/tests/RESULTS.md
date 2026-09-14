> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Eval log — judge-calibration

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "can we trust the judge"
2. "set up an LLM judge"
3. "our eval scores don't match reality"
4. "how do we score this automatically"
5. "calibrate the grader"

MUST NOT fire (3, name the sibling each belongs to):
1. "Turn our field logs into golden cases and label them" → belongs to `dataset-builder`
2. "Write the v1 spec and the pass/fail line that says what working means" → belongs to `eval-first-spec`
3. "A new model shipped — re-run the eval suite and tell me if we can raise autonomy" → belongs to `refine-flywheel`

## Gates 2–6

| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |

## Coverage of the golden set

| Case | Company | What it tests |
|---|---|---|
| 01 | Larder Labs | clean pass — specifies the calibration without inventing results it does not have |
| 02 | Meridian Grid | must FAIL — the accuracy trap; TPR 0.99 / TNR 0.20 behind a 92% headline |
| 03 | Halcyon Safety | all evidence low-rung — self-confidence, vendor benchmark, informal read, a promise to label |
| 04 | Foundry Signal | subtle impostor — labels collected after the labeller saw the judge's verdict; unchecked self-preference |
| 05 | Larder Labs | edge — a starved TNR denominator (n=4) and a criterion no judge can clear (human-human 0.60) |
