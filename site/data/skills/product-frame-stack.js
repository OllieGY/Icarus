window.ICARUS_SKILL("product-frame-stack", {
 "name": "product-frame-stack",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns a <em>validated</em> problem into the full strategic frame in one pass: vision, strategy, product vision, North Star, OKRs, and a dual-track roadmap. It treats these seven layers as a load-bearing stack, not a flat canvas. The problem sits at the bottom and carries an evidence rung; every layer above inherits that rung as a confidence ceiling. If the problem has not cleared the Icarus gate, the stack does not get built — the skill stops at the floor and routes the fellow back to the gate. The output is a filled frame stack (<a href=\"#/skill/product-frame-stack\">template.md</a>) in which no roadmap item exists without a North Star to move, and no layer claims more certainty than the problem underneath it.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A business-model or recommendation canvas lays the boxes flat: fill vision, strategy, metrics, roadmap side by side, each on whatever evidence you happen to have, and you get a &quot;recommendation&quot; even if every box rests on opinion. Icarus refuses the flat canvas. The layers are stacked and structural. Two rules make them load-bearing. First, the <strong>gate</strong>: nothing enters the stack until the problem has passed <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (≥32/40) or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (PASS) — an unvalidated problem is a cracked foundation and the stack refuses to be poured on it. A PASS resting on behaviour or money (0.7+) unlocks a full-confidence stack; a <em>soft</em> PASS resting only on an artefact or a verbal &quot;yes&quot; (0.5/0.3) still enters, but the whole stack is stamped <code>[Assumption]</code> and the roadmap is labelled a bet, not a committed plan (this is the Layer-0 floor, below). Second, the <strong>ceiling</strong>: the whole stack is stamped with the problem's evidence rung, so a roadmap resting on a <code>[Assumption]</code>-grade problem is itself a bet, tagged as one, never a committed plan. The North Star is the joint between strategy and delivery, and it is mandatory: a roadmap with no North Star, or a roadmap item that ladders to nothing, is an auto-fail. Dual-track runs the whole height — discovery beside delivery at every horizon — because launch is when discovery gets cheap, not when it ends.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow holds ONE problem that has already cleared the gate and needs the strategy frame built on top of it, end to end.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Frame the business — vision to roadmap.&quot;</td><td>Yes</td><td>product-frame-stack</td></tr><tr><td>&quot;We passed the problem gate. What's the strategy and roadmap?&quot;</td><td>Yes</td><td>product-frame-stack</td></tr><tr><td>&quot;Give me the vision, North Star, and OKRs for this.&quot;</td><td>Yes</td><td>product-frame-stack</td></tr><tr><td>&quot;Score this problem across the eight dimensions — go or no-go?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (the gate this consumes)</td></tr><tr><td>&quot;Is this desirable / feasible / viable — should we build it?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/four-lenses-test\"><code>four-lenses-test</code></a></td></tr><tr><td>&quot;What metrics matter after launch? Is retention flattening?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></td></tr><tr><td>&quot;What should we actually build — invent the solution?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/invent-by-hand\"><code>invent-by-hand</code></a></td></tr><tr><td>&quot;State this as the one decision it changes.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a></td></tr></tbody></table></div>\n<p>This skill builds the frame; it does not validate the problem, score the four lenses, invent the solution, or run the post-launch metric tree. It absorbs the generic <code>business-model</code> and <code>recommendation-canvas</code> and beats them (see Related skills), so it does not route there.</p>\n<p>If the fellow hands a problem with no gate verdict, do not build the stack. Ask the one unblocking question — has this cleared <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>, and on what evidence? — or route there. Invent no vision, no metric, no roadmap to fill the gap.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the stack in <a href=\"#/skill/product-frame-stack\">template.md</a>, bottom to top. Do not narrate; fill the layers. Tag every empirical claim <code>[Fact]</code> (priced artefact or observed behaviour), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a directional or not-yet-observed claim). Vision, strategy, and product vision are claims about the future, so they are <code>[Hypothesis]</code> by nature — their <em>plausibility</em>, not their tag, is what inherits the ceiling.</p>\n<p>Copy this checklist:</p>\n<pre><code>Product Frame Stack progress:\n- [ ] Layer 0: Gate check — is the problem validated, and at what rung? (BLOCK if not)\n- [ ] Layer 1: Vision\n- [ ] Layer 2: Strategy (beachhead · wedge · won't-do · does-the-wedge-pay)\n- [ ] Layer 3: Product vision\n- [ ] Layer 4: North Star (one leading value metric + one guardrail)\n- [ ] Layer 5: OKRs (objective + 2–3 outcome KRs that move the North Star)\n- [ ] Layer 6: Roadmap — delivery outcomes beside discovery questions (Now/Next/Later)\n- [ ] Check: evidence-ceiling propagation (no layer tagged above the problem's rung)\n- [ ] Check: run the two kill-lines before returning</code></pre>\n<p><strong>Layer 0 — Gate check (the floor). Apply this first, in order:</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Problem status coming in</th><th>Evidence rung</th><th>Stack verdict</th></tr></thead><tbody><tr><td>PASS <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (≥32) or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (PASS), resting on money/behaviour</td><td>1.0 / 0.7</td><td>BUILD. Ceiling = that rung.</td></tr><tr><td>PASS, but resting only on an artefact or a verbal &quot;yes&quot;</td><td>0.5 / 0.3</td><td>BUILD, and stamp the whole stack <code>[Assumption]</code>: the roadmap is a bet, labelled as one. Name the test that would lift it.</td></tr><tr><td>REDESIGN, not-ready-to-score, or opinion-only (0.1)</td><td>0.1</td><td><strong>BLOCK.</strong> No stack. Return the cheapest test that would clear the gate.</td></tr><tr><td>Never gated</td><td>none</td><td><strong>BLOCK.</strong> Route to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> / <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> first.</td></tr></tbody></table></div>\n<p>A BLOCK ends the run. Do not build a vision on a problem the gate has not passed — that is the skill's first auto-fail.</p>\n<p><strong>Layer 1 — Vision.</strong> The world once this problem is gone at scale, in the customer's terms, 3–5 years out. Ban product nouns and feature-talk (see Gotchas). One or two sentences. It describes an outcome for the target, not a thing you shipped.</p>\n<p><strong>Layer 2 — Strategy.</strong> The one hard choice, in three lines plus a viability check:</p>\n<ul><li><strong>Beachhead:</strong> the single segment you win first (one named who, not &quot;the market&quot;).</li><li><strong>Wedge:</strong> the narrow first slice where you can be unambiguously best (hand off to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> if this is soft).</li><li><strong>Won't-do:</strong> at least one thing a generic team would chase that you are deliberately refusing. A strategy with no refusal is a wish list.</li><li><strong>Does the wedge pay?</strong> One line of unit economics — price the metric against the cost to serve one unit. This is the one bone worth keeping from a business-model canvas: revenue minus cost-to-serve at the wedge, not a nine-box tour. When the wedge's payoff is internal efficiency, not a sale — labour or time saved rather than revenue charged — measure value as the cost or time saved per unit against the cost to serve it, tagged <code>[Assumption]</code>. Do not fabricate a revenue or cash-flow story to force the line, and do not skip the check: an efficiency wedge that saves less than it costs to serve is as unviable as one that sells below cost. If it does not pay at the wedge, the strategy is unviable and the stack stops here.</li></ul>\n<p><strong>Layer 3 — Product vision.</strong> What the product IS when the strategy is executed: the decision it compresses, at scale, for the beachhead. Reuse the compressed-decision statement from <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> if one exists. Still not a feature list — the decision plus its compression.</p>\n<p><strong>Layer 4 — North Star.</strong> ONE metric. Quality bar, all four required:</p>\n<ul><li><strong>Single.</strong> One number, not a dashboard.</li><li><strong>Leading, not lagging.</strong> It predicts retained value. Revenue and total-users-ever are lagging; ban them here.</li><li><strong>Per-unit value.</strong> Value delivered per customer or per use, tied to the compressed decision — not a usage-volume vanity count.</li><li><strong>Measured, or <code>[Hypothesis]</code> with the instrumentation named.</strong> If you cannot yet count it, say what you will instrument to count it.</li><li><strong>Plus one guardrail metric</strong> so the North Star cannot be gamed (e.g. a value metric guarded by a quality/error metric that must not degrade). A North Star with no guardrail invites rubber-stamping.</li></ul>\n<p><strong>Layer 5 — OKRs.</strong> One Objective drawn straight from the strategy. Two or three Key Results, each an <strong>outcome</strong> (a move in behaviour, money, or the North Star), never an <strong>output</strong> (a thing shipped). &quot;Ship the flagging feature&quot; is not a KR; &quot;officers accept the flag without override on ≥X% of permits&quot; is. At least one KR must move the North Star directly.</p>\n<p><strong>Layer 6 — Roadmap (dual-track).</strong> Now / Next / Later, and each horizon has two tracks side by side:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Horizon</th><th>Delivery track (an outcome)</th><th>Discovery track (the riskiest open question)</th></tr></thead><tbody><tr><td>Now</td><td>the North-Star or KR move you are delivering</td><td>what must be learned before the <em>Next</em> item is safe to build</td></tr><tr><td>Next</td><td>the next outcome, conditional on Now's learning</td><td>the assumption that gates it</td></tr><tr><td>Later</td><td>the outcome that opens the moat</td><td>the question whose answer would kill or confirm it</td></tr></tbody></table></div>\n<p>No dated feature lists. Every delivery item must ladder to the North Star; an item that moves nothing gets cut or explicitly parked with the reason. The discovery track is not optional garnish — it is where the next horizon's risk gets retired.</p>\n<p><strong>Propagation check.</strong> No layer may be tagged above the problem's rung from Layer 0. If the problem is <code>[Assumption]</code>, the roadmap is <code>[Assumption]</code>. Stamp the whole stack with the ceiling rung and say so in one line.</p>\n<p><strong>Kill-lines (run both before returning):</strong></p>\n<ol><li>Does any layer rest on a problem the gate did not pass? If yes, the stack is void — return the BLOCK.</li><li>Is there a North Star, and does every roadmap item ladder to it? If no North Star, or an orphan roadmap item, fix it before returning.</li></ol>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. The gate bar is 0.7: the <em>problem</em> must rest on behaviour or money to unlock a full-confidence stack. A problem passed on an artefact or a verbal &quot;yes&quot; still builds a stack, but the entire stack is stamped <code>[Assumption]</code> and the roadmap is named a bet, not a plan. The North Star must be a measurable leading metric or an explicit <code>[Hypothesis]</code> with named instrumentation — never a lagging revenue figure dressed as a North Star. OKR key results are outcomes (behaviour/money/North-Star movement), so an output masquerading as a KR (&quot;shipped X&quot;) caps that KR at opinion and does not count. Tag every empirical claim. The confidence ceiling is structural: promoting any layer above the problem's rung is the inflation this standard exists to catch.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Building on an ungated problem.</strong> The most common failure: a fellow arrives excited with a problem and wants the whole frame, but the problem never cleared <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>. Every layer you build is then a hypothesis stacked on a hypothesis. Stop at Layer 0 and route to the gate. A beautiful roadmap on an unvalidated problem is the auto-fail, not the deliverable.</li><li><strong>Strategy that is really a solution.</strong> &quot;Our strategy is to build a mobile app / an AI platform&quot; names an artefact, not a choice. Strategy is beachhead + wedge + what you refuse. If the &quot;strategy&quot; line has no refusal and no beachhead, it is a solution in disguise — reframe it, do not fill the box.</li><li><strong>Lagging North Star.</strong> Revenue, total signups, and cumulative-users-ever feel like North Stars and are all lagging. They tell you the past, not whether value is landing now. Pick the leading per-unit value metric, and guard it so it cannot be gamed.</li><li><strong>Roadmap as a dated feature list.</strong> Now/Next/Later of shipped features is a Gantt chart, not a frame. The roadmap tracks outcomes (North-Star / KR moves) beside the discovery questions that gate them. An item that ladders to no North Star is cut.</li><li><strong>Ceiling inflation.</strong> A <code>[Fact]</code>-tagged roadmap on an <code>[Assumption]</code>-tagged problem is the tell. The stack cannot be more certain than its floor. If you catch a higher tag above a lower one, the higher one is wrong.</li><li><strong>Vision as a product spec.</strong> &quot;A world with a great copilot for every plant manager&quot; describes your product, not the customer's world. The vision is the outcome once the problem is gone; strike the product noun.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/product-frame-stack\">examples/sample.md</a> — Barrier Intelligence, worked end to end: a hot-work-permit safety problem that cleared <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> at 34/40 (behaviour-grade, 0.7) built into the full stack — vision, beachhead strategy with a won't-do and a unit-economics check, product vision, a leading North Star (verified hot-work permits per rig-week) guarded by a zero-false-clear metric, outcome OKRs, and a dual-track Now/Next/Later roadmap where the moat question sits on the Later discovery track. Every layer stamped at the 0.7 ceiling.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Absorbs <code>concept/business-model</code> and <code>concept/recommendation-canvas</code>. The business-model canvas lays nine operational boxes flat with no vision, no trade-off, no metric, and no validation gate — its own documentation admits these gaps. The recommendation canvas adds outcomes, a solution hypothesis, and success metrics, but stays a flat ten-box fill you complete once for exec sign-off; it never blocks, so every box can rest on opinion and still yield a &quot;recommendation&quot;. This skill keeps their useful bones — the business-outcome-beside-customer-outcome pairing, the &quot;solution is a hypothesis&quot; spine, the revenue-minus-cost viability check — and rebuilds them as a <em>stack with a gate and a ceiling</em>: an unvalidated problem cannot pass to strategy, and no layer outranks the evidence below it. <code>supersedes: none</code>: both canvases live outside this module; this replaces their role inside Icarus without deleting them.</p>\n<p>Consumes: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> and <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — their PASS verdict and evidence rung are this skill's Layer 0 input; without one, it blocks.</p>\n<p>Composes with: <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> (its compressed decision feeds the product-vision layer), <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (run it when the strategy's wedge is soft), <a class=\"skill-ref\" href=\"#/skill/four-lenses-test\"><code>four-lenses-test</code></a> (the desirable/feasible/viable score that can run beside this frame), <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (the post-launch metric tree and retention-flattening check that deepens the North Star this skill names).</p>"
  }
 ],
 "template": {
  "html": "<h1>Product Frame Stack — fill-in</h1>\n<p>One validated problem → the whole frame. Fill bottom to top. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Two auto-fails: (a) any layer built on a problem the gate did not pass; (b) a roadmap with no North Star, or a roadmap item that ladders to nothing.</p>\n<hr>\n<h2>Layer 0 — Gate check (the floor) — DO THIS FIRST</h2>\n<ul><li><strong>Problem, one sentence (a pain, not a feature):</strong> [__________]</li><li><strong>Gate cleared?</strong>\n<ul><li class=\"task\"><span class=\"box\"></span><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — score: ___/40 (PASS ≥32)</li><li class=\"task\"><span class=\"box\"></span><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — verdict: [PASS / REDESIGN / KILL]</li><li class=\"task\"><span class=\"box\"></span>Neither — <strong>STOP</strong> (see verdict table)</li></ul></li><li><strong>Problem's best evidence:</strong> [money · behaviour · artefact · verbal · opinion] → ladder rung ___ <code>[Fact | Assumption]</code></li></ul>\n<div class=\"table-wrap\"><table><thead><tr><th>Problem status</th><th>Rung</th><th>Verdict</th></tr></thead><tbody><tr><td>PASS on money/behaviour</td><td>1.0 / 0.7</td><td>BUILD — ceiling = this rung</td></tr><tr><td>PASS on artefact/verbal</td><td>0.5 / 0.3</td><td>BUILD — stamp whole stack <code>[Assumption]</code>; roadmap = a bet; name the test to lift it</td></tr><tr><td>REDESIGN / not-ready / opinion</td><td>0.1</td><td><strong>BLOCK</strong> — return the cheapest test; no stack</td></tr><tr><td>Never gated</td><td>none</td><td><strong>BLOCK</strong> — route to problem-quality-scorecard / so-what-stress-test</td></tr></tbody></table></div>\n<ul><li><strong>Verdict:</strong> [BUILD @ rung ___ / BLOCK — reason + route]</li><li>If BLOCK → stop here. Do not fill any layer below.</li></ul>\n<hr>\n<h2>Layer 1 — Vision</h2>\n<blockquote><p>The customer's world once this problem is gone at scale (3–5 yrs). No product nouns, no features. An outcome for the target.</p></blockquote>\n<ul><li>[__________]  <code>[Hypothesis]</code></li></ul>\n<h2>Layer 2 — Strategy (the one hard choice)</h2>\n<ul><li><strong>Beachhead (one named who, not &quot;the market&quot;):</strong> [__________]</li><li><strong>Wedge (narrow slice where you're unambiguously best):</strong> [__________]  → soft? hand to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></li><li><strong>Won't-do (what a generic team would chase and you refuse):</strong> [__________]</li><li><strong>Does the wedge pay?</strong> price of the metric ___ − cost to serve one unit ___ = [pays / does not pay]  <code>[Fact | Assumption]</code>\n<ul><li>If it does not pay at the wedge → the strategy is unviable; stop and reframe.</li></ul></li></ul>\n<h2>Layer 3 — Product vision</h2>\n<blockquote><p>What the product IS when the strategy is executed: the decision it compresses, at scale, for the beachhead. Reuse <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> if a compressed-decision statement exists. Not a feature list.</p></blockquote>\n<ul><li>[__________]  <code>[Hypothesis]</code></li></ul>\n<h2>Layer 4 — North Star (mandatory)</h2>\n<ul><li><strong>The metric (one, leading, per-unit value, tied to the compressed decision):</strong> [__________]</li><li>Bar check — all four:\n<ul><li class=\"task\"><span class=\"box\"></span>Single (one number, not a dashboard)</li><li class=\"task\"><span class=\"box\"></span>Leading, not lagging (ban revenue / total-users-ever here)</li><li class=\"task\"><span class=\"box\"></span>Per-unit value delivered (not a usage-volume vanity count)</li><li class=\"task\"><span class=\"box\"></span>Measured now, OR <code>[Hypothesis]</code> + instrumentation named: [__________]</li></ul></li><li><strong>Guardrail metric (so the North Star can't be gamed):</strong> [__________ must not degrade below ___]</li></ul>\n<h2>Layer 5 — OKRs</h2>\n<ul><li><strong>Objective (straight from strategy):</strong> [__________]</li><li><strong>KR1 (outcome — behaviour/money/North-Star move, NOT a shipped thing):</strong> [__________]  <code>[Fact | Assumption | Hypothesis]</code></li><li><strong>KR2 (outcome):</strong> [__________]</li><li><strong>KR3 (outcome, optional):</strong> [__________]</li><li>Check: at least one KR moves the North Star directly → [which: ___]</li></ul>\n<h2>Layer 6 — Roadmap (dual-track — delivery beside discovery)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Horizon</th><th>Delivery track — an OUTCOME (North-Star / KR move), never a dated feature</th><th>Discovery track — the riskiest open question this horizon must retire</th></tr></thead><tbody><tr><td><strong>Now</strong></td><td>[__________]</td><td>[__________]</td></tr><tr><td><strong>Next</strong></td><td>[__________] (conditional on Now's learning)</td><td>[__________]</td></tr><tr><td><strong>Later</strong></td><td>[__________] (opens the moat)</td><td>[__________]</td></tr></tbody></table></div>\n<ul><li>Ladder check: every delivery item moves the North Star? [yes / the orphan is: ___ → cut or park with reason]</li></ul>\n<hr>\n<h2>Propagation check (evidence ceiling)</h2>\n<ul><li>Problem rung = ___ (Layer 0). No layer above may be tagged higher.</li><li><strong>Whole stack stamped at:</strong> [<code>[Fact]</code> if 0.7+ / <code>[Assumption]</code> if 0.3–0.5 / blocked if 0.1]</li></ul>\n<h2>Kill-line self-check (both must pass)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>No layer rests on a problem the gate did not pass. (else: void → BLOCK)</li><li class=\"task\"><span class=\"box\"></span>A North Star exists AND every roadmap item ladders to it. (else: fix before returning)</li></ul>\n<h2>What would change this frame</h2>\n<ul><li>[the probe that would lift the problem's rung and de-bet the roadmap / the discovery answer that redirects the Next horizon / the wedge test that revises the strategy]</li></ul>",
  "path": "skills/product-frame-stack/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence, hot-work permit safety</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety). All numbers are illustrative test fixtures, not client data.</p>\n<p><strong>What arrives:</strong> the hot-work-permit problem has already cleared <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> at <strong>34/40</strong>, resting on behaviour-grade evidence (permit logs + timed reviews from two beachhead rigs, ladder 0.7). A compressed-decision statement from <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> also exists: <em>a permit officer decides whether a hot-work permit is safe to sign, in ~5 min against verified hazard controls instead of ~40 min re-reading isolation certs and gas logs.</em> This skill builds the frame on that floor.</p>\n<hr>\n<h2>Layer 0 — Gate check (the floor)</h2>\n<ul><li><strong>Problem:</strong> on offshore rigs, permit officers approve hot-work permits without a reliable check that every gas/isolation control is verified, so unsafe permits reach sign-off. <code>[Fact]</code> (permit logs)</li><li><strong>Gate cleared?</strong> <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> = <strong>34/40</strong> (PASS ≥32).</li><li><strong>Problem's best evidence:</strong> behaviour — permit logs + timed reviews on two rigs → rung <strong>0.7</strong> <code>[Fact]</code>.</li><li><strong>Verdict:</strong> <strong>BUILD @ rung 0.7.</strong> Ceiling for the whole stack is <code>[Fact]</code>/<code>[Hypothesis]</code> for observed/future claims; nothing above gets tagged higher than the problem.</li></ul>\n<h2>Layer 1 — Vision</h2>\n<blockquote><p>On every rig we serve, no hot-work job starts on a permit whose hazard controls were not verified — the &quot;cleared but unsafe&quot; permit stops existing.  <code>[Hypothesis]</code></p></blockquote>\n<p>(Outcome for the rig, not &quot;a great safety copilot&quot;. Product noun struck.)</p>\n<h2>Layer 2 — Strategy</h2>\n<ul><li><strong>Beachhead:</strong> the two offshore drilling rigs already running Barrier's pilot under one operator's HSE lead — not &quot;offshore oil &amp; gas&quot;.</li><li><strong>Wedge:</strong> hot-work permits specifically (the highest-consequence, most-checked permit class), not all permit-to-work at once.</li><li><strong>Won't-do:</strong> we refuse to build the general permit-to-work platform (cold work, working-at-height, confined space) until hot-work retention is proven. A generic team would chase permit breadth first; we refuse it.</li><li><strong>Does the wedge pay?</strong> price per rig ≈ [illustrative $X/rig-month] − cost to serve one rig (hosting + hazard-model upkeep + support) ≈ [$Y] → <strong>pays</strong> at 2 rigs if [X &gt; Y].  <code>[Assumption]</code> — grounded in the pilot's stated pricing, not yet an invoice, so flagged.</li></ul>\n<h2>Layer 3 — Product vision</h2>\n<blockquote><p>Barrier is the safety check a permit officer runs before signing a hot-work permit: it verifies every required gas and isolation control against live rig data and flags any unverified hazard before sign-off, compressing the officer's ~40-min manual cross-check to ~5 min while catching the controls a tired reader misses.  <code>[Hypothesis]</code></p></blockquote>\n<p>(The decision compressed, at scale for the beachhead — reused from <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a>, not a feature list.)</p>\n<h2>Layer 4 — North Star</h2>\n<ul><li><strong>The metric:</strong> <strong>verified hot-work permits per rig-week</strong> — permits the tool checked control-by-control and the officer then signed.</li><li>Bar check: single ✓ · leading (predicts the rig keeps trusting and using it) ✓ · per-unit value (each is one safely-enabled job) ✓ · measurable from the permit system now ✓.</li><li><strong>Guardrail:</strong> <strong>false-clear rate must stay at 0</strong> — a permit the tool cleared that later proved to have an unverified control. Without this guard, the North Star could be gamed by rubber-stamping; the guard makes &quot;more verified permits&quot; mean &quot;more genuinely safe permits&quot;.  <code>[Hypothesis]</code> until the first month of data.</li></ul>\n<h2>Layer 5 — OKRs</h2>\n<ul><li><strong>Objective:</strong> make Barrier the default safety check for hot-work permits on both beachhead rigs.</li><li><strong>KR1 (moves North Star):</strong> verified hot-work permits/rig-week rises from [pilot baseline] to [target] across both rigs.  <code>[Hypothesis]</code></li><li><strong>KR2 (behaviour):</strong> officers accept the tool's hazard flags without override on ≥[X]% of permits (a trust/tweak-time proxy).  <code>[Hypothesis]</code></li><li><strong>KR3 (money):</strong> both pilot rigs convert to a paid contract at [illustrative value].  <code>[Hypothesis]</code></li><li>Guard held: false-clear rate = 0 (KR2/KR3 are void if the guard breaks).</li><li>At least one KR moves the North Star directly → KR1. ✓ None is a shipped-feature output.</li></ul>\n<h2>Layer 6 — Roadmap (dual-track)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Horizon</th><th>Delivery track (outcome)</th><th>Discovery track (riskiest open question)</th></tr></thead><tbody><tr><td><strong>Now</strong></td><td>Get verified permits/rig-week to target on rigs A &amp; B; hold false-clear at 0.</td><td>Is officer <em>trust</em> the binding constraint, or gas-sensor <em>data quality</em>? (Watch overrides vs. sensor gaps.)</td></tr><tr><td><strong>Next</strong></td><td>Expand to a second high-consequence permit class <strong>only if</strong> the hot-work North Star flattens up (retention proven).</td><td>Does the hazard model transfer, or is a new permit class a new corpus to label?</td></tr><tr><td><strong>Later</strong></td><td>A cross-rig, multi-operator data-rights position (the moat).</td><td>Will operators grant cross-rig data rights? If not, the moat closes and Later is void.</td></tr></tbody></table></div>\n<ul><li>Ladder check: every delivery item moves verified-permits/rig-week or protects the guard. No orphan. ✓</li></ul>\n<hr>\n<h2>Propagation check (evidence ceiling)</h2>\n<ul><li>Problem rung = <strong>0.7</strong> (behaviour). Vision/strategy/product-vision are future claims → <code>[Hypothesis]</code> by nature, plausible at the 0.7 floor. OKR targets and the North Star are <code>[Hypothesis]</code> until the first month instruments them. Nothing is tagged <code>[Fact]</code> above the problem.</li><li><strong>Whole stack stamped at: 0.7 — a real, behaviour-backed frame, not yet a money-backed one.</strong> The single move that lifts it: KR3 (a signed paid contract) converts the floor to 1.0.</li></ul>\n<h2>Kill-line self-check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>No layer rests on an ungated problem — the problem cleared at 34/40.</li><li class=\"task\"><span class=\"box done\"></span>A North Star exists (verified permits/rig-week) and every roadmap item ladders to it or its guard.</li></ul>\n<h2>What would change this frame</h2>\n<ul><li>The whole strategy assumes hot-work is the right wedge. If Now-horizon discovery shows officers override flags because the sensor data is unreliable, the binding constraint is data quality, not the model — and the Next horizon should retire that before any expansion. And if operators will not grant cross-rig data rights, the Later moat closes; the frame would then need a different defensibility than data.</li></ul>",
  "path": "skills/product-frame-stack/examples/sample.md"
 },
 "rubric": {
  "skill": "product-frame-stack",
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
    "Frame the business — vision to roadmap.",
    "What's our strategy?",
    "We passed the problem gate — now what's the frame?",
    "Give me the vision, North Star, and OKRs for this.",
    "Turn this validated problem into a roadmap."
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Should we build this — is it desirable, feasible, viable?",
     "sibling": "four-lenses-test",
     "local": true
    },
    {
     "phrase": "What metrics matter after launch — is retention flattening?",
     "sibling": "metrics-that-matter",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description names all 5 fire phrasings verbatim/near-verbatim (&quot;frame the business&quot;, &quot;what's the strategy&quot;, &quot;vision to roadmap&quot;, &quot;give me the vision, North Star and OKRs&quot;, &quot;turn this validated problem into a roadmap&quot;). Explicit negative scoping — &quot;NOT the go/no-go … (problem-quality-scorecard)&quot;, &quot;NOT the desirable/feasible/viable score (four-lenses-test)&quot;, &quot;NOT the post-launch metric-tree … (metrics-that-matter)&quot; — cleanly repels all 3 must-not-fire siblings.</p>"
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
    "evidenceHtml": "<p>01 vague one-liner → asks the one unblocking question (which validated problem + gate status + evidence), invents nothing (When-NOT §). 02 solution-in-disguise → names the trap (&quot;mobile app&quot; is an artefact, not a choice; Gotcha &quot;Strategy that is really a solution&quot;), reframes Layer 2 to beachhead+wedge+won't-do, and re-runs Layer 0 on the unverified &quot;validated fine&quot; (demands verdict+rung). 03 out-of-scope score request → declines, routes to problem-quality-scorecard (+ so-what-stress-test), emits no /40. No fabrication, no flattery, no scope-poach.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. Absorbs business-model / recommendation-canvas but they live outside the module; Gate 4 not applicable.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could not come from a generic PM prompt: the Layer-0 gate that BLOCKS, the evidence-rung ceiling stamped across every layer (0.7 → whole stack <code>[Assumption]</code>/<code>[Hypothesis]</code>), the single move that lifts the floor to 1.0, the two kill-lines, dual-track roadmap with the moat on the Later discovery track, and the false-clear guardrail are all load-bearing, not decoration. Core decision logic (Layer-0 verdict, roadmap, North-Star bar) is tabular/checklist, not prose.</p>"
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
     "label": "01 Barrier (seed, 0.7 ceiling) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (soft PASS → whole stack [Assumption]) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Mentix (rejects lagging MRR North Star + output KRs) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 BLOCK (ungated → STOP at Layer 0) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 Durian (roadmap with no North Star → blocked) 5",
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
  "gotchasSurfaced": "<ul><li><strong>Gate-bar wording vs. Layer-0 row 2 tension (minor).</strong> The Icarus-reframe sentence says a problem enters the stack only after passing the gate &quot;on behaviour-or-money evidence&quot; (implying 0.7+), but the Layer-0 table row 2 admits a PASS resting only on artefact/verbal (0.5/0.3) and builds a <code>[Assumption]</code>-stamped stack (this is exactly Golden 02). Operational behaviour is unambiguous (table + Golden 02 govern), but the prose could be read as contradicting the table. Reconcile: a soft PASS on artefact/verbal still enters, but only as a labelled bet.</li><li><strong>&quot;Does the wedge pay?&quot; on an internal-efficiency wedge (minor).</strong> For value that is labour saved rather than a sale price (Golden 05: ~90 min/week hand-tagging, no external revenue), the &quot;price the metric − cost to serve one unit&quot; line is awkward — a fellow could be tempted to either fabricate a revenue/cash-flow story (auto_fail) or skip the check. The disciplined move (state time-value plainly, tag <code>[Assumption]</code>, invent no cash-flow) works, but the method doesn't spell out how the viability line applies when the wedge's payoff is time saved, not money charged.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: reconciled the reframe prose with the Layer-0 table (soft PASS on artefact/verbal enters but stamps the whole stack `[Assumption]`/bet), and extended \"does the wedge pay?\" to internal-efficiency wedges (measure cost/time saved per unit, tag `[Assumption]`, don't fabricate revenue, don't skip the check).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — product-frame-stack</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Frame the business — vision to roadmap.&quot;</li><li>&quot;What's our strategy?&quot;</li><li>&quot;We passed the problem gate — now what's the frame?&quot;</li><li>&quot;Give me the vision, North Star, and OKRs for this.&quot;</li><li>&quot;Turn this validated problem into a roadmap.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Score this problem across the eight dimensions — go or no-go?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Should we build this — is it desirable, feasible, viable?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/four-lenses-test\"><code>four-lenses-test</code></a></li><li>&quot;What metrics matter after launch — is retention flattening?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description names all 5 fire phrasings verbatim/near-verbatim (&quot;frame the business&quot;, &quot;what's the strategy&quot;, &quot;vision to roadmap&quot;, &quot;give me the vision, North Star and OKRs&quot;, &quot;turn this validated problem into a roadmap&quot;). Explicit negative scoping — &quot;NOT the go/no-go … (problem-quality-scorecard)&quot;, &quot;NOT the desirable/feasible/viable score (four-lenses-test)&quot;, &quot;NOT the post-launch metric-tree … (metrics-that-matter)&quot; — cleanly repels all 3 must-not-fire siblings.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case table below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → asks the one unblocking question (which validated problem + gate status + evidence), invents nothing (When-NOT §). 02 solution-in-disguise → names the trap (&quot;mobile app&quot; is an artefact, not a choice; Gotcha &quot;Strategy that is really a solution&quot;), reframes Layer 2 to beachhead+wedge+won't-do, and re-runs Layer 0 on the unverified &quot;validated fine&quot; (demands verdict+rung). 03 out-of-scope score request → declines, routes to problem-quality-scorecard (+ so-what-stress-test), emits no /40. No fabrication, no flattery, no scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. Absorbs business-model / recommendation-canvas but they live outside the module; Gate 4 not applicable.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could not come from a generic PM prompt: the Layer-0 gate that BLOCKS, the evidence-rung ceiling stamped across every layer (0.7 → whole stack <code>[Assumption]</code>/<code>[Hypothesis]</code>), the single move that lifts the floor to 1.0, the two kill-lines, dual-track roadmap with the moat on the Later discovery track, and the false-clear guardrail are all load-bearing, not decoration. Core decision logic (Layer-0 verdict, roadmap, North-Star bar) is tabular/checklist, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Barrier (seed, 0.7 ceiling)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>02 Azraq (soft PASS → whole stack <code>[Assumption]</code>)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>03 Mentix (rejects lagging MRR North Star + output KRs)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>04 BLOCK (ungated → STOP at Layer 0)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>05 Durian (roadmap with no North Star → blocked)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr></tbody></table></div>\n<p>Kill-line verification (the skill's reason to exist):</p>\n<ul><li><strong>Unvalidated problem passing down to strategy/roadmap:</strong> DEFENDED. Golden 04 (opinion 0.1, never gated) → BLOCK, no layer built, routes to gate + names cheapest unblock. Adversarial 01/02 (no floor / &quot;validated fine&quot; unverified) → asks for the gate rung, builds nothing. Layer-0 table + kill-line #1 + Gotcha &quot;Building on an ungated problem&quot; all enforce this.</li><li><strong>Roadmap with no North Star:</strong> DEFENDED. Golden 05 → kill-line #2 fires, roadmap blocked until a leading per-unit North Star + guardrail is named; handed feature-list rewritten as outcomes.</li><li><strong>Evidence rung caps every layer above:</strong> VERIFIED. Goldens 01 (0.7 → nothing tagged <code>[Fact]</code> above the floor) and 02 (0.5 → whole stack <code>[Assumption]</code>, roadmap named a bet, cheapest-test-to-lift-the-floor on the Now discovery track). No auto_fail triggered on any case; unit-economics uses bracketed <code>[illustrative]</code> placeholders tagged <code>[Assumption]</code> rather than fabricating a number.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Gate-bar wording vs. Layer-0 row 2 tension (minor).</strong> The Icarus-reframe sentence says a problem enters the stack only after passing the gate &quot;on behaviour-or-money evidence&quot; (implying 0.7+), but the Layer-0 table row 2 admits a PASS resting only on artefact/verbal (0.5/0.3) and builds a <code>[Assumption]</code>-stamped stack (this is exactly Golden 02). Operational behaviour is unambiguous (table + Golden 02 govern), but the prose could be read as contradicting the table. Reconcile: a soft PASS on artefact/verbal still enters, but only as a labelled bet.</li><li><strong>&quot;Does the wedge pay?&quot; on an internal-efficiency wedge (minor).</strong> For value that is labour saved rather than a sale price (Golden 05: ~90 min/week hand-tagging, no external revenue), the &quot;price the metric − cost to serve one unit&quot; line is awkward — a fellow could be tempted to either fabricate a revenue/cash-flow story (auto_fail) or skip the check. The disciplined move (state time-value plainly, tag <code>[Assumption]</code>, invent no cash-flow) works, but the method doesn't spell out how the viability line applies when the wedge's payoff is time saved, not money charged.</li></ul>\n<h2>Refine run 2 — applied judge fixes: reconciled the reframe prose with the Layer-0 table (soft PASS on artefact/verbal enters but stamps the whole stack <code>[Assumption]</code>/bet), and extended &quot;does the wedge pay?&quot; to internal-efficiency wedges (measure cost/time saved per unit, tag <code>[Assumption]</code>, don't fabricate revenue, don't skip the check).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (seed): validated problem → full stack, 0.7 ceiling",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Our hot-work-permit problem cleared problem-quality-scorecard at 34/40 on permit logs and timed reviews from two pilot rigs. Frame the business — vision to roadmap.&quot; A compressed-decision statement exists: a permit officer decides whether a hot-work permit is safe to sign, ~5 min against verified controls instead of ~40 min manual cross-check.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Layer 0 gate check first: PASS 34/40, evidence rung <strong>0.7</strong> (behaviour), verdict <strong>BUILD @ 0.7</strong>.</li><li>Vision as a customer-world outcome (&quot;no hot-work job starts on an unverified permit&quot;), no product noun.</li><li>Strategy with all four parts: beachhead (the two pilot rigs, not &quot;offshore oil &amp; gas&quot;), wedge (hot-work permits specifically), an explicit <strong>won't-do</strong> (refuse the general permit-to-work platform until hot-work retention is proven), and a unit-economics &quot;does the wedge pay?&quot; line tagged <code>[Assumption]</code>.</li><li>Product vision reuses the compressed decision, not a feature list.</li><li>North Star is <strong>single, leading, per-unit value</strong> (e.g. verified hot-work permits per rig-week), explicitly NOT revenue, <strong>with a guardrail</strong> (false-clear rate must stay 0).</li><li>OKRs: objective from strategy + 2–3 KRs that are <strong>outcomes</strong> (North-Star move / override-free acceptance / paid conversion), none a shipped-feature output; at least one moves the North Star.</li><li>Roadmap is <strong>dual-track</strong> Now/Next/Later — delivery outcomes beside discovery questions; the moat (cross-rig data rights) sits on the <strong>Later discovery track</strong>; no dated feature list.</li><li>Propagation stamp: whole stack at <strong>0.7 <span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span></strong>, with the single move (a signed contract) that lifts it to 1.0.</li><li>Both kill-lines pass.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Builds any layer without the Layer-0 gate check; emits a North Star that is revenue or total-users; produces a roadmap of dated features with no North Star ladder; tags any layer <code>[Fact]</code> above the 0.7 problem floor.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: PASS on artefact-grade evidence → whole stack stamped [Assumption]",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Our data-rights problem passed so-what-stress-test — but honestly the only evidence is a redlined contract one operator showed us and a verbal 'yes, we'd pay if this held up.' Build the frame anyway: vision, strategy, North Star, roadmap.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Layer 0: gate is PASS, but the best evidence is an <strong>artefact (0.5)</strong> plus a <strong>verbal 'yes' (0.3)</strong> — no behaviour, no money. Verdict: <strong>BUILD, but stamp the WHOLE stack <code>[Assumption]</code></strong>; the roadmap is named a <strong>bet</strong>, not a plan.</li><li>The stack still gets built (a soft PASS is not a BLOCK), but every layer inherits the 0.5 ceiling — no <code>[Fact]</code> anywhere.</li><li>Strategy names beachhead (the one operator who showed the redline), wedge (the single data-rights position class), and a won't-do; the &quot;does the wedge pay?&quot; line is <code>[Assumption]</code> because the only price signal is a verbal 'yes'.</li><li>North Star is a leading value metric (e.g. sites carrying a live, defensible data-rights position) with a guardrail; tagged <code>[Hypothesis]</code> with instrumentation named.</li><li>Roadmap dual-track, with the <strong>Now discovery question = the cheapest test that lifts the floor</strong> (get one operator to actually pay / observe one renewal where the position holds), because the whole stack is a bet until that rung moves.</li><li>Explicit propagation line: &quot;stack stamped at 0.5 <span class=\"tag tag-assumption\">Assumption</span>; the roadmap is a bet; the move that de-bets it is [named test].&quot;</li><li>Challenge: names that this frame rests on air relative to a money/behaviour frame, and refuses to present it as a committed plan.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Tags any layer <code>[Fact]</code> on 0.5 evidence; presents the roadmap as a committed plan rather than a bet; omits the cheapest-test-to-lift-the-floor; or BLOCKS a genuine (if soft) PASS as if it were ungated.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix: North Star discipline and outcome-not-output OKRs",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;The alert-triage problem passed the gate on floor logs (behaviour). Give me the strategy, North Star, and OKRs. My draft North Star is 'monthly recurring revenue from plant contracts' and my draft KRs are 'ship the ranked-shortlist feature' and 'launch on 3 plants.'&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Layer 0: PASS on behaviour (floor logs) → BUILD @ 0.7.</li><li><strong>North Star rejected and rebuilt:</strong> MRR is <strong>lagging</strong> and not per-unit value — banned here. Replace with a leading per-unit value metric tied to the compressed decision (e.g. alerts correctly acted-on per shift, or supervisor tweak-rate on the ranked shortlist), plus a <strong>guardrail</strong> (e.g. missed-true-positive rate must not rise). MRR is named as the lagging outcome the North Star should <em>predict</em>, not <em>be</em>.</li><li><strong>KRs rejected and rebuilt:</strong> &quot;ship the ranked-shortlist feature&quot; and &quot;launch on 3 plants&quot; are <strong>outputs</strong>, not outcomes. Rewrite as outcomes — e.g. &quot;supervisors act on the shortlist without opening the raw log on ≥X% of shifts&quot;, &quot;true-positive catch rate at parity-or-better vs. the raw log&quot;. At least one moves the North Star.</li><li>Strategy present with beachhead + wedge + won't-do.</li><li>Roadmap dual-track, delivery outcomes beside discovery questions.</li><li>Challenge is explicit: names <em>why</em> MRR fails the North-Star bar (lagging, gameable, not per-unit) and <em>why</em> the draft KRs fail (outputs, ladder to nothing observable).</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts MRR as the North Star; accepts &quot;ship X&quot; / &quot;launch on N plants&quot; as KRs; produces a North Star with no guardrail; or fails to name the leading-vs-lagging distinction.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "the BLOCKING case: ungated problem → STOP at Layer 0",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;We think permit officers waste time on safety paperwork. Frame the whole business for me — vision, strategy, North Star, the roadmap, all of it.&quot; (No score, no gate verdict, no logs — just the belief.)</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The skill runs <strong>Layer 0 first</strong> and finds the problem has <strong>never cleared</strong> <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>. The only evidence is &quot;we think&quot; — opinion (0.1).</li><li><strong>Verdict: BLOCK.</strong> No vision, no strategy, no North Star, no roadmap is produced. Building any of them on an ungated problem is the skill's first auto-fail, so it refuses.</li><li>Routes explicitly to the gate: run <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (≥32 to pass) or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> first.</li><li>Names the cheapest step that would unblock the frame: get one real number behind the pain — time one officer's permit review, or pull the permit logs — to move the problem off opinion.</li><li>Invents no vision, no metric, no roadmap, no beachhead to be &quot;helpful&quot;. The challenge IS the deliverable here.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Produces any layer above the floor (a vision, a strategy, a North Star, or a roadmap) on an ungated problem; fabricates a gate score; or softens the BLOCK into a &quot;draft frame we can validate later&quot;.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane: Durian Labs, expense-categorisation; roadmap with no North Star gets blocked",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;Our first workflow — auto-categorising expense-report line items for the finance team — passed the gate on behaviour (we watched two analysts spend ~90 min/week hand-tagging). Here's my roadmap: Now, ship the classifier; Next, add a review queue; Later, do invoices too. Frame it up.&quot; (Note: no North Star offered.)</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Layer 0: PASS on behaviour (observed hand-tagging) → BUILD @ 0.7. An honest, modest, unglamorous problem — the frame must not be inflated to sound bigger than it is.</li><li><strong>The roadmap-with-no-North-Star kill-line fires:</strong> the fellow handed a roadmap but no North Star. The skill <strong>blocks the roadmap until a North Star is named</strong> — a leading per-unit value metric (e.g. line items auto-categorised and accepted without edit per week, i.e. a tweak-rate), with a guardrail (mis-categorisation rate must not rise). It refuses to just accept the three-item feature list.</li><li>The handed roadmap is also called out as a <strong>dated feature list, not outcomes</strong> — rewritten as outcomes on the delivery track (reduce analyst tweak-time; hold accuracy) beside discovery questions (does accuracy hold across expense categories? is the review queue the constraint or the model?).</li><li>Vision stays <strong>bounded and honest</strong> — a finance team that stops hand-tagging routine expenses — not an inflated &quot;reinvent finance&quot; claim. Strategy: beachhead = this one finance team; wedge = expense line items; won't-do = invoices/AP until expense tweak-rate flattens.</li><li>No manufactured downstream cash-flow or revenue story; the value is the ~90 min/week and the accuracy, stated plainly.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts the feature-list roadmap without demanding a North Star; inflates the vision beyond the observed pain; invents a revenue or cash-flow benefit not in the input; or leaves a roadmap item that ladders to no North Star.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build a strategy for my logistics startup.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no validated problem, no gate verdict, no numbers here. The frame stack has no floor to build on and must not pretend one exists.</p>\n<ul><li>Must ask the ONE unblocking question: <strong>which single validated problem is this frame for — has it cleared <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> or <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>, and on what evidence?</strong></li><li>Must NOT invent a problem, a beachhead, a vision, a North Star, or a roadmap to fill the gap.</li><li>Must NOT emit a stack, a strategy, or a metric from a one-liner.</li><li>May state, in one line, that once a validated problem exists it will build the stack on top of it.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: returns the one question (which validated problem + its gate status), names it as the smallest thing that unblocks the frame, fabricates no specifics. FAIL: produces a strategy, a vision, a North Star, or a roadmap from the one-liner; invents any beachhead, metric, or number.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our strategy is to build a mobile app for our field engineers. The problem validated fine. Now put the vision, North Star, and roadmap around it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;Build a mobile app&quot; is a chosen artefact, not a strategy. Strategy is a hard choice — beachhead, wedge, and what you refuse — not a delivery format. The skill must refuse the framing and reframe.</p>\n<ul><li>Must name the trap: a solution (&quot;a mobile app&quot;) stated where a strategy belongs. A format is not a choice; it names <em>how</em>, not <em>which segment you win first, what slice you own, or what you refuse</em>.</li><li>Must reframe Layer 2 to the actual choice: which field-engineer segment is the beachhead, what is the narrow wedge, and what a generic team would chase that this one refuses. Ask for those; do not accept &quot;app&quot; as the strategy.</li><li>The feature/format language (&quot;mobile app&quot;) belongs only in the raw-input note, never in the strategy, vision, or product-vision layers.</li><li>Must still run Layer 0: &quot;the problem validated fine&quot; is an unverified claim — ask for the gate verdict and rung before building, and invent no score.</li><li>Invents no beachhead, wedge, metric, or number; it asks for them.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects &quot;build a mobile app&quot; as the strategy, names the trap, asks for beachhead + wedge + won't-do and the gate verdict before filling any layer — no fabricated specifics. FAIL: dutifully fills the strategy box with &quot;mobile app&quot;, builds vision/North-Star/roadmap around a delivery format, or accepts &quot;validated fine&quot; without the gate rung.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Score this problem across the eight dimensions and tell me go or no-go before I commit.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is the problem-validation go/no-go — the gate this skill <em>consumes</em>, not the frame this skill <em>builds</em>. The frame stack must decline and name the right sibling; it does not poach the gate.</p>\n<ul><li>Must state that product-frame-stack builds the strategy frame (vision → roadmap) ON TOP of an already-validated problem; it does not run the eight-dimension score or issue the go/no-go itself.</li><li>Must point to <strong><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></strong> for the eight-dimension scored gate (and mention <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> as the qualitative whole-idea alternative).</li><li>May offer, as the next step, to build the frame once the problem clears the gate — but must not produce a score, a /40, or a go/no-go verdict.</li><li>Must NOT invent a score or fabricate the eight-dimension table.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the scoring request, names <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (and optionally <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>), offers to frame once it passes — no score, no invented dimensions. FAIL: produces an eight-dimension scorecard, emits a /40 or a go/no-go, or otherwise does the gate skill's job.</p>"
     }
    ],
    "other": [],
    "file": "skills/product-frame-stack/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/product-frame-stack/SKILL.md",
  "template": "skills/product-frame-stack/template.md",
  "example": "skills/product-frame-stack/examples/sample.md",
  "rubric": "skills/product-frame-stack/tests/rubric.json",
  "results": "skills/product-frame-stack/tests/RESULTS.md"
 }
});
