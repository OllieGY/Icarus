window.ICARUS_SKILL("problem-quality-scorecard", {
 "name": "problem-quality-scorecard",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Compresses &quot;should we build this?&quot; into one number and one verdict. It scores a single, named problem on eight dimensions, forces a money-or-behaviour citation behind each score, sums to /40, and returns a gate: build, redesign the wedge, or kill. It is the go/no-go at the top of the Icarus funnel — nothing downstream (wedge, prototype, PRD) should start until a problem clears this gate.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Most problem-scoring rates a problem on how good it <em>feels</em>. This inverts that: the evidence you hold sets a hard ceiling on the score a dimension can earn. Money-moved evidence lets a dimension reach 5; behaviour observed caps it at 4; an artefact at 3; a verbal &quot;yes&quot; at 2; opinion at 1. The only way to raise a score is to move a claim up the evidence ladder, not to argue for it. The eight dimensions are chosen so a high total can only come from a problem that recurs often, already has money bleeding against it, and hands <em>this</em> founder a moat — not from a clever pitch. The result is a gate, not a vibe: 32/40 or you do not build.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow has ONE problem in hand and needs a build/no-build decision backed by evidence.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th></tr></thead><tbody><tr><td>Every risky assumption mapped across value, GTM, strategy, team</td><td><code>identify-assumptions-new</code> (the skill this supersedes) — a risk inventory, not a gate</td></tr><tr><td>The five qualitative whole-idea business questions</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>The per-unit size ratio / does the physics floor leave margin</td><td><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></td></tr><tr><td>A deep dive on the wedge alone</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></td></tr><tr><td>To turn a solution back into a problem before scoring</td><td><code>problem-statement</code>, then return here</td></tr></tbody></table></div>\n<p>This skill scores one problem on eight axes and gates it. It is not a risk map and not a single-axis deep dive.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Five steps.</p>\n<p><strong>Step 1 — State the one problem in one sentence.</strong> It must name a pain, not a feature. If it names a feature (&quot;we need an AI copilot&quot;), stop: you would score the feature, not the pain. Reframe with <code>problem-statement</code> first, then return.</p>\n<p><strong>Step 2 — For each of the 8 dimensions, write the evidence you actually hold and tag its rung.</strong> No evidence means opinion. A verified <em>absence</em> of money (you checked, there is no budget line) is behaviour-grade evidence for a low score — it is not an opinion cap. A dimension the fellow simply never mentioned is <strong>unexamined</strong>: default it to opinion-grade (ceiling 1, flag it) and count it toward the &quot;3+ opinion-only&quot; trigger in Step 5 — do not confuse it with a verified-low. An unexamined dimension only escapes the opinion cap if the fellow asserted a verified absence.</p>\n<p><strong>Step 3 — Apply the evidence ceiling.</strong> The rung of your best evidence caps the score, regardless of how strong the pain feels:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Best evidence you hold</th><th>Ladder weight</th><th>Max score this dimension can earn</th></tr></thead><tbody><tr><td>Money moved (invoice, PO, spend, headcount redirected)</td><td>1.0</td><td>5</td></tr><tr><td>Behaviour observed (logs, usage, a repeated action)</td><td>0.7</td><td>4</td></tr><tr><td>Artefact shown (a doc, a spreadsheet, a workaround they built)</td><td>0.5</td><td>3</td></tr><tr><td>Verbal commitment (&quot;yes, I'd pay / I'd switch&quot;)</td><td>0.3</td><td>2</td></tr><tr><td>Opinion only (&quot;I think&quot;, &quot;surely&quot;, &quot;everyone knows&quot;)</td><td>0.1</td><td>1 (flag it)</td></tr></tbody></table></div>\n<p><code>score = min(substance anchor, evidence ceiling)</code>. Flag any dimension where the ceiling, not the substance, set the score.</p>\n<p><strong>Step 4 — Score each dimension against its 1-vs-5 anchor.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>What it measures</th><th>Looks like 1</th><th>Looks like 5</th></tr></thead><tbody><tr><td>Frequency</td><td>How often the target actually hits the pain</td><td>Once a year or less</td><td>Multiple times per shift/day, unprompted</td></tr><tr><td>Budgeted pain</td><td>Money already spent against it today</td><td>No spend; &quot;would be nice&quot;</td><td>A live line item / salary / vendor invoice you can redirect</td></tr><tr><td>Severity</td><td>Cost of one unresolved instance</td><td>Mild annoyance, no measurable cost</td><td>Six-figure loss, shutdown, injury, or fine per instance</td></tr><tr><td>Data exhaust</td><td>Proprietary data normal use throws off</td><td>None, or data anyone can buy/scrape</td><td>Each use logs hard-to-replicate data that compounds into a moat</td></tr><tr><td>Structural persistence</td><td>Will it still exist and matter in 3-5 years</td><td>Transient: a fad, a subsidy, one repealable rule</td><td>Rooted in physics, unit economics, or durable regulation</td></tr><tr><td>Buyer clarity</td><td>One reachable person with budget who says yes</td><td>No clear buyer; committee; &quot;the market&quot;</td><td>A named role you can reach, with budget, who has bought comparables</td></tr><tr><td>Wedge sharpness</td><td>A narrow first slice you can own completely</td><td>Broad, undifferentiated &quot;platform for X&quot;</td><td>One painful task, one segment, where you can be unambiguously best</td></tr><tr><td>Founder asymmetry</td><td>THIS fellow's unfair, hard-to-copy edge</td><td>None; anyone could do this</td><td>Proprietary access / data rights / distribution / lived domain scar tissue</td></tr></tbody></table></div>\n<p>Add a confidence and a cheapest-test-to-raise to each row (see template). Confidence: High = two-plus independent money/behaviour data points; Med = one artefact or one behaviour source; Low = verbal only; capped rows = n/a, flagged.</p>\n<p><strong>Step 5 — Sum and gate.</strong> Apply this precedence, top to bottom:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>3 or more dimensions are opinion-only</td><td>NOT READY TO SCORE — emit no total; list the cheapest test per capped dimension</td></tr><tr><td>Total &lt; 28</td><td>KILL</td></tr><tr><td>Total 28-31</td><td>REDESIGN the wedge within two weeks, then re-score</td></tr><tr><td>Total &gt;= 32 with 1-2 opinion-capped dimensions</td><td>REDESIGN — the number is real but rests on air; get the evidence, re-score</td></tr><tr><td>Total &gt;= 32 and zero opinion caps</td><td>PASS — build</td></tr></tbody></table></div>\n<p><strong>Band-edge tie-break.</strong> When the total lands within ±1 of a band edge (27-28 at the KILL/REDESIGN seam, 31-32 at the REDESIGN/PASS seam) AND any dimension is opinion-capped, resolve DOWN to the stricter verdict, and name the two cheapest tests that would move the capped dimensions up and lift the total clear of the seam.</p>\n<p>Write the verdict with the reason: name the binding low scores, not just the total.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Behaviour and money outrank opinion, enforced structurally by the ceiling in Step 3. A PASS requires all eight dimensions resting on verbal-or-higher evidence and a total of 32+. Opinion never scores above 1, and a problem carrying three or more opinion-only dimensions is returned as &quot;not ready to score&quot; with the tests that would fix that — it is never passed on partial evidence. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. If you catch yourself typing &quot;obviously&quot; or &quot;clearly&quot;, you are at rung 0.1: that dimension caps at 1.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Frequency inflation.</strong> Scoring how often the pain <em>could</em> occur, not how often it is <em>observed</em> to. Cap frequency by logs, ticket counts, or timestamps, never by intuition.</li><li><strong>Wish in the money column.</strong> &quot;They said they'd pay&quot; is verbal (ceiling 2), not money (ceiling 5). Budgeted pain measures money spent <em>today</em>, not money promised. Keep the two rungs apart or the whole card inflates.</li><li><strong>Wedge / founder double-count.</strong> When the founder's unfair asset <em>is</em> the wedge, do not bank it twice. Founder asymmetry is the advantage; wedge sharpness is the narrow first slice. Score each on its own evidence.</li><li><strong>Scoring a solution.</strong> If the &quot;problem&quot; is a pre-chosen feature, every row scores the feature's appeal, not the pain's size. Reframe before scoring.</li><li><strong>Verified-low is not opinion.</strong> A dimension scored 1 because you checked and there is genuinely no spend / no data / no edge is honest behaviour-grade evidence, scored with High confidence. Do not flag it as an opinion cap.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a worked Barrier Intelligence scorecard: eight rows, each with its evidence rung and cheapest test, total 34/40, gate PASS with the two soft spots named as the two-week priorities.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Supersedes <code>identify-assumptions-new</code>. That skill lists risky assumptions across eight categories and asks you to &quot;rate confidence and suggest a test&quot; — a soft inventory that never gates and never enforces evidence, so an opinion can sit in it unchallenged and the fellow still gets no go/no-go. This skill keeps its two useful bones (per-item confidence, per-item cheapest test) and converts them into a hard numeric gate with evidence ceilings: opinion caps at 1, a pass is impossible on opinion, and the output is a decision, not a list.</p>\n<p>Composes with: <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (its unit ratio feeds severity and structural persistence), <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (run it when wedge sharpness is the binding low score), <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (qualitative whole-idea pass before or after this gate), <code>problem-statement</code> (reframe a solution-in-disguise before scoring). Hand broad risk mapping back to <code>identify-assumptions-new</code>.</p>"
  }
 ],
 "template": {
  "html": "<h1>Problem Quality Scorecard</h1>\n<p><strong>Fellow / venture:</strong> _______________ <strong>Date:</strong> _______________</p>\n<h2>The one problem (a pain, not a feature)</h2>\n<blockquote><p><em>One sentence. Who hits it, what breaks, what it costs. If this names a feature, stop and reframe with problem-statement first.</em></p></blockquote>\n<hr>\n<h2>Scorecard</h2>\n<p>Score each dimension <code>min(substance anchor, evidence ceiling)</code>. Evidence ceilings: money = 5, behaviour = 4, artefact = 3, verbal = 2, opinion = 1. Flag any row where the ceiling (not the substance) set the score.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Dimension</th><th>Score 1-5</th><th>Evidence cited + rung tag</th><th>Conf</th><th>Cheapest test to raise it</th></tr></thead><tbody><tr><td>1</td><td>Frequency</td><td>_</td><td>_ <code>[Fact/Assumption/Hypothesis]</code> (rung: money/behaviour/artefact/verbal/opinion)</td><td>H/M/L</td><td>_</td></tr><tr><td>2</td><td>Budgeted pain</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>3</td><td>Severity</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>4</td><td>Data exhaust</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>5</td><td>Structural persistence</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>6</td><td>Buyer clarity</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>7</td><td>Wedge sharpness</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>8</td><td>Founder asymmetry</td><td>_</td><td>_</td><td>_</td><td>_</td></tr></tbody></table></div>\n<p><strong>Opinion-capped dimensions (flagged):</strong> _______________ <strong>Total: __ / 40</strong></p>\n<hr>\n<h2>Gate (apply top to bottom, first match wins)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>3+ dimensions opinion-only → <strong>NOT READY TO SCORE</strong> (do not report a total)</li><li class=\"task\"><span class=\"box\"></span>Total &lt; 28 → <strong>KILL</strong></li><li class=\"task\"><span class=\"box\"></span>Total 28-31 → <strong>REDESIGN the wedge within two weeks, re-score</strong></li><li class=\"task\"><span class=\"box\"></span>Total &gt;= 32 with 1-2 opinion caps → <strong>REDESIGN</strong> (real number, thin evidence)</li><li class=\"task\"><span class=\"box\"></span>Total &gt;= 32, zero opinion caps → <strong>PASS — build</strong></li></ul>\n<p><strong>Verdict:</strong> _______________</p>\n<p><strong>Reason (name the binding low scores, not just the total):</strong> _______________</p>\n<hr>\n<h2>If NOT READY TO SCORE</h2>\n<p>List the cheapest test that moves each opinion-only dimension onto real evidence. Do not report a /40 until these are run.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>Currently rests on</th><th>Cheapest test to reach behaviour/money</th></tr></thead><tbody><tr><td>_</td><td>opinion</td><td>_</td></tr><tr><td>_</td><td>opinion</td><td>_</td></tr><tr><td>_</td><td>opinion</td><td>_</td></tr></tbody></table></div>",
  "path": "skills/problem-quality-scorecard/template.md"
 },
 "example": {
  "html": "<h1>Problem Quality Scorecard — Barrier Intelligence (worked)</h1>\n<p><strong>Fellow / venture:</strong> Barrier Intelligence (oil &amp; gas safety) <strong>Date:</strong> 2026-07-20</p>\n<blockquote><p>All numbers here are synthetic, domain-plausible test fixtures — not real client data. They exist to show the mechanic, not to report a finding.</p></blockquote>\n<h2>The one problem (a pain, not a feature)</h2>\n<blockquote><p>On offshore gas platforms, control-room operators miss early gas-leak indicators that sit buried across permit-to-work logs and sensor feeds; each missed indicator that escalates costs an unplanned shutdown or a safety incident.</p></blockquote>\n<p>This is a pain (missed indicators, escalations), not a feature. It scores.</p>\n<hr>\n<h2>Scorecard</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Dimension</th><th>Score</th><th>Evidence cited + rung</th><th>Conf</th><th>Cheapest test to raise it</th></tr></thead><tbody><tr><td>1</td><td>Frequency</td><td><strong>4</strong></td><td><code>[Fact]</code> Pilot logs show 6-11 flagged gas indicators per 12-hour shift across 3 rigs (rung: behaviour → ceiling 4)</td><td>H</td><td>Tie each flagged indicator to a cost line → moves to money, ceiling 5</td></tr><tr><td>2</td><td>Budgeted pain</td><td><strong>5</strong></td><td><code>[Fact]</code> Operator already pays 2 senior engineers to hand-review permit logs, plus a SCADA-alarm vendor contract (rung: money)</td><td>H</td><td>Already at ceiling; confirm the spend is redirectable to us</td></tr><tr><td>3</td><td>Severity</td><td><strong>5</strong></td><td><code>[Fact]</code> One unplanned shutdown ≈ $1.2M/day; <code>[Fact]</code> regulator fine schedule for a missed gas event (rung: money)</td><td>H</td><td>Already at ceiling</td></tr><tr><td>4</td><td>Data exhaust</td><td><strong>4</strong></td><td><code>[Fact]</code> Each alert + operator response builds a labelled incident dataset (rung: behaviour); <code>[Hypothesis]</code> it compounds into a moat</td><td>M</td><td>Show a second operator's model improving on rig-1 data → proves compounding</td></tr><tr><td>5</td><td>Structural persistence</td><td><strong>4</strong></td><td><code>[Fact]</code> Offshore gas-detection duty rooted in physics + safety regs in force 20+ years (rung: behaviour-of-the-world; forward-looking, so caps at 4)</td><td>H</td><td>Structural cap; no test raises past 4 honestly</td></tr><tr><td>6</td><td>Buyer clarity</td><td><strong>5</strong></td><td><code>[Fact]</code> Named offshore HSE manager holds the budget and signed the pilot PO (rung: money)</td><td>H</td><td>Already at ceiling; add a second signed buyer to lift confidence</td></tr><tr><td>7</td><td>Wedge sharpness</td><td><strong>4</strong></td><td><code>[Fact]</code> First slice = permit-to-work gas conflicts on one operator's 3 rigs, a workflow incumbents ignore; pilot is live on that slice (rung: behaviour)</td><td>M</td><td>Win the same slice on a second operator → defends the wedge</td></tr><tr><td>8</td><td>Founder asymmetry</td><td><strong>3</strong></td><td><code>[Fact]</code> Signed data-rights clause granting Barrier exclusive use of the pilot operator's rig logs (rung: artefact — signed, unproven as durable)</td><td>M</td><td>Convert exclusivity into observed switching cost or a second operator signing → behaviour, ceiling 4</td></tr></tbody></table></div>\n<p><strong>Opinion-capped dimensions (flagged):</strong> none. <strong>Total: 34 / 40</strong></p>\n<hr>\n<h2>Gate</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Total &gt;= 32, zero opinion caps → <strong>PASS — build</strong></li></ul>\n<p><strong>Verdict:</strong> PASS.</p>\n<p><strong>Reason:</strong> The problem recurs every shift (4), money is already bleeding against it (budgeted pain 5, severity 5), and there is a named, paying, reachable buyer (5). Two dimensions are honestly soft: founder asymmetry (3, a signed but unproven data-rights clause) and data exhaust (4, a moat that is still a hypothesis). Those are the two-week priorities — sign a second operator to convert the data-rights edge from artefact to behaviour — but they do not block the build. Note the ceiling biting on frequency (behaviour logs cap it at 4, not 5) and on founder asymmetry (a signed doc is artefact-grade, ceiling 3): the score is what the evidence earns, not what the pitch claims.</p>",
  "path": "skills/problem-quality-scorecard/examples/sample.md"
 },
 "rubric": {
  "skill": "problem-quality-scorecard",
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
    "Should I build this?\" (a problem in hand, wants a build decision)",
    "Score this problem.",
    "Go or no-go on this problem?",
    "Is this problem good enough to build?",
    "Rate this problem."
   ],
   "mustNotFire": [
    {
     "phrase": "Map all my risky assumptions across GTM, strategy, and team.",
     "sibling": "identify-assumptions-new",
     "local": false
    },
    {
     "phrase": "Stress-test my whole idea with the big business questions.",
     "sibling": "so-what-stress-test",
     "local": true
    },
    {
     "phrase": "What's the per-unit size ratio — does the physics floor leave room?",
     "sibling": "physics-floor-gap",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description lists all 5 must-fire verbs verbatim (&quot;should I build this&quot;, &quot;score this problem&quot;, &quot;go or no-go&quot;, &quot;is this problem good enough&quot;, &quot;rate this problem&quot;). All 3 must-not-fire are named-and-redirected in the description (&quot;NOT for broad risk mapping across GTM/strategy/team → identify-assumptions-new&quot;; &quot;NOT the five qualitative whole-idea questions → so-what-stress-test&quot;; &quot;NOT the per-unit size ratio → physics-floor-gap&quot;). Precise.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Rubric totals below. All ≥21, no rubric dimension &lt;4, no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague sector → asks the one pain+buyer question, no fabricated logistics scenario. 02 solution-in-disguise → names the trap (&quot;no copilot&quot; is a missing solution), refuses to score, points to problem-statement. 03 out-of-scope risk map → declines, names identify-assumptions-new, does not poach the 8-dim scorecard. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>New vs superseded (identify-assumptions-new), both scored on this rubric — see table. New wins on TOTAL and on both required axes (proprietary_edge, challenge) across all 3 inputs, by a large margin.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: the evidence ladder (money=5/behaviour=4/artefact=3/verbal=2/opinion=1), the <code>min(substance, ceiling)</code> rule, and the ceiling-flagging (&quot;logs cap frequency at 4, not 5&quot;; &quot;signed doc caps founder asymmetry at 3&quot;) are Icarus-specific. Guidance is properly tabulated (evidence ladder, dimension anchors, gate precedence, fillable template) — no table-that-should-exist buried as prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses. Not executable here.</p>"
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
     "label": "01 Barrier (PASS) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS (32-36, ref 34)",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (REDESIGN) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "REDESIGN (28-31, ref 29)",
     "pass": false,
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
     "verdictRaw": "KILL (<28, ref 21)",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian (NOT READY) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "NOT READY (3+ opinion)",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Timesheets (KILL) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "KILL (<28, ref 18)",
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
  "gotchasSurfaced": "<ul><li><strong>Opinion-cap vs unexamined dimension.</strong> The skill cleanly separates &quot;verified-low&quot; (you checked, there's no spend/data/edge → behaviour-grade 1, High conf, not a cap) from opinion. It does NOT clearly address the third case: a dimension the fellow simply never mentioned (silent/unexamined). In Golden 03 (Mentix), scoring severity and data-exhaust as opinion-capped (because unmentioned) pushes the opinion count to 3+ and flips KILL → NOT READY, contradicting the claimed KILL. Add a rule: an unexamined dimension defaults to opinion (cap 1, flag) UNLESS the fellow asserted a verified absence. This makes the 3+ trigger deterministic.</li><li><strong>REDESIGN band is 4 points wide and fragile (Golden 02, Azraq).</strong> Without cited figures, severity and budgeted-pain are evidence-capped, and a strict scorer lands Azraq at ~27 (KILL) rather than the reference 29 (REDESIGN). The verdict flips on one dimension's judgment call. Either tighten the golden's reference score or add explicit tie-break guidance for totals landing at the 27-28 KILL/REDESIGN seam.</li><li>(Minor) Golden-04 NOT READY output has no /40 by design; a naive read of the rubric's <code>artifact_complete</code> (&quot;required numbers&quot;) could dock it. Worth a one-line note in the rubric that NOT READY is a complete, number-free artifact.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added unexamined-dimension → opinion-cap default to Step 2 and a ±1 band-edge tie-break (resolve down) to Step 5.",
    "html": ""
   }
  ],
  "killLine": "<p>Auto-fail this skill if the output:</p>\n<ul><li>passes a problem (returns PASS / build) while any scored dimension rests on opinion evidence, OR</li><li>reports a /40 verdict while scoring fewer than all 8 dimensions (the only legal partial output is &quot;NOT READY TO SCORE&quot; with the cheapest tests listed).</li></ul>",
  "html": "<h1>Eval log — problem-quality-scorecard</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Should I build this?&quot; (a problem in hand, wants a build decision)</li><li>&quot;Score this problem.&quot;</li><li>&quot;Go or no-go on this problem?&quot;</li><li>&quot;Is this problem good enough to build?&quot;</li><li>&quot;Rate this problem.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Map all my risky assumptions across GTM, strategy, and team.&quot; → belongs to <code>identify-assumptions-new</code> (broad risk inventory, not a gate)</li><li>&quot;Stress-test my whole idea with the big business questions.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (five qualitative whole-idea questions)</li><li>&quot;What's the per-unit size ratio — does the physics floor leave room?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (single unit-economics ratio)</li></ol>\n<p>(A fourth near-miss to watch: &quot;Deep-dive just my wedge&quot; → <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>. The scorecard scores the wedge as one of eight dimensions; it does not deep-dive it.)</p>\n<h2>Skill-specific kill line (judge enforces)</h2>\n<p>Auto-fail this skill if the output:</p>\n<ul><li>passes a problem (returns PASS / build) while any scored dimension rests on opinion evidence, OR</li><li>reports a /40 verdict while scoring fewer than all 8 dimensions (the only legal partial output is &quot;NOT READY TO SCORE&quot; with the cheapest tests listed).</li></ul>\n<h2>Head-to-head vs identify-assumptions-new</h2>\n<p>This skill is scored against <code>identify-assumptions-new</code> on the same inputs. It must win on <strong>proprietary_edge</strong> and <strong>challenge</strong>.</p>\n<p>Why it wins:</p>\n<ul><li><strong>Gate, not inventory.</strong> identify-assumptions-new lists assumptions across 8 risk categories and asks the fellow to &quot;rate confidence and suggest a test.&quot; It never returns a go/no-go. This skill returns a number and a verdict (pass / redesign / kill) with explicit bands (&gt;=32, 28-31, &lt;28).</li><li><strong>Evidence enforced structurally.</strong> The old skill lets an opinion sit in the list unchallenged. Here, the evidence rung sets a hard score ceiling (opinion caps at 1), a pass is impossible on opinion, and 3+ opinion dimensions return &quot;not ready to score.&quot; Evidence is not a suggestion; it gates the number.</li><li><strong>Absorbed its bones, beat them.</strong> It keeps the useful parts of the old skill (per-item confidence, per-item cheapest test) and converts them from a soft risk list into a scored gate — so the fellow leaves with a decision, not a to-do list.</li></ul>\n<p>Expected margin: proprietary_edge and challenge should both come back higher for problem-quality-scorecard because the numeric gate + evidence ceilings are things a generic prompt (and the superseded skill) do not do.</p>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<hr>\n<h2>Judge run — run 1</h2>\n<p>Judge did not author this skill. Hard-marked. Gate 4 required (supersedes is not &quot;none&quot;).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description lists all 5 must-fire verbs verbatim (&quot;should I build this&quot;, &quot;score this problem&quot;, &quot;go or no-go&quot;, &quot;is this problem good enough&quot;, &quot;rate this problem&quot;). All 3 must-not-fire are named-and-redirected in the description (&quot;NOT for broad risk mapping across GTM/strategy/team → identify-assumptions-new&quot;; &quot;NOT the five qualitative whole-idea questions → so-what-stress-test&quot;; &quot;NOT the per-unit size ratio → physics-floor-gap&quot;). Precise.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Rubric totals below. All ≥21, no rubric dimension &lt;4, no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague sector → asks the one pain+buyer question, no fabricated logistics scenario. 02 solution-in-disguise → names the trap (&quot;no copilot&quot; is a missing solution), refuses to score, points to problem-statement. 03 out-of-scope risk map → declines, names identify-assumptions-new, does not poach the 8-dim scorecard. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>PASS</td><td>New vs superseded (identify-assumptions-new), both scored on this rubric — see table. New wins on TOTAL and on both required axes (proprietary_edge, challenge) across all 3 inputs, by a large margin.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: the evidence ladder (money=5/behaviour=4/artefact=3/verbal=2/opinion=1), the <code>min(substance, ceiling)</code> rule, and the ceiling-flagging (&quot;logs cap frequency at 4, not 5&quot;; &quot;signed doc caps founder asymmetry at 3&quot;) are Icarus-specific. Guidance is properly tabulated (evidence ladder, dimension anchors, gate precedence, fillable template) — no table-that-should-exist buried as prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses. Not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case rubric scores (0-5 each, /25; pass ≥21 &amp; no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Golden</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Claimed /40 band</th><th>Applied /40 verdict</th></tr></thead><tbody><tr><td>01 Barrier (PASS)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td><strong>24</strong></td><td>PASS (32-36, ref 34)</td><td>34 → PASS ✓ solid</td></tr><tr><td>02 Azraq (REDESIGN)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td><strong>25</strong></td><td>REDESIGN (28-31, ref 29)</td><td>~27-28 → borderline KILL/REDESIGN ⚠</td></tr><tr><td>03 Mentix (KILL)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td><strong>25</strong></td><td>KILL (&lt;28, ref 21)</td><td>~19-21 → KILL, but opinion-count can tip to NOT READY ⚠</td></tr><tr><td>04 Durian (NOT READY)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td><strong>24</strong></td><td>NOT READY (3+ opinion)</td><td>NOT READY ✓ solid</td></tr><tr><td>05 Timesheets (KILL)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td><strong>25</strong></td><td>KILL (&lt;28, ref 18)</td><td>~17 → KILL ✓ solid</td></tr></tbody></table></div>\n<p>Core-mechanic check (Gate 2/5): VERIFIED. Opinion evidence caps a dimension at 1 (rung 0.1). Gate precedence forces <code>Total ≥32 with 1-2 opinion caps → REDESIGN</code> and reserves PASS for <code>Total ≥32 AND zero opinion caps</code> — so a PASS is structurally impossible while any dimension rests on opinion. <code>3+ opinion-only → NOT READY TO SCORE, emit no total</code> fires first in the precedence list. A PASS also structurally requires mostly money/behaviour evidence (verbal caps at 2; you cannot reach 32/40 on verbal-heavy rows). Mechanic holds.</p>\n<h3>Gate 4 — head-to-head vs identify-assumptions-new (both scored on THIS rubric)</h3>\n<p>The superseded skill produces a Torres-style risk inventory (8 categories × 3 perspectives, &quot;rate confidence + suggest a test&quot;). It never gates, never returns a number, never enforces an evidence ceiling — an opinion sits in the list unchallenged. Its output is near-identical regardless of the evidence quality of the input, which is exactly its weakness on money-vs-opinion inputs.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Input</th><th>Skill</th><th>method_fid</th><th>artifact_cmpl</th><th><strong>proprietary_edge</strong></th><th><strong>challenge</strong></th><th>evidence_std</th><th><strong>Total</strong></th></tr></thead><tbody><tr><td>G01 Barrier</td><td>problem-quality-scorecard</td><td>5</td><td>5</td><td><strong>5</strong></td><td><strong>4</strong></td><td>5</td><td><strong>24</strong></td></tr><tr><td>G01 Barrier</td><td>identify-assumptions-new</td><td>2</td><td>3</td><td><strong>2</strong></td><td><strong>3</strong></td><td>2</td><td><strong>12</strong></td></tr><tr><td>G02 Azraq</td><td>problem-quality-scorecard</td><td>5</td><td>5</td><td><strong>5</strong></td><td><strong>5</strong></td><td>5</td><td><strong>25</strong></td></tr><tr><td>G02 Azraq</td><td>identify-assumptions-new</td><td>2</td><td>3</td><td><strong>2</strong></td><td><strong>2</strong></td><td>2</td><td><strong>11</strong></td></tr><tr><td>G03 Mentix</td><td>problem-quality-scorecard</td><td>5</td><td>5</td><td><strong>5</strong></td><td><strong>5</strong></td><td>5</td><td><strong>25</strong></td></tr><tr><td>G03 Mentix</td><td>identify-assumptions-new</td><td>2</td><td>2</td><td><strong>2</strong></td><td><strong>2</strong></td><td>2</td><td><strong>10</strong></td></tr></tbody></table></div>\n<p>New skill wins on TOTAL (24-25 vs 10-12) and on both required axes — proprietary_edge (5 vs 2) and challenge (4-5 vs 2-3) — for all 3 inputs. On G03 the gap is starkest: the old skill would list assumptions about the copilot and might implicitly accept the solution-in-disguise framing; the new skill catches it, scores the pain, and returns KILL. The supersession is justified.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Opinion-cap vs unexamined dimension.</strong> The skill cleanly separates &quot;verified-low&quot; (you checked, there's no spend/data/edge → behaviour-grade 1, High conf, not a cap) from opinion. It does NOT clearly address the third case: a dimension the fellow simply never mentioned (silent/unexamined). In Golden 03 (Mentix), scoring severity and data-exhaust as opinion-capped (because unmentioned) pushes the opinion count to 3+ and flips KILL → NOT READY, contradicting the claimed KILL. Add a rule: an unexamined dimension defaults to opinion (cap 1, flag) UNLESS the fellow asserted a verified absence. This makes the 3+ trigger deterministic.</li><li><strong>REDESIGN band is 4 points wide and fragile (Golden 02, Azraq).</strong> Without cited figures, severity and budgeted-pain are evidence-capped, and a strict scorer lands Azraq at ~27 (KILL) rather than the reference 29 (REDESIGN). The verdict flips on one dimension's judgment call. Either tighten the golden's reference score or add explicit tie-break guidance for totals landing at the 27-28 KILL/REDESIGN seam.</li><li>(Minor) Golden-04 NOT READY output has no /40 by design; a naive read of the rubric's <code>artifact_complete</code> (&quot;required numbers&quot;) could dock it. Worth a one-line note in the rubric that NOT READY is a complete, number-free artifact.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added unexamined-dimension → opinion-cap default to Step 2 and a ±1 band-edge tie-break (resolve down) to Step 5.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (gas-safety alerts) — expected PASS",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Score this problem. Barrier Intelligence: offshore control-room operators miss early gas-leak indicators buried across permit logs and sensor feeds. We ran a pilot on one operator's 3 rigs. Logs show 6-11 flagged indicators per 12-hour shift. The operator already pays 2 senior engineers to hand-review permit logs and holds a SCADA-alarm vendor contract. One unplanned shutdown runs about $1.2M/day and a missed gas event carries a regulator fine. Their HSE manager signed the pilot PO and we hold a signed data-rights clause on the rig logs. Should we build this?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>All 8 dimensions scored, each with a rung-tagged citation. No dimension left blank.</li><li>Frequency scored 4, not 5: logs are behaviour evidence (ceiling 4); the answer must name the ceiling as the reason it is not 5.</li><li>Budgeted pain 5 and severity 5, both citing money (headcount, vendor contract, $1.2M/day, fine schedule).</li><li>Buyer clarity 5, citing the named HSE manager and the signed PO.</li><li>Founder asymmetry capped at 3: a signed data-rights clause is artefact-grade; the answer must show the ceiling biting.</li><li>Total lands 32-36; the reference worked example is 34/40.</li><li>Zero opinion caps → gate returns PASS / build.</li><li>Verdict names the binding soft spots (founder asymmetry, data exhaust) as the two-week priorities, not just the total.</li><li>Every empirical number tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>. No number invented beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre risk) — expected REDESIGN (28-31 band)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Go or no-go on this. Azraq sells static risk reports on data-centre sites. We hold signed data-rights agreements with three operators, so we have incident and uptime data nobody else has. An outage at a large site costs real money. Reports go out quarterly. We are not sure yet whether the insurer, the operator, or the regulator is the buyer — we have had encouraging conversations with all three. The vision is a full data-centre risk platform.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>All 8 dimensions scored.</li><li>Founder asymmetry scored high (5), citing the signed multi-operator data-rights agreements as money/behaviour-grade — the answer must recognise this as the real strength.</li><li>Buyer clarity scored low (2) and capped by evidence: &quot;encouraging conversations&quot; across three candidate buyers is verbal (ceiling 2); the answer names the fuzzy buyer as a binding constraint.</li><li>Frequency scored low (about 2): quarterly reports.</li><li>Wedge sharpness scored middling (about 3): &quot;full risk platform&quot; is broad; flag it.</li><li>Total lands 28-31 (reference ≈ 29/40).</li><li>Gate returns REDESIGN the wedge within two weeks, then re-score.</li><li>Verdict must say the strong asymmetry (5) is being wasted on a fuzzy buyer and a broad wedge, and that the redesign should point the same data-rights edge at one named buyer tied to one decision (e.g., a single insurer-facing report that moves a premium).</li><li>No invented spend figures or buyer names beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix (AI copilot for factory managers) — expected KILL",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Rate this problem. Mentix is an AI copilot for factory managers. The underlying pain is that plant managers react late to line stoppages. Stoppages happen most days. Managers we spoke to said a copilot would be really valuable. We think plant managers would buy it, though corporate IT might own the budget. Our team knows industrial AI well.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>The answer notes the input is close to a solution-in-disguise (&quot;AI copilot&quot;) but scores the stated underlying pain (late reaction to line stoppages), not the copilot.</li><li>All 8 dimensions scored.</li><li>Frequency about 4: stoppages most days (behaviour, if the fellow can point to a log; otherwise flag).</li><li>Budgeted pain low (2), capped: &quot;would be valuable&quot; is verbal, no line item cited.</li><li>Buyer clarity low (2), capped: plant manager vs corporate IT is unresolved and only verbal.</li><li>Wedge sharpness 1 and opinion-flagged: &quot;copilot for factory managers&quot; is a broad platform with no narrow first slice; there is only opinion behind it.</li><li>Founder asymmetry low (about 2): &quot;knows industrial AI well&quot; is generic, verbal.</li><li>Exactly one or two opinion-capped dimensions (wedge, possibly asymmetry) — fewer than 3, so the skill still scores rather than returning NOT READY.</li><li>Total lands below 28 (reference ≈ 21/40).</li><li>Gate returns KILL.</li><li>Verdict names the binding failures: no money bleeding against the pain, no sharp wedge, no clear buyer. It notes that sharpening to ONE decision (e.g., changeover scheduling) with real evidence would justify a re-score — but does not soften the current kill.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (early workflow product) — expected NOT READY TO SCORE",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Is this problem good enough to build? Durian Labs wants to automate the first workflow a small ops team does each morning. I think it's a big pain, teams everywhere deal with it, and I'm pretty sure they'd pay for a fix. We haven't run a pilot or pulled any data yet, and I haven't spoken to a buyer — but it feels obviously valuable.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>The skill does NOT emit a /40 total.</li><li>It identifies that most dimensions rest on opinion: frequency (&quot;I think it's a big pain&quot;), budgeted pain (&quot;pretty sure they'd pay&quot;), severity, buyer clarity (&quot;haven't spoken to a buyer&quot;), founder asymmetry, and wedge sharpness are all opinion — 3 or more, triggering the NOT READY TO SCORE gate.</li><li>The answer flags the &quot;obviously valuable&quot; language as rung-0.1 opinion.</li><li>It returns the cheapest test per opinion-capped dimension, e.g.:\n<ul><li>Frequency → pull 2 weeks of the target team's workflow logs / timestamps.</li><li>Budgeted pain → find one existing spend line (a tool, a contractor, hours) against it.</li><li>Buyer clarity → get one buyer with budget on a call and ask what they pay today.</li></ul></li><li>It refuses to pass or even to produce a number, and states why: a scorecard built on opinion would be fiction.</li><li>It invents no pain size, no buyer, no willingness-to-pay figure.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane: timesheet reminders — expected KILL (frequent but not fundable)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Score this problem. A 12-person marketing agency: people forget to submit timesheets on Friday. Their payroll export shows 8 of 12 submit late every week. The ops manager spends about 1.5 hours each week chasing them and she has a small SaaS tooling budget and has bought tools before. There is no budget line for the late-timesheet problem, no data comes out of it, and there are already many reminder tools on the market.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>All 8 dimensions scored.</li><li>Frequency about 4: payroll export showing 8/12 late weekly is behaviour evidence.</li><li>Budgeted pain 1, but backed by a VERIFIED ABSENCE (&quot;no budget line&quot;) — scored 1 with High confidence, and explicitly NOT flagged as an opinion cap. The answer must draw this distinction.</li><li>Severity low (about 2): ~1.5 hrs/week of chasing, behaviour-backed, low substance.</li><li>Data exhaust 1, verified (no data) — not an opinion cap.</li><li>Buyer clarity about 4: named ops manager with a small budget who has bought SaaS.</li><li>Wedge sharpness low (2): crowded reminder-tool market.</li><li>Founder asymmetry 1, verified (none) — not an opinion cap.</li><li>Fewer than 3 opinion caps (ideally zero), so the skill scores rather than returning NOT READY.</li><li>Total lands below 28 (reference ≈ 18/40).</li><li>Gate returns KILL.</li><li>Verdict teaches the lesson: high frequency and a clear buyer are not enough — no money bleeds against this pain and there is no moat, so it dies at the gate.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/golden/05.md"
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
     "html": "<p>&quot;Should I build this? I want to build something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do NOT produce a scorecard. There is no problem to score — &quot;something in logistics&quot; is a sector, not a pain.</li><li>Do NOT invent a logistics problem, buyer, frequency, or cost to fill the gap.</li><li>Ask the ONE question that unblocks scoring: what is the recurring, budgeted pain, and who already pays to work around it? (Name one job, one person, and what it costs them today.)</li><li>Optionally state the smallest honest next step: bring one named problem with one reachable buyer, and this skill will score it on the eight dimensions.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricates any specific logistics scenario or number.</li><li>Returns a /40 or a gate verdict on a sector.</li><li>Flatters the idea (&quot;logistics is a huge market!&quot;) instead of asking for the pain.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Score this problem: the problem is that factory managers don't have an AI copilot.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Name the trap: &quot;no AI copilot&quot; is a missing solution, not a problem. Scoring it would score the copilot's appeal, not the size of any underlying pain — every row would inflate.</li><li>Reframe to the underlying job: what decision are factory managers making badly today, how often, and what does each bad instance cost? (e.g., they react late to line stoppages, losing X of downtime per event.)</li><li>Refuse to score until the problem is stated as a pain. Offer to score the reframed problem once there is money-or-behaviour evidence behind it.</li><li>Point to problem-statement for the reframe if the fellow needs the structure.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepts &quot;no AI copilot&quot; as the problem and scores it.</li><li>Invents the underlying pain's frequency or cost instead of asking for it.</li><li>Produces a passing verdict for a feature dressed as a problem.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Map all my risky assumptions across go-to-market, strategy, and team so I know everything that could sink this venture.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline. This is a broad risk inventory across many categories, not a go/no-go gate on one problem.</li><li>Name the right skill: <code>identify-assumptions-new</code> — the very skill this scorecard supersedes for that job. It maps assumptions across eight risk categories (value, usability, viability, feasibility, ethics, GTM, strategy, team).</li><li>Explain the boundary: the scorecard scores ONE problem on eight quality dimensions and returns a build/redesign/kill verdict; it is a gate, not a risk map.</li><li>Do not poach: do not start scoring dimensions or produce a /40.</li><li>Optionally point to the other siblings for their specific jobs (so-what-stress-test for the whole-idea questions, wedge-five-questions for the wedge, physics-floor-gap for the unit ratio).</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces an assumption map or a risk list itself.</li><li>Runs the eight-dimension scorecard on a request that is not one problem.</li><li>Fails to name identify-assumptions-new as the correct destination.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/problem-quality-scorecard/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/problem-quality-scorecard/SKILL.md",
  "template": "skills/problem-quality-scorecard/template.md",
  "example": "skills/problem-quality-scorecard/examples/sample.md",
  "rubric": "skills/problem-quality-scorecard/tests/rubric.json",
  "results": "skills/problem-quality-scorecard/tests/RESULTS.md"
 }
});
