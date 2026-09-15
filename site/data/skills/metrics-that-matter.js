window.ICARUS_SKILL("metrics-that-matter", {
 "name": "metrics-that-matter",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;what should we measure?&quot; into a one-page scorecard with a single North Star, an AARRR skeleton, a retention curve that must flatten, and a cost-per-outcome to the cent. This is a thin wrapper: it does not re-teach the North Star framework, AARRR, cohorts, or unit economics — those live in the M9 retention pack and are routed to, not restated. Its whole job is the two things the generic frameworks skip: it treats the <strong>flattening retention curve as a gate</strong> the North Star must pass before it counts, and it forces a <strong>cost-per-outcome</strong> because an AI product pays a variable cost per outcome that can invert the margin as volume grows.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Most metric frameworks let a fellow name a North Star and stop. Icarus says the North Star is a lie until the retention curve flattens: a cohort curve that decays toward zero means no product-market fit, and any headline number rising above it is rising on acquisition spend, not on a product people come back to. Retention is the truth; everything else is diagnostic. And every North Star outcome carries a variable cost — inference, review time, infra — so Icarus prices it to the cent and checks that margin per outcome holds or widens as volume scales, not just that the outcome count goes up.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when: a product is live and the fellow needs to pick the few numbers that matter; a headline metric looks great and the fellow wants to know if it is real; a North Star has been proposed and needs the retention gate and a cost check before it is adopted.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;Design the after-launch loop — ship, observe, promote autonomy by eval&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></td><td>That is the improvement cadence. This picks and validates the metrics the loop watches; it does not run the loop.</td></tr><tr><td>&quot;Mine our production traces / turn usage logs into discovery interviews&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a></td><td>That reads traces as discovery. This scores metrics; a trace is not a metric.</td></tr><tr><td>&quot;Build the cohort dashboard, write the SQL, set the alert thresholds&quot;</td><td><code>retention-dashboard</code>, <code>cohort-analysis</code>, <code>analytics-tracking</code> (M9)</td><td>Those render and instrument. This decides what to render and applies the truth test; route the build there.</td></tr><tr><td>&quot;Validate a North Star against the 7 NSM criteria / classify the business game&quot;</td><td><code>north-star-metric</code> (M9)</td><td>That is the framework. This calls it once, then adds the retention gate and cost-per-outcome it lacks.</td></tr><tr><td>&quot;Work out CAC, LTV, payback, contribution margin&quot;</td><td><code>financial-unit-economics</code> (M9)</td><td>That is full unit economics. This needs only cost-per-outcome and margin-per-outcome; route the rest there.</td></tr></tbody></table></div>\n<p>If the input names no product and no outcome, do not invent metrics. Ask the one question that unblocks it — what single outcome does this product deliver for the customer? — or return the smallest honest next step.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>Metrics That Matter progress:\n- [ ] Step 1: Name the business game and the one North Star (route the framework to M9)\n- [ ] Step 2: Fill the AARRR skeleton — one metric per stage, retention load-bearing\n- [ ] Step 3: Run the retention truth test — classify the curve, gate the North Star\n- [ ] Step 4: Price cost-per-outcome to the cent and check margin direction at scale\n- [ ] Step 5: Vanity audit — tag every metric, kill the totals\n- [ ] Step 6: Run the kill line before returning</code></pre>\n<p><strong>Step 1 — game and North Star.</strong> Classify Attention / Transaction / Productivity and pick ONE customer-centric outcome as the North Star. Do not restate the 7 criteria — route to <code>north-star-metric</code> (M9). This skill adds two hard rules: the North Star must be an <strong>outcome the customer receives</strong> (a resolved hazard, an accepted draft), never an output you emit (alerts sent) or an activity total (logins); and it is provisional until Step 3.</p>\n<p><strong>Step 2 — AARRR skeleton.</strong> One metric per stage. Retention is load-bearing; the other four are diagnostic inputs that explain the North Star, not rivals to it. Do not restate the funnel — see the AARRR resource in <code>north-star-metric</code>. Fill <a href=\"#/skill/metrics-that-matter\">template.md</a> section C.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stage</th><th>One metric (example shape)</th><th>Role here</th></tr></thead><tbody><tr><td>Acquisition</td><td>new activated teams / week</td><td>input — is the top filling?</td></tr><tr><td>Activation</td><td>% reaching first accepted outcome</td><td>input — does value land?</td></tr><tr><td><strong>Retention</strong></td><td><strong>cohort % still delivering the outcome at week N</strong></td><td><strong>the truth — Step 3 gates on this</strong></td></tr><tr><td>Referral</td><td>% of teams that pull in another</td><td>input — does it spread?</td></tr><tr><td>Revenue</td><td>expansion / net revenue retention</td><td>money-moved (1.0) confirmation</td></tr></tbody></table></div>\n<p><strong>Step 3 — the retention truth test.</strong> Plot the newest full cohort's retention (share of the cohort still delivering the North Star outcome) across equal periods and classify the tail:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Curve shape</th><th>Reading</th><th>North Star verdict</th></tr></thead><tbody><tr><td>Decays toward 0</td><td>Leaky bucket. No PMF. The headline rides acquisition.</td><td><strong>INVALID</strong> — vanity North Star</td></tr><tr><td>Flattens at a plateau &gt; 0</td><td>A stable fraction stays. That plateau is the business.</td><td><strong>VALID</strong> — record the plateau height</td></tr><tr><td>Smiles (dips then rises)</td><td>Resurrection + expansion beat churn. Strong PMF.</td><td><strong>VALID</strong> — strongest</td></tr></tbody></table></div>\n<p>Flatten test <span class=\"tag tag-assumption\">Assumption</span> on the exact points, the shape rule is the law: the curve has flattened when the retention change between the last two equal-length periods is within ~1 percentage point of zero and the plateau is above zero. Still dropping ≥ ~2 points per period in the tail = not yet flat = North Star INVALID. Route the cohort mechanics (how to cut vintages, triangle tables) to <code>cohort-analysis</code>; this skill only reads the shape and renders the verdict. A North Star that has never been checked against a flattening curve is not a North Star — it is a guess.</p>\n<p><strong>Step 4 — cost-per-outcome to the cent.</strong> One North Star outcome has a variable cost. Sum it to the cent <strong>once you have the token / compute rate and the price</strong>; until you do, the figure is an <code>[Assumption]</code>, not a to-the-cent <code>[Fact]</code> — name the one measurement that resolves it. Then check its direction as volume grows.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Line</th><th>How to get it</th><th>Example</th></tr></thead><tbody><tr><td>Inference / API per outcome</td><td>tokens × rate, all model calls in the pipeline</td><td>$0.__</td></tr><tr><td>Human-in-loop per outcome</td><td>review minutes × loaded rate</td><td>$0.__</td></tr><tr><td>Infra / retrieval per outcome</td><td>vector + compute allocated per outcome</td><td>$0.__</td></tr><tr><td><strong>Cost per outcome</strong></td><td>sum above, to the cent</td><td><strong>$0.__</strong></td></tr><tr><td>Price per outcome</td><td>what the customer pays per outcome</td><td>$_.__</td></tr><tr><td><strong>Margin per outcome</strong></td><td>price − cost</td><td><strong>$_.__</strong></td></tr></tbody></table></div>\n<p>Two checks: margin per outcome must be positive; and it must <strong>hold or widen</strong> as volume grows. Flag the inversion risk — if cost-per-outcome climbs with scale (longer contexts, more retries, more review) faster than price, the product loses money the more it works. This is the AI-specific trap SaaS dashboards do not show. Cost-per-outcome should sit well under price-per-outcome; if <a class=\"skill-ref\" href=\"#/skill/value-based-pricing\"><code>value-based-pricing</code></a> set price at 10–20% of measured value, cost must leave room inside that. Route CAC / LTV / payback to <code>financial-unit-economics</code>.</p>\n<p><strong>Step 5 — vanity audit.</strong> Tag every metric on the scorecard <code>vanity</code> or <code>actionable</code> (Yoskovitz's golden rule: if it would not change what you do, it is vanity). Any cumulative total (total signups, total documents drafted, all-time users) is vanity by construction — it can only go up. Kill it or convert it to a rate or a cohort. A scorecard whose headline is a total is an automatic KILL (see the kill line).</p>\n<p><strong>Step 6 — the kill line.</strong> Run the self-check at the foot of <a href=\"#/skill/metrics-that-matter\">template.md</a>.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. Retention is exactly why this ladder exists: a cohort still delivering the outcome is <strong>behaviour observed (0.7)</strong>, and expansion / net revenue retention is <strong>money moved (1.0)</strong> — those, and only those, validate the North Star. A North Star propped up by a survey, an NPS, or &quot;users say they love it&quot; is <strong>opinion (0.1)</strong> and cannot pass Step 3 no matter how high the number. The bar: the North Star is adopted only when a real cohort curve has flattened (≥ 0.7) and cost-per-outcome is a <code>[Fact]</code> computed from real usage, not an estimate. Tag every number <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>; invent none the fellow did not give.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The up-and-to-the-right lie.</strong> MAU, cumulative users, and total outcomes almost always rise — they are fed by acquisition and can climb while every cohort churns out. Without the cohort curve you cannot tell growth from a leak. Always cut the headline into cohorts before believing it.</li><li><strong>North Star as output, not outcome.</strong> &quot;Alerts sent&quot;, &quot;documents generated&quot;, &quot;messages processed&quot; measure what the machine emits, not what the customer got. They flatter the team and can rise while the product helps no one. Reframe to the received outcome (hazard resolved, draft accepted).</li><li><strong>The margin that inverts at scale.</strong> Outcome count going up while cost-per-outcome quietly overtakes value-per-outcome is the AI-native failure mode. A curve of value with no curve of cost beside it hides it. Price the outcome to the cent and watch the direction, not just the level.</li><li><strong>Retention with no denominator of use.</strong> &quot;90% retention&quot; of accounts that never activated is meaningless. Retention must be of the cohort that reached the first outcome, measured on the outcome itself — otherwise it is a billing artefact, not behaviour.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/metrics-that-matter\">examples/sample.md</a> — Durian Labs' shift-handover drafter: the proposed North Star (&quot;documents drafted&quot;, a vanity total) reframed to accepted handovers per active team per week, gated by a team-level retention curve that flattens at ~55% by week 8, with cost-per-outcome priced at $0.14 against a $2.00 price, margin holding as volume grows.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> — the after-launch loop that acts on these metrics (observe → learn → refine). This skill chooses and validates the numbers the loop watches; it does not run the loop.</li><li><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> — reads production traces as discovery. Composes with this: the retention truth test says <em>whether</em> the product works; trace-mining says <em>why</em> users churn out of the tail.</li><li><code>north-star-metric</code>, <code>retention-dashboard</code>, <code>metrics-dashboard</code>, <code>cohort-analysis</code>, <code>financial-unit-economics</code> (M9 retention pack) — the depth this wrapper routes to for the NSM framework, the dashboard build, cohort mechanics, and unit economics. This skill's net-new over all of them is the flattening-retention gate and cost-per-outcome to the cent.</li><li><a class=\"skill-ref\" href=\"#/skill/value-based-pricing\"><code>value-based-pricing</code></a> — sets price per outcome; this checks cost per outcome sits under it.</li><li><a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (07) — when a failure mode's cost-of-error is a safety or regulatory cost (a missed hazard, a breach), that cost sizes the <em>guardrail</em>, not the scorecard. Route it there; this skill stays on cost- and value-per-outcome (see golden 03: Barrier's cost-of-a-missed-hazard).</li><li>Supersedes nothing. It is the truth-test gate at the metrics step of the refine stage.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Metric Scorecard — &lt;product name&gt;</h1>\n<p><strong>Fellow:</strong> &lt;name&gt; · <strong>Date:</strong> &lt;date&gt; · <strong>Stage:</strong> refine / metrics</p>\n<p>Route depth, do not restate it here: the NSM framework → <code>north-star-metric</code>; AARRR → its resource; cohort mechanics → <code>cohort-analysis</code>; the dashboard build → <code>retention-dashboard</code>; CAC/LTV/payback → <code>financial-unit-economics</code>. This scorecard adds the two things they skip: the retention gate (C) and cost-per-outcome (D).</p>\n<h2>A. Business game and North Star</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Business game</td><td>Attention / Transaction / Productivity</td></tr><tr><td>North Star (one, outcome received by the customer)</td><td>&lt;e.g. accepted handovers per active team per week&gt;</td></tr><tr><td>Why it is an outcome, not an output/total</td><td>&lt;the customer <em>got</em> X, not &quot;we emitted X&quot;&gt;</td></tr><tr><td>Status</td><td><strong>PROVISIONAL</strong> until the retention gate (C) passes</td></tr></tbody></table></div>\n<p>Rules: exactly one North Star. It must be a customer-received outcome, never an emitted output (&quot;alerts sent&quot;) or a cumulative total (&quot;all-time drafts&quot;). It is not adopted until C.</p>\n<h2>B. AARRR skeleton (one metric per stage)</h2>\n<p>Retention is load-bearing; the other four explain it, they do not replace it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stage</th><th>The one metric</th><th>Current value</th><th>Rung + tag</th></tr></thead><tbody><tr><td>Acquisition</td><td>&lt;new activated units / period&gt;</td><td>&lt;__&gt;</td><td>&lt;e.g. behaviour 0.7 <code>[Fact]</code>&gt;</td></tr><tr><td>Activation</td><td>&lt;% reaching first accepted outcome&gt;</td><td>&lt;__&gt;</td><td>&lt;rung + tag&gt;</td></tr><tr><td><strong>Retention</strong></td><td><strong>&lt;cohort % still delivering the outcome at week N&gt;</strong></td><td><strong>&lt;__&gt;</strong></td><td><strong>&lt;behaviour 0.7 <code>[Fact]</code>&gt;</strong></td></tr><tr><td>Referral</td><td>&lt;% pulling in another unit&gt;</td><td>&lt;__&gt;</td><td>&lt;rung + tag&gt;</td></tr><tr><td>Revenue</td><td>&lt;expansion / net revenue retention&gt;</td><td>&lt;__&gt;</td><td>&lt;money 1.0 <code>[Fact]</code>&gt;</td></tr></tbody></table></div>\n<h2>C. Retention truth test — the gate</h2>\n<p>Plot the newest full cohort's retention on the North Star <strong>outcome</strong> across equal periods.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Period</th><th>W0</th><th>W1</th><th>W2</th><th>W4</th><th>W8</th><th>W12</th></tr></thead><tbody><tr><td>% of cohort still delivering the outcome</td><td>100%</td><td>&lt;__&gt;</td><td>&lt;__&gt;</td><td>&lt;__&gt;</td><td>&lt;__&gt;</td><td>&lt;__&gt;</td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Read</th><th>Value</th></tr></thead><tbody><tr><td>Curve shape</td><td>decays-to-0 / flattens / smiles</td></tr><tr><td>Plateau height (if flat)</td><td>&lt;__%&gt; <code>[Fact/Assumption]</code></td></tr><tr><td>Period it flattened</td><td>&lt;e.g. ~W8&gt;</td></tr><tr><td>Tail slope (last two equal periods)</td><td>&lt;__ pts/period&gt;</td></tr><tr><td><strong>Verdict</strong></td><td><strong>NORTH STAR VALID / INVALID</strong></td></tr></tbody></table></div>\n<p>Flatten rule: flat = tail slope within ~1 pt of zero AND plateau &gt; 0. Still dropping ≥ ~2 pts/period = INVALID (no PMF yet). Decays toward 0 = the North Star is a vanity metric riding acquisition — INVALID. Points are <code>[Assumption]</code>; the shape rule is the law.</p>\n<p>If INVALID: the North Star does not count yet. Name the smallest change that could bend the tail flat, and say what evidence (which cohort, measured how) would move the verdict.</p>\n<h2>D. Cost-per-outcome (to the cent)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Line</th><th>Source</th><th>Amount</th></tr></thead><tbody><tr><td>Inference / API per outcome</td><td>tokens × rate, every model call in the pipeline</td><td>$0.__ <code>[Fact/Assumption]</code></td></tr><tr><td>Human-in-loop per outcome</td><td>review minutes × loaded rate</td><td>$0.__</td></tr><tr><td>Infra / retrieval per outcome</td><td>vector + compute per outcome</td><td>$0.__</td></tr><tr><td><strong>Cost per outcome</strong></td><td>sum, to the cent</td><td><strong>$0.__</strong></td></tr><tr><td>Price per outcome</td><td>what the customer pays per outcome</td><td>$_.__</td></tr><tr><td><strong>Margin per outcome</strong></td><td>price − cost</td><td><strong>$_.__</strong></td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Check</th><th>Answer</th></tr></thead><tbody><tr><td>Margin per outcome &gt; 0?</td><td>yes / no</td></tr><tr><td>Direction as volume grows</td><td>falling cost (good) / holding / <strong>inverting (kill risk)</strong></td></tr><tr><td>Cost sits well under price (room inside the 10–20%-of-value price)?</td><td>yes / no → route to <a class=\"skill-ref\" href=\"#/skill/value-based-pricing\"><code>value-based-pricing</code></a></td></tr></tbody></table></div>\n<p>Inversion risk: if cost-per-outcome climbs with scale (longer contexts, more retries, more review) faster than price, the product loses money the more it runs. Name it if present.</p>\n<h2>E. Vanity audit</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric on this scorecard</th><th>vanity / actionable</th><th>If vanity: convert to</th></tr></thead><tbody><tr><td>&lt;total drafts all-time&gt;</td><td>vanity</td><td>&lt;accepted drafts per active team / week&gt;</td></tr><tr><td>&lt;MAU&gt;</td><td>vanity</td><td>&lt;cohort retention curve&gt;</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table></div>\n<p>Any cumulative total is vanity by construction — it can only rise. A scorecard whose headline is a total is a KILL.</p>\n<h2>Kill line — self-check before returning</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Exactly ONE North Star, and it is a customer-received outcome — not an emitted output   (&quot;alerts sent&quot;) or a cumulative total. A vanity-total headline is an automatic KILL.</li><li class=\"task\"><span class=\"box\"></span>The retention truth test (C) was run. The North Star is marked VALID only if a real   cohort curve has flattened (or smiled); INVALID if it still decays. No North Star   passes without this check.</li><li class=\"task\"><span class=\"box\"></span>Cost-per-outcome (D) is computed to the cent, with margin-per-outcome and its   direction at scale. Inversion risk named if present.</li><li class=\"task\"><span class=\"box\"></span>Retention is measured on the North Star outcome, over the cohort that reached the   first outcome — not raw account logins, not billing.</li><li class=\"task\"><span class=\"box\"></span>Every metric tagged vanity / actionable; totals killed or converted.</li><li class=\"task\"><span class=\"box\"></span>Every number tagged <code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code>; retention and revenue   rest on ≥ 0.7 (behaviour / money), never on opinion; no number invented that the   fellow did not provide.</li><li class=\"task\"><span class=\"box\"></span>Depth routed, not restated: NSM framework, cohort mechanics, dashboard build, and   unit economics point to the M9 skills, not copied in.</li></ul>",
  "path": "skills/metrics-that-matter/template.md"
 },
 "example": {
  "html": "<h1>Metric Scorecard — Durian Labs shift-handover drafter</h1>\n<p><strong>Fellow:</strong> Durian Labs · <strong>Date:</strong> 2026-07-22 · <strong>Stage:</strong> refine / metrics</p>\n<p>Illustrative fixtures. Numbers are plausible, not real client data.</p>\n<p>Depth routed: NSM framework → <code>north-star-metric</code>; AARRR → its resource; cohort mechanics → <code>cohort-analysis</code>; dashboard build → <code>retention-dashboard</code>; unit economics → <code>financial-unit-economics</code>. This scorecard adds the retention gate (C) and cost-per-outcome (D).</p>\n<p>The fellow arrived with: <em>&quot;Our North Star is documents drafted — we're at 40,000 all-time and climbing. What else should we track?&quot;</em></p>\n<h2>A. Business game and North Star</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Business game</td><td>Productivity (helps a warehouse team finish the shift handover faster)</td></tr><tr><td>Proposed North Star</td><td>~~Documents drafted (40,000 all-time)~~ — rejected: a cumulative total, and an <em>output</em> Durian emits, not an outcome the team received</td></tr><tr><td>Adopted North Star</td><td><strong>Accepted handovers per active team per week</strong> (a draft the team accepted with minor edits and posted) <code>[Fact]</code> — logged on the post button</td></tr><tr><td>Why it is an outcome</td><td>The team <em>used</em> the handover; a drafted-but-discarded doc does not count</td></tr><tr><td>Status</td><td><strong>PROVISIONAL</strong> until the retention gate (C) passes</td></tr></tbody></table></div>\n<p>The 40,000 total is killed. It can only rise, it counts discarded drafts, and it says nothing about whether any team came back. Reframed to a weekly per-team accepted-outcome rate.</p>\n<h2>B. AARRR skeleton</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Stage</th><th>The one metric</th><th>Current</th><th>Rung + tag</th></tr></thead><tbody><tr><td>Acquisition</td><td>New teams reaching first accepted handover / week</td><td>9</td><td>behaviour 0.7 <code>[Fact]</code></td></tr><tr><td>Activation</td><td>% of onboarded teams reaching a first accepted handover in week 1</td><td>72%</td><td>behaviour 0.7 <code>[Fact]</code></td></tr><tr><td><strong>Retention</strong></td><td><strong>Cohort % of teams still posting an accepted handover in week N</strong></td><td><strong>see C</strong></td><td><strong>behaviour 0.7 <code>[Assumption]</code></strong> (illustrative fixture; a real cohort export makes this the <code>[Fact]</code> the gate requires)</td></tr><tr><td>Referral</td><td>% of teams that introduce a second team at the same site</td><td>18%</td><td>behaviour 0.7 <code>[Assumption]</code> (small n)</td></tr><tr><td>Revenue</td><td>Net revenue retention across paying sites</td><td>108%</td><td>money 1.0 <code>[Fact]</code></td></tr></tbody></table></div>\n<h2>C. Retention truth test — the gate</h2>\n<p>Newest full cohort: teams onboarded in the W0 vintage, measured on the accepted-handover outcome (not logins).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Period</th><th>W0</th><th>W1</th><th>W2</th><th>W4</th><th>W8</th><th>W12</th></tr></thead><tbody><tr><td>% still delivering the outcome</td><td>100%</td><td>78%</td><td>66%</td><td>58%</td><td>55%</td><td>54%</td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Read</th><th>Value</th></tr></thead><tbody><tr><td>Curve shape</td><td>flattens</td></tr><tr><td>Plateau height</td><td>~54–55% <code>[Assumption]</code> — illustrative fixture, not a measured plateau</td></tr><tr><td>Period it flattened</td><td>~W8</td></tr><tr><td>Tail slope (W8→W12)</td><td>~0.3 pts/period — within 1 pt of zero</td></tr><tr><td><strong>Verdict</strong></td><td><strong>NORTH STAR VALID</strong></td></tr></tbody></table></div>\n<p>The curve stops falling around week 8 and holds near 55%. That flat is the product: a bit over half of every team keeps the handover habit indefinitely. The North Star is now adopted — before this check it was a guess sitting on a 40,000 total. These are illustrative fixtures, not real client data, so the curve is tagged <code>[Assumption]</code>; on a measured cohort the flattened shape is the behaviour-0.7 <code>[Fact]</code> the gate actually requires, and the plateau firms up as later cohorts mature.</p>\n<p>If this curve had instead slid 78 → 60 → 44 → 28 and kept going, the verdict would be INVALID: a leaky bucket where &quot;documents drafted&quot; only rose because acquisition kept feeding it. The smallest tail-bending move to test first: a week-2 nudge, since the steepest drop is W1→W2.</p>\n<h2>D. Cost-per-outcome (to the cent)</h2>\n<p>Per accepted handover:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Line</th><th>Source</th><th>Amount</th></tr></thead><tbody><tr><td>Inference / API</td><td>~7k tokens in + 1.5k out across retrieval + draft calls</td><td>$0.09 <code>[Assumption]</code> from token logs</td></tr><tr><td>Human-in-loop</td><td>the team's own edit time — Durian pays $0 (customer labour)</td><td>$0.00</td></tr><tr><td>Infra / retrieval</td><td>vector lookup over past handovers + exception feed</td><td>$0.05 <code>[Assumption]</code></td></tr><tr><td><strong>Cost per outcome</strong></td><td>sum</td><td><strong>$0.14</strong></td></tr><tr><td>Price per outcome</td><td>metered at $2.00 per accepted handover</td><td>$2.00 <code>[Fact]</code></td></tr><tr><td><strong>Margin per outcome</strong></td><td>price − cost</td><td><strong>$1.86</strong></td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Check</th><th>Answer</th></tr></thead><tbody><tr><td>Margin &gt; 0?</td><td>yes — $1.86</td></tr><tr><td>Direction as volume grows</td><td>holding; retrieval cost per outcome falls slightly as the corpus caches — good</td></tr><tr><td>Cost well under price?</td><td>yes — 7% of price; leaves room inside a value-based price</td></tr></tbody></table></div>\n<p>Inversion watch: the only line that could climb is inference if drafts get longer or retries rise. At current shape it holds. <code>[Assumption]</code> — reprice the token line each model release via <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>.</p>\n<h2>E. Vanity audit</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>vanity / actionable</th><th>Converted to</th></tr></thead><tbody><tr><td>Documents drafted (40,000 all-time)</td><td>vanity</td><td>Accepted handovers per active team / week (the North Star)</td></tr><tr><td>Total registered users</td><td>vanity</td><td>Activation % (B)</td></tr><tr><td>Accepted handovers / active team / week</td><td>actionable</td><td>— (kept)</td></tr><tr><td>Cohort retention curve</td><td>actionable</td><td>— (kept, the gate)</td></tr><tr><td>Cost per outcome ($0.14)</td><td>actionable</td><td>— (kept)</td></tr></tbody></table></div>\n<h2>Kill line — self-check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Exactly one North Star, a customer-received outcome (accepted, posted handover) — the   40,000-total headline was killed.</li><li class=\"task\"><span class=\"box done\"></span>Retention truth test run: curve flattens ~55% by W8, tail slope ~0.3 pt → VALID.</li><li class=\"task\"><span class=\"box done\"></span>Cost-per-outcome $0.14 to the cent; margin $1.86; direction holding; inversion line named.</li><li class=\"task\"><span class=\"box done\"></span>Retention measured on the outcome, over the activated cohort — not logins, not billing.</li><li class=\"task\"><span class=\"box done\"></span>Every metric tagged vanity/actionable; both totals converted.</li><li class=\"task\"><span class=\"box done\"></span>Numbers tagged; retention (0.7) and NRR (1.0) carry the verdict, not opinion; no figure   invented beyond Durian's token logs, price sheet, and cohort export.</li><li class=\"task\"><span class=\"box done\"></span>Depth routed to the M9 skills; the NSM framework and cohort mechanics are not restated.</li></ul>",
  "path": "skills/metrics-that-matter/examples/sample.md"
 },
 "rubric": {
  "skill": "metrics-that-matter",
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
    "What metrics should we track for the handover drafter now it's live?",
    "What should our North Star be?",
    "Is our retention any good — does our cohort curve actually flatten?",
    "Our MAU is up-and-to-the-right. Is that real or is it vanity?",
    "What's our cost per outcome, and which numbers actually matter post-launch?"
   ],
   "mustNotFire": [
    {
     "phrase": "Design the after-launch loop — how we ship, observe, and promote autonomy by eval.",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "Turn our production traces / usage logs into discovery interviews.",
     "sibling": "trace-to-interview",
     "local": true
    },
    {
     "phrase": "Build the cohort retention dashboard — write the SQL and set the alert thresholds.",
     "sibling": "retention-dashboard",
     "local": false
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description lists all 5 must-fire phrasings near-verbatim (&quot;what metrics should we track&quot;, &quot;what should our North Star be&quot;, &quot;is our retention any good / does the curve flatten&quot;, MAU-vanity, &quot;what's our cost per outcome&quot;). All 3 must-not-fire are carved out by name in the <code>Do NOT fire</code> clause → refine-flywheel / trace-to-interview / retention-dashboard+cohort-analysis. Clean negative scope.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. All ≥ 24/25, no dimension &lt; 4, no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → skill's <code>When NOT</code> clause asks the exact one question (&quot;what single outcome does this product deliver?&quot;), invents nothing. 02 MAU-as-NS → names the up-and-to-the-right lie, refuses to adopt/track, reframes to received outcome, demands flattening gate. 03 out-of-scope loop → <code>When NOT</code> table row 1 declines and names <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> with the one-line boundary. No fabrication, flattery, or scope-poaching.</p>"
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
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: the flattening-retention <em>gate</em> (shape law: ≤~1pt tail slope = flat/VALID, ≥~2pt = INVALID, PROVISIONAL until passed), cost-per-outcome to the cent with AI-specific margin-inversion-at-scale check, and the money/behaviour/opinion evidence ladder are all Icarus-specific spine, not decoration. Guidance is table/checklist-first in both SKILL.md and template.md — no depth written as prose that should be a table. Verified thin-wrapper: cohort mechanics → cohort-analysis, NSM framework → north-star-metric, CAC/LTV → financial-unit-economics, dashboard → retention-dashboard; all resolve to real M9 skills.</p>"
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
     "label": "01 Durian (no cohort data given) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix MAU (never cut cohort) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier \"alerts sent\" 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 Azraq (real curve 100/74/61/52/49/48) 5",
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
     "label": "05 three-numbers-on-the-wall 5",
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
    "run 1",
    "all",
    "see block below",
    "judged by separate judge agent"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>The example tags a fabricated plateau as <code>[Fact]</code>.</strong> <code>examples/sample.md</code> line 49 renders the invented illustrative curve's plateau as &quot;~54–55% <code>[Fact]</code> on this cohort&quot; and fills C with fixtures (78/66/58/55/54). The file is labeled &quot;plausible, not real client data,&quot; but tagging a made-up fixture <code>[Fact]</code> models the exact behaviour the skill forbids (Evidence standard: &quot;invent none the fellow did not give&quot;; golden 01 Must-NOT: &quot;invent a retention number the fellow did not have&quot;). A fellow mirroring the sample on the same Durian scenario could present a fabricated plateau as a fact. Fix: re-tag every invented fixture in the sample <code>[Assumption]</code>/<code>[Hypothesis]</code>, or move the illustrative curve behind a louder &quot;SCENARIO FIXTURE — not measured&quot; banner. (Recorded only; judge does not edit the sample.)</li><li><strong>&quot;To the cent&quot; over-promises on partial data.</strong> In 3/5 goldens no token rate and/or price is given, so cost-per-outcome is necessarily an <code>[Assumption]</code>, not a to-the-cent <code>[Fact]</code>. The skill handles this honestly via the evidence tags, but the description headline (&quot;cost-per-outcome priced to the cent&quot;) reads as a firmer guarantee than the input often supports. Consider softening to &quot;priced to the cent when usage/price data exist; otherwise state the one measurement that resolves it.&quot;</li><li><strong><a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> routing is used in golden 03 but not named in SKILL.md.</strong> Golden 03 expects the safety cost-of-a-missed-hazard to route to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (which exists at <code>skills/sandbox/product-icarus/07-commit-build-v1/guardrail-design</code>). SKILL.md's routing table and Related-skills list omit it. The skill still keeps scope correctly (cost/value-per-outcome only), but adding a one-line route for the safety cost-of-error boundary would close the gap cleanly.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: re-tagged the example's plateau/retention figures as `[Assumption]`/illustrative (never `[Fact]`), softened Step 4's \"to the cent\" to require the token/compute rate and price first (else `[Assumption]`), and named `guardrail-design` in Related for the safety cost-of-error route.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — metrics-that-matter</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What metrics should we track for the handover drafter now it's live?&quot;</li><li>&quot;What should our North Star be?&quot;</li><li>&quot;Is our retention any good — does our cohort curve actually flatten?&quot;</li><li>&quot;Our MAU is up-and-to-the-right. Is that real or is it vanity?&quot;</li><li>&quot;What's our cost per outcome, and which numbers actually matter post-launch?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Design the after-launch loop — how we ship, observe, and promote autonomy by eval.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></li><li>&quot;Turn our production traces / usage logs into discovery interviews.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a></li><li>&quot;Build the cohort retention dashboard — write the SQL and set the alert thresholds.&quot; → belongs to <code>retention-dashboard</code> (M9)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>see block below</td><td>judged by separate judge agent</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td><strong>PASS</strong> (5/5 fire, 0/3 misfire)</td><td>Description lists all 5 must-fire phrasings near-verbatim (&quot;what metrics should we track&quot;, &quot;what should our North Star be&quot;, &quot;is our retention any good / does the curve flatten&quot;, MAU-vanity, &quot;what's our cost per outcome&quot;). All 3 must-not-fire are carved out by name in the <code>Do NOT fire</code> clause → refine-flywheel / trace-to-interview / retention-dashboard+cohort-analysis. Clean negative scope.</td></tr><tr><td>2 Golden</td><td><strong>PASS</strong> (5/5)</td><td>Per-case totals below. All ≥ 24/25, no dimension &lt; 4, no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td><strong>PASS</strong> (3/3)</td><td>01 vague one-liner → skill's <code>When NOT</code> clause asks the exact one question (&quot;what single outcome does this product deliver?&quot;), invents nothing. 02 MAU-as-NS → names the up-and-to-the-right lie, refuses to adopt/track, reframes to received outcome, demands flattening gate. 03 out-of-scope loop → <code>When NOT</code> table row 1 declines and names <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> with the one-line boundary. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td><strong>n/a</strong></td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td><strong>PASS</strong></td><td>Golden-01 output could NOT come from a generic PM prompt: the flattening-retention <em>gate</em> (shape law: ≤~1pt tail slope = flat/VALID, ≥~2pt = INVALID, PROVISIONAL until passed), cost-per-outcome to the cent with AI-specific margin-inversion-at-scale check, and the money/behaviour/opinion evidence ladder are all Icarus-specific spine, not decoration. Guidance is table/checklist-first in both SKILL.md and template.md — no depth written as prose that should be a table. Verified thin-wrapper: cohort mechanics → cohort-analysis, NSM framework → north-star-metric, CAC/LTV → financial-unit-economics, dashboard → retention-dashboard; all resolve to real M9 skills.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Durian (no cohort data given)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td><strong>24</strong></td><td>PASS</td></tr><tr><td>02 Mentix MAU (never cut cohort)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td><strong>24</strong></td><td>PASS</td></tr><tr><td>03 Barrier &quot;alerts sent&quot;</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td><strong>24</strong></td><td>PASS</td></tr><tr><td>04 Azraq (real curve 100/74/61/52/49/48)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td><strong>25</strong></td><td>PASS</td></tr><tr><td>05 three-numbers-on-the-wall</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td><strong>25</strong></td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on scoring: 01/02/03 lose one point on <code>artifact_complete</code> only because the fellow supplies no cohort curve (and often no token rate/price), so section C is correctly a conditional + &quot;must be measured&quot; and D carries <code>[Assumption]</code> lines rather than hard facts. That is the <em>correct</em> honest output (fabricating the plateau would be an auto_fail), not a defect — but it means the &quot;priced to the cent / flattened plateau&quot; headline is fully realized only when data exists (golden 04). Golden 04 is the cleanest run: the given curve reads as flatten (tail slope month4→5 = −1pt, within the ~1pt rule), plateau ~48%, NORTH STAR VALID; cost $6 vs $90 price → margin $84, ~7% cost ratio, all <code>[Fact]</code>. The kill line bites in every case: vanity-total headline (Durian's 40k, Mentix MAU, Barrier alerts-sent) is an automatic KILL, and no North Star passes without the flattening check.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>The example tags a fabricated plateau as <code>[Fact]</code>.</strong> <code>examples/sample.md</code> line 49 renders the invented illustrative curve's plateau as &quot;~54–55% <code>[Fact]</code> on this cohort&quot; and fills C with fixtures (78/66/58/55/54). The file is labeled &quot;plausible, not real client data,&quot; but tagging a made-up fixture <code>[Fact]</code> models the exact behaviour the skill forbids (Evidence standard: &quot;invent none the fellow did not give&quot;; golden 01 Must-NOT: &quot;invent a retention number the fellow did not have&quot;). A fellow mirroring the sample on the same Durian scenario could present a fabricated plateau as a fact. Fix: re-tag every invented fixture in the sample <code>[Assumption]</code>/<code>[Hypothesis]</code>, or move the illustrative curve behind a louder &quot;SCENARIO FIXTURE — not measured&quot; banner. (Recorded only; judge does not edit the sample.)</li><li><strong>&quot;To the cent&quot; over-promises on partial data.</strong> In 3/5 goldens no token rate and/or price is given, so cost-per-outcome is necessarily an <code>[Assumption]</code>, not a to-the-cent <code>[Fact]</code>. The skill handles this honestly via the evidence tags, but the description headline (&quot;cost-per-outcome priced to the cent&quot;) reads as a firmer guarantee than the input often supports. Consider softening to &quot;priced to the cent when usage/price data exist; otherwise state the one measurement that resolves it.&quot;</li><li><strong><a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> routing is used in golden 03 but not named in SKILL.md.</strong> Golden 03 expects the safety cost-of-a-missed-hazard to route to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (which exists at <code>skills/sandbox/product-icarus/07-commit-build-v1/guardrail-design</code>). SKILL.md's routing table and Related-skills list omit it. The skill still keeps scope correctly (cost/value-per-outcome only), but adding a one-line route for the safety cost-of-error boundary would close the gap cleanly.</li></ul>\n<h2>Refine run 2 — applied judge fixes: re-tagged the example's plateau/retention figures as <code>[Assumption]</code>/illustrative (never <code>[Fact]</code>), softened Step 4's &quot;to the cent&quot; to require the token/compute rate and price first (else <code>[Assumption]</code>), and named <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> in Related for the safety cost-of-error route.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Durian Labs: shift-handover drafter (seed)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our shift-handover drafter is live for warehouse teams. Our North Star is documents drafted — we're at 40,000 all-time and climbing. What else should we track? We meter the customer at $2.00 per handover and our token logs say roughly 7k in / 1.5k out per draft, plus a small vector lookup over past handovers.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>The filled metric scorecard: business game (Productivity), the AARRR skeleton, the retention truth test, cost-per-outcome, and a vanity audit.</li><li><strong>The proposed North Star rejected and reframed.</strong> &quot;Documents drafted / 40,000 all-time&quot; is a cumulative total (can only rise) and an emitted output, not a received outcome. It is killed and reframed to accepted handovers per active team per week (a draft the team accepted and posted).</li><li><strong>The retention truth test run and gating the North Star.</strong> A team-level cohort curve on the outcome; if it flattens (e.g. ~55% by W8, tail slope near zero) the North Star is VALID; if it decayed toward zero the verdict would be INVALID with &quot;documents drafted&quot; named as riding acquisition. The North Star is marked PROVISIONAL until this passes.</li><li><strong>Cost-per-outcome to the cent</strong> computed from the given token counts (~$0.14), against the $2.00 price, with margin per outcome (~$1.86) and its direction as volume grows. Token and infra lines tagged <code>[Assumption]</code> since they are estimated from logs.</li><li>Depth routed, not restated: the NSM framework to <code>north-star-metric</code>, cohort mechanics to <code>cohort-analysis</code>, the dashboard build to <code>retention-dashboard</code>.</li></ul>\n<p>Must NOT: accept &quot;documents drafted&quot; as the North Star; leave the 40,000 total on the scorecard; skip the retention curve; give a cost-per-outcome without the margin and direction; invent a retention number the fellow did not have (state it must be measured).</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/metrics-that-matter/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix: MAU up-and-to-the-right, is it real?",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Mentix's factory copilot MAU is up-and-to-the-right — 300 → 1,900 monthly active managers over two quarters, and we've been buying pilots hard. The board loves the chart. Is this real? What should our actual North Star be? We've never cut it by cohort.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li><strong>The headline flagged as vanity until proven.</strong> MAU is fed by the pilot buying; a rising total cannot distinguish growth from a leak. The scorecard refuses to bless it before the cohort cut.</li><li><strong>The retention truth test demanded as the deciding move.</strong> Because Mentix has never cut by cohort, the honest output is: this cannot be scored yet — cut the manager cohorts on the copilot outcome (a grounded answer used, a draft accepted) and read the tail. Name the two outcomes: if the curve flattens, MAU growth is real; if it decays toward zero, the 1,900 is acquisition spend, not retention, and the North Star built on it is INVALID.</li><li><strong>A real North Star proposed</strong> — a customer-received outcome per active manager per week, not MAU — but held PROVISIONAL until the cohort curve exists.</li><li><strong>No fabricated retention number.</strong> The skill must not invent a plateau; it states what to measure and what each shape would mean. <code>[Hypothesis]</code> on which shape Mentix will see.</li><li>Cost-per-outcome flagged as the next check once the outcome is defined; routed lightly, not invented (no token data given).</li><li>Route the cohort cut to <code>cohort-analysis</code>; the dashboard to <code>retention-dashboard</code>.</li></ul>\n<p>Must NOT: declare the MAU growth real or healthy; propose a North Star and mark it valid without the retention gate; invent a cohort curve or plateau; treat &quot;the board loves it&quot; as evidence (opinion, 0.1).</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/metrics-that-matter/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence: \"alerts sent\" as the North Star",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Barrier's gas-safety product is live on three rigs. Our North Star is alerts sent — we're pushing about 1,200 hazard alerts a week now, up from 400. That shows we're working, right? Each alert runs a couple of model calls over the sensor feed and a field-log lookup.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li><strong>The North Star rejected as an output, not an outcome.</strong> &quot;Alerts sent&quot; measures what the machine emits, not what the crew received or did. It can rise while nothing gets safer — more alerts can even mean more noise. Reframed to the received outcome: hazards acted on / resolved per rig per week (an alert the crew confirmed and closed out).</li><li><strong>The retention truth test on the outcome.</strong> Do the rigs keep acting on alerts, or do they start ignoring them (alert fatigue shows up as a decaying action-rate cohort curve)? The North Star is VALID only if the acted-on curve flattens; a decaying curve means the alerts are becoming wallpaper regardless of volume sent.</li><li><strong>Cost-per-outcome to the cent</strong> per acted-on hazard, from the model calls + field-log lookup described, with margin and direction. Note that in a safety domain the <em>cost of a missed hazard</em> dominates but is a guardrail concern — route that to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, keep this scorecard on cost- and value-per-outcome.</li><li>Vanity audit kills &quot;alerts sent&quot; and total-alerts; keeps the acted-on rate and the curve.</li></ul>\n<p>Must NOT: accept &quot;alerts sent&quot; as the North Star; treat rising alert volume as proof of value; conflate the safety cost-of-error with cost-per-outcome; invent an action-rate the fellow did not measure.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/metrics-that-matter/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Azraq: is our retention any good?",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Azraq sells a subscription data-centre risk report — operators pull an updated risk position each month. We have real cohort data: of the operators who started 6 months ago, 100% pulled a report in month 0, then 74%, 61%, 52%, 49%, 48% by month 5. Is that retention any good? What should we put on the wall as the North Star? A report costs us about $6 in model + data calls to produce and we charge $90 a month.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li><strong>The retention truth test read directly off the given curve.</strong> Shape: flattens — the drop slows and holds near ~48% by month 4–5 (tail slope ~1 pt/period, within the flat rule). Verdict: the North Star built on this outcome is VALID. The plateau (~48%) IS the business — roughly half of every operator cohort keeps pulling reports indefinitely.</li><li><strong>The North Star named as the outcome, not the subscription.</strong> Reports acted on / pulled per active operator per month (a received outcome), with the ~48% plateau as the health reading; the flat, not the starting 100%, is the number on the wall.</li><li><strong>Cost-per-outcome to the cent</strong> from the figures: ~$6 per report vs $90 price → margin ~$84 per report, ~7% cost ratio, direction to watch as model calls change. <code>[Fact]</code> on the given numbers.</li><li>Honest nuance: a ~48% plateau is a real business but not a strong one; note that a smile (resurrection/expansion lifting the tail) would be the next target, and route the cohort slicing depth to <code>cohort-analysis</code> and NRR/LTV to <code>financial-unit-economics</code>.</li></ul>\n<p>Must NOT: call the curve &quot;bad&quot; because it fell to 48% (it flattened — that is PMF); or &quot;great&quot; without reading the plateau; put the 100% month-0 figure forward as the headline; invent expansion data Azraq did not give.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/metrics-that-matter/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian: three numbers on the wall (mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Small one. We just want the three numbers to put on the wall in the office for the handover drafter — nothing fancy, no dashboard project. What three?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Treated as a real scorecard even though it is small and boring. The answer is still three disciplined numbers, not a grab-bag of totals:\n<ol><li>the North Star — accepted handovers per active team per week (the received outcome);</li><li>the retention plateau — the flat-line % of teams still delivering the outcome (the truth number: if it has not been checked, that is the first job, not a wall number yet);</li><li>cost-per-outcome / margin-per-outcome to the cent.</li></ol></li><li><strong>The pull toward vanity totals refused.</strong> &quot;Total drafts&quot; or &quot;users this month&quot; are the obvious wall numbers and are exactly the vanity totals this skill kills. The output says so and gives the actionable replacement for each.</li><li>Keeps it to three; does not spin up a dashboard project (routes that to <code>retention-dashboard</code> if they want it later) or re-teach AARRR. The scorecard obeys the same discipline at wall scale: one outcome, retention as truth, cost per outcome.</li></ul>\n<p>Must NOT: dismiss it as too small for the method; hand back three cumulative totals; over- build into a full dashboard spec when the ask was three numbers.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/metrics-that-matter/tests/golden/05.md"
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
     "html": "<p>&quot;What metrics should we track?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no product, no outcome, no cohort here. The skill must not hand back a generic metrics list or a template full of placeholders as if that were an answer.</p>\n<p>The skill must:</p>\n<ol><li>Refuse to invent metrics. Do not produce a North Star, an AARRR skeleton, or a retention curve for a product that has not been named.</li><li>Ask the ONE question that unblocks the scorecard: what single outcome does this product deliver for the customer? (The North Star is that outcome; the retention curve is measured on it; without it there is nothing to score.)</li><li>Or return the smallest honest next step: name the product and its one delivered outcome, then come back and the scorecard follows in minutes.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: asks the single unblocking question (the delivered outcome), invents no metrics, and scores nothing. May note that retention and cost-per-outcome both attach to that one outcome, so it is the first thing needed.</li><li>FAIL: returns a generic list of metrics to track, a filled AARRR skeleton, or a made-up North Star / retention curve for an unnamed product.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/metrics-that-matter/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our North Star is monthly active users. We're at 1,900 and it's up-and-to-the-right, so we're good — just help us track it better.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Do NOT accept the framing. MAU presented as the North Star is a vanity metric standing in for a real one: it is an activity total fed by acquisition, not a customer-received outcome, and &quot;up-and-to-the-right&quot; is precisely the pattern a leaky bucket shows while every cohort churns out. &quot;Track it better&quot; assumes the metric is right; it is not.</p>\n<p>The skill must:</p>\n<ol><li>Name the trap out loud — MAU is a vanity/activity metric, not an outcome, and a rising total cannot tell growth from a leak. It is the up-and-to-the-right lie.</li><li>Reframe to a customer-received outcome as the North Star (the value the user actually got, per active user per period), and mark it PROVISIONAL.</li><li>Demand the flattening-retention truth test as the deciding evidence: cut the cohorts on that outcome and read the tail. If the curve decays toward zero, the 1,900 is acquisition spend and the North Star is INVALID; only a flattening curve makes it real. Do not &quot;track MAU better&quot; — replace it.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: labels MAU as a vanity/output metric, refuses to adopt it as the North Star, reframes to a received outcome, and requires the retention gate before anything is called healthy. Notes the up-and-to-the-right lie.</li><li>FAIL: accepts MAU as the North Star; helps &quot;track it better&quot; without challenge; calls the 1,900 growth healthy without the cohort/retention check.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/metrics-that-matter/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, the scorecard's done and the North Star is valid. Now design the after-launch loop: how we ship behind sign-off, watch these numbers, and decide when to promote the agent to more autonomy.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is not a metrics-selection request. Designing the ship → observe → learn → refine cadence, and promoting autonomy by eval result rather than by feel, is the improvement loop — that is <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>, the sibling in this same refine section. This skill picks and validates the numbers the loop watches; it does not run the loop.</p>\n<p>The skill must:</p>\n<ol><li>Decline to design the loop / autonomy-promotion cadence itself.</li><li>Name the right skill: <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>.</li><li>State the boundary in one line — this skill chooses the North Star, runs the retention truth test, and prices cost-per-outcome; <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> is the cadence that acts on those metrics and gates autonomy on evals. They compose; they are not the same skill.</li></ol>\n<p>Optionally: if the fellow instead wants to mine what usage is telling them, that is <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a>; and if they want the actual dashboard built, that is <code>retention-dashboard</code> (M9) — also not this skill.</p>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>, and states the one-line boundary. Does not fabricate a ship/observe/promote cadence or an autonomy ladder.</li><li>FAIL: designs the after-launch loop or the autonomy-promotion schedule itself, poaching <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/metrics-that-matter/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/metrics-that-matter/SKILL.md",
  "template": "skills/metrics-that-matter/template.md",
  "example": "skills/metrics-that-matter/examples/sample.md",
  "rubric": "skills/metrics-that-matter/tests/rubric.json",
  "results": "skills/metrics-that-matter/tests/RESULTS.md"
 }
});
