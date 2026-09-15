window.ICARUS_SKILL("four-lenses-test", {
 "name": "four-lenses-test",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes one concept the fellow is thinking of building and forces a verdict on four separate risks — Desirability (do they want it enough to change behaviour or pay), Usability (can they actually get the outcome), Feasibility (can we build it at the accuracy/latency/cost the decision needs), Viability (does the money work). Each lens gets a score, but only through its named tool — never through an opinion. The four scores are then ANDed, not averaged: a single failing lens is a no-go no matter how strong the other three read. The output is a filled Four-Lens Scorecard (<a href=\"#/skill/four-lenses-test\">template.md</a>) that names, per lens, the tool run, the track owner who ran it, the evidence produced with its ladder weight, the score, and the overall gate with the next probe for every lens short of a clean pass.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic four-lenses check (and the recommendation-canvas it descends from) asks &quot;is it desirable, feasible, viable?&quot; and lets a team answer each lens with a confident opinion, then averages the four into a gut &quot;yes&quot;. Icarus refuses both moves. First, a lens is graded only by the instrument that produces behaviour or money evidence for that specific risk — Desirability by onion+JTBD+Kano, Usability by watching a real user attempt the task, Feasibility by a dev spike on the riskiest slice, Viability by ICE anchored to a measured value number — so a lens with no tool behind it is not scored, it is ungraded, and an ungraded lens cannot pass. Second, the four are ANDed: one fatal lens kills the go, because a product that no one can use is not rescued by being cheap to build. Each lens also has a named track owner (Product and Design on the discovery track, Engineering on the delivery track, running in parallel) so no single person waves a lens through on their own say-so.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow has a specific, named concept and needs a go/no-go on whether to build it, lens by lens.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Is this concept desirable / usable / feasible / viable?&quot;</td><td>Yes</td><td>four-lenses-test</td></tr><tr><td>&quot;Should we build it? Go or no-go on this concept.&quot;</td><td>Yes</td><td>four-lenses-test</td></tr><tr><td>&quot;Run the four lenses on this idea.&quot;</td><td>Yes</td><td>four-lenses-test</td></tr><tr><td>&quot;Is this worth building — score the build risks.&quot;</td><td>Yes</td><td>four-lenses-test</td></tr><tr><td>&quot;Walk me from validated problem to vision, strategy, North Star, roadmap.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a></td></tr><tr><td>&quot;Score this PROBLEM across the eight dimensions — is it worth solving?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>&quot;Give me the five-question so-what gut check on the whole idea.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>&quot;Just find and prioritise the unserved need.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></td></tr><tr><td>&quot;Run the actual usability session and write the findings.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a></td></tr><tr><td>&quot;List every risky assumption across the eight risk categories.&quot;</td><td>No</td><td><code>identify-assumptions-new</code></td></tr></tbody></table></div>\n<p>This skill scores one concept across exactly four build-risk lenses and gates it. It does not build the strategy spine, score the problem, gut-check the whole idea, or run the sessions themselves — it names which tool each lens needs and reads the evidence those tools return. It absorbs the generic recommendation-canvas and the four-core-risks list from <code>identify-assumptions-new</code> and beats them (see Related skills); it does not route to them.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the scorecard in <a href=\"#/skill/four-lenses-test\">template.md</a>. Do not narrate; fill the rows. Tag every empirical claim <code>[Fact]</code> (money moved or behaviour observed), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a guess or a not-yet-observed claim).</p>\n<p><strong>Step 0 — Name the one concept.</strong> State the concept in one line, as concretely as the fellow gave it. If there is no concept yet — only a domain or a wish — stop and ask for it. You cannot lens a fog. Invent no concept.</p>\n<p><strong>Step 1 — Assign the tool and owner to each lens.</strong> Every lens is scored by its instrument and run by its track owner. No lens is scored by &quot;we think&quot;.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>The question</th><th>The ONLY tool that grades it</th><th>Track / owner</th><th>Evidence it must return</th></tr></thead><tbody><tr><td>Desirability</td><td>Do they want it enough to change behaviour or pay?</td><td>Onion (peel the need to its core) + JTBD (the job) + Kano (must / performance / delighter)</td><td>Discovery — Product leads, Design pairs</td><td>A core unserved need + its Kano class, ideally with a behaviour or money signal it is real</td></tr><tr><td>Usability</td><td>Can they get the outcome without help?</td><td>Usability observation — watch a real user attempt the task on a prototype</td><td>Discovery — Design leads, Product observes, Eng watches</td><td>Observed task success or failure on a mock, not stated preference</td></tr><tr><td>Feasibility</td><td>Can we build it at the accuracy / latency / cost the decision needs?</td><td>Dev spike — build the single riskiest slice for real</td><td>Delivery — Engineering leads</td><td>A spike result (hit or missed the floor), not an estimate</td></tr><tr><td>Viability</td><td>Does the money work — value captured &gt; cost to serve?</td><td>ICE (Impact × Confidence × Ease), Impact = measured value, Confidence = evidence weight, Ease = the spike result</td><td>Business — Product / founder leads</td><td>A value number with a source on the ladder; price at 10–20% of it</td></tr></tbody></table></div>\n<p>The discovery track (Desirability, Usability) and the delivery track (Feasibility) run in parallel — that is the dual-track. Viability is read once the spike sizes the cost.</p>\n<p><strong>Step 2 — Score each lens.</strong> A lens is scored only if its tool was actually run. Opinion is not a score.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Score</th><th>Verdict</th><th>Meaning</th><th>Evidence weight</th></tr></thead><tbody><tr><td>3</td><td>PASS</td><td>Tool run; lens bar cleared on behaviour or money</td><td>≥ 0.5</td></tr><tr><td>2</td><td>CONDITIONAL</td><td>Tool run or a credible artefact/commitment exists; bar likely cleared but a probe is still needed</td><td>0.3–0.5</td></tr><tr><td>1</td><td>FAIL</td><td>Tool run; the lens bar was NOT cleared (users failed the task / spike missed the floor / value &lt; cost to serve)</td><td>any</td></tr><tr><td>0</td><td>UNGRADED</td><td>No named tool run; only opinion behind it</td><td>0.1</td></tr></tbody></table></div>\n<p><strong>CONDITIONAL(2) vs UNGRADED(0) — the deciding test is whether the tool is in play.</strong> Score 2 when the named tool was run or partially run and the result is genuinely inconclusive — a real but incomplete read (an artefact shown not transacted, a half-finished session) with no one asserting the lens passes; a named probe finishes it. Score 0 when the tool has not run at all, or someone is claiming the lens passes on opinion. Tool-in-play-but-inconclusive → 2 → NOT-YET; no-tool-or-opinion-pass → 0 → BLOCKED. This fixes the verdict label deterministically — two readers grade the same input the same way — and never breaches the kill line: a 2 is never a GO.</p>\n<p><strong>Step 3 — Apply the gate (AND, never average).</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Any lens at…</th><th>Overall verdict</th><th>What to do</th></tr></thead><tbody><tr><td>1 (FAIL)</td><td><strong>NO-GO</strong></td><td>Kill or reframe. The failing lens names the fix; do not average it away.</td></tr><tr><td>0 (UNGRADED)</td><td><strong>BLOCKED</strong></td><td>Run the missing tool. You may not grade a lens on opinion.</td></tr><tr><td>2 (CONDITIONAL)</td><td><strong>NOT-YET</strong></td><td>Name the cheapest probe that lifts each conditional lens to a 3.</td></tr><tr><td>all four = 3</td><td><strong>GO</strong></td><td>Build. Every lens cleared its bar on behaviour or money.</td></tr></tbody></table></div>\n<p><strong>Step 4 — Name the next probe per lens.</strong> For every lens below 3, write the single cheapest observation that would move it up: the usability session to run, the spike to build, the value number to price, the behaviour to observe. This is the output the fellow acts on.</p>\n<p><strong>Step 5 — Write the one-line verdict.</strong> <code>[Concept]: D_ U_ F_ V_ → [GO / NOT-YET / NO-GO] — blocked by [weakest lens], next probe: [___].</code></p>\n<p><strong>Kill line: giving any lens a PASS on opinion with no tool run, or returning GO while any lens sits at FAIL, is an auto-fail.</strong> Four graded lenses, ANDed. No tool, no grade; one fail, no go.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Desirability and Viability are where fellows flatter themselves — &quot;users love it&quot;, &quot;the ROI is obvious&quot;. A lens score is only as strong as the evidence weight beneath it, on the ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal behind a lens</th><th>Ladder weight</th><th>Best lens it grades</th></tr></thead><tbody><tr><td>An invoice / price paid / renewal signed (money moved)</td><td>1.0</td><td>Viability, Desirability</td></tr><tr><td>A user observed doing the task or the behaviour (behaviour observed)</td><td>0.7</td><td>Usability, Desirability, Feasibility (spike on real data)</td></tr><tr><td>A priced artefact or a working spike, shown not transacted</td><td>0.5</td><td>Feasibility, Viability</td></tr><tr><td>&quot;They said they'd use it / pay for it&quot; (verbal commitment)</td><td>0.3</td><td>Desirability, Viability</td></tr><tr><td>The fellow's or an engineer's opinion</td><td>0.1</td><td>grades nothing — the lens stays UNGRADED</td></tr></tbody></table></div>\n<p>A lens riding on opinion (0.1) is scored 0 and blocks the gate; the skill says so and names the tool to run. Confidence inside the Viability ICE is not a vibe from 1 to 10 — it is the ladder weight of the value claim. A CONDITIONAL is honest (0.3–0.5 evidence with a probe named); a PASS minted from a verbal or an opinion is the auto-fail this standard exists to catch.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Averaging the four.</strong> &quot;3, 3, 3, 1 — that's 10 out of 12, ship it.&quot; No. The 1 is a NO-GO. A concept nobody can use is not saved by being desirable and cheap. The gate is AND; the moment a lens is averaged against another, the test has failed.</li><li><strong>A lens with no tool.</strong> &quot;Desirability: strong, users clearly want it.&quot; Graded by what? If no onion+JTBD+Kano ran and no behaviour was observed, Desirability is UNGRADED (0), not a pass. Feasibility &quot;we can definitely build it&quot; with no spike is the same trap on the engineering side.</li><li><strong>Feasibility by estimate instead of spike.</strong> An engineer's confidence is a 0.1 opinion until a slice is built. The dev spike exists so the riskiest technical claim is observed, not guessed. &quot;We've done harder things&quot; does not grade this lens.</li><li><strong>Usability tested as opinion.</strong> &quot;Do you like it?&quot; is not a usability observation. The lens is graded by watching a real user succeed or fail at the task on a prototype — observed behaviour (0.7), not stated preference (0.3). Route the session to <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a>.</li><li><strong>Viability priced on cost-plus or a competitor.</strong> ICE Impact must be the measured value to the customer, priced at 10–20% of it — not cost plus a margin, not what a rival charges. A value number with no source on the ladder is a 0.1, so Viability stays ungraded.</li><li><strong>Lensing a fog.</strong> &quot;Should we build something in gas safety? Run the four lenses.&quot; There is no concept to lens. Ask for the one concept first; do not manufacture four scores for an idea that does not exist.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/four-lenses-test\">examples/sample.md</a> — Barrier Intelligence, worked end to end: a gas-alert prioritiser scored on all four lenses. Desirability PASSes on field-log behaviour and Feasibility PASSes on a spike, but a watched usability session shows gloved techs mis-tapping the ranked list — Usability FAILs, so the AND gate returns NO-GO despite three strong lenses, with the glove fix and the priced-value probe named. The anti-average, anti-flattery case.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a> — builds the whole problem→vision→strategy→North Star→OKR→roadmap spine and blocks unvalidated problems from passing down. This gates one concept's four build-risks; that gates the strategy. A concept that passes four-lenses is one input to the frame stack, not a substitute for it.</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — scores the PROBLEM on eight dimensions (is it worth solving). This scores the SOLUTION concept on four build-risks (should we build this answer). Different object: run the scorecard on the problem before you lens the concept.</li><li><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — the five-question gut check on the whole idea at concept-council. This is the disciplined, tool-per-lens go/no-go once a concept is concrete. Gut check first, lens second.</li><li><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a> — runs the onion+JTBD+Kano that grades the Desirability lens. <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> / <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> — run the observation that grades Usability. <a class=\"skill-ref\" href=\"#/skill/value-based-pricing\"><code>value-based-pricing</code></a> — sets the value the Viability ICE is anchored to. <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> — sizes the per-unit prize behind Impact. This skill orchestrates their outputs into one gate; it does not restate them.</li><li>Absorbs <code>concept/recommendation-canvas</code> (the generic evaluate-across-outcomes-and-risks canvas) and the four-core-risks list inside <code>discovery/identify-assumptions-new</code>. It beats them by refusing to score a lens without its named tool and by ANDing the lenses instead of narrating them into a confident recommendation. <code>supersedes: none</code>: both live outside this module; this replaces their role inside Icarus without deleting them.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Four-Lens Scorecard — fill-in</h1>\n<p>One concept, four build-risk lenses, each graded ONLY by its named tool, then ANDed. Two auto-fails: (a) a lens given a PASS with no tool run / on opinion; (b) an overall GO while any lens sits at FAIL. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<h2>0. The concept (exactly one, as the fellow said it)</h2>\n<blockquote><p>[one concrete line — if there is no concept yet, STOP and ask; do not lens a fog]</p></blockquote>\n<h2>1. Tool + owner per lens (fill before scoring)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>Question</th><th>Tool that grades it</th><th>Track / owner</th><th>Tool run yet?</th></tr></thead><tbody><tr><td>Desirability</td><td>Want it enough to change behaviour / pay?</td><td>Onion + JTBD + Kano</td><td>Discovery — Product leads, Design pairs</td><td>[Y / N]</td></tr><tr><td>Usability</td><td>Get the outcome without help?</td><td>Usability observation (watch a user on a prototype)</td><td>Discovery — Design leads, Product observes</td><td>[Y / N]</td></tr><tr><td>Feasibility</td><td>Build it at the accuracy / latency / cost needed?</td><td>Dev spike on the riskiest slice</td><td>Delivery — Engineering leads</td><td>[Y / N]</td></tr><tr><td>Viability</td><td>Value captured &gt; cost to serve?</td><td>ICE, Impact = measured value, Confidence = evidence weight</td><td>Business — Product / founder leads</td><td>[Y / N]</td></tr></tbody></table></div>\n<p>Discovery track (D, U) and delivery track (F) run in parallel. Any &quot;N&quot; above → that lens is UNGRADED until the tool runs.</p>\n<h2>2. Score each lens (0–3; a lens with no tool run = 0)</h2>\n<h3>Desirability</h3>\n<ul><li><strong>Tool output:</strong> core need = [___]; JTBD = [___]; Kano class = [must / performance / delighter / indifferent]</li><li><strong>Evidence + weight:</strong> [behaviour / money / artefact / verbal / opinion] → [1.0 / 0.7 / 0.5 / 0.3 / 0.1]  <code>[Fact | Assumption | Hypothesis]</code></li><li><strong>Score:</strong> [3 PASS / 2 CONDITIONAL / 1 FAIL / 0 UNGRADED]</li></ul>\n<h3>Usability</h3>\n<ul><li><strong>Tool output:</strong> task observed = [___]; result = [succeeded / failed / needed help]</li><li><strong>Evidence + weight:</strong> [observed 0.7 / stated preference 0.3 / opinion 0.1]  <code>[Fact | Assumption | Hypothesis]</code></li><li><strong>Score:</strong> [3 / 2 / 1 / 0]</li></ul>\n<h3>Feasibility</h3>\n<ul><li><strong>Tool output:</strong> riskiest slice = [___]; spike result vs the floor = [hit / missed / not built]</li><li><strong>Evidence + weight:</strong> [spike on real data 0.7 / spike shown 0.5 / engineer opinion 0.1]  <code>[Fact | Assumption | Hypothesis]</code></li><li><strong>Score:</strong> [3 / 2 / 1 / 0]</li></ul>\n<h3>Viability</h3>\n<ul><li><strong>Tool output (ICE):</strong> Impact = [measured value, sourced]; Confidence = [evidence weight of that value]; Ease = [from spike]</li><li><strong>Price check:</strong> proposed price = [___] = [__]% of measured value (target 10–20%)</li><li><strong>Evidence + weight:</strong> [money 1.0 / artefact 0.5 / verbal 0.3 / opinion 0.1]  <code>[Fact | Assumption | Hypothesis]</code></li><li><strong>Score:</strong> [3 / 2 / 1 / 0]</li></ul>\n<h2>3. The gate (AND, never average)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Any lens at…</th><th>Verdict</th></tr></thead><tbody><tr><td>1 (FAIL)</td><td><strong>NO-GO</strong> — kill or reframe; the failing lens names the fix</td></tr><tr><td>0 (UNGRADED)</td><td><strong>BLOCKED</strong> — run the missing tool</td></tr><tr><td>2 (CONDITIONAL)</td><td><strong>NOT-YET</strong> — name the probe that lifts it to 3</td></tr><tr><td>all four = 3</td><td><strong>GO</strong></td></tr></tbody></table></div>\n<ul><li><strong>Scores: D_ · U_ · F_ · V_</strong></li><li><strong>Overall verdict:</strong> [GO / NOT-YET / BLOCKED / NO-GO]</li><li><strong>Weakest lens (what blocks the go):</strong> [___]</li><li>Averaging check — did any strong lens get used to excuse a weak one? [no; the gate is AND]</li></ul>\n<h2>4. Next probe per lens (every lens below 3)</h2>\n<ul><li>Desirability → [the behaviour/money to observe]</li><li>Usability → [the session to run]</li><li>Feasibility → [the spike to build]</li><li>Viability → [the value number to price]</li></ul>\n<h2>5. One-line verdict</h2>\n<blockquote><p>[Concept]: D_ U_ F_ V_ → [GO / NOT-YET / NO-GO] — blocked by [weakest lens], next probe: [___].</p></blockquote>\n<h2>6. What would change this verdict</h2>\n<ul><li>[the single result — a passed usability re-test, a spike that hits the floor, a priced value number, an observed behaviour — that would flip the blocking lens]</li></ul>",
  "path": "skills/four-lenses-test/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence, gas-alert prioritiser</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety). All numbers are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's pitch:</strong> &quot;We should build the gas-alert prioritiser — rank the day's alerts so field crews inspect the real leaks first. It's obviously worth building. Run the four lenses.&quot;</p>\n<p>Three of the four lenses read strong. The gate still returns NO-GO, because one lens fails and lenses are ANDed, not averaged.</p>\n<h2>0. The concept (exactly one)</h2>\n<blockquote><p>A ranked shortlist that orders the day's gas-safety alerts so a field crew inspects the highest-risk sites first, on a rugged tablet.</p></blockquote>\n<h2>1. Tool + owner per lens</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Lens</th><th>Tool that grades it</th><th>Track / owner</th><th>Tool run yet?</th></tr></thead><tbody><tr><td>Desirability</td><td>Onion + JTBD + Kano</td><td>Discovery — Product leads, Design pairs</td><td>Y</td></tr><tr><td>Usability</td><td>Usability observation on the tablet mock</td><td>Discovery — Design leads, Product observes</td><td>Y</td></tr><tr><td>Feasibility</td><td>Dev spike: rank 200 labelled historical alerts</td><td>Delivery — Engineering leads</td><td>Y</td></tr><tr><td>Viability</td><td>ICE anchored to the cost of one missed leak</td><td>Business — founder leads</td><td>Partial</td></tr></tbody></table></div>\n<h2>2. Score each lens</h2>\n<h3>Desirability — 3 PASS</h3>\n<ul><li><strong>Tool output:</strong> core need = catch the true leak before it escalates, not read the whole queue. JTBD = &quot;when alerts stack up, decide which site to drive to first so I don't reach a real leak last.&quot; Kano = <strong>performance</strong> (more ranking accuracy = more value) with a <strong>must-have</strong> floor: never bury a true leak.</li><li><strong>Evidence + weight:</strong> field logs show crews inspect alerts in log order, and on one recorded day a confirmed leak sat 4th in the queue behind three false alarms — behaviour observed, 0.7.  <code>[Fact]</code> (observed) · rate <code>[Assumption]</code></li><li><strong>Score: 3</strong> — the need is real and sits on observed behaviour, not a survey.</li></ul>\n<h3>Usability — 1 FAIL</h3>\n<ul><li><strong>Tool output:</strong> task = &quot;open the shortlist and mark the top site inspected&quot; on the tablet mock, gloves on, as in the field. Result = <strong>failed</strong>: 3 of 4 gloved techs mis-tapped the dense rows and opened the wrong site.</li><li><strong>Evidence + weight:</strong> observed in session, 0.7.  <code>[Fact]</code></li><li><strong>Score: 1</strong> — the concept as mocked cannot be used by the actual user in the actual conditions.</li></ul>\n<h3>Feasibility — 3 PASS</h3>\n<ul><li><strong>Tool output:</strong> riskiest slice = rank real leaks above false alarms. Spike ranked 200 labelled historical alerts; recall on the confirmed-leak subset was ~0.85 against a floor of 0.80 the safety case needs.</li><li><strong>Evidence + weight:</strong> spike on real data, 0.7.  <code>[Fact]</code> (spike result) · the 0.80 floor <code>[Assumption]</code></li><li><strong>Score: 3</strong> — built, not estimated; cleared the floor. (Autonomy note: a signed, liable inspector still owns every go/no-inspect call, so the machine ranks but does not decide — feasibility is about the ranking, not automation.)</li></ul>\n<h3>Viability — 2 CONDITIONAL</h3>\n<ul><li><strong>Tool output (ICE):</strong> Impact = the cost of one missed or late-found leak — large, but not yet priced from Barrier's own numbers. Confidence = 0.3 (the founder's verbal estimate, no invoice). Ease = high (the spike passed).</li><li><strong>Price check:</strong> no value number yet, so no 10–20% price can be set.  <code>[Hypothesis]</code></li><li><strong>Score: 2</strong> — plausibly strong, but riding a 0.3 verbal; not a graded pass.</li></ul>\n<h2>3. The gate (AND, never average)</h2>\n<ul><li><strong>Scores: D3 · U1 · F3 · V2</strong></li><li><strong>Overall verdict: NO-GO.</strong></li><li><strong>Weakest lens:</strong> Usability (FAIL). A concept that gloved field techs cannot operate is not rescued by strong desirability and a passing spike. Three good lenses do not outvote one fatal one.</li><li>Averaging check: &quot;D3+F3+V2 is plenty, ship it&quot; is rejected — the U1 is a NO-GO on its own.</li></ul>\n<h2>4. Next probe per lens</h2>\n<ul><li>Usability → redesign for gloved, high-contrast, large-target use; re-run the observation with 5 field techs, gloves on, before anything else.</li><li>Viability → pull one real incident cost (a priced invoice or a settled claim) to lift Impact from a 0.3 verbal to a 1.0 money figure; then set price at 10–20%.</li><li>Desirability, Feasibility → hold at PASS; no further probe needed now.</li></ul>\n<h2>5. One-line verdict</h2>\n<blockquote><p>Gas-alert prioritiser: D3 U1 F3 V2 → NO-GO — blocked by Usability, next probe: re-run the gloved-tablet observation after the large-target redesign.</p></blockquote>\n<h2>6. What would change this verdict</h2>\n<ul><li>A repeat usability session where gloved techs open the correct site unaided flips Usability from 1 to 3. Only then does the gate move off NO-GO — and even then it lands at NOT-YET until Viability's value number is priced. Do not let &quot;it's obviously worth building&quot; paper over either gap; the desirability being strong is exactly why the usability failure is easy to miss.</li></ul>",
  "path": "skills/four-lenses-test/examples/sample.md"
 },
 "rubric": {
  "skill": "four-lenses-test",
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
    "Is this desirable, usable, feasible, and viable?",
    "Should we build it? Go or no-go on this concept.",
    "Run the four lenses on this idea.",
    "Score this idea across desirability, feasibility, and viability.",
    "Is this worth building?"
   ],
   "mustNotFire": [
    {
     "phrase": "Walk me from validated problem to vision, strategy, North Star, and roadmap.",
     "sibling": "product-frame-stack",
     "local": true
    },
    {
     "phrase": "Score this problem across the eight dimensions — is it worth solving?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Give me the five-question so-what gut check on the whole idea.",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description fires explicitly on &quot;is this desirable/usable/feasible/viable&quot;, &quot;should we build it&quot;, &quot;run the four lenses&quot;, &quot;go or no-go&quot;, &quot;is this worth building&quot; → all 5 MUST-fire hit. Three NOT-fire phrasings are named-and-excluded in the description itself (problem→vision→roadmap → product-frame-stack; PROBLEM on 8 dimensions → problem-quality-scorecard; five-question so-what → so-what-stress-test) → 0 misfire.</p>"
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
    "evidenceHtml": "<p>01 vague one-liner: Method Step 0 + &quot;Lensing a fog&quot; gotcha force ask-the-one-concept, invent nothing → ask-the-one-question satisfied. 02 solution-in-disguise: evidence ladder scores &quot;everyone wants an app&quot; as 0.1 opinion → Desirability UNGRADED; AND gate forbids scoring only F+V; names channel-not-a-need trap → reframe-and-name-the-trap. 03 out-of-scope spine: When-NOT table + description exclusion decline and route to product-frame-stack → decline-and-name-the-sibling. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code>.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01 output could not come from a generic PM prompt: tool-per-lens binding (onion+JTBD+Kano / watched observation / dev spike / ICE anchored to measured value), evidence ladder (money 1.0, behaviour 0.7, opinion 0.1→ungraded), AND-not-average gate, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, dual-track owners. A generic prompt averages and passes on opinion. Guidance is tabular (tool/owner, scoring, gate, ladder) — no should-be-a-table prose found.</p>"
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
     "label": "01 Azraq data-rights checker 4",
     "dims": [
      4,
      5,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "PASS — NOT-YET; Desirability PASS on the one observed slip (behaviour 0.7 [Fact]); Feasibility/Viability held pending spike + priced bad-renewal cost ([Hypothesis]). Gate never GO with a conditional/ungraded lens. No auto_fail.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix feasibility-on-opinion 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — Feasibility scored 0 UNGRADED on \"engineer is confident\" (0.1 opinion), green-light explicitly refused → BLOCKED. Hits the kill line squarely. No auto_fail.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Barrier permit-risk flagger 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — Viability PASS on the £40k invoice (money 1.0 [Fact]) does NOT carry the concept to GO while Usability sits CONDITIONAL (mock unobserved) → NOT-YET. Anti-average on the money side. No auto_fail.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian auto-status-draft 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — Kano read = indifferent; \"people say they'd use it\" = 0.3 verbal, not a pass → Desirability 1 FAIL → NO-GO despite F/V strong. Anti-average. No auto_fail.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Azraq runbook search (mundane) 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — small prize sized honestly, no manufactured value number, internal-tool \"price\" framed as cost-justification → NOT-YET on a small prize. Refuses to inflate. No auto_fail.",
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
  "gotchasSurfaced": "<ul><li><strong>CONDITIONAL(2) vs UNGRADED(0) for an unrun-but-unclaimed tool is under-specified.</strong> The score table row for 0 reads &quot;No named tool run; only opinion behind it&quot; while 2 reads &quot;Tool run OR a credible artefact/commitment exists.&quot; A lens that is simply not-yet-run with no artefact and no one claiming it passes falls between the two. Golden 01/03 expected shapes treat such lenses as CONDITIONAL (→ NOT-YET); golden 02 treats an unrun lens as UNGRADED (→ BLOCKED). The distinguishing signal is really <em>whether someone is asserting a pass on opinion</em> (→ 0) versus <em>the tool just hasn't run yet, no claim made</em> (→ 2, pending probe). This only shifts the verdict LABEL (NOT-YET vs BLOCKED); it never breaches the kill line (never GO, never an opinion-pass). Worth one clarifying clause in the Step-2 score table so two judges grade golden 01 the same way. Not a blocker.</li></ul>\n<p>Overall: <strong>GRADUATE-READY.</strong></p>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a Step-2 clause distinguishing CONDITIONAL(2) (tool in play but inconclusive → NOT-YET) from UNGRADED(0) (no tool run / opinion-pass → BLOCKED), making the verdict label deterministic across judges.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — four-lenses-test</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Is this desirable, usable, feasible, and viable?&quot;</li><li>&quot;Should we build it? Go or no-go on this concept.&quot;</li><li>&quot;Run the four lenses on this idea.&quot;</li><li>&quot;Score this idea across desirability, feasibility, and viability.&quot;</li><li>&quot;Is this worth building?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Walk me from validated problem to vision, strategy, North Star, and roadmap.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a></li><li>&quot;Score this problem across the eight dimensions — is it worth solving?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Give me the five-question so-what gut check on the whole idea.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description fires explicitly on &quot;is this desirable/usable/feasible/viable&quot;, &quot;should we build it&quot;, &quot;run the four lenses&quot;, &quot;go or no-go&quot;, &quot;is this worth building&quot; → all 5 MUST-fire hit. Three NOT-fire phrasings are named-and-excluded in the description itself (problem→vision→roadmap → product-frame-stack; PROBLEM on 8 dimensions → problem-quality-scorecard; five-question so-what → so-what-stress-test) → 0 misfire.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: Method Step 0 + &quot;Lensing a fog&quot; gotcha force ask-the-one-concept, invent nothing → ask-the-one-question satisfied. 02 solution-in-disguise: evidence ladder scores &quot;everyone wants an app&quot; as 0.1 opinion → Desirability UNGRADED; AND gate forbids scoring only F+V; names channel-not-a-need trap → reframe-and-name-the-trap. 03 out-of-scope spine: When-NOT table + description exclusion decline and route to product-frame-stack → decline-and-name-the-sibling. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output could not come from a generic PM prompt: tool-per-lens binding (onion+JTBD+Kano / watched observation / dev spike / ICE anchored to measured value), evidence ladder (money 1.0, behaviour 0.7, opinion 0.1→ungraded), AND-not-average gate, <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tagging, dual-track owners. A generic prompt averages and passes on opinion. Guidance is tabular (tool/owner, scoring, gate, ladder) — no should-be-a-table prose found.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses — not executable here.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (5 dims × 0–5, /25; pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Azraq data-rights checker</td><td>4</td><td>5</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS — NOT-YET; Desirability PASS on the one observed slip (behaviour 0.7 <span class=\"tag tag-fact\">Fact</span>); Feasibility/Viability held pending spike + priced bad-renewal cost (<span class=\"tag tag-hypothesis\">Hypothesis</span>). Gate never GO with a conditional/ungraded lens. No auto_fail.</td></tr><tr><td>02 Mentix feasibility-on-opinion</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — Feasibility scored 0 UNGRADED on &quot;engineer is confident&quot; (0.1 opinion), green-light explicitly refused → BLOCKED. Hits the kill line squarely. No auto_fail.</td></tr><tr><td>03 Barrier permit-risk flagger</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — Viability PASS on the £40k invoice (money 1.0 <span class=\"tag tag-fact\">Fact</span>) does NOT carry the concept to GO while Usability sits CONDITIONAL (mock unobserved) → NOT-YET. Anti-average on the money side. No auto_fail.</td></tr><tr><td>04 Durian auto-status-draft</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — Kano read = indifferent; &quot;people say they'd use it&quot; = 0.3 verbal, not a pass → Desirability 1 FAIL → NO-GO despite F/V strong. Anti-average. No auto_fail.</td></tr><tr><td>05 Azraq runbook search (mundane)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — small prize sized honestly, no manufactured value number, internal-tool &quot;price&quot; framed as cost-justification → NOT-YET on a small prize. Refuses to inflate. No auto_fail.</td></tr></tbody></table></div>\n<p>All 5 ≥ 21, no dimension &lt; 4. Kill line held in every case: no lens passed on opinion; no GO returned while any lens sat at FAIL/UNGRADED. Each of Desirability/Usability/Feasibility/Viability is graded only by its named tool, and the AND gate lets one fatal lens (U1 in the sample, D1 in golden 04) override three strong ones with no averaging.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>CONDITIONAL(2) vs UNGRADED(0) for an unrun-but-unclaimed tool is under-specified.</strong> The score table row for 0 reads &quot;No named tool run; only opinion behind it&quot; while 2 reads &quot;Tool run OR a credible artefact/commitment exists.&quot; A lens that is simply not-yet-run with no artefact and no one claiming it passes falls between the two. Golden 01/03 expected shapes treat such lenses as CONDITIONAL (→ NOT-YET); golden 02 treats an unrun lens as UNGRADED (→ BLOCKED). The distinguishing signal is really <em>whether someone is asserting a pass on opinion</em> (→ 0) versus <em>the tool just hasn't run yet, no claim made</em> (→ 2, pending probe). This only shifts the verdict LABEL (NOT-YET vs BLOCKED); it never breaches the kill line (never GO, never an opinion-pass). Worth one clarifying clause in the Step-2 score table so two judges grade golden 01 the same way. Not a blocker.</li></ul>\n<p>Overall: <strong>GRADUATE-READY.</strong></p>\n<h2>Refine run 2 — applied judge fixes: added a Step-2 clause distinguishing CONDITIONAL(2) (tool in play but inconclusive → NOT-YET) from UNGRADED(0) (no tool run / opinion-pass → BLOCKED), making the verdict label deterministic across judges.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq: data-rights checker, viability conditional",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Should we build the automated data-rights checker — it flags when a site's data-rights position no longer holds before an SLA renewal. Run the four lenses.&quot; Field context: an analyst re-reads the full contract plus incident history (~2 hr) today; a lapsed position once slipped through to renewal.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>One concept named (the pre-renewal data-rights flag), not a fog.</li><li>Four lenses, each with its tool and dual-track owner: Desirability via onion+JTBD+Kano (core need = catch a lapsed position before it's re-signed; Kano must-have on the catch, performance on speed); Usability via a watched session on the flagged-clause view; Feasibility via a dev spike (can the model detect clause conflicts at usable precision — spike, not estimate); Viability via ICE, Impact = the priced cost of one bad renewal.</li><li>Desirability tagged from the observed slip (behaviour, 0.7, <span class=\"tag tag-fact\">Fact</span>); Feasibility CONDITIONAL until the spike runs; Viability CONDITIONAL because the bad-renewal cost is a <span class=\"tag tag-hypothesis\">Hypothesis</span> until Azraq prices one.</li><li>Gate applied as AND. With a CONDITIONAL present, overall = NOT-YET, not GO. Weakest lens named, next probe per lens written.</li><li>Challenge: the ~2 hr is verbal; the value is unpriced. Names the cheapest way to grade each — time one review, pull one exposed-renewal cost.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Returns GO while any lens is CONDITIONAL/UNGRADED, averages the four into a recommendation, or marks the spike/value claims as <span class=\"tag tag-fact\">Fact</span> before they are observed.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix: feasibility graded on opinion → BLOCKED",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;The alert copilot is desirable and our lead engineer says we can definitely build it — he's confident. Score it on the four lenses so we can green-light.&quot; Desirability rests on a floor observation (a supervisor buried a real fault at #7 in the log). No spike has been run.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Desirability graded via onion+JTBD+Kano on the observed burial (behaviour, 0.7) → likely PASS.</li><li>Feasibility: the engineer's confidence is a 0.1 opinion, not a spike. Lens scored <strong>0 UNGRADED</strong>. The skill refuses to grade Feasibility on &quot;we can definitely build it&quot; and names the spike to run (rank N labelled historical alerts, check recall against the floor).</li><li>Usability and Viability also flagged: no observation, no priced value → UNGRADED or CONDITIONAL, not passed by default.</li><li>Gate = <strong>BLOCKED</strong> (a lens sits at 0). Explicitly refuses the green-light. This case tests the kill line: a lens on opinion with no tool is not a pass.</li><li>Challenge: names that &quot;confident engineer&quot; is the classic feasibility trap; the spike exists precisely because confidence isn't evidence.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Scores Feasibility as PASS on the engineer's confidence, returns GO, or treats an unrun tool as a soft pass instead of UNGRADED.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence: viability PASS on money, usability conditional",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Should we build the permit-risk flagger? It flags hot-work permits likely to be rejected before a supervisor signs. We have an invoice showing rework from one wrongly-issued permit cost the operator about £40k. Four lenses.&quot; A tablet mock exists but no user has been watched using it yet.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Viability via ICE: Impact anchored to the £40k rework invoice (money moved, 1.0, <span class=\"tag tag-fact\">Fact</span>) → PASS, with a price set at 10–20% of measured value.</li><li>Desirability via onion+JTBD+Kano (avoid the rejected permit / rework loop; must-have) → PASS if a behaviour/artefact supports it.</li><li>Usability: mock exists but unobserved → <strong>CONDITIONAL</strong> (2), name the session to run; not passed on &quot;it looks usable&quot;.</li><li>Feasibility via spike; if not yet run → CONDITIONAL/UNGRADED, named.</li><li>Autonomy/liability note: a signed, liable supervisor caps automation — the flagger advises, the human signs. This bounds what Feasibility must deliver (a reliable flag, not an auto-decision).</li><li>Gate = NOT-YET (a CONDITIONAL present), not GO despite the strong money signal. AND, not average.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Lets the strong Viability money signal carry the concept to GO while Usability is unobserved, or presents the unobserved usability as a PASS.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs: strong on three, killed by one lens (AND gate)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;Our first workflow is auto-drafting the weekly team status update from our tools. It's clearly feasible, it's cheap to run, and people say they'd use it. Should we build it? Four lenses.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Feasibility PASS via a small spike (drafting from connected tools is a solved slice).</li><li>Viability: cheap to run, but Impact = the value of a saved status update is small; ICE Impact is a modest, honestly-sized number → CONDITIONAL/PASS at best, not inflated.</li><li>Desirability via onion+JTBD+Kano: the honest read is Kano <strong>indifferent / low-performance</strong> — a status update is a report nobody changes behaviour to get; &quot;people say they'd use it&quot; is a 0.3 verbal, not observed behaviour. Lens scored <strong>1 FAIL</strong> (or UNGRADED pending a behaviour signal that won't materialise).</li><li>Gate = <strong>NO-GO</strong>, blocked by Desirability, even though three lenses read fine. This is the anti-average test: a feasible, cheap, mildly-wanted thing is still a no-go when the core want isn't there.</li><li>Challenge: names that verbal willingness (&quot;they'd use it&quot;) is the weakest desirability evidence, and that the tell is behaviour — does anyone hand-write these updates today, and would they stop other work to get one automated?</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Passes the concept because three lenses are strong, treats &quot;they'd use it&quot; as a Desirability PASS, or averages D-fail against F/V to reach a soft yes.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane: Azraq internal runbook search (calibrated, undramatic)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Small internal one — should we build a search box over our ops runbooks so on-call engineers find the right procedure faster? Run the four lenses.&quot; Today engineers grep a shared drive; a wrong/old runbook was followed once during an incident.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>A plain, honest scorecard, no drama. Desirability via onion+JTBD+Kano: core need = reach the correct current procedure during an incident; Kano performance need, modest. Evidence = the one wrong-runbook incident (behaviour, 0.7) plus grep-today workflow → PASS but small.</li><li>Usability via observation: an on-call engineer finds and opens the right runbook under time pressure → CONDITIONAL until watched.</li><li>Feasibility via spike: search over runbooks is a solved slice → PASS.</li><li>Viability via ICE: Impact = minutes saved per incident plus the occasional avoided wrong-procedure; small, priced honestly; internal tool so &quot;price&quot; is cost-justification, not revenue.</li><li>Gate = NOT-YET (one CONDITIONAL), with the small prize stated plainly — the skill does not inflate an internal convenience into a venture. Next probe = the watched search session.</li><li>Challenge: names that the prize is small and the real value is the rare avoided wrong-procedure, not the saved minutes; if that avoided case can't be evidenced, this is a nice-to-have.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Inflates a modest internal tool into an order-of-magnitude case, manufactures a value number, or dresses the mundane result up as more than a NOT-YET on a small prize.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/golden/05.md"
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
     "html": "<p>&quot;Should we build it? Run the four lenses.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no concept and no evidence — nothing to lens. The skill must not manufacture four scores for an idea it has not been given.</p>\n<ul><li>Must ask the ONE unblocking question: what is the one concept, stated concretely? (Method Step 0: you cannot lens a fog.)</li><li>May also return the smallest honest next step: name the four tools the fellow will need to run — onion+JTBD+Kano, a usability observation, a dev spike, an ICE anchored to a value number — so they know what evidence each lens will demand.</li><li>Must invent no concept, no scores, no verdict.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: asks for the single concrete concept (and optionally lists the four tools to prepare), emits no scorecard, fabricates nothing. FAIL: invents a concept, produces four scores from nothing, or returns a GO/NO-GO for an idea it was never given.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we don't have a mobile app. It's obviously desirable — everyone wants an app. Just score feasibility and viability so we can start.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Two traps. &quot;No mobile app&quot; is a missing feature dressed as a problem, and &quot;everyone wants an app&quot; is an opinion asserted as a passed Desirability lens — plus a request to skip two lenses entirely.</p>\n<ul><li>Must refuse to pre-pass Desirability. &quot;Everyone wants an app&quot; is a 0.1 opinion; Desirability is UNGRADED until onion+JTBD+Kano returns a core unserved need with a behaviour or money signal. Name the trap: an app is a channel, not a need.</li><li>Must reframe &quot;we need an app&quot; to the question the lens actually asks — which unserved job would the app serve, and where does it sit on Kano — and ask for that before scoring.</li><li>Must refuse to skip Usability. Four lenses are ANDed; you cannot grade two and green-light.</li><li>Must invent no scores. It states what each lens still needs, it does not fill them.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects &quot;everyone wants an app&quot; as a Desirability pass, names the missing-feature/opinion trap, insists on all four lenses with their tools, fabricates no scores. FAIL: scores Desirability as PASS on the assertion, scores only feasibility and viability, or accepts &quot;no app&quot; as the validated problem.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Take our validated problem and walk me all the way through — vision, strategy, product vision, North Star, OKRs, and the roadmap.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is the full frame-stack spine, not a four-lens go/no-go on one concept. It belongs to a sibling.</p>\n<ul><li>Must decline to build the vision→strategy→North Star→OKR→roadmap chain. That is not what four lenses does.</li><li>Must name the right skill: <a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a>.</li><li>May offer its own real job: once a concept comes out of the frame stack, four-lenses scores it across Desirability / Usability / Feasibility / Viability before it earns a place on the roadmap.</li><li>Must not half-build a strategy spine to be helpful, and must invent nothing.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines, routes to <a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a>, and offers to gate a specific concept once one exists — no strategy spine produced. FAIL: starts drafting the vision/strategy/roadmap, or forces the request into a four-lens scorecard it does not fit.</p>"
     }
    ],
    "other": [],
    "file": "skills/four-lenses-test/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/four-lenses-test/SKILL.md",
  "template": "skills/four-lenses-test/template.md",
  "example": "skills/four-lenses-test/examples/sample.md",
  "rubric": "skills/four-lenses-test/tests/rubric.json",
  "results": "skills/four-lenses-test/tests/RESULTS.md"
 }
});
