# Icarus

Utopia Studio's Product Management hub. Skills, agents, tools, lessons.

The method is Icarus: an idea earns the right to become a company by passing gates, not by
sounding good. Evidence is weighted the same way everywhere — money moved 1.0, behaviour
0.7, artefact 0.5, commitment 0.3, opinion 0.1. A probe's job is to move a claim up that
ladder.

## Install

```
/plugin marketplace add OllieGY/icarus
/plugin install icarus@icarus
```

That reads the repo's default branch, so merge this work to `main` first. Until then,
point a session straight at a clone:

```bash
git clone -b claude/confident-lamport-2tvdmt https://github.com/OllieGY/icarus
claude --plugin-dir ./icarus
```

Update later with `/plugin marketplace update icarus`.

## What is in here

| | |
|---|---|
| **[Golden rules](./GOLDEN_RULES.md)** | Ten rules the whole hub runs on — the evidence ladder, the tag rule, the five challenge questions, the 21/25 rubric, the six graduation gates. |
| **[Skills](./skills/)** | The 45 eval-gated Icarus skills, verbatim, each with its template, examples and `tests/` harness. Plus two written here: `icarus-golden-rules`, `lessons`. |
| **[Agents](./agents/)** | `icarus-critic`, an adversarial reviewer that grades work against the rules. Plus the persona-pack format for named agents with memory. |
| **[Tools](./tools/)** | Skill-usage hook, the Icarus manifest, and a validator that catches rubric drift. |
| **[Lessons](./lessons/LOG.md)** | Append-only. What the studio learned the hard way, and which rule it changed. |
| **[Rebuilds](./rebuilds/)** | Candidate agent-ops skill drafts (inspired by BuilderIO/skills, MIT). Not graduated, not loaded by the plugin. |
| **[DeepGen](./deepgen/)** | Framework design for deep-domain agents: a prioritising Domain Ledger, a domain compiler that composes the Icarus skills, real and synthetic data pipelines, three eval tiers, four loops. Design only; the intake UI is in `deepgen/ui/`. |

## Commands

| Command | Does |
|---|---|
| `/icarus <situation>` | Routes you through the stages. Which apply, which to skip, in what order. Start here. |
| `/stress-test <idea>` | The five business questions. Returns Pass, Redesign, or Kill. |
| `/lesson <what happened>` | Logs a lesson, if it is specific, costly, and actionable. |
| `/deepgen <domain>` | Runs the DeepGen intake. Five gates, one next action, a Domain Brief. Never a score over nothing. |

## The flow

Eleven stages, run top to bottom. `fellow-path-router` decides which are yours — the
biggest waste is not skipping a stage, it is re-running one whose answer you already hold
in behaviour or money.

| # | Stage | Skills |
|---|---|---|
| 00 | Concept council | `fellow-path-router`, `concept-council`, `so-what-stress-test` |
| 01 | First-principles problem | `product-as-decision`, `job-in-primitives`, `current-state-map`, `physics-floor-gap`, `problem-quality-scorecard`, `null-hypothesis-test`, `bottoms-up-quantification` |
| 02 | Customer discovery | `user-buyer-decider-map`, `unserved-needs-finder`, `synthetic-users`, `tacit-knowledge-interview`, `evidence-ladder`, `continuous-discovery-engine` |
| 03 | YODA — your own data | `yoda-data-sourcing`, `explicit-vs-tacit-capture`, `dataset-builder` |
| 04 | Probes — build to learn | `probe-matrix`, `paper-sketch-probe`, `wizard-of-oz-probe`, `concierge-probe`, `agent-concierge-probe` |
| 05 | Frame the business | `product-frame-stack`, `four-lenses-test`, `first-mocks`, `usability-test-protocol` |
| 06 | Invent — wedge & moat | `invent-by-hand`, `wedge-five-questions`, `moat-design-canvas`, `data-rights-clause` |
| 07 | Commit — build & sell v1 | `eval-first-spec`, `compound-system-architecture`, `guardrail-design`, `pilot-six-term-sheet`, `value-based-pricing`, `v1-launch-bar` |
| 08 | Refine flywheel | `refine-flywheel`, `trace-to-interview`, `metrics-that-matter` |
| 09 | Build craft | `agent-design`, `workflow-design` |
| 10 | Fellow progression | `fellow-level-ladder`, `platform-vs-venture` |

Stage detail in [`skills/ICARUS.md`](./skills/ICARUS.md).

## How a skill earns its place

Every Icarus skill ships an eval harness: five golden cases from real fellow work (Azraq,
Mentix, Barrier Intelligence, Durian), three adversarial cases, a rubric, and a results
log. It graduates only after passing six gates, scored by a judge agent separate from its
author — trigger precision, golden set ≥21/25, adversarial survival, head-to-head against
the skill it supersedes, anti-generic, and five real uses.

Adding anything new means clearing the same bar. And nothing gets vendored wholesale: an
external skill is folded into an existing one or rejected, because every skill Claude can
load costs context on every session for every fellow.

```bash
node tools/scripts/validate-skills.mjs
```

## Sources

The 45 Icarus skills are copied verbatim from
[`The-Utopia-Studio/skills`](https://github.com/The-Utopia-Studio/skills) at commit
`edc6b9f1`, path `skills/product/`. Per-skill provenance in
[`skills/SOURCES.md`](./skills/SOURCES.md).

The generic product skills Icarus routes to — `create-prd`, `jobs-to-be-done`,
`impeccable`, `railway-deploy`, `deploy-to-vercel` — stay in the marketplace. Install
`utopia-product@skills` alongside this hub.

Apache-2.0. The Utopia Studio.
