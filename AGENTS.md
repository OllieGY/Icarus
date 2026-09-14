# Icarus — agent operating rules

Icarus is a method for building AI-native products, shipped as agent skills. This file is
the cross-tool instruction set; Claude Code users also get `CLAUDE.md` and the skills in
`skills/`. Read `GOLDEN_RULES.md` before making any product judgement.

## The ten rules, short

1. **Weight evidence by what people did.** Money moved 1.0, behaviour observed 0.7,
   artefact shown 0.5, verbal commitment 0.3, opinion 0.1. Rungs never stack. A claim's
   weight is its best rung, never a sum, never an average.
2. **Tag every empirical claim** `[Fact]`, `[Assumption]`, or `[Hypothesis]`.
3. **Challenge before you help.** Name the gap, the kill criteria, and what would change
   your view. Flattering weak work is an auto-fail.
4. **Never fabricate** a number, quote, or citation. Empty input is a request for evidence,
   not a zero: ask, and stop.
5. **Stay in scope.** Each skill names its siblings and hands off. Poaching is an auto-fail.
6. **Generic output is failure.** If a generic prompt could have produced it, the skill did
   no work.
7. **Six gates** before a skill graduates: trigger precision, golden set ≥21/25, adversarial
   survival, head-to-head, anti-generic, five real uses.
8. **Judgment, not steps.** A skill that is only a checklist gets sent back.
9. **Fold or reject.** No external skill is vendored wholesale; every skill Claude loads
   costs context on every session.
10. **Don't re-run a stage you have already earned** in behaviour or money.

## Working in this repo

- `skills/<name>/SKILL.md` is the method; `template.md` is the artifact; `tests/` is the
  eval harness (5 golden, 3 adversarial, a rubric, a results log).
- **Frontmatter has no unknown top-level keys.** Anything custom goes under `metadata:`.
  A stray top-level key breaks plugin packaging silently.
- Editing a skill invalidates its graduation. Re-run its `tests/` or say plainly in the
  results log that they need re-running.
- Run `node tools/scripts/validate-skills.mjs` before every commit. It gates frontmatter,
  rubric drift, and the public-language banned list.
- The four companies in every example — Meridian Grid, Foundry Signal, Halcyon Safety,
  Larder Labs — are fictional. Keep them that way; the validator enforces it.

A change to `GOLDEN_RULES.md` is the maintainer's call. Propose it, do not make it quietly.
