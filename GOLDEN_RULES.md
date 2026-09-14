# Icarus Golden Rules

The method every skill and agent in this hub runs on. If a skill's output breaks a rule here, the output is wrong — not the rule.

**Provenance.** Consolidated from `The-Utopia-Studio/skills` at commit `edc6b9f1`, folder `skills/product/`: `ICARUS.md` (flow and graduation gates), the `tests/rubric.json` shared by all 45 Icarus skills (dimensions and auto-fails, byte-identical across the set), `evidence-ladder/SKILL.md` (the ladder), `CONTRIBUTING.md` (the authoring bar), and `skills/meta/market-skill-ingestion/SKILL.md` (the ingestion rule). Nothing here is invented. Where the source says it in one line, that line is quoted.

---

## Rule 1 — Evidence is weighted by what people did, not what they said

One ladder, used identically everywhere in the hub.

| Rung | Weight | Counts only when | Common impostor → downgrade to |
|---|---|---|---|
| Money moved | 1.0 | cash or budget actually changed hands — invoice paid, deposit, pre-order, paid pilot | a signed LOI or quote with no payment → Verbal 0.3 |
| Behaviour observed | 0.7 | you saw them do it (or hold the logs); it cost them time, effort, or switching; unprompted | a self-reported routine you did not witness → Verbal 0.3; a free one-click sign-up → Verbal 0.3 |
| Artefact shown | 0.5 | they showed you a thing THEY made or use — a spreadsheet, a workaround, their permit log | a reaction to a mockup YOU made → Opinion 0.1 |
| Verbal commitment | 0.3 | a specific promise about the future — "I'd pay $X", "we'd switch by Q3" | vague praise ("great idea", "we'd love that") → Opinion 0.1 |
| Opinion | 0.1 | a view, a feeling, a prediction — "I think", "everyone needs this" | — floor: never below, never above |

Three rules on top of the table:

1. **Rungs do not stack.** Fifty people saying yes is still 0.3. The only thing that raises a claim is one signal at a higher rung, not more signals at the same one.
2. **A claim's weight is its best rung, never the sum.** Three verbal yeses is 0.3, not 0.9.
3. **Never average the pile.** A mean lets one payment launder a stack of opinion. Report the load-bearing claim's weight plus a coverage tally.

Scoring an opinion above 0.1 fails the skill.

## Rule 2 — Tag every empirical claim

`[Fact]`, `[Assumption]`, or `[Hypothesis]`. Untagged guesses presented as facts are an auto-fail.

## Rule 3 — Challenge before you help

Weak input gets named, not softened. Every skill must push back, name the gaps and kill criteria, and say what would change its view. Flattering a weak idea instead of challenging it is an auto-fail.

The five whole-idea questions (`so-what-stress-test`), run silently on anything proposed:

- **So what?** What outcome changes if this works?
- **Who pays?** Buyer, budget owner, why now?
- **What's the wedge?** Smallest thing that forces adoption.
- **What's the moat?** Data rights, workflow lock-in, distribution, regulation, domain edge.
- **What kills it?** Top three failure modes, and the fastest way to know.

No question passes on opinion alone.

## Rule 4 — Never fabricate

No specific number, quote, or citation that was not in the input. Empty input is a request for evidence, not a zero: ask the one classifying question and stop. Do not emit a headline score over nothing.

## Rule 5 — Stay in scope

Each skill names its siblings and hands off rather than poaching. Firing outside trigger scope is an auto-fail. Generic PM boilerplate is an auto-fail — if a generic prompt could have produced the output, the skill did no work.

## Rule 6 — The scoring rubric, unchanged across all 45 skills

Pass threshold 21/25, no dimension below 4.

| Dimension | Weight | Bar |
|---|---|---|
| `method_fidelity` | 5 | Follows the Icarus method exactly; no steps skipped or softened. |
| `artifact_complete` | 5 | Produces the named artifact, fully filled, with the required numbers and citations. |
| `proprietary_edge` | 5 | Could NOT have come from a generic prompt. Uses first-principles / evidence-ladder / eval logic. |
| `challenge` | 5 | Pushes back on weak input; names gaps, kill criteria, and what would change the view. |
| `evidence_standard` | 5 | Weights money and behaviour over opinion; tags claims [Fact]/[Assumption]/[Hypothesis]. |

Auto-fail, any one of:

- Fabricated a specific number, quote, or citation not in the input
- Flattered a weak idea instead of challenging it
- Fired outside its trigger scope / poached a sibling skill
- Output is generic PM boilerplate

## Rule 7 — Six gates before a skill graduates

Scored by a judge agent separate from the author.

1. **Trigger precision** — fires on 5/5 wanted phrasings, 0/3 siblings.
2. **Golden set** — ≥21/25 on every case, no dimension below 4.
3. **Adversarial** — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.
4. **Head-to-head** — a superseding skill must beat the skill it replaces on the same inputs.
5. **Anti-generic** — its output could not have come from a generic PM prompt.
6. **Used 5+ times in real real product work** — completes in use. Log each miss as a gotcha and re-run the set.

Golden cases come from real real product work: Meridian Grid, Foundry Signal, Halcyon Safety, Larder Labs.

## Rule 8 — Judgment, not steps

"A skill that is only a checklist gets sent back. Include a concrete 'what good looks like,' real numbers where you score things, and at least one worked example."

## Rule 9 — Fold or reject; never vendor wholesale

"Every market skill is, by default, folded into an existing studio skill or rejected. It is never added as new surface, and never vendored wholesale."

Every skill Claude can load costs context on every session, for every builder. Net-new surface has to earn that recurring cost, not just be good in isolation. Adoption and behaviour outrank author opinion: install counts and real usage are evidence, a README's self-description is not.

## Rule 10 — Don't re-run a stage you have already earned

The biggest waste is not skipping a stage, it is re-running one whose answer you already hold in behaviour or money. Subtract stages you have evidenced past. Refuse to leap a stage you only feel you have done. Type is graded to the highest rung the builder can actually show, and it rounds down, never up.

---

## The flow

Entry point is `start-here-router` — it decides which of these stages are yours. Full sequence in [`skills/ICARUS.md`](./skills/ICARUS.md).

| # | Stage | Skills |
|---|---|---|
| 00 | Concept council — entry & triage | `start-here-router`, `concept-council`, `so-what-stress-test` |
| 01 | First-principles problem | `product-as-decision`, `job-in-primitives`, `current-state-map`, `physics-floor-gap`, `problem-quality-scorecard`, `null-hypothesis-test`, `bottoms-up-quantification` |
| 02 | Customer discovery | `user-buyer-decider-map`, `unserved-needs-finder`, `synthetic-users`, `tacit-knowledge-interview`, `evidence-ladder`, `continuous-discovery-engine` |
| 03 | YODA — your own data | `yoda-data-sourcing`, `explicit-vs-tacit-capture`, `dataset-builder` |
| 04 | Probes — build to learn | `probe-matrix`, `paper-sketch-probe`, `wizard-of-oz-probe`, `concierge-probe`, `agent-concierge-probe` |
| 05 | Frame the business & product | `product-frame-stack`, `four-lenses-test`, `first-mocks`, `usability-test-protocol` |
| 06 | Invent — wedge & moat | `invent-by-hand`, `wedge-five-questions`, `moat-design-canvas`, `data-rights-clause` |
| 07 | Commit — build & sell v1 | `eval-first-spec`, `compound-system-architecture`, `guardrail-design`, `pilot-six-term-sheet`, `value-based-pricing`, `v1-launch-bar` |
| 08 | Refine flywheel | `refine-flywheel`, `trace-to-interview`, `metrics-that-matter` |
| 09 | Build craft | `agent-design`, `workflow-design` |
| 10 | Builder progression | `builder-level-ladder`, `build-vs-buy-boundary` |

Three skills supersede a weaker generic incumbent and beat it head-to-head: `problem-quality-scorecard` → `identify-assumptions-new`; `continuous-discovery-engine` → `opportunity-solution-tree`; `probe-matrix` → `prototyping-pretotyping`.
