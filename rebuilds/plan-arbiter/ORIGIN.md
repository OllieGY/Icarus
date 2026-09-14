# Origin — plan-arbiter

Inspired by [BuilderIO/skills `plan-arbiter`](https://github.com/BuilderIO/skills/tree/main/skills/plan-arbiter)
(MIT, Builder.io 2026). See [`../NOTICE`](../NOTICE).

**Kept as idea.** Normalize competing agent plans, cross-review them against
the real task, then adopt / hybrid / revise — with one handoff, rejected
alternatives, and an executor recommendation.

**Changed for Icarus.** Winner is the plan whose load-bearing claims sit
highest on the evidence ladder, not the one with more sections. Hybrids must
name each borrowed piece; averaging two weak plans is an auto-fail. Empty
shared by both plans forces revise-first. No Builder visual-plan links, no
Codex/Claude brand default. Hands off to `workflow-design` / `agent-design`
instead of restating fleet design.

**Fold or new.** `[Hypothesis]` only: this is the critic node in
`workflow-design`. Graduate as net-new only if real product work shows repeated
multi-agent planning loops that the critic table cannot hold.
