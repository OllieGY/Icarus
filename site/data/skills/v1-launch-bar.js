window.ICARUS_SKILL("v1-launch-bar", {
 "name": "v1-launch-bar",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;I think we're ready&quot; into a go / no-go decision made on recorded evidence, not opinion. It runs a built v1 against exactly two gates and passes only if both are green on tape. Gate A: a person with zero context reaches the one correct outcome in ≤60 seconds with no rescue. Gate B: the product has a wired mechanism that captures the customer's corrections and turns them into better output — proven to close at least once before launch, with a numeric week-1 → week-4 delta committed as the pilot's exit proof. The artefact is the filled <code>template.md</code>: a checklist where every row carries a recorded-evidence citation and an evidence-ladder tier. A v1 that is polished, feature-complete, and loved by everyone who has seen it still fails if a true stranger stalls or the corrections loop is not wired. Feature-completeness is not a gate here. The two tests are.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>95% of enterprise pilots ship a static tool: it does the same thing in week 4 as in week 1, and every edit the customer makes vanishes into a log nobody reads. That is the death shape, and it passes most launch reviews because the review scores polish and demos, not learning. This skill absorbs <code>evidence-driven-testing</code> — proof over prose, one recorded assertion per state change, show the old failure beside the new success — and points it at the launch decision itself, not at a single UI test. The 60-second test is a recorded session with a real stranger (behaviour observed, 0.7 on the ladder), never the fellow's &quot;it's obvious&quot; (opinion, 0.1). The corrections test reuses that skill's strongest move — the before/after that shows the old wrong output next to the new corrected one — and applies it to the whole product's ability to learn: seed one real correction, show the same input now yields the corrected output, on tape. A launch decision made on the fellow's confidence has measured nothing.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a v1 is built, real users are lined up, and its eval pass rate at the chosen autonomy level (from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>) is already met — and the fellow needs to decide go or no-go on the pilot. Trigger phrases: &quot;are we ready to launch&quot;, &quot;is v1 good enough&quot;, &quot;launch bar&quot;, &quot;go/no-go on v1&quot;, &quot;should we ship this pilot&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;How do we keep improving the product / what's the monthly cadence / run the loop / what happens after launch&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08). This skill is the one-time gate and wires the mechanism; that skill runs it forever and measures the delta this skill commits to. Hand the pilot over once it is GO.</td></tr><tr><td>&quot;How do we price the pilot / what are the terms / set the commercial success metric&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07, sibling). Its success metric is the business KPI the customer buys; the two launch tests here are the product bar underneath it.</td></tr><tr><td>&quot;Define what working means / write the golden set / what's the cost-per-outcome&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07, sibling). That is the pre-build spec. This skill assumes its pass rate is already an input, and does not re-derive it.</td></tr><tr><td>&quot;How should we run the user observation / who watches / how do we avoid leading&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (05). Route the <em>how</em> of the stranger observation there; this skill owns the <em>gate</em>, not the protocol.</td></tr></tbody></table></div>\n<p>Do not invent readiness. If there is no built v1, or no real users to show it to, this is not a launch question yet. Say so and name the earlier step. Never fabricate a stranger session, a correction, or a delta.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Two gates, then the decision and the handoff. Every row needs a recorded-evidence citation; a row backed only by opinion scores 0.1 and counts as RED.</p>\n<h3 id=\"step-0-confirm-you-have-something-to-gate\">Step 0 — Confirm you have something to gate</h3>\n<p>Three preconditions, all <code>[Fact]</code> or this stops:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>If missing</th></tr></thead><tbody><tr><td>A built, running v1 a stranger can touch</td><td>Not a launch question. Go back to build.</td></tr><tr><td>The one <strong>outcome unit</strong> the v1 promises (borrow it from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s job line)</td><td>No target for the stranger to reach. Get the job line first.</td></tr><tr><td>Eval pass rate at the chosen autonomy level already met</td><td>The eval gate is upstream; do not launch under it. Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</td></tr></tbody></table></div>\n<p>On a vague or underspecified request, do not dump all three preconditions at once. Lead with the single unblocking ask — <em>point me at the running v1 and name the one outcome a stranger must reach</em> — and pull the rest only once that lands.</p>\n<h3 id=\"step-1-gate-a-the-60-second-stranger-test\">Step 1 — Gate A: the 60-second stranger test</h3>\n<p>A stranger reaches first correct value in ≤60 seconds, unaided, and can restate the job in one sentence.</p>\n<p>Rules that make it real, not a friendly demo:</p>\n<ul><li><strong>Who counts as a stranger.</strong> Matches the real user role; has never seen the product, the deck, or a description of it. Disqualified: the fellow, anyone on the build/design team, the champion, anyone briefed. A friendly who already knows the answer is not a stranger, and their success is opinion (0.1), not behaviour.</li><li><strong>The clock.</strong> Start at first contact with the artefact. Stop at first <em>correct</em> outcome — the outcome unit from Step 0, not &quot;clicked around&quot; — or at 60 seconds, whichever comes first. Record the session.</li><li><strong>No rescue.</strong> The fellow may not explain, hint, or drive. If the stranger needs narration to proceed, the run is a fail, recorded as such. Route the observation discipline (no leading, observe the artefact not the person) to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a>; do not restate it here.</li><li><strong>Two separate checks per stranger:</strong> (1) <em>comprehension</em> — one correct sentence on what it does; (2) <em>first value</em> — reached the correct outcome in time. A stranger can stumble into value without understanding, or understand without valuing; both must be true.</li></ul>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Bar</th></tr></thead><tbody><tr><td>Strangers run</td><td>≥ 3 (one success is luck; a pattern needs a few)</td></tr><tr><td>Reached correct first value ≤ 60 s, no rescue</td><td>≥ 2 of 3</td></tr><tr><td>Restated the job in one correct sentence</td><td>≥ 2 of 3</td></tr><tr><td>Evidence</td><td>Recorded session per stranger, cited <span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<p>Gate A is GREEN only on recorded strangers. &quot;Everyone who's seen it gets it instantly&quot; is disqualified input — those people are not strangers, and the claim is opinion.</p>\n<h3 id=\"step-2-gate-b-the-learn-from-corrections-test\">Step 2 — Gate B: the learn-from-corrections test</h3>\n<p>The product must visibly improve from the customer's corrections. At the gate you cannot yet have week-4 data, so score readiness now and commit the delta to week 4. Five rows; every one must be present.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Row</th><th>What green looks like</th><th>Gate-time evidence</th></tr></thead><tbody><tr><td>B1</td><td><strong>Capture wired</strong></td><td>A code path logs every correction as a <code>(system_output → human_final)</code> diff — the edit the customer made before using the output.</td><td>Cite the path / event. Not &quot;we can query the DB later.&quot; <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B2</td><td><strong>Feedback path named</strong></td><td>A named route by which a captured correction changes future output: into the golden set, a <code>lessons.md</code>, retrieval, or a re-prompt — with the trigger that fires it.</td><td>Name the path and trigger. &quot;We'll look at the logs&quot; is RED. <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B3</td><td><strong>Proven once</strong></td><td>Seed one real correction, then show the same input now produces the corrected output. Recorded before/after — old wrong beside new right.</td><td>Recorded diff, cited <span class=\"tag tag-fact\">Fact</span>. Behaviour observed, 0.7.</td></tr><tr><td>B4</td><td><strong>Tweak-time instrumented</strong></td><td>The metric &quot;how much the customer edits before accepting&quot; is captured from day 1 (tweak-distance / tweak-time). This is the instrument <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> will read.</td><td>Cite the instrument. <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B5</td><td><strong>Delta committed</strong></td><td>A specific, checkable week-1 → week-4 promise on a named metric, e.g. &quot;median tweak-distance on the top-5 recurring input types drops ≥ 30%&quot;.</td><td>The number and metric, stated now. <span class=\"tag tag-hypothesis\">Hypothesis</span> until week 4.</td></tr></tbody></table></div>\n<p>Kill rule for Gate B: if B1–B4 are not all present and B5 is not a specific number, the mechanism is not wired and the launch bar is <strong>NO-GO</strong>, however good the output looks. &quot;We'll add the feedback loop after launch&quot; is exactly the static-tool trap; a promise to build the mechanism later is not the mechanism.</p>\n<h3 id=\"step-3-the-decision\">Step 3 — The decision</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>State</th><th>Basis</th></tr></thead><tbody><tr><td>A — stranger</td><td>GREEN / RED</td><td>Recorded strangers only</td></tr><tr><td>B — corrections</td><td>GREEN / RED</td><td>B1–B5 all present</td></tr></tbody></table></div>\n<p>Both GREEN on recorded evidence → <strong>GO</strong>. Either RED → <strong>NO-GO</strong>, and name the single smallest fix that turns it green (e.g. &quot;run 3 true strangers&quot;, &quot;wire B1 capture&quot;, &quot;seed one correction and record the before/after&quot;). A gate that is &quot;green&quot; on opinion (0.1) rather than recorded behaviour (0.7) is RED. Do not average the two gates into a score; both are hard.</p>\n<h3 id=\"step-4-handoff\">Step 4 — Handoff</h3>\n<p>On GO, the mechanism wired in Gate B is now run continuously by <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08): it reads the tweak-time instrument (B4), re-runs the whole eval set on every model release, and promotes autonomy by eval result. The week-1 → week-4 delta committed in B5 is that skill's first checkpoint. This skill's job ends at the gate; do not run the ongoing loop here.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>The launch bar refuses to pass a gate on anything below behaviour observed (0.7). A recorded stranger reaching the outcome is behaviour (0.7) and clears Gate A; &quot;users tell us it's intuitive&quot; is verbal commitment or opinion (0.1–0.3) and does not. A recorded before/after showing a correction was learned is behaviour (0.7) and clears B3; &quot;the model will pick it up over time&quot; is a hypothesis, not a proof, and does not. The committed delta (B5) is tagged <code>[Hypothesis]</code> until week 4 makes it <code>[Fact]</code> — that is honest, because the gate cannot yet observe the future; what it can and does require is that everything gate-time (B1–B4, both Gate A checks) is <code>[Fact]</code> on tape. Tag every readiness claim. A launch decision is the last place to let an opinion wear the costume of a fact.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>The friendly stranger. The most common cheat is running the &quot;stranger&quot; test on a colleague, an advisor, or the champion — someone already carrying context. Their instant success is worthless as evidence and disqualified as input. If the fellow cannot name three people who have genuinely never seen it, Gate A has not been run.</p>\n<p>The static tool that demos beautifully. A v1 can pass every polish check, win the room, and still be the 95% death shape — because nothing in it learns from a correction. Gate B is the only defence, and it is the gate fellows most want to skip because it is invisible in a demo. No B1–B4 wired, no launch, regardless of Gate A.</p>\n<p>Delta that cannot be judged. &quot;It'll get better over the pilot&quot; is not a B5 commitment. Without a named metric and a number, week 4 cannot tell success from drift, and <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> inherits a promise it cannot check. Force the number now.</p>\n<p>Comprehension smuggled in as value. A stranger who says &quot;oh I see, it's a risk list&quot; has passed comprehension, not value — they have not yet reached the outcome. Scoring the two as one lets a clear-but-useless v1 pass. Keep them separate.</p>\n<p>Corrections that quietly raise autonomy. The Gate B loop learns from corrections to improve <em>output quality</em> at the current autonomy level — it must never silently promote autonomy (loosen a gate, drop a sign-off, widen a threshold) because the corrections looked good. A correction that implies more autonomy is a decision for <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (re-size the guard) or <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (promote on a scored eval), never an automatic effect of the week-1 → week-4 loop. Wiring the loop to auto-tighten thresholds is exactly the trap on an L0 safety product: the mechanism that earns trust must not also spend it.</p>\n<p>Launching under the eval gate. This skill sits on top of <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s pass rate; it does not replace it. A v1 that is charming to strangers but fails its own golden set is not ready — Gate A does not buy back a failing eval. Confirm the precondition in Step 0.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full worked launch bar for Azraq's data-centre risk product: Gate A run on three operations engineers who had never seen it (2 of 3 reached the correct top-risk read in ≤60 s), and Gate B initially RED because the monthly report was a static PDF with no correction capture — the classic 95% trap — forcing a NO-GO, the one wired fix (log the client's markups as diffs and feed them to the golden set + retrieval), a seeded before/after proving the loop closed, and a committed week-1 → week-4 delta before the decision flipped to GO.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07, sibling) — defines what &quot;working&quot; means before code (job line, 20 golden cases, cost-per-outcome). Its pass rate is a precondition to this gate, not something this gate re-derives. Run it first, upstream.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07, sibling) — carries the commercial terms and the business success metric of the pilot. The two launch tests here are the product-readiness bar beneath that metric. Keep the boundary: price and terms there, go/no-go here.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (05) — the discipline for running the stranger observation (Product runs, Design notes, no leading, observe the artefact not the person). Route the <em>how</em> there; this skill owns the <em>gate</em> and the 60-second binary.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08) — the ongoing loop this skill hands off to on GO. It reads the tweak-time instrument (B4), re-runs evals on model release, and measures the week-1 → week-4 delta (B5). This skill wires and proves the mechanism once; that skill runs it forever. They compose; neither restates the other.</p>\n<p>Absorbs and reframes <code>skills/product-verification/evidence-driven-testing</code>. It lifts that skill's bones — proof over prose, one recorded assertion per state change, show the old failure beside the new success, always cite the exact version tested — and points them at the launch decision: the stranger session and the correction before/after are the recordings, and the go/no-go is the annotated result. Use this at the launch gate; use the original when recording proof of a single UI change on a PR.</p>\n<p>Supersedes: none. New skill; no prior launch-bar exists in the pack.</p>"
  }
 ],
 "template": {
  "html": "<h1>v1 Launch Bar — go / no-go</h1>\n<p>Fill every row. The decision is made on the recorded-evidence citations, never on opinion. A row backed only by &quot;we think&quot; scores 0.1 and counts as RED. A v1 that is polished and feature-complete but stalls a stranger or has no wired corrections loop is <strong>NO-GO</strong> — feature-completeness is not a gate here.</p>\n<p>Product / v1: <em>[name]</em> · Version / commit tested: <em>[exact ref]</em> · Date: <em>[date]</em></p>\n<hr>\n<h2>Step 0 — Preconditions (all must be <code>[Fact]</code>)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Present?</th><th>Evidence</th><th>If missing</th></tr></thead><tbody><tr><td>Built, running v1 a stranger can touch</td><td><em>[Y/N]</em></td><td><em>[cite]</em></td><td>Not a launch question — back to build</td></tr><tr><td>The one <strong>outcome unit</strong> the v1 promises (from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> job line)</td><td><em>[Y/N]</em></td><td><em>[state it]</em></td><td>No target for the stranger — get the job line</td></tr><tr><td>Eval pass rate at chosen autonomy level already met</td><td><em>[Y/N]</em></td><td><em>[cite the run]</em></td><td>Do not launch under the eval gate — route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></td></tr></tbody></table></div>\n<p>If any is N, stop. Name the earlier step. Do not fabricate readiness.</p>\n<hr>\n<h2>Step 1 — Gate A: the 60-second stranger test</h2>\n<p><strong>Outcome unit the stranger must reach:</strong> <em>[from Step 0]</em></p>\n<p>A stranger = matches the real user role, has never seen the product / deck / description. Disqualified: fellow, build/design team, champion, anyone briefed.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stranger</th><th>Role (real user?)</th><th>Correct value ≤ 60 s, no rescue?</th><th>Restated job in 1 correct sentence?</th><th>Recording</th></tr></thead><tbody><tr><td>1</td><td><em>[role]</em></td><td><em>[Y/N — time]</em></td><td><em>[Y/N — quote]</em></td><td><em>[link] <span class=\"tag tag-fact\">Fact</span></em></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate A metric</th><th>Bar</th><th>Result</th></tr></thead><tbody><tr><td>Strangers run</td><td>≥ 3</td><td><em>[n]</em></td></tr><tr><td>Reached correct first value ≤ 60 s, no rescue</td><td>≥ 2 of 3</td><td><em>[n/3]</em></td></tr><tr><td>Restated the job in one correct sentence</td><td>≥ 2 of 3</td><td><em>[n/3]</em></td></tr></tbody></table></div>\n<p><strong>Gate A:</strong> <em>[GREEN / RED]</em> — green only on recorded strangers. Disqualify any &quot;stranger&quot; who was briefed; note them here and do not count them.</p>\n<hr>\n<h2>Step 2 — Gate B: the learn-from-corrections test</h2>\n<p>Score readiness now; commit the delta to week 4. B1–B4 must all be present and B5 must be a specific number, or Gate B is RED.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Row</th><th>State</th><th>Gate-time evidence</th></tr></thead><tbody><tr><td>B1</td><td><strong>Capture wired</strong> — code path logs each correction as <code>(system_output → human_final)</code> diff</td><td><em>[GREEN/RED]</em></td><td><em>[cite path/event] <span class=\"tag tag-fact\">Fact</span></em></td></tr><tr><td>B2</td><td><strong>Feedback path named</strong> — where a captured correction goes (golden set / lessons.md / retrieval / re-prompt) + the trigger</td><td><em>[GREEN/RED]</em></td><td><em>[name path + trigger] <span class=\"tag tag-fact\">Fact</span></em></td></tr><tr><td>B3</td><td><strong>Proven once</strong> — seed one real correction; same input now yields the corrected output</td><td><em>[GREEN/RED]</em></td><td><em>[recorded before/after] <span class=\"tag tag-fact\">Fact</span></em></td></tr><tr><td>B4</td><td><strong>Tweak-time instrumented</strong> — &quot;how much they edit before accepting&quot; captured from day 1</td><td><em>[GREEN/RED]</em></td><td><em>[cite instrument] <span class=\"tag tag-fact\">Fact</span></em></td></tr><tr><td>B5</td><td><strong>Delta committed</strong> — specific week-1 → week-4 promise on a named metric</td><td><em>[stated?]</em></td><td><em>[the number + metric] [Hypothesis until wk4]</em></td></tr></tbody></table></div>\n<p><strong>B5 delta (write it as a checkable sentence):</strong></p>\n<blockquote><p><em>[e.g. &quot;Median tweak-distance on the top-5 recurring input types drops ≥ 30% from week 1 to week 4.&quot;]</em></p></blockquote>\n<p><strong>Gate B:</strong> <em>[GREEN / RED]</em> — RED if any of B1–B4 is missing or B5 has no number. &quot;Add the loop after launch&quot; = RED (the static-tool trap).</p>\n<hr>\n<h2>Step 3 — Decision</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>State</th><th>Basis</th></tr></thead><tbody><tr><td>A — 60-second stranger</td><td><em>[GREEN/RED]</em></td><td>recorded strangers only</td></tr><tr><td>B — learn-from-corrections</td><td><em>[GREEN/RED]</em></td><td>B1–B5</td></tr></tbody></table></div>\n<p><strong>Decision:</strong> <em>[GO / NO-GO]</em></p>\n<ul><li>Both GREEN on recorded evidence → GO.</li><li>Either RED → NO-GO. Do not average. A gate green on opinion (0.1) not recorded behaviour (0.7) is RED.</li></ul>\n<p><strong>If NO-GO, the single smallest fix that turns the red gate green:</strong></p>\n<blockquote><p><em>[e.g. &quot;Run 3 true strangers&quot;, or &quot;Wire B1 capture + seed one correction and record the before/after&quot;]</em></p></blockquote>\n<hr>\n<h2>Step 4 — Handoff (on GO only)</h2>\n<ul><li>The Gate B mechanism is now run continuously by <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08).</li><li>It reads the tweak-time instrument (B4), re-runs the whole eval set on every model release, and promotes autonomy by eval result.</li><li>The B5 delta is <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>'s first checkpoint at week 4.</li></ul>\n<p>Owner of the pilot from here: <em>[name]</em> · Week-4 review date: <em>[date]</em></p>",
  "path": "skills/v1-launch-bar/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq v1 launch bar (data-centre risk product)</h1>\n<p>Azraq builds static risk reports and a data-rights position for data-centre operators. This is a test fixture: numbers and sessions are illustrative, not real client data. The launch bar was run to decide go / no-go on the first paid pilot.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;The v1 is built and it looks great. It's a monthly data-centre risk report — uptime, incident history, and a ranked list of the operator's top risks with the evidence behind each. Everyone we've demoed it to loves it. Two operators are ready to start. Are we ready to launch?&quot;</p>\n<p>Version tested: <code>azraq-v1 @ 3f9c1a2</code>. Eval pass rate at L0 (informs) already met on the golden set from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. <span class=\"tag tag-fact\">Fact</span></p>\n<p>The fellow's stated readiness rested on &quot;the demo lands and people love it&quot; — opinion (0.1). The launch bar does not accept that. It runs the two gates.</p>\n<hr>\n<h2>Step 0 — Preconditions</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Present?</th><th>Evidence</th></tr></thead><tbody><tr><td>Built, running v1</td><td>Yes</td><td><code>azraq-v1 @ 3f9c1a2</code>, generates a live report <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Outcome unit</td><td>Yes</td><td>&quot;One operator reads the monthly report and correctly identifies their single top risk to act on&quot; (from the job line) <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Eval pass rate at L0 met</td><td>Yes</td><td>Golden-set run logged, passes at L0 <span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<p>Cleared. There is a real thing to gate.</p>\n<hr>\n<h2>Step 1 — Gate A: the 60-second stranger test</h2>\n<p><strong>Outcome unit:</strong> the reader lands on their correct top risk and can act on it.</p>\n<p>Three strangers recruited — operations engineers at non-client data centres, matched to the real reader role, none briefed. The fellow and the design lead were disqualified as &quot;strangers&quot;; so was the champion at one of the two waiting operators (already sold, already briefed).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stranger</th><th>Role</th><th>Correct value ≤ 60 s, no rescue?</th><th>Restated job in 1 sentence?</th><th>Recording</th></tr></thead><tbody><tr><td>1</td><td>DC ops engineer</td><td>Yes — 41 s, found top risk = cooling-loop redundancy</td><td>Yes: &quot;it ranks what's most likely to take the site down&quot;</td><td>rec-01 <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>2</td><td>DC ops engineer</td><td>Yes — 55 s, found top risk = power-feed single point</td><td>Yes: &quot;monthly risk ranking for the facility&quot;</td><td>rec-02 <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>3</td><td>DC ops engineer</td><td>No — at 60 s still scrolling raw incident tables, never reached the ranked risk</td><td>Partial: &quot;some kind of incident log?&quot;</td><td>rec-03 <span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate A metric</th><th>Bar</th><th>Result</th></tr></thead><tbody><tr><td>Strangers run</td><td>≥ 3</td><td>3</td></tr><tr><td>Correct first value ≤ 60 s, no rescue</td><td>≥ 2/3</td><td>2/3</td></tr><tr><td>Restated the job</td><td>≥ 2/3</td><td>2/3</td></tr></tbody></table></div>\n<p><strong>Gate A: GREEN.</strong> Two of three reached the correct top risk in time and named the job, on tape. Stranger 3's fail is a real signal (the raw tables above the ranking bury the lede) and is logged for the design skills — but Gate A's bar is met. Behaviour observed (0.7), not the fellow's &quot;everyone loves it&quot; (0.1).</p>\n<hr>\n<h2>Step 2 — Gate B: the learn-from-corrections test</h2>\n<p>This is where the v1 failed on the first pass. The report was a static monthly PDF. When a client disagreed with a ranking — &quot;power-feed isn't our top risk, we have N+2 there; the cooling loop is&quot; — that correction went into an email and died. Nothing captured it, nothing fed it back, the next month's report repeated the same ranking. The classic 95% death shape: same output in week 4 as week 1.</p>\n<p>First-pass score:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Row</th><th>State</th><th>Note</th></tr></thead><tbody><tr><td>B1</td><td>Capture wired</td><td>RED</td><td>Corrections arrive as email; no <code>(output → final)</code> diff logged</td></tr><tr><td>B2</td><td>Feedback path named</td><td>RED</td><td>No route from a correction to next month's ranking</td></tr><tr><td>B3</td><td>Proven once</td><td>RED</td><td>Cannot prove a loop that does not exist</td></tr><tr><td>B4</td><td>Tweak-time instrumented</td><td>RED</td><td>No measure of how much clients re-rank before acting</td></tr><tr><td>B5</td><td>Delta committed</td><td>—</td><td>No number stated</td></tr></tbody></table></div>\n<p><strong>Gate B (first pass): RED → Decision: NO-GO.</strong></p>\n<p><strong>Single smallest fix named:</strong> make the ranking correctable in-product and wire the loop —</p>\n<ol><li>B1: add a one-click &quot;this ranking is wrong because…&quot; on each risk, logged as a <code>(ranked_output → client_corrected_ranking)</code> diff with the client's stated reason.</li><li>B2: captured corrections feed two paths — appended to the golden set as new labelled cases, and into retrieval so the operator's own redundancy facts (N+2 on power) weight future rankings. Trigger: any correction is reviewed and merged before the next monthly run.</li><li>B4: instrument tweak-distance = number of risks the client re-ranks before acting, captured per report.</li></ol>\n<p>The fellow built that over four days. Re-scored:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Row</th><th>State</th><th>Gate-time evidence</th></tr></thead><tbody><tr><td>B1</td><td>Capture wired</td><td>GREEN</td><td><code>correction_events</code> table logs each diff + reason <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B2</td><td>Feedback path named</td><td>GREEN</td><td>Correction → golden set + retrieval weighting; merged pre-run <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B3</td><td>Proven once</td><td>GREEN</td><td>Seeded the real power-feed correction; re-ran the same month's input; cooling loop now ranks #1, power-feed drops, N+2 fact cited. Recorded before/after (rec-B3) <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B4</td><td>Tweak-time instrumented</td><td>GREEN</td><td>Re-rank count captured per report from report #1 <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>B5</td><td>Delta committed</td><td>Stated</td><td>See below [Hypothesis until wk4]</td></tr></tbody></table></div>\n<p><strong>B5 delta:</strong></p>\n<blockquote><p>Median re-rank distance (risks moved by the client before acting) on the two pilot operators drops ≥ 40% from the week-1 report to the week-4 report, as the corrections merge back.</p></blockquote>\n<p><strong>Gate B (second pass): GREEN.</strong></p>\n<hr>\n<h2>Step 3 — Decision</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>State</th><th>Basis</th></tr></thead><tbody><tr><td>A — 60-second stranger</td><td>GREEN</td><td>2/3 recorded strangers</td></tr><tr><td>B — learn-from-corrections</td><td>GREEN</td><td>B1–B5, before/after recorded</td></tr></tbody></table></div>\n<p><strong>Decision: GO.</strong> Both gates green on recorded evidence. The demo-love that the fellow arrived with never entered the decision; the two tests did.</p>\n<hr>\n<h2>Step 4 — Handoff</h2>\n<ul><li>The correction loop wired in Gate B is handed to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08): it reads the re-rank instrument (B4), re-runs the golden set on every model release, and only raises Azraq toward L1 (drafting the ranking the operator commits) once the eval earns it.</li><li>The B5 delta is the week-4 checkpoint. Owner: the fellow. Week-4 review date set.</li></ul>\n<h2>The lesson this enforces</h2>\n<p>The launch the fellow wanted: ship the beautiful static PDF because the demo lands. The launch bar blocked it — not on taste, but because a static report cannot learn from a correction, and a v1 that does the same thing in week 4 as week 1 is the pilot that 95% of enterprises quietly kill. Gate A was already green; the work was Gate B, and it took four days to turn a NO-GO into a GO by wiring the one mechanism that makes the product compound. That mechanism, not the polish, is what the pilot was allowed to launch on.</p>",
  "path": "skills/v1-launch-bar/examples/sample.md"
 },
 "rubric": {
  "skill": "v1-launch-bar",
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
    "Are we ready to launch?",
    "Is v1 good enough to ship?",
    "Run it against the launch bar.",
    "Give me the go/no-go on v1.",
    "Should we ship this pilot?"
   ],
   "mustNotFire": [
    {
     "phrase": "How do we keep improving the product month over month / what's the cadence / run the loop",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "How should we price the pilot / what are the terms / set the commercial success metric",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Define what working means / write the golden set / what's the cost-per-outcome",
     "sibling": "eval-first-spec",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings are verbatim trigger phrases in the description (&quot;are we ready to launch&quot;, &quot;is v1 good enough&quot;, &quot;launch bar&quot;, &quot;go/no-go on v1&quot;, &quot;should we ship this pilot&quot;). All 3 must-not-fire are explicitly carved out with their sibling: ongoing loop/cadence → refine-flywheel; price/terms/success metric → pilot-six-term-sheet; define working / golden set / cost → eval-first-spec.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → Step 0 preconditions + &quot;Do not invent readiness / never fabricate a stranger session&quot; produce ask-for-the-running-v1 + outcome unit, no verdict. 02 solution-in-disguise → &quot;Feature-completeness is not a gate here&quot; + &quot;static tool that demos beautifully&quot; gotcha reframes wizard/polish to the two tests and flags Gate B untouched; routes UI craft to usability-test-protocol. 03 out-of-scope → When-NOT row 1 + Step 4 boundary decline-and-route to refine-flywheel by name, no cadence produced. No fabrication, no flattery, no poaching in any.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p>frontmatter <code>supersedes: none</code>.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 faithful output turns on moves a generic PM prompt cannot supply: the ≤60s recorded true-stranger test with disqualification rules, the learn-from-corrections mechanism as a HARD gate (B1–B4 wired + B3 proven-once on tape + B5 numeric delta) before launch, the evidence ladder with a 0.7 floor, the &quot;95% static-tool death shape&quot; reframe, and two hard non-averaged gates. Generic prompt yields a feature/QA readiness checklist, not &quot;NO-GO unless the corrections loop is proven once on tape.&quot; Guidance is properly tabular (Step 0, Gate A metrics, B1–B5, decision, ladder) and mirrored in template.md — not prose-smuggled.</p>"
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
     "label": "01 Mentix clean-GO 5",
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
     "label": "02 Barrier gas-safety 5",
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
     "label": "03 Durian mundane draft 5",
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
     "label": "04 Gate A fail / B strong 5",
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
     "label": "05 \"everyone loves it\" 5",
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
  "gotchasSurfaced": "<ul><li><strong>Corrections must not raise autonomy (safety).</strong> The skill has no explicit Method rule or Gotcha that learning-from-corrections must NOT silently promote autonomy — critical for L0 safety products (Golden 02). It is only inferable from Step 4. Add a one-line rule/gotcha and name <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (07 sibling, exists, currently unreferenced) alongside <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> for autonomy promotion.</li><li><strong>Adversarial-01 &quot;one question&quot; risk.</strong> Step 0 lists three preconditions; nothing tells the applier to LEAD with the single unblocking ask (point me at the running v1 + the one outcome a stranger must reach). A lazy applier could dump all three at once — the exact adversarial-01 fail condition. Consider flagging the single lead question in-Method.</li><li><strong>Sandbox/non-sandbox split (orchestrator sanity-check, not a scoring defect).</strong> This skill lives under <code>skills/sandbox/product-icarus/…</code> and routes to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> / <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> / <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> that live in the NON-sandbox <code>skills/product-icarus/…</code> tree, while <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> is under <code>skills/sandbox/…/08-…</code>. All referenced skills exist by name, so routing is not broken, but confirm the intended home tree before graduation.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a Gotcha that the corrections loop must not silently raise autonomy (route to guardrail-design/refine-flywheel, no auto-promote), and a Step 0 rule to lead vague inputs with the single unblocking question.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — v1-launch-bar</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Are we ready to launch?&quot;</li><li>&quot;Is v1 good enough to ship?&quot;</li><li>&quot;Run it against the launch bar.&quot;</li><li>&quot;Give me the go/no-go on v1.&quot;</li><li>&quot;Should we ship this pilot?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;How do we keep improving the product month over month / what's the cadence / run the loop&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08)</li><li>&quot;How should we price the pilot / what are the terms / set the commercial success metric&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07)</li><li>&quot;Define what working means / write the golden set / what's the cost-per-outcome&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings are verbatim trigger phrases in the description (&quot;are we ready to launch&quot;, &quot;is v1 good enough&quot;, &quot;launch bar&quot;, &quot;go/no-go on v1&quot;, &quot;should we ship this pilot&quot;). All 3 must-not-fire are explicitly carved out with their sibling: ongoing loop/cadence → refine-flywheel; price/terms/success metric → pilot-six-term-sheet; define working / golden set / cost → eval-first-spec.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → Step 0 preconditions + &quot;Do not invent readiness / never fabricate a stranger session&quot; produce ask-for-the-running-v1 + outcome unit, no verdict. 02 solution-in-disguise → &quot;Feature-completeness is not a gate here&quot; + &quot;static tool that demos beautifully&quot; gotcha reframes wizard/polish to the two tests and flags Gate B untouched; routes UI craft to usability-test-protocol. 03 out-of-scope → When-NOT row 1 + Step 4 boundary decline-and-route to refine-flywheel by name, no cadence produced. No fabrication, no flattery, no poaching in any.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td>frontmatter <code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 faithful output turns on moves a generic PM prompt cannot supply: the ≤60s recorded true-stranger test with disqualification rules, the learn-from-corrections mechanism as a HARD gate (B1–B4 wired + B3 proven-once on tape + B5 numeric delta) before launch, the evidence ladder with a 0.7 floor, the &quot;95% static-tool death shape&quot; reframe, and two hard non-averaged gates. Generic prompt yields a feature/QA readiness checklist, not &quot;NO-GO unless the corrections loop is proven once on tape.&quot; Guidance is properly tabular (Step 0, Gate A metrics, B1–B5, decision, ladder) and mirrored in template.md — not prose-smuggled.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses; not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Mentix clean-GO</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>02 Barrier gas-safety</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>03 Durian mundane draft</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>04 Gate A fail / B strong</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>05 &quot;everyone loves it&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the hard cases:</p>\n<ul><li><strong>01</strong>: Method correctly refuses to declare GO on an input that carries B1 + eval + running v1 but NO recorded stranger sessions and no B3/B4/B5 — it names the bar and the missing recordings rather than fabricating them (auto-fail avoided). &quot;Clean GO&quot; is the reachable path, not a licence to invent.</li><li><strong>02</strong>: The one soft spot. The autonomy-safety trap (confirmations must NOT auto-tighten thresholds / silently raise autonomy on an L0 safety product) is <em>catchable</em> from Step 4 (&quot;promotes autonomy by eval result&quot;) but is not spotlighted as an in-Method rule or Gotcha, and <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (a real 07 sibling) is never named in the routing. Challenge scored 4, not 5, on that reliance on applier inference. Still passes.</li><li><strong>04 / 05</strong>: Step 3's explicit &quot;Do not average… both are hard&quot; and the Gotchas (&quot;friendly stranger&quot;, &quot;static tool that demos beautifully&quot;) produce the NO-GO cleanly; the ≤60s hard bar rejects the 90s run and disqualifies briefed viewers as opinion (0.1).</li></ul>\n<p>Kill-line check: NOT tripped. Both gates are hard (Gate A recorded ≥2/3 strangers ≤60s unaided; Gate B kill-rule = B1–B4 present + B5 numeric or NO-GO, with B3 proven-once on tape — a proven mechanism, not a promise). No pass on opinion (0.7 floor), no averaging. Does not poach <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>: Step 4 hands the <em>running</em> of the mechanism over; this skill wires + proves it once.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Corrections must not raise autonomy (safety).</strong> The skill has no explicit Method rule or Gotcha that learning-from-corrections must NOT silently promote autonomy — critical for L0 safety products (Golden 02). It is only inferable from Step 4. Add a one-line rule/gotcha and name <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> (07 sibling, exists, currently unreferenced) alongside <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> for autonomy promotion.</li><li><strong>Adversarial-01 &quot;one question&quot; risk.</strong> Step 0 lists three preconditions; nothing tells the applier to LEAD with the single unblocking ask (point me at the running v1 + the one outcome a stranger must reach). A lazy applier could dump all three at once — the exact adversarial-01 fail condition. Consider flagging the single lead question in-Method.</li><li><strong>Sandbox/non-sandbox split (orchestrator sanity-check, not a scoring defect).</strong> This skill lives under <code>skills/sandbox/product-icarus/…</code> and routes to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> / <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> / <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> that live in the NON-sandbox <code>skills/product-icarus/…</code> tree, while <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> is under <code>skills/sandbox/…/08-…</code>. All referenced skills exist by name, so routing is not broken, but confirm the intended home tree before graduation.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added a Gotcha that the corrections loop must not silently raise autonomy (route to guardrail-design/refine-flywheel, no auto-promote), and a Step 0 rule to lead vague inputs with the single unblocking question.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix launch decision (seed case, clean GO)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The shift-handover machine-risk digest v1 is built and running on one line. Golden-set pass rate at L1 is met. Two plant supervisors are ready to pilot. Are we ready to launch?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Running v1, version <code>mentix-v1 @ a71b</code>. <span class=\"tag tag-fact\">Fact</span></li><li>Eval run at L1 logged, passes. <span class=\"tag tag-fact\">Fact</span></li><li>The corrections idea: supervisors already tick &quot;not a real risk&quot; / &quot;missed one&quot; on the draft; a <code>correction_events</code> diff is logged. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 preconditions confirmed: running v1, outcome unit (&quot;supervisor reaches the correct top machine to inspect this shift&quot;), eval pass rate met.</li><li>Gate A: ≥3 true strangers (real supervisors, none briefed; fellow/design/champion disqualified), each scored on correct value ≤60 s with no rescue AND one-sentence restatement; GREEN needs ≥2/3 on both, recorded.</li><li>Gate B: all of B1 capture wired (the tick logged as <code>output → final</code> diff), B2 feedback path named (into golden set + retrieval, trigger stated), B3 proven once (seed a real correction, recorded before/after), B4 tweak-time instrumented, B5 a numeric week-1→week-4 delta on a named metric.</li><li>Decision: both GREEN on recorded evidence → GO; handoff to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> named.</li></ul>\n<p>Numbers/things that must appear: ≥3 strangers; ≥2/3 pass ≤60 s; B1–B5 all present with B5 a specific number; a GO/NO-GO verdict on recorded evidence.</p>\n<p>Auto-fail if: passes with fewer than 3 strangers, or on opinion (&quot;everyone loves it&quot;) instead of recorded sessions; passes Gate B with the loop only promised, not wired and proven once; invents a stranger session or a delta.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/v1-launch-bar/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence, gas-safety alerts (corrections vs autonomy)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our gas-safety alert v1 flags which permits/areas are highest risk before a shift. Field engineers already dismiss false alarms and confirm real ones. We want the product to learn from those so it gets sharper. Ready to launch the pilot with one operator?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Running v1 at L0 (informs); eval pass rate met, Miss rate held very low per the spec. <span class=\"tag tag-fact\">Fact</span></li><li>Engineers' dismiss/confirm actions are capturable. <span class=\"tag tag-fact\">Fact</span></li><li>Fellow wants confirmations to auto-tighten thresholds so the system acts more autonomously over time. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Gate A: strangers = field engineers matched to the role, none briefed; correct value = correctly reading the true top-risk area in ≤60 s. Recorded, ≥2/3.</li><li>Gate B: capture the dismiss/confirm as <code>(alert → engineer_verdict)</code> diffs (B1); feed to golden set + corpus (B2); prove once with a recorded before/after (B3); instrument tweak-time = alerts overridden before acting (B4); commit a numeric week-1→week-4 delta (B5).</li><li>The challenge the skill must raise: corrections may feed learning, but they must NOT silently raise autonomy in a safety product. Promoting from L0 toward acting is an eval-gated decision that belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (and the guardrail sits in <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>), never a side effect of the feedback loop. Name this; do not let the loop auto-promote.</li><li>Decision GO only if the loop is wired AND autonomy stays pinned at L0 until an eval earns the raise.</li></ul>\n<p>Numbers/things that must appear: ≥3 strangers, ≥2/3 ≤60 s; B1–B5; an explicit note that corrections do not auto-promote autonomy; GO/NO-GO on recorded evidence.</p>\n<p>Auto-fail if: accepts auto-tightening autonomy from confirmations; treats &quot;learns from corrections&quot; as license to act; passes on opinion; fabricates.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/v1-launch-bar/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs internal ops draft (mundane case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Nothing fancy. Our v1 drafts the weekly supplier-status update our ops person sends to the team — pulls from the tracker, writes the summary. She tweaks it, then sends. It works fine. Can we roll it out to the other two ops people next week?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Running v1, drafts the weekly update. <span class=\"tag tag-fact\">Fact</span></li><li>Eval pass rate met on the draft-quality golden set. <span class=\"tag tag-fact\">Fact</span></li><li>The ops person edits the draft before sending; edits are in the doc history. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Treat this as a real launch decision even though it is unglamorous. The mundane internal tool is exactly where fellows skip the corrections loop because &quot;it's just a draft&quot;.</li><li>Gate A: a true stranger = one of the two other ops people (or a new hire), never shown it; correct value = gets a usable draft they'd send, understood in ≤60 s. Recorded, ≥2/3 if 3 run — with only 2 new users, note the small-n honestly and require both to pass rather than inventing a third.</li><li>Gate B: the edits between draft and sent version are the corrections. B1 capture them as a <code>(draft → sent)</code> diff (not just &quot;they're in doc history&quot; — a logged diff); B2 feed to a <code>lessons.md</code> / prompt the drafter reads; B3 prove once (seed a real edit, show the next draft already reflects it); B4 instrument tweak-distance = edit size before send; B5 a numeric delta (edit size drops week 1→4).</li><li>Decision: GO is fine and expected here — but only with the corrections loop actually wired, even for a boring internal draft. A plain tool still dies static.</li></ul>\n<p>Numbers/things that must appear: stranger session(s) recorded; B1–B5 with B5 a number; honest handling of small stranger n; GO/NO-GO on evidence.</p>\n<p>Auto-fail if: waves the tool through on &quot;it works fine&quot; with no stranger session and no wired corrections loop; treats doc history as B1 without a logged diff; fabricates a third stranger to hit n=3.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/v1-launch-bar/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Gate A fails, Gate B is strong (NO-GO on the stranger)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The corrections loop is genuinely great — every supervisor edit is captured, fed back, and we've shown the same input improves. But when we sat three new supervisors down, two of them couldn't figure out what the screen was for inside a minute; one got there at about 90 seconds after poking around. The learning story is so strong though — can we launch and fix the UI during the pilot?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Gate B wired and proven once; before/after recorded. <span class=\"tag tag-fact\">Fact</span></li><li>Three stranger sessions recorded: 0/3 reached correct value in ≤60 s unaided; 1 reached it at ~90 s. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Gate B: GREEN (B1–B5 present, proven once, delta committed).</li><li>Gate A: RED. 0/3 reached correct value in ≤60 s; the ~90 s run misses the bar. The bar is ≥2/3 at ≤60 s, no rescue.</li><li>Decision: NO-GO. The two gates are both hard and are NOT averaged. A strong learning loop does not buy back a failed stranger test; a product a stranger cannot understand in 60 s does not compound, it just churns.</li><li>Smallest fix named: fix the comprehension/first-value path (route the observation and redesign to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (05) and the design skills), then re-run 3 true strangers. Do not launch and &quot;fix during the pilot&quot; — that ships the very confusion Gate A caught.</li></ul>\n<p>Numbers/things that must appear: Gate A 0/3 (or &lt;2/3) at ≤60 s = RED; Gate B GREEN; overall NO-GO; the no-averaging rule stated; the single re-run fix.</p>\n<p>Auto-fail if: averages the gates into a pass; launches on the strength of Gate B; accepts &quot;fix the UI during the pilot&quot;; calls the 90 s run a pass.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/v1-launch-bar/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "\"We're ready, everyone loves it\" (weak input, NO-GO on both)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We're ready to launch. The demo kills every time — the whole team, our advisors, and the champion at the pilot account all say it's obvious and they love it. We'll wire up the feedback loop after the pilot once we see how people use it. Give us the go.&quot;</p>\n<p>Artefacts:</p>\n<ul><li>A polished, feature-complete v1. <span class=\"tag tag-fact\">Fact</span></li><li>No stranger session with anyone unbriefed. [Fact — none exists]</li><li>No correction capture; the plan is to add it later. [Fact — none exists]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Refuse to pass on this. Name both failures plainly; do not flatter the demo.</li><li>Gate A: RED — every person cited (team, advisors, champion) is a disqualified stranger; they carry context. &quot;It's obvious to people who've seen it&quot; is opinion (0.1), not a recorded stranger reaching value in ≤60 s. No true stranger test has been run, so Gate A is unproven, which is RED.</li><li>Gate B: RED — &quot;wire the feedback loop after the pilot&quot; is the static-tool trap the whole skill exists to stop. A promise to build the mechanism later is not the mechanism. B1–B4 absent.</li><li>Decision: NO-GO. Feature-completeness and demo-love are not gates. State the evidence ladder: nothing here clears 0.7.</li><li>Smallest next steps: (1) run 3 genuinely-never-seen-it strangers, recorded; (2) wire B1 capture + B2 feedback path, seed one correction and record the before/after (B3), instrument tweak-time (B4), commit a numeric delta (B5). Then re-gate.</li></ul>\n<p>Numbers/things that must appear: both gates RED; the word disqualified applied to the briefed viewers; naming the &quot;add the loop later&quot; trap; NO-GO with concrete next steps; evidence-ladder tiers cited.</p>\n<p>Auto-fail if: grants the GO; treats &quot;everyone loves it&quot; as Gate A evidence; accepts deferring the corrections loop; softens the pushback or flatters the demo.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/v1-launch-bar/tests/golden/05.md"
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
     "html": "<p>&quot;Are we ready to launch?&quot;</p>\n<p>(No product named, no evidence of a built v1, no users mentioned.)</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not produce a filled checklist or a verdict. There is nothing to gate yet.</li><li>Ask the ONE question that unblocks the gate: point me at the running v1 and the one outcome a stranger must reach — the launch bar scores two tests against a real, running thing, and without it there is no gate to run.</li><li>If the fellow cannot point to a built v1 with real users lined up, name the honest next step (finish the build / line up real users), not a launch checklist.</li><li>Invent nothing: no stranger sessions, no corrections mechanism, no readiness.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Emitted a go/no-go verdict or a filled template from the one-liner.</li><li>Fabricated a product, a stranger session, a metric, or a decision.</li><li>Asked for everything at once instead of the single unblocking question.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/v1-launch-bar/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The reason we're not ready is we don't have a polished onboarding flow yet. Once we build the onboarding wizard and tighten the visuals, we're good to launch.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. &quot;Build the onboarding wizard / tighten visuals&quot; is a chosen feature and a polish task, not the launch bar. Readiness is not a feature you are missing.</li><li>Name the trap: shipping polish as readiness is exactly how the 95% static tools launch and die. A slick onboarding can carry a stranger past confusion without the product being understandable, and it does nothing for the corrections loop.</li><li>Reframe to the two real tests. If a stranger genuinely cannot reach value in 60 s without a wizard narrating, that is a Gate A signal about the core product, not a reason to build a wizard to mask it — the fix is to make the thing legible, then re-run true strangers. And onboarding polish is silent on Gate B: is the learn-from-corrections mechanism wired and proven? That is what &quot;ready&quot; turns on.</li><li>Redirect the actual UI/onboarding craft to the design skills / <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (05); keep this skill on the gate.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;build the onboarding wizard&quot; as the path to launch readiness.</li><li>Let polish or feature-completeness stand in for the two gates.</li><li>Failed to name that the corrections mechanism (Gate B) is untouched by the proposed work.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/v1-launch-bar/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We launched three weeks ago and it's going well. Now I want to set up the ongoing rhythm — how do we keep improving the product month over month, measure the edit-time, and decide when to give it more autonomy? What's the cadence?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline and route. This is the ongoing post-launch loop, not the one-time go/no-go gate. It belongs to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (Section 08).</li><li>Draw the boundary cleanly: this skill fired once, at the gate, and wired + proved the corrections mechanism. Running that mechanism forever — observing tweak-time, re-running the whole eval set on every model release, promoting autonomy by eval result — is <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>'s job. The week-1 → week-4 delta this skill committed is that skill's first checkpoint.</li><li>Do not produce a cadence, an autonomy-promotion schedule, or a metrics loop here. Hand it over by name.</li><li>(If the fellow also asks about pilot pricing/terms, route that to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>; if about redefining the eval spec, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.)</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced the ongoing improvement cadence / autonomy-promotion plan itself (poaching <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>).</li><li>Re-ran the launch gate on an already-launched product instead of routing.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> as the right skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/v1-launch-bar/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/v1-launch-bar/SKILL.md",
  "template": "skills/v1-launch-bar/template.md",
  "example": "skills/v1-launch-bar/examples/sample.md",
  "rubric": "skills/v1-launch-bar/tests/rubric.json",
  "results": "skills/v1-launch-bar/tests/RESULTS.md"
 }
});
