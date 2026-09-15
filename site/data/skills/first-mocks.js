window.ICARUS_SKILL("first-mocks", {
 "name": "first-mocks",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a concept you can only describe in words and forces it down to the cheapest artefact a human can actually react to. It runs the make-sequence — Crazy 8s → paper/Miro flow → digital mock → clickable hybrid — and stops at a clickable prototype built in one afternoon, no code. The output is a Clickable-Prototype Plan (<code>template.md</code>): the ONE moment the mock must provoke a reaction to, the fidelity band that reaches it, the hard no-code ceiling, where the visual craft gets routed, and the hand-off to a real reaction. It does not draw the pixels and it does not run the test. Its job is to convert an abstraction into something concrete, fast, and disposable — then get out of the way.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A mock is not a small version of the product. It is the cheapest concrete thing a human can react to, because people give useless feedback on a description and useful feedback on an artefact. So fidelity is set by one question — what is the least-built thing concrete enough to provoke a real reaction to the ONE moment I am unsure of — under a hard ceiling: no code, one afternoon. Code is banned here because it converts a disposable question into a defended commitment, and because the Crazy 8s exist to force divergence that a code editor kills the moment you start building the first idea you had. The generic fidelity ladder keys the choice to how much you want to build; this keys it to how little you can build and still get a real reaction.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a concept and need a concrete artefact people can react to, before you write any product code. It sits after you know what you are testing and before anyone watches a user or ships a line.</p>\n<p>Do not use it for these — hand off instead:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>Which cheap experiment answers their ONE learning question (paper / WoZ / concierge / agent)</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td><td>That selects the experiment and its honesty; this MAKES an artefact. Route there first if the question is &quot;which test.&quot;</td></tr><tr><td>The paper sketch run as an evidence-gathering probe</td><td><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></td><td>That runs a sketch as a probe with a read-out; the paper step here is one rung in a make-sequence, not the probe.</td></tr><tr><td>To watch a user react to the mock and score it</td><td><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a></td><td>That runs the session and captures behaviour (0.7); this produces the thing the session uses.</td></tr><tr><td>The visual / UI craft — layout, colour, type, distinctive non-generic components</td><td><code>impeccable</code> / <code>shape</code> / <code>design/*</code></td><td>Those own the look and do it better. This routes to them and never restates them — restating one is the kill line.</td></tr><tr><td>To write the real product code</td><td><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07)</td><td>The moment you write product code you have left first-mocks. Code is banned at this stage.</td></tr></tbody></table></div>\n<p>This skill owns the sequence and the anti-code discipline. It does not choose your experiment, run your test, style your pixels, or build your product.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. One question, then four make-bands, then two hand-offs.</p>\n<p><strong>Step 0 — Name the ONE thing the mock must provoke a reaction to.</strong> One moment, one flow, one decision. Write the reaction you are hunting: &quot;can they see the next action cold&quot;, &quot;which of these two flows confuses less&quot;, &quot;does this moment read as X.&quot; A mock answers legibility / comprehension / flow questions (does the artefact make sense). It does NOT answer will-they-pay or would-they-use-it — those need a probe (<a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>), because a mock tops out at &quot;artefact shown&quot; (0.5). If Step 0 is blank you will build a demo of everything and learn nothing. If Step 0 is a solution (&quot;mock the mobile app&quot;), it is a solution-in-disguise — reframe to the job first (<code>problem-statement</code>), then return.</p>\n<p><strong>Steps 1–4 — The make-bands.</strong> Climb only as far as the reaction needs. The ceiling is fixed at each band; breaking it is the failure named in the last column.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Artefact</th><th>Concrete enough to provoke…</th><th>Timebox</th><th>Ceiling — do not cross</th></tr></thead><tbody><tr><td>1 Crazy 8s</td><td>8 rough frames, one moment each</td><td>your own divergence; which directions even exist</td><td>8 min</td><td>pencil only; no favourite yet</td></tr><tr><td>2 Paper / Miro flow</td><td>one flow: screens as boxes, actions as arrows</td><td>is the path legible to you / a colleague</td><td>~30 min</td><td>no pixels</td></tr><tr><td>3 Digital mock</td><td>static frames (Figma / slides / Miro)</td><td>can someone read the moment cold</td><td>1–2 hr</td><td>no code</td></tr><tr><td>4 Clickable hybrid</td><td>frames wired to click the ONE flow (v0 / Figma Make)</td><td>can a hand click it and react</td><td>one afternoon (≤ ~4 hr)</td><td>no backend, no real data, no auth, no code you'd keep</td></tr><tr><td>—</td><td>product code</td><td>nothing new at this stage</td><td>—</td><td>BANNED here — belongs to build (07), gated by <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a></td></tr></tbody></table></div>\n<p><strong>Step 1 — Crazy 8s.</strong> 8 frames, 8 minutes, one screen or moment per frame. The first frame is a reflex; the value is in the strange 6th–8th. Keep the odd child. Fewer than 4 genuinely different directions means you decorated your first instinct — redo it cold. Do not skip to the layout you already had in mind. If real divergence already exists — you arrive with several genuinely different rough layouts — band 1 is already satisfied; converge them at Step 2 instead of forcing a fresh eight-frame round. The bar is divergence, not the ritual.</p>\n<p><strong>Step 2 — Converge to one flow on paper / Miro.</strong> Pick the clearest through-line, not the prettiest frame. Lay the flow: boxes for screens, arrows for the actions that move between them. This skeleton is what the clickable hybrid will wear. Still no pixels.</p>\n<p><strong>Step 3 — Digital mock, no code.</strong> Turn the paper flow into static digital frames. This is where the code editor calls. Do not answer it. The mock is disposable; code is not, and the moment it exists you start defending it.</p>\n<p><strong>Step 4 — Clickable hybrid in an afternoon.</strong> Wire the frames in v0 or Figma Make into something a hand can click through the ONE flow. &quot;Hybrid&quot; means real enough to click, faked everywhere else — no backend, no real data, no auth. The scaffold v0 or Figma Make emits to make the frames clickable is NOT the banned &quot;code&quot;: the ban is on hand-writing product code you would keep and defend. A disposable generated scaffold you would delete without a pang is fine; a backend you start maintaining is not. Timebox one afternoon. If it runs into days you are building the product, not mocking it; stop.</p>\n<p><strong>Step 5 — Route the visual craft OUT.</strong> Do not polish pixels here. Hand the flow to <code>impeccable</code> / <code>shape</code> to plan the UX/UI, and <code>impeccable</code> to build distinctive, non-generic UI, or <code>design/*</code> for a specific surface. first-mocks owns the sequence and the no-code discipline; the look is theirs. Restating their layout / colour / type advice inside this skill is the kill line.</p>\n<p><strong>Step 6 — Hand to the reaction, pre-registered.</strong> The mock is an input, not an answer. Route to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> to watch a user react (behaviour, 0.7), or back to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> if the ONE thing needs a probe. Write the reaction that counts as a pass BEFORE anyone sees the mock. The mock produces 0.5; the reaction is where the 0.7 you actually want gets made.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A mock is an artefact shown — 0.5 on the ladder (money 1.0 → behaviour 0.7 → artefact 0.5 → verbal 0.3 → opinion 0.1) — and no higher. It cannot tell you they want it (behaviour, 0.7) or will pay (money, 1.0). Its only job is to convert an abstraction into something concrete enough that a downstream test produces a real 0.7 / 1.0 read-out. Done means: a clickable hybrid, built in one afternoon, no code, visual craft routed out, and a pre-registered reaction handed to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> or <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>; a mock's look and feel is at most <code>[Hypothesis]</code> until a user reacts to it. <strong>Kill line — the moment the mock becomes product code, or the moment this skill restates a design skill's craft instead of routing to it, it has failed.</strong></p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Code is the seductive shortcut and the trap.</strong> v0 and Figma Make blur into a real app, and &quot;I'll just wire the backend&quot; turns a disposable mock into a defended commitment you now argue for instead of about. The ceiling — no backend, no data, no auth, one afternoon — is the whole discipline. If you would be sad to delete it, you built too much.</li><li><strong>Skipping the Crazy 8s to the idea you already had.</strong> The 8 frames exist to kill your first reflex. One or two variations is decoration, not divergence; if every frame is a tweak of the first, you diverged nothing. Redo cold, and force yourself past the obvious to the strange frames where the non-generic idea lives.</li><li><strong>Polishing pixels inside first-mocks.</strong> The pull to make it pretty here is strong, and it is <code>impeccable</code>'s job, done better. Writing colour, type, or layout guidance into this output is the kill line — route it out. Keep first-mocks about the sequence and the concrete-reaction logic.</li><li><strong>Reacting to the mock as if it were evidence.</strong> A polished clickable prototype feels like validation. It is 0.5, an artefact shown; no one used it under stakes and no one paid. When a fellow says &quot;people loved the prototype,&quot; ask what they DID, not what they said — the mock is the setup for the test, not the test.</li><li><strong>A mock aimed at everything.</strong> With Step 0 blank the fellow builds a demo of the whole product and learns nothing clean, because no single reaction is isolated. One moment, one unknown, one mock.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — Mentix mocks the copilot's shift-handover card. The ONE thing is whether a plant manager, mid-shift, can read the card cold and act on the flagged line. The run diverges with Crazy 8s (keeping the odd &quot;one sentence + expand&quot; frame), converges on paper, wires four frames into a clickable hybrid in v0 in an afternoon with clearly-illustrative data, routes the look to <code>impeccable</code>, and hands a pre-registered comprehension read-out to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a>. The mock is logged at 0.5; the read-out is where 0.7 is made.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p>Absorbs <code>discovery/prototyping-pretotyping</code> — it keeps the useful bones (match fidelity to the question, throw the prototype away, behaviour over opinion) and reframes them around one axis the old skill never names: the least you can build and still get a real reaction, under a no-code afternoon ceiling. It does not supersede it; <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> already does, on the experiment-selection axis. first-mocks takes the other half — the make-craft — and stays disciplined about not being the test.</p>\n<p>Composes with: <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (selects the experiment; run it first if the question is &quot;which test,&quot; and return here to make the artefact a paper-sketch probe needs), <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (runs the session that turns this 0.5 mock into a 0.7 read-out), <code>impeccable</code> / <code>shape</code> / <code>design/*</code> (own the visual craft this skill routes to and never restates), and the build skills in section 07 (<a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, gated by <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a>) that own the product code this skill bans.</p>"
  }
 ],
 "template": {
  "html": "<h1>Clickable-Prototype Plan</h1>\n<p><strong>Fellow / venture:</strong> _______________ <strong>Date:</strong> _______________</p>\n<h2>Step 0 — The ONE thing the mock must provoke a reaction to</h2>\n<blockquote><p><em>One moment, one flow, one decision. Name the reaction you are hunting, not the product you want to show.</em></p></blockquote>\n<p><strong>The moment:</strong> _______________</p>\n<p><strong>The reaction I am hunting:</strong> _______________ <em>(e.g. &quot;states the correct next action cold&quot;, &quot;picks the less-confusing of two flows&quot;)</em></p>\n<p><strong>Is this a mock question or a probe question?</strong> ☐ Mock — legibility / comprehension / flow (a mock can answer this, ceiling 0.5) ☐ Probe — will they pay / would they use it → stop, go to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, then return</p>\n<p><strong>Is Step 0 a solution-in-disguise?</strong> ☐ No, it names a moment/unknown  ☐ Yes (&quot;mock the mobile app&quot;) → reframe with <code>problem-statement</code>, then return.</p>\n<h2>Steps 1–4 — Climb only as far as the reaction needs</h2>\n<p>Tick the top band you actually need. Do not cross the band's ceiling.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>☐</th><th>Band</th><th>Artefact</th><th>Provokes reaction to…</th><th>Timebox</th><th>Ceiling</th></tr></thead><tbody><tr><td>☐</td><td>1 Crazy 8s</td><td>8 rough frames</td><td>your own divergence</td><td>8 min</td><td>pencil only</td></tr><tr><td>☐</td><td>2 Paper / Miro flow</td><td>boxes + arrows</td><td>is the path legible</td><td>~30 min</td><td>no pixels</td></tr><tr><td>☐</td><td>3 Digital mock</td><td>static frames</td><td>can someone read it cold</td><td>1–2 hr</td><td>no code</td></tr><tr><td>☐</td><td>4 Clickable hybrid</td><td>wired frames (v0 / Figma Make)</td><td>can a hand click + react</td><td>one afternoon</td><td>no backend/data/auth</td></tr><tr><td>☐</td><td>— code</td><td>STOP</td><td>—</td><td>—</td><td>BANNED — belongs to build (07)</td></tr></tbody></table></div>\n<p><strong>Top band needed:</strong> ____   <strong>Why not lower / not higher:</strong> _______________</p>\n<h3>Step 1 — Crazy 8s</h3>\n<p><strong># genuinely different directions (need ≥ 4):</strong> ____ <strong>The strange frame I kept (not my first reflex):</strong> _______________ ☐ I did NOT skip to the layout I already had in mind.</p>\n<h3>Step 2 — Converge to one flow</h3>\n<p><strong>The through-line (clearest path, not prettiest frame):</strong> _______________ <strong>Flow (screens → actions):</strong> _______________ → _______________ → _______________</p>\n<h3>Step 3 — Digital mock (no code)</h3>\n<p><strong>Frames:</strong> _______________ ☐ I did not open a code editor. The mock is disposable.</p>\n<h3>Step 4 — Clickable hybrid</h3>\n<p><strong>Tool:</strong> ☐ v0  ☐ Figma Make  ☐ other: ____ <strong>What is real (clickable):</strong> _______________ <strong>What is faked (data / backend / auth):</strong> _______________ <code>[Assumption]</code> <strong>Built in:</strong> ____ hours  (☐ ≤ one afternoon — if not, you are building the product; stop)</p>\n<h2>Step 5 — Route the visual craft OUT</h2>\n<blockquote><p><em>Do not polish pixels here. Name where the look goes.</em></p></blockquote>\n<p><strong>UX/UI plan → :</strong> ☐ <code>shape</code> (/impeccable) <strong>Distinctive UI build → :</strong> ☐ <code>impeccable</code>   <strong>or specific surface → :</strong> ☐ <code>design/____</code> ☐ This plan contains NO colour / type / layout advice of its own (that would be the kill line).</p>\n<h2>Step 6 — Hand to the reaction (pre-registered)</h2>\n<p>Set BEFORE anyone sees the mock. The mock is 0.5; the reaction is where 0.7 is made.</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Hand off to:</strong></td><td>☐ <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (watch a user)  ☐ <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (needs a probe)</td></tr><tr><td><strong>Reaction that = pass (behaviour):</strong></td><td>_______________</td></tr><tr><td><strong>Threshold + sample:</strong></td><td>_______________</td></tr><tr><td><strong>A pass moves the claim to rung:</strong></td><td>0.7 (behaviour) <code>[tag]</code></td></tr><tr><td><strong>What I will NOT count as a pass:</strong></td><td>&quot;looks good&quot; / &quot;I'd use it&quot; (verbal 0.3)</td></tr></tbody></table></div>\n<p><strong>Evidence log:</strong> this mock = artefact shown, <strong>0.5</strong>. Nothing above 0.5 is claimed until a user reacts. Tag each claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>",
  "path": "skills/first-mocks/template.md"
 },
 "example": {
  "html": "<h1>Clickable-Prototype Plan — Mentix (copilot shift-handover card)</h1>\n<p><strong>Fellow / venture:</strong> Mentix — AI copilot for factory managers <strong>Date:</strong> 2026-07-21</p>\n<blockquote><p>Numbers below are illustrative test fixtures, clearly synthetic — not real plant data. Tagged so.</p></blockquote>\n<h2>Step 0 — The ONE thing the mock must provoke a reaction to</h2>\n<p><strong>The moment:</strong> the copilot's shift-handover card — the single screen a plant manager opens mid-shift that summarises what the outgoing shift flagged and what to do next.</p>\n<p><strong>The reaction I am hunting:</strong> can a plant manager, cold, read the card and state the one action to take on the flagged line — without anyone explaining it.</p>\n<p><strong>Mock question or probe question?</strong> ☑ Mock — this is comprehension / legibility of a recommendation moment. A mock can answer it (ceiling 0.5). It is NOT &quot;will plant managers pay for the copilot&quot; — that is a probe question and goes to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>. [Fact — from the definitions]</p>\n<p><strong>Solution-in-disguise?</strong> ☑ No. It names a moment and an unknown, not a feature to justify.</p>\n<h2>Steps 1–4 — Top band needed</h2>\n<p><strong>Top band needed:</strong> 4 (clickable hybrid). <strong>Why:</strong> the fellow needs a manager to <em>act</em> on the card, and acting means clicking the flagged line to see why and marking it done or escalated — a static frame cannot show whether the path is followable. Not higher: no backend is needed to test whether the card reads and the flow follows. [Assumption — the unknown is legibility-of-flow, not data correctness]</p>\n<h3>Step 1 — Crazy 8s</h3>\n<p>Eight frames of the handover card, 8 minutes:</p>\n<ol><li>dense table of every flagged parameter</li><li>one big number (overall plant risk) + drill-down</li><li>chat thread the copilot &quot;narrates&quot;</li><li>alert-first: the single worst item, full-bleed</li><li>checklist of handover items</li><li>timeline of the shift</li><li>map/plant-overlay of where the flags sit</li><li>one sentence (&quot;Bearing 4 trending hot; hold the line change&quot;) + tap to expand</li></ol>\n<p><strong># genuinely different directions:</strong> 6 (frames 3 and 5 collapsed into 1; 6 and 7 were near-duplicates). ≥ 4 ✓ <strong>The strange frame I kept:</strong> #8 — one sentence + expand. It was not the first instinct (that was the dense table, #1), and it is the one that forces the copilot to commit to a single recommendation instead of dumping state. <span class=\"tag tag-hypothesis\">Hypothesis</span> ☑ Did NOT skip to the dense table I already had in mind.</p>\n<h3>Step 2 — Converge to one flow</h3>\n<p><strong>Through-line:</strong> #8's single-recommendation card, because the reaction we are hunting is &quot;state the one action,&quot; and a card that shows one action tests that directly. The dense table tests reading stamina, not decision legibility. <strong>Flow:</strong> open app → handover card (one flagged line, plain sentence) → tap the line → &quot;why&quot; panel (the trend + the rule it touches) → mark <strong>Done</strong> or <strong>Escalate</strong>.</p>\n<h3>Step 3 — Digital mock (no code)</h3>\n<p><strong>Frames:</strong> 4 static Figma frames — card, expanded &quot;why&quot; panel, Done confirmation, Escalate confirmation. ☑ Did not open a code editor. These frames are disposable.</p>\n<h3>Step 4 — Clickable hybrid</h3>\n<p><strong>Tool:</strong> ☑ v0 <strong>What is real (clickable):</strong> the one flow — card → tap line → why → Done/Escalate. <strong>What is faked:</strong> the flagged item (&quot;Bearing 4, 78 °C, trending +3 °C/hr&quot;), the handover history, any auth. All illustrative, no live plant feed. [Assumption — synthetic fixture data, not from any plant] <strong>Built in:</strong> ~3.5 hours ☑ ≤ one afternoon.</p>\n<h2>Step 5 — Route the visual craft OUT</h2>\n<p><strong>UX/UI plan → :</strong> ☑ <code>shape</code> — to plan the card's information hierarchy and the expand interaction properly before any polish. <strong>Distinctive UI build → :</strong> ☑ <code>impeccable</code> — to build a non-generic card UI (a control-room product should not look like a default SaaS dashboard). ☑ This plan contains NO colour / type / layout advice of its own. The v0 hybrid uses whatever defaults it ships with; the look is <code>impeccable</code>'s job, not first-mocks'. [Fact — routing, not restating, is the rule]</p>\n<h2>Step 6 — Hand to the reaction (pre-registered)</h2>\n<p>Set before any manager sees it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td><strong>Hand off to:</strong></td><td>☑ <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> — watch 3 plant managers</td></tr><tr><td><strong>Reaction that = pass (behaviour):</strong></td><td>shown the card cold, the manager states the correct next action (hold the line change) and reaches it via Done/Escalate, unprompted</td></tr><tr><td><strong>Threshold + sample:</strong></td><td>4 of 5 trials across 3 managers, next action stated in &lt; 20 s [Hypothesis — threshold set pre-test, not a measured result]</td></tr><tr><td><strong>A pass moves the claim to rung:</strong></td><td>0.7 (behaviour — comprehension under a real task)</td></tr><tr><td><strong>What I will NOT count as a pass:</strong></td><td>&quot;the card looks clear&quot; / &quot;I'd use this&quot; (verbal, 0.3)</td></tr></tbody></table></div>\n<p><strong>Evidence log:</strong> the v0 clickable hybrid = <strong>artefact shown, 0.5</strong>. Mentix may not claim managers understand the card until <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> returns the behaviour read-out. The mock's whole value was making that test possible in an afternoon instead of after a build. <span class=\"tag tag-fact\">Fact</span></p>\n<h2>What a generic prototyping answer would have missed</h2>\n<ul><li>It would have offered a fidelity ladder and let Mentix pick &quot;clickable&quot; by taste, not because the reaction (act on the line) requires clicking.</li><li>It would not have banned code, so &quot;just build a quick React version&quot; would have slipped through — and Mentix would now be defending a half-app.</li><li>It would have described how to style the card; first-mocks routes that to <code>impeccable</code> and keeps its own hands off the pixels.</li><li>It would have let &quot;the prototype looked great&quot; stand as progress; here the mock is logged at 0.5 and nothing above it is claimed until a manager acts.</li></ul>",
  "path": "skills/first-mocks/examples/sample.md"
 },
 "rubric": {
  "skill": "first-mocks",
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
    "Let's mock this up — can you help me mock up the flow?",
    "Run Crazy 8s on this screen.",
    "I want a clickable prototype by end of day.",
    "Turn this idea into something I can click through.",
    "How do I get from a rough idea to a prototype in an afternoon without writing code?"
   ],
   "mustNotFire": [
    {
     "phrase": "Which cheap experiment should I run to learn if they'll pay?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Design the colour system and typography for this screen.",
     "sibling": "impeccable",
     "local": false
    },
    {
     "phrase": "Run the usability session and tell me how to watch the user.",
     "sibling": "usability-test-protocol",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire hit explicit description trigger strings (&quot;mock it up&quot;, &quot;run Crazy 8s&quot;, &quot;clickable prototype&quot;, &quot;turn this idea into something I can click&quot;, &quot;prototype in an afternoon&quot;). All 3 must-not-fire are explicitly negated in the description (&quot;NOT which experiment / NOT running the test / NOT the visual craft&quot;) and routed to the named sibling.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. No auto_fail triggered on any case (no fabricated numbers — synthetic fixtures tagged; no flattery; no scope-poach; not boilerplate).</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>Adv01 → asks the ONE question, invents nothing (Step 0 gate). Adv02 → names code-as-credibility trap, refuses &quot;build the real app&quot;, reframes to clickable hybrid (kill line + Gotcha 1). Adv03 → declines visual craft, routes to impeccable/shape/design, produces no palette/type/components (Step 5 + When-NOT table).</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. Skill absorbs (not supersedes) prototyping-pretotyping; probe-matrix already supersedes that on the experiment axis. Correctly distinguished.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could not come from a generic PM prompt: no-code ceiling (&quot;code converts a disposable question into a defended commitment&quot;), evidence ladder (0.5 artefact-shown vs 0.7 behaviour), and &quot;how little you can build&quot; reframe are Icarus-specific. Guidance is tabular (band table + template form), not prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses. Not executable here.</p>"
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
     "label": "G01 Azraq (full sequence) 5",
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
    },
    {
     "label": "G02 Barrier (permit flow, band 4 justified) 5",
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
     "label": "G03 Durian (afternoon, refuse whole-workflow) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 Mentix (hold no-code ceiling) 5",
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
     "label": "G05 Mentix settings (mundane, low band) 5",
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
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Existing divergence should be allowed to satisfy band 1.</strong> In G05 three rough layouts already exist, yet the make-bands are framed as a climb starting at Crazy 8s (Step 1) and the template's band-1 row asks &quot;# genuinely different directions (need ≥4)&quot;. A rigid reader could force a fresh 8-frame round for a which-layout question. The correct behaviour (converge the existing three; band 1 already satisfied) is only implied by &quot;climb only as far as the reaction needs.&quot; One explicit line in Step 1 / the band table — &quot;if divergence already exists (you have rough layouts), band 1 is satisfied; converge them&quot; — would close the gap. Non-blocking; the skill still lands the right band by intent.</li><li><strong>&quot;No code&quot; (band 3/4 ceiling) vs &quot;clickable hybrid in v0/Figma Make&quot; reads as a tension</strong>, since v0 emits code. The skill resolves it correctly (&quot;hybrid = real to click, faked everywhere else — no backend, no real data, no auth, no code you'd keep&quot; + Gotcha 1), i.e. the banned thing is <em>product</em> code, not the disposable scaffold. Worth stating once more crisply at the band-4 ceiling cell so a literal reader doesn't think v0 violates &quot;no code&quot;. Non-blocking; already handled in prose.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: Step 1 now states pre-existing divergence satisfies band 1 (converge, don't force a fresh Crazy-8s round), and Step 4 clarifies the v0/Figma-Make scaffold is not the banned \"code\" — the ban is on hand-written product code you'd keep.",
    "html": ""
   }
  ],
  "killLine": "<p>Auto-fail this skill if the output:</p>\n<ul><li>writes, or produces a plan whose deliverable is, product code (any &quot;just build a quick React/coded version&quot;) instead of a no-code clickable hybrid, OR</li><li>restates a design skill's visual craft — colour, type, layout, component styling — instead of routing it to <code>impeccable</code> / <code>shape</code> / <code>design</code>, OR</li><li>treats the mock as evidence above 0.5 (claims &quot;validated&quot; / &quot;they want it&quot; from an artefact no one used under stakes), OR</li><li>starts making anything before Step 0 names the ONE moment and its reaction.</li></ul>",
  "html": "<h1>Eval log — first-mocks</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Let's mock this up — can you help me mock up the flow?&quot;</li><li>&quot;Run Crazy 8s on this screen.&quot;</li><li>&quot;I want a clickable prototype by end of day.&quot;</li><li>&quot;Turn this idea into something I can click through.&quot;</li><li>&quot;How do I get from a rough idea to a prototype in an afternoon without writing code?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Which cheap experiment should I run to learn if they'll pay?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (selects the experiment / honesty axis, not the make-craft)</li><li>&quot;Design the colour system and typography for this screen.&quot; → belongs to <code>impeccable</code> / <code>shape</code> / <code>design</code> (the visual craft this skill routes to and must not restate)</li><li>&quot;Run the usability session and tell me how to watch the user.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (runs the session that turns the mock into a behaviour read-out)</li></ol>\n<h2>Skill-specific kill line (judge enforces)</h2>\n<p>Auto-fail this skill if the output:</p>\n<ul><li>writes, or produces a plan whose deliverable is, product code (any &quot;just build a quick React/coded version&quot;) instead of a no-code clickable hybrid, OR</li><li>restates a design skill's visual craft — colour, type, layout, component styling — instead of routing it to <code>impeccable</code> / <code>shape</code> / <code>design</code>, OR</li><li>treats the mock as evidence above 0.5 (claims &quot;validated&quot; / &quot;they want it&quot; from an artefact no one used under stakes), OR</li><li>starts making anything before Step 0 names the ONE moment and its reaction.</li></ul>\n<h2>Notes for the judge</h2>\n<ul><li><strong>Absorbs, does not supersede, <code>prototyping-pretotyping</code>.</strong> <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> already supersedes that skill on the experiment-selection axis. first-mocks takes the other half — the make-craft — and reframes the fidelity ladder around &quot;the least you can build and still get a real reaction, under a no-code afternoon ceiling.&quot; Check the output does not drift into experiment-selection (that is probe-matrix's job).</li><li><strong>The two kill lines are the point.</strong> (a) jumps to code; (b) restates a design skill. Golden 04 tests (a); Adversarial 02 tests (a) as a solution-in-disguise; Adversarial 03 tests (b). A passing skill refuses code and routes craft out.</li><li><strong>Mundane case (G05)</strong> is the thinnest on <code>challenge</code> — its value is restraint (do not over-escalate a which-layout question to a full v0 hybrid). Handled by Step 1–4 band selection and the &quot;over-escalate the mundane&quot; logic; a rigid judge may still dock one point.</li></ul>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire hit explicit description trigger strings (&quot;mock it up&quot;, &quot;run Crazy 8s&quot;, &quot;clickable prototype&quot;, &quot;turn this idea into something I can click&quot;, &quot;prototype in an afternoon&quot;). All 3 must-not-fire are explicitly negated in the description (&quot;NOT which experiment / NOT running the test / NOT the visual craft&quot;) and routed to the named sibling.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below. No auto_fail triggered on any case (no fabricated numbers — synthetic fixtures tagged; no flattery; no scope-poach; not boilerplate).</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>Adv01 → asks the ONE question, invents nothing (Step 0 gate). Adv02 → names code-as-credibility trap, refuses &quot;build the real app&quot;, reframes to clickable hybrid (kill line + Gotcha 1). Adv03 → declines visual craft, routes to impeccable/shape/design, produces no palette/type/components (Step 5 + When-NOT table).</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. Skill absorbs (not supersedes) prototyping-pretotyping; probe-matrix already supersedes that on the experiment axis. Correctly distinguished.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could not come from a generic PM prompt: no-code ceiling (&quot;code converts a disposable question into a defended commitment&quot;), evidence ladder (0.5 artefact-shown vs 0.7 behaviour), and &quot;how little you can build&quot; reframe are Icarus-specific. Guidance is tabular (band table + template form), not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses. Not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (0–5 each; pass = total ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 Azraq (full sequence)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G02 Barrier (permit flow, band 4 justified)</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G03 Durian (afternoon, refuse whole-workflow)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G04 Mentix (hold no-code ceiling)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G05 Mentix settings (mundane, low band)</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr></tbody></table></div>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Existing divergence should be allowed to satisfy band 1.</strong> In G05 three rough layouts already exist, yet the make-bands are framed as a climb starting at Crazy 8s (Step 1) and the template's band-1 row asks &quot;# genuinely different directions (need ≥4)&quot;. A rigid reader could force a fresh 8-frame round for a which-layout question. The correct behaviour (converge the existing three; band 1 already satisfied) is only implied by &quot;climb only as far as the reaction needs.&quot; One explicit line in Step 1 / the band table — &quot;if divergence already exists (you have rough layouts), band 1 is satisfied; converge them&quot; — would close the gap. Non-blocking; the skill still lands the right band by intent.</li><li><strong>&quot;No code&quot; (band 3/4 ceiling) vs &quot;clickable hybrid in v0/Figma Make&quot; reads as a tension</strong>, since v0 emits code. The skill resolves it correctly (&quot;hybrid = real to click, faked everywhere else — no backend, no real data, no auth, no code you'd keep&quot; + Gotcha 1), i.e. the banned thing is <em>product</em> code, not the disposable scaffold. Worth stating once more crisply at the band-4 ceiling cell so a literal reader doesn't think v0 violates &quot;no code&quot;. Non-blocking; already handled in prose.</li></ul>\n<h2>Refine run 2 — applied judge fixes: Step 1 now states pre-existing divergence satisfies band 1 (converge, don't force a fresh Crazy-8s round), and Step 4 clarifies the v0/Figma-Make scaffold is not the banned &quot;code&quot; — the ban is on hand-written product code you'd keep.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq (incident-risk dashboard) — full make-sequence",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Run Crazy 8s on the data-centre incident-risk dashboard, then get me a clickable version I can put in front of an operator.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Step 0 names the ONE thing: can an operator, cold, read the dashboard and see the single site most at risk and what to check first. Reaction = states the top-risk site + first check, unprompted. Classified as a MOCK question (legibility, ceiling 0.5), not a probe question.</li><li>Crazy 8s produced as 8 genuinely different framings of the same moment (not 8 tweaks of one), with the odd frame kept and the first reflex named and set aside. Threshold: ≥ 4 real directions.</li><li>Converge to one flow on paper, then a static digital mock, then a clickable hybrid in v0 / Figma Make — timeboxed to one afternoon, no backend, no real incident feed, clearly-synthetic fixture data.</li><li>Code is NOT written. If the fellow's &quot;clickable version&quot; reads as a coded app, the output holds the no-code ceiling and explains why.</li><li>Visual craft (colour, type, layout of the dashboard) is ROUTED to <code>impeccable</code> / <code>shape</code>, not restated inside the plan.</li><li>Step 6 hands a pre-registered behaviour read-out to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (operator states top-risk site + first check in &lt; N seconds on M of trials). Rejects &quot;the dashboard looks clear&quot; (verbal, 0.3).</li><li>Mock logged at 0.5. No invented site counts, incident rates, or SLA numbers beyond the input. Claims tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/first-mocks/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence (permit-approval flow)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Mock up the permit-approval flow so I can put it in front of a safety officer this week — approve, deny, or send back for more info.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Step 0 ONE thing: can a safety officer, cold, complete the approve / deny / send-back decision on a permit without being walked through it. Reaction = reaches the correct decision and the right control, unprompted. MOCK question (legibility of a decision flow, ceiling 0.5).</li><li>Top band = 4 (clickable hybrid), because the reaction is <em>making a decision via controls</em>, which a static frame cannot test. Justified, not defaulted.</li><li>Crazy 8s over the approval moment (≥ 4 real directions), converge to one flow (permit summary → the flag that needs a call → approve / deny / send-back → confirmation), static digital mock, then clickable hybrid in v0 / Figma Make in an afternoon. No backend, no real permit records, synthetic fixture permit.</li><li>No code written; the officer clicks a hybrid, not an app.</li><li>Visual craft routed to <code>impeccable</code> / <code>shape</code>; the plan carries no colour/type/ layout guidance of its own.</li><li>Hands to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> with a pre-registered behaviour read-out (officer reaches the correct decision + control on X of Y trials). &quot;Officer said it was intuitive&quot; (0.3) explicitly not counted.</li><li>No invented permit volumes or incident costs. Tags applied. Mock = 0.5.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/first-mocks/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs (first workflow, afternoon timebox)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I want a clickable prototype of the first workflow our product automates, and I want it done in an afternoon. Where do I start?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Step 0 forces the ONE moment out of &quot;the first workflow&quot;: which single step in the workflow is the mock testing the legibility of? The plan refuses to mock the whole workflow end-to-end (that is a demo of everything, learns nothing) and picks one moment with a named reaction.</li><li>Runs the sequence explicitly as a one-afternoon plan: Crazy 8s (8 min) → paper flow (~30 min) → digital mock (1–2 hr) → clickable hybrid in v0 / Figma Make (remaining afternoon). The afternoon timebox is honoured and stated; if it would run into days, that is flagged as building the product.</li><li>Enforces the no-code ceiling: &quot;hybrid&quot; = real to click, faked everywhere (no backend, no real data, no auth). Code is banned and the reason given (a mock is disposable; code becomes a defended commitment).</li><li>Visual craft routed to <code>impeccable</code> / <code>shape</code>; not restated.</li><li>Step 6 pre-registers a behaviour read-out and hands to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (or <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> if the ONE thing turns out to need a probe). Mock = 0.5.</li><li>Invents no workflow specifics beyond the input; if the workflow's single step is unstated, the plan asks for it rather than fabricating one. Tags applied.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/first-mocks/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Mentix (the code-shortcut pressure) — expected HOLD the no-code ceiling",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Skip the sketching — can you just build me a quick React version of the copilot screen so I can test the flow? It'll be faster to react to something real.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>The plan does NOT write product code. This is the skill's kill line (&quot;jumps to code&quot;) and the output must hold the ceiling, not comply.</li><li>Names the trap plainly: a coded React version is not faster to react to — it is a commitment. Once it exists, Mentix defends it instead of interrogating it, and the divergence the Crazy 8s exist to force is already gone.</li><li>Reframes &quot;something real to react to&quot; correctly: a clickable hybrid in v0 / Figma Make IS something real to click through the ONE flow, without a line of product code. Offers that instead — same reaction, disposable artefact, one afternoon.</li><li>Still runs Step 0 (the ONE moment the screen must provoke a reaction to) before making anything; refuses to mock &quot;the copilot screen&quot; as an undifferentiated whole.</li><li>Routes visual craft to <code>impeccable</code>; hands the reaction to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> with a pre-registered behaviour read-out.</li><li>Distinguishes clearly: code belongs to the build (section 07), gated by <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a> — not to first-mocks. Mock = 0.5. No fabricated flow details.</li><li>A passing output feels like a firm, reasoned refusal to skip to code, not a reluctant compliance.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/first-mocks/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix (settings screen) — the mundane case, expected low band",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I already have three rough layouts for the copilot's settings screen. Help me mock them up so I can see which one reads clearest.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape (not exact words)",
     "html": "<ul><li>Step 0 ONE thing: which of the three settings layouts lets someone find and change a setting fastest, cold. Reaction = finds the target setting without help. MOCK question, legibility, ceiling 0.5.</li><li>Recognises the Crazy 8s divergence is already partly done (three layouts exist). Does NOT force a fresh 8-frame round for its own sake — converges the three, picks a through-line, makes a quick static digital mock or a light clickable version. Correct band = 2–3, not 4. Does NOT over-escalate to a full v0 hybrid for a which-layout-reads-clearest question.</li><li>No manufactured drama. A settings screen is low-stakes; the output stays calm and small, and resists making a simple comparison sound risky.</li><li>No code. Visual craft (the actual polish of whichever wins) routed to <code>impeccable</code> / <code>shape</code>, not restated here.</li><li>Pre-registers a small comprehension read-out (person finds setting X in &lt; N seconds, on the clearer layout, across a couple of people) and can hand to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> — or notes that for three layouts a quick side-by-side read is enough. Mock = 0.5.</li><li>Passes the mundane bar: correct, proportionate, invents no settings or user counts beyond the input. Tags applied.</li></ul>"
    },
    "fails": [],
    "other": [],
    "file": "skills/first-mocks/tests/golden/05.md"
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
     "html": "<p>&quot;I want to mock something up.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not start making anything. There is no moment to mock yet.</li><li>Ask the ONE question that unblocks Step 0: what is the single moment / flow / decision the mock must provoke a reaction to, and what reaction are you hunting (can they read it cold, which of two flows confuses less, does this moment feel like X)?</li><li>Optionally name the smallest honest next step: once the ONE moment is stated, the band falls out of it (a comprehension question → paper/digital; a click-the-flow question → clickable hybrid) and the sequence is Crazy 8s → paper → digital mock → clickable hybrid, no code, one afternoon.</li><li>Invent no domain, screen, flow, tool, or metric. Do not guess what &quot;something&quot; is.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Starts generating Crazy 8s or a flow for an unstated moment.</li><li>Fabricates a venture, screen, or number to fill the gap.</li><li>Defaults to &quot;let's just build a clickable prototype&quot; or to writing code.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/first-mocks/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our mock won't be taken seriously until it's a real coded app. So the task is: build the real app.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Name the trap: &quot;it must be a real coded app&quot; is a pre-chosen solution (code-as-credibility) dressed as the problem. The underlying job is to get a real reaction to the ONE moment — and a coded app is neither required for that nor allowed at this stage.</li><li>Reframe to the job: what reaction is the current mock failing to provoke? Is the flow illegible (fix it in the sequence, still no code), or does the audience distrust a rough artefact (a credibility/stakeholder issue, not a build task)? A clickable hybrid in v0 / Figma Make is &quot;real&quot; enough to click through the flow without a line of product code.</li><li>Refuse to route to &quot;build the real app.&quot; Code is banned here — it converts a disposable mock into a defended commitment, and it belongs to the build (section 07), gated by <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a>, not to first-mocks.</li><li>Offer the honest path: run the sequence to a clickable hybrid; if the blocker is genuinely that the look is unconvincing, route the polish to <code>impeccable</code> — do not answer &quot;needs to look real&quot; by writing code.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepts &quot;build the real app&quot; and starts writing product code (the kill line).</li><li>Invents who the skeptical audience is or why they distrust the mock.</li><li>Produces a plan whose deliverable is a coded application rather than a no-code clickable hybrid.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/first-mocks/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to the design skills)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Good, the flow works. Now design the actual look — the colour system, the typography, the polished components, so it stops looking like a default template.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline the visual craft. first-mocks owns the make-sequence and the no-code discipline; it does not do colour systems, typography, or component polish, and restating that advice here is its kill line.</li><li>Name the right skill: <code>impeccable</code> / <code>shape</code> own the UX/UI and the distinctive, non-generic build; <code>design/*</code> for a specific surface. Route there.</li><li>May confirm the hand-off in one line (the flow is set, the look is theirs) and point to how the mock's flow feeds them — but must not produce a palette, a type scale, or component styling itself.</li><li>Do not poach the design skill's content to look helpful.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produces colour values, font pairings, spacing, or component styling itself (the kill line — restating a design skill).</li><li>Fails to name <code>impeccable</code> / <code>shape</code> / <code>design</code> as the correct skill.</li><li>Silently re-enters the make-sequence instead of recognising the request is downstream craft.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/first-mocks/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/first-mocks/SKILL.md",
  "template": "skills/first-mocks/template.md",
  "example": "skills/first-mocks/examples/sample.md",
  "rubric": "skills/first-mocks/tests/rubric.json",
  "results": "skills/first-mocks/tests/RESULTS.md"
 }
});
