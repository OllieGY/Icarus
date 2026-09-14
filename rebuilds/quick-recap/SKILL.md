---
name: quick-recap
description: >-
 Fires when a unit of agent work is ending and the completion state must be
 obvious — "give me a status", "red yellow green", "are we done". Ends the
 response with one coloured completeness claim. Do NOT fire mid-task, as a
 substitute for a recap of decisions (use plow-ahead), or as a product
 verdict (use so-what-stress-test / icarus-critic).
---

# Quick Recap

"Looks good" at the end of a turn is opinion (0.1). A status colour is a
**completeness claim**. It is earned by an artefact and a check, or it is a lie.

## Trigger / When NOT

Fire at the end of a completed unit of work, or when they ask for the
convention itself.

| Not this | Use instead |
|---|---|
| Decision log of assumptions made while they were away | `rebuilds/plow-ahead` recap |
| Audit of another agent's session | `rebuilds/agent-watchdog` |
| Pass / Redesign / Kill on a business idea | `so-what-stress-test` |
| Logging a studio lesson | `lessons` |

Do not install `AGENTS.md` / `CLAUDE.md` blocks unless they asked. This draft
is a convention, not a host installer.

## Method

One line, last thing in the response, no trailing divider:

- **Green** — the requested artefact exists and the named check ran (or the
 check is N/A because the ask was read-only and you cite what you read).
- **Yellow** — the artefact moved, but one **non-routine** follow-up remains.
 Name it. "Write tests sometime" is not specific enough; "set `X` before
 the webhook test" is.
- **Red** — blocked on them. Name the exact input. Empty stays Empty. Do not
 guess a credential or a product call.

Keep the sentence under 100 characters. Colour from **their** point of view:
finished, pending one named step, or stuck.

Routine leftover (a commit they did not ask for, a nit) is not yellow. Yellow
is a step they must take or a blocker that is not yet red because work
partially landed.

## Done bar

```
🟢 <what finished>
🟡 <what landed>, <the one remaining step>
🔴 Need <exact input> to continue
```

Green without a named artefact fails. Yellow with a shopping list fails —
split or pick the load-bearing leftover. Red that still offers a fabricated
workaround fails Rule 4.

Tag the claim silently: green requires at least artefact (0.5). If you did
not run validation, you do not get to imply you did; yellow or name the skip.

## Kill line

A green status over skipped tests, unresolved Empty, or a still-open blocker
is flattery of your own work — auto-fail. A red that invents the missing
secret "for now" is fabrication.

## Evidence standard

The colour is not decoration. It is the headline rung of "this unit is done".
Opinion ("should be fine") cannot be green. A diff you produced is artefact
(0.5) and can support green for a write they asked for **if** you also say
what you did not verify. Behaviour (0.7) is a check you ran.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: this belongs in hub
instructions or a `/command`, not a loaded skill. Every skill costs context
for every builder; a one-line convention does not clear that bar on its own.
