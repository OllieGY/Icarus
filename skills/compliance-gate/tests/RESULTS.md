# Eval log — compliance-gate

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "are we compliant"
2. "does the EU AI Act apply to us"
3. "the buyer is asking for documentation"
4. "what do we need before an enterprise deal"
5. "is this high-risk"

MUST NOT fire (3, name the sibling each belongs to):
1. "What should our data-rights clause say — can we train on the corrections operators make?" → belongs to `data-rights-clause`
2. "Work through the buyer's vendor security questionnaire and set our pilot positions" → belongs to `pilot-six-term-sheet`
3. "Run the prompt-injection attacks against the copilot and record what breaks" → belongs to `adversarial-launch-pass`

## Gates 2–6

| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
