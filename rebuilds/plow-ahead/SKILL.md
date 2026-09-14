---
name: plow-ahead
description: >-
  Fires when the user has already said go — "plow ahead", "keep going until
  done", "use your best judgment", "don't stop for questions unless blocked",
  "finish while I'm away". Converts ordinary ambiguity into tagged assumptions,
  picks the reversible choice, validates, and recaps. Do NOT fire when they
  asked to compare options, wait for approval, or brainstorm. Not a product
  stage skill.
---

# Plow Ahead

Clarification theater after a go is a stall, not diligence. Routine forks become
tagged `[Assumption]`s. You pick the smallest reversible option, keep moving,
and make the recap auditable. You stop when the next step would fabricate,
spend money, or mutate production.

## Trigger / When NOT

Fire only on an explicit autonomy request. Silence is not permission.

| Not this | Do this instead |
|---|---|
| "Which of these two designs should we ship?" | Stop. They asked to compare. |
| "Wait for me before you implement." | Stop. Approval is reserved. |
| Competing plans from two agents | `rebuilds/plan-arbiter` |
| Auditing someone else's session | `rebuilds/agent-watchdog` |
| Speccing one production agent | `agent-design` (graduated) |

If the ask is a one-liner with no goal, do not invent scope. Ask the one
classifying question — what artefact is done? — then, if they already said go
on a named artefact, proceed.

## Method

```
Plow-ahead progress:
- [ ] Restate the goal as one artefact + one pass condition
- [ ] Convert each routine fork into a tagged assumption
- [ ] Act on the lowest-blast-radius reversible choice
- [ ] Validate with the smallest check that could fail
- [ ] Recap so a reviewer can audit without the thread
```

**Routine vs blocker.** A routine fork is two options the repo, tests, or local
docs can decide. A blocker is Empty that you cannot fill without fabricating
(Rule 4): missing credentials, paid accounts, irreversible git/history, a
decision they reserved, a safety/privacy risk you cannot shrink locally, a
validation failure that has already been investigated and the next patch would
be speculative.

**Choice rule.** Reuse a nearby pattern before inventing one. Prefer local,
reversible, low blast radius (read the `agent-design` tool table; do not
restate it). If two options are close, pick the one a reviewer can see later.
Log the choice as `[Assumption]` plus the reason. Do not write a new repo
file for the log unless the task needs one.

**Empty.** If a needed fact is not in the repo, the issue, or fetched docs,
write `Empty` and either fetch (`rebuilds/read-the-damn-docs`) or stop. Do not
fill Empty with a confident guess and call it judgment.

## Done bar

The turn ends with this recap, every claim tagged:

```
Goal — artefact + pass condition.
Decisions — each assumption, rung, why.
Changes — files / behaviour, not vibes.
Validation — commands run and result. Unrun = Empty.
Residual risk — what is still [Hypothesis].
```

A recap that hides skipped tests fails. "Should work" is opinion (0.1).

**Kill line.** You asked a preference question after they said go, and both
options were reversible → you failed this skill. You mutated production, force-
pushed, or spent money without a stop → you failed. You fabricated a number or
a "docs say" claim you did not fetch → Rule 4, auto-fail.

## Evidence standard

Money 1.0 · behaviour 0.7 · artefact 0.5 · commitment 0.3 · opinion 0.1.
Here the ladder scores **decisions made while they were away**. A recap citing
a test log is artefact (0.5). A recap citing "I thought this was fine" is
opinion and does not close the job. Tag every empirical claim.

## Status

Candidate draft. Not graduated. No golden set. `[Hypothesis]` that this belongs
in hub instructions or folded into `agent-design`, not as net-new `skills/`
surface.
