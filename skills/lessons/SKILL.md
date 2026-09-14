---
name: lessons
description: >-
 Reads and writes the hub's append-only lessons log — what your team learned the hard
 way, and what rule it changed. Fires on "log a lesson", "what did we learn", "we got
 this wrong", "add this to lessons", "have we hit this before", "post-mortem this", and
 at the end of any working session worth remembering. Also fires BEFORE product work to
 check whether a known lesson already applies. NOT a retro facilitation format, NOT a
 meeting-notes summariser, NOT the graduation eval log (that lives in each skill's
 tests/RESULTS.md).
metadata:
 supersedes: none
 type: interactive
allowed-tools: Read Glob Grep Write
disable-model-invocation: true
---

# Lessons

## What it does

Keeps `lessons/LOG.md` honest and short. Two directions:

**Read first.** Before any Icarus stage runs on a builder's problem, scan the log for an
entry whose trigger matches. A lesson already paid for should not be paid for twice.

**Write after.** When something went wrong, surprised the room, or changed how the
studio operates, append one entry using `lessons/TEMPLATE.md`. Newest first.

## The bar for an entry

A lesson is not a note. It earns its line only if it names what would have to be true
for your team to do it differently next time. Three tests:

| Test | Fails if |
|---|---|
| **Specific** | It names a builder, a date, a number. "Communicate better" is not a lesson. |
| **Costly** | Something was actually lost — time, a pilot, credibility, a wrong build. A near-miss counts if the cost is named. |
| **Actionable** | It says which rule, skill, or default changes. A lesson that changes nothing is a war story; put it somewhere else. |

If an entry fails any of the three, say so and ask for the missing half rather than
writing a soft version.

## Method

1. Ask what happened, in the the builder's own words. Do not paraphrase it into studio jargon yet.
2. Place the evidence on the ladder (see `icarus-golden-rules`). A lesson drawn from one person's opinion is a hypothesis, tag it that way.
3. Name the decision that would change. Which rule in `GOLDEN_RULES.md`, which skill, which default.
4. Write the entry into `lessons/LOG.md` at the top, filled from `lessons/TEMPLATE.md`.
5. If the lesson changes a golden rule, say so out loud and stop — a rule change is Ollie's call, not an edit you make quietly.

## What good looks like

> **2026-03-11 — Foundry Signal pilot scoped from a verbal yes.** Ran three weeks of build on
> "they said they'd deploy it plant-wide by Q3" [Verbal 0.3] without a paid pilot.
> Procurement never opened a budget line. Cost: 3 engineering weeks.
> **Lesson:** a deployment promise without a budget owner named is 0.3, and 0.3 does not
> justify build. **Changes:** `pilot-six-term-sheet` runs before any build week is booked.

## Gotchas

- Do not log the same lesson twice in different words. Search the log first; if it exists, strengthen the existing entry instead.
- Resist logging outcomes ("the pilot failed"). Log the decision rule that would have changed the outcome.
- A lesson about a person's performance is a management conversation, not a log entry.
