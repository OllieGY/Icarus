window.ICARUS_SKILL("wedge-five-questions", {
 "name": "wedge-five-questions",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes one proposed wedge and forces a binary verdict: real wedge, or a feature in a wedge costume. It runs the wedge through five thresholds, each with a hard pass bar, each demanding observed behaviour or money over opinion. The output is a 5-row table (question, threshold, evidence, pass/fail) and one overall verdict. The verdict is <code>AND</code> across all five: 4/5 is not &quot;almost a wedge,&quot; it is a NO. For every failing row the skill names the single change that would flip it. This compresses the decision &quot;should I build this first?&quot; into evidence a fellow can hold up in a room.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A wedge is not the small first feature; it is the smallest thing whose adoption and spread are forced by the user's own workflow rather than by you. This skill refuses the usual soft &quot;wedge score&quot; and runs a hard <code>AND</code> across five thresholds — standalone value, forced cadence, travel, structural expansion, scoreable adoption — so passing four and failing one still returns NO, because a wedge that needs your reminders to get used or your pitch to spread is a feature in a wedge costume. Every threshold must clear on observed behaviour or money moved; a threshold argued from opinion is scored as failed.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has one concrete candidate for the first thing to build and wants to know if it will pull its own adoption. Trigger phrases: &quot;is this a wedge&quot;, &quot;is my wedge sharp enough&quot;, &quot;what's my wedge&quot;, &quot;the smallest thing that forces adoption&quot;, &quot;will this actually get adopted&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;How do we stay defensible over three years / build the moat&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (sibling in this section; defensibility over time, not first-adoption). Reference it, do not rebuild it here.</td></tr><tr><td>&quot;Score the whole idea across its dimensions&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (8 dimensions; wedge sharpness is only one). This skill zooms all the way into the wedge with five distinct thresholds.</td></tr><tr><td>&quot;Give me the one-glance so-what&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (its Q3 asks &quot;what's the wedge?&quot; at a glance). This is the deep test that Q3 hands off to.</td></tr></tbody></table></div>\n<p>Also do not use it to invent a wedge from nothing. If no candidate exists, the input is not ready; say so and ask for the one-sentence wedge (see Method step 1).</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Five steps.</p>\n<h3 id=\"step-1-state-the-wedge-in-one-sentence\">Step 1 — State the wedge in one sentence</h3>\n<p>Force this shape: <strong>who</strong> uses it, on <strong>what recurring trigger</strong>, to get <strong>one output</strong>. If the fellow cannot write it in one sentence, that is the first failure. Name it and ask for the sentence. Do not invent the missing pieces.</p>\n<p>Good: &quot;Every Monday a regional planner uploads last week's CSV and gets a ranked list of the 20 SKUs most likely to stock out this week.&quot; Not yet a wedge sentence: &quot;An AI copilot for planners.&quot; (No trigger, no single output. That is an engine, not a wedge.)</p>\n<h3 id=\"step-2-run-the-five-thresholds\">Step 2 — Run the five thresholds</h3>\n<p>Each threshold is pass/fail. The pass bar is baked in below. A row is not a matter of degree; it clears the bar or it does not.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>Hard pass threshold</th><th>The row auto-fails if</th></tr></thead><tbody><tr><td>1</td><td>Standalone value</td><td>Delivers the full job <strong>alone in the first cycle</strong>, with nothing else built and no integration live.</td><td>First-cycle value depends on a second thing you have not built (pipeline, integration, a later feature).</td></tr><tr><td>2</td><td>Forced cadence</td><td>Its use is pulled by a <strong>recurring event already in the user's calendar/workflow</strong> (shift start, weekly review, month-end, incident).</td><td>Its use depends on <em>your</em> reminders, nudges, or emails. If you are the trigger, it fails.</td></tr><tr><td>3</td><td>Travel</td><td>Its output reaches <strong>≥2 non-users per cadence cycle</strong> (the workflow's own cycle — weekly, month-end, per-shift) as a normal part of the workflow, so it spreads without selling.</td><td>The output is seen only by the user, or only by other users. Non-users must be counted.</td></tr><tr><td>4</td><td>Structural expansion</td><td>Using it <strong>creates a new unmet need the wedge itself cannot satisfy</strong> and your next build does.</td><td>The &quot;next thing&quot; is a nice-to-have upsell, not a need the wedge structurally opens.</td></tr><tr><td>5</td><td>Scoreable adoption</td><td>Adoption is measurable with <strong>one number you already collect</strong> (no new instrumentation).</td><td>The metric requires new tracking, or is a vanity count that rises without real adoption.</td></tr></tbody></table></div>\n<h3 id=\"step-3-attach-evidence-to-every-row-and-score-it\">Step 3 — Attach evidence to every row and score it</h3>\n<p>One cited piece of evidence per row, tagged with its ladder score (see Evidence standard). A row passes only if its evidence scores <strong>≥ 0.5</strong>. Verbal commitment (0.3) and opinion (0.1) cannot pass a row. Questions 3 and 5 (travel, adoption) must be observable, not asserted: someone actually forwarded the output; the number actually exists in your data today. Q4 passes on the <strong>structural gap the wedge creates</strong> — a fact about the workflow that the wedge itself cannot satisfy — not on a user's verbal request for the next feature (a 0.3 ask does not clear the bar).</p>\n<h3 id=\"step-4-compute-the-verdict-binary-and\">Step 4 — Compute the verdict (binary AND)</h3>\n<p>Real wedge <strong>only if 5/5</strong>. Any fail returns: <em>not a wedge — a feature in a wedge costume.</em> Do not average. Do not round up.</p>\n<h3 id=\"step-5-for-each-fail-name-the-one-change\">Step 5 — For each fail, name the one change</h3>\n<p>Write the smallest change that would flip the failing row to pass. If Q2 fails because you are the reminder, the change is &quot;bind it to a trigger the user already keeps.&quot; Do not soften the verdict; describe the fix.</p>\n<p><strong>Kill line.</strong> If this skill ever labels something a wedge while any one of the five thresholds is failing, the output is auto-failed. 5/5 is the only path to &quot;real wedge.&quot;</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>A probe's job is to move a claim up this ladder. The bar this skill enforces: <strong>a row passes only on evidence ≥ 0.5</strong> (money, behaviour, or a shown artefact). A row &quot;passed&quot; on &quot;they said they'd use it&quot; (0.3) or &quot;it seems useful&quot; (0.1) is a fail, no matter how confident the fellow sounds. Travel and adoption cannot be scored on intent; they are behaviours you either observed or did not. Tag each empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. If a row's whole case is <code>[Assumption]</code>, it has not passed; it has a test to run first.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Forced cadence versus a habit you hope to build. If the thing only gets used when you send a Monday reminder, you are the cadence, and Q2 fails. Real cadence is a trigger the user keeps whether you exist or not.</p>\n<p>Travel counted among users. Output seen by teammates who also use the tool does not spread the wedge; it decorates it. Q3 counts non-users only. A digest read by two other licence-holders is zero travel.</p>\n<p>Adoption metrics that need new instrumentation. &quot;We'll track weekly actives&quot; fails Q5's &quot;already collect&quot; unless you already collect it. If reading the number requires shipping tracking first, the metric is a promise, not a measure.</p>\n<p>Expansion mistaken for upsell. &quot;They could also buy our dashboard&quot; is a cross-sell. Q4 passes only when using the wedge produces an unmet need the wedge cannot answer and the next build must — the order list has to go somewhere; the alert has to reach the crew. If the next thing is optional, it is not structural expansion.</p>\n<p>Standalone value smuggling in dependencies. &quot;It's valuable once the ERP is connected&quot; fails Q1. Week-1 value must exist with nothing else built. If the value arrives in month two, so does the wedge.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full worked wedge test on Durian Labs' first workflow (the weekly stockout digest), scored 5/5, with one row that started as opinion and had to be upgraded to observed behaviour before it could pass.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> — the sibling in this section. It handles defensibility once you are adopted; this handles whether you get adopted at all. Run this first, that second.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — scores the whole idea across eight dimensions; wedge sharpness is one of them. When a fellow wants the wide read, send them there. When they want the deep read on the wedge alone, use this.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — its Q3 asks &quot;what's the wedge?&quot; at a glance and moves on. This skill is where that glance becomes a five-threshold verdict.</p>\n<p>Supersedes: none. This is a new skill; there is no prior wedge test in the pack to beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Wedge Test — Five Questions</h1>\n<p>Fill every field. Do not average, do not round up. The verdict is <code>AND</code> across all five rows: real wedge only on 5/5.</p>\n<h2>1. The wedge in one sentence</h2>\n<blockquote><p>Every [recurring trigger], [who] [does one action] and gets [one output].</p></blockquote>\n<p><strong>Wedge:</strong> <em>[write it — who, on what recurring trigger, gets what single output]</em></p>\n<p>If you cannot complete this sentence, stop. You do not yet have a wedge to test; you have an idea. Name what is missing (trigger? single output? a real user?) and go get it.</p>\n<h2>2. The five-row verdict</h2>\n<p>Each row needs one cited piece of evidence, tagged with its ladder score. A row passes only on evidence <strong>≥ 0.5</strong> (money 1.0 / behaviour 0.7 / artefact 0.5). Verbal commitment (0.3) and opinion (0.1) fail the row.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>Hard threshold</th><th>Evidence (cite + ladder score + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>)</th><th>Pass / Fail</th></tr></thead><tbody><tr><td>1</td><td>Standalone value</td><td>Full job done <strong>alone in week 1</strong>, nothing else built</td><td><em>[e.g. &quot;Concierge-ran the output for 3 users; 2 changed behaviour on it&quot; — behaviour 0.7 <span class=\"tag tag-fact\">Fact</span>]</em></td><td><em>[PASS/FAIL]</em></td></tr><tr><td>2</td><td>Forced cadence</td><td>Use pulled by a <strong>recurring event already in the user's calendar</strong></td><td><em>[name the recurring event + evidence it pulled repeat use unprompted]</em></td><td><em>[PASS/FAIL]</em></td></tr><tr><td>3</td><td>Travel</td><td>Output reaches <strong>≥2 non-users/week</strong> as normal workflow</td><td><em>[who forwarded it, to how many non-users, how often — observed, not assumed]</em></td><td><em>[PASS/FAIL]</em></td></tr><tr><td>4</td><td>Structural expansion</td><td>Using it <strong>creates an unmet need</strong> the wedge can't satisfy and the next build does</td><td><em>[name the next build + evidence the wedge creates the need, not an upsell]</em></td><td><em>[PASS/FAIL]</em></td></tr><tr><td>5</td><td>Scoreable adoption</td><td>Adoption = <strong>one number you already collect</strong> (no new instrumentation)</td><td><em>[name the number + where it already lives in your data today]</em></td><td><em>[PASS/FAIL]</em></td></tr></tbody></table></div>\n<h2>3. Verdict</h2>\n<p><strong>Score:</strong> <em>[n]</em> / 5</p>\n<p><strong>Verdict:</strong> <em>[REAL WEDGE (only if 5/5) | NOT A WEDGE — a feature in a wedge costume]</em></p>\n<h2>4. For each failing row — the one change that flips it</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Failing #</th><th>Why it failed</th><th>Smallest change that would flip it to PASS</th></tr></thead><tbody><tr><td><em>[#]</em></td><td><em>[the specific reason]</em></td><td><em>[the one change — e.g. &quot;bind it to the Friday timesheet lock instead of our reminder email&quot;]</em></td></tr></tbody></table></div>\n<h2>5. Next step</h2>\n<ul><li>If <strong>5/5</strong>: this is the wedge. Build it, and instrument the Q5 number from day one.</li><li>If <strong>not 5/5</strong>: do not build it as the wedge yet. Run the change in section 4, then re-test. Or pick a different candidate.</li><li>Rows resting on <code>[Assumption]</code> are not passes; they are the cheapest test to run before you commit.</li></ul>",
  "path": "skills/wedge-five-questions/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Durian Labs' first workflow</h1>\n<p>Durian Labs is building an early workflow product for regional inventory planners at mid-size grocery chains. This is a test fixture: numbers are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;Our first workflow is the weekly stockout digest. We ran it by hand for three planners for two weeks before writing any code. I think it's our wedge — can you check?&quot;</p>\n<p>Available evidence, as stated:</p>\n<ul><li>Concierge run: Durian's team hand-produced the digest for 3 planners, 2 Mondays running. <span class=\"tag tag-fact\">Fact</span></li><li>2 of the 3 planners changed their Monday reorder quantities based on the ranked list. <span class=\"tag tag-fact\">Fact</span></li><li>All 3 planners have a standing Monday 9am regional planning meeting. <span class=\"tag tag-fact\">Fact</span></li><li>2 planners pasted the list into their store-ops channel (8 store managers each, none of them Durian users). <span class=\"tag tag-fact\">Fact</span></li><li>Planners spent roughly 40 min/week retyping the recommended quantities into the ERP by hand. <span class=\"tag tag-fact\">Fact</span></li><li>Durian's product logs every digest export by default. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>1. The wedge in one sentence</h2>\n<p>Every Monday morning, a regional planner uploads last week's sales-and-stock CSV and gets a ranked list of the 20 SKUs most likely to stock out this week, each with a suggested order quantity.</p>\n<p>Passes the sentence test: who (regional planner), recurring trigger (Monday morning, ahead of the 9am meeting), single output (ranked 20-SKU stockout list).</p>\n<h2>2. The five-row verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Question</th><th>Threshold</th><th>Evidence</th><th>Pass / Fail</th></tr></thead><tbody><tr><td>1</td><td>Standalone value</td><td>Full job alone in week 1, nothing else built</td><td>Concierge run needed only a CSV upload and the list — no integrations. 2 of 3 planners changed their orders on it in week 1. Behaviour observed 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>PASS</td></tr><tr><td>2</td><td>Forced cadence</td><td>Pulled by a recurring event already in the user's calendar</td><td>The Monday 9am regional planning meeting already exists; both adopters pulled the list before it, unprompted, in week 2. Behaviour observed 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>PASS</td></tr><tr><td>3</td><td>Travel</td><td>Output reaches ≥2 non-users/week</td><td>2 planners forwarded the list weekly into a store-ops channel of 8 store managers each — none are Durian users. Behaviour observed 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>PASS</td></tr><tr><td>4</td><td>Structural expansion</td><td>Using it creates an unmet need the wedge can't satisfy</td><td>Acting on the list forces the orders to be placed; planners retype quantities into the ERP ~40 min/week. That is the reorder-writeback Durian will build next. Behaviour observed 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>PASS</td></tr><tr><td>5</td><td>Scoreable adoption</td><td>One number already collected</td><td>&quot;Accounts with ≥1 export on ≥3 of 4 Mondays.&quot; Every export is already logged in the product's event stream. Artefact shown 0.5 <span class=\"tag tag-fact\">Fact</span></td><td>PASS</td></tr></tbody></table></div>\n<h2>3. Verdict</h2>\n<p><strong>Score: 5 / 5</strong></p>\n<p><strong>Verdict: REAL WEDGE.</strong></p>\n<h2>4. The row that nearly failed — and why it matters</h2>\n<p>Q4 first came in as: &quot;planners told us they'd love it to just place the order.&quot; That is verbal commitment (0.3) — below the pass bar. Argued that way, Q4 fails and the whole test returns NOT a wedge, because the verdict is <code>AND</code>.</p>\n<p>The upgrade was behavioural, not rhetorical: Durian timed the ~40 min/week of manual ERP retyping. That is observed behaviour (0.7) and, more importantly, it is <em>structural</em> — the wedge produces an order list, and an order list has to be entered somewhere. The next build (reorder-writeback) answers a need the wedge itself creates. Only after that upgrade does Q4 pass.</p>\n<p>The lesson the skill enforces: a wedge that scores 4/5 on behaviour and 1/5 on &quot;they said so&quot; is not a 4.5. It is a NO until the weak row is moved up the ladder or the wedge is changed.</p>\n<h2>5. Next step</h2>\n<p>Build the stockout digest as the wedge. Instrument the Q5 number (Mondays-with-export per account) from day one so adoption is legible before the reorder-writeback build begins.</p>",
  "path": "skills/wedge-five-questions/examples/sample.md"
 },
 "rubric": {
  "skill": "wedge-five-questions",
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
    "Is this a wedge?",
    "What's the smallest thing that forces adoption?",
    "Is my wedge sharp enough?",
    "What's my wedge?",
    "Will this actually get adopted?"
   ],
   "mustNotFire": [
    {
     "phrase": "Map our defensibility and moat over the next three years",
     "sibling": "moat-design-canvas",
     "local": true
    },
    {
     "phrase": "Score the whole idea across all its dimensions",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Give me the one-glance so-what on this idea",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings are verbatim in the <code>description</code> (&quot;is this a wedge&quot;, &quot;the smallest thing that forces adoption&quot;, &quot;is my wedge sharp enough&quot;, &quot;what's my wedge&quot;, &quot;will this actually get adopted&quot;). All 3 must-not-fire are explicitly excluded by name+sibling (&quot;Not for defensibility over years → moat-design-canvas&quot;, &quot;…eight dimensions → problem-quality-scorecard&quot;, &quot;…one-glance so-what → so-what-stress-test&quot;).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. Kill-line refusal case (G03) verified: Q3 fails → 4/5 → NOT A WEDGE.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague: skill stops, asks the one wedge-sentence (Step 1 / template §1), invents nothing. 02 solution-in-disguise: reframe + Step 1 example (&quot;An AI copilot for planners… is an engine, not a wedge&quot;) refuses the tech-as-wedge framing, asks for the output+trigger. 03 out-of-scope: When-NOT table + Related skills decline and route to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>, offer adoption-first ordering, produce no moat plan.</p>"
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
    "evidenceHtml": "<p>G01 output depends on the evidence ladder + hard ≥0.5 pass bar, non-users-only travel count, structural-expansion-vs-upsell test, and binary AND w/ kill line — a generic PM prompt would emit a soft &quot;wedge score&quot; and round up / count teammate shares as travel. Guidance is correctly tabular (5 thresholds, ladder, routing); no table-as-prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>requires 5+ real fellow uses.</p>"
   }
  ],
  "scores": {
   "columns": [
    "MF",
    "AC",
    "PE",
    "CH",
    "ES"
   ],
   "rows": [
    {
     "label": "01 Durian (stockout digest) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — 5/5 REAL WEDGE; rejects the 0.3 \"they said they'd like it\" Q4, upgrades to observed 40 min/wk ERP retyping; names already-collected number (exports/account/Monday).",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (month-end risk digest) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — 5/5 with caveat; counts only the 1 operator's observed 2 non-users, explicitly refuses the assumed 2nd forward (0.1), flags n=1 travel to reconfirm.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Mentix (shift copilot) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS (refusal case) — Q3 travel = 0 non-users → 4/5 → NOT A WEDGE; refuses \"managers could share it\" (0.1); names the flip (native shift-handover note to supervisors' channel). Kill line honored.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 Barrier (gas-safety digest) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS — 5/5; regulated shift-handover = gold-standard Q2; crew (6–10) + regulator clear Q3; flags 2-rig sample. Challenge lighter (clean pass, little to push on).",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 Timesheet-gap digest 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS — 5/5 on a deliberately mundane workflow; exactly-2 non-users (payroll admin + AM) clears Q3; flags n=3. Challenge modest (clean pass).",
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
    "see judge run below",
    "GRADUATE-READY"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>&quot;/week&quot; and &quot;week 1&quot; are hardcoded to a weekly cadence.</strong> Q1 (&quot;alone in week 1&quot;) and Q3 (&quot;≥2 non-users <strong>per week</strong>&quot;) read literally as weekly, but the skill is applied to non-weekly wedges (G02 month-end, G03/G04 per-shift). G02 only works by silently reading &quot;≥2 non-users/<strong>week-equivalent</strong>.&quot; A month-end wedge reaching 2 non-users per month-end still travels but scores &lt;2/week on a literal read. Recommend restating Q1 as &quot;the first cycle&quot; and Q3 as &quot;≥2 non-users <strong>per cadence cycle</strong>&quot; so non-weekly wedges are not penalized by the unit.</li><li><strong>Q4 evidence type is ambiguous when the expansion demand is only verbal.</strong> In G02 the user's <em>request</em> for continuous alerting is verbal (0.3, below the ≥0.5 bar), yet Q4 passes. The correct reading is that Q4 passes on the <em>structural fact</em> of the mid-month blind spot (factual), not on the ask. The skill's Gotchas cover &quot;expansion mistaken for upsell&quot; but not this: a careless fellow could either fail Q4 (treating the 0.3 ask as the evidence) or pass it while smuggling the 0.3 ask under the bar. Recommend a line: &quot;For Q4, cite the structural gap the wedge creates (a fact), not the user's request to fill it (opinion/verbal).&quot;</li><li>Both are minor and changed no verdict; the core hard-AND / kill-line mechanic is sound and correctly forces NO at 4/5.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: generalised Q1/Q3 to the workflow's own cadence (\"first cycle\" / \"per cadence cycle\") and clarified Q4 passes on the structural gap, not a verbal ask.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — wedge-five-questions</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Is this a wedge?&quot;</li><li>&quot;What's the smallest thing that forces adoption?&quot;</li><li>&quot;Is my wedge sharp enough?&quot;</li><li>&quot;What's my wedge?&quot;</li><li>&quot;Will this actually get adopted?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Map our defensibility and moat over the next three years&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a></li><li>&quot;Score the whole idea across all its dimensions&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Give me the one-glance so-what on this idea&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>see judge run below</td><td>GRADUATE-READY</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings are verbatim in the <code>description</code> (&quot;is this a wedge&quot;, &quot;the smallest thing that forces adoption&quot;, &quot;is my wedge sharp enough&quot;, &quot;what's my wedge&quot;, &quot;will this actually get adopted&quot;). All 3 must-not-fire are explicitly excluded by name+sibling (&quot;Not for defensibility over years → moat-design-canvas&quot;, &quot;…eight dimensions → problem-quality-scorecard&quot;, &quot;…one-glance so-what → so-what-stress-test&quot;).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. Kill-line refusal case (G03) verified: Q3 fails → 4/5 → NOT A WEDGE.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague: skill stops, asks the one wedge-sentence (Step 1 / template §1), invents nothing. 02 solution-in-disguise: reframe + Step 1 example (&quot;An AI copilot for planners… is an engine, not a wedge&quot;) refuses the tech-as-wedge framing, asks for the output+trigger. 03 out-of-scope: When-NOT table + Related skills decline and route to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>, offer adoption-first ordering, produce no moat plan.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>G01 output depends on the evidence ladder + hard ≥0.5 pass bar, non-users-only travel count, structural-expansion-vs-upsell test, and binary AND w/ kill line — a generic PM prompt would emit a soft &quot;wedge score&quot; and round up / count teammate shares as travel. Guidance is correctly tabular (5 thresholds, ladder, routing); no table-as-prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (dims: method_fidelity / artifact_complete / proprietary_edge / challenge / evidence_standard)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total /25</th><th>Result</th></tr></thead><tbody><tr><td>01 Durian (stockout digest)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — 5/5 REAL WEDGE; rejects the 0.3 &quot;they said they'd like it&quot; Q4, upgrades to observed 40 min/wk ERP retyping; names already-collected number (exports/account/Monday).</td></tr><tr><td>02 Azraq (month-end risk digest)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — 5/5 with caveat; counts only the 1 operator's observed 2 non-users, explicitly refuses the assumed 2nd forward (0.1), flags n=1 travel to reconfirm.</td></tr><tr><td>03 Mentix (shift copilot)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS (refusal case) — Q3 travel = 0 non-users → 4/5 → NOT A WEDGE; refuses &quot;managers could share it&quot; (0.1); names the flip (native shift-handover note to supervisors' channel). Kill line honored.</td></tr><tr><td>04 Barrier (gas-safety digest)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS — 5/5; regulated shift-handover = gold-standard Q2; crew (6–10) + regulator clear Q3; flags 2-rig sample. Challenge lighter (clean pass, little to push on).</td></tr><tr><td>05 Timesheet-gap digest</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS — 5/5 on a deliberately mundane workflow; exactly-2 non-users (payroll admin + AM) clears Q3; flags n=3. Challenge modest (clean pass).</td></tr></tbody></table></div>\n<p>All cases ≥21, no dimension &lt;4, no <code>auto_fail</code> triggered (no fabricated numbers; the weak idea in G03 was failed, not flattered; no scope-poaching; not boilerplate). Gate 2 PASS 5/5.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>&quot;/week&quot; and &quot;week 1&quot; are hardcoded to a weekly cadence.</strong> Q1 (&quot;alone in week 1&quot;) and Q3 (&quot;≥2 non-users <strong>per week</strong>&quot;) read literally as weekly, but the skill is applied to non-weekly wedges (G02 month-end, G03/G04 per-shift). G02 only works by silently reading &quot;≥2 non-users/<strong>week-equivalent</strong>.&quot; A month-end wedge reaching 2 non-users per month-end still travels but scores &lt;2/week on a literal read. Recommend restating Q1 as &quot;the first cycle&quot; and Q3 as &quot;≥2 non-users <strong>per cadence cycle</strong>&quot; so non-weekly wedges are not penalized by the unit.</li><li><strong>Q4 evidence type is ambiguous when the expansion demand is only verbal.</strong> In G02 the user's <em>request</em> for continuous alerting is verbal (0.3, below the ≥0.5 bar), yet Q4 passes. The correct reading is that Q4 passes on the <em>structural fact</em> of the mid-month blind spot (factual), not on the ask. The skill's Gotchas cover &quot;expansion mistaken for upsell&quot; but not this: a careless fellow could either fail Q4 (treating the 0.3 ask as the evidence) or pass it while smuggling the 0.3 ask under the bar. Recommend a line: &quot;For Q4, cite the structural gap the wedge creates (a fact), not the user's request to fill it (opinion/verbal).&quot;</li><li>Both are minor and changed no verdict; the core hard-AND / kill-line mechanic is sound and correctly forces NO at 4/5.</li></ul>\n<h2>Refine run 2 — applied judge fixes: generalised Q1/Q3 to the workflow's own cadence (&quot;first cycle&quot; / &quot;per cadence cycle&quot;) and clarified Q4 passes on the structural gap, not a verbal ask.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Durian Labs (seed case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Wedge candidate: &quot;Every Monday a regional grocery planner uploads last week's sales-and-stock CSV and gets a ranked list of the 20 SKUs most likely to stock out this week, with suggested order quantities.&quot;</p>\n<p>Evidence on the table:</p>\n<ul><li>Concierge run for 3 planners, 2 Mondays; 2 of 3 changed their reorder quantities on the list. <span class=\"tag tag-fact\">Fact</span></li><li>Standing Monday 9am regional planning meeting exists for all 3. <span class=\"tag tag-fact\">Fact</span></li><li>2 planners forwarded the list weekly into a store-ops channel of 8 non-user store managers each. <span class=\"tag tag-fact\">Fact</span></li><li>~40 min/week spent retyping recommended quantities into the ERP by hand. <span class=\"tag tag-fact\">Fact</span></li><li>Product logs every digest export by default. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Wedge restated in one sentence with who / recurring trigger / single output.</li><li>Five-row table: question, threshold, evidence with ladder score, pass/fail.</li><li>Q1 PASS on behaviour 0.7 (order changes from a CSV-only concierge run, no integration).</li><li>Q2 PASS naming the Monday 9am meeting as the pre-existing trigger; pulled unprompted in week 2.</li><li>Q3 PASS counting ≥2 non-users/week (8 store managers per channel), observed forwarding.</li><li>Q4 PASS on the structural gap: order list must be entered somewhere; ~40 min/week ERP retyping is the need the next build (reorder-writeback) fills. Must reject any version argued only from &quot;they said they'd like it&quot; (0.3).</li><li>Q5 PASS naming one already-collected number (exports per account per Monday).</li><li>Verdict: <strong>REAL WEDGE, 5/5.</strong></li><li>Evidence tags present; no fabricated numbers beyond the input.</li></ul>\n<p>Numbers that must appear: 5/5; ≥2 non-users; the specific already-collected adoption number.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/wedge-five-questions/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre / infrastructure risk)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Wedge candidate: &quot;At each month-end, a data-centre operator's risk lead uploads the month's incident and uptime logs and gets a one-page power-and-cooling risk digest ranking their top 5 exposure sites, ready to send to their insurer.&quot;</p>\n<p>Evidence on the table:</p>\n<ul><li>Azraq hand-built the digest for 2 operators for one month-end each. <span class=\"tag tag-fact\">Fact</span></li><li>Both risk leads already run a month-end risk review to satisfy their insurer's reporting clause. <span class=\"tag tag-fact\">Fact</span></li><li>One operator forwarded the digest to their insurance broker and a co-located tenant (both non-users). <span class=\"tag tag-fact\">Fact</span></li><li>The other operator has a standing month-end review but has not forwarded the digest yet. [Assumption that they will]</li><li>After seeing the digest, one operator asked for continuous alerting between month-ends; today they have no view mid-month. [Fact: they described the gap; the mid-month blind spot is real]</li><li>Azraq's tool logs each digest generation. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Wedge restated in one sentence (month-end trigger, single digest output).</li><li>Q1 PASS on behaviour 0.7 (hand-built digest usable from logs alone, no integration).</li><li>Q2 PASS: month-end insurer-reporting review is a pre-existing forced cadence, not an Azraq reminder.</li><li>Q3 is the row to watch. Only ONE operator's forwarding is observed (broker + tenant = 2 non-users). The second operator's travel is <code>[Assumption]</code> (0.1) and must NOT be counted. A good output either PASSES Q3 on the one operator's observed ≥2 non-users/week-equivalent and flags the sample is thin, or marks it a soft pass with a note to confirm on the second account. It must not inflate the assumed forward into evidence.</li><li>Q4 PASS on structural expansion: the mid-month blind spot is a need the month-end digest structurally cannot fill; continuous alerting is the next build. Must not accept it as a mere upsell.</li><li>Q5 PASS: digests-generated-per-account is already logged.</li><li>Verdict: <strong>REAL WEDGE, 5/5</strong>, with an explicit caveat that Q3 rests on n=1 observed and should be reconfirmed — challenge, not flattery.</li></ul>\n<p>Numbers that must appear: 5/5; the 2 observed non-users; explicit refusal to count the assumed second forward.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/wedge-five-questions/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix (industrial AI) — the case that fails exactly one question",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Wedge candidate: &quot;A factory manager opens Mentix's AI copilot at the start of each shift and gets a plain-language read of the plant's overnight anomalies with a suggested first action.&quot;</p>\n<p>Evidence on the table:</p>\n<ul><li>Piloted with 4 factory managers for 3 weeks. <span class=\"tag tag-fact\">Fact</span></li><li>3 of 4 changed their first shift action based on the copilot's read in week 1. <span class=\"tag tag-fact\">Fact</span></li><li>Shift start is a fixed daily event; managers open the copilot at shift start without prompting. <span class=\"tag tag-fact\">Fact</span></li><li>The copilot's read stays on the manager's own screen. It is not exported, pasted, or sent anywhere; no non-user sees it. <span class=\"tag tag-fact\">Fact</span></li><li>After a week, managers wanted the copilot to also brief their line supervisors; today they retell it verbally. <span class=\"tag tag-fact\">Fact</span></li><li>Mentix logs copilot opens per manager per shift by default. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — this is a NOT-a-wedge verdict",
     "html": "<ul><li>Wedge restated in one sentence (shift-start trigger, single output: overnight-anomaly read + first action).</li><li>Q1 PASS on behaviour 0.7 (managers changed their first action on week-1 reads, copilot alone).</li><li>Q2 PASS: shift start is a pre-existing forced cadence; opened unprompted.</li><li><strong>Q3 FAIL.</strong> The output reaches zero non-users. It never leaves the manager's screen. Travel requires ≥2 non-users/week; observed travel is 0. A correct output must fail this row and must refuse any argument that &quot;managers could share it&quot; (that is opinion, 0.1).</li><li>Q4 PASS on structural expansion (the read has to reach supervisors; verbal retelling is the unmet need a supervisor-briefing build fills). Note: this row passing does not save the verdict.</li><li>Q5 PASS: copilot-opens-per-shift already logged.</li><li>Verdict: <strong>NOT A WEDGE — a feature in a wedge costume. Score 4/5.</strong> The kill line applies: it must not be blessed as a wedge with Q3 failing.</li><li>Section 4 must name the one change: give the output a native path to non-users (a shift-handover note the copilot generates and posts to the supervisors' channel), which would move Q3 from 0 observed non-users toward the ≥2 bar. Then re-test.</li></ul>\n<p>Numbers that must appear: 4/5; travel = 0 non-users observed; the explicit NOT-a-wedge verdict; the single flip-it change.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/wedge-five-questions/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence (oil & gas safety)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Wedge candidate: &quot;At each shift handover, a rig safety officer gets an auto-generated gas-safety alert digest — open permits, gas readings out of range, overdue checks — that they read into the handover meeting.&quot;</p>\n<p>Evidence on the table:</p>\n<ul><li>Ran manually for 2 rigs across 5 shift handovers. <span class=\"tag tag-fact\">Fact</span></li><li>Safety officers acted on the digest to hold or clear specific permits in week 1. <span class=\"tag tag-fact\">Fact</span></li><li>Shift handover is a mandatory, logged event on every rig — the cadence is regulatory, not optional. <span class=\"tag tag-fact\">Fact</span></li><li>The digest is read aloud in handover and a copy goes to the incoming crew (6–10 non-user field workers) and is filed for the regulator's permit-audit trail (a non-user). <span class=\"tag tag-fact\">Fact</span></li><li>Acting on out-of-range readings creates the need to log the corrective action and evidence it; today that is a separate paper trail Barrier will digitise next. <span class=\"tag tag-fact\">Fact</span></li><li>The system logs each digest issued per rig per shift. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Wedge restated in one sentence (shift-handover trigger, single output: gas-safety alert digest).</li><li>Q1 PASS on behaviour 0.7 (permits held/cleared on the manual digest, week 1).</li><li>Q2 PASS: shift handover is a mandatory regulated cadence — the strongest possible forced-cadence evidence. Note that regulatory-mandated triggers are the gold standard for Q2.</li><li>Q3 PASS clearly: incoming crew (6–10 non-users) plus the regulator audit trail. Well past ≥2 non-users/week.</li><li>Q4 PASS: corrective-action logging is the structural need the alert creates; the next build (digital corrective-action log) fills it, not an upsell.</li><li>Q5 PASS: digests-issued-per-rig-per-shift already logged.</li><li>Verdict: <strong>REAL WEDGE, 5/5.</strong> A strong pass; the output should still tag every row's evidence and note the sample is 2 rigs (thin), flagging what would confirm at scale — challenge even a clean pass.</li></ul>\n<p>Numbers that must appear: 5/5; the ≥2 non-users (6–10 crew + regulator); the already-collected adoption number.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/wedge-five-questions/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane case (timesheet-gap digest, agency team lead)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Wedge candidate: &quot;Every Friday at timesheet lock, an agency team lead gets a one-line-per-person digest of who has not logged their hours for the week.&quot;</p>\n<p>Evidence on the table:</p>\n<ul><li>Piloted with 3 team leads for 2 Fridays. All 3 chased missing entries the same afternoon. <span class=\"tag tag-fact\">Fact</span></li><li>Friday timesheet lock is a fixed, payroll-enforced deadline — it exists whether or not this product does. <span class=\"tag tag-fact\">Fact</span></li><li>Leads forwarded the gap list to a payroll admin and cc'd the account manager (both non-users) so payroll could run. <span class=\"tag tag-fact\">Fact</span></li><li>After the digest, leads copied each non-logger's name into individual Slack DMs by hand, ~15 min/week. <span class=\"tag tag-fact\">Fact</span></li><li>The tool logs each digest opened per team per Friday by default. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Wedge restated in one sentence (Friday timesheet-lock trigger, single output: the gap list).</li><li>Q1 PASS on behaviour 0.7 (leads chased gaps same day from the export alone, no integration).</li><li>Q2 PASS: Friday timesheet lock is a pre-existing, payroll-enforced cadence, not a product reminder. A strong Q2.</li><li>Q3 PASS: gap list forwarded to payroll admin + account manager = ≥2 non-users/week, observed.</li><li>Q4 PASS on structural expansion: the gap list has to turn into chases; ~15 min/week of manual Slack DMs is the unmet need a one-click-nudge build fills. Not an upsell.</li><li>Q5 PASS: digests-opened-per-team-per-Friday already logged.</li><li>Verdict: <strong>REAL WEDGE, 5/5.</strong></li><li>The output should note that a mundane wedge is still a wedge; sharpness, not glamour, is what these five questions measure. Sample is n=3 — flag it.</li></ul>\n<p>Numbers that must appear: 5/5; ≥2 non-users; the already-collected adoption number.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/wedge-five-questions/tests/golden/05.md"
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
     "html": "<p>&quot;Is my logistics idea a sharp enough wedge?&quot;</p>\n<p>No wedge is stated. No user, no trigger, no output, no evidence.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not run the five questions on nothing. There is nothing to score.</li><li>Do not invent a logistics wedge, a user, a cadence, or numbers to fill the gap.</li><li>Ask the ONE unblocking question: write the wedge in one sentence — <strong>who</strong> uses it, on <strong>what recurring trigger</strong>, to get <strong>which single output</strong>. Give the shape as a fill-in so the fellow can answer in one line.</li><li>Optionally return the smallest honest next step: &quot;Bring me that sentence plus any evidence you have that a real user did the thing, and I'll run all five thresholds.&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricated a wedge, persona, or metric not in the input.</li><li>Ran a five-row table on an idea, producing a verdict from thin air.</li><li>Flattered (&quot;sounds promising!&quot;) instead of naming that there is no testable wedge yet.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/wedge-five-questions/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our wedge is our AI. The model is genuinely better than anything else out there — that's the wedge.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. A technology is not a wedge. A wedge is a unit of adopted behaviour: someone doing one thing, on a recurring trigger, to get one output. &quot;Our AI&quot; is an engine, not a wedge.</li><li>Name the trap: mistaking the engine for the wedge. A better model with no forced cadence, no travel, and no standalone week-1 job still gets zero adoption; &quot;better&quot; is not a threshold on the ladder.</li><li>Reframe by asking for the wedge sentence: what single output does a user get from the AI, on what recurring trigger, such that they come back without being reminded? Then, and only then, run the five questions on that output — not on the model.</li><li>Keep the model in its place: it may power the wedge, but Q1–Q5 test the adopted behaviour, not the technology.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;the AI&quot; as the wedge and scored it.</li><li>Ran the five questions on the model's quality rather than on an output a user adopts.</li><li>Praised the model instead of naming that a technology cannot pass a behavioural test.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/wedge-five-questions/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Forget first adoption — I want to map how we stay defensible over the next three years. What's our moat, and how do we protect it as competitors show up?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill tests whether ONE wedge gets adopted now. It does not model defensibility over time.</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> handles long-term defensibility and how the moat compounds as the market reacts.</li><li>Offer the honest ordering: adoption first, moat second. If the fellow has not confirmed the wedge is real (5/5 here), the moat question is premature — a moat around something no one adopts protects nothing. Offer to run the wedge test first if they have a candidate.</li><li>Do not produce a three-year moat plan, a defensibility map, or a competitive-response timeline. That is out of scope.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Answered the moat / defensibility question directly.</li><li>Produced multi-year strategy content this skill does not own.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> as the correct destination.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/wedge-five-questions/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/wedge-five-questions/SKILL.md",
  "template": "skills/wedge-five-questions/template.md",
  "example": "skills/wedge-five-questions/examples/sample.md",
  "rubric": "skills/wedge-five-questions/tests/rubric.json",
  "results": "skills/wedge-five-questions/tests/RESULTS.md"
 }
});
