# Industrial sensors: intake run

Run 2026-09-15 on Ollie's call to take industrial sensors first. This is the intake as far as the
hub can take it without the fellow. Every value below that comes from a skill example is a
labelled test fixture, not client data (`[Fact]`: each example file says so in its header). So
nothing here is `[Fact]` about Mentix or Barrier. The brief exists to make the first conversation
with Amyn short.

## Challenge first

"Industrial sensors" is a domain, not a decision. The intake refuses a domain name. Three
candidate decisions sit in the fixtures. One is recommended.

| Candidate decision | Where the shape comes from | Why it ranks where it does |
|---|---|---|
| **A. At each shift handover, which ≤ 5 machines are most likely to cause an unplanned stop this shift, and which sensor reading says so** | `eval-first-spec`, `refine-flywheel`, `dataset-builder`, `compound-system-architecture` fixtures, all Mentix | Richest chain in the hub: a job line with a judged-by clause, a 20-case band spread, an L1 ship, a flywheel. The tacit capture's load-bearing judgment (trust the trend, not the level; the first fault after a change is the change talking) is the override layer this decision needs. **Recommended.** |
| B. For each incoming maintenance work order, fault type, priority, and crew | `agent-concierge-probe` fixture, Mentix | Real red step already named: priority-setting when a sensor read is null. Good second task inside A's domain package, not a separate domain. |
| C. On a rig, hold or proceed on a gas hazard from detector telemetry | `yoda-data-sourcing`, `data-rights-clause`, `guardrail-design` fixtures, Barrier | Telemetry is P but vendor-owned. Clause-gated. Do not start a domain on a seed you do not hold. Park until the clause exists. |

Recommendation: compile one domain package around A, with B as task two inside it. C waits on
the vendor clause.

## The brief, as far as it can be filled

| Field | Value | Tag |
|---|---|---|
| Domain | Industrial sensors: shift-handover machine-risk call | `[Fact]` (the choice) |
| Pod | Infrastructure Intelligence, proposed. Amyn to confirm. | `[Assumption]` |
| Fellow | Amyn / Mentix | `[Fact]` |
| Decision | At each shift handover, decide which ≤ 5 machines the outgoing supervisor should flag for inspection this shift, and which sensor reading justifies each flag. Proposed from fixture; not yet in Amyn's words. | `[Assumption]` |
| Real instance | None held | empty |
| Job line | Who: outgoing line supervisor. Output: ranked list of ≤ 5 machines, each with the triggering reading. Trigger: shift handover. Judged by: the machine that stopped was in the list with the right reading, or the shift was clean and the list said so. | `[Assumption]` (fixture) |
| Who does it today | A line supervisor, by walking the floor and reading trends. Frequency and minutes unknown. | `[Assumption]` |
| Demand evidence | None held above opinion. Mentix is an active fellow venture; that is context, not a rung. | `[Hypothesis]` |
| Sources | See table below | `[Assumption]` |
| Real artefacts this week | 0 confirmed | `[Fact]` |
| Expert access | Unknown. Amyn is in surgical mentoring mode; the plant supervisor is the expert, not Amyn. | unanswered |
| Adjudicator | Unknown | unanswered |
| Failure modes | Miss (a stop not flagged), False alarm, Confidently wrong (wrong line), Wrong format, Too slow (after handover), Silent failure (empty digest read as all-clear). Costs unknown. The fixture's Catastrophic mode is Miss; Silent failure is tightest at L1. | `[Assumption]` |
| Deployment | Qatar plant, regulator, residency, language: unknown. Global equivalent: unknown. | unanswered |
| First three tasks | 1. Draft the handover digest for one shift. 2. Triage one work order to fault, priority, crew. 3. Refuse when a line's feeds are all down. | `[Assumption]` |
| Economics | Value of one avoided stop: unknown. Fixture used ~$900 per stop; not a number to carry. | `[Hypothesis]` |
| Kill criteria | Proposed: no plant will share sensor logs and operator corrections under a signed clause within one quarter. | `[Assumption]` |

### Sources, fellow's guess pending

| Source | Holds | Band guess | Access path | Held today | Compounds |
|---|---|---|---|---|---|
| Plant sensor logs (bearing temp, vibration, hydraulic pressure) | The precursor signal | P | Unknown; plant or vendor | 0 | Yes |
| Operator-correction stream on the copilot | Accept / edit / override per suggestion, plus what the line did after | P | Only if the copilot is live somewhere | 0 | Yes |
| Maintenance log (unplanned stops, causes) | The ground truth for the label | P | Plant records | 0 | Yes |
| Supervisor shadow session | The override cues | P | Needs a watchable shift | 0 | With repetition |
| Detector telemetry (Barrier) | Gas readings by zone | P, vendor-owned | Clause-gated | 0 | Yes, if obtained |
| Public predictive-maintenance datasets | Generic sensor traces | R | Public | n/a | Never golden |

## Readiness read

| Gate | State | Why |
|---|---|---|
| Decision named | **OWED** | A proposed decision with a judged-by clause exists, but not in the fellow's words and with no real instance. The form would show PASS on filled fields; the honest state is OWED until Amyn confirms it. |
| Seed exists | **OWED** | Three P candidates, none with a confirmed access path or a single artefact held. |
| Expert watchable | **BLOCKED** | Unanswered. A supervisor shift must be shadowable, live or recorded. |
| Cost of failure stated | **BLOCKED** | No mode costed on evidence. Fixture magnitudes do not count. |
| Demand rung ≥ 0.3 | **BLOCKED** | Nothing above opinion cited. |

**Next action:** Amyn states the one decision in his own words with one real instance, and names
the plant where it happens. Skill: `agent-design` step 1. Moves: decision. Everything else waits on
that answer, because the seed, the expert, and the cost all live at that plant.

## The questions for Amyn (one conversation, 20 minutes)

1. Which one call does your best supervisor get right that a new one gets wrong, and when did it last happen? (decision, real instance)
2. Which plant, and can we sit behind a supervisor for one shift, or get a recording? Hours a week the plant will give us for shadowing and labelling? (expert)
3. Do you hold any sensor logs, maintenance logs, or copilot correction records today? How many, and who owns them? (seed, artefacts)
4. What did the last unplanned stop cost, and is there a number on paper for it? (cost of failure, value per outcome)
5. Has anyone at the plant paid, used, or shown you something for this? (demand rung)

One question for Satheesh: is there any movement on the detector-vendor clause? If not, C stays parked.

## What changes the read

- Amyn names the decision with an instance: decision → PASS.
- One plant hands over a sample export of sensor plus maintenance logs: seed → PASS, artefacts > 0.
- A shift is shadowable at ≥ 2 h/week: expert → PASS.
- An incident write-up or a downtime invoice for one stop: cost → OWED or PASS.
- A plant paying for the hand-run digest (`concierge-probe`) would take demand to 1.0 in one move.
