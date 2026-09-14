---
name: agent-watchdog
description: >-
  Fires when asked to watch, babysit, audit, or compare another agent's
  session, transcript, PR, branch, or run summary — "check what Claude did",
  "watch this until done", "fix the gaps". Reconstructs the original ask,
  inspects evidence, reports gaps. Default is audit-only. Do NOT fire for
  ordinary code review with no other-agent run, or for Icarus product-claim
  grading (use icarus-critic).
---

# Agent Watchdog

The other agent's recap is opinion (0.1) until you inspect the artefact. You
are a second investigator, not a nodding reviewer. Anchoring on their story
is the failure mode.

## Trigger / When NOT

Fire when there is another agent's run to audit. Infer mode from the wording:
watch-only, audit, audit-and-fix (only if they authorized repair), compare.

| Not this | Use instead |
|---|---|
| No other-agent session; just review my diff | Ordinary review. This skill is idle. |
| Grade a PRD / pilot / "we're validated" | `agents/icarus-critic` |
| Pick among competing *plans* (not diffs) | `rebuilds/plan-arbiter` |
| Design the fleet that spawned them | `workflow-design` |

If authority is unclear, audit-only and say what you would fix. Do not poach
the implementer.

## Method

```
Watchdog progress:
- [ ] Resolve the artefact (session, PR, branch, paste)
- [ ] Reconstruct the contract from the original ask
- [ ] Investigate independently before grading their story
- [ ] Classify each issue against evidence
- [ ] Report; fix only if authorized and narrow
```

**Contract.** Original request, later scope changes, explicit constraints,
implied pass conditions, and their final claims. Their summary is not the
source of truth.

**Independent pass.** Form your own hypotheses about the same problem. Read
the files, tests, CI, screenshots. Subagent reports are leads, not facts.
Then diff: what they missed, what you missed, where they drifted product
silently. Concrete add-ons (file, guard, test) — not "coverage feels thin".

**Classify.** Gap (asked, missing). Bug (likely fails). Verification miss
(may be right; evidence weak). Scope drift. No issue (already handled, with
evidence). A claim with no artefact behind it stays `[Hypothesis]`.

**Live relay.** Interrupt a running agent only for a defect in the files they
are touching now, a correction of something you told them, or an answer they
are blocked on. Everything else waits for a checkpoint, ranked. Unranked
backlogs produce half-finished surfaces.

## Done bar

```
Status — done / blocked / stale / still running. [Fact] if you saw it.
Requested — the contract, in their words.
Observed — what changed, claimed, verified.
Gaps — classified, with files/commands.
Independent findings — what your pass caught.
Fixes — omit unless authorized.
Residual risk — still Empty or [Hypothesis].
```

**Kill line.** You graded the recap without opening the diff → fail. You
"fixed" without authorization → fail. You fabricated CI status → Rule 4.

## Evidence standard

Their prose 0.1. A diff you read 0.5. A test/CI log you inspected 0.5+.
Behaviour 0.7 only if you re-ran the check. Money 1.0 does not apply unless
the run spent paid quota they asked you to watch — and then cite the usage
artefact, do not invent a percentage.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: fold session-audit into
`icarus-critic`'s sibling mode or `workflow-design`'s critic, not a 46th skill.
