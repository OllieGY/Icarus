---
name: efficient-frontier
description: >-
  Fires when a high-cost frontier model is about to do token-heavy gather,
  scan, code, or test work that cheaper subagents can bound — "don't burn
  the expensive model on the repo walk", "orchestrate, then delegate".
  Frontier keeps planning, tradeoffs, integration, and final review.
  Do NOT fire for solo work one agent can finish (use agent-design), or
  for product fleet design (use workflow-design).
---

# Efficient Frontier

Frontier tokens on a full-repo grep is the same mistake as over-designing
tools in `agent-design`: spend the scarce resource on judgment. Cheaper
agents gather, patch, and run checks. The expensive model decides.

## Trigger / When NOT

Fire when exploration, implementation, and verification can be sliced, and
the frontier model is the one in this seat.

| Not this | Use instead |
|---|---|
| One agent, one context, no parallelism | `agent-design`. A fleet here is theatre. |
| Fellow product fleet / spawn rules | `workflow-design` (compose; do not restate) |
| Usage window about to die | `rebuilds/stay-within-limits` |
| Claude-Fable-only wiring | Skip. This draft is model-agnostic. |

Do not claim universal savings. `[Hypothesis]` until a session shows cheaper
tokens in and the eval still held.

## Method

```
Frontier progress:
- [ ] Split judgment (keep) from bounded labour (delegate)
- [ ] Write self-contained handoff packets
- [ ] No two agents writing the same files
- [ ] Treat returns as evidence, not verdicts
- [ ] Integrate and review before claiming done
```

**Keep on the frontier.** Architecture, prioritisation, ambiguity, risk,
synthesis, final review, the validation *strategy*.

**Delegate.** Repo inventory, docs extraction, search, log reduction, test
clustering, mechanical edits, scripted checks. Independent slices only.

**Packets.** Assume the worker has not seen this thread: repo path, objective,
in/out of scope, files, return shape, verification commands, stop conditions
(code ≠ assumption, check failed twice, scope escape, no concrete evidence).

**Review.** Reopen cited files. Spot-check high-risk diffs. Re-run or sample
the check that matters. Disagreement among workers is resolved here, not by
forwarding the loudest subagent.

**Do not** delegate the immediate blocker your next step depends on. **Do
not** dual-write. **Do not** skip `workflow-design`'s fleet-or-solo gate —
if there is no parallelism, no role conflict, and no context overflow, stop.

## Done bar

A map: what the frontier decided, what each worker returned (files, commands,
residual risk), what you inspected yourself. Uninspected subagent "LGTM" is
opinion (0.1) and cannot close the job.

**Kill line.** You claimed cost savings with no usage artefact → fabrication
or untagged hypothesis, fail. You forwarded a subagent verdict without
opening the diff on a high-blast path → fail.

## Evidence standard

Worker prose 0.1. Their diff you opened 0.5. A check you re-ran 0.7. "This
pattern always saves money" is opinion. Tag every savings, latency, or
quality claim.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: fold into `workflow-design`
Step 5 (surface + cost of the step) rather than a new loaded skill. The
Fable-specific sibling is skipped on purpose.
