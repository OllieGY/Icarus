window.ICARUS_SKILL("physics-floor-gap", {
 "name": "physics-floor-gap",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Answers one question and refuses the rest: is the per-unit prize big enough to bother? It computes the theoretical floor of what one unit of the work should cost once AI does the automatable part — (2026 token/compute cost) + (the irreducible human-judgment minutes priced at loaded labour) — and divides today's priced practice by that floor. The output is a gap ratio and a band verdict on a fill-in calc sheet (<a href=\"#/skill/physics-floor-gap\">template.md</a>). It is a first-principles size test on the unit, not a TAM, not a scorecard, not a vibe check. The floor drops with every model release, so the calc is dated and meant to be re-run.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic prompt sizes an opportunity by market: users × price = TAM. That number is unfalsifiable and flatters everything. Icarus sizes it by physics instead: strip the work down to the compute cost of the automatable part plus the genuine minutes of human judgment that cannot be removed, and that sum is the floor the price must eventually fall toward. The prize is not the market — it is the gap between what the work is priced at today and that floor. A gap so large it looks free (&gt;100×) is not a jackpot; it is a signal you have mis-priced the judgment or missed the constraint that has kept everyone else out, and the skill makes you stop and find it.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a specific unit of work and a real number for what that unit costs today, and you want to know if the per-unit prize justifies building.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Is this a big enough problem to build for?&quot; (have unit + cost)</td><td>Yes</td><td>physics-floor-gap</td></tr><tr><td>&quot;How big is the prize per report / per permit / per invoice?&quot;</td><td>Yes</td><td>physics-floor-gap</td></tr><tr><td>&quot;What's the total market / TAM / how many customers × price?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></td></tr><tr><td>&quot;Is this a good problem across all 8 dimensions?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>&quot;Is the whole idea any good? Stress-test the concept.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>&quot;Which wedge should we attack first?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></td></tr></tbody></table></div>\n<p>This skill scores exactly one thing: the per-unit gap. It does not rank problems, size markets, or judge the concept. If the fellow wants those, name the sibling and stop.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Work the sheet in <a href=\"#/skill/physics-floor-gap\">template.md</a>. Do not narrate; fill the lines. Every number carries a tag: <code>[Fact]</code> (from a priced artefact or observed behaviour), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a guess, flagged as needing evidence).</p>\n<p><strong>Step 1 — Name the unit and its frequency.</strong> One report? One permit review? One invoice reconciled? State it, and how often it happens. If the fellow cannot name the unit, stop and ask for it. Do not invent one.</p>\n<p><strong>Step 2 — Floor part A: token/compute cost of the automatable portion.</strong> What does one unit cost in 2026 inference to do the part a model can do (retrieval, drafting, matching, formatting)? State the token assumption. Default assumption block: ~$5 / 1M input tokens, ~$15 / 1M output tokens; FX ~£1 = $1.25. Tag <code>[Assumption]</code> and date it.</p>\n<p><strong>Step 3 — Floor part B: irreducible human-judgment minutes × loaded labour.</strong> Which minutes cannot be removed — the call a human must stake their name on, the exception only a person can adjudicate? Count only those minutes. Multiply by the loaded rate (salary + overhead + benefits, not base salary). If judgment is exception-based, amortise it across the unit. Be honest: over-counting B hides a dead idea; under-counting B manufactures a fake prize.</p>\n<p><strong>Step 4 — Floor = A + B.</strong> Show both lines. Never collapse them into one number.</p>\n<p><strong>Step 5 — Current priced practice.</strong> What does one unit cost today? Loaded labour × observed time, or the price actually paid. This number must come from a priced artefact or an observed workflow — see Evidence standard. Tag its source.</p>\n<p><strong>Step 6 — Gap ratio = Current ÷ Floor.</strong> Show the division.</p>\n<p><strong>Step 7 — Band verdict.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gap ratio</th><th>Band</th><th>Verdict</th></tr></thead><tbody><tr><td>&lt; 10×</td><td>No room</td><td>Walk away. The floor is too close to today's cost; automating it barely moves anything.</td></tr><tr><td>10–20×</td><td>Thin</td><td>Marginal. Only worth it if you can stack volume or move upmarket where the loaded rate is higher.</td></tr><tr><td>20–100×</td><td>Real prize</td><td>Build. Genuine room between price and floor.</td></tr><tr><td>&gt; 100×</td><td>Suspicious</td><td>Stop. A gap this large usually means B is under-counted or a non-token constraint (regulation, liability, accreditation, distribution) explains why no one has done it. Find it before you believe the number.</td></tr></tbody></table></div>\n<p><strong>Kill line: a verdict without the A-line and B-line shown is an auto-fail.</strong> The arithmetic is the product. No floor arithmetic, no verdict.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>The current-practice number (Step 5) is where fellows lie to themselves. It must sit on behaviour or money, not opinion. Weight signals by the evidence ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal for the current-cost number</th><th>Ladder weight</th></tr></thead><tbody><tr><td>An invoice / quote / rate card for the work (money moved)</td><td>1.0</td></tr><tr><td>An observed workflow timed directly (behaviour observed)</td><td>0.7</td></tr><tr><td>A priced artefact shown but not yet transacted</td><td>0.5</td></tr><tr><td>Someone said &quot;it takes about a day&quot; (verbal commitment)</td><td>0.3</td></tr><tr><td>The fellow's opinion of what it costs</td><td>0.1</td></tr></tbody></table></div>\n<p>If the only input is an opinion (0.1), the skill declares the input <strong>not ready</strong> and names the cheapest way to get the real number: pull one invoice, or time one unit of the workflow end to end. It does not floor an opinion and dress it as a result. Floor-side numbers (A and B) may be <code>[Assumption]</code>, but they must state the token math and the minutes, so a reader can challenge them.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Under-counting judgment to manufacture a prize.</strong> The commonest failure. If B is set near zero, almost anything clears 100×. When the ratio exceeds 100×, the skill assumes B is wrong before it assumes the prize is real.</li><li><strong>The wrapper trap.</strong> Pricing the artefact (the report, the deck) instead of the decision the artefact drives. If the work exists to support a judgment call, floor the judgment, not the prose.</li><li><strong>A big ratio that is really a moat.</strong> A 200× gap in a regulated field is not free money — it is often the reason incumbents charge what they do (a signed, liable, accredited human). The floor model misses this; the &gt;100× band exists to force the check.</li><li><strong>Stale floor.</strong> The floor drops on every model release. A calc from an older model is out of date; re-run it and re-read the band.</li><li><strong>Opinion dressed as a fact.</strong> &quot;It costs us a day&quot; is 0.3 at best. Do not promote it to <code>[Fact]</code> because it is convenient.</li><li><strong>A ratio near a band boundary is fragile.</strong> A gap sitting just over a band edge (e.g. ~11× just past the 10× WALK line) can flip bands on one estimate. State the ratio's sensitivity to the biggest assumption — recompute the band with that assumption moved by a plausible amount — and do not read a borderline ratio as a durable verdict.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/physics-floor-gap\">examples/sample.md</a> — Azraq's static data-centre risk report, worked end to end: an analyst-day (£960) against a £42.50 floor, gap 22.6×, band &quot;build&quot;.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a> — builds total market size from units; this builds the per-unit prize. Use that after this clears, not instead of it.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — the 8-dimension problem gate; size is one input to it, not the whole thing.</li><li><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — scores the whole concept; this scores only the unit economics of the work.</li><li>Supersedes nothing. It is the first-principles size primitive the others draw on.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Physics Floor Gap — calc sheet</h1>\n<p>Fill every line. Tag every number <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Do not return a verdict with the floor lines blank — that is an auto-fail.</p>\n<h2>Shared assumption block (state and date it)</h2>\n<ul><li>2026 inference price: ~$5 / 1M input tokens, ~$15 / 1M output tokens <code>[Assumption]</code></li><li>FX: ~£1 = $1.25 <code>[Assumption]</code></li><li>Model / date this floor was computed against: __________  <code>[Assumption]</code></li></ul>\n<hr>\n<h2>1. Unit of work</h2>\n<ul><li><strong>Unit:</strong> [one _____ — e.g. one site risk report]</li><li><strong>Frequency:</strong> [how often — e.g. 160 / year]  <code>[Fact | Assumption]</code></li></ul>\n<h2>2. Floor part A — token/compute cost of the automatable portion</h2>\n<ul><li>Automatable portion: [what the model does — retrieval / draft / match / format]</li><li>Tokens: [___ input] + [___ output]</li><li>Cost: input ___ × $5/1M + output ___ × $15/1M = $____ → <strong>A = £____</strong>  <code>[Assumption]</code></li></ul>\n<h2>3. Floor part B — irreducible human judgment</h2>\n<ul><li>The minutes that cannot be removed: [the call a human must sign / the exception only a person can adjudicate]</li><li>Minutes: [___ min]  (if exception-based, amortised: ___% × ___ min = ___ min/unit)</li><li>Loaded rate: £[___]/hr  <code>[Assumption]</code></li><li><strong>B = [___ min] ÷ 60 × £[___]/hr = £____</strong>  <code>[Assumption]</code></li></ul>\n<h2>4. Floor</h2>\n<ul><li><strong>Floor = A + B = £____ + £____ = £______</strong></li></ul>\n<h2>5. Current priced practice</h2>\n<ul><li>What one unit costs today: [loaded labour × observed time] OR [price paid]</li><li><strong>Current = £______</strong></li><li>Source: [invoice / rate card / timed workflow / verbal / opinion]</li><li>Evidence-ladder weight: [1.0 money · 0.7 behaviour · 0.5 artefact · 0.3 verbal · 0.1 opinion]  <code>[Fact | Assumption]</code></li><li>If weight = 0.1 → <strong>STOP: input not ready.</strong> Cheapest way to get the real number: [pull one invoice / time one unit].</li></ul>\n<h2>6. Gap ratio</h2>\n<ul><li><strong>Gap = Current ÷ Floor = £____ ÷ £____ = ____×</strong></li></ul>\n<h2>7. Band verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gap ratio</th><th>Band</th><th>Verdict</th></tr></thead><tbody><tr><td>&lt; 10×</td><td>No room</td><td>Walk away</td></tr><tr><td>10–20×</td><td>Thin</td><td>Marginal — only with volume or upmarket rate</td></tr><tr><td>20–100×</td><td>Real prize</td><td>Build</td></tr><tr><td>&gt; 100×</td><td>Suspicious</td><td>Stop — find the under-counted judgment or the hidden constraint</td></tr></tbody></table></div>\n<ul><li><strong>This unit lands at ____× → band: ________ → verdict: ________</strong></li><li>If &gt; 100×: the hidden constraint / under-counted judgment is: ____________</li><li>What would change this verdict: [next model release drops A / a timed workflow revises Current / B is re-counted]</li></ul>",
  "path": "skills/physics-floor-gap/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq static data-centre risk report</h1>\n<p>Fellow: <strong>Azraq</strong> (data-centre / infrastructure risk). All numbers illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's question:</strong> &quot;Our analysts produce a static risk report per operator site. Is automating it a big enough problem to build a product around?&quot;</p>\n<h2>Shared assumption block</h2>\n<ul><li>2026 inference: ~$5 / 1M input, ~$15 / 1M output  <code>[Assumption]</code></li><li>FX: £1 = $1.25  <code>[Assumption]</code></li><li>Floor computed against: a 2026 frontier long-context model  <code>[Assumption]</code></li></ul>\n<hr>\n<h2>1. Unit of work</h2>\n<ul><li><strong>Unit:</strong> one static site risk report (uptime/incident history + data-rights position for one operator site).</li><li><strong>Frequency:</strong> ~40 operator sites, refreshed quarterly = <strong>160 reports/year</strong>  <code>[Assumption]</code></li></ul>\n<h2>2. Floor part A — token/compute cost of the automatable portion</h2>\n<p>Automatable: ingest incident logs, uptime data, permit/rights records; draft the standard sections; format.</p>\n<ul><li>Tokens: ~300k input (logs + templates) + ~15k output.</li><li>Cost: 300k × $5/1M = $1.50; 15k × $15/1M = $0.225; + retrieval/embeddings + one reasoning pass ≈ <strong>~$3</strong> → <strong>A = $3 ÷ 1.25 = £2.40</strong>  <code>[Assumption]</code></li></ul>\n<h2>3. Floor part B — irreducible human judgment</h2>\n<p>The part that carries liability: a senior analyst deciding which risks are <em>material for this operator</em> given the commercial relationship and the data-rights nuance, and signing it.</p>\n<ul><li>Minutes: <strong>20 min</strong> of senior judgment per report  <code>[Assumption]</code></li><li>Loaded rate: <strong>£120/hr</strong> (specialist, fully loaded)  <code>[Assumption]</code></li><li><strong>B = 20 ÷ 60 × £120 = £40.00</strong>  <code>[Assumption]</code></li></ul>\n<h2>4. Floor</h2>\n<ul><li><strong>Floor = A + B = £2.40 + £40.00 = £42.40</strong></li></ul>\n<h2>5. Current priced practice</h2>\n<ul><li>Observed workflow: <strong>1 analyst-day per report</strong>  <code>[Fact]</code> (observed workflow, ladder weight 0.7)</li><li>Loaded: 8 hr × £120/hr  <code>[Assumption]</code></li><li><strong>Current = £960 per report</strong></li><li>Source: timed workflow (behaviour, 0.7) × assumed loaded rate. Above the 0.1 opinion floor → input is ready.</li></ul>\n<h2>6. Gap ratio</h2>\n<ul><li><strong>Gap = £960 ÷ £42.40 = 22.6×</strong></li></ul>\n<h2>7. Band verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gap ratio</th><th>Band</th><th>Verdict</th></tr></thead><tbody><tr><td>&lt; 10×</td><td>No room</td><td>Walk away</td></tr><tr><td>10–20×</td><td>Thin</td><td>Marginal</td></tr><tr><td><strong>20–100×</strong></td><td><strong>Real prize</strong></td><td><strong>Build</strong></td></tr><tr><td>&gt; 100×</td><td>Suspicious</td><td>Stop</td></tr></tbody></table></div>\n<ul><li><strong>22.6× → band: Real prize → verdict: BUILD.</strong></li><li>Why it holds: judgment (£40) dominates the floor, but 20 min of it does not come close to a full analyst-day of priced practice. The room is real.</li><li>What would change the verdict: if the true irreducible judgment is closer to 2 hours (£240 → floor £242.40 → 4.0×), this collapses to <em>walk away</em>. The whole verdict rests on the 20-minute claim — Azraq's next job is to time that judgment step on a real report, not assume it.</li></ul>",
  "path": "skills/physics-floor-gap/examples/sample.md"
 },
 "rubric": {
  "skill": "physics-floor-gap",
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
    "Is this a big enough problem to build for?",
    "How big is the prize per report?",
    "Size the opportunity from first principles.",
    "What's the physics floor for this work?",
    "Is the gap big enough — what does one unit cost today vs what it should cost?"
   ],
   "mustNotFire": [
    {
     "phrase": "What's the TAM for data-centre risk software?",
     "sibling": "bottoms-up-quantification",
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
    "evidenceHtml": "<p>Description enumerates all 5 must-fire phrasings verbatim and explicitly routes all 3 must-not-fire to siblings (TAM→bottoms-up-quantification, 8-dim→problem-quality-scorecard, whole-idea→so-what-stress-test). Clean scope boundary.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Re-did floor arithmetic each case; all internally consistent, band matches ratio, A+B both shown, tags present. Per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 asks for the one number (unit + current cost/unit), invents nothing. 02 names wrapper trap, reframes to the decision, refuses &quot;ugly&quot; as unit. 03 declines TAM, names bottoms-up-quantification, no market number.</p>"
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
    "evidenceHtml": "<p>Golden 01 output could NOT come from a generic PM prompt: physics floor (token cost + irreducible judgment minutes), gap-ratio band with a &gt;100× suspicion trap, evidence-ladder weighting, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tags. Bands/ladder/when-not are tables, method is stepwise, template is a fill-in sheet — no guidance mis-cast as prose.</p>"
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
     "label": "01 Azraq → BUILD (22.6×) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix → WALK (6.9×) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier → STOP (228.6×) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian → THIN (11.25×) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 SEO → BUILD (29.6×) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "✓",
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
  "gotchasSurfaced": "<ul><li><strong>FX rounding is loose in the worked example.</strong> examples/sample.md carries A from &quot;~$3&quot; to &quot;£2.50&quot;, but $3 ÷ 1.25 = £2.40, not £2.50. Trivial (does not move 22.6×), but the sheet preaches showing the arithmetic, so the one hand-worked example should reconcile its own FX line. Consider £2.40 or state the rounding.</li><li><strong>Golden 04 sits one estimate away from flipping bands.</strong> Durian's THIN verdict depends on A ≈ £0.10 and correct amortisation (floor £0.40 → 11.25×). If A is estimated at ~£0.20 the floor is £0.50 and the gap drops to 9.0× → WALK. This is arguably the skill working as designed (dated, re-run, &quot;what would change the verdict&quot;), but a boundary case that sensitive is worth an explicit note in the case so a fellow does not read 11.3× as durable.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: reconciled the example's FX line (A = $3 ÷ 1.25 = £2.40, floor £42.40) and added a borderline-band-ratio Gotcha.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — physics-floor-gap</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Is this a big enough problem to build for?&quot;</li><li>&quot;How big is the prize per report?&quot;</li><li>&quot;Size the opportunity from first principles.&quot;</li><li>&quot;What's the physics floor for this work?&quot;</li><li>&quot;Is the gap big enough — what does one unit cost today vs what it should cost?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;What's the TAM for data-centre risk software?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></li><li>&quot;Score my problem across all 8 dimensions — is it a good problem?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Is the whole idea any good? Stress-test the concept.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description enumerates all 5 must-fire phrasings verbatim and explicitly routes all 3 must-not-fire to siblings (TAM→bottoms-up-quantification, 8-dim→problem-quality-scorecard, whole-idea→so-what-stress-test). Clean scope boundary.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Re-did floor arithmetic each case; all internally consistent, band matches ratio, A+B both shown, tags present. Per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 asks for the one number (unit + current cost/unit), invents nothing. 02 names wrapper trap, reframes to the decision, refuses &quot;ugly&quot; as unit. 03 declines TAM, names bottoms-up-quantification, no market number.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>supersedes: none</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output could NOT come from a generic PM prompt: physics floor (token cost + irreducible judgment minutes), gap-ratio band with a &gt;100× suspicion trap, evidence-ladder weighting, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tags. Bands/ladder/when-not are tables, method is stepwise, template is a fill-in sheet — no guidance mis-cast as prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Azraq → BUILD (22.6×)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Mentix → WALK (6.9×)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>03 Barrier → STOP (228.6×)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>04 Durian → THIN (11.25×)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>05 SEO → BUILD (29.6×)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr></tbody></table></div>\n<p>No auto_fail triggered in any case: floor-side figures are stated <code>[Assumption]</code>s (token math + minutes shown), not fabricated facts; current-cost numbers come from the input; weak pitches (02 copilot, 03 £35 floor) are challenged not flattered; scope respected; output is a first-principles sheet, not boilerplate. Kill line satisfied everywhere — every verdict shows A-line and B-line.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>FX rounding is loose in the worked example.</strong> examples/sample.md carries A from &quot;~$3&quot; to &quot;£2.50&quot;, but $3 ÷ 1.25 = £2.40, not £2.50. Trivial (does not move 22.6×), but the sheet preaches showing the arithmetic, so the one hand-worked example should reconcile its own FX line. Consider £2.40 or state the rounding.</li><li><strong>Golden 04 sits one estimate away from flipping bands.</strong> Durian's THIN verdict depends on A ≈ £0.10 and correct amortisation (floor £0.40 → 11.25×). If A is estimated at ~£0.20 the floor is £0.50 and the gap drops to 9.0× → WALK. This is arguably the skill working as designed (dated, re-run, &quot;what would change the verdict&quot;), but a boundary case that sensitive is worth an explicit note in the case so a fellow does not read 11.3× as durable.</li></ul>\n<h2>Refine run 2 — applied judge fixes: reconciled the example's FX line (A = $3 ÷ 1.25 = £2.40, floor £42.40) and added a borderline-band-ratio Gotcha.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq (seed): static risk report → BUILD",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Analysts write a static risk report per operator site. It's one analyst-day each, ~160 reports a year. Is this a big enough problem to build for?&quot; Loaded specialist rate ~£120/hr.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Names the unit (one site risk report) and frequency (~160/yr).</li><li>Floor <strong>A line shown</strong>: ~£2.50 token cost, with the token assumption stated.</li><li>Floor <strong>B line shown</strong>: ~20 min irreducible judgment × £120/hr ≈ £40.</li><li>Floor = A + B ≈ £42.50.</li><li>Current = 8 hr × £120 = £960, tagged as observed workflow (ladder 0.7), not opinion.</li><li>Gap ratio shown as a division: 960 ÷ 42.5 ≈ <strong>22–23×</strong>.</li><li>Band: <strong>20–100× → BUILD</strong>.</li><li>Challenge: flags that the verdict hinges on the 20-min judgment estimate and says to time it.</li><li>Every number tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Returns &quot;build&quot; without both floor lines shown, or treats the analyst-day as a fabricated <span class=\"tag tag-fact\">Fact</span> with no source tag.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix: line-stoppage RCA writeup → WALK AWAY",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Our AI copilot drafts the root-cause writeup after every unplanned line stoppage. A process engineer spends ~3 hours per RCA today gathering sensor logs, building the timeline, and writing it up. ~250 stoppages a year per plant. Loaded engineer rate ~£110/hr. Big enough?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one RCA writeup; frequency ~250/yr/plant.</li><li>Floor A ≈ £2 (ingest sensor logs + maintenance history, draft timeline &amp; candidate causes), token math stated.</li><li>Floor B: the engineer's judgment on the <em>actual</em> root cause and the corrective action they stake their name on — ~25 min × £110/hr ≈ £46.</li><li>Floor ≈ £48.</li><li>Current = 3 hr × £110 = £330 (observed workflow, ladder 0.7).</li><li>Gap = 330 ÷ 48 ≈ <strong>6.9×</strong>.</li><li>Band: <strong>&lt; 10× → WALK AWAY.</strong></li><li>Sharp lesson expected: the writeup was never the expensive part; the irreducible judgment dominates, so automating the prose barely moves the cost. The &quot;copilot&quot; pitch does not clear the floor.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Flatters the copilot pitch, or lands a build verdict by shaving B down to near zero.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence: safety-case review → STOP (>100×, hidden constraint)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;A consultancy charges £8,000 for an independent safety-case review of a gas facility (we have the quote). I reckon AI can produce the document for ~£10 of tokens plus 10 minutes of a chartered engineer's review at £150/hr. That's a floor of about £35 against £8,000 — the gap is enormous. Should we build?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one independent safety-case review; low frequency, high value.</li><li>Current = £8,000, tagged <strong><span class=\"tag tag-fact\">Fact</span></strong> because it is a priced quote (money, ladder 1.0).</li><li>Floor A ≈ £10 (large document generation over standards + P&amp;IDs + logs), token math stated.</li><li>Floor B as the fellow gave it: 10 min × £150/hr ≈ £25 → floor ≈ £35.</li><li>Gap = 8000 ÷ 35 ≈ <strong>228×</strong>.</li><li>Band: <strong>&gt; 100× → STOP.</strong> This is the required behaviour: the skill must NOT celebrate the ratio.</li><li>It must say a 228× gap means either B is under-counted or a non-token constraint explains the price. Here the constraint is explicit: the £8,000 buys an accountable, chartered, liability-bearing sign-off that a regulator and insurer recognise — not prose. That is why the price has never fallen, and why no one has &quot;automated&quot; it.</li><li>Verdict: do not build on the strength of the ratio; the floor model is missing the moat.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Returns &quot;build — huge prize&quot; on the 228×, or fails to name a hidden constraint / under-counted judgment.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs: invoice-vs-PO reconciliation → THIN",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;First workflow we automate is matching supplier invoices to POs and flagging discrepancies for SMB finance teams. An AP clerk spends ~6 min per invoice; ~400 invoices/month per customer. Loaded clerk rate ~£45/hr. About 20% of invoices get flagged and need ~2 min of human adjudication. Worth it?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one invoice reconciled; frequency ~400/month/customer.</li><li>Floor A ≈ £0.10 (match lines, flag mismatches), token math stated.</li><li>Floor B is <strong>exception-based and must be amortised</strong>: 20% × 2 min = 0.4 min/invoice × £45/hr ≈ £0.30.</li><li>Floor ≈ £0.40.</li><li>Current = 6 min × £45/hr = £4.50 (observed workflow, ladder 0.7).</li><li>Gap = 4.50 ÷ 0.40 ≈ <strong>11.3×</strong>.</li><li>Band: <strong>10–20× → THIN / marginal.</strong></li><li>Expected challenge: per-invoice margin is pennies; only clears if Durian stacks volume across many customers or moves upmarket where the loaded rate is higher. Correct amortisation of B is the thing the skill must get right here.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Fails to amortise the exception judgment (treats every invoice as needing 2 min), or reads 11.3× as &quot;build&quot;.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mundane: SEO product descriptions → BUILD",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>E-commerce team: &quot;An agency charges us £8 per SEO product description (here's the rate card). Catalogue is 5,000 SKUs, ~500 new/month. Every description gets a 30-second human brand-tone check before it ships. In-house copy time is ~12 min each but we mostly use the agency. Is generating these a big enough problem to build a tool for?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Unit: one product description; frequency ~500/month.</li><li>Current = £8, tagged <strong><span class=\"tag tag-fact\">Fact</span></strong> — agency rate card (money, ladder 1.0). (In-house 12 min is a secondary check, not the priced number.)</li><li>Floor A ≈ £0.02 (write from product attributes), token math stated.</li><li>Floor B: the 30-sec brand-tone check, applied to every unit = 0.5 min × £30/hr ≈ £0.25.</li><li>Floor ≈ £0.27.</li><li>Gap = 8.00 ÷ 0.27 ≈ <strong>29.6×</strong>.</li><li>Band: <strong>20–100× → BUILD.</strong></li><li>Note the skill should make: this sits below 100× only because a real per-unit human check is counted; drop the check to zero and it flips into the suspicious band, where the honest question becomes why the £8 agency price has not already collapsed (crowded market / switching cost, not production cost).</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Uses the 12-min in-house time as the priced number when a rate card (higher ladder weight) is available, or ignores the human check to inflate the ratio past 100× and calls it a jackpot.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/golden/05.md"
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
     "html": "<p>&quot;Is this a big enough problem? We do risk reports.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>The skill cannot floor anything without (a) the unit of work and (b) what that unit costs today. It must ask for the <strong>one number it actually needs — the current cost per unit</strong> (and the unit itself), and stop there.</p>\n<ul><li>Must ask: what is one unit (one report?), and what does one unit cost today — an invoice, or a timed workflow?</li><li>Must NOT invent a token cost, a judgment estimate, an analyst rate, or a frequency to fill the gap.</li><li>Must NOT return a gap ratio or a band verdict from nothing.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: names the missing input (current cost per unit + the unit), points to the cheapest way to get it (pull one invoice / time one report), fabricates no numbers. FAIL: produces a floor, a ratio, or a verdict from the one-liner; invents any specific figure.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our risk reports are ugly. Size that for me.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;Ugly reports&quot; is a pre-chosen solution (redesign), not a problem. The skill must refuse the framing, reframe to the decision the report drives, and re-floor <em>that</em>.</p>\n<ul><li>Must name the trap: this prices the wrapper (the report's appearance), not the work. Cosmetics have a near-zero floor and a near-zero prize — flooring them would produce a misleading number.</li><li>Must reframe to the underlying job: the report exists to drive a decision (which sites get remediation budget / whether an operator's SLA position holds). Floor the judgment behind that decision, not the formatting.</li><li>Must ask for the decision and its current cost before computing anything.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects &quot;ugly&quot; as the unit, reframes to the decision the report supports, and re-scopes the floor to the judgment — without accepting the redesign framing. FAIL: dutifully floors &quot;making reports prettier&quot;, or accepts the cosmetic framing as the problem.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;What's the TAM for data-centre risk software? How many customers × price could we reach?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is market sizing, not the per-unit floor. The skill must decline and name the right sibling — it does not poach.</p>\n<ul><li>Must state that physics-floor-gap sizes the per-unit prize from first principles, not the total market.</li><li>Must point to <strong><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></strong> for TAM / customers × price.</li><li>Must NOT attempt a market-size number.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the TAM question, names <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a>, and (optionally) offers to run the per-unit floor instead if the fellow has a unit and its cost. FAIL: produces a TAM, a customer count, or any total-market figure; answers outside its one question.</p>"
     }
    ],
    "other": [],
    "file": "skills/physics-floor-gap/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/physics-floor-gap/SKILL.md",
  "template": "skills/physics-floor-gap/template.md",
  "example": "skills/physics-floor-gap/examples/sample.md",
  "rubric": "skills/physics-floor-gap/tests/rubric.json",
  "results": "skills/physics-floor-gap/tests/RESULTS.md"
 }
});
