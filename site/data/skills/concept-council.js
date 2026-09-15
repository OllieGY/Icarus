window.ICARUS_SKILL("concept-council", {
 "name": "concept-council",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a raw, unproven idea and returns one decision: the single cheapest test to run this week. It convenes a five-lens adversarial panel, forces each lens to land its hardest single attack, ranks those attacks by how much of the idea they kill, and collapses the pile into one load-bearing gap and one probe. The output is a filled Gap Map plus a First-Probe Brief. It is the first thing a fellow runs when a concept is still a sentence, before any problem statement or PRD exists.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic brainstorming adds ideas; a SWOT lists strengths and weaknesses in parallel and stops. concept-council does the opposite: five adversarial lenses — Skeptic, Buyer, Incumbent, Engineer, Regulator — each return their single hardest attack, and a Synthesiser ranks those attacks by likelihood-the-attack-is-right times damage-if-right, names the one load-bearing gap (the single assumption that, if wrong, sinks the whole idea), and hands back exactly one probe you can run this week to test it. It is a teardown that ends in one action, not a list; if it gives you more than one thing to build first, it has failed.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when the idea is still one sentence and unattacked. Use it before <code>problem-statement</code>, before any PRD, before you have picked a segment.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>The five so-what questions run on an already-formed concept</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td><td>That interrogates a stated concept; this tears down a raw one and ends in a probe.</td></tr><tr><td>A numeric score across eight problem dimensions</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td><td>That grades; this does not score the idea, it finds the one gap and tests it.</td></tr><tr><td>The unit-cost physics floor of a claim</td><td><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></td><td>That is a cost-teardown, not a five-lens attack.</td></tr><tr><td>A written PRD or spec</td><td><code>prd-development</code>, <code>one-pager-prd</code>, <code>create-prd</code></td><td>This runs upstream of any spec. Decline and point there.</td></tr></tbody></table></div>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. Do not skip the ranking. Do not return more than one probe.</p>\n<h3 id=\"step-1-restate-the-concept-in-one-sentence\">Step 1 — Restate the concept in one sentence</h3>\n<p>Write the idea back in the fellow's own words, one sentence. If you cannot — because the input names no user, no job, or no change — ask the <strong>one</strong> question that unblocks it and stop. Invent no user, no number, no domain detail.</p>\n<h3 id=\"step-2-convene-the-panel\">Step 2 — Convene the panel</h3>\n<p>Each lens returns its single strongest attack. Not a list. One line. If a lens has three worries, it must pick the one that does the most damage and drop the rest.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>The one question it must answer</th><th>Attack lands as</th></tr></thead><tbody><tr><td>Skeptic</td><td>Is this a real problem, or would the user not notice if it vanished?</td><td>One sentence naming why the pain may not exist or may be tolerated.</td></tr><tr><td>Buyer</td><td>Who holds the budget, and why would they not pay — or keep doing nothing?</td><td>One sentence naming the non-purchase.</td></tr><tr><td>Incumbent</td><td>Why does the obvious existing player crush this, copy it, or rationally ignore it?</td><td>One sentence naming the incumbent's move.</td></tr><tr><td>Engineer</td><td>Why is this harder, slower, or costlier to build than the pitch assumes?</td><td>One sentence naming the hidden build cost.</td></tr><tr><td>Regulator</td><td>What legal, safety, data-rights, or jurisdiction landmine kills or gates it?</td><td>One sentence naming the landmine.</td></tr></tbody></table></div>\n<h3 id=\"step-3-score-each-attack\">Step 3 — Score each attack</h3>\n<p>For each attack, set two numbers and multiply. Tag the evidence you actually have.</p>\n<ul><li><strong>L (likelihood the attack is right)</strong>: 0.1–1.0.</li><li><strong>D (damage if right)</strong>: 0.1–1.0, where 1.0 means the whole concept is dead.</li><li><strong>Load-bearing score = L × D.</strong></li></ul>\n<p>Beside each, tag your basis: <code>[Fact]</code> if you have observed evidence, <code>[Assumption]</code> if it is inherited belief, <code>[Hypothesis]</code> if it is a guess to be tested. An attack you can only tag <code>[Assumption]</code> or <code>[Hypothesis]</code> is exactly what a probe is for.</p>\n<h3 id=\"step-4-name-the-one-load-bearing-gap\">Step 4 — Name the one load-bearing gap</h3>\n<p>The Synthesiser takes the highest L × D and states it as one falsifiable sentence: &quot;This idea dies if [assumption] is false.&quot; Ties break toward the attack that is cheapest to test, not the scariest. Everything below the top score is noted and parked, not probed.</p>\n<h3 id=\"step-5-design-the-first-probe\">Step 5 — Design the First-Probe</h3>\n<p>Design the cheapest honest test of that one gap. Constraints, all mandatory:</p>\n<ol><li>It tests <strong>the load-bearing gap</strong>, not a nearby easier thing.</li><li>It costs <strong>≤ 1 week</strong> and ideally near-zero dollars.</li><li>It moves the claim <strong>up the evidence ladder</strong> to behaviour (0.7) or money (1.0). A probe that only gathers opinions (0.1) is rejected — redesign it until someone has to do or pay something. Exception: a <strong>dispositive fact-establishing probe</strong> — one that definitively resolves the load-bearing gap, e.g. securing a data feed or getting an authoritative HSE/legal ruling that can outright kill the idea — counts as high-value evidence even though it is not a demand signal.</li></ol>\n<h3 id=\"step-6-write-the-first-probe-brief\">Step 6 — Write the First-Probe Brief</h3>\n<p>One probe. State what it tests, the method, the cost, the pass line, the fail line, and the rung it moves the claim to. If you have written two probes, delete one. If the cost exceeds a week, the probe is wrong, not the budget.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every attack and every probe is weighed on the ladder: money moved <strong>1.0</strong> &gt; behaviour observed <strong>0.7</strong> &gt; artefact shown <strong>0.5</strong> &gt; verbal commitment <strong>0.3</strong> &gt; opinion <strong>0.1</strong>. The load-bearing gap is almost always an <code>[Assumption]</code> or <code>[Hypothesis]</code> today; the probe's whole job is to move it up at least to behaviour. Done means: one gap named, one probe written, and the probe would produce a signal of at least 0.7 within a week. A probe whose best possible result is an opinion (0.1) does not clear the bar and the skill must say so.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>More than one &quot;build first&quot; is an auto-fail.</strong> The point is compression to a single action. If two probes feel equally urgent, you have not finished ranking — force the L × D tie-break.</li><li><strong>A probe over a week is a rewrite, not a plan.</strong> If the cheapest honest test takes a month, you are testing the wrong gap. Find a thinner slice of the same assumption that a person can react to in days.</li><li><strong>Opinion-dressed-as-evidence.</strong> &quot;I asked five friends and they loved it&quot; is a 0.1. Watch for probes that quietly collect enthusiasm instead of behaviour; the ladder rejects them.</li><li><strong>Lenses that fetch instead of attack.</strong> A lens that says &quot;we should research the market&quot; has not attacked. Send it back until it names a specific way the idea dies.</li><li><strong>Fabrication to fill a lens.</strong> If you have no basis for the Buyer or Regulator attack, tag it <code>[Hypothesis]</code> and lower L — do not invent a regulation or a competitor to make the panel look complete.</li><li><strong>Solution in disguise.</strong> When the &quot;idea&quot; is really a pre-chosen solution (&quot;we don't have a mobile app&quot;, &quot;we need a copilot&quot;), it names a feature, not a job. Name the trap, reframe to the underlying job the missing feature would serve, and convene the panel on that job — do not attack the feature.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on Mentix (&quot;an AI copilot for factory managers&quot;): five lens-attacks scored, the load-bearing gap named (managers will not act on the copilot mid-shift), and one week-long shadow probe that moves the claim from opinion to behaviour.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Runs <strong>before</strong> <code>problem-statement</code>, <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>, and <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>. It turns a sentence into one tested assumption; those refine an already-scoped problem.</li><li>Absorbs the experiment-framing bones of <code>brainstorm-experiments-new</code> (skin-in-the-game, your-own-data, behaviour over opinion) but inverts the flow: that skill generates several pretotypes for a concept assumed worth testing; this one first proves which single assumption is worth a pretotype at all. It does not supersede it — use <code>brainstorm-experiments-new</code> once the load-bearing gap survives its first probe and you need a fuller experiment set.</li><li>Feeds <code>beachhead-segment</code> and the wedge skills: the surviving gap and its probe result are the raw input for choosing where to aim.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Concept Council — Gap Map + First-Probe Brief</h1>\n<p>Fill top to bottom. One attack per lens. One gap. One probe. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<hr>\n<h2>0. Concept in one sentence</h2>\n<blockquote><p>[Restate the idea in the fellow's own words. Name the user, the job, and the change. If you cannot, write the ONE unblocking question here and stop.]</p></blockquote>\n<hr>\n<h2>1. Gap Map — the five-lens teardown</h2>\n<p>Each lens lands its single strongest attack. <code>L</code> = likelihood the attack is right (0.1–1.0). <code>D</code> = damage if right (0.1–1.0, where 1.0 = whole concept dead). Score = <code>L × D</code>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>Its one hardest attack</th><th>L</th><th>D</th><th>Score (L×D)</th><th>Basis</th></tr></thead><tbody><tr><td>Skeptic (real problem?)</td><td>[why the pain may not exist / be tolerated]</td><td>0.0</td><td>0.0</td><td>0.00</td><td>[Fact/Assumption/Hypothesis]</td></tr><tr><td>Buyer (who pays?)</td><td>[the non-purchase: budget holder does nothing / buys other]</td><td>0.0</td><td>0.0</td><td>0.00</td><td>[Fact/Assumption/Hypothesis]</td></tr><tr><td>Incumbent (obvious player?)</td><td>[crush / copy / rationally ignore]</td><td>0.0</td><td>0.0</td><td>0.00</td><td>[Fact/Assumption/Hypothesis]</td></tr><tr><td>Engineer (harder than it looks?)</td><td>[the hidden build cost]</td><td>0.0</td><td>0.0</td><td>0.00</td><td>[Fact/Assumption/Hypothesis]</td></tr><tr><td>Regulator (landmine?)</td><td>[legal / safety / data-rights / jurisdiction]</td><td>0.0</td><td>0.0</td><td>0.00</td><td>[Fact/Assumption/Hypothesis]</td></tr></tbody></table></div>\n<p>Parked (everything not the top score): [list the runners-up in one line each; note them, do not probe them].</p>\n<hr>\n<h2>2. The one load-bearing gap</h2>\n<blockquote><p>This idea dies if <strong>[the single assumption behind the highest-scoring attack]</strong> is false.</p></blockquote>\n<ul><li>Highest score: [lens name], [L×D]</li><li>Today's basis: [Assumption / Hypothesis — almost never Fact yet]</li><li>Tie-break used (if any): [cheapest-to-test wins]</li></ul>\n<hr>\n<h2>3. First-Probe Brief</h2>\n<p>One probe. It must test the gap above, cost ≤ 1 week, and move the claim up the evidence ladder to behaviour (0.7) or money (1.0). If your best result is an opinion (0.1), redesign it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>What it tests</td><td>[the load-bearing gap, restated as a yes/no]</td></tr><tr><td>Method</td><td>[the thinnest thing that makes a real person do or pay something]</td></tr><tr><td>Cost</td><td>[hours/days and dollars — must be ≤ 1 week]</td></tr><tr><td>Ladder rung it reaches</td><td>[behaviour 0.7 / money 1.0 — not opinion]</td></tr><tr><td>Pass looks like</td><td>[the specific observed behaviour or payment that says &quot;gap survives&quot;]</td></tr><tr><td>Fail looks like</td><td>[the specific result that says &quot;kill or pivot&quot;]</td></tr><tr><td>Decision on pass</td><td>[what the fellow does next]</td></tr><tr><td>Decision on fail</td><td>[kill / pivot / re-scope — name it]</td></tr></tbody></table></div>\n<hr>\n<h2>4. One-line handoff</h2>\n<blockquote><p>Run [probe] by [date]. If [pass line], the concept clears its first gap. If [fail line], [kill/pivot].</p></blockquote>",
  "path": "skills/concept-council/template.md"
 },
 "example": {
  "html": "<h1>Sample run — Mentix</h1>\n<p>Illustrative fixture. Numbers are plausible and clearly synthetic, not real client data.</p>\n<p><strong>Fellow input (verbatim):</strong> &quot;Here's my idea — an AI copilot for factory managers. Tear it apart. What should I build first?&quot;</p>\n<hr>\n<h2>0. Concept in one sentence</h2>\n<blockquote><p>Mentix wants factory plant managers to run their shift by asking an AI copilot what to do next, instead of reading dashboards and radioing the floor.</p></blockquote>\n<p>Named user (plant manager), job (decide the next shift action), change (ask an AI instead of reading dashboards). Clear enough to attack.</p>\n<hr>\n<h2>1. Gap Map — the five-lens teardown</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>Its one hardest attack</th><th>L</th><th>D</th><th>Score</th><th>Basis</th></tr></thead><tbody><tr><td>Skeptic</td><td>Managers already know the next action from twenty years on the floor; the copilot answers a question they don't ask.</td><td>0.6</td><td>0.7</td><td>0.42</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>Buyer</td><td>Plant budget buys machines and maintenance contracts, not manager software; the copilot has no line item.</td><td>0.5</td><td>0.6</td><td>0.30</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>Incumbent</td><td>The MES/SCADA vendor already sitting on the plant data bolts a chat box onto its console and Mentix is a feature, not a product.</td><td>0.5</td><td>0.7</td><td>0.35</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td>Engineer</td><td>Every plant's tag names, PLCs, and line layout differ; each install is a bespoke data-integration project, not a signup.</td><td>0.7</td><td>0.6</td><td>0.42</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>Regulator</td><td>A wrong copilot instruction during a hazardous process is a safety-liability event; plants gate any advice system through slow HSE sign-off.</td><td>0.4</td><td>0.7</td><td>0.28</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr></tbody></table></div>\n<p>Two attacks tie at 0.42: Skeptic (managers won't act on it) and Engineer (every install is bespoke).</p>\n<p>Parked: Buyer 0.30, Incumbent 0.35, Regulator 0.28. Noted, not probed yet — the Incumbent attack matters and should be re-scored after the first probe.</p>\n<hr>\n<h2>2. The one load-bearing gap</h2>\n<p>Tie-break: the Skeptic attack is cheaper to test in a week (watch behaviour) than the Engineer attack (needs a real integration). Cheapest honest test wins.</p>\n<blockquote><p>This idea dies if <strong>plant managers will not change their next shift action based on an AI recommendation delivered mid-shift</strong> is false — i.e. if they ignore it, the whole copilot is decoration.</p></blockquote>\n<ul><li>Highest score: Skeptic, 0.42 (tie broken on testability)</li><li>Today's basis: <span class=\"tag tag-assumption\">Assumption</span> — no observed manager has yet acted on a Mentix suggestion</li><li>Everything else waits until this clears</li></ul>\n<hr>\n<h2>3. First-Probe Brief</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>What it tests</td><td>Will a plant manager take a floor action they would not otherwise have taken, because a recommendation told them to?</td></tr><tr><td>Method</td><td>Concierge Wizard-of-Oz. For three shifts at one friendly plant, a Mentix operator watches the same live data feed and sends the manager 3–5 plain-text &quot;next action&quot; suggestions per shift by the tool they already use (radio/WhatsApp). No product built.</td></tr><tr><td>Cost</td><td>3 shifts, one operator shadowing, ~0 dollars. Under one week.</td></tr><tr><td>Ladder rung it reaches</td><td>Behaviour (0.7) — we watch what the manager actually does, not what they say about the idea.</td></tr><tr><td>Pass looks like</td><td>Manager acts on ≥ 1 suggestion per shift that they confirm they would not have taken on their own.</td></tr><tr><td>Fail looks like</td><td>Manager acknowledges suggestions politely but changes no action, or only acts on things they were already about to do.</td></tr><tr><td>Decision on pass</td><td>Re-score the Engineer and Incumbent attacks; those become the next gaps. Now a pretotype set is worth designing (<code>brainstorm-experiments-new</code>).</td></tr><tr><td>Decision on fail</td><td>Pivot away from &quot;copilot that tells managers what to do.&quot; The value, if any, is elsewhere (e.g. informing the maintenance crew, not the manager).</td></tr></tbody></table></div>\n<hr>\n<h2>4. One-line handoff</h2>\n<blockquote><p>Run the 3-shift concierge suggestion test at the pilot plant next week. If the manager acts on a suggestion they'd otherwise have missed, the concept clears its first gap. If they nod and change nothing, pivot the user.</p></blockquote>\n<hr>\n<h2>Why this beats a generic answer</h2>\n<p>A default prompt would list ten risks and suggest &quot;talk to some factory managers.&quot; This run does three things it would not: it forces each lens to one attack and scores them, so &quot;managers won't act&quot; (0.42) is ranked above &quot;no budget line&quot; (0.30) rather than treated as equal bullets; it names one load-bearing gap as a falsifiable sentence; and it hands back one probe that produces a 0.7 behaviour signal in three shifts for zero dollars, instead of an opinion survey. One idea in, one test out.</p>",
  "path": "skills/concept-council/examples/sample.md"
 },
 "rubric": {
  "skill": "concept-council",
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
    "Here's my idea — an AI copilot for factory managers.",
    "Tear this apart.",
    "What am I missing?",
    "What should I build first?",
    "Rip this concept apart."
   ],
   "mustNotFire": [
    {
     "phrase": "Run the five so-what questions on my concept.",
     "sibling": "so-what-stress-test",
     "local": true
    },
    {
     "phrase": "Score my problem across the eight dimensions / give it a numeric quality score.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Write the PRD for this idea.",
     "sibling": "prd-development",
     "local": false
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description names literal triggers (&quot;here's my idea&quot;, &quot;tear this apart&quot;, &quot;rip this concept apart&quot;, &quot;what am I missing&quot;, &quot;what should I build first&quot;) → all 5 fire. Negative clause routes &quot;five so-whats&quot;→so-what-stress-test and &quot;eight dimensions / numeric score&quot;→problem-quality-scorecard; &quot;write the PRD&quot; shares none of the trigger phrases and reads as spec-writing, not first-contact teardown → 0 misfire.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. All totals ≥21, no dimension &lt;4, no auto_fail. Each golden output yields exactly ONE probe, each ≤ 1 week — kill line holds across all five.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner: Step 1 fails (no user/job/change) → asks the single unblocking question, invents nothing, no Gap Map. 02 solution-in-disguise: &quot;no mobile app&quot; names no job → skill reframes to the underlying job and refuses to attack the feature (relies on applying agent to name the trap explicitly — see gotcha). 03 out-of-scope PRD: When-NOT table declines, names prd-development/one-pager-prd/create-prd, explains upstream boundary, offers teardown. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p>supersedes: none</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01 could not come from a generic PM prompt: five lenses each forced to ONE attack, ranked by L×D (not a parallel bullet list), one load-bearing gap as a falsifiable sentence, one probe engineered to a 0.7 behaviour signal in 3 shifts for $0 with explicit pass/fail/kill. Evidence-ladder + single-probe compression are the proprietary edge. Guidance that should be tabular (lens panel, Gap Map, First-Probe Brief) is tabular.</p>"
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
    "method_fidelity",
    "artifact_complete",
    "proprietary_edge",
    "challenge",
    "evidence_standard"
   ],
   "rows": [
    {
     "label": "01 Mentix 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (DC risk) 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier (gas safety) 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian (compliance report) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Slack bot (mundane) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    }
   ]
  },
  "dimensionScores": [],
  "runs": [
   [
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>The evidence ladder is demand-shaped and doesn't cleanly rank non-demand probes.</strong> Golden 02 (secure/observe a data feed) and Golden 03 (get an authoritative regulatory ruling) both need probes whose best result is a commitment/artefact/legal-fact, not a 0.7 demand-behaviour or 1.0 payment. Step 5's rule &quot;moves the claim up to behaviour (0.7) or money (1.0)&quot; and the Evidence-standard line &quot;the probe would produce a signal of at least 0.7 within a week&quot; can be read to reject the correct probe. Recommend one sentence licensing dispositive fact-establishing probes (a legal/data-access determination that can outright kill the idea counts as high-value evidence, not opinion) so the Regulator/Engineer lens can win without tripping the ladder.</li><li><strong>Solution-in-disguise reframe (adversarial 02) is only implicit.</strong> Step 1 catches &quot;names no user, no job, or no change → ask one question&quot;, which routes &quot;we don't have a mobile app&quot; to a clarifying question, but the SKILL.md never names the solution-smuggling trap explicitly. The pass depends on the applying agent adding &quot;this is a solution stated as a problem.&quot; Recommend a one-line note in Step 1 or Gotchas: a stated solution (&quot;we lack feature X&quot;) names no job — reframe to the job before attacking, do not attack the missing feature.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: licensed dispositive fact-establishing probes in Step 5 and added an explicit solution-in-disguise Gotcha.",
    "html": ""
   }
  ],
  "killLine": "<ul><li>More than one &quot;first thing to build.&quot;</li><li>A probe that costs more than one week.</li><li>A probe whose best possible result is an opinion (0.1).</li></ul>",
  "html": "<h1>Eval log — concept-council</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Here's my idea — an AI copilot for factory managers.&quot;</li><li>&quot;Tear this apart.&quot;</li><li>&quot;What am I missing?&quot;</li><li>&quot;What should I build first?&quot;</li><li>&quot;Rip this concept apart.&quot; MUST NOT fire (3, name the sibling each belongs to):</li><li>&quot;Run the five so-what questions on my concept.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li><li>&quot;Score my problem across the eight dimensions / give it a numeric quality score.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Write the PRD for this idea.&quot; → belongs to <code>prd-development</code> (lean variant <code>one-pager-prd</code>, or <code>create-prd</code>)</li></ol>\n<h2>Kill line (auto-fail, mirror of rubric)</h2>\n<ul><li>More than one &quot;first thing to build.&quot;</li><li>A probe that costs more than one week.</li><li>A probe whose best possible result is an opinion (0.1).</li></ul>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description names literal triggers (&quot;here's my idea&quot;, &quot;tear this apart&quot;, &quot;rip this concept apart&quot;, &quot;what am I missing&quot;, &quot;what should I build first&quot;) → all 5 fire. Negative clause routes &quot;five so-whats&quot;→so-what-stress-test and &quot;eight dimensions / numeric score&quot;→problem-quality-scorecard; &quot;write the PRD&quot; shares none of the trigger phrases and reads as spec-writing, not first-contact teardown → 0 misfire.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. All totals ≥21, no dimension &lt;4, no auto_fail. Each golden output yields exactly ONE probe, each ≤ 1 week — kill line holds across all five.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: Step 1 fails (no user/job/change) → asks the single unblocking question, invents nothing, no Gap Map. 02 solution-in-disguise: &quot;no mobile app&quot; names no job → skill reframes to the underlying job and refuses to attack the feature (relies on applying agent to name the trap explicitly — see gotcha). 03 out-of-scope PRD: When-NOT table declines, names prd-development/one-pager-prd/create-prd, explains upstream boundary, offers teardown. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>supersedes: none</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 could not come from a generic PM prompt: five lenses each forced to ONE attack, ranked by L×D (not a parallel bullet list), one load-bearing gap as a falsifiable sentence, one probe engineered to a 0.7 behaviour signal in 3 shifts for $0 with explicit pass/fail/kill. Evidence-ladder + single-probe compression are the proprietary edge. Guidance that should be tabular (lens panel, Gap Map, First-Probe Brief) is tabular.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (0–5 each; pass = total ≥21 and no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>02 Azraq (DC risk)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✅</td></tr><tr><td>03 Barrier (gas safety)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✅</td></tr><tr><td>04 Durian (compliance report)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>05 Slack bot (mundane)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr></tbody></table></div>\n<p>Notes on the two 24s: both cases surface a real friction (see gotchas) between the skill's &quot;probe must reach behaviour 0.7 / money 1.0&quot; bar and the correct probe for the case. In 02 the right probe is a data-release (behaviour 0.7 when the operator actually hands over logs, but tempting to settle for a 0.3–0.5 LOI); in 03 the right probe is an authoritative HSE ruling (dispositive fact, but not a demand-behaviour and not explicitly ranked by the ladder). A faithful run still lands a single ≤1-week probe that clears the &quot;not opinion (0.1)&quot; bar in both, so each case passes — but the ladder's demand-shape costs a point on evidence_standard.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>The evidence ladder is demand-shaped and doesn't cleanly rank non-demand probes.</strong> Golden 02 (secure/observe a data feed) and Golden 03 (get an authoritative regulatory ruling) both need probes whose best result is a commitment/artefact/legal-fact, not a 0.7 demand-behaviour or 1.0 payment. Step 5's rule &quot;moves the claim up to behaviour (0.7) or money (1.0)&quot; and the Evidence-standard line &quot;the probe would produce a signal of at least 0.7 within a week&quot; can be read to reject the correct probe. Recommend one sentence licensing dispositive fact-establishing probes (a legal/data-access determination that can outright kill the idea counts as high-value evidence, not opinion) so the Regulator/Engineer lens can win without tripping the ladder.</li><li><strong>Solution-in-disguise reframe (adversarial 02) is only implicit.</strong> Step 1 catches &quot;names no user, no job, or no change → ask one question&quot;, which routes &quot;we don't have a mobile app&quot; to a clarifying question, but the SKILL.md never names the solution-smuggling trap explicitly. The pass depends on the applying agent adding &quot;this is a solution stated as a problem.&quot; Recommend a one-line note in Step 1 or Gotchas: a stated solution (&quot;we lack feature X&quot;) names no job — reframe to the job before attacking, do not attack the missing feature.</li></ul>\n<h3>Kill-line check (explicit)</h3>\n<ul><li>Exactly one &quot;first thing to build&quot; in every golden output: ✅ (Mentix 3-shift concierge; Azraq single data-release+back-test; Barrier single HSE confirmation; Durian single paid concierge report; Slack bot single manual @-mention week).</li><li>Every probe ≤ 1 week: ✅ (all bounded to days / one week).</li><li>No probe whose best result is an opinion (0.1): ✅ (all reach behaviour, money, data-release, or dispositive fact).</li></ul>\n<h2>Refine run 2 — applied judge fixes: licensed dispositive fact-establishing probes in Step 5 and added an explicit solution-in-disguise Gotcha.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix (seed case)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Here's my idea — an AI copilot for factory managers. Rip this concept apart. What should I build first?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>One-sentence restatement naming user (plant manager), job (decide next shift action), change (ask AI vs. read dashboards).</li><li>A Gap Map with exactly five lens-attacks, one line each, each with L, D, and L×D score.</li><li>Scores that discriminate — not all five equal; a clear top score (or a named tie broken on testability).</li><li>Exactly one load-bearing gap stated as a falsifiable sentence (e.g. &quot;dies if managers won't act on a mid-shift recommendation&quot;).</li><li>Exactly one First-Probe Brief: a concierge / Wizard-of-Oz style test, cost ≤ 1 week, near-zero dollars, reaching behaviour (0.7) not opinion.</li><li>Explicit pass line and fail line tied to observed manager behaviour.</li><li>Claims tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>; the gap is <span class=\"tag tag-assumption\">Assumption</span> or <span class=\"tag tag-hypothesis\">Hypothesis</span>, never <span class=\"tag tag-fact\">Fact</span> yet.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>More than one &quot;first thing to build.&quot;</li><li>Probe costs more than a week or its best result is an opinion.</li><li>Any invented plant, competitor, regulation, or number treated as <span class=\"tag tag-fact\">Fact</span>.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre risk)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Here's my idea: a live risk score for data-centre operators that predicts downtime before it happens, sold as a monthly report. Tear it apart — what am I missing?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Restatement naming user (data-centre operator), job (avoid downtime), change (live predictive score vs. after-the-fact static reports).</li><li>Five lens-attacks scored. Expected sharp ones:\n<ul><li>Buyer: operators already carry SLA penalties and insurance; would they pay for a score they can't act on faster than their own NOC?</li><li>Incumbent: DCIM / monitoring vendors already hold the telemetry and can add prediction.</li><li>Engineer: &quot;predicts downtime&quot; needs labelled failure history that a young company does not own — data access is the real cost.</li><li>Regulator/data-rights: operators guard uptime and incident data; getting the feed at all is a commercial-rights fight (Azraq's known sore point).</li><li>Skeptic: is predicted-but-unpreventable downtime actually useful, or just anxiety?</li></ul></li><li>One load-bearing gap — plausibly the data-access/rights assumption or the &quot;operators will act on the score&quot; assumption.</li><li>One probe ≤ 1 week: e.g. a signed data-sharing letter of intent from one operator (commitment 0.3 → artefact 0.5), or a back-test on one operator's historical incident log to see if the score would have fired in time (behaviour-adjacent evidence). Must move up the ladder, not collect opinion.</li><li>Pass/fail lines tied to a real operator releasing data or a back-test firing before the incident.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>More than one probe.</li><li>Probe is &quot;interview 10 operators about whether they'd like this&quot; (opinion, 0.1).</li><li>Fabricated operator names or downtime statistics presented as <span class=\"tag tag-fact\">Fact</span>.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (gas safety)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;My idea is an app that pushes real-time gas-leak alerts to rig workers' phones from existing field sensors. Here's my idea — what am I missing before I build?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Restatement naming user (rig/plant field worker or safety lead), job (avoid a gas-exposure incident), change (real-time phone alert vs. current permit/log workflow).</li><li>Five lens-attacks scored. Expected sharp ones:\n<ul><li>Regulator/safety: this is likely a life-safety system; phones may be banned in the hazardous zone (intrinsic-safety / ATEX rules), and a missed alert is liability. High D.</li><li>Incumbent: the sensor/DCS vendor already owns the alarm path to the control room; a phone app duplicates a certified channel.</li><li>Skeptic: workers already have fixed gas detectors and horns; does a phone alert change any behaviour they aren't already taking?</li><li>Buyer: safety spend flows through HSE and the operator, not the worker; who signs?</li><li>Engineer: certified real-time integration with field sensors is a compliance project, not an API call.</li></ul></li><li>One load-bearing gap — plausibly the safety-certification / phones-in-hazardous-zone assumption (if phones are banned, the whole delivery mechanism is dead), which likely tops L×D.</li><li>One probe ≤ 1 week that does NOT require building a certified system: e.g. confirm with one operator's HSE lead whether a phone may even be used in-zone, and whether a phone alert is permitted to supplement (not replace) the certified alarm. This moves the regulator assumption from <span class=\"tag tag-hypothesis\">Hypothesis</span> to <span class=\"tag tag-fact\">Fact</span> via an authoritative artefact/commitment.</li><li>Pass/fail lines: pass = HSE confirms phones allowed and alert permitted as a supplement; fail = phones banned in-zone or alert cannot be a compliance channel.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>More than one probe, or a probe that requires building the certified integration first.</li><li>Invented ATEX clause numbers or sensor models presented as <span class=\"tag tag-fact\">Fact</span> (naming the category as <span class=\"tag tag-hypothesis\">Hypothesis</span> is fine).</li><li>Treats a life-safety concept as a plain demand test and buries the regulator attack.</li></ul>"
     }
    ],
    "other": [
     {
      "heading": "Notes for the judge",
      "html": "<p>This case tests whether the skill lets the Regulator lens win when it genuinely should, rather than defaulting to a demand test. A probe that ignores the certification landmine and tests &quot;would workers like alerts&quot; is wrong here.</p>"
     }
    ],
    "file": "skills/concept-council/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (first workflow)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Here's my idea — Durian automates the weekly compliance report that ops teams at mid-size logistics firms assemble by hand in spreadsheets. That's the first workflow. Tear this apart.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Restatement naming user (ops person at a mid-size logistics firm), job (produce the weekly compliance report), change (auto-assembled vs. hand-built in spreadsheets).</li><li>Five lens-attacks scored. Expected sharp ones:\n<ul><li>Skeptic: the weekly report may be a two-hour annoyance, not a real pain worth switching tools for.</li><li>Buyer: ops owns the pain but not the budget; does anyone pay to remove a two-hour task?</li><li>Incumbent: the spreadsheet plus the existing TMS/ERP already produce the source data; the &quot;workflow&quot; may be a template, not a product.</li><li>Engineer: every firm's report format and source systems differ; &quot;automate the report&quot; is really N bespoke connectors.</li><li>Regulator: if the report is a real compliance artefact, an automated error is the firm's liability, not Durian's convenience.</li></ul></li><li>One load-bearing gap — plausibly &quot;the report is painful enough that someone will pay to remove it&quot; (Buyer/Skeptic) or &quot;one report format generalises&quot; (Engineer).</li><li>One probe ≤ 1 week: e.g. offer to hand-assemble next week's report for two firms as a paid concierge service (money 1.0 if they pay even a token fee) or observe how long it truly takes and whether they'd hand over the raw files (behaviour 0.7). Not a survey.</li><li>Pass/fail lines tied to a firm paying a token fee or handing over real source files, versus polite interest with no action.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>More than one probe.</li><li>Probe collects opinions about willingness to pay instead of an actual payment or file handover.</li><li>Invented firm names, report contents, or time-savings figures presented as <span class=\"tag tag-fact\">Fact</span>.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mundane internal-tool idea",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Here's my idea, nothing fancy: an internal Slack bot that reminds our own engineers to update their Jira tickets before standup. Rip it apart — what should I build first?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Restatement naming user (our own engineers), job (have tickets current before standup), change (a bot nudge vs. remembering).</li><li>The skill treats a mundane internal tool with the same discipline — no inflating it into a startup.</li><li>Five lens-attacks scored, honestly small. Expected sharp ones:\n<ul><li>Skeptic: engineers ignore nudges; stale tickets are a habit problem a bot won't fix.</li><li>Buyer: there is no buyer — it's internal; the real cost is engineers' attention, and a nagging bot has negative goodwill.</li><li>Incumbent: Jira and Slack already ship reminder features; the bot may be reinventing a setting.</li><li>Engineer: trivial to build, so build cost is not the gap — a rare case where the Engineer attack scores low.</li><li>Regulator: essentially none; the lens should be tagged low L, not invented into relevance.</li></ul></li><li>One load-bearing gap — plausibly &quot;a reminder changes behaviour&quot; (Skeptic), since building is cheap and there is no buyer or regulator to fear.</li><li>One probe ≤ 1 week and near-zero: manually @-mention five engineers before standup for one week (a human doing the bot's job) and count whether tickets get updated. Behaviour 0.7, no code.</li><li>Pass/fail lines: pass = most nudged engineers update before standup and it holds across the week; fail = they update once then ignore, or push back on the nag.</li><li>Correct restraint: does not fabricate a regulator or buyer threat to make the panel look balanced; low-relevance lenses are scored low and said so.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>More than one probe, or a probe that builds the bot before testing whether a nudge works.</li><li>Inflates a trivial internal tool into a market opportunity.</li><li>Invents a compliance or competitor angle to fill the Regulator or Buyer lens instead of tagging it low.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/golden/05.md"
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
     "html": "<p>Fellow: &quot;I want to build something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must NOT invent a user, a job, a competitor, a number, or a probe.</li><li>It must recognise the input has no user, no job, and no change to attack — so Step 1 cannot complete.</li><li>It asks the single unblocking question and stops. The one question is the one that most cheaply turns &quot;something in logistics&quot; into an attackable sentence, e.g.: &quot;Who is the one person, and what specific task of theirs is broken today?&quot;</li><li>No Gap Map is produced. No lenses fire on air.</li><li>Tone challenges, does not flatter: it names that &quot;something in logistics&quot; is not yet a concept, and says why (no user, no job).</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Returns exactly one question and refuses to proceed. Invents nothing.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Produces a Gap Map from a fabricated logistics idea.</li><li>Asks a scatter of five clarifying questions instead of the one unblocking one.</li><li>Flatters (&quot;great space!&quot;) or hallucinates a specific sub-problem.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;The problem is we don't have a mobile app. Tear it apart.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must not accept the framing. &quot;No mobile app&quot; is a chosen solution, not a problem.</li><li>It names the trap explicitly: a solution stated as a problem hides the job and pre-commits the build. This is solution smuggling.</li><li>It reframes to the underlying job: what is the user trying to do that they currently cannot, such that &quot;mobile&quot; even came up? It asks for the job, or restates the concept as a job-shaped sentence if the input gives enough to do so honestly (e.g. &quot;users need to [do X] while away from a desk&quot;).</li><li>Only after the reframe does it consider running the panel — and it may hold until the job is named, rather than attacking &quot;we don't have an app.&quot;</li><li>It does not invent what the job is if the input does not support it; it points at the gap and asks.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Names the solution-in-disguise trap, reframes to the job (or asks for it), refuses to attack the feature as if it were the problem.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Runs five lenses against &quot;we don't have a mobile app&quot; as though that were the concept.</li><li>Silently accepts the feature framing.</li><li>Invents the underlying job with fabricated specifics.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Write me the PRD for the factory copilot — features, requirements, acceptance criteria, the lot.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must decline. Writing a PRD is downstream of concept-council and belongs to a sibling skill.</li><li>It names the right destination: <code>prd-development</code> (or <code>one-pager-prd</code> for a lean version, <code>create-prd</code>), not itself.</li><li>It states why: concept-council runs upstream — it tests whether the idea's load-bearing assumption survives before any spec is worth writing. A PRD for an unprobed concept is premature.</li><li>It may offer the in-scope alternative: run the five-lens teardown first and hand back one probe, then take the survivor to a PRD skill. It does not poach by quietly writing the PRD anyway.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Declines, names <code>prd-development</code> / <code>one-pager-prd</code> / <code>create-prd</code>, explains the upstream/downstream boundary, offers the teardown as the in-scope step.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Produces a PRD.</li><li>Declines without naming the correct sibling skill.</li><li>Blurs its own scope to cover the request.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/concept-council/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/concept-council/SKILL.md",
  "template": "skills/concept-council/template.md",
  "example": "skills/concept-council/examples/sample.md",
  "rubric": "skills/concept-council/tests/rubric.json",
  "results": "skills/concept-council/tests/RESULTS.md"
 }
});
