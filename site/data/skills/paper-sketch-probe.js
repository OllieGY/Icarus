window.ICARUS_SKILL("paper-sketch-probe", {
 "name": "paper-sketch-probe",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Compresses a &quot;does this workflow read the way I think it does&quot; question into a 30-minute test. You draw the workflow as 5–9 panels, hand it to one real operator, stay silent, and log where they pause. The output is the sketch plus a read-out that names two things only: was the flow legible, and which single panel carries the real decision. It refuses to report demand or feel, because a sketch cannot observe either.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic paper prototype &quot;tests usability.&quot; This probe tests two narrower things a sketch can honestly answer: legibility (can a real operator follow the steps unprompted) and decision location (which panel holds the judgment). The pause points do the work. A pause that clears the moment you explain is a legibility gap you fix by redrawing. A pause where the operator says &quot;it depends&quot; or reaches for context you never drew is the decision point — that is the surface your product actually has to serve. Everything else the sketch tells you is opinion.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when the claim is about a workflow you can draw and an operator can walk, and you have not yet built it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Use when the claim is</th><th>Do NOT use — route to</th></tr></thead><tbody><tr><td>&quot;An operator can follow these steps without me narrating&quot;</td><td>—</td></tr><tr><td>&quot;The real judgment sits in one identifiable step&quot;</td><td>—</td></tr><tr><td>&quot;Would they trust the output enough to act&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> (trust needs real stakes)</td></tr><tr><td>&quot;Would they use it if it worked&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a></td></tr><tr><td>&quot;Will they pay / is there demand&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, then a fake-door; a sketch lies about demand</td></tr><tr><td>&quot;Which probe answers my question at all&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr></tbody></table></div>\n<p>This is not <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — that picks the probe. This runs one specific probe once the choice is made.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Set a 30-minute timer. Fill in <code>template.md</code> as you go.</p>\n<ol><li><strong>Write the one claim (2 min).</strong> State it as a legibility or decision-location claim, tagged <code>[Hypothesis]</code>. If the claim contains the words demand, trust, pay, or &quot;want it,&quot; stop — wrong probe. Hand back to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</li><li><strong>Draw the workflow (10 min).</strong> 5–9 panels, one decision per panel, pen on paper or a single frame. No colour, no polish. Include the exception panel, not just the happy path — the decision usually hides there.\n<div class=\"table-wrap\"><table><thead><tr><th>Panel count</th><th>Reading</th></tr></thead><tbody><tr><td>Under 5</td><td>You are testing a screen, not a workflow. Fine, but say so.</td></tr><tr><td>5–9</td><td>Right size for one workflow.</td></tr><tr><td>Over 9</td><td>You are testing the whole product. Split it.</td></tr></tbody></table></div></li><li><strong>Recruit one real operator (target segment).</strong> Not a colleague, not a founder friend — they read your intent, not the artifact.</li><li><strong>Run silent (10 min).</strong> Hand over the sketch. Ask them to talk through what they would do at each panel. You say nothing until they finish. Log every pause in the run table.</li><li><strong>Classify each pause (5 min).</strong> Legibility gap (resolves when you explain) or decision point (needs off-page judgment or context).</li><li><strong>Write the read-out (3 min).</strong> Legible yes/no with the count, the one panel where the decision lived, the evidence-ladder score, and the mandatory &quot;what this does NOT tell you&quot; block.</li></ol>\n<p>Bands:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Band</th><th>Meaning</th></tr></thead><tbody><tr><td>Panels followed unprompted</td><td>≥ 80%</td><td>Legible enough to build the flow</td></tr><tr><td>Panels followed unprompted</td><td>&lt; 80%</td><td>Redraw; do not advance</td></tr><tr><td>Panels carrying the decision</td><td>1</td><td>Workflow is decomposed</td></tr><tr><td>Panels carrying the decision</td><td>&gt; 2</td><td>Not decomposed yet; the job is still fuzzy</td></tr></tbody></table></div>\n<p>Legibility % = (panels not blocked by a legibility gap) / N. A decision-point pause does NOT count against legibility — the operator followed the panel and reached for off-page judgment, which is the finding, not a failure.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>On the ladder — money moved 1.0, behaviour observed 0.7, artefact shown 0.5, verbal commitment 0.3, opinion 0.1 — a paper probe observes behaviour (0.7) about legibility and decision location, and nothing else. Demand and feel are not observable from a sketch, so any demand or feel signal it produces is opinion, capped at 0.1. The probe is honest about workflow legibility and where the decision sits; it lies about how it feels to use and about real demand. Done means you can name the decision panel and cite the pause behaviour. You have not earned a demand number and must not write one.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li>Reading &quot;yeah I'd use this&quot; as demand. It is opinion at 0.1. The sketch lies about demand at every fidelity, so polishing it changes nothing.</li><li>Drawing the happy path only. The decision almost always lives in the exception panel you were tempted to skip.</li><li>Narrating the sketch as they go. You contaminate the legibility read. Run silent; explain only after they finish.</li><li>Using a colleague or co-founder as the operator. They infer intent from knowing you, which is exactly the crutch a real user will not have.</li><li>More than nine panels. You are testing the product, not a workflow, and the read-out will be mush.</li></ul>\n<p>Kill line (auto-fail): the read-out claims the sketch proved demand, willingness to pay, trust, or how the product feels to use.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/paper-sketch-probe\">examples/sample.md</a> — Mentix runs a sketch probe of the factory-copilot alert-to-action flow; the decision turns out to live in the &quot;halt the line&quot; panel, which needs shift context that was never on the page.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — the router that should have sent you here; go back to it if your claim is about demand, trust, or cost.</li><li><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> — the next rung when the claim is &quot;would they use it if it worked.&quot;</li><li><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> — when the claim is trust or willingness to pay under real stakes.</li><li><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> — the scoring ladder this read-out uses. Supersedes nothing. It absorbs the paper/L1 rung of <code>skills/discovery/prototyping-pretotyping</code> and sharpens it: that skill tests &quot;workflow&quot;; this one tests legibility and decision location, and refuses to let a sketch speak about demand. It <strong>narrows</strong> that one rung — it does not replace the whole skill. <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> is what supersedes <code>prototyping-pretotyping</code>, so this skill's <code>supersedes: none</code> is correct.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Paper / Sketch Probe — runbook + read-out</h1>\n<p>30-minute timer. Fill this in as you run. One workflow, one operator, one claim.</p>\n<pre><code>Progress:\n- [ ] Claim written (legibility / decision-location only)\n- [ ] Workflow drawn (5–9 panels, exception included)\n- [ ] Real operator recruited (target segment, not a colleague)\n- [ ] Run silent, pauses logged\n- [ ] Each pause classified\n- [ ] Read-out written, including &quot;does NOT tell you&quot; block</code></pre>\n<h2>1. The claim (2 min)</h2>\n<p><strong>Claim</strong> <code>[Hypothesis]</code>: [e.g., &quot;A plant manager can follow the alert-to-action flow without me explaining it.&quot;] <strong>Type check</strong>: legibility ☐  decision-location ☐ If the claim is about demand / trust / pay / &quot;want it&quot; → STOP. Wrong probe. Return to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</p>\n<h2>2. The sketch (10 min)</h2>\n<p>Panels, one decision each. Include the exception, not just the happy path.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Panel (what the operator sees / does)</th><th>The decision on this panel</th></tr></thead><tbody><tr><td>1</td><td></td><td></td></tr><tr><td>2</td><td></td><td></td></tr><tr><td>3</td><td></td><td></td></tr><tr><td>4</td><td></td><td></td></tr><tr><td>5</td><td></td><td></td></tr><tr><td>6</td><td></td><td></td></tr><tr><td>7 (opt)</td><td></td><td></td></tr><tr><td>8 (opt)</td><td></td><td></td></tr><tr><td>9 (opt)</td><td></td><td></td></tr></tbody></table></div>\n<p>Panel count: [N]  →  under 5 = a screen not a workflow; 5–9 = right; over 9 = split it.</p>\n<h2>3. Operator</h2>\n<p><strong>Who</strong> (segment / role): [ ]  <strong>Real user?</strong> yes ☐ no ☐ (if no, redo — a colleague reads your intent)</p>\n<h2>4. Run log — silent (10 min)</h2>\n<p>Say nothing until they finish. Log every pause.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Panel</th><th>What they did / said</th><th>Paused?</th><th>Reached off-page?</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr><tr><td>...</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>5. Classify each pause (5 min)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Panel</th><th>Pause type</th><th>Reasoning</th></tr></thead><tbody><tr><td></td><td>legibility gap / decision point</td><td>resolved on explanation = gap; needed off-page judgment = decision</td></tr></tbody></table></div>\n<h2>6. Read-out (3 min)</h2>\n<p><strong>Legible?</strong> [Y/N] — followed [X] of [N] panels unprompted = [%]  (≥80% legible; &lt;80% redraw)</p>\n<blockquote><p><strong>Legibility %</strong> = (panels not blocked by a legibility gap) / N. A decision-point pause does NOT count against legibility — the operator followed the panel and reached for off-page judgment; that is the finding, not a failure. Only legibility gaps subtract. <strong>Decision lived in:</strong> panel [#] — [one line on the judgment it carries]  (if spread over &gt;2 panels, the job is not decomposed yet) <strong>Evidence-ladder score:</strong> legibility / decision-location = <strong>0.7 (behaviour observed)</strong> <code>[Fact]</code></p></blockquote>\n<p><strong>What this does NOT tell you</strong> (mandatory — the sketch lies about these):</p>\n<ul><li>Real demand — not observable from a sketch. Any &quot;I'd use it&quot; here is opinion, <strong>0.1</strong>, do not upgrade.</li><li>How it feels to use — not testable on paper at any fidelity.</li><li>Trust under real stakes — a sketch cannot put the operator at risk.</li></ul>\n<p><strong>Next probe</strong> (from <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>):</p>\n<ul><li>If you now need &quot;would they use it if it worked&quot; → <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</li><li>If you need trust or willingness to pay → <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>.</li></ul>",
  "path": "skills/paper-sketch-probe/template.md"
 },
 "example": {
  "html": "<h1>Sample — Mentix runs a paper/sketch probe</h1>\n<p><strong>Fellow:</strong> Mentix (industrial AI — an &quot;AI copilot for factory managers&quot;).</p>\n<blockquote><p><strong>Illustrative fixture — label convention.</strong> The golden inputs carry no real operator data; the operator, the pauses, and the numbers here are plausible constructions, not client records. The run is scored on <em>shape</em> — did it produce a legibility-% read, a single decision panel, and an honest &quot;does NOT tell you&quot; block — not on the literal figures.</p></blockquote>\n<p>Mentix wants to build a copilot that watches plant telemetry, flags an anomaly, and walks the shift manager to an action. Before building the detection or the UI, Mentix tests one thing: can a real plant manager follow the alert-to-action flow on paper.</p>\n<h2>1. The claim</h2>\n<p><code>[Hypothesis]</code> A shift manager can follow the anomaly-to-action flow without narration, and one panel will carry the real decision. Type: legibility + decision-location. Passes the check — no demand, trust, or pay words.</p>\n<h2>2. The sketch (6 panels)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Panel</th><th>Decision on this panel</th></tr></thead><tbody><tr><td>1</td><td>Copilot posts &quot;Line 3 vibration rising&quot;</td><td>Notice it</td></tr><tr><td>2</td><td>Manager opens the alert, sees the trend</td><td>Is this real or sensor noise</td></tr><tr><td>3</td><td>Copilot suggests &quot;inspect bearing at station 7&quot;</td><td>Accept or override the suggestion</td></tr><tr><td>4</td><td>Manager checks station 7</td><td>Log finding</td></tr><tr><td>5</td><td>Copilot asks &quot;halt Line 3?&quot;</td><td><strong>Halt the line or run to shift end</strong></td></tr><tr><td>6</td><td>Action recorded, alert closed</td><td>Done</td></tr></tbody></table></div>\n<p>Panel count 6 — right size.</p>\n<h2>3. Operator</h2>\n<p>A shift manager at a mid-size packaging plant, recruited through Mentix's design partner. Real user, not a Mentix employee.</p>\n<h2>4. Run log (silent)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Panel</th><th>What they did / said</th><th>Paused?</th><th>Off-page?</th></tr></thead><tbody><tr><td>1</td><td>&quot;OK, an alert.&quot; Moved on.</td><td>no</td><td>no</td></tr><tr><td>2</td><td>&quot;Vibration noise happens all shift. I'd want the last three shifts here.&quot;</td><td>yes</td><td>yes — reached for history not drawn</td></tr><tr><td>3</td><td>Accepted the suggestion, moved on.</td><td>no</td><td>no</td></tr><tr><td>4</td><td>&quot;Fine, I'd send someone.&quot;</td><td>no</td><td>no</td></tr><tr><td>5</td><td>&quot;Depends. Are we mid-run? What's the changeover cost tonight? I'm not halting on this alone.&quot;</td><td>long</td><td>yes — reached for run schedule + cost</td></tr><tr><td>6</td><td>&quot;Sure.&quot;</td><td>no</td><td>no</td></tr></tbody></table></div>\n<h2>5. Classify</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Panel</th><th>Pause type</th><th>Reasoning</th></tr></thead><tbody><tr><td>2</td><td>legibility gap</td><td>Cleared once shown where trend history would sit — a redraw fix</td></tr><tr><td>5</td><td>decision point</td><td>Needed off-page context (run state, changeover cost) the sketch never carried</td></tr></tbody></table></div>\n<h2>6. Read-out</h2>\n<p><strong>Legible?</strong> Yes — followed 5 of 6 panels unprompted = 83% (≥80%). Panel 2 needs trend history added, then redraw. <strong>Decision lived in:</strong> panel 5, &quot;halt the line.&quot; The judgment is not &quot;is there an anomaly&quot; — it is &quot;is halting worth the changeover cost right now,&quot; which the copilot showed none of. That is the surface Mentix actually has to build for. <strong>Evidence-ladder score:</strong> legibility + decision-location = <strong>0.7 (behaviour observed)</strong> <code>[Fact]</code> — one operator, replicate with 2–3 more before committing the redraw.</p>\n<p><strong>What this does NOT tell you:</strong></p>\n<ul><li>Whether managers want this copilot. The manager's &quot;this is useful&quot; is opinion, <strong>0.1</strong>. Not upgraded.</li><li>Whether they would trust the halt recommendation enough to act on it in a live incident. A sketch cannot put a plant at risk. <code>[Assumption]</code> untested.</li><li>How the alert feels at 2am mid-incident versus calmly at a desk.</li></ul>\n<p><strong>Next probe (from <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>):</strong> the open risk is trust in the halt recommendation under real stakes → <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, with Mentix generating the recommendation by hand for a real shift. If the question were &quot;would they act on it if it arrived reliably,&quot; that would be <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</p>",
  "path": "skills/paper-sketch-probe/examples/sample.md"
 },
 "rubric": {
  "skill": "paper-sketch-probe",
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
    "Can you paper-test the factory-copilot workflow before we build it?",
    "Let's sketch it — I want to see if a plant manager can follow the alert-to-action steps.",
    "I want to run a paper prototype of the invoice-to-approval flow.",
    "Run a sketch probe on the incident-report workflow.",
    "Draw the 3-screen signup and check a new user can follow it.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Fake the backend so users think the anomaly detection is live and see if they act.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    },
    {
     "phrase": "I'll run it by hand myself for the first ten customers to see if they'll pay.",
     "sibling": "concierge-probe",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire carry paper/sketch + workflow-legibility framing; description tokens (&quot;paper test/sketch it/paper prototype/sketch probe/draw the flow and check they can follow&quot;) fire on each incl. the mundane signup (#5). All 3 must-not-fire caught by explicit exclusions: &quot;which probe&quot; → probe-matrix; &quot;fake the backend…see if they act&quot; → wizard-of-oz (demand); &quot;by hand…see if they'll pay&quot; → concierge (pay).</p>"
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
    "evidenceHtml": "<p>01 vague → asks the one question (which workflow + legibility/decision claim), refuses to invent panels; 02 fidelity-for-demand → rejects framing, names polish≠demand trap, routes demand via probe-matrix→wizard-of-oz/fake-door; 03 trust-to-act → declines, names concierge-probe (real stakes), offers only the in-scope legibility slice. No fabrication, flattery, or scope-poach.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p>frontmatter <code>supersedes: none</code>. (Prose claims it &quot;absorbs/sharpens&quot; prototyping-pretotyping — a sibling-narrowing, not a formal supersede; see gotchas.)</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output is not reproducible by a generic PM prompt: the two-outputs-only contract (legibility vs decision-location), the 0.7-behaviour / 0.1-opinion evidence-ladder cap on demand/feel/trust, the mandatory &quot;does NOT tell you&quot; block, and sibling-probe routing are all Icarus-specific. Guidance is tabular (panel/signal bands, route table, template); no should-be-a-table-as-prose defect.</p>"
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
    "method",
    "artifact",
    "proprietary",
    "challenge",
    "evidence"
   ],
   "rows": [
    {
     "label": "01 Durian vendor-email→PO 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq incident-report 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier permit-check 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 mundane 3-screen signup 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Mentix \"whole product\" (weak) 5",
     "dims": [
      5,
      4,
      5,
      5,
      4
     ],
     "total": 23,
     "verdictRaw": "Y",
     "pass": false,
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
    "judge (did not author)"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Golden cases can only be shape-scored, not outcome-scored.</strong> The inputs provide no real operator run-log data, so the artifact's pauses/percentages are illustrative placeholders. <code>examples/sample.md</code> labels this (&quot;Illustrative fixture… not real client data&quot;); the golden files do not. Consider a one-line note in the goldens that eval artifacts are illustrative — real outcome validation is Gate 6.</li><li><strong>Legibility-% counting convention is implicit.</strong> The sample computes % by counting only <em>legibility gaps</em> against the total (decision-point pauses still count as &quot;followed&quot;): &quot;5 of 6 = 83%&quot; despite two paused panels. Neither the Method nor <code>template.md</code> states this. A fellow counting <em>every</em> pause would wrongly drop below the 80% band and redraw a legible flow. Fix: state the formula in the read-out — <code>legibility % = (panels not blocked by a legibility gap) / N</code>; decision-point pauses do not count against legibility.</li><li><strong><code>supersedes</code> prose vs frontmatter.</strong> Frontmatter says <code>supersedes: none</code>, but the closing prose says it &quot;absorbs/sharpens the paper/L1 rung of <code>prototyping-pretotyping</code>.&quot; That's a sibling-narrowing, not a formal supersede. Minor, but worth a word to avoid a future judge treating Gate 4 as applicable.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added illustrative-fixture label convention to sample (shape-scored, no real operator data); stated legibility-% formula (decision-point pauses do not count against it); clarified it narrows, not supersedes, prototyping-pretotyping.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — paper-sketch-probe</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Can you paper-test the factory-copilot workflow before we build it?&quot;</li><li>&quot;Let's sketch it — I want to see if a plant manager can follow the alert-to-action steps.&quot;</li><li>&quot;I want to run a paper prototype of the invoice-to-approval flow.&quot;</li><li>&quot;Run a sketch probe on the incident-report workflow.&quot;</li><li>&quot;Draw the 3-screen signup and check a new user can follow it.&quot; (mundane)</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Which probe should I run to test whether operators trust the alert?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></li><li>&quot;Fake the backend so users think the anomaly detection is live and see if they act.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a></li><li>&quot;I'll run it by hand myself for the first ten customers to see if they'll pay.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>see block below</td><td>judge (did not author)</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire carry paper/sketch + workflow-legibility framing; description tokens (&quot;paper test/sketch it/paper prototype/sketch probe/draw the flow and check they can follow&quot;) fire on each incl. the mundane signup (#5). All 3 must-not-fire caught by explicit exclusions: &quot;which probe&quot; → probe-matrix; &quot;fake the backend…see if they act&quot; → wizard-of-oz (demand); &quot;by hand…see if they'll pay&quot; → concierge (pay).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case table below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the one question (which workflow + legibility/decision claim), refuses to invent panels; 02 fidelity-for-demand → rejects framing, names polish≠demand trap, routes demand via probe-matrix→wizard-of-oz/fake-door; 03 trust-to-act → declines, names concierge-probe (real stakes), offers only the in-scope legibility slice. No fabrication, flattery, or scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>frontmatter <code>supersedes: none</code>. (Prose claims it &quot;absorbs/sharpens&quot; prototyping-pretotyping — a sibling-narrowing, not a formal supersede; see gotchas.)</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output is not reproducible by a generic PM prompt: the two-outputs-only contract (legibility vs decision-location), the 0.7-behaviour / 0.1-opinion evidence-ladder cap on demand/feel/trust, the mandatory &quot;does NOT tell you&quot; block, and sibling-probe routing are all Icarus-specific. Guidance is tabular (panel/signal bands, route table, template); no should-be-a-table-as-prose defect.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (dims: method / artifact / proprietary / challenge / evidence)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total /25</th><th>Pass?</th></tr></thead><tbody><tr><td>01 Durian vendor-email→PO</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>Y</td></tr><tr><td>02 Azraq incident-report</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Barrier permit-check</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 mundane 3-screen signup</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>05 Mentix &quot;whole product&quot; (weak)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>4</td><td>23</td><td>Y</td></tr></tbody></table></div>\n<p>Notes per case:</p>\n<ul><li><strong>01</strong> — Drew 7 panels (email→parse→review→<strong>ambiguous line item (exception)</strong>→catalogue check→approve→issued). Legibility ≈86% (1 legibility gap at the parse panel, resolves by showing the raw email side-by-side); decision isolated to the ambiguous-line-item panel, needing off-page catalogue/prior-order judgment. Demand/pay refused (opinion 0.1). No auto_fail.</li><li><strong>02</strong> — 6 panels; decision correctly located at the &quot;flag the risk call&quot; panel; explicitly warns the contested-data-point panel could be a <em>second</em> decision point (&gt;2 = job not decomposed) and resists automating panels 1–4 before the decision panel is isolated.</li><li><strong>03</strong> — Scope boundary held: reports legibility only; decision at the stale/shadow-permit panel; &quot;does NOT tell you&quot; block routes trust-to-act to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>. Did NOT claim trust or safety-behaviour proven.</li><li><strong>04</strong> — Under-5 panels handled honestly (&quot;a legibility check on a short flow, not a workflow probe&quot;); did NOT manufacture a decision panel; capped signup intent at opinion 0.1 and flagged &quot;wrong probe&quot; if a demand read was expected. This is the strongest discriminator against generic PM output.</li><li><strong>05</strong> — Correctly invoked the over-9 band, refused to draw the whole product, and narrowed to one slice (shift-handover) as the smallest honest next step. Artifact scored 4 because the correct deliverable is a challenge + narrowing, not a filled template (filling it would have been the failure); evidence 4 as evidence-tagging is lighter in a refusal. No fabricated sketch.</li></ul>\n<p>No <code>auto_fail</code> triggered on any case (no numbers/quotes passed off as real input, no flattery, no scope-poach, not generic boilerplate). Run-log/percentage values in cases 01–03 are illustrative placeholders (as in <code>examples/sample.md</code>), correctly evidence-tagged — see gotcha 1.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Golden cases can only be shape-scored, not outcome-scored.</strong> The inputs provide no real operator run-log data, so the artifact's pauses/percentages are illustrative placeholders. <code>examples/sample.md</code> labels this (&quot;Illustrative fixture… not real client data&quot;); the golden files do not. Consider a one-line note in the goldens that eval artifacts are illustrative — real outcome validation is Gate 6.</li><li><strong>Legibility-% counting convention is implicit.</strong> The sample computes % by counting only <em>legibility gaps</em> against the total (decision-point pauses still count as &quot;followed&quot;): &quot;5 of 6 = 83%&quot; despite two paused panels. Neither the Method nor <code>template.md</code> states this. A fellow counting <em>every</em> pause would wrongly drop below the 80% band and redraw a legible flow. Fix: state the formula in the read-out — <code>legibility % = (panels not blocked by a legibility gap) / N</code>; decision-point pauses do not count against legibility.</li><li><strong><code>supersedes</code> prose vs frontmatter.</strong> Frontmatter says <code>supersedes: none</code>, but the closing prose says it &quot;absorbs/sharpens the paper/L1 rung of <code>prototyping-pretotyping</code>.&quot; That's a sibling-narrowing, not a formal supersede. Minor, but worth a word to avoid a future judge treating Gate 4 as applicable.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added illustrative-fixture label convention to sample (shape-scored, no real operator data); stated legibility-% formula (decision-point pauses do not count against it); clarified it narrows, not supersedes, prototyping-pretotyping.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Durian Labs, first automated workflow",
    "venture": "Durian",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/paper-sketch-probe/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq, incident-report assembly",
    "venture": "Azraq",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/paper-sketch-probe/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence, permit-check workflow (in scope)",
    "venture": "Barrier",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/paper-sketch-probe/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "mundane: three-screen signup legibility",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/paper-sketch-probe/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix, shift-handover flow (weak input, must challenge)",
    "venture": "Mentix",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/paper-sketch-probe/tests/golden/05.md"
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
    "file": "skills/paper-sketch-probe/tests/adversarial/01.md"
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
    "file": "skills/paper-sketch-probe/tests/adversarial/02.md"
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
    "file": "skills/paper-sketch-probe/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/paper-sketch-probe/SKILL.md",
  "template": "skills/paper-sketch-probe/template.md",
  "example": "skills/paper-sketch-probe/examples/sample.md",
  "rubric": "skills/paper-sketch-probe/tests/rubric.json",
  "results": "skills/paper-sketch-probe/tests/RESULTS.md"
 }
});
