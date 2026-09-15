window.ICARUS_SKILL("guardrail-design", {
 "name": "guardrail-design",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;how do we stop it doing something bad?&quot; into a spec a build can enforce. The fellow brings the failure taxonomy, the chosen autonomy level, and the cost of one failure per mode (from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>). This skill places each mode on a cost-of-error × volume matrix, assigns a three-layer guardrail stack — rules in code, a confidence threshold, human sign-off — sized to the quadrant, derives the confidence threshold from the acceptable failure rate, and writes a sign-off trigger for every path where a high-cost failure could ship on low confidence. The output is the filled <a href=\"#/skill/guardrail-design\">template.md</a>. It refuses one guardrail applied to everything, and it refuses a felt confidence number.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A guardrail is not one thing you bolt on the end. It is three layers, each cheaper than the next, each sized to a single number: cost-of-error × volume. Rules in code catch the knowably-wrong for free and run on everything. A confidence threshold catches the uncertain — but only if the threshold is <em>derived</em> from the acceptable failure rate and calibrated against real outcomes, never a 0.8 that &quot;looks safe&quot;. Human sign-off is the most expensive layer, so it is spent only where a failure is costly enough to be worth a person's minute — and it must be spent there, because the one thing you can never do is let a catastrophic-cost action ship on a model's confidence alone. The move that a generic prompt never makes: match the mechanism to the quadrant, which means <em>adding</em> a human where cost is high and <em>removing</em> the human where cost is low.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when the eval-first spec exists (a failure taxonomy, an autonomy level, a cost-of-one-failure per mode) and the question is now what mechanism enforces it. This skill is the depth build of component 4 — validate &amp; guardrails — in the compound-system architecture. Trigger phrases: &quot;design the guardrails&quot;, &quot;when does a human sign off&quot;, &quot;how do we handle failures&quot;, &quot;what confidence threshold&quot;, &quot;where's the human in the loop&quot;.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;What acceptable failure rate per mode / which autonomy level L0–L4&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></td><td>That <em>derives</em> the rate and picks the level from cost-of-one-failure. This skill consumes both and builds the mechanism that holds them. Run it first; it hands this the taxonomy and the rates.</td></tr><tr><td>&quot;Design the whole AI system / the component pipeline / the effort split&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></td><td>That names component 4 exists. This designs what is inside it. Compose: the architecture says &quot;a guard sits here&quot;, this says &quot;here is the guard, layer by layer, sized to cost × volume&quot;.</td></tr><tr><td>&quot;We've held accuracy for a month — can we drop the human sign-off now&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></td><td>That promotes autonomy as an eval result, never by feel. This designs the guard at the <em>current</em> level; removing a layer as autonomy climbs is the flywheel's job, gated by a re-run of the eval set.</td></tr><tr><td>&quot;Structure the pilot / price it / what's the commercial success metric&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></td><td>Commercial, not correctness.</td></tr></tbody></table></div>\n<p>If no eval-first spec exists — no taxonomy, no cost-of-one-failure — do not invent them to fill the matrix. Ask the one question that unblocks it (what does one failure cost, and how often can it happen?) or route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. A guardrail sized against made-up costs is worse than none: it looks rigorous and guards nothing.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>Guardrail Design progress:\n- [ ] Step 1: Pull the inputs from eval-first-spec (taxonomy, level, cost, rate)\n- [ ] Step 2: Band each mode — cost-of-error × volume → quadrant → guardrail class\n- [ ] Step 3: Assign the three-layer stack per mode, in order, with a fail-mode\n- [ ] Step 4: Derive the confidence threshold from the acceptable rate + calibration\n- [ ] Step 5: Write a sign-off trigger for every high-cost / low-confidence path\n- [ ] Step 6: Cost the stack and feed it back to cost-per-outcome\n- [ ] Step 7: Run the kill line before returning</code></pre>\n<p><strong>Step 1 — pull the inputs.</strong> From <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>: the failure taxonomy (the named modes — Miss, False alarm, Confidently wrong, Wrong format, Too slow, Silent failure, plus any product-specific), the chosen autonomy level L0–L4, the cost-of-one-failure per mode, and the derived acceptable rate per mode. Tag each <code>[Fact]</code> / <code>[Assumption]</code>. If a mode has no cost-of-one-failure, its guardrail cannot be sized — send it back, do not guess.</p>\n<p><strong>Step 2 — band and place.</strong> Give each mode a cost band and a volume band.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Cost-of-error band</th><th>Test (loaded cost of one undetected failure)</th><th>Acceptable rate tends to</th></tr></thead><tbody><tr><td>Catastrophic</td><td>Irreversible: safety, regulatory breach, data loss, or worth many outcomes</td><td>→ 0</td></tr><tr><td>High</td><td>Reversible but expensive: remediation, lost deal, trust; worth &gt; one outcome</td><td>Tight</td></tr><tr><td>Low</td><td>A shrug: the user self-corrects; worth &lt; one outcome</td><td>Loose</td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Volume band</th><th>Test (the operational line, not an arbitrary count)</th></tr></thead><tbody><tr><td>Low</td><td>One reviewer can attend to <em>every</em> instance of this mode within its SLA without dropping the day job</td></tr><tr><td>High</td><td>Reviewing every instance is impossible or unaffordable; only the flagged subset gets a human</td></tr></tbody></table></div>\n<p>There is no Medium band. A mode that feels &quot;Medium&quot; rounds <strong>up</strong> to High for stack-sizing, never down: if you cannot review <em>every</em> instance within its SLA, it is High — it gets the confidence gate + exception review, not a promise of full per-item review you cannot keep.</p>\n<p>Place each mode on the matrix; read off its guardrail class:</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>Volume Low (reviewable)</th><th>Volume High (not fully reviewable)</th></tr></thead><tbody><tr><td><strong>Catastrophic</strong></td><td>Q1 — code hard-block on the knowable-bad + human sign-off on the action; confidence never gates alone; <strong>fail-safe</strong></td><td>Q2 — code hard-block + conservative confidence gate + human on flagged exceptions; monitor residual; <strong>fail-safe</strong></td></tr><tr><td><strong>High</strong></td><td>Q3 — confidence gate + human sign-off below τ; <strong>fail-safe</strong></td><td>Q4 — code rules + confidence gate, human on exceptions only, alert on rate breach; <strong>fail-safe</strong> on the action</td></tr><tr><td><strong>Low</strong></td><td>Q5 — confidence gate + log; no human; <strong>fail-open</strong></td><td>Q6 — code rules only; accept residual; monitor aggregate; no per-item human; <strong>fail-open</strong></td></tr></tbody></table></div>\n<p>Two laws fall out of the matrix. First: a Catastrophic or High mode may never rest on model confidence alone — it carries a code hard-block, a human sign-off, or both. Second: a Low-cost mode carries no per-item human review — a sign-off you cannot afford is one you will quietly stop doing. If your grid puts the same stack in every cell, you have not designed guardrails; you have picked a habit.</p>\n<p><strong>Step 3 — the three-layer stack.</strong> Every output passes the layers in order, cheapest first. The matrix decides which layers are <em>active</em> for each mode; layer 1 always runs.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Layer</th><th>What it is</th><th>Catches</th><th>Cost</th></tr></thead><tbody><tr><td>1. Rules in code</td><td>Deterministic checks: schema, ranges, hard limits, denylist of banned actions, idempotency, rate limit, PII redaction, heartbeat</td><td>The knowably-wrong, and Silent failure</td><td>~free, runs on 100%</td></tr><tr><td>2. Confidence threshold</td><td>An independent score per output; below τ → escalate or refuse</td><td>The uncertain</td><td>cheap; needs calibration</td></tr><tr><td>3. Human sign-off</td><td>Route to a named person before the action commits</td><td>The costly-and-uncertain</td><td>expensive; ration it</td></tr></tbody></table></div>\n<p>Layer 2's score must be independent of the reasoning model — a judge, or a historical pass-rate lookup — matching the architecture rule that component 4 cannot be component 3b. A model grading its own output is not a guardrail. State a <strong>fail-mode</strong> for each mode: fail-safe (block / hold / refuse on timeout or missing signal) for Catastrophic and High; fail-open (ship and log) is permitted only for Low.</p>\n<p><strong>Step 4 — derive the threshold.</strong> τ is the confidence score above which output auto-proceeds. It is derived, not chosen:</p>\n<blockquote><p>Set τ = the lowest score whose calibration bucket (and every bucket above it) shows a measured failure rate ≤ acceptable_rate(mode).</p></blockquote>\n<p>You need a calibration curve: bucket golden-case outputs by score, measure the actual pass rate in each bucket. Without that curve, τ is <code>[Hypothesis]</code>; the safe interim is to route the whole mode to human sign-off until the curve exists. A raw &quot;the model says 90%&quot; is opinion (0.1 on the ladder) — the Confidently-wrong mode is exactly the model being sure and wrong, so its self-report cannot be the guard against it.</p>\n<p><strong>Step 5 — the sign-off trigger.</strong> For every path that reaches human sign-off, fill a row: trigger (which mode × which confidence band), reviewer (one named role), SLA (how long they have), fail-mode (what happens on timeout). Every Catastrophic and High mode must have a trigger here, or the kill line fails.</p>\n<p><strong>Step 6 — cost the stack.</strong> flagged_volume × review_minutes × loaded_rate is a real line in cost-per-outcome. If the guardrail blows the budget from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, the honest outcomes are: tighten what gets flagged, lower the autonomy so fewer actions need guarding, or concede the wedge is not economic. Do not silently widen τ to make review affordable — that un-derives Step 4.</p>\n<p><strong>Step 7 — the kill line.</strong> Run the self-check at the foot of <a href=\"#/skill/guardrail-design\">template.md</a>.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. Here the ladder scores the two numbers the whole spec rests on: the <strong>cost-of-error</strong> and the <strong>volume</strong> per mode, and the <strong>confidence calibration</strong>. A cost-of-error argued from opinion (&quot;that would be really bad&quot;, 0.1) cannot size a guardrail; it needs an artefact or behaviour — a real incident, a regulation, a remediation invoice, a measured event rate. The confidence threshold is <code>[Fact]</code> only when a calibration curve backs it (behaviour, 0.7); a felt 0.8 is opinion and is flagged owed. Tag every cost, rate, volume, and threshold <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. A guardrail spec is done when every Catastrophic/High mode has a code block or a sign-off trigger, τ is derived not felt, and the stack's cost is written back into cost-per-outcome.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The uniform stack.</strong> &quot;Input validation + output validation + a human reviews it&quot; applied identically to every output. It wastes sign-off on the Low-cost high-volume modes — so in practice that review silently gets skipped — and under-guards the Catastrophic case, where a schema check is not a sign-off. The matrix exists to break this habit; a grid with one class in every cell is the auto-fail.</li><li><strong>Uncalibrated confidence.</strong> Treating the model's self-reported certainty as the threshold. LLM self-confidence is not calibrated and is highest on the Confidently-wrong mode. A real τ needs an independent score measured against golden-case outcomes. No calibration curve → no threshold, only a number; route to human until the curve exists.</li><li><strong>Sign-off that fails open.</strong> The human is named as the guard, but on timeout the action ships anyway &quot;so we don't block the user&quot;. On a Catastrophic or High mode that turns the guard into theatre. High cost fails safe — it holds — or it is not a guard.</li><li><strong>Rubber-stamp by over-flagging.</strong> Routing everything to a person does not make it safe; a reviewer facing 500 approvals a shift approves by reflex, which is the L2 rubber-stamp failure from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Over-flagging destroys the guard as surely as under-flagging. Size the flagged volume to what one reviewer can actually attend to within the SLA.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/guardrail-design\">examples/sample.md</a> — Barrier Intelligence's gas-safety alerting built as a guardrail spec: the counter-intuitive finding that for a safety product the risky auto-action is <em>suppression</em>, not alerting; a Miss placed Catastrophic × low-true-volume with a deterministic LEL hard-block that no confidence score may gate; a False alarm placed High × high-volume where a derived τ suppresses sensor noise but a code rule forbids auto-dismissing any soft anomaly in a manned zone; and a human sign-off, fail-safe, that a shift safety engineer must give before any potential hazard is permanently closed.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07, sibling) — derives the acceptable failure rate per mode, the autonomy level, and the cost-of-one-failure. This skill consumes all three; it does not re-derive them. Its golden cases are the calibration set that Step 4's threshold is measured against.</li><li><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (07, sibling) — names component 4 (validate &amp; guardrails) and the rule that it must be independent of the reasoning model. This skill is the depth build of that one component. The architecture says a guard sits there; this says what it is.</li><li><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08) — promotes autonomy as an eval result. When accuracy has been earned and a guard layer can come off, that decision is the flywheel's, gated by re-running the eval set — not this skill's, and never by feel.</li><li><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07, sibling) — the commercial contract. Guardrail cost lands in this skill's cost-per-outcome, which the term sheet prices against; keep the boundary.</li><li>Supersedes nothing. New skill; no prior guardrail spec exists in the pack to replace.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Guardrail Spec — &lt;product name&gt;</h1>\n<p><strong>Fellow:</strong> &lt;name&gt; · <strong>Date:</strong> &lt;date&gt; · <strong>Stage:</strong> commit-build v1 · <strong>Autonomy level (from eval-first-spec):</strong> &lt;L0–L4&gt;</p>\n<h2>A. Inputs from eval-first-spec</h2>\n<p>Do not fill the rest of this template until these exist. If any cost-of-one-failure is blank, that mode cannot be sized — route back to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Do not invent costs.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>Cost of one failure</th><th>Acceptable rate (derived)</th><th>Source rung</th></tr></thead><tbody><tr><td>&lt;e.g. Miss&gt;</td><td>&lt;e.g. loss of life / rig — effectively unbounded&gt; <code>[Assumption]</code></td><td>&lt;→ 0&gt;</td><td>&lt;artefact 0.5 / opinion 0.1&gt;</td></tr><tr><td>&lt;e.g. False alarm&gt;</td><td>&lt;e.g. crew stop 20 min × N&gt; <code>[Assumption]</code></td><td>&lt;e.g. ≤ 8%&gt;</td><td>&lt;rung&gt;</td></tr><tr><td>&lt;mode 3&gt;</td><td>...</td><td>...</td><td>...</td></tr></tbody></table></div>\n<p>Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1. A cost-of-error scored on opinion (0.1) cannot size a guardrail; push it to an incident, a regulation, or a measured rate.</p>\n<h2>B. Cost × volume matrix</h2>\n<p>Band each mode, then read off its class from the grid.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>Cost band (Cat/High/Low)</th><th>Volume band (Low/High)</th><th>Volume basis</th><th>Quadrant → class</th></tr></thead><tbody><tr><td>&lt;Miss&gt;</td><td>Catastrophic</td><td>Low (true hazards rare)</td><td>&lt;e.g. handful/yr&gt; <code>[Assumption]</code></td><td>Q1</td></tr><tr><td>&lt;False alarm&gt;</td><td>High</td><td>High (noise constant)</td><td>&lt;e.g. dozens/day&gt; <code>[Assumption]</code></td><td>Q4</td></tr><tr><td>&lt;mode 3&gt;</td><td>...</td><td>...</td><td>...</td><td>Q_</td></tr></tbody></table></div>\n<pre><code>                Volume Low (reviewable)          Volume High (not fully reviewable)\nCatastrophic    Q1 code block + sign-off,        Q2 code block + conservative τ +\n                confidence never gates,             human on flagged, monitor,\n                FAIL-SAFE                            FAIL-SAFE\nHigh            Q3 τ gate + sign-off below τ,     Q4 code rules + τ gate, human on\n                FAIL-SAFE                            exceptions, rate alarm, FAIL-SAFE\nLow             Q5 τ gate + log, no human,        Q6 code rules only, accept residual,\n                FAIL-OPEN                            monitor aggregate, FAIL-OPEN</code></pre>\n<p>Volume line: can one reviewer attend to <em>every</em> instance of this mode within its SLA? Yes → Low. No → High. Two laws: (1) a Catastrophic/High mode never rests on confidence alone; (2) a Low-cost mode carries no per-item human review. Same class in every row is a KILL.</p>\n<h2>C. Three-layer stack per mode</h2>\n<p>Layers run in order; layer 1 always runs. Mark which layers are active and the fail-mode.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>L1 rules in code (the deterministic check)</th><th>L2 confidence threshold (active? τ)</th><th>L3 human sign-off (active? trigger)</th><th>Fail-mode</th></tr></thead><tbody><tr><td>&lt;Miss&gt;</td><td>&lt;hard-limit block, e.g. reading &gt; LEL → fire unconditionally&gt;</td><td>no — never gate a catastrophe on a score</td><td>on the risky action</td><td>fail-safe</td></tr><tr><td>&lt;False alarm&gt;</td><td>&lt;de-dupe, cooldown, zone denylist&gt;</td><td>yes — τ = &lt;__&gt;</td><td>on flagged exceptions only</td><td>fail-safe on action</td></tr><tr><td>&lt;Low mode&gt;</td><td>&lt;schema/format&gt;</td><td>yes — τ = &lt;__&gt;</td><td>no</td><td>fail-open</td></tr></tbody></table></div>\n<p>L2's score must be independent of the reasoning model (a judge or a historical pass-rate lookup), not the model grading itself.</p>\n<h2>D. Confidence-threshold derivation</h2>\n<p>For each mode with L2 active. τ is derived, not chosen.</p>\n<blockquote><p>τ = lowest score whose calibration bucket, and every bucket above it, shows measured failure rate ≤ acceptable_rate(mode).</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Mode</th><th>acceptable_rate</th><th>Calibration source</th><th>Score bucket that clears it</th><th>τ</th><th>Rung</th></tr></thead><tbody><tr><td>&lt;False alarm&gt;</td><td>&lt;≤ 8%&gt;</td><td>&lt;golden set, N cases&gt;</td><td>&lt;≥ 0.86 bucket: 6% fail&gt;</td><td>&lt;0.86&gt; <code>[Fact]</code></td><td>behaviour 0.7</td></tr><tr><td>&lt;mode&gt;</td><td>...</td><td>&lt;none yet&gt;</td><td>—</td><td>&lt;owed&gt; <code>[Hypothesis]</code></td><td>opinion 0.1</td></tr></tbody></table></div>\n<p>No calibration curve → τ is <code>[Hypothesis]</code>; route the whole mode to human sign-off until the curve exists. Never ship a felt τ on a Catastrophic/High mode.</p>\n<h2>E. Human sign-off spec</h2>\n<p>Every Catastrophic and High mode must appear here, or the kill line fails.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Sign-off</th><th>Trigger (mode × confidence band)</th><th>Reviewer (one role)</th><th>SLA</th><th>Fail-mode on timeout</th></tr></thead><tbody><tr><td>&lt;Dismiss potential hazard&gt;</td><td>&lt;auto-dismiss soft anomaly in manned zone&gt;</td><td>&lt;shift safety engineer&gt;</td><td>&lt;5 min&gt;</td><td>fail-safe: alert stays open</td></tr><tr><td>&lt;sign-off 2&gt;</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table></div>\n<h2>F. Guardrail cost → cost-per-outcome</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Line</th><th>Value</th><th>Note</th></tr></thead><tbody><tr><td>Flagged volume (per period)</td><td>&lt;e.g. 30/day&gt; <code>[Assumption]</code></td><td>what actually reaches a human</td></tr><tr><td>Review minutes each</td><td>&lt;e.g. 3 min&gt;</td><td>one reviewer, one SLA</td></tr><tr><td>Loaded reviewer rate</td><td>&lt;e.g. $__/hr&gt; <code>[Assumption]</code></td><td></td></tr><tr><td>Guardrail cost per outcome</td><td>&lt;$__&gt;</td><td>add to eval-first-spec cost-per-outcome</td></tr><tr><td>Fits the budget?</td><td>yes / no</td><td>if no: tighten flagging, lower autonomy, or the wedge is not economic — do NOT widen τ to fit</td></tr></tbody></table></div>\n<h2>Kill line — self-check before returning</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Not one-size. The matrix (B) does not put the same class in every row. A single   uniform stack across all modes is an automatic KILL.</li><li class=\"task\"><span class=\"box\"></span>Every Catastrophic and High mode has a deterministic code block OR a human sign-off   trigger in (E) — never model confidence alone. A high-cost / low-confidence path with   no sign-off is an automatic KILL.</li><li class=\"task\"><span class=\"box\"></span>Every Catastrophic/High mode fails <strong>safe</strong>. No high-cost path fails open.</li><li class=\"task\"><span class=\"box\"></span>Every active τ (D) is derived from an acceptable rate against a calibration curve, or   is tagged <code>[Hypothesis]</code> and routed to human in the interim. No felt thresholds.</li><li class=\"task\"><span class=\"box\"></span>Low-cost modes carry no per-item human sign-off (that review is waste and will be   dropped).</li><li class=\"task\"><span class=\"box\"></span>L2's confidence score is independent of the reasoning model, not self-grading.</li><li class=\"task\"><span class=\"box\"></span>Guardrail cost (F) is written back into cost-per-outcome and fits the budget.</li><li class=\"task\"><span class=\"box\"></span>Every cost, volume, rate, and threshold is tagged <code>[Fact]</code>/<code>[Assumption]</code>/   <code>[Hypothesis]</code>. No number invented that the fellow did not provide.</li></ul>",
  "path": "skills/guardrail-design/template.md"
 },
 "example": {
  "html": "<h1>Guardrail Spec — Barrier Intelligence, gas-safety alerting</h1>\n<p><strong>Fellow:</strong> Barrier Intelligence · <strong>Date:</strong> 2026-07 · <strong>Stage:</strong> commit-build v1 · <strong>Autonomy level (from eval-first-spec):</strong> L1 (system raises alerts; a control-room operator acts on the physical world)</p>\n<blockquote><p>All numbers below are illustrative test-fixture values, tagged for source. None are real client data. The point is the shape of the reasoning, not the magnitudes.</p></blockquote>\n<p>The product ingests field sensor logs and permit data from a manned offshore platform and raises gas-safety alerts. The fellow arrived asking &quot;where do we put a human in the loop, and how do we stop it spamming the crew?&quot; — two questions the matrix answers differently.</p>\n<h2>The finding that reframes it</h2>\n<p>For a safety product the dangerous auto-action is not <em>alerting</em> — it is <em>suppression</em>. Raising a false alert costs a work-stoppage; suppressing a real one costs the platform. So the guardrail is not &quot;should a human approve each alert&quot; (there could be thousands). It is &quot;the system may never auto-dismiss a potential hazard without a code block or a human, and it may auto-alert freely.&quot; That inverts where the sign-off goes.</p>\n<h2>A. Inputs from eval-first-spec</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>Cost of one failure</th><th>Acceptable rate (derived)</th><th>Source rung</th></tr></thead><tbody><tr><td>Miss (real hazard not alerted)</td><td>Loss of life / rig — treat as unbounded <code>[Assumption]</code></td><td>→ 0</td><td>regulation + incident history, artefact 0.5</td></tr><tr><td>False alarm (alert on a non-hazard)</td><td>Crew stop ~20 min × 8 crew × loaded rate ≈ low $, but alert fatigue compounds into Misses <code>[Assumption]</code></td><td>≤ 8% of alerts</td><td>field log of past alerts, artefact 0.5</td></tr><tr><td>Silent failure (pipeline dies, stops evaluating)</td><td>Equivalent to a Miss across the whole platform — unbounded <code>[Assumption]</code></td><td>→ 0</td><td>reasoning <code>[Assumption]</code></td></tr><tr><td>Too slow (alert past the response deadline)</td><td>A late gas alert is a Miss — unbounded <code>[Assumption]</code></td><td>→ 0</td><td>permit response-time spec, artefact 0.5</td></tr></tbody></table></div>\n<h2>B. Cost × volume matrix</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>Cost band</th><th>Volume band</th><th>Volume basis</th><th>Quadrant → class</th></tr></thead><tbody><tr><td>Miss</td><td>Catastrophic</td><td>Low (true hazards ~handful/yr)</td><td>~4/yr on this platform <code>[Assumption]</code></td><td>Q1</td></tr><tr><td>False alarm</td><td>High (fatigue → Miss)</td><td>High (sensor noise constant)</td><td>~4,000 evals/hr, dozens of soft anomalies/day <code>[Assumption]</code></td><td>Q4</td></tr><tr><td>Silent failure</td><td>Catastrophic</td><td>Low (a pipeline either runs or it doesn't)</td><td>continuous <code>[Fact]</code> (it's a heartbeat)</td><td>Q1</td></tr><tr><td>Too slow</td><td>Catastrophic</td><td>High (every eval has a deadline)</td><td>~4,000 evals/hr <code>[Assumption]</code></td><td>Q2</td></tr></tbody></table></div>\n<pre><code>                Volume Low                        Volume High\nCatastrophic    Q1  Miss, Silent failure          Q2  Too slow\nHigh                                                Q4  False alarm\nLow             —                                  —</code></pre>\n<p>Four modes, three distinct classes. A single uniform stack would either drown the crew (human-approve every alert) or gate a catastrophe on a confidence score. Neither survives.</p>\n<h2>C. Three-layer stack per mode</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Failure mode</th><th>L1 rules in code</th><th>L2 confidence threshold</th><th>L3 human sign-off</th><th>Fail-mode</th></tr></thead><tbody><tr><td>Miss</td><td>Reading &gt; LEL hard limit → alert fires unconditionally, no model in the path</td><td>no — a catastrophe is never gated on a score</td><td>on any proposal to auto-dismiss a soft anomaly in a manned zone</td><td>fail-safe</td></tr><tr><td>False alarm</td><td>De-dupe + cooldown per sensor; zone denylist (never suppress in a manned high-consequence zone)</td><td>yes — τ suppresses soft-anomaly noise below the score</td><td>on flagged exceptions only (below τ in a manned zone)</td><td>fail-safe on the suppression</td></tr><tr><td>Silent failure</td><td>Heartbeat: no eval in 60 s → page on-call, mark platform &quot;unmonitored&quot;</td><td>no</td><td>on-call ack required</td><td>fail-safe (platform treated as at-risk)</td></tr><tr><td>Too slow</td><td>Hard deadline timer per eval; miss → escalate as if positive</td><td>no</td><td>operator ack</td><td>fail-safe (treated as a hazard)</td></tr></tbody></table></div>\n<p>L2's score is an independent anomaly-detector calibrated on labelled history, not the alerting model grading itself — matching the architecture rule that component 4 ≠ 3b.</p>\n<h2>D. Confidence-threshold derivation (False alarm only)</h2>\n<p>τ governs one decision only: whether a <em>soft</em> anomaly (pattern resembles a slow leak, no hard-limit breach) is suppressed as noise or raised. Because a suppressed soft anomaly can be a Miss, the acceptable rate that τ must clear is the Miss rate (→ 0), not the False-alarm rate. That forces τ conservative: almost anything ambiguous is raised, not suppressed.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Mode</th><th>acceptable_rate for the suppression</th><th>Calibration source</th><th>Bucket that clears it</th><th>τ</th><th>Rung</th></tr></thead><tbody><tr><td>False alarm (suppress soft anomaly)</td><td>Miss among suppressed → ~0</td><td>20 golden cases + 6 mo labelled soft anomalies</td><td>only the ≥ 0.97 bucket showed 0 later-confirmed hazards</td><td>0.97 <code>[Assumption]</code> (curve is illustrative)</td><td>behaviour 0.7</td></tr></tbody></table></div>\n<p>Reading: the system may auto-suppress a soft anomaly only when the independent detector scores ≥ 0.97 <em>and</em> the zone is unmanned. Everything else is raised or routed to sign-off. If the six-month curve did not exist, τ would be <code>[Hypothesis]</code> and every soft anomaly would go to the safety engineer until it did.</p>\n<h2>E. Human sign-off spec</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Sign-off</th><th>Trigger</th><th>Reviewer</th><th>SLA</th><th>Fail-mode on timeout</th></tr></thead><tbody><tr><td>Dismiss potential hazard</td><td>System proposes to auto-dismiss a soft anomaly in a manned high-consequence zone (below τ, or any zone denylist hit)</td><td>Shift safety engineer</td><td>5 min</td><td>fail-safe: alert stays open and visible</td></tr><tr><td>Unmonitored platform</td><td>Heartbeat miss → platform marked unmonitored</td><td>On-call engineer</td><td>2 min</td><td>fail-safe: crew told monitoring is down</td></tr></tbody></table></div>\n<p>No sign-off is placed on <em>raising</em> an alert — that path is cheap and fail-safe already. Sign-off is spent only on the one expensive, irreversible decision: closing a hazard.</p>\n<h2>F. Guardrail cost → cost-per-outcome</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Line</th><th>Value</th><th>Note</th></tr></thead><tbody><tr><td>Flagged volume</td><td>~30 dismissal reviews/day <code>[Assumption]</code></td><td>soft anomalies in manned zones below τ</td></tr><tr><td>Review minutes each</td><td>3 min</td><td>one safety engineer</td></tr><tr><td>Loaded reviewer rate</td><td>$95/hr <code>[Assumption]</code></td><td></td></tr><tr><td>Guardrail cost</td><td>~$142/day/platform <code>[Assumption]</code></td><td>≈ $0.036 per sensor-hour of coverage</td></tr><tr><td>Fits the budget?</td><td>yes</td><td>well under the value of one prevented stoppage, let alone one prevented Miss</td></tr></tbody></table></div>\n<p>If flagged volume rose to hundreds/day, the fix is a better independent detector (fewer soft anomalies below τ), not a looser τ — loosening τ trades review cost for Miss risk, which for a Catastrophic mode is not a trade Barrier may make.</p>\n<h2>Kill line — self-check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Not one-size — three classes across four modes.</li><li class=\"task\"><span class=\"box done\"></span>Every Catastrophic/High mode has a code block or a sign-off trigger; the Miss rests on   the LEL hard-limit, never on a score.</li><li class=\"task\"><span class=\"box done\"></span>Every Catastrophic/High mode fails safe; no high-cost path fails open.</li><li class=\"task\"><span class=\"box done\"></span>τ derived from the Miss acceptable rate against a labelled curve; would be <code>[Hypothesis]</code>\n<ul><li>human-routed without it.</li></ul></li><li class=\"task\"><span class=\"box done\"></span>No per-item human review on raising alerts (the cheap path).</li><li class=\"task\"><span class=\"box done\"></span>L2 score is an independent detector, not the alerting model self-grading.</li><li class=\"task\"><span class=\"box done\"></span>Guardrail cost written back to cost-per-outcome and fits.</li><li class=\"task\"><span class=\"box done\"></span>Every number tagged; none invented beyond what the fellow's field logs and permits imply.</li></ul>\n<h2>What the skill pushed back on</h2>\n<p>The fellow's opening ask — &quot;have a human approve every alert&quot; — is the uniform stack, and it fails twice: it is unaffordable at 4,000 evals/hr, so in practice the approval gets skipped, and it guards the wrong action (alerting is cheap; suppression is the risk). The skill declined the framing, moved the single human sign-off onto the dismissal decision, and put the Miss behind a deterministic hard-limit that no confidence score may override.</p>",
  "path": "skills/guardrail-design/examples/sample.md"
 },
 "rubric": {
  "skill": "guardrail-design",
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
    "Design the guardrails for our AI product.",
    "When does a human need to sign off on this?",
    "How should we handle failures / bad outputs?",
    "What confidence threshold should we auto-approve at?",
    "We can't let it do X wrong unsupervised — where do we put the human in the loop?"
   ],
   "mustNotFire": [
    {
     "phrase": "What acceptable failure rate should we accept per mode / which autonomy level L0–L4?",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "We've been accurate for a month — can we drop the human review now?\" (autonomy promotion)",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "How do we build the AI system / what's the component pipeline / effort split?",
     "sibling": "compound-system-architecture",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire map verbatim to description trigger phrases (&quot;design the guardrails&quot;, &quot;when does a human sign off&quot;, &quot;how do we handle failures / bad outputs&quot;, &quot;what confidence threshold ... auto-approve at&quot;, &quot;where do we put the human in the loop&quot;). All 3 must-not-fire are explicitly excluded in the closing &quot;Do NOT fire...&quot; clause naming eval-first-spec / compound-system-architecture / refine-flywheel.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>per-case table below; every case ≥21, no dim &lt;4, no auto_fail</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → fires then gates on missing inputs, asks the one question (cost×volume) / routes to eval-first-spec, invents nothing (SKILL &quot;When NOT&quot; + template §A). 02 review-everything → declines, names the uniform-stack trap + rubber-stamp + &quot;a blanket approval is not a code block&quot;, redirects per quadrant (reframe + Gotchas). 03 clean-month → declines, hands to refine-flywheel, refuses to silently redesign to higher autonomy (description exclusion + &quot;When NOT&quot; row).</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code></p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>G01 output rests on the cost×volume matrix (Q1–Q6), τ <em>derived</em> from a calibration curve vs the acceptable rate, the evidence ladder placing model self-report at 0.1, and the add-human-where-costly / remove-where-cheap reframe. A generic PM prompt (&quot;add review for risky cases, use a threshold&quot;) produces none of these; the reframe is load-bearing, not decoration. Guidance is table-first (matrix, stack, τ-derivation, sign-off, cost all as tables), not prose.</p>"
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
    "edge",
    "challenge",
    "evidence"
   ],
   "rows": [
    {
     "label": "G01 Mentix sign-off 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G02 Azraq downgrade 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G03 Durian mundane 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 \"auto-approve >0.8\" 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G05 \"one guardrail for both\" 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "PASS",
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
  "gotchasSurfaced": "<ul><li>LOW — Two-band volume vs &quot;Medium&quot;. Golden 01's root-cause mode is described &quot;Medium/High&quot; volume, but the matrix has only Low/High. The skill collapses Medium→High (Q4) correctly, but a one-line rule in Step 2 (&quot;Medium rounds up to High — if you cannot review <em>every</em> instance, it is High&quot;) would remove the hesitation.</li><li>LOW — description density. Trigger precision is perfect (5/0), but the <code>description</code> is long and packs the full output spec plus three negative-routing clauses; fine for firing, worth a trim only if brevity is later prioritised. No functional impact.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added the no-Medium-volume-band rule in Step 2 (a \"Medium\" mode rounds up to High for stack-sizing, never down).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — guardrail-design</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Design the guardrails for our AI product.&quot;</li><li>&quot;When does a human need to sign off on this?&quot;</li><li>&quot;How should we handle failures / bad outputs?&quot;</li><li>&quot;What confidence threshold should we auto-approve at?&quot;</li><li>&quot;We can't let it do X wrong unsupervised — where do we put the human in the loop?&quot; MUST NOT fire (3, name the sibling each belongs to):</li><li>&quot;What acceptable failure rate should we accept per mode / which autonomy level L0–L4?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></li><li>&quot;We've been accurate for a month — can we drop the human review now?&quot; (autonomy promotion) → belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></li><li>&quot;How do we build the AI system / what's the component pipeline / effort split?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire map verbatim to description trigger phrases (&quot;design the guardrails&quot;, &quot;when does a human sign off&quot;, &quot;how do we handle failures / bad outputs&quot;, &quot;what confidence threshold ... auto-approve at&quot;, &quot;where do we put the human in the loop&quot;). All 3 must-not-fire are explicitly excluded in the closing &quot;Do NOT fire...&quot; clause naming eval-first-spec / compound-system-architecture / refine-flywheel.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case table below; every case ≥21, no dim &lt;4, no auto_fail</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → fires then gates on missing inputs, asks the one question (cost×volume) / routes to eval-first-spec, invents nothing (SKILL &quot;When NOT&quot; + template §A). 02 review-everything → declines, names the uniform-stack trap + rubber-stamp + &quot;a blanket approval is not a code block&quot;, redirects per quadrant (reframe + Gotchas). 03 clean-month → declines, hands to refine-flywheel, refuses to silently redesign to higher autonomy (description exclusion + &quot;When NOT&quot; row).</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code></td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>G01 output rests on the cost×volume matrix (Q1–Q6), τ <em>derived</em> from a calibration curve vs the acceptable rate, the evidence ladder placing model self-report at 0.1, and the add-human-where-costly / remove-where-cheap reframe. A generic PM prompt (&quot;add review for risky cases, use a threshold&quot;) produces none of these; the reframe is load-bearing, not decoration. Guidance is table-first (matrix, stack, τ-derivation, sign-off, cost all as tables), not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (dimensions: method_fidelity / artifact_complete / proprietary_edge / challenge / evidence_standard)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>edge</th><th>challenge</th><th>evidence</th><th>total</th><th>pass</th></tr></thead><tbody><tr><td>G01 Mentix sign-off</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G02 Azraq downgrade</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>PASS</td></tr><tr><td>G03 Durian mundane</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G04 &quot;auto-approve &gt;0.8&quot;</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G05 &quot;one guardrail for both&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the marking (hard-marked, artifact/evidence docked one where the input band is genuinely soft, never fabricated up):</p>\n<ul><li>G01 — bands shutdown High×Low→Q3, reorder Low×High→Q6, root-cause High×(Med/High)→Q4, format Low×High→Q6; declines &quot;manager reviews everything&quot; as the uniform stack; sign-off only on shutdown + below-τ root-cause; acceptable rates absent → τ tagged <code>[Hypothesis]</code>, routed to human interim (correct). artifact 4: &quot;Medium&quot; volume for root-cause has no band — collapses to High, defensible but under-specified in the input.</li><li>G02 — isolates the <em>asymmetric</em> mode (downgrade ≠ upgrade); L1 code rule &quot;never auto-publish a downgrade of a previously-flagged risk&quot;, fail-safe; sign-off on every downgrade. Sharpest edge in the set. evidence 4: High-to-Catastrophic band left straddling, correctly <code>[Assumption]</code>.</li><li>G03 — the mundane test: <em>removes</em> the proposed per-ticket sign-off (Low×High→Q6), guards on aggregate rate not per-item, refuses to manufacture a catastrophe. artifact 4: single mode → thin matrix by nature.</li><li>G04 — refuses felt 0.8 on both grounds (shared τ across High+Low = uniform stack; 0.8 not derived); names calibration curve owed; places model self-report at 0.1; interim = route High mode to human. artifact 4: honest output is a critique + owed-curve, less a full A–F fill.</li><li>G05 — the canonical one-size KILL: Miss (Cat×Low→Q1) vs noisy tickets (Low×High→Q6) land in opposite corners; two distinct stacks; reframes &quot;simple = fewer components, not one guard for every cost&quot;. evidence 4: both costs <code>[Assumption]</code>, no higher rung available in the input.</li></ul>\n<p>No auto_fail triggered in any case: no invented numbers (the skill actively refuses to), no flattery, in-scope, not generic.</p>\n<h3>Kill-line verification (task-specified)</h3>\n<ul><li>Cost-of-error × volume matrix present, operational volume band defined (one reviewer / SLA), Q1–Q6 consistent with all golden expected shapes. ✓</li><li>Three-layer stack (rules in code → confidence threshold → human sign-off) sized per quadrant, layer 1 always on, L2 required independent of the reasoning model. ✓</li><li>Catastrophic/High never rests on model confidence alone (Step 2 Law 1 + kill-line item 2); Cat×High (Q2) still safe because the deterministic code block runs on 100%. ✓</li><li>Human-sign-off trigger mandatory for every high-cost/low-confidence path; fail-safe on timeout for Cat/High, fail-open only for Low. ✓</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas — judge did NOT edit SKILL.md)</h3>\n<ul><li>LOW — Two-band volume vs &quot;Medium&quot;. Golden 01's root-cause mode is described &quot;Medium/High&quot; volume, but the matrix has only Low/High. The skill collapses Medium→High (Q4) correctly, but a one-line rule in Step 2 (&quot;Medium rounds up to High — if you cannot review <em>every</em> instance, it is High&quot;) would remove the hesitation.</li><li>LOW — description density. Trigger precision is perfect (5/0), but the <code>description</code> is long and packs the full output spec plus three negative-routing clauses; fine for firing, worth a trim only if brevity is later prioritised. No functional impact.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added the no-Medium-volume-band rule in Step 2 (a &quot;Medium&quot; mode rounds up to High for stack-sizing, never down).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix: where does a human sign off on the copilot",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix has an eval-first spec for its factory-manager copilot. The taxonomy names four modes with costs: recommending a line <strong>shutdown</strong> wrongly (High — lost production, ~$40k/hr <code>[Assumption]</code>), recommending a <strong>reorder</strong> of the job queue wrongly (Low — the manager reshuffles, minutes lost), a <strong>Confidently-wrong</strong> root-cause label (High — sends the crew to the wrong machine), and a <strong>Wrong-format</strong> digest (Low). Autonomy is L1 (copilot drafts, manager acts). Fellow: &quot;Where does a human need to sign off? My instinct is the manager reviews everything the copilot says.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Places each mode on the matrix: shutdown recommendation = High × Low volume (shutdowns are rare) → Q3; reorder = Low × High → Q6; wrong root-cause = High × Medium/High → Q4; wrong-format = Low × High → Q6.</li><li>Declines &quot;reviews everything.&quot; Names it the uniform stack: on the Low-cost reorder and format modes a sign-off is waste and will be dropped in practice; the manager's attention should be rationed to the High-cost modes.</li><li>Puts an explicit human sign-off trigger only on the shutdown recommendation (and below-τ root-cause calls): trigger, reviewer (the shift manager), SLA, fail-safe on timeout (the shutdown is NOT auto-suggested / is held).</li><li>Low-cost modes get rules-in-code + a confidence log, no per-item human.</li><li>Tags every cost <code>[Fact]</code>/<code>[Assumption]</code>; notes the shutdown $/hr is the number that makes that mode High and worth a sign-off.</li><li>Does not invent an acceptable rate Mentix did not supply; if the shutdown mode has no cost-of-one-failure, routes back to eval-first-spec for it.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: failure handling for the risk-report generator",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq generates static data-centre risk reports from uptime and incident data. Eval-first spec in hand. The mode that scares the fellow: the generator <strong>downgrades</strong> a risk that a prior report had flagged (Confidently-wrong / Miss hybrid — the client reads &quot;resolved&quot; and stops mitigating; cost = an outage the client could have prevented, High-to-Catastrophic <code>[Assumption]</code>). Autonomy L1 (report drafted, analyst publishes). Fellow: &quot;How should we handle failures — what's the guardrail?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Isolates the asymmetric mode: a <em>downgrade</em> of a previously-flagged risk is not symmetric with an upgrade. Upgrading a risk is cheap (client over-mitigates); downgrading is where the cost lives. The guardrail is sized to the downgrade, not to &quot;the report&quot;.</li><li>Layer 1 code rule: the generator may never auto-publish a downgrade of a risk that a prior report flagged — deterministic, model-independent. Fail-safe: on any downgrade the report holds for sign-off.</li><li>Layer 3 human sign-off on every downgrade: trigger (risk level lower than the last report for the same asset), reviewer (the analyst), SLA, fail-safe on timeout (prior risk level stands / report does not publish).</li><li>Confidence threshold (Layer 2) only on the non-downgrade content, derived, not felt.</li><li>Places the mode: High/Catastrophic × Low volume (downgrades are rare) → Q1/Q3 → sign-off is affordable and mandatory.</li><li>Challenges any &quot;just add output validation&quot; framing that treats an up- and a down-move the same. Tags the cost <code>[Assumption]</code>; does not invent an outage figure Azraq did not give.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs: guardrails for auto-tagging internal support tickets (MUNDANE)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs' first workflow automates tagging inbound internal support tickets by team and topic so they route to the right queue. Eval-first spec exists: one mode really matters, <strong>Miss-route</strong> (wrong tag → ticket lands in the wrong queue), cost = a few minutes' delay while someone re-routes it (Low <code>[Assumption]</code>); volume is high (hundreds/day). Autonomy L2 (auto-tags, a human can override). Fellow, cautious: &quot;What guardrails do we need? Should a person approve each tag before it applies?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Bands the mode: Low cost × High volume → Q6. The correct guardrail is rules-in-code (schema: tag must be from the allowed set; a low-confidence tag routes to a default triage queue) + a confidence log + aggregate monitoring. Fail-open is acceptable here.</li><li>Actively <strong>removes</strong> the proposed human sign-off. A per-ticket human approval on a Low-cost high-volume mode is waste — it cannot be afforded at hundreds/day, so it will be skipped, and the failure it guards costs minutes. Names this as the &quot;remove the human where cost is low&quot; side of the reframe.</li><li>Sets a confidence threshold below which a ticket goes to the default triage queue rather than a guessed tag — cheap escalation, no person needed. τ derived against the acceptable miss-route rate, not felt.</li><li>Adds a monitor: alert if the aggregate miss-route rate breaches the acceptable rate over a window — the guard for a high-volume mode is the <em>rate</em>, not per-item review.</li><li>Does not manufacture a catastrophe to justify heavier guardrails. The honest answer is a light one. Tags the cost <code>[Assumption]</code>.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "\"let's auto-approve anything above 0.8 confidence\"",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Mentix, mid-build: &quot;The copilot returns a confidence score. Let's just auto-approve anything above 0.8 and send the rest to the manager. 0.8 feels about right.&quot; One High-cost mode (wrong shutdown recommendation) and one Low-cost mode (queue reorder) share the same 0.8 gate in the proposal. Eval-first spec exists with acceptable rates per mode.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Refuses the felt 0.8 on two grounds. First, one threshold across a High-cost and a Low-cost mode is the uniform stack: the two modes have different acceptable rates, so they cannot share a τ. Second, 0.8 is chosen by feel; τ must be <em>derived</em> from the acceptable rate against a calibration curve.</li><li>Asks for (or names as owed) the calibration curve: bucket golden-case outputs by score, measure the actual pass rate per bucket. τ = the lowest bucket whose measured failure rate clears the mode's acceptable rate. The High-cost mode's τ will land far above 0.8; the Low-cost mode's may sit below it.</li><li>Flags that a model's <em>self-reported</em> 0.8 is opinion (0.1 on the ladder) and is least trustworthy on the Confidently-wrong mode — the score must come from an independent judge or a historical pass-rate lookup, not the model grading itself.</li><li>If no calibration data exists yet: τ is <code>[Hypothesis]</code>, and the safe interim is to route the High-cost mode entirely to human sign-off until the curve exists — not to ship 0.8.</li><li>Does not accept &quot;0.8 is standard.&quot; There is no standard τ; it is a function of this mode's cost and this system's calibration.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Azraq: \"one guardrail layer to catch everything\"",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq's incident-monitoring product has two live modes in the eval-first taxonomy: <strong>Miss a real incident</strong> (Catastrophic — client outage the system should have caught; true incidents rare, ~a few/quarter <code>[Assumption]</code>) and <strong>noisy false incident tickets</strong> (Low — an analyst closes a spurious ticket in seconds; volume high, dozens/day <code>[Assumption]</code>). Autonomy L2. Fellow: &quot;Can we design one guardrail layer that catches both, so the build stays simple?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Says no, and shows why with the matrix. Miss = Catastrophic × Low volume → Q1 (code block + human sign-off, confidence never gates). Noisy tickets = Low × High → Q6 (rules + log, no human). The two land in opposite corners; one mechanism cannot serve both without either drowning the analyst or gating a catastrophe on a score.</li><li>Gives the two different stacks explicitly: the Miss gets a deterministic code rule (e.g. known incident signatures / hard SLO breach → escalate unconditionally) plus a human sign-off before any auto-close of a candidate incident, fail-safe. The noisy tickets get a confidence threshold to auto-close low-signal tickets, monitored on aggregate rate, fail-open.</li><li>Frames &quot;keep the build simple&quot; honestly: simplicity is fewer components, not one guardrail for every cost. The code block for the Miss is itself simple and cheap; the cost of merging the two is a Miss shipped on confidence.</li><li>Challenges the premise directly (the request is the one-size KILL in disguise) without flattering it. Tags both costs and volumes <code>[Assumption]</code>.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/golden/05.md"
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
     "html": "<p>&quot;How should we handle failures in our AI product?&quot;</p>\n<p>No product named, no failure taxonomy, no cost-of-one-failure, no autonomy level.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do NOT produce a guardrail spec. There is nothing to size a guardrail against.</li><li>Ask the ONE question that unblocks it: what does a single failure cost, and how often can it happen? Those two numbers — cost-of-error and volume — are the whole input to the matrix.</li><li>Or return the smallest honest next step: run <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> first to get the failure taxonomy, the autonomy level, and the derived acceptable rate per mode; this skill consumes those and cannot manufacture them.</li><li>Invent no modes, costs, thresholds, or numbers to appear helpful. A guardrail sized against fabricated costs looks rigorous and guards nothing — that is worse than admitting the input is not ready.</li><li>Fail condition: returns a filled matrix or a plausible-looking stack with invented cost and volume figures.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The guardrail is simple: a human reviews and approves every single output before it ships. That's our failure handling — design it for us.&quot;</p>\n<p>A pre-chosen mechanism (review everything) dressed as a requirement.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do NOT accept the framing and lay out a review-everything workflow. &quot;A human reviews every output&quot; is a solution, not a guardrail spec — and it is usually the wrong one.</li><li>Reframe to the underlying job: which failure modes actually justify a human's minute, at what cost-of-error and what volume? Route the answer through the matrix.</li><li>Name the trap. Uniform human review fails three ways at once: it is unaffordable on any high-volume mode, so in practice the review is silently skipped; it induces the rubber-stamp (a reviewer facing hundreds of approvals approves by reflex — the L2 rubber- stamp failure); and a blanket approval step is not a code hard-block, so it can still under-guard the one Catastrophic mode that needs a deterministic gate, not a tired human.</li><li>Redirect: keep human sign-off for the High/Catastrophic × Low-volume modes; give the Low-cost modes rules-in-code + a confidence log and no human; put a deterministic block on the knowable-catastrophic.</li><li>Fail condition: designs the review-everything flow as asked, or praises it as thorough.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The copilot has run clean for a month — its pass rate on the golden set is holding above our bar. Can we drop the human sign-off now and let it act on its own?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline to make the call here. Removing a guard layer because accuracy has been <em>earned</em> is an autonomy-promotion decision, and that belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (section 08), which promotes autonomy as an eval result — re-running the whole eval set on the current model — never by feel or by a clean month.</li><li>Name the right skill explicitly and hand off: <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> for the promotion; this skill designs the guard at the <em>current</em> autonomy level, it does not decide when a level is outgrown.</li><li>Do not poach by silently redesigning the spec to L3/L4 minus the sign-off. That is exactly the &quot;promote by feel&quot; move the flywheel exists to prevent.</li><li>If useful, note the boundary: this skill can re-run to design the <em>lighter</em> guard for the higher level once <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> authorises the promotion — but the trigger to promote is not this skill's to pull.</li><li>Also out of scope and worth naming if asked adjacent: deriving the acceptable rate / picking the level is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</li><li>Fail condition: approves dropping the sign-off, or edits the spec to a higher autonomy level on the strength of &quot;a clean month.&quot;</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/guardrail-design/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/guardrail-design/SKILL.md",
  "template": "skills/guardrail-design/template.md",
  "example": "skills/guardrail-design/examples/sample.md",
  "rubric": "skills/guardrail-design/tests/rubric.json",
  "results": "skills/guardrail-design/tests/RESULTS.md"
 }
});
