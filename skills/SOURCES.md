# Sources

Every Icarus skill in `skills/` is a verbatim copy. Nothing has been rewritten, trimmed, or re-scored.

**Source.** `https://github.com/The-Utopia-Studio/skills` at commit `edc6b9f18820c1f729818484b97496011fbd36e3`, path `skills/product/<name>/`.
**Copied.** 2026-09-14. Each folder carries its `SKILL.md`, `template.md`, `examples/`, and full `tests/` harness.

Re-sync a skill with:

```bash
cp -R <clone>/skills/product/<name> skills/<name>
node tools/scripts/validate-skills.mjs
```

## One deviation from verbatim

Eleven skills shipped a `description:` written as a plain unquoted scalar containing `": "`
— for example `Output: a concierge log ...`. That is invalid YAML: a strict parser rejects
the whole frontmatter block, and the skill does not load.

Each was re-emitted as a `>-` folded block, the same style the other 34 already use. **The
description text is unchanged byte-for-byte after folding** — verified by round-trip parse
— so trigger precision (gate 1) is unaffected. No other content in any skill was touched.

Affected: `agent-concierge-probe`, `bottoms-up-quantification`, `concierge-probe`,
`current-state-map`, `explicit-vs-tacit-capture`, `job-in-primitives`, `physics-floor-gap`,
`synthetic-users`, `tacit-knowledge-interview`, `trace-to-interview`,
`unserved-needs-finder`.

`tools/scripts/validate-skills.mjs` now fails the build on any plain scalar containing
`": "`, so this cannot come back. Worth fixing upstream in `The-Utopia-Studio/skills` too.

Written for this hub, not copied: `icarus-golden-rules`, `lessons`.

| Skill | Type | Golden | Adversarial |
|---|---|---|---|
| `concept-council` | interactive | 5 | 3 |
| `so-what-stress-test` | interactive | 5 | 3 |
| `fellow-path-router` | interactive | 5 | 3 |
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
| `fellow-level-ladder` | interactive | 5 | 3 |
| `platform-vs-venture` | generator | 5 | 3 |
