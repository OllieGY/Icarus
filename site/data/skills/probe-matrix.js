window.ICARUS_SKILL("probe-matrix", {
 "name": "probe-matrix",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;how do I test this cheaply?&quot; into one decision: the single question you most need answered, matched to the cheapest probe that can answer it <em>honestly</em>. It picks from four probes — paper/sketch, Wizard-of-Oz, concierge, agent-concierge — writes down what the chosen probe will still lie about, and pre-registers the pass/fail read-out before you run. If you already picked a probe and it lies about the thing you want to learn, the skill kills it and names the honest one. Then it hands you to the matching runbook for the how-to.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic fidelity ladder picks a probe by how much you want to build — paper, clickable, coded, MVP — as if the only question were cost. That is the wrong axis. Every probe is honest about some questions and lies about others, and the honesty is fixed by the highest evidence rung the probe can legitimately produce: a paper sketch tops out at a comprehension read (0.5), so it <em>cannot</em> tell you about trust, which is behaviour under real stakes (0.7); a Wizard-of-Oz produces real usage behaviour toward a faked backend, so it lies about feasibility and unit cost; a concierge collects real money and the real workflow but lies about scale. This skill routes by that honesty, not by cost — cheapest <em>honest</em> probe wins — and its sharp move is the refusal: it will not recommend a probe that lies about the very thing you are trying to learn, and it tells you which probe to run instead. A probe you cannot trust to answer the question is more expensive than the one that costs more and does.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a claim you are unsure of and want to know the cheapest honest way to move it up the evidence ladder — before you build.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th></tr></thead><tbody><tr><td>The step-by-step to actually run a probe (tooling, scripts, human ops)</td><td>the runbook: <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, or <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></td></tr><tr><td>A build / no-build decision on the problem itself</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>To score a signal already in hand (an interview quote, a click, a payment)</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></td></tr><tr><td>To reframe a solution-in-disguise back into a problem</td><td><code>problem-statement</code>, then return here</td></tr><tr><td>Every risky assumption mapped across value / GTM / strategy / team</td><td><code>identify-assumptions-new</code></td></tr></tbody></table></div>\n<p>This skill selects the probe and pre-registers the read-out. It does not run the probe, does not gate the problem, and does not score signals you already have.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six steps.</p>\n<p><strong>Step 1 — Extract the ONE question.</strong> One testable question about one unknown. If the fellow lists three, rank by riskiest-assumption-first (probability wrong × cost if wrong) and take the top one. Reject &quot;test the idea&quot; and &quot;see if it works&quot; — too broad to route. A question that names a solution (&quot;test whether the mobile app works&quot;) is a solution-in-disguise: reframe to the underlying job first (<code>problem-statement</code>), then return.</p>\n<p><strong>Step 2 — Classify the learning target.</strong> Match the question to one row. This is what the question is really asking about.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Target</th><th>The question is really asking…</th><th>Evidence rung the answer needs</th></tr></thead><tbody><tr><td>A — Legibility</td><td>Is the workflow legible? Where does the real decision sit, and who acts on the output?</td><td>artefact comprehension (0.5)</td></tr><tr><td>B — Pull</td><td>Would they use it if it worked? Is the promise compelling enough to pull action?</td><td>behaviour toward the promise (0.7)</td></tr><tr><td>C — Pay &amp; workflow</td><td>Will they pay? What is the real workflow, including the exceptions that break it?</td><td>money (1.0) + behaviour (0.7)</td></tr><tr><td>D — Automation &amp; cost</td><td>Can an agent actually do the task, and what does one outcome cost to the cent?</td><td>cost, money-grade (1.0) + automation-frontier behaviour (0.7)</td></tr><tr><td>E — Trust &amp; adoption</td><td>Do they trust it? Will they adopt it and change how they work?</td><td>behaviour under real stakes, over time (0.7 →)</td></tr><tr><td>F — Feasibility &amp; scale</td><td>Is it feasible? Does it hold at volume? Real unit cost at scale?</td><td>behaviour of the real system at load (0.7)</td></tr></tbody></table></div>\n<p><strong>Step 3 — Read the honesty contract and pick the cheapest honest probe.</strong> The contract is fixed. The top rung column is why each probe is honest or not: a probe lies about any claim that needs a rung higher than it can produce.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Probe</th><th>Cost</th><th>Honest about</th><th>Lies about</th><th>Top rung it can produce</th></tr></thead><tbody><tr><td>paper / sketch</td><td>~$0, 30 min</td><td>workflow legibility; where the decision sits</td><td>how it feels to use; real demand; trust</td><td>comprehension / verbal (0.5 / 0.3)</td></tr><tr><td>Wizard-of-Oz</td><td>~$200, 1 day</td><td>would-they-use-it-if-it-worked</td><td>feasibility; unit cost; scale</td><td>behaviour toward a faked backend (0.7)</td></tr><tr><td>concierge (founder does it by hand)</td><td>founder time</td><td>willingness to pay; the real workflow incl. exceptions; trust under real stakes</td><td>scale; self-serve UX</td><td>money + real-stakes behaviour (1.0)</td></tr><tr><td>agent-concierge (an agent runs the task)</td><td>~$0.50–5 / task</td><td>automation frontier; cost-per-outcome to the cent</td><td>self-serve UX; trust / adoption</td><td>cost, money-grade (1.0 on cost)</td></tr></tbody></table></div>\n<p>Map target → cheapest honest probe:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Target</th><th>Cheapest honest probe</th><th>Probes that LIE about it — do not use</th></tr></thead><tbody><tr><td>A — Legibility</td><td>paper / sketch</td><td>—</td></tr><tr><td>B — Pull</td><td>Wizard-of-Oz</td><td>paper (no real pull; lies about demand)</td></tr><tr><td>C — Pay &amp; workflow</td><td>concierge</td><td>paper, Wizard-of-Oz (both simulate; neither takes real money or surfaces real exceptions)</td></tr><tr><td>D — Automation &amp; cost</td><td>agent-concierge</td><td>paper, Wizard-of-Oz, concierge (all hide the real per-task cost and the automation limit)</td></tr><tr><td>E — Trust &amp; adoption</td><td>concierge, then field pilot</td><td>paper (lies about trust), Wizard-of-Oz (simulated stakes), agent-concierge (human buffer hides adoption)</td></tr><tr><td>F — Feasibility &amp; scale</td><td>none of the four — coded spike / load test (out of probe scope); use agent-concierge only for per-task cost</td><td>paper, Wizard-of-Oz (WoZ explicitly lies about feasibility, unit cost, and scale)</td></tr></tbody></table></div>\n<p>For target F, say so plainly: no cheap probe is honest about feasibility or scale. Do not fake it with a probe that will lie. Name the smallest real build track instead, or narrow the question to a sub-part a probe <em>can</em> answer honestly (e.g. per-task cost via agent-concierge).</p>\n<p><strong>Step 4 — Kill check.</strong> If the fellow already named a probe, look it up in the &quot;lies about&quot; column for their target. If it lies about the target, KILL it: name exactly what it lies about, name the rung the question needs vs the rung that probe tops out at, and reroute to the cheapest honest probe. This is the kill line — recommending or endorsing a probe that lies about the thing being tested is a fail.</p>\n<p><strong>Step 5 — Pre-register the pass/fail read-out.</strong> Write the threshold before you run, and state which evidence rung a pass moves the claim to. The read-out must land on behaviour or money. &quot;Operators said they trust it&quot; is verbal (0.3) and is not a valid trust read-out; &quot;operators acted on the alert within N minutes, unprompted, on M of the last shifts&quot; is behaviour (0.7) and is. No moving the goalposts after.</p>\n<p><strong>Step 6 — Route to the runbook.</strong> Hand the plan to the matching runbook skill for the how-to. probe-matrix stops at selection + read-out; it does not operate the probe.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A probe exists to move one claim up the ladder — money 1.0, behaviour 0.7, artefact 0.5, verbal 0.3, opinion 0.1 — and its honesty is capped by the top rung it can produce (Step 3). The read-out must be pre-registered on behaviour or money; an opinion or verbal read-out does not count as a passed probe, however warm. The skill's own bar: it may only recommend a probe whose top rung reaches the rung the question needs. <strong>Kill line — recommending a probe that lies about the thing being tested is an auto-fail.</strong> Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. If the honest answer is &quot;no cheap probe reaches this rung&quot; (target F), say that; do not launder a dishonest probe into a false green light.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Trust is not demand.</strong> A fake-door or landing page measures click-demand and lies about trust exactly as a paper sketch does — both top out below the behaviour-under-stakes rung trust needs. When the question is &quot;will they trust / adopt it,&quot; route to concierge or a field pilot, never a paper or landing probe, no matter how cheap.</li><li><strong>Cheapest ≠ honest.</strong> The router picks the cheapest <em>honest</em> probe, not the cheapest probe. If paper is $0 but lies about the target, its real cost is a wrong answer you will act on. Do not let the price column win Step 3.</li><li><strong>Wizard-of-Oz feasibility trap.</strong> A WoZ that &quot;works&quot; tempts the fellow to claim the thing is buildable. It is not evidence of that — the backend was human. WoZ is honest about pull, and lies about feasibility, unit cost, and scale. Keep those claims out of the read-out.</li><li><strong>One question, one probe.</strong> A fellow with three questions wants three probes and a month. Force the single riskiest question (Step 1). Routing a probe against a bundle produces a read-out that answers none of them cleanly.</li><li><strong>Don't over-escalate the mundane.</strong> When the real question is legibility, paper is the correct answer and the whole job. Do not talk the fellow up a rung into a WoZ or concierge for a question a 30-minute sketch answers honestly.</li><li><strong>The obvious pick still owes you a lie.</strong> On a mundane question the probe choice is uncontroversial (legibility → paper), so the &quot;lies about&quot; line feels redundant and gets left thin or blank — and that is exactly where it is dropped most. Even for the obvious probe, still state what it lies about. The honesty contract earns its keep when the choice is easy, not only when it is contested.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — Barrier Intelligence wants to test whether operators trust the gas alert, and proposes a paper mock-up. The skill kills the paper probe (it lies about trust), reroutes to a concierge probe with a behaviour read-out on a live shift, and names what concierge itself will still lie about (scale, self-serve UX).</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Supersedes <code>prototyping-pretotyping</code>. That skill ranks probes on a fidelity ladder (L0 pretotype → L4 MVP) keyed to how much you build, and lists methods by assumption type — but it never says what a method <em>cannot honestly tell you</em>. It will happily point a paper prototype at demand or a landing page at a value prop, and its behaviour-over-opinion guardrail is a reminder, not a refusal. probe-matrix absorbs its useful bones — riskiest-assumption-first (Step 1), set-the-criteria- before-testing (Step 5), behaviour over opinion (throughout) — and beats it with the honesty contract and the kill line: it names what each probe lies about and refuses the dishonest one. On &quot;test whether operators trust the alert,&quot; the old skill routes to a paper or clickable prototype (workflow fidelity) or a fake-door (demand), both of which lie about trust; this skill kills those and routes to concierge/field.</p>\n<p>Composes with: <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (defines the rungs this router matches against; run it to score the signal a probe returns), <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (gates the problem before you spend on any probe), <code>problem-statement</code> (reframe a solution-in-disguise before routing), and the four runbooks (<a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>) that this skill selects and hands off to.</p>"
  }
 ],
 "template": {
  "html": "<h1>Probe Selection + Plan</h1>\n<p><strong>Fellow / venture:</strong> _______________ <strong>Date:</strong> _______________</p>\n<h2>Step 1 — The ONE question</h2>\n<blockquote><p><em>One testable question about one unknown. Not &quot;test the idea.&quot; If you have several, rank by probability-wrong × cost-if-wrong and take the top one.</em></p></blockquote>\n<p><strong>The question:</strong> _______________</p>\n<p><strong>Why this one first (riskiest-assumption check):</strong> _______________</p>\n<p><strong>Is it a solution-in-disguise?</strong> ☐ No, it names an unknown  ☐ Yes → stop, reframe with <code>problem-statement</code>, then return.</p>\n<h2>Step 2 — Learning target</h2>\n<p>Tick the row the question is really asking about.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>☐</th><th>Target</th><th>Asking about…</th><th>Rung the answer needs</th></tr></thead><tbody><tr><td>☐</td><td>A — Legibility</td><td>is the workflow legible; where the decision sits</td><td>comprehension (0.5)</td></tr><tr><td>☐</td><td>B — Pull</td><td>would they use it if it worked</td><td>behaviour toward the promise (0.7)</td></tr><tr><td>☐</td><td>C — Pay &amp; workflow</td><td>will they pay; the real workflow incl. exceptions</td><td>money (1.0) + behaviour (0.7)</td></tr><tr><td>☐</td><td>D — Automation &amp; cost</td><td>can an agent do it; cost per outcome</td><td>cost money-grade (1.0) + frontier (0.7)</td></tr><tr><td>☐</td><td>E — Trust &amp; adoption</td><td>do they trust it; will they adopt / change behaviour</td><td>behaviour under real stakes (0.7 →)</td></tr><tr><td>☐</td><td>F — Feasibility &amp; scale</td><td>is it feasible; does it hold at volume</td><td>real system at load (0.7)</td></tr></tbody></table></div>\n<p><strong>Target:</strong> ____   <strong>Current rung of the claim today:</strong> _______________ <code>[tag]</code></p>\n<h2>Step 3 — Kill check (if a probe was already proposed)</h2>\n<p><strong>Fellow's proposed probe (if any):</strong> _______________</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody><tr><td>Does the proposed probe appear in the &quot;lies about&quot; column for this target?</td><td>☐ Yes → KILL  ☐ No → keep</td></tr><tr><td>What exactly does it lie about here?</td><td>_______________</td></tr><tr><td>Rung it tops out at vs rung the question needs</td><td>____ vs ____</td></tr></tbody></table></div>\n<p><strong>Kill verdict:</strong> _______________</p>\n<h2>Step 4 — Chosen probe (cheapest HONEST probe)</h2>\n<p><strong>Probe:</strong> ☐ paper/sketch  ☐ Wizard-of-Oz  ☐ concierge  ☐ agent-concierge ☐ none of the four (target F — name the build track)</p>\n<p><strong>Why it is honest about THIS question:</strong> _______________ <em>(name the rung it produces vs the rung the question needs)</em></p>\n<p><strong>What it will STILL lie about (mandatory — name it):</strong> _______________</p>\n<p><strong>Cost + timebox:</strong> _______________</p>\n<h2>Step 5 — Pre-registered pass/fail read-out</h2>\n<p>Set before running. Behaviour or money only — a verbal or opinion read-out is not a valid read-out.</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Metric (behaviour / money):</strong></td><td>_______________</td></tr><tr><td><strong>Pass threshold:</strong></td><td>_______________</td></tr><tr><td><strong>Fail threshold:</strong></td><td>_______________</td></tr><tr><td><strong>Sample / timebox:</strong></td><td>_______________</td></tr><tr><td><strong>A pass moves the claim to rung:</strong></td><td>_______________ <code>[tag]</code></td></tr></tbody></table></div>\n<h2>Step 6 — Route to runbook</h2>\n<p><strong>Hand off to:</strong> ☐ <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>  ☐ <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> ☐ <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>  ☐ <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></p>\n<p><strong>Note (if target F):</strong> No cheap probe is honest about feasibility or scale. The smallest real build track is: _______________</p>",
  "path": "skills/probe-matrix/template.md"
 },
 "example": {
  "html": "<h1>Probe Selection + Plan — Barrier Intelligence (worked)</h1>\n<p><strong>Fellow / venture:</strong> Barrier Intelligence (oil &amp; gas safety) <strong>Date:</strong> 2026-07-20</p>\n<blockquote><p>All numbers here are synthetic, domain-plausible test fixtures — not real client data. They show the mechanic, not a finding.</p></blockquote>\n<p><strong>Fellow's ask:</strong> &quot;What's the cheapest way to test whether operators trust the gas alert? I was going to mock up the alert screen on paper and walk three operators through it.&quot;</p>\n<h2>Step 1 — The ONE question</h2>\n<p><strong>The question:</strong> Will control-room operators trust the gas-leak alert enough to act on it during a live shift?</p>\n<p><strong>Why this one first:</strong> <code>[Assumption]</code> If operators do not act on the alert, every downstream claim (accuracy, coverage, pricing) is moot. Probability-wrong is high (alerting tools get ignored) and cost-if-wrong is a shipped product nobody uses. This is the riskiest unknown.</p>\n<p><strong>Is it a solution-in-disguise?</strong> No — it names an unknown (trust/adoption), not a feature to validate.</p>\n<h2>Step 2 — Learning target</h2>\n<p>Target <strong>E — Trust &amp; adoption.</strong> Trust is not comprehension and not demand; it is behaviour under real stakes, over time. Rung the answer needs: behaviour (0.7).</p>\n<p><strong>Current rung of the claim today:</strong> opinion (0.1) — <code>[Assumption]</code> the fellow believes operators will trust it; no operator has yet acted on a real alert.</p>\n<h2>Step 3 — Kill check</h2>\n<p><strong>Proposed probe:</strong> paper mock-up of the alert screen, walk operators through it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody><tr><td>Does paper appear in the &quot;lies about&quot; column for target E?</td><td><strong>Yes → KILL</strong></td></tr><tr><td>What exactly does it lie about here?</td><td>Trust. A paper walkthrough has no stakes: nothing happens if the operator ignores the mock alert, so any &quot;yes, I'd trust this&quot; is a verbal reaction (0.3), not trust behaviour (0.7). Paper tops out at a comprehension read.</td></tr><tr><td>Rung it tops out at vs rung the question needs</td><td>0.5 (comprehension) / 0.3 (verbal) vs 0.7 (behaviour under stakes)</td></tr></tbody></table></div>\n<p><strong>Kill verdict:</strong> The paper probe is killed. It would answer &quot;can an operator read the screen,&quot; which is a real question (target A) but not the one asked. Walking three operators through a mock and hearing &quot;yeah, I'd trust that&quot; would produce a false green light on trust.</p>\n<h2>Step 4 — Chosen probe</h2>\n<p><strong>Probe:</strong> concierge (founder stands behind the alert on a live shift), scaling to a field pilot if it holds.</p>\n<p><strong>Why it is honest about THIS question:</strong> In a concierge run the founder pushes a real gas-indicator alert to the operator during an actual 12-hour shift and the operator either acts on it or does not — real stakes, observed behaviour (0.7), which is the rung trust needs. Nothing else in the four probes reaches it: paper and Wizard-of-Oz both simulate the stakes away, and agent-concierge puts a human buffer between the alert and the operator, hiding adoption.</p>\n<p><strong>What it will STILL lie about (mandatory):</strong> scale and self-serve UX. With the founder hand-delivering alerts to one operator, this says nothing about whether the system works unattended across a fleet, or whether operators would trust an alert with no human behind it. Those are later, separate questions.</p>\n<p><strong>Cost + timebox:</strong> founder time — sit shifts alongside one operator for 5 shifts.</p>\n<h2>Step 5 — Pre-registered pass/fail read-out</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Metric (behaviour):</strong></td><td>Operator acts on the alert (acknowledges + checks the flagged permit/sensor) within 10 minutes, unprompted by the founder</td></tr><tr><td><strong>Pass threshold:</strong></td><td>Acts on ≥ 8 of the last 10 real alerts across the 5 shifts</td></tr><tr><td><strong>Fail threshold:</strong></td><td>Acts on ≤ 4 of 10, or only acts when the founder points at the screen</td></tr><tr><td><strong>Sample / timebox:</strong></td><td>1 operator, 5 live shifts, ~10 real alerts</td></tr><tr><td><strong>A pass moves the claim to rung:</strong></td><td>behaviour observed (0.7) <code>[Fact]</code> — from opinion (0.1) today</td></tr></tbody></table></div>\n<p>Set before the first shift. If the operator acts only when nudged, that is a fail even if they say they trust it — the words are 0.3, the goalpost is 0.7.</p>\n<h2>Step 6 — Route to runbook</h2>\n<p><strong>Hand off to:</strong> <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> for the how-to (how the founder shadows the shift, delivers alerts without leading the operator, and logs the act/ignore behaviour without contaminating it).</p>\n<p><strong>One honest caveat carried forward:</strong> a concierge pass proves operators trust <em>an alert a founder stands behind</em>. Trust in an unattended system is target E again, at the field-pilot stage — do not let this read-out claim it.</p>",
  "path": "skills/probe-matrix/examples/sample.md"
 },
 "rubric": {
  "skill": "probe-matrix",
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
    "What's the cheapest way to test whether operators trust the alert?",
    "Which experiment should I run to learn if they'll pay?",
    "Which probe fits this question?",
    "How do I validate this cheaply before building?",
    "What's the cheapest way to learn whether plant managers would use the copilot?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this problem good enough to build?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Walk me through actually setting up the concierge probe — tooling and scripts.",
     "sibling": "concierge-probe",
     "local": true
    },
    {
     "phrase": "What evidence rung does 'they said they'd buy it' sit on?",
     "sibling": "evidence-ladder",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST-fire match explicit triggers (&quot;cheapest way to learn X&quot;, &quot;which experiment&quot;, &quot;which probe&quot;, &quot;how do I validate this&quot;). All 3 MUST-NOT-fire are explicitly excluded in the description's NOT-clauses (problem-quality-scorecard / runbooks / evidence-ladder) and match no fire trigger.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>per-case totals below; every case maps target→honest probe, names what the probe still lies about, pre-registers a behaviour/money read-out; no fabrication.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 asks the ONE question + offers A–F menu, invents nothing (Step 1 rejects too-broad); 02 names the solution-in-disguise trap, refuses to route, reframes to the job, cites problem-statement; 03 declines the how-to, names wizard-of-oz-probe, hands off. No fabrication / flattery / scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "PASS (new wins all 3)",
    "status": "pass",
    "evidenceHtml": "<p>totals below — new beats old on TOTAL and on proprietary_edge + challenge on every input.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01 output kills the proposed probe, ties honesty to a fixed evidence-rung ceiling (0.3/0.5/0.7), and names what concierge still lies about — a generic PM prompt could not produce the rung ladder or the refusal. Guidance is properly tabularised (honesty contract, target map, read-out all tables).</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>requires 5+ real fellow uses — not executable here.</p>"
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
     "label": "G01 trust (KILL paper→concierge) 5",
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
     "label": "G02 pull (Wizard-of-Oz) 5",
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
     "label": "G03 pay & workflow (concierge) 5",
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
     "label": "G04 automation & cost (agent-concierge) 5",
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
     "label": "G05 legibility (paper — mundane) 5",
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
    "run 1",
    "all",
    "GRADUATE-READY",
    "see judge run below"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Fire-then-clarify on vague input is by design but worth flagging.</strong> The trigger &quot;how do I test this cheaply&quot; fires on genuinely under-specified inputs (Adversarial 01). The skill self-corrects via Step 1 (reject too-broad, ask the ONE question), which is correct — but the description could note that a fired-but-unroutable input must exit to the ONE-question ask, not a probe. Low severity; behaviour is already correct.</li><li><strong>Target F routes the fellow out of the skill.</strong> When the ONE question is genuinely feasibility/scale, none of the four probes is honest and the skill correctly says so and names a build track. This is honest, not a defect, but means an F-only fellow gets no in-skill instrument. Consider a one-line pointer to where the build-track decision lives.</li><li><strong>Mundane case (G05) is the thinnest on <code>challenge</code>.</strong> With no weak input to kill, the skill's value is restraint (don't over-escalate) — the existing &quot;Don't over-escalate the mundane&quot; gotcha covers it, but a rigid judge can dock <code>challenge</code> by a point. Already handled; noted for awareness.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added Gotcha that the mundane/obvious probe pick still owes an explicit \"what it lies about\" line (thinnest-challenge guard).",
    "html": ""
   }
  ],
  "killLine": "<p>Auto-fail this skill if the output:</p>\n<ul><li>recommends, endorses, or fails to kill a probe that lies about the stated learning target (e.g. paper/landing for trust, Wizard-of-Oz for feasibility/unit cost, agent-concierge for trust/adoption), OR</li><li>pre-registers a read-out that lands on verbal or opinion evidence for a target that needs behaviour or money (e.g. &quot;operators said they trust it&quot; as a trust read-out), OR</li><li>launders target F (feasibility/scale) into a cheap probe instead of stating that no cheap probe is honest about it.</li></ul>",
  "html": "<h1>Eval log — probe-matrix</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What's the cheapest way to test whether operators trust the alert?&quot;</li><li>&quot;Which experiment should I run to learn if they'll pay?&quot;</li><li>&quot;Which probe fits this question?&quot;</li><li>&quot;How do I validate this cheaply before building?&quot;</li><li>&quot;What's the cheapest way to learn whether plant managers would use the copilot?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Is this problem good enough to build?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (the build/no-build gate on the problem, not a probe choice)</li><li>&quot;Walk me through actually setting up the concierge probe — tooling and scripts.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> (the runbook; probe-matrix selects, it does not operate)</li><li>&quot;What evidence rung does 'they said they'd buy it' sit on?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (scores a signal already in hand)</li></ol>\n<h2>Skill-specific kill line (judge enforces)</h2>\n<p>Auto-fail this skill if the output:</p>\n<ul><li>recommends, endorses, or fails to kill a probe that lies about the stated learning target (e.g. paper/landing for trust, Wizard-of-Oz for feasibility/unit cost, agent-concierge for trust/adoption), OR</li><li>pre-registers a read-out that lands on verbal or opinion evidence for a target that needs behaviour or money (e.g. &quot;operators said they trust it&quot; as a trust read-out), OR</li><li>launders target F (feasibility/scale) into a cheap probe instead of stating that no cheap probe is honest about it.</li></ul>\n<h2>Head-to-head vs prototyping-pretotyping</h2>\n<p>This skill is scored against <code>prototyping-pretotyping</code> on the same inputs. It must win on <strong>proprietary_edge</strong> and <strong>challenge</strong>.</p>\n<p>Why it wins:</p>\n<ul><li><strong>Honesty contract, not a fidelity ladder.</strong> The old skill ranks probes L0–L4 by how much you build and lists methods by assumption type. It never states what a method <em>cannot honestly tell you</em>. probe-matrix carries the fixed contract — what each probe is honest about and what it lies about — tied to the top evidence rung each probe can produce.</li><li><strong>It refuses.</strong> The old skill's behaviour-over-opinion line is a guardrail (a reminder). probe-matrix has a kill line: on a target a probe lies about, it kills that probe and names the honest one. The old skill will happily route a paper prototype at demand (its Demand-assumption row lists fake-door/paper) or a landing page at a value prop, with no warning that those lie about trust.</li><li><strong>Concrete divergence — the trust case (Golden 01).</strong> On &quot;test whether operators trust the alert,&quot; prototyping-pretotyping routes to a paper/clickable prototype (workflow fidelity) or a fake-door (demand), both of which lie about trust. probe-matrix kills those, reroutes to concierge/field, and pre-registers a behaviour read-out. Expect proprietary_edge and challenge to come back markedly higher for probe-matrix on all trust/feasibility/cost inputs, where the honesty contract does work the fidelity ladder structurally cannot.</li><li><strong>Absorbed its bones.</strong> Riskiest-assumption-first (Step 1), set-criteria-before- testing (Step 5), behaviour over opinion (throughout) are kept and sharpened, then beaten with the contract + kill line.</li></ul>\n<p>Expected margin: proprietary_edge and challenge both higher for probe-matrix, widest on Golden 01 (trust) and Golden 04 (cost), where a fidelity-only skill has no way to warn the probe lies about the target.</p>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<p>Judge did not author this skill. Gate 4 REQUIRED (supersedes prototyping-pretotyping).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire match explicit triggers (&quot;cheapest way to learn X&quot;, &quot;which experiment&quot;, &quot;which probe&quot;, &quot;how do I validate this&quot;). All 3 MUST-NOT-fire are explicitly excluded in the description's NOT-clauses (problem-quality-scorecard / runbooks / evidence-ladder) and match no fire trigger.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case totals below; every case maps target→honest probe, names what the probe still lies about, pre-registers a behaviour/money read-out; no fabrication.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 asks the ONE question + offers A–F menu, invents nothing (Step 1 rejects too-broad); 02 names the solution-in-disguise trap, refuses to route, reframes to the job, cites problem-statement; 03 declines the how-to, names wizard-of-oz-probe, hands off. No fabrication / flattery / scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>PASS (new wins all 3)</td><td>totals below — new beats old on TOTAL and on proprietary_edge + challenge on every input.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output kills the proposed probe, ties honesty to a fixed evidence-rung ceiling (0.3/0.5/0.7), and names what concierge still lies about — a generic PM prompt could not produce the rung ladder or the refusal. Guidance is properly tabularised (honesty contract, target map, read-out all tables).</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses — not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21, no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 trust (KILL paper→concierge)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G02 pull (Wizard-of-Oz)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G03 pay &amp; workflow (concierge)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G04 automation &amp; cost (agent-concierge)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G05 legibility (paper — mundane)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr></tbody></table></div>\n<p>No auto_fail triggered on any case (no invented findings; pre-registered thresholds are criteria, not fabrications; no flattery; no scope-poach; not boilerplate).</p>\n<h3>Special check — honesty contract + REFUSAL</h3>\n<p>PASS. On G01 the fellow proposes a paper probe for &quot;do operators trust the alert.&quot; Step 4 kills it (paper tops out at comprehension 0.5 / verbal 0.3; trust needs behaviour-under-stakes 0.7), names exactly what it lies about, and reroutes to concierge/field with a behaviour read-out that explicitly rejects &quot;operators said they trust it&quot; (0.3). The kill line (&quot;recommends a probe that lies about the thing being tested&quot;) is NOT triggered — the skill does the opposite. No golden endorses a lying probe.</p>\n<h3>Gate 4 — head-to-head vs prototyping-pretotyping (scored on probe-matrix's rubric)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Input</th><th>probe-matrix total</th><th>old total</th><th>proprietary_edge (new vs old)</th><th>challenge (new vs old)</th></tr></thead><tbody><tr><td>G01 trust</td><td>25</td><td>~10</td><td>5 vs 1</td><td>5 vs 2</td></tr><tr><td>G03 pay &amp; workflow</td><td>25</td><td>~10</td><td>5 vs 1</td><td>5 vs 2</td></tr><tr><td>G04 automation &amp; cost</td><td>25</td><td>~10</td><td>5 vs 1</td><td>5 vs 2</td></tr></tbody></table></div>\n<p>Why old scores low: the fidelity ladder routes by how-much-you-build and has no honesty contract or refusal. On trust it routes paper/clickable (Workflow row) or a fake-door (Demand row) — both lie about trust, no warning. On pay it routes a landing-page price test (measures click-intent, not real money; misses the reconciliation exceptions). On cost it offers &quot;manual concierge first&quot; — which tells you nothing about <em>agent</em> cost (the exact gotcha probe-matrix names). Its &quot;observe behavior not opinions&quot; guardrail is a reminder, never a refusal. New wins on TOTAL and on both required dimensions on all three, widest on trust and cost as predicted.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Fire-then-clarify on vague input is by design but worth flagging.</strong> The trigger &quot;how do I test this cheaply&quot; fires on genuinely under-specified inputs (Adversarial 01). The skill self-corrects via Step 1 (reject too-broad, ask the ONE question), which is correct — but the description could note that a fired-but-unroutable input must exit to the ONE-question ask, not a probe. Low severity; behaviour is already correct.</li><li><strong>Target F routes the fellow out of the skill.</strong> When the ONE question is genuinely feasibility/scale, none of the four probes is honest and the skill correctly says so and names a build track. This is honest, not a defect, but means an F-only fellow gets no in-skill instrument. Consider a one-line pointer to where the build-track decision lives.</li><li><strong>Mundane case (G05) is the thinnest on <code>challenge</code>.</strong> With no weak input to kill, the skill's value is restraint (don't over-escalate) — the existing &quot;Don't over-escalate the mundane&quot; gotcha covers it, but a rigid judge can dock <code>challenge</code> by a point. Already handled; noted for awareness.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added Gotcha that the mundane/obvious probe pick still owes an explicit &quot;what it lies about&quot; line (thinnest-challenge guard).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (trust) — expected KILL paper → route concierge",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;What's the cheapest way to test whether operators trust the gas alert? I was going to mock the alert screen up on paper and walk three operators through it.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Extracts the ONE question: will operators act on / trust the alert under real conditions. Classifies it as target E (trust &amp; adoption), rung needed = behaviour (0.7).</li><li>Kill check fires: the proposed paper probe appears in the &quot;lies about&quot; column for trust. Output KILLS the paper probe and names what it lies about — a paper walkthrough has no stakes, so it produces at most a verbal reaction (0.3), not trust behaviour (0.7).</li><li>Reroutes to concierge (founder stands behind a real alert on a live shift), scaling to a field pilot. Not paper, not Wizard-of-Oz (both simulate the stakes away).</li><li>Names what concierge itself will still lie about: scale and self-serve UX.</li><li>Pre-registers a behaviour read-out set before running: operator acts on the alert unprompted on N of the last M real alerts. Explicitly rejects &quot;operators said they trust it&quot; as a verbal (0.3) read-out.</li><li>Routes to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> for the how-to.</li><li>No invented operator counts, costs, or shift data beyond the input. Claims tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/probe-matrix/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix (pull) — expected Wizard-of-Oz",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Cheapest way to learn whether plant managers would actually use an AI copilot that flags line-stoppage risk before it happens? We haven't built the model yet.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>ONE question: would plant managers use the flag if it worked. Target B (pull), rung needed = behaviour toward the promise (0.7).</li><li>Cheapest honest probe = Wizard-of-Oz: a copilot UI with human analysts behind it producing the line-stoppage flags (~$200, ~1 day). Honest about would-they-use-it- if-it-worked because it produces real usage behaviour toward the promise.</li><li>Rejects paper for this target: paper lies about pull/demand (no real interaction), tops out below the behaviour rung.</li><li>Names what Wizard-of-Oz will still lie about: feasibility, unit cost, scale — the backend was human, so a working WoZ is not evidence the model is buildable or affordable.</li><li>Pre-registered behaviour read-out: managers open the flag and take the recommended action vs ignore it, over N managers / one week, with a threshold set before running.</li><li>Routes to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</li><li>No fabricated manager counts or downtime figures beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/probe-matrix/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs (pay & workflow) — expected concierge",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Which experiment tells me whether small importers will pay to have delivery invoices reconciled against their POs, and what the workflow actually looks like? That's the first thing Durian wants to automate.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>ONE question: will importers pay, and what is the real reconciliation workflow including the exceptions. Target C (pay &amp; workflow), rung needed = money (1.0) + behaviour (0.7).</li><li>Cheapest honest probe = concierge: the founder reconciles invoices against POs by hand for a handful of importers and charges for it. Honest about willingness to pay (real money changes hands) and the real workflow including the exceptions that surface only when you do it by hand.</li><li>Rejects paper and Wizard-of-Oz for this target: both simulate; neither takes real money or surfaces real exceptions.</li><li>Names what concierge will still lie about: scale and self-serve UX — the founder is the automation, so this says nothing about running it unattended.</li><li>Pre-registered read-out on money + behaviour: e.g. ≥ 3 of 5 importers pay the invoice, ≥ 2 come back for a second batch; plus the list of exceptions found. Threshold set before running.</li><li>Routes to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>.</li><li>No invented importer counts, prices, or exception types beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/probe-matrix/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Azraq (automation & cost) — expected agent-concierge",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Can an agent draft the data-centre incident risk report from raw uptime and incident logs, and what does one report cost me to produce? I need to know before I price the product.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>ONE question: can an agent produce an acceptable risk report from the logs, and what does one outcome cost. Target D (automation &amp; cost), rung needed = cost money-grade (1.0) + automation-frontier behaviour (0.7).</li><li>Cheapest honest probe = agent-concierge: an agent runs the report-drafting task on real logs, priced per task (~$0.50–5 / report). Honest about the automation frontier (what fraction it can do unaided) and cost-per-outcome to the cent.</li><li>Rejects paper, Wizard-of-Oz, and concierge for this target: all three hide the real per-task cost and the automation limit (a human doing it by hand tells you nothing about agent cost).</li><li>Names what agent-concierge will still lie about: self-serve UX and trust / adoption — a human still reviews and stands behind each report.</li><li>Pre-registered read-out on cost + frontier: mean cost per acceptable report &lt; $X, and % of reports needing human rescue &lt; Y, over N reports. Threshold set before running.</li><li>Routes to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>.</li><li>No invented per-report cost or rescue rate beyond the input.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/probe-matrix/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Barrier Intelligence (legibility) — the mundane case, expected paper",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I've sketched three layouts of the permit-conflict screen. Which experiment tells me if the layout makes the right next action obvious to an operator?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>ONE question: is the workflow legible — can an operator, cold, see what to do next from the screen. Target A (legibility), rung needed = comprehension (0.5).</li><li>Cheapest honest probe = paper / sketch (~$0, 30 min). This is the correct answer and the whole job — do NOT over-escalate to a Wizard-of-Oz or concierge for a question a sketch answers honestly.</li><li>Honest about workflow legibility and where the decision sits. Names what paper will still lie about: how it feels to use, and real demand — a legible screen is not a wanted one.</li><li>Pre-registered comprehension read-out: an operator, shown the sketch cold, states the correct next action in &lt; 30 seconds on 4 of 5 trials. Threshold set before running.</li><li>Routes to <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>.</li><li>Passes the mundane bar: correct, calm, no manufactured drama, no invented layout details or operator counts beyond the input. A good output resists the urge to make a simple question sound risky.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/probe-matrix/tests/golden/05.md"
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
     "html": "<p>&quot;How do I test this cheaply?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not route a probe. There is no question to match yet.</li><li>Ask the ONE question that unblocks routing: what is the single thing you most need to learn — and is it about the workflow (legibility), pull, willingness to pay, automation cost, or trust/adoption? Offer the five learning targets as the menu.</li><li>Optionally note the smallest honest next step: name the riskiest unknown first (probability wrong × cost if wrong), because the probe falls out of the target once the question is stated.</li><li>Invent no scenario, domain, metric, or probe. Do not guess what &quot;this&quot; is.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Picks a probe (any of the four) without a stated learning target.</li><li>Fabricates a venture, question, or number to fill the gap.</li><li>Defaults to &quot;just build an MVP&quot; or &quot;run a landing page test.&quot;</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/probe-matrix/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Which probe validates that we need a mobile app for the gas alerts?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Name the trap: &quot;we need a mobile app&quot; is a pre-chosen solution, not a learning target. Any probe aimed at it would test the app's appeal, not the underlying unknown — the read-out would flatter the solution.</li><li>Reframe to the job: what decision are operators making badly when they are away from the control room, how often does that happen, and what does a missed alert cost then? The real unknown is likely target E (do operators, off-desk, act on an alert) or a demand question — not &quot;is a mobile app good.&quot;</li><li>Refuse to route a probe until the question names an unknown, not a solution. Offer to route once it does.</li><li>Point to <code>problem-statement</code> (or <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a>) for the reframe.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepts &quot;we need a mobile app&quot; and routes a probe to validate the app.</li><li>Invents the frequency or cost of off-desk missed alerts instead of asking.</li><li>Produces a probe plan that would return a green light on the mobile app itself.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/probe-matrix/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a runbook)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, Wizard-of-Oz it is. Now walk me through actually running it — the tooling, the human ops behind the UI, the script the analysts follow, how many sessions.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline the how-to. probe-matrix selects the probe and pre-registers the read-out; it does not operate the probe.</li><li>Name the right skill: <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> (the runbook) owns the tooling, human ops, session count, and script.</li><li>May confirm or sanity-check the selection in one line (WoZ is honest about pull; it will still lie about feasibility, unit cost, scale) and hand off — but must not produce the operational runbook itself.</li><li>Do not poach the runbook's content to look helpful.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces the Wizard-of-Oz operating instructions (tooling, ops, scripts) itself.</li><li>Fails to name <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> as the correct skill.</li><li>Silently re-runs selection instead of recognising the request is downstream.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/probe-matrix/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/probe-matrix/SKILL.md",
  "template": "skills/probe-matrix/template.md",
  "example": "skills/probe-matrix/examples/sample.md",
  "rubric": "skills/probe-matrix/tests/rubric.json",
  "results": "skills/probe-matrix/tests/RESULTS.md"
 }
});
