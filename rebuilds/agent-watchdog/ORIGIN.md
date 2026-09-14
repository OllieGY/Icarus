# Origin — agent-watchdog

Inspired by [BuilderIO/skills `agent-watchdog`](https://github.com/BuilderIO/skills/tree/main/skills/agent-watchdog)
(MIT, Builder.io 2026). See [`../NOTICE`](../NOTICE).

**Kept as idea.** Watch or audit another agent's session/PR/branch: reconstruct
the request, check claims against diffs/tests/CI, report gaps, optionally
narrow-fix when authorized.

**Changed for Icarus.** The other agent's recap is scored as opinion until the
artefact is inspected. Independent investigation is mandatory (challenge
before help). Issue classes sit on the evidence ladder. No Codex-session
host protocol, no assumed pager/watch tools — if the artefact cannot be
resolved, that is Empty, not a fake poll. Product-claim grading stays with
`icarus-critic`; this draft does not restate the five whole-idea questions.

**Fold or new.** `[Hypothesis]` only: fold into the critic agent as a
session-audit mode, or into `workflow-design`. Net-new `skills/` surface is
the expensive option and has not been evidenced in real product work.
