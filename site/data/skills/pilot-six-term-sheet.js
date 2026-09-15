window.ICARUS_SKILL("pilot-six-term-sheet", {
 "name": "pilot-six-term-sheet",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a fellow's proposed pilot and forces a binary check: a real paid pilot, or unpaid work with a slide deck. It fills a six-term sheet — scope, price, the data-rights clause, success metrics, kill criteria, conversion terms priced now — where every term must be non-empty. The output is the filled sheet plus a 6/6 completeness verdict. The verdict is <code>AND</code> across all six: 5/6 is not &quot;almost a pilot,&quot; it is NOT A PILOT, and the skill names the empty term. Two terms carry money signals and get a hard bar (price must move, conversion must be a signed number today); the other four must be concrete, dated, and agreed before work starts. This compresses &quot;how do I structure this deal?&quot; into a contract a fellow can sign in a room.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A pilot is not a free trial and not a demo. It is a priced contract with six terms, and money moving is the only 1.0 on the evidence ladder — the whole reason a pilot exists is to move a claim to the top of that ladder, which a free pilot cannot do. The two terms a fellow will try to skip — a price and a production price agreed today — are the exact two that separate a pilot from a free favour: a free pilot selects for the buyer who never had budget, and &quot;we'll price production after we see results&quot; converts nothing and signals they will not buy. If either is empty, this is not a pilot; call it what it is (a demo, a free POC, a favour) and stop.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has one named customer who wants to try the product and needs the deal structured so it produces a real buying signal, not a reference. Trigger phrases: &quot;pilot terms&quot;, &quot;structure the deal&quot;, &quot;paid pilot&quot;, &quot;pilot term sheet&quot;, &quot;structure the pilot so it isn't a free trial&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Brainstorm 3–5 revenue models for the product and validate willingness to pay&quot;</td><td><code>monetization-strategy</code> (exploratory: which model to bet on, tested cheaply). This skill does the opposite — it commits to ONE pricing basis so the conversion term is a signed number today.</td></tr><tr><td>&quot;Draft the actual data-rights legal clause / the language we put in the contract&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming). This skill carries that clause as term 3 and routes there; it does not write legal language.</td></tr><tr><td>&quot;Is this even the right first thing to build / will it get adopted?&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (section 06). A pilot around a non-wedge is a priced dead end. Confirm the wedge first.</td></tr></tbody></table></div>\n<p>Also do not use it to invent a pilot from nothing. If there is no named customer and no single workflow, the input is not ready; say so and ask for those two things (see Method step 1). Do not fabricate a customer, a number, or a metric to fill the sheet.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six terms, then a completeness verdict.</p>\n<h3 id=\"step-1-confirm-there-is-a-pilot-to-structure\">Step 1 — Confirm there is a pilot to structure</h3>\n<p>You need two facts before the sheet is worth filling: a <strong>named customer</strong> and <strong>one workflow</strong> the pilot covers. If either is missing, stop and ask for it. Do not invent them. If the fellow wants the pilot to be free, this is not the skill — a deliberately free demo is a demo; route it out and say why.</p>\n<p>Two exits, do not confuse them. If the fellow is asking to <strong>structure a paid deal</strong>, run the six-term binary (Step 2) — an empty term returns NOT-A-PILOT <em>with the fix</em>, inside the sheet, so they leave with the deal repaired. If they are describing a <strong>free demo / POC with no intent to charge anyone</strong>, bounce it up front: name it a demo and stop; do not run the binary on something that was never a pilot. Rule of thumb: intent-to-charge → run the binary; no-intent-to-charge → bounce and name it.</p>\n<h3 id=\"step-2-fill-the-six-terms\">Step 2 — Fill the six terms</h3>\n<p>Every term must be non-empty. The bar for each:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Term</th><th>What it fixes</th><th>Non-empty bar (empty = auto-fail the sheet)</th></tr></thead><tbody><tr><td>1</td><td>Scope</td><td>one workflow, bounded, dated</td><td>Names the single workflow, what is explicitly OUT of scope, and a hard start + end date. &quot;Pilot the platform&quot; with no end date is not a scope.</td></tr><tr><td>2</td><td>Price (paid or prepaid)</td><td>money moves</td><td>A currency figure &gt; 0, on a named basis, that moves before or during the pilot — not after, not only-if-it-works. See the price ladder in Step 3.</td></tr><tr><td>3</td><td>Data-rights clause</td><td>the right to use the workflow exhaust</td><td>Names the exhaust the pilot generates, that it compounds with use, and that the clause is signed at pilot #1. Route the actual language to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06); do not draft it here.</td></tr><tr><td>4</td><td>Success metrics</td><td>the pre-agreed pass bar</td><td>≥1 metric with a number and a baseline, measured from data both sides can see, agreed in writing before the pilot starts.</td></tr><tr><td>5</td><td>Kill criteria</td><td>the walk-away, both sides</td><td>The condition(s), a check-point date, and who can pull the plug. Must include a number and a date.</td></tr><tr><td>6</td><td>Conversion terms priced NOW</td><td>the production price, agreed today</td><td>A production figure + basis + the trigger that flips pilot → production, with a signature line dated at pilot signing. &quot;TBD after results&quot; fails this term.</td></tr></tbody></table></div>\n<h3 id=\"step-3-price-it-against-the-price-ladder-term-2\">Step 3 — Price it against the price ladder (term 2)</h3>\n<p>A price is not any mention of money; it is money that moves regardless of outcome. Score the proposed price:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Price form</th><th>Ladder</th><th>Clears term 2?</th></tr></thead><tbody><tr><td>Prepaid in full before kickoff</td><td>money moved 1.0</td><td>Yes — strongest</td></tr><tr><td>Invoiced and collected on a milestone during the pilot</td><td>money moved 1.0</td><td>Yes</td></tr><tr><td>Signed PO / committed spend on net terms, not yet collected</td><td>committed, artefact 0.5</td><td>Yes, only if the PO is signed</td></tr><tr><td>&quot;Pay if it works&quot; — success-contingent, no floor</td><td>verbal 0.3</td><td>No — a bet you fund, not a price</td></tr><tr><td>Free / in-kind / testimonial / logo / exposure</td><td>opinion 0.1</td><td>No — not a pilot</td></tr></tbody></table></div>\n<p>A success-contingent number with no floor fails term 2. The fix is a floor fee that moves regardless, with any outcome bonus stacked on top — never outcome-only.</p>\n<h3 id=\"step-4-price-the-conversion-now-term-6-commit-one-basis\">Step 4 — Price the conversion NOW (term 6), commit one basis</h3>\n<p>Conversion is priced at pilot signing, on ONE basis. Pick one; name the reason:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Basis</th><th>Convert on</th><th>Fits</th></tr></thead><tbody><tr><td>Per-seat / per-user</td><td>number of users</td><td>team-adopted copilots</td></tr><tr><td>Per-unit of work (usage)</td><td>volume: runs, lines, tickets, permits</td><td>variable-volume workflows</td></tr><tr><td>Per-outcome</td><td>the result delivered (incident avoided, hour saved)</td><td>when the outcome is cleanly attributable</td></tr><tr><td>Subscription per site / line / asset</td><td>a fixed recurring unit</td><td>stable, always-on workflows</td></tr><tr><td>Transaction fee</td><td>% of value flowing through</td><td>marketplace / flow products</td></tr></tbody></table></div>\n<p>Reframe boundary: <code>monetization-strategy</code> explores which of these to bet on and tests willingness to pay. This skill does the opposite — it commits to one basis so the conversion price is a signed number today, not an open question. Term 6 also names the <strong>conversion trigger</strong>: which success metric (term 4), at what threshold, flips pilot into production. Without a trigger, &quot;conversion&quot; is a hope.</p>\n<h3 id=\"step-5-compute-the-verdict-binary-and-across-six\">Step 5 — Compute the verdict (binary AND across six)</h3>\n<p>Real pilot <strong>only if 6/6</strong>. Any empty term returns: <em>not a pilot.</em> Name the empty term(s) and what they make it instead (a demo, a free POC, unpaid consulting). Do not soften. Do not average.</p>\n<p><strong>Kill line.</strong> If this skill labels something a pilot while any of the six terms is empty, or price is 0 / success-contingent-only, or conversion is deferred, the output is auto-failed. 6/6 with a moving price and a signed conversion is the only path to &quot;real pilot.&quot;</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>The pilot is the instrument that moves a claim to 1.0. A &quot;successful&quot; free pilot proves nothing above 0.3 — they used it and said nice things — because no money changed hands. So the two money terms carry the bar: term 2 (price) must clear money-moved 1.0, or committed 0.5 with a signed PO; term 6 (conversion) must be a signed production price, which is a booked 1.0 commitment for the next stage. A letter of intent, a testimonial, a logo, or &quot;budget next quarter&quot; are 0.3 or below and do not clear either term. Tag each empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A term whose whole case is <code>[Assumption]</code> (e.g. &quot;they'll probably sign the PO&quot;) is not filled; it is a thing to go get signed before the pilot starts.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>The success-contingent &quot;price.&quot; &quot;They'll pay $80k if incidents drop 20%&quot; reads like a price but is a bet the fellow funds — if it misses, the vendor ate the cost of the pilot and the buyer risked nothing. It is 0.3, not 1.0, and it fails term 2. A real price has a floor that moves regardless of outcome; put the outcome bonus on top of the floor, never in place of it.</p>\n<p>Conversion deferred to &quot;after we prove value.&quot; This is term 6 left empty, dressed as reasonable. The buyer with real intent will price production at pilot signing because the pilot is how they justify the spend internally; the buyer who insists on deciding later is telling you they have not decided to buy. Price it now or read the deferral as the answer.</p>\n<p>The free pilot for the marquee logo. A big-name customer tempts a fellow to waive price &quot;for the reference.&quot; A free pilot selects for the buyer who never had budget, and the reference is worth less than the signal that they would not pay. If they genuinely cannot pay cash, take prepaid credit or a signed conversion price — never zero. Zero is not a discount; it is the absence of the signal the pilot exists to produce.</p>\n<p>Data-rights left for the production contract. &quot;We'll sort out data rights when we do the real deal&quot; loses the moat seed: the workflow exhaust generated during the pilot is the compounding asset, and the clause signs at pilot #1 or the right is gone (route to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>). Term 3 is not bolt-on-able later.</p>\n<p>Unbounded scope becomes free consulting. &quot;Pilot the whole platform&quot; with no end date and no OUT-of-scope list has no pass bar; it drifts into months of unpaid customization. Term 1 must name what is out and a hard end date, or the pilot funds the customer, not the other way round.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full six-term sheet for Mentix's first paid pilot (factory-manager copilot on one plant line), including the fellow's first draft (a free 8-week POC with pricing &quot;TBD&quot;) and the two-term upgrade that turns it into a real pilot. Numbers are illustrative test fixtures.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><code>monetization-strategy</code> (concept) — the skill this one absorbs and reframes. It brainstorms and validates which revenue model to bet on across the product; this skill commits to one basis so the conversion term is a signed number at pilot signing. Send a fellow there when the pricing model itself is still open; use this when it is time to write the deal.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming) — owns term 3's legal language. This skill flags that the clause must be signed at pilot #1 and routes there; it does not draft the clause.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (section 06) — confirms the thing being piloted is a real wedge. Run that first; a priced pilot around a non-wedge is a well-structured dead end.</p>\n<p>Supersedes: none. This is a new skill; there is no prior pilot-structuring skill in the pack to beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Pilot Term Sheet — Six Terms</h1>\n<p>Fill every term. Do not average, do not round up. The verdict is <code>AND</code> across all six: a real pilot only on 6/6, with a moving price (term 2) and a signed conversion price (term 6).</p>\n<h2>0. Is there a pilot to structure?</h2>\n<ul><li><strong>Named customer:</strong> <em>[the specific account — not &quot;a factory,&quot; a named one]</em></li><li><strong>One workflow:</strong> <em>[the single workflow the pilot covers]</em></li></ul>\n<p>If either is blank, stop. There is no pilot to structure yet — go get the named customer and the one workflow. Do not invent them. If the intended pilot is free, this is a demo, not a pilot; route it out.</p>\n<h2>1. Scope</h2>\n<ul><li><strong>The one workflow:</strong> <em>[what the pilot does, for whom, on what trigger]</em></li><li><strong>Explicitly OUT of scope:</strong> <em>[what this pilot does NOT touch — other lines, other teams, integrations, writeback]</em></li><li><strong>Window:</strong> start <em>[date]</em> → end <em>[date]</em> (hard end, not open-ended)</li></ul>\n<h2>2. Price (paid or prepaid) — money must move</h2>\n<ul><li><strong>Amount:</strong> <em>[currency figure &gt; 0]</em> on basis <em>[flat fee / per-week / per-seat / …]</em></li><li><strong>When it moves:</strong> <em>[prepaid before kickoff / invoiced + collected on milestone / signed PO net terms]</em></li><li><strong>Ladder score:</strong> <em>[money moved 1.0 / committed-with-signed-PO 0.5]</em> — tag <code>[Fact]</code>/<code>[Assumption]</code></li></ul>\n<div class=\"table-wrap\"><table><thead><tr><th>Price form</th><th>Clears term 2?</th></tr></thead><tbody><tr><td>Prepaid in full before kickoff</td><td>Yes — strongest (1.0)</td></tr><tr><td>Invoiced + collected on a milestone during the pilot</td><td>Yes (1.0)</td></tr><tr><td>Signed PO on net terms, not yet collected</td><td>Yes only if PO signed (0.5)</td></tr><tr><td>&quot;Pay if it works&quot; — no floor</td><td><strong>No — a bet you fund, not a price (0.3)</strong></td></tr><tr><td>Free / in-kind / testimonial / logo</td><td><strong>No — not a pilot (0.1)</strong></td></tr></tbody></table></div>\n<p>If success-contingent: add a floor fee that moves regardless, put the bonus on top.</p>\n<h2>3. Data-rights clause — signed at pilot #1</h2>\n<ul><li><strong>Workflow exhaust the pilot generates:</strong> <em>[the data the workflow throws off — corrections, labels, logs, sensor traces]</em></li><li><strong>Compounds with use?</strong> <em>[yes / no + why]</em></li><li><strong>Signed at pilot #1?</strong> <em>[YES — required]</em> · Clause language: route to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06); do not draft it here.</li><li>Jurisdiction flags for counsel: <em>[mark residency / government-entity / sponsor realities as <span class=\"tag tag-assumption\">Assumption</span> — do not fabricate legal specifics]</em></li></ul>\n<h2>4. Success metrics — agreed before start</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Baseline</th><th>Pass bar (number)</th><th>Measured from (data both sides see)</th></tr></thead><tbody><tr><td><em>[metric]</em></td><td><em>[baseline]</em></td><td><em>[target number]</em></td><td><em>[the shared source]</em></td></tr></tbody></table></div>\n<ul><li><strong>Agreed in writing before kickoff?</strong> <em>[YES — required]</em> · tag <code>[Fact]</code>/<code>[Assumption]</code></li></ul>\n<h2>5. Kill criteria — the walk-away, both sides</h2>\n<ul><li><strong>Check-point date:</strong> <em>[a dated mid-pilot review]</em></li><li><strong>Either side walks if:</strong> <em>[condition with a number — e.g. &quot;acceptance &lt; 30% of shifts&quot; OR &quot;no measurable movement by week 4&quot;]</em></li><li><strong>Who can pull the plug:</strong> <em>[named — both sides]</em></li></ul>\n<h2>6. Conversion terms priced NOW — signed today</h2>\n<ul><li><strong>Production price + basis:</strong> <em>[figure]</em> per <em>[seat / unit / outcome / site-line-asset / transaction]</em> — pick ONE basis; reason: <em>[why this basis]</em></li><li><strong>Conversion trigger:</strong> if <em>[which success metric from term 4]</em> hits <em>[threshold]</em>, the pilot converts to production at the price above.</li><li><strong>Signed at pilot signing:</strong> <em>[signature line, dated at pilot start]</em> — &quot;TBD after results&quot; fails this term.</li></ul>\n<h2>7. Completeness verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Present + clears its bar?</th></tr></thead><tbody><tr><td>1 Scope (bounded + dated)</td><td><em>[YES/NO]</em></td></tr><tr><td>2 Price (money moves)</td><td><em>[YES/NO]</em></td></tr><tr><td>3 Data-rights clause (signed at #1)</td><td><em>[YES/NO]</em></td></tr><tr><td>4 Success metrics (pre-agreed, numbered)</td><td><em>[YES/NO]</em></td></tr><tr><td>5 Kill criteria (number + date + who)</td><td><em>[YES/NO]</em></td></tr><tr><td>6 Conversion priced now (signed today)</td><td><em>[YES/NO]</em></td></tr></tbody></table></div>\n<p><strong>Score:</strong> <em>[n]</em> / 6</p>\n<p><strong>Verdict:</strong> <em>[REAL PILOT (only if 6/6) | NOT A PILOT — name the empty term(s) and what it makes this: demo / free POC / unpaid consulting]</em></p>\n<h2>8. For each empty term — the one change that fills it</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Empty #</th><th>Why it's empty</th><th>Smallest change that fills it</th></tr></thead><tbody><tr><td><em>[#]</em></td><td><em>[the specific gap]</em></td><td><em>[the one change — e.g. &quot;replace 'pay if it works' with a $24k prepaid floor + outcome bonus&quot;]</em></td></tr></tbody></table></div>\n<h2>9. Next step</h2>\n<ul><li>If <strong>6/6</strong>: this is the pilot. Send it. Instrument term 4's metric from day one so the conversion trigger is legible.</li><li>If <strong>not 6/6</strong>: do not run it as a pilot. Fill the empty term(s) in section 8, or accept it is a demo and stop calling it a pilot.</li><li>Terms resting on <code>[Assumption]</code> (an unsigned PO, an unconfirmed metric) are not filled; they are the thing to get signed before the pilot starts.</li></ul>",
  "path": "skills/pilot-six-term-sheet/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix's first paid pilot</h1>\n<p>Mentix builds an AI copilot for factory managers. Their first target workflow is shift-start downtime triage: at the start of every shift, a line manager has to work out why the line stopped overnight and what to fix first. This is a test fixture: numbers are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;A plant loved the demo and wants to try the copilot on their bottleneck line. I want to run a free 8-week POC to earn the reference, then we'll figure out pricing once we've proven the value. How do I write this up?&quot;</p>\n<p>Stated facts:</p>\n<ul><li>Named customer: one mid-size auto-parts plant. <span class=\"tag tag-fact\">Fact</span></li><li>One workflow: shift-start downtime triage on Line 3 (their bottleneck). <span class=\"tag tag-fact\">Fact</span></li><li>Signal so far: they loved the demo. [Fact — but this is opinion-grade, 0.1]</li><li>The plant runs on an MES that timestamps every line stop and shift handover. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>The challenge, before the sheet</h2>\n<p>Two things are wrong with the input, and they are the exact two terms fellows skip:</p>\n<ul><li><strong>&quot;Free POC.&quot;</strong> A free pilot selects for a buyer who never had budget. &quot;Loved the demo&quot; is a 0.1 opinion; running it free proves nothing above 0.3. The pilot exists to move this to money-moved 1.0. Price it.</li><li><strong>&quot;Figure out pricing later.&quot;</strong> Deferred conversion converts nothing. The plant that will buy will price production now, because that price is how the plant manager justifies the spend to finance. Deferral is the answer, not a step.</li></ul>\n<p>Everything else is fillable. Here is the sheet after the upgrade.</p>\n<h2>Six-term sheet</h2>\n<h3>1. Scope</h3>\n<ul><li>One workflow: shift-start downtime triage on <strong>Line 3 only</strong>, three shifts/day.</li><li>OUT of scope: all other lines, maintenance scheduling, ERP/CMMS writeback, quality inspection.</li><li>Window: 8 weeks, hard end date fixed at signing.</li></ul>\n<h3>2. Price (paid or prepaid)</h3>\n<ul><li><strong>$24,000 prepaid</strong> for the 8-week window, invoiced and collected before kickoff. [Assumption until the invoice clears; becomes Fact on collection]</li><li>Ladder: money moved <strong>1.0</strong> on collection. Clears term 2.</li><li>(First draft was $0. The upgrade is the difference between a favour and a pilot.)</li></ul>\n<h3>3. Data-rights clause</h3>\n<ul><li>Workflow exhaust: the copilot's downtime-cause labels <strong>plus the line manager's corrections</strong> to them each shift. This is the compounding asset — every correction sharpens the model on this plant's failure modes.</li><li>Compounds with use: yes — correction volume rises with shifts run.</li><li>Signed at pilot #1: <strong>yes</strong>. Clause language routed to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06); not drafted here.</li><li>Counsel flag: if the plant is a GCC-based or government-linked operator, data residency and government-entity data handling may bind — mark <code>[Assumption]</code>, confirm with counsel. Do not assert legal specifics.</li></ul>\n<h3>4. Success metrics</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Baseline</th><th>Pass bar</th><th>Measured from</th></tr></thead><tbody><tr><td>Mean shift-start triage time, Line 3</td><td>35 min [Fact, from MES]</td><td>≤ 20 min over the final 4 weeks</td><td>Plant's own MES timestamps (both sides see them)</td></tr></tbody></table></div>\n<p>Agreed in writing before kickoff. Behaviour observed 0.7 once running.</p>\n<h3>5. Kill criteria</h3>\n<ul><li>Check-point: end of week 4.</li><li>Either side walks if copilot suggestions are accepted on <strong>&lt; 30% of shifts</strong>, OR triage time shows <strong>no measurable movement</strong> by week 4.</li><li>Who can pull the plug: plant operations lead or Mentix, at the week-4 review.</li></ul>\n<h3>6. Conversion terms priced NOW</h3>\n<ul><li>Production: <strong>subscription at $6,000 / line / month</strong>, one basis (per-line — the workflow is always-on and line-scoped).</li><li>Conversion trigger: if week-8 mean triage time hits <strong>≤ 20 min</strong>, the plant converts Line 3 and adds <strong>≥ 2 further lines within 60 days</strong> at that rate.</li><li>Signed at pilot signing, dated at the pilot start. Not &quot;TBD.&quot;</li></ul>\n<h2>Completeness verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Clears its bar?</th></tr></thead><tbody><tr><td>1 Scope</td><td>YES — one line, OUT-list, 8-week hard end</td></tr><tr><td>2 Price</td><td>YES — $24k prepaid, money moved 1.0</td></tr><tr><td>3 Data-rights clause</td><td>YES — exhaust named, compounds, signed at #1</td></tr><tr><td>4 Success metrics</td><td>YES — 35→≤20 min, MES-measured, pre-agreed</td></tr><tr><td>5 Kill criteria</td><td>YES — &lt;30% acceptance / no movement, week-4, both sides</td></tr><tr><td>6 Conversion priced now</td><td>YES — $6k/line/mo, trigger + signature today</td></tr></tbody></table></div>\n<p><strong>Score: 6 / 6 — REAL PILOT.</strong></p>\n<h2>The two terms that made it real</h2>\n<p>The first draft scored 4/6: scope, data-rights, metrics and kill criteria were all fillable from the start. It failed on term 2 (free) and term 6 (deferred) — and 4/6 is NOT A PILOT, it is a free POC.</p>\n<p>The upgrade was not rhetorical. Term 2 went from $0 to $24k prepaid — money moved, the only 1.0 signal the pilot can produce. Term 6 went from &quot;TBD&quot; to a signed $6k/line/month with a metric-gated trigger — a booked commitment for the next stage. Those are the two terms fellows skip, and they are the two that separate a pilot from a free favour. A plant that will not prepay $24k or sign a production price today is not a buyer; better to learn that before the 8 weeks than after.</p>",
  "path": "skills/pilot-six-term-sheet/examples/sample.md"
 },
 "rubric": {
  "skill": "pilot-six-term-sheet",
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
    "Structure the pilot terms for this deal.",
    "Help me structure the deal with this customer.",
    "How do I set up a paid pilot?",
    "Write me a pilot term sheet.",
    "Structure the pilot so it isn't a free trial."
   ],
   "mustNotFire": [
    {
     "phrase": "Brainstorm 3–5 revenue models and validate which one customers will pay for",
     "sibling": "monetization-strategy",
     "local": false
    },
    {
     "phrase": "Draft the data-rights legal clause for the pilot",
     "sibling": "data-rights-clause",
     "local": true
    },
    {
     "phrase": "Is this the right wedge — will it actually get adopted?",
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
    "evidenceHtml": "<p>All 5 MUST-fire hit explicit trigger phrases in the description (&quot;pilot terms&quot;, &quot;structure the deal&quot;, &quot;paid pilot&quot;, &quot;pilot term sheet&quot;, &quot;structure the pilot so it isn't a free trial&quot;). All 3 MUST-NOT are explicitly excluded in the description and routed to monetization-strategy / data-rights-clause / wedge-five-questions.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>per-case table below</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01: Step 1 stops and asks named customer + one workflow + pay signal, no fabrication. 02: price ladder + &quot;free pilot for the marquee logo&quot; gotcha refuse LOI/testimonial/logo/exposure as term 2 (0.1–0.3, no money moved). 03: declines without poaching, names monetization-strategy, offers explore-then-commit ordering. No fabrication, no flattery, no scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code> — new skill, nothing to beat.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: a generic prompt blesses the free &quot;reference&quot; POC and defers pricing — the exact two moves this skill refuses via the evidence ladder (money-moved 1.0) and the &quot;two terms fellows skip&quot; reframe. Binary-AND 6/6 kill line, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, and sibling routing are Icarus-specific. Guidance is tabular throughout (term bars, price ladder, conversion basis, verdict) — no load-bearing prose that should be a table.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>requires 5+ real fellow uses — not executable here</p>"
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
     "label": "Golden 01 (Mentix seed) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "YES",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "Golden 02 (Azraq refusal) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "YES",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "Golden 03 (Barrier success-contingent) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "YES",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "Golden 04 (Durian mundane) 5",
     "dims": [
      5,
      4,
      5,
      4,
      5
     ],
     "total": 23,
     "verdictRaw": "YES",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "Golden 05 (Mentix 5/6 deferred) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "YES",
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
    "GRADUATE-READY",
    "see judge run below"
   ]
  ],
  "gotchasSurfaced": "<ul><li>Minor boundary tension, non-blocking: Step 1 says a fellow who &quot;wants the pilot to be free&quot; should be routed OUT (&quot;a deliberately free demo is a demo; route it out&quot;), yet Golden 02 (offered free &quot;for the logo&quot;) is correctly handled IN-skill as a NOT-A-PILOT verdict with the money fix. Both are right, but the line between &quot;route out at Step 1 (intentional free demo)&quot; vs &quot;run the binary and return NOT A PILOT + fix (a would-be pilot proposed free)&quot; could be stated more crisply so a fellow does not bounce a genuine deal out prematurely.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: Step 1 now states the two exits explicitly — intent-to-charge → run the six-term binary and return NOT-A-PILOT with the fix; free demo/POC with no intent to charge → bounce up front and name it.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — pilot-six-term-sheet</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Structure the pilot terms for this deal.&quot;</li><li>&quot;Help me structure the deal with this customer.&quot;</li><li>&quot;How do I set up a paid pilot?&quot;</li><li>&quot;Write me a pilot term sheet.&quot;</li><li>&quot;Structure the pilot so it isn't a free trial.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Brainstorm 3–5 revenue models and validate which one customers will pay for&quot; → belongs to <code>monetization-strategy</code></li><li>&quot;Draft the data-rights legal clause for the pilot&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06)</li><li>&quot;Is this the right wedge — will it actually get adopted?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire hit explicit trigger phrases in the description (&quot;pilot terms&quot;, &quot;structure the deal&quot;, &quot;paid pilot&quot;, &quot;pilot term sheet&quot;, &quot;structure the pilot so it isn't a free trial&quot;). All 3 MUST-NOT are explicitly excluded in the description and routed to monetization-strategy / data-rights-clause / wedge-five-questions.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case table below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01: Step 1 stops and asks named customer + one workflow + pay signal, no fabrication. 02: price ladder + &quot;free pilot for the marquee logo&quot; gotcha refuse LOI/testimonial/logo/exposure as term 2 (0.1–0.3, no money moved). 03: declines without poaching, names monetization-strategy, offers explore-then-commit ordering. No fabrication, no flattery, no scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code> — new skill, nothing to beat.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: a generic prompt blesses the free &quot;reference&quot; POC and defers pricing — the exact two moves this skill refuses via the evidence ladder (money-moved 1.0) and the &quot;two terms fellows skip&quot; reframe. Binary-AND 6/6 kill line, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, and sibling routing are Icarus-specific. Guidance is tabular throughout (term bars, price ladder, conversion basis, verdict) — no load-bearing prose that should be a table.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses — not executable here</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (5 dims × 0–5, pass ≥21 and no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>Golden 01 (Mentix seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>YES</td></tr><tr><td>Golden 02 (Azraq refusal)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>YES</td></tr><tr><td>Golden 03 (Barrier success-contingent)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>YES</td></tr><tr><td>Golden 04 (Durian mundane)</td><td>5</td><td>4</td><td>5</td><td>4</td><td>5</td><td>23</td><td>YES</td></tr><tr><td>Golden 05 (Mentix 5/6 deferred)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>YES</td></tr></tbody></table></div>\n<p>No auto_fail triggered on any case: illustrative numbers are clearly marked as test fixtures (not fabricated as real client data); weak inputs are challenged, not flattered; the skill stays in-scope and routes siblings out.</p>\n<p>Special-check (orchestrator): six terms present and gated on a hard 6/6 <code>AND</code> (Golden 02/03 = 4/6, Golden 05 = 5/6 all return NOT A PILOT — no averaging, no softening). Free and conversion-deferred &quot;pilots&quot; are refused and renamed (demo / free POC / favour). Term 3 routes the legal language to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> and does not rebuild it. All satisfied.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li>Minor boundary tension, non-blocking: Step 1 says a fellow who &quot;wants the pilot to be free&quot; should be routed OUT (&quot;a deliberately free demo is a demo; route it out&quot;), yet Golden 02 (offered free &quot;for the logo&quot;) is correctly handled IN-skill as a NOT-A-PILOT verdict with the money fix. Both are right, but the line between &quot;route out at Step 1 (intentional free demo)&quot; vs &quot;run the binary and return NOT A PILOT + fix (a would-be pilot proposed free)&quot; could be stated more crisply so a fellow does not bounce a genuine deal out prematurely.</li></ul>\n<h2>Refine run 2 — applied judge fixes: Step 1 now states the two exits explicitly — intent-to-charge → run the six-term binary and return NOT-A-PILOT with the fix; free demo/POC with no intent to charge → bounce up front and name it.</h2>"
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
     "html": "<p>&quot;A plant loved the demo and wants to try our factory-manager copilot on their bottleneck line. I want to run a free 8-week POC to earn the reference, then figure out pricing once we've proven value. Write up the pilot.&quot;</p>\n<p>Facts on the table:</p>\n<ul><li>Named customer: one mid-size auto-parts plant. <span class=\"tag tag-fact\">Fact</span></li><li>One workflow: shift-start downtime triage on Line 3 (bottleneck). <span class=\"tag tag-fact\">Fact</span></li><li>Plant runs an MES that timestamps every line stop and shift handover. <span class=\"tag tag-fact\">Fact</span></li><li>Signal so far: &quot;loved the demo&quot; (opinion, 0.1). [Fact that it was said]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Filled six-term sheet, every term non-empty.</li><li>Term 1 scope: one line, an OUT-of-scope list, a hard 8-week end date.</li><li>Term 2 price: <strong>rejects &quot;free&quot;</strong>; sets a prepaid figure that moves before/during the pilot (money moved 1.0). Must not accept $0.</li><li>Term 3 data-rights: names the exhaust (copilot cause-labels + manager corrections), states it compounds, signs at pilot #1, routes language to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>. Any GCC/government jurisdiction note tagged <code>[Assumption]</code> for counsel, not asserted.</li><li>Term 4 metrics: a numbered pass bar with a baseline (e.g. triage time X→≤Y min), measured from the plant's MES (shared data), agreed before start.</li><li>Term 5 kill criteria: a number + a dated check-point + who can pull the plug, both sides.</li><li>Term 6 conversion: <strong>priced now</strong> on ONE basis with a metric-gated trigger and a signature dated at pilot signing. Must reject &quot;figure out pricing later.&quot;</li><li>Verdict: <strong>REAL PILOT, 6/6</strong>, only after upgrading the two skipped terms (price, conversion).</li><li>Names that the first draft was 4/6 (NOT A PILOT) and why the two money terms flip it.</li></ul>\n<p>Numbers that must appear: 6/6; a non-zero prepaid price; a numbered success metric; a signed conversion price. No fabricated numbers beyond illustrative fixtures clearly marked.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre / infrastructure risk) — refusal case",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;A marquee data-centre operator will let us run our uptime-risk report on their facility for free — it's a huge logo. Scope is their Riyadh site for 12 weeks, we'll define success as 'they find it useful,' and we'll talk about a production contract after we've proven the value. Structure this pilot.&quot;</p>\n<p>Facts on the table:</p>\n<ul><li>Named customer: one marquee operator, one named site. <span class=\"tag tag-fact\">Fact</span></li><li>One workflow: static uptime-risk report on that site. <span class=\"tag tag-fact\">Fact</span></li><li>Price offered: free (&quot;for the logo&quot;). <span class=\"tag tag-fact\">Fact</span></li><li>Success: &quot;they find it useful.&quot; [Fact that it was proposed — opinion-grade]</li><li>Conversion: &quot;after we've proven value.&quot; <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Verdict: NOT A PILOT</strong> — do not fill a clean sheet and bless it.</li><li>Names the empty/failing terms explicitly:\n<ul><li>Term 2 price = free → 0.1, fails. A free pilot selects for a buyer who never had budget; the logo is worth less than the signal that they will not pay.</li><li>Term 4 success = &quot;find it useful&quot; is opinion (0.1), not a numbered pass bar → fails until it names a number measured from shared data.</li><li>Term 6 conversion = &quot;after we prove value&quot; is deferred → fails.</li></ul></li><li>Scope (term 1) is acceptable (named site, 12-week window) — credit what is present, fail what is not.</li><li>The fix, not a softening: replace free with prepaid or, if truly no cash, prepaid credit + a signed conversion price; replace &quot;useful&quot; with a numbered uptime/incident metric from the operator's own monitoring; price production now. Take the reference AND the money.</li><li>Data-rights (term 3) flagged as required at pilot #1 (facility risk exhaust), routed to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>; any KSA data-residency / government-entity note tagged <code>[Assumption]</code> for counsel.</li><li>Challenge tone: does not flatter the logo. Says plainly this is a free favour in a pilot costume.</li></ul>\n<p>Numbers that must appear: the 6/6 requirement and that this scores well below it; the specific empty terms (2, 4, 6).</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (oil & gas safety) — success-contingent \"price\"",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;An operator will run our gas-safety alert system on two rigs for a 10-week pilot. They'll pay us $80,000 — but only if recordable gas incidents drop 20% over the window. Scope is the two rigs, success is the 20% drop, we can kill at week 5 if acceptance is low, and if it works they convert to $9,000/rig/month. Data rights we'll sort in the production contract. Is this a real pilot?&quot;</p>\n<p>Facts on the table:</p>\n<ul><li>Named customer: one operator, two named rigs. <span class=\"tag tag-fact\">Fact</span></li><li>One workflow: gas-safety alert system on the rigs. <span class=\"tag tag-fact\">Fact</span></li><li>Price: $80k, payable only if incidents drop 20% (success-contingent, no floor). <span class=\"tag tag-fact\">Fact</span></li><li>Success metric: 20% drop in recordable gas incidents. [Fact — numbered, good]</li><li>Kill: week-5 check on acceptance. <span class=\"tag tag-fact\">Fact</span></li><li>Conversion: $9k/rig/month if it works. [Fact — priced now, good]</li><li>Data rights: deferred to production contract. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Verdict: NOT A PILOT (as written)</strong> — one term fails hard, one is empty.</li><li>Term 2 price: the $80k is <strong>success-contingent with no floor → 0.3, a bet Barrier funds, not a price.</strong> If incidents don't drop, Barrier ate 10 weeks and the operator risked nothing. Fails term 2.\n<ul><li>Fix: a floor fee that moves regardless (e.g. prepaid $30k for the window) with the outcome bonus stacked on top (e.g. +$50k on the 20% drop). Floor + bonus, never bonus-only.</li></ul></li><li>Term 3 data-rights: <strong>deferred → empty, fails.</strong> Rig-sensor exhaust + officer overrides are the moat seed and the clause signs at pilot #1, not later. Route to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>. Do not accept &quot;sort it in the production contract.&quot;</li><li>Credit what is right: term 1 (two named rigs, 10-week window), term 4 (numbered 20% drop, though confirm it's measured from a shared incident log), term 5 (week-5 kill), term 6 (conversion priced now at $9k/rig/mo). These four are fine.</li><li>So the sheet is 4/6: fails on price-with-no-floor and deferred data-rights. Name both; give both fixes.</li><li>Success-metric caution: confirm the 20% is measured from data both sides see and that the baseline incident rate is agreed before start (tag <code>[Assumption]</code> if not).</li></ul>\n<p>Numbers that must appear: 4/6; the two failing terms (2 price-floor, 3 data-rights); the floor + bonus fix.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (early workflow product) — deliberately mundane case",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;One regional grocery chain wants to try our weekly stockout digest for their 12 stores. Nothing glamorous. They've said they'd pay a small fee to run it for a quarter. Help me structure the pilot.&quot;</p>\n<p>Facts on the table:</p>\n<ul><li>Named customer: one regional grocery chain, 12 stores. <span class=\"tag tag-fact\">Fact</span></li><li>One workflow: the weekly stockout digest. <span class=\"tag tag-fact\">Fact</span></li><li>Willingness to pay: &quot;a small fee for a quarter.&quot; [Fact — verbal, 0.3, not yet money]</li><li>The chain exports sales-and-stock data to a shared sheet the fellow can already see. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Filled six-term sheet — mundane does not mean loose. Every term still non-empty.</li><li>Term 1 scope: the digest for those 12 stores, OUT-of-scope list (no reorder writeback, no other regions), a one-quarter window with a hard end date.</li><li>Term 2 price: convert the &quot;small fee&quot; (0.3 verbal) into a real number that moves — a modest prepaid fee for the quarter, invoiced before kickoff. Must not leave it at &quot;they said they'd pay.&quot; An unpriced &quot;small fee&quot; is 0.3 and does not clear term 2.</li><li>Term 3 data-rights: the digest's stockout predictions + the buyer's accept/ignore of each is the exhaust; compounds; signed at pilot #1; routed to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>.</li><li>Term 4 metrics: a numbered pass bar (e.g. reduce out-of-stock SKU-days by N%, or the buyer acts on ≥X% of flagged SKUs), measured from the shared sheet, agreed before start.</li><li>Term 5 kill criteria: a number + a dated check + who pulls the plug.</li><li>Term 6 conversion: priced now, ONE basis (per-store/month fits a store-scoped always-on workflow), with a metric-gated trigger and a signature dated at signing.</li><li>Verdict: <strong>REAL PILOT, 6/6</strong> — a clean, unglamorous pass. Still challenge: the WTP was verbal until the fee is prepaid; flag the small sample (one chain) and note what confirms at scale.</li></ul>\n<p>Numbers that must appear: 6/6; a non-zero prepaid fee; a numbered success metric; a per-store conversion price signed now.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix (second plant) — 5/6, conversion deferred",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Second plant, cleaner deal this time. Scope is one packaging line for 8 weeks with a fixed OUT-of-scope list. They're prepaying $20,000 before we start. Data-rights clause signs at kickoff — routing the language to legal. Success is mean changeover-triage time from 28 min down to ≤18 min, measured off their MES. We can both kill at week 4 if acceptance is under 30%. On production pricing, they want to wait and see the results before we commit to a number. Good to go?&quot;</p>\n<p>Facts on the table:</p>\n<ul><li>Named customer: second plant, one packaging line. <span class=\"tag tag-fact\">Fact</span></li><li>Term 1 scope: one line, 8 weeks, OUT-list. [Fact — clean]</li><li>Term 2 price: $20k prepaid before start. [Fact — money moved 1.0, clean]</li><li>Term 3 data-rights: signs at kickoff, language to legal. [Fact — clean]</li><li>Term 4 metrics: 28 → ≤18 min, MES-measured. [Fact — clean]</li><li>Term 5 kill: week-4, acceptance &lt;30%, both sides. [Fact — clean]</li><li>Term 6 conversion: &quot;wait and see the results before committing a number.&quot; [Fact — deferred]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Verdict: NOT A PILOT (as written) — 5/6.</strong> Five terms are genuinely clean; do not manufacture problems with them.</li><li>The single failing term is <strong>6 (conversion), deferred.</strong> This is the flagship point: five strong terms do not rescue a deferred conversion, because 6/6 is <code>AND</code>. Deferred conversion converts nothing and signals the buyer has not decided to buy.</li><li>The fix: price production now on one basis (per-line/month fits), with the conversion trigger gated on the week-8 ≤18 min metric, signed at pilot signing. &quot;Wait and see&quot; is not a term.</li><li>Reframe surfaced: conversion-priced-now is one of the two terms fellows skip; the buyer who will convert prices it today because that price is how they justify the spend internally. Read the deferral as the answer, and go get the signature before kickoff.</li><li>Do not soften to &quot;5/6 is basically ready.&quot; It is NOT A PILOT until term 6 is filled.</li></ul>\n<p>Numbers that must appear: 5/6; that term 6 is the sole failure; the one-basis conversion fix with a metric-gated trigger.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/golden/05.md"
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
     "html": "<p>&quot;How should I structure my pilot?&quot;</p>\n<p>No customer, no workflow, no price, no metric. Nothing to structure.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not fill a six-term sheet on nothing. There are no terms to write.</li><li>Do not invent a customer, a workflow, a price, or a metric to populate the template.</li><li>Ask the ONE unblocking question, framed as the two facts the sheet cannot start without: <strong>which named customer, for which single workflow, and what would they pay for the pilot window?</strong> Give the shape as a fill-in so the fellow can answer in a line.</li><li>Optionally return the smallest honest next step: &quot;Bring me the named customer, the one workflow, and any signal that money could move, and I'll build all six terms.&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricated a customer, workflow, price, or success metric not in the input.</li><li>Produced a filled or half-filled term sheet from thin air.</li><li>Flattered (&quot;great, let's structure it!&quot;) instead of naming that there is nothing to structure yet.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise (a free pilot dressed as paid)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;It's already a paid pilot — they're paying us in a case study, a testimonial, and their logo on our site. They even signed a letter of intent. So term 2 (price) is covered, right? Just fill in the rest.&quot;</p>\n<p>The framing pre-decides that non-cash consideration and an LOI satisfy the price term. It does not.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not accept the framing. A case study, a testimonial, a logo, and an LOI are not a price. On the ladder they are opinion/verbal (0.1–0.3); no money moved.</li><li>Name the trap: this is a free pilot in a paid costume. The underlying job of term 2 is to move a claim to money-moved (1.0); non-cash consideration and a letter of intent move nothing and convert nothing.</li><li>Reframe to the real job: get money on the table (prepaid, or a signed conversion price) — an LOI is a promise, not a payment. If they will genuinely not pay cash, take prepaid credit or a signed production price; never count exposure as the price.</li><li>Refuse to mark term 2 covered. The sheet cannot reach 6/6 while term 2 rests on a testimonial.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted the LOI / testimonial / logo as satisfying term 2 (price).</li><li>Filled the rest of the sheet and blessed it as a real pilot with term 2 unmet.</li><li>Failed to name that exposure is not price and an LOI is not money moved.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Before I write any pilot, help me brainstorm 3–5 revenue models for the whole product — subscription vs usage vs outcome-based — and design experiments to validate which one customers will actually pay for.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill structures ONE deal with a named customer and commits to a single pricing basis so the conversion term is a signed number today. It does not brainstorm a slate of revenue models or design willingness-to-pay experiments across the product.</li><li>Point to the right sibling: <code>monetization-strategy</code> owns exploring 3–5 monetization models, assessing audience fit, and designing low-cost validation experiments.</li><li>Offer the honest ordering: explore the model there first if the pricing basis is genuinely open; then return here to commit one basis and write the six-term sheet for the specific pilot. This skill turns a chosen basis into a signed conversion price — it is the commit step, not the exploration step.</li><li>Do not produce a multi-model comparison, an audience-fit analysis, or a validation-experiment plan. That is out of scope.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Brainstormed and compared revenue models / designed WTP experiments directly.</li><li>Produced exploratory monetization content this skill does not own.</li><li>Failed to name <code>monetization-strategy</code> as the correct destination.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/pilot-six-term-sheet/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/pilot-six-term-sheet/SKILL.md",
  "template": "skills/pilot-six-term-sheet/template.md",
  "example": "skills/pilot-six-term-sheet/examples/sample.md",
  "rubric": "skills/pilot-six-term-sheet/tests/rubric.json",
  "results": "skills/pilot-six-term-sheet/tests/RESULTS.md"
 }
});
