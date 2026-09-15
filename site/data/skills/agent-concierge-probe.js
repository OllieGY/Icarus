window.ICARUS_SKILL("agent-concierge-probe", {
 "name": "agent-concierge-probe",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>You hand a real, already-mapped task to an agent, let it run the task end to end across several outcomes, and instrument every run. Output is two things: the cost-per-outcome priced to the cent, and a frontier map showing which steps the agent does unaided and which a human has to take over. It compresses &quot;is this automatable, and what does one outcome cost&quot; into measured numbers instead of a hunch.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic &quot;can an agent do it?&quot; demo shows one happy-path run and a vibe. This runbook refuses a cost claim without its parts: the read-out must show input tokens, output tokens, tool calls, and human-fix minutes separately, each priced, before it states a cost-per-outcome — a bare &quot;$2/task&quot; is not a result. And it treats the red steps (where a human had to intervene) as the actual finding: those steps <em>are</em> the automation frontier, the line the product cannot yet cross. The probe is honest about cost-per-outcome and the frontier. It lies about self-serve UX and about trust/adoption, and it says so in every read-out.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when the workflow is already mapped (ideally by a concierge run, so you know the exceptions) and you need to know what an agent can do unaided and what one outcome costs.</p>\n<p>Do not use it when:</p>\n<ul><li>You have not chosen a probe — that is <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</li><li>You want to test willingness to pay, or you (the founder) will do the task by hand — that is <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>.</li><li>You want to know whether people would <em>use</em> or <em>trust</em> the thing — this probe lies about both. Adoption and trust need a concierge or field probe.</li><li>You want to fake an interface to test would-they-use-it — that is <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</li><li>You want to test whether a workflow reads / is legible on paper before anyone builds it — that is <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>.</li></ul>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Follow the runbook. Fill <code>template.md</code> as you go.</p>\n<p><strong>Step 1 — Take a mapped workflow.</strong> Break the task into discrete steps. If a concierge run already exposed the exceptions, carry them in — the agent will hit them.</p>\n<p><strong>Step 2 — Instrument before you run.</strong> Set the meters and the rates <em>first</em>:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Meter</th><th>Unit</th><th>Rate (set now)</th></tr></thead><tbody><tr><td>Input tokens</td><td>per 1M</td><td>$__</td></tr><tr><td>Output tokens</td><td>per 1M</td><td>$__</td></tr><tr><td>Tool / API calls</td><td>per call</td><td>$__</td></tr><tr><td>Human-fix time</td><td>per minute</td><td>$__ (loaded rate)</td></tr></tbody></table></div>\n<p>If you cannot capture human-fix minutes, you cannot run this probe — the human-fix column is where the cost hides.</p>\n<p><strong>Step 3 — Run N outcomes.</strong> N ≥ <strong>5</strong>. One run is anecdote; cost-per-outcome needs a denominator. Log every run, including the ones that failed (a failed run still spent tokens).</p>\n<p><strong>Step 4 — Price it to the cent.</strong> Show the breakdown, then the number.</p>\n<pre><code>CPO = [ (in_tokens × rate_in) + (out_tokens × rate_out)\n        + (tool_calls × rate_call)\n        + (human_fix_min × human_rate) ] ÷ successful_outcomes</code></pre>\n<p>Reporting a cost-per-outcome without the token / tool / human-fix breakdown is the kill line. Expected band from the honesty contract is ~$0.50–5 / task; if your CPO exceeds what a concierge customer paid, flag the inverted economics.</p>\n<p><strong>Step 5 — Map the frontier.</strong> Colour every step:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Colour</th><th>Meaning</th></tr></thead><tbody><tr><td>Green</td><td>agent did it unaided, every run</td></tr><tr><td>Amber</td><td>agent did it but needed a retry, reprompt, or verification</td></tr><tr><td>Red</td><td>a human had to take over</td></tr></tbody></table></div>\n<p>Red steps are the automation frontier. If a red step sits on the critical path, the task is not automatable yet — that is a finding, not a failure.</p>\n<p><strong>Step 6 — Read out against the honesty contract.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Honest about</th><th>Must NOT claim</th></tr></thead><tbody><tr><td>Cost-per-outcome, to the cent, with breakdown</td><td>Self-serve UX — you drove the agent</td></tr><tr><td>The automation frontier (green / amber / red)</td><td>Trust / adoption — not tested here</td></tr></tbody></table></div>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Done means: ≥5 logged runs, a cost-per-outcome with all four cost components shown and priced, and a frontier map with every step coloured. The measured CPO is <code>[Fact]</code>; the claim that it will fall with prompt tuning is <code>[Hypothesis]</code>; a green step observed over 5 runs is <code>[Fact]</code> for those runs, <code>[Assumption]</code> at higher volume. Behaviour beats opinion: the agent actually completing a step (0.7, behaviour observed) outranks a belief that it &quot;should be able to.&quot; Trust and adoption are untested and must be tagged <code>[Hypothesis, not tested]</code>, never asserted.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The invisible human.</strong> The founder quietly re-runs, edits the output, or fixes a tool call and does not log the minutes. That erases the true cost and paints a red step green. Log every intervention.</li><li><strong>N=1 costing.</strong> Pricing off one lucky clean run. Failed and retried runs spend real tokens; exclude them and the CPO is fiction.</li><li><strong>Bare-number costing.</strong> &quot;About $2 a task&quot; with no breakdown is the kill line — it hides where the cost lives and cannot be acted on.</li><li><strong>Frontier drift into adoption.</strong> &quot;The agent handled 8/10 steps, so operators will trust it.&quot; This probe says nothing about trust. Report the frontier; send trust to a concierge or field probe.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> — Mentix runs an agent to triage plant maintenance work orders end to end, prices each triaged order to the cent with the full token/tool/human-fix breakdown, and maps the frontier where ambiguous fault codes force a human takeover.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><code>../probe-matrix</code> — the router that sends you here; run it first if unsure.</li><li><code>../concierge-probe</code> — run this first: it gives you the real workflow (and its exceptions) plus the price a customer actually paid, which you compare the CPO against.</li><li><code>../wizard-of-oz-probe</code> — use instead when the question is would-they-use-it-if-it-worked, not what-does-it-cost.</li><li><code>../../02-customer-discovery/evidence-ladder</code> — the rungs the read-out scores against.</li><li>Supersedes nothing. It absorbs the concierge idea and beats the &quot;can an agent do it?&quot; demo by forcing a priced, itemised cost-per-outcome and a frontier map instead of one happy-path run.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Agent Concierge Probe — cost sheet + frontier map</h1>\n<p>Fill during the runs. No cost-per-outcome number without the breakdown above it.</p>\n<h2>0. Setup (set before you run)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Task (one unit outcome = &quot;one what&quot;)</td><td></td></tr><tr><td>Steps (from the mapped workflow)</td><td></td></tr><tr><td>Known exceptions carried in (from concierge run)</td><td></td></tr></tbody></table></div>\n<p>Rates:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Meter</th><th>Unit</th><th>Rate</th></tr></thead><tbody><tr><td>Input tokens</td><td>per 1M</td><td>$</td></tr><tr><td>Output tokens</td><td>per 1M</td><td>$</td></tr><tr><td>Tool / API calls</td><td>per call</td><td>$</td></tr><tr><td>Human-fix time</td><td>per minute</td><td>$ (loaded)</td></tr></tbody></table></div>\n<h2>1. Run log (N ≥ 5; log failures too)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Run</th><th>In tokens</th><th>Out tokens</th><th>Tool calls</th><th>Human-fix min</th><th>Outcome (ok / failed)</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Successful outcomes: __</p>\n<h2>2. Cost-per-outcome (breakdown first, then the number)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Component</th><th>Total</th><th>× rate</th><th>Cost</th></tr></thead><tbody><tr><td>Input tokens</td><td></td><td></td><td>$</td></tr><tr><td>Output tokens</td><td></td><td></td><td>$</td></tr><tr><td>Tool calls</td><td></td><td></td><td>$</td></tr><tr><td>Human-fix minutes</td><td></td><td></td><td>$</td></tr><tr><td><strong>Total across runs</strong></td><td></td><td></td><td><strong>$</strong></td></tr></tbody></table></div>\n<p>CPO = total cost ÷ successful outcomes = <strong>$__.__ / outcome</strong> <span class=\"tag tag-fact\">Fact</span></p>\n<p>Sanity check vs concierge price paid: __  (flag if CPO &gt; price)</p>\n<h2>3. Frontier map</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Step</th><th>Green (unaided)</th><th>Amber (retry/verify)</th><th>Red (human took over)</th><th>Note</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Red steps on the critical path: __  (these are the frontier)</p>\n<h2>4. Read-out (honesty contract)</h2>\n<p><strong>Honest about — state these:</strong></p>\n<ul><li>Cost-per-outcome: <span class=\"tag tag-fact\">Fact</span> $__ /outcome, breakdown above.</li><li>Frontier: <span class=\"tag tag-fact\">Fact</span> red steps are __; the task is / is not automatable end to end because __.</li></ul>\n<p><strong>Must NOT claim — leave out or tag as untested:</strong></p>\n<ul><li>Self-serve UX: [Hypothesis, not tested] the operator did not drive the agent; you did.</li><li>Trust / adoption: [Hypothesis, not tested] send to a concierge or field probe.</li></ul>\n<h2>5. Decision</h2>\n<ul><li>CPO vs value/price: __</li><li>Frontier verdict: automatable now / automatable after the red steps are solved / not yet.</li><li>Next move: __</li></ul>",
  "path": "skills/agent-concierge-probe/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix</h1>\n<p>Fellow: <strong>Mentix</strong> (industrial AI, factory operations). Numbers are illustrative test fixtures, not client data.</p>\n<p>The product is an AI copilot for factory managers. The first task handed to an agent: triage the plant's incoming maintenance work orders — read each order, classify fault type, set priority, and route to the right crew. One triaged work order = one outcome.</p>\n<h2>0. Setup</h2>\n<p>Steps: (1) read work order + attached sensor log → (2) classify fault type → (3) set priority → (4) route to crew. Exceptions carried in from the concierge run: null sensor reads, orders with no fault code, dual-fault orders.</p>\n<p>Rates: input $3 / 1M, output $15 / 1M, tool calls $0.02 each, human-fix $1.20 / min (loaded).</p>\n<h2>1. Run log (10 runs)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Run</th><th>In tokens</th><th>Out tokens</th><th>Tool calls</th><th>Human-fix min</th><th>Outcome</th></tr></thead><tbody><tr><td>1</td><td>9,200</td><td>1,100</td><td>3</td><td>0</td><td>ok</td></tr><tr><td>2</td><td>8,800</td><td>900</td><td>2</td><td>0</td><td>ok</td></tr><tr><td>3</td><td>12,400</td><td>1,600</td><td>4</td><td>4</td><td>ok (no fault code — human classified)</td></tr><tr><td>4</td><td>9,000</td><td>1,000</td><td>3</td><td>0</td><td>ok</td></tr><tr><td>5</td><td>15,100</td><td>2,000</td><td>5</td><td>6</td><td>ok (dual-fault — human split it)</td></tr><tr><td>6</td><td>8,900</td><td>950</td><td>2</td><td>0</td><td>ok</td></tr><tr><td>7</td><td>9,300</td><td>1,050</td><td>3</td><td>0</td><td>ok</td></tr><tr><td>8</td><td>11,800</td><td>1,400</td><td>4</td><td>3</td><td>failed (null read → wrong priority, caught)</td></tr><tr><td>9</td><td>9,100</td><td>1,000</td><td>3</td><td>0</td><td>ok</td></tr><tr><td>10</td><td>9,000</td><td>980</td><td>3</td><td>0</td><td>ok</td></tr></tbody></table></div>\n<p>Successful outcomes: 9 (run 8 failed; its tokens still count).</p>\n<h2>2. Cost-per-outcome</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Component</th><th>Total</th><th>× rate</th><th>Cost</th></tr></thead><tbody><tr><td>Input tokens</td><td>102,600</td><td>÷1M × $3</td><td>$0.308</td></tr><tr><td>Output tokens</td><td>11,980</td><td>÷1M × $15</td><td>$0.180</td></tr><tr><td>Tool calls</td><td>32</td><td>× $0.02</td><td>$0.640</td></tr><tr><td>Human-fix minutes</td><td>13</td><td>× $1.20</td><td>$15.60</td></tr><tr><td><strong>Total across 10 runs</strong></td><td></td><td></td><td><strong>$16.73</strong></td></tr></tbody></table></div>\n<p>CPO = $16.73 ÷ 9 = <strong>$1.86 / triaged order</strong> <span class=\"tag tag-fact\">Fact</span></p>\n<p>Read: model tokens are cheap ($0.05/order); the cost lives in human-fix minutes ($1.73/order, 93% of the total). Sanity check (both in USD so &quot;flag if CPO &gt; price&quot; is unambiguous): the concierge customer paid ~$4/order — CPO ($1.86) sits under it, but only because failures were caught for free by the founder.</p>\n<h2>3. Frontier map</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Step</th><th>Green</th><th>Amber</th><th>Red</th><th>Note</th></tr></thead><tbody><tr><td>1 read order + log</td><td>✓</td><td></td><td></td><td>reliable except null reads</td></tr><tr><td>2 classify fault</td><td></td><td>✓</td><td></td><td>reprompt needed on odd codes</td></tr><tr><td>3 set priority</td><td></td><td></td><td>✓</td><td>null reads → wrong priority; human takeover</td></tr><tr><td>4 route to crew</td><td>✓</td><td></td><td></td><td>reliable</td></tr></tbody></table></div>\n<p>Red step on the critical path: <strong>priority-setting when sensor data is null or missing</strong>. That is the frontier.</p>\n<h2>4. Read-out (honesty contract)</h2>\n<p>Honest about:</p>\n<ul><li>Cost-per-outcome: <span class=\"tag tag-fact\">Fact</span> $1.86 / triaged order, 93% of it human-fix time.</li><li>Frontier: <span class=\"tag tag-fact\">Fact</span> the agent triages clean orders unaided; it cannot set priority on null/missing sensor data without a human. Dual-fault and no-code orders need a human today.</li></ul>\n<p>Must NOT claim:</p>\n<ul><li>Self-serve UX: [Hypothesis, not tested] the founder drove the agent and caught the failure.</li><li>Trust / adoption: [Hypothesis, not tested] whether the plant manager would trust agent-set priorities is a concierge/field question.</li></ul>\n<h2>5. Decision</h2>\n<p>CPO ($1.86) is under the concierge price, but the human-fix share means it is not truly automated. Frontier verdict: automatable after the null-read priority step is solved (better sensor validation, or route those orders to a human by rule). Next move: fix the red step, re-run, and re-price; send the trust question to a field probe.</p>",
  "path": "skills/agent-concierge-probe/examples/sample.md"
 },
 "rubric": {
  "skill": "agent-concierge-probe",
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
    "Let an agent do the task end to end and see how far it gets.",
    "Measure the cost per outcome for the Mentix work-order triage.",
    "Run an agent concierge on Durian's first workflow.",
    "Where's the automation frontier — what can the agent not do unaided?",
    "Price this to the cent: tokens, tool calls, and human-fix time per outcome."
   ],
   "mustNotFire": [
    {
     "phrase": "I'll deliver it by hand myself and charge one operator.",
     "sibling": "concierge-probe",
     "local": true
    },
    {
     "phrase": "Which probe fits testing cost per outcome?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Sketch the screens on paper and walk the operator through it.",
     "sibling": "paper-sketch-probe",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire hit literal triggers (&quot;agent do the task&quot;, &quot;measure cost per outcome&quot;, &quot;agent concierge&quot;, &quot;automation frontier / what can the agent not do unaided&quot;, &quot;price it to the cent&quot;). Must-not route to sibling probes + matrix: #1→concierge-probe (founder+charge), #2→probe-matrix, #3→paper-sketch-probe. Two documentation notes below.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied method to each; re-did the cost arithmetic; per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → Step 1/2 force the one question (scoped task + rates; &quot;if you cannot capture human-fix minutes you cannot run this probe&quot;); invents no tokens. 02 model-buy smuggling → reframes to frontier+CPO, names model choice as a <em>rate input</em> not the finding. 03 out-of-scope → declines trust/adoption (the contract LIES about both), routes trust→concierge/field probe and &quot;which probe&quot;→probe-matrix. No fabrication/flattery/scope-poach.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p>supersedes: none.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output forces the four-component breakdown <em>before</em> the number, surfaces that human-fix minutes are 93% of CPO (priced-cheap but not truly automated), colours the frontier and names the red critical-path step, refuses self-serve/trust. A generic &quot;can an agent do it + roughly $2/task&quot; prompt produces exactly the bare number this skill calls the kill line. Rates/run-log/breakdown/frontier/contract are all tables.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>requires 5+ real fellow uses</p>"
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
     "label": "01 Mentix cost/triaged order 5",
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
     "label": "02 Durian first workflow, automatable? 5",
     "dims": [
      5,
      5,
      4,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Azraq agent-drafted report 5",
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
     "label": "04 Barrier cost-vs-trust confusion 5",
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
     "label": "05 Durian mundane CSV load 5",
     "dims": [
      5,
      5,
      4,
      4,
      5
     ],
     "total": 23,
     "verdictRaw": "✓",
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
    "6-gate judge run below"
   ]
  ],
  "gotchasSurfaced": "<ul><li>Trigger doc gap: must-not #3 routes a &quot;sketch the screens on paper&quot; input to <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, but the description's negative list names only <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>. It does not misfire (zero trigger-token overlap), but add paper-sketch-probe (or &quot;any interface-sketch probe&quot;) to the description's negatives for completeness.</li><li>Trigger near-collision: must-not #2 &quot;Which probe fits testing cost per outcome?&quot; contains the positive trigger &quot;cost per outcome&quot;; correct routing to probe-matrix depends on reading &quot;which probe fits&quot; as a <em>selection</em> question. It holds, but it is the closest call.</li><li>Unit consistency in the CPO-vs-price sanity check: the worked example compares a $ CPO ($1.86) to a £ concierge price (~£4/order) with no FX note. The CPO arithmetic itself is clean; tighten the comparison to a single currency so the &quot;flag if CPO &gt; price&quot; check is unambiguous.</li><li>&quot;Solution-smuggling&quot; (Adv-02) is not named in the skill text; the material supports the reframe but relies on the applier to name the trap. Optional: add it as a gotcha.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added paper-sketch-probe to the description negative list + When NOT (must-not-fire #3 route); fixed sample CPO-vs-price sanity check to one currency (USD) so \"flag if CPO > price\" is unambiguous.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — agent-concierge-probe</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Let an agent do the task end to end and see how far it gets.&quot;</li><li>&quot;Measure the cost per outcome for the Mentix work-order triage.&quot;</li><li>&quot;Run an agent concierge on Durian's first workflow.&quot;</li><li>&quot;Where's the automation frontier — what can the agent not do unaided?&quot;</li><li>&quot;Price this to the cent: tokens, tool calls, and human-fix time per outcome.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;I'll deliver it by hand myself and charge one operator.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a></li><li>&quot;Which probe fits testing cost per outcome?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></li><li>&quot;Sketch the screens on paper and walk the operator through it.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>6-gate judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire hit literal triggers (&quot;agent do the task&quot;, &quot;measure cost per outcome&quot;, &quot;agent concierge&quot;, &quot;automation frontier / what can the agent not do unaided&quot;, &quot;price it to the cent&quot;). Must-not route to sibling probes + matrix: #1→concierge-probe (founder+charge), #2→probe-matrix, #3→paper-sketch-probe. Two documentation notes below.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied method to each; re-did the cost arithmetic; per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → Step 1/2 force the one question (scoped task + rates; &quot;if you cannot capture human-fix minutes you cannot run this probe&quot;); invents no tokens. 02 model-buy smuggling → reframes to frontier+CPO, names model choice as a <em>rate input</em> not the finding. 03 out-of-scope → declines trust/adoption (the contract LIES about both), routes trust→concierge/field probe and &quot;which probe&quot;→probe-matrix. No fabrication/flattery/scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>supersedes: none.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output forces the four-component breakdown <em>before</em> the number, surfaces that human-fix minutes are 93% of CPO (priced-cheap but not truly automated), colours the frontier and names the red critical-path step, refuses self-serve/trust. A generic &quot;can an agent do it + roughly $2/task&quot; prompt produces exactly the bare number this skill calls the kill line. Rates/run-log/breakdown/frontier/contract are all tables.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores + arithmetic recheck (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix cost/triaged order</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Durian first workflow, automatable?</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>03 Azraq agent-drafted report</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>04 Barrier cost-vs-trust confusion</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>05 Durian mundane CSV load</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr></tbody></table></div>\n<p>Arithmetic verified: the method's own worked example (Mentix, the G01 scenario) ties out exactly — in 102,600→$0.308, out 11,980→$0.180, 32 calls→$0.640, 13 min→$15.60, total <strong>$16.73</strong>, ÷9 successful = <strong>$1.86/order</strong>, human-fix share <strong>93.3%</strong>, tokens <strong>$0.05/order</strong>. Every component is shown and priced before the number (no bare-CPO kill line). Constructed ≥5-run logs for G02/03/05 under the stated rates are internally consistent with the formula. G03 correctly counts human verification/correction as human-fix minutes (defeats the &quot;invisible human&quot; gotcha) and marks unsupervised accuracy [Hypothesis, not tested]. G04 correctly reports 9/10 as a frontier/accuracy <span class=\"tag tag-fact\">Fact</span> and refuses the trust + self-serve conclusions, routing trust to a concierge/field probe. No auto_fail.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li>Trigger doc gap: must-not #3 routes a &quot;sketch the screens on paper&quot; input to <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, but the description's negative list names only <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>. It does not misfire (zero trigger-token overlap), but add paper-sketch-probe (or &quot;any interface-sketch probe&quot;) to the description's negatives for completeness.</li><li>Trigger near-collision: must-not #2 &quot;Which probe fits testing cost per outcome?&quot; contains the positive trigger &quot;cost per outcome&quot;; correct routing to probe-matrix depends on reading &quot;which probe fits&quot; as a <em>selection</em> question. It holds, but it is the closest call.</li><li>Unit consistency in the CPO-vs-price sanity check: the worked example compares a $ CPO ($1.86) to a £ concierge price (~£4/order) with no FX note. The CPO arithmetic itself is clean; tighten the comparison to a single currency so the &quot;flag if CPO &gt; price&quot; check is unambiguous.</li><li>&quot;Solution-smuggling&quot; (Adv-02) is not named in the skill text; the material supports the reframe but relies on the applier to name the trap. Optional: add it as a gotcha.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added paper-sketch-probe to the description negative list + When NOT (must-not-fire #3 route); fixed sample CPO-vs-price sanity check to one currency (USD) so &quot;flag if CPO &gt; price&quot; is unambiguous.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix, cost per triaged work order",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix (industrial AI). &quot;We handed work-order triage to an agent. I want the cost per triaged order and a clear picture of what it can't do on its own.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>A run log of ≥5 outcomes (failures included).</li><li>Cost-per-outcome with the four components shown separately and priced — input tokens, output tokens, tool calls, human-fix minutes — then divided by successful outcomes. A bare &quot;$X/order&quot; with no breakdown fails (kill line).</li><li>A frontier map colouring each triage step green/amber/red; the red step(s) named as the frontier.</li><li>Read-out: <span class=\"tag tag-fact\">Fact</span> CPO and frontier; self-serve UX and trust tagged [Hypothesis, not tested].</li><li>If human-fix minutes dominate the cost, that is surfaced explicitly (the task is priced-cheap but not truly automated).</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Durian Labs, first workflow handed to an agent",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs (early workflow product). &quot;The concierge run mapped our first workflow and its exceptions. Now run it with an agent and tell me if it's automatable and what one run costs.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Steps taken from the concierge-mapped workflow, with the known exceptions carried in so the agent hits them.</li><li>≥5 runs logged; cost-per-outcome priced to the cent with the full breakdown.</li><li>Frontier map: which steps run unaided, which need retry/verify, which need a human. Verdict stated as automatable now / after the red steps are solved / not yet.</li><li>CPO compared against the price the concierge customer paid; inverted economics flagged if CPO is higher.</li><li>Trust/adoption and self-serve UX explicitly out of scope.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq, agent-drafted risk report",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq (data-centre / infrastructure risk). &quot;An agent drafts the data-centre risk report from incident data. What does one report cost, and where does it need me?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Run log of ≥5 drafted reports, including any that had to be corrected (they still spent tokens + human-fix minutes).</li><li>Cost-per-outcome with the breakdown; human verification/correction time counted as human-fix minutes, not hidden.</li><li>Frontier map: e.g. green on data pull and formatting, red on risk judgement calls or any step where the agent fabricated or mis-cited and a human had to correct it.</li><li>Read-out honest about cost + frontier; the report's <em>accuracy under no supervision</em> is not claimed — supervision time is in the cost, and unsupervised accuracy is [Hypothesis, not tested].</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence, cost vs trust confusion",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence (oil &amp; gas safety). &quot;The agent generated 9 of 10 gas-safety alerts correctly. Cost was tiny. So we've basically proven operators will trust it and it's ready to ship self-serve.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The cost read is produced properly: ≥5 runs, CPO with the token/tool/human-fix breakdown. &quot;Cost was tiny&quot; is replaced with the actual number and its components.</li><li>The 9/10 is reported as a frontier/accuracy observation for those runs <span class=\"tag tag-fact\">Fact</span>, not as proof of trust.</li><li>The skill refuses the trust and self-serve conclusions: this probe lies about both. Asserting operator trust from an agent's hit rate is out of contract. Trust → concierge/field probe; self-serve UX → not tested here.</li><li>Read-out tags trust and adoption [Hypothesis, not tested] and names the right probe for them.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian Labs, mundane weekly data load (deliberately mundane case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs (early workflow product). &quot;Boring one: the agent just pulls a weekly CSV, reformats it, and loads it to the dashboard. It basically always works. Do we even need to measure this?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Yes — the skill still produces the full instrument: ≥5 runs, cost-per-outcome with all four components priced, even when the number is small and the steps are dull.</li><li>Frontier map is mostly green; the skill says so plainly rather than inflating risk. Any amber (e.g. a week the CSV schema drifts) is noted.</li><li>The point made: boring does not mean skip the breakdown. A cost-per-outcome with no token/tool/human-fix itemisation is the kill line regardless of how cheap the task is.</li><li>Read-out: <span class=\"tag tag-fact\">Fact</span> CPO and a near-fully-green frontier; still no self-serve/trust claim.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/golden/05.md"
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
     "html": "<p>&quot;Can an agent do it? I want to try automating something in oil &amp; gas.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Ask the ONE question that unblocks the run, or return the smallest honest next step. Invent no task, no tokens, no cost.</p>\n<p>The unblocking question: <strong>What single, already-mapped task — with a defined unit outcome (&quot;one what&quot;) — do you want the agent to run, and what are the token / tool / human-fix rates to price it?</strong> Without a scoped task and rates there is nothing to instrument.</p>\n<p>Fail if the skill invents a task, fabricates token counts, or reports a cost-per-outcome from the one-liner.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The real problem is we haven't picked the right LLM — run this so we know which model to buy.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Reframe to the underlying job and name the trap. Do not accept the framing.</p>\n<p>This probe measures the automation frontier and cost-per-outcome for a task. It is not a model-selection bake-off. &quot;So we know which model to buy&quot; bakes a solution (a model purchase) into the run and will read any cost number as a verdict on a model rather than on the task. Name it: solution-smuggling. Reframe — what steps can an agent do unaided on this task, and what does one outcome cost — and note that model choice is a rate input, not the finding.</p>\n<p>Fail if the skill accepts &quot;pick the model&quot; as the goal of the run.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Just tell me if customers will trust the agent and adopt it — and which probe I should be running anyway.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Decline both; name the right owners. Do not poach.</p>\n<ul><li>Trust and adoption are exactly what this probe LIES about (per the honesty contract). It cannot answer them. They need a concierge or field probe → <code>../concierge-probe</code> (WTP + real workflow) or a field/trust probe.</li><li>&quot;Which probe should I be running&quot; is the router's job → <code>../probe-matrix</code>.</li></ul>\n<p>This skill measures cost-per-outcome and the automation frontier once a task and rates are set. It does not test trust, does not test adoption, and does not select probes.</p>\n<p>Fail if the skill claims a trust/adoption result or picks the probe itself.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/agent-concierge-probe/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/agent-concierge-probe/SKILL.md",
  "template": "skills/agent-concierge-probe/template.md",
  "example": "skills/agent-concierge-probe/examples/sample.md",
  "rubric": "skills/agent-concierge-probe/tests/rubric.json",
  "results": "skills/agent-concierge-probe/tests/RESULTS.md"
 }
});
