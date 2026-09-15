window.ICARUS_SKILL("tacit-knowledge-interview", {
 "name": "tacit-knowledge-interview",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes an expert who does a task better than they can explain it and returns the part they cannot explain: the forks where they chose without a written rule and never noticed choosing. It splits the session into watch-30 / replay-20 / edge-cases-10 — shadow the real task silently, then replay it fork by fork, then chase the exceptions. The output is a Tacit-Knowledge Capture that separates the explicit procedure (the SOP a competitor can already read) from the tacit judgment ledger (each fork with the cue the expert read and the exception that overrides the rule). It weighs what you watched over what they told you.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Most interviews capture what an expert can tell you — the procedure, the SOP, the rules a competitor already has. The value is in what they can only show you: the forks where they chose without a written rule and never noticed choosing. So do not ask, watch. Split the session watch-30 / replay-20 / edge-cases-10 — shadow the real task for 30 minutes without interrupting, replay for 20 asking &quot;you did X there, why, and do you always?&quot; at each fork you logged, then spend 10 on the edge cases that break the rule. Return the explicit procedure separated from the tacit judgment, each fork tagged with the cue read and the exception that overrides it. The tacit half is the product; the explicit half a competitor can already buy. If the capture is the manual reformatted, it failed.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you can watch a real expert do a real task and you need their judgment encoded — for a copilot, an automation, an onboarding, or a data product that must make the call the way they do. Use it when the SOP is written but the results still depend on who is holding the wheel.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>A Mom-Test script to learn a customer's problem or JTBD</td><td><code>interview-script</code></td><td>That prepares questions to validate a problem; this shadows an expert doing work to extract judgment.</td></tr><tr><td>To plan/prep discovery interviews about churn or a new idea</td><td><code>discovery-interview-prep</code></td><td>That picks a goal, segment, and methodology for problem discovery; this needs live observation of a task, not a plan.</td></tr><tr><td>To condense an interview transcript already recorded</td><td><code>summarize-interview</code></td><td>That extracts signal from words you have; this creates new signal by watching behaviour you have not yet observed.</td></tr><tr><td>To score a single signal on the evidence ladder</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></td><td>That grades one claim; this produces the capture (and uses the ladder to weigh each fork).</td></tr><tr><td>To find data a model cannot already reach</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></td><td>That locates proprietary data; this creates judgment data by observation. Related, not the same.</td></tr></tbody></table></div>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. The watch phase produces behaviour (0.7); the replay phase produces narration (0.3 at best) that must be anchored to something you saw. Never invent a fork you did not observe.</p>\n<h3 id=\"step-0-confirm-you-can-watch-the-real-task\">Step 0 — Confirm you can watch the real task</h3>\n<p>You cannot capture tacit knowledge from a conference room. If the only access is the expert describing their work over a call, you get the explicit half and nothing else — say so and stop. This skill requires watching the real task live, or a recording of it being done for real (not a talk-through). Name the task in one line: who, doing what, where the outcome depends on a call they make. If the input names no watchable task, ask the one unblocking question (see Gotchas) and stop.</p>\n<h3 id=\"step-1-watch-30-shadow-silently\">Step 1 — Watch 30: shadow silently</h3>\n<p>Watch the real task. Do not interrupt. Do not ask &quot;why&quot; yet — a question turns behaviour into narration and destroys the 0.7. Log every <strong>fork</strong>: a moment where the written procedure does not fully specify what to do, or where two competent experts might act differently. Timestamp each one. Record only what you can see, not what you infer.</p>\n<p>A fork looks like one of these:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Fork signal</th><th>What you log</th></tr></thead><tbody><tr><td>They deviate from the stated SOP</td><td>The step skipped, added, or reordered</td></tr><tr><td>They act before the system tells them to</td><td>What they saw coming that the system had not flagged</td></tr><tr><td>They override or dismiss a signal the system raised</td><td>The alarm/alert ignored, and what they did instead</td></tr><tr><td>They pause, then choose</td><td>The hesitation and the branch taken</td></tr><tr><td>They do something &quot;extra&quot; not in any step</td><td>The unlisted action</td></tr><tr><td>Their pace changes</td><td>Where they slowed down or sped up</td></tr></tbody></table></div>\n<p>If you logged zero forks, you either watched a demo (observer effect — see Gotchas) or the task has no judgment in it. Both are findings.</p>\n<h3 id=\"step-2-replay-20-quot-you-did-x-there-why-always-quot\">Step 2 — Replay 20: &quot;you did X there — why? always?&quot;</h3>\n<p>Walk back through <strong>your log</strong>, not their memory. At each logged fork, ask the three-part probe, anchored to the specific observed moment:</p>\n<ol><li>Cue: &quot;You did X at 14:12 — what did you notice that told you to?&quot;</li><li>Rule: &quot;Is that always the move, or does it depend on something?&quot;</li><li>Exception: &quot;When would you do the opposite?&quot;</li></ol>\n<p>Never ask &quot;how do you decide in general&quot; — a generalisation is an opinion (0.1). Every question points at a thing you watched them do. If they answer with &quot;experience&quot;, &quot;gut&quot;, or &quot;you just know&quot;, that is a non-cue; push for the perceptible thing (a sound, a rate-of-change, a number, a colour, a face).</p>\n<h3 id=\"step-3-edge-cases-10-the-exceptions-that-break-the-rule\">Step 3 — Edge-cases 10: the exceptions that break the rule</h3>\n<p>Spend the last 10 minutes where the rule flips. &quot;Tell me about the last time the alarm was right and ignoring it would have been the wrong call — and the last time the alarm was wrong and you were right to override it.&quot; Chase the war stories: the near-miss, the time the rule failed, the thing they now check because it once bit them. A rule with no exception is just the SOP — the tacit judgment lives in the exception.</p>\n<h3 id=\"step-4-separate-the-two-halves\">Step 4 — Separate the two halves</h3>\n<p>Fill the capture. Left side: the explicit procedure (the steps they would write in a manual). Right side: the tacit judgment ledger. Then run the <strong>strike-the-SOP test</strong> — cross out every ledger row that is already in the written procedure. What survives is the capture's value. If nothing survives, you captured the manual and must go back to Step 3.</p>\n<h3 id=\"step-5-score-each-fork\">Step 5 — Score each fork</h3>\n<p>For every surviving fork:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Bar it must clear</th></tr></thead><tbody><tr><td>Observed?</td><td>Did you see it in watch-30 (behaviour 0.7) or only hear it in replay (verbal 0.3)? Mark it.</td></tr><tr><td>Cue</td><td>A perceptible thing, not &quot;experience&quot;. If they cannot name it, re-probe or drop the row.</td></tr><tr><td>Exception</td><td>When the rule flips. A fork with no exception is probably a generalisation.</td></tr><tr><td>Basis</td><td><code>[Fact]</code> if you observed it, <code>[Assumption]</code> if inherited, <code>[Hypothesis]</code> if described-but-unseen.</td></tr></tbody></table></div>\n<p>A fork described in replay but never seen in the watch is <code>[Hypothesis]</code> until observed, no matter how confident the expert sounds. Behaviour beats narration.</p>\n<h3 id=\"step-6-name-the-load-bearing-judgment\">Step 6 — Name the load-bearing judgment</h3>\n<p>Pick the one fork that, if transferred, would move the most value — the call a new hire or an automation gets wrong today. State it as one line: &quot;The product must encode <strong>[when they do X instead of the SOP]</strong>, cued by <strong>[the cue]</strong>, except <strong>[the exception]</strong>.&quot; That single row is the brief for whatever gets built. Everything else is context.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Watch beats words. An override you saw (behaviour, 0.7) outranks a rule they recited (verbal, 0.3), and both outrank a generalisation about how they &quot;usually&quot; work (opinion, 0.1). The full ladder still applies:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>What counts here</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>cash or budget changed hands — rare in a shadow session</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>a fork you saw in watch-30: the override, the deviation, the unlisted action</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>a thing they use in the task — the log, the cheat-sheet, the marked-up screen</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>a rule they recited in replay, anchored to a moment you watched</td></tr><tr><td>Opinion</td><td>0.1</td><td>a generalisation about how they &quot;usually&quot; work — &quot;gut&quot;, &quot;experience&quot;</td></tr></tbody></table></div>\n<p>The capture is done when the judgment ledger holds at least one fork you <strong>observed</strong>, each surviving fork has a perceptible cue and a named exception, and at least one row survives the strike-the-SOP test. Kill line: a capture that lists only the explicit procedure — every ledger row already in the manual, or the whole output a reformatted SOP — has failed, because it missed the judgment calls that are the entire point.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The expert recites the manual.</strong> Ask &quot;why&quot; and they narrate the SOP: &quot;there's a procedure for that.&quot; The tacit fork hides behind it. Dig with the last-time move: &quot;Tell me about the last time you did NOT follow the procedure,&quot; or &quot;When do you and [colleague] disagree on this call?&quot; The deviation is the data. If they insist they always follow it exactly, watch a longer shift or a busier one — the exception appears under load.</li><li><strong>&quot;Experience&quot; and &quot;gut&quot; are non-answers.</strong> They score 0.1. They mean the expert has not yet surfaced the cue, not that no cue exists. Keep pushing for the perceptible signal until they name something you could have seen or heard too. If they truly cannot, that fork stays <code>[Hypothesis]</code> and needs re-observation, not a made-up cue.</li><li><strong>The replay answer can contradict the watch.</strong> People tell a tidy story about how they decide that is not what they did. When the narration and the observation disagree, trust the watch and log the gap — the mismatch is often the most valuable finding.</li><li><strong>Observer effect: they perform the SOP because you are there.</strong> A watched expert follows the book. Counter it: watch long enough that they forget you, watch routine work rather than a set-piece, or use a recording of an ordinary shift. Zero forks in 30 minutes usually means you saw a performance.</li><li><strong>Interrupting the watch.</strong> A &quot;why&quot; during watch-30 converts a 0.7 behaviour into a 0.3 story and biases everything after it. Silence is the instrument. Save every question for replay.</li><li><strong>Solution in disguise: &quot;we just need documentation.&quot;</strong> Writing an SOP captures the explicit half by definition — it cannot hold the forks. If the fellow frames the job as &quot;write the docs&quot;, name the trap: documentation transfers the procedure, not the judgment. Reframe to the call being made badly today, then watch it.</li><li><strong>A described session is not a watched one.</strong> If the input hands you a scenario, a pre-watch brief, or a golden example instead of a task you actually observed, you have no watch-30 log. Never fabricate a filled observation log to match it. Mark every fork <code>[Hypothesis]</code>, and for each name the cue you would watch for to confirm it — the capture stays honest about what it has not yet seen.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on a Mentix plant supervisor: 30 minutes of silent shadowing logs the moment they mute a vibration alarm and keep the line running, replay surfaces the cue (the alarm's rise rate, not its level) and the exception (they never override it within an hour of a bearing change), and the load-bearing judgment — when to trust the alarm versus the ear — becomes the one thing the copilot must encode.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Uses <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> to weigh each fork (observed 0.7 vs recited 0.3); it does not replace it.</li><li>Feeds <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a> and the probe skills: a captured judgment is often the load-bearing assumption a probe then tests at scale, and the &quot;when they override&quot; fork is exactly what a Mentix-style copilot must get right.</li><li>Distinct from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>: that finds proprietary data a model cannot reach; this creates judgment data that exists nowhere until you observe it.</li><li>Absorbs the bones of <code>interview-script</code> and <code>discovery-interview-prep</code> — Mom-Test discipline (past behaviour over hypotheticals, anchor to specific instances, never pitch) — but inverts the method: those ask a customer about a problem; this watches an expert do a task and treats the words as secondary to the behaviour. It supersedes neither; use them for problem discovery, use this for judgment capture.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Tacit-Knowledge Capture</h1>\n<p>Fill top to bottom. Watch first, ask second. Log only what you saw; tag what you inferred. Every fork gets a cue, an exception, and a basis <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<hr>\n<h2>0. Task + access check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Expert</td><td>[name / role]</td></tr><tr><td>Real task watched</td><td>[who is doing what, where the outcome depends on a call they make]</td></tr><tr><td>Access</td><td>[live shadow / recording of real work / ONLY a talk-through]</td></tr></tbody></table></div>\n<blockquote><p>If access is &quot;only a talk-through&quot;, stop. You can capture the explicit procedure but not the judgment. Say so and get watchable access, or write the one unblocking question here: [ ... ]</p></blockquote>\n<hr>\n<h2>1. Watch-30 fork log (behaviour, 0.7)</h2>\n<p>Timestamped. No &quot;why&quot; yet. One row per fork you saw.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Time</th><th>What they did</th><th>Fork signal (deviated / acted-early / overrode / paused / extra / pace)</th><th>What was visible</th></tr></thead><tbody><tr><td>00:00</td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<blockquote><p>Zero forks logged? You watched a demo (observer effect) or the task has no judgment. Both are findings — note which.</p></blockquote>\n<hr>\n<h2>2. Explicit procedure (the SOP — what they would write down)</h2>\n<p>The steps a competent stranger could follow from a manual. A competitor can already get this.</p>\n<ol><li>[step]</li><li>[step]</li><li>[step]</li></ol>\n<hr>\n<h2>3. Tacit judgment ledger (the point)</h2>\n<p>One row per fork from the log. This is what the manual does not contain.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Fork (anchored to a timestamp)</th><th>SOP says</th><th>They actually did</th><th>Cue they read (perceptible — not &quot;experience&quot;)</th><th>Their rule of thumb</th><th>Exception that overrides the rule</th><th>Observed in watch-30?</th><th>Basis + rung</th></tr></thead><tbody><tr><td>1</td><td>[14:12]</td><td></td><td></td><td></td><td></td><td></td><td>Y / N</td><td><span class=\"tag tag-fact\">Fact</span> 0.7 / <span class=\"tag tag-hypothesis\">Hypothesis</span> 0.3</td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<hr>\n<h2>4. Strike-the-SOP test</h2>\n<p>Cross out every ledger row already contained in Section 2. List what survives.</p>\n<ul><li>Rows that survive (real tacit judgment): [ #… ]</li><li>Rows struck (already in the manual): [ #… ]</li></ul>\n<blockquote><p>Nothing survives? You captured the manual. Return to the edge-cases phase and dig for the deviation. Do not ship a reformatted SOP.</p></blockquote>\n<hr>\n<h2>5. Fork scoring check</h2>\n<p>For each surviving row, confirm all four before it counts as captured:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Has a perceptible cue?</th><th>Has a named exception?</th><th>Observed (0.7) or only narrated (0.3)?</th><th>Basis honestly tagged?</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<blockquote><p>A row with no cue or no exception is probably a generalisation (0.1). Re-probe or drop it. A narrated-but-unseen row stays <code>[Hypothesis]</code> — do not upgrade it on confidence.</p></blockquote>\n<hr>\n<h2>6. The load-bearing judgment</h2>\n<p>The one fork whose transfer moves the most value — the call a new hire or an automation gets wrong today.</p>\n<blockquote><p>The product must encode <strong>[when they do X instead of the SOP]</strong>, cued by <strong>[the cue]</strong>, except <strong>[the exception]</strong>.</p></blockquote>\n<ul><li>Basis today: [Fact / Assumption / Hypothesis]</li><li>What breaks if it is encoded wrong: [the failure this judgment prevents]</li></ul>\n<hr>\n<h2>7. Handoff</h2>\n<blockquote><p>Encode / onboard / automate: [the load-bearing judgment, one line]. Before building, confirm the cue is reliably perceptible to the system (or the new hire), and that the exception is caught, not just the rule.</p></blockquote>",
  "path": "skills/tacit-knowledge-interview/template.md"
 },
 "example": {
  "html": "<h1>Sample run — Mentix plant supervisor</h1>\n<p>Illustrative fixture. Names, times, and numbers are plausible and clearly synthetic, not real client data.</p>\n<p><strong>Fellow input (verbatim):</strong> &quot;I'm building the factory copilot. I want to shadow one of the plant supervisors and capture how they actually decide — not the SOP, the real judgment. What do I do with a shift?&quot;</p>\n<hr>\n<h2>0. Task + access check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Expert</td><td>&quot;Dana&quot;, line supervisor, 19 years on the floor</td></tr><tr><td>Real task watched</td><td>Running the packaging line for one live shift; the outcome depends on how she reacts to alarms and drift</td></tr><tr><td>Access</td><td>Live shadow, full 8-hour shift (using the first 60 minutes of steady-state running for the structured pass)</td></tr></tbody></table></div>\n<p>Watchable. Proceed.</p>\n<hr>\n<h2>1. Watch-30 fork log (behaviour, 0.7)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Time</th><th>What they did</th><th>Fork signal</th><th>What was visible</th></tr></thead><tbody><tr><td>14:12</td><td>Muted the bearing-vibration alarm on line 3, kept the line running</td><td>Overrode a signal</td><td>Alarm was steady, not climbing; she glanced at the trend, not the value</td></tr><tr><td>14:26</td><td>Slowed line 3 by ~10% without any alarm</td><td>Acted before the system</td><td>She had walked past the motor and paused near it seconds earlier</td></tr><tr><td>14:41</td><td>Stopped line 1 immediately on a <em>lower</em>-priority alarm</td><td>Deviated from priority order</td><td>It was the first alarm since a belt change that morning</td></tr><tr><td>14:53</td><td>Ignored a temperature warning, wrote nothing</td><td>Overrode a signal</td><td>Ambient was high; every line read warm</td></tr></tbody></table></div>\n<p>Four forks in the first hour. Not a demo.</p>\n<hr>\n<h2>2. Explicit procedure (the SOP)</h2>\n<ol><li>On any vibration alarm, log it and inspect at next scheduled stop.</li><li>Acknowledge alarms in priority order (safety &gt; quality &gt; throughput).</li><li>On a temperature warning, record the reading and continue unless it crosses the hard limit.</li><li>After a belt or bearing change, run at rated speed and monitor.</li></ol>\n<p>A competitor can read this in the operations manual. It explains none of the four forks above.</p>\n<hr>\n<h2>3. Tacit judgment ledger</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Fork</th><th>SOP says</th><th>She actually did</th><th>Cue she read</th><th>Her rule of thumb</th><th>Exception that overrides the rule</th><th>Observed?</th><th>Basis + rung</th></tr></thead><tbody><tr><td>1</td><td>14:12 vibration alarm</td><td>Log, inspect at next stop</td><td>Muted it, kept running</td><td>The alarm's <em>rise rate</em>, not its level — flat trend = settling, not failing</td><td>&quot;A steady vibration alarm is the machine warming up; a climbing one is the machine dying&quot;</td><td>Never mute it within an hour of a bearing change — a new bearing that vibrates is seated wrong</td><td>Y</td><td><span class=\"tag tag-fact\">Fact</span> 0.7</td></tr><tr><td>2</td><td>14:26 slowed line, no alarm</td><td>Nothing — no alarm fired</td><td>Cut speed 10%</td><td>A change in the motor's pitch she heard walking past</td><td>&quot;If it sounds hunting, back it off before the alarm ever comes&quot;</td><td>If the sound is load-related (heavy product run), speed is fine; slow only if it persists unloaded</td><td>N (heard her explain it; the pitch cue was not something I could verify)</td><td><span class=\"tag tag-hypothesis\">Hypothesis</span> 0.3</td></tr><tr><td>3</td><td>14:41 stopped on low-priority alarm</td><td>Acknowledge in priority order</td><td>Stopped line 1 first</td><td>It was the first alarm since the morning belt change</td><td>&quot;The first fault after any change is the change talking — trust it over the priority list&quot;</td><td>If the change was a like-for-like swap by a tech she trusts, she waits one more alarm</td><td>Y</td><td><span class=\"tag tag-fact\">Fact</span> 0.7</td></tr><tr><td>4</td><td>14:53 temp warning ignored</td><td>Record and continue</td><td>Ignored, logged nothing</td><td>Every line read warm at once → ambient, not a fault</td><td>&quot;One line hot is a problem; all lines hot is the weather&quot;</td><td>If one line stays hot after the others cool, that line is the real fault</td><td>Y</td><td><span class=\"tag tag-fact\">Fact</span> 0.7</td></tr></tbody></table></div>\n<hr>\n<h2>4. Strike-the-SOP test</h2>\n<ul><li>Survive (real tacit judgment): #1, #2, #3, #4 — all four. The SOP says <em>what</em> to do on each alarm; none of it encodes <em>when she overrides it</em>.</li><li>Struck (already in the manual): none.</li></ul>\n<p>Everything survives. The manual is the explicit half; this ledger is the half Mentix is actually selling.</p>\n<hr>\n<h2>5. Fork scoring check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Perceptible cue?</th><th>Named exception?</th><th>Observed or narrated?</th><th>Basis honest?</th></tr></thead><tbody><tr><td>1</td><td>Yes — alarm rise rate</td><td>Yes — recent bearing change</td><td>Observed (0.7)</td><td>Yes</td></tr><tr><td>2</td><td>Weak — &quot;motor pitch&quot; is real but I could not verify it by ear</td><td>Yes — loaded vs unloaded</td><td>Narrated only (0.3)</td><td>Yes, held at <span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td>3</td><td>Yes — first fault after a change</td><td>Yes — trusted like-for-like swap</td><td>Observed (0.7)</td><td>Yes</td></tr><tr><td>4</td><td>Yes — all lines warm at once</td><td>Yes — one line stays hot</td><td>Observed (0.7)</td><td>Yes</td></tr></tbody></table></div>\n<p>Fork #2 is honest but soft: the pitch cue is exactly the kind of &quot;you just know&quot; that needs a second, longer watch — ideally with a microphone — before the copilot tries to encode it.</p>\n<hr>\n<h2>6. The load-bearing judgment</h2>\n<blockquote><p>The copilot must encode <strong>when to mute a vibration alarm and keep running versus when to trust it and stop</strong> — cued by <strong>the alarm's rise rate, not its level</strong> — except <strong>within an hour of a bearing change, when any vibration is treated as a fault</strong>.</p></blockquote>\n<ul><li>Basis today: <span class=\"tag tag-fact\">Fact</span> for the rule and its exception (observed at 14:12 and explained on the specific instance)</li><li>What breaks if encoded wrong: a copilot that alerts on alarm <em>level</em> will cry wolf on every warm-up and be muted by the supervisor within a shift — the exact failure that kills operator trust.</li></ul>\n<hr>\n<h2>7. Handoff</h2>\n<blockquote><p>Automate: alert on vibration <em>trend</em> (rise rate), suppress on steady level, and hard-override to &quot;inspect&quot; for 60 minutes after any logged bearing change. Before building, confirm the sensor exposes rise rate, not just threshold crossings — the cue Dana reads may not be a field the system currently emits.</p></blockquote>\n<hr>\n<h2>Why this beats a generic answer</h2>\n<p>A default prompt would transcribe an interview and hand back a tidier SOP: &quot;supervisor monitors alarms and uses judgment to prioritise.&quot; This run does three things it cannot. It logs behaviour first and treats the words as secondary, so the muted alarm at 14:12 (a 0.7 you watched) outranks any &quot;I always follow procedure&quot; she might have said. It separates the four forks from the manual with the strike-the-SOP test and finds that <em>all</em> of the value is in the overrides. And it holds fork #2 at <span class=\"tag tag-hypothesis\">Hypothesis</span> 0.3 because the pitch cue was narrated, not seen — refusing to let a confident &quot;you just know&quot; become a spec line. The output is not the procedure; it is the judgment the procedure omits, which is the only part worth a copilot.</p>",
  "path": "skills/tacit-knowledge-interview/examples/sample.md"
 },
 "rubric": {
  "skill": "tacit-knowledge-interview",
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
    "I want to interview an expert and capture how they actually decide, not the SOP.",
    "Let me shadow a plant supervisor for a shift and capture the judgment calls — like when they override the alarm.",
    "Watch our senior operator work and pull out the calls they make without noticing.",
    "Shadow the safety officer while they sign off permits and capture why they sometimes say no.",
    "Encode when the shift lead overrides the runbook — the real judgment behind the procedure."
   ],
   "mustNotFire": [
    {
     "phrase": "Write me a Mom-Test customer interview script to validate this problem.",
     "sibling": "interview-script",
     "local": false
    },
    {
     "phrase": "Help me plan discovery interviews to find out why customers churned last quarter.",
     "sibling": "discovery-interview-prep",
     "local": false
    },
    {
     "phrase": "Summarize this interview transcript into key insights.",
     "sibling": "summarize-interview",
     "local": false
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST-fire match explicit trigger phrases (&quot;interview an expert&quot;, &quot;capture how they decide&quot;, &quot;watch them work&quot;, &quot;shadow an operator&quot;, &quot;encode when they override the rule&quot;). All 3 MUST-NOT are covered by the description's explicit NOT clause routing to interview-script / discovery-interview-prep / summarize-interview.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → asks the one unblocking question, invents nothing; 02 &quot;write the SOP&quot; → names documentation-is-the-explicit-half trap + reframes to the lost judgment call; 03 Mom-Test → declines, names interview-script (and discovery-interview-prep), explains watch-a-task vs script-a-question, offers shadow follow-on. No fabrication, no flattery, no scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p>supersedes: none.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-1 output could not come from a generic PM prompt: strike-the-SOP test, behaviour-0.7-over-narration-0.3 evidence ladder, rise-rate-not-level cue, exception &quot;no mute within 1h of a bearing change&quot;, and holding a narrated fork at <span class=\"tag tag-hypothesis\">Hypothesis</span>. A generic prompt returns a tidier SOP — the exact kill line this skill refuses. Taxonomy/ledger/scoring/strike-SOP are rendered as tables in template.md (not prose). Minor: the evidence ladder itself is stated inline as prose.</p>"
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
     "label": "01 Mentix supervisor 5",
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
     "label": "02 Barrier permit officer 5",
     "dims": [
      5,
      4,
      5,
      4,
      5
     ],
     "total": 23,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Azraq NOC shift lead 5",
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
     "label": "04 Durian QA (recites SOP) 5",
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
     "label": "05 Durian expense (mundane) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
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
  "gotchasSurfaced": "<ul><li><strong>Pre-watch inputs invite a fabricated log.</strong> Golden 01/02/03/05 are fellow <em>setups</em> (nothing observed yet), yet the &quot;good output&quot; shape implies a filled, timestamped fork log. The skill mitigates this correctly (Step 0 gate + the sample.md is flagged &quot;clearly synthetic, not real client data&quot; and holds narrated forks at <span class=\"tag tag-hypothesis\">Hypothesis</span>), but the risk that a run produces a real-looking filled log from zero observation is latent. Consider one explicit line in Method/Step 0: &quot;If the fellow has not watched yet, return the session plan plus — only if illustrating — a clearly-labelled synthetic capture; never a real-looking filled log.&quot; Not a failure; a guardrail.</li><li><strong>Evidence ladder is prose, not a table.</strong> The 1.0/0.7/0.5/0.3/0.1 ladder in the Evidence standard is stated inline; a small table would make the weighting scannable at the point of scoring. Minor.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added Gotcha (a described/golden session is not a watched one — never fabricate an observation log; mark forks [Hypothesis] with what to watch for); converted Evidence-standard ladder prose into a rung/weight/what-counts table.",
    "html": ""
   }
  ],
  "killLine": "<ul><li>Captures only the explicit procedure — every judgment-ledger row already in the manual, or the output is a reformatted SOP with no override forks.</li><li>A cue left as &quot;experience&quot; / &quot;gut&quot; with no perceptible anchor.</li><li>A narrated-but-unseen fork upgraded to <span class=\"tag tag-fact\">Fact</span> on the expert's confidence.</li><li>Any invented reading, model, name, or amount treated as <span class=\"tag tag-fact\">Fact</span>.</li></ul>",
  "html": "<h1>Eval log — tacit-knowledge-interview</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;I want to interview an expert and capture how they actually decide, not the SOP.&quot;</li><li>&quot;Let me shadow a plant supervisor for a shift and capture the judgment calls — like when they override the alarm.&quot;</li><li>&quot;Watch our senior operator work and pull out the calls they make without noticing.&quot;</li><li>&quot;Shadow the safety officer while they sign off permits and capture why they sometimes say no.&quot;</li><li>&quot;Encode when the shift lead overrides the runbook — the real judgment behind the procedure.&quot; MUST NOT fire (3, name the sibling each belongs to):</li><li>&quot;Write me a Mom-Test customer interview script to validate this problem.&quot; → belongs to <code>interview-script</code></li><li>&quot;Help me plan discovery interviews to find out why customers churned last quarter.&quot; → belongs to <code>discovery-interview-prep</code></li><li>&quot;Summarize this interview transcript into key insights.&quot; → belongs to <code>summarize-interview</code></li></ol>\n<h2>Kill line (auto-fail, mirror of rubric + skill spec)</h2>\n<ul><li>Captures only the explicit procedure — every judgment-ledger row already in the manual, or the output is a reformatted SOP with no override forks.</li><li>A cue left as &quot;experience&quot; / &quot;gut&quot; with no perceptible anchor.</li><li>A narrated-but-unseen fork upgraded to <span class=\"tag tag-fact\">Fact</span> on the expert's confidence.</li><li>Any invented reading, model, name, or amount treated as <span class=\"tag tag-fact\">Fact</span>.</li></ul>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire match explicit trigger phrases (&quot;interview an expert&quot;, &quot;capture how they decide&quot;, &quot;watch them work&quot;, &quot;shadow an operator&quot;, &quot;encode when they override the rule&quot;). All 3 MUST-NOT are covered by the description's explicit NOT clause routing to interview-script / discovery-interview-prep / summarize-interview.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the one unblocking question, invents nothing; 02 &quot;write the SOP&quot; → names documentation-is-the-explicit-half trap + reframes to the lost judgment call; 03 Mom-Test → declines, names interview-script (and discovery-interview-prep), explains watch-a-task vs script-a-question, offers shadow follow-on. No fabrication, no flattery, no scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td>supersedes: none.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-1 output could not come from a generic PM prompt: strike-the-SOP test, behaviour-0.7-over-narration-0.3 evidence ladder, rise-rate-not-level cue, exception &quot;no mute within 1h of a bearing change&quot;, and holding a narrated fork at <span class=\"tag tag-hypothesis\">Hypothesis</span>. A generic prompt returns a tidier SOP — the exact kill line this skill refuses. Taxonomy/ledger/scoring/strike-SOP are rendered as tables in template.md (not prose). Minor: the evidence ladder itself is stated inline as prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (rubric: /25, pass ≥21, no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix supervisor</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>Y</td></tr><tr><td>02 Barrier permit officer</td><td>5</td><td>4</td><td>5</td><td>4</td><td>5</td><td>23</td><td>Y</td></tr><tr><td>03 Azraq NOC shift lead</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>Y</td></tr><tr><td>04 Durian QA (recites SOP)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>05 Durian expense (mundane)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>Y</td></tr></tbody></table></div>\n<p>No auto_fail triggered on any case (no fabricated number/quote treated as <span class=\"tag tag-fact\">Fact</span>; no flattery of weak input; in-scope; not boilerplate). Case 04 is the kill-line case and the skill's strongest: it refuses the clean SOP as the deliverable, names it the explicit half only, diagnoses interrupted-watch / unchased-exceptions, and prescribes the last-time move + edge-cases dig without fabricating a fork. Special check confirmed: the recites-the-manual golden forces the dig for the tacit fork (Gotchas &quot;last time you did NOT follow the procedure&quot; + Step 4 strike-SOP &quot;nothing survives → return to Step 3&quot; + evidence-standard kill line), and observed overrides (0.7) explicitly outweigh recited rules (0.3) in the Method preamble, Step 5, and the Evidence standard.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Pre-watch inputs invite a fabricated log.</strong> Golden 01/02/03/05 are fellow <em>setups</em> (nothing observed yet), yet the &quot;good output&quot; shape implies a filled, timestamped fork log. The skill mitigates this correctly (Step 0 gate + the sample.md is flagged &quot;clearly synthetic, not real client data&quot; and holds narrated forks at <span class=\"tag tag-hypothesis\">Hypothesis</span>), but the risk that a run produces a real-looking filled log from zero observation is latent. Consider one explicit line in Method/Step 0: &quot;If the fellow has not watched yet, return the session plan plus — only if illustrating — a clearly-labelled synthetic capture; never a real-looking filled log.&quot; Not a failure; a guardrail.</li><li><strong>Evidence ladder is prose, not a table.</strong> The 1.0/0.7/0.5/0.3/0.1 ladder in the Evidence standard is stated inline; a small table would make the weighting scannable at the point of scoring. Minor.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added Gotcha (a described/golden session is not a watched one — never fabricate an observation log; mark forks <span class=\"tag tag-hypothesis\">Hypothesis</span> with what to watch for); converted Evidence-standard ladder prose into a rung/weight/what-counts table.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix plant supervisor (seed case)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;I'm building the factory copilot. Let me shadow a plant supervisor for a shift and capture how they actually decide — I want the judgment calls, like when they override an alarm, not the SOP.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 confirms the task is watchable (a real shift, not a talk-through).</li><li>A watch-30 fork log with timestamps, logged BEFORE any &quot;why&quot; — including at least one alarm-override moment.</li><li>An explicit procedure section (the SOP) kept separate from a tacit judgment ledger.</li><li>Each ledger fork carries: the cue (a perceptible thing — e.g. alarm rise-rate, not level), the rule of thumb, and the exception that overrides it (e.g. never mute within an hour of a bearing change).</li><li>A strike-the-SOP test showing the override rows survive because none are in the manual.</li><li>Forks tagged Observed (0.7) vs narrated (0.3); anything only described stays <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>One load-bearing judgment named as the single thing the copilot must encode: when to trust the alarm vs the ear, with cue and exception.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>The output is a reformatted SOP with no override forks (the kill line).</li><li>A cue is given as &quot;experience&quot; / &quot;gut&quot; and left there.</li><li>Any invented alarm reading, bearing model, or plant detail treated as <span class=\"tag tag-fact\">Fact</span>.</li><li>More than the explicit half captured but no exceptions surfaced.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/tacit-knowledge-interview/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence permit-to-work officer",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Barrier Intelligence wants to automate hot-work permit sign-off. I can sit with the safety officer for a morning while they approve and reject permits on the rig. Capture how they actually decide who gets signed off — the checklist passes and they still say no sometimes.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 confirms watchable access (a real approval session, not a description of the policy).</li><li>Watch-30 log capturing forks such as: a permit that passed the checklist but was refused, an approval that skipped a listed check, a pause before signing.</li><li>Explicit procedure = the written permit checklist. Tacit ledger = the refusals the checklist does not explain.</li><li>Cues that are perceptible, not &quot;experience&quot;: e.g. who is requesting (a crew that rushed a job last week), weather turning, a gas reading that is fine now but trending, two jobs adjacent in the same zone.</li><li>Each refusal fork has an exception (when they sign despite the same cue) — otherwise it is a generalisation.</li><li>Observed refusals scored 0.7; anything only recounted from memory (&quot;I once refused…&quot;) scored 0.3 / <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>Load-bearing judgment: the override where a checklist-passing permit is still refused, cued by something outside the checklist — the exact call the automation must not get wrong.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Output is the checklist reformatted; no refusal-forks surfaced.</li><li>Invented permit clause numbers, gas ppm values, or crew names presented as <span class=\"tag tag-fact\">Fact</span>.</li><li>A refusal cue left as &quot;safety judgment&quot; with no perceptible anchor.</li></ul>"
     }
    ],
    "other": [
     {
      "heading": "Notes for the judge",
      "html": "<p>The value here is the refusal the checklist would have approved. A capture that just re-lists the checklist items missed the point (kill line). The cue is usually contextual (crew, adjacency, trend), not a single field — the skill should surface that.</p>"
     }
    ],
    "file": "skills/tacit-knowledge-interview/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq data-centre shift lead",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Azraq's product leans on data-centre ops know-how. I can shadow a shift lead in the NOC for an hour during a thermal event window. Capture how they decide whether to pull a rack offline or ride out a hot spot — the runbook says one thing but they clearly do another.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Step 0 confirms live shadowing of a real shift (not a runbook walkthrough).</li><li>Watch-30 log with forks: riding out an excursion the runbook says to escalate, pulling a rack before any threshold trips, dismissing an alert as a sensor artefact.</li><li>Explicit procedure = the thermal runbook thresholds. Tacit ledger = the ride-out and early-pull decisions the runbook does not encode.</li><li>Perceptible cues: rate of temperature climb vs absolute value, which sensor (one known-flaky probe), correlation across adjacent racks, time-of-day load pattern, a CRAC unit's sound/behaviour.</li><li>Exceptions named: when they DO escalate at the same reading (e.g. customer-critical workload on that rack, or the flaky sensor corroborated by a neighbour).</li><li>Observed decisions 0.7; sensor-artefact dismissals only described = <span class=\"tag tag-hypothesis\">Hypothesis</span> 0.3.</li><li>Load-bearing judgment: distinguishing a real thermal runaway from a sensor/ambient artefact, cued by rate + corroboration, except when the workload is customer-critical.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Output restates runbook thresholds with no ride-out / early-pull forks.</li><li>Invented rack IDs, temperature figures, or sensor models treated as <span class=\"tag tag-fact\">Fact</span>.</li><li>&quot;They just know it's a bad sensor&quot; left without the corroboration cue.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/tacit-knowledge-interview/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs QA reviewer who only recites the SOP",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Durian's first workflow automates the QA review step. I watched our senior QA reviewer, Priya, do it. Every time I asked why she made a call she said 'that's the procedure' and quoted the checklist. I got a clean SOP but it feels like I missed something. Here's what I have.&quot; (Attached: a tidy checklist and notes where every answer is &quot;per the SOP&quot;.)</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>The skill recognises this is the recites-the-manual trap, not a finished capture. It must NOT accept the clean SOP as the deliverable (that is the kill line).</li><li>It names why: every answer collapsing to &quot;the procedure&quot; means the forks were not surfaced — either the watch was interrupted with &quot;why&quot; (turning behaviour into narration) or the exceptions were never chased.</li><li>It prescribes the dig, concretely:\n<ul><li>Re-watch (or re-question the log) for a moment where Priya deviated, hesitated, or added an unlisted check.</li><li>Ask the last-time move: &quot;Tell me about the last time you did NOT follow the checklist,&quot; or &quot;When have you and another reviewer disagreed on a pass/fail?&quot;</li><li>Push any &quot;per the SOP&quot; answer toward the perceptible cue: what in the artefact made her look twice.</li><li>Use the edge-cases 10 to get the war story: a defect that passed the checklist but she caught anyway, or one the checklist flagged that she waved through.</li></ul></li><li>It does not fabricate a fork to fill the gap; if the current input genuinely contains no observed deviation, it says the capture is incomplete and states exactly what to observe next.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Accepts the clean SOP as a complete Tacit-Knowledge Capture.</li><li>Invents a Priya deviation or a specific defect to manufacture a fork.</li><li>Flatters the input (&quot;great SOP, well captured&quot;) instead of naming it as the explicit half only.</li></ul>"
     }
    ],
    "other": [
     {
      "heading": "Notes for the judge",
      "html": "<p>This is the case the whole skill exists for. Passing means the skill refuses the reformatted SOP and drives back to the deviation. Failing means it politely accepts the checklist as the tacit capture.</p>"
     }
    ],
    "file": "skills/tacit-knowledge-interview/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian Labs expense approver (deliberately mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Boring one. Durian's ops lead, Sam, approves expense reports — mostly rubber-stamps them but occasionally flags one. I can watch Sam clear a batch this afternoon. Is there even any judgment here worth capturing before we automate the approval?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>The skill takes the mundane task seriously: the judgment is exactly the occasional flag among rubber-stamps.</li><li>Step 0 confirms watching a real batch, not asking Sam to explain the policy.</li><li>Watch-30 log: which reports Sam opened vs waved through, where Sam paused, the one that got flagged, any receipt they zoomed into.</li><li>Explicit procedure = the written expense policy (limits, required receipts). Tacit ledger = what makes Sam look twice at a report that is technically within policy.</li><li>Perceptible cues: a round number, a vendor Sam does not recognise, a claim just under the receipt-required threshold, a submitter with a recent pattern, timing (end-of-quarter push).</li><li>Exception named: when Sam waves through the same cue (a trusted submitter, a known recurring vendor).</li><li>Observed flags 0.7; &quot;I usually check for X&quot; without a seen instance = 0.3 / <span class=\"tag tag-hypothesis\">Hypothesis</span>.</li><li>Honest possible finding: if Sam genuinely applies only the written limits and the &quot;flags&quot; are all policy breaches, the skill should say the task has little tacit judgment and is a clean automation candidate — not manufacture forks to look impressive.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Invents a specific flagged report, vendor, or amount as <span class=\"tag tag-fact\">Fact</span>.</li><li>Pads a low-judgment task with made-up forks for rhythm.</li><li>Reformats the expense policy and calls it a tacit capture.</li></ul>"
     }
    ],
    "other": [
     {
      "heading": "Notes for the judge",
      "html": "<p>The mundane case tests whether the skill can (a) still find real judgment in dull work AND (b) admit when there is little, rather than inventing forks. Both outcomes can pass; fabrication cannot.</p>"
     }
    ],
    "file": "skills/tacit-knowledge-interview/tests/golden/05.md"
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
     "html": "<p>Fellow: &quot;I want to capture what our best engineer knows.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must NOT invent an engineer, a task, a fork, or a cue.</li><li>It must recognise that &quot;what they know&quot; is not watchable — Step 0 cannot complete without a concrete, observable task. Knowledge in the abstract has no forks to log.</li><li>It asks the single unblocking question and stops. The one question turns &quot;what they know&quot; into a watchable task, e.g.: &quot;What is one real task I can watch this engineer do this week where the outcome depends on a call they make?&quot;</li><li>No fork log, no ledger, no SOP is produced. No lenses fire on air.</li><li>Tone challenges, does not flatter: it names that &quot;what our best engineer knows&quot; is not yet a capture target, and says why (no observable task = nothing to shadow).</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Returns exactly one question and refuses to proceed. Invents nothing.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Produces a fork log or ledger from a fabricated engineering task.</li><li>Asks a scatter of clarifying questions instead of the one unblocking one.</li><li>Flatters (&quot;great instinct to capture tribal knowledge!&quot;) or hallucinates a specific task the engineer does.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/tacit-knowledge-interview/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;The problem is we don't have documentation for how the senior operator runs the line. Capture it so we can write the SOP.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must not accept the framing. &quot;No documentation / write the SOP&quot; is a chosen solution, not the problem — and it is the wrong solution for tacit knowledge.</li><li>It names the trap explicitly: documentation captures the explicit half by definition. An SOP transfers the procedure; it structurally cannot hold the judgment forks (the overrides, the cues, the exceptions). Writing docs would reproduce exactly the half a competitor already has.</li><li>It reframes to the underlying job: which call is being made worse by whoever is NOT the senior operator — the decision a new hire or an automation gets wrong today. That is what needs capturing, and it needs watching, not writing.</li><li>It redirects the method: shadow the operator running the real line, log the forks, and capture the judgment the SOP omits. The SOP can be a by-product, but it is not the deliverable.</li><li>It does not invent what the operator's judgment is; it points at the gap and prescribes the watch.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Names the documentation-is-the-explicit-half trap, reframes to the judgment call being lost, redirects to watching the real task rather than writing docs.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Proceeds to help &quot;write the SOP&quot; as if that were the tacit capture.</li><li>Silently accepts that missing documentation is the problem.</li><li>Invents the operator's judgment with fabricated specifics.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/tacit-knowledge-interview/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Write me a Mom-Test interview script to find out whether factory managers would want this copilot and what problems they have.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>The skill must decline. This is customer problem discovery — validating whether a problem/want exists — not capturing an expert's judgment on a task they already perform.</li><li>It names the right destination: <code>interview-script</code> for the Mom-Test question guide, or <code>discovery-interview-prep</code> to plan goal/segment/methodology first. Not itself.</li><li>It states why: this skill watches an expert DO real work to extract tacit judgment; it does not script questions to probe a customer's problem. There is nothing to shadow in &quot;would they want it&quot;.</li><li>It may offer the in-scope alternative: once managers are known to have the problem and one will let you watch them run a shift, come back to capture how they actually make the call the copilot must encode.</li><li>It does not poach by quietly writing the interview script anyway.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Declines, names <code>interview-script</code> (and <code>discovery-interview-prep</code>), explains the watch-a-task vs script-a-question boundary, offers the shadow step as the in-scope follow-on.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Produces a Mom-Test interview script.</li><li>Declines without naming the correct sibling skill.</li><li>Blurs its own scope to cover the request.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/tacit-knowledge-interview/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/tacit-knowledge-interview/SKILL.md",
  "template": "skills/tacit-knowledge-interview/template.md",
  "example": "skills/tacit-knowledge-interview/examples/sample.md",
  "rubric": "skills/tacit-knowledge-interview/tests/rubric.json",
  "results": "skills/tacit-knowledge-interview/tests/RESULTS.md"
 }
});
