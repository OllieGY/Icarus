---
description: Log what your team learned the hard way into the append-only lessons log.
argument-hint: "[what happened, and what it cost]"
allowed-tools: Read Glob Grep Write Skill Bash(sed:*)
---

Run the `lessons` skill on this:

$ARGUMENTS

Entries already logged:

!`sed -n '1,60p' "${CLAUDE_PLUGIN_ROOT}/lessons/LOG.md" 2>/dev/null || true`

Check that list first — if this lesson already exists in other words, strengthen
the existing entry instead of adding a second one.

An entry earns its line only if it is specific (a builder, a date, a number), costly
(something was actually lost, named), and actionable (it says which rule, skill, or
default changes). If any of the three is missing, ask for that half rather than writing a
soft version.

Append the filled entry at the top of `${CLAUDE_PLUGIN_ROOT}/lessons/LOG.md` using `${CLAUDE_PLUGIN_ROOT}/lessons/TEMPLATE.md`.

If the lesson would change a rule in `${CLAUDE_PLUGIN_ROOT}/GOLDEN_RULES.md`, say so and stop. Rule changes are
Ollie's call, not a quiet edit.
