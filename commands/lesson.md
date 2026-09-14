---
description: Log what the studio learned the hard way into the append-only lessons log.
argument-hint: "[what happened, and what it cost]"
---

Run the `lessons` skill on this:

$ARGUMENTS

Check `lessons/LOG.md` first — if this lesson already exists in other words, strengthen
the existing entry instead of adding a second one.

An entry earns its line only if it is specific (a fellow, a date, a number), costly
(something was actually lost, named), and actionable (it says which rule, skill, or
default changes). If any of the three is missing, ask for that half rather than writing a
soft version.

Append the filled entry at the top of `lessons/LOG.md` using `lessons/TEMPLATE.md`.

If the lesson would change a rule in `GOLDEN_RULES.md`, say so and stop. Rule changes are
Ollie's call, not a quiet edit.
