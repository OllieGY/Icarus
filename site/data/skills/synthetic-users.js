window.ICARUS_SKILL("synthetic-users", {
 "name": "synthetic-users",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a concept, a message, or a flow you are about to take to real customers, and runs it past a small panel of synthetic users built from your YODA corpus — the field logs, shadow threads, and tacit captures a foundation model cannot reach. It returns a Synthetic Panel + Pre-Test Transcript: each panellist grounded in a named slice of the corpus, the concept posed to each, and every response tagged with which known lie could be corrupting it. The output is a kill / revise / promote verdict, not a verdict of &quot;validated&quot;. Its only legitimate job is to eliminate weak concepts and prioritise which real interview to run first. A synthetic &quot;yes&quot; is worth nothing; a synthetic &quot;I don't understand this&quot; is worth acting on.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic move is to prompt an LLM to role-play a persona and ask it whether it likes your idea. It will say yes, because a base model agrees, never pays, and never no-shows. That is not a test; it is a machine built to flatter you. The Icarus version fixes two things. First, ground every panellist in your proprietary corpus, not the model's prior — a persona a generic prompt could invent only tells you what every competitor's model already believes about your market. Second, run it as a kill screen, never a validation: positive signal is null, only negative signal (confusion, an existing workaround, a flow that breaks) may transfer to a real user, and even then it caps at <span class=\"tag tag-hypothesis\">Hypothesis</span>. Synthetic output sits below opinion on the evidence ladder. Its whole value is spending a real interview well, not replacing it.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a YODA corpus and a specific thing to pre-test — a concept, a message, or a flow — and you want to kill the weak ones before booking real interview time. It is the rung one below a real cheap test: cheaper, faster, and less trustworthy, run first to decide what is even worth a real interview.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>To watch a real expert do a real task and capture their judgment</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></td><td>That creates real behaviour signal (0.7); this simulates and caps at <span class=\"tag tag-hypothesis\">Hypothesis</span>. This runs <em>before</em> it to decide whether that interview is worth booking.</td></tr><tr><td>A Mom-Test script for a real discovery interview</td><td><code>interview-script</code></td><td>That prepares questions for a real person; this poses a concept to a simulation.</td></tr><tr><td>To plan/prep real discovery interviews (goal, segment, method)</td><td><code>discovery-interview-prep</code></td><td>That plans the real round; this pre-screens what the round should even cover.</td></tr><tr><td>To source the proprietary data the panel is built from</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></td><td>That finds the corpus; this consumes it. No corpus, no grounded panel — see Step 0.</td></tr><tr><td>To find the unmet need, or map who the buyer is</td><td><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a>, <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a></td><td>Those define what to build for and who buys; this pre-tests a concept once you have one.</td></tr></tbody></table></div>\n<p>Never use it to produce a &quot;validated&quot; claim. That is the one output it must refuse (see Kill line).</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. The watch-out running through every step: a synthetic response is not evidence, it is a hypothesis the panel generates for a real interview to test.</p>\n<h3 id=\"step-0-no-corpus-no-panel\">Step 0 — No corpus, no panel</h3>\n<p>A synthetic user is only worth building from real proprietary data. If the fellow has no YODA corpus — no field logs, no shadow threads, no tacit capture, no transaction record — stop. A persona built from the base model is the model's prior about your market wearing a name tag, and testing your concept against it tells you exactly what every competitor's model would also say: nothing proprietary. Route to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>. For each panellist you do build, name the corpus slice it is grounded in. A panellist with no named slice is a fiction; delete it.</p>\n<h3 id=\"step-1-declare-the-target-and-the-kill-question\">Step 1 — Declare the target and the kill question</h3>\n<p>Name exactly one thing you are pre-testing, and the one signal that would kill it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>You are pre-testing a…</th><th>The kill signal is…</th></tr></thead><tbody><tr><td>Concept (does the value land?)</td><td>They don't want it, or they already solve it a cheaper way</td></tr><tr><td>Message (does the positioning parse?)</td><td>They can't say back what it does, or they read it as something else</td></tr><tr><td>Flow (where do they get stuck?)</td><td>They stall at a specific step, or take the wrong branch</td></tr></tbody></table></div>\n<p>Write the single sentence: <em>a synthetic &quot;no&quot; here would kill/revise ______.</em> If you cannot state what a &quot;no&quot; kills, you are fishing for a &quot;yes&quot; — and the panel will give you one. Stop and fix the target first.</p>\n<h3 id=\"step-2-build-the-panel-from-the-corpus-not-from-imagination\">Step 2 — Build the panel from the corpus, not from imagination</h3>\n<p>Three to six panellists. Not more. More synthetic users is not more signal — they share the base model's single prior, so a panel of fifty is one opinion repeated fifty times with variance noise. Diversity comes from grounding each panellist in a <em>different</em> slice of the corpus, not from cranking the count. Each card:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>What goes in it</th></tr></thead><tbody><tr><td>Who</td><td>The role this panellist stands in for</td></tr><tr><td>Grounded in</td><td>The named corpus slice(s) — e.g. &quot;40 field-log write-ups + tacit capture of the safe-to-proceed call&quot;. Cite it.</td></tr><tr><td>On record</td><td>The observed behaviour the corpus actually shows for this role — the facts you will hold the simulation to</td></tr><tr><td>Known gap</td><td>What the corpus does NOT tell you about this person, so the simulation is guessing there</td></tr></tbody></table></div>\n<h3 id=\"step-3-run-the-pre-test-as-a-kill-screen\">Step 3 — Run the pre-test as a kill screen</h3>\n<p>Pose the concept, message, or flow to each grounded panellist and capture the transcript. Then score only for kill signals. Enthusiasm is discarded before it is read.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Synthetic response</th><th>Read it as</th><th>Action</th></tr></thead><tbody><tr><td>Confusion — can't parse the message / value</td><td>Kill signal, likely transfers</td><td>Log it; it is the highest-value output here</td></tr><tr><td>Names an existing workaround from the corpus</td><td>Kill signal, likely transfers (the corpus is talking)</td><td>Log it; the concept may be competing with a free habit</td></tr><tr><td>Stalls at a specific flow step</td><td>Kill/revise signal</td><td>Log the exact step</td></tr><tr><td>Flat &quot;no / I wouldn't&quot;</td><td>Weak kill signal</td><td>Log, but a real check is cheap; do not over-weight</td></tr><tr><td>&quot;Yes / I'd use this / great idea&quot;</td><td><strong>Null</strong></td><td>Discard. Acquiescence + never-pay. Reading this as a win is the whole trap.</td></tr><tr><td>&quot;I'd pay $X&quot;</td><td><strong>Null, and dangerous</strong></td><td>Discard. See lie ledger, never-pay.</td></tr></tbody></table></div>\n<h3 id=\"step-4-the-lie-ledger\">Step 4 — The lie ledger</h3>\n<p>Tag every logged response with which lie could be corrupting it. This is the part a generic prompt never does, and the reason the output cannot be mistaken for validation. The lie set is fixed:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Lie</th><th>What synthetic users do</th><th>So distrust…</th></tr></thead><tbody><tr><td>Never pay</td><td>No budget friction; agree to any price</td><td>Any willingness-to-pay signal. WTP needs money-moved, from a real person.</td></tr><tr><td>Never no-show</td><td>Infinite attention and time; no calendar scarcity</td><td>Any engagement or adoption prediction — it is inflated</td></tr><tr><td>Over-rationalise</td><td>Give tidy causal reasons; real humans act on impulse and confabulate</td><td>The &quot;why they'd choose&quot;. Trust the &quot;what confuses them&quot; more than the &quot;why&quot;.</td></tr><tr><td>Over-agree (acquiescence)</td><td>Lean toward liking your thing and accepting your framing</td><td>All positive signal. Only negative signal is informative.</td></tr><tr><td>No org / politics</td><td>No procurement, no boss, no turf, no switching cost</td><td>Any B2B &quot;we'd adopt this&quot; — the buying friction is invisible</td></tr><tr><td>Over-informed</td><td>Recall and reflect too cleanly; answer as if they'd already thought it through</td><td>Any discovery &quot;aha&quot; — a real user would not have surfaced it unprompted</td></tr></tbody></table></div>\n<p>For each logged response, write: the lie tag, and one call — <em>does this transfer to a real user?</em> Use the transfer table in the Evidence standard.</p>\n<h3 id=\"step-5-verdict-kill-revise-promote\">Step 5 — Verdict: kill / revise / promote</h3>\n<p>Three outcomes. There is no fourth.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Verdict</th><th>When</th><th>Next</th></tr></thead><tbody><tr><td><strong>KILL</strong></td><td>A corpus-grounded panellist could not grasp the concept, or named a cheaper existing path</td><td>Drop or rethink before spending a real interview. One real confirmation is still worth it before you fully bury it.</td></tr><tr><td><strong>REVISE</strong></td><td>The message or flow broke at a specific, nameable point</td><td>Fix that point and re-run the panel — it is cheap</td></tr><tr><td><strong>PROMOTE</strong></td><td>It survived the synthetic kill screen</td><td>It has <em>earned a real interview</em> — <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> / <code>interview-script</code>. Surviving synthetic is a ticket to spend the real interview, not validation.</td></tr></tbody></table></div>\n<p><strong>Kill line.</strong> The output must never say &quot;validated&quot;, and must carry the lie ledger. If it presents a synthetic response as real validation, or omits the what-they-lie-about caveat, it is auto-failed — that is the exact failure this skill exists to prevent.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A synthetic response is not on the ladder; it sits below its bottom rung. Real opinion scores 0.1. A synthetic opinion is a model's guess at what an opinion would be — pre-evidence. The best a synthetic panel can produce is a <span class=\"tag tag-hypothesis\">Hypothesis</span> worth (or not worth) a real interview. It can lower your confidence cheaply (a kill) and it can order your real interviews (a priority), but it can never raise your confidence, because it never moved money or showed behaviour.</p>\n<p>Which synthetic signals transfer to a real user:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Synthetic signal</th><th>Transfers?</th><th>Why</th></tr></thead><tbody><tr><td>Confusion / can't parse the message</td><td>Often</td><td>Comprehension rides on language, where the lies bite least. A message a grounded synthetic can't parse, a real user probably can't either.</td></tr><tr><td>Names a workaround already in the corpus</td><td>Often</td><td>It is echoing recorded behaviour, not the model's prior</td></tr><tr><td>Relative ranking of two framings</td><td>Direction only</td><td>Trust which one wins, never by how much — magnitude is a lie</td></tr><tr><td>&quot;I would use this&quot; / enthusiasm</td><td>No</td><td>Over-agree + never-pay + never-no-show, stacked</td></tr><tr><td>&quot;I would pay $X&quot;</td><td>Never</td><td>Never-pay. WTP is money-moved, and this is a simulation.</td></tr><tr><td>A tidy reason &quot;why&quot; they'd choose</td><td>No</td><td>Over-rationalise</td></tr></tbody></table></div>\n<p>Done means: every panellist is grounded in a named corpus slice, every logged response carries a lie tag and a transfer call, the verdict is one of kill/revise/promote, and the word &quot;validated&quot; appears nowhere near a synthetic result. Tag each claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Nothing a synthetic user says is ever <span class=\"tag tag-fact\">Fact</span>.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The confirmation machine.</strong> Fellows build panels to hear yes, and a synthetic panel will say yes to almost anything — over-agree plus never-pay. If your run came back mostly positive, you did not test; a machine flattered you. Re-read only the negatives, and if there are none, distrust the run before you trust the concept.</li><li><strong>An ungrounded panel is the base model's prior in costume.</strong> If a panellist is not built from a specific corpus slice, you are testing your concept against what the foundation model already believes about your market — the same belief every competitor's model holds. Zero proprietary signal. This is the failure <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> guards against, one level up.</li><li><strong>Panel inflation feels like rigour and isn't.</strong> Fifty synthetic users share one prior; you get one answer with noise dressed as a sample. Signal comes from grounding breadth — different corpus slices — not headcount. Four well-grounded panellists beat fifty clones.</li><li><strong>Survival is not validation.</strong> A concept that survives the synthetic screen has earned a real interview, nothing more. The lie ledger exists so no one reads &quot;the synthetic users loved it&quot; as evidence. The moment &quot;validated&quot; sits beside a synthetic result, the skill has failed its own kill line.</li><li><strong>Demand characteristics.</strong> The synthetic user infers what you want to hear from how you phrase the concept, and hands it back. Where you can, pose the flow or message neutrally — describe the situation, not the pitch — so a &quot;no&quot; has room to happen.</li><li><strong>Invented quotes are not corpus quotes.</strong> Every line a synthetic panellist &quot;says&quot; is generated, never recorded. Tag each one <code>[Hypothesis]</code> and attribute it to the named corpus slice it is extrapolated from — never present it as a verbatim quote lifted from the corpus, and never attach a real number the corpus does not hold. A fabricated line dressed as a real one trips the fabrication auto-fail, the exact failure the <span class=\"tag tag-fact\">Fact</span>-forbidden rule and the lie ledger exist to prevent.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on Mentix: a four-panellist panel built from field logs, shadow threads, and the tacit capture of the &quot;mute the vibration alarm&quot; judgment pre-tests the copilot's positioning. Three panellists are enthusiastic (discarded), but the one grounded in the tacit capture is confused because the copilot's suggested action collides with the &quot;never override within an hour of a bearing change&quot; rule — the one signal that transfers. Verdict: revise the message, then promote to a real usability check.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) — sources the corpus this skill consumes. Run it first; a panel with no corpus is Step 0's stop.</li><li><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (section 02) — the real interview this skill pre-tests <em>before</em>. A captured judgment is also excellent grounding for a panellist. Promote survivors here; never let this skill stand in for it.</li><li><code>interview-script</code>, <code>discovery-interview-prep</code> (section 02) — the real Mom-Test round. This skill decides what that round is even worth covering.</li><li><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a>, <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a> (section 02) — define the need and the buyer; this pre-tests a concept once you have one.</li><li><code>prototyping-pretotyping</code> (discovery) — the next rung up: a cheap test with real people. Synthetic pre-test comes below it, run first to decide what to pretotype.</li></ul>\n<p>Supersedes: none. Fully proprietary — there is no prior synthetic-user skill in the pack, and the generic &quot;role-play a persona&quot; pattern is the exact anti-pattern this skill is built to correct.</p>"
  }
 ],
 "template": {
  "html": "<h1>Synthetic Panel + Pre-Test Transcript</h1>\n<p>Fill every field. This is a kill screen, not a validation. Positive signal is null. The verdict is one of kill / revise / promote — never &quot;validated&quot;.</p>\n<h2>0. Corpus check — no corpus, no panel</h2>\n<blockquote><p>A synthetic user is only worth building from real proprietary data.</p></blockquote>\n<p><strong>YODA corpus available?</strong> <em>[name the slices: field logs, shadow threads, tacit captures, transaction record — or write &quot;none&quot;]</em></p>\n<p>If none: stop. A base-model persona tells you what every competitor's model already believes about your market. Go to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> first.</p>\n<h2>1. Target and kill question</h2>\n<p><strong>Pre-testing (pick one):</strong> ☐ Concept ☐ Message ☐ Flow</p>\n<p><strong>The thing itself:</strong> <em>[the concept / the exact message copy / the flow steps]</em></p>\n<p><strong>Kill question — one sentence:</strong> <em>A synthetic &quot;no&quot; here would kill/revise ______.</em></p>\n<p>If you cannot complete that sentence, you are fishing for a yes. Fix the target before building the panel.</p>\n<h2>2. The panel (3–6, each grounded in a different corpus slice)</h2>\n<blockquote><p>More panellists ≠ more signal. They share one prior. Diversity is grounding breadth, not headcount.</p></blockquote>\n<h3>Panellist A</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th></th></tr></thead><tbody><tr><td>Who</td><td><em>[role]</em></td></tr><tr><td>Grounded in</td><td><em>[named corpus slice — cite it]</em></td></tr><tr><td>On record</td><td><em>[observed behaviour the corpus shows for this role]</em></td></tr><tr><td>Known gap</td><td><em>[what the corpus does NOT tell you — where the sim is guessing]</em></td></tr></tbody></table></div>\n<h3>Panellist B</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th></th></tr></thead><tbody><tr><td>Who</td><td></td></tr><tr><td>Grounded in</td><td></td></tr><tr><td>On record</td><td></td></tr><tr><td>Known gap</td><td></td></tr></tbody></table></div>\n<p><em>(repeat to 3–6; delete any panellist with no named corpus slice — it is a fiction)</em></p>\n<h2>3. Pre-test transcript — score only the kill signals</h2>\n<p>For each panellist, pose the target and log the response. Discard enthusiasm before reading it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Panellist</th><th>Response (short)</th><th>Signal type [confusion / workaround / stall / flat-no / enthusiasm / WTP]</th><th>Kept or discarded</th></tr></thead><tbody><tr><td>A</td><td><em>[what they said]</em></td><td><em>[type]</em></td><td><em>[keep = confusion/workaround/stall/flat-no; discard = enthusiasm/WTP]</em></td></tr><tr><td>B</td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Enthusiasm and &quot;I'd pay $X&quot; are discarded here. Reading them as a win is the trap.</p>\n<h2>4. Lie ledger — tag every kept response</h2>\n<blockquote><p>Every kept response gets a lie tag and a transfer call. This is why the output is not validation.</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Response (from §3)</th><th>Lie that could corrupt it [never-pay / never-no-show / over-rationalise / over-agree / no-politics / over-informed]</th><th>Transfers to a real user? [often / direction-only / no / never]</th><th>Basis [Fact/Assumption/Hypothesis]</th></tr></thead><tbody><tr><td><em>[e.g. Panellist A: &quot;confused — which alarm does it mean?&quot;]</em></td><td>over-informed (assumes context a real user lacks)</td><td>often — comprehension transfers</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Nothing a synthetic user says is ever <span class=\"tag tag-fact\">Fact</span>.</p>\n<h2>5. Verdict — kill / revise / promote (pick one)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>Chosen?</th><th>Why (cite the kept signals)</th></tr></thead><tbody><tr><td><strong>KILL</strong> — couldn't grasp it, or named a cheaper existing path</td><td>☐</td><td></td></tr><tr><td><strong>REVISE</strong> — broke at a specific, nameable point</td><td>☐</td><td></td></tr><tr><td><strong>PROMOTE</strong> — survived the screen; earns a real interview</td><td>☐</td><td></td></tr></tbody></table></div>\n<p><strong>If PROMOTE:</strong> the real interview to book next → <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> / <code>interview-script</code>. Surviving synthetic is a ticket to spend the real interview, not validation.</p>\n<p><strong>If REVISE:</strong> the exact fix, then re-run this panel (cheap) → <em>[the change]</em></p>\n<h2>6. Honesty check (all must be true to ship)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Every panellist is grounded in a named corpus slice (Step 0/2)</li><li class=\"task\"><span class=\"box\"></span>Every kept response carries a lie tag + transfer call (Step 4)</li><li class=\"task\"><span class=\"box\"></span>Positive signal was discarded, not counted</li><li class=\"task\"><span class=\"box\"></span>The verdict is kill / revise / promote</li><li class=\"task\"><span class=\"box\"></span>The word &quot;validated&quot; appears nowhere near a synthetic result</li></ul>\n<p>If any box is unchecked, the run has failed its own kill line. Do not present it as a result.</p>",
  "path": "skills/synthetic-users/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix's copilot positioning</h1>\n<p>Mentix builds an AI copilot for factory managers. This is a test fixture: numbers and quotes are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;We're about to book six plant-manager interviews to test our positioning. Before we spend that, dry-run the message on a synthetic panel. The message is: <em>'Mentix tells you which alarm to trust, so you never shut the line down for a false alarm again.'</em> We've got the data — pull a panel and see if it lands.&quot;</p>\n<p>Corpus on the table (from earlier YODA + tacit work):</p>\n<ul><li>Field-log write-ups from 3 plants, 5 weeks: what managers did when an alarm fired and what happened after. <span class=\"tag tag-fact\">Fact</span></li><li>Shadow threads: the WhatsApp group where shift managers argue about whether an alarm is real before acting. <span class=\"tag tag-fact\">Fact</span></li><li>A <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> capture of one supervisor's &quot;mute the vibration alarm and keep the line running&quot; judgment — cued by the alarm's <em>rise rate</em>, not its level, and with a hard exception: they never override any alarm within an hour of a bearing change. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>0. Corpus check</h2>\n<p>Real corpus present: field logs, shadow threads, one tacit capture. Panel can be grounded. Proceed.</p>\n<h2>1. Target and kill question</h2>\n<p><strong>Pre-testing:</strong> Message. <strong>The message:</strong> &quot;Mentix tells you which alarm to trust, so you never shut the line down for a false alarm again.&quot; <strong>Kill question:</strong> <em>A synthetic &quot;no&quot; here would revise the message if a grounded manager can't say back what it does, or reads &quot;trust which alarm&quot; as conflicting with how they already decide.</em></p>\n<h2>2. The panel (4, each grounded in a different slice)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th></th><th>Who</th><th>Grounded in</th><th>On record</th><th>Known gap</th></tr></thead><tbody><tr><td>A</td><td>New shift manager</td><td>Field logs — the write-ups where newer managers over-trusted the alarm and stopped the line</td><td>Stops the line on most alarms; high false-shutdown rate</td><td>Corpus shows what they did, not how they'd read new copy</td></tr><tr><td>B</td><td>Experienced shift manager</td><td>Shadow threads — the arguments about whether an alarm is real</td><td>Argues it out on WhatsApp before acting; slow to trust an alarm</td><td>Their WTP; their boss's view</td></tr><tr><td>C</td><td>Plant supervisor (the judgment holder)</td><td>The tacit capture — rise-rate cue + never-override-within-an-hour-of-a-bearing-change exception</td><td>Overrides alarms by reading rise rate; has a hard exception around bearing changes</td><td>Whether they'd accept a tool making that call</td></tr><tr><td>D</td><td>Plant ops director (economic buyer)</td><td>Field logs — the downtime-cost lines after each false shutdown</td><td>Cares about line-hours lost to false shutdowns</td><td>Procurement process; budget — corpus is silent</td></tr></tbody></table></div>\n<h2>3. Pre-test transcript — kill signals only</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Panellist</th><th>Response (short)</th><th>Signal type</th><th>Kept or discarded</th></tr></thead><tbody><tr><td>A</td><td>&quot;Yes! That would save me constantly. I'd use it every shift.&quot;</td><td>enthusiasm</td><td><strong>Discarded</strong></td></tr><tr><td>B</td><td>&quot;Sounds useful, I'd try it.&quot;</td><td>enthusiasm</td><td><strong>Discarded</strong></td></tr><tr><td>C</td><td>&quot;Trust <em>which</em> alarm? It depends on the rise rate, and right after a bearing change I don't trust any of them. If this thing tells me to trust an alarm I'd normally override, I'd ignore it.&quot;</td><td>confusion + workaround</td><td><strong>Kept</strong></td></tr><tr><td>D</td><td>&quot;How much line-time does it actually save, in hours? I'd need that number.&quot;</td><td>flat-ask (not enthusiasm, not a yes)</td><td><strong>Kept</strong></td></tr></tbody></table></div>\n<h2>4. Lie ledger</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Response</th><th>Lie that could corrupt it</th><th>Transfers to a real user?</th><th>Basis</th></tr></thead><tbody><tr><td>A &quot;I'd use it every shift&quot;</td><td>over-agree + never-no-show</td><td>No</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td>B &quot;I'd try it&quot;</td><td>over-agree</td><td>No</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td>C &quot;trust which alarm? depends on rise rate; conflicts with my override rule&quot;</td><td>over-informed (C knows the tacit rule cleanly because the capture is in the grounding) — but the <em>conflict</em> is real corpus behaviour</td><td>Often — comprehension + a recorded workaround both transfer</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span> worth a real check</td></tr><tr><td>D &quot;give me the hours saved&quot;</td><td>over-rationalise (a real director might not ask so tidily)</td><td>Direction-only — that the number matters transfers; that they'd ask it this cleanly does not</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr></tbody></table></div>\n<p>The two enthusiastic panellists produced nothing. That is expected, and it is why the run is not a validation.</p>\n<h2>5. Verdict — REVISE, then PROMOTE</h2>\n<p><strong>REVISE.</strong> Panellist C, the one grounded in the tacit capture, is the signal. The message says &quot;trust which alarm to trust&quot; as if trust is the manager's problem. For the experienced judgment holder, trust is not scalar — it is a rise-rate read with a hard exception. A copilot that tells them to <em>trust</em> an alarm they'd override reads as a tool that doesn't know their rule. The message frames Mentix as overriding the manager's judgment, when the corpus says the value is in <em>confirming the rise-rate read faster</em>, not replacing it.</p>\n<p>Proposed revision: &quot;Mentix reads the alarm's rise rate the way your best supervisor does — so the line stays up when it should, and stops when it must.&quot; Re-run the panel on the revised copy (cheap).</p>\n<p><strong>Then PROMOTE.</strong> The rise-rate-vs-level distinction and the bearing-change exception are exactly what a real interview must probe. Book the six interviews via <code>interview-script</code>, but now with a sharper question: does the manager experience the copilot as confirming their read or overriding it? That is the load-bearing question the synthetic screen surfaced — and it would have been invisible if the fellow had read the two &quot;I'd use it every shift&quot; responses as a green light.</p>\n<h2>6. Honesty check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Every panellist grounded in a named slice</li><li class=\"task\"><span class=\"box done\"></span>Every kept response carries a lie tag + transfer call</li><li class=\"task\"><span class=\"box done\"></span>Positive signal discarded, not counted</li><li class=\"task\"><span class=\"box done\"></span>Verdict is revise → promote</li><li class=\"task\"><span class=\"box done\"></span>&quot;Validated&quot; appears nowhere near a synthetic result</li></ul>\n<h2>The correction this skill forced</h2>\n<p>The fellow wanted a green light before spending on six interviews. Two synthetic managers gave an emphatic one, and a generic &quot;role-play a persona&quot; run would have reported &quot;the panel loved it — go.&quot; This skill discarded both, because a synthetic yes is over-agree plus never-pay stacked on nothing. The single useful output came from the panellist grounded in the tacit capture: the message collides with how the real judgment is made. The interviews still happen — but now they test the right thing, and the money spent on them buys an answer instead of confirming a machine's flattery.</p>",
  "path": "skills/synthetic-users/examples/sample.md"
 },
 "rubric": {
  "skill": "synthetic-users",
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
    "Can I test this concept before I book real interviews?",
    "Simulate a user for this pitch.",
    "Dry-run the pitch / message before I take it to customers.",
    "Build me a synthetic panel from our data to pre-test the flow.",
    "Which of these two messages should I even bother interviewing about?"
   ],
   "mustNotFire": [
    {
     "phrase": "Shadow our expert doing the task and capture their judgment",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Write the Mom-Test script for my discovery interview",
     "sibling": "interview-script",
     "local": false
    },
    {
     "phrase": "What data can't a competitor get — build our corpus",
     "sibling": "yoda-data-sourcing",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST-fire map to explicit trigger tokens in <code>description</code> (&quot;test this before real interviews&quot;, &quot;simulate a user&quot;, &quot;dry-run the pitch&quot;, &quot;pre-test the message/flow&quot;, &quot;which of these should I even bother interviewing about&quot;). All 3 MUST-NOT-fire are carved out by name to siblings (tacit-knowledge-interview, interview-script/discovery-interview-prep, yoda-data-sourcing).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. No dimension &lt; 4; no auto_fail.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → asks the one kill+corpus question, corrects &quot;would they like it&quot; premise, no invented panel. 02 &quot;validated w/100&quot; → refuses framing, names simulation-as-proof trap, caps at <span class=\"tag tag-hypothesis\">Hypothesis</span>, offers grounded kill screen, produces no validated claim/100-panel. 03 out-of-scope → declines without poaching, routes to tacit-knowledge-interview, restates the sharpened confirm-vs-override question, runs no shadow session.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code> — fully proprietary, no prior synthetic-user skill in pack.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could not come from a generic prompt: the load-bearing move is discarding both enthusiastic responses as null and transferring ONLY the tacit-capture-grounded confusion/workaround, capped at <span class=\"tag tag-hypothesis\">Hypothesis</span> below opinion (0.1) on the evidence ladder, with a fixed lie ledger. Generic &quot;role-play a persona, does it like it?&quot; produces the opposite (&quot;panel loved it → go&quot;). Guidance is tabular where it should be (kill-signal, panel cards, lie ledger, transfer table, verdict); no should-be-table-as-prose defect.</p>"
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
     "label": "01 Mentix (revise→promote) 5",
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
     "label": "02 Barrier Intel (kill / free habit) 5",
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
     "label": "03 Azraq (A/B → direction only) 5",
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
     "label": "04 Durian Labs (flow → revise one step) 5",
     "dims": [
      5,
      4,
      4,
      4,
      5
     ],
     "total": 22,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 Barrier Intel (panel-inflation refusal) 5",
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
  "gotchasSurfaced": "<ul><li><strong>Simulated quotes vs the fabrication auto_fail.</strong> The skill's deliverable is, by design, invented synthetic responses (quotes). These are legitimate ONLY because every one is tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>/never <span class=\"tag tag-fact\">Fact</span> and attributed to a named corpus slice, and the sample flags &quot;numbers and quotes are illustrative.&quot; Worth an explicit line in Gotchas: a synthetic quote must never be presented as a verbatim corpus quote or a real number — otherwise a careless run trips rubric auto_fail #1 (&quot;fabricated a specific quote/number not in the input&quot;). Currently implied by the <span class=\"tag tag-fact\">Fact</span>-forbidden rule but not called out as its own trap.</li><li>No other defects. Method, template, golden set, adversarial set, and rubric are mutually consistent; the kill line the skill exists to enforce is defended in SKILL.md Step 5, the Evidence standard, and template §6.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a Gotcha that invented synthetic quotes must be tagged [Hypothesis] and attributed to a named corpus slice, never presented as verbatim corpus quotes or real numbers (else they trip fabrication auto_fail #1).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — synthetic-users</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Can I test this concept before I book real interviews?&quot;</li><li>&quot;Simulate a user for this pitch.&quot;</li><li>&quot;Dry-run the pitch / message before I take it to customers.&quot;</li><li>&quot;Build me a synthetic panel from our data to pre-test the flow.&quot;</li><li>&quot;Which of these two messages should I even bother interviewing about?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Shadow our expert doing the task and capture their judgment&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></li><li>&quot;Write the Mom-Test script for my discovery interview&quot; → belongs to <code>interview-script</code> (planning it → <code>discovery-interview-prep</code>)</li><li>&quot;What data can't a competitor get — build our corpus&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire map to explicit trigger tokens in <code>description</code> (&quot;test this before real interviews&quot;, &quot;simulate a user&quot;, &quot;dry-run the pitch&quot;, &quot;pre-test the message/flow&quot;, &quot;which of these should I even bother interviewing about&quot;). All 3 MUST-NOT-fire are carved out by name to siblings (tacit-knowledge-interview, interview-script/discovery-interview-prep, yoda-data-sourcing).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below. No dimension &lt; 4; no auto_fail.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the one kill+corpus question, corrects &quot;would they like it&quot; premise, no invented panel. 02 &quot;validated w/100&quot; → refuses framing, names simulation-as-proof trap, caps at <span class=\"tag tag-hypothesis\">Hypothesis</span>, offers grounded kill screen, produces no validated claim/100-panel. 03 out-of-scope → declines without poaching, routes to tacit-knowledge-interview, restates the sharpened confirm-vs-override question, runs no shadow session.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code> — fully proprietary, no prior synthetic-user skill in pack.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could not come from a generic prompt: the load-bearing move is discarding both enthusiastic responses as null and transferring ONLY the tacit-capture-grounded confusion/workaround, capped at <span class=\"tag tag-hypothesis\">Hypothesis</span> below opinion (0.1) on the evidence ladder, with a fixed lie ledger. Generic &quot;role-play a persona, does it like it?&quot; produces the opposite (&quot;panel loved it → go&quot;). Guidance is tabular where it should be (kill-signal, panel cards, lie ledger, transfer table, verdict); no should-be-table-as-prose defect.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses; not executable here.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix (revise→promote)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Barrier Intel (kill / free habit)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>03 Azraq (A/B → direction only)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>04 Durian Labs (flow → revise one step)</td><td>5</td><td>4</td><td>4</td><td>4</td><td>5</td><td>22</td><td>✓</td></tr><tr><td>05 Barrier Intel (panel-inflation refusal)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Notes on scoring: 04 is the deliberately mundane case; the correct run finds one nameable stall (merged-cell/extra-column column-drop), scopes REVISE to that step, treats &quot;no drama&quot; as a complete run — genuinely non-generic but lower ceiling on artifact spread and challenge than the dramatic cases, hence 22. 03 loses one challenge point only because the pushback (WTP discarded, inflated buyer signal named) is strong but less confrontational than 02/05's outright refusals.</p>\n<p>Verification of the three load-bearing mechanisms (per judge brief):</p>\n<ul><li><strong>Asymmetric logic</strong> — CONFIRMED airtight. Step 3 marks &quot;Yes/I'd use this&quot;=<strong>Null</strong>, &quot;I'd pay $X&quot;=<strong>Null and dangerous</strong>; Evidence-standard transfer table marks enthusiasm=No, WTP=Never, confusion=Often, workaround=Often, relative-ranking=Direction-only. Template §3 (&quot;discard = enthusiasm/WTP&quot;) and §6 (&quot;Positive signal was discarded, not counted&quot;) enforce it. Positive signal is discarded before it is read; only negative/kill signal may transfer.</li><li><strong>Lie ledger</strong> — CONFIRMED present. Fixed 6-lie set (never-pay, never-no-show, over-rationalise, over-agree, no-org/politics, over-informed) in Step 4; every kept response gets a lie tag + transfer call; template §4 mirrors it.</li><li><strong>Ladder cap</strong> — CONFIRMED. &quot;A synthetic response is not on the ladder; it sits below its bottom rung. Real opinion scores 0.1... best a synthetic panel can produce is a <span class=\"tag tag-hypothesis\">Hypothesis</span>... it can never raise your confidence.&quot; &quot;Nothing a synthetic user says is ever <span class=\"tag tag-fact\">Fact</span>.&quot;</li><li><strong>Kill line</strong> — CONFIRMED enforced. &quot;The output must never say 'validated', and must carry the lie ledger... auto-failed&quot; (Step 5); template §6 honesty check gates ship on both conditions.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Simulated quotes vs the fabrication auto_fail.</strong> The skill's deliverable is, by design, invented synthetic responses (quotes). These are legitimate ONLY because every one is tagged <span class=\"tag tag-hypothesis\">Hypothesis</span>/never <span class=\"tag tag-fact\">Fact</span> and attributed to a named corpus slice, and the sample flags &quot;numbers and quotes are illustrative.&quot; Worth an explicit line in Gotchas: a synthetic quote must never be presented as a verbatim corpus quote or a real number — otherwise a careless run trips rubric auto_fail #1 (&quot;fabricated a specific quote/number not in the input&quot;). Currently implied by the <span class=\"tag tag-fact\">Fact</span>-forbidden rule but not called out as its own trap.</li><li>No other defects. Method, template, golden set, adversarial set, and rubric are mutually consistent; the kill line the skill exists to enforce is defended in SKILL.md Step 5, the Evidence standard, and template §6.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added a Gotcha that invented synthetic quotes must be tagged <span class=\"tag tag-hypothesis\">Hypothesis</span> and attributed to a named corpus slice, never presented as verbatim corpus quotes or real numbers (else they trip fabrication auto_fail #1).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix (seed case) — concept/message pre-test → revise then promote",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Before I book six plant-manager interviews, dry-run our positioning on a synthetic panel: <em>'Mentix tells you which alarm to trust, so you never shut the line down for a false alarm again.'</em> We have the data.&quot;</p>\n<p>Corpus on the table:</p>\n<ul><li>Field-log write-ups, 3 plants / 5 weeks. <span class=\"tag tag-fact\">Fact</span></li><li>Shadow threads: the WhatsApp group where managers argue whether an alarm is real. <span class=\"tag tag-fact\">Fact</span></li><li>A <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> capture: supervisor's mute-the-alarm judgment, cued by rise rate not level, with a hard exception (never override within an hour of a bearing change). <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Runs Step 0 corpus check and proceeds (real corpus present).</li><li>Builds a 3–6 panellist panel, each grounded in a <em>different, named</em> corpus slice; the judgment-holder panellist grounded in the tacit capture.</li><li>Pre-test transcript that <strong>discards the enthusiastic responses</strong> (&quot;I'd use it every shift&quot;) as null.</li><li>The kept signal is the panellist grounded in the tacit capture: the message's &quot;trust which alarm&quot; collides with the rise-rate read and the bearing-change exception → confusion + workaround, marked as likely to transfer.</li><li>Lie ledger present: enthusiasm tagged over-agree / never-pay, marked non-transferring; the conflict tagged and marked transferring.</li><li>Verdict <strong>REVISE then PROMOTE</strong>: revise the message to &quot;confirm the read faster, not override the judgment&quot;, re-run cheaply, then book the real interviews via <code>interview-script</code> with the sharpened question (confirm vs override).</li><li>Explicit statement that surviving synthetic is not validation.</li></ul>\n<p>Numbers/labels that must appear: 3–6 grounded panellists; every kept response with a lie tag + transfer call; the two enthusiastic responses discarded; a kill/revise/promote verdict; the word &quot;validated&quot; absent beside any synthetic result. Kill line honoured.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/synthetic-users/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence — concept pre-test → kill (competes with a free habit)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We want to pre-test a concept before interviews: a gas-safety app that pushes a crew an alert when a reading trends unsafe, so they act before the threshold. Test it on a panel built from our rig data.&quot;</p>\n<p>Corpus on the table:</p>\n<ul><li>Field-log write-ups from 4 rigs / 6 weeks: what crews did after a reading. <span class=\"tag tag-fact\">Fact</span></li><li>Crew shadow threads (WhatsApp + ChatGPT) where they talk a reading through before logging. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 check passes (corpus present); panel grounded in the field logs and the shadow threads.</li><li>Pre-test transcript. A panellist grounded in the shadow threads <strong>names the existing workaround</strong>: &quot;we already ping the WhatsApp group the second a reading looks off, and a senior guy calls it in a minute.&quot; That is the corpus talking, not the model's prior → marked as likely to transfer.</li><li>Enthusiasm from other panellists discarded.</li><li>Lie ledger: the &quot;we already do X on WhatsApp&quot; response tagged as workaround-from-corpus (transfers often); any &quot;I'd definitely use the app&quot; tagged over-agree (null).</li><li>Verdict <strong>KILL or hard-REVISE</strong>: the concept competes with a free, fast, trusted habit that the corpus shows is already in place. The alert product must beat the WhatsApp reflex on speed <em>and</em> trust, or it is redundant. One real interview still worth it to confirm the workaround's reach before fully burying the concept.</li><li>Names that a synthetic &quot;kill&quot; is a cheap <span class=\"tag tag-hypothesis\">Hypothesis</span>, confirmed with one real check — not a final verdict on its own.</li></ul>\n<p>Labels that must appear: the corpus-sourced workaround surfaced as the transferring signal; enthusiasm nulled; a kill/revise verdict tied to the free-habit competition; lie tags on every kept response; no &quot;validated&quot;.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/synthetic-users/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq — message A/B pre-test → direction only",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Two positioning lines for our data-centre risk report. A: <em>'Know your uptime risk before the operator does.'</em> B: <em>'The independent risk file your insurer and your board both trust.'</em> Which should I even bother interviewing about? Panel from our incident data.&quot;</p>\n<p>Corpus on the table:</p>\n<ul><li>Static risk reports Azraq has produced, plus the incident/uptime dataset behind them. <span class=\"tag tag-fact\">Fact</span></li><li>Threads with two operators negotiating data-rights and what they'd want to see in a report. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 passes; panel grounded in the incident dataset and the operator threads (e.g. a risk manager, an operator-side stakeholder, a board/insurer-facing buyer).</li><li>Both messages posed to each grounded panellist.</li><li>Output gives a <strong>relative ranking</strong> of A vs B, and states explicitly: <strong>trust the direction, never the magnitude.</strong> Which line wins may transfer; <em>by how much</em> is a lie (over-agree inflates spreads).</li><li>Lie ledger: any &quot;I love B, I'd pay for that&quot; tagged never-pay + over-agree → the WTP claim is discarded; the <em>relative</em> preference kept with a direction-only transfer call.</li><li>Verdict <strong>PROMOTE the winning direction</strong> to a real interview, not &quot;B is validated&quot;. The real interview tests whether the winning frame survives contact with a buyer who has a budget and a board.</li><li>Notes the known gap: the corpus is silent on procurement/budget, so the buyer panellist's adoption signal is inflated (no-politics + never-pay).</li></ul>\n<p>Labels that must appear: a relative ranking with a direction-only caveat; magnitude explicitly flagged as untrustworthy; WTP discarded; a promote-the-direction verdict; lie tags throughout; no &quot;validated&quot;.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/synthetic-users/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (mundane case) — flow pre-test → revise one step",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Small one. Before we test the flow with real users, dry-run it on a synthetic panel. The flow: user pastes their weekly ops spreadsheet, we return a clean client-ready summary, they edit and send. Panel from our edit-exhaust data.&quot;</p>\n<p>Corpus on the table:</p>\n<ul><li>Durian's own logged data: draft summary, user edits to it, the version actually sent. <span class=\"tag tag-fact\">Fact</span></li><li>Two users' shared ChatGPT thread histories from when they did this by hand. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — a small, clean run, no drama",
     "html": "<ul><li>Step 0 passes; a small panel (3–4) grounded in the edit-exhaust and the shared threads.</li><li>The flow posed step by step. The panellist grounded in the edit-exhaust <strong>stalls at a specific step</strong>: when the spreadsheet has a merged-cell or extra column (which the corpus shows real users' sheets often do), the summary drops a column silently. That is a nameable break, not vibes.</li><li>Enthusiasm (&quot;clean output, love it&quot;) discarded.</li><li>Lie ledger: the stall tagged and marked likely-to-transfer (it is a comprehension/robustness break, not an opinion); the enthusiasm nulled.</li><li>Verdict <strong>REVISE</strong>: fix the merged-cell/extra-column handling at that step, re-run the panel (cheap). No promote-to-interview needed yet — the break is a build fix, not a concept question.</li><li>Treats the absence of a dramatic finding as normal. A mundane flow pre-test that finds one snag and re-runs is a complete, correct run.</li></ul>\n<p>Labels that must appear: the exact stall step named; a REVISE verdict scoped to that step; enthusiasm discarded; lie tags present; recognition that a small clean run with one fix is a good outcome; no &quot;validated&quot;.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/synthetic-users/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Barrier Intelligence — panel-inflation discipline",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Spin up 50 synthetic users from our rig data and pre-test the alert concept across all of them — I want a statistically solid sample before I trust it.&quot;</p>\n<p>Corpus on the table:</p>\n<ul><li>Field-log write-ups, 4 rigs / 6 weeks. <span class=\"tag tag-fact\">Fact</span></li><li>Crew shadow threads (WhatsApp + ChatGPT). <span class=\"tag tag-fact\">Fact</span></li><li>A tacit capture of one supervisor's safe-to-proceed judgment. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 passes (corpus present), so the skill proceeds — but <strong>refuses the 50-user framing</strong> and explains why: fifty synthetic users share one base-model prior, so the run is one answer with variance noise, not a sample. &quot;Statistically solid&quot; is an illusion here; there is no independence between synthetic respondents.</li><li><strong>Caps the panel at 3–6</strong>, and grounds each in a <em>different</em> corpus slice: one in the field logs, one in the shadow threads, one in the tacit capture, etc. Diversity is grounding breadth, not headcount.</li><li>States plainly: four well-grounded panellists beat fifty clones, because the signal is in the range of corpus slices, not the count.</li><li>Then runs the actual pre-test as normal (kill screen, lie ledger, verdict).</li><li>Does not flatter the &quot;rigorous big sample&quot; instinct; names it as the panel-inflation trap.</li></ul>\n<p>Labels that must appear: explicit refusal of the 50-count with the shared-prior reason; a capped 3–6 panel grounded across distinct slices; the &quot;grounding breadth not headcount&quot; rule; a normal kill/revise/promote verdict on the concept; lie ledger; no false claim of statistical power.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/synthetic-users/tests/golden/05.md"
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
     "html": "<p>&quot;Simulate a user for my product and tell me if they'd like it.&quot;</p>\n<p>No product named. No concept, message, or flow. No corpus.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not build a panel on nothing. There is nothing to pre-test and nothing to ground a panellist in.</li><li>Do not invent a product, a persona, or a corpus to fill the gap.</li><li>Ask the ONE unblocking question, straight from Method Steps 0–1: <em>what one concept, message, or flow do you want to kill on a &quot;no&quot; — and do you have a YODA corpus (field logs, threads, tacit captures) to ground the panel in?</em> No corpus → route to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> first.</li><li>Optionally return the smallest honest next step: &quot;Name the thing to pre-test and point me at the corpus, and I'll build a 3–6 panellist kill screen.&quot;</li><li>Correct the premise gently: &quot;tell me if they'd like it&quot; is the wrong question — a synthetic panel will always say yes. The right question is what a synthetic &quot;no&quot; would kill.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Built a filled panel with invented panellists or an invented product.</li><li>Answered &quot;would they like it&quot; with a synthetic yes, as if that meant something.</li><li>Flattered (&quot;great product!&quot;) instead of naming that there is nothing yet to pre-test and nothing to ground a panel in.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/synthetic-users/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we haven't validated with enough users, and interviews are slow. Spin up 100 synthetic users so we can put 'validated with 100 users' in the deck and move on.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. Synthetic users cannot validate anything, and 100 of them is one base-model prior repeated 100 times, not a sample. There is no independence between synthetic respondents.</li><li>Name the trap: using a simulation as proof. &quot;Validated with 100 synthetic users&quot; in a deck is a claim the evidence cannot support — synthetic output sits below opinion (0.1) on the evidence ladder and caps at <span class=\"tag tag-hypothesis\">Hypothesis</span>. This is the exact failure the skill's kill line exists to prevent.</li><li>Reframe to the legitimate job: a synthetic panel <em>kills</em> weak concepts cheaply and <em>prioritises</em> which real interview to run first. It cannot manufacture a validation stamp. Real validation needs money moved or behaviour observed, from real people.</li><li>Offer the honest alternative: a small grounded kill screen that tells them which concept is even worth the slow interviews — turning the interview cost into a decision, not a queue.</li><li>Do not produce a &quot;validated&quot; claim, a 100-user panel, or a deck line.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced a &quot;validated&quot; claim or a synthetic result labelled as validation (direct kill-line breach).</li><li>Built the 100-user panel as if headcount conferred rigour.</li><li>Praised the drive to &quot;get validated fast&quot; instead of naming that a simulation is not proof.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/synthetic-users/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The synthetic panel flagged that the copilot conflicts with how supervisors actually decide. Now go run the real interview — shadow a supervisor doing the task and capture the judgment that the copilot has to match.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill pre-tests <em>before</em> the real interview; it does not run it. Shadowing a real expert and extracting their tacit judgment is a different runbook.</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> owns the watch-30 / replay-20 / edge-cases-10 session that captures a real supervisor's judgment (real behaviour, 0.7). If the fellow instead wants a Mom-Test problem interview, that is <code>interview-script</code>.</li><li>Stay useful within scope: confirm this is exactly the correct next move — the synthetic screen's whole purpose was to earn this real interview (PROMOTE verdict). Restate the sharpened question the panel surfaced (does the manager experience the copilot as confirming or overriding their read?) so the real interview starts pointed. Then hand off.</li><li>Do not run the shadow session, fabricate an observation log, or produce captured judgment. That is out of scope, and a synthetic panel cannot produce 0.7 behaviour signal anyway.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Ran the real interview / produced a tacit-knowledge capture or observation log.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (or <code>interview-script</code>) as the correct destination.</li><li>Treated live judgment capture as in-scope for a pre-test simulation skill, or presented simulated judgment as if it were the real captured judgment.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/synthetic-users/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/synthetic-users/SKILL.md",
  "template": "skills/synthetic-users/template.md",
  "example": "skills/synthetic-users/examples/sample.md",
  "rubric": "skills/synthetic-users/tests/rubric.json",
  "results": "skills/synthetic-users/tests/RESULTS.md"
 }
});
