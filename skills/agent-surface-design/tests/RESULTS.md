# Eval log — agent-surface-design

> **Description changed on 2026-11-18.** The frontmatter description was rewritten
> trigger-first and shortened so the trigger survives skill-list truncation in Claude Code,
> Cursor, Grok Build, Codex and OpenCode. Some trigger phrasings were dropped. Dollar amounts
> in the body now read `USD n` so they are not parsed as argument placeholders. Gate 1
> (trigger precision) has not been re-run against the new text. Re-run before claiming it.

Status: **not yet graduated.** Written 2026-09-14. Gates below are specified, not yet run
by a judge agent separate from the author.

## Gate 1 — Trigger precision

MUST fire (5):
1. "should we build an MCP server"
2. "how do people find this"
3. "our customers' agents should be able to use this"
4. "distribution for an AI product"
5. "should we ship a skill"

MUST NOT fire (3, name the sibling each belongs to):
1. "Is this the smallest thing that forces adoption?" → belongs to `wedge-five-questions`
2. "Where do we put the human in the loop on this action?" → belongs to `guardrail-design`
3. "Who owns the data from the pilot — draft the clause" → belongs to `data-rights-clause`

## Gates 2–6
| Gate | Status |
|---|---|
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run |
