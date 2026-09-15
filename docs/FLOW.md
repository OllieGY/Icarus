# The Icarus flow

An eval-gated method that takes a raw idea from first-principles problem to a scored,
shipped v1. 53 skills. The rules they all run on are in [`GOLDEN_RULES.md`](../GOLDEN_RULES.md).

## The method, in one line

An idea earns the right to become a product by passing gates, not by sounding good. Evidence
is weighted the same way everywhere — the **evidence ladder**: money moved 1.0 → behaviour
0.7 → artefact 0.5 → commitment 0.3 → opinion 0.1. A probe's job is to move a claim up that
ladder.

## The flow (read top to bottom)

Skills are flat in `skills/`; the intended sequence is below. `start-here-router` decides
which stages are yours — the biggest waste is not skipping a stage, it is re-running one
whose answer you already hold in behaviour or money.

| # | Stage | Skills |
|---|---|---|
| 00 | **Entry and triage** | `start-here-router`, `concept-council`, `so-what-stress-test` |
| 01 | **First-principles problem** | `product-as-decision`, `job-in-primitives`, `current-state-map`, `physics-floor-gap`, `problem-quality-scorecard`, `null-hypothesis-test`, `bottoms-up-quantification` |
| 02 | **Customer discovery** | `user-buyer-decider-map`, `unserved-needs-finder`, `synthetic-users`, `tacit-knowledge-interview`, `evidence-ladder`, `continuous-discovery-engine` |
| 03 | **Your own data** | `yoda-data-sourcing`, `explicit-vs-tacit-capture`, `dataset-builder`, `trace-instrumentation-spec` |
| 04 | **Probes — build to learn** | `probe-matrix`, `paper-sketch-probe`, `wizard-of-oz-probe`, `concierge-probe`, `agent-concierge-probe` |
| 05 | **Frame the business and product** | `product-frame-stack`, `four-lenses-test`, `first-mocks`, `agent-interaction-design`, `usability-test-protocol` |
| 06 | **Invent — wedge and moat** | `invent-by-hand`, `wedge-five-questions`, `moat-design-canvas`, `data-rights-clause`, `invention-disclosure` |
| 07 | **Commit — build and sell v1** | `eval-first-spec`, `judge-calibration`, `compound-system-architecture`, `context-budget`, `guardrail-design`, `adversarial-launch-pass`, `compliance-gate`, `pilot-six-term-sheet`, `value-based-pricing`, `v1-launch-bar` |
| 08 | **Refine flywheel** | `refine-flywheel`, `failure-mode-mining`, `trace-to-interview`, `metrics-that-matter` |
| 09 | **Build craft** | `agent-design`, `workflow-design` |
| 10 | **Scale and distribution** | `agent-surface-design`, `build-vs-buy-boundary` |

Three skills supersede a weaker generic incumbent and beat it head-to-head:
`problem-quality-scorecard` → `identify-assumptions-new`; `continuous-discovery-engine` →
`opportunity-solution-tree`; `probe-matrix` → `prototyping-pretotyping`.

## How each skill is built and gated

Every skill ships an eval harness in its own `tests/` folder — five `golden/` cases written against four fictional companies (Meridian Grid, Foundry Signal, Halcyon Safety, Larder Labs), three `adversarial/` cases, a `rubric.json`, and a `RESULTS.md` log. Before graduating, each passed, scored by a judge agent separate from its author:

1. Trigger precision — fires on 5/5 wanted phrasings, 0/3 siblings.
2. Golden set — ≥21/25 on every case, no dimension below 4.
3. Adversarial — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.
4. Head-to-head — a superseding skill must beat the skill it replaces on the same inputs.
5. Anti-generic — its output could not have come from a generic PM prompt.

Gate 6 (used 5+ times in real product work) completes in use — log each miss as a gotcha and re-run the set.
