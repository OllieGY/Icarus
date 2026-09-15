window.ICARUS_SKILL("value-based-pricing", {
 "name": "value-based-pricing",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a validated product and returns one price on one metric, both defended. It forces the price to sit between two measured walls: a floor (your cost per outcome) and a ceiling (the incremental value the customer measures). The price is set at 10–20% of that incremental value — the band where the buyer keeps a 5–10× return and still feels the win — and it is charged on the outcome, asset, or decision the customer receives, not on seats, tiers, or usage. The output is a filled <code>template.md</code>: the measured value anchor with its evidence-ladder score, the incremental-over-status-quo calculation, the cost floor, the chosen metric with its coupling defended, the capture rate with its band position argued, and a single price statement a customer would see on an invoice. If the value is not measured, the skill does not produce a price. It names the gap and routes to where the value gets measured.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic pricing advice knows the &quot;charge a fraction of value&quot; rule and stops there. Two things make this different, and both are refusals. First: you cannot price value you have not measured — a willingness-to-pay survey is opinion (0.1 on the ladder), a competitor's number is their guess inherited as yours, and cost-plus caps your price at your own cost structure and falls exactly when your costs fall. The value anchor must clear behaviour (0.7) or money (1.0), or there is no value-based price to set. Second: price the METRIC, not the LEVEL. A seat or a tier is a proxy that decouples from value — as the product improves and one seat delivers the work of five, per-seat pricing caps your revenue while the value explodes, and it has told the customer they bought a tool per person, not an outcome. The metric must be the outcome unit itself, chosen so revenue tracks value as the flywheel makes the product better.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has a validated product (a passed wedge, a working v1, or a pilot about to be priced) and needs the number and the charging axis set, and has — or can quickly get — a measured value figure. Trigger phrases: &quot;how should we price this&quot;, &quot;what do we charge&quot;, &quot;per seat or per outcome&quot;, &quot;set the price&quot;, &quot;what's the number&quot;, &quot;are we charging on the right thing&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Brainstorm 3–5 revenue models and test which one to bet on&quot;</td><td><code>monetization-strategy</code> (concept) — exploratory, tests willingness to pay across models. This skill does the opposite: it commits to ONE value-anchored number on ONE metric.</td></tr><tr><td>&quot;Structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07). This skill produces the price (its term 2) and the charging metric (its term 6 basis); it does not structure the six-term deal.</td></tr><tr><td>&quot;How is this done today / what does the status quo cost / what is it worth&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (section 01) prices the status quo — the value denominator this skill consumes. If the value is not measured yet, route there first.</td></tr><tr><td>&quot;What does one outcome cost us to produce&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) produces cost_per_outcome — the floor this skill checks the price against.</td></tr></tbody></table></div>\n<p>Also do not use it to invent a price when there is no measured value. A price with a value anchor scoring ≤ 0.3 on the ladder is not a value-based price; say so and route the fellow to measure the value before returning here (see Method step 1).</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Five parts, then a kill-line check. The spine is one inequality:</p>\n<blockquote><p>cost_per_outcome  <strong>&lt;</strong>  PRICE = capture_rate × incremental_value_per_outcome  <strong>&lt;</strong>  incremental_value_per_outcome with capture_rate ∈ [10%, 20%], value measured at ≥ 0.7 on the ladder, charged on the outcome / asset / decision metric.</p></blockquote>\n<h3 id=\"step-1-measure-the-value-or-stop-part-1\">Step 1 — Measure the value, or stop (Part 1)</h3>\n<p>Name the value of one outcome to the customer and score how it is known:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>How the value is known</th><th>Ladder</th><th>Backs a price?</th></tr></thead><tbody><tr><td>A loss the customer already paid, or an invoice they already pay to solve this</td><td>money moved 1.0</td><td>Yes — strongest</td></tr><tr><td>A concierge/probe run that measured the outcome delivered; a <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> that priced the status quo</td><td>behaviour 0.7</td><td>Yes</td></tr><tr><td>A report or artefact showing the cost of the problem</td><td>artefact 0.5</td><td>Weak — corroborate, do not price on it alone</td></tr><tr><td>&quot;This would save us about $X&quot; said in an interview</td><td>verbal 0.3</td><td>No</td></tr><tr><td>A willingness-to-pay survey (&quot;would you pay $Y?&quot;)</td><td>opinion 0.1</td><td>No — the classic pricing trap</td></tr></tbody></table></div>\n<p>If the best anchor is ≤ 0.3, stop. There is no value-based price to set. Name what is missing and route to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> or a concierge probe to measure it. Do not average a 1.0 penalty with a 0.1 survey; the anchor is only as strong as its weakest load-bearing number.</p>\n<h3 id=\"step-2-take-the-delta-over-the-status-quo-part-2\">Step 2 — Take the delta over the status quo (Part 2)</h3>\n<p>Price the value you <em>add</em>, not the gross outcome. If the status quo already prevents some of the loss, charging 15% of the full figure bills the customer for value they already had.</p>\n<blockquote><p>incremental_value_per_outcome = value_you_deliver − value_the_status_quo_already_captures</p></blockquote>\n<p>Both terms measured. The status-quo figure comes from <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>. If you cannot state what the status quo already captures, you cannot state the incremental value — go get it.</p>\n<h3 id=\"step-3-set-the-floor-part-3\">Step 3 — Set the floor (Part 3)</h3>\n<p>Pull cost_per_outcome from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (or estimate it: model + infra × attempts, human review, remediation). The price must clear this floor with margin, or the wedge is not economic regardless of value. State margin = PRICE ÷ cost_per_outcome.</p>\n<h3 id=\"step-4-choose-the-metric-not-the-level-part-4\">Step 4 — Choose the metric, not the level (Part 4)</h3>\n<p>Score candidate metrics; pick the highest-coupling one with feasible attribution. Name the leakage of whatever you pick.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Coupling to value</th><th>Attribution</th><th>Improvement-proof?</th><th>Verdict</th></tr></thead><tbody><tr><td>Per-outcome (incident avoided, decision made)</td><td>tight</td><td>needs clean attribution</td><td>yes — more outcomes → more revenue</td><td>first choice if attributable</td></tr><tr><td>Per-asset / per-decision (per machine, per site, per permit, per report)</td><td>medium</td><td>countable, both sides see it</td><td>partial</td><td>use when outcome is not cleanly attributable; name the leakage</td></tr><tr><td>Per-usage (runs, calls, tokens)</td><td>loose</td><td>easy</td><td>no — drifts to cost-plus, races model prices</td><td>avoid as primary basis</td></tr><tr><td>Per-seat / per-tier (the LEVEL)</td><td>decoupled / inverse</td><td>easy</td><td>no — caps revenue as product improves</td><td>banned as primary basis unless value genuinely scales with headcount</td></tr></tbody></table></div>\n<p>The improvement-proof column is the tie-breaker: the <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> makes the product deliver more outcomes per asset over time; only an outcome-coupled metric captures that. When per-outcome fails attribution, proxy on the ASSET the outcome attaches to — never on raw usage — and state exactly what coupling you lost.</p>\n<h3 id=\"step-5-set-the-capture-rate-and-write-the-price-part-5\">Step 5 — Set the capture rate and write the price (Part 5)</h3>\n<p>Capture is 10–20% of incremental value. Position within the band from evidence, not feel:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Lean 10% (buyer keeps ~10×) when</th><th>Lean 20% (buyer keeps ~5×) when</th></tr></thead><tbody><tr><td>attribution is contested / outcome is probabilistic</td><td>attribution is clean and undisputed</td></tr><tr><td>buyer is budget-constrained; land-and-expand</td><td>you are the only path to the outcome (no substitute)</td></tr><tr><td>early, unproven, few reference outcomes</td><td>high switching cost; large, lumpy value</td></tr></tbody></table></div>\n<p>The band <em>is</em> the buyer-return band: 10% capture ⇒ buyer keeps 10×; 20% ⇒ 5×. Below 10% you underprice and may not clear the floor; above 20% the buyer's retained win drops under 5× and stops justifying the switch. Then write the price as one line: <strong>number + metric + what the customer sees on the invoice</strong>, and run the three sanity checks.</p>\n<p><strong>Kill line.</strong> Auto-fail the output if the price is cost-plus or competitor-anchored; if it is charged on the level (seats/tiers) rather than an outcome/asset/decision metric; or if the value anchor scores ≤ 0.3 (a price with no measured value behind it). A value-priced model exists only when a ≥ 0.7 value anchor, a status-quo delta, a cleared cost floor, and an outcome-coupled metric are all present.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>This skill enforces the ladder on the <em>value denominator</em>, which is where pricing usually cheats. The price can be as precise as you like; if the value under it is a survey or a competitor glance, the whole model is 0.1. The bar: the value anchor must clear 0.7. The strongest anchor is a loss the customer already paid (1.0) because it proves both the number and the willingness — they have spent money on this problem before. Tag every figure <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A price whose value case is <code>[Assumption]</code> is a hypothesis to test in a paid pilot, not a price to publish — carry it to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> and let the pilot move it up the ladder.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>The willingness-to-pay survey dressed as data. &quot;We asked 20 prospects and they'd pay about $500/month.&quot; Stated WTP is opinion (0.1) — hypothetical, anchored to whatever number you said first, and it is a <em>level</em> ($/month) not a metric. It cannot back a value price. Measure what one outcome is worth instead.</p>\n<p>Charging gross when the status quo already captures value. Pricing 15% of a full $8,000 avoided stop when the plant's manual process already prevents half of them bills the customer for value you did not create, and the buyer's own numbers will expose it at renewal. Price the delta over status quo (Step 2), not the headline figure.</p>\n<p>Per-seat because &quot;that's how SaaS is sold.&quot; The most common decoupling trap, and it is wrong on the <em>axis</em>, not just the number: it is simultaneously overpriced for a one-facility buyer and underpriced for a ten-facility one, because seats have nothing to do with the outcome. As the agent improves and does five analysts' work from one seat, per-seat caps your revenue at one seat while you deliver five. Price the outcome.</p>\n<p>The unattributable outcome quietly downgraded to usage. When per-outcome attribution is hard, the lazy move is per-API-call — which is cost-plus in disguise and pins your price to a falling model-price curve. If you must proxy, proxy on the ASSET the outcome attaches to (per machine, per site, per permit) and name the coupling you gave up; do not retreat to raw usage.</p>\n<p>The priceless outcome. When one outcome is a prevented fatality or an unbounded loss, you cannot capture 10–20% of it — the percentage is meaningless and taking it is grotesque. Anchor instead on a <em>bounded, money-backed proxy</em> the customer already pays: the regulatory fine avoided, the insurance-premium delta, the documented downtime cost. Price a percentage of the bounded proxy, never of the incident.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full value-priced model for Azraq (data-centre risk), built from a real $220k SLA-breach penalty the design partner paid (money 1.0). Includes the fellow's first draft — a competitor-anchored per-seat price — and the correction that shows per-seat was wrong on the axis, not just the number. Figures are illustrative test fixtures.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><code>monetization-strategy</code> (concept) — the skill this one absorbs and reframes. It brainstorms 3–5 revenue models and tests willingness to pay to decide which to bet on; this skill takes the chosen model and commits ONE value-anchored number on ONE metric. Send a fellow there when the model itself is still open; use this when it is time to set the number.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07) — consumes this skill's output: the price becomes term 2 and the metric becomes the term 6 conversion basis. That skill structures the whole deal (scope, data-rights, success metrics, kill criteria); this one only sets what to charge and on what. Route there to write the deal.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (section 01) — prices the status quo, which is both the value denominator (Step 1) and the delta subtrahend (Step 2). If the value is not measured, this skill routes there first.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) — produces cost_per_outcome, the price floor this skill checks against (Step 3).</p>\n<p>Supersedes: none. This is a new skill; there is no prior value-pricing skill in the pack to beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Value-priced model — v1</h1>\n<p>Fill every part. A model ships only with a value anchor scoring ≥ 0.7 on the ladder, a status-quo delta, a cleared cost floor, and an outcome-coupled metric. Anything less is not a value price; name the gap and route it.</p>\n<p>The spine:</p>\n<blockquote><p>cost_per_outcome  <strong>&lt;</strong>  PRICE = capture_rate × incremental_value_per_outcome  <strong>&lt;</strong>  incremental_value_per_outcome capture_rate ∈ [10%, 20%]  ·  value measured at ≥ 0.7  ·  charged on the outcome / asset / decision metric</p></blockquote>\n<hr>\n<h2>Part 1 — The measured value anchor</h2>\n<p><strong>One outcome, defined:</strong> <em>[what is the single outcome the customer gets — one avoided X, one Y decided]</em></p>\n<p><strong>What that outcome is worth to the customer:</strong> <em>[$ figure]</em></p>\n<p><strong>How the value is known</strong> (score it):</p>\n<div class=\"table-wrap\"><table><thead><tr><th>The anchor</th><th>Ladder score</th><th>Source tag</th></tr></thead><tbody><tr><td><em>[e.g. &quot;operator paid a $220k SLA penalty for a 4-hr outage&quot;]</em></td><td><em>[1.0 / 0.7 / 0.5 / 0.3 / 0.1]</em></td><td><em>[Fact / Assumption / Hypothesis]</em></td></tr></tbody></table></div>\n<p><strong>Gate:</strong> anchor score ≥ 0.7? <em>[Yes → continue / No → STOP]</em> If No: there is no value-based price. State what is missing and route to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (price the status quo) or a concierge probe (measure the outcome). Do not invent a number.</p>\n<hr>\n<h2>Part 2 — Incremental value over the status quo</h2>\n<blockquote><p>incremental_value_per_outcome = value_you_deliver − value_the_status_quo_already_captures</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>value_you_deliver (per outcome)</td><td><em>[$]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td>value the status quo already captures</td><td><em>[$ — from <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td><strong>incremental_value_per_outcome</strong></td><td><strong><em>[$]</em></strong></td><td></td></tr></tbody></table></div>\n<p>If you cannot state what the status quo already captures, you cannot state the delta. Go measure it; do not set it to zero for convenience or to the gross for ambition.</p>\n<hr>\n<h2>Part 3 — The cost floor</h2>\n<p>Pull from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, or estimate.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>cost_per_outcome</td><td><em>[$ to the cent — from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>]</em></td><td><em>[Fact/Assumption]</em></td></tr></tbody></table></div>\n<p><strong>Floor check:</strong> PRICE will be set in Part 5; it must clear this. Stated margin = PRICE ÷ cost_per_outcome = <em>[fill after Part 5]</em>. If &lt; ~2×, the wedge is thin on cost — flag it.</p>\n<hr>\n<h2>Part 4 — The metric (charge on the outcome, not the level)</h2>\n<p>Score candidates; pick the highest-coupling one with feasible attribution.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Candidate metric</th><th>Coupling</th><th>Attribution</th><th>Improvement-proof?</th><th>Keep / reject + why</th></tr></thead><tbody><tr><td>Per-outcome: <em>[unit]</em></td><td>tight</td><td><em>[clean / contested]</em></td><td>yes</td><td><em>[…]</em></td></tr><tr><td>Per-asset / decision: <em>[unit]</em></td><td>medium</td><td>countable</td><td>partial</td><td><em>[…]</em></td></tr><tr><td>Per-usage: <em>[unit]</em></td><td>loose</td><td>easy</td><td>no</td><td><em>[reject — cost-plus drift]</em></td></tr><tr><td>Per-seat / tier</td><td>decoupled</td><td>easy</td><td>no</td><td><em>[reject — decoupled from value]</em></td></tr></tbody></table></div>\n<p><strong>Chosen metric:</strong> <em>[the unit the customer is billed on]</em> <strong>Leakage named:</strong> <em>[what this metric fails to capture — e.g. &quot;customer pays in clean months too&quot;]</em></p>\n<p>Auto-fail if the chosen metric is a seat or a tier while the value is per-outcome.</p>\n<hr>\n<h2>Part 5 — Capture rate and the price statement</h2>\n<p><strong>Incremental value (from Part 2):</strong> <em>[$ per outcome]</em></p>\n<p><strong>Outcome frequency per charging-metric unit</strong> <em>(only when Part 4's metric is per-asset / per-period, not per-outcome)</em>: <em>[outcomes per asset per period — e.g. &quot;≈1 breach / facility / year&quot;, &quot;≈30 stockouts / store / month&quot;]</em> — <em>[Fact / Assumption]</em></p>\n<blockquote><p>Convert: value_per_charging_unit = incremental_value_per_outcome × this frequency. The band and PRICE below use the converted per-unit value. If the metric IS per-outcome, frequency = 1. If you cannot state the frequency, the per-asset price is eyeballed, not derived — flag it owed; do not guess the invoice line.</p></blockquote>\n<p><strong>Band position:</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Pull toward 10% (buyer keeps ~10×)</th><th>Pull toward 20% (buyer keeps ~5×)</th><th>This case</th></tr></thead><tbody><tr><td>contested attribution, probabilistic outcome, budget-constrained, early</td><td>clean attribution, no substitute, high switching cost, large value</td><td>_[chosen capture_rate + the reason]_</td></tr></tbody></table></div>\n<p><strong>capture_rate:</strong> <em>[10–20%]</em> — <em>[one-line reason from the row above]</em></p>\n<blockquote><p><strong>PRICE = capture_rate × incremental_value = <em>[$ on the chosen metric]</em></strong></p></blockquote>\n<p><strong>The invoice line the customer sees:</strong> <em>[e.g. &quot;$20,000 per facility per year&quot;]</em></p>\n<p><strong>Three sanity checks:</strong></p>\n<ul><li class=\"task\"><span class=\"box\"></span>PRICE &gt; cost_per_outcome — margin = <em>[×]</em></li><li class=\"task\"><span class=\"box\"></span>Buyer retained multiple = incremental_value ÷ PRICE = <em>[×]</em> (in the 5–10× band)</li><li class=\"task\"><span class=\"box\"></span>Metric stays coupled as the product improves (revenue rises when value rises)</li></ul>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Value anchor scores ≥ 0.7 (not a WTP survey, not a competitor glance)</li><li class=\"task\"><span class=\"box\"></span>Price is a % of measured incremental value — not cost-plus, not competitor-anchored</li><li class=\"task\"><span class=\"box\"></span>Charged on an outcome / asset / decision metric — not seats or tiers</li><li class=\"task\"><span class=\"box\"></span>Cost floor cleared; buyer keeps 5–10×; metric improvement-proof</li></ul>\n<p>Any box unchecked = not a value-priced model. State exactly which, and the smallest next step to fill it. If the value anchor is the gap, the next step is to measure it — do not publish a price on top of a guess.</p>",
  "path": "skills/value-based-pricing/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq value-priced model (per-facility data-centre risk position)</h1>\n<p>Azraq sells data-centre risk analysis: a monthly risk position per facility that flags the single failure most likely to breach the operator's SLA this month. This is a test fixture — figures are illustrative, tagged <code>[Fact]</code> only where a probe or a paid invoice produced them.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;The wedge passed and the pilot's about to convert. How do we price it? I was thinking $2,000/month per seat — a competitor charges about that, and three ops seats gets us to $72k/year, which feels like a normal enterprise number.&quot;</p>\n<p>Artefacts on the table:</p>\n<ul><li>The lead design partner (a tier-III operator) <strong>paid a $220,000 SLA-breach penalty</strong> for a 4-hour outage 14 months ago — the invoice is in the data room. <span class=\"tag tag-fact\">Fact</span></li><li>That operator had <strong>2 SLA-breaching outages in 24 months</strong> on the pilot facility. <span class=\"tag tag-fact\">Fact</span></li><li>Their status quo: a <strong>quarterly third-party audit (~$40k/yr)</strong> plus internal ops review; on replay, this manual process would have caught roughly <strong>1 in 3</strong> of the breach-causing failure signatures. <span class=\"tag tag-assumption\">Assumption</span></li><li>Azraq's continuous monitor caught <strong>~9 in 10</strong> of those signatures on the concierge replay of the two real outages plus 18 near-miss months. [Fact — replay; the recall rate is <span class=\"tag tag-assumption\">Assumption</span> on a small n]</li></ul>\n<hr>\n<h2>First, why the fellow's draft fails</h2>\n<p>$2,000/month per seat × 3 seats = $72k/year. Three separate kill-line hits:</p>\n<ol><li><strong>Competitor-anchored + &quot;feels normal.&quot;</strong> The competitor's $2k is their guess; &quot;normal enterprise number&quot; is opinion (0.1). Neither is a measured value. The price rests on nothing.</li><li><strong>Per-seat is the LEVEL, not the metric.</strong> How many ops people log in has no relationship to whether a breach is prevented. The value is per-facility-at-risk, not per-user.</li><li><strong>Wrong on the axis, both directions.</strong> For this one-facility partner, $72k <em>overcharges</em> relative to the value Azraq adds; for a ten-facility operator, a flat three-seat $72k would <em>undercharge</em> by an order of magnitude. Seats decouple the price from value, so the same number is simultaneously too high and too low.</li></ol>\n<p>The fix is not a better seat price. It is a different axis, anchored on the paid penalty.</p>\n<hr>\n<h2>Part 1 — The measured value anchor</h2>\n<p><strong>One outcome:</strong> one prevented SLA-breaching outage on a facility.</p>\n<p><strong>What it is worth:</strong> <strong>$220,000</strong> — the penalty the operator actually paid for exactly this failure. <span class=\"tag tag-fact\">Fact</span></p>\n<div class=\"table-wrap\"><table><thead><tr><th>The anchor</th><th>Ladder score</th><th>Source</th></tr></thead><tbody><tr><td>Operator paid a $220k SLA penalty for a 4-hr breach (invoice in data room)</td><td><strong>1.0 — money moved</strong></td><td><span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<p><strong>Gate:</strong> anchor ≥ 0.7? <strong>Yes.</strong> This is the strongest possible anchor: a loss the customer already paid proves both the size of the value and that they will spend real money to avoid it. No survey needed.</p>\n<hr>\n<h2>Part 2 — Incremental value over the status quo</h2>\n<p>Do not price 100% of the $220k — the quarterly audit already prevents some breaches. Price the delta Azraq adds.</p>\n<p>Base rate: ~1 breach-causing failure per year on this facility (2 in 24 months). <span class=\"tag tag-fact\">Fact</span></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>Breaches Azraq would prevent per year (recall 0.9 × 1.0/yr)</td><td>0.90 avoided/yr</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>Breaches the status quo already prevents (recall ~0.33 × 1.0/yr)</td><td>0.33 avoided/yr</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td><strong>Incremental breaches avoided per year</strong></td><td><strong>0.57/yr</strong></td><td></td></tr><tr><td><strong>incremental_value_per_year_per_facility</strong> = 0.57 × $220k</td><td><strong>≈ $125,000/facility/yr</strong></td><td>anchor <span class=\"tag tag-fact\">Fact</span>, rate <span class=\"tag tag-assumption\">Assumption</span></td></tr></tbody></table></div>\n<p>The $125k, not the $220k, is the denominator. Charging on the gross would bill the operator for the third of breaches their own audit already catches.</p>\n<hr>\n<h2>Part 3 — The cost floor</h2>\n<p>Azraq's cost to produce a monthly risk position for one facility (estimate, pending <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>):</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>Model + data ingest, per facility-month</td><td>$60</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>Analyst review, 1 hr/month × $80 loaded</td><td>$80</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td><strong>cost_per_outcome (per facility-year)</strong></td><td><strong>≈ $1,700/yr</strong></td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr></tbody></table></div>\n<p>Any value price will clear this by a wide margin; cost is not the binding constraint here (as it should be for a value product).</p>\n<hr>\n<h2>Part 4 — The metric</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Candidate</th><th>Coupling</th><th>Attribution</th><th>Improvement-proof?</th><th>Verdict</th></tr></thead><tbody><tr><td>Per-avoided-breach (outcome)</td><td>tight</td><td><strong>contested</strong> — cannot prove a breach that did not happen</td><td>yes</td><td>reject as billing basis: unbillable, would trigger disputes every renewal</td></tr><tr><td><strong>Per-facility per-year (asset)</strong></td><td>medium</td><td>countable, both sides see the facility list</td><td>partial</td><td><strong>choose</strong> — the facility is the thing risk attaches to</td></tr><tr><td>Per-report / per-query (usage)</td><td>loose</td><td>easy</td><td>no</td><td>reject — cost-plus drift, races nobody</td></tr><tr><td>Per-seat</td><td>decoupled</td><td>easy</td><td>no</td><td>reject — the draft's error</td></tr></tbody></table></div>\n<p><strong>Chosen metric:</strong> per facility, per year (subscription on the asset the outcome attaches to). <strong>Leakage named:</strong> the operator pays for a facility even in a year with no breach. That is the price of a countable, non-disputable metric — accepted, because per-avoided-breach is unbillable. The risk positions and the breach log are shared, so at renewal Azraq shows flagged-vs-occurred and the value is provable, not asserted.</p>\n<hr>\n<h2>Part 5 — Capture rate and price</h2>\n<p>Incremental value = <strong>$125,000/facility/yr</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Pull to 10%</th><th>Pull to 20%</th><th>This case</th></tr></thead><tbody><tr><td>contested attribution, probabilistic</td><td>clean attribution, no substitute, high switching cost</td><td>Azraq is the only continuous monitor (no substitute) and the anchor is a <em>paid</em> penalty (money 1.0) → <strong>pull high, ~16%</strong>. Held just under 20% because breach avoidance is still probabilistic.</td></tr></tbody></table></div>\n<p><strong>capture_rate = 16%.</strong></p>\n<blockquote><p><strong>PRICE = 0.16 × $125,000 ≈ $20,000 per facility per year.</strong></p></blockquote>\n<p><strong>Invoice line:</strong> <strong>$20,000 per facility, per year.</strong></p>\n<p><strong>Sanity checks:</strong></p>\n<ul><li class=\"task\"><span class=\"box done\"></span>PRICE $20,000 &gt; cost floor $1,700 → margin ≈ <strong>12×</strong>.</li><li class=\"task\"><span class=\"box done\"></span>Buyer retained multiple = $125,000 ÷ $20,000 = <strong>6.25×</strong> (in the 5–10× band).</li><li class=\"task\"><span class=\"box done\"></span>Improvement-proof: as recall climbs toward 1.0 via the flywheel, incremental breaches avoided rise, and per-facility pricing lets Azraq re-anchor upward at renewal on the shared breach log. A per-seat price would have captured none of that.</li></ul>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Anchor scores 1.0 (paid penalty), not a WTP survey or competitor glance</li><li class=\"task\"><span class=\"box done\"></span>Price is 16% of measured incremental value — not cost-plus, not competitor-anchored</li><li class=\"task\"><span class=\"box done\"></span>Charged per-facility (asset the outcome attaches to) — not per-seat</li><li class=\"task\"><span class=\"box done\"></span>Cost floor cleared 12×; buyer keeps 6.25×; metric improvement-proof</li></ul>\n<p>Model ships. Carry $20,000/facility/yr into <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> as term 2's price and the per-facility basis as term 6's conversion metric.</p>\n<h2>The lesson this enforces</h2>\n<p>The seat price was not a rounding error; it was the wrong axis. Anchored on the $220k the operator had already paid, netted to the $125k Azraq actually adds, and charged on the facility rather than the login, the price comes out at $20k for one facility — and scales to $200k for a ten-facility operator, exactly tracking the value. The draft's $72k flat-seat number could never do both. That is the whole point of pricing the metric, not the level.</p>",
  "path": "skills/value-based-pricing/examples/sample.md"
 },
 "rubric": {
  "skill": "value-based-pricing",
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
    "How should we price this?",
    "What do we charge, and on what?",
    "Should we price per seat or per outcome?",
    "Set the price for the pilot conversion.",
    "Are we charging on the right thing / the right metric?"
   ],
   "mustNotFire": [
    {
     "phrase": "Brainstorm 3–5 revenue models and test which one to bet on",
     "sibling": "monetization-strategy",
     "local": false
    },
    {
     "phrase": "Structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "How is this done today / what does the status quo cost us",
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
    "evidenceHtml": "<p>All 5 must-fire phrasings are literal or near-literal matches to the <code>Fires on</code> list (&quot;how should we price this&quot;, &quot;what do we charge&quot;, &quot;per seat or per outcome&quot;, &quot;set the price&quot;); #5 (right metric) covered by the charging-metric thesis. All 3 must-not are explicitly excluded in the description with the sibling named (monetization-strategy, pilot-six-term-sheet, current-state-map).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>see per-case table below</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → asks the ONE question (what is one outcome worth + how known), invents nothing. 02 tiers-in-disguise → refuses, names tier as a LEVEL not a value, reframes to outcome/metric, emits no tier numbers. 03 structure-the-deal → declines, names <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, draws the term-2/term-6 boundary, does not draft the other five terms.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code></p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could not come from a generic PM prompt: evidence ladder (money 1.0 / behaviour 0.7 / opinion 0.1), refusal to price a WTP survey, &quot;price the metric not the level,&quot; delta-over-status-quo ($125k not gross $220k), &quot;wrong on the axis both directions,&quot; improvement-proof column tied to the flywheel. Reframe is load-bearing, not decoration. Guidance is properly tabular (ladder, metric-scoring, band-position, template) — no table-as-prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>requires 5+ real fellow uses; not executable here</p>"
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
     "label": "01 Azraq (seed) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — rejects per-seat draft on 3 grounds; $220k paid penalty @1.0; delta $125k not gross; per-facility metric; 16% → $20k/facility/yr; retained 6.25×. Matches examples/sample.md. No auto-fail.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS — $8k @ behaviour 0.7 (path to 1.0 named); delta 0.85−0.20=0.65; per-avoided-stop dropped for contested attribution → per-line asset; floor $3.55 non-binding; capture in band; retained in band. Artifact 4: final per-line $ needs an unstated stop-frequency per line-period, so the number is parametric/flagged rather than hard.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier (priceless) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — refuses to take a % of a life; re-anchors on bounded money-backed proxies ($1.2M fine, $300k/day, $180k/yr premium delta); prices % of proxy; per-site/per-permit metric; names safety = diligence floor not capture lever. No auto-fail.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian (mundane) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS — rejects \"$50, mark up costs\" as banned cost-plus by name; runs full method at small stakes; $120 @[Assumption] on a 0.7 concierge recall lift; per-store asset (per-seat rejected as planner-count irrelevant); capture 10–20% lands well above $50. Artifact 4: hard per-store $ needs the digest's measured recall (a placeholder in the input) → parametric/flagged.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 Refusal 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — correctly STOPS: WTP survey 0.1 + competitor list 0.1, neither clears 0.7; names all three violations (no measured value, per-seat = level, competitor-anchored = banned); routes to current-state-map / concierge; fabricates no number. The refusal IS the correct artifact here.",
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
  "gotchasSurfaced": "<ul><li><strong>Missing conversion factor between the outcome unit and a per-asset metric.</strong> When Part 2 measures <code>incremental_value_per_outcome</code> but Part 4 charges on a per-asset/per-period metric (per-line-month, per-store-week), Part 5 silently needs the <em>outcome frequency per asset-period</em> to convert value into a price. The template has no slot for it. The Azraq example hides this because base rate ≈ 1 breach/facility/yr (per-outcome ≈ per-facility-year). Mentix (many shifts) and Durian (~30 stockouts/store/month) cannot produce a hard invoice line without it. Recommend adding an explicit &quot;outcome frequency per asset-period [Fact/Assumption]&quot; line to Part 4/5 so the per-asset price is derived, not eyeballed.</li><li><strong>Routing targets not yet in the pack.</strong> The skill routes to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, <code>monetization-strategy</code>, <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> — none of these currently exist under <code>product-icarus/</code> (only <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> does). Routing logic is correct, but a fellow following the routes today hits dangling references. Not a skill defect; a pack-sequencing note for the orchestrator.</li><li><strong>Premium-reduction proxy ladder score (golden 03).</strong> A written insurance-premium <em>reduction</em> is a forward commitment, not a paid loss — cleanest scored 0.7–1.0 but should be tagged as a quoted commitment, not conflated with a 1.0 already-paid loss. Worth a one-line clarification in the &quot;priceless outcome&quot; gotcha.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a Part 5 outcome-frequency-per-asset-period conversion slot so a per-asset/period price is derived from the per-outcome value, not eyeballed.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — value-based-pricing</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;How should we price this?&quot;</li><li>&quot;What do we charge, and on what?&quot;</li><li>&quot;Should we price per seat or per outcome?&quot;</li><li>&quot;Set the price for the pilot conversion.&quot;</li><li>&quot;Are we charging on the right thing / the right metric?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Brainstorm 3–5 revenue models and test which one to bet on&quot; → belongs to <code>monetization-strategy</code></li><li>&quot;Structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></li><li>&quot;How is this done today / what does the status quo cost us&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<p>Judge did NOT author this skill. Gates run by applying the Method to each input and scoring the produced artifact.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings are literal or near-literal matches to the <code>Fires on</code> list (&quot;how should we price this&quot;, &quot;what do we charge&quot;, &quot;per seat or per outcome&quot;, &quot;set the price&quot;); #5 (right metric) covered by the charging-metric thesis. All 3 must-not are explicitly excluded in the description with the sibling named (monetization-strategy, pilot-six-term-sheet, current-state-map).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>see per-case table below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the ONE question (what is one outcome worth + how known), invents nothing. 02 tiers-in-disguise → refuses, names tier as a LEVEL not a value, reframes to outcome/metric, emits no tier numbers. 03 structure-the-deal → declines, names <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, draws the term-2/term-6 boundary, does not draft the other five terms.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code></td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could not come from a generic PM prompt: evidence ladder (money 1.0 / behaviour 0.7 / opinion 0.1), refusal to price a WTP survey, &quot;price the metric not the level,&quot; delta-over-status-quo ($125k not gross $220k), &quot;wrong on the axis both directions,&quot; improvement-proof column tied to the flywheel. Reframe is load-bearing, not decoration. Guidance is properly tabular (ladder, metric-scoring, band-position, template) — no table-as-prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses; not executable here</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (method / artifact / edge / challenge / evidence → total /25; pass ≥21 &amp; no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>edge</th><th>challenge</th><th>evidence</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Azraq (seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — rejects per-seat draft on 3 grounds; $220k paid penalty @1.0; delta $125k not gross; per-facility metric; 16% → $20k/facility/yr; retained 6.25×. Matches examples/sample.md. No auto-fail.</td></tr><tr><td>02 Mentix</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS — $8k @ behaviour 0.7 (path to 1.0 named); delta 0.85−0.20=0.65; per-avoided-stop dropped for contested attribution → per-line asset; floor $3.55 non-binding; capture in band; retained in band. Artifact 4: final per-line $ needs an unstated stop-frequency per line-period, so the number is parametric/flagged rather than hard.</td></tr><tr><td>03 Barrier (priceless)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — refuses to take a % of a life; re-anchors on bounded money-backed proxies ($1.2M fine, $300k/day, $180k/yr premium delta); prices % of proxy; per-site/per-permit metric; names safety = diligence floor not capture lever. No auto-fail.</td></tr><tr><td>04 Durian (mundane)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS — rejects &quot;$50, mark up costs&quot; as banned cost-plus by name; runs full method at small stakes; $120 @<span class=\"tag tag-assumption\">Assumption</span> on a 0.7 concierge recall lift; per-store asset (per-seat rejected as planner-count irrelevant); capture 10–20% lands well above $50. Artifact 4: hard per-store $ needs the digest's measured recall (a placeholder in the input) → parametric/flagged.</td></tr><tr><td>05 Refusal</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — correctly STOPS: WTP survey 0.1 + competitor list 0.1, neither clears 0.7; names all three violations (no measured value, per-seat = level, competitor-anchored = banned); routes to current-state-map / concierge; fabricates no number. The refusal IS the correct artifact here.</td></tr></tbody></table></div>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas / template.md)</h3>\n<ul><li><strong>Missing conversion factor between the outcome unit and a per-asset metric.</strong> When Part 2 measures <code>incremental_value_per_outcome</code> but Part 4 charges on a per-asset/per-period metric (per-line-month, per-store-week), Part 5 silently needs the <em>outcome frequency per asset-period</em> to convert value into a price. The template has no slot for it. The Azraq example hides this because base rate ≈ 1 breach/facility/yr (per-outcome ≈ per-facility-year). Mentix (many shifts) and Durian (~30 stockouts/store/month) cannot produce a hard invoice line without it. Recommend adding an explicit &quot;outcome frequency per asset-period [Fact/Assumption]&quot; line to Part 4/5 so the per-asset price is derived, not eyeballed.</li><li><strong>Routing targets not yet in the pack.</strong> The skill routes to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, <code>monetization-strategy</code>, <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> — none of these currently exist under <code>product-icarus/</code> (only <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> does). Routing logic is correct, but a fellow following the routes today hits dangling references. Not a skill defect; a pack-sequencing note for the orchestrator.</li><li><strong>Premium-reduction proxy ladder score (golden 03).</strong> A written insurance-premium <em>reduction</em> is a forward commitment, not a paid loss — cleanest scored 0.7–1.0 but should be tagged as a quoted commitment, not conflated with a 1.0 already-paid loss. Worth a one-line clarification in the &quot;priceless outcome&quot; gotcha.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added a Part 5 outcome-frequency-per-asset-period conversion slot so a per-asset/period price is derived from the per-outcome value, not eyeballed.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq (per-facility risk position) — seed case",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The wedge passed and the pilot's about to convert. How do we price it? I was thinking $2,000/month per seat — a competitor charges about that, three ops seats gets us to $72k/year, feels like a normal enterprise number.&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Design-partner operator paid a <strong>$220k SLA-breach penalty</strong> for a 4-hr outage 14 months ago (invoice in the data room). <span class=\"tag tag-fact\">Fact</span></li><li>That facility had 2 SLA-breaching outages in 24 months. <span class=\"tag tag-fact\">Fact</span></li><li>Status quo: quarterly third-party audit (~$40k/yr) + internal review; caught ~1 in 3 breach signatures on replay. <span class=\"tag tag-assumption\">Assumption</span></li><li>Azraq's monitor caught ~9 in 10 on the concierge replay. [Fact replay / Assumption on rate]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Rejects the draft on three grounds: competitor-anchored + &quot;feels normal&quot; (value = 0.1), per-seat is the level, and the seat price is wrong on the axis (over for one facility, under for ten).</li><li>Anchors on the <strong>$220k paid penalty</strong> — money moved 1.0, named as the strongest anchor because they already paid it.</li><li>Takes the <strong>delta over the status quo</strong>: ~0.57 incremental breaches avoided/yr → <strong>≈ $125k/facility/yr</strong> incremental value, not the gross $220k.</li><li>Cost floor ≈ $1,700/facility/yr; margin flagged as non-binding (~12×).</li><li>Metric = <strong>per facility per year</strong> (asset), with per-avoided-breach rejected as unbillable/contested and the leakage named (pays in clean years too).</li><li>Capture ~16% (pulled high: no substitute + paid anchor; held under 20% because probabilistic) → <strong>≈ $20k/facility/year</strong>.</li><li>Buyer retained multiple ≈ 6.25× (in band); improvement-proof noted; hands price to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> as term 2 / term 6.</li></ul>\n<p>Numbers that must appear: the $220k anchor with a 1.0 ladder score; the incremental $125k (delta, not gross); a capture rate in 10–20%; a per-facility price; a buyer-retained multiple in 5–10×.</p>\n<p>Auto-fail if: keeps a per-seat basis; anchors on the competitor's $2k; prices 15–20% of the gross $220k instead of the incremental; or outputs a price with the value scored ≤ 0.3.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/value-based-pricing/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix (factory copilot) — clean per-outcome case",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The shift-handover machine-risk digest converts next month. We know one unplanned stop costs the plant about $8,000, and the concierge replay showed we'd have caught the machine that stopped in ~85% of shifts. What do we charge, and on what?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Concierge replay of 60 shifts on 3 lines pairing each shift's sensor window with the maintenance log; recall ≈ 0.85. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative plant figure: one unplanned stop ≈ $8,000. <span class=\"tag tag-assumption\">Assumption</span></li><li>The plant's current practice (run-to-failure + a weekly manual walk-round) catches roughly 1 in 5 imminent stops. <span class=\"tag tag-assumption\">Assumption</span></li><li>From <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>: cost_per_outcome ≈ $3.55 per shift-digest. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Value anchor = $8,000 stop, scored <strong>behaviour 0.7</strong> (measured on the replay, not a survey); notes it would be 1.0 if a paid downtime invoice were produced.</li><li>Incremental over status quo: Mentix recall 0.85 − status-quo 0.20 ≈ <strong>0.65 of imminent stops newly prevented</strong>; incremental value per prevented stop stands at $8,000, and per-shift expected value ≈ base-rate × 0.65 × $8,000.</li><li>Metric choice: <strong>per-avoided-stop is tight but attribution is contested</strong> (cannot prove the stop that did not happen), so it drops to <strong>per-line per-shift or per-line per-month (asset)</strong>; leakage named (pays on clean shifts). Per-seat and per-usage rejected with reasons.</li><li>Cost floor $3.55/shift cleared trivially; margin enormous, flagged as non-binding.</li><li>Capture 10–20% of the incremental value; buyer keeps 5–10×; price stated on the per-line metric with the invoice line spelled out.</li><li>Improvement-proof: as recall rises via the flywheel, the per-line price re-anchors upward on the shared stop log.</li></ul>\n<p>Numbers that must appear: $8,000 anchor with a 0.7 score; the status-quo delta (≈0.65); cost floor $3.55; a capture rate in 10–20%; a per-line (not per-seat) price; a retained multiple in 5–10×.</p>\n<p>Auto-fail if: prices on the gross $8,000 ignoring the status quo; charges per-seat; retreats to per-API-call/usage; or claims per-avoided-stop billing without confronting the attribution problem.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/value-based-pricing/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (gas safety) — the priceless-outcome trap",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our gas-safety alert catches a leak signature before it reaches an ignition threshold. One prevented incident could save a life and shut a whole field. A life is priceless — so can we charge 15% of, what, the value of a life? How do we even price this?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Field-log replay across 3 rigs where the alert fired ahead of two real near-miss events. <span class=\"tag tag-fact\">Fact</span></li><li>The operator paid a <strong>$1.2M regulatory fine</strong> for a prior gas-safety violation, and a documented <strong>unplanned field shutdown costs ~$300k/day</strong>. [Fact — both from the operator's filings]</li><li>Their insurer offers a <strong>premium reduction of ~$180k/yr</strong> for continuous monitoring on this class of site. [Fact — quoted in writing]</li><li>Status quo: manual permit checks + fixed detectors; catch the leak class late, not early. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Refuses to price a percentage of a life or a fatality.</strong> States plainly that an unbounded / non-monetizable outcome cannot take a 10–20% capture — the percentage is meaningless and taking it is indefensible.</li><li>Re-anchors on <strong>bounded, money-backed proxies the customer already pays</strong>: the $1.2M fine avoided, the $300k/day shutdown avoided, and the $180k/yr insurance-premium delta — each scored 1.0 (money moved) or 0.7.</li><li>Prices a percentage of the <strong>bounded proxy</strong> (e.g. the avoided-fine expected value and/or the insurance delta), not of the incident.</li><li>Metric = per-site per-year (asset) or per-permit; per-incident rejected as both contested and morally fraught to bill.</li><li>Names that the safety outcome sets a floor on <em>diligence</em>, not a lever for <em>capture</em> — you monitor to the highest standard regardless of what the price supports.</li><li>Capture 10–20% of the proxy; buyer retained multiple stated; cost floor cleared.</li></ul>\n<p>Numbers that must appear: an explicit refusal to monetize the life/fatality; at least one bounded proxy ($1.2M fine, $300k/day, or $180k/yr premium) scored ≥0.7; a capture rate in 10–20% applied to the proxy; a per-site or per-permit metric.</p>\n<p>Auto-fail if: computes &quot;15% of the value of a life&quot; or any percentage of the fatality/incident; anchors on the unbounded figure; or charges per-seat.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/value-based-pricing/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (weekly stockout digest) — deliberately mundane",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Simple product: every Monday a grocery planner uploads last week's sales-and-stock CSV and gets a ranked list of the 20 SKUs most likely to stock out, with order quantities. What do we charge? It's cheap to run, so maybe just mark up our costs a bit — like $50/month?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Concierge run for 3 planners over 6 Mondays, each week's CSV paired with the next week's actual stockouts. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative: one avoidable stockout ≈ $120 lost margin. <span class=\"tag tag-assumption\">Assumption</span></li><li>A planner's current spreadsheet method catches roughly half of avoidable stockouts. <span class=\"tag tag-assumption\">Assumption</span></li><li>A store sees ~30 avoidable stockouts/month without help. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Rejects the &quot;mark up our costs&quot; instinct by name: <strong>cost-plus is a banned anchor</strong> — it pins the price to a falling model-cost curve and ignores the value entirely. &quot;$50 because it's cheap to run&quot; is the trap.</li><li>Full method even though the product is mundane and the numbers are small: measured value, delta over status quo, metric, capture — no hand-waving because the stakes are low.</li><li>Value: $120/stockout; the digest lifts catch-rate from ~50% to (measured recall) → incremental stockouts avoided/store/month × $120 = a modest but real monthly incremental value per store.</li><li>Metric = <strong>per-store per-week/month (asset)</strong> or per-avoided-stockout if attributable; per-seat rejected (planner count is irrelevant); usage/cost-plus rejected.</li><li>Cost floor from the cheap model call + a few planner minutes; margin healthy; price set at 10–20% of the incremental value, likely far above the $50 cost-plus figure.</li><li>Buyer retained multiple in 5–10× shown even at small absolute numbers.</li></ul>\n<p>Numbers that must appear: the $120 anchor with a ladder score; the catch-rate delta; a per-store (not per-seat, not cost-plus) price; a capture rate in 10–20%; a retained multiple in band.</p>\n<p>Auto-fail if: accepts &quot;$50, mark up costs&quot; or any cost-plus basis; treats &quot;simple/cheap product&quot; as licence to skip the value measurement or the metric choice; or charges per-seat.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/value-based-pricing/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "price with no measured value — the refusal case",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We're ready to publish pricing on the site. Let's go with $2,000/month per seat. We surveyed 20 prospects and they said they'd pay somewhere around that, and it's roughly what the nearest competitor charges. Fill in the model.&quot;</p>\n<p>Artefacts:</p>\n<ul><li>A willingness-to-pay survey: 20 prospects, median stated &quot;would pay&quot; ≈ $2k/month. [Assumption — stated, not paid]</li><li>The nearest competitor lists ~$2,200/seat/month. [Fact — their price, not a measured value]</li><li>No measured figure for what one outcome is worth to the customer, and no <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>. [Fact — absence]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Does NOT produce a filled model or a price.</strong> This is a refusal that names every violation:\n<ol><li><strong>No measured value anchor.</strong> The WTP survey is opinion (0.1); the competitor's list price is their guess (0.1). Neither clears the 0.7 bar. The value denominator is empty.</li><li><strong>Per-seat is the level, not the metric</strong> — decoupled from whatever the outcome is worth.</li><li><strong>Competitor-anchored</strong> is a banned anchor; inheriting their number inherits their mistake.</li></ol></li><li>Explains why a WTP survey is systematically wrong: hypothetical bias, anchoring to the number you floated, and it produces a <em>level</em> ($/month) not an outcome unit.</li><li>Returns the <strong>smallest honest next step</strong>: measure what one outcome is worth — route to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (price the status quo) or run a concierge probe (measure the outcome delivered) — then choose the outcome metric and return here.</li><li>Invents no number to fill the template.</li></ul>\n<p>Numbers that must appear: none fabricated. The output names the 0.1 scores on the survey and competitor price and the 0.7 bar they fail.</p>\n<p>Auto-fail if: fills the template and emits a $2k/seat price; treats the survey median as a value anchor; softens the refusal (&quot;this is a reasonable starting point&quot;); or invents a value figure to proceed.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/value-based-pricing/tests/golden/05.md"
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
     "html": "<p>&quot;How should we price our product?&quot;</p>\n<p>(No product detail. No value figure. No status quo. No metric in mind.)</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not produce a price or a filled model. There is nothing measured to anchor on.</li><li>Ask the ONE question that unblocks everything: <strong>what is one outcome of this product worth to the customer, and how do you know that number</strong> (paid loss? measured probe? or only a guess?). The evidence-ladder score of that answer decides whether a value price is even possible.</li><li>If the fellow cannot answer with anything ≥ 0.7, return the smallest honest next step: measure the outcome value first — route to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> or a concierge probe — before pricing.</li><li>Invent no product, no value figure, and no metric.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced a price or a template on no measured value.</li><li>Asked a scatter of questions instead of the single unblocking one (what is one outcome worth, and how is it known).</li><li>Invented a plausible-sounding value number or metric to proceed.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/value-based-pricing/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The pricing decision is really just picking the tiers: a $99 Starter, a $299 Pro, and a $999 Enterprise. Set the three tier prices for us.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. Three tiers are a <em>packaging of a metric</em>, not the pricing decision — and $99/$299/$999 are levels chosen by feel, decoupled from any measured value. Naming three round numbers is not value-based pricing.</li><li>Name the trap: tiered SaaS packaging is the default way price gets divorced from value; each tier is a fence around a <em>level</em> (seats, feature flags, usage caps), and none of them says what one outcome is worth.</li><li>Reframe to the questions that actually set the price: what OUTCOME does the product deliver, what is that outcome worth to the customer (measured, ≥0.7), and what outcome/asset/decision METRIC should the price ride on? Tiers, if any, come afterward as packaging of that metric — not instead of it.</li><li>Do not output three tier numbers.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Returned $99 / $299 / $999 (or any three tier prices) as the answer.</li><li>Accepted &quot;tiers&quot; as the pricing decision without exposing that a tier is a level, not a value.</li><li>Failed to redirect to a measured outcome value and an outcome-coupled metric.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/value-based-pricing/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, we've got the price. Now structure the whole pilot deal — the scope, the data-rights clause, the success metrics, the kill criteria, and the conversion terms — so it isn't a free trial.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline. This is the six-term deal-structuring job, which belongs to <strong><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></strong> (section 07). Name it explicitly.</li><li>Draw the boundary cleanly: this skill sets the price and the charging metric — which become <strong>term 2 (price)</strong> and the <strong>term 6 (conversion) basis</strong> on that sheet. It does not write scope, data-rights language, success metrics, or kill criteria.</li><li>Hand over what this skill produced (the value-anchored number + the metric) as the input to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, and stop there. Do not draft the other five terms.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced scope, success metrics, kill criteria, or conversion terms (poaching <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>).</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> as the right skill.</li><li>Drafted data-rights language (that is <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>, section 06) instead of routing.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/value-based-pricing/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/value-based-pricing/SKILL.md",
  "template": "skills/value-based-pricing/template.md",
  "example": "skills/value-based-pricing/examples/sample.md",
  "rubric": "skills/value-based-pricing/tests/rubric.json",
  "results": "skills/value-based-pricing/tests/RESULTS.md"
 }
});
