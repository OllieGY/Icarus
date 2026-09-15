window.ICARUS_SKILL("current-state-map", {
 "name": "current-state-map",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;how is this done today?&quot; into an invoice. It walks the workflow as it actually happens — one row per step — and puts a sourced price on each: touch labour, the handoff tax between steps, the cost of delay, and the cost of failure and rework. The lines total into the current priced practice per unit (<a href=\"#/skill/current-state-map\">template.md</a>), and the map names the single step that holds the most money. That total is the number <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> divides against the theoretical floor. This is not a swim-lane diagram and not a problem-space frame. It is a priced ledger of today's work, sourced to artefacts, tagged on the evidence ladder.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic workflow map is a swim-lane: boxes and arrows that show what happens and price nothing. When it does price, it prices only the touch labour you can see — the minutes a person spends hands-on — and misses the three costs that usually dominate: the handoff tax in the seams, the delay while the clock runs, and the failure tail when a bad output escapes. Icarus refuses an unpriced box. Every step carries a number, and every number cites the artefact it came from — a timesheet, an invoice, a ticket log, one timed run — or it is marked an opinion and the map is declared not ready. The reframe of MITRE's &quot;who benefits when the problem exists?&quot; is blunt here: the beneficiary of the status quo is the priced line item automation deletes, and the map shows you exactly which one.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a real workflow that happens today and you want to know what one pass through it actually costs, step by step, with the money sourced.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;How is this done today? Map it and price every step.&quot;</td><td>Yes</td><td>current-state-map</td></tr><tr><td>&quot;What does one pass through this workflow cost us now?&quot;</td><td>Yes</td><td>current-state-map</td></tr><tr><td>&quot;Where does the time and money go in this process?&quot;</td><td>Yes</td><td>current-state-map</td></tr><tr><td>&quot;What should this cost / is the gap big enough to build?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (feed it this map's total)</td></tr><tr><td>&quot;Strip this job to its primitive — information, decisions, liability.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></td></tr><tr><td>&quot;What's the TAM / total market for this?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></td></tr><tr><td>&quot;Frame the problem space — biases, who's affected, How Might We.&quot;</td><td>No</td><td><code>problem-framing-canvas</code></td></tr></tbody></table></div>\n<p>This skill prices today's workflow and stops. It does not compute a floor, a gap, or a market. If the fellow wants those, name the sibling and hand off.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Work the ledger in <a href=\"#/skill/current-state-map\">template.md</a>. Do not narrate the process; fill the rows. Every number carries a tag: <code>[Fact]</code> (from a cited priced artefact or a directly observed run), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a guess flagged as needing evidence). Every number carries a source cell.</p>\n<p><strong>Step 1 — Name the unit and its trigger.</strong> One pass through the workflow that produces one output (one report, one permit, one reconciled invoice) and what kicks it off. State frequency. If the fellow cannot name a discrete unit, stop and ask for it. Invent nothing.</p>\n<p><strong>Step 2 — Walk the as-is steps in order.</strong> How the work <em>actually</em> happens, not the written SOP and not the future with your product in it. One row per step: actor/role, the artefact it consumes or produces, and touch minutes.</p>\n<p><strong>Step 3 — Price touch labour.</strong> Touch minutes × loaded rate (salary + overhead + benefits, not base). Cite the source of the minutes in each row.</p>\n<p><strong>Step 4 — Add the handoff tax.</strong> Count every handoff — work passing between people or systems. Each one costs coordination: waiting for the right person, reloading context, re-explaining. Price it. The cost of a workflow often lives in the seams, not the steps.</p>\n<p><strong>Step 5 — Price delay separately from labour.</strong> Elapsed time is not touch time. Idle waiting costs money only if the clock costs money — carrying cost, an SLA penalty, a rig standing idle, a decision that decays, a customer who churns. If delay is free, write £0 and say why. Never inflate free waiting into a fake cost.</p>\n<p><strong>Step 6 — Price failure and rework.</strong> Two lines. (a) Rework loop = P(bounce) × cost of redo. (b) Escaped failure = P(bad output reaches the customer) × cost of that failure. A rare, expensive tail can dominate the whole map. If you cannot source it, tag it <code>[Hypothesis]</code> and flag it. Do not drop it to keep the map tidy, and do not invent a number to fill it.</p>\n<p><strong>Step 7 — Total = touch + handoff + delay + failure.</strong> This is the current priced practice per unit. It is the number <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> divides against the floor.</p>\n<p><strong>Step 8 — Cost concentration.</strong> Rank the steps by cost. Name the single step that holds the most. That is where the product must bite first, and it foreshadows the automatable part (floor part A) and the irreducible judgment (floor part B) the next skill will separate.</p>\n<p><strong>Step 9 — Map-readiness verdict.</strong> The total is only as trustworthy as the evidence under its biggest cost line. Apply the gate.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>Every step priced; the dominant cost line sits at ladder ≥ 0.7</td><td>READY — the total is trustworthy; hand to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></td></tr><tr><td>The dominant cost line (&gt; 40% of total) sits at ladder ≤ 0.3</td><td>NOT READY — source that line first; name the cheapest artefact, then re-total</td></tr><tr><td>Any step has a blank cost</td><td>AUTO-FAIL — an unpriced step is not a map</td></tr><tr><td>Any price cites no artefact</td><td>that cell is an opinion (0.1); if it is the dominant line → NOT READY</td></tr><tr><td>Unpriced <code>[Hypothesis]</code> tail whose plausible magnitude could exceed the priced total — <em>dominant-suspect</em></td><td>NOT READY — an unpriced line that could be the biggest one means the total may be the small half; price the tail (failure rate × £/failure) before trusting the figure</td></tr><tr><td>Unpriced <code>[Hypothesis]</code> tail that sits outside an otherwise-sourced holding total and cannot plausibly exceed it — <em>upside-risk</em></td><td>READY — the total holds; carry the tail flagged as an upside-risk number to price before scaling</td></tr></tbody></table></div>\n<p><strong>Kill line: an unpriced step, or a price with no cited source, fails the map.</strong> The priced ledger is the product. A swim-lane with no money on it, or numbers invented rather than sourced from the fellow's artefacts, is not this skill's output.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>The prices are where fellows guess. Each must sit on money or behaviour, not opinion. Weight every line by the evidence ladder.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Source for a priced line</th><th>Ladder weight</th></tr></thead><tbody><tr><td>Invoice / rate card / timesheet with £ against the step (money moved)</td><td>1.0</td></tr><tr><td>A directly timed run or a ticket/system log (behaviour observed)</td><td>0.7</td></tr><tr><td>A process doc or template that implies the step but not its cost (artefact shown)</td><td>0.5</td></tr><tr><td>&quot;The team says it's about a day&quot; (verbal commitment)</td><td>0.3</td></tr><tr><td>The fellow's opinion of what it costs</td><td>0.1</td></tr></tbody></table></div>\n<p>A confident aggregate — &quot;it takes two weeks and costs a fortune&quot; — is a 0.1 opinion, not a total. The skill decomposes it into steps and demands a source per step; it never accepts the lump sum and never floors it downstream. The dominant cost line sets the map's confidence: a £/unit total whose biggest term is a guess is a hypothesis wearing a decimal point. When a line is weak, name the cheapest artefact that lifts it: pull one timesheet week, time one run with a stopwatch, export one month of the ticket log.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Conflating elapsed time with touch time.</strong> &quot;It takes two weeks&quot; prices nothing — six of those days may be idle waiting that costs £0, and the touch labour may be six hours. Separate the clock from the labour or the total is fiction.</li><li><strong>Pricing the official SOP, not the real practice.</strong> The documented process and the actual one diverge. The cost hides in the undocumented chases, reworks, and Slack messages. Map what happens, not what is written down.</li><li><strong>Dropping the failure tail because it is hard to source.</strong> A rare, expensive failure — a missed gas leak, a line stoppage, a mispriced SLA — can exceed all the touch labour combined. Tag it <code>[Hypothesis]</code>, name the two numbers that would price it, and flag it. Never drop it; never invent it.</li><li><strong>Counting only the people you can see.</strong> The handoff tax and the delay cost are invisible on a swim-lane and often beat the touch labour. A map that prices only the obvious steps understates the prize and points the product at the wrong step.</li><li><strong>A tidy total hiding a guessed dominant line.</strong> A per-unit number feels solid the moment it has a decimal point. If its largest term rests on a 0.1 opinion, the concentration gate must catch it and hold the verdict at NOT READY.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/current-state-map\">examples/sample.md</a> — Azraq's static site risk report, decomposed and priced: five touch steps + rework loop + handoff tax reconcile to the £960 analyst-day, delay priced at £0 (and why), the failure tail flagged <code>[Hypothesis]</code>, drafting named as the dominant £300 line. Feeds <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> directly.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> — divides this map's total (the current cost) against the theoretical floor to return the build/walk gap verdict. Run this first; it produces the number that skill needs. This skill never computes a floor or a gap.</li><li><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> — strips the same job to information moved / decisions made / liability transferred, with tool and role names deleted. The opposite move: this map keeps every tool, role, and handoff visible because that is where the cost sits.</li><li><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> — names the one decision the workflow exists to make easier; this prices the whole workflow around it.</li><li><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a> — multiplies the per-unit cost across units to size the market; this builds the per-unit cost it multiplies.</li><li><code>problem-framing-canvas</code> — the qualitative problem-space frame (biases, who is affected, How Might We). Supersedes nothing: this absorbs its &quot;map how it actually happens&quot; and &quot;who benefits from the status quo&quot; moves and reforges them as a priced ledger, where the beneficiary of the status quo is the line item automation deletes.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Current State Map — priced step ledger</h1>\n<p>Fill every row. Every priced line needs a <strong>cost</strong>, a <strong>cited source</strong>, and a <strong>tag</strong> <code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code>. A blank cost, or a price citing no artefact, is an auto-fail. Do not price the future-with-your-product; price today's actual practice.</p>\n<h2>Shared assumption block (state and date it)</h2>\n<ul><li>Loaded rate(s) used: £____/hr for [role]  <code>[Assumption | Fact]</code>  (loaded = salary + overhead + benefits, not base)</li><li>FX if needed: ~£1 = $____  <code>[Assumption]</code></li><li>Date this map was priced / artefacts pulled: __________</li></ul>\n<hr>\n<h2>1. Unit and trigger</h2>\n<ul><li><strong>Unit:</strong> one [_____ — e.g. one site risk report]</li><li><strong>Trigger:</strong> [what kicks off one pass]</li><li><strong>Frequency:</strong> [___ / period]  <code>[Fact | Assumption]</code></li></ul>\n<h2>2–3. As-is step ledger (walk it in order; price the touch labour)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step (as it actually happens)</th><th>Actor / role</th><th>Artefact in→out</th><th>Touch min</th><th>Loaded £/min</th><th>Cost £</th><th>Source (cited)</th><th>Ladder</th><th>Tag</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<ul><li><strong>Touch-labour subtotal = £______</strong></li></ul>\n<h2>4. Handoff tax</h2>\n<ul><li>Handoffs counted (work passing between people/systems): ____</li><li>Coordination cost each (wait for the right person, context reload, re-explain): ____ min × £__/min</li><li><strong>Handoff subtotal = £______</strong>  · Source: __________ · <code>[tag]</code></li></ul>\n<h2>5. Delay (price only if the clock costs money)</h2>\n<ul><li>Elapsed time per unit: ____  vs touch time: ____ (state the gap)</li><li>Does the wait cost money? [carrying cost / SLA penalty / idle asset day-rate / decaying decision / churn] — or <strong>£0, because ______</strong></li><li><strong>Delay subtotal = £______</strong>  · Source: __________ · <code>[tag]</code></li></ul>\n<h2>6. Failure and rework</h2>\n<ul><li><strong>Rework loop:</strong> P(bounce) ____% × redo cost £____ = <strong>£______</strong>  · Source: __________ · <code>[tag]</code></li><li><strong>Escaped failure:</strong> P(bad output reaches customer) ____% × cost of that failure £____ = <strong>£______</strong>  · Source: __________ · <code>[tag]</code></li><li>If a tail cannot be sourced: tag <code>[Hypothesis]</code>, and name the two numbers that would price it: [historical failure rate] · [£ cost per failure]. Do not invent them.</li></ul>\n<h2>7. Total — current priced practice per unit</h2>\n<ul><li><strong>Total = touch £____ + handoff £____ + delay £____ + failure £____ = £______ per unit</strong></li><li>This is the number <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> divides against the floor.</li></ul>\n<h2>8. Cost concentration</h2>\n<ul><li>Steps ranked by cost (highest first): 1) ____ £____  2) ____ £____  3) ____ £____</li><li><strong>Dominant step: ____ ( __% of total )</strong> → the step the product attacks first.</li><li>Foreshadow for the floor: automatable part (→ floor A) = ____ ; irreducible judgment (→ floor B) = ____</li></ul>\n<h2>9. Map-readiness verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>Every step priced; dominant line at ladder ≥ 0.7</td><td>READY — hand to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></td></tr><tr><td>Dominant line (&gt; 40% of total) at ladder ≤ 0.3</td><td>NOT READY — source it first</td></tr><tr><td>Any step blank</td><td>AUTO-FAIL</td></tr><tr><td>Any price cites no artefact</td><td>that cell = opinion (0.1)</td></tr><tr><td>Unpriced <code>[Hypothesis]</code> tail could plausibly exceed the priced total (<em>dominant-suspect</em>)</td><td>NOT READY — price the tail (rate × £) before trusting the total</td></tr><tr><td>Unpriced <code>[Hypothesis]</code> tail sits outside a valid holding total, can't exceed it (<em>upside-risk</em>)</td><td>READY — total holds; flag the tail to price before scaling</td></tr></tbody></table></div>\n<ul><li><strong>This map is: ______</strong> (READY / NOT READY)</li><li>If NOT READY: the line to source first is ____; cheapest artefact to get it: [pull one timesheet week / time one run / export the ticket log].</li><li>What would change the total: [a timed run revises step X / the failure tail gets priced / a handoff is removed].</li></ul>",
  "path": "skills/current-state-map/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq static site risk report</h1>\n<p>Fellow: <strong>Azraq</strong> (data-centre / infrastructure risk). All numbers are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's ask:</strong> &quot;How is our risk report actually produced today, and what does one cost? We know it's roughly an analyst-day but I want it itemised before we talk automation.&quot;</p>\n<h2>Shared assumption block</h2>\n<ul><li>Loaded rate: <strong>£120/hr</strong> = £2.00/min for the analyst/senior (fully loaded specialist)  <code>[Assumption]</code></li><li>Priced against the timesheet export for the week of 3 Mar and one report observed 12 Mar  <code>[Fact]</code></li></ul>\n<hr>\n<h2>1. Unit and trigger</h2>\n<ul><li><strong>Unit:</strong> one static site risk report (uptime/incident history + data-rights position for one operator site).</li><li><strong>Trigger:</strong> quarterly refresh cycle opens for a site.</li><li><strong>Frequency:</strong> ~40 sites × quarterly = <strong>160 reports/year</strong>  <code>[Assumption]</code></li></ul>\n<h2>2–3. As-is step ledger (£2.00/min loaded)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step</th><th>Actor</th><th>Artefact in→out</th><th>Touch min</th><th>Loaded £/min</th><th>Cost £</th><th>Source</th><th>Ladder</th><th>Tag</th></tr></thead><tbody><tr><td>1</td><td>Pull incident + uptime logs from operator portal</td><td>analyst</td><td>portal export → raw logs</td><td>55</td><td>2.00</td><td>110</td><td>timesheet wk 3 Mar</td><td>0.7</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>2</td><td>Reconcile data-rights position (what we may publish)</td><td>analyst</td><td>contract terms → cleared fields</td><td>80</td><td>2.00</td><td>160</td><td>timesheet wk 3 Mar</td><td>0.7</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>3</td><td>Draft standard report sections</td><td>analyst</td><td>logs+template → draft</td><td>150</td><td>2.00</td><td>300</td><td>timesheet wk 3 Mar</td><td>0.7</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>4</td><td>Senior materiality review + sign-off</td><td>senior</td><td>draft → signed report</td><td>20</td><td>2.00</td><td>40</td><td>observed 12 Mar</td><td>0.7</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>5</td><td>Format, chart, QA</td><td>analyst</td><td>draft → final PDF</td><td>60</td><td>2.00</td><td>120</td><td>timesheet wk 3 Mar</td><td>0.7</td><td><span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<ul><li><strong>Touch-labour subtotal = 365 min = £730</strong></li></ul>\n<h2>4. Handoff tax</h2>\n<ul><li>Handoffs: analyst chases the operator twice for missing data; one senior review round-trip. ≈ <strong>70 min</strong>.</li><li><strong>Handoff subtotal = 70 min × £2.00 = £140</strong>  · Source: timesheet wk 3 Mar · <code>[Fact]</code> (0.7)</li></ul>\n<h2>5. Delay</h2>\n<ul><li>Elapsed time ≈ <strong>3 calendar days</strong> waiting on operator data vs <strong>~7 hr</strong> touch.</li><li>Does the wait cost money? A quarterly report has no SLA, no carrying cost, no decaying decision. <strong>Delay = £0, because the refresh cadence absorbs the wait.</strong> The three days are real but not billable.</li><li><strong>Delay subtotal = £0</strong>  · Source: no penalty clause in the reporting agreement · <code>[Assumption]</code></li></ul>\n<h2>6. Failure and rework</h2>\n<ul><li><strong>Rework loop:</strong> 25% of drafts bounce at senior review × +180 min redo = 0.25 × 180 × £2.00 = <strong>£90</strong>  · Source: senior's returned-drafts log, Q4 · <code>[Fact]</code> (0.7)</li><li><strong>Escaped failure:</strong> a <em>material</em> risk missed and shipped to the operator → mispriced SLA / reputational cost. Azraq has no historical rate or £ figure yet. <strong>Flagged <code>[Hypothesis]</code>.</strong> The two numbers to get: how often a material miss has occurred (returned-report + incident records); the £ cost when it did (one remediation/dispute).</li></ul>\n<h2>7. Total — current priced practice per unit</h2>\n<ul><li><strong>Total = touch £730 + handoff £140 + delay £0 + rework £90 + escaped-failure (unpriced, flagged) = £960 per report</strong></li><li>Reconciles to the observed analyst-day: 365 + 70 + 45 (expected rework) = 480 min = 8 hr × £120 = £960. Now itemised and sourced.</li><li>This £960 is the number <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> divides against the floor.</li></ul>\n<h2>8. Cost concentration</h2>\n<ul><li>Ranked: 1) Drafting <strong>£300 (31%)</strong>  2) Reconcile data-rights £160  3) Format/QA £120.</li><li><strong>Dominant step: drafting (£300).</strong> That is the step the product attacks first.</li><li>Foreshadow for the floor: automatable part (→ floor A) = drafting + log pull + formatting; irreducible judgment (→ floor B) = the 20-min senior materiality sign-off (£40).</li></ul>\n<h2>9. Map-readiness verdict</h2>\n<ul><li><strong>This map is: READY.</strong> Every priced line sits on a timesheet or an observed run (ladder 0.7); the dominant line (drafting) is sourced.</li><li>The only weak item is the escaped-failure tail, tagged <code>[Hypothesis]</code> — it sits <em>outside</em> the £960 priced total, so the total holds. It is an upside-risk number to price before betting the product on the current-cost figure being complete.</li><li>What would change the total: timing the senior sign-off on a real report (it drives floor B downstream); pricing the failure tail; removing the operator-data chase (handoff £140) with a direct feed.</li></ul>\n<p><strong>Hand-off:</strong> current cost = <strong>£960/report</strong>, dominant automatable line = drafting (£300), irreducible judgment = senior sign-off (£40, 20 min). Run <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> next.</p>",
  "path": "skills/current-state-map/examples/sample.md"
 },
 "rubric": {
  "skill": "current-state-map",
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
    "How is this done today? Map it and price every step.",
    "Map the workflow and tell me what each step costs.",
    "What does this process cost us now?",
    "Walk the as-is process and price it.",
    "Where does the time and money go in this workflow?"
   ],
   "mustNotFire": [
    {
     "phrase": "What should this cost / is the gap big enough to build?",
     "sibling": "physics-floor-gap",
     "local": true
    },
    {
     "phrase": "Strip this job to its primitive — information, decisions, liability.",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "What's the TAM / total market for this?",
     "sibling": "bottoms-up-quantification",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p><code>description</code> names the 5 fire-phrasings near-verbatim and carries an explicit NOT-list mapping each sibling (physics-floor-gap / job-in-primitives / bottoms-up-quantification / problem-framing-canvas). All 5 must-fire matched; all 3 must-not-fire routed to the correct sibling and did not fire.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied the Method to each input, filled the ledger, re-computed every number, re-checked each priced step cites an artefact and totals. See per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → Method Step 1 stops and asks for one unit + one priced artefact, invents nothing. 02 solution-in-disguise → Step 2 + Gotcha &quot;price the real practice not the SOP/future-with-product&quot; refuses the to-be map and re-anchors on today's manual work. 03 out-of-scope → When-NOT table + Related-skills decline and name <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, compute no floor/gap. No fabrication, no flattery, no scope-poaching.</p>"
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
    "evidenceHtml": "<p>G01 output turns on moves a generic PM prompt lacks: paid-wait-vs-free-delay split, the evidence ladder (shift logs = 0.7), <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, and failure-tail-flagged-not-invented. The load-bearing artifact (priced ledger) is a table in template.md; Method prose is procedural, not misplaced guidance.</p>"
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
    "proprietary",
    "challenge",
    "evidence"
   ],
   "rows": [
    {
     "label": "G01 Mentix shift-handover (paid-wait handoff) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G02 Barrier permit-to-work (delay dominates) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G03 Durian invoice reconciliation (mundane) 5",
     "dims": [
      5,
      4,
      4,
      5,
      5
     ],
     "total": 23,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 Mentix config → NOT READY (failure tail) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G05 Azraq aggregate → NOT READY 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
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
  "gotchasSurfaced": "<ul><li><strong>The readiness gate has no crisp rule for an unpriced <span class=\"tag tag-hypothesis\">Hypothesis</span> failure tail that <em>might</em> dominate.</strong> In G04 an unpriced stoppage tail forces NOT READY; in G01 and examples/sample.md an unpriced failure tail sits &quot;outside the priced total&quot; and the map is READY. The concentration gate is stated in % of total, but a <span class=\"tag tag-hypothesis\">Hypothesis</span> tail has no % (it is unpriced), so the arithmetic gate does not decide it — the boundary is left to judgment. Suggest an explicit rule: an unpriced tail is dominant-suspect (→ NOT READY) when the priced base is thin enough that a plausible tail could exceed it; it is an upside-risk sitting outside a holding total only when a substantial sourced base already stands. Both correct applications exist in the fixtures; the skill should name the test that separates them.</li><li><strong>template.md vs sample.md column drift (minor).</strong> template.md's step ledger carries a <code>Loaded £/min</code> column; examples/sample.md drops it. Harmless, but align them so the worked example matches the template a fellow fills.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: readiness gate (SKILL Step 9 + template §9) now separates a *dominant-suspect* unpriced `[Hypothesis]` tail that could exceed the priced total (→ NOT READY) from an *upside-risk* tail outside a valid holding total (→ READY, tail flagged); sample.md ledger regains the `Loaded £/min` column to match the template.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — current-state-map</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;How is this done today? Map it and price every step.&quot;</li><li>&quot;Map the workflow and tell me what each step costs.&quot;</li><li>&quot;What does this process cost us now?&quot;</li><li>&quot;Walk the as-is process and price it.&quot;</li><li>&quot;Where does the time and money go in this workflow?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;What should this cost / is the gap big enough to build?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></li><li>&quot;Strip this job to its primitive — information, decisions, liability.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></li><li>&quot;What's the TAM / total market for this?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td><code>description</code> names the 5 fire-phrasings near-verbatim and carries an explicit NOT-list mapping each sibling (physics-floor-gap / job-in-primitives / bottoms-up-quantification / problem-framing-canvas). All 5 must-fire matched; all 3 must-not-fire routed to the correct sibling and did not fire.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied the Method to each input, filled the ledger, re-computed every number, re-checked each priced step cites an artefact and totals. See per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → Method Step 1 stops and asks for one unit + one priced artefact, invents nothing. 02 solution-in-disguise → Step 2 + Gotcha &quot;price the real practice not the SOP/future-with-product&quot; refuses the to-be map and re-anchors on today's manual work. 03 out-of-scope → When-NOT table + Related-skills decline and name <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, compute no floor/gap. No fabrication, no flattery, no scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>G01 output turns on moves a generic PM prompt lacks: paid-wait-vs-free-delay split, the evidence ladder (shift logs = 0.7), <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, and failure-tail-flagged-not-invented. The load-bearing artifact (priced ledger) is a table in template.md; Method prose is procedural, not misplaced guidance.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 Mentix shift-handover (paid-wait handoff)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G02 Barrier permit-to-work (delay dominates)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>G03 Durian invoice reconciliation (mundane)</td><td>5</td><td>4</td><td>4</td><td>5</td><td>5</td><td>23</td><td>PASS</td></tr><tr><td>G04 Mentix config → NOT READY (failure tail)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>G05 Azraq aggregate → NOT READY</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr></tbody></table></div>\n<p>Numeric kill-line re-check (per protocol): every case that emits a total prices each step from a cited artefact and totals correctly (G01 £41.17 from shift logs; G02 £18,850 with £180k/24=£7,500/hr × 2.5hr=£18,750 from charter; G03 ~£3.32/unit from time-tracking export). G04 and G05 correctly refuse a trustworthy total — decomposed / flagged <span class=\"tag tag-hypothesis\">Hypothesis</span> and returned NOT READY, never floored. No unpriced step, no price without a cited source, no invented number. No <code>auto_fail</code> triggered in any case.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>The readiness gate has no crisp rule for an unpriced <span class=\"tag tag-hypothesis\">Hypothesis</span> failure tail that <em>might</em> dominate.</strong> In G04 an unpriced stoppage tail forces NOT READY; in G01 and examples/sample.md an unpriced failure tail sits &quot;outside the priced total&quot; and the map is READY. The concentration gate is stated in % of total, but a <span class=\"tag tag-hypothesis\">Hypothesis</span> tail has no % (it is unpriced), so the arithmetic gate does not decide it — the boundary is left to judgment. Suggest an explicit rule: an unpriced tail is dominant-suspect (→ NOT READY) when the priced base is thin enough that a plausible tail could exceed it; it is an upside-risk sitting outside a holding total only when a substantial sourced base already stands. Both correct applications exist in the fixtures; the skill should name the test that separates them.</li><li><strong>template.md vs sample.md column drift (minor).</strong> template.md's step ledger carries a <code>Loaded £/min</code> column; examples/sample.md drops it. Harmless, but align them so the worked example matches the template a fellow fills.</li></ul>\n<h2>Refine run 2 — applied judge fixes: readiness gate (SKILL Step 9 + template §9) now separates a <em>dominant-suspect</em> unpriced <code>[Hypothesis]</code> tail that could exceed the priced total (→ NOT READY) from an <em>upside-risk</em> tail outside a valid holding total (→ READY, tail flagged); sample.md ledger regains the <code>Loaded £/min</code> column to match the template.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix: shift-handover report → priced map with a paid-wait handoff",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Each shift, the outgoing supervisor compiles a handover report — pulls line data, notes incidents, flags open issues, hands it to the incoming supervisor. About 45 min of the supervisor's time. The incoming shift often waits ~20 min for it and sometimes acts on stale info. Supervisors are ~£38/hr loaded. 3 shifts/day across 4 lines. We have last month's shift logs and the incident log.&quot; Loaded £38/hr = £0.633/min.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one shift-handover report; frequency 3/day × 4 lines = <strong>12/day</strong>.</li><li>Ledger: the compile steps summing near 45 min, priced at £38/hr, each row cited to the shift logs (behaviour, ladder 0.7), tagged <span class=\"tag tag-fact\">Fact</span>.</li><li>Handoff tax priced honestly: the incoming supervisor's ~20-min wait is a <strong>paid</strong> person idle, not free delay → ~20 min × £0.633 ≈ <strong>£12.67</strong>, ladder 0.7. (Distinguish this from step 5 delay: here the waiter is on the clock.)</li><li>Failure line: &quot;acts on stale info&quot; → P(stale-info incident) × cost. Mentix gave no rate or £ → tagged <strong><span class=\"tag tag-hypothesis\">Hypothesis</span></strong>, with the two numbers to get named (incident log frequency; £ of a stale-info incident). Not invented.</li><li>Total per handover stated as £/unit; dominant step named.</li><li>Every number tagged; delay-vs-paid-wait distinction made explicit.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Leaves any step unpriced; reports the 20-min wait as free £0 delay when the waiter is a paid supervisor; or invents the stale-info failure cost instead of flagging it <span class=\"tag tag-hypothesis\">Hypothesis</span>.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence: permit-to-work → delay is the dominant cost",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Before hot work on a rig, a permit-to-work is issued: requester fills the form, safety officer reviews hazards, an authoriser signs, gas is tested, the permit is posted. Request to start is typically 4 hours, of which maybe 90 min is anyone's actual work — the rest the hot-work crew stands idle. Rig day-rate ~£180k/day (from the charter). Safety officer loaded ~£65/hr. We timed three permits last week.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one permit-to-work; trigger: a hot-work request. Frequency stated if given, else flagged.</li><li>Touch labour ≈ 90 min across requester / officer / authoriser, priced (officer ~£65/hr), cited to the three timed permits (behaviour, 0.7).</li><li><strong>Delay priced, NOT zero:</strong> ~2.5 hr of hot-work crew idle against a rig standing at £180k/day. £180,000 ÷ 24 = £7,500/hr → 2.5 hr ≈ <strong>£18,750 idle-rig cost per permit</strong>. Rig day-rate tagged <span class=\"tag tag-fact\">Fact</span> (from the charter); the idle allocation tagged <span class=\"tag tag-assumption\">Assumption</span>.</li><li><strong>Dominant cost line = delay (~£18,750), not the ~£100 of touch labour.</strong> The map must say so: the prize is compressing elapsed time, not the paperwork.</li><li>Total per permit stated; the delay term dwarfs everything else.</li><li>This is the teaching case for step 5: when the clock costs money, delay is the whole map.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Prices only the 90 min of touch labour and reports delay as free; omits the idle-rig cost; or names the paperwork as the dominant cost when the idle rig is 100×+ larger.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs: supplier-invoice reconciliation (deliberately mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;The first thing our product automates — a junior ops person reconciles inbound supplier invoices against POs and delivery notes: opens the invoice, finds the PO, checks quantities and prices, flags mismatches, marks it approved. About 8 min each when everything matches, longer when it doesn't; roughly 15% mismatch. ~600 invoices/month. Junior loaded ~£22/hr. We have the ops team's time-tracking export.&quot; Loaded £22/hr = £0.367/min.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one invoice reconciled; frequency 600/month.</li><li>Ledger: open / find-PO / check / flag / mark steps, touch ≈ 8 min matched, priced at £22/hr, cited to the time-tracking export (0.7), tagged <span class=\"tag tag-fact\">Fact</span>.</li><li>Rework/exception line uses the fellow's given rate: 15% mismatch × extra minutes (state the extra-minute assumption, tag <span class=\"tag tag-assumption\">Assumption</span> if not sourced).</li><li>Delay: <strong>£0</strong>, justified — invoices are not time-critical here (no early-payment discount mentioned). Stated, not inflated.</li><li>Per-unit total is small (~£3–£4/invoice); the map notes the per-unit number is what feeds <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, and gives the ×600 monthly figure only as context.</li><li>Dominant step named (the checking) even though the whole thing is cheap. The map stays honest about a mundane, low-value workflow.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Inflates a mundane task with invented delay or failure costs to make it look like a bigger prize; or fabricates a mismatch cost the fellow did not give (beyond a clearly-tagged <span class=\"tag tag-assumption\">Assumption</span> on extra minutes).</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Mentix: touch-labour only, forgets the failure tail → NOT READY",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Mapping the config step — an engineer sets the parameters for a production run. Takes about 3 hours of their time at ~£55/hr loaded, so ~£165. That's the cost.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Records the touch line (~£165) but tags its source honestly: &quot;about 3 hours&quot; is verbal (ladder 0.3), so the £165 is <span class=\"tag tag-assumption\">Assumption</span>, and the map asks to time one real config.</li><li><strong>Challenges &quot;that's the cost.&quot;</strong> A wrong parameter can cause a line stoppage. The map adds the failure line: P(bad config) × £ cost of a stoppage.</li><li>Because Mentix gave no failure numbers, the map <strong>does not invent them</strong> — it names the two to get (historical bad-config rate; £/hr of a line stoppage) and tags the line <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>States the map is <strong>NOT READY</strong>: a plausible stoppage tail (e.g. even a 2% chance of a multi-hour stoppage) can dwarf £165, so the total cannot be trusted until that line is sourced.</li><li>Keeps touch (£165, weak) and failure (unpriced, dominant-suspect) as separate lines; does not fold or hide either.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts £165 as the full cost with no failure line; fabricates a stoppage probability or cost; or returns READY while the dominant-suspect line is an unpriced tail.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Azraq: confident aggregate, no per-step source → NOT READY",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Honestly the whole risk-report process takes about two weeks and costs us a fortune — just map it and give me the number.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Refuses to emit a per-unit total from an aggregate opinion (ladder 0.1).</li><li>Separates elapsed from touch: &quot;two weeks&quot; is elapsed time and may be mostly idle waiting — it is not a labour cost, and cannot be priced as one.</li><li>Names &quot;a fortune&quot; as a non-number that cannot be totalled here or floored downstream in <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>.</li><li>Decomposes into candidate steps (log pull, drafting, review, formatting) as a <em>scaffold to source</em>, not as invented prices — every candidate cost cell reads UNSOURCED, no £ figures filled in.</li><li>Returns <strong>NOT READY</strong> with the single cheapest artefact to unblock: pull the timesheet for one report, or time one report end to end.</li><li>Invents zero step-level numbers.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Produces a per-unit total or a fully-priced ledger from the &quot;two weeks / a fortune&quot; input; invents step minutes, rates, or costs; or treats &quot;a fortune&quot; as a usable figure.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/golden/05.md"
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
     "html": "<p>&quot;How is this done today? We do reports.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>The skill cannot price a step without (a) one discrete unit and (b) at least one artefact that prices any step. It must ask the <strong>one question that unblocks the map</strong> and stop.</p>\n<ul><li>Must ask: what is one unit (one report of what?), and can you point to one artefact that prices a step — a timesheet, an invoice, or one timed run?</li><li>Must NOT invent steps, minutes, rates, handoffs, or a total.</li><li>Must NOT return a ledger or a per-unit number from the one-liner.</li><li>May offer the smallest honest next step: name the unit, then pull one timesheet week or time one report.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: names the missing inputs (one unit + one priced artefact), points to the cheapest way to get them, fabricates no numbers. FAIL: produces a priced ledger, a total, or any specific step figure from the one-liner.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Map the workflow: first the AI ingests the data, then it drafts the report, then a human approves it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is the <strong>to-be / solution</strong> workflow — the product the fellow has not built yet — not the as-is practice. The skill must refuse the framing and re-anchor on how the work happens <strong>today, by hand, without the product</strong>.</p>\n<ul><li>Must name the trap: pricing the steps of your own proposed solution proves nothing about the current prize. A to-be map has no current cost to remove; it measures a product that does not exist.</li><li>Must reframe to the as-is: how is the report produced today — who pulls the data, who drafts, who reviews, and what does each step cost right now?</li><li>Must ask for the current, pre-product practice and its sources before pricing anything.</li><li>Must NOT price the AI-ingest / AI-draft steps as if they were the current state.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects the to-be steps as the map, names the trap, and re-anchors on today's manual practice and its costs — without accepting the solution framing. FAIL: dutifully prices &quot;AI ingests → AI drafts → human approves&quot; as the current-state workflow, or accepts the future map as the as-is.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;OK, the current cost is £960 a report. Is that a big enough gap to build? What should it actually cost?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;What should it cost&quot; and &quot;is the gap big enough&quot; are the theoretical-floor and gap-verdict questions. That is <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, not this skill. It must decline and hand off — it does not poach.</p>\n<ul><li>Must state that current-state-map prices what the work costs <strong>today</strong> and stops; it does not compute a floor or a gap ratio.</li><li>Must name <strong><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></strong> as the right skill, and note that this map already produced the £960 current-cost side it divides against.</li><li>Must NOT compute a floor, a gap ratio, or a build/walk verdict.</li><li>May offer to itemise the £960 into its priced steps if that has not been done, since the floor skill will want the automatable-vs-judgment split.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the floor/gap question, names <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, computes no floor or gap, and stays inside its scope. FAIL: produces a theoretical floor, a gap ratio, or a build/walk verdict; answers the sibling's question instead of handing off.</p>"
     }
    ],
    "other": [],
    "file": "skills/current-state-map/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/current-state-map/SKILL.md",
  "template": "skills/current-state-map/template.md",
  "example": "skills/current-state-map/examples/sample.md",
  "rubric": "skills/current-state-map/tests/rubric.json",
  "results": "skills/current-state-map/tests/RESULTS.md"
 }
});
