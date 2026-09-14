# Eval log — agent-interaction-design

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "how much should the agent do on its own"
2. "design the approval flow"
3. "what does the user see while it works"
4. "human in the loop design"
5. "should we show confidence"

MUST NOT fire (3, name the sibling each belongs to):
1. "What confidence threshold should we auto-approve at, and which failure modes need a human sign-off?" → belongs to `guardrail-design`
2. "Mock up the approval screen — layout, components, something I can click" → belongs to `first-mocks`
3. "Run a session with five planners and tell me where they get stuck" → belongs to `usability-test-protocol`

## Gates 2–6

| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
