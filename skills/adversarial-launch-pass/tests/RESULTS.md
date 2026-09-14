# Eval log — adversarial-launch-pass

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "is it safe to launch"
2. "red team this"
3. "can someone make it do something bad"
4. "what about prompt injection"
5. "the buyer's security team is asking"

MUST NOT fire (3, name the sibling each belongs to):
1. "Design the guardrails — what confidence threshold should we auto-approve at, and where does a human sign off?" → belongs to `guardrail-design`
2. "Are we ready to launch — can a stranger reach the outcome in 60 seconds, and is the corrections loop wired?" → belongs to `v1-launch-bar`
3. "Which risk tier are we in, and what conformity documentation will the regulator want?" → belongs to `compliance-gate`

## Gates 2–6
| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
