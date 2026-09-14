# Lessons

Append-only. Newest first. Format in [`TEMPLATE.md`](./TEMPLATE.md); the bar for an entry is in
[`skills/lessons/SKILL.md`](../skills/lessons/SKILL.md).

---

### 2026-09-14 — Icarus skills were unreachable from a Claude session because of repo ownership

**What happened.** Setting this hub up, the session could not read `The-Utopia-Studio/Icarus`
work: Claude Code scopes GitHub access to one owner per session, and a cross-owner attach is
refused outright. Two attempts and a clone all failed before the public
`The-Utopia-Studio/skills` repo turned out to hold the same 45 skills.

**Evidence.** Tool refusal, reproduced twice, plus an unauthenticated clone failure. `[Fact]`

**Cost.** Roughly twenty minutes of a build session, and a plan written against the wrong
assumption that the source was unavailable.

**Lesson.** Anything fellows or agents need to load at session start must sit in a public repo
or under the same owner as the working repo. Private cross-org skills are invisible to the tool
that is supposed to use them.

**Changes.** Hub README states the source repo and commit up front. No rule change in
`GOLDEN_RULES.md`.

---

### 2026-09-14 — A vendored external repo is still sitting inside the studio skill set

**What happened.** `product-manager-skills` was added to the marketplace as a whole external
repo — README, CHANGELOG, LICENSE, `package.json`, `bin/`, `docs/`, `templates/` all still
present — rather than folded into an existing studio skill. It is the exact failure mode
`market-skill-ingestion` exists to stop, and it shipped anyway.

**Evidence.** Directory listing of the vendored folder, and the skill's own SKILL.md naming it
as the failure case. `[Fact]`

**Cost.** Context on every session for every fellow who installs the product pack. One useful
idea carried under a repo's worth of dead weight.

**Lesson.** The ingestion rule only holds if someone runs it before merge, not after. An
external skill enters folded or it does not enter.

**Changes.** This hub carries only the 45 Icarus skills plus two written here. Rule 9 in
`GOLDEN_RULES.md` is the gate for anything added later.
