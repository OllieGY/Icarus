# DeepGen intake

The intake asks for the details that gate a domain build and nothing else. Every field maps to a
gate, a skill, and a tag. A field that does not change a gate is not on the form.

## What the UI refuses to do

- It never emits a headline score over an empty brief (Rule 4). An empty gate is a question, not a zero.
- It never marks a synthetic or model-generated artefact as a real one.
- It never lets a domain past intake on opinion alone. The demand rung floor is 0.3.
- It never invents the decision. If the fellow cannot name one, the readiness read says so and stops.

## Fields

| # | Field | Why it is asked | Gate it feeds | Hands to | Tag on the value |
|---|---|---|---|---|---|
| 1 | Domain and pod | Names the vertical and the thesis pod it sits under | Ledger row identity | `fellow-path-router` | `[Fact]` |
| 2 | The one decision | "Name one recurring decision your expert gets right that a new hire gets wrong." One sentence. | Decision named | `agent-design` step 1, `explicit-vs-tacit-capture` step 1 | `[Fact]` if the fellow can point at a real instance, else `[Assumption]` |
| 3 | Job line | Who gets what single output, on what trigger, judged pass by what observable condition | Decision named (judged-by clause) | `eval-first-spec` part 1 | as above |
| 4 | Who does it today, how often | The current human, the frequency, the time it takes | Volume band for guardrails, cost-per-outcome value side | `current-state-map`, `bottoms-up-quantification` | `[Fact]` from a log, `[Assumption]` from memory |
| 5 | Demand evidence | Pick the best rung: money moved, behaviour observed, artefact shown, verbal commitment, opinion. Cite the one instance. | Demand rung ≥ 0.3 | `evidence-ladder` | The rung itself |
| 6 | Data sources you hold | Up to six rows: source, what it holds, your guess at band R/G/P, access path, count of artefacts held | Seed exists | `yoda-data-sourcing` steps 2 to 5 | `[Assumption]` until the researcher bands it |
| 7 | Real artefacts you can hand over this week | A number. Independently checkable items, not one document sliced ten ways | Real artefacts held (toward 14 `[Fact]` of 20) | `dataset-builder` step 6 | `[Fact]` once delivered |
| 8 | Expert access | Can a real expert be shadowed doing the real task, live or recorded? Hours per week available for shadowing and labelling | Expert watchable; expert hours | `tacit-knowledge-interview` step 0 | `[Fact]` / `[Assumption]` |
| 9 | Named adjudicator | Who settles a contested label | Clears `hold` rows | `dataset-builder` step 3 | `[Fact]` |
| 10 | Failure modes and cost of one failure | For each of Miss, False alarm, Confidently wrong, Wrong format, Too slow, Silent failure: the cost of one, and the evidence for that cost (incident, regulation, invoice, or opinion) | Cost of failure stated; Catastrophic count | `eval-first-spec` part 3, `guardrail-design` step 2 | Per row |
| 11 | Regulator and deployment | Qatar regulator named, data residency, language, and the global equivalent | Qatar-first and global both hold | Ledger REDESIGN rule | `[Fact]` |
| 12 | First three tasks | The three tasks the agent would run first, each with what "done" looks like | Task layer seeds; golden set coverage | `eval-first-spec` part 2 | `[Assumption]` |
| 13 | Economics | Value of one outcome, and the ceiling for cost per outcome, with the source of each number | Economic gate | `eval-first-spec` part 4, `value-based-pricing` | `[Fact]` from a quote or invoice, else `[Assumption]` |
| 14 | Kill criteria | What would make the fellow stop. One line. | Challenge check | `so-what-stress-test` | `[Assumption]` |

## Readiness read

The UI computes five gate states from the fields. States are PASS, OWED, or BLOCKED. There is no
percentage and no total.

| Gate | PASS when | OWED when | BLOCKED when |
|---|---|---|---|
| Decision named | Field 2 and field 3 filled, and the job line has a judged-by clause | One of the two is filled | Neither |
| Seed exists | At least one source row marked P with an access path and artefact count > 0 | A P row with no access path, or a G row only | Only R rows, or none |
| Expert watchable | Field 8 is yes with hours ≥ 2 | Yes with hours < 2 | No |
| Cost of failure stated | Every mode has a cost with evidence better than opinion | Some modes costed | None costed, or all opinion |
| Demand rung | Field 5 rung ≥ 0.3 with a cited instance | Rung ≥ 0.3 with no citation | Opinion, or empty |

Next action rule: the read names exactly one next step, the skill that runs it, and the gate it
would move. Priority order when several are OWED or BLOCKED: decision, seed, expert, cost, demand.
A brief with all five PASS is "ready for the researcher"; it is never "validated".

## The brief

The UI emits `schemas/domain-brief.schema.json`. The brief carries every field, every tag, the
five gate states, and the next action. The ledger row is derived from it, never typed by hand.

## Where the brief goes

Saved to the artifact's shared store under `briefs/<id>`. Ollie reads them back from the session
(`read_db` on the artifact). Each saved brief is one ledger candidate. A brief is not a ledger
row until the researcher has banded its sources.
