> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Foundry Signal's shift-handover copilot

Foundry Signal ships a factory copilot: at each shift handover it gives the outgoing line
supervisor a ranked list of the ≤5 machines most likely to cause an unplanned stop next shift.
It has been live on two lines for six weeks behind an L1 sign-off gate.

## Input the builder brought

"Operators keep saying the thing is wrong but nobody can say how. Engineering thinks it's a
retrieval problem. We have about 240 shift traces. Which failure do we fix first?"

## 0. Intake

| Question | Answer |
|---|---|
| What is one trace? | One shift handover: the sensor+work-order input window, the full ranked list produced, the timestamp, and what the supervisor did next (accepted / re-ordered / ignored / escalated). [Fact] |
| Window | 6 weeks, two lines. |
| Total available | 240 |
| Sample (N) | 50, systematic — every 5th trace by timestamp across both lines. |
| All traces or flagged only? | ALL. The escalation queue holds 19 traces; those were deliberately **not** used as the sample, because they would have ranked the loud modes and hidden the silent ones. |

Passes the refusal checks: N = 50 ≥ 30, sample is systematic not cherry-picked, and the
human-next-action field exists on every trace so cost can be scored.

## 1. Saturation log

| Batch | Traces | New codes | Running |
|---|---|---|---|
| 1 | 1–10 | 7 | 7 |
| 2 | 11–20 | 3 | 10 |
| 3 | 21–30 | 2 | 12 |
| 4 | 31–40 | 0 | 12 |
| 5 | 41–50 | 0 | 12 |

**Saturation: REACHED at trace 50** — batches 4 and 5 both added 0 new codes.

Note what would have happened at the 30-trace floor: batch 3 was still producing new codes, so
stopping at 30 would have frozen a taxonomy that was still moving.

## 2. Open codes — blind (extract)

The spec was closed. Codes are sentences about specific shifts, not category names.

| Trace ID | Open code |
|---|---|
| FS-2411-0087 | "no warning at all on the bearing that took line 2 down at 04:10" |
| FS-2411-0112 | "blamed press-4, but press-4 was the one that jammed last night, not this shift" |
| FS-2411-0119 | "listed press-4 again — the jam was two shifts ago now" |
| FS-2411-0128 | "root cause said 'coolant starvation', maintenance found a snapped drive belt" |
| FS-2411-0133 | "list came out as raw tag IDs, supervisor had to look each one up" |
| FS-2411-0137 | "nothing produced at all — shift ran with no list, nobody noticed until 06:00" |
| FS-2411-0141 | "supervisor typed 'raise a requisition for the spare seal' into it" |

## 3. Axial codes — 6 modes

Twelve open codes folded into six modes. **Exclusivity test: 10/10 single-assignment** on the
second attempt. The first attempt scored 7/10 because "stale-shift attribution" and
"confidently wrong root cause" both swallowed traces where the machine *and* the cause were
wrong. The boundary was redrawn on the dimension that actually separates them: **which
machine** (attribution) versus **why it will fail** (root cause). Re-run on 10 fresh traces:
10/10.

## 4. Counted and priced — N = 50

| # | Mode | Count | % of 50 | Cost / occurrence | Freq × cost | Exemplar | Tag |
|---|---|---|---|---|---|---|---|
| 1 | Missed rare stop | 4 | 8% | $3,100 — plant downtime ledger line per unplanned stop, money 1.0 | **$12,400** | FS-2411-0087 | [Fact] |
| 2 | Stale-shift attribution | 14 | 28% | $19.80 — 22 min tech time from the work-order log × $54/h loaded, behaviour 0.7 | $277.20 | FS-2411-0112 | [Fact] |
| 3 | Confidently wrong root cause | 11 | 22% | $10.80 — 12 min rework × $54/h, behaviour 0.7 | $118.80 | FS-2411-0128 | [Fact] |
| 4 | Wrong format (raw tag IDs) | 9 | 18% | $2.70 — 3 min lookup, **team estimate, opinion 0.1** | $24.30 | FS-2411-0133 | [Assumption] |
| 5 | Silent no-output | 7 | 14% | $310 — **team's 10%-of-a-stop estimate, opinion 0.1** | $2,170 | FS-2411-0137 | [Assumption] |
| 6 | Out-of-scope ask (requisitions) | 5 | 10% | n/a — not a defect | — | FS-2411-0141 | [Fact] |

**Sum check:** 4 + 14 + 11 + 9 + 7 + 5 = 50 ✅

### n=1 sightings

| Trace ID | What happened | Settles at |
|---|---|---|
| FS-2411-0104 | List arrived 40 min after handover had finished. | Needs ≥2 sightings in a 100-trace sample. `[Hypothesis]` — not a mode. |

## 5. Reconciliation — guessed taxonomy opened

Guessed taxonomy from `eval-first-spec`: Miss, False alarm, Confidently wrong, Wrong format,
Too slow, Silent failure.

| Measured mode | Verdict | Consequence |
|---|---|---|
| Missed rare stop | INSTANCE-OF-GUESSED (Miss) | Spec priced one Miss at $1,200 `[Assumption]`. Ledger says $3,100 `[Fact, money 1.0]`. The derived acceptable rate was computed on a number 2.6× too low and must be re-run. |
| Stale-shift attribution | **NEW** | No box existed. It is not "confidently wrong" — the *cause* is often right, the *machine* is last shift's. No derived acceptable rate, and no golden case in the 20 can fail into it. |
| Confidently wrong root cause | INSTANCE-OF-GUESSED | Rate re-derived on measured $10.80, not the spec's estimate. |
| Wrong format | INSTANCE-OF-GUESSED | Cost is opinion-rung; rank is provisional. |
| Silent no-output | INSTANCE-OF-GUESSED (Silent failure) | Cost is opinion-rung and it is the #2 rank — this is the number to measure next. |
| Out-of-scope ask | NOT-A-DEFECT | The copilot did what it was built to do; supervisors want a requisition raised. → `trace-to-interview`. **Adjusted defect N = 45.** |

### Guessed modes that measured zero

| Guessed mode | Observed | Honest bound |
|---|---|---|
| False alarm | 0 of 50 | Rule of three: true rate below ≈ 3/50 = 6%. Not "does not occur". |
| Too slow | 0 of 50 (the one late list is the n=1 `[Hypothesis]` above, coded to a different mode) | Same bound. |

## 6. Rank — frequency × cost

| Rank | Mode | Freq × cost over 6 weeks | Rank confidence |
|---|---|---|---|
| 1 | Missed rare stop | $12,400 | `[Fact]` — ledger-priced. |
| 2 | Silent no-output | $2,170 | `[Assumption]` — cost is a 0.1 estimate. Instrumenting one quarter's missed handovers against actual stops would settle it, and could move this to rank 1 or to rank 5. |
| 3 | Stale-shift attribution | $277.20 | `[Fact]` — work-order log. |
| 4 | Confidently wrong root cause | $118.80 | `[Fact]`. |
| 5 | Wrong format | $24.30 | `[Assumption]` — cost is a 0.1 estimate, but the rank is last either way. |

**Most frequent mode: stale-shift attribution (28%). Top-ranked mode: missed rare stop.** They
are not the same mode, and the whole point of the rank is that they are not. Engineering's
"it's a retrieval problem" hypothesis maps to modes 2 and 3 — 50% of the sample, 3% of the cost.

## 7. What must be re-derived

| Skill | What this invalidates | Action |
|---|---|---|
| `eval-first-spec` | The a-priori taxonomy and two derived rates | Replace the taxonomy with these six modes. Re-derive acceptable_rate(Miss) on $3,100 not $1,200. Derive a rate for stale-shift attribution, which has none. Add golden cases that can fail into it — the 20-case set currently has zero coverage of the single most frequent mode. |
| `guardrail-design` | The volume axis | Stale-shift attribution was placed **low-cost / low-volume** on estimate; measured at 28% it is low-cost / **high-volume**, which is the quadrant a rule in code owns (never rank a machine whose last fault closed on a prior shift) — not a confidence threshold. |
| `dataset-builder` | — | Seed cases: FS-2411-0087, 0112, 0128, 0133, 0137. |
| `trace-to-interview` | — | Out-of-scope ask, 5 traces — the requisition job. |
| `refine-flywheel` | — | Re-run this pass on the next model release and at 12 weeks. |

## 8. Challenge and kill criteria

- **Gap:** two of six modes are priced on 0.1 estimates, and one of them ranks #2. The rank
  above #3 is provisional until silent no-output is measured against real stops.
- **Kill criterion:** a fresh batch of 10 traces that adds ≥2 new open codes means saturation
  was false and this taxonomy must not replace the spec's.
- **What would change the view:** the measured cost of a missed handover. That single number
  decides whether the first fix is the model or the delivery path.

## What this pass bought

The team came in with "it's a retrieval problem" and 19 escalations. Counting 50 unbiased traces
says: the loudest mode is 28% of the sample and 2% of the cost; the expensive mode is 8% of the
sample; the mode with the largest count **did not exist in the shipped spec**, so nothing in the
eval suite could ever have caught it; and 10% of what everyone called failures were not defects
at all.
