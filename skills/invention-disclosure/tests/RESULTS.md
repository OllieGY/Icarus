# Eval log — invention-disclosure

Status: **not yet graduated.** Written 2026-09-15. The gates below are specified and **none has
been scored.** Two judge runs were attempted on 2026-09-15 by agents separate from the author; both
stalled before returning a verdict, so there is nothing to record. No score here is inferred, and
the author did not grade their own work — a self-scored gate would be worth less than an empty one.

**Before this skill is described as anything but specified:** run the harness below with a judge
agent that did not write it, record the per-case scores, and fold any surfaced gotcha back into
`SKILL.md` as a `Refine run` line. Gate 6 additionally requires five real uses.

## Gate 1 — Trigger precision

MUST fire (5):
1. "Should we patent this?"
2. "Write up an invention disclosure."
3. "Should we file a provisional?"
4. "Patent or trade secret — which one for this?"
5. "Is a patent worth it / does this IP actually make us defensible?"

MUST NOT fire (3, name the sibling each belongs to):
1. "Design the moat — how do we stay defensible as competitors show up?" → belongs to
   `moat-design-canvas` (this skill hands that canvas one candidate veto sentence; it never sequences
   the dated gates)
2. "Who owns the pilot data / what do we sign at pilot #1 so we can train on it?" → belongs to
   `data-rights-clause` (data terms are that skill's whole subject; this records the dependency row)
3. "Are we compliant / does the EU AI Act apply to us?" → belongs to `compliance-gate` (regulatory
   obligations, not an exclusion right)

## Gates 2–6

| Gate | Status |
|---|---|
| 1 Trigger precision, 5/5 fire and 0/3 misfire | not run |
| 2 Golden set ≥21/25, no dimension below 4 | not run |
| 3 Adversarial 3/3 | not run |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | not run |
| 6 Five real uses | not run — requires real builder use |

## Author-side checks that WERE run (not gates, and not a substitute for one)

These verify mechanics, not judgement. They say the skill is well-formed; they say nothing about
whether it is any good.

| Check | Result |
|---|---|
| `node tools/scripts/validate-skills.mjs` | OK — frontmatter, rubric identity, harness counts, banned terms |
| Frontmatter `description` length | 916 characters, inside the 1024 Agent Skills limit |
| Strict YAML parse of the frontmatter | passes |
| Every fee and date quoted in `SKILL.md` and `examples/sample.md` traceable to `references/jurisdictions.md` | confirmed by cross-check |
| Grace-period arithmetic in the fixtures (golden 02, golden 03, the worked example) | recomputed and correct |

## Runs

| Date | Gate | Result | Notes |
|---|---|---|---|
| 2026-09-15 | all | not scored | Two judge agents attempted; both stalled before returning. Nothing recorded rather than something invented. |
