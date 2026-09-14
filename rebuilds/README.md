# Rebuilds — candidate agent-ops, not graduated

Icarus-owned drafts of seven agent-ops jobs, inspired by
[BuilderIO/skills](https://github.com/BuilderIO/skills) (MIT, Builder.io 2026).
Attribution in [`NOTICE`](./NOTICE). Provenance in [`SOURCES.md`](./SOURCES.md).

**This folder is not a skill pack.** Claude plugins load `skills/` at the plugin
root. Nothing here auto-loads, and nothing here has earned a place in the
graduated 45. Rule 9 still holds: nothing enters folded or it does not enter.

These drafts exist so Ollie can rebuild them as his own — fold into an existing
Icarus skill, reject, or (only after the harness and six gates) graduate a new
one. They do **not** claim graduation. They do **not** ship a `tests/` harness.

## Keepers

| Folder | Trigger, in one line | Fold-or-new (hypothesis only) |
|---|---|---|
| [`plow-ahead`](./plow-ahead/) | User said go; stop asking which reasonable option they prefer. | Fold into `agent-design` autonomy + `guardrail-design` stop conditions, or reject as session convention. |
| [`plan-arbiter`](./plan-arbiter/) | Two or more agent plans; pick one executable direction. | Fold into `workflow-design` critic, or new only if multi-plan loops show up in fellow work. |
| [`agent-watchdog`](./agent-watchdog/) | Babysit / audit another agent's session, PR, or branch. | Fold into `agents/icarus-critic` (session work, not product claims) or `workflow-design`. |
| [`quick-recap`](./quick-recap/) | End the turn with a red / yellow / green completeness claim. | Fold into hub `CLAUDE.md` / a command. Loading this as a skill for every fellow is likely too dear. |
| [`read-the-damn-docs`](./read-the-damn-docs/) | Integrating or debugging a vendor API / library / CLI. | Fold into Rule 4 (`icarus-golden-rules`). Net-new surface is the weak default. |
| [`stay-within-limits`](./stay-within-limits/) | Long or parallel waves that can exhaust a usage window. | Fold into `efficient-frontier` or host instructions. Host-specific caps are `[Assumption]`. |
| [`efficient-frontier`](./efficient-frontier/) | Frontier model as judge; cheaper agents for gather / code / test. | Fold into `workflow-design` surface + spawn rules. Savings claims are `[Hypothesis]` until measured. |

Each keeper is `SKILL.md` (Icarus rewrite, ~120 lines) plus `ORIGIN.md` (what
was kept as idea, what changed, fold-or-new).

## Skips

Builder-product-locked, or not rebuildable without their host. One-line why:

| Builder skill | Why skipped |
|---|---|
| `an` | Opens Agent-Native apps on Builder Dispatch / host MCP. No Utopia equivalent. |
| `webmcp` | Host built-in browser + `window.__agentNativeWebMcp`. Host-locked. |
| `rewind` | Clips Desktop + local `clips-screen-memory` MCP. macOS capture product. |
| `visual-edit` | Builder Design iframe + local bridge. Product-locked. |
| `turn-into-app` | Compiles a thread into an Agent-Native app. Builder product. |
| `visual-plan` | MDX visual plans in the Agent-Native plans app. Product-locked. |
| `visual-recap` | MDX visual diffs in the same app / GitHub Action. Product-locked. |
| `efficient-fable` | Same orchestration as `efficient-frontier`, pinned to Claude Fable. Rebuild the generic form only. |

## How to promote (do not skip this)

Copy into `skills/<name>/` **only** after all of the following:

1. Full Icarus harness: `template.md`, `examples/`, five golden cases, three
   adversarial cases, `tests/rubric.json` (21/25, min 4, five dimensions, four
   auto-fails), `tests/RESULTS.md`.
2. Six graduation gates, scored by a judge who did not author the skill
   (Rule 7).
3. Fold-or-reject first (Rule 9). Net-new surface has to beat folding into
   `agent-design`, `workflow-design`, `guardrail-design`, `icarus-golden-rules`,
   or hub instructions. Every loaded skill costs context for every fellow.
4. Add the name to `tools/scripts/icarus-skills.json` and re-run
   `node tools/scripts/validate-skills.mjs`.
5. Record provenance in `skills/SOURCES.md`. These drafts are not that record.

`validate-skills.mjs` scans `skills/` only. Passing it after this folder exists
does not mean these candidates graduated.

## What good looks like here

A rebuild that names Empty where the Builder original assumed a host tool; that
tags every usage cap, savings claim, and stop threshold `[Assumption]` or
`[Hypothesis]`; that hands off to a sibling instead of restating it. A rebuild
that pastes the Builder body, claims graduation, or lands under `skills/` fails
this folder's job.
