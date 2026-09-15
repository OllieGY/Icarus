window.ICARUS_SKILL("evidence-ladder", {
 "name": "evidence-ladder",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a pile of things a fellow is calling &quot;validation&quot; — quotes, landing-page sign-ups, letters of intent, paid pilots, payments — and weights each one by what the person actually did, on a single five-rung ladder. It returns a filled table (claim → rung → weight → the observation behind it → the probe that raises it), the weight of the one load-bearing claim, and a one-line honest read. Its job is to stop a founder mistaking a wall of enthusiasm for evidence.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Every discovery signal is weighted by what a person DID, not what they said: money moved (1.0) outranks a behaviour you observed (0.7), an artefact they already made (0.5), a verbal promise (0.3), and a bare opinion (0.1). Rungs do not stack — fifty people saying yes is still 0.3, because the only thing that raises a claim is one signal at a higher rung, not more signals at the same one. So a fellow's confidence should track the rung of the load-bearing claim, not the volume of enthusiasm — and for every low-rung signal the ladder names the single cheapest probe that would move it up.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow holds evidence already and wants to know how much it weighs: after interviews, after a landing page, after &quot;they said yes&quot;, before writing &quot;validated&quot; in a deck.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th></tr></thead><tbody><tr><td>A build/no-build decision on one problem, scored to a gate</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — it gates a problem; this weights loose signals</td></tr><tr><td>To pick which test to run next</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — this skill hands it the &quot;reach rung R&quot; target; it picks the probe</td></tr><tr><td>A transcript turned into a structured summary</td><td><code>summarize-interview</code> — it extracts; this weights</td></tr><tr><td>The five qualitative whole-idea questions</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>To turn a solution back into a weighable claim</td><td><code>problem-statement</code>, then return here</td></tr></tbody></table></div>\n<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> <em>uses</em> this ladder as a ceiling on each of its eight dimensions. This skill <em>is</em> the ladder: it weights any pile, gates nothing, and picks no probe.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six steps.</p>\n<p><strong>Step 1 — List every signal, one per row.</strong> For each, write the claim it supports and <em>what the person physically did</em>. If the only honest thing you can write is what they said or felt, write that — it will land low, and that is the point. If the pile is empty — no signals at all — ask the fellow for signals and stop: emit no headline score and invent nothing. A ladder with nothing on it is a request for evidence, not a zero.</p>\n<p><strong>Step 2 — Place each signal on the ladder.</strong> The rung is set by the action, not the wording. Downgrade every impostor.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>Counts only when</th><th>Common impostor → downgrade to</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>cash or budget actually changed hands — invoice paid, deposit, pre-order, paid pilot</td><td>a signed LOI or quote with no payment → Verbal 0.3</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>you saw them do it (or hold the logs); it cost them time, effort, or switching; unprompted</td><td>a self-reported routine you did not witness → Verbal 0.3; a free one-click sign-up → Verbal 0.3</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>they showed you a thing THEY made or use — a spreadsheet, a workaround, their permit log</td><td>a reaction to a mockup YOU made → Opinion 0.1</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>a specific promise about the future — &quot;I'd pay $X&quot;, &quot;we'd switch by Q3&quot;</td><td>vague praise (&quot;great idea&quot;, &quot;we'd love that&quot;) → Opinion 0.1</td></tr><tr><td>Opinion</td><td>0.1</td><td>a view, a feeling, a prediction — &quot;I think&quot;, &quot;everyone needs this&quot;</td><td>— floor: never below, never above</td></tr></tbody></table></div>\n<p>The Artefact/Behaviour line: a log or artefact they <em>actively use in the workflow</em> is behaviour (0.7); a static doc they made once and set aside is artefact (0.5). What they do with it, not that it exists, sets the rung.</p>\n<p><strong>Step 3 — Weight each claim by its BEST rung, never the sum.</strong> A claim's weight is the highest rung any of its signals reaches. Duplicates at the same rung do not add: three verbal yeses is 0.3, not 0.9. The only way up is a signal at a higher rung.</p>\n<p><strong>Step 4 — Mark the ONE core claim and report the headline.</strong> Exactly one claim is load-bearing — usually &quot;the target will pay for / adopt this&quot;. The headline weighted score is that claim's weight. Do <strong>not</strong> average the pile: a mean lets one payment launder a stack of opinion. Instead report a coverage tally — how many distinct claims sit at behaviour-or-money (0.7+), how many are opinion-only (0.1).</p>\n<p><strong>Step 5 — For every signal below 1.0, name the cheapest probe that reaches the next rung.</strong> Then hand the &quot;reach rung R&quot; target to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> to select the specific probe.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal now at</th><th>To reach</th><th>Cheapest probe</th></tr></thead><tbody><tr><td>Opinion 0.1</td><td>Verbal 0.3</td><td>a direct, specific ask — &quot;pre-order at $X today?&quot;; costs one sentence</td></tr><tr><td>Verbal 0.3</td><td>Artefact 0.5</td><td>ask them to show or send what they use for this now</td></tr><tr><td>Verbal 0.3</td><td>Money 1.0</td><td>a paid concierge, pre-order, or deposit — skip the middle rungs, go straight to cash</td></tr><tr><td>Artefact 0.5</td><td>Behaviour 0.7</td><td>wizard-of-oz or fake-door — put the workflow in front of them and watch</td></tr><tr><td>Behaviour 0.7</td><td>Money 1.0</td><td>concierge with a price on it — do the task by hand, charge for it</td></tr></tbody></table></div>\n<p><strong>Step 6 — Write the one-line honest read.</strong> Format: &quot;You have [rung]-grade evidence for [core claim]. Cheapest way to make it [next rung]: [probe].&quot; If the pile is mostly opinion, say so plainly and name the gap.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>This skill is the evidence standard the module runs on. The bar it enforces: the headline equals the rung of the core claim's best <em>real</em> signal; opinion never exceeds 0.1; stacking never raises a rung; a written promise, a free sign-up, and a self-reported routine are not money or behaviour. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Kill line: scoring an opinion above 0.1 fails the skill.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Stacking enthusiasm.</strong> Ten yeses at 0.3 is still 0.3. Volume is not a rung. If the total climbed because more people said the same thing, you inflated it.</li><li><strong>Their reaction to your demo, counted as their artefact.</strong> &quot;They loved the mockup&quot; is the person reacting to a thing YOU made — opinion, 0.1. Artefact-shown means a thing THEY built or use, which reveals real behaviour.</li><li><strong>LOI or signed quote, counted as money.</strong> A written promise with no payment is a promise on paper, not money moved — 0.3. Only cash or redirected budget is 1.0.</li><li><strong>Free sign-up, counted as behaviour.</strong> A one-click email capture with no cost and no follow-through is an expression of interest — 0.3. Behaviour earns 0.7 only when the action cost the person something.</li><li><strong>Self-report, counted as observed.</strong> &quot;It takes me two hours every Monday&quot;, if you did not watch it or hold the logs, is verbal — 0.3. Observed behaviour needs eyes or data.</li><li><strong>Averaging the pile.</strong> A blended mean is how one payment hides a stack of opinion. Report the core claim's weight plus the coverage tally, never an average.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a worked Barrier Intelligence pile: a paid rig pilot, a field engineer's permit log, forty landing-page sign-ups, and two supervisors who &quot;love the alerts&quot;. Shows the downgrades, the headline pinned to the core claim, the coverage tally, and the probe named for the one claim that is still only opinion.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Supersedes nothing; it formalises the ladder that Wave-1 already used informally. Absorbs the signal-extraction shape of <code>summarize-interview</code> (pull the signal out of the noise) and beats it on one axis: <code>summarize-interview</code> records what was said; this weighs what it is worth and refuses to let a said-thing pass as a done-thing.</p>\n<p>Cited by: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (uses these rungs as per-dimension ceilings), and every probe skill (a probe's whole job is to move a claim up this ladder). Composes with <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (hand it the target rung; it picks the probe), the four probe runbooks (<a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>), and <code>problem-statement</code> (reframe a solution-in-disguise into a weighable claim before scoring).</p>"
  }
 ],
 "template": {
  "html": "<h1>Evidence ladder — &lt;fellow / product&gt;</h1>\n<p><strong>Core claim (the load-bearing one, mark exactly one):</strong> &lt;e.g. &quot;target X will pay for Y&quot;&gt; <strong>Signals weighed:</strong> &lt;n&gt;   <strong>Date:</strong> &lt;yyyy-mm-dd&gt;</p>\n<h2>The ladder (canonical — do not alter the weights)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>Counts only when</th><th>Impostor → downgrade to</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>cash/budget changed hands — invoice, deposit, pre-order, paid pilot</td><td>LOI/quote, no payment → Verbal 0.3</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>you saw it / hold the logs; it cost them; unprompted</td><td>self-report not witnessed → Verbal 0.3; free sign-up → Verbal 0.3</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>they showed a thing THEY made/use</td><td>reaction to YOUR mockup → Opinion 0.1</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>a specific future promise — &quot;I'd pay $X&quot;</td><td>vague praise → Opinion 0.1</td></tr><tr><td>Opinion</td><td>0.1</td><td>a view/feeling/prediction</td><td>— floor</td></tr></tbody></table></div>\n<h2>Weighted evidence table</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Claim it supports</th><th>What the person actually DID</th><th>Rung</th><th>Weight</th><th>Core?</th><th>Placement note (any downgrade)</th><th>Probe to raise one rung</th><th>Target rung</th></tr></thead><tbody><tr><td>1</td><td>&lt;claim&gt;</td><td>&lt;observable action, not words&gt;</td><td>&lt;rung&gt;</td><td>&lt;0.1–1.0&gt;</td><td>&lt;core/–&gt;</td><td>&lt;downgrade + reason, or –&gt;</td><td>&lt;cheapest probe&gt;</td><td>&lt;next rung&gt;</td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Per-claim weight = the highest rung any of its signals reaches. Duplicates at the same rung do NOT add.</p>\n<h2>Headline</h2>\n<ul><li><strong>Core claim:</strong> &lt;name it&gt;</li><li><strong>Weighted score (rung of the core claim's best real signal):</strong> &lt;weight&gt; — &lt;rung name&gt;</li><li><strong>Coverage:</strong> &lt;a&gt; of &lt;n&gt; claims at behaviour-or-money (0.7+); &lt;b&gt; opinion-only (0.1)</li><li>Do not report an average — a mean hides opinion behind money.</li></ul>\n<h2>Honest read (one line)</h2>\n<blockquote><p>You have &lt;rung&gt;-grade evidence for &lt;core claim&gt;. Cheapest way to make it &lt;next rung&gt;: &lt;probe&gt;.</p></blockquote>\n<p>&lt;If the pile is mostly opinion, say so plainly and name the gap. Tag claims <span class=\"tag tag-fact\">Fact</span> / <span class=\"tag tag-assumption\">Assumption</span> / <span class=\"tag tag-hypothesis\">Hypothesis</span>.&gt;</p>\n<h2>Probe map (reference)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal now at</th><th>To reach</th><th>Cheapest probe</th></tr></thead><tbody><tr><td>Opinion 0.1</td><td>Verbal 0.3</td><td>a direct specific ask — &quot;pre-order at $X today?&quot;</td></tr><tr><td>Verbal 0.3</td><td>Artefact 0.5</td><td>ask them to show/send what they use for this now</td></tr><tr><td>Verbal 0.3</td><td>Money 1.0</td><td>paid concierge / pre-order / deposit — go straight to cash</td></tr><tr><td>Artefact 0.5</td><td>Behaviour 0.7</td><td>wizard-of-oz or fake-door — watch them use it</td></tr><tr><td>Behaviour 0.7</td><td>Money 1.0</td><td>concierge with a price — do it by hand, charge</td></tr></tbody></table></div>\n<p>Hand each target rung to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> to pick the specific probe.</p>",
  "path": "skills/evidence-ladder/template.md"
 },
 "example": {
  "html": "<h1>Evidence ladder — Barrier Intelligence (gas-safety alerts for rigs)</h1>\n<p><em>Illustrative fixture. Numbers are plausible, not real client data.</em></p>\n<p><strong>Core claim:</strong> an operator will pay for the gas-safety alert product. <strong>Signals weighed:</strong> 5   <strong>Date:</strong> 2026-07-20</p>\n<p>The fellow arrived saying: &quot;We're validated — a rig is paying, two supervisors love it, forty people signed up, and an engineer showed me exactly the problem.&quot; Here is what that pile actually weighs.</p>\n<h2>Weighted evidence table</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Claim it supports</th><th>What the person actually DID</th><th>Rung</th><th>Weight</th><th>Core?</th><th>Placement note</th><th>Probe to raise one rung</th><th>Target rung</th></tr></thead><tbody><tr><td>1</td><td>An operator will pay</td><td>Rig B-12 paid a $4k invoice for a 6-week alert pilot</td><td>Money moved</td><td>1.0</td><td><strong>core</strong></td><td>none — cash cleared</td><td>already at the top for this claim</td><td>—</td></tr><tr><td>2</td><td>Operators trust the alert enough to act on it</td><td>Two shift supervisors said the alerts are &quot;exactly what we need&quot;</td><td>Opinion</td><td>0.1</td><td>–</td><td>said, not done — praise, not action</td><td>run the alert live for one shift and watch whether they act on it or override it</td><td>Behaviour 0.7</td></tr><tr><td>3</td><td>The permit-logging pain is real and manual</td><td>A field engineer showed his hand-kept paper permit log, 3 months deep</td><td>Artefact shown</td><td>0.5</td><td>–</td><td>his own artefact — genuine, counts</td><td>put a fake-door alert into his workflow, watch if he uses it</td><td>Behaviour 0.7</td></tr><tr><td>4</td><td>There is broad demand</td><td>40 landing-page email sign-ups</td><td>Verbal</td><td>0.3</td><td>–</td><td>downgraded from &quot;behaviour&quot;: one-click, free, no follow-through</td><td>email the 40 a $X pre-order / paid-pilot offer, count who pays</td><td>Money 1.0</td></tr><tr><td>5</td><td>Managers will roll it out</td><td>4 of 5 managers &quot;loved&quot; the alert mockup in a demo</td><td>Opinion</td><td>0.1</td><td>–</td><td>downgraded: reaction to OUR mockup, not their artefact</td><td>ask each to show the tool they use for gas-safety sign-off today</td><td>Artefact 0.5</td></tr></tbody></table></div>\n<p>Per-claim weights: paying (1.0), trust (0.1), pain-real (0.5), broad-demand (0.3), rollout (0.1).</p>\n<h2>Headline</h2>\n<ul><li><strong>Core claim:</strong> an operator will pay — <strong>1.0, money moved.</strong> <span class=\"tag tag-fact\">Fact</span> One rig paid.</li><li><strong>Coverage:</strong> 1 of 5 claims at behaviour-or-money (0.7+); 2 opinion-only (0.1).</li><li>No average is reported. A mean of the five (≈0.4) would launder two opinions behind one real payment and read as &quot;moderately validated&quot; — which is false.</li></ul>\n<h2>Honest read</h2>\n<blockquote><p>You have money-grade evidence that <strong>one</strong> operator will pay — that is real, and it is the strongest rung. You do <strong>not</strong> have evidence operators <em>trust</em> the alert (0.1, opinion) or that managers will <em>roll it out</em> (0.1, a reaction to your mockup). The paying pilot proves purchase, not adoption. Cheapest way to move trust to behaviour-grade: run the alert live for one shift on the paying rig and watch whether supervisors act on it or override it — a concierge/field probe, not another demo. <span class=\"tag tag-assumption\">Assumption</span> Purchase will convert to trust once alerts fire in anger; <span class=\"tag tag-hypothesis\">Hypothesis</span> a live shift will surface the override rate that decides it.</p></blockquote>\n<h2>What the fellow was told, plainly</h2>\n<p>&quot;Paying&quot; is your one solid claim — bank it. &quot;Loved it&quot; and &quot;signed up&quot; are not validation; they are enthusiasm, and stacking them does not add up to the one thing you need: that operators will <em>act on</em> the alert when it matters. Spend the pilot watching that, not collecting more yeses.</p>",
  "path": "skills/evidence-ladder/examples/sample.md"
 },
 "rubric": {
  "skill": "evidence-ladder",
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
    "How strong is this signal?",
    "Score the interview — did I actually validate anything?",
    "Did they actually validate it, or did they just say nice things?",
    "Weight this evidence for me — three LOIs and forty sign-ups.",
    "Is this real validation or just enthusiasm?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem 1-5 and tell me if I should build it / go or no-go.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Which test should I run to check this / how do I probe this?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Summarize this customer interview into JTBD and action items.",
     "sibling": "summarize-interview",
     "local": false
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description names all 5 must-fire phrasings verbatim (&quot;how strong is this signal&quot;, &quot;score the interview&quot;, &quot;did they actually validate&quot;, &quot;weight this evidence&quot;, &quot;is this real validation&quot;). All 3 must-not-fire are explicitly excluded in-description (&quot;NOT a build gate → problem-quality-scorecard&quot;, &quot;NOT a picker for which test → probe-matrix&quot;, &quot;NOT a transcript summary → summarize-interview&quot;). &quot;Score this problem 1-5&quot; shares the &quot;score&quot; token but is routed away by the explicit build-gate exclusion.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied Method to each input; per-case totals below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 empty pile: applying Step 1 (one placed signal per row) forces a request for the pile + no headline — no fabrication. 02 &quot;need a mobile app&quot;: &quot;When NOT&quot; table routes to <code>problem-statement</code>; feature-request weighs as Opinion 0.1, trap named. 03 go/no-go + which-test: both siblings named (<a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>), in-scope service offered. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code>.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01: a generic PM prompt would call &quot;three warm buyers&quot; promising and stop there. It would not fix the signal at 0.3 on a five-rung ladder, state the anti-stacking rule, refuse to round &quot;buyers&quot; up to money, prescribe &quot;skip the middle rungs, go straight to cash&quot;, or replace the average with a coverage tally. Reframe is load-bearing, not decoration. All lookup guidance (ladder, impostor downgrades, probe map) is tabular; prose is reserved for rationale.</p>"
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
    "MF",
    "AC",
    "PE",
    "CH",
    "ES"
   ],
   "rows": [
    {
     "label": "G01 Durian — 3 \"they'd buy it\" 5",
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
     "label": "G02 Barrier — mixed 4-signal pile 5",
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
     "label": "G03 Mentix — single self-report quote 5",
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
    },
    {
     "label": "G04 Azraq — 3 signed LOIs / $600k 5",
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
     "label": "G05 Mentix — mockup \"4 of 5 loved it\" 5",
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
    }
   ]
  },
  "dimensionScores": [],
  "runs": [
   [
    "run 1",
    "all",
    "see block below",
    "judge (separate agent)"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Empty-pile behaviour is implied, not stated.</strong> Adversarial 01 (no signals) is handled correctly only because Step 1 requires a placed signal per row. The SKILL never says explicitly &quot;if the pile is empty, ask for signals and emit no headline weight.&quot; A one-line instruction in Method (or a Gotcha) would harden this against a run that invents example rows.</li><li><strong>Artefact-shown (0.5) vs Behaviour-observed (0.7) edge.</strong> A thing they <em>use</em> (e.g. the permit log) is 0.5, yet &quot;use&quot; reads like behaviour. The distinction that decides it is <em>shown-static</em> (0.5) vs <em>observed-in-use / you hold the logs</em> (0.7). It works in the example but is the one rung boundary where two readers could diverge; a sharpening sentence would remove the last ambiguity.</li><li>(Both are refinements, not defects — no gate failed on them.)</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: empty pile → ask for signals + emit no headline (no fabrication); sharpened Artefact-0.5 vs Behaviour-0.7 (a log actively used in the workflow is 0.7).",
    "html": ""
   }
  ],
  "killLine": "<ul><li>Any run that scores an opinion above 0.1 fails outright. Golden 05 and Golden 02 are the primary traps (enthusiasm and a reaction-to-mockup must land at 0.1).</li></ul>",
  "html": "<h1>Eval log — evidence-ladder</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;How strong is this signal?&quot;</li><li>&quot;Score the interview — did I actually validate anything?&quot;</li><li>&quot;Did they actually validate it, or did they just say nice things?&quot;</li><li>&quot;Weight this evidence for me — three LOIs and forty sign-ups.&quot;</li><li>&quot;Is this real validation or just enthusiasm?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Score this problem 1-5 and tell me if I should build it / go or no-go.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Which test should I run to check this / how do I probe this?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></li><li>&quot;Summarize this customer interview into JTBD and action items.&quot; → belongs to <code>summarize-interview</code></li></ol>\n<h2>Kill-line check (auto-fail if violated)</h2>\n<ul><li>Any run that scores an opinion above 0.1 fails outright. Golden 05 and Golden 02 are the primary traps (enthusiasm and a reaction-to-mockup must land at 0.1).</li></ul>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>see block below</td><td>judge (separate agent)</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description names all 5 must-fire phrasings verbatim (&quot;how strong is this signal&quot;, &quot;score the interview&quot;, &quot;did they actually validate&quot;, &quot;weight this evidence&quot;, &quot;is this real validation&quot;). All 3 must-not-fire are explicitly excluded in-description (&quot;NOT a build gate → problem-quality-scorecard&quot;, &quot;NOT a picker for which test → probe-matrix&quot;, &quot;NOT a transcript summary → summarize-interview&quot;). &quot;Score this problem 1-5&quot; shares the &quot;score&quot; token but is routed away by the explicit build-gate exclusion.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied Method to each input; per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 empty pile: applying Step 1 (one placed signal per row) forces a request for the pile + no headline — no fabrication. 02 &quot;need a mobile app&quot;: &quot;When NOT&quot; table routes to <code>problem-statement</code>; feature-request weighs as Opinion 0.1, trap named. 03 go/no-go + which-test: both siblings named (<a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>), in-scope service offered. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01: a generic PM prompt would call &quot;three warm buyers&quot; promising and stop there. It would not fix the signal at 0.3 on a five-rung ladder, state the anti-stacking rule, refuse to round &quot;buyers&quot; up to money, prescribe &quot;skip the middle rungs, go straight to cash&quot;, or replace the average with a coverage tally. Reframe is load-bearing, not decoration. All lookup guidance (ladder, impostor downgrades, probe map) is tabular; prose is reserved for rationale.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (MF / AC / PE / CH / ES, total /25; pass ≥21 &amp; no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 Durian — 3 &quot;they'd buy it&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G02 Barrier — mixed 4-signal pile</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G03 Mentix — single self-report quote</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr><tr><td>G04 Azraq — 3 signed LOIs / $600k</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G05 Mentix — mockup &quot;4 of 5 loved it&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<ul><li><strong>Anti-stacking check:</strong> PASS. G01 (3 verbal yeses → 0.3, not 0.9) and G04 (3 LOIs → 0.3) both hold the rung flat; Step 3 + reframe (&quot;fifty people saying yes is still 0.3&quot;) enforce it.</li><li><strong>Kill-line check:</strong> PASS. G05 lands the mockup reaction + &quot;would roll it out&quot; prediction at Opinion 0.1; enthusiasm (&quot;4 of 5&quot;) does not lift. No opinion scored above 0.1 in any case. G02 supervisors' praise also correctly at 0.1.</li><li><strong>Rung-crispness check:</strong> mostly PASS. The &quot;Counts only when&quot; + impostor columns let two readers place the common cases identically. Softest boundary is Artefact-shown 0.5 vs Behaviour-observed 0.7 (a permit log they <em>use</em> is 0.5, but using it is arguably behaviour) — resolved in practice by &quot;shown vs observed live/logs&quot;, but see gotcha.</li><li>No <code>auto_fail</code> triggered in any case (no fabricated numbers/quotes, no flattery, no out-of-scope firing, no boilerplate).</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Empty-pile behaviour is implied, not stated.</strong> Adversarial 01 (no signals) is handled correctly only because Step 1 requires a placed signal per row. The SKILL never says explicitly &quot;if the pile is empty, ask for signals and emit no headline weight.&quot; A one-line instruction in Method (or a Gotcha) would harden this against a run that invents example rows.</li><li><strong>Artefact-shown (0.5) vs Behaviour-observed (0.7) edge.</strong> A thing they <em>use</em> (e.g. the permit log) is 0.5, yet &quot;use&quot; reads like behaviour. The distinction that decides it is <em>shown-static</em> (0.5) vs <em>observed-in-use / you hold the logs</em> (0.7). It works in the example but is the one rung boundary where two readers could diverge; a sharpening sentence would remove the last ambiguity.</li><li>(Both are refinements, not defects — no gate failed on them.)</li></ul>\n<h2>Refine run 2 — applied judge fixes: empty pile → ask for signals + emit no headline (no fabrication); sharpened Artefact-0.5 vs Behaviour-0.7 (a log actively used in the workflow is 0.7).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "the seed: \"they said they'd buy it\" (Durian Labs)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;I've got validation for the scheduling copilot. Three factory-ops managers told me they'd buy it if it did shift hand-over automatically. That's three warm buyers. How strong is that?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Core claim: the target will pay for the copilot.</li><li>The three &quot;they'd buy it&quot; signals are <strong>verbal commitment → 0.3</strong>, not higher. Stacking three does NOT lift it above 0.3 (anti-stacking rule stated).</li><li>Headline weighted score: <strong>0.3 (verbal)</strong>. Must not round up to money on the strength of &quot;buyers&quot; language.</li><li>The signal is a specific future promise, so it is verbal (0.3), not opinion — correctly placed one rung above the floor.</li><li>Cheapest probe named to reach money 1.0: a <strong>paid concierge / pre-order / deposit</strong> — do the hand-over by hand for one of them and charge, or take a pre-order. Skip the middle rungs; go to cash.</li><li>Honest read in the one-line form: opinion/verbal-grade for the core claim, here is the cheapest way to make it money-grade.</li><li>Claims tagged <span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>; no fabricated numbers added.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/evidence-ladder/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "mixed-rung pile (Barrier Intelligence)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow drops four signals for the gas-safety alert product and asks &quot;score my validation&quot;:</p>\n<ol><li>Rig B-12 paid a $4k invoice for a 6-week alert pilot.</li><li>Two shift supervisors said the alerts are &quot;exactly what we need&quot;.</li><li>A field engineer showed his 3-month hand-kept paper permit log.</li><li>40 email sign-ups on the landing page.</li></ol>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>A weighted evidence table with all four signals placed on distinct rungs: payment → money <strong>1.0</strong> (core claim: an operator will pay); supervisors' praise → opinion <strong>0.1</strong> (said, not done); the engineer's own permit log → artefact <strong>0.5</strong>; the 40 sign-ups → <strong>downgraded to verbal 0.3</strong> (free, one-click, no follow-through — not behaviour 0.7).</li><li>Headline pinned to the CORE claim (an operator will pay) = <strong>1.0, money moved.</strong></li><li>Coverage tally reported (1 of the claims at behaviour-or-money; the trust claim opinion-only). No average reported — a mean would launder the two opinions behind the one payment.</li><li>The distinction drawn explicitly: the paying pilot proves <strong>purchase</strong>, not <strong>trust/adoption</strong>. The &quot;operators trust the alert&quot; claim is still only 0.1.</li><li>Probe named for the trust claim: run the alert live for one shift and watch whether supervisors act or override — a concierge/field probe, not another demo.</li><li>Claims tagged; no invented specifics beyond the four given.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/evidence-ladder/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "the mundane one: weight a single interview quote (Mentix)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;One line to weigh. A plant manager told me: 'Pulling the weekly downtime report takes me about two hours every Monday.' Does that count as evidence the pain is real?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Single signal, single claim: the weekly downtime-report pain is real and costly.</li><li>Placed as <strong>verbal commitment → 0.3</strong>, NOT behaviour 0.7. It is a self-reported routine the fellow did not witness and holds no logs for. The rule stated plainly: self-report ≠ observed behaviour.</li><li>Headline: <strong>0.3, verbal.</strong> Honest that a single unwitnessed quote is a starting point, not proof of the pain's size or frequency.</li><li>Two cheap probes named to climb: ask him to screen-share or send last month's reports → artefact <strong>0.5</strong>; shadow one Monday → behaviour <strong>0.7</strong>.</li><li>No inflation: the &quot;two hours&quot; figure is carried as his claim, tagged <span class=\"tag tag-assumption\">Assumption</span> — not asserted as <span class=\"tag tag-fact\">Fact</span>, because it was neither observed nor measured.</li><li>Handles a minimal input without demanding a large pile; still returns the rung, the weight, and the next-rung probe.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/evidence-ladder/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "the LOI trap (Azraq)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;We have three signed letters of intent from data-centre operators for the risk-report product — roughly $600k of validated pipeline. Weight that for me, it's basically money in the door.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Core claim: operators will pay for the risk-report product.</li><li>The three signed LOIs are placed as <strong>verbal commitment → 0.3</strong>, NOT money 1.0. A written, non-binding promise with no payment is a promise on paper. Written ≠ money. The trap named directly: an LOI feels like a contract but moves no cash.</li><li>The &quot;$600k validated pipeline&quot; framing is challenged, not repeated as fact. It is <span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>, not <span class=\"tag tag-fact\">Fact</span> — no money has moved.</li><li>Stacking three LOIs does not raise the rung above 0.3.</li><li>Headline: <strong>0.3, verbal.</strong> Cheapest probe to reach money 1.0: convert one LOI to a paid pilot or a deposit — even a small refundable deposit changes the rung.</li><li>Exception noted honestly: if any LOI carried a deposit, that deposit amount is money (1.0); the unpaid remainder stays 0.3.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/evidence-ladder/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "the disguised artefact / kill-line guard (Mentix)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;I demoed the copilot mockup to five plant managers. Four said they loved it and would roll it out to their line. Four out of five — that has to be artefact-grade evidence, right? They engaged with a real artefact.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The observed thing is a <strong>reaction to a mockup the fellow made</strong> — that is <strong>opinion → 0.1</strong>, not artefact-shown. Artefact-shown means a thing THEY built or use, revealing their behaviour; a reaction to your artefact is just a view.</li><li>The &quot;would roll it out&quot; promise is likewise opinion here (a prediction voiced while looking at a demo), and enthusiasm (&quot;loved it&quot;, &quot;four out of five&quot;) does NOT lift it. <strong>This is the kill line: the opinion must not score above 0.1.</strong></li><li>Headline: <strong>0.1, opinion.</strong> The pile is honestly named as enthusiasm, not validation, for the adoption claim.</li><li>Probes named to climb: ask each manager to show the tool/spreadsheet they use for this today → artefact <strong>0.5</strong>; then a concierge (do the copilot's job by hand for one line, charge) → toward behaviour/money.</li><li>The response challenges the &quot;four out of five&quot; framing directly rather than flattering it.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/evidence-ladder/tests/golden/05.md"
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
     "html": "<p>Fellow: &quot;How strong is my evidence?&quot;</p>\n<p>(No signals attached. No claim named. Nothing to weigh.)</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do NOT invent signals, quotes, or a score. There is nothing on the ladder yet.</li><li>Ask the ONE unblocking question, or return the smallest honest next step: &quot;List your signals, one per line — and for each, write what the person actually DID, not what they said or felt. Name the one claim your business depends on.&quot;</li><li>Optionally hand back the blank <code>template.md</code> header (core claim + one row per signal) as the thing to fill.</li><li>Refuse to emit a headline weight until at least one placed signal exists.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricates example signals and scores them.</li><li>Returns a generic lecture on evidence with no request for the fellow's actual pile.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/evidence-ladder/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;The problem is we don't have a mobile app. Weight the evidence that we need to build one — I've got a bunch of users asking for it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not accept the framing. &quot;We need a mobile app&quot; is a pre-chosen solution, not a claim evidence can weigh. Name the trap.</li><li>Reframe to the underlying job: what are users trying to do, where, that the current product blocks? The weighable claim is something like &quot;target X can't do job Y in context Z&quot; — not &quot;we lack feature F&quot;.</li><li>Point out that &quot;users asking for a mobile app&quot; is a feature request voiced as opinion (<strong>0.1</strong>) — a solution someone else picked — and that weighting it would score the feature's appeal, not any real pain.</li><li>Route: reframe with <code>problem-statement</code> first, then return with the behavioural signals about the job (when/where users hit the wall), which THIS skill can weigh.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Builds an evidence table for &quot;need a mobile app&quot; and scores it.</li><li>Treats &quot;users asked for it&quot; as validation above opinion.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/evidence-ladder/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Score this problem for me and tell me if I should build it — give me a go/no-go, and while you're at it, which test should I run next?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline both asks; name the right skills. This skill weights evidence the fellow ALREADY holds. It does not gate a build decision and it does not pick a probe.</li><li>The go/no-go on a problem belongs to <strong><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></strong> (it scores one problem on eight dimensions and returns build/redesign/kill). That skill uses this ladder as its ceiling — so run this first if the fellow wants to know how much their evidence weighs, then take it to the scorecard.</li><li>&quot;Which test should I run next&quot; belongs to <strong><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></strong>. This skill can hand it a target rung (&quot;I need to move the trust claim from 0.1 to behaviour&quot;), and probe-matrix picks the probe.</li><li>Offer the in-scope service: if the fellow pastes their actual signals, weight them here first.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces a 1-5 problem gate or a build/kill verdict (poaches problem-quality-scorecard).</li><li>Recommends a specific probe to run (poaches probe-matrix).</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/evidence-ladder/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/evidence-ladder/SKILL.md",
  "template": "skills/evidence-ladder/template.md",
  "example": "skills/evidence-ladder/examples/sample.md",
  "rubric": "skills/evidence-ladder/tests/rubric.json",
  "results": "skills/evidence-ladder/tests/RESULTS.md"
 }
});
