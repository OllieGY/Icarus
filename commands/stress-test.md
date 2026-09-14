---
description: Pressure-test a whole idea across the five business questions and return Pass, Redesign, or Kill.
argument-hint: "[the idea, plus whatever evidence you actually hold]"
allowed-tools: Read Glob Grep Write Skill
---

Run the `so-what-stress-test` skill on this:

$ARGUMENTS

Read `${CLAUDE_PLUGIN_ROOT}/GOLDEN_RULES.md` first. Weight every signal on the evidence ladder before answering
any question, and refuse to pass a question carried by opinion alone. Tag every empirical
claim `[Fact]`, `[Assumption]`, or `[Hypothesis]`. Invent no numbers — if the pile is
empty, say so and ask for signals rather than scoring nothing.

Return the five-row verdict table, the overall Pass / Redesign / Kill, and the single
cheapest probe that would move the load-bearing claim up one rung.

If the ask is really about one wedge, hand to `wedge-five-questions`. If it is about
defensibility over years, hand to `moat-design-canvas`. Do not poach either.
