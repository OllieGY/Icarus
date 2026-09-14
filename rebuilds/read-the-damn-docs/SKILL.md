---
name: read-the-damn-docs
description: >-
 Fires before integrating, upgrading, debugging, or answering current
 behaviour of a third-party API, library, CLI, cloud, or model SDK —
 "add Stripe", "what's the current AI SDK import", "this Next cache is
 wrong". Fetch official docs for the installed or target version before
 coding from memory. Do NOT fire for typo-level edits or for Icarus
 method questions (use icarus-golden-rules).
---

# Read the Damn Docs

Model memory of an API is opinion (0.1). Official docs for the version in
play are the artefact. Rule 4: if you did not fetch it, you do not get to
cite it.

## Trigger / When NOT

Fire when the work depends on an external contract, a version-sensitive
framework, auth/billing/PII/migrations/deploys, an error that smells like
drift, or they asked for current / official / latest.

| Not this | Do this instead |
|---|---|
| Rename a local variable / fix a typo | Proceed. No vendor contract. |
| "What does Icarus score as money?" | `icarus-golden-rules` |
| Internal helper already used next door | Read the local call site. That is the contract. |
| Competing implementation plans | `rebuilds/plan-arbiter` after the docs pass |

## Method

```
Docs progress:
- [ ] Name the exact surface (package, version, endpoint, flag)
- [ ] Prefer local repo docs/ADRs/schemas for *this* codebase
- [ ] Fetch official docs for the version in play (not "the one I remember")
- [ ] Extract the few facts the task needs; tag them
- [ ] Implement or answer from those facts
- [ ] Smallest check that could falsify the reading
```

**Authority order.** Local contract first (README, ADR, generated types,
tests). Then official product docs, API reference, migration guide, changelog
for that major. Then source/types when docs are incomplete. Community posts
are symptoms, not the contract.

**Version.** Before adding a dependency, read the registry version you will
actually install. Writing imports for a major you did not check is
fabrication-by-habit.

**Empty.** If network, auth, or missing files block the fetch, say Empty
before relying on memory. Narrow the uncertainty. Do not present the result
as confirmed-current.

## Done bar

Name the pages or files consulted when they affected the answer. A patch
that "usually" works, with no citation, fails this skill even if CI is green
by luck.

**Kill line.** "From memory, Stripe webhooks work like this" on a
security-sensitive flow, without a fetch → fail. Citing a number, limit, or
flag that was not in the fetched page → Rule 4.

## Evidence standard

Memory 0.1. Official page you opened 0.5. A check you ran against the live
SDK 0.7. Do not upgrade a blog snippet. Tag every empirical claim about
limits, defaults, breaking changes, scopes, and pricing as `[Fact]` only
when the page is in this turn's context.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: this is Rule 4 applied to
vendor APIs and should fold into `icarus-golden-rules` / hub instructions,
not occupy a skill slot on every working session.
