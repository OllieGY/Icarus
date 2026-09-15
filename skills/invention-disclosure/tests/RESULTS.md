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

## Judge C — 2026-09-15, scored against the refined text

A third judge, again separate from the author, scored the post-refine text and confirmed all four
earlier fixes landed: the IP-value ladder is Rule 1 compliant on both cells, the untraceable dollar
figure is gone and every remaining one traces, the gate has a real second exit that reaches golden
04's output, and Route C's rows sum to its stated total (verified at $37,590 and $84,090 against a
quoted ≈$37,600–$84,100).

| Gate | Judge C |
|---|---|
| 1 Trigger precision | PASS 5/5 fire, 0/3 misfire |
| 2 Golden set | PASS — 24 / 23 / 24 / 23 / 24, no dimension below 4 |
| 3 Adversarial | PASS 3/3, each fail condition traced to a blocking line |
| 4 Head-to-head | n/a — supersedes none |
| 5 Anti-generic | PASS |
| 6 Five real uses | not run |

Overall 22/25: `method_fidelity` 4, `artifact_complete` 4, `proprietary_edge` 5, `challenge` 5,
`evidence_standard` 4. No auto-fail triggered.

**This verdict is also stale**, because the skill was edited again on its findings — three of which
were real and two of which the previous refine had introduced:

1. `examples/sample.md` Part D still carried the pre-refine ledger total, contradicting its own
   Part E twelve lines below. The earlier refine updated the table and missed the prose.
2. Step 3 tagged the EPO entry band `[Fact]` while Step 5's newly added rule classifies a total
   built from an attorney band as `[Assumption]` — the skill broke its own rule one section above
   where it states it.
3. **`template.md` Part A still had a single exit.** The previous refine fixed the gate in
   `SKILL.md` and left the template, which is where the method is actually executed, carrying the
   exact defect the refine existed to remove. The sharpest finding of the three runs.

Also applied: a third gate shape (a well-formed sentence whose effect is real but not technical,
which is what golden 04 actually turns on, routed to `moat-design-canvas`); and a template
assignment checkbox that distinguishes a contractor who can sign from a customer's engineer who may
not, since the two are the same class of blocking gap needing different actions.

Judge C's `method_fidelity` and `artifact_complete` 4s rested partly on golden 02 reaching its
answer through the reference files rather than through a method step — specifically re-dating new
matter against an existing provisional, and pricing a filing under a SIGNAL ONLY verdict when Step 5
gates the ledger on PATENT. **Both have since been closed**, in `SKILL.md` and mirrored in `template.md`: Step 5 now runs for a
SIGNAL ONLY verdict as well as PATENT, on the ground that a filing made for financing reasons costs
the same as one made for exclusion and skipping the ledger is how a "cheap" diligence filing becomes
an uncosted five-year commitment; and Step 5 gained an already-filed check that asks whether the
filed text enables what would be claimed today, because matter added later takes its own date. That
makes golden 02's two hardest elements reachable from method steps rather than from a Gotcha and a
reference file.

**Consistency check — 2026-09-15.** After three judge runs had twice turned up `SKILL.md` and
`template.md` drifting apart, the pair was checked directly against each other. Five of six areas
matched. Two defects were found, both introduced by the previous round's template edit: the exit
table's clean path routed a builder through Parts B to F and **omitted the kill-line self-check and
the counsel questions**, which Step 7 states unconditionally; and an invented instruction to "skip
Parts B3–B6" would have made Part G's inventor checkboxes untickable. Both are fixed, and both
files now say the same thing — the kill line and the counsel questions run on every path, including
the ones ending in NOTHING.

That drift is this skill's characteristic failure: the method gets fixed and the artifact does not.
Any future edit to one of the two files should be followed by a read of the other.

**Standing position.** Three independent judge runs, each finding fewer and smaller defects than the
last: two Rule 1 breaches and an arithmetic error in the first round, three internal contradictions
in the second, two method-vs-reference gaps in the third. That is convergence, not completion. Every
recorded verdict is stale by the edit that followed it, so **no gate currently stands**, and the
next judge scores a text no judge has seen. Gate 6 needs five real uses whatever that judge finds.

**Test-design change from judge C.** Goldens 02, 04 and 05 stated the ladder rung in the *input*
("[Fact], behaviour 0.7"), which hands the scorer the rung the skill is supposed to derive and
weakens the `evidence_standard` signal on three of five cases. The rung is now removed from those
inputs and the evidence described instead (mail logs, CRM entries, a measured run), leaving the
`[Fact]` tag in place as the kit's convention requires.

**Not adopted:** judge A's reading that `references/jurisdictions.md` inverts its own Saudi grace
periods. Checked against the sources: Saudi national law and the GCC Patent Regulation genuinely
differ on which disclosure gets six months and which gets twelve, so the rows are correct as
written. A clarifying line belongs there, but it is not the correction that was proposed.
