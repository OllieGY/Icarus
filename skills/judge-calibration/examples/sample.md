> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Foundry Signal's shift-brief judge

Foundry Signal builds a factory copilot. Each shift start it produces a **shift brief**: the overnight anomalies, the root-cause subsystem, and a first action for the line engineer. The team already has a 120-case golden set and a rubric. They have been scoring new builds with a model judge for two months and quoting "our eval pass rate" in their pilot reviews.

## Input the team brought

"We've got a judge running on the golden set. It says we're at 91% and the last build looked better than the one before. Can we trust it? We want to put the number in the pilot report."

Available evidence, as stated:
- The judge has been run on the 120-case golden set weekly for 8 weeks. [Fact]
- No human has ever labelled the golden set for these criteria independently. [Fact]
- The judge's own average self-reported confidence is 8.6/10. [Fact — and it is opinion, 0.1]
- The judge uses the same model family as the copilot under test. [Fact]
- Maintenance work orders record the closed root-cause subsystem for every event. [Fact]

## The challenge, before anything is scored

The 91% is not a result. It is an unmeasured instrument's reading, and the judge's 8.6/10 confidence in itself sits on the bottom rung (0.1) no matter how many times it is re-run — fifty agreeing runs are fifty opinions, not one measurement. The number cannot go in the pilot report until it has been checked against a human. What would change this view: blind human labels on a stratified set and a TPR/TNR pair per criterion. Nothing else.

## 1. What is being judged

**Unit:** one shift brief for one overnight event.
**Golden set:** 120 cases, v3, built by `dataset-builder` from work orders and telemetry.
**Rubric as it stands, verbatim:** "Rate the brief 1–5 on accuracy, usefulness and tone."

## 2. Criteria decomposition

| ID | Criterion (binary claim) | Observable against | Human-human agreement | Keep / KILL |
|---|---|---|---|---|
| C1 | The brief names exactly one root-cause subsystem | the brief text | 1.00 | KEEP |
| C2 | The named subsystem matches the closed work order | the work order | 0.95 | KEEP |
| C3 | The proposed first action is executable by a line engineer without supervisor sign-off | the plant permission matrix | 0.93 | KEEP |
| C4 | Every numeric reading cited appears in the source telemetry window | the telemetry export | 0.98 | KEEP |
| C5 | The brief is useful and well-written | — | **0.61** | **KILL** |

C5 fails three tests at once: not atomic (two claims), not observable (no source record), and not reproducible — two engineers agreed on it only 0.61 of the time. That is not a hard judging problem, it is a broken criterion, and 0.61 is the ceiling any judge could reach against it. It moves to a human-only list: one engineer reads 10 briefs a month for readability. The 1–5 scale is not replaced with another 1–5 scale; the average is thrown away.

## 3. Calibration set

44 items drawn from the 120, stratified by label rather than by production rate.

| Requirement | Floor | Actual |
|---|---|---|
| Total | ≥30 | 44 |
| Human-PASS / Human-FAIL per criterion | ≥12 / ≥12 | C1 30/14, C2 26/18, C3 28/16, C4 31/13 |
| Near-misses | ≥6 | 10 |
| Hard negatives (fluent, confident, wrong) | ≥6 | 8 |
| Double-labelled blind | ≥10 | 14 |

Two shift engineers labelled independently, on 2026-08-12, **before** the judge ran and without ever seeing a judge verdict. Ties broken by the work order, not by discussion.

## 4. Agreement report

| Criterion | TP | FN | FP | TN | TPR | TNR | Gate |
|---|---|---|---|---|---|---|---|
| C1 names exactly one subsystem | 29 | 1 | 1 | 13 | 0.97 | 0.93 | PASS |
| C2 subsystem matches the work order | 24 | 2 | 6 | 12 | 0.92 | **0.67** | **FAIL** |
| C3 action executable without sign-off | 26 | 2 | 2 | 14 | 0.93 | 0.88 | PASS |
| C4 cited readings in the telemetry window | 29 | 2 | 1 | 12 | 0.94 | 0.92 | PASS |

**Overall accuracy: 0.903** (159 correct of 176 criterion-judgements). This is the number that had to be refused. It is within a point of the 91% the team wanted to publish, and it hides the only thing that matters: C2 — the single criterion that asks whether the brief was *correct* — missed 6 failures in 18. A judge that passes a third of wrong root-cause calls does not have a 90% problem; it has a blind spot in the exact place the product is sold on.

## 5. Diagnosis — rewrite the criterion, not the threshold

All 6 C2 false positives were hard negatives: fluent briefs naming an adjacent subsystem on the same production line. The criterion text read "identifies the root cause", which a plausible-sounding adjacent subsystem satisfies.

Rewritten to: **"the named subsystem string is an exact match for the subsystem field on the work order closed for this event, checked against the plant's subsystem list."**

Re-run on the same 44 items: TP 25, FN 1, FP 1, TN 17 → **TPR 0.96 / TNR 0.94** [Fact, behaviour observed 0.7].

The gate stayed at 0.85. Dropping it to 0.65 would have "passed" C2 and permanently retired the team's ability to detect a wrong root-cause call.

## 6. Bias controls

| Control | Test | Result | Fix | After fix |
|---|---|---|---|---|
| Position swap | 20 pairs scored in both orders; pairs the engineers scored equal | judge picked the first-listed 15/20 | dropped the pairwise prompt; each brief now scored independently against C1–C4 | 10/20 |
| Length control | briefs bucketed short (<120 words) / long (≥120) | judge passed human-FAIL items at 0.44 long vs 0.14 short — it was passing verbose wrong answers | the C2 exact-match rewrite | 0.06 long vs 0.08 short |
| Self-preference | 12 pairs the engineers scored identically, one own-family brief and one other-family | judge passed own-family 11/12 vs other-family 7/12 | judge pinned to a different model family from the copilot | 9/12 vs 8/12 |

Note what the self-preference control is *not*: adding "be impartial" to the judge prompt. That is an opinion-level control and changes nothing you can measure.

## 7. Gate decision + calibration block

**Verdict: CALIBRATED** on C1–C4, after the C2 rewrite and the family swap. All four clear ≥0.85 on both rates.

| Field | Value |
|---|---|
| Judge model ID | the exact snapshot string the provider returned on 2026-08-19, recorded verbatim in the eval config — not the `-latest` alias the team had been using |
| Calibrated on | 2026-08-19 |
| Calibration set | v3-cal-44, 44 items, labelled 2026-08-12 |
| Rates at gate | C1 0.97/0.93 · C2 0.96/0.94 · C3 0.93/0.88 · C4 0.94/0.92 |
| Not automated | C5 readability — human-only, 10 briefs/month |

The team had been pointing at a floating alias for eight weeks. That alone voids the 8 weekly "91%" readings: an alias resolving to "current" is an instrument recalibrating itself in the dark, and none of those scores can be attributed to a known snapshot. They are marked uncalibrated and are not quoted in the pilot report.

## 8. Re-calibration trigger and drift check

Fires a full re-run of §3–§7: judge model ID changes (including a point release); any criterion text changes; the judge prompt template changes; the copilot moves to a new model family; or 90 days elapse — next due **2026-11-17**.

Drift check: one engineer blind-labels 10 fresh briefs each month. More than 2 disagreements fires re-calibration immediately.

## 9. Evidence ledger

| Claim | Rung | Tag |
|---|---|---|
| Judge agrees with blind human labels at TPR 0.96 / TNR 0.94 on C2 after the rewrite | behaviour observed 0.7 | `[Fact]` |
| Work orders carry the closed root-cause subsystem for every event | artefact shown 0.5 | `[Fact]` |
| Two engineers will keep labelling 10 briefs a month | verbal 0.3 | `[Assumption]` |
| "The judge is reliable — it reports 8.6/10 confidence" | opinion 0.1 — **not admissible** | `[Assumption]` |
| The pilot's acceptance clause pays on briefs passing C1–C4 | money 1.0 — this is why the gate is a commercial control | `[Fact]` |

That last row is the one that changes the stakes. The judge is not scoring a dashboard; it is scoring the clause the customer pays against. A 0.67 TNR on C2 was, in money terms, an invoice approved on a third of wrong root-cause calls.

## 10. What the team actually got

Not "91%". A judge pinned to a named snapshot, gated at 0.85 on both rates across four criteria, with one criterion honestly excluded from automation, three bias controls measured rather than asserted, and a trigger that will tell them the day the number stops meaning anything.
