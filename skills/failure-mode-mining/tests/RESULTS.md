> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Eval log — failure-mode-mining

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "why is it failing"
2. "our agent keeps getting X wrong"
3. "what's actually going wrong in production"
4. "which failure do we fix first"
5. "run error analysis on these traces"

MUST NOT fire (3, name the sibling each belongs to):
1. "Mine the logs for what job users actually want — turn usage into discovery" → belongs to `trace-to-interview`
2. "What's the cheapest way to test this? Which probe should I run?" → belongs to `probe-matrix`
3. "Set the confidence threshold and decide where a human signs off on each mode" → belongs to `guardrail-design`

## Gates 2–6

| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
