# Icarus

A method for building AI-native products, shipped as agent skills.

An idea earns the right to become a product by passing gates, not by sounding good.
Evidence is weighted the same way everywhere: money moved 1.0, behaviour observed 0.7,
artefact shown 0.5, verbal commitment 0.3, opinion 0.1. Rungs never stack. A probe's job is
to move a claim up that ladder, and a skill's job is to refuse the claim until it does.

52 skills, each shipping its own eval harness.

## Install

```
/plugin marketplace add OllieGY/icarus
/plugin install icarus@icarus
```

Or point a session at a clone: `claude --plugin-dir ./icarus`.

Once installed, a `SessionStart` hook puts the golden rules in front of Claude in every
session, including ones working on your own product in your own repo.

## Start here

| Command | Does |
|---|---|
| `/icarus <situation>` | Routes you through the stages. Which apply, which to skip, in what order. |
| `/stress-test <idea>` | The five business questions. Returns Pass, Redesign, or Kill. |
| `/lesson <what happened>` | Logs a lesson, if it is specific, costly, and actionable. |

There is also an `icarus-critic` agent: an adversarial reviewer that grades a claim, a PRD,
a deck or a pilot plan against the rules and refuses to pass anything carried by opinion.

## The flow

Eleven stages. `start-here-router` decides which are yours, because the biggest waste is not
skipping a stage, it is re-running one whose answer you already hold in behaviour or money.
Full map in [`docs/FLOW.md`](./docs/FLOW.md); the rules in
[`GOLDEN_RULES.md`](./GOLDEN_RULES.md).

## What makes it AI-native

Most product frameworks predate the thing you are building. These are the parts that only
make sense if your product is a model in a loop:

| | |
|---|---|
| **Evals before build** | `eval-first-spec` turns a wedge into a scoreable spec with 20 golden cases, an autonomy level, and a cost-per-outcome budget to the cent. `judge-calibration` then makes the judge itself defensible: binary criteria, measured agreement against human labels, a pinned model, recalibration on every snapshot. |
| **Error analysis on real traces** | `failure-mode-mining` samples traces to saturation, open-codes them blind, and returns a counted taxonomy that replaces the one you guessed, forcing the failure rates downstream to be re-derived. |
| **Context as a budget** | `context-budget` prices every token that enters a call and reconciles the total against the cost-per-outcome you already committed to. If it does not clear, it names the row to cut. |
| **Proof you beat the bare model** | `eval-first-spec` runs a with / without / Δ arm over the golden set. Mean Δ ≤ 0 means you built a wrapper, and the skill says so. |
| **Data as the moat** | `yoda-data-sourcing` keeps only signal a foundation model cannot already reach; `data-rights-clause` secures the right to keep and train on it before the first pilot; `moat-design-canvas` sequences the rest into dated gates. |
| **Instrumented from the start** | `trace-instrumentation-spec` fixes what every run must emit, including the human edit delta that the improvement loop cannot be computed without. |
| **Launch gates that are recorded, not asserted** | `v1-launch-bar` plus `adversarial-launch-pass`: a private attack set built from your own corpus and your own thresholds, because a model's claim that it "would refuse" is opinion 0.1 and only a transcript is behaviour. |
| **Priced on outcomes** | `value-based-pricing` sets one price between two measured walls, then specifies how an outcome is verified and what happens when it fails. |
| **Distribution to agents** | `agent-surface-design` treats the buyer's agent as a user: an MCP server, a shipped skill, an AGENTS.md fragment, with adoption scored on tool-call logs rather than on a launch post. |

## How a skill earns its place

Every skill ships five golden cases, three adversarial cases, a rubric and a results log.
Graduation takes six gates, scored by a judge separate from the author: trigger precision
(fires on 5/5 wanted phrasings, 0/3 siblings), golden set ≥21/25 with no dimension below 4,
adversarial survival, head-to-head against any skill it supersedes, anti-generic, and five
real uses. Four auto-fails void a score regardless of the total — fabricating a number,
flattering weak work, firing outside scope, or producing boilerplate.

Nothing gets vendored wholesale. An external skill is folded into an existing one or
rejected, because every skill Claude can load costs context on every session.

```bash
node tools/scripts/validate-skills.mjs
```

Gates frontmatter, rubric drift, and the public-language list. CI runs it on every push.

## Status

The 44 skills carried over from the original set graduated before this repository was made
public, then were rewritten for a general audience: the companies in every example are now
fictional and the internal vocabulary is gone. The trigger phrasings were preserved, but a
rewrite invalidates a graded run, so each affected `tests/RESULTS.md` says plainly that its
gates need re-running. The 8 skills added for this release are marked not yet graduated in
`tools/scripts/icarus-skills.json`. Treat both as specified and unproven rather than
certified.

## Origins

The method and 44 of the skills come from
[The Utopia Studio](https://github.com/The-Utopia-Studio/skills)'s internal product set,
`skills/product/` at commit `edc6b9f1`. Per-skill provenance and the full list of changes
made for this release are in [`docs/SOURCES.md`](./docs/SOURCES.md). The generic product
skills Icarus routes to but does not include — `create-prd`, `jobs-to-be-done`,
`impeccable`, `railway-deploy`, `deploy-to-vercel` — live in that marketplace.

Apache-2.0.
