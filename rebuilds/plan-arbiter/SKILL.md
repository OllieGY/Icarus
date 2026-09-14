---
name: plan-arbiter
description: >-
  Fires when two or more agent plans must be compared, merged, or judged —
  "pick between Codex and Claude's plans", "merge these", "which plan should
  we execute". Returns one executable handoff with rejected alternatives.
  Do NOT fire for a single plan, for implementing before a decision, or for
  speccing a fleet (use workflow-design).
---

# Plan Arbiter

Two plans are not two votes. Rungs do not stack. The job is one executable
direction whose load-bearing claims sit highest on the ladder — not a blend of
two weak documents.

## Trigger / When NOT

Fire when the input holds ≥2 proposed plans (paste, files, transcripts, PRs).

| Not this | Use instead |
|---|---|
| One plan, no rival | Challenge that plan or implement it. No arbitration. |
| "Set up the fleet / who spawns whom" | `workflow-design` |
| "Spec the one agent that will execute" | `agent-design` |
| "Watch the other agent and grade the diff" | `rebuilds/agent-watchdog` |
| Bare "which AI is better" with no plans | Ask for the artefacts. Empty is not a score. |

Planning stays read-only unless they already asked you to implement after the
pick.

## Method

```
Plan-arbiter progress:
- [ ] Collect source artefacts (prefer originals over summaries)
- [ ] Normalize each plan into comparable claims
- [ ] Place load-bearing claims on the ladder
- [ ] Decide: adopt / hybrid / revise-first
- [ ] Handoff: sequence, verification, rejected, executor
```

**Normalize.** For each plan, extract: objective, scope, assumptions (tagged),
files/APIs/data touched, sequence, how they would know it worked, rollback,
and what they left Empty. Verbosity is not quality. A plan that does not name
files or a pass condition is opinion (0.1).

**Cross-review.** Check each claim against the repo and the original ask. Name
hidden dependencies, missing tests, irreversible steps, and scope that was not
requested. Complementary strengths are allowed: architecture from A, migration
from B — only if each borrowed piece has a named reason. Unresolved Empty that
both plans share is not a tie-break; it is a revise-first.

**Decide.** Adopt one mostly as written; hybrid only with a piece-by-piece
ledger; or send both back. Tie-break, in order: fit to the ask; grounding in
real files/tests; smaller first slice that does not block the intended later
shape; verification and rollback; cheaper executor once quality is comparable.
Do not pick the longer plan. Do not average two `[Hypothesis]` stacks.

## Done bar

```
Decision — Adopt A / Hybrid / Revise-first.
Why — the load-bearing claim and its rung.
Execution — ordered steps, files.
Borrowed — piece, source plan, reason.
Rejected — idea, reason (not "less nice").
Verification — the smallest checks that could falsify it.
Executor — which agent/model, why. [Hypothesis] unless they named one.
```

**Kill line.** A mushy hybrid with no rejection list fails. Scoring a plan
above its best rung fails. Inventing a third plan and calling it a merge when
neither source is in the input fails Rule 4.

## Evidence standard

The ladder scores **plan claims**, not author prestige. "Claude wrote it" is
opinion. A plan that cites an existing test and a file path is artefact (0.5).
A plan that has already been run once in this repo is behaviour (0.7) if you
can see the log. Tag every empirical claim. Empty stays Empty.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: fold into `workflow-design`'s
critic spawn, rather than a new loaded skill.
