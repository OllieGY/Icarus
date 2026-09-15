window.ICARUS_SKILL("concierge-probe", {
 "name": "concierge-probe",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>You deliver the outcome by hand — no product, no automation — to one paying customer, and log what really happens. It forces two facts a demo cannot give you: whether the customer will actually pay, and what the real workflow is once the exceptions show up. Output is a concierge log plus one willingness-to-pay (WTP) score on the evidence ladder. It compresses the &quot;should we build this&quot; decision into &quot;did someone pay for the hand-made version, and what broke.&quot;</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic concierge MVP asks &quot;can we deliver value manually?&quot; and stops at a warm quote. This runbook makes the price the experiment: you set the number and the payment mechanism <em>before</em> you deliver, so the result lands on the evidence ladder as money moved (1.0) or it does not. And it treats the exceptions as the deliverable — the permit that was missing, the night-shift gap, the customer who wanted it in a different format — because those are the parts that will break the automation you were about to write. The probe is honest about WTP and the real workflow. It lies about scale and self-serve UX, and it says so in every read-out.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you know the outcome a customer wants and you can produce it by hand for one of them, and you need to learn whether they pay and what the workflow really is.</p>\n<p>Do not use it when:</p>\n<ul><li>You have not decided which probe to run — that is <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (the router).</li><li>You want an agent, not yourself, to run the task and price it — that is <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>.</li><li>You want to test whether people would use a slick interface if it worked, without doing the work by hand — that is <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> (it fakes the interface; it lies about unit cost and WTP).</li><li>You are still scoring whether the problem is worth solving at all — that is a problem-scoring skill, not a probe.</li></ul>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Follow the runbook. Fill <code>template.md</code> as you go.</p>\n<p><strong>Step 1 — Scope to one.</strong> One customer, one outcome, one definition of done.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Customer (named, real)</td><td></td></tr><tr><td>Outcome they get</td><td></td></tr><tr><td>&quot;Done&quot; they will accept</td><td></td></tr><tr><td>Price + mechanism, set now</td><td></td></tr></tbody></table></div>\n<p>If you cannot name the customer or the price, stop. You are not ready to probe.</p>\n<p><strong>Step 2 — Set the price before you deliver.</strong> Decide the number and how money moves (invoice, Stripe link, PO) <em>now</em>. You cannot reach 1.0 on the ladder unless money actually clears. Charging is the test; asking &quot;would you pay?&quot; is not.</p>\n<p><strong>Step 3 — Deliver by hand, log everything.</strong> In the concierge log, record each step: minutes spent, who touched it, and every exception — anything that was not in the happy path. The exceptions column is the point of the run. Rule: run until you hit <strong>at least 3 distinct exceptions</strong> or the customer accepts/declines, whichever comes first. One clean happy-path delivery is a demo, not a concierge run.</p>\n<p><strong>Step 4 — Score WTP on the evidence ladder.</strong> Score the strongest signal that actually happened, not the one you hoped for.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal you actually got</th><th>Rung</th><th>Score</th></tr></thead><tbody><tr><td>Invoice paid / charge cleared</td><td>money moved</td><td>1.0</td></tr><tr><td>Customer used the delivered outcome in their real work</td><td>behaviour</td><td>0.7</td></tr><tr><td>Signed LOI / PO / written commitment</td><td>artefact</td><td>0.5</td></tr><tr><td>&quot;Yes, I'd pay for that&quot;</td><td>verbal</td><td>0.3</td></tr><tr><td>&quot;Sounds useful&quot;</td><td>opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>A verbal yes is 0.3 even when enthusiastic. Money is 1.0 only when it clears, not when it is promised. Scoring a verbal yes as paid WTP is the kill line.</p>\n<p><strong>Step 5 — Read out against the honesty contract.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Honest about</th><th>Must NOT claim</th></tr></thead><tbody><tr><td>WTP, at the rung you actually reached</td><td>Scale — n=1 by hand says nothing about 100</td></tr><tr><td>The real workflow, including the exceptions</td><td>Self-serve UX — you were the interface</td></tr></tbody></table></div>\n<p>Decision bands: <strong>≥0.7</strong> (paid or used) = real pull, move to the next probe question (cost/feasibility → <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>; scale still unproven). <strong>0.3–0.5</strong> = soft; do not build; re-run with money on the line. <strong>≤0.1</strong> = kill or reframe.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Done means: one named customer, one delivered outcome, a completed concierge log with the exceptions column populated, and a single WTP score with the signal that earned it. Behaviour and money outrank opinion — a paid invoice <span class=\"tag tag-fact\">Fact</span> beats a warm &quot;we'd love this&quot; [Opinion, 0.1] every time. Tag every claim in the read-out <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. The workflow you logged is <code>[Fact]</code>; that it generalises to other customers is <code>[Hypothesis]</code>, and this probe does not test it.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Hiding behind a fake UI.</strong> If you do the work by hand but <em>hide</em> the human — the customer thinks they are using a finished product — that is a Wizard-of-Oz probe, not concierge. Concierge is overt: the customer knows the founder is delivering it by hand. The moment you fake the interface you are testing would-they-use-it, not will-they-pay; route to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</li><li><strong>Smuggling in a pre-chosen solution.</strong> &quot;Let's run a concierge test of the dashboard&quot; tests a feature you already decided to build, not whether the customer's outcome is worth paying for. Reframe to the outcome being delivered — what the customer actually wants done — and hand-deliver <em>that</em>. If the probe is scoped to your feature rather than their outcome, you are validating the build, not the demand.</li><li><strong>Free pilots.</strong> If you waive the fee &quot;to get started,&quot; you have converted a 1.0 test into a 0.1 opinion. No price, no WTP signal.</li><li><strong>You solve the exceptions silently.</strong> The founder patches the missing permit in their head and never logs it. Then automation ships without that path and dies. Log the patch even when it took two minutes.</li><li><strong>Concluding scale.</strong> &quot;The operator loved it, so 100 operators will pay&quot; is the kill line. One hand-made delivery cannot support a scale or self-serve claim. Say what it can support and stop.</li><li><strong>Counting your own enthusiasm as demand.</strong> You enjoyed delivering it; that is not the customer paying. Only the ladder score counts.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> — Barrier Intelligence hand-delivers a morning gas-safety alert to one rig operator, charges per site, and scores WTP on the ladder while logging the permit and night-shift exceptions that would have broken the automated version.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><code>../probe-matrix</code> — the router that sends you here; run it first if you are unsure this is the right probe.</li><li><code>../agent-concierge-probe</code> — the next probe once WTP is real: hand the workflow you logged to an agent and price it.</li><li><code>../wizard-of-oz-probe</code> — use instead when the question is &quot;would they use it if it worked,&quot; not &quot;will they pay.&quot;</li><li><code>../../02-customer-discovery/evidence-ladder</code> — owns the rungs this skill scores against.</li><li>Supersedes nothing. It absorbs the concierge idea from generic pretotyping and beats it by making the price the experiment and the exceptions the deliverable.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Concierge Probe — log + WTP score</h1>\n<p>Fill this during the run, not after. The exceptions column is the deliverable.</p>\n<h2>0. Scope (set before you start)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Customer (named, real)</td><td></td></tr><tr><td>Outcome they get</td><td></td></tr><tr><td>&quot;Done&quot; they will accept</td><td></td></tr><tr><td>Price</td><td></td></tr><tr><td>Payment mechanism (invoice / Stripe / PO)</td><td></td></tr><tr><td>Date price was set (must be before delivery)</td><td></td></tr></tbody></table></div>\n<h2>1. Concierge log</h2>\n<p>One row per step. Log exceptions even when you fixed them in your head.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step (by hand)</th><th>Minutes</th><th>Who touched it</th><th>Exception (anything off the happy path)</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Total founder minutes: __ Distinct exceptions logged: __  (run until ≥3, or the customer decides)</p>\n<h2>2. WTP score</h2>\n<p>Score the strongest signal that actually happened.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal you actually got</th><th>Rung</th><th>Score</th><th>Got it?</th></tr></thead><tbody><tr><td>Invoice paid / charge cleared</td><td>money moved</td><td>1.0</td><td></td></tr><tr><td>Customer used the delivered outcome in real work</td><td>behaviour</td><td>0.7</td><td></td></tr><tr><td>Signed LOI / PO / written commitment</td><td>artefact</td><td>0.5</td><td></td></tr><tr><td>&quot;Yes, I'd pay for that&quot;</td><td>verbal</td><td>0.3</td><td></td></tr><tr><td>&quot;Sounds useful&quot;</td><td>opinion</td><td>0.1</td><td></td></tr></tbody></table></div>\n<p>WTP score: __  (single number = the highest rung that actually happened) Evidence for that rung: __  (invoice #, the thing they did, the words they said)</p>\n<h2>3. Read-out (honesty contract)</h2>\n<p><strong>Honest about — state these:</strong></p>\n<ul><li>WTP: <span class=\"tag tag-fact\">Fact</span> we reached rung __ because __</li><li>Real workflow: <span class=\"tag tag-fact\">Fact</span> the exceptions that would break automation are __</li></ul>\n<p><strong>Must NOT claim — leave these out or tag as untested:</strong></p>\n<ul><li>Scale: [Hypothesis, not tested] n=1 by hand says nothing about many.</li><li>Self-serve UX: [Hypothesis, not tested] the founder was the interface.</li></ul>\n<h2>4. Decision</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>WTP score</th><th>Band</th><th>Next move</th></tr></thead><tbody><tr><td>≥0.7</td><td>real pull</td><td>proceed to cost/feasibility probe (<a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>); scale still unproven</td></tr><tr><td>0.3–0.5</td><td>soft</td><td>do not build; re-run with money on the line</td></tr><tr><td>≤0.1</td><td>none</td><td>kill or reframe</td></tr></tbody></table></div>\n<p>Decision: __ What would move the WTP score up one rung: __</p>",
  "path": "skills/concierge-probe/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety). Numbers are illustrative test fixtures, not client data.</p>\n<p>The pitch is an automated gas-safety alert from rig field logs. Before writing any of it, the fellow delivers the alert by hand to one operator for two weeks and charges for it.</p>\n<h2>0. Scope (set before delivery)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Customer (named, real)</td><td>Northfield Platform B, shift-safety lead</td></tr><tr><td>Outcome they get</td><td>One 06:00 gas-safety alert per day, ranked by rig zone</td></tr><tr><td>&quot;Done&quot; they will accept</td><td>Alert in their hands before the 07:00 handover, zero missed high-risk readings</td></tr><tr><td>Price</td><td>£400 / platform / 2-week trial, invoiced</td></tr><tr><td>Payment mechanism</td><td>Invoice, net-14</td></tr><tr><td>Date price set</td><td>Day 0, before first delivery</td></tr></tbody></table></div>\n<h2>1. Concierge log (abridged — 10 delivery days)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step (by hand)</th><th>Minutes</th><th>Who</th><th>Exception</th></tr></thead><tbody><tr><td>1</td><td>Pull overnight field logs from shared drive</td><td>15</td><td>founder</td><td>Day 3: logs not posted until 06:40 — night-shift lead forgot to upload</td></tr><tr><td>2</td><td>Read gas readings, flag zones over threshold</td><td>25</td><td>founder</td><td>Day 5: sensor 4B read null, not zero — had to call the rig to confirm safe</td></tr><tr><td>3</td><td>Cross-check against active work permits</td><td>20</td><td>founder</td><td>Day 6: hot-work permit not in the system; only on paper at the rig</td></tr><tr><td>4</td><td>Write + send ranked alert</td><td>10</td><td>founder</td><td>Day 8: operator wanted it as SMS, not email, for the walk to handover</td></tr></tbody></table></div>\n<p>Total founder minutes: ~70/day. Distinct exceptions logged: 4.</p>\n<h2>2. WTP score</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal actually got</th><th>Rung</th><th>Score</th><th>Got it?</th></tr></thead><tbody><tr><td>Invoice paid / charge cleared</td><td>money moved</td><td>1.0</td><td><strong>yes — invoice #0007 paid net-11</strong></td></tr><tr><td>Used the outcome in real work</td><td>behaviour</td><td>0.7</td><td>yes (alert read at every handover)</td></tr><tr><td>Signed LOI / PO</td><td>artefact</td><td>0.5</td><td>—</td></tr><tr><td>&quot;Yes, I'd pay&quot;</td><td>verbal</td><td>0.3</td><td>—</td></tr><tr><td>&quot;Sounds useful&quot;</td><td>opinion</td><td>0.1</td><td>—</td></tr></tbody></table></div>\n<p>WTP score: <strong>1.0</strong> Evidence: invoice #0007 for £400 cleared on day 11; renewed for a second platform verbally (not yet paid — that renewal is 0.3, not counted here).</p>\n<h2>3. Read-out (honesty contract)</h2>\n<p>Honest about:</p>\n<ul><li>WTP: <span class=\"tag tag-fact\">Fact</span> rung 1.0 — one operator paid £400 for the hand-made alert.</li><li>Real workflow: <span class=\"tag tag-fact\">Fact</span> the automation must handle null-vs-zero sensor reads, paper-only permits, late log uploads, and an SMS delivery path. None were in the original happy-path design.</li></ul>\n<p>Must NOT claim:</p>\n<ul><li>Scale: [Hypothesis, not tested] one platform paying says nothing about the other 40.</li><li>Self-serve UX: [Hypothesis, not tested] the founder read the logs and made every judgement call.</li></ul>\n<h2>4. Decision</h2>\n<p>Band: ≥0.7 → real pull. Next move: hand this exact workflow (including the four exceptions) to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> to see which steps an agent can do and what each alert costs. Scale and trust remain unproven and are out of scope for this probe.</p>\n<p>What would move nothing higher: WTP already at the top rung. The open question is now cost-per-alert, not demand.</p>",
  "path": "skills/concierge-probe/examples/sample.md"
 },
 "rubric": {
  "skill": "concierge-probe",
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
    "Let's do it by hand first before we build the reporting tool.",
    "Run a concierge test on Barrier Intelligence's morning alert.",
    "Concierge MVP for the Azraq quarterly risk report.",
    "I'll deliver it manually to one operator and charge them £400.",
    "Give me the founder-delivered version of the Durian digest before we automate."
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Let an agent run the task end to end and tell me the cost per outcome.",
     "sibling": "agent-concierge-probe",
     "local": true
    },
    {
     "phrase": "Fake the interface and I'll play the backend by hand to see if they'd use it.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire hit literal trigger phrases (&quot;do it by hand first&quot;, &quot;concierge test&quot;, &quot;concierge MVP&quot;, &quot;deliver it manually&quot;, &quot;founder-delivered … before we automate&quot;). All 3 must-not correctly route: #1→probe-matrix, #2→agent-concierge-probe, #3→wizard-of-oz. Near-collision: #3 &quot;play the backend by hand&quot; shares the &quot;by hand&quot; token with a positive trigger; the description's explicit &quot;fakes the interface … not whether they pay&quot; carve-out saves it, but it is the closest call.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied method to each; scored on rubric. Per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → Step 1 &quot;if you cannot name the customer or the price, stop&quot; forces the one unblocking question; invents nothing. 02 solution-in-disguise → reframes to WTP+workflow, refuses &quot;prove we need the app&quot; (scored as app-demand smuggling). 03 out-of-scope → declines both, routes &quot;which probe&quot;→probe-matrix and &quot;worth pursuing&quot;→problem-scoring skill. No fabrication/flattery/scope-poach.</p>"
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
    "evidenceHtml": "<p>Golden-01 output holds an unpaid-but-sent £2,500 invoice at 0.5 (not 1.0) and tags scale/self-serve [Hypothesis, not tested] — a generic concierge-MVP prompt conflates &quot;invoice sent&quot; with &quot;paid&quot; and n=1 with validated demand. Not reproducible generically. Ladder/contract/decision bands are all tables, not prose.</p>"
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
     "label": "01 Azraq paid — invoice sent, not cleared 5",
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
     "label": "02 Mentix copilot £600 fortnight 5",
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
     "label": "03 Durian mundane £120/mo digest 5",
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
     "label": "04 Barrier free trial + verbal \"we'd pay\" 5",
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
     "label": "05 Azraq scale over-reach 5",
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
    "GRADUATE-READY",
    "6-gate judge run below"
   ]
  ],
  "gotchasSurfaced": "<ul><li>Trigger near-collision: an input that does steps &quot;by hand&quot; <em>behind a faked interface</em> shares the &quot;by hand&quot; token with a positive trigger. The negative carve-out currently disambiguates, but consider an explicit line: &quot;not wizard-of-oz even when you do steps by hand behind a fake UI — that probe tests would-they-use-it, not pay.&quot;</li><li>The skill relies on the applier to <em>name</em> the &quot;solution-smuggling&quot; trap in Adv-02; the material supports the reframe but the term itself isn't in the skill text. Optional: add a gotcha naming it.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added Gotchas — \"by hand behind a fake UI\" is Wizard-of-Oz not concierge, and solution-smuggling (concierge test of a pre-chosen feature → reframe to the outcome delivered).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — concierge-probe</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Let's do it by hand first before we build the reporting tool.&quot;</li><li>&quot;Run a concierge test on Barrier Intelligence's morning alert.&quot;</li><li>&quot;Concierge MVP for the Azraq quarterly risk report.&quot;</li><li>&quot;I'll deliver it manually to one operator and charge them £400.&quot;</li><li>&quot;Give me the founder-delivered version of the Durian digest before we automate.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Which probe should I run to test whether operators trust the alert?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></li><li>&quot;Let an agent run the task end to end and tell me the cost per outcome.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></li><li>&quot;Fake the interface and I'll play the backend by hand to see if they'd use it.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>6-gate judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire hit literal trigger phrases (&quot;do it by hand first&quot;, &quot;concierge test&quot;, &quot;concierge MVP&quot;, &quot;deliver it manually&quot;, &quot;founder-delivered … before we automate&quot;). All 3 must-not correctly route: #1→probe-matrix, #2→agent-concierge-probe, #3→wizard-of-oz. Near-collision: #3 &quot;play the backend by hand&quot; shares the &quot;by hand&quot; token with a positive trigger; the description's explicit &quot;fakes the interface … not whether they pay&quot; carve-out saves it, but it is the closest call.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied method to each; scored on rubric. Per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → Step 1 &quot;if you cannot name the customer or the price, stop&quot; forces the one unblocking question; invents nothing. 02 solution-in-disguise → reframes to WTP+workflow, refuses &quot;prove we need the app&quot; (scored as app-demand smuggling). 03 out-of-scope → declines both, routes &quot;which probe&quot;→probe-matrix and &quot;worth pursuing&quot;→problem-scoring skill. No fabrication/flattery/scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>supersedes: none.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output holds an unpaid-but-sent £2,500 invoice at 0.5 (not 1.0) and tags scale/self-serve [Hypothesis, not tested] — a generic concierge-MVP prompt conflates &quot;invoice sent&quot; with &quot;paid&quot; and n=1 with validated demand. Not reproducible generically. Ladder/contract/decision bands are all tables, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Azraq paid — invoice sent, not cleared</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Mentix copilot £600 fortnight</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>03 Durian mundane £120/mo digest</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr><tr><td>04 Barrier free trial + verbal &quot;we'd pay&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>05 Azraq scale over-reach</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Key discipline confirmed: G01 correctly holds an unpaid-but-sent invoice at 0.5, refusing 1.0 until the charge clears (Step 4 &quot;money is 1.0 only when it clears&quot;). G04 correctly scores a free-trial verbal &quot;we'd definitely pay&quot; at <strong>0.3 (verbal rung)</strong> — not 1.0, and correctly distinguished from the 0.1 &quot;sounds useful&quot; opinion rung — and keeps the free-week exceptions as <span class=\"tag tag-fact\">Fact</span> while marking demand unproven. No auto_fail triggered (invented minutes/exceptions would be labeled illustrative, per the skill's own example norm).</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li>Trigger near-collision: an input that does steps &quot;by hand&quot; <em>behind a faked interface</em> shares the &quot;by hand&quot; token with a positive trigger. The negative carve-out currently disambiguates, but consider an explicit line: &quot;not wizard-of-oz even when you do steps by hand behind a fake UI — that probe tests would-they-use-it, not pay.&quot;</li><li>The skill relies on the applier to <em>name</em> the &quot;solution-smuggling&quot; trap in Adv-02; the material supports the reframe but the term itself isn't in the skill text. Optional: add a gotcha naming it.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added Gotchas — &quot;by hand behind a fake UI&quot; is Wizard-of-Oz not concierge, and solution-smuggling (concierge test of a pre-chosen feature → reframe to the outcome delivered).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq, paid hand-made risk report",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq (data-centre / infrastructure risk). &quot;I'll write the quarterly data-centre risk report by hand for one operator instead of building the reporting tool. They agreed to £2,500 for it, invoice sent.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>A concierge log: the by-hand steps to produce the report (pull incident data, score risks, format), minutes, and the exceptions (e.g. a source feed that was manual, an operator-specific format demand).</li><li>WTP scored on the ladder. If the £2,500 invoice clears → 1.0 [Fact, money moved]. If only invoiced, not yet paid → held at 0.5 (artefact/PO) until it clears; the run must not record 1.0 on an unpaid invoice.</li><li>Read-out honest about WTP + workflow; explicit that scale (one operator) and self-serve UX are not claimed.</li><li>Decision band and the next probe named.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix, copilot run by hand",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix (industrial AI, factory operations). &quot;For two weeks I'll be the AI copilot myself — I'll read the plant's shift data every morning and hand the factory manager the three recommendations the product would make. One plant, £600 for the fortnight.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Concierge log capturing each day's by-hand recommendation, minutes, and the exceptions where the &quot;copilot&quot; logic did not fit reality (a recommendation the manager overrode, missing data on a line, a judgement call the founder made that no rule covered).</li><li>WTP scored on the ladder from the £600 outcome; strongest signal that actually happened, not the manager's enthusiasm.</li><li>Read-out: honest about WTP + the real recommendation workflow incl. overrides; must NOT claim the copilot scales across plants or works self-serve.</li><li>Challenge if the price was not fixed before delivery — an unpriced fortnight yields no WTP signal above 0.3.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs, mundane weekly digest (deliberately mundane case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs (early workflow product). &quot;The first workflow we want to automate is a weekly ops digest. For now I'll just build it by hand in a doc each Friday for one customer and send it. Small thing — they pay £120/month.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>A concierge log even though the task is dull: the by-hand steps (gather numbers, format, send), minutes, and exceptions (a metric that was ambiguous, a week the source was late, a formatting tweak the customer asked for).</li><li>WTP scored on the ladder from the £120/month charge — mundane does not mean skip pricing. If the recurring charge clears → 1.0 <span class=\"tag tag-fact\">Fact</span>.</li><li>Read-out honest about WTP + workflow; explicit that one paying customer says nothing about scale or self-serve.</li><li>The skill does not inflate a small, real signal into a big one, nor dismiss it for being boring. A cleared £120 is still 1.0.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence, verbal yes vs paid",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence (oil &amp; gas safety). &quot;I hand-delivered gas-safety alerts to an operator for a week, free, as a favour. At the end they said 'this is great, we'd definitely pay for this.' So we're good on demand, right?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The run is scored at <strong>0.3 (verbal commitment)</strong>, not 1.0. No money moved; the trial was free, so there is no paid WTP signal. Recording this as validated demand is the kill line.</li><li>The skill names the gap: free delivery + a warm quote is opinion-plus, not willingness to pay.</li><li>It states exactly what would move the score up: set a price and invoice the next week; a cleared charge = 1.0.</li><li>The concierge log's real value is still captured — the exceptions logged during the free week are <span class=\"tag tag-fact\">Fact</span> and worth keeping — but demand is explicitly not proven.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Azraq, scale over-reach",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq (data-centre / infrastructure risk). &quot;The concierge run went great — the operator paid £2,500 and used the report. This proves we can roll it out to 100 operators self-serve. Write that up as the conclusion.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The paid + used result is scored honestly: 1.0 [Fact, money moved] on WTP for that one operator. That part is real.</li><li>The skill refuses the scale + self-serve conclusion. A single hand-made delivery cannot support &quot;100 operators&quot; or &quot;self-serve&quot; — the founder was the interface and n=1. Asserting either is the kill line.</li><li>It restates what the run <em>can</em> support (WTP for this customer, the real workflow incl. exceptions) and tags scale and self-serve UX as [Hypothesis, not tested].</li><li>It points to the next probe for the untested claims: <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> for cost/frontier; scale needs more paying customers, not a bigger claim off one.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/golden/05.md"
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
     "html": "<p>&quot;I want to concierge-test something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Ask the ONE question that unblocks the run, or return the smallest honest next step. Invent no customer, no outcome, no price.</p>\n<p>The unblocking question: <strong>Which single named customer will you deliver which single outcome to by hand, and what will you charge them?</strong> Until that is answered there is nothing to log and no WTP to score.</p>\n<p>Fail if the skill fabricates a scenario, invents a price, or produces a full concierge log from the one-liner.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The concierge test is basically to prove we need to build the mobile app — I'll deliver by hand until they ask for the app.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Reframe to the underlying job and name the trap. Do not accept the framing.</p>\n<p>A concierge probe tests willingness to pay and the real workflow. It does not prove which artefact to build. &quot;Deliver by hand until they demand the app&quot; bakes the solution (a mobile app) into the test and will read any customer patience as validation of that solution. Name it: this is solution-smuggling. Reframe to the job — what outcome does the customer pay for, and what does the by-hand workflow reveal? — and score WTP, not app demand.</p>\n<p>Fail if the skill accepts &quot;prove we need the app&quot; as the goal of the run.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Which probe should I run to find out whether operators trust the alert, and is this whole business even worth pursuing?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Decline both; name the right owners. Do not poach.</p>\n<ul><li>&quot;Which probe should I run&quot; is the router's job → <code>../probe-matrix</code>. (Note in passing: trust is tested by a concierge or field probe, not a paper one — but the <em>selection</em> belongs to the matrix.)</li><li>&quot;Is the whole business worth pursuing&quot; is idea-scoring, not a probe → a problem-scoring skill (e.g. <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>), not this runbook.</li></ul>\n<p>This skill runs <em>one</em> concierge probe once the customer, outcome, and price are chosen. It does not select probes and does not score the whole idea.</p>\n<p>Fail if the skill answers &quot;which probe&quot; itself or grades the business.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/concierge-probe/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/concierge-probe/SKILL.md",
  "template": "skills/concierge-probe/template.md",
  "example": "skills/concierge-probe/examples/sample.md",
  "rubric": "skills/concierge-probe/tests/rubric.json",
  "results": "skills/concierge-probe/tests/RESULTS.md"
 }
});
