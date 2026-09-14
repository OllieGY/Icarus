# Calibrated Judge Spec — <system under test>

Fill every field. A blank cell is not a pass. Do not report accuracy as a headline, do not read a rate whose minority class is under 12 items, and do not move the gate to meet the judge.

## 0. Preconditions

| Input | Have it? | Source |
|---|---|---|
| Golden set exists and is labelled | _[Y/N]_ | _[from `dataset-builder` — name the set + version]_ |
| Rubric exists | _[Y/N]_ | _[from `eval-first-spec` — quote it verbatim below]_ |
| At least one human available to label blind | _[Y/N]_ | _[who, and their standing to judge this]_ |

If any is N, **stop here**. Name the missing input and route it (`dataset-builder` for the set, `eval-first-spec` for the rubric). Do not invent a calibration set.

## 1. What is being judged

**Unit judged:** _[one output of one system — the unit the spec's job line names]_
**Golden set + version:** _[name, size, date]_
**Rubric as it stands today, verbatim:**
> _[paste it — including the 1–5 scale if that is what exists]_

## 2. Criteria decomposition

Each criterion is one observable binary claim. Human-human agreement is measured on the double-labelled subset (§3) and is the ceiling: kill anything below 0.90.

| ID | Criterion (binary claim) | Binary | Atomic | Observable against | Human-human agreement | Keep / KILL |
|---|---|---|---|---|---|---|
| C1 | _[…]_ | _[Y/N]_ | _[Y/N]_ | _[the output / the source record named]_ | _[0.00]_ | _[KEEP/KILL]_ |
| C2 | | | | | | |
| C3 | | | | | | |

**Killed criteria → human-only review list:** _[criterion, why it was killed, who reads it and how often]_

## 3. Calibration set

| Requirement | Floor | Actual | Met? |
|---|---|---|---|
| Total items | ≥30 | _[n]_ | |
| Human-PASS per criterion | ≥12 | _[per-criterion counts]_ | |
| Human-FAIL per criterion | ≥12 | _[per-criterion counts]_ | |
| Near-misses (fail exactly one criterion) | ≥6 | _[n]_ | |
| Hard negatives (fluent, confident, wrong) | ≥6 | _[n]_ | |
| Double-labelled blind by a 2nd human | ≥10 | _[n]_ | |

**Labelling protocol.** Labellers: _[names/roles]_. Labelled before the judge ran: _[Y/N + date]_. Labellers saw a judge verdict at any point: _[Y/N]_. Tie-break rule: _[…]_.

> If labels were produced by reviewing or confirming judge output, the agreement number below is **void**. Mark it so, and re-label blind.

## 4. Agreement report — per criterion

Never report the overall row without this table beside it.

| Criterion | TP | FN | FP | TN | TPR | TNR | Gate (≥0.85 both) |
|---|---|---|---|---|---|---|---|
| C1 | | | | | _[0.00]_ | _[0.00]_ | _[PASS/FAIL]_ |
| C2 | | | | | | | |
| C3 | | | | | | | |

`TPR = TP / (TP + FN)` · `TNR = TN / (TN + FP)`

**Overall accuracy (diagnostic only, never the headline):** _[0.000]_ — and what it hides: _[name the criterion whose TNR it is masking]_

## 5. Diagnosis of failing criteria

| Criterion | Rate that failed | What the false positives/negatives share | Criterion rewritten to | Re-run TPR / TNR |
|---|---|---|---|---|
| _[Cn]_ | _[TNR 0.00]_ | _[the pattern, read from the actual misses]_ | _[the exact, checkable claim]_ | _[0.00 / 0.00]_ |

Threshold moved: **no**. (If yes, this output is auto-failed.)

## 6. Bias controls

| Control | Applicable | Test run | Result | Fix applied | After fix |
|---|---|---|---|---|---|
| Position swap | _[Y/N — pairwise judging only]_ | _[n pairs, both orders]_ | _[first-listed picked x/n on human-tied pairs]_ | _[…]_ | _[x/n]_ |
| Length control | Y (always) | _[buckets used]_ | _[judge pass rate on human-FAIL items: long x vs short y]_ | _[…]_ | _[x vs y]_ |
| Self-preference | _[Y/N — same family as system under test?]_ | _[n human-tied pairs]_ | _[own-family x/n vs other-family y/n]_ | _[…]_ | _[x/n vs y/n]_ |

## 7. Gate decision + calibration block

**Verdict:** _[CALIBRATED — usable as 0.7 evidence | NOT CALIBRATED — every score it produces is 0.1]_

These four travel as one unit. A rate without its snapshot is not a result.

| Field | Value |
|---|---|
| Judge model ID (exact snapshot string, never `-latest`) | _[…]_ |
| Calibrated on (date) | _[YYYY-MM-DD]_ |
| Calibration set + version | _[…]_ |
| Per-criterion rates at gate | _[C1 0.00/0.00; C2 …]_ |
| Criteria NOT automated (human-only) | _[…]_ |

## 8. Re-calibration trigger and drift check

Any one of these fires a full re-run of §3–§7:

- [ ] Judge model ID changes — including a point release or a silently-rolled alias
- [ ] Any criterion's text changes, or a criterion is added or killed
- [ ] The judge's prompt template changes
- [ ] The system under test moves to a new model family
- [ ] 90 days elapse: next due _[YYYY-MM-DD]_

**Drift check:** _[who]_ blind-labels 10 fresh items every _[cycle]_. More than 2 disagreements → full re-calibration immediately. Scores taken between a trigger firing and re-calibration completing are marked uncalibrated and are not quoted.

## 9. Evidence ledger

| Claim | Rung + score | Tag |
|---|---|---|
| _[e.g. "judge agrees with blind human labels at TPR 0.96 / TNR 0.94 on C2"]_ | behaviour observed 0.7 | `[Fact]` |
| _[the ground-truth records used for labelling]_ | artefact shown 0.5 | `[Fact]` |
| _[any "we'll label it next sprint"]_ | verbal 0.3 | `[Assumption]` |
| _[the judge's own confidence / a vendor benchmark]_ | opinion 0.1 — **not admissible** | `[Assumption]` |

Rungs never stack. A claim's weight is its best rung, never the sum, never the average.

## 10. Next step

- **Calibrated:** hand the block in §7 to `refine-flywheel` with the trigger list in §8. Judge scores may now be cited at 0.7.
- **Not calibrated:** name which criteria failed and whether the fix is a rewrite (§5) or a move to human-only (§2). Do not ship the judge on the failing criteria. Do not quote any score it has already produced.
