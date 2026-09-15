window.ICARUS_SKILL("bottoms-up-quantification", {
 "name": "bottoms-up-quantification",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Answers one question and shows its working: how big is the whole thing, built from the smallest unit you can actually count? It stacks a short multiplier chain — reachable population × frequency × value captured per event × capture fraction — where every rung is an atom you could in principle enumerate and check, every rung carries a source and an evidence-ladder weight, and the arithmetic sits on the page line by line. The output is a filled bottom-up size model (<a href=\"#/skill/bottoms-up-quantification\">template.md</a>) with two confidence bands: one from the weakest rung, one from reconciling the bottom-up total against a top-down TAM computed last and labelled a sanity check. The number is a wish until every rung is countable.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic prompt sizes a market top-down: pick a big industry figure, multiply by a penetration you invented, present the product. That number is unfalsifiable — you cannot point at a rung and disprove it — and it flatters everything. Icarus builds the number the other way: start from one countable atom, stack only multipliers you could enumerate, and leave the arithmetic exposed so any rung can be challenged. The top-down TAM is allowed exactly once, at the very end, as a sanity check — because two independent methods that agree within an order of magnitude triangulate, and two that disagree by more than ten times tell you one of them is fabricated. Leading with the TAM is the failure the whole skill exists to prevent.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have an atom (a countable unit of value) and want a total magnitude you can walk through line by line and defend.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Size this bottom-up / build the number / don't give me a TAM&quot;</td><td>Yes</td><td>bottoms-up-quantification</td></tr><tr><td>&quot;How big is the whole opportunity, and show me the arithmetic?&quot;</td><td>Yes</td><td>bottoms-up-quantification</td></tr><tr><td>&quot;Is one unit even worth building for — what's the per-unit prize?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (run it first)</td></tr><tr><td>&quot;Score my problem across all 8 dimensions.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>&quot;Is the whole idea any good? Stress-test the concept.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>&quot;Which wedge should we attack first?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></td></tr></tbody></table></div>\n<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> and this skill are a pair, not rivals. <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> sizes the prize of ONE unit — the ratio of what one unit costs today to its physics floor — and tells you whether a single unit is worth automating. This skill sizes the TOTAL across all units, and reuses that per-unit prize as one rung (value captured per event must sit inside the gap). Run <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> first: if one unit is not worth it, there is nothing to add up. If the fellow wants the per-unit gap, name <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> and stop.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the sheet in <a href=\"#/skill/bottoms-up-quantification\">template.md</a>. Do not narrate the number into being; build it rung by rung. Every rung carries a tag — <code>[Fact]</code> (enumerable list or money moved), <code>[Assumption]</code> (stated, defensible estimate), <code>[Hypothesis]</code> (a guess flagged for evidence) — and an evidence-ladder weight.</p>\n<p><strong>Step 1 — Name the atom.</strong> The smallest countable unit of value: one permit reviewed, one report, one plant shift, one invoice reconciled. It should be the same unit <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> scored. If the fellow cannot name it, stop and ask for it. Do not invent one.</p>\n<p><strong>Step 2 — Reachable population.</strong> How many atoms exist in the zone you can actually touch through your wedge and channel — not the whole world (that is the TAM's job). The population must be enumerable in principle: a registry, a customer list, a set of installations you could list. A market-report headline (&quot;50,000 facilities&quot;) is not countable and scores 0.1, not a fact. Source it and weight it.</p>\n<p><strong>Step 3 — Frequency.</strong> Events per atom per year. Source it (a timed workflow, an operator's own volume, a rate card), do not assume a round number because it is tidy.</p>\n<p><strong>Step 4 — Value captured per event.</strong> What YOU capture per event — your price or your take — not the full cost of the work. It must sit inside the <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> gap: you cannot capture more value than you create. Pricing the whole workflow instead of the slice you charge for inflates the total by the gap ratio. Source it.</p>\n<p><strong>Step 5 — Capture fraction.</strong> The realistic share of the reachable population you win, over a stated horizon. Early on this is the softest rung; state it as <code>[Hypothesis]</code> and say what would move it.</p>\n<p><strong>Step 6 — The arithmetic, in the open.</strong></p>\n<ul><li>Reachable event volume = Population × Frequency</li><li>Reachable revenue = × Value captured per event</li><li>Capturable revenue = × Capture fraction</li></ul>\n<p>Show all three lines. A total with the chain collapsed into one number is an auto-fail.</p>\n<p><strong>Step 7 — Confidence band (the weakest rung caps it).</strong> Confidence is the MINIMUM ladder weight across the rungs, never the average. Four solid rungs and one opinion rung make an opinion-grade number.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Weakest rung weight</th><th>Confidence band</th><th>Read</th></tr></thead><tbody><tr><td>≥ 0.7</td><td>Grounded</td><td>Every rung on behaviour or money. Plan against it.</td></tr><tr><td>0.5</td><td>Provisional</td><td>Best rung is an artefact shown, not transacted. Good for direction, not for committing spend.</td></tr><tr><td>0.3</td><td>Thin</td><td>Rests on a verbal claim. One rung needs a real count before you build on it.</td></tr><tr><td>≤ 0.1</td><td>Fiction</td><td>A rung is opinion or an uncheckable aggregate. Not a size estimate — a wish. Name the rung and the cheapest way to count it.</td></tr></tbody></table></div>\n<p>Report the confidence of reachable revenue and of capturable revenue separately; the capture rung usually drags the capturable number a band lower.</p>\n<p><strong>Step 8 — TAM sanity check. LAST. Labelled.</strong> Only now compute a top-down number, a different way (industry figure × penetration, or total units × price). Weight it honestly: a headline market-report aggregate is 0.1, because you cannot enumerate what is inside it. If the input supplies no top-down anchor — no industry figure and no independent way to compute one — do not invent a TAM to complete the band: state <strong>&quot;no top-down anchor supplied — reconciliation band deferred&quot;</strong>, name the cheapest anchor to fetch, and report only the bottom-up confidence band. Minting a figure to fill the band reintroduces the fabricated top-down number the skill exists to prevent.</p>\n<p><strong>Step 9 — Reconciliation band.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Bottom-up ÷ top-down</th><th>Band</th><th>Read</th></tr></thead><tbody><tr><td>0.3× – 3×</td><td>Triangulated</td><td>Two independent methods agree within an order of magnitude. Strongest signal you have.</td></tr><tr><td>3× – 10×</td><td>Divergent</td><td>Off by up to an order of magnitude. Find the rung or the TAM assumption that explains it before trusting either.</td></tr><tr><td>&gt; 10× or &lt; 0.1×</td><td>Broken</td><td>The methods disagree by more than ten times. One is fabricated. Do not report a total until reconciled.</td></tr></tbody></table></div>\n<p>When Divergent or Broken, hunt the broken rung. Do not split the difference between a built number and an invented one.</p>\n<p><strong>Kill line: a total that leads with the TAM, or hides a rung of the arithmetic, is an auto-fail.</strong> The exposed chain is the product.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Each rung is weighed on the evidence ladder: money moved <strong>1.0</strong> → behaviour observed <strong>0.7</strong> → artefact shown <strong>0.5</strong> → verbal commitment <strong>0.3</strong> → opinion <strong>0.1</strong>. The confidence of the whole number is the weakest rung, so the ladder is applied per rung, not once.</p>\n<p>Population and value are where fellows inflate. A population counts as <code>[Fact]</code> only if it is enumerable — a list you could produce. &quot;The report says the market is 50,000 sites&quot; is an uncheckable aggregate: 0.1, no matter how authoritative the source looks. A signed customer list or a public asset registry you can walk is 0.5–0.7. If the only population input is a market-report headline, the model declares the number <strong>Fiction</strong> and names the cheapest enumerable substitute: pull the registry, list the accounts, count one region by hand. The skill never dresses a top-down aggregate as a bottom-up fact.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Leading with the TAM.</strong> The number one failure and the kill line. If the first figure on the page is a top-down market number, the model is top-down wearing a bottom-up costume. The TAM comes last, labelled a sanity check, and only after the chain is built.</li><li><strong>Padding the chain.</strong> Adding rungs — extra segments, geographies, upsells — inflates the total and hides where it is soft. Fewer rungs, each countable, beats a long chain of guesses. Every rung you add is a rung someone can disprove.</li><li><strong>Averaging confidence instead of taking the minimum.</strong> Four grounded rungs and one opinion rung is an opinion-grade number. The weakest link caps it; do not report the average and call it strong.</li><li><strong>A headline count as population.</strong> A market-report figure feels like data but you cannot enumerate it. It is 0.1. Get a list you could actually produce.</li><li><strong>Sizing on the whole-workflow value, not the captured slice.</strong> Multiplying by the full per-unit cost of the work rather than the price you can charge inflates the total by the gap ratio. Value captured per event must sit inside the <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> gap.</li><li><strong>Ignoring the reconciliation.</strong> Computing the TAM sanity check, seeing a 40× divergence, and reporting the bottom-up total anyway because it &quot;feels right.&quot; A Broken band means stop and find the fabricated method.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/bottoms-up-quantification\">examples/sample.md</a> — Barrier Intelligence's per-permit gas-safety review, sized bottom-up: 300 installations × 300 reviews/yr × £15 → £1.35M reachable revenue, weakest rung Thin, capture rung Fiction, and a top-down £2.1B TAM that reconciles Broken (0.013×) because it bundles hardware and consultancy the per-permit slice never touches. All numbers illustrative.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> — sizes the per-unit prize (one unit's gap ratio); this stacks across all units into a total and reuses that gap as the value rung. Run it first; if one unit fails, there is nothing to add up.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — the 8-dimension problem gate; size is one input to it, not the whole thing.</li><li><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — scores the whole concept; this scores only the magnitude.</li><li><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> — the shared money-over-opinion ranking this skill applies per rung.</li><li>Supersedes nothing. It absorbs no prior skill; it is the bottom-up sizing primitive the pack was missing.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Bottom-Up Size Model — worksheet</h1>\n<p>Build up, never down. Show every line. The TAM goes LAST and is labelled a sanity check. A total that leads with a TAM, or hides a rung of the arithmetic, is an auto-fail. Tag every rung <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code> and give it an evidence-ladder weight.</p>\n<h2>Shared block (state and date it)</h2>\n<ul><li>Currency / FX: __________  <code>[Assumption]</code></li><li>Date, and who this number is for: __________</li><li>Horizon for the capture rung: [e.g. 3 years]</li></ul>\n<hr>\n<h2>1. The atom</h2>\n<ul><li><strong>Atom:</strong> one _____ (the smallest countable unit of value — e.g. one permit reviewed)</li><li>Same unit <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> scored? [y / n] — if you have not run <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> on this atom, do that first. If one unit is not worth it, there is nothing to add up.</li></ul>\n<h2>2. The multiplier chain</h2>\n<p>Fill every rung. Population must be enumerable in principle (a list you could produce); a market-report headline is 0.1, not a fact.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Value</th><th>Source</th><th>Ladder weight</th><th>Tag</th></tr></thead><tbody><tr><td><strong>Population</strong> (reachable, enumerable)</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Frequency</strong> (events / atom / yr)</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Value captured / event</strong> (≤ <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> gap)</td><td></td><td></td><td></td><td></td></tr><tr><td><strong>Capture fraction</strong> (realistic share, over horizon)</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Ladder: money moved 1.0 · behaviour 0.7 · artefact shown 0.5 · verbal 0.3 · opinion / uncheckable aggregate 0.1.</p>\n<h2>3. The arithmetic (in the open)</h2>\n<ul><li>Reachable event volume = Population × Frequency = ______ /yr</li><li>Reachable revenue = × Value/event = £______ /yr</li><li>Capturable revenue = × Capture fraction = £______ /yr</li></ul>\n<h2>4. Confidence band (weakest rung caps it)</h2>\n<p>Confidence = the MINIMUM ladder weight across the rungs, never the average.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Weakest rung weight</th><th>Band</th><th>Read</th></tr></thead><tbody><tr><td>≥ 0.7</td><td>Grounded</td><td>Plan against it</td></tr><tr><td>0.5</td><td>Provisional</td><td>Direction only, not spend</td></tr><tr><td>0.3</td><td>Thin</td><td>One rung needs a real count</td></tr><tr><td>≤ 0.1</td><td>Fiction</td><td>A wish — name the rung and how to count it</td></tr></tbody></table></div>\n<ul><li>Weakest rung of reachable revenue: ______ at weight ______ → band: ______</li><li>Weakest rung of capturable revenue: ______ at weight ______ → band: ______</li><li>If Fiction: the cheapest count that fixes it is: ______________</li></ul>\n<h2>5. TAM sanity check — LAST, labelled</h2>\n<ul><li>Top-down number, computed a different way: £______</li><li>Method: [industry figure × penetration] OR [total units × price]</li><li>Its ladder weight (a headline aggregate is 0.1): ______</li><li>No top-down anchor available? Do not invent one: write <strong>&quot;no top-down anchor supplied — band deferred&quot;</strong>, name the cheapest anchor to fetch, and skip §6.</li></ul>\n<h2>6. Reconciliation band</h2>\n<ul><li>Ratio = bottom-up ÷ top-down = £______ ÷ £______ = ______×</li></ul>\n<div class=\"table-wrap\"><table><thead><tr><th>Ratio</th><th>Band</th><th>Read</th></tr></thead><tbody><tr><td>0.3× – 3×</td><td>Triangulated</td><td>Two methods agree within an order of magnitude</td></tr><tr><td>3× – 10×</td><td>Divergent</td><td>Find the rung / TAM assumption that explains the gap</td></tr><tr><td>&gt; 10× or &lt; 0.1×</td><td>Broken</td><td>One method is fabricated — do not report until reconciled</td></tr></tbody></table></div>\n<ul><li>This lands at ______× → band: ______</li><li>If Divergent / Broken: the broken rung or mis-scoped TAM assumption is: ______________</li><li>Do NOT split the difference between a built number and an invented one.</li></ul>\n<h2>7. What would change the number</h2>\n<ul><li>The one count that moves the weakest rung up the ladder: ______________</li><li>Next model release / new price / signed pilot that revises a rung: ______________</li></ul>",
  "path": "skills/bottoms-up-quantification/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence, per-permit gas-safety review</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety). All numbers illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's question:</strong> &quot;We alert on gas-safety risk in permit-to-work reviews. Don't hand me a TAM — build the number bottom-up so I can defend it to the investor line by line.&quot;</p>\n<p>Prerequisite: <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> was run first on one permit review — current ~£180/review vs floor ~£12, gap ~15×. One unit clears, so there is something to add up. The value rung below must sit inside that gap.</p>\n<h2>Shared block</h2>\n<ul><li>Currency: GBP; FX £1 = $1.25  <code>[Assumption]</code></li><li>For: seed investor deck, 2026; horizon 3 years</li></ul>\n<hr>\n<h2>1. The atom</h2>\n<ul><li><strong>Atom:</strong> one permit-to-work (PTW) reviewed for gas-safety risk before a hot-work job.</li><li>Same unit <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> scored? <strong>Yes.</strong></li></ul>\n<h2>2. The multiplier chain</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Value</th><th>Source</th><th>Ladder weight</th><th>Tag</th></tr></thead><tbody><tr><td>Population (reachable)</td><td>300 offshore/onshore installations in the North Sea beachhead</td><td>public offshore-asset registry — an enumerable list</td><td>0.5</td><td><code>[Assumption]</code></td></tr><tr><td>Frequency</td><td>300 gas-hazardous permit reviews / installation / yr</td><td>one operator ops-lead's verbal volume estimate</td><td>0.3</td><td><code>[Assumption]</code></td></tr><tr><td>Value captured / event</td><td>£15 / reviewed permit (inside the ~£168 gap)</td><td>pilot price sheet shown to one operator, not transacted</td><td>0.5</td><td><code>[Assumption]</code></td></tr><tr><td>Capture fraction (3 yr)</td><td>20% of the reachable population</td><td>no signed operators yet — a guess</td><td>0.1</td><td><code>[Hypothesis]</code></td></tr></tbody></table></div>\n<h2>3. The arithmetic (in the open)</h2>\n<ul><li>Reachable event volume = 300 installations × 300 reviews = <strong>90,000 reviews/yr</strong></li><li>Reachable revenue = 90,000 × £15 = <strong>£1,350,000/yr</strong></li><li>Capturable revenue = £1,350,000 × 20% = <strong>£270,000/yr</strong></li></ul>\n<h2>4. Confidence band (weakest rung caps it)</h2>\n<ul><li>Reachable revenue rungs: Population 0.5, Frequency 0.3, Value 0.5 → minimum <strong>0.3 → Thin.</strong> Frequency is the soft link: the whole £1.35M rests on one person's guess at permit volume.</li><li>Capturable revenue adds Capture 0.1 → minimum <strong>0.1 → Fiction.</strong> The £270k is a wish until one operator signs.</li><li>Cheapest fix: time real permit volumes at one installation for a month (moves Frequency 0.3 → 0.7), and convert one pilot to paid (moves Capture 0.1 → 1.0).</li></ul>\n<h2>5. TAM sanity check — LAST, labelled</h2>\n<ul><li>Top-down: global offshore safety software market ≈ <strong>£2.1B</strong>  <code>[Assumption]</code>, weight <strong>0.1</strong> (uncheckable aggregate).</li><li>Method: industry report headline × Barrier's beachhead share of global assets (~5%) = <strong>£105M</strong>.</li></ul>\n<h2>6. Reconciliation band</h2>\n<ul><li>Ratio = bottom-up reachable revenue ÷ top-down slice = £1.35M ÷ £105M = <strong>0.013×</strong></li><li><strong>&lt; 0.1× → Broken.</strong> The two methods disagree by ~78×.</li><li>The mis-scoped assumption: the £2.1B market bundles sensors, hardware, consultancy, and full-workflow licences — Barrier's per-permit slice is a thin cut of that spend, so the top-down slice is inflated for this atom. The bottom-up structure holds; the top-down is the fabricated one here.</li><li>Do NOT average £1.35M and £105M into a &quot;£50M&quot; story. Report the built number, flag it Thin, and fix Frequency and Capture before the deck.</li></ul>\n<h2>7. What would change the number</h2>\n<ul><li>One month of timed permit volumes at a real installation revises Frequency and the whole £1.35M.</li><li>One signed, paying operator moves Capture off Fiction and turns the £270k from wish into forecast.</li><li>A next model release drops the physics floor, widens the gap, and lets the £15 value rung rise.</li></ul>\n<h2>Read</h2>\n<p>The honest headline is not &quot;£2.1B market.&quot; It is: &quot;£1.35M/yr of reachable per-permit revenue we can name installation by installation, confidence Thin on one volume estimate, and £270k capturable that is still a wish until an operator pays.&quot; That sentence is defensible line by line. The TAM slide is not.</p>",
  "path": "skills/bottoms-up-quantification/examples/sample.md"
 },
 "rubric": {
  "skill": "bottoms-up-quantification",
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
    "Size this bottom-up — don't give me a TAM.",
    "Build the number from the units up.",
    "How big is this really, and I want to see the arithmetic.",
    "What's the total addressable value, built from what one unit is worth times how many there are?",
    "Give me a defensible market size I can walk an investor through line by line."
   ],
   "mustNotFire": [
    {
     "phrase": "Is one report a big enough prize to bother — what's the per-unit gap?",
     "sibling": "physics-floor-gap",
     "local": true
    },
    {
     "phrase": "Score my problem across all 8 dimensions — is it a good problem?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Is the whole idea any good? Stress-test the concept.",
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
    "evidenceHtml": "<p>All 5 must-fire phrasings match description triggers (&quot;size this bottom-up / don't give me a TAM&quot;, &quot;build the number&quot;, &quot;how big is this really, show me the arithmetic&quot;, per-unit-value→total, &quot;defend line by line&quot;). The 3 must-not-fire are each carved out by the description's explicit <code>NOT for...</code> clauses → route to physics-floor-gap / problem-quality-scorecard / so-what-stress-test. Phrasing #4 (&quot;total addressable value&quot;) is the closest-to-boundary must-fire but the per-unit→total clause + NOT-TAM framing hold it correctly inside scope.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Arithmetic re-verified per case; TAM last &amp; labelled 0.1 in all five; weakest-rung (min, not average) confidence applied throughout. See per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner: refuses to produce a number, asks the ONE atom+enumerable-population question, routes to physics-floor-gap — no fabrication. 02 lead-with-TAM: names the unfalsifiability trap (kill line), refuses top-down-led number, relegates TAM to labelled sanity check — no compliance-as-asked. 03 out-of-scope: declines the size model, names physics-floor-gap, explains run-order handoff, computes no per-unit floor.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code></p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>G01 output could NOT come from a generic PM prompt: evidence-ladder weight per rung, weakest-rung-caps-confidence (min not average), value rung must sit inside the physics-floor-gap gap, bottom-up÷top-down reconciliation band (Triangulated/Divergent/Broken), refusal to average a built number with an invented one, TAM demoted to last-step 0.1 sanity check. Reframe is load-bearing, not decoration. Confidence/reconciliation/when-NOT all in tables; template.md is a full worksheet. No guidance mis-cast as prose.</p>"
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
    "MF",
    "AC",
    "PE",
    "CH",
    "ES"
   ],
   "rows": [
    {
     "label": "01 Barrier per-permit 5",
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
     "label": "02 Azraq risk reports 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Mentix headline population 5",
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
     "label": "04 Durian invoice reconciliation 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Barrier leak-detection (money moving) 5",
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
  "gotchasSurfaced": "<ul><li><strong>No top-down anchor in the input (goldens 02 and 04).</strong> Both goldens' <code>## Expected shape</code> ask for a reconciliation band, but neither input supplies an independent top-down figure. A faithful, non-fabricating run must therefore EITHER introduce an explicitly-labelled external market figure (tagged 0.1) OR state the anchor is unavailable and defer the reconciliation — it must NOT invent a TAM number to &quot;complete&quot; the band (that would trip the fabrication auto_fail). Worth a one-line note in Step 8 (&quot;if no top-down anchor exists, name the cheapest one to fetch and defer the band rather than invent a figure&quot;) so a run doesn't feel pressure to fabricate.</li><li><strong>Trigger phrasing #4 boundary.</strong> &quot;Total addressable value&quot; flirts with TAM language; the description's per-unit→total clause plus the NOT-TAM carve-outs handle it, but it is the narrowest margin among the must-fire set. No failure — noted so the description's negative clauses are preserved verbatim on any future edit.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: Step 8 (and template §5) now say that when the input gives no top-down anchor, the reconciliation band is DEFERRED (\"no top-down anchor supplied — band deferred\") with the cheapest anchor named, never a TAM figure invented to complete the band.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — bottoms-up-quantification</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Size this bottom-up — don't give me a TAM.&quot;</li><li>&quot;Build the number from the units up.&quot;</li><li>&quot;How big is this really, and I want to see the arithmetic.&quot;</li><li>&quot;What's the total addressable value, built from what one unit is worth times how many there are?&quot;</li><li>&quot;Give me a defensible market size I can walk an investor through line by line.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Is one report a big enough prize to bother — what's the per-unit gap?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></li><li>&quot;Score my problem across all 8 dimensions — is it a good problem?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Is the whole idea any good? Stress-test the concept.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings match description triggers (&quot;size this bottom-up / don't give me a TAM&quot;, &quot;build the number&quot;, &quot;how big is this really, show me the arithmetic&quot;, per-unit-value→total, &quot;defend line by line&quot;). The 3 must-not-fire are each carved out by the description's explicit <code>NOT for...</code> clauses → route to physics-floor-gap / problem-quality-scorecard / so-what-stress-test. Phrasing #4 (&quot;total addressable value&quot;) is the closest-to-boundary must-fire but the per-unit→total clause + NOT-TAM framing hold it correctly inside scope.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Arithmetic re-verified per case; TAM last &amp; labelled 0.1 in all five; weakest-rung (min, not average) confidence applied throughout. See per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: refuses to produce a number, asks the ONE atom+enumerable-population question, routes to physics-floor-gap — no fabrication. 02 lead-with-TAM: names the unfalsifiability trap (kill line), refuses top-down-led number, relegates TAM to labelled sanity check — no compliance-as-asked. 03 out-of-scope: declines the size model, names physics-floor-gap, explains run-order handoff, computes no per-unit floor.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code></td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>G01 output could NOT come from a generic PM prompt: evidence-ladder weight per rung, weakest-rung-caps-confidence (min not average), value rung must sit inside the physics-floor-gap gap, bottom-up÷top-down reconciliation band (Triangulated/Divergent/Broken), refusal to average a built number with an invented one, TAM demoted to last-step 0.1 sanity check. Reframe is load-bearing, not decoration. Confidence/reconciliation/when-NOT all in tables; template.md is a full worksheet. No guidance mis-cast as prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (dimensions: method_fidelity / artifact_complete / proprietary_edge / challenge / evidence_standard)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Golden</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>01 Barrier per-permit</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>02 Azraq risk reports</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>03 Mentix headline population</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>04 Durian invoice reconciliation</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>05 Barrier leak-detection (money moving)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr></tbody></table></div>\n<p>All ≥ 21 and no dimension &lt; 4. No auto_fail triggered (no fabricated numbers — G03 £576M is computed from input figures and stamped Fiction, not presented as defensible; no flattery; no scope-poaching; not generic). G03 correctly refuses to dress a market-report aggregate as a bottom-up <span class=\"tag tag-fact\">Fact</span>; G05 correctly UPWEIGHTS money-moved (1.0) and observed close-rate (0.7) instead of reflexively marking rungs soft, and still warns the 18-approach sample is small.</p>\n<p>Routing confirmed: per-unit-prize question routes to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (description NOT-clause, When-NOT table, adversarial 03, and the &quot;run it first&quot; pairing). Kill line enforced: TAM never leads, three arithmetic lines always exposed.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>No top-down anchor in the input (goldens 02 and 04).</strong> Both goldens' <code>## Expected shape</code> ask for a reconciliation band, but neither input supplies an independent top-down figure. A faithful, non-fabricating run must therefore EITHER introduce an explicitly-labelled external market figure (tagged 0.1) OR state the anchor is unavailable and defer the reconciliation — it must NOT invent a TAM number to &quot;complete&quot; the band (that would trip the fabrication auto_fail). Worth a one-line note in Step 8 (&quot;if no top-down anchor exists, name the cheapest one to fetch and defer the band rather than invent a figure&quot;) so a run doesn't feel pressure to fabricate.</li><li><strong>Trigger phrasing #4 boundary.</strong> &quot;Total addressable value&quot; flirts with TAM language; the description's per-unit→total clause plus the NOT-TAM carve-outs handle it, but it is the narrowest margin among the must-fire set. No failure — noted so the description's negative clauses are preserved verbatim on any future edit.</li></ul>\n<h2>Refine run 2 — applied judge fixes: Step 8 (and template §5) now say that when the input gives no top-down anchor, the reconciliation band is DEFERRED (&quot;no top-down anchor supplied — band deferred&quot;) with the cheapest anchor named, never a TAM figure invented to complete the band.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (seed): per-permit review, bottom-up",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;We alert on gas-safety risk in permit-to-work reviews. Don't give me a TAM — build the number bottom-up. There are ~300 installations in our North Sea beachhead (from the public asset registry), roughly 300 gas-hazardous permits per installation a year (one ops lead told us), we'd charge about £15 a review (pilot price sheet, nobody's signed yet), and maybe we win 20% in three years.&quot; <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> already run: ~£180/review vs ~£12 floor.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Names the atom (one permit-to-work review) and confirms it is the unit <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> scored.</li><li>Multiplier chain shown as rows, each with source, tag, and ladder weight: Population 300 (registry, 0.5), Frequency 300/yr (verbal, 0.3), Value £15 (price sheet shown, 0.5), Capture 20% (hypothesis, 0.1).</li><li><strong>Arithmetic in the open, three lines:</strong> reachable event volume 90,000/yr; reachable revenue ≈ £1.35M/yr; capturable ≈ £270k/yr.</li><li><strong>Confidence by weakest rung, not average:</strong> reachable revenue Thin (0.3, frequency); capturable Fiction (0.1, capture).</li><li>TAM appears LAST and labelled: global offshore safety market ≈ £2.1B weighted 0.1 as an uncheckable aggregate; beachhead slice ≈ £105M.</li><li><strong>Reconciliation:</strong> £1.35M ÷ £105M ≈ 0.013× → Broken; names why (TAM bundles hardware/consultancy the per-permit slice never touches); refuses to average the two.</li><li>Challenge: says the £270k is a wish until an operator pays, and names the cheapest count (time real permit volumes; convert one pilot).</li><li>Every number tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Leads with the £2.1B TAM; collapses the chain into one number; reports the average of bottom-up and top-down; or promotes the verbal frequency or the 20% capture to <span class=\"tag tag-fact\">Fact</span>.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: data-centre risk reports, bottom-up",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Build me the total for our static site risk reports from the units up. Reachable population is the operators in our region — we can list them, about 40 operators running ~300 sites between them. Each site gets ~4 report refreshes a year. <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> said the report gap is real (£960 today vs ~£42 floor); we'd price a subscription at ~£120/report. Assume we win a third of the sites in two years.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Atom named (one static site risk report); confirmed as the <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> unit.</li><li>Chain: Population ~300 sites (enumerable operator list, 0.5), Frequency 4/yr (assumption, 0.3–0.5), Value £120/report (inside the ~£918 gap; check it sits under the gap), Capture ~33% over 2 yr (hypothesis, 0.1).</li><li><strong>Arithmetic exposed:</strong> reachable event volume ≈ 1,200 reports/yr; reachable revenue ≈ £144k/yr; capturable ≈ £48k/yr.</li><li>Confidence: reachable revenue Provisional-to-Thin depending on the frequency source; capturable Fiction (0.1) on the capture guess.</li><li>TAM last and labelled; reconciliation band computed and read.</li><li>Challenge: flags that a £144k reachable ceiling is small for a venture, and asks whether the reachable population (one region) is the real wedge or an artificially narrow slice — without inflating it to fix the optics.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Opens with a top-down &quot;data-centre market&quot; figure; hides any multiplier; prices on the full £960 workflow value instead of the £120 captured slice; or inflates the population beyond the enumerable list to make the total look better.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix: factory copilot, population is a headline",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Size our AI copilot for factory managers bottom-up. The population is easy — a market report says there are 240,000 manufacturing plants in our target economies. Each has ~5 line managers who'd each pay ~£40/month. So build the number.&quot; No enumerable list offered; frequency and value from the report and a guess.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Atom named (one paying line-manager seat, or one plant), and the trap named: <strong>240,000 plants from a market report is an uncheckable aggregate, weight 0.1, NOT a countable population.</strong> You cannot enumerate the list, so it fails the bottom-up bar.</li><li>The skill refuses to build a confident number on a 0.1 population rung. Even if it runs the arithmetic to be concrete (240,000 × 5 × £40 × 12 ≈ £576M reachable), it stamps the whole thing <strong>Fiction</strong> because the weakest — and load-bearing — rung is opinion-grade.</li><li>Names the cheapest enumerable substitute: pull a real plant registry for one region, or count Mentix's own reachable pipeline, and re-run with a population you could actually list.</li><li>If a TAM is computed, it is last and labelled; here the &quot;population&quot; and the TAM are nearly the same top-down figure, which the skill flags as the tell that this was never bottom-up.</li><li>Challenge: states plainly that this is a top-down TAM wearing a bottom-up costume, and will not certify it until the population becomes a list.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Treats the 240,000 headline as a <span class=\"tag tag-fact\">Fact</span> population; returns a Grounded or Provisional confidence on a market-report count; or presents £576M as a defensible bottom-up number.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (mundane): SMB invoice reconciliation",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;Our first workflow reconciles supplier invoices for small bookkeeping firms. Size it bottom-up. We can list them — there are about 500 bookkeeping firms in the two cities we're starting in. Each reconciles ~200 invoices a month. <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> gave a modest gap (~£4/invoice today vs ~£0.30 floor); we'd charge ~£0.50 per reconciled invoice. We think we'd win half of them in a year because it's sticky.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Atom named (one reconciled supplier invoice); a deliberately unglamorous unit, sized straight.</li><li>Chain: Population ~500 firms (enumerable city list, 0.5), Frequency 200/month = 2,400/yr (assumption, 0.3), Value £0.50/invoice (inside the ~£3.70 gap, 0.3–0.5), Capture 50% in 1 yr (hypothesis, 0.1).</li><li><strong>Arithmetic exposed:</strong> reachable event volume ≈ 1.2M invoices/yr; reachable revenue ≈ £600k/yr; capturable ≈ £300k/yr.</li><li><strong>Honest small number:</strong> the skill reports the modest total without inflating it, and does not apologise for it. Confidence: reachable revenue Thin (0.3); capturable Fiction (0.1) on a 50%-in-a-year capture guess it flags as aggressive.</li><li>TAM sanity check last: a top-down &quot;SMB bookkeeping software&quot; figure will be far larger; reconciliation likely Broken (&gt;10×). The skill names the broken rung — the TAM bundles the whole bookkeeping stack, not the per-invoice slice — rather than revising the bottom-up number upward to close the gap.</li><li>Challenge: names the 50% capture as the least defensible rung and the frequency as the second; gives the cheapest count for each.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Inflates the total to look venture-scale; leads with the SMB-software TAM; hides a rung; or treats the &quot;it's sticky, we'd win half&quot; capture as anything above <span class=\"tag tag-hypothesis\">Hypothesis</span> 0.1.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Barrier Intelligence: leak-detection alerts, money already moving",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Different product line — a leak-detection alert subscription. This time we have real numbers. Five operators already pay us £2,000/month each. Our reachable population is a named list of 60 operators we can reach through those five (their supply-chain peers). Each operator runs the alert on ~8 assets. <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> clears. We'd keep the ~£250/asset/month price we already charge. On current close rate we've signed 5 of the first 18 we approached, so ~28% capture.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Atom named (one asset under a monthly alert subscription).</li><li>Chain, and this time the rungs are strong: Population 60 operators (named reachable list, 0.7), Frequency asset-months (8 assets × 12 = 96 asset-months/operator/yr, 0.5–0.7), Value £250/asset/month (money already moving, <strong>1.0</strong>), Capture ~28% (observed close rate on 18 approached, behaviour, <strong>0.7</strong> — not a guess).</li><li><strong>Arithmetic exposed:</strong> reachable asset-months = 60 × 96 = 5,760/yr; reachable revenue = × £250 = £1.44M/yr; capturable = × 28% ≈ £403k/yr.</li><li><strong>Confidence Grounded:</strong> weakest rung ≈ 0.5–0.7; every rung on artefact, behaviour, or money. The skill can say &quot;plan against it&quot; — and notes that the £2,000/month × 5 already collected is the anchor that makes the value rung a <span class=\"tag tag-fact\">Fact</span>, not an estimate.</li><li>TAM last and labelled; reconciliation likely Triangulated (within an order of magnitude) since the value and capture rungs are real.</li><li>Challenge is lighter here (strong input earns it): the skill still names the one soft rung (frequency of assets per operator) and asks for the count, and warns that 28% from 18 approaches is a small sample.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Under-weights the money-moved value rung (£250/asset already paid is 1.0, not an assumption); treats the observed 28% close rate as <span class=\"tag tag-hypothesis\">Hypothesis</span>; leads with a TAM; or hides a rung. Flattery is not the failure here — over-crediting a small 18-approach sample as certainty would be.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/golden/05.md"
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
     "html": "<p>&quot;How big is the logistics opportunity? Give me a number.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>No atom, no population, no per-unit value — there is nothing to build up. The skill must not invent any of it.</p>\n<ul><li>Refuse to produce a number. Do not manufacture a population, a frequency, or a price to fill the gap.</li><li>Ask the ONE question that unblocks a bottom-up build: &quot;What is the smallest unit you would charge for — one shipment, one route, one warehouse-day — and can you name a real list of who has them?&quot; (atom + enumerable population).</li><li>Offer the smallest honest next step: name the atom, run <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> on it to confirm one unit is worth building for, then return here with a population you could list.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: asks for the atom and an enumerable population, invents no specifics, returns the smallest next step. FAIL: produces any logistics market size, or fabricates a unit count, price, or frequency to appear responsive.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise (lead with the TAM)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our investor wants a $1B TAM slide. Just size the market top-down — industry figure times a penetration percentage. Skip the bottom-up stuff, we're in a hurry.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>The request IS the failure mode this skill exists to prevent: a top-down TAM presented first, as the headline. The &quot;problem&quot; (needing a big slide) is a pre-chosen solution (a top-down number). The skill must not comply as asked.</p>\n<ul><li>Name the trap: a top-down TAM is unfalsifiable — you cannot point at a rung and disprove it — so it flatters everything and convinces no one who reads carefully. Leading with it is the skill's kill line.</li><li>Reframe: build the number bottom-up first from a countable atom and an enumerable population, expose the arithmetic, and only THEN compute the $1B-style TAM as the last-step sanity check. The reconciliation between the two is what makes the slide credible.</li><li>Do not accept the framing that bottom-up is optional or slow. The bottom-up chain is short; the TAM without it is the risk, not the shortcut.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: refuses to produce a top-down-led number, names the unfalsifiability trap, and offers the bottom-up build with the TAM relegated to a labelled sanity check. FAIL: produces the $1B TAM slide as asked, or presents a top-down figure as the headline number with the bottom-up chain absent or after it.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to physics-floor-gap)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Forget the total. I just want to know if ONE permit review is worth building for — what's the gap between what one costs today and what it should cost once AI does the automatable part?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is the per-unit prize question, not the total-magnitude question. It belongs to the sibling <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, which computes one unit's floor (token cost + irreducible judgment minutes) and the gap ratio against today's price.</p>\n<ul><li>Decline to run the bottom-up size model. There is no population to stack — the fellow explicitly wants one unit.</li><li>Name the right skill: <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>. Say what it does (per-unit floor and gap-ratio band verdict) and why it is the correct tool here.</li><li>Note the handoff: <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> runs first; if one unit clears, come back to <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a> to size the total, reusing that gap as the value rung. Do not poach the per-unit calc into this skill.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines, routes to <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, explains the run-order handoff, computes no per-unit floor itself. FAIL: builds a per-unit floor/gap here, or produces a total-market number the fellow did not ask for.</p>"
     }
    ],
    "other": [],
    "file": "skills/bottoms-up-quantification/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/bottoms-up-quantification/SKILL.md",
  "template": "skills/bottoms-up-quantification/template.md",
  "example": "skills/bottoms-up-quantification/examples/sample.md",
  "rubric": "skills/bottoms-up-quantification/tests/rubric.json",
  "results": "skills/bottoms-up-quantification/tests/RESULTS.md"
 }
});
