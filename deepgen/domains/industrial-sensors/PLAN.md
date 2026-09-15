# Industrial sensors: compile plan

Eight weeks from Amyn confirming the decision to the first eval ledger row. Timings are
`[Assumption]`. Owners are proposed. The plan does not start until the decision gate is PASS;
week 1 is the conversation that gets it there.

## Cadence

| Week | Stage | Skill | Owner | Done when | Metric |
|---|---|---|---|---|---|
| 1 | Confirm the decision, the plant, the expert, the adjudicator | `agent-design` step 1, `tacit-knowledge-interview` step 0 | Amyn, Ollie | Decision in Amyn's words with one instance; a shift booked; an adjudicator named | Decision and expert gates PASS |
| 1 | Band the sources | `yoda-data-sourcing` | Researcher agent, Karan | Every source R/G/P with access path and reality rung; clause-gated rows named | ≥ 1 P row at ≥ 0.5 |
| 1 | Data rights check for plant logs and corrections | `data-rights-clause` | Ollie, counsel | Clause scaffold for the plant; vendor telemetry parked as a separate counterparty | Signable at pilot: yes or no |
| 2 | Shadow one shift: watch-30 / replay-20 / edge-10 | `tacit-knowledge-interview` | Amyn or a studio observer | ≥ 1 fork observed at 0.7; load-bearing judgment named in one line | Rows surviving strike-the-SOP ≥ 1 |
| 2 | Split the SOP | `explicit-vs-tacit-capture` | Analyst agent | E rows written as skills; T rows with cue and condition; placeholders routed back | No judgment folded in an E row |
| 3–4 | Collect artefacts, fix the label schema, label, run the four gates | `dataset-builder` | Analyst agent, adjudicator, Karan | ≥ 20 real golden through all four gates; hold queue owned | Golden ≥ 20, `[Fact]` share ≥ 14 |
| 4 | Kill-screen the digest framing before more expert time | `synthetic-users` | Prototyper agent | Panel grounded in the capture and logs; verdict kill / revise / promote | Confusion signals logged; no "validated" |
| 5 | Write the scoreable spec | `eval-first-spec` | Analyst agent, Amyn | Job line, 20 cases in four bands, L1, per-mode derived rates, CPO to the cent | Coverage of all six modes |
| 5 | Size the guardrails | `guardrail-design` | Analyst agent | Miss and Silent failure placed; τ derived or routed to human; sign-off trigger per high-cost path | No uniform stack |
| 6 | Compile the domain package | `agent-design`, `compound-system-architecture` | Karan, Claude Code | Four memory stores with load trigger and writer; critic on a separate config; swap points named | Package has all six parts |
| 6 | Price it to the cent | `agent-concierge-probe` | Karan | ≥ 5 logged runs; CPO with four components; frontier map | CPO `[Fact]`; red steps named |
| 7 | Ship at L1 behind sign-off; instrument tweak-time | `refine-flywheel` stations 1–2 | Amyn, Karan | Every digest reviewed by the supervisor; clean-accept logged | First trace week archived |
| 8 | First full re-run; first eval ledger row; ledger realised column | `refine-flywheel` station 3, `LEDGER.md` | Critic agent, Steward | Row written; predicted vs realised compared | Loop 2 has run once |

## Where the fixtures already tell us the shape

These are `[Assumption]` from labelled fixtures. They shorten the work; they do not replace it.

- The label schema: input is one suggestion plus the operator's accept / edit / override; true because of what the line did next, an unplanned stop or a clean shift. An engineer's "looks right" is not a label.
- The bands: sensor dropout mid-shift, recalibration step-change that mimics a fault, all lines hot at once (ambient, not a fault), a line with every feed down. These are the edge, adversarial, and must-refuse shapes to go looking for in the real logs.
- The red step: priority-setting when a sensor read is null. Route it to a human by rule at L1; it is a must-refuse case, not a model problem.
- The one thing never to do: bulk the set with a public predictive-maintenance dataset. R band. Measures nothing.

## Domain-specific kill switches

On top of `../../EVALS.md`.

| Switch | Signal | Action |
|---|---|---|
| Vendor lock | The plant's sensor logs turn out to be vendor-held with no clause path | Seed is not held. Stop the compile. Route to `data-rights-clause`; do not build on dashboards. |
| Observer effect | Zero forks in the first shadowed shift | You watched a performance. Book a busier shift or a recording before spending week 2 again. |
| Opinion labels | More than half the artefacts labelled by an engineer's view with no outcome | Hold them. Go get the maintenance log; it is the ground truth. |
| Mentoring-mode starvation | Fewer than 2 expert hours a week actually delivered by week 3 | Expert gate drops to OWED. Re-rank at the monthly review; do not pad with synthetic. |
| Ambient confounder | The agent flags all lines when ambient rises | Golden case for it; lessons.md entry; must pass before L1 ships. |

## Linear-ready tasks

Paste as issues. Team: Icarus. Project: DeepGen / Industrial sensors.

| Title | Owner | Due | Done when |
|---|---|---|---|
| Confirm the one decision with Amyn, with a real instance and the plant | Ollie | W1 | Decision in Amyn's words in `BRIEF.md`; gate PASS |
| Book one shadowable supervisor shift, live or recorded | Amyn | W1 | Date and observer in the brief |
| Name the adjudicator for contested labels | Amyn | W1 | Name in the brief |
| Band every candidate source R/G/P with access path | Researcher agent | W1 | Corpus map filed under `domains/industrial-sensors/` |
| Draft the plant data-rights clause scaffold | Ollie | W1 | Scaffold filed; vendor telemetry parked |
| Run the shadow session and file the tacit capture | Observer | W2 | ≥ 1 observed fork; load-bearing judgment line |
| Split the SOP into E and T rows | Analyst agent | W2 | Ledger filed; E rows as skills |
| Collect first artefact batch (sensor + maintenance logs) | Karan | W3 | Count and provenance logged |
| Label and gate the batch | Analyst agent, adjudicator | W4 | Golden count reported honestly |
| Kill-screen the digest framing on a grounded panel | Prototyper agent | W4 | Verdict filed with lie ledger |
| Write the eval-first spec | Analyst agent | W5 | 20 cases, L1, rates, CPO |
| Size the guardrail stack | Analyst agent | W5 | Spec filed; τ derived or routed |
| Compile the package with a separate critic config | Karan | W6 | Six parts present; kill-line check ticked |
| Run five priced outcomes | Karan | W6 | CPO `[Fact]`; frontier map |
| Ship at L1, instrument tweak-time | Amyn, Karan | W7 | First trace week archived |
| First full re-run and eval ledger row | Critic agent | W8 | Row in `LEDGER.md` realised column |

## What Ollie decides at the week-8 review

Kill, hold, or double down on industrial sensors, with the calibration table open. The five
predictions in `LEDGER.md` are the test. If the domain is behind on three of five, hold and name
the gate that mispredicted. That names the intake revision, not a bigger push.
