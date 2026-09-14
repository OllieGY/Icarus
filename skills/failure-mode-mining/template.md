# Failure Mode Mining — counted taxonomy

Fill every field. Counts must sum to N. No mode without an exemplar trace ID. Do not open
section 5 until sections 2–4 are finished.

## 0. Intake — answer before coding anything

| Question | Answer |
|---|---|
| What is one trace? (fields it must contain, incl. **what the human did next**) | _[input / full output / timestamp / accepted, edited, overrode, abandoned]_ |
| Window the sample covers | _[from — to]_ |
| Total traces available in the window | _[N_total]_ |
| Traces in this sample (N) | _[N]_ |
| How was the sample drawn? | _[random / systematic every kth / all]_ |
| Is this all traces, or only flagged failures? | _[ALL | FLAGGED-ONLY]_ |

**Refusal checks — run now.**

- N < 30 → **stop.** Say how many more traces and over what window. Do not code.
- FLAGGED-ONLY → you may open-code for **discovery only**. Every frequency cell reads
  `not measurable — biased sample`, and section 6 produces **no rank**. Say so in section 7.
- No human-next-action in the trace → costs cannot be scored. Name it as the blocking gap.

## 1. Saturation log

Code in batches of ~10. Stop when **two consecutive batches add no new code**.

| Batch | Traces | New codes this batch | Running code count |
|---|---|---|---|
| 1 | _[1–10]_ | _[n]_ | _[n]_ |
| 2 | _[11–20]_ | _[n]_ | _[n]_ |
| 3 | _[21–30]_ | _[n]_ | _[n]_ |
| … | | | |

**Saturation:** _[REACHED at trace [n] — batches [x] and [y] added 0 new codes | NOT REACHED — batch [x] was still producing new codes at the end of the sample]_

If NOT REACHED, the taxonomy below is **provisional**. Say it in section 7 and do not let it
replace the spec's taxonomy yet.

## 2. Open codes — blind

Close the spec, the roadmap and the bug tracker. One line per trace, **in your own words**, about
**this** trace. Not a category name.

| Trace ID | One-line open code |
|---|---|
| _[ID]_ | _["blamed press-4, but press-4 jammed last night, not this shift"]_ |
| _[ID]_ | _[…]_ |

## 3. Axial codes — ≤8 mutually exclusive modes

| Mode name (workflow language) | Open codes folded into it |
|---|---|
| _[name]_ | _[list]_ |

**Mutual-exclusivity test.** 10 random traces, each assigned to exactly one mode, no tiebreaks.

- Result: _[n]_ / 10 single-assignment.
- If < 10/10: _[which traces double-assigned, which boundary was wrong, what you merged or split, result of the re-run on 10 fresh traces]_

A taxonomy that has not passed 10/10 cannot be counted. Fix it before section 4.

## 4. Counted and priced

N = _[N]_. Counts must sum to N.

| # | Mode | Count | % of N | Cost / occurrence (source + rung) | Freq × cost | Exemplar trace ID | Tag |
|---|---|---|---|---|---|---|---|
| 1 | _[name]_ | _[n]_ | _[%]_ | _[$X — source, money 1.0 / behaviour 0.7 / opinion 0.1]_ | _[$]_ | _[ID]_ | _[Fact/Assumption]_ |
| 2 | | | | | | | |

**Sum check:** _[Σ counts]_ = _[N]_ ✅ / ❌

### n=1 sightings — hypotheses, not modes

| Trace ID | What happened | Sample size that would settle it |
|---|---|---|
| _[ID]_ | _[…]_ | _[n]_ `[Hypothesis]` |

## 5. Reconciliation — open the guessed taxonomy now

Guessed taxonomy source: `eval-first-spec`, _[date / doc]_.

| Measured mode | Verdict | Consequence |
|---|---|---|
| _[name]_ | NEW | No derived acceptable rate, no golden case can fail into it. Both missing from the spec. |
| _[name]_ | INSTANCE-OF-GUESSED (_[guessed mode]_) | Guessed cost-of-one-failure was _[$X]_, measured _[$Y]_ → rate must be re-derived. |
| _[name]_ | NOT-A-DEFECT | → `trace-to-interview`. Removed from defect counts; adjusted defect N = _[n]_. |

### Guessed modes that measured zero

| Guessed mode | Observed | Honest bound |
|---|---|---|
| _[name]_ | 0 of _[N]_ | rule of three → true rate below ≈ 3/_[N]_ = _[%]_. Not "does not occur". |

## 6. Rank — frequency × cost

Defect modes only. Rank on freq × cost, **not** on count.

| Rank | Mode | Freq × cost over window | Rank confidence |
|---|---|---|---|
| 1 | _[name]_ | _[$]_ | _[Fact — cost measured | Assumption — cost is an estimate; [what number would settle it]]_ |

**Most frequent mode:** _[name]_ . **Top-ranked mode:** _[name]_ . _[Say explicitly if they differ.]_

## 7. What must be re-derived — the backwards list

| Skill | What this taxonomy invalidates | Specific action |
|---|---|---|
| `eval-first-spec` | The a-priori taxonomy | Replace it. Re-derive acceptable_rate for _[modes]_ on measured cost-of-one-failure. Add golden coverage for every NEW mode. |
| `guardrail-design` | The volume axis of the cost × volume matrix | Re-place _[modes]_ with measured volume; _[mode]_ was guarded as rare and measured _[%]_. |
| `dataset-builder` | — | Seed cases: _[exemplar trace IDs]_. |
| `trace-to-interview` | — | NOT-A-DEFECT modes: _[names]_. |
| `refine-flywheel` | — | When this pass re-runs: _[cadence]_. |

## 8. Challenge and kill criteria

- **Gap in this analysis:** _[sampling window, missing field, cost column rung…]_
- **Kill criterion:** a fresh batch of 10 traces that adds ≥2 new codes means this taxonomy is not saturated and must not replace the spec's.
- **What would change the view:** _[the one measurement]_

## 9. Kill-line check

- [ ] Every mode has a count, and counts sum to N
- [ ] ≤8 modes
- [ ] Exclusivity test 10/10
- [ ] Every mode has one exemplar trace ID
- [ ] No mode at n=1 in the taxonomy
- [ ] Open codes in section 2 are sentences about traces, not category names
- [ ] If the cost column is entirely opinion (0.1), the rank is marked `[Assumption]` and said out loud
- [ ] Section 7 names what must be re-derived
