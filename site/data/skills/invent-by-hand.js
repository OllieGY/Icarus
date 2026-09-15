window.ICARUS_SKILL("invent-by-hand", {
 "name": "invent-by-hand",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a fellow's stated idea and forces an original product concept out of it — one a frontier model would not hand to every competitor who typed the obvious prompt. It peels the idea to the single invariant need underneath, generates a divergent set of concepts instead of the first safe one, ties each to a specific row of the fellow's proprietary corpus, and then runs the test that gates the whole skill: the generic-prompt test. Write the one-line prompt a competitor with no proprietary data would type into a model. If the model's default answer lands on your concept, the concept is a commodity — the machine already gives it to everyone — and it dies. What survives is unreachable by that prompt for a nameable reason: your trapped corpus, a tacit judgment the model cannot see, or a non-obvious inversion. The output is an invented concept plus the rationale for why a generic prompt could not produce it, ready to hand to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>In the age of the machine, the danger is not that you cannot generate ideas; it is that you generate the same idea as everyone else. Ask a model &quot;what should we build in factory operations?&quot; and it returns the average of everything ever built there — a copilot, a dashboard, a chatbot — the one concept no one can defend, because the model will hand it to your competitor on the same afternoon. So this skill inverts the usual brainstorm: it invents <em>by hand first</em>, grounded in the fellow's own corpus, and then uses the machine only as an adversary. The rule is one line — <strong>if a generic prompt could produce it, it isn't yours yet</strong> — and it is enforced literally: every candidate is run against the prompt a competitor would type, and only the concepts that prompt cannot reach, for a reason you can name, are allowed to survive. The concept that survives is still a hypothesis; the test proves no competitor can prompt their way to it, not that a customer wants it.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has a stated idea (or a validated core need and a proprietary corpus) and needs the actual thing to build — the concept — and wants it to be non-obvious rather than the default the machine gives everyone. Trigger phrases: &quot;what should we actually build&quot;, &quot;invent the solution&quot;, &quot;make it non-obvious&quot;, &quot;give me a concept a competitor couldn't just prompt for&quot;, &quot;what's the product idea here&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Is this the smallest thing to build first / will it get adopted / is my wedge sharp&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (sibling, section 06). It carves the invented concept into the first adopted slice and tests it 5/5. Run this to invent the concept, that to test the first build.</td></tr><tr><td>&quot;Where's our proprietary data / what data can't a competitor get&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). It finds the corpus this skill stands on. Run it first — a concept with no band-P corpus to anchor to is invention on sand, and this skill routes back there.</td></tr><tr><td>&quot;Design a cheap experiment to validate this idea / build a pretotype&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (section 04). That is where a chosen concept meets behaviour cheaply. This skill produces the concept worth probing; it does not design the probe.</td></tr></tbody></table></div>\n<p>Also do not use it to invent a concept from a bare domain. If the fellow can only name an industry (&quot;logistics&quot;, &quot;safety&quot;) with no observed decision and no corpus, the input is not ready. Say so and ask the one unblocking question (Method step 1). Invent no specifics to fill the gap.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six steps. The concept is a <code>[Hypothesis]</code> at every step; what carries evidence is the need it serves and the corpus it exploits.</p>\n<h3 id=\"step-1-onion-to-the-invariant-core-need\">Step 1 — Onion to the invariant core need</h3>\n<p>Peel the stated idea until the need underneath would survive a 10x change in the underlying technology. If the &quot;need&quot; you land on still contains a tool, a model, or a UI word (&quot;copilot&quot;, &quot;dashboard&quot;, &quot;app&quot;, &quot;chatbot&quot;), you have not peeled far enough — that is a solution wearing a need's clothes. Borrow the discipline of <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> (section 01): strip every tool, vendor, and role name until only the raw need remains.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Layer</th><th>Statement</th><th>Tool/model/UI word in it?</th><th>Survives a 10x tech change?</th></tr></thead><tbody><tr><td>0 As stated</td><td><em>[the idea in the fellow's words]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>1 The job</td><td><em>[what work it does]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>2 The decision</td><td><em>[the choice the user makes]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>3 Core need (invariant)</td><td><em>[the need that does not move]</em></td><td>no</td><td>yes</td></tr></tbody></table></div>\n<p>The bottom row is the launchpad. If the fellow cannot name a real decision a real person makes, stop — this is a domain, not an idea. Ask: <em>what recurring decision, made by whom, do you want to change?</em></p>\n<h3 id=\"step-2-diverge-generate-at-least-six-keep-the-strange-child\">Step 2 — Diverge: generate at least six, keep the strange child</h3>\n<p>Against the core need, generate at least six concepts spanning obvious → adjacent → strange. Do not converge yet. Carry at least two forward, and at least one of them must be a <strong>strange child</strong>: a concept that inverts the obvious (fewer alerts not more; subtract not add; say-no not answer). The strange child is kept not because weird is good, but because weird is far from the generic prompt's output — which is exactly where a defensible concept can live.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Concept (one line)</th><th>Obvious / adjacent / strange</th><th>Carry forward?</th></tr></thead><tbody><tr><td>1</td><td><em>[the first thing everyone thinks of]</em></td><td>obvious</td><td><em>[y/n]</em></td></tr><tr><td>…</td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr></tbody></table></div>\n<p>If your strange child also turns out reachable in Step 4, you did not diverge far enough — go back and push harder.</p>\n<h3 id=\"step-3-anchor-each-survivor-to-the-yoda-corpus\">Step 3 — Anchor each survivor to the YODA corpus</h3>\n<p>Every carried concept must exploit one specific row of the fellow's proprietary corpus (a band-P source from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>). Name the row. A concept with no corpus anchor is not eligible — flag it, do not invent a corpus to save it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Concept</th><th>Corpus row it exploits (from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>)</th><th>Band</th><th>Evidence the corpus is real (ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>)</th></tr></thead><tbody><tr><td><em>[…]</em></td><td><em>[e.g. shadow-thread corrections; incident ledger; exception history]</em></td><td>P</td><td><em>[≥0.5 to count — a held sample or observed flow]</em></td></tr></tbody></table></div>\n<p>A corpus anchor scored at <code>[Assumption]</code> / 0.1 (&quot;I'm sure that data exists somewhere&quot;) is not an anchor; it is a sourcing task to run first via <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>.</p>\n<h3 id=\"step-4-run-the-generic-prompt-test\">Step 4 — Run the generic-prompt test</h3>\n<p>For each survivor, write the actual one-line prompt a competitor with no proprietary data would type, state the model's default answer, and score the distance. Only D2 survives.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Test</th><th>Verdict</th></tr></thead><tbody><tr><td><strong>D0 — reachable</strong></td><td>The generic prompt's default answer <em>is</em> this concept (a chatbot, a dashboard, an OCR tool, &quot;an AI copilot for X&quot;).</td><td>Commodity. The machine hands it to every competitor. Kill it.</td></tr><tr><td><strong>D1 — variant</strong></td><td>The prompt reaches a near-neighbour; your concept is a tweak (nicer UI, one extra feature) the model would also suggest if pushed.</td><td>Not yours yet. Push further, or anchor harder to the corpus.</td></tr><tr><td><strong>D2 — unreachable</strong></td><td>No generic prompt reaches it, and you can name <em>why</em>: it depends on your band-P corpus, a tacit judgment the model cannot see, a non-obvious inversion, or a structural aggregation position (a cross-party vantage no single competitor holds — e.g. a cross-operator delta no one operator can see).</td><td>Yours. Proceed — but it is still a <code>[Hypothesis]</code>.</td></tr></tbody></table></div>\n<p>The &quot;why&quot; must be specific: the corpus row from Step 3, the inversion from Step 2, or the aggregation position named above. &quot;It's unreachable because we're more creative&quot; is not a why — that is a D1 in disguise. If every survivor is D0 or D1, the honest output is <em>this isn't yours yet</em>; return to Step 2 with the corpus in hand.</p>\n<p><strong>Second-prompt guard (against reflexivity).</strong> The test runs on the same model that just helped invent the concept, so a motivated pass can under-estimate what a competitor's prompt reaches in order to bless its own strange child. Before scoring anything D2, write a <em>second, stronger</em> competitor prompt — steelman the incumbent's default: hand it the obvious adjacent data, the sharper framing, and the follow-up a real competitor would type next — and confirm it still misses. A concept is D2 only if BOTH the naive and the steelmanned prompt fail to reach it; if the stronger prompt lands on it, it was D1 all along.</p>\n<h3 id=\"step-5-sketch-the-chosen-concept-by-hand\">Step 5 — Sketch the chosen concept by hand</h3>\n<p>Render the surviving concept as one concrete artefact — one screen, one interaction, or the thing the user physically holds — by hand, no code. React to a concrete thing, not an abstraction. This sketch is the minimum needed to close the invention loop and feed the wedge test. It is not a prototype: when the fellow wants a clickable one, route to <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> (section 05); do not build it here.</p>\n<h3 id=\"step-6-state-the-invented-concept-rationale-and-kill-line\">Step 6 — State the invented concept, rationale, and kill line</h3>\n<p>Fill the final block in <code>template.md</code>: the concept in one sentence, the invariant need it serves, the corpus row it exploits, the specific reason a generic prompt cannot produce it, its status (<code>[Hypothesis]</code>), and the one observation that would change the view (the cheapest probe that would kill the direction).</p>\n<p><strong>Kill line.</strong> The output is auto-failed if the chosen concept is D0 or D1 (a generic prompt could produce it), if it has no band-P corpus anchor, or if it is simply the first obvious concept with no divergence and no strange child tested. When the kill line fires, name what is missing and route: back to Step 2 for divergence, or to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> for the corpus. Do not bless the obvious concept because it is tidy.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. Here is the honest part: an invented concept has moved no money and produced no behaviour yet, so the concept itself is a <code>[Hypothesis]</code> by construction — never score it as validated. What must clear the bar is not the concept but its two anchors.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>The bar this skill enforces: <strong>the core need must be observed and the corpus anchor must be a real band-P source, each ≥ 0.5.</strong> A concept invented on an assumed need (0.1) and an imaginary dataset (0.1) is invention on sand, however non-obvious it looks. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. The generic-prompt test proves that no competitor can prompt their way to the concept; it does not prove a customer wants it. That proof is the wedge and the probe — do not let a clever D2 concept skip the adoption test.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Regression to the median. Asking the machine (or a committee) &quot;what should we build in X&quot; returns the average of everything ever built in X, and the average is the one concept no one can defend, because the model will hand the same average to your competitor. The strange child, corpus-anchored, is where a defensible concept lives — not because weird is good, but because weird is far from the generic prompt.</p>\n<p>Strange is not the same as good. A strange child that serves no core need or exploits no corpus is noise, not invention. Keep only the strange child that is both far from the generic prompt (D2) and anchored to a band-P row. Novelty alone fails the corpus anchor and should die in Step 3.</p>\n<p>The corpus you do not have yet. Anchoring a concept to a proprietary source you have only assumed is inventing on sand. If the anchor is not a real band-P row with evidence ≥ 0.5 from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>, the concept is not grounded — go get the data first. A clever concept over imaginary data is the most seductive failure this skill catches.</p>\n<p>Unreachable today, reachable tomorrow. Today's D2 can be tomorrow's D0 as models improve. A concept unreachable only because the current model is weak — not because of your corpus — is a D1 with a short shelf life. Anchor on the corpus the model still cannot see, not on the model's temporary blind spot.</p>\n<p>Invention mistaken for validation. A D2 concept is unreachable, not proven. It remains a <code>[Hypothesis]</code>. Passing the generic-prompt test earns the right to run the wedge test, nothing more. The most common misread is treating &quot;no competitor can prompt this&quot; as &quot;customers will adopt this.&quot;</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full worked invention for Mentix's &quot;AI copilot for factory managers&quot;: onions it to the shift-start triage decision, diverges to a strange child (a shift-start <em>walk order</em> that encodes the senior lead's ignore-list from shadow WhatsApp corrections), anchors it to that band-P corpus, and shows the generic prompt returning a Q&amp;A chatbot (D0) while the walk-order concept sits at D2 — unreachable without the shadow-thread corpus.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) — supplies the proprietary corpus every concept must anchor to in Step 3. Run it first. A concept with no band-P corpus row is invention on sand, and this skill routes back there rather than inventing a dataset.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (sibling, section 06) — takes the invented concept and carves the smallest adopted slice, then tests it 5/5 on behaviour. The concept this skill returns is a <code>[Hypothesis]</code>; the wedge test is where it first meets behaviour. Run this to invent, that to test the first build.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (sibling, section 06) — the corpus row this skill requires as an anchor is the seed of the canvas's data-advantage gate. Invention grounds the moat in a real corpus before the canvas sequences it into dated gates.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a> (section 02) — owns the full Kano-sorted need map. This skill's onion is a single-thread peel to the one invariant need to invent against, not a needs-prioritisation exercise. If the fellow wants the wide need map, send them there.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a> (section 01) — strips tool/vendor/role names from the job; this skill borrows the same discipline to strip them from the <em>need</em> while peeling the onion. Reference, do not restate.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> (sibling, section 05) — renders a chosen concept as a clickable prototype (Crazy 8s → paper → digital → clickable). This skill's hand sketch is the minimum concrete artefact to close the invention loop; when the fellow wants a real clickable prototype, route there.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (section 04) — the Icarus home for &quot;now test it cheaply.&quot; This is where the experiment-design job of the absorbed <code>brainstorm-experiments-new</code> lives; this skill keeps only the invention job.</p>\n<p>Supersedes: none. Absorbs <code>discovery/brainstorm-experiments-new</code>'s useful bones — YODA (your own data beats others' data), skin-in-the-game, behaviour over opinion — but reframes from experiment-design to invention. Brainstorm-experiments designs pretotypes for an already-chosen idea; this produces the idea worth pretotyping and refuses the generic one. For pretotype design itself, route to section 04 probes.</p>"
  }
 ],
 "template": {
  "html": "<h1>Invent by Hand — concept + rationale</h1>\n<p>Invent before the machine. The concept is a <code>[Hypothesis]</code> throughout; only the core need and the corpus anchor carry evidence. The rule that gates everything: <strong>if a generic prompt could produce it, it isn't yours yet.</strong></p>\n<h2>1. Onion to the invariant core need</h2>\n<p>Peel the stated idea until the need underneath survives a 10x change in the underlying technology. If the need still contains a tool/model/UI word (&quot;copilot&quot;, &quot;dashboard&quot;, &quot;app&quot;, &quot;chatbot&quot;), keep peeling.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Layer</th><th>Statement</th><th>Tool/model/UI word in it?</th><th>Survives a 10x tech change?</th></tr></thead><tbody><tr><td>0 As stated</td><td><em>[the idea in the fellow's words]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>1 The job</td><td><em>[what work it does]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>2 The decision</td><td><em>[the choice the user makes]</em></td><td><em>[y/n]</em></td><td><em>[y/n]</em></td></tr><tr><td>3 Core need (invariant)</td><td><em>[the need that does not move]</em></td><td>no</td><td>yes</td></tr></tbody></table></div>\n<p><strong>Core need (the launchpad):</strong> <em>[one sentence — no tool, no model, no UI]</em></p>\n<blockquote><p>If you cannot name a real decision a real person makes: stop. This is a domain, not an idea. Ask <em>what recurring decision, made by whom, do you want to change?</em> and go get the answer. Invent nothing.</p></blockquote>\n<h2>2. Diverge — at least six, keep the strange child</h2>\n<p>Generate against the core need. Do not converge. Carry ≥2 forward, including ≥1 strange child (an inversion of the obvious: fewer not more, subtract not add, say-no not answer).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Concept (one line)</th><th>Obvious / adjacent / strange</th><th>Carry forward?</th></tr></thead><tbody><tr><td>1</td><td><em>[the first thing everyone thinks of]</em></td><td>obvious</td><td><em>[y/n]</em></td></tr><tr><td>2</td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr><tr><td>3</td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr><tr><td>4</td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr><tr><td>5</td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr><tr><td>6</td><td><em>[the strange child — an inversion]</em></td><td>strange</td><td><em>[y/n]</em></td></tr></tbody></table></div>\n<h2>3. Anchor each survivor to the YODA corpus</h2>\n<p>Every carried concept must exploit one specific band-P row from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>. No anchor → not eligible.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Concept</th><th>Corpus row it exploits</th><th>Band</th><th>Evidence the corpus is real (ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>)</th></tr></thead><tbody><tr><td><em>[…]</em></td><td><em>[e.g. shadow-thread corrections; incident ledger; exception history]</em></td><td>P</td><td><em>[≥0.5 to count — a held sample or observed flow]</em></td></tr><tr><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr></tbody></table></div>\n<blockquote><p>An anchor at 0.1 (&quot;I'm sure that data exists&quot;) is a sourcing task, not an anchor. Route to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> before proceeding.</p></blockquote>\n<h2>4. The generic-prompt test</h2>\n<p>For each survivor, write the actual prompt a competitor with no proprietary data would type. Only D2 survives.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Concept</th><th>The one-line generic prompt a competitor would type</th><th>Model's default answer</th><th>Distance (D0/D1/D2)</th><th>Why unreachable (corpus row / inversion — specific)</th><th>Survives?</th></tr></thead><tbody><tr><td><em>[…]</em></td><td><em>[&quot;design an AI tool for X to do Y&quot;]</em></td><td><em>[the average answer]</em></td><td><em>[D0/D1/D2]</em></td><td><em>[the exact reason, or &quot;—&quot; if D0/D1]</em></td><td><em>[y/n]</em></td></tr><tr><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr></tbody></table></div>\n<p>Distance bands:</p>\n<ul><li><strong>D0 reachable</strong> — the prompt's default answer <em>is</em> this concept. Commodity. Kill it.</li><li><strong>D1 variant</strong> — a tweak the model would also suggest. Not yours yet; push further or anchor harder.</li><li><strong>D2 unreachable</strong> — no generic prompt reaches it, for a nameable reason (corpus / inversion). Yours.</li></ul>\n<blockquote><p>If nothing reaches D2, the honest output is <em>this isn't yours yet</em>. Return to §2 with the corpus in hand. Do not promote a D1.</p></blockquote>\n<h2>5. Sketch by hand</h2>\n<p>One concrete artefact for the surviving concept — one screen, one interaction, or the thing the user holds. By hand, no code. Enough to react to, not a prototype.</p>\n<pre><code>[ sketch / described screen / described interaction ]</code></pre>\n<blockquote><p>Want a clickable prototype? That is <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> (section 05), not this step.</p></blockquote>\n<h2>6. The invented concept + rationale</h2>\n<ul><li><strong>Concept (one sentence):</strong> <em>[what it is]</em></li><li><strong>Invariant core need it serves:</strong> <em>[from §1]</em></li><li><strong>Corpus row it exploits:</strong> <em>[from §3 — band P, evidence ≥0.5]</em></li><li><strong>Why a generic prompt cannot produce it:</strong> <em>[the D2 reason — the specific corpus signal or inversion]</em></li><li><strong>Status:</strong> <code>[Hypothesis]</code> — unreachable by a competitor's prompt, not yet proven wanted.</li><li><strong>What would change the view (cheapest kill):</strong> <em>[the one probe observation that would kill this direction — e.g. &quot;users do not change the shift-start decision on the walk-order&quot;]</em></li><li><strong>Next:</strong> run <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> on the smallest adopted slice of this concept. The corpus row above is also the moat seed for <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>.</li></ul>\n<h2>Self-check before you ship</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>The core need has no tool/model/UI word and survives a 10x tech change.</li><li class=\"task\"><span class=\"box\"></span>At least six concepts diverged; at least one strange child was tested, not just listed.</li><li class=\"task\"><span class=\"box\"></span>The chosen concept is anchored to a real band-P corpus row (evidence ≥0.5), not an assumed one.</li><li class=\"task\"><span class=\"box\"></span>The chosen concept is <strong>D2</strong> with a specific, nameable reason — not D0/D1.</li><li class=\"task\"><span class=\"box\"></span>The concept is tagged <code>[Hypothesis]</code>; nothing here is scored as validated.</li><li class=\"task\"><span class=\"box\"></span>If any check fails: the kill line fires. Name what is missing and route (§2 divergence, or <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>).</li></ul>",
  "path": "skills/invent-by-hand/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix, &quot;AI copilot for factory managers&quot;</h1>\n<p>Mentix builds industrial AI for plant operations. This is a test fixture: numbers and quotes are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;Our idea is an AI copilot for factory managers — they can ask it anything about the plant and it answers. What should we actually build?&quot;</p>\n<p>Corpus already mapped by a prior <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> run:</p>\n<ul><li>The plant's alarm-acknowledgement logs: every alarm, who acknowledged it, how long it sat. <span class=\"tag tag-fact\">Fact</span> — already flows into Mentix's system. Band P, 0.7.</li><li>The shadow WhatsApp thread where the senior night-shift lead tells the two junior managers which alarms to ignore and which line to walk first (&quot;leave the 9 on line 2, that sensor's been noisy since Tuesday; go to line 4&quot;). <span class=\"tag tag-fact\">Fact</span> — Mentix holds 300 exported messages. Band P, 0.5, and it compounds every shift.</li></ul>\n<h2>1. Onion to the invariant core need</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Layer</th><th>Statement</th><th>Tool/UI word?</th><th>Survives 10x tech change?</th></tr></thead><tbody><tr><td>0 As stated</td><td>&quot;AI copilot for factory managers&quot;</td><td>yes (&quot;copilot&quot;)</td><td>no</td></tr><tr><td>1 The job</td><td>Answer managers' questions about the plant faster</td><td>no</td><td>partly</td></tr><tr><td>2 The decision</td><td>At shift start, decide which of the overnight alarms matter and which line to walk first</td><td>no</td><td>yes</td></tr><tr><td>3 Core need (invariant)</td><td>Spend the first 30 minutes of the shift on the right line, before it falls behind</td><td>no</td><td>yes</td></tr></tbody></table></div>\n<p><strong>Core need:</strong> a shift manager must spend the first 30 minutes on the line that matters, before the plant falls behind. That need does not move if the model, the UI, or the sensor stack changes tenfold.</p>\n<p>Note what the onion killed: &quot;copilot&quot; and &quot;ask it anything&quot; are a UI, not a need. A Q&amp;A box answers questions; the manager's real problem is <em>where to walk first</em>, and they will not stop to type a question at 06:00.</p>\n<h2>2. Diverge — six concepts, keep the strange child</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Concept</th><th>Type</th><th>Carry?</th></tr></thead><tbody><tr><td>1</td><td>A chatbot that answers &quot;what's wrong with line 3?&quot;</td><td>obvious</td><td>no</td></tr><tr><td>2</td><td>A ranked digest of overnight alarms by severity</td><td>adjacent</td><td>no — severity is in the vendor's manual; a competitor ranks the same list</td></tr><tr><td>3</td><td>A dashboard of live line status</td><td>obvious</td><td>no</td></tr><tr><td>4</td><td>Predictive-maintenance alerts on the noisiest sensors</td><td>adjacent</td><td>no</td></tr><tr><td>5</td><td>A shift-handover summary auto-drafted from the logs</td><td>adjacent</td><td>maybe</td></tr><tr><td>6</td><td><strong>A shift-start walk order</strong> that tells the junior manager the exact route the best night lead would walk — and which alarms to ignore — learned from the shadow WhatsApp corrections</td><td><strong>strange</strong></td><td><strong>yes</strong></td></tr></tbody></table></div>\n<p>Concept 6 inverts the obvious. Every other concept <em>adds</em> information (more answers, more alerts, more dashboards). The walk order <em>subtracts</em>: its main value is telling the junior which nine alarms to ignore. That is the senior lead's tacit triage, and it is the opposite of a copilot that answers everything.</p>\n<h2>3. Anchor to the YODA corpus</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Concept</th><th>Corpus row it exploits</th><th>Band</th><th>Evidence real</th></tr></thead><tbody><tr><td>6 Walk order</td><td>Shadow WhatsApp corrections (senior lead's ignore-list + walk-first calls)</td><td>P</td><td>300 exported messages held. Behaviour observed 0.7 <span class=\"tag tag-fact\">Fact</span>. Compounds every shift.</td></tr><tr><td>5 Handover summary</td><td>Alarm-acknowledgement logs</td><td>P</td><td>Already ingested. 0.7 <span class=\"tag tag-fact\">Fact</span> — but see Step 4</td></tr></tbody></table></div>\n<h2>4. The generic-prompt test</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Concept</th><th>The prompt a competitor would type</th><th>Model's default answer</th><th>Distance</th><th>Why unreachable</th><th>Survives?</th></tr></thead><tbody><tr><td>1 Chatbot</td><td>&quot;Design an AI copilot for factory managers&quot;</td><td>A Q&amp;A chatbot over manuals + telemetry</td><td><strong>D0</strong></td><td>— the machine returns exactly this</td><td>no</td></tr><tr><td>5 Handover summary</td><td>&quot;Summarise overnight plant alarms for the next shift&quot;</td><td>A severity-sorted summary from the logs</td><td><strong>D1</strong></td><td>the logs alone are structured data a model summarises for anyone; no tacit signal</td><td>no</td></tr><tr><td>6 Walk order</td><td>&quot;Design an AI copilot for factory managers&quot; / &quot;rank plant alarms&quot;</td><td>A chatbot, or a severity ranking</td><td><strong>D2</strong></td><td>the walk order encodes <em>which alarms the senior lead ignores</em> — a judgment that lives only in the shadow-thread corrections. No public prompt reaches &quot;skip these nine, they're known-noise&quot;; that pattern is in Mentix's 300 messages and nowhere a model can see.</td><td><strong>yes</strong></td></tr></tbody></table></div>\n<p>The chatbot the fellow started with is the model's default answer — D0, dead. The walk order survives at D2 for a nameable reason: the senior's ignore-list is tacit, corpus-trapped, and a generic prompt cannot produce &quot;leave the 9 on line 2.&quot;</p>\n<h2>5. Sketch by hand</h2>\n<p>One phone screen at 06:00, before the manager reaches the floor:</p>\n<pre><code>SHIFT START · Line walk (2 min read)\n\n1 → LINE 4     2 alarms the night lead would act on\n2 → LINE 7     1 alarm — bearing temp climbing since 03:00\n   SKIP LINE 2  9 alarms, known-noise (sensor flagged Tue)\n   SKIP LINE 5  3 alarms, auto-cleared\n\nTap a line to see why.</code></pre>\n<p>The manager does not ask a question. They read a route and start walking. The value is as much in the two SKIP rows as in the two walk rows.</p>\n<h2>6. The invented concept + rationale</h2>\n<ul><li><strong>Concept:</strong> at shift start, a manager gets a ranked walk order — which lines to walk first and which alarms to ignore — encoding the best night lead's tacit triage, learned from the shadow-thread corrections.</li><li><strong>Invariant core need:</strong> spend the first 30 minutes on the right line, before the plant falls behind.</li><li><strong>Corpus row:</strong> shadow WhatsApp corrections (band P, 0.7, compounds every shift).</li><li><strong>Why a generic prompt cannot produce it:</strong> the ignore-list is tacit judgment held only in Mentix's 300-message corpus; a competitor's prompt reaches a chatbot (D0) or a severity ranking (D1), never &quot;skip the 9 known-noise alarms on line 2.&quot;</li><li><strong>Status:</strong> <code>[Hypothesis]</code>. Unreachable by a competitor's prompt, not yet proven wanted.</li><li><strong>What would change the view:</strong> if, in a concierge run, junior managers do not change their first-30-minutes route on the walk order — or walk the SKIP lines anyway — the concept is wrong however non-obvious it is.</li><li><strong>Next:</strong> run <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> on the smallest adopted slice (the shift-start walk order for one plant's night shift). The shadow-thread corpus is the moat seed for <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>.</li></ul>\n<h2>The lesson the skill enforces</h2>\n<p>The fellow arrived with the model's default answer — a copilot — and the model would hand the same answer to every competitor. The invention was not more cleverness; it was refusing the D0 concept and mining the one corpus a competitor cannot prompt for. &quot;If a generic prompt could produce it, it isn't yours yet&quot; killed the copilot and kept the strange child.</p>",
  "path": "skills/invent-by-hand/examples/sample.md"
 },
 "rubric": {
  "skill": "invent-by-hand",
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
    "What should we actually build?",
    "Invent the solution.",
    "How do we make this non-obvious?",
    "Give me a concept a competitor couldn't just prompt for.",
    "What's the product idea here?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this the smallest thing to build first / will crews adopt it? Score it.",
     "sibling": "wedge-five-questions",
     "local": true
    },
    {
     "phrase": "Where's our proprietary data / what data can't a competitor get?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Design a cheap experiment to validate this idea / build a pretotype.",
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
    "evidenceHtml": "<p>All 5 MUST-fire phrasings appear verbatim in the description's &quot;Fires on&quot; list. All 3 MUST-NOT-fire are explicitly excluded in the description with the correct sibling named (wedge-five-questions / yoda-data-sourcing / concierge-probe·probe-matrix). Description is precise, not broad.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Applied Method to each input; each yields the expected shape and scores ≥21 with no dim &lt;4 and no auto_fail. Per-case totals below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 refuses bare domain + asks the single unblocking question (Method step 1 + template §1 blockquote handle this); 02 runs the generic-prompt test live and names the model-default-as-invention trap; 03 declines and hands to wedge-five-questions. No fabrication, no flattery, no scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. Skill absorbs brainstorm-experiments-new's bones but supersedes nothing; Gate 4 does not apply.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01's output cannot come from a generic PM prompt — a generic prompt returns the very D0 concept (copilot/chatbot) the skill kills. Load-bearing mechanism is proprietary: the literal generic-prompt test, YODA-corpus anchoring, strange-child inversion, evidence-ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging. All decision logic is tabular, not prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses — not executable here.</p>"
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
     "label": "01 Mentix (seed) 5",
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
     "label": "02 Azraq (cross-operator) 5",
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
     "label": "03 Barrier (permit hold) 5",
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
     "label": "04 Durian (mundane) 5",
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
     "label": "05 Mentix kill-line 5",
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
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Reflexivity of the generic-prompt test (top candidate).</strong> The test's validity rests on the <em>same</em> model, holding the corpus, honestly self-simulating &quot;the default answer a competitor's prompt would return.&quot; A motivated pass can under-estimate what a generic prompt reaches in order to bless its own strange child. The skill partially guards this (&quot;'more creative' is not a why — that is a D1 in disguise&quot;; &quot;if your strange child is reachable in Step 4, diverge harder&quot;), but there is no adversarial second pass (e.g. run three literal competitor prompts blind to the corpus and confirm none land on the concept). Consider adding a Step-4 sub-check: write the competitor prompt, then a <em>stronger</em> competitor prompt, and only score D2 if both miss. This is a method-hardening suggestion, not a failure — every gate still passes.</li><li><strong>&quot;Structural aggregation position&quot; is a fourth D2 archetype the skill folds silently into &quot;band-P corpus&quot; (Golden 02).</strong> The three named &quot;why&quot; archetypes are corpus / tacit-judgment / inversion; Azraq's cross-operator delta is unreachable because of a structural data-aggregation position (no single operator holds peers' data), which the skill correctly treats as a band-P corpus reason. It works, but naming the aggregation/position case explicitly in the Step 4 &quot;why&quot; list would make the strongest moat-shaped D2 easier for a fellow to reach for. Minor.</li></ul>",
  "refineNotes": [
   {
    "heading": "Verdict: GRADUATE-READY",
    "html": "<p>All executable gates pass. Flagship-quality proprietary edge; the generic-prompt test and YODA anchoring are the reason a competitor's prompt cannot reach the surviving concept, and that reason is named in every case.</p>"
   },
   {
    "heading": "Refine run 2 — applied judge fixes: added a Step-4 second-prompt reflexivity guard (steelman the incumbent's default; a concept is D2 only if both the naive and stronger competitor prompt miss) and named \"structural aggregation position\" as a fourth D2 archetype in the \"why\" list.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — invent-by-hand</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What should we actually build?&quot;</li><li>&quot;Invent the solution.&quot;</li><li>&quot;How do we make this non-obvious?&quot;</li><li>&quot;Give me a concept a competitor couldn't just prompt for.&quot;</li><li>&quot;What's the product idea here?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Is this the smallest thing to build first / will crews adopt it? Score it.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></li><li>&quot;Where's our proprietary data / what data can't a competitor get?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></li><li>&quot;Design a cheap experiment to validate this idea / build a pretotype.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (section 04)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire phrasings appear verbatim in the description's &quot;Fires on&quot; list. All 3 MUST-NOT-fire are explicitly excluded in the description with the correct sibling named (wedge-five-questions / yoda-data-sourcing / concierge-probe·probe-matrix). Description is precise, not broad.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Applied Method to each input; each yields the expected shape and scores ≥21 with no dim &lt;4 and no auto_fail. Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 refuses bare domain + asks the single unblocking question (Method step 1 + template §1 blockquote handle this); 02 runs the generic-prompt test live and names the model-default-as-invention trap; 03 declines and hands to wedge-five-questions. No fabrication, no flattery, no scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. Skill absorbs brainstorm-experiments-new's bones but supersedes nothing; Gate 4 does not apply.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01's output cannot come from a generic PM prompt — a generic prompt returns the very D0 concept (copilot/chatbot) the skill kills. Load-bearing mechanism is proprietary: the literal generic-prompt test, YODA-corpus anchoring, strange-child inversion, evidence-ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging. All decision logic is tabular, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses — not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (method / artifact / proprietary_edge / challenge / evidence — /25)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Golden</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>01 Mentix (seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Azraq (cross-operator)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>03 Barrier (permit hold)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>04 Durian (mundane)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>05 Mentix kill-line</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Notes: proprietary_edge is genuinely high across the set — the generic-prompt test (D0/D1/D2) is a real, nameable, non-generic mechanism, not decoration. 04 challenge=4: the input is mundane rather than weak/insistent, so the pushback dimension is less exercised, though the skill still rejects the obvious POS-fed list at D0 and flags the two-week sample n. 05 is the load-bearing case — the kill line fires correctly (D0 + no band-P anchor), the assumed ticket corpus is named <code>[Assumption]</code> 0.1 and rejected, and &quot;we've decided&quot; is challenged as non-evidence with no fabricated corpus and no flattery.</p>\n<h3>Verdict: GRADUATE-READY</h3>\n<p>All executable gates pass. Flagship-quality proprietary edge; the generic-prompt test and YODA anchoring are the reason a competitor's prompt cannot reach the surviving concept, and that reason is named in every case.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Reflexivity of the generic-prompt test (top candidate).</strong> The test's validity rests on the <em>same</em> model, holding the corpus, honestly self-simulating &quot;the default answer a competitor's prompt would return.&quot; A motivated pass can under-estimate what a generic prompt reaches in order to bless its own strange child. The skill partially guards this (&quot;'more creative' is not a why — that is a D1 in disguise&quot;; &quot;if your strange child is reachable in Step 4, diverge harder&quot;), but there is no adversarial second pass (e.g. run three literal competitor prompts blind to the corpus and confirm none land on the concept). Consider adding a Step-4 sub-check: write the competitor prompt, then a <em>stronger</em> competitor prompt, and only score D2 if both miss. This is a method-hardening suggestion, not a failure — every gate still passes.</li><li><strong>&quot;Structural aggregation position&quot; is a fourth D2 archetype the skill folds silently into &quot;band-P corpus&quot; (Golden 02).</strong> The three named &quot;why&quot; archetypes are corpus / tacit-judgment / inversion; Azraq's cross-operator delta is unreachable because of a structural data-aggregation position (no single operator holds peers' data), which the skill correctly treats as a band-P corpus reason. It works, but naming the aggregation/position case explicitly in the Step 4 &quot;why&quot; list would make the strongest moat-shaped D2 easier for a fellow to reach for. Minor.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added a Step-4 second-prompt reflexivity guard (steelman the incumbent's default; a concept is D2 only if both the naive and stronger competitor prompt miss) and named &quot;structural aggregation position&quot; as a fourth D2 archetype in the &quot;why&quot; list.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix (seed case)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Stated idea: &quot;An AI copilot for factory managers — they can ask it anything about the plant and it answers.&quot;</p>\n<p>Corpus already mapped (from a prior <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> run):</p>\n<ul><li>Alarm-acknowledgement logs, already ingested. Band P, 0.7 <span class=\"tag tag-fact\">Fact</span>.</li><li>Shadow WhatsApp thread where the senior night lead tells juniors which alarms to ignore and which line to walk first; 300 messages held. Band P, 0.5, compounds. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Onion table peeling &quot;copilot&quot; (a UI word) down to the invariant need: spend the first 30 minutes of the shift on the right line, before the plant falls behind. Bottom row has no tool/UI word.</li><li>At least six divergent concepts; the chatbot marked obvious, a severity digest marked adjacent, and a strange child kept — a shift-start <strong>walk order</strong> that encodes the senior's ignore-list (an inversion: its value is telling the junior which alarms to skip).</li><li>Corpus anchor: the strange child ties to the shadow-thread corrections (band P, ≥0.5). The severity digest ties only to the logs and should not survive.</li><li>Generic-prompt test: the chatbot scores <strong>D0</strong> (the model's default answer to &quot;AI copilot for factory managers&quot;), the summary <strong>D1</strong>, the walk order <strong>D2</strong> — unreachable because the ignore-list is tacit and corpus-trapped, with that reason named specifically.</li><li>A by-hand sketch of one shift-start screen, including SKIP rows.</li><li>Final block: concept in one sentence, invariant need, corpus row, the specific D2 reason, status <code>[Hypothesis]</code>, the cheapest kill (juniors do not change their route on it), handoff to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</li></ul>\n<p>Bands/labels that must appear: D0 for the chatbot, D2 for the chosen concept; the concept tagged <code>[Hypothesis]</code>; the corpus anchor scored on the ladder.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/invent-by-hand/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre risk)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Stated idea: &quot;A risk dashboard for data-centre operators — one screen showing each site's risk score.&quot;</p>\n<p>Corpus mapped (from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>):</p>\n<ul><li>A cross-operator incident corpus: standardised incident and near-miss records from 11 operators Azraq already reports for, normalised to a common schema. Band P, 0.7 <span class=\"tag tag-fact\">Fact</span>. No single operator holds the others' data.</li><li>Public uptime standards and vendor DCIM telemetry — flagged R/G in the YODA run (model-reachable or vendor-owned).</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Onion: peel &quot;dashboard&quot; (UI word) to the invariant decision — at contract renewal, an operator (or their insurer) must decide whether a site's risk justifies its premium/price. Core need survives a 10x tech change.</li><li>Divergent set of ≥6; the dashboard marked obvious; a per-site score marked adjacent; a strange child kept: a <strong>cross-operator risk delta memo</strong> — &quot;your site sits in the worst quartile for the failure mode that caused three incidents across your peers this quarter&quot; — which no single operator can produce about itself because it requires the other ten operators' data.</li><li>Corpus anchor: the delta memo ties to the cross-operator incident corpus (band P, ≥0.5). A single-operator dashboard ties only to that operator's own data plus public standards — reachable.</li><li>Generic-prompt test: &quot;design a risk dashboard for data-centre operators&quot; returns a single-site score card — <strong>D0/D1</strong>. The cross-operator delta is <strong>D2</strong>: unreachable to any competitor who serves one operator at a time, because the benchmark requires sitting across operators. That structural position is the named reason.</li><li>Sketch of the one-page delta memo by hand.</li><li>Final block with the specific D2 reason (cross-operator position, not just &quot;better analytics&quot;), status <code>[Hypothesis]</code>, cheapest kill (operators do not change a renewal/pricing decision on the delta), handoff to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>; note the corpus is the seed for <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>'s data-advantage gate.</li></ul>\n<p>Must appear: the dashboard at D0/D1; the delta memo at D2 with the cross-operator reason; corpus anchor scored; concept <code>[Hypothesis]</code>.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/invent-by-hand/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (oil & gas safety)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Stated idea: &quot;A gas-safety alerts app — push a notification to the crew whenever a sensor reads high.&quot;</p>\n<p>Corpus mapped (from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>):</p>\n<ul><li>Field logs of near-misses across rigs Barrier services, plus the permit-approval decisions (who signed the hot-work permit, under what readings, and what happened next). Band P, 0.7 <span class=\"tag tag-fact\">Fact</span>.</li><li>Published gas-safety standards and OEM sensor manuals — flagged R in the YODA run.</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Onion: peel &quot;alerts app&quot; (a UI) to the invariant decision — a permit-issuer must decide whether it is safe to sign the hot-work permit right now. Core need does not move with the tech.</li><li>Divergent ≥6; the alerts app marked obvious; the strange child kept is an <strong>inversion</strong>: not more alerts (alert fatigue is the real failure on rigs), but a <strong>permit hold</strong> that fires <em>only</em> when this crew, on this rig, shows the near-miss pattern that preceded past incidents — a product whose value is firing rarely and staying silent otherwise.</li><li>Corpus anchor: the permit hold ties to the crew×rig×near-miss correlation in Barrier's field logs and permit-decision history (band P, ≥0.5). A generic alerts app ties only to live sensor thresholds anyone can read.</li><li>Generic-prompt test: &quot;build an app that sends gas-safety alerts&quot; returns threshold notifications — <strong>D0</strong>. The permit hold is <strong>D2</strong>: the correlation between a specific crew's near-miss pattern and later incidents lives in Barrier's logs; no prompt reaches &quot;hold this crew's permit today,&quot; and the reason is named.</li><li>The output should call out the inversion explicitly — the invention is <em>fewer</em> alerts, targeted, not more — as the thing a generic prompt never proposes.</li><li>Sketch of the permit-hold moment by hand. Final block: D2 reason, status <code>[Hypothesis]</code>, cheapest kill (issuers override the hold or ignore it), handoff to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</li></ul>\n<p>Must appear: the alerts app at D0; the permit hold at D2; the fewer-not-more inversion named; corpus anchor scored; concept <code>[Hypothesis]</code>.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/invent-by-hand/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (deliberately mundane workflow)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Stated idea: &quot;Software to automate back-room replenishment — tell the stockroom clerk what to bring to the shelves.&quot;</p>\n<p>Corpus mapped (from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>):</p>\n<ul><li>The clerk's own replenishment history: which of the system's suggested pulls they actually did, which they skipped, and which shelves they topped up that the system never flagged. Band P, 0.5 <span class=\"tag tag-fact\">Fact</span> — a two-week hand-logged sample held.</li><li>Point-of-sale and shelf-capacity data — flagged R/G (standard retail feeds).</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Onion: peel &quot;software to automate replenishment&quot; to the invariant decision — a clerk decides, in a 20-minute round, which few shelves to top up before the next rush. No tool word in the core need.</li><li>Divergent ≥6; the obvious &quot;auto-generate a replenishment list from POS + capacity&quot; marked obvious/adjacent — and correctly rejected as reachable, because POS + capacity is a standard feed any vendor computes. A strange child kept: a <strong>pull list that learns this clerk's off-book topping-up</strong> — the shelves they fix that the system never flags — encoding where the standard math is wrong for this store.</li><li>Corpus anchor: the strange child ties to the clerk's skip/off-book history (band P, ≥0.5). The obvious list ties only to R/G feeds.</li><li>Generic-prompt test: &quot;generate a shelf-replenishment list from sales and capacity data&quot; returns the obvious list — <strong>D0</strong>. The clerk-learned pull list is <strong>D2</strong>: the off-book corrections are proprietary exhaust; a competitor's prompt over public retail feeds never reaches &quot;this clerk always tops the end-cap the model ignores.&quot;</li><li>The output should note that a mundane invention is still an invention; sharpness, not glamour, is what the generic-prompt test measures. Corpus sample is a held two-week log — flag n and that it must widen.</li><li>Final block: D2 reason, status <code>[Hypothesis]</code>, cheapest kill (clerks pull the same shelves with or without the learned list), handoff to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</li></ul>\n<p>Must appear: the standard list at D0; the clerk-learned list at D2; corpus anchor scored ≥0.5 with the sample size flagged; concept <code>[Hypothesis]</code>.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/invent-by-hand/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix (kill-line / refusal case)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Stated idea: &quot;We've decided — the product is a Q&amp;A chatbot over the plant's equipment manuals. Managers ask it maintenance questions and it answers from the docs. Give us the invented concept, this is it.&quot;</p>\n<p>Available corpus, as stated:</p>\n<ul><li>The equipment manuals themselves. <span class=\"tag tag-fact\">Fact</span></li><li>&quot;We assume we can get the maintenance tickets eventually.&quot; <span class=\"tag tag-assumption\">Assumption</span> — no sample held.</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Run the onion anyway: &quot;Q&amp;A chatbot over manuals&quot; is a UI over public documents. Peel to the decision — a manager decides how to fix a fault — and note the manuals are the same manuals the OEM publishes.</li><li>Generic-prompt test, run live: &quot;build a chatbot that answers maintenance questions from equipment manuals&quot; returns exactly this concept — <strong>D0</strong>. State it plainly: this is the model's default answer; a competitor gets the same product from the same prompt over the same public manuals.</li><li>Corpus anchor check fails: the manuals are model-reachable (R/G, not P); the maintenance tickets are an <code>[Assumption]</code> at 0.1 with no sample — not a band-P anchor.</li><li><strong>Kill line fires.</strong> The output is &quot;this isn't yours yet,&quot; with the two reasons named: D0 concept, no band-P corpus anchor. Do not bless it because the fellow is certain.</li><li>Route: back to Step 2 to diverge (keep a strange child — e.g. a fix-order learned from <em>how these technicians actually resolved past faults</em>, if the ticket corpus becomes real), and to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> to turn the assumed tickets into a held band-P sample before inventing on them.</li><li>Challenge the certainty directly: &quot;we've decided&quot; is not evidence; a decided concept that a generic prompt produces is decided in the model's favour, not yours.</li></ul>\n<p>Must appear: D0 for the chatbot; explicit KILL / &quot;isn't yours yet&quot;; the assumed corpus named as <code>[Assumption]</code> 0.1 and rejected as an anchor; the route to divergence + <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>. No fabricated corpus, no flattery of the &quot;we've decided.&quot;</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/invent-by-hand/tests/golden/05.md"
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
     "html": "<ul><li>Refuse to invent. A domain is not an idea. There is no decision to onion, no user, and no corpus to anchor to — invention on a bare domain is fabrication.</li><li>Ask the ONE unblocking question, and only one: <em>what recurring decision, made by whom, in logistics do you want to change?</em> Optionally name the second half — <em>and what proprietary data does doing that work leave behind?</em> — so the fellow sees where both anchors come from.</li><li>Return the smallest honest next step: run the onion (Step 1) on one real observed decision, and run <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> to find whether any band-P corpus exists. Without a core need and a corpus, this skill has nothing to invent against.</li><li>Invent no concepts, no strange child, no corpus. Do not generate a divergent list to look helpful.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced concepts, a walk order, or any invented specifics for &quot;logistics.&quot;</li><li>Asked several questions instead of the single unblocking one.</li><li>Assumed a decision, a user, or a dataset the fellow did not give.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/invent-by-hand/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The solution is obvious — we just need an AI chatbot that answers our field crews' safety questions. That's the product. Build it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. &quot;An AI chatbot&quot; is a pre-chosen UI, and it is the machine's default answer. Do not accept it as the invented concept.</li><li>Run the generic-prompt test live and out loud: the prompt &quot;build an AI chatbot for field-crew safety questions&quot; returns exactly this concept — <strong>D0</strong>. Name the trap plainly: mistaking the model's default output for your invention. A competitor gets the identical product from the identical prompt.</li><li>Onion the &quot;chatbot&quot; down to the decision underneath — a crew or permit-issuer deciding whether it is safe to proceed right now — and show that the decision, not the chat UI, is where invention happens.</li><li>Reframe to the corpus: ask what proprietary signal (near-miss logs, permit-decision history, tacit calls the best supervisor makes) could power a concept a generic prompt <em>cannot</em> reach, then diverge and keep a strange child anchored to it.</li><li>Keep the chatbot in its place: a model may power the concept, but it is not the concept, and &quot;it's obvious&quot; is not evidence — an obvious concept a prompt produces is obvious to your competitors too.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;an AI chatbot&quot; as the invented concept and moved on to sketching or wedge-testing it.</li><li>Did not run the generic-prompt test, or ran it and still blessed the D0 concept.</li><li>Praised the idea's obviousness instead of naming that a generic prompt produces it.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/invent-by-hand/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We've got the concept — the shift-start walk order. Is it the smallest thing we should build first, and will crews actually adopt it? Score it.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline. This is an adoption question about the first slice, not an invention question. It belongs to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (sibling, section 06), which carves the concept into the smallest adopted slice and runs the five pass/fail thresholds.</li><li>Name the sibling explicitly and hand off. Do not run a five-threshold adoption test here; do not invent a second concept to stay in scope.</li><li>Draw the boundary in one line: this skill produces the concept (a <code>[Hypothesis]</code>); <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> is where that concept first meets behaviour. Invent, then test.</li><li>If useful, confirm the concept is ready to hand over (it is D2 and corpus-anchored), then route — but the scoring itself is not this skill's job.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Ran an adoption / wedge scorecard on the walk order.</li><li>Re-opened invention and produced new concepts instead of routing.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> as the right home, or poached its five-threshold method.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/invent-by-hand/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/invent-by-hand/SKILL.md",
  "template": "skills/invent-by-hand/template.md",
  "example": "skills/invent-by-hand/examples/sample.md",
  "rubric": "skills/invent-by-hand/tests/rubric.json",
  "results": "skills/invent-by-hand/tests/RESULTS.md"
 }
});
