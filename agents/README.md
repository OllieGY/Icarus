# Agents

Two formats live here, on purpose.

## 1. Claude Code subagents — `agents/*.md`

Single-file agents the plugin loads directly. Frontmatter takes `name`, `description`,
and optionally `tools` and `model`. The body is the system prompt.

| Agent | Use when |
|---|---|
| [`icarus-critic`](./icarus-critic.md) | A claim, PRD, deck, or pilot plan needs grading against the golden rules before it goes anywhere. |

Keep these composing Icarus skills rather than restating their method. A subagent that
reimplements `evidence-ladder` will drift from it.

## 2. Persona packs — `agents/personas/<name>/`

Named, persistent agents with a voice and durable memory. Format adapted from the studio
marketplace (`The-Utopia-Studio/skills`, `agents/`), which runs Ada (technical DD),
Khalil (decks), and Salim (fellow coach).

Four canonical files per persona:

| File | Purpose |
|---|---|
| `SOUL.md` | Personality, voice, signature phrases, anti-patterns. Non-negotiable. |
| `AGENTS.md` | Operating manual — triggers, permissions, skills composed, escalation. |
| `MEMORY.md` | Persistent cross-session knowledge. Until something is here, the agent does not know it. |
| `BOOTSTRAP.md` | First-boot orientation. Archived after setup. |
| `references/` | One markdown file per major workflow. |

Why a persona instead of a bare skill: skills make the user remember which one applies.
"Run DD as Ada" is a smaller cognitive ask than "which skill do I use for technical due
diligence". Personas also hold voice, which otherwise drifts to generic across sessions.

`personas/` is empty by design — the Icarus personas are a later task. Build one with
the `agent-persona-builder` skill from `utopia-founder-productivity`.
