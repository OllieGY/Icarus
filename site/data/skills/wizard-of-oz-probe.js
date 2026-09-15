window.ICARUS_SKILL("wizard-of-oz-probe", {
 "name": "wizard-of-oz-probe",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Compresses a &quot;would they actually use this if it worked&quot; question into a one-day test. A human sits behind an opaque interface and delivers the output the real system would, at the same speed and quality the real system would hit. You put a real task with real stakes in front of 3–8 operators and log what they do with the output. The output is the WoZ setup plus a read-out that reports usage behaviour and refuses to report feasibility, unit cost, or scale — because the human held all three constant on purpose.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic WoZ &quot;tests whether users accept an automated experience.&quot; This probe does one exact thing: it isolates the usage variable by removing feasibility. A human guarantees the output is right, so the only thing left to observe is whether people use it. That is precisely why the probe lies about feasibility, unit cost, and scale — you deleted those variables to get a clean read on usage. Two disciplines make it honest. First, a fidelity contract: the wizard must match the real system's latency and quality band, or you are testing a better product than you can ship. Second, the wizard's own effort per task is logged as a feasibility hypothesis to hand to the next probe, never as a cost fact.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when the claim is &quot;would they use it if it worked,&quot; and you can fake the output convincingly for a day.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Use when the claim is</th><th>Do NOT use — route to</th></tr></thead><tbody><tr><td>&quot;Would they use the output if it arrived reliably&quot;</td><td>—</td></tr><tr><td>&quot;Would they act on / return for / pay for the output&quot;</td><td>—</td></tr><tr><td>&quot;Can an operator follow the workflow on the screens&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></td></tr><tr><td>&quot;What is our real cost per task&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> (honest to the cent)</td></tr><tr><td>&quot;Can we technically build the model&quot;</td><td>a spike, not a probe — WoZ assumes it works</td></tr><tr><td>&quot;Which probe answers my question at all&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr></tbody></table></div>\n<p>This is not <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — that picks the probe. This runs one specific probe once the choice is made.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>One-day window. Fill in <code>template.md</code> as you run.</p>\n<ol><li><strong>Write the one claim.</strong> Frame it as &quot;would [operator] use [output] if it worked reliably,&quot; tagged <code>[Hypothesis]</code>. If the claim contains feasibility, cost, or scale, stop — WoZ lies about those. Return to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>. If the input is too vague to name the operator, the output, or the decision, ask the ONE unblocking question first — <em>what output would arrive, to whom, and what decision hangs on it?</em> — and stop until you have it. Do not invent an operator or a task to proceed.</li><li><strong>Design the curtain.</strong> Split what the user sees (the thinnest interface: an email address, a form, a Slack DM, a single frame) from what the wizard does. The user must not be able to tell a human is behind it.</li><li><strong>Set the fidelity contract — before running.</strong> Decide the two numbers the wizard must hold:\n<div class=\"table-wrap\"><table><thead><tr><th>Contract term</th><th>Set to</th><th>Why</th></tr></thead><tbody><tr><td>Latency target</td><td>The window the real system would answer in</td><td>A superhuman-fast wizard tests a product you cannot ship</td></tr><tr><td>Quality band</td><td>The quality the real system would realistically hit</td><td>A superhuman-good wizard inflates usage</td></tr></tbody></table></div></li><li><strong>Recruit real operators, 3–8, target segment.</strong> Give each a real task on their own data with a real decision attached.\n<div class=\"table-wrap\"><table><thead><tr><th>Operators</th><th>Reading</th></tr></thead><tbody><tr><td>Under 3</td><td>Anecdote, not signal</td></tr><tr><td>3–8</td><td>Right size for one day</td></tr><tr><td>Over 8 in a day</td><td>The wizard cannot hold the fidelity contract</td></tr></tbody></table></div></li><li><strong>Run the window. Log every interaction:</strong> task, wizard minutes, wizard errors, and the user's ACTION (used the output / ignored it / paid).</li><li><strong>Write the read-out.</strong> Usage behaviour with its ladder score, the feasibility hypotheses the wizard's effort generated, and the mandatory &quot;what this does NOT prove&quot; block for feasibility, cost, and scale.</li></ol>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>On the ladder — money moved 1.0, behaviour observed 0.7, artefact shown 0.5, verbal commitment 0.3, opinion 0.1 — a WoZ earns behaviour (0.7) when the operator acts on the output, and money (1.0) when you put a real charge behind the curtain and they pay. It is honest about would-they-use-it-if-it-worked. It cannot earn a feasibility or unit-cost number: the human holds those constant, so any cost or feasibility figure from a WoZ run is fabricated. Wizard minutes-per-task are logged as a <code>[Hypothesis]</code> for the next probe, not as a cost <code>[Fact]</code>. Done means you can state whether they used it, with the action logged, and you have written the &quot;does not prove&quot; section. &quot;They said they loved it&quot; stays at 0.1.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li>The superhuman wizard. The human answers faster and cleaner than any real system could, usage looks great, and it collapses at launch. Hold the latency and quality contract you set in step 3.</li><li>Reading wizard minutes as unit cost. A person is not the machine. That number is a feasibility hypothesis for <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>, not a cost you can price against.</li><li>No real stakes. A hypothetical task drops you back to opinion (0.1). Use the operator's real data and a real decision.</li><li>Testing feasibility by accident. If you catch yourself asking &quot;can we even do this,&quot; that is a spike, not a WoZ. WoZ assumes it works.</li><li>A leaky curtain. The moment the operator senses a human, they perform for you. Keep it opaque during the run; debrief only after.</li></ul>\n<p>Kill line (auto-fail): the read-out claims the WoZ proved feasibility, unit economics, or that it will scale.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/wizard-of-oz-probe\">examples/sample.md</a> — Durian Labs runs a one-day WoZ of its vendor-email-to-purchase-order workflow; four of six operators act on the hand-made PO and one pre-pays, while the &quot;7 minutes per PO&quot; figure is held as a feasibility hypothesis, not a cost.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — the router that should have sent you here; go back if your claim is about cost, feasibility, or legibility.</li><li><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a> — the cheaper rung below when the claim is whether the workflow reads.</li><li><a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> — the next rung up; hand it the wizard's effort log to get real cost-per-task.</li><li><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> — when the founder must do the real workflow by hand, exceptions and all, to learn willingness to pay.</li><li><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> — the scoring ladder this read-out uses. Supersedes nothing. It absorbs the WoZ rung of <code>skills/discovery/prototyping-pretotyping</code> and sharpens it: that skill tests &quot;user perception&quot;; this one isolates usage by holding feasibility constant, and names cost and scale as lies rather than results. It <strong>narrows</strong> that one rung — <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> is what supersedes <code>prototyping-pretotyping</code>, so this skill's <code>supersedes: none</code> is correct.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Wizard-of-Oz Probe — setup + read-out</h1>\n<p>One-day window. Fill this in as you run. One output faked, 3–8 operators, one usage claim.</p>\n<pre><code>Progress:\n- [ ] Claim written (would-they-use-it-if-it-worked only)\n- [ ] Curtain designed (user sees vs wizard does; opaque)\n- [ ] Fidelity contract set BEFORE running (latency + quality)\n- [ ] 3–8 real operators recruited, real task, real stakes\n- [ ] Run window logged per interaction (action recorded)\n- [ ] Read-out written, including &quot;does NOT prove&quot; block</code></pre>\n<h2>1. The claim</h2>\n<p><strong>Claim</strong> <code>[Hypothesis]</code>: [e.g., &quot;An ops manager would submit the auto-generated PO if it arrived within the hour.&quot;] <strong>Type check</strong>: usage / would-they-act ☐ If the claim is about feasibility / cost / scale → STOP. Wrong probe. Return to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</p>\n<h2>2. The curtain</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>The user sees (interface)</th><th>The wizard does (hidden)</th></tr></thead><tbody><tr><td>[e.g., email to intake@… ]</td><td>[reads email, builds PO by hand, sends back]</td></tr></tbody></table></div>\n<p>Opaque? The user cannot tell a human is behind it: yes ☐ no ☐ (if no, redesign)</p>\n<p><strong>Safety caveat — what the wizard must NOT do.</strong> If the faked output touches anything physical or hazardous (a live setpoint, a control loop, a gas or fire alarm, a dosing rate, a real spend), state the hard limits before running. The wizard delivers a recommendation, never an action on live equipment.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>The wizard must NOT</th><th>Because (the hazard)</th></tr></thead><tbody><tr><td>[e.g., change a live setpoint / silence a real gas alarm / commit a real order]</td><td>[what goes wrong if it does]</td></tr></tbody></table></div>\n<h2>3. Fidelity contract — SET BEFORE RUNNING</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Contract term</th><th>Target</th><th>Actual (fill after)</th></tr></thead><tbody><tr><td>Latency (match real system)</td><td>[e.g., ≤ 60 min]</td><td></td></tr><tr><td>Quality band (match real system)</td><td>[e.g., &quot;no worse than v1 parser&quot;]</td><td></td></tr></tbody></table></div>\n<p>If the wizard beats these, discount the result — you tested a product you can't ship.</p>\n<h2>4. Operators (3–8)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Role / segment</th><th>Real task on their data?</th><th>Real decision attached?</th></tr></thead><tbody><tr><td>1</td><td></td><td>yes ☐ no ☐</td><td></td></tr><tr><td>2</td><td></td><td>yes ☐ no ☐</td><td></td></tr><tr><td>3</td><td></td><td>yes ☐ no ☐</td><td></td></tr></tbody></table></div>\n<p>Under 3 = anecdote. Over 8 in a day = contract breaks.</p>\n<h2>5. Run log — per interaction</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Task</th><th>Wizard min</th><th>Wizard errors</th><th>User ACTION (used / ignored / paid)</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>6. Read-out</h2>\n<p><strong>Usage:</strong> [X] of [N] operators acted on the output. Money moved? [Y/N — who, how much] <strong>Evidence-ladder score:</strong></p>\n<ul><li>Acted on output → <strong>0.7 (behaviour observed)</strong> <code>[Fact]</code></li><li>Paid / pre-paid → <strong>1.0 (money moved)</strong> <code>[Fact]</code></li><li>&quot;Said they liked it&quot; → <strong>0.1 (opinion)</strong> — do not upgrade</li></ul>\n<p><strong>Feasibility hypotheses (from wizard effort — NOT cost facts):</strong></p>\n<ul><li>Wizard averaged [X] min/task <code>[Hypothesis]</code> → hand to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> to get real cost-per-task.</li><li>Hardest step for the wizard: [ ] <code>[Hypothesis]</code> → the likely automation bottleneck.</li></ul>\n<p><strong>What this does NOT prove</strong> (mandatory — the WoZ lies about these):</p>\n<ul><li>Feasibility — a human held it constant; we have not shown the system can do it.</li><li>Unit cost — wizard minutes are not machine cost.</li><li>Scale — a person cannot serve N× operators; this says nothing about throughput.</li></ul>\n<p><strong>Next probe</strong> (from <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>):</p>\n<ul><li>Need real cost-per-task / automation frontier → <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>.</li><li>Need willingness to pay with the founder doing the full real workflow → <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>.</li></ul>",
  "path": "skills/wizard-of-oz-probe/template.md"
 },
 "example": {
  "html": "<h1>Sample — Durian Labs runs a wizard-of-oz probe</h1>\n<p><strong>Fellow:</strong> Durian Labs (early workflow product). First workflow: turn a messy vendor email into a structured purchase order (PO). <strong>Illustrative fixture. Numbers are plausible, not real client data.</strong></p>\n<p>Durian has not built the parser. Before writing any extraction code, it tests one thing: would an ops manager actually submit the PO if it came back fast and correct.</p>\n<h2>1. The claim</h2>\n<p><code>[Hypothesis]</code> An ops manager would submit the auto-generated PO into their system if it arrived within the hour and was correct. Type: usage / would-they-act. Passes the check — no feasibility/cost/scale words.</p>\n<h2>2. The curtain</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>The user sees</th><th>The wizard does</th></tr></thead><tbody><tr><td>Forward the vendor email to intake@durianlabs.co</td><td>A Durian founder reads it, builds the structured PO by hand, emails it back</td></tr></tbody></table></div>\n<p>Opaque: yes. Users were told &quot;our system turns your email into a PO,&quot; not that a human types it.</p>\n<h2>3. Fidelity contract (set before running)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Contract term</th><th>Target</th><th>Actual</th></tr></thead><tbody><tr><td>Latency</td><td>≤ 60 min (what a real parser + queue would hit)</td><td>41 min avg</td></tr><tr><td>Quality band</td><td>No worse than a plausible v1 parser: standard fields, flag ambiguous lines rather than guess</td><td>Held — wizard flagged 3 ambiguous lines instead of inventing values</td></tr></tbody></table></div>\n<h2>4. Operators</h2>\n<p>Six ops managers at SMB distributors, recruited from Durian's waitlist. Each forwarded a real vendor email from their own inbox with a real PO they needed to raise.</p>\n<h2>5. Run log</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Task</th><th>Wizard min</th><th>Errors</th><th>User action</th></tr></thead><tbody><tr><td>1</td><td>12-line grocery PO</td><td>6</td><td>0</td><td>Submitted the PO</td></tr><tr><td>2</td><td>Ambiguous unit-of-measure email</td><td>9</td><td>1 (wrong UoM)</td><td>Fixed the line, then submitted</td></tr><tr><td>3</td><td>Multi-vendor forward</td><td>11</td><td>0</td><td>Ignored — said &quot;I'd rather do these two myself&quot;</td></tr><tr><td>4</td><td>Standard restock</td><td>5</td><td>0</td><td>Submitted, then asked &quot;can I get this daily?&quot; and pre-paid one month</td></tr><tr><td>5</td><td>PDF-attachment email</td><td>8</td><td>0</td><td>Submitted</td></tr><tr><td>6</td><td>Short one-item email</td><td>4</td><td>0</td><td>Ignored — &quot;faster to type it myself for one line&quot;</td></tr></tbody></table></div>\n<h2>6. Read-out</h2>\n<p><strong>Usage:</strong> 4 of 6 acted on the output (submitted the PO). Money moved: yes — operator 4 pre-paid one month. <strong>Evidence-ladder score:</strong></p>\n<ul><li>Used the output → <strong>0.7 (behaviour observed)</strong> <code>[Fact]</code> for 4/6.</li><li>Operator 4 pre-paid → <strong>1.0 (money moved)</strong> <code>[Fact]</code>, single data point.</li><li>General &quot;this is handy&quot; comments → <strong>0.1 (opinion)</strong>, not upgraded.</li></ul>\n<p><strong>Feasibility hypotheses (NOT cost facts):</strong></p>\n<ul><li>Wizard averaged 7.2 min/PO <code>[Hypothesis]</code> — hand to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> to get real cost-per-PO.</li><li>Hardest step was ambiguous units of measure (the one wizard error) <code>[Hypothesis]</code> — likely the automation bottleneck.</li><li>Single-line and multi-vendor emails were both ignored — the wedge may be mid-size single-vendor POs <code>[Hypothesis]</code>.</li></ul>\n<p><strong>What this does NOT prove:</strong></p>\n<ul><li>Feasibility — a founder read every email; Durian has not shown a parser can extract these fields. <code>[Assumption]</code></li><li>Unit cost — 7.2 wizard minutes is not machine cost, and says nothing about API or infra spend.</li><li>Scale — one founder handled six POs in a day. Throughput at 600 is untested.</li></ul>\n<p><strong>Next probe (from <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>):</strong> the open question is now cost and automation frontier → <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>, seeded with the 7.2-min hypothesis and the units-of-measure bottleneck.</p>",
  "path": "skills/wizard-of-oz-probe/examples/sample.md"
 },
 "rubric": {
  "skill": "wizard-of-oz-probe",
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
    "Let's fake the backend and have a human answer the requests for a day.",
    "Run a wizard of oz on the PO-generation workflow.",
    "I want a woz test: will managers act on the recommendation if it arrives reliably?",
    "Put a human behind the curtain for the risk-report requests this week.",
    "Fake the auto-summary email by hand and see if anyone reads it.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Just sketch the workflow on paper and check they can follow the steps.",
     "sibling": "paper-sketch-probe",
     "local": true
    },
    {
     "phrase": "I need our real cost-per-task before we price it.",
     "sibling": "agent-concierge-probe",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description carries the exact WoZ vocab (&quot;fake the backend&quot;, &quot;wizard of oz&quot;, &quot;woz test&quot;, &quot;human behind the curtain&quot;, &quot;answer the requests and see if they act&quot;) so all 5 must-fire phrasings match. The 3 must-not-fire are each named-and-excluded in the description: probe-choice→<a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, paper-legibility→<a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, cost-per-task→<a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>. Clean separation.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied Method to each input and scored the produced artifact. Table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague: Method step-1 forces a concrete claim+type-check, so a faithful applier asks the one question and cannot fabricate an output/curtain. 02 &quot;prove the model works&quot;: rejected via the reframe + &quot;When NOT&quot; row (spike, not probe) + kill line + &quot;feasibility by accident&quot; gotcha. 03 &quot;cost-per-task&quot;: declined via evidence standard (wizard-minutes = <code>[Hypothesis]</code>, not cost <code>[Fact]</code>) + &quot;wizard minutes as unit cost&quot; gotcha, routed to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code>. (Body notes it absorbs/sharpens the WoZ rung of <code>prototyping-pretotyping</code> but formally supersedes nothing.)</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-1 output cannot come from a generic PM WoZ prompt: it isolates usage by <em>deleting</em> feasibility, refuses to report cost/scale (mandatory &quot;does NOT prove&quot; block), scores on the evidence ladder (0.7 behaviour / 1.0 money / 0.1 opinion), and tags <code>[Hypothesis]/[Fact]</code>. Tabular guidance (fidelity contract, operator sizing, run log, routing) is tables, not prose.</p>"
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
    "method_fidelity",
    "artifact_complete",
    "proprietary_edge",
    "challenge",
    "evidence_standard"
   ],
   "rows": [
    {
     "label": "01 Mentix setpoint 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Barrier gas-safety 5",
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
     "label": "03 Azraq risk answer 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 mundane summary 5",
     "dims": [
      5,
      5,
      4,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Durian weak input 5",
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
    "run 1",
    "all six",
    "5 executable gates PASS, Gate 4 n-a, Gate 6 pending",
    "see judge block below"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>No safety-caveat field in the template.</strong> Golden 02 (gas safety) and 01 (live setpoint change) involve real-world hazard, and the expected output notes &quot;do not suppress a real hazard for the test.&quot; The template's curtain/operator sections have no prompt for this, so a faithful applier must add it unaided. Suggest an optional &quot;Real-world-stakes caveat&quot; line in §2/§4. (Caps golden-02 artifact_complete at 4.)</li><li><strong>No explicit &quot;vague input → ask the ONE question&quot; instruction.</strong> Adversarial 01 behaviour is reachable (step 1 can't be filled without an output + a usage action) but only implicitly. A one-line &quot;If the output/action is unspecified, ask only: which single output, and what action counts as usage?&quot; would make it explicit rather than emergent.</li><li><strong>Minor doc wording:</strong> frontmatter <code>supersedes: none</code> vs body &quot;absorbs the WoZ rung of <code>prototyping-pretotyping</code>.&quot; Consistent (absorb ≠ supersede) but a reader could misread it; one clarifying clause would remove all doubt. Not a functional defect.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added safety-caveat field to template (state what the wizard must NOT do on live/hazardous setpoints); added Method line to ask the ONE unblocking question on vague input; clarified it narrows, not supersedes, prototyping-pretotyping.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — wizard-of-oz-probe</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Let's fake the backend and have a human answer the requests for a day.&quot;</li><li>&quot;Run a wizard of oz on the PO-generation workflow.&quot;</li><li>&quot;I want a woz test: will managers act on the recommendation if it arrives reliably?&quot;</li><li>&quot;Put a human behind the curtain for the risk-report requests this week.&quot;</li><li>&quot;Fake the auto-summary email by hand and see if anyone reads it.&quot; (mundane)</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Which probe should I run to test whether operators trust the alert?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></li><li>&quot;Just sketch the workflow on paper and check they can follow the steps.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></li><li>&quot;I need our real cost-per-task before we price it.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all six</td><td>5 executable gates PASS, Gate 4 n-a, Gate 6 pending</td><td>see judge block below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description carries the exact WoZ vocab (&quot;fake the backend&quot;, &quot;wizard of oz&quot;, &quot;woz test&quot;, &quot;human behind the curtain&quot;, &quot;answer the requests and see if they act&quot;) so all 5 must-fire phrasings match. The 3 must-not-fire are each named-and-excluded in the description: probe-choice→<a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, paper-legibility→<a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, cost-per-task→<a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>. Clean separation.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied Method to each input and scored the produced artifact. Table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague: Method step-1 forces a concrete claim+type-check, so a faithful applier asks the one question and cannot fabricate an output/curtain. 02 &quot;prove the model works&quot;: rejected via the reframe + &quot;When NOT&quot; row (spike, not probe) + kill line + &quot;feasibility by accident&quot; gotcha. 03 &quot;cost-per-task&quot;: declined via evidence standard (wizard-minutes = <code>[Hypothesis]</code>, not cost <code>[Fact]</code>) + &quot;wizard minutes as unit cost&quot; gotcha, routed to <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a>. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code>. (Body notes it absorbs/sharpens the WoZ rung of <code>prototyping-pretotyping</code> but formally supersedes nothing.)</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-1 output cannot come from a generic PM WoZ prompt: it isolates usage by <em>deleting</em> feasibility, refuses to report cost/scale (mandatory &quot;does NOT prove&quot; block), scores on the evidence ladder (0.7 behaviour / 1.0 money / 0.1 opinion), and tags <code>[Hypothesis]/[Fact]</code>. Tabular guidance (fidelity contract, operator sizing, run log, routing) is tables, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden scores (rubric: /25, pass ≥21 and no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix setpoint</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>02 Barrier gas-safety</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>03 Azraq risk answer</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>04 mundane summary</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>05 Durian weak input</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr></tbody></table></div>\n<p>No <code>auto_fail</code> triggered on any case (no fabricated numbers — placeholders/<code>[Hypothesis]</code> used; challenges the weak input in 05; routes to siblings rather than poaching; not boilerplate). Kill line (never claim feasibility/unit-cost/scale proof) is enforced by the mandatory &quot;does NOT prove&quot; block, the explicit kill-line statement, the evidence standard, and three gotchas.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas / template)</h3>\n<ul><li><strong>No safety-caveat field in the template.</strong> Golden 02 (gas safety) and 01 (live setpoint change) involve real-world hazard, and the expected output notes &quot;do not suppress a real hazard for the test.&quot; The template's curtain/operator sections have no prompt for this, so a faithful applier must add it unaided. Suggest an optional &quot;Real-world-stakes caveat&quot; line in §2/§4. (Caps golden-02 artifact_complete at 4.)</li><li><strong>No explicit &quot;vague input → ask the ONE question&quot; instruction.</strong> Adversarial 01 behaviour is reachable (step 1 can't be filled without an output + a usage action) but only implicitly. A one-line &quot;If the output/action is unspecified, ask only: which single output, and what action counts as usage?&quot; would make it explicit rather than emergent.</li><li><strong>Minor doc wording:</strong> frontmatter <code>supersedes: none</code> vs body &quot;absorbs the WoZ rung of <code>prototyping-pretotyping</code>.&quot; Consistent (absorb ≠ supersede) but a reader could misread it; one clarifying clause would remove all doubt. Not a functional defect.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added safety-caveat field to template (state what the wizard must NOT do on live/hazardous setpoints); added Method line to ask the ONE unblocking question on vague input; clarified it narrows, not supersedes, prototyping-pretotyping.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix, act-on-the-recommendation",
    "venture": "Mentix",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence, act-on-the-alert",
    "venture": "Barrier",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq, on-demand risk answer",
    "venture": "Azraq",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "mundane: fake the weekly summary email",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian Labs, weak input (must challenge the fidelity gap)",
    "venture": "Durian",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/golden/05.md"
   }
  ],
  "adversarial": [
   {
    "kind": "adversarial",
    "n": 1,
    "title": "vague one-liner",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/wizard-of-oz-probe/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/wizard-of-oz-probe/SKILL.md",
  "template": "skills/wizard-of-oz-probe/template.md",
  "example": "skills/wizard-of-oz-probe/examples/sample.md",
  "rubric": "skills/wizard-of-oz-probe/tests/rubric.json",
  "results": "skills/wizard-of-oz-probe/tests/RESULTS.md"
 }
});
