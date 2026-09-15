window.ICARUS_SKILL("fellow-level-ladder", {
 "name": "fellow-level-ladder",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Places one fellow on a five-rung ladder and returns the one artefact that moves them up. It does not grade competence, confidence, or months served. For each level — Literate, Practitioner, Operator, Frontier, Author — it asks a single binary question: does the level's exit artefact EXIST, right now, and can the fellow cite it? The assigned level is the highest rung with an unbroken chain of existing exit artefacts beneath it. The output is the filled <code>template.md</code>: the ladder table with a cited artefact and its evidence rung on every row, the assigned level, a banned-signal check that strips out every feeling offered as proof, and the next exit artefact with the shipped skill that produces it. A fellow who feels like an Operator but holds no signed pilot is a Practitioner with a story.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A career ladder is normally a competency matrix graded on confidence and a mentor's gut. This ladder is the evidence ladder pointed at the fellow instead of the idea. Each rung is held only by an artefact that already exists and clears a strictly higher evidence rung than the rung below it: Literate is a passed problem-quality-scorecard (an artefact, 0.5); Practitioner is a behaviour signal a probe actually produced (0.7); Operator is a signed paid pilot (money, 1.0); Frontier is a launched product proven to learn in production (0.7 compounding); Author is a defensible moat others build on (money, durable). You do not <em>reach</em> a level by being ready for it. You <em>hold</em> a level because the artefact exists. The only move up the ladder is to produce the next artefact — an argument for the level, however sincere, is opinion, and opinion is 0.1 on every rung.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it to assess where one named fellow sits and what one artefact unlocks their next rung. Trigger phrases: &quot;how's this fellow doing&quot;, &quot;assess a fellow&quot;, &quot;what level am I / is this fellow at&quot;, &quot;am I ready to level up&quot;, &quot;level up this fellow&quot;.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th></tr></thead><tbody><tr><td>The line between what Daedalus builds once and what the fellow owns (build vs buy, &quot;what does the platform give me&quot;)</td><td><a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (sibling, section 10). This skill <em>reads</em> that map only to test the Author rung; it does not draw the boundary.</td></tr><tr><td>Where to START / which Icarus stages apply to their type (blank page vs traction vs mature product)</td><td><a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> (section 00). It classifies and routes the flow; this grades progression against exit artefacts.</td></tr><tr><td>To score the problem / check the pilot is real / weight a discovery signal</td><td>the artefact's own skill: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>. This skill cites their verdicts; it never re-derives them.</td></tr></tbody></table></div>\n<p>Do not assess a fellow from a description of how far along they are. If no artefacts can be cited, the input is not ready; run Step 1 and ask for the citations, or return the honest verdict of <em>pre-Literate, no artefact on file</em>. Never invent an artefact, a score, or a signature to fill a rung.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Five steps. The whole method rests on one rule: a rung is held only by a citation, never by a claim.</p>\n<h3 id=\"step-1-name-the-fellow-and-quarantine-the-claim\">Step 1 — Name the fellow and quarantine the claim</h3>\n<p>State the fellow, the domain, and the level they (or their mentor) <em>claim</em>. The claim is an input to be disproven, not evidence. Write it in the claim box and do not let it touch the ladder. If the request is a bare &quot;how's my fellow doing&quot; with no artefacts attached, the one unblocking ask is: <em>which of the five exit artefacts exist, and where can I see each one?</em> Do not proceed on a narrative.</p>\n<h3 id=\"step-2-walk-the-five-rungs-cite-or-fail-each\">Step 2 — Walk the five rungs, cite or fail each</h3>\n<p>For each level, find the exit artefact, cite it (name + path/link + date), and score the rung the cited artefact actually clears. A rung is HELD only if the artefact <strong>exists</strong> and <strong>clears its required rung</strong>. Missing artefact, or an artefact that only reaches a lower rung, is NOT HELD.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Level</th><th>Exit artefact that must EXIST</th><th>Produced by</th><th>Rung it must clear</th><th>Held when…</th></tr></thead><tbody><tr><td><strong>Literate</strong></td><td>a <strong>passed</strong> problem-quality-scorecard (verdict PASS, ≥ 32/40)</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (01)</td><td>artefact 0.5</td><td>the fellow has framed a problem to first principles and cleared the go/no-go gate</td></tr><tr><td><strong>Practitioner</strong></td><td>an evidence-ladder table whose load-bearing claim sits at <strong>behaviour 0.7 or higher</strong>, produced by a probe the fellow actually ran</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (04) + <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (02)</td><td>behaviour 0.7</td><td>a real user <em>did</em> something; a claim moved up the ladder by observation, not enthusiasm</td></tr><tr><td><strong>Operator</strong></td><td>a <strong>signed</strong> pilot-six-term-sheet, 6/6 terms non-empty, price &gt; 0 that moves</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07)</td><td>money 1.0</td><td>a validated problem converted into a paying customer commitment</td></tr><tr><td><strong>Frontier</strong></td><td>a v1-launch-bar <strong>GO</strong> (both gates green on tape) AND a refine-flywheel cadence doc with ≥ 1 autonomy promotion logged <strong>as a scored eval result</strong></td><td><a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a> (07) + <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08)</td><td>behaviour 0.7, compounding in production</td><td>a shipped product provably learns from corrections and raised its own autonomy by eval, not by feel</td></tr><tr><td><strong>Author</strong></td><td>a moat-design-canvas with the <strong>data-advantage gate cleared</strong> (through-it signal logged) AND a platform-vs-venture map placing a specific <strong>owned, reused</strong> asset on the venture side</td><td><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (06) + <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (10)</td><td>money 1.0, durable</td><td>the fellow authored defensible IP that compounds and that others build on</td></tr></tbody></table></div>\n<p>Tag every citation <code>[Fact]</code> (you can see the artefact), <code>[Assumption]</code> (you were told it exists but cannot see it), or <code>[Hypothesis]</code> (it is planned). Only <code>[Fact]</code> counts toward a held rung.</p>\n<h3 id=\"step-3-apply-the-contiguity-rule-no-skipping\">Step 3 — Apply the contiguity rule (no skipping)</h3>\n<p>The ladder is monotone. The assigned level is the <strong>highest level with an unbroken chain of existing exit artefacts beneath it.</strong> A gap caps the fellow at the last held rung before the gap — even if a higher artefact exists.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Pattern</th><th>Assigned level</th><th>Why</th></tr></thead><tbody><tr><td>Literate ✓, Practitioner ✓, Operator ✗</td><td>Practitioner</td><td>last unbroken rung</td></tr><tr><td>Literate ✗, Practitioner ✗, Operator ✓ (signed pilot, no passed scorecard)</td><td><strong>pre-Literate</strong></td><td>the chain is broken at the bottom; money on an unframed problem is a red flag, not a promotion</td></tr><tr><td>all five ✓</td><td>Author</td><td>full chain</td></tr></tbody></table></div>\n<p>A higher artefact sitting above a gap does not raise the level. It becomes the evidence that a lower artefact must be <strong>backfilled</strong> — name that missing lower artefact as the immediate next step.</p>\n<h3 id=\"step-4-banned-signal-check\">Step 4 — Banned-signal check</h3>\n<p>List everything offered as proof that is not an artefact: &quot;feels ready&quot;, &quot;has been at it six months&quot;, &quot;the team believes in them&quot;, &quot;very confident&quot;, &quot;clearly talented&quot;. Score each 0.1 (opinion) and mark it EXCLUDED. Then state, in one line, which held rung — if any — each banned signal was standing in for, and which artefact would replace it. Confidence never votes.</p>\n<h3 id=\"step-5-assign-the-level-and-name-the-one-next-artefact\">Step 5 — Assign the level and name the ONE next artefact</h3>\n<p>Return: the assigned level and the single artefact that proves it; then the one exit artefact the fellow must produce next — either the next rung's artefact, or, if there is a gap, the missing lower artefact to backfill first. Name the shipped skill that produces it and the rung it will clear. One artefact, not a plan. The next rung is a thing that will exist, or it is not the next rung.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A level is held only by an artefact that clears its rung on the evidence ladder (money 1.0 → behaviour 0.7 → artefact 0.5 → verbal commitment 0.3 → opinion 0.1). Feelings, confidence, and tenure are opinion (0.1) and can hold no rung. A verbal LOI or a &quot;they promised to sign&quot; is commitment (0.3) and does <strong>not</strong> hold Operator — Operator needs money that moved. The bar rises every rung: an artefact that once existed but is no longer true (a pilot signed on a wedge since abandoned) has decayed below its rung and stops holding the level until re-validated.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Claimed level is not held level.</strong> Fellows and mentors will state a level with conviction. Treat it as a hypothesis to disprove. The only thing that raises the assigned level is a citation, so never grade up on how sure anyone sounds.</li><li><strong>The gap trap.</strong> A fellow can hold a higher artefact while missing a lower one — a signed pilot with no passed problem-quality-scorecard on file. Contiguity caps them at the gap. Money on a problem that was never framed to first principles is a flag to backfill, not a leap to Operator. Name the missing lower artefact as the next step.</li><li><strong>Stale artefact.</strong> An exit artefact that was produced once but whose inputs have changed no longer holds the rung. Check the artefact is still true today, not just that it was generated. A passed scorecard for a problem the fellow has since pivoted away from holds nothing.</li><li><strong>Author inflation.</strong> &quot;I built a slick internal tool&quot; is not Author. Author needs the asset on the <strong>venture</strong> side of platform-vs-venture (owned, a moat) and reused by others. A primitive Daedalus builds once for every fellow — router, eval harness, RAG, guardrails — is not the fellow's moat, however much they built of it.</li><li><strong>Don't over-drama the low rungs.</strong> A fellow with only a passed scorecard is a clean Literate, not &quot;behind&quot;. State the level calmly and name the next artefact. The ladder measures artefacts, not worth.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — Mentix (industrial AI) claims Operator on six months and a strong feeling; holds a passed scorecard and a 0.7 Wizard-of-Oz behaviour signal but only a verbal LOI, so is assigned Practitioner, with the signed pilot-six-term-sheet named as the next exit artefact.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (section 10, sibling) — draws the build-vs-buy boundary this skill reads to test the Author rung. Compose them: assess the fellow here, and when Author is the open question, run platform-vs-venture to check the moat asset is actually owned.</li><li><a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> (section 00) — routes a fellow to their starting stages by type; this grades where they have got to. Path-router at intake, level-ladder at review.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (01), <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (04) + <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (02), <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07), <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a> (07) + <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08), <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (06) — the skills that <em>produce</em> the five exit artefacts. This ladder cites their outputs; it never re-runs their gates.</li><li>Supersedes nothing. There is no generic &quot;founder maturity model&quot; to beat; the proprietary move is binding each rung to an existing artefact and a rising evidence rung, which a competency matrix cannot do.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Fellow Level Assessment</h1>\n<p><strong>Fellow / venture:</strong> _______________ <strong>Domain:</strong> _______________ <strong>Date:</strong> _______________ <strong>Assessed by:</strong> _______________</p>\n<h2>Step 1 — The claim (quarantined — not evidence)</h2>\n<blockquote><p>A claimed level is an input to be disproven. It does not touch the ladder. If no artefacts are cited, stop here and ask for them.</p></blockquote>\n<p><strong>Claimed level (if any):</strong> _______________ <strong>Claimed on the basis of:</strong> _______________ <strong>Artefacts cited up front?</strong> ☐ Yes → go to Step 2  ☐ No → ask: <em>which of the five exit artefacts exist, and where can I see each one?</em></p>\n<h2>Step 2 — Walk the five rungs, cite or fail each</h2>\n<p>A rung is HELD only if the exit artefact <strong>exists</strong> (<code>[Fact]</code> — you can see it) <strong>and</strong> clears its required rung. Missing, unseen (<code>[Assumption]</code>), planned (<code>[Hypothesis]</code>), or under-rung = NOT HELD.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Level</th><th>Exit artefact required</th><th>Rung it must clear</th><th>Cited artefact (name · path/link · date)</th><th>Tag</th><th>Rung it clears</th><th>HELD?</th></tr></thead><tbody><tr><td>Literate</td><td>passed problem-quality-scorecard (PASS, ≥ 32/40)</td><td>artefact 0.5</td><td>_______________</td><td>☐F ☐A ☐H</td><td>____</td><td>☐</td></tr><tr><td>Practitioner</td><td>evidence-ladder table, load-bearing claim ≥ behaviour 0.7, from a probe actually run</td><td>behaviour 0.7</td><td>_______________</td><td>☐F ☐A ☐H</td><td>____</td><td>☐</td></tr><tr><td>Operator</td><td>signed pilot-six-term-sheet, 6/6 terms, price &gt; 0 moved</td><td>money 1.0</td><td>_______________</td><td>☐F ☐A ☐H</td><td>____</td><td>☐</td></tr><tr><td>Frontier</td><td>v1-launch-bar GO + refine-flywheel doc, ≥ 1 eval-scored autonomy promotion</td><td>behaviour 0.7, compounding</td><td>_______________</td><td>☐F ☐A ☐H</td><td>____</td><td>☐</td></tr><tr><td>Author</td><td>moat-design-canvas data-advantage gate cleared + platform-vs-venture map, owned reused asset on venture side</td><td>money 1.0, durable</td><td>_______________</td><td>☐F ☐A ☐H</td><td>____</td><td>☐</td></tr></tbody></table></div>\n<p><strong>Stale-artefact check:</strong> is every cited artefact still true today (inputs unchanged)? _______________  <em>(a decayed artefact holds no rung)</em></p>\n<h2>Step 3 — Contiguity rule (no skipping)</h2>\n<blockquote><p>Assigned level = the highest level with an <strong>unbroken chain</strong> of held exit artefacts beneath it. A gap caps the fellow at the last held rung before it, even if a higher artefact exists.</p></blockquote>\n<p><strong>Held chain from the bottom:</strong> Literate ___ → Practitioner ___ → Operator ___ → Frontier ___ → Author ___  <em>(✓ / ✗ each)</em></p>\n<p><strong>Gap (if any):</strong> _______________ <strong>Higher artefact sitting above the gap (if any):</strong> _______________ → this is evidence to <strong>backfill</strong> the missing lower artefact, not a level.</p>\n<h2>Step 4 — Banned-signal check</h2>\n<blockquote><p>Anything offered as proof that is not an artefact scores 0.1 (opinion) and is EXCLUDED. Confidence never votes.</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal offered</th><th>Rung</th><th>Standing in for which held rung?</th><th>Artefact that would replace it</th><th>Verdict</th></tr></thead><tbody><tr><td>_______________</td><td>0.1</td><td>_______________</td><td>_______________</td><td>EXCLUDED</td></tr><tr><td>_______________</td><td>0.1</td><td>_______________</td><td>_______________</td><td>EXCLUDED</td></tr></tbody></table></div>\n<h2>Step 5 — Assignment + the ONE next artefact</h2>\n<p><strong>Assigned level:</strong> _______________ <strong>Proven by (the single cited artefact that holds it):</strong> _______________ <code>[Fact]</code></p>\n<p><strong>Claim vs held (name the gap plainly):</strong> _______________</p>\n<p><strong>Next exit artefact to produce:</strong> _______________ <strong>Skill that produces it:</strong> _______________ <strong>Rung it will clear:</strong> _______________ <strong>Backfill or advance?</strong> ☐ Backfill a missing lower artefact  ☐ Advance to the next rung</p>\n<blockquote><p>One artefact, not a plan. If you cannot name a single artefact that will exist, you have not found the next rung.</p></blockquote>",
  "path": "skills/fellow-level-ladder/template.md"
 },
 "example": {
  "html": "<h1>Fellow Level Assessment — Mentix (worked)</h1>\n<p><strong>Fellow / venture:</strong> Mentix (industrial AI — AI copilot for factory managers) <strong>Domain:</strong> plant/factory operations <strong>Date:</strong> 2026-07-21 <strong>Assessed by:</strong> studio review</p>\n<blockquote><p>All artefacts, scores, and dates here are synthetic, domain-plausible test fixtures — not real fellow records. They show the mechanic, not a verdict on a real person.</p></blockquote>\n<p><strong>Fellow's ask:</strong> &quot;I've been building Mentix for six months and I really feel like an Operator now — can you confirm the level?&quot;</p>\n<h2>Step 1 — The claim (quarantined)</h2>\n<p><strong>Claimed level:</strong> Operator. <strong>Claimed on the basis of:</strong> six months of work and a strong feeling of momentum, plus a plant manager who &quot;definitely wants to sign&quot;. <strong>Artefacts cited up front?</strong> Partly — a scorecard and a probe log were on file; no signed pilot. The claim itself is quarantined: six months and a feeling are not evidence. <code>[Assumption]</code> the fellow believes they are an Operator; nothing signed yet says so.</p>\n<h2>Step 2 — Walk the five rungs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Level</th><th>Exit artefact required</th><th>Cited artefact</th><th>Tag</th><th>Rung it clears</th><th>HELD?</th></tr></thead><tbody><tr><td>Literate</td><td>passed problem-quality-scorecard</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> output, 34/40 PASS, 2026-05-02, on file</td><td><code>[Fact]</code></td><td>artefact 0.5</td><td><strong>YES</strong></td></tr><tr><td>Practitioner</td><td>evidence-ladder claim ≥ 0.7 from a run probe</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> table, 2026-06-18: load-bearing claim at behaviour 0.7 from a Wizard-of-Oz run (<a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> → <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>) — 4 of 5 shift supervisors acted on the copilot's proposed changeover unprompted</td><td><code>[Fact]</code></td><td>behaviour 0.7</td><td><strong>YES</strong></td></tr><tr><td>Operator</td><td>signed pilot-six-term-sheet, price &gt; 0 moved</td><td>none. A verbal LOI from one plant manager: &quot;we want to run a pilot next quarter.&quot; No sheet, no price, no signature.</td><td><code>[Assumption]</code></td><td>commitment 0.3</td><td><strong>NO</strong></td></tr><tr><td>Frontier</td><td>v1-launch-bar GO + flywheel autonomy promotion</td><td>none — no v1 gated, no product live</td><td>—</td><td>—</td><td><strong>NO</strong></td></tr><tr><td>Author</td><td>moat-design-canvas + owned reused asset</td><td>none</td><td>—</td><td>—</td><td><strong>NO</strong></td></tr></tbody></table></div>\n<p><strong>Stale-artefact check:</strong> the scorecard and the probe log both concern the same changeover-scheduling wedge the fellow is still building. Not stale. Both still hold.</p>\n<h2>Step 3 — Contiguity rule</h2>\n<p><strong>Held chain from the bottom:</strong> Literate ✓ → Practitioner ✓ → Operator ✗ → Frontier ✗ → Author ✗.</p>\n<p>Unbroken chain reaches Practitioner. No gap below it. The chain breaks at Operator.</p>\n<p><strong>Gap:</strong> none below the top of the held chain — this is a clean cap, not a gap trap. The fellow is stopped at Practitioner because Operator's artefact does not exist, not because a lower one is missing.</p>\n<h2>Step 4 — Banned-signal check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal offered</th><th>Rung</th><th>Standing in for which held rung?</th><th>Artefact that would replace it</th><th>Verdict</th></tr></thead><tbody><tr><td>&quot;six months in&quot; (tenure)</td><td>0.1</td><td>Operator</td><td>a signed pilot-six-term-sheet</td><td>EXCLUDED</td></tr><tr><td>&quot;I feel like an Operator&quot; (confidence)</td><td>0.1</td><td>Operator</td><td>a signed pilot-six-term-sheet</td><td>EXCLUDED</td></tr><tr><td>&quot;a plant manager definitely wants to sign&quot; (verbal LOI)</td><td>0.3</td><td>Operator</td><td>the same LOI, converted to a signed 6/6 sheet with money that moves</td><td>EXCLUDED (commitment 0.3 &lt; money 1.0)</td></tr></tbody></table></div>\n<p>The whole Operator claim rests on one verbal promise and a feeling. A verbal &quot;yes&quot; is 0.3 on the ladder. Operator needs 1.0. The claim is two full rungs of evidence short of what it asserts.</p>\n<h2>Step 5 — Assignment + the ONE next artefact</h2>\n<p><strong>Assigned level:</strong> <strong>Practitioner.</strong> <strong>Proven by:</strong> the 2026-06-18 evidence-ladder table carrying a behaviour-0.7 signal from the Wizard-of-Oz run. <code>[Fact]</code></p>\n<p><strong>Claim vs held:</strong> Mentix claims Operator; Mentix holds Practitioner. The distance is exactly one artefact — a signed paid pilot — and no amount of conviction closes it. The LOI is a good lead, not a level. Money on the table is the only thing that turns this plant manager's &quot;want to&quot; into Operator.</p>\n<p><strong>Next exit artefact to produce:</strong> a <strong>signed pilot-six-term-sheet</strong> — 6/6 terms non-empty, a price &gt; 0 that moves before or during the pilot, the data-rights clause signed at pilot #1, and the production price agreed now. <strong>Skill that produces it:</strong> <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07). <strong>Rung it will clear:</strong> money 1.0. <strong>Backfill or advance?</strong> Advance. Take the existing LOI into <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> and convert it; do not run another probe — the behaviour signal already holds Practitioner. The one open question is whether this buyer will move money.</p>",
  "path": "skills/fellow-level-ladder/examples/sample.md"
 },
 "rubric": {
  "skill": "fellow-level-ladder",
  "pass_threshold": 21,
  "max": 25,
  "min_per_dimension": 4,
  "dimensions": [
   {
    "id": "method_fidelity",
    "weight": 5,
    "desc": "Follows the Icarus method exactly; no steps skipped or softened."
   },
   {
    "id": "artifact_complete",
    "weight": 5,
    "desc": "Produces the named artifact, fully filled, with the required numbers and citations."
   },
   {
    "id": "proprietary_edge",
    "weight": 5,
    "desc": "Could NOT have come from a generic prompt. Uses first-principles / evidence-ladder / eval logic."
   },
   {
    "id": "challenge",
    "weight": 5,
    "desc": "Pushes back on weak input; names gaps, kill criteria, and what would change the view."
   },
   {
    "id": "evidence_standard",
    "weight": 5,
    "desc": "Weights money and behaviour over opinion; tags claims [Fact]/[Assumption]/[Hypothesis]."
   }
  ],
  "auto_fail": [
   "Fabricated a specific number, quote, or citation not in the input",
   "Flattered a weak idea instead of challenging it",
   "Fired outside its trigger scope / poached a sibling skill",
   "Output is generic PM boilerplate"
  ]
 },
 "results": {
  "gate1": {
   "mustFire": [
    "How's this fellow doing?",
    "Assess Mentix / where is this fellow on the ladder?",
    "What level am I at right now?",
    "Am I ready to level up?",
    "Level up this fellow — what's the next rung?"
   ],
   "mustNotFire": [
    {
     "phrase": "Should the fellow build their own eval harness or use the platform's? Draw the build-vs-buy line.",
     "sibling": "platform-vs-venture",
     "local": true
    },
    {
     "phrase": "Where should this fellow start / which Icarus stages apply to my type?",
     "sibling": "fellow-path-router",
     "local": true
    },
    {
     "phrase": "Is this problem good enough to build — score it.",
     "sibling": "problem-quality-scorecard",
     "local": true
    }
   ]
  },
  "judge": [],
  "scores": null,
  "dimensionScores": [
   {
    "id": "method_fidelity",
    "score": "5",
    "basisHtml": "<p>Crisp 5-step method; template.md mirrors it 1:1; sample.md executes all five steps end to end.</p>"
   },
   {
    "id": "artifact_complete",
    "score": "5",
    "basisHtml": "<p>template.md is a fully fillable artefact — ladder table with rung numbers (0.5/0.7/1.0), citation columns (name·path·date), tag boxes, stale-check, held-chain, banned-signal table, single-next-artefact block; sample.md filled with real dates/scores/citations.</p>"
   },
   {
    "id": "proprietary_edge",
    "score": "5",
    "basisHtml": "<p>Repoints the evidence ladder (money 1.0 → behaviour 0.7 → artefact 0.5 → commitment 0.3 → opinion 0.1) at the <em>fellow</em>, binds each rung to a specific existing sibling artefact, and adds monotone contiguity + stale-decay. A generic founder-maturity model cannot do this.</p>"
   },
   {
    "id": "challenge",
    "score": "5",
    "basisHtml": "<p>Quarantines the claim; refuses confirmation on feeling (adversarial/02); returns the bottom rung on a &quot;level them up&quot; request (golden/03); denies Author inflation on an internal tool (golden/04); each rung names the exact artefact that would change the view; notes &quot;if scorecard KILLS (&lt;28), the pilot is a warning sign&quot;.</p>"
   },
   {
    "id": "evidence_standard",
    "score": "5",
    "basisHtml": "<p><code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code> tagging with only <code>[Fact]</code> counting; money/behaviour weighted over opinion; verbal LOI (0.3) explicitly cannot hold Operator; stale artefacts decay below their rung.</p>"
   }
  ],
  "runs": [
   [
    "2026-08-06",
    "G1 Trigger precision",
    "PASS — 5/5 fire, 3/3 no-fire",
    "All 5 trigger phrasings named in description; all 3 no-fire cases routed to the correct sibling (platform-vs-venture / fellow-path-router / problem-quality-scorecard)."
   ],
   [
    "2026-08-06",
    "Kill line",
    "PASS — not tripped",
    "All four kill conditions designed out: rungs held only by an existing cited artefact (Step 2), feelings/tenure banned & scored 0.1 EXCLUDED (Step 4), contiguity caps at the gap (Step 3), one next artefact only (Step 5)."
   ],
   [
    "2026-08-06",
    "Rubric",
    "25/25 (≥ 21, min 4/dim)",
    "5/5 on every dimension; no auto-fail flag raised."
   ],
   [
    "2026-08-06",
    "Gate 4 Supersession",
    "n/a",
    "supersedes: none."
   ],
   [
    "2026-08-06",
    "VERDICT",
    "PASS (25/25)",
    "Kill line clean; every golden + adversarial case matches the author's expected shape."
   ]
  ],
  "gotchasSurfaced": "",
  "refineNotes": [
   {
    "heading": "Scored run — 2026-08-06 (judge)",
    "html": "<p><strong>Verdict: PASS — 25/25 (threshold 21). Kill line NOT tripped. No auto-fail.</strong></p>\n<h3>Gate 1 — Trigger precision</h3>\n<ul><li>MUST fire 5/5: &quot;how's this fellow doing&quot;, &quot;assess a fellow&quot;, &quot;what level am I / is this fellow at&quot;, &quot;am I ready to level up&quot;, &quot;level up this fellow&quot; — all enumerated verbatim in the <code>description</code> and <code>When to use</code>.</li><li>MUST NOT fire 3/3: build-vs-buy → <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>; where-to-start/which-stages → <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a>; score-the-problem → <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>. Each is explicitly handed off in the &quot;When NOT&quot; table and re-tested in adversarial/03 and the golden set. No sibling poached.</li></ul>\n<h3>Gate 2 — Kill line / auto-fail (the skill's own kill line)</h3>\n<p>Not tripped. The design forecloses all four kill conditions:</p>\n<ul><li><strong>No level without an existing exit artefact.</strong> Step 2 holds a rung only when the artefact <code>[Fact]</code> exists and clears its required evidence rung; <code>[Assumption]</code>/<code>[Hypothesis]</code>/under-rung = NOT HELD. sample.md denies Operator on a verbal LOI (0.3 &lt; 1.0).</li><li><strong>No grading on feelings.</strong> Step 4 scores every feeling/tenure/confidence 0.1 and marks EXCLUDED; <code>description</code> states self-assessment is banned and scored 0.1. adversarial/02 refuses to confirm Operator on &quot;six months + feels like it&quot;.</li><li><strong>Contiguity enforced.</strong> Step 3 assigns the highest rung with an unbroken chain; golden/03 (gap trap) returns <strong>pre-Literate</strong> despite a signed pilot sitting above a missing scorecard — money on an unframed problem is flagged, not promoted.</li><li><strong>One next artefact.</strong> Step 5 returns a single exit artefact + producing skill + rung, &quot;One artefact, not a plan.&quot;</li><li>rubric auto_fail list clear: no fabrication (claims tagged, &quot;no invented artefact/score&quot; repeated across fixtures), no flattery (challenges inflation in golden/03, /04 and adversarial/02), in-scope, not boilerplate.</li></ul>\n<h3>Gate 3 — Rubric (5 × 5)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>Score</th><th>Basis</th></tr></thead><tbody><tr><td>method_fidelity</td><td>5</td><td>Crisp 5-step method; template.md mirrors it 1:1; sample.md executes all five steps end to end.</td></tr><tr><td>artifact_complete</td><td>5</td><td>template.md is a fully fillable artefact — ladder table with rung numbers (0.5/0.7/1.0), citation columns (name·path·date), tag boxes, stale-check, held-chain, banned-signal table, single-next-artefact block; sample.md filled with real dates/scores/citations.</td></tr><tr><td>proprietary_edge</td><td>5</td><td>Repoints the evidence ladder (money 1.0 → behaviour 0.7 → artefact 0.5 → commitment 0.3 → opinion 0.1) at the <em>fellow</em>, binds each rung to a specific existing sibling artefact, and adds monotone contiguity + stale-decay. A generic founder-maturity model cannot do this.</td></tr><tr><td>challenge</td><td>5</td><td>Quarantines the claim; refuses confirmation on feeling (adversarial/02); returns the bottom rung on a &quot;level them up&quot; request (golden/03); denies Author inflation on an internal tool (golden/04); each rung names the exact artefact that would change the view; notes &quot;if scorecard KILLS (&lt;28), the pilot is a warning sign&quot;.</td></tr><tr><td>evidence_standard</td><td>5</td><td><code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code> tagging with only <code>[Fact]</code> counting; money/behaviour weighted over opinion; verbal LOI (0.3) explicitly cannot hold Operator; stale artefacts decay below their rung.</td></tr></tbody></table></div>\n<p><strong>Total: 25/25.</strong></p>\n<h3>Gate 4 — Supersession</h3>\n<p>n/a (<code>supersedes: none</code>).</p>\n<h3>Per-case verification (author expected shape vs method)</h3>\n<ul><li><strong>G01 Azraq → Literate</strong> ✓ scorecard 0.5 holds Literate; not inflated to Practitioner; next = behaviour-0.7 signal via <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>→<a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>.</li><li><strong>G02 Barrier → Operator</strong> ✓ £40k <em>prepaid</em> read as money 1.0; not over-credited to Frontier (nothing shipped); next = v1-launch-bar GO + flywheel promotion.</li><li><strong>G03 Durian (gap trap) → pre-Literate</strong> ✓ signed pilot above a missing scorecard caps at the gap; refuses &quot;level up&quot;; next = backfill <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>.</li><li><strong>G04 Mentix → Frontier</strong> ✓ launch-bar GO + eval-scored L1→L2 promotion holds Frontier; internal ingestion tool correctly denied as a platform primitive; next = <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> + <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>.</li><li><strong>G05 new fellow → pre-Literate</strong> ✓ nothing to cite; calm; domain background holds no rung; next = first <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>.</li><li><strong>A01 vague</strong> ✓ asks the one artefact question, invents nothing.</li><li><strong>A02 feeling</strong> ✓ bans tenure + confidence, refuses to confirm, asks for the signed pilot.</li><li><strong>A03 out of scope</strong> ✓ declines, routes to <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>, draws no boundary map.</li></ul>\n<p>_Note: <code>scratchpad/JUDGE_PROTOCOL.md</code> was not present at run time; gate structure and Output section reconstructed from <code>tests/rubric.json</code> + this file's Gate 1 / kill-line sections, which the task message reproduces._</p>"
   }
  ],
  "killLine": "<p>Auto-fail this skill if the output:</p>\n<ul><li>assigns any level whose exit artefact does not EXIST and cannot be cited (e.g. grants Operator on a verbal LOI, or Author on an internal tool), OR</li><li>grades a rung on feelings / confidence / tenure instead of a cited artefact (any level held by a 0.1 signal), OR</li><li>skips the contiguity rule — assigns a level above a gap in the artefact chain (e.g. Operator on a signed pilot with no passed problem-quality-scorecard), OR</li><li>returns more than one &quot;next artefact&quot; (a plan/roadmap instead of the single next exit artefact and the skill that produces it).</li></ul>",
  "html": "<h1>Eval log — fellow-level-ladder</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;How's this fellow doing?&quot;</li><li>&quot;Assess Mentix / where is this fellow on the ladder?&quot;</li><li>&quot;What level am I at right now?&quot;</li><li>&quot;Am I ready to level up?&quot;</li><li>&quot;Level up this fellow — what's the next rung?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Should the fellow build their own eval harness or use the platform's? Draw the build-vs-buy line.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (section 10 sibling — the Daedalus-builds-once vs fellow-owns boundary; this skill only reads that map for the Author rung)</li><li>&quot;Where should this fellow start / which Icarus stages apply to my type?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> (section 00 — classifies Type A/B/C and routes stages; this grades progression, not entry)</li><li>&quot;Is this problem good enough to build — score it.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (01 — the go/no-go gate this skill cites as the Literate artefact; it does not re-run the gate)</li></ol>\n<h2>Skill-specific kill line (judge enforces)</h2>\n<p>Auto-fail this skill if the output:</p>\n<ul><li>assigns any level whose exit artefact does not EXIST and cannot be cited (e.g. grants Operator on a verbal LOI, or Author on an internal tool), OR</li><li>grades a rung on feelings / confidence / tenure instead of a cited artefact (any level held by a 0.1 signal), OR</li><li>skips the contiguity rule — assigns a level above a gap in the artefact chain (e.g. Operator on a signed pilot with no passed problem-quality-scorecard), OR</li><li>returns more than one &quot;next artefact&quot; (a plan/roadmap instead of the single next exit artefact and the skill that produces it).</li></ul>\n<h2>Expected behaviour per case (author's read; judge verifies)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>Assigned level</th><th>Next exit artefact</th><th>Key challenge</th></tr></thead><tbody><tr><td>G01 Azraq</td><td>Literate</td><td>evidence-ladder 0.7 signal via <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td><td>don't inflate a strong scorecard to Practitioner</td></tr><tr><td>G02 Barrier</td><td>Operator</td><td>v1-launch-bar GO + flywheel promotion</td><td>read prepaid as money 1.0; don't over-credit to Frontier</td></tr><tr><td>G03 Durian (gap trap)</td><td>pre-Literate</td><td>backfill <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td><td>signed pilot above a missing scorecard caps at the gap</td></tr><tr><td>G04 Mentix</td><td>Frontier</td><td><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> + <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a></td><td>Author inflation — internal tool is a platform primitive</td></tr><tr><td>G05 new fellow (mundane)</td><td>pre-Literate</td><td>first <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td><td>calm; domain background holds no rung</td></tr><tr><td>A01 vague</td><td>(none) — ask ONE Q</td><td>list the five artefacts, ask which exist</td><td>no grading on narrative</td></tr><tr><td>A02 feeling</td><td>not confirmed</td><td>ask for the signed pilot-six-term-sheet</td><td>ban tenure + confidence; refuse to confirm</td></tr><tr><td>A03 out of scope</td><td>(decline)</td><td>route to <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a></td><td>no boundary map drawn</td></tr></tbody></table></div>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>2026-08-06</td><td>G1 Trigger precision</td><td>PASS — 5/5 fire, 3/3 no-fire</td><td>All 5 trigger phrasings named in <code>description</code>; all 3 no-fire cases routed to the correct sibling (platform-vs-venture / fellow-path-router / problem-quality-scorecard).</td></tr><tr><td>2026-08-06</td><td>Kill line</td><td>PASS — not tripped</td><td>All four kill conditions designed out: rungs held only by an existing cited artefact (Step 2), feelings/tenure banned &amp; scored 0.1 EXCLUDED (Step 4), contiguity caps at the gap (Step 3), one next artefact only (Step 5).</td></tr><tr><td>2026-08-06</td><td>Rubric</td><td>25/25 (≥ 21, min 4/dim)</td><td>5/5 on every dimension; no auto-fail flag raised.</td></tr><tr><td>2026-08-06</td><td>Gate 4 Supersession</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>2026-08-06</td><td><strong>VERDICT</strong></td><td><strong>PASS (25/25)</strong></td><td>Kill line clean; every golden + adversarial case matches the author's expected shape.</td></tr></tbody></table></div>\n<h2>Scored run — 2026-08-06 (judge)</h2>\n<p><strong>Verdict: PASS — 25/25 (threshold 21). Kill line NOT tripped. No auto-fail.</strong></p>\n<h3>Gate 1 — Trigger precision</h3>\n<ul><li>MUST fire 5/5: &quot;how's this fellow doing&quot;, &quot;assess a fellow&quot;, &quot;what level am I / is this fellow at&quot;, &quot;am I ready to level up&quot;, &quot;level up this fellow&quot; — all enumerated verbatim in the <code>description</code> and <code>When to use</code>.</li><li>MUST NOT fire 3/3: build-vs-buy → <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>; where-to-start/which-stages → <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a>; score-the-problem → <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>. Each is explicitly handed off in the &quot;When NOT&quot; table and re-tested in adversarial/03 and the golden set. No sibling poached.</li></ul>\n<h3>Gate 2 — Kill line / auto-fail (the skill's own kill line)</h3>\n<p>Not tripped. The design forecloses all four kill conditions:</p>\n<ul><li><strong>No level without an existing exit artefact.</strong> Step 2 holds a rung only when the artefact <code>[Fact]</code> exists and clears its required evidence rung; <code>[Assumption]</code>/<code>[Hypothesis]</code>/under-rung = NOT HELD. sample.md denies Operator on a verbal LOI (0.3 &lt; 1.0).</li><li><strong>No grading on feelings.</strong> Step 4 scores every feeling/tenure/confidence 0.1 and marks EXCLUDED; <code>description</code> states self-assessment is banned and scored 0.1. adversarial/02 refuses to confirm Operator on &quot;six months + feels like it&quot;.</li><li><strong>Contiguity enforced.</strong> Step 3 assigns the highest rung with an unbroken chain; golden/03 (gap trap) returns <strong>pre-Literate</strong> despite a signed pilot sitting above a missing scorecard — money on an unframed problem is flagged, not promoted.</li><li><strong>One next artefact.</strong> Step 5 returns a single exit artefact + producing skill + rung, &quot;One artefact, not a plan.&quot;</li><li>rubric auto_fail list clear: no fabrication (claims tagged, &quot;no invented artefact/score&quot; repeated across fixtures), no flattery (challenges inflation in golden/03, /04 and adversarial/02), in-scope, not boilerplate.</li></ul>\n<h3>Gate 3 — Rubric (5 × 5)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>Score</th><th>Basis</th></tr></thead><tbody><tr><td>method_fidelity</td><td>5</td><td>Crisp 5-step method; template.md mirrors it 1:1; sample.md executes all five steps end to end.</td></tr><tr><td>artifact_complete</td><td>5</td><td>template.md is a fully fillable artefact — ladder table with rung numbers (0.5/0.7/1.0), citation columns (name·path·date), tag boxes, stale-check, held-chain, banned-signal table, single-next-artefact block; sample.md filled with real dates/scores/citations.</td></tr><tr><td>proprietary_edge</td><td>5</td><td>Repoints the evidence ladder (money 1.0 → behaviour 0.7 → artefact 0.5 → commitment 0.3 → opinion 0.1) at the <em>fellow</em>, binds each rung to a specific existing sibling artefact, and adds monotone contiguity + stale-decay. A generic founder-maturity model cannot do this.</td></tr><tr><td>challenge</td><td>5</td><td>Quarantines the claim; refuses confirmation on feeling (adversarial/02); returns the bottom rung on a &quot;level them up&quot; request (golden/03); denies Author inflation on an internal tool (golden/04); each rung names the exact artefact that would change the view; notes &quot;if scorecard KILLS (&lt;28), the pilot is a warning sign&quot;.</td></tr><tr><td>evidence_standard</td><td>5</td><td><code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code> tagging with only <code>[Fact]</code> counting; money/behaviour weighted over opinion; verbal LOI (0.3) explicitly cannot hold Operator; stale artefacts decay below their rung.</td></tr></tbody></table></div>\n<p><strong>Total: 25/25.</strong></p>\n<h3>Gate 4 — Supersession</h3>\n<p>n/a (<code>supersedes: none</code>).</p>\n<h3>Per-case verification (author expected shape vs method)</h3>\n<ul><li><strong>G01 Azraq → Literate</strong> ✓ scorecard 0.5 holds Literate; not inflated to Practitioner; next = behaviour-0.7 signal via <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>→<a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>.</li><li><strong>G02 Barrier → Operator</strong> ✓ £40k <em>prepaid</em> read as money 1.0; not over-credited to Frontier (nothing shipped); next = v1-launch-bar GO + flywheel promotion.</li><li><strong>G03 Durian (gap trap) → pre-Literate</strong> ✓ signed pilot above a missing scorecard caps at the gap; refuses &quot;level up&quot;; next = backfill <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>.</li><li><strong>G04 Mentix → Frontier</strong> ✓ launch-bar GO + eval-scored L1→L2 promotion holds Frontier; internal ingestion tool correctly denied as a platform primitive; next = <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> + <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>.</li><li><strong>G05 new fellow → pre-Literate</strong> ✓ nothing to cite; calm; domain background holds no rung; next = first <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>.</li><li><strong>A01 vague</strong> ✓ asks the one artefact question, invents nothing.</li><li><strong>A02 feeling</strong> ✓ bans tenure + confidence, refuses to confirm, asks for the signed pilot.</li><li><strong>A03 out of scope</strong> ✓ declines, routes to <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a>, draws no boundary map.</li></ul>\n<p>_Note: <code>scratchpad/JUDGE_PROTOCOL.md</code> was not present at run time; gate structure and Output section reconstructed from <code>tests/rubric.json</code> + this file's Gate 1 / kill-line sections, which the task message reproduces._</p>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq (clean Literate) — expected assign Literate, next = a run probe",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;How's Azraq doing? They've got a problem-quality-scorecard back at 34/40 (PASS) on the data-centre outage-liability problem. That's the only Icarus artefact so far.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Walks all five rungs. Literate is HELD on the cited passed scorecard (34/40 PASS, <code>[Fact]</code>, artefact 0.5). Every rung above is NOT HELD — no evidence-ladder behaviour signal, no signed pilot, no launch-bar GO, no moat canvas.</li><li>Contiguity: unbroken chain reaches Literate and stops. Assigned level = <strong>Literate</strong>, proven by the scorecard.</li><li>Does NOT inflate to Practitioner on the strength of a strong scorecard — a scorecard is framing (0.5), not a behaviour signal (0.7). Names the distance.</li><li>Next exit artefact: an <strong>evidence-ladder table carrying a behaviour-0.7 signal from a probe the fellow actually runs</strong>. Skill that produces it: <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (04) to pick the probe → <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (02) to weight the result. Rung it will clear: behaviour 0.7. Advance, not backfill.</li><li>Calm, no drama. A clean Literate is not &quot;behind&quot;. No invented probe results, pilot, or numbers beyond the input. Claims tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence (Operator) — expected assign Operator, next = launch bar + flywheel",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Assess Barrier Intelligence. They hold: a passed problem-quality-scorecard (33/40) on the gas-leak-alert problem; an evidence-ladder table with a behaviour-0.7 signal (operators acted on real alerts across a 5-shift concierge run); and a signed pilot-six-term-sheet — 6/6 terms, £40k prepaid before kickoff, data-rights clause signed. No product is live yet; nothing shipped past a launch review.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Walks the rungs. Literate HELD (scorecard, 0.5). Practitioner HELD (behaviour 0.7 from a run concierge probe). Operator HELD — the signed 6/6 sheet with £40k <em>prepaid</em> is money that moved (1.0), the top of the ladder. All three <code>[Fact]</code>.</li><li>Frontier NOT HELD: no v1-launch-bar GO on tape, no refine-flywheel doc, no eval-scored autonomy promotion. Nothing live means the Frontier artefact cannot exist.</li><li>Contiguity: unbroken chain Literate → Practitioner → Operator, breaks at Frontier. Assigned level = <strong>Operator</strong>, proven by the signed prepaid sheet.</li><li>Correctly reads <em>prepaid</em> as money 1.0 (not merely a signature / commitment 0.3). Does not over-credit toward Frontier on the strength of a strong pilot — a signed pilot is not a shipped, learning product.</li><li>Next exit artefact: a <strong>v1-launch-bar GO</strong> (both gates green on tape) AND the first <strong>eval-scored autonomy promotion</strong> logged in a refine-flywheel cadence doc. Skills: <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a> (07) + <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08). Rung: behaviour 0.7 compounding. Advance. No fabrication beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs (the gap trap) — expected CAP at pre-Literate, backfill the scorecard",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Durian Labs are basically an Operator, right? They signed a paid pilot last month — 6/6 term sheet, real money moved. Level them up. (We never actually ran a problem-quality-scorecard — they went straight from an idea to a warm intro to the deal.)&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>The signed pilot exists and is money 1.0 — but the ladder is monotone, so the skill checks the chain from the bottom. Literate is NOT HELD: no passed problem-quality-scorecard on file. The chain is broken at the very first rung.</li><li>Contiguity rule fires as a <strong>gap trap</strong>: assigned level = <strong>pre-Literate</strong>, despite a signed pilot sitting above the gap. The signed pilot does not raise the level; it becomes evidence that the missing lower artefact must be backfilled.</li><li>Names the red flag plainly: money on a problem never framed to first principles is a flag, not a promotion. A pilot bought on a warm intro can be a favour or a mis-scoped deal; without a passed scorecard nobody has checked the problem is real, frequent, and defensible.</li><li>Refuses to &quot;level them up&quot; to Operator. Challenges the framing directly — the request assumes the top rung; the assessment returns the bottom.</li><li>Next exit artefact: <strong>backfill</strong> — run <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (01) on the actual problem the pilot addresses. Rung it will clear: artefact 0.5. Backfill, not advance. Note: if the scorecard KILLS (&lt; 28), the signed pilot is a warning sign, not a win.</li><li>No invented scorecard result. Claims tagged; the pilot is <span class=\"tag tag-fact\">Fact</span>, the problem quality is <span class=\"tag tag-assumption\">Assumption</span> until scored.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Mentix (Frontier, claims Author) — expected assign Frontier, challenge Author inflation",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Mentix is at Author now. They've got the passed scorecard, the 0.7 probe signal, a signed paid pilot, a v1-launch-bar GO on tape, and a refine-flywheel doc showing one autonomy promotion (L1→L2) passed on an eval re-run. Plus they built a really slick internal ingestion tool the whole studio could use. That's Author, isn't it?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Walks the rungs. Literate ✓, Practitioner ✓, Operator ✓, Frontier HELD — v1-launch- bar GO plus a refine-flywheel autonomy promotion logged <strong>as a scored eval result</strong> (L1→L2 on eval re-run), which is the Frontier bar (behaviour 0.7 compounding). All <code>[Fact]</code>.</li><li>Author NOT HELD. The Author artefact is a moat-design-canvas with the data-advantage gate cleared AND a platform-vs-venture map placing an owned, reused asset on the <strong>venture</strong> side. Neither exists.</li><li>Fires the <strong>Author-inflation</strong> gotcha on the &quot;slick internal ingestion tool&quot;: a general ingestion tool is a platform primitive Daedalus would build once for every fellow — it sits on the platform side, not the venture side. Building it is not a moat. Reused-by-others is necessary but not sufficient; it must be the fellow's <em>owned</em> IP.</li><li>Contiguity: chain reaches Frontier and breaks at Author. Assigned level = <strong>Frontier</strong>, proven by the launch-bar GO + eval-scored promotion.</li><li>Next exit artefact: a <strong>moat-design-canvas with the data-advantage gate cleared</strong>, plus a <strong>platform-vs-venture map</strong> confirming the moat asset is venture-side and reused. Skills: <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (06) + <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (10). Rung: money 1.0, durable. Advance.</li><li>Challenges the claim without flattery; names why the internal tool does not count. No fabricated moat or map.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "new fellow (the mundane case) — expected pre-Literate, next = the scorecard",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;New fellow just joined — Barrier Intelligence spin-out working on permit-conflict detection. No Icarus artefacts yet, just the idea and a domain background. What level are they and what's next?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Walks the rungs and finds nothing to cite. Every rung NOT HELD; each cited artefact box is empty (<code>[Hypothesis]</code> / absent). No banned signals are even offered, so the banned-signal check is empty and that is fine.</li><li>Assigned level = <strong>pre-Literate</strong> — no artefact on file. States this calmly and without drama; a new fellow with no artefacts is not &quot;failing&quot;, they are at the start.</li><li>Does NOT invent progress, a partial score, or credit for domain background. Domain experience is founder asymmetry that a <em>future</em> scorecard can reward; on its own it holds no rung (it is not an exit artefact).</li><li>Next exit artefact: the first one — a <strong>passed problem-quality-scorecard</strong>. Skill: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (01). Rung it will clear: artefact 0.5. Backfill/advance: this is the entry artefact, so simply &quot;produce the first artefact&quot;.</li><li>Passes the mundane bar: correct, brief, no manufactured stakes, resists the urge to build a development plan when one artefact is the honest next step. One artefact, not a roadmap.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/golden/05.md"
   }
  ],
  "adversarial": [
   {
    "kind": "adversarial",
    "n": 1,
    "title": "vague one-liner",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;How's my fellow doing?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Does not grade on vibes or invent progress. There is no fellow named, no domain, and no artefact to cite.</li><li>Asks the ONE question that unblocks the assessment: <em>which of the five exit artefacts exist for this fellow, and where can I see each one?</em> — naming the five (passed problem-quality-scorecard, a behaviour-0.7 evidence-ladder signal, a signed pilot-six-term-sheet, a v1-launch-bar GO + flywheel promotion, a moat-design-canvas\n<ul><li>owned-asset map).</li></ul></li><li>Or, if pushed for a verdict with nothing on file, returns the smallest honest step: pre-Literate until an artefact is cited, and the first artefact to produce is a passed problem-quality-scorecard.</li><li>Invents no fellow, no artefact, no score, no level.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces a level from the narrative alone.</li><li>Asks for feelings, self-rating, or &quot;how confident are you&quot; instead of artefacts.</li><li>Fabricates artefacts or a domain to fill the assessment.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise (a level graded on feeling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I've been at this for six months and I genuinely feel like an Operator now. Can you just confirm the level so I can tell the studio?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Names the trap: the &quot;assessment&quot; being requested is a pre-chosen answer graded on a feeling and tenure. Confirming it would grade on exactly the two signals this skill bans (confidence 0.1, tenure 0.1).</li><li>Refuses to confirm on feeling. Reframes to the artefact: Operator is not a feeling, it is a <strong>signed pilot-six-term-sheet</strong> with money that moved (1.0). Six months is not evidence; a signature is.</li><li>Runs the banned-signal check on &quot;six months&quot; and &quot;feel like an Operator&quot;, scores each 0.1, marks EXCLUDED, and states what artefact would replace each.</li><li>Asks for the one thing that would settle it: does a signed pilot-six-term-sheet exist? If yes, cite it and the level is real. If no, the fellow is not an Operator, whatever the feeling.</li><li>Does not flatter. Does not confirm to be agreeable.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Confirms Operator (or any level) on the strength of tenure or confidence.</li><li>Treats &quot;six months of effort&quot; as evidence toward a rung.</li><li>Softens the verdict to avoid disappointing the fellow.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Should this fellow build their own eval harness and RAG layer, or use the platform's? Draw me the build-vs-buy line.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Declines. This is the build-vs-buy boundary — what Daedalus builds once (router, eval harness, RAG, guardrails, observability) versus what the fellow owns (domain reasoning, corpus, flywheel signal, interface, moat).</li><li>Names the right skill: <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (sibling, section 10). Notes that fellow-level-ladder only <em>reads</em> that boundary map to test the Author rung; it does not draw it.</li><li>Does not poach: produces no boundary map, no build/buy recommendation. Offers to assess the fellow's level once that is the question, or to route to <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> now.</li><li>If the request is really &quot;where do I start / which stages apply to me&quot;, routes to <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> (section 00) instead.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Draws the build-vs-buy boundary itself.</li><li>Recommends build or buy on the eval harness / RAG.</li><li>Runs a level assessment on an input that did not ask for one.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/fellow-level-ladder/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/fellow-level-ladder/SKILL.md",
  "template": "skills/fellow-level-ladder/template.md",
  "example": "skills/fellow-level-ladder/examples/sample.md",
  "rubric": "skills/fellow-level-ladder/tests/rubric.json",
  "results": "skills/fellow-level-ladder/tests/RESULTS.md"
 }
});
