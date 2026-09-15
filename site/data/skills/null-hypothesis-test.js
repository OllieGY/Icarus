window.ICARUS_SKILL("null-hypothesis-test", {
 "name": "null-hypothesis-test",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes the beliefs a plan silently depends on and turns each into a falsifiable bet: its null form (the belief is false), the single cheapest observation that could kill it, and the exact result that counts as death — written down before you run it. It then ranks the beliefs by how likely each is to be wrong times how much dies if it is, and tells the fellow which one to shoot at this week. The output is a ranked disproof table, not a risk list.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic assumption work lists beliefs and &quot;suggests a test&quot; — and the test almost always goes looking for support, so it can only ever pass. This inverts it. You write the null (your belief is false) and the only admissible test is one that could make the null win. A belief you cannot imagine disproving cheaply is not an assumption, it is a hope, and the skill names it as one. Then it spends the cheapest disproof on the belief most likely to be both wrong and fatal — because that is where a week of testing buys the most.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it once a fellow has a plan, wedge, or concept in hand and needs to know which of its underlying beliefs to falsify, in what order, with what test.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th></tr></thead><tbody><tr><td>A go/no-go on whether the problem is worth building at all</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (8-dimension gate) — this skill runs <em>after</em> a problem clears it, or on the dimensions it opinion-capped</td></tr><tr><td>To build magnitude from the smallest verifiable units</td><td><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></td></tr><tr><td>To map how the workflow is done today and price each step</td><td><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></td></tr><tr><td>A narrative &quot;imagine it failed, tell the story&quot; exercise</td><td><code>pre-mortem</code> — that generates failure modes as prose; this designs the one cheapest observation that disproves a specific belief and ranks it</td></tr><tr><td>To turn a solution back into a problem first</td><td><code>problem-statement</code>, then return here</td></tr></tbody></table></div>\n<p>This skill falsifies and ranks the beliefs under a chosen plan. It is not a build/no-build gate and not a sizing tool.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Seven steps.</p>\n<p><strong>Step 1 — Surface only the load-bearing beliefs.</strong> Read the plan from four seats (PM: will they pay; designer: will they use it; engineer: can we build it; legal/ GTM: are we allowed to and can we reach them). Keep only the beliefs the plan <em>dies</em> without. Delete every nice-to-know. If the fellow gave you a solution (&quot;we need a mobile app&quot;) rather than a belief about the world, reframe it to the underlying claim first (&quot;users abandon because the task can't be done on mobile&quot;) — you cannot falsify a feature.</p>\n<p><strong>Step 2 — Write the null for each belief.</strong> The null H0 is the flat denial: the boring world where the effect is absent. &quot;Operators will grant us log access&quot; becomes H0: &quot;operators will not grant access.&quot; You will not test to confirm the belief; you will run the observation that gives H0 its best fair chance to win.</p>\n<p><strong>Step 3 — Score P(wrong) 1-5.</strong> How likely is the belief actually false, given the evidence you hold today.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>P(wrong)</th><th>When</th></tr></thead><tbody><tr><td>5</td><td>No evidence it's true; it cuts against base rates or against how the incumbent already behaves</td></tr><tr><td>4</td><td>Plausible but unverified; rests on opinion, analogy, or a friendly anecdote</td></tr><tr><td>3</td><td>Genuinely mixed — one weak signal each way</td></tr><tr><td>2</td><td>One behaviour or artefact data point supports it</td></tr><tr><td>1</td><td>Money or repeated behaviour already supports it (rarely still a live assumption)</td></tr></tbody></table></div>\n<p>Two anti-overconfidence rules, both enforced:</p>\n<ul><li>Opinion-only support caps you at <strong>P(wrong) &gt;= 4</strong>. You do not get to call a belief probably-true because you feel sure of it.</li><li>Any belief with Impact 5 (venture-fatal, Step 4) resting below behaviour-grade evidence has <strong>P(wrong) floored at 3</strong> — so a fatal belief can never be parked on confidence; it always lands in the &quot;test first&quot; band.</li></ul>\n<p><strong>Step 4 — Score Impact-if-wrong 1-5.</strong> If the belief is false, how much of the plan dies.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Impact</th><th>If the belief is false…</th></tr></thead><tbody><tr><td>5</td><td>Venture-fatal: no business exists (legality, core data access, anyone paying at all)</td></tr><tr><td>4</td><td>Wedge-fatal: the first slice dies; forced pivot</td></tr><tr><td>3</td><td>Costs a quarter or a major rebuild</td></tr><tr><td>2</td><td>Costs a sprint</td></tr><tr><td>1</td><td>Cosmetic; routed around in a day</td></tr></tbody></table></div>\n<p><strong>Step 5 — Rank = P(wrong) x Impact (max 25), and set the order.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>P x Impact</th><th>Action</th></tr></thead><tbody><tr><td>&gt;= 15</td><td>Load-bearing wall. Test THIS WEEK, before any build.</td></tr><tr><td>8-14</td><td>Test this month, before the build stage it gates.</td></tr><tr><td>&lt;= 7</td><td>Park. Note it; do not spend a <em>costly</em> test yet — but a ~zero-cost disproof (piggybacked on work already happening, or a quick check before an imminent rollout) may still run. Parking means &quot;don't buy an expensive test&quot;, not &quot;never observe&quot;.</td></tr></tbody></table></div>\n<p>Ties break toward the higher Impact; for equal-Impact rows, toward the higher P(wrong), then toward the cheaper disproof. Test order is descending rank, top first.</p>\n<p><strong>Step 6 — For each belief above the park line, design the single cheapest disproof.</strong> The observation must clear three gates or it is theatre:</p>\n<ol><li><strong>Can-fail</strong> — there is a realistic result that kills the belief.</li><li><strong>Pre-committed kill signal</strong> — you write the exact result that = death <em>before</em> running, so no post-hoc rationalising a bad result into a good one.</li><li><strong>Behaviour-or-money</strong> — the observation produces evidence at behaviour rung or higher (see Evidence standard), not an opinion.</li></ol>\n<p>A test is a <strong>confirmation test</strong> — banned, this is the kill line — if any of these is true: it can only return support (friendly sample, hypothetical question); its success criterion is &quot;they said yes / they liked it&quot;; it has no pre-committed failure result. Rewrite every confirmation test into its disproof twin:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Confirmation test (banned)</th><th>Disproof twin (required) — with pre-committed kill signal</th></tr></thead><tbody><tr><td>&quot;Interview 10 operators: would you share logs?&quot;</td><td>Ask ONE operator for sandbox read-access to one real log this week. Kill = access not granted, or it routes to legal and stalls past 5 days. (behaviour/artefact)</td></tr><tr><td>&quot;Survey managers: would you use an AI copilot?&quot;</td><td>Concierge one recommendation into one live shift by hand. Kill = the manager ignores or overrides it, or does not ask for it again next shift. (behaviour)</td></tr><tr><td>&quot;Show the mock to 5 users, ask if it's clear.&quot;</td><td>Give 5 users the task cold, no help. Kill = 2 or more fail the core step or ask what to do. (behaviour)</td></tr></tbody></table></div>\n<p><strong>Step 7 — Write the test order and what would change the view.</strong> Name the top one or two beliefs, their disproof, cost, and kill signal. For each, state in one line what result would make you abandon the belief and what would let it climb one rung of the evidence ladder.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A disproof only counts if it produces behaviour or money evidence. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Evidence the disproof produces</th><th>Ladder weight</th></tr></thead><tbody><tr><td>Money moved (paid, refused to pay, switched spend)</td><td>1.0</td></tr><tr><td>Behaviour observed under real stakes</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>A verbal &quot;no&quot; is weak disproof — people are polite and answer hypotheticals loosely. A behavioural non-action under real stakes (&quot;we gave them free access and they never pulled a log&quot;) is strong disproof. Money is strongest. The cheapest test that produces behaviour-grade-or-better evidence wins; a cheaper test that only produces opinion does not count as a disproof and must be rewritten. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Never invent a frequency, cost, or quote the fellow did not give you.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Confirmation dressed as rigour.</strong> &quot;Run 10 interviews to validate demand&quot; feels like a test and is not — it is built so the belief can only survive. If the observation has no result you would accept as death, it is theatre. Force the pre-committed kill signal.</li><li><strong>Parking the fatal belief.</strong> The one belief that would end the venture is the one a fellow is most tempted to declare &quot;obviously fine&quot; and skip. The Impact-5 floor (Step 3) exists to stop that: a venture-fatal belief on opinion evidence lands in the test-first band whether the fellow likes it or not.</li><li><strong>Ranking by fear, not by wrong x impact.</strong> The scariest-sounding risk is not always the highest-ranked. A belief that is terrifying but you already have money evidence for (P=1) ranks below a dull-sounding belief that is probably wrong and wedge-fatal. Rank on the product, not on the adrenaline.</li><li><strong>Falsifying a solution.</strong> If the &quot;assumption&quot; is a chosen feature (&quot;we assume we need X&quot;), every test scores the feature, not a belief about the world. Reframe to the underlying claim before writing the null.</li><li><strong>Cheap-but-empty disproof.</strong> A test can be cheap and still worthless if its output is opinion (a survey). Cheapness is necessary, not sufficient; the output rung is the other half of the gate.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a worked Azraq disproof table: six load-bearing beliefs, each with its null, P(wrong) x impact rank, cheapest disproof, evidence rung, cost and pre-committed kill signal; the data-rights belief ranks top at 20/25 and is shot at first; one of the fellow's proposed tests is caught as a confirmation test and rewritten.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Absorbs the useful bones of <code>identify-assumptions-new</code> and <code>identify-assumptions-existing</code> — multi-perspective surfacing of beliefs (PM / designer / engineer) and a per-item test — and beats them: those skills stop at listing assumptions, rating confidence, and &quot;suggesting a test&quot; that is usually a confirmation test with no ranking. This skill converts that soft inventory into falsifiable nulls, forbids confirmation tests, forces a pre-committed kill signal, and ranks by P(wrong) x impact so the fellow knows what to test first. <code>identify-assumptions-new</code> is already superseded by <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>; this skill does not re-supersede it, it takes its bones.</p>\n<p>Composes with: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — run the scorecard first to gate the problem; its opinion-capped dimensions and the plan's load-bearing beliefs are the exact inputs to this skill's disproof table, and this skill supplies the rigour behind the scorecard's &quot;cheapest test to raise it&quot; column. Hand a unit-economics belief (&quot;does the physics floor leave margin&quot;) to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, a sizing belief to <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a>, and a workflow-cost belief to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>. Not <code>pre-mortem</code>: that narrates failure; this designs the one observation that disproves a named belief and ranks it.</p>"
  }
 ],
 "template": {
  "html": "<h1>Null-Hypothesis Test — disproof table</h1>\n<p><strong>Fellow / venture:</strong> _______________ <strong>Plan / wedge under test:</strong> _______________ <strong>Date:</strong> _______________</p>\n<h2>The load-bearing beliefs</h2>\n<blockquote><p>Only beliefs the plan DIES without. Delete nice-to-knows. If a line names a feature (&quot;we need X&quot;), reframe it to the claim about the world underneath before writing the null.</p></blockquote>\n<hr>\n<h2>Disproof table</h2>\n<p>Rank = P(wrong) x Impact. Score each 1-5. P(wrong): opinion-only support caps at 4; any Impact-5 belief below behaviour-grade evidence floors at 3. Disproof must be able to fail, carry a pre-committed kill signal, and produce behaviour/money evidence.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Belief (a claim about the world)</th><th>Null H0 (belief is false)</th><th>P(wrong) 1-5</th><th>Impact 1-5</th><th>Rank (PxI)</th><th>Cheapest disproof + evidence rung</th><th>Cost/time</th><th>Pre-committed kill signal</th></tr></thead><tbody><tr><td>1</td><td>_ <code>[Fact/Assumption/Hypothesis]</code></td><td>_</td><td>_</td><td>_</td><td>_</td><td>_ (rung: money/behaviour/artefact/verbal/opinion)</td><td>_</td><td>_</td></tr><tr><td>2</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>3</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>4</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>5</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td></tr><tr><td>6</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td><td>_</td></tr></tbody></table></div>\n<hr>\n<h2>Confirmation tests caught (rewritten)</h2>\n<blockquote><p>Any proposed test that can only return support, scores &quot;they said yes&quot;, or has no pre-committed failure result. Rewrite each into its disproof twin.</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Belief #</th><th>Confirmation test proposed</th><th>Disproof twin (with kill signal)</th></tr></thead><tbody><tr><td>_</td><td>_</td><td>_</td></tr></tbody></table></div>\n<hr>\n<h2>Test order</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Beliefs (by #)</th><th>When</th></tr></thead><tbody><tr><td>Load-bearing wall (Rank &gt;= 15)</td><td>_</td><td>THIS WEEK, before any build</td></tr><tr><td>Test this month (Rank 8-14)</td><td>_</td><td>before the build stage it gates</td></tr><tr><td>Park (Rank &lt;= 7)</td><td>_</td><td>no costly test yet; a ~£0 disproof may still run</td></tr></tbody></table></div>\n<h2>What would change the view</h2>\n<p>For the top one or two beliefs:</p>\n<ul><li><strong>Belief #_ :</strong> result that makes you ABANDON it = _______________ ; result that lets it climb one evidence rung = _______________</li><li><strong>Belief #_ :</strong> abandon if = _______________ ; climbs a rung if = _______________</li></ul>",
  "path": "skills/null-hypothesis-test/template.md"
 },
 "example": {
  "html": "<h1>Null-Hypothesis Test — Azraq (worked)</h1>\n<p><strong>Fellow / venture:</strong> Azraq (data-centre / infrastructure risk) <strong>Plan / wedge under test:</strong> Sell an outage-risk score for data centres to underwriters, built on operators' incident and uptime logs, with an exclusive data-rights position. <strong>Date:</strong> 2026-07-21</p>\n<blockquote><p>All numbers here are synthetic, domain-plausible test fixtures — not real client data. They exist to show the mechanic, not to report a finding.</p></blockquote>\n<h2>The load-bearing beliefs</h2>\n<p>Read from four seats. The plan dies without each of these; nice-to-knows (report format, refresh latency) were cut to the park line.</p>\n<hr>\n<h2>Disproof table</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Belief (claim about the world)</th><th>Null H0 (belief is false)</th><th>P(wrong)</th><th>Impact</th><th>Rank</th><th>Cheapest disproof + evidence rung</th><th>Cost/time</th><th>Pre-committed kill signal</th></tr></thead><tbody><tr><td>1</td><td><code>[Assumption]</code> A data-centre operator will grant Azraq rights to its incident/uptime logs</td><td>Operators will not grant log rights</td><td>4</td><td>5</td><td><strong>20</strong></td><td>Ask ONE friendly operator for a signed sandbox read-grant to one month of real logs (rung: artefact -&gt; behaviour)</td><td>1 week, £0</td><td>Not granted, OR it routes to legal and stalls past 5 business days</td></tr><tr><td>2</td><td><code>[Assumption]</code> An underwriter will pay for a third-party outage-risk score</td><td>Underwriters price it in-house and won't buy</td><td>4</td><td>5</td><td><strong>20</strong></td><td>Take one historical outage to ONE underwriting lead and ask for a signed paid-pilot LOI, not a compliment (rung: verbal -&gt; money)</td><td>2 weeks</td><td>&quot;We'd use it but wouldn't pay&quot;, OR no budget line named</td></tr><tr><td>3</td><td><code>[Hypothesis]</code> The incident logs predict outages better than public signals</td><td>Logs add no lift over public data</td><td>3</td><td>4</td><td><strong>12</strong></td><td>Backtest the score against known past outages vs a public-signal baseline on the one operator's logs (rung: behaviour)</td><td>3-4 days</td><td>Lift &lt;= public-signal baseline</td></tr><tr><td>4</td><td><code>[Assumption]</code> The data-rights position is exclusive/defensible</td><td>Operators grant the same rights to competitors</td><td>4</td><td>3</td><td><strong>12</strong></td><td>Ask the operator for an exclusivity clause in the sandbox grant (rung: artefact)</td><td>in the same ask as #1</td><td>They sign access but refuse exclusivity</td></tr><tr><td>5</td><td><code>[Assumption]</code> A named buyer with budget exists, not a committee</td><td>Buying is a diffuse committee with no owner</td><td>3</td><td>3</td><td><strong>9</strong></td><td>In the #2 meeting, ask who signs the PO and what line it comes from (rung: verbal)</td><td>same meeting</td><td>No single owner / no named line</td></tr><tr><td>6</td><td><code>[Assumption]</code> Underwriters will trust an external model's methodology</td><td>They discount any model they can't audit</td><td>2</td><td>1</td><td><strong>2</strong></td><td>Park — cosmetic vs #2; folds into the pilot</td><td>—</td><td>(not tested yet)</td></tr></tbody></table></div>\n<p><strong>Note the floor biting:</strong> beliefs 1 and 2 are Impact 5 resting on opinion, so even a confident fellow cannot score them below P(wrong) 3; here honest P is 4. Both land at 20 — the two load-bearing walls.</p>\n<hr>\n<h2>Confirmation tests caught (rewritten)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Belief #</th><th>Confirmation test proposed</th><th>Disproof twin (with kill signal)</th></tr></thead><tbody><tr><td>1</td><td>&quot;Interview 8 operators about willingness to share data&quot;</td><td>Ask ONE operator for a signed sandbox read-grant this week. Kill = not granted or stalls in legal past 5 days. Interviews return politeness; a grant returns access.</td></tr><tr><td>2</td><td>&quot;Show 5 underwriters the concept deck and gauge interest&quot;</td><td>Ask ONE for a paid-pilot LOI on a real historical outage. Kill = no signed LOI / no budget line. Interest is opinion (0.1); an LOI is verbal-to-money.</td></tr></tbody></table></div>\n<hr>\n<h2>Test order</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Beliefs</th><th>When</th></tr></thead><tbody><tr><td>Load-bearing wall (Rank &gt;= 15)</td><td>#1 data rights, #2 will-pay</td><td>THIS WEEK — both, in parallel; either failing kills the plan as drawn</td></tr><tr><td>Test this month (Rank 8-14)</td><td>#3 predictive lift, #4 exclusivity, #5 named buyer</td><td>before any build; #3 and #4 ride on the #1 grant</td></tr><tr><td>Park (Rank &lt;= 7)</td><td>#6 methodology trust</td><td>note only</td></tr></tbody></table></div>\n<h2>What would change the view</h2>\n<ul><li><strong>Belief #1 (data rights):</strong> abandon the &quot;we own the data moat&quot; plan if the first operator won't grant access on any terms; it climbs a rung if a signed sandbox grant lands (opinion -&gt; artefact), and another if a second operator grants without being asked twice (-&gt; behaviour).</li><li><strong>Belief #2 (will-pay):</strong> abandon the direct-to-underwriter wedge if no underwriter will name a budget line against a real historical outage; it climbs to money the moment one signs a paid-pilot LOI. Until #1 and #2 both clear, nothing downstream (model, report, exclusivity) is worth building.</li></ul>",
  "path": "skills/null-hypothesis-test/examples/sample.md"
 },
 "rubric": {
  "skill": "null-hypothesis-test",
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
    "What has to be true for this to work?",
    "How would I disprove this before we build?",
    "What's the riskiest assumption here?",
    "What could kill this — which belief do I test first?",
    "Which of my assumptions should I test before building?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this problem good enough to build? Give me a go/no-go.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Size this market bottom-up — build me the number.",
     "sibling": "bottoms-up-quantification",
     "local": true
    },
    {
     "phrase": "Map how this workflow is done today and what each step costs.",
     "sibling": "current-state-map",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings appear near-verbatim in the description's &quot;Fires on&quot; list; all 3 must-not-fire excluded by explicit &quot;NOT ... (sibling)&quot; clauses naming problem-quality-scorecard / bottoms-up-quantification / current-state-map.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 declines to fabricate from a sector name, asks the one unblocking claim, routes to problem-statement/problem-quality-scorecard, invents nothing. 02 names the solution-in-disguise trap, reframes &quot;need a mobile app&quot; to a world-claim, gives a behavioural disproof (not &quot;would you use an app?&quot;). 03 declines the go/no-go, names problem-quality-scorecard, offers the handoff, emits no /40. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p>frontmatter <code>supersedes: none</code> (Related-skills &quot;takes the bones of&quot; identify-assumptions-* but does not claim supersession; that skill is already superseded by problem-quality-scorecard).</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: it depends on the null-inversion, the P(wrong)xImpact rank with the Impact-5 floor, the confirmation-test kill line + disproof twins, and the money&gt;behaviour&gt;artefact&gt;verbal&gt;opinion ladder with a pre-committed kill signal per row. A generic prompt lists assumptions and &quot;suggests a test&quot; (usually a confirmation test) with no floor, no rank, no kill signal. Guidance that should be tabular is tabular (score bands, twins, template).</p>"
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
    "method_fidelity",
    "artifact_complete",
    "proprietary_edge",
    "challenge",
    "evidence_standard"
   ],
   "rows": [
    {
     "label": "01 Barrier Intelligence 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix copilot 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Azraq 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian Labs 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Mentix internal (mundane) 4",
     "dims": [
      4,
      5,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "Y",
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
  "gotchasSurfaced": "<ul><li><strong>Equal-Impact tie has no written tie-break.</strong> In Golden 01 and 02 two Impact-4 beliefs both land at P4xI4 = 16 (e.g. predictive-lift vs act-on-it). Step 5's tie-break rule only says &quot;ties break toward the higher Impact&quot; — which does not resolve an equal-Impact tie. The correct resolution used here (order descending, then shoot at the cheaper / more foundational test first — lift's historical backtest gates the live-shift concierge) is defensible but not stated. Add: &quot;equal-Impact ties break toward the cheaper / more foundational test.&quot;</li><li><strong>Park band vs a near-free pre-rollout test (Golden 05).</strong> The park action reads &quot;Note it; do not spend a test yet,&quot; yet the mundane internal-form belief (Rank ~6-8, at/near the park line) still warrants the smallest honest test because the test is near-zero cost and rollout is imminent. Method should note: below the park line, a near-zero-cost test on an imminent change is still allowed; parking means &quot;don't spend a <em>costly</em> test,&quot; not &quot;never observe.&quot;</li><li><strong>Evidence ladder is inline prose.</strong> The money 1.0 &gt; behaviour 0.7 &gt; artefact 0.5 &gt; verbal 0.3 &gt; opinion 0.1 ladder is written as a sentence in ## Evidence standard; a 5-row table would make the rung weights scannable and match the rest of the skill's tabular style. Minor.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: Step 5 gains an equal-Impact tie-break (higher P(wrong), then cheaper disproof); park band (Step 5 + template Test order) now allows a ~zero-cost disproof — parking bars a costly test, not observation; the evidence ladder in ## Evidence standard is now a 5-row table.",
    "html": ""
   }
  ],
  "killLine": "<p>Auto-fail this skill if the output:</p>\n<ul><li>proposes a confirmation test (a test that can only return support, scores &quot;they said yes&quot;, or carries no pre-committed failure result) as the disproof for any belief, OR</li><li>ranks beliefs without computing P(wrong) x impact, or omits the pre-committed kill signal on the tested beliefs, OR</li><li>writes a null for a chosen feature/solution instead of reframing it to a claim about the world first.</li></ul>",
  "html": "<h1>Eval log — null-hypothesis-test</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What has to be true for this to work?&quot;</li><li>&quot;How would I disprove this before we build?&quot;</li><li>&quot;What's the riskiest assumption here?&quot;</li><li>&quot;What could kill this — which belief do I test first?&quot;</li><li>&quot;Which of my assumptions should I test before building?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Is this problem good enough to build? Give me a go/no-go.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (the 8-dimension /40 build gate, not belief falsification)</li><li>&quot;Size this market bottom-up — build me the number.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a> (magnitude from verifiable units)</li><li>&quot;Map how this workflow is done today and what each step costs.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (priced current-state workflow)</li></ol>\n<p>(Near-miss to watch: &quot;Imagine it failed and tell me the story&quot; → <code>pre-mortem</code>. That narrates failure modes as prose; this skill designs the single cheapest observation that disproves a named belief and ranks it by P(wrong) x impact.)</p>\n<h2>Skill-specific kill line (judge enforces)</h2>\n<p>Auto-fail this skill if the output:</p>\n<ul><li>proposes a confirmation test (a test that can only return support, scores &quot;they said yes&quot;, or carries no pre-committed failure result) as the disproof for any belief, OR</li><li>ranks beliefs without computing P(wrong) x impact, or omits the pre-committed kill signal on the tested beliefs, OR</li><li>writes a null for a chosen feature/solution instead of reframing it to a claim about the world first.</li></ul>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings appear near-verbatim in the description's &quot;Fires on&quot; list; all 3 must-not-fire excluded by explicit &quot;NOT ... (sibling)&quot; clauses naming problem-quality-scorecard / bottoms-up-quantification / current-state-map.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 declines to fabricate from a sector name, asks the one unblocking claim, routes to problem-statement/problem-quality-scorecard, invents nothing. 02 names the solution-in-disguise trap, reframes &quot;need a mobile app&quot; to a world-claim, gives a behavioural disproof (not &quot;would you use an app?&quot;). 03 declines the go/no-go, names problem-quality-scorecard, offers the handoff, emits no /40. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>frontmatter <code>supersedes: none</code> (Related-skills &quot;takes the bones of&quot; identify-assumptions-* but does not claim supersession; that skill is already superseded by problem-quality-scorecard).</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: it depends on the null-inversion, the P(wrong)xImpact rank with the Impact-5 floor, the confirmation-test kill line + disproof twins, and the money&gt;behaviour&gt;artefact&gt;verbal&gt;opinion ladder with a pre-committed kill signal per row. A generic prompt lists assumptions and &quot;suggests a test&quot; (usually a confirmation test) with no floor, no rank, no kill signal. Guidance that should be tabular is tabular (score bands, twins, template).</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass = total &gt;= 21 AND no dim &lt; 4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Barrier Intelligence</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>02 Mentix copilot</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Azraq</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 Durian Labs</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>05 Mentix internal (mundane)</td><td>4</td><td>5</td><td>5</td><td>5</td><td>5</td><td>24</td><td>Y</td></tr></tbody></table></div>\n<p>Kill-line check (skill-specific): every tested row across all 5 cases writes the null, the single cheapest disproof, a pre-committed kill signal, and a P(wrong)xImpact rank; confirmation tests are caught and rewritten into disproof twins; no null is written for a raw feature (adversarial-02 forces the reframe). Kill line NOT tripped.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Equal-Impact tie has no written tie-break.</strong> In Golden 01 and 02 two Impact-4 beliefs both land at P4xI4 = 16 (e.g. predictive-lift vs act-on-it). Step 5's tie-break rule only says &quot;ties break toward the higher Impact&quot; — which does not resolve an equal-Impact tie. The correct resolution used here (order descending, then shoot at the cheaper / more foundational test first — lift's historical backtest gates the live-shift concierge) is defensible but not stated. Add: &quot;equal-Impact ties break toward the cheaper / more foundational test.&quot;</li><li><strong>Park band vs a near-free pre-rollout test (Golden 05).</strong> The park action reads &quot;Note it; do not spend a test yet,&quot; yet the mundane internal-form belief (Rank ~6-8, at/near the park line) still warrants the smallest honest test because the test is near-zero cost and rollout is imminent. Method should note: below the park line, a near-zero-cost test on an imminent change is still allowed; parking means &quot;don't spend a <em>costly</em> test,&quot; not &quot;never observe.&quot;</li><li><strong>Evidence ladder is inline prose.</strong> The money 1.0 &gt; behaviour 0.7 &gt; artefact 0.5 &gt; verbal 0.3 &gt; opinion 0.1 ladder is written as a sentence in ## Evidence standard; a 5-row table would make the rung weights scannable and match the rest of the skill's tabular style. Minor.</li></ul>\n<h2>Refine run 2 — applied judge fixes: Step 5 gains an equal-Impact tie-break (higher P(wrong), then cheaper disproof); park band (Step 5 + template Test order) now allows a ~zero-cost disproof — parking bars a costly test, not observation; the evidence ladder in ## Evidence standard is now a 5-row table.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (gas-safety) — \"what's the riskiest assumption\"",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;What's the riskiest assumption in this? Barrier Intelligence: we send offshore control-room operators an alert when permit logs and sensor feeds show an early gas-leak pattern the SCADA alarms miss. We've built the detector. We assume it catches indicators the current SCADA alarms don't, that operators act on our alert instead of tuning it out, and that one operator's HSE manager can buy it. Which belief do I shoot at first?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Beliefs surfaced from more than one seat, each restated as a null H0 (e.g. H0: &quot;the detector adds no catch over SCADA&quot;; H0: &quot;operators tune the alert out&quot;).</li><li>Each belief carries P(wrong) 1-5, Impact 1-5, and Rank = product (max 25). The numbers must appear.</li><li>Top-ranked belief = &quot;our detector beats the SCADA baseline&quot; (predictive lift): wedge-fatal impact (4), genuinely uncertain P(wrong) (~3-4) → Rank ~12-16, named as the first shot. &quot;Operators act on it, not tune it out&quot; ranks close behind (behavioural, alarm-fatigue risk).</li><li>Cheapest disproof for the lift belief is a shadow backtest on historical logs (behaviour rung), with a pre-committed kill signal: no reduction in missed indicators vs the SCADA baseline / no lift. NOT &quot;ask operators if it seems useful&quot;.</li><li>The act-on-it belief gets a behavioural disproof (concierge/shadow one shift; kill = ignored or overridden or not requested again), not an opinion survey.</li><li>Buyer belief present but lower-ranked unless flagged Impact-5; if it is framed as &quot;anyone paying at all&quot;, the Impact-5 floor pushes P(wrong) to &gt;= 3.</li><li>Every empirical claim tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>; no frequency or cost invented beyond the input (the input gives none, so none should appear as <span class=\"tag tag-fact\">Fact</span>).</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix (industrial AI) — \"what has to be true\"",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;What has to be true for this to work? Mentix is an AI copilot for factory managers: it watches line telemetry and recommends an action when it sees a stoppage forming. The pitch assumes managers will act on a mid-shift recommendation, that we can read the line telemetry we need, and that catching stoppages earlier is worth paying for. How would I disprove these before we build?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Each &quot;has to be true&quot; restated as a null H0 the test tries to let win, e.g. H0: &quot;managers ignore or override the mid-shift recommendation.&quot;</li><li>The behavioural belief — &quot;managers act on a mid-shift recommendation&quot; — ranks at or near the top: Impact wedge-fatal (4), P(wrong) high because acting-on-advice mid-shift cuts against how a busy floor behaves (~4) → Rank ~16.</li><li>Cheapest disproof = concierge one recommendation into ONE live shift by hand (no build), pre-committed kill signal: the manager ignores/overrides it, or does not ask for it again next shift. Behaviour rung. The answer must reject any survey (&quot;would you use a copilot?&quot;) as a confirmation test and rewrite it.</li><li>Telemetry-access belief scored on feasibility/legal seat; if framed as &quot;we can get the data at all&quot; it is Impact-5 and the floor forces P(wrong) &gt;= 3.</li><li>&quot;Worth paying for&quot; gets a money-or-behaviour disproof (paid pilot / redirected budget), not stated interest.</li><li>Ranked table with P x Impact numbers; test order names the top one or two beliefs and what result would make Mentix abandon each.</li><li>Claims tagged; nothing invented beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq (data-centre risk) — \"how would I disprove this\"",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;How would I disprove this before we sink months in? Azraq sells a data-centre outage-risk score to insurers, built on operators' incident logs. The whole thing rests on operators handing us their logs and insurers paying for an outside score. Rank what I should test.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>The two named dependencies surfaced as nulls: H0 &quot;operators will not grant log rights&quot;, H0 &quot;insurers price it in-house and won't buy&quot;. Both are Impact 5 (venture-fatal); both rest on opinion, so the floor forces P(wrong) &gt;= 3, and both land in the load-bearing-wall band (Rank &gt;= 15).</li><li>Data-rights disproof = ask ONE operator for a signed sandbox read-grant to real logs this week; kill signal = not granted or legal stalls past ~5 days. Rung artefact -&gt; behaviour. Explicitly cheaper and harder-to-fake than &quot;interview operators about willingness to share&quot;.</li><li>Will-pay disproof = one underwriter, one real historical outage, ask for a paid- pilot LOI / named budget line; kill = no signed LOI / no budget. Rung verbal -&gt; money. A stated &quot;interest&quot; is rejected as opinion.</li><li>At least one lower belief surfaced (predictive lift over public data, exclusivity) and correctly ranked below the two walls.</li><li>Test order puts both walls THIS WEEK, in parallel, and states nothing downstream is worth building until both clear.</li><li>This mirrors examples/sample.md; a good answer may reach the same ranks (both 20) but must show the reasoning, not copy fixtures. Claims tagged; no invented numbers.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (early workflow product) — \"which belief do I test first\"",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Which belief do I test first? Durian Labs automates the first workflow a small ops team does — reconciling delivery exceptions across two systems. We assume the team does this often enough to care, that they'd let software touch both systems, and that the exceptions are regular enough to automate. I only have time to test one this week.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Beliefs restated as nulls: H0 &quot;the team does this rarely&quot;; H0 &quot;they won't let software touch both systems&quot;; H0 &quot;exceptions are too irregular to automate&quot;.</li><li>Top-ranked belief = frequency (&quot;often enough to care&quot;): if the team rarely hits the workflow, there is no wedge (Impact 4), and it rests on no evidence yet (P(wrong) 4-5) → Rank ~16-20 → tested first.</li><li>Cheapest disproof for frequency is a COUNT in the fellow's own reachable data — count real exception events per week in the two systems' logs — NOT an interview asking &quot;do you do this a lot&quot;. Pre-committed kill signal: fewer than N events/week (fellow sets N against a plausible floor). Behaviour rung, near-zero cost.</li><li>Access belief (&quot;let software touch both systems&quot;) flagged Impact-5-ish (no access, no product) with the floor applied; its disproof is a real request for a scoped integration/credential, kill = refused or stalls.</li><li>Regularity belief ranked lower and gets a structure check on the counted events.</li><li>The answer commits to ONE first test (frequency) with a reason grounded in P x Impact, honouring the &quot;I only have time for one&quot; constraint. Claims tagged; no event count invented (the fellow supplies N).</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix internal (mundane) — \"how would I disprove this\"",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Mundane one. Before I roll it out: we assume that adding a mandatory 'root cause' field to our internal incident form will get our own engineers to actually record root causes. How would I disprove that cheaply?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Treated seriously despite being a small internal-process belief — same mechanic, smaller stakes. Belief restated as null H0: &quot;a mandatory field does not get engineers to record real root causes&quot; (they leave junk or paste 'n/a').</li><li>Scored honestly: Impact low (2 — costs a sprint of bad data, not the venture), P(wrong) moderate-to-high (mandatory fields are routinely gamed → ~3-4) → Rank ~6-8. The answer should NOT inflate this into a load-bearing wall; it may sit at or near the park line, and the answer says so.</li><li>Cheapest disproof = ship the field to ~5 engineers for one week and read what they actually enter; pre-committed kill signal: real-root-cause completion below a set threshold (e.g. &lt; ~60%) or a spike in 'n/a'/one-word entries. Behaviour rung, near- zero cost. NOT &quot;ask engineers if they'd fill it in&quot;.</li><li>Demonstrates the skill does not manufacture drama for a boring input, and does not flatter a weak process assumption — it names it as low-stakes and gives the smallest honest test.</li><li>Claim tagged <span class=\"tag tag-assumption\">Assumption</span>; no completion number invented (the fellow sets the bar).</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build something in logistics. What's my riskiest assumption?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse to manufacture assumptions from a sector name. There is no plan, so there are no load-bearing beliefs to falsify yet — a &quot;logistics&quot; idea has no null.</li><li>Ask the ONE question that unblocks it: name the single claim your plan depends on that, if false, means there is no business — who has the pain, what breaks, and what you are betting is true about them.</li><li>Or return the smallest honest next step: state one concrete plan/wedge first (route it to <code>problem-statement</code> / <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>), then this skill can null-test its beliefs.</li><li>Invent nothing — no fabricated logistics scenario, no made-up frequency or buyer.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces a disproof table for an imagined logistics product the fellow never described.</li><li>Fabricates the pain, the buyer, or any number to fill the gap.</li><li>Answers &quot;your riskiest assumption is X&quot; when no plan exists to carry an assumption.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Test my assumption that we need a mobile app.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Name the trap: &quot;we need a mobile app&quot; is a chosen solution, not a belief about the world. There is no null to write for a feature — falsifying it would just test the app's appeal, and any test would be built to confirm it.</li><li>Reframe to the underlying claim the app is a bet on, e.g. &quot;users abandon the task because it can't be done away from a desk&quot; or &quot;the job happens in a place/moment a desktop can't reach&quot;. That claim has a null and can be disproved.</li><li>Falsify the reframed belief with a behavioural disproof — observe whether the desk-bound constraint actually costs abandonment (e.g. count task drop-off by location/context, or watch users attempt it in the field), with a pre-committed kill signal. NOT &quot;would you use a mobile app?&quot; (a confirmation test).</li><li>Do not accept the framing and do not start scoring the app.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Writes a null for &quot;we need a mobile app&quot; and tests the feature.</li><li>Proposes &quot;survey users on whether they want an app&quot; as the disproof.</li><li>Accepts the solution as the assumption and skips the reframe.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Forget testing assumptions — just tell me: is this problem good enough to build? Give me a go/no-go on it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline to answer the go/no-go here. This skill falsifies the beliefs under a chosen plan; it does not gate whether a problem is worth building at all.</li><li>Name the right sibling: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — the 8-dimension gate that scores a problem to /40 and returns pass / redesign / kill. Send the fellow there.</li><li>Offer the honest handoff: once the scorecard passes (or opinion-caps a dimension), bring the passing plan and its capped dimensions back here and this skill will design the cheapest disproof for each load-bearing belief.</li><li>Do not poach: do not produce a /40 score, and do not silently convert the go/no-go request into a disproof table without saying the scope line was crossed.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Answers the build/no-build question directly.</li><li>Emits a problem-quality-scorecard-style /40 gate.</li><li>Fails to name <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> as the correct skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/null-hypothesis-test/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/null-hypothesis-test/SKILL.md",
  "template": "skills/null-hypothesis-test/template.md",
  "example": "skills/null-hypothesis-test/examples/sample.md",
  "rubric": "skills/null-hypothesis-test/tests/rubric.json",
  "results": "skills/null-hypothesis-test/tests/RESULTS.md"
 }
});
