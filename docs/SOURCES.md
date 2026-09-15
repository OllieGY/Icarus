# Sources and provenance

44 of the skills in this kit come from [The Utopia Studio](https://github.com/The-Utopia-Studio/skills)'s
internal product set, `skills/product/` at commit `edc6b9f18820c1f729818484b97496011fbd36e3`,
copied 2026-09-14. Apache-2.0.

## What changed for the public release

They are **no longer verbatim**. The original set was written for one venture studio's
internal audience and this repository is public, so on 2026-09-14 the whole corpus was
rewritten by `tools/scripts/rewrite-public.py` (kept in the repo, and idempotent — CI
re-runs it with `--check`):

| Change | Why |
|---|---|
| The studio's word for its users became "you" / "the builder" | The method is general; the noun was not |
| Four real portfolio companies became four fictional ones — Meridian Grid (data-centre risk), Foundry Signal (industrial AI), Halcyon Safety (oil & gas safety), Larder Labs (retail ops) | The cases teach a structure, not a company. Two read as graded verdicts on named businesses, which is not ours to publish |
| Every `tests/` and `examples/` file gained an illustrative-fixture line | Only 11 of 47 carried one; readers hit specific-looking figures with no signal they were fixtures |
| Cross-references by stage number became the sibling skill's name | Stage numbers mean nothing to someone who installed a plugin |
| References to the studio's internal platform became Inherit / Build / Buy lanes | The substrate-vs-signal split is general; the platform was not |
| `fellow-path-router` → `start-here-router`, `platform-vs-venture` → `build-vs-buy-boundary` | The names carried the internal frame |
| `fellow-level-ladder` retired | It graded a person for a mentor at review time. Outside a fellowship it has no home, and its artefact chain duplicates the router |
| Frontmatter normalised: `type` and `supersedes` moved under `metadata:` | Unknown top-level keys are rejected at plugin packaging time |

**This invalidates the graded runs.** Trigger phrasings were preserved, but the text a judge
scored is not the text on disk. Every affected `tests/RESULTS.md` says so at the top. The
8 skills written for this release were never graded at all and are marked
`"graduated": false` in `tools/scripts/icarus-skills.json`.

## The earlier YAML fix

Eleven skills shipped a `description` written as a plain unquoted scalar containing `": "`.
That is invalid YAML: a strict parser rejects the whole frontmatter block and the skill
never loads. Each was re-emitted as a `>-` folded block with the text unchanged. Affected:
`agent-concierge-probe`, `bottoms-up-quantification`, `concierge-probe`, `current-state-map`,
`explicit-vs-tacit-capture`, `job-in-primitives`, `physics-floor-gap`, `synthetic-users`,
`tacit-knowledge-interview`, `trace-to-interview`, `unserved-needs-finder`.
`tools/scripts/validate-skills.mjs` fails the build on any plain scalar containing `": "`,
so it cannot come back. Worth fixing upstream.

## Per-skill harness

Written for this kit, not copied: `icarus-golden-rules`, `lessons`, the 8 new skills
listed in the changelog, and `invention-disclosure` (added in 1.1.0 — the first skill to
carry a `references/` folder, whose jurisdiction figures each cite a source and a checked date).

| Skill | Type | Golden | Adversarial |
|---|---|---|---|
| `concept-council` | interactive | 5 | 3 |
| `so-what-stress-test` | interactive | 5 | 3 |
| `start-here-router` | interactive | 5 | 3 |
| `product-as-decision` | generator | 5 | 3 |
| `job-in-primitives` | generator | 5 | 3 |
| `current-state-map` | generator | 5 | 3 |
| `physics-floor-gap` | generator | 5 | 3 |
| `problem-quality-scorecard` | generator | 5 | 3 |
| `null-hypothesis-test` | generator | 5 | 3 |
| `bottoms-up-quantification` | generator | 5 | 3 |
| `user-buyer-decider-map` | generator | 5 | 3 |
| `unserved-needs-finder` | generator | 5 | 3 |
| `synthetic-users` | interactive | 5 | 3 |
| `tacit-knowledge-interview` | interactive | 5 | 3 |
| `evidence-ladder` | generator | 5 | 3 |
| `continuous-discovery-engine` | interactive | 5 | 3 |
| `yoda-data-sourcing` | interactive | 5 | 3 |
| `explicit-vs-tacit-capture` | generator | 5 | 3 |
| `dataset-builder` | generator | 5 | 3 |
| `probe-matrix` | interactive | 5 | 3 |
| `paper-sketch-probe` | generator | 5 | 3 |
| `wizard-of-oz-probe` | generator | 5 | 3 |
| `concierge-probe` | generator | 5 | 3 |
| `agent-concierge-probe` | generator | 5 | 3 |
| `product-frame-stack` | generator | 5 | 3 |
| `four-lenses-test` | generator | 5 | 3 |
| `first-mocks` | interactive | 5 | 3 |
| `usability-test-protocol` | interactive | 5 | 3 |
| `invent-by-hand` | interactive | 5 | 3 |
| `wedge-five-questions` | generator | 5 | 3 |
| `moat-design-canvas` | generator | 5 | 3 |
| `data-rights-clause` | generator | 5 | 3 |
| `invention-disclosure` | generator | 5 | 3 |
| `eval-first-spec` | generator | 5 | 3 |
| `compound-system-architecture` | generator | 5 | 3 |
| `guardrail-design` | generator | 5 | 3 |
| `pilot-six-term-sheet` | generator | 5 | 3 |
| `value-based-pricing` | generator | 5 | 3 |
| `v1-launch-bar` | generator | 5 | 3 |
| `refine-flywheel` | generator | 5 | 3 |
| `trace-to-interview` | generator | 5 | 3 |
| `metrics-that-matter` | generator | 5 | 3 |
| `agent-design` | generator | 5 | 3 |
| `workflow-design` | generator | 5 | 3 |
| `builder-level-ladder` | interactive | 5 | 3 |
| `build-vs-buy-boundary` | generator | 5 | 3 |
