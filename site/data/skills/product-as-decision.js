window.ICARUS_SKILL("product-as-decision", {
 "name": "product-as-decision",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Forces one sentence: this product makes ONE decision, made by one named human, go from a costly before to a cheap after. It refuses feature language (&quot;a copilot&quot;, &quot;a dashboard&quot;, &quot;a platform&quot;) and refuses problem-narrative (&quot;users feel frustrated&quot;). It names the decision as a verb a person performs, names the single owner who stakes something on it, and quantifies the compression on one axis — time, effort, or autonomy — with the before number sourced and the after claim flagged as a hypothesis the build must earn. The output is a filled Compressed-Decision Statement (<a href=\"#/skill/product-as-decision\">template.md</a>). If there is no before→after compression, there is no product yet.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic prompt frames a product as a problem narrative — persona, pain, feeling — or as a feature list. Both let the fellow smuggle in the answer before locating the question. Icarus says a product is neither: it is a single decision that a human makes today, made easier, faster, or automatic. So the artefact is not a story and not a spec — it is the decision itself plus its compression: what used to take six minutes now takes thirty seconds, or what a person decided unaided a machine now drafts for approval. Name the decision with a verb, quantify the before→after on one axis, and you have stated the product. If you cannot name the decision without a product noun, or cannot show a before→after, you have a feature in search of a problem, and the skill says so instead of dressing it up.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow has an idea and needs it stated as the one decision it changes, with the compression made explicit.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;What's the product here? What decision are we changing?&quot;</td><td>Yes</td><td>product-as-decision</td></tr><tr><td>&quot;Frame the problem — state this as a decision, not a feature.&quot;</td><td>Yes</td><td>product-as-decision</td></tr><tr><td>&quot;In one line, what are we changing for the user?&quot;</td><td>Yes</td><td>product-as-decision</td></tr><tr><td>&quot;Strip this to the primitive job — what's really being done?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></td></tr><tr><td>&quot;Map the workflow and price every step as it happens today.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></td></tr><tr><td>&quot;Score this problem across the 8 dimensions — go or no-go?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>&quot;Is the per-unit prize big enough to bother?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></td></tr><tr><td>&quot;Stress-test the whole idea across five questions.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr></tbody></table></div>\n<p>This skill states and compresses exactly one decision. It does not reduce the job to primitives, price the workflow, score the problem, or size the prize. It also absorbs the generic empathy problem-statement and beats it — see Related skills — so it does not route there.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the sheet in <a href=\"#/skill/product-as-decision\">template.md</a>. Do not narrate; fill the lines. Tag every empirical claim <code>[Fact]</code> (priced artefact or observed behaviour), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a guess or a not-yet-observed claim).</p>\n<p><strong>Step 1 — Name the decision, not the feature.</strong> State it with a judgment verb the human performs: <em>decides whether, picks which, approves, prioritises, sizes, diagnoses, releases.</em> Strike any product noun — dashboard, copilot, platform, tool, app, assistant, system, &quot;AI&quot;. A copilot is not a decision; ask which decision the copilot would change. If the fellow cannot name the decision, stop and ask. Invent none.</p>\n<p><strong>Step 2 — Name the one owner.</strong> One title, who makes this call today and stakes something on being wrong (budget, a safety sign-off, an SLA, their name). Not the user of the software — the owner of the call. Two owners means two products.</p>\n<p><strong>Step 3 — Pick the single moving axis.</strong> Exactly one. Time (same decision, faster), effort (same decision, less human work to reach it), or autonomy (the call moves up the ladder). If two axes seem to move, the dominant one is the product; note the other and drop it from the statement.</p>\n<p><strong>Step 4 — State before → after, quantified, sourced.</strong> Before is the cost of the decision today — minutes, pages read, or a rung on the autonomy ladder — and it must sit on behaviour or money, not opinion (see Evidence standard). The after is what the product claims, and its value comes from the fellow's own stated target (&quot;we think we can cut it to X&quot;); where the fellow gives none, label it an illustrative target and never silently mint a specific figure a careless reader could mistake for a commitment. Mark the after <code>[Hypothesis]</code>: it is a claim the build must earn, never a fact at framing time.</p>\n<p><strong>Step 5 — Place before and after on the autonomy ladder.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Who decides</th></tr></thead><tbody><tr><td>L0</td><td>Human decides unaided</td></tr><tr><td>L1</td><td>Machine surfaces the inputs; human decides</td></tr><tr><td>L2</td><td>Machine drafts the decision; human approves each one</td></tr><tr><td>L3</td><td>Machine decides; human audits a sample</td></tr><tr><td>L4</td><td>Machine decides; no human in the loop</td></tr></tbody></table></div>\n<p>Name before-L and after-L. State any liability or regulatory reason the after cannot climb higher (a signed, liable human caps the ladder — that is a finding, not a failure).</p>\n<p><strong>Step 6 — Compression band.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Ratio on the moving axis / ladder jump</th><th>Band</th><th>Read</th></tr></thead><tbody><tr><td>= 1×, or interface-only change</td><td>No compression</td><td>Not a product. You renamed a feature. Reframe or kill.</td></tr><tr><td>&lt; 2×</td><td>Marginal</td><td>A nicer way to make the same call. Weak as a standalone wedge.</td></tr><tr><td>2–10×</td><td>Step change</td><td>Real compression. A wedge if the decision recurs and the outcome is paid for.</td></tr><tr><td>≥ 10×, or a ladder jump of ≥ 2 rungs</td><td>Order of magnitude</td><td>The Icarus target. The decision's economics change, not just its speed.</td></tr></tbody></table></div>\n<p><strong>Step 7 — Downstream.</strong> One line: what money moves or what behaviour changes once this decision is compressed. If nothing downstream moves, a fast decision is a party trick.</p>\n<p><strong>Step 8 — Write the one-line statement.</strong> <code>[Owner] decides [the decision] in [after] instead of [before] — a [axis] compression of ___× (L_→L_).</code></p>\n<p><strong>Kill line: a statement that names a feature where a decision belongs, or shows no quantified before→after on a single named axis, is an auto-fail.</strong> The decision plus its compression is the product. No compression, no product.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>The before number is where fellows flatter themselves. It must sit on behaviour or money, weighted by the evidence ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal for the &quot;before&quot; cost</th><th>Ladder weight</th></tr></thead><tbody><tr><td>An invoice / rate card / price paid for the decision (money moved)</td><td>1.0</td></tr><tr><td>The decision step timed directly in a real workflow (behaviour observed)</td><td>0.7</td></tr><tr><td>A priced artefact the decision produces, shown but not transacted</td><td>0.5</td></tr><tr><td>&quot;It takes about six minutes&quot; (verbal commitment)</td><td>0.3</td></tr><tr><td>The fellow's opinion of how long it takes</td><td>0.1</td></tr></tbody></table></div>\n<p>If the only input for the before is opinion (0.1), the skill declares the input <strong>not ready</strong> and names the cheapest way to get the real number: time the decision step once, or pull one artefact. The after is always a <code>[Hypothesis]</code> — you cannot mark the compression <code>[Fact]</code> before a probe shows a human reaching the same or better call in the claimed after-time. Promoting the after to a fact is the auto-fail this standard exists to catch.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Feature smuggling.</strong> &quot;The product is an AI copilot for factory managers&quot; names the software, not the decision. Copilot for <em>which</em> decision? Strike the noun; recover the verb. If no verb survives, there is no product to state.</li><li><strong>Compressing the artefact, not the decision.</strong> Making the report faster to write is not the same as making the decision the report drives faster or better. Frame the decision, not the deliverable. (Its per-unit prize is <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>'s job, not this skill's.)</li><li><strong>The after marked as a fact.</strong> The compression is a hypothesis until observed. A 12× claim at framing time is a <code>[Hypothesis]</code>, never a <code>[Fact]</code>. If the ranked list makes the owner slower or less accurate, the compression is negative and the product does not exist.</li><li><strong>Two decisions wearing one coat.</strong> An &quot;and&quot; in the decision line means two products. Pick the wedge decision; park the other explicitly. Do not average them into one blurry statement.</li><li><strong>Interface change dressed as compression.</strong> A new UI over the same decision at the same speed is 1× — no compression. Prettier is not faster. The band exists to catch this.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/product-as-decision\">examples/sample.md</a> — Mentix, worked end to end: a shift supervisor's alert-triage decision compressed from ~6 min to ~30 s (12×, autonomy held at L1 because the supervisor still owns every intervention), with the after flagged as the hypothesis the probe must earn.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> — reduces the job to information moved / decisions made / liability transferred, deleting every tool and role name. Run it to find the primitive; run this to pick and compress the one decision. Different altitude, not a substitute.</li><li><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> — maps and prices the whole workflow; this names one decision inside it and its compression. Use that for cost-per-step, this for the decision.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — scores the problem on 8 dimensions; the compressed decision is one input to that gate, not the gate.</li><li><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> — sizes the per-unit prize; this frames the decision the prize sits on.</li><li>Absorbs <code>discovery/problem-statement</code> (the generic empathy narrative: I am / trying to / but / because / makes me feel). It beats it by refusing feelings and features as the answer and forcing a decision plus a quantified before→after — a testable claim, not a story. <code>supersedes: none</code>: problem-statement lives outside this module; this replaces its role inside Icarus without deleting it.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Compressed-Decision Statement — fill-in</h1>\n<p>One product = one decision, compressed. Fill every line. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Two auto-fails: (a) a feature named where a decision belongs; (b) no quantified before→after on a single named axis.</p>\n<h2>0. The idea, as the fellow said it</h2>\n<blockquote><p>[paste the fellow's own words — feature/tool language stays here and NOWHERE else below]</p></blockquote>\n<h2>1. The decision (not the feature)</h2>\n<ul><li><strong>A human decides:</strong> [judgment verb — decides whether / picks which / approves / prioritises / sizes / diagnoses / releases ...]</li><li>Feature-ban check — strike any of these if they crept into the line above: dashboard · copilot · platform · tool · app · portal · assistant · system · &quot;AI&quot;. A decision has a verb, not a product noun.</li><li>If two decisions appear (an &quot;and&quot;), pick the wedge one and park the other: [parked: __________]</li></ul>\n<h2>2. The decision-owner (exactly one)</h2>\n<ul><li><strong>Title:</strong> [one role that makes this call today]</li><li><strong>Stakes on being wrong:</strong> [budget / safety sign-off / SLA / their name]</li><li>Note: the owner of the call, not the user of the software.</li></ul>\n<h2>3. The moving axis (pick ONE)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Time — same decision, faster</li><li class=\"task\"><span class=\"box\"></span>Effort — same decision, less human work to reach it</li><li class=\"task\"><span class=\"box\"></span>Autonomy — the call moves up the ladder (who/what decides)</li></ul>\n<h2>4. Before → After (quantified, on that one axis)</h2>\n<ul><li><strong>Before:</strong> [X min / reads N pages / rung L_]  — source: [invoice · timed workflow · artefact · verbal · opinion]  <code>[Fact | Assumption]</code></li><li>Evidence-ladder weight: [1.0 money · 0.7 behaviour · 0.5 artefact · 0.3 verbal · 0.1 opinion]</li><li>If weight = 0.1 → <strong>STOP: input not ready.</strong> Cheapest real number: [time the decision step once / pull one artefact].</li><li><strong>After:</strong> [Y sec / reads 1 flagged line / rung L_]  <code>[Hypothesis]</code> — a claim the build must earn, not a fact yet.</li><li>After-source: the fellow's own stated target (&quot;we think we can cut it to X&quot;). If the fellow gives none, mark it an <em>illustrative</em> target — still <code>[Hypothesis]</code>, never a silently minted figure a reader could mistake for a commitment.</li><li><strong>Compression = Before ÷ After = ____×</strong>   (or ladder jump: L_ → L_)</li></ul>\n<h2>5. Autonomy ladder</h2>\n<p>L0 human decides unaided · L1 machine surfaces inputs, human decides · L2 machine drafts, human approves each · L3 machine decides, human audits a sample · L4 machine decides, no human.</p>\n<ul><li><strong>Before: L_  →  After: L_</strong></li><li>Cap: any liability/regulatory reason the after-rung cannot climb higher? [__________]</li></ul>\n<h2>6. Compression band</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Ratio / jump</th><th>Band</th><th>Read</th></tr></thead><tbody><tr><td>= 1× or interface-only</td><td>No compression</td><td>Not a product. Reframe or kill.</td></tr><tr><td>&lt; 2×</td><td>Marginal</td><td>A nicer way to make the same call.</td></tr><tr><td>2–10×</td><td>Step change</td><td>Real wedge if the decision recurs and the outcome is paid for.</td></tr><tr><td>≥ 10× or ladder jump ≥ 2</td><td>Order of magnitude</td><td>Economics change, not just speed.</td></tr></tbody></table></div>\n<ul><li><strong>This decision: ____× / L_→L_ → band: __________</strong></li></ul>\n<h2>7. Downstream — why the compression pays</h2>\n<ul><li>One line: what money moves or what behaviour changes once this decision is compressed. [__________]  <code>[Hypothesis | Assumption]</code></li></ul>\n<h2>8. The statement (one line — this is the product)</h2>\n<blockquote><p>[Owner] decides [the decision] in [after] instead of [before] — a [axis] compression of ____× (L_→L_).</p></blockquote>\n<h2>9. What would change this framing</h2>\n<ul><li>[the probe that would confirm or kill the after-claim / a timed workflow that revises the before / a liability finding that caps the after-rung]</li></ul>",
  "path": "skills/product-as-decision/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix, shift-supervisor alert triage</h1>\n<p>Fellow: <strong>Mentix</strong> (industrial AI, factory/plant operations). All numbers are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's pitch:</strong> &quot;We're building an AI copilot for factory managers that surfaces plant issues in real time.&quot;</p>\n<p>That is a feature. This skill recovers the decision underneath it and compresses it.</p>\n<h2>0. The idea, as the fellow said it</h2>\n<blockquote><p>&quot;An AI copilot for factory managers that surfaces plant issues in real time.&quot;</p></blockquote>\n<h2>1. The decision (not the feature)</h2>\n<ul><li><strong>A human decides:</strong> which line alerts to act on this shift, and which to ignore, before the next stoppage.</li><li>Feature-ban check: &quot;copilot&quot; and &quot;AI&quot; struck — they name the surface, not the call. The verb is <em>decides which to act on</em>.</li><li>Two decisions? No. &quot;Act on vs ignore&quot; is one triage call. (Setting alert thresholds is a separate, parked decision.)</li></ul>\n<h2>2. The decision-owner (exactly one)</h2>\n<ul><li><strong>Title:</strong> shift production supervisor.</li><li><strong>Stakes on being wrong:</strong> a missed alert becomes an unplanned line stoppage; a needless intervention stops a healthy line. Both hit the shift's output number, which the supervisor owns.</li></ul>\n<h2>3. The moving axis (pick one)</h2>\n<ul><li><strong>Time.</strong> Same triage call, reached faster. (Effort moves with it — fewer alerts read — but time is the dominant axis, so the statement uses time.)</li></ul>\n<h2>4. Before → After (quantified, on time)</h2>\n<ul><li><strong>Before:</strong> ~6 min/shift reading the full alert log (~30 alerts) to decide what to act on.  Source: timed workflow on the plant floor (behaviour, ladder 0.7).  <code>[Fact]</code> (observed) · rate/volume <code>[Assumption]</code></li><li><strong>After:</strong> ~30 s on a ranked exception shortlist.  <code>[Hypothesis]</code> — the build must earn this; unproven at framing.</li><li><strong>Compression = 6 min ÷ 30 s = 12×</strong></li></ul>\n<h2>5. Autonomy ladder</h2>\n<ul><li><strong>Before: L0</strong> — supervisor decides unaided, reading the raw log.</li><li><strong>After: L1</strong> — machine ranks and surfaces; supervisor still decides every intervention.</li><li>Cap: autonomy is deliberately held at L1. A wrong intervention has a safety and output cost the supervisor must own, so the machine does not get to decide. The product compresses the <em>time to decide</em>, not the <em>right to decide</em>.</li></ul>\n<h2>6. Compression band</h2>\n<ul><li>12× on time, ladder jump of 1 rung → <strong>Order of magnitude</strong> (the ≥10× arm). The triage decision's economics change even though autonomy barely moves.</li></ul>\n<h2>7. Downstream — why the compression pays</h2>\n<ul><li>If the ranked shortlist catches the same true positives faster, fewer alerts are missed per shift → fewer unplanned stoppages. One avoided stoppage/shift dwarfs the 6 minutes saved; the saved minutes are not the prize, the caught stoppage is.  <code>[Hypothesis]</code></li></ul>\n<h2>8. The statement (the product)</h2>\n<blockquote><p>A shift production supervisor decides which line alerts to act on this shift in ~30 seconds on a ranked exception shortlist, instead of ~6 minutes reading the full alert log — a 12× time compression (autonomy held at L1: the supervisor still owns every intervention).</p></blockquote>\n<h2>9. What would change this framing</h2>\n<ul><li>The whole product rests on the ~30 s <code>[Hypothesis]</code>. Mentix's next job is a probe: put a real supervisor in front of a ranked shortlist and time them reaching the same-or-better call. If they are slower, or miss true positives the raw log would have caught, the compression is negative and there is no product — only a copilot with nothing to compress. Do not let the &quot;copilot&quot; framing creep back and hide that test.</li></ul>",
  "path": "skills/product-as-decision/examples/sample.md"
 },
 "rubric": {
  "skill": "product-as-decision",
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
    "What's the product here?",
    "Frame the problem for me.",
    "What decision are we actually changing?",
    "State this as a decision, not a feature.",
    "In one line, what are we changing for the user?"
   ],
   "mustNotFire": [
    {
     "phrase": "Strip this down to the primitive job — what's really being done?",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "Map the workflow and tell me what each step costs today.",
     "sibling": "current-state-map",
     "local": true
    },
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description enumerates all 5 must-fire phrasings verbatim (&quot;what's the product here&quot;, &quot;frame the problem&quot;, &quot;what decision are we changing&quot;, &quot;state this as a decision&quot;, &quot;what are we actually changing for the user&quot;). All 3 must-not-fire are explicitly routed away in the NOT-clauses: primitives→job-in-primitives, price-the-workflow→current-state-map, 8-dimension go/no-go→problem-quality-scorecard. No leakage.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. All ≥21, no dimension &lt;4, no auto_fail tripped.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner: Method Step 1 (&quot;if the fellow cannot name the decision, stop and ask; invent none&quot;) yields the single unblocking question (which decision / which human), emits no statement/band/rung. 02 solution-in-disguise: &quot;Feature smuggling&quot; gotcha + Step 1 noun-strike name the trap (&quot;copilot for which decision?&quot;), reframe to the decision, refuse &quot;build a copilot&quot;, ask for current cost. 03 out-of-scope: When-NOT table + adversarial expectation align — declines the priced map, names current-state-map, offers to compress one decision, invents no step costs.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. Skill &quot;absorbs&quot; discovery/problem-statement inside the module but deliberately does not delete it; Gate 4 not applicable.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: it strikes the product nouns, forces a judgment verb, weights the before on the evidence ladder (0.7 timed behaviour, <span class=\"tag tag-fact\">Fact</span>), forces the after to <span class=\"tag tag-hypothesis\">Hypothesis</span>, places L0→L1 with a liability-based autonomy cap, and reads 12× against the compression band with an explicit negative-compression kill condition. A generic prompt returns persona/pain/solution narrative, not a decision + quantified compression. Guidance is properly tabularised (autonomy ladder, compression band, evidence ladder) — no table-as-prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses; not executable here.</p>"
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
     "label": "01 Mentix (12×, L0→L1) 5",
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
     "label": "02 Barrier hot-work (autonomy capped L2 by liability) 5",
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
     "label": "03 Azraq SLA data-rights (~12×, L0→L2) 5",
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
     "label": "04 Durian ticket-triage (autonomy axis, earned-rung) 5",
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
     "label": "05 mundane invoices (7.5× = step change, not OOM) 5",
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
  "gotchasSurfaced": "<ul><li><strong>The &quot;after&quot; value is frequently absent from the fellow's input</strong> (Golden 01 gives no 30 s; Golden 05 gives no 2 min), yet the Method needs an after to compute the compression ratio. The skill handles this correctly via mandatory <code>[Hypothesis]</code> tagging, and it does NOT trip the &quot;fabricated a number&quot; auto_fail (that guard targets asserted facts/citations, not a target the build must earn). Still, template Step 4 should say explicitly: <strong>the after target comes from the fellow's own claim (&quot;we think we can cut it to X&quot;); where the fellow gives none, label it an illustrative/assumed target, do not silently mint a specific figure.</strong> Otherwise a careless fellow can misread a minted after (30 s, 2 min) as a commitment rather than an unproven hypothesis. Minor; does not block graduation.</li><li>Sibling targets <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> and <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> are named in the description/routing but not yet present in the module folder (only <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> and <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> exist alongside). Trigger precision is unaffected (the NOT-clauses still correctly decline), but the &quot;go to X&quot; routes will dangle until those Wave skills land.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: template Step 4 and Method Step 4 now state the after value comes from the fellow's own stated target; where absent, it is labelled an illustrative `[Hypothesis]`, never a silently minted figure.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — product-as-decision</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What's the product here?&quot;</li><li>&quot;Frame the problem for me.&quot;</li><li>&quot;What decision are we actually changing?&quot;</li><li>&quot;State this as a decision, not a feature.&quot;</li><li>&quot;In one line, what are we changing for the user?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Strip this down to the primitive job — what's really being done?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></li><li>&quot;Map the workflow and tell me what each step costs today.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></li><li>&quot;Score this problem across the eight dimensions — go or no-go?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description enumerates all 5 must-fire phrasings verbatim (&quot;what's the product here&quot;, &quot;frame the problem&quot;, &quot;what decision are we changing&quot;, &quot;state this as a decision&quot;, &quot;what are we actually changing for the user&quot;). All 3 must-not-fire are explicitly routed away in the NOT-clauses: primitives→job-in-primitives, price-the-workflow→current-state-map, 8-dimension go/no-go→problem-quality-scorecard. No leakage.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. All ≥21, no dimension &lt;4, no auto_fail tripped.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: Method Step 1 (&quot;if the fellow cannot name the decision, stop and ask; invent none&quot;) yields the single unblocking question (which decision / which human), emits no statement/band/rung. 02 solution-in-disguise: &quot;Feature smuggling&quot; gotcha + Step 1 noun-strike name the trap (&quot;copilot for which decision?&quot;), reframe to the decision, refuse &quot;build a copilot&quot;, ask for current cost. 03 out-of-scope: When-NOT table + adversarial expectation align — declines the priced map, names current-state-map, offers to compress one decision, invents no step costs.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. Skill &quot;absorbs&quot; discovery/problem-statement inside the module but deliberately does not delete it; Gate 4 not applicable.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: it strikes the product nouns, forces a judgment verb, weights the before on the evidence ladder (0.7 timed behaviour, <span class=\"tag tag-fact\">Fact</span>), forces the after to <span class=\"tag tag-hypothesis\">Hypothesis</span>, places L0→L1 with a liability-based autonomy cap, and reads 12× against the compression band with an explicit negative-compression kill condition. A generic prompt returns persona/pain/solution narrative, not a decision + quantified compression. Guidance is properly tabularised (autonomy ladder, compression band, evidence ladder) — no table-as-prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses; not executable here.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass ≥21, no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix (12×, L0→L1)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>02 Barrier hot-work (autonomy capped L2 by liability)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Azraq SLA data-rights (~12×, L0→L2)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 Durian ticket-triage (autonomy axis, earned-rung)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>05 mundane invoices (7.5× = step change, not OOM)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr></tbody></table></div>\n<p>Notes per case:</p>\n<ul><li>01: Correctly recovers the triage verb, strikes &quot;copilot&quot;/&quot;AI&quot;, holds L1 with the intervention-liability cap, names the probe (time a real supervisor) and the negative-compression kill. Discriminating test passed.</li><li>02: The crux — after-rung correctly capped at <strong>L2</strong> because a signed, liable human owns the permit; &quot;automated permitting&quot; flagged as over-claiming the ladder. Before ~50 min derived from &quot;the better part of an hour&quot; is correctly tagged <span class=\"tag tag-assumption\">Assumption</span> (0.3) with an ask-to-time.</li><li>03: Compresses the <strong>decision</strong> (does the data-rights position hold), not the artefact (&quot;faster contract review&quot; avoided). ~2 hr held as verbal <span class=\"tag tag-assumption\">Assumption</span>, cheapest-real-number named.</li><li>04: Correctly selects <strong>autonomy</strong> as the moving axis (L0→L2/L3 ≥2-rung jump), and — critically — refuses to promote L2→L3 at framing time, calling it an earned (eval) move, and refuses L4. 90 s/ticket tagged <span class=\"tag tag-assumption\">Assumption</span>.</li><li>05: Honest calibration — 15÷2 = <strong>7.5× held as step change</strong>, explicitly NOT inflated to order-of-magnitude; L0→L1 named as a ranking aid; downstream cash-flow claim NOT manufactured (&quot;if collection timing doesn't move, this is 13 saved minutes and little else&quot;). This is the anti-flattery test and it passes.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>The &quot;after&quot; value is frequently absent from the fellow's input</strong> (Golden 01 gives no 30 s; Golden 05 gives no 2 min), yet the Method needs an after to compute the compression ratio. The skill handles this correctly via mandatory <code>[Hypothesis]</code> tagging, and it does NOT trip the &quot;fabricated a number&quot; auto_fail (that guard targets asserted facts/citations, not a target the build must earn). Still, template Step 4 should say explicitly: <strong>the after target comes from the fellow's own claim (&quot;we think we can cut it to X&quot;); where the fellow gives none, label it an illustrative/assumed target, do not silently mint a specific figure.</strong> Otherwise a careless fellow can misread a minted after (30 s, 2 min) as a commitment rather than an unproven hypothesis. Minor; does not block graduation.</li><li>Sibling targets <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> and <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> are named in the description/routing but not yet present in the module folder (only <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> and <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> exist alongside). Trigger precision is unaffected (the NOT-clauses still correctly decline), but the &quot;go to X&quot; routes will dangle until those Wave skills land.</li></ul>\n<h2>Refine run 2 — applied judge fixes: template Step 4 and Method Step 4 now state the after value comes from the fellow's own stated target; where absent, it is labelled an illustrative <code>[Hypothesis]</code>, never a silently minted figure.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix (seed): alert copilot → the triage decision, 12×",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;We're building an AI copilot for factory managers that surfaces plant issues in real time. What's the product here?&quot; On the floor, a supervisor spends ~6 min/shift reading ~30 alerts to decide what to act on.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Strikes the feature language (&quot;copilot&quot;, &quot;AI&quot;) and recovers the decision as a verb: the supervisor <strong>decides which line alerts to act on this shift</strong>.</li><li>One owner named (shift production supervisor) with real stakes (missed alert → stoppage; needless intervention → healthy line stopped).</li><li>Single moving axis chosen: <strong>time</strong>. Before ~6 min (sourced as a timed workflow, ladder 0.7, tagged <span class=\"tag tag-fact\">Fact</span> observed), after ~30 s tagged <strong><span class=\"tag tag-hypothesis\">Hypothesis</span></strong>.</li><li>Compression shown as a division: 6 min ÷ 30 s = <strong>12×</strong> → <strong>order of magnitude</strong> band.</li><li>Autonomy ladder placed: <strong>L0 → L1</strong>, with an explicit note that autonomy is held at L1 because the supervisor owns the intervention's safety/output cost.</li><li>Challenge: the 30 s after is unproven; names the probe (time a real supervisor on a ranked shortlist) and states that a slower or less accurate result means no compression and no product.</li><li>One-line statement produced.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Outputs &quot;an AI copilot that surfaces alerts&quot; as the product (feature, not decision), or shows no quantified before→after, or marks the 30 s after as a <span class=\"tag tag-fact\">Fact</span>.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence: hot-work permit → decision, autonomy capped at L2",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Frame this as a decision. A rig supervisor decides whether to issue a hot-work permit given the latest gas readings and the shift's field logs. Today they read ~40 pages of logs and readings per permit; it takes them the better part of an hour. We think we can cut that.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Decision named with a judgment verb: the rig supervisor <strong>decides whether to issue the hot-work permit</strong>. Not &quot;a permit app&quot;.</li><li>One owner (rig supervisor) with the stake made explicit: they sign the permit; a wrong &quot;issue&quot; is a safety and liability event.</li><li>Moving axis: <strong>effort</strong> (pages read to reach the call) with a time proxy — before ~40 pages / ~50 min, sourced from the described workflow (verbal-to-behaviour; if only &quot;the better part of an hour&quot; is offered, tag the before <span class=\"tag tag-assumption\">Assumption</span> at ladder 0.3 and ask to time one). After: reads one flagged exception line + current readings.</li><li>Autonomy ladder: before <strong>L0</strong>, after <strong>L2 at most</strong> (machine drafts the go/no-go, human approves each). The case MUST state the cap: a hot-work permit carries a liable, signed human decision, so the after-rung cannot reach L3/L4 no matter how good the model. That cap is a finding, not a failure.</li><li>Compression band shown on the effort ratio (e.g. 40 pages → 1 line, or ~50 min → a few min), with the after tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>Challenge: names that the real prize is fewer wrong permits, not saved minutes, and that autonomy is bounded by liability — so anyone pitching &quot;automated permitting&quot; is over-claiming the ladder.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Lets the after-rung climb to L3/L4 (machine decides) without naming the liability cap, or names a &quot;permitting tool&quot; as the product instead of the issue/deny decision, or invents a page count/time the input did not give without tagging it <span class=\"tag tag-assumption\">Assumption</span>.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq: SLA renewal → the data-rights decision",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;What decision are we changing? Before an operator renews a site SLA, someone on our side decides whether that site's data-rights position still holds. Right now an analyst re-reads the full contract plus the incident history — call it 2 hours — to make the call.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Decision named: an analyst <strong>decides whether the site's data-rights position still holds</strong> before renewal. Not &quot;a contract dashboard&quot;.</li><li>One owner (data-rights analyst) with stakes: sign off a position that later fails and the SLA renewal is exposed.</li><li>Moving axis: <strong>effort</strong> — before re-reads full contract + incident history (~2 hr), after reads one flagged clause-conflict + a risk line. Before tagged from the described workflow (<span class=\"tag tag-assumption\">Assumption</span> at 0.3 if only &quot;call it 2 hours&quot; is offered; skill should ask to time one to lift it to 0.7).</li><li>Autonomy: <strong>L0 → L2</strong> (machine drafts the holds/doesn't-hold position, analyst approves). Note whether a liability cap applies (a stated position that others rely on likely caps at L2/L3).</li><li>Compression shown (e.g. ~2 hr → ~10 min effort, ~12×) → order-of-magnitude band, after tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>Downstream line: the prize is catching a position that would have failed at renewal, not the saved hours.</li><li>Challenge: the ~2 hr is verbal; name the cheapest way to make it real (time one renewal review).</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Frames the product as &quot;faster contract review&quot; (compresses the artefact, not the decision), or presents the 2 hr before as a <span class=\"tag tag-fact\">Fact</span> with no source, or marks the after as a <span class=\"tag tag-fact\">Fact</span>.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs: first workflow → the ticket-triage decision",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;Our first automated workflow is support ticket handling. State it as a decision. Today a support lead reads each inbound ticket and decides whether it can be auto-resolved from the knowledge base or must be escalated to an engineer. About 200 tickets a day, ~90 seconds of reading each to make that call.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Decision named: the support lead <strong>decides, per ticket, auto-resolve-from-KB vs escalate-to-engineer</strong>. Not &quot;a triage tool&quot; or &quot;an AI support agent&quot;.</li><li>One owner (support lead) with the stake: a wrong auto-resolve ships a bad answer; a wrong escalate burns engineer time.</li><li>Moving axis: <strong>autonomy</strong> is the interesting one here — this is a candidate for a ladder jump, not just a time saving. Before <strong>L0</strong> (lead reads and decides each). After: <strong>L2</strong> (machine drafts the route, lead approves) or <strong>L3</strong> (machine routes, lead audits a sample) depending on the error tolerance. A ≥2-rung jump (L0→L2/L3) reads as <strong>order of magnitude</strong> on the ladder even before counting the ~90 s → seconds time saving.</li><li>The after rung tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>; the case should note that promoting L2→L3 is an earned move (an eval result), not a framing-time choice — routing autonomy forward on this skill's say-so would be premature.</li><li>Before volume/time sourced from the described workflow; per-ticket 90 s tagged <span class=\"tag tag-assumption\">Assumption</span> unless observed.</li><li>Challenge: the whole thing hinges on the auto-resolve accuracy the build must prove; a wrong auto-resolve at 200/day is the failure mode to size.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Jumps the after-rung to L4 (fully automated) at framing time, or names &quot;an AI support agent&quot; as the product instead of the auto-resolve-vs-escalate decision.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane: ops coordinator, which invoices to chase first",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Frame this as a decision. An ops coordinator decides, each morning, which overdue invoices to chase first. Today they sort a spreadsheet of ~120 overdue lines by hand — roughly 15 minutes — before they start calling. We want to speed that up.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Decision named: the ops coordinator <strong>decides which overdue invoices to chase first today</strong>. Not &quot;an invoice dashboard&quot;.</li><li>One owner (ops/AR coordinator); stake: chase the wrong ones first and cash comes in slower.</li><li>Moving axis: <strong>time</strong> — before ~15 min hand-sorting, after ~2 min working a pre-ranked chase-list. Before sourced from the described routine (verbal, 0.3; note it is cheap to time and lift to 0.7). After tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>Compression: 15 min ÷ 2 min = <strong>7.5×</strong> → <strong>step change</strong> band (not order of magnitude). The skill must NOT round it up or dress a mundane 7.5× as a breakthrough.</li><li>Autonomy: <strong>L0 → L1</strong> (machine ranks by likelihood-to-pay / value, coordinator still decides the call order). Honest note: this is a ranking aid, not an autonomy jump.</li><li>Downstream: the prize is only real if chasing in the ranked order actually pulls cash in sooner; if collection timing doesn't move, this is 13 saved minutes and little else. Say so plainly.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Inflates the 7.5× into &quot;order of magnitude&quot;, or manufactures a downstream cash-flow number the input never gave, or frames &quot;a nicer sorted spreadsheet&quot; (interface change) as the compression.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no decision, no owner, and no before→after here. The skill cannot state a Compressed-Decision Statement from this, and must not pretend to.</p>\n<ul><li>Must ask the ONE unblocking question: <strong>which single decision, made by which human, are you trying to change?</strong> (Optionally: and how is that decision made today?)</li><li>Must NOT invent a decision, an owner, a workflow, a time, or a compression to fill the gap.</li><li>Must NOT emit a statement, a band, or an autonomy rung from nothing.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: returns the one question (decision + owner), names it as the smallest thing that unblocks the framing, fabricates no specifics. FAIL: produces a decision statement, a before→after, or a band from the one-liner; invents any owner, number, or workflow.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our factory managers don't have an AI copilot. Frame that.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;No copilot&quot; is a missing feature, not a problem, and &quot;copilot&quot; is a product noun, not a decision. The skill must refuse the framing and reframe to the decision underneath.</p>\n<ul><li>Must name the trap: absence of a feature is not a problem; the feature is a proposed solution to a decision that has not been stated. A copilot for <em>which decision</em>?</li><li>Must reframe to the decision the copilot would change (e.g. which alerts a supervisor acts on, which quality holds pass/fail) and ask for that decision plus how it is made today.</li><li>Must refuse to output &quot;build an AI copilot&quot; as the product. The feature language belongs only in field 0 (the idea as said), nowhere in the statement.</li><li>Must invent no decision or numbers; it asks for them.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects &quot;no copilot&quot; as the problem, recovers the underlying decision as a verb, and asks for the decision + its current cost before stating anything — no fabricated specifics. FAIL: dutifully frames &quot;building a copilot&quot; as the product, or accepts the missing-feature as the problem, or invents the decision to move on.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Map our whole permit workflow and price every step — time, handoffs, loaded labour, delay, failure cost.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is a priced map of the entire workflow, not the naming and compression of one decision. The skill must decline and name the right sibling — it does not poach.</p>\n<ul><li>Must state that product-as-decision names and compresses ONE decision inside a workflow; it does not map or price the whole thing.</li><li>Must point to <strong><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></strong> for the full priced workflow (time · handoffs · loaded labour · delay · failure cost).</li><li>May offer, as a next step, to take one decision out of that map and compress it here — but must not produce the priced map itself.</li><li>Must NOT invent step costs or a workflow diagram.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the workflow-pricing request, names <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, and (optionally) offers to compress a single decision from it — no priced map, no invented costs. FAIL: produces a multi-step priced workflow, or attempts cost-per-step, or does the sibling's job.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-as-decision/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/product-as-decision/SKILL.md",
  "template": "skills/product-as-decision/template.md",
  "example": "skills/product-as-decision/examples/sample.md",
  "rubric": "skills/product-as-decision/tests/rubric.json",
  "results": "skills/product-as-decision/tests/RESULTS.md"
 }
});
