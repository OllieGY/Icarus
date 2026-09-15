window.ICARUS_SKILL("so-what-stress-test", {
 "name": "so-what-stress-test",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Compresses &quot;should this exist?&quot; into five business questions and one verdict. The fellow gives a one-liner and their best answer to each question. The skill grades each answer on the evidence ladder, then returns Pass, Redesign, or Kill. A Redesign comes with a concrete rewrite that fixes the weakest question. It is a fast whole-idea gate, not a deep-dive: five minutes, one table, a decision.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic version asks the five questions and accepts the answers. This one refuses to. Every question demands a money-or-behaviour answer; &quot;users will love it&quot;, &quot;it's a huge market&quot;, &quot;no one else does this&quot; are graded as a fail on that question, not as a soft pass. A single question cleared only on opinion downgrades the whole idea to Redesign, and the skill must produce the rewrite rather than hand back a shrug. It treats &quot;so what&quot; as a materiality test with a number, and &quot;what kills it&quot; as a question the fellow must be able to answer — denial (&quot;nothing kills it&quot;) is the loudest tell.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when: a one-liner needs a fast whole-idea gate before more work goes in; the fellow asks to poke holes, pressure-test, or justify why an idea is worth doing; a concept has survived early excitement and now needs a money check across all five fronts.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;Score this problem on all 8 dimensions&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td><td>That is a numeric problem gate; this scores the whole idea across five business questions, not one 8-axis problem.</td></tr><tr><td>&quot;Run the council / give me the five-lens teardown&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></td><td>That is a multi-lens adversarial reading ending in one probe; this returns a five-question table and a Pass/Redesign/Kill.</td></tr><tr><td>&quot;Pressure-test just my wedge&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></td><td>That deep-dives the wedge alone against five pass thresholds; here the wedge is one row of five.</td></tr></tbody></table></div>\n<p>If the input is a bare one-liner with no answers, do not run the five on air. Ask the one question that unblocks it, or return the smallest honest next step. Invent nothing.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>So-What Stress Test progress:\n- [ ] Step 1: Restate the one-liner in the fellow's words\n- [ ] Step 2: Collect the fellow's answer to each of the five questions\n- [ ] Step 3: Grade each answer on the evidence ladder\n- [ ] Step 4: Apply the verdict logic\n- [ ] Step 5: If Redesign, write the rewrite that fixes the weakest question\n- [ ] Step 6: Run the self-check (kill line) before returning</code></pre>\n<p><strong>Step 1–2.</strong> Fill the five rows of <a href=\"#/skill/so-what-stress-test\">template.md</a>. If the fellow left a question blank, that row is graded on what is there, which is nothing — an opinion at best.</p>\n<p><strong>Step 3 — grade each row.</strong> Score the answer on the evidence ladder, then map to a grade.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>What clears it (required evidence type)</th></tr></thead><tbody><tr><td>1</td><td>So what?</td><td>A magnitude: money or hours saved per event, per unit, per period, tied to a countable event. Clears when someone already spends to avoid this pain.</td></tr><tr><td>2</td><td>Who pays?</td><td>A named role who signs the invoice, plus the budget line it comes from. The user is not the answer unless the user holds the budget.</td></tr><tr><td>3</td><td>What's the wedge?</td><td>The smallest action that forces adoption, plus the cost of not adopting. Clears when a design partner already runs it in a live workflow.</td></tr><tr><td>4</td><td>What's the moat?</td><td>One asset that compounds with use (proprietary data, switching cost, network), plus evidence it has started accruing. A plan to build a moat is opinion.</td></tr><tr><td>5</td><td>What kills it?</td><td>A named, credible killer, its earliest observable signal, and a mitigation that changes the odds.</td></tr></tbody></table></div>\n<p>Grade bands:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Grade</th><th>Q1–Q4</th><th>Q5 (inverted)</th></tr></thead><tbody><tr><td>pass</td><td>Evidence ≥ 0.7 — behaviour observed or money moved</td><td>Killer named, early signal defined, credible mitigation</td></tr><tr><td>weak</td><td>Evidence ≤ 0.5 — artefact, verbal commitment, or opinion only</td><td>No killer named (denial), or killer hand-waved with no mitigation path</td></tr><tr><td>fatal</td><td>(not applicable)</td><td>Credible killer, early signal already firing, no mitigation</td></tr></tbody></table></div>\n<p><strong>Step 4 — verdict logic (apply in order):</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>Any row graded <code>fatal</code></td><td><strong>KILL</strong> (overrides everything below)</td></tr><tr><td>All five rows <code>pass</code></td><td><strong>PASS</strong></td></tr><tr><td>One or more <code>weak</code>, none <code>fatal</code></td><td><strong>REDESIGN</strong></td></tr></tbody></table></div>\n<p><strong>Step 5 — the rewrite (Redesign only).</strong> Name the weakest question (the binding constraint). When more than one row grades <code>weak</code>, the binding constraint is the earliest-numbered weak question in the order So what → Who pays → Wedge → Moat → Kills it, and the rewrite must fix that one first. Rewrite the one-liner so that question would now grade <code>pass</code>. Change the idea, not the language. If the honest rewrite is &quot;this is a script, not a venture&quot; or &quot;this needs a different buyer&quot;, say that.</p>\n<p><strong>Step 6 — self-check.</strong> Run the kill line at the foot of <a href=\"#/skill/so-what-stress-test\">template.md</a> before returning.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. The pass bar for questions 1–4 is 0.7: only behaviour or money clears a question. An artefact, a verbal &quot;they said they'd buy&quot;, or an opinion caps the row at <code>weak</code> and forces a Redesign. Tag every answer <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A probe exists to move an answer up the ladder; if it cannot be moved above 0.1, the row fails. Never grade an opinion above 0.1, and never grade a question <code>pass</code> on opinion evidence — that is the skill's own auto-fail.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The user is not the payer.</strong> &quot;Factory managers love it&quot; answers who uses, not who pays. Q2 fails until a budget-holding role is named. This is the most common Redesign trigger.</li><li><strong>Denial on Q5 reads as a pass to the fellow and a fail to the skill.</strong> &quot;Nothing really kills it&quot; is weak, not strong. Push until a credible killer is named; a founder who cannot name one has not looked.</li><li><strong>A moat plan is not a moat.</strong> &quot;We'll accumulate data over time&quot; is opinion (0.1). The moat row passes only if the compounding asset is already accruing from real usage.</li><li><strong>Fatal overrides Pass.</strong> Four strong rows and one unmitigated killer is a Kill, not a four-out-of-five Pass. Do not average the rows.</li><li><strong>A one-liner with no answers is not a Redesign.</strong> It is unanswered. Ask the one unblocking question instead of grading blanks.</li><li><strong>Solution in disguise.</strong> A pre-chosen solution (&quot;we don't have a mobile app&quot;) is a feature, not a problem — it gives Q1 no countable event to grade. Name the trap, reframe to the job the feature would serve and its cost, then grade the job. Do not grade the feature.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/so-what-stress-test\">examples/sample.md</a> — Azraq's data-centre incident-risk subscription run through all five questions to a PASS, showing what money-and-behaviour answers look like next to the opinion answers they replaced.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a> — the multi-lens adversarial teardown. Run this first for a fast five-question gate; escalate to the council when the idea survives and needs a deeper read.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — the 8-dimension problem gate. That interrogates one problem; this interrogates a whole idea's business case.</li><li><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> — the wedge deep-dive. When this skill grades the wedge row <code>weak</code>, hand off there to rebuild it.</li><li>Supersedes nothing. It is the entry gate to the Icarus concept-council stage.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>So-What Stress Test — &lt;idea one-liner&gt;</h1>\n<p><strong>Fellow:</strong> &lt;name&gt; · <strong>Date:</strong> &lt;date&gt; · <strong>Idea:</strong> &lt;one sentence, the fellow's words&gt;</p>\n<h2>The five questions</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>Required evidence type</th><th>Fellow's answer</th><th>Rung (0.1–1.0)</th><th>Grade</th></tr></thead><tbody><tr><td>1</td><td>So what?</td><td>Money or hours saved per event/unit/period, tied to a countable event</td><td>&lt;answer&gt; <code>[Fact/Assumption/Hypothesis]</code></td><td>&lt;e.g. behaviour 0.7&gt;</td><td>pass / weak</td></tr><tr><td>2</td><td>Who pays?</td><td>Named role who signs the invoice + the budget line</td><td>&lt;answer&gt;</td><td>&lt;rung&gt;</td><td>pass / weak</td></tr><tr><td>3</td><td>What's the wedge?</td><td>Smallest forced action + cost of not adopting</td><td>&lt;answer&gt;</td><td>&lt;rung&gt;</td><td>pass / weak</td></tr><tr><td>4</td><td>What's the moat?</td><td>One asset that compounds with use + proof it has started</td><td>&lt;answer&gt;</td><td>&lt;rung&gt;</td><td>pass / weak</td></tr><tr><td>5</td><td>What kills it?</td><td>Named credible killer + early signal + a mitigation</td><td>&lt;answer&gt;</td><td>&lt;rung&gt;</td><td>pass / weak / fatal</td></tr></tbody></table></div>\n<p>Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1. Pass bar for Q1–Q4 is ≥ 0.7. Q5 passes only when the killer is named, has an early signal, and has a credible mitigation.</p>\n<h2>Verdict</h2>\n<p>Apply in order: any <code>fatal</code> → <strong>KILL</strong> · all five <code>pass</code> → <strong>PASS</strong> · one or more <code>weak</code>, none <code>fatal</code> → <strong>REDESIGN</strong>.</p>\n<blockquote><p><strong>Verdict: &lt;PASS / REDESIGN / KILL&gt;</strong> One line why: &lt;the binding constraint, named&gt;</p></blockquote>\n<p><strong>Weakest question:</strong> Q&lt;n&gt; — &lt;question&gt; (rung &lt;x&gt;, grade &lt;weak/fatal&gt;)</p>\n<h2>Rewrite (fill only if REDESIGN)</h2>\n<p>The idea rewritten so Q&lt;n&gt; would now grade <code>pass</code>. Change the idea, not the words.</p>\n<blockquote><p><strong>Old:</strong> &lt;one-liner&gt; <strong>New:</strong> &lt;rewritten one-liner that fixes the weakest question&gt; <strong>What changed:</strong> &lt;the specific move — new buyer, forced wedge, compounding asset — and the money/behaviour evidence the fellow must now go get&gt;</p></blockquote>\n<p>If the honest rewrite is &quot;this is a script, not a venture&quot; or &quot;this needs a different buyer entirely&quot;, write that instead of dressing up the same idea.</p>\n<h2>Kill note (fill only if KILL)</h2>\n<blockquote><p><strong>Killer:</strong> &lt;the credible fatal&gt; <strong>Early signal already firing:</strong> &lt;what you can see today&gt; <strong>Why no mitigation clears it:</strong> &lt;one line&gt; <strong>The one condition that would reopen it:</strong> &lt;if any; else &quot;none&quot;&gt;</p></blockquote>\n<h2>Self-check before returning (the kill line)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>No question graded <code>pass</code> on opinion evidence (0.1). If any is, regrade — this is   the skill's auto-fail.</li><li class=\"task\"><span class=\"box\"></span>Every number in the answers came from the fellow's input. Nothing invented.</li><li class=\"task\"><span class=\"box\"></span>Every answer tagged <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>.</li><li class=\"task\"><span class=\"box\"></span>If REDESIGN, the rewrite actually moves the weakest question to <code>pass</code>, not just   reworded.</li><li class=\"task\"><span class=\"box\"></span>If KILL, it is driven by a Q5 <code>fatal</code>, not by averaging weak rows.</li><li class=\"task\"><span class=\"box\"></span>The verdict was reached by the ordered logic (fatal → pass → weak), not by vote.</li></ul>",
  "path": "skills/so-what-stress-test/template.md"
 },
 "example": {
  "html": "<h1>So-What Stress Test — Azraq incident-risk subscription</h1>\n<p><strong>Fellow:</strong> Azraq · <strong>Date:</strong> 2026-07-20 · <strong>Idea:</strong> A subscription that scores each data-centre's incident risk from its uptime and maintenance logs, sold to the operators who run the halls.</p>\n<p>Illustrative fixtures. Numbers are plausible, not real client data.</p>\n<h2>The five questions</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>Required evidence type</th><th>Fellow's answer</th><th>Rung</th><th>Grade</th></tr></thead><tbody><tr><td>1</td><td>So what?</td><td>Money/hours saved per event</td><td>A Tier-III hall's unplanned outage runs ~$9k/minute in SLA credits; two operators already pay a consultant ~$40k/yr for the same manual risk read. <code>[Fact]</code> on the consultant spend; <code>[Assumption]</code> on the per-minute figure</td><td>behaviour 0.7</td><td>pass</td></tr><tr><td>2</td><td>Who pays?</td><td>Budget-holder + budget line</td><td>The VP of Critical Facilities signs from the reliability/opex line, not IT. One VP already renewed the consultant contract twice. <code>[Fact]</code></td><td>behaviour 0.7</td><td>pass</td></tr><tr><td>3</td><td>What's the wedge?</td><td>Smallest forced action + cost of not adopting</td><td>Operators must file an incident root-cause pack to their insurer after every outage; Azraq auto-drafts that pack, so skipping Azraq means writing it by hand under deadline. One design-partner hall runs it live for insurer filings. <code>[Fact]</code></td><td>behaviour 0.7</td><td>pass</td></tr><tr><td>4</td><td>What's the moat?</td><td>Compounding asset + proof it started</td><td>Every filing adds a labelled incident to a cross-operator dataset no single operator can assemble alone; the risk score sharpens with each hall added. 60 labelled incidents in from three halls. <code>[Fact]</code></td><td>behaviour 0.7</td><td>pass</td></tr><tr><td>5</td><td>What kills it?</td><td>Killer + early signal + mitigation</td><td>Insurers could demand the raw logs directly and cut Azraq out. Early signal: a broker asking for log access in renewal terms. Mitigation: Azraq holds the data-rights position with operators, so the labelled dataset stays contractually theirs to license. <code>[Assumption]</code> on the mitigation holding</td><td>behaviour 0.7</td><td>pass</td></tr></tbody></table></div>\n<p>Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1. Pass bar Q1–Q4 is ≥ 0.7.</p>\n<h2>Verdict</h2>\n<blockquote><p><strong>Verdict: PASS</strong> One line why: every question clears on observed behaviour — real consultant spend, a named budget-holder who renews, a live wedge tied to a mandatory insurer filing, and a dataset already compounding.</p></blockquote>\n<p><strong>Weakest question:</strong> Q1 — the per-minute outage cost is still an <code>[Assumption]</code>; the consultant spend is the <code>[Fact]</code> carrying it. Move Q1 to money (1.0) by getting one signed subscription at the consultant's price point.</p>\n<h2>Rewrite</h2>\n<p>Not required — PASS.</p>\n<h2>Kill note</h2>\n<p>Not required — PASS.</p>\n<h2>Self-check before returning (the kill line)</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>No question graded <code>pass</code> on opinion. Q1's pass rests on the <code>[Fact]</code> consultant   spend, not the assumed per-minute figure.</li><li class=\"task\"><span class=\"box done\"></span>Every number came from Azraq's input. Nothing invented.</li><li class=\"task\"><span class=\"box done\"></span>Every answer tagged.</li><li class=\"task\"><span class=\"box done\"></span>N/A — not a Redesign.</li><li class=\"task\"><span class=\"box done\"></span>N/A — not a Kill.</li><li class=\"task\"><span class=\"box done\"></span>Verdict reached by ordered logic: no fatal, all five pass → PASS.</li></ul>\n<h2>What this looks like next to opinion answers</h2>\n<p>For contrast, the version that would have failed:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Opinion answer (would grade weak)</th><th>Why it fails</th></tr></thead><tbody><tr><td>1</td><td>&quot;Downtime is really expensive for these operators.&quot;</td><td>No magnitude, no one spending today. Opinion 0.1.</td></tr><tr><td>2</td><td>&quot;Data-centre operators will pay for this.&quot;</td><td>Names a market, not a budget-holder. Opinion 0.1.</td></tr><tr><td>4</td><td>&quot;We'll build up a data moat over time.&quot;</td><td>A plan, not an accruing asset. Opinion 0.1.</td></tr></tbody></table></div>\n<p>Any one of these caps the idea at REDESIGN. Azraq's PASS is earned only because each row was moved off opinion and onto observed behaviour.</p>",
  "path": "skills/so-what-stress-test/examples/sample.md"
 },
 "rubric": {
  "skill": "so-what-stress-test",
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
    "Is this worth doing? Can you poke holes in it?",
    "Pressure-test this idea for me across the board.",
    "So what — why does anyone care that we solve this?",
    "Stress test my idea before I put more time in.",
    "Give me the fast go/no-go on this concept: who pays, what's the moat, what kills it?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem on all 8 dimensions and give me the numeric gate.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Run the five-lens council teardown and end on one probe.",
     "sibling": "concept-council",
     "local": true
    },
    {
     "phrase": "Pressure-test only my wedge against the five wedge thresholds.",
     "sibling": "wedge-five-questions",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST-fire phrasings match the description's trigger list (&quot;is this worth doing&quot;, &quot;poke holes&quot;, &quot;so what?&quot;, &quot;stress test my idea&quot;, whole-idea go/no-go). All 3 MUST-NOT are explicitly negative-scoped in the description (8-dim gate → problem-quality-scorecard; 5-lens teardown → concept-council; wedge-only → wedge-five-questions). Minor residual risk: &quot;pressure-test&quot; is a fire word and adv-3 says &quot;Pressure-test only my wedge&quot; — but &quot;only my wedge / wedge thresholds&quot; is carved out by name, so it holds.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → asks one unblocking question, grades nothing, offers blank template (covered explicitly by &quot;do not run the five on air&quot; + Gotcha). 02 solution-in-disguise → reframes to the job because Q1 demands a countable event and &quot;invent nothing&quot; blocks grading &quot;no mobile app&quot;; behaviour reached, though the trap is only <em>implicitly</em> named (see Gotchas). 03 out-of-scope → declines, names problem-quality-scorecard, states one-line boundary (explicit in the When-NOT table).</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could not come from a generic PM prompt: numeric evidence ladder (money 1.0 → opinion 0.1), refusal to pass any opinion row, ordered fatal→pass→weak verdict logic, &quot;user is not the payer&quot; Q2 fail, Q5-denial-as-tell, and a rewrite that re-aims at a mandatory-filing buyer. Guidance is tabular where it should be (rubric, grade bands, verdict logic, template all tables); evidence ladder as a one-line scale is acceptable prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses.</p>"
   }
  ],
  "scores": {
   "columns": [
    "method",
    "artifact",
    "edge",
    "challenge",
    "evidence"
   ],
   "rows": [
    {
     "label": "01 Durian (REDESIGN) 4",
     "dims": [
      4,
      5,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "REDESIGN (5 weak, no fatal) ✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (PASS) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS (5 pass on real behaviour/money) ✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Mentix (KILL) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "KILL (Q5 fatal overrides 3 pass) ✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 Barrier (REDESIGN) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "REDESIGN (Q3 weak, no fatal) ✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 Mundane (REDESIGN) 4",
     "dims": [
      4,
      5,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "REDESIGN → honest \"script, not a venture\" rewrite ✓",
     "pass": true,
     "arithmeticOk": true
    }
   ]
  },
  "dimensionScores": [],
  "runs": [
   [
    "run 1",
    "all",
    "see judge block below",
    "GRADUATE-READY"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Solution-in-disguise is handled only implicitly.</strong> SKILL.md never names the &quot;a solution stated as a problem has no Q1 answer&quot; trap (adversarial 02). A faithful applier still reaches the reframe via Q1's countable-event requirement + &quot;invent nothing,&quot; but the move is not spelled out. Recommend an explicit Gotcha: &quot;A pre-chosen solution ('we don't have a mobile app') is not an idea — name the trap, reframe to the job it blocks and its cost, then grade.&quot;</li><li><strong>No tie-break when multiple rows grade <code>weak</code>.</strong> Step 5 says name &quot;the binding constraint,&quot; but with several weak rows (Golden 01: all five; Golden 05: all five) the method gives no rule for choosing the single weakest. It resolves in practice via the &quot;user is not the payer / Q2 is the most common trigger&quot; Gotcha, but a stated heuristic (e.g. &quot;the row whose fix unlocks the most other rows&quot;) would make Step 5 deterministic.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added earliest-numbered-weak-question tie-break to Step 5 and an explicit solution-in-disguise Gotcha.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — so-what-stress-test</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Is this worth doing? Can you poke holes in it?&quot;</li><li>&quot;Pressure-test this idea for me across the board.&quot;</li><li>&quot;So what — why does anyone care that we solve this?&quot;</li><li>&quot;Stress test my idea before I put more time in.&quot;</li><li>&quot;Give me the fast go/no-go on this concept: who pays, what's the moat, what kills it?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Score this problem on all 8 dimensions and give me the numeric gate.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Run the five-lens council teardown and end on one probe.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></li><li>&quot;Pressure-test only my wedge against the five wedge thresholds.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>see judge block below</td><td>GRADUATE-READY</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire phrasings match the description's trigger list (&quot;is this worth doing&quot;, &quot;poke holes&quot;, &quot;so what?&quot;, &quot;stress test my idea&quot;, whole-idea go/no-go). All 3 MUST-NOT are explicitly negative-scoped in the description (8-dim gate → problem-quality-scorecard; 5-lens teardown → concept-council; wedge-only → wedge-five-questions). Minor residual risk: &quot;pressure-test&quot; is a fire word and adv-3 says &quot;Pressure-test only my wedge&quot; — but &quot;only my wedge / wedge thresholds&quot; is carved out by name, so it holds.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → asks one unblocking question, grades nothing, offers blank template (covered explicitly by &quot;do not run the five on air&quot; + Gotcha). 02 solution-in-disguise → reframes to the job because Q1 demands a countable event and &quot;invent nothing&quot; blocks grading &quot;no mobile app&quot;; behaviour reached, though the trap is only <em>implicitly</em> named (see Gotchas). 03 out-of-scope → declines, names problem-quality-scorecard, states one-line boundary (explicit in the When-NOT table).</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could not come from a generic PM prompt: numeric evidence ladder (money 1.0 → opinion 0.1), refusal to pass any opinion row, ordered fatal→pass→weak verdict logic, &quot;user is not the payer&quot; Q2 fail, Q5-denial-as-tell, and a rewrite that re-aims at a mandatory-filing buyer. Guidance is tabular where it should be (rubric, grade bands, verdict logic, template all tables); evidence ladder as a one-line scale is acceptable prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass ≥21, no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>edge</th><th>challenge</th><th>evidence</th><th>Total</th><th>Verdict reached</th><th>Kill-line check</th></tr></thead><tbody><tr><td>01 Durian (REDESIGN)</td><td>4</td><td>5</td><td>5</td><td>5</td><td>5</td><td>24</td><td>REDESIGN (5 weak, no fatal) ✓</td><td>All 5 answers opinion → all graded weak, none passed ✓</td></tr><tr><td>02 Azraq (PASS)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS (5 pass on real behaviour/money) ✓</td><td>Rows pass only on behaviour 0.7 / money; no opinion passed ✓ (control)</td></tr><tr><td>03 Mentix (KILL)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>KILL (Q5 fatal overrides 3 pass) ✓</td><td>Q4 opinion → weak; fatal not averaged away ✓</td></tr><tr><td>04 Barrier (REDESIGN)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>REDESIGN (Q3 weak, no fatal) ✓</td><td>Advisory wedge &quot;they'll find it useful&quot; opinion → weak, not passed ✓</td></tr><tr><td>05 Mundane (REDESIGN)</td><td>4</td><td>5</td><td>5</td><td>5</td><td>5</td><td>24</td><td>REDESIGN → honest &quot;script, not a venture&quot; rewrite ✓</td><td>All opinion → weak; not flattered into a PASS ✓</td></tr></tbody></table></div>\n<p>Kill-line verdict: <strong>enforced in every case.</strong> No question answered on opinion (0.1) is ever graded <code>pass</code>; each opinion answer downgrades the idea to REDESIGN or KILL. Golden 02/03 confirm the inverse — genuinely behaviour-backed rows <em>do</em> clear, so the skill neither over-fires REDESIGN nor rubber-stamps. Method_fidelity docked 1 on cases 01 and 05 only for the tie-break gap (see Gotchas), not for any kill-line slip.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Solution-in-disguise is handled only implicitly.</strong> SKILL.md never names the &quot;a solution stated as a problem has no Q1 answer&quot; trap (adversarial 02). A faithful applier still reaches the reframe via Q1's countable-event requirement + &quot;invent nothing,&quot; but the move is not spelled out. Recommend an explicit Gotcha: &quot;A pre-chosen solution ('we don't have a mobile app') is not an idea — name the trap, reframe to the job it blocks and its cost, then grade.&quot;</li><li><strong>No tie-break when multiple rows grade <code>weak</code>.</strong> Step 5 says name &quot;the binding constraint,&quot; but with several weak rows (Golden 01: all five; Golden 05: all five) the method gives no rule for choosing the single weakest. It resolves in practice via the &quot;user is not the payer / Q2 is the most common trigger&quot; Gotcha, but a stated heuristic (e.g. &quot;the row whose fix unlocks the most other rows&quot;) would make Step 5 deterministic.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added earliest-numbered-weak-question tie-break to Step 5 and an explicit solution-in-disguise Gotcha.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Durian: auto-draft safety incident reports (seed)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>One-liner: &quot;A tool that auto-drafts safety incident reports for industrial sites.&quot;</p>\n<p>Fellow's answers to the five:</p>\n<ol><li>So what? &quot;Writing these reports is a huge pain and takes forever.&quot;</li><li>Who pays? &quot;Safety teams at industrial companies — it's a massive market.&quot;</li><li>Wedge? &quot;It's way faster than doing it by hand, so people will switch.&quot;</li><li>Moat? &quot;Once we have users we'll build up a data advantage over time.&quot;</li><li>What kills it? &quot;Honestly I can't see what would kill this.&quot;</li></ol>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Fills the five-row table. Every answer graded on the ladder; each tagged.</li><li>Q1 graded <strong>weak</strong> — &quot;huge pain / takes forever&quot; is opinion (0.1), no magnitude (hours or money per report), no one shown spending to avoid it.</li><li>Q2 graded <strong>weak</strong> — names a market, not a budget-holder. &quot;Safety teams&quot; is the user, not the signer of an invoice. Opinion 0.1.</li><li>Q3 graded <strong>weak</strong> — &quot;faster&quot; is a benefit claim, not a forced action. No cost to not adopting. Opinion 0.1.</li><li>Q4 graded <strong>weak</strong> — &quot;data advantage over time&quot; is a plan, not an accruing asset. Opinion 0.1.</li><li>Q5 graded <strong>weak</strong> — &quot;can't see what kills it&quot; is denial, the loudest tell, not a pass.</li><li><strong>Verdict: REDESIGN</strong> (multiple weak, no fatal).</li><li>Weakest question named (Q2 Who pays is the tightest binding constraint here, with Q3 close behind).</li><li>A <strong>rewrite</strong> that moves the weakest question to <code>pass</code>: e.g. re-aim the one-liner at a buyer with a mandatory filing (the insurer or the regulator-facing HSE lead who must file within N hours of an incident), so the report becomes a compliance obligation with a budget line, not a convenience. States the money/behaviour evidence the fellow must now collect (one HSE lead's current spend on manual filing, one signed pilot).</li></ul>\n<p>Must NOT: pass any row; invent a dollar figure or hours-saved number the fellow never gave; congratulate the idea. The one-liner is not a KILL — nothing fatal was named — it is a Redesign because it currently stands on opinion at every question.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/so-what-stress-test/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: insurer-facing hall risk covenant (PASS)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>One-liner: &quot;Azraq sells a pre-outage risk-covenant report to the insurers who underwrite data-centre operators, priced per hall.&quot;</p>\n<p>Fellow's answers to the five:</p>\n<ol><li>So what? &quot;Insurers currently price these policies off a broker's manual survey that costs them ~$25k per site per year; two underwriters told us they'd cut that if the read were continuous. One already pays a surveyor on retainer.&quot;</li><li>Who pays? &quot;The underwriting lead at the insurer signs it from the loss-prevention budget. One lead has renewed a comparable surveyor retainer three years running.&quot;</li><li>Wedge? &quot;The reinsurer requires a documented risk read at every policy renewal. Azraq's report is that read, so the underwriter can't renew the treaty without one. A design- partner insurer is using it on live renewals now.&quot;</li><li>Moat? &quot;Each renewal adds a labelled incident-to-claim pairing across operators — Azraq holds the data-rights position, so no single insurer or operator can rebuild the set. ~120 pairings in from four insurers.&quot;</li><li>What kills it? &quot;A large broker builds the same read in-house. Early signal: a broker RFP asking for continuous monitoring. Mitigation: the data-rights contracts with operators sit with Azraq, so a broker would start from zero labelled data.&quot;</li></ol>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Q1 <strong>pass</strong> — behaviour (0.7): a real $25k/site surveyor spend and a surveyor already on retainer. Tagged <code>[Fact]</code> on the spend.</li><li>Q2 <strong>pass</strong> — behaviour (0.7): named role (underwriting lead), named budget line (loss-prevention), and a renewal history.</li><li>Q3 <strong>pass</strong> — behaviour (0.7): a reinsurer mandate makes the read compulsory; a design partner runs it live.</li><li>Q4 <strong>pass</strong> — behaviour (0.7): the incident-to-claim dataset is already accruing and is contractually fenced.</li><li>Q5 <strong>pass</strong> — killer named (broker builds in-house), early signal (broker RFP), credible mitigation (data-rights position).</li><li><strong>Verdict: PASS</strong> (all five pass, none fatal).</li><li>Weakest-link note still required — e.g. Q5's mitigation is an <code>[Assumption]</code> until the data-rights contracts are tested against a broker; push Q1 to money (1.0) with one signed per-hall subscription.</li></ul>\n<p>Must NOT: return a Redesign or rewrite. Must NOT inflate any figure beyond the input.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/so-what-stress-test/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix: AI copilot for factory managers (KILL)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>One-liner: &quot;An AI copilot for factory managers that surfaces the next best action from plant-floor data.&quot;</p>\n<p>Fellow's answers to the five:</p>\n<ol><li>So what? &quot;A missed line-stoppage call costs a mid-size plant about $12k/hour; managers currently react late. One plant's ops log shows 40 hours of avoidable stoppage last quarter.&quot;</li><li>Who pays? &quot;The plant's ops director signs it — one is already piloting it on a paid trial.&quot;</li><li>Wedge? &quot;It plugs into the existing SCADA feed and flags the stoppage risk before the line trips. The pilot plant runs it on one line today.&quot;</li><li>Moat? &quot;Tuned models per plant, plus the alerting workflow becomes the manager's habit.&quot;</li><li>What kills it? &quot;Our SCADA/MES vendor announced the same copilot bundled free in their next release, shipping in two quarters. The pilot plant's RFP already lists it on the MES roadmap. We don't have a way around a feature the plant gets for free inside the system they already run.&quot;</li></ol>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Q1 <strong>pass</strong> — behaviour (0.7): a real $/hour figure and 40 logged avoidable hours.</li><li>Q2 <strong>pass</strong> — behaviour (0.7): named ops director on a paid trial.</li><li>Q3 <strong>pass</strong> — behaviour (0.7): live on one line via existing SCADA feed.</li><li>Q4 <strong>weak</strong> — &quot;tuned models + habit&quot; is a plan, not an accruing fenced asset; opinion.</li><li>Q5 <strong>fatal</strong> — the incumbent MES vendor bundles the same capability free, the early signal is already firing (named on the plant's MES roadmap/RFP), and the fellow states no mitigation.</li><li><strong>Verdict: KILL</strong> — the Q5 fatal overrides the three strong rows. Three-of-five passing does not rescue it; the ordered logic hits <code>fatal</code> first.</li><li>A <strong>kill note</strong>: the killer (free MES bundle), the early signal (MES roadmap in the RFP), why no mitigation clears it, and the one condition that would reopen it (e.g. a cross-plant data asset the single-vendor bundle cannot replicate) — offered as a condition, not smuggled in as a rescue.</li></ul>\n<p>Must NOT: average the rows into a &quot;mostly passes&quot; Redesign. Must NOT soften the fatal because the other rows are strong.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/so-what-stress-test/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence: gas-safety alerts from field logs (REDESIGN)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>One-liner: &quot;Barrier Intelligence reads rig and plant field logs and sends gas-safety alerts to the crew when readings drift toward danger.&quot;</p>\n<p>Fellow's answers to the five:</p>\n<ol><li>So what? &quot;A gas release event can shut a rig for days; the last near-miss at a partner site cost ~$300k in stand-down. Crews already keep manual gas logs every shift.&quot;</li><li>Who pays? &quot;The HSE manager at the operator signs it — one operator already buys permit-to-work software from a competitor, so the budget line exists.&quot;</li><li>Wedge? &quot;Crews get an alert on their phones when readings drift. It's advisory — they can act on it or not. We think they'll find it useful once they see it.&quot;</li><li>Moat? &quot;We aggregate drift patterns across sites, and that dataset grows as more rigs join. Two sites feeding it now.&quot;</li><li>What kills it? &quot;Regulators could mandate a specific certified sensor stack we don't integrate. Early signal: a draft standard in consultation. Mitigation: we're building the top three certified integrations now.&quot;</li></ol>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Q1 <strong>pass</strong> — behaviour (0.7): a real stand-down cost and crews already logging by hand.</li><li>Q2 <strong>pass</strong> — behaviour (0.7): named HSE manager, existing permit-software budget line.</li><li>Q3 <strong>weak</strong> — the wedge is advisory. &quot;They'll find it useful&quot; is opinion (0.1); nothing forces adoption and there is no cost to ignoring an alert. This is the binding constraint.</li><li>Q4 <strong>pass</strong> — behaviour (0.7): cross-site drift dataset already accruing from two sites.</li><li>Q5 <strong>pass</strong> — killer named (mandated sensor stack), early signal (draft standard), mitigation underway (certified integrations).</li><li><strong>Verdict: REDESIGN</strong> — one weak row (Q3), no fatal.</li><li>Weakest question: Q3 wedge.</li><li>A <strong>rewrite</strong> that forces adoption: tie the alert into the permit-to-work sign-off, so a supervisor cannot close a permit while a gas-drift flag is open. That makes Barrier a gate in a mandatory workflow rather than an optional phone buzz. States the behaviour evidence to collect: one site running the permit-gated flow, and the sign-off refusal rate it produces.</li></ul>\n<p>Must NOT: pass the advisory wedge on &quot;crews will find it useful&quot;. Must NOT hand off the wedge rebuild to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> without first delivering the rewrite here — this skill owns the whole-idea verdict; it may then suggest the deep-dive as a next step.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/so-what-stress-test/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mundane: studio expense-receipt reminder bot (REDESIGN)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>One-liner: &quot;A Slack bot that reminds our studio team to file their expense receipts.&quot;</p>\n<p>Fellow's answers to the five:</p>\n<ol><li>So what? &quot;People forget to file receipts and finance chases them. Probably saves the ops person a bit of nagging each month.&quot;</li><li>Who pays? &quot;Us, I guess. It's internal — it'd just make things smoother.&quot;</li><li>Wedge? &quot;Everyone's already in Slack, so a reminder there is frictionless.&quot;</li><li>Moat? &quot;Not really a moat, it's just a helper.&quot;</li><li>What kills it? &quot;Slack could add native reminders, or finance just uses a spreadsheet.&quot;</li></ol>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Q1 <strong>weak</strong> — &quot;a bit of nagging&quot; is opinion with a trivial magnitude. No countable money or hours at stake. The ceiling is minutes per month.</li><li>Q2 <strong>weak</strong> — &quot;us, internal&quot; is not a budget-holder buying a product; there is no external payer and no real internal budget line.</li><li>Q3 <strong>weak</strong> — &quot;already in Slack&quot; is convenience, not a forced action.</li><li>Q4 <strong>weak</strong> — the fellow correctly says there is no moat.</li><li>Q5 <strong>weak/borderline</strong> — a native Slack reminder or a spreadsheet already does this; named, but the honest read is the idea barely clears the bar to exist, not that a competitor kills a real business.</li><li><strong>Verdict: REDESIGN</strong> — but the honest rewrite is that this is a script, not a venture.</li><li>The <strong>rewrite</strong> says exactly that: &quot;This is a 20-line Slack workflow or a recurring finance reminder, not a product to build a company around. If there is a real venture nearby, it is not receipt nagging — it is whatever finance-ops pain actually carries a budget (e.g. reconciliation, not reminders). Point the stress test at that instead.&quot;</li></ul>\n<p>Must NOT: dress up the receipt bot as a PASS-able product. Must NOT invent a fake ROI to justify it. The challenge here is refusing to treat a chore-automation as a venture.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/so-what-stress-test/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Do NOT run the five questions on air. There is no idea to grade — only a domain. Grading five blanks would fabricate an assessment out of nothing.</p>\n<p>The skill must return the ONE question that unblocks a real stress test, then stop. The right unblocking question isolates the countable pain and its owner, e.g.:</p>\n<blockquote><p>&quot;What is the single logistics workflow that costs someone money every time it breaks, and who is the person that loses that money?&quot;</p></blockquote>\n<p>Acceptable alternatives ask for the one workflow + the one bleeding budget-holder. The skill may show the empty five-row template so the fellow sees what a full answer needs, but must not fill any row.</p>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: asks one focused unblocking question, invents no idea, grades nothing, offers the blank template as the next step.</li><li>FAIL: invents a logistics product, fills any row, or returns a verdict on a domain.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/so-what-stress-test/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we don't have a mobile app.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Do NOT accept the framing. &quot;We don't have a mobile app&quot; is a pre-chosen solution wearing a problem's clothes. Running the five questions on &quot;build a mobile app&quot; would stress-test the artefact, not the job.</p>\n<p>The skill must:</p>\n<ol><li>Name the trap out loud — this is a solution stated as a problem, so &quot;so what?&quot; has no answer yet because no job has been named.</li><li>Reframe to the underlying job: what does a user try to get done that the current surface (web, desk, phone call) blocks, and what does that failure cost? A mobile app is one possible answer, not the problem.</li><li>Only after the job is named does the five-question test apply. So what = the cost of that job failing; who pays = who loses money when it fails, not who wants an app.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: labels the solution-in-disguise, reframes to the job-to-be-done, and refuses to grade &quot;build a mobile app&quot; as an idea until the job and its money are named.</li><li>FAIL: runs the five questions on the mobile app, or treats &quot;no mobile app&quot; as a valid Q1 &quot;so what&quot;.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/so-what-stress-test/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Score this problem on all 8 dimensions and give me the numeric gate.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Decline. The 8-dimension numeric problem gate is <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, a sibling skill. so-what-stress-test grades a whole idea across five business questions and returns Pass / Redesign / Kill — it does not score a single problem on eight axes, and it must not improvise an 8-dimension rubric to look accommodating.</p>\n<p>The skill must name the right skill and, in one line, the difference:</p>\n<blockquote><p>&quot;That is the 8-dimension problem gate — use <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>. This skill runs the five business questions (So what / Who pays / Wedge / Moat / What kills it) on a whole idea. If you want that instead, give me the one-liner and your answer to each.&quot;</p></blockquote>\n<p>Related redirects the judge may also accept if the input points elsewhere: a request for &quot;the five-lens teardown / run the council&quot; → <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a>; &quot;pressure-test only my wedge&quot; → <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</p>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, states the one-line boundary, offers its own scope as the alternative.</li><li>FAIL: invents an 8-dimension score, poaches the sibling's job, or runs its five questions while pretending to answer the 8-dimension request.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/so-what-stress-test/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/so-what-stress-test/SKILL.md",
  "template": "skills/so-what-stress-test/template.md",
  "example": "skills/so-what-stress-test/examples/sample.md",
  "rubric": "skills/so-what-stress-test/tests/rubric.json",
  "results": "skills/so-what-stress-test/tests/RESULTS.md"
 }
});
