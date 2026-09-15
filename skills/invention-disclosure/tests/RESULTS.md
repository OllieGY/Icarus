# Eval log — invention-disclosure

Status: **not yet graduated.** Written 2026-09-15. Two judge agents, neither of which authored the
skill, scored it the same day and **disagreed on Gate 2** — judge A passed all five golden cases,
judge B failed one on `method_fidelity`. Both runs were scored against the pre-refine text, and the
skill has since been edited on their findings, so **neither verdict stands**. Rule 9 applies: an
edit invalidates a graded run.

The disagreement is recorded rather than averaged, because the two judges agreed on the *cause* even
where they differed on the score, and that agreement is the useful part.

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

| Gate | Judge A | Judge B | Standing status |
|---|---|---|---|
| 1 Trigger precision | PASS 5/5, 0/3 | PASS 5/5, 0/3 | **stale** — re-run after the refine |
| 2 Golden set ≥21/25, no dimension below 4 | PASS 5/5 | **FAIL 4/5** — golden 04 scored 22 with `method_fidelity` 3 | **stale, and the failure is the one to re-test first** |
| 3 Adversarial 3/3 | PASS | PASS | stale |
| 4 Head-to-head | n/a | n/a | n/a — supersedes none |
| 5 Anti-generic | PASS | PASS | stale |
| 6 Five real uses | not run | not run | not run — requires real builder use |

### Where the two judges agreed

Both independently found the same four defects, which is why they were treated as real and fixed
rather than argued with:

1. The `## Evidence standard` row for "the IP is worth money" breached Golden Rule 1 twice — an
   unfunded signed term sheet scored at 1.0 where the money rung needs cash to have moved, and a
   builder's prediction ("investors will love it") scored at 0.3 where Rule 1 caps an opinion at 0.1
   and says scoring one higher fails the skill.
2. Step 3 quoted a $30,000 figure that appeared in no reference file and carried no tag — a breach
   of the skill's own kill line.
3. Step 1 had only one exit, so a case whose contribution is well formed but fails every eligibility
   test could be stopped at the gate when there was still a live publish-or-nothing decision. This
   is what judge B scored as the golden 04 failure and judge A recorded as a robustness gap.
4. Route C's five-year total omitted US office-action responses and the issue fee that Route B
   counts, so the two routes were being compared with different rulers.

### Where they differed

Judge A passed golden 04 on the grounds that the template's "a NO is not fatal; it is a rewrite
instruction" makes the second path reachable. Judge B held that reachable is not the same as
instructed, and scored `method_fidelity` 3. **Judge B's reading was taken**, because a path a
simulation might plausibly miss is a method gap whatever its score.

### Judge A's process note, recorded because it is right

Goldens 01 and 02 as originally written were the skill's own shipped worked examples — golden 01 is
`examples/sample.md`, and golden 02 was the `## What good looks like` section. Both scored full
marks because the answer ships inside the skill, so the honest read of that Gate 2 was three
independent cases, not five. **Golden 02 has since been replaced** with an independent case testing
three things nothing else in the set covered: an input arriving mid-route on an already-filed
provisional, a customer's engineer in the conception, and a SIGNAL ONLY verdict reached through a
detectability failure. Golden 01 remains the seed case mirroring the worked example, which is the
convention across this kit; a future judge should read it as confirmatory, not as evidence of
generalisation.

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
| 2026-09-15 | all | judge A: 1,2,3,5 PASS | Scored against the pre-refine text. Superseded by the refine below. |
| 2026-09-15 | all | judge B: 2 FAIL, rest PASS | Scored against the pre-refine text. Golden 04 `method_fidelity` 3. Superseded by the refine below. |

## Refine run — 2026-09-15

Applied against both judges' findings. Every change below was verified against `GOLDEN_RULES.md` or
the reference files before being made; none was taken on the judges' say-so alone.

**In `SKILL.md`:** the IP-value ladder row rewritten so an unfunded term sheet sits at 0.3 and a
builder's prediction at 0.1, with both impostors named; a second exit added to the Step 1 gate for a
well-formed contribution that fails every eligibility test; a tagging rule added to Step 5 so a
published official fee is `[Fact]` and every attorney band and total is `[Assumption]`, with the two
worked examples corrected to obey it; the untraceable $30,000 replaced with the cited EPO band; the
reframe's three grace-period claims given a source and checked date, and "Qatar's law states no
grace period at all" softened to "Qatari legislation stipulates none", which is what the reference
supports; the GCCPO route relabelled and its filing venue tagged `[Assumption]`, because published
sources describe it two incompatible ways and only the 12-month Paris deadline is solid; a row added
for a customer's engineer as a probable joint inventor; a line added that your own non-NDA
disclosure is prior art against you and belongs in the prior-art field as well as the clock; a note
added that claim 1's 0.7 rung means the system's observed behaviour, stated rather than smuggled;
the twenty-year term arithmetic added to the patent-pending gotcha; the step count corrected from
six to seven.

**In `references/decision-tables.md`:** Route C gains the US office-action and issue-fee rows, its
total moves from ≈$33,000–$72,000 to ≈$37,600–$84,100, and two warnings are added — that omitting
prosecution measures the same route with a shorter ruler, and that EPO and Qatari prosecution after
entry, validation and annuities are still outside the total.

**In the tests:** golden 02 replaced with an independent case; golden 01's expected ledger updated.

**In `skills/moat-design-canvas/SKILL.md`:** its description now excludes "whether to patent
something or keep it secret", closing a boundary that previously ran one way only. That edit
re-stales its own graduation, which its `tests/RESULTS.md` already records.

A third judge was launched against the refined text on 2026-09-15 and had not returned when the
session closed, so **no gate verdict stands on the current text**. The four fixes were instead
verified directly by the author against `GOLDEN_RULES.md` and the reference files: the IP-value
ladder row now puts cash at 1.0, an unfunded term sheet at 0.3 and a prediction at 0.1; every dollar
figure in `SKILL.md` carries a source or an `[Assumption]`; the Step 1 gate has two exits; and Route
C's rows sum to its stated total ($37,590 and $84,090 against a quoted ≈$37,600–$84,100). That is
mechanical verification of specific claims, **not a gate** — a judge separate from the author still
has to score the current text.

**Not adopted:** judge A's reading that `references/jurisdictions.md` inverts its own Saudi grace
periods. Checked against the sources: Saudi national law and the GCC Patent Regulation genuinely
differ on which disclosure gets six months and which gets twelve, so the rows are correct as
written. A clarifying line belongs there, but it is not the correction that was proposed.
