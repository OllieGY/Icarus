# Eval log — context-budget

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "the agent forgets halfway through"
2. "it degrades on long tasks"
3. "we have 40 tools and it picks the wrong one"
4. "design the prompt architecture"
5. "context window keeps filling"

MUST NOT fire (3, name the sibling each belongs to):
1. "Which agent should own the sign-off decision, and what tools and memory does it need?" → belongs to `agent-design`
2. "Do we need a fleet at all, and when should each agent spawn?" → belongs to `workflow-design`
3. "What's the cost-per-outcome budget for this build, and what are the golden cases?" → belongs to `eval-first-spec`

## Gates 2–6

| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
