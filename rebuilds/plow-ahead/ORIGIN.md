# Origin — plow-ahead

Inspired by [BuilderIO/skills `plow-ahead`](https://github.com/BuilderIO/skills/tree/main/skills/plow-ahead)
(MIT, Builder.io 2026). See [`../NOTICE`](../NOTICE).

**Kept as idea.** Explicit go → convert ordinary questions into assumptions,
proceed, stop only for true blockers, recap decisions so the work is auditable
without the thread.

**Changed for Icarus.** Assumptions are tagged `[Fact]` / `[Assumption]` /
`[Hypothesis]`. Empty is named, not filled. Stop conditions are Rule 4
(never fabricate) plus high-blast-radius writes from `agent-design` /
`guardrail-design`, not a host-specific list. Recap claims sit on the evidence
ladder. No Builder installer, no "always spawn subagents" default — parallelism
is `workflow-design`'s fleet-or-solo gate.

**Fold or new.** `[Hypothesis]` only: fold the autonomy contract into
`agent-design` and the stop conditions into `guardrail-design`, or keep this as
session convention in hub instructions. Do not graduate it as a 46th skill
until fellow sessions show clarification theater costing real time, logged.
