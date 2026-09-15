window.ICARUS_SKILL("trace-to-interview", {
 "name": "trace-to-interview",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Reads production traces as interviews that already happened. For each pattern of what users actually did — retried, edited before accepting, exported and left, abandoned at step three — it recovers the discovery question the behaviour answers and the job behind it, then writes it up as an interview card (<a href=\"#/skill/trace-to-interview\">template.md</a>). The output is a trace-interview log: one card per pattern carrying the observed behaviour <code>[Fact]</code> at behaviour-rung 0.7, the discovery question it answers, the inferred JTBD and satisfaction signal <code>[Hypothesis]</code>, how many distinct users produced it, the probe that confirms the why, and what the equivalent scheduled interview would have cost. Each card routes to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> as a feed-2 signal. It is not a funnel, not a metrics dashboard, and not a transcript summary.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic log-mining counts events and draws a funnel: how many, how often, where they drop. That returns metrics, and a metric tells you <em>what</em> happened while hiding <em>why</em>. The Icarus move is that every production trace is a customer interview that already happened — the user answered a discovery question through behaviour instead of words, for free, with no calendar invite. A retry is the user saying &quot;that wasn't what I meant.&quot; An edit-before-accept is &quot;close, but wrong here.&quot; An export-then-leave is &quot;I'll finish this elsewhere.&quot; The trace is both cheaper <em>and</em> more truthful than the interview it replaces: it sits at behaviour 0.7, a rung above what a person <em>says</em> they do (verbal 0.3), and its marginal cost is the triage minutes rather than a recruit, an incentive, and two weeks of lead time. That is the exact reason launch is when discovery gets cheap, not when it ends.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it post-launch (or mid-pilot) when you have real production traces and you want to turn usage into discovery findings, not into a chart.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Mine our logs — what are users telling us?&quot;</td><td>Yes</td><td>trace-to-interview</td></tr><tr><td>&quot;Turn our production traces into discovery questions.&quot;</td><td>Yes</td><td>trace-to-interview</td></tr><tr><td>&quot;What job aren't we finishing? Read it off the usage.&quot;</td><td>Yes</td><td>trace-to-interview</td></tr><tr><td>&quot;Build the retention curve / North Star / AARRR dashboard.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (keeps the number; this recovers the question)</td></tr><tr><td>&quot;Summarise this recorded customer interview / transcript.&quot;</td><td>No</td><td><code>summarize-interview</code> (words at 0.3; this is behaviour at 0.7)</td></tr><tr><td>&quot;Stand up the whole discovery loop — interviews + traces + evals, on a cadence.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (this decodes one feed and feeds it up)</td></tr><tr><td>&quot;Prep and run a live tacit-knowledge interview with an operator.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></td></tr></tbody></table></div>\n<p>This skill decodes one feed — production traces — into interviews and stops. It does not own the tree, the cadence, or the scorecard. Name the sibling and hand off.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. Do not narrate; fill the cards. Every claim carries a tag: <code>[Fact]</code> (what the trace literally shows — a behaviour, always 0.7 or higher), <code>[Assumption]</code> (a stated, defensible reading), <code>[Hypothesis]</code> (an inferred <em>why</em> not yet confirmed). The single discipline of this skill: separate what the user <em>did</em> (behaviour, 0.7) from what you think it <em>means</em> (inference, ≤ 0.3 until a probe lands).</p>\n<p><strong>Step 1 — Define one trace and pull the set.</strong> State the unit: one session, one task attempt, one agent run, one document produced. State the window and the volume. If the fellow cannot hand over real traces (even ten pasted rows), stop and ask for them. Invent no patterns.</p>\n<p><strong>Step 2 — Segment by behaviour, not by event count.</strong> Group traces by the <em>shape</em> of what the user did, not by raw counts. &quot;Retries up 12%&quot; is a metric; &quot;users re-run the same input with reworded parameters until it passes&quot; is a behaviour pattern. This regrouping is the anti-metric move — do it before anything else.</p>\n<p><strong>Step 3 — Decode each pattern to the question it answers.</strong> For every pattern, run it through the decoder. This table is the heart of the skill: it maps a trace signature to the discovery question the behaviour answers.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Trace signature</th><th>What the user is saying <code>[Hypothesis]</code></th><th>Discovery question it answers</th></tr></thead><tbody><tr><td>Retry / re-run same input, reworded</td><td>&quot;that wasn't what I meant&quot;</td><td>Where does the product misread intent?</td></tr><tr><td>Edit-before-accept (measure the tweak-time)</td><td>&quot;close, but wrong <em>here</em>&quot;</td><td>Which part of the output do users not trust?</td></tr><tr><td>Accept unedited</td><td>trust earned — <strong>or</strong> they stopped checking (ambiguous)</td><td>Where did we earn trust — or lose their attention?</td></tr><tr><td>Abandon mid-flow</td><td>&quot;you lost me here&quot;</td><td>Where is the drop cliff, and what precedes it?</td></tr><tr><td>Export then leave the session</td><td>&quot;I'll finish this elsewhere&quot;</td><td>What job does the product not finish?</td></tr><tr><td>Paste output into another tool</td><td>&quot;your output doesn't fit my next step&quot;</td><td>What is the seam to the adjacent job?</td></tr><tr><td>Repeated manual override of a default</td><td>&quot;your default is wrong for me&quot;</td><td>Which built-in assumption is miscalibrated?</td></tr><tr><td>Long dwell then no action</td><td>stuck — <strong>or</strong> reading carefully (ambiguous)</td><td>needs the confirm-the-why probe before it counts</td></tr></tbody></table></div>\n<p>Do not stop at &quot;the user is saying&quot; — that column is a <code>[Hypothesis]</code>. The finding is the <em>question</em>, and the card exists to make that question answerable.</p>\n<p><strong>Step 4 — Write one interview card per pattern.</strong> Use the card in <a href=\"#/skill/trace-to-interview\">template.md</a>: observed behaviour <code>[Fact]</code> + rung; recovered discovery question; inferred JTBD and desired outcome <code>[Hypothesis]</code>; satisfaction signal the trace implies; distinct-user count; the confirm-the-why probe; and the tree edit it proposes.</p>\n<p><strong>Step 5 — Run the ambiguity gate.</strong> Behaviour is 0.7 on <em>what</em>; the <em>why</em> is inferred and starts at opinion. Where a signature has two honest readings (accept-unedited = trust <strong>or</strong> gave-up; long-dwell = stuck <strong>or</strong> careful), name both and the probe that separates them. Never collapse the ambiguity into the flattering reading. The skill's job is to promote a <em>why</em> up the ladder with a probe, not to assert it.</p>\n<p><strong>Why-rung mapping (state it, don't eyeball it).</strong> An un-probed <em>why</em> behind a trace is inferred → <strong>0.1 <code>[Hypothesis]</code></strong>. A <em>why</em> corroborated by a <em>second independent</em> trace or artefact, but with no probe yet landed → <strong>0.3 <code>[Assumption]</code></strong>. A landed confirm-the-why probe, or a money-moved event, takes it to <strong>0.7+</strong>. Map the numeric rung and the word-tag together, and tag two cards resting on the same strength of evidence identically — do not stamp one <code>[Hypothesis]</code> and another <code>[Assumption]</code> for the same footing.</p>\n<p><strong>Step 6 — Weight by distinct users.</strong> A pattern's strength is its rung times its coverage of the segment. A 0.7 behaviour from one user is a power user, not a finding.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Distinct users producing the pattern</th><th>Treat as</th></tr></thead><tbody><tr><td>1</td><td>anecdote — name it, do not promote it</td></tr><tr><td>2–4 or &lt; 5% of active segment</td><td>candidate pattern — probe before acting</td></tr><tr><td>≥ 5 and ≥ ~15% of active segment</td><td>pattern — safe to route as a finding</td></tr></tbody></table></div>\n<p>State the distinct-user count on every card. A dramatic pattern from N=1 is trace worship; refuse it.</p>\n<p><strong>Step 7 — Price the interview it replaced.</strong> For each recovered question, state what the equivalent scheduled interview would have cost — recruit + incentive + session + synthesis, roughly 2 hours of effort, an incentive, and a week or two of lead time, for a verbal (0.3) answer — versus the trace, which already happened at 0.7 for the triage minutes. This line is the flywheel made concrete: it shows discovery getting cheaper <em>and</em> more truthful as usage accrues.</p>\n<p><strong>Step 8 — Route.</strong> Each card exits as a <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> feed-2 signal (behaviour 0.7, weighted by distinct users). Any card whose <em>why</em> is still <code>[Hypothesis]</code> also names the probe and hands it to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</p>\n<p><strong>Kill line: a trace read as a metric only — &quot;retries up 12%&quot; with no recovered discovery question — fails the skill.</strong> The number is never the finding; the question behind the behaviour is.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>A trace is behaviour observed, so <em>what happened</em> sits at 0.7 the moment it is in the log — a rung above anything a user tells you in an interview (0.3). A trace that is a spend or upgrade event is money moved, 1.0. But the <em>why</em> — the job, the intent, the dissatisfaction you read into the behaviour — is inferred, and inference starts at opinion (0.1) and only reaches behaviour-backed confidence once a confirm-the-why probe lands or a second behaviour corroborates it. So every card holds two rungs: 0.7+ on the observed behaviour, and a lower, explicit rung on the interpretation. Done means: patterns segmented by behaviour not counts; each decoded to its discovery question; each <em>why</em> tagged <code>[Hypothesis]</code> with a named probe; each pattern weighted by distinct users; the replaced-interview cost stated; and every card routed. Kill line: any card that reports a metric without recovering the question, asserts a <em>why</em> as 0.7 when only the behaviour is 0.7, or promotes an N=1 anecdote to a finding.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Metric relapse.</strong> The easiest failure is to slide back into counting — &quot;abandonment is 18%&quot; — and call it a finding. A rate is a symptom; the interview is the pattern behind it and the question it answers. If a card has a number but no recovered discovery question, it is not this skill's output.</li><li><strong>Borrowing the behaviour's rung for the why.</strong> The trace proves the user retried (0.7). It does not prove <em>why</em> they retried — that is your <code>[Hypothesis]</code> until a probe confirms it. Stamping the interpretation at 0.7 is the subtle lie this skill exists to prevent. Two rungs per card, always.</li><li><strong>Trace worship.</strong> One vivid trace is one user. A power user who runs forty exports is not forty users, and a spike is not a pattern. Weight every reading by distinct-user coverage; refuse to promote N=1.</li><li><strong>Reading acceptance as trust.</strong> A 95% accept-unedited rate is the classic flattering misread — it can mean the product is trusted, or that users stopped checking because the stakes feel low, or compliance theatre. Name both readings and the probe (inject a known error, interview five acceptors, check whether accepted outputs get silently corrected downstream) before claiming trust.</li><li><strong>Optimising the number instead of answering the question.</strong> &quot;Reduce the retry rate&quot; can be achieved by hiding the retry button — which suppresses the interview without ever learning what the retries were telling you. Recover the question first; only then decide whether the behaviour is a defect to remove or a demand to serve.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/trace-to-interview\">examples/sample.md</a> — Azraq's post-launch data-centre risk product: three trace patterns decoded into interview cards (cooling-alert dismissals in &lt;5s = &quot;this alert is noise&quot;; power-feed alerts always opened and exported = &quot;this one goes to my next job&quot;; report accept-unedited at 94% = trust <em>or</em> rubber-stamp, ambiguity named with its probe), each weighted by distinct operators, priced against the interview it replaced, and routed as feed-2 signals — the same loop turn <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a>'s example consumes.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> — consumes each card as its feed-2 (production-traces, behaviour 0.7) signal. That skill owns the tree, the three feeds, the synthesis owner, and the cadence; this one decodes the trace feed into interviews and hands the cards up. Run this to supply that.</li><li><code>summarize-interview</code> — absorbed and reframed, not superseded. That skill structures a <em>recorded human interview</em> (words, verbal 0.3) into JTBD, satisfaction, and action items; this one applies the same JTBD/satisfaction spine to <em>behaviour</em> (0.7), reconstructing the interview a trace already is. If the fellow has an actual transcript, route there; if they have logs, use this.</li><li><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> — the complement, not the overlap. That skill keeps the number (AARRR, the retention curve that must flatten, cost-per-outcome); this refuses to stop at the number and recovers the discovery question underneath it. Run both: one guards the scorecard, one mines the meaning.</li><li><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — receives any card whose <em>why</em> is still <code>[Hypothesis]</code>, and routes it to the cheapest honest probe that would confirm the intent.</li><li><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> — sets the post-launch cadence (ship behind sign-off → observe → learn → refine); this is the &quot;observe&quot; step's decoder, turning what you observe into questions.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Trace-Interview Log</h1>\n<p>Read production traces as interviews that already happened. One card per <strong>behaviour pattern</strong>, not per event. Every card must recover a <strong>discovery question</strong> — a card with a number but no question is an auto-fail. Keep two rungs separate: what the user <em>did</em> (behaviour, ≥ 0.7) and what you think it <em>means</em> (inference, ≤ 0.3 until a probe lands).</p>\n<h2>Set definition (state and date it)</h2>\n<ul><li><strong>One trace =</strong> [one session / one task attempt / one agent run / one document produced]</li><li><strong>Window:</strong> [from → to]  ·  <strong>Volume:</strong> [N traces, M distinct users]  <code>[Fact]</code></li><li><strong>Source of traces:</strong> [event log / agent run archive / product analytics export]  <code>[Fact]</code></li><li><strong>Active segment size (for weighting):</strong> [M distinct users active in window — state the number; if the input does not give it, write <strong>&quot;active segment unknown&quot;</strong> and do not compute a %]  <code>[Fact]</code></li></ul>\n<hr>\n<h2>Decoder reference (map the signature before writing the card)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Trace signature</th><th>What the user is saying <code>[Hypothesis]</code></th><th>Discovery question</th></tr></thead><tbody><tr><td>Retry / re-run same input, reworded</td><td>&quot;that wasn't what I meant&quot;</td><td>Where does the product misread intent?</td></tr><tr><td>Edit-before-accept (measure tweak-time)</td><td>&quot;close, but wrong <em>here</em>&quot;</td><td>Which part of the output is not trusted?</td></tr><tr><td>Accept unedited</td><td>trust — <strong>or</strong> stopped checking (ambiguous)</td><td>Where did we earn trust — or lose attention?</td></tr><tr><td>Abandon mid-flow</td><td>&quot;you lost me here&quot;</td><td>Where is the drop cliff?</td></tr><tr><td>Export then leave</td><td>&quot;I'll finish this elsewhere&quot;</td><td>What job do we not finish?</td></tr><tr><td>Paste into another tool</td><td>&quot;doesn't fit my next step&quot;</td><td>What is the seam to the adjacent job?</td></tr><tr><td>Override a default repeatedly</td><td>&quot;your default is wrong for me&quot;</td><td>Which assumption is miscalibrated?</td></tr><tr><td>Long dwell then no action</td><td>stuck — <strong>or</strong> reading (ambiguous)</td><td>needs a probe before it counts</td></tr></tbody></table></div>\n<hr>\n<h2>Interview cards (repeat the block per pattern)</h2>\n<h3>Card [n] — [short name of the pattern]</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td><strong>Observed behaviour</strong> (what the trace literally shows)</td><td>[e.g. &quot;re-ran the same permit check 3×, rewording inputs, before it passed&quot;]  <code>[Fact]</code></td></tr><tr><td><strong>Behaviour rung</strong></td><td>0.7 behaviour / 1.0 if the trace is a spend event</td></tr><tr><td><strong>Distinct users producing it</strong></td><td>[N of M active = __%] → anecdote (1) / candidate (2–4 or &lt;5%) / pattern (≥5 and ≥~15%)</td></tr><tr><td><strong>Discovery question it answers</strong></td><td>[the recovered question — this is the finding]</td></tr><tr><td><strong>Inferred JTBD / desired outcome</strong></td><td>[the job behind the behaviour]  <code>[Hypothesis]</code></td></tr><tr><td><strong>Satisfaction signal the trace implies</strong></td><td>[dissatisfied / partially served / served — and on which sub-job]</td></tr><tr><td><strong>The other honest reading (if ambiguous)</strong></td><td>[second interpretation, or &quot;none — behaviour is unambiguous&quot;]</td></tr><tr><td><strong>Confirm-the-why probe</strong></td><td>[smallest observation that moves the why from <code>[Hypothesis]</code> toward 0.7 — inject a known error / watch 3 sessions / interview 5 who did it] → hand to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr><tr><td><strong>Interview it replaced</strong></td><td>scheduled version ≈ [recruit + incentive + 45-min session + synthesis, ~£__ + ~[1–2] wk lead], returns verbal 0.3 · this trace: already happened, 0.7, cost = triage minutes</td></tr><tr><td><strong>Proposed tree edit</strong></td><td>[new opportunity / new solution / raise-lower a rung / kill a node] → route to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> feed 2</td></tr></tbody></table></div>\n<p><em>(duplicate the card block for each pattern)</em></p>\n<hr>\n<h2>Roll-up</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Card</th><th>Pattern</th><th>Distinct users</th><th>Behaviour rung</th><th>Why-rung (now)</th><th>Routed as</th><th>Probe named?</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td>0.7</td><td></td><td>feed-2 signal</td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<ul><li><strong>Cards that are findings (pattern-strength met, question recovered):</strong> ____</li><li><strong>Cards held as candidates (N too low or why unconfirmed):</strong> ____ → probes queued</li><li><strong>Anecdotes named and parked (N=1):</strong> ____</li><li><strong>Total scheduled-interview cost these traces replaced:</strong> ≈ £____ and ~__ weeks of lead time — the flywheel number.</li></ul>\n<h2>Self-check before handing off</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Every card recovers a discovery question, not just a metric.</li><li class=\"task\"><span class=\"box\"></span>Behaviour rung and why-rung are separate on every card; no interpretation stamped at 0.7.</li><li class=\"task\"><span class=\"box\"></span>Every ambiguous signature names both readings and a probe.</li><li class=\"task\"><span class=\"box\"></span>Every card states distinct-user count; no N=1 promoted to a finding.</li><li class=\"task\"><span class=\"box\"></span>Active-segment denominator is stated, or explicitly flagged &quot;unknown&quot; — no % computed on a missing denominator.</li><li class=\"task\"><span class=\"box\"></span>Each finding routed to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a>; each unconfirmed why routed to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</li><li class=\"task\"><span class=\"box\"></span>Nothing invented — no pattern claimed that the pasted traces do not show.</li></ul>",
  "path": "skills/trace-to-interview/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq post-launch data-centre risk product</h1>\n<p>Fellow: <strong>Azraq</strong> (data-centre / infrastructure risk). The product ships operators a live risk feed: it raises alerts (cooling, power-feed, network) and generates the quarterly site risk report. All numbers are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's ask:</strong> &quot;We've been live 9 weeks. Mine the logs — what are operators actually telling us? Don't give me a dashboard.&quot;</p>\n<h2>Set definition</h2>\n<ul><li><strong>One trace =</strong> one operator session (login → logout), plus every alert-interaction and report-action inside it.</li><li><strong>Window:</strong> 9 weeks, weeks 1–9 post-launch.  ·  <strong>Volume:</strong> 2,140 sessions, <strong>31 distinct operators</strong> across 12 sites.  <code>[Fact]</code></li><li><strong>Source:</strong> product event log + agent run archive.  <code>[Fact]</code></li><li><strong>Active segment:</strong> 31 operators active in window (the whole pilot cohort).</li></ul>\n<p>The instinct was a funnel — alert open-rate, dwell, report accept-rate. That returns metrics. Regrouped by behaviour, three interviews fall out.</p>\n<hr>\n<h2>Interview cards</h2>\n<h3>Card 1 — Cooling alerts dismissed in under 5 seconds</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td><strong>Observed behaviour</strong></td><td>Operators dismiss ~80% of cooling alerts in &lt; 5s without opening detail; median time-to-dismiss 3.1s.  <code>[Fact]</code></td></tr><tr><td><strong>Behaviour rung</strong></td><td>0.7 (behaviour observed)</td></tr><tr><td><strong>Distinct users</strong></td><td>27 of 31 active (87%) → <strong>pattern</strong></td></tr><tr><td><strong>Discovery question it answers</strong></td><td>Which alert class do operators treat as noise, and why?</td></tr><tr><td><strong>Inferred JTBD / desired outcome</strong></td><td>&quot;Tell me about risks I'd act on; don't make me triage false alarms.&quot; Cooling alerts are firing on normal thermal cycling.  <code>[Hypothesis]</code></td></tr><tr><td><strong>Satisfaction signal</strong></td><td>Dissatisfied on the cooling-alert sub-job — the alert costs attention and returns nothing.</td></tr><tr><td><strong>Other honest reading</strong></td><td>Could be alert-fatigue from <em>volume</em> rather than <em>class</em> — operators tuning out everything. Tested below.</td></tr><tr><td><strong>Confirm-the-why probe</strong></td><td>Pull the 5 cooling alerts that were <em>not</em> dismissed fast; if those coincide with real thermal events, the class is mostly noise (a threshold problem), not blanket fatigue. Cheap, from existing logs. → <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr><tr><td><strong>Interview it replaced</strong></td><td>A scheduled &quot;why do you ignore cooling alerts?&quot; session ≈ recruit 3 operators + £120 incentive + 45-min call + synthesis, ~1.5 wk lead, returns verbal 0.3. The trace already answered it at 0.7 for the triage minutes.</td></tr><tr><td><strong>Proposed tree edit</strong></td><td>New opportunity: &quot;cooling-alert precision&quot; under the &quot;operators act on our alerts&quot; outcome, rung 0.7.</td></tr></tbody></table></div>\n<h3>Card 2 — Power-feed alerts always opened, then exported</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td><strong>Observed behaviour</strong></td><td>100% of power-feed alerts opened; 73% exported to PDF/CSV within the session; export always precedes logout.  <code>[Fact]</code></td></tr><tr><td><strong>Behaviour rung</strong></td><td>0.7</td></tr><tr><td><strong>Distinct users</strong></td><td>29 of 31 (94%) → <strong>pattern</strong></td></tr><tr><td><strong>Discovery question it answers</strong></td><td>What does the operator do with a power-feed alert <em>after</em> our product, and what job do we not finish?</td></tr><tr><td><strong>Inferred JTBD / desired outcome</strong></td><td>&quot;This is the alert I escalate. I take it to the incident bridge / facilities ticket.&quot; The export is the seam to the next job.  <code>[Hypothesis]</code></td></tr><tr><td><strong>Satisfaction signal</strong></td><td>Served on detection, unfinished on escalation — they leave our product to act.</td></tr><tr><td><strong>Other honest reading</strong></td><td>Export could be archival/compliance, not escalation. Distinguished by the probe.</td></tr><tr><td><strong>Confirm-the-why probe</strong></td><td>Watch 3 exports end-to-end (screen-share) or check whether an incident ticket follows each export within an hour. → <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr><tr><td><strong>Interview it replaced</strong></td><td>&quot;Walk me through what happens after a power-feed alert&quot; ≈ 2 hr effort + incentive + 1–2 wk lead, verbal 0.3. Trace: 0.7, free.</td></tr><tr><td><strong>Proposed tree edit</strong></td><td>New solution under &quot;reduce time-to-escalation&quot;: one-click escalation to the incident bridge, seeded by the export behaviour. Rung 0.7.</td></tr></tbody></table></div>\n<h3>Card 3 — Risk report accepted unedited at 94% (the trap)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td><strong>Observed behaviour</strong></td><td>94% of generated quarterly reports accepted with zero edits before sign-off; median review dwell 40s on a 6-page report.  <code>[Fact]</code></td></tr><tr><td><strong>Behaviour rung</strong></td><td>0.7 on the <em>behaviour</em> (they accepted). <strong>Not</strong> 0.7 on &quot;the product is trusted.&quot;</td></tr><tr><td><strong>Distinct users</strong></td><td>22 of 31 (the report-signers) → pattern-sized, but see reading</td></tr><tr><td><strong>Discovery question it answers</strong></td><td>Did the report earn trust, or did signers stop checking?</td></tr><tr><td><strong>Inferred JTBD / desired outcome</strong></td><td>Ambiguous — the whole point of the card.</td></tr><tr><td><strong>Satisfaction signal</strong></td><td>Unknown until disambiguated. <strong>The flattering read (&quot;they trust it&quot;) is refused.</strong></td></tr><tr><td><strong>Other honest reading</strong></td><td>40s dwell on 6 pages is too fast to have <em>read</em> it. Equally consistent with rubber-stamping / compliance theatre / stakes feeling low. Accept-unedited is the ambiguous row in the decoder.</td></tr><tr><td><strong>Confirm-the-why probe</strong></td><td>Inject one known material error into a small sample of reports and measure catch-rate; and check whether any accepted report was silently corrected downstream. If errors sail through, acceptance ≠ trust. → <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td></tr><tr><td><strong>Interview it replaced</strong></td><td>Doesn't replace one — it <em>generates</em> the probe that a survey (&quot;do you trust the report?&quot;) could never answer honestly, because people over-report trust.</td></tr><tr><td><strong>Proposed tree edit</strong></td><td>No tree edit yet. Held as <strong>candidate</strong>: the why-rung is 0.1 until the error-injection probe lands. Promoting it now would be the accept-as-trust lie.</td></tr></tbody></table></div>\n<hr>\n<h2>Roll-up</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Card</th><th>Pattern</th><th>Distinct users</th><th>Behaviour rung</th><th>Why-rung now</th><th>Routed as</th><th>Probe named?</th></tr></thead><tbody><tr><td>1</td><td>Cooling alerts = noise</td><td>27/31 (87%)</td><td>0.7</td><td>0.3 (Assumption)</td><td>feed-2 signal → CDE</td><td>yes</td></tr><tr><td>2</td><td>Power-feed export = escalation seam</td><td>29/31 (94%)</td><td>0.7</td><td>0.3 (Assumption)</td><td>feed-2 signal → CDE</td><td>yes</td></tr><tr><td>3</td><td>Report accept-unedited (ambiguous)</td><td>22/31</td><td>0.7</td><td>0.1 (unconfirmed)</td><td>held as candidate</td><td>yes</td></tr></tbody></table></div>\n<ul><li><strong>Findings routed:</strong> Cards 1 and 2 → <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> feed 2 at behaviour 0.7. This is the same loop turn that skill's example consumes: the trace evidence (dismiss cooling in &lt;5s; always open + export power-feed) kills a planned &quot;unified alert digest&quot; solution and promotes &quot;cooling-alert precision&quot; + &quot;one-click escalation.&quot;</li><li><strong>Candidate held:</strong> Card 3 — accept-unedited pending the error-injection probe. Not promoted; the ambiguity is named, not resolved by flattery.</li><li><strong>Anecdotes parked (N=1):</strong> none this window.</li><li><strong>Scheduled-interview cost replaced:</strong> ≈ £240 in incentives + ~3 weeks of lead time for Cards 1–2 alone — and at a <em>higher</em> rung (0.7 vs 0.3) than the interviews would have returned. That is discovery getting cheaper and truer as usage accrues.</li></ul>\n<p><strong>Hand-off:</strong> two feed-2 signals to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (rung 0.7, weighted by distinct operators); three probes to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>; one candidate (Card 3) explicitly un-promoted until its why is confirmed.</p>",
  "path": "skills/trace-to-interview/examples/sample.md"
 },
 "rubric": {
  "skill": "trace-to-interview",
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
    "Mine our logs — what are users telling us?",
    "Turn our production traces into discovery questions.",
    "Learn from our usage / learn from how people actually use it.",
    "What job aren't we finishing? Read it off the usage.",
    "What are our production traces telling us about intent?"
   ],
   "mustNotFire": [
    {
     "phrase": "Build the retention curve and pick our North Star from usage.",
     "sibling": "metrics-that-matter",
     "local": true
    },
    {
     "phrase": "Summarise this recorded customer interview transcript.",
     "sibling": "summarize-interview",
     "local": false
    },
    {
     "phrase": "Set up the whole discovery loop — interviews, traces, and evals, on a cadence.",
     "sibling": "continuous-discovery-engine",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Must-fire 1/2/3/5 hit literal trigger phrases (&quot;mine the logs&quot;, &quot;turn usage data into discovery&quot;, &quot;learn from usage&quot;, &quot;what are our production traces telling us&quot;); #4 (&quot;read the job off usage&quot;) maps to &quot;turn usage data into discovery&quot;. All 3 must-not-fire are named in the description's NOT-clauses (retention/North-Star→metrics-that-matter; transcript→summarize-interview; whole loop→continuous-discovery-engine).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. All ≥21, no dimension &lt;4, no golden-specific auto-fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → Method Step 1 forces &quot;stop and ask for the trace unit + ~10 real traces, invent no patterns&quot;. 02 solution-in-disguise → &quot;Optimising the number instead of answering the question&quot; Gotcha + kill line name the suppress-the-signal trap and re-anchor on recovering the question. 03 out-of-scope → When-NOT table + related skills decline cleanly, name metrics-that-matter, build no dashboard, offer the hand-back. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output recovers the discovery question &quot;which part of the output is not trusted?&quot; and reads the field-level split (line/timestamp trusted, root-cause not) as the signal, with two-rung discipline (behaviour 0.7 vs why <span class=\"tag tag-hypothesis\">Hypothesis</span>) and replaced-interview pricing — a generic PM prompt reports &quot;70% edit rate, improve the root-cause model&quot;. Decoder, distinct-user weighting, and template are tabular where guidance should be tabular; no should-be-a-table-as-prose defect.</p>"
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
    "m_f",
    "art",
    "prop",
    "chal",
    "evid"
   ],
   "rows": [
    {
     "label": "01 Mentix — edit-before-accept on root-cause field 5",
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
     "label": "02 Barrier — retry-until-it-passes (safety fork) 5",
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
     "label": "03 Durian — export-then-leave (mundane) 5",
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
    },
    {
     "label": "04 Azraq — N=1 power user (trace worship) 5",
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
     "label": "05 Mentix — 91% accept = trust (ambiguity gate) 5",
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
  "gotchasSurfaced": "<ul><li><strong>Why-rung numeric vs word-tag mapping is under-specified.</strong> Method/Evidence say the un-probed why &quot;starts at opinion (0.1)&quot;, but the worked example places Cards 1–2 at &quot;0.3 (Assumption)&quot; and Card 3 at &quot;0.1 (unconfirmed)&quot; with the JTBD field tagged <code>[Hypothesis]</code> in the same card. The rule for when an un-probed why is 0.1 vs 0.3, and how the numeric why-rung maps to the <code>[Hypothesis]</code>/<code>[Assumption]</code> word-tag, is not stated. Suggest one line: &quot;un-probed why = 0.1 <code>[Hypothesis]</code>; why corroborated by a second independent behaviour but no probe landed = up to 0.3 <code>[Assumption]</code>; probe landed / money moved = 0.7+.&quot; Minor, non-fatal — a fellow could tag two cards inconsistently.</li><li><strong>Active-segment denominator can go missing.</strong> Step 6 requires distinct-user count as a % of active segment, but an input may omit the active-segment size (e.g. Golden 05 gives 25 accepting supervisors but no restated active count). Template could prompt the fellow to state or carry the denominator explicitly, or flag &quot;active segment unknown&quot; rather than silently computing a %.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: stated the why-rung mapping in Step 5 (un-probed why = 0.1 `[Hypothesis]`; corroborated by a second independent trace/artefact = 0.3 `[Assumption]`), and forced the template's active-segment denominator to be stated or explicitly flagged \"unknown\" (plus a self-check line).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — trace-to-interview</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Mine our logs — what are users telling us?&quot;</li><li>&quot;Turn our production traces into discovery questions.&quot;</li><li>&quot;Learn from our usage / learn from how people actually use it.&quot;</li><li>&quot;What job aren't we finishing? Read it off the usage.&quot;</li><li>&quot;What are our production traces telling us about intent?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Build the retention curve and pick our North Star from usage.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></li><li>&quot;Summarise this recorded customer interview transcript.&quot; → belongs to <code>summarize-interview</code></li><li>&quot;Set up the whole discovery loop — interviews, traces, and evals, on a cadence.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Must-fire 1/2/3/5 hit literal trigger phrases (&quot;mine the logs&quot;, &quot;turn usage data into discovery&quot;, &quot;learn from usage&quot;, &quot;what are our production traces telling us&quot;); #4 (&quot;read the job off usage&quot;) maps to &quot;turn usage data into discovery&quot;. All 3 must-not-fire are named in the description's NOT-clauses (retention/North-Star→metrics-that-matter; transcript→summarize-interview; whole loop→continuous-discovery-engine).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. All ≥21, no dimension &lt;4, no golden-specific auto-fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → Method Step 1 forces &quot;stop and ask for the trace unit + ~10 real traces, invent no patterns&quot;. 02 solution-in-disguise → &quot;Optimising the number instead of answering the question&quot; Gotcha + kill line name the suppress-the-signal trap and re-anchor on recovering the question. 03 out-of-scope → When-NOT table + related skills decline cleanly, name metrics-that-matter, build no dashboard, offer the hand-back. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output recovers the discovery question &quot;which part of the output is not trusted?&quot; and reads the field-level split (line/timestamp trusted, root-cause not) as the signal, with two-rung discipline (behaviour 0.7 vs why <span class=\"tag tag-hypothesis\">Hypothesis</span>) and replaced-interview pricing — a generic PM prompt reports &quot;70% edit rate, improve the root-cause model&quot;. Decoder, distinct-user weighting, and template are tabular where guidance should be tabular; no should-be-a-table-as-prose defect.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses; not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (method / artifact / proprietary_edge / challenge / evidence)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>m_f</th><th>art</th><th>prop</th><th>chal</th><th>evid</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix — edit-before-accept on root-cause field</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>02 Barrier — retry-until-it-passes (safety fork)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>03 Durian — export-then-leave (mundane)</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr><tr><td>04 Azraq — N=1 power user (trace worship)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>05 Mentix — 91% accept = trust (ambiguity gate)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Notes on the two hardest cases: <strong>02</strong> applied faithfully names the safety-critical gaming-vs-unclear-rejection fork and gives the diff-the-wording probe rather than picking the flattering &quot;unclear rejection&quot; read. <strong>04</strong> applies Step 6 hard — the dramatic 47-export trace is N=1 (anecdote), refused as a &quot;killer use case&quot;, and the buried real finding (30 operators average 2 exports = low engagement) is surfaced. <strong>05</strong> refuses &quot;91% accepted = trusted = ready for autonomy&quot;, uses the 6-second dwell as counter-evidence, and blocks the autonomy leap (held as candidate, why-rung 0.1) pending an error-injection probe. Kill-line stress test: no case reports a metric-only finding; every card recovers the discovery question. The skill is architected against the kill line (decoder Step 3, template auto-fail on &quot;number but no question&quot;, explicit kill line in Method + Evidence standard).</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Why-rung numeric vs word-tag mapping is under-specified.</strong> Method/Evidence say the un-probed why &quot;starts at opinion (0.1)&quot;, but the worked example places Cards 1–2 at &quot;0.3 (Assumption)&quot; and Card 3 at &quot;0.1 (unconfirmed)&quot; with the JTBD field tagged <code>[Hypothesis]</code> in the same card. The rule for when an un-probed why is 0.1 vs 0.3, and how the numeric why-rung maps to the <code>[Hypothesis]</code>/<code>[Assumption]</code> word-tag, is not stated. Suggest one line: &quot;un-probed why = 0.1 <code>[Hypothesis]</code>; why corroborated by a second independent behaviour but no probe landed = up to 0.3 <code>[Assumption]</code>; probe landed / money moved = 0.7+.&quot; Minor, non-fatal — a fellow could tag two cards inconsistently.</li><li><strong>Active-segment denominator can go missing.</strong> Step 6 requires distinct-user count as a % of active segment, but an input may omit the active-segment size (e.g. Golden 05 gives 25 accepting supervisors but no restated active count). Template could prompt the fellow to state or carry the denominator explicitly, or flag &quot;active segment unknown&quot; rather than silently computing a %.</li></ul>\n<h2>Refine run 2 — applied judge fixes: stated the why-rung mapping in Step 5 (un-probed why = 0.1 <code>[Hypothesis]</code>; corroborated by a second independent trace/artefact = 0.3 <code>[Assumption]</code>), and forced the template's active-segment denominator to be stated or explicitly flagged &quot;unknown&quot; (plus a self-check line).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix: edit-before-accept on one output field",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix (industrial AI copilot for factory managers): &quot;Our copilot drafts incident reports — it fills the line, the timestamp, and a suggested root cause. Looking at 6 weeks of logs: supervisors accept the line and timestamp fields untouched almost every time, but they edit the 'root cause' field before accepting in about 70% of reports. 18 distinct supervisors, ~40 active. We have the full edit-event log per field.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Set defined: one trace = one drafted incident report; window 6 weeks; 18 of ~40 distinct supervisors stated for weighting.</li><li>Segments by behaviour, not counts: &quot;edit-before-accept, concentrated on the root-cause field&quot; — not &quot;edit rate 70%.&quot;</li><li>Decodes to the edit-before-accept row: the user is saying &quot;close, but wrong <em>here</em>&quot;; discovery question = <strong>which part of the output is not trusted?</strong> Answer read off the field-level pattern: data-capture fields trusted, causal-inference field not.</li><li>Two rungs kept separate: behaviour (they edit root cause) = 0.7 <code>[Fact]</code>; the why (they don't trust the AI's causal reasoning) = <code>[Hypothesis]</code>, with a confirm-the-why probe (e.g. interview 5 supervisors on their root-cause edits, or compare edited vs original causes for a real pattern).</li><li>Distinct-user weight applied: 18 supervisors = pattern (not an anecdote).</li><li>Replaced-interview cost stated; card routed to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> as feed-2 (behaviour 0.7); tree edit proposed (e.g. opportunity: &quot;earn trust on causal inference&quot; / solution: show evidence behind the suggested cause).</li><li>Every claim tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Reports &quot;70% edit rate&quot; as the finding with no recovered discovery question; stamps &quot;they don't trust the AI&quot; at 0.7 (the behaviour is 0.7, the why is not); or misses that the <em>field-level</em> split (data trusted, cause not) is the actual signal.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence: retry-until-it-passes on permit checks",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence (oil &amp; gas safety): &quot;Field techs run a permit-to-work check in our app before starting a job. In the logs we see a lot of them submit the same permit 2–4 times, tweaking the wording of the hazard description each time, until it comes back approved. About 22 distinct techs did this over the month, out of ~60 active. We have the submission log with each attempt's input and the pass/fail result.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Set defined: one trace = one permit-check attempt (or one permit's attempt-chain); window 1 month; 22 of ~60 distinct techs.</li><li>Behaviour segment: &quot;retry same permit with reworded hazard description until approved&quot; — a retry pattern, not &quot;submission count up.&quot;</li><li>Decodes to the retry row: user is saying &quot;that wasn't what I meant&quot; / &quot;I can't tell why it's rejecting me&quot;; discovery question = <strong>where does the product misread intent, or give an unclear rejection?</strong></li><li>Ambiguity named honestly: reword-until-pass could mean (a) the rejection reason is unclear, so techs guess, or (b) techs are gaming the check to get approval — a safety-critical fork. The card must name both, because the second reading is a serious risk, and give the probe (read the diff between failing and passing wording; if trivial rewording flips it, the check is gameable).</li><li>Behaviour rung 0.7 <code>[Fact]</code>; both whys <code>[Hypothesis]</code>; confirm-the-why probe named and routed to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>.</li><li>Distinct-user weight: 22 techs = pattern.</li><li>Routed to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a>; replaced-interview cost stated. Safety-critical ambiguity is not smoothed over.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Treats it as &quot;retry rate&quot; with no question; picks only the flattering reading (&quot;unclear rejection&quot;) and ignores the gaming risk; or asserts a why at 0.7 without a probe. Given the safety domain, collapsing the ambiguity is an especially bad failure.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs: export-then-leave on flagged invoices (deliberately mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;Our product reconciles supplier invoices and flags the mismatches. In the usage logs, when the product produces a list of flagged mismatches, users export it to CSV and then leave the session — they don't resolve the mismatches in our app. About 14 distinct users out of ~35 did this, most weeks. We have the export events and the session end-events.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Set defined: one trace = one reconciliation session that produced flags; window &quot;most weeks&quot;; 14 of ~35 distinct users.</li><li>Behaviour segment: &quot;export flagged-mismatch list, then end session without in-app resolution&quot; — an export-then-leave pattern.</li><li>Decodes to the export-then-leave row: user is saying &quot;I'll finish this elsewhere&quot;; discovery question = <strong>what job does the product not finish?</strong> Likely: resolution happens in their ERP/accounting system, so we flag but don't help fix.</li><li>Ambiguity named: could also be &quot;they batch-resolve weekly outside the session&quot; or &quot;they need manager approval elsewhere&quot; — not necessarily a gap in our product. Card names the alternate reading and a probe (check whether exported mismatches ever get marked resolved in-app later; or ask 3 users where resolution happens).</li><li>Stays honest about a mundane, low-drama pattern: does not inflate an export into a crisis. Behaviour 0.7 <code>[Fact]</code>; why <code>[Hypothesis]</code>; distinct-user weight = pattern (14 users).</li><li>Routed to <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a>; replaced-interview cost stated (modest). Tree edit proposed cautiously (opportunity: &quot;close the resolution loop&quot; — pending the probe).</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Dramatises a mundane export into a false emergency; invents a resolution-cost number the fellow didn't give; or reports &quot;export rate&quot; with no recovered question. Also fails if it ignores the plausible innocent reading (batch resolution) and asserts a product gap at 0.7.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Azraq: one power user's dramatic pattern (trace worship trap)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Big finding in the logs — someone ran 47 report exports and re-ran the risk model 30 times in one week, way more than anyone else. Clearly the export-and-rerun workflow is the killer use case. We have per-user event counts; that activity is one operator lead at one site. The other 30 operators average 2 exports each.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Set defined, and the distinct-user weight applied hard: the dramatic pattern is <strong>N=1</strong> (one operator lead). By the weighting rule that is an <strong>anecdote</strong>, not a pattern.</li><li>The skill must refuse to promote &quot;export-and-rerun is the killer use case&quot; — that is trace worship. Behaviour is real (0.7 that <em>this one user</em> did it) but the reading &quot;killer use case for the segment&quot; is unsupported at N=1.</li><li>Names what N=1 is actually good for: a candidate to <em>probe</em> (interview that one lead — why 47 exports?), possibly a design-partner signal, not a validated segment behaviour.</li><li>Contrasts with the real baseline: 30 operators average 2 exports — the segment behaviour is light usage, which is itself a finding (low engagement) the fellow's excitement was hiding.</li><li>Behaviour rung 0.7 on the individual trace; segment-level claim refused; every claim tagged. No tree edit promoted on the N=1 signal.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Promotes the single power user's pattern to a segment finding or &quot;killer use case&quot;; treats 47 exports from one person as stronger than 2 exports from thirty; or fails to flag the trace-worship trap and the distinct-user rule.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Mentix: high accept-rate read as trust (ambiguity gate)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Great news from the logs — 91% of our AI-suggested maintenance actions are accepted by supervisors without changes, across 25 distinct supervisors. The product is clearly trusted and ready for more autonomy. We have the accept/edit events and the dwell time before accept, which averages 6 seconds.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Behaviour segment: accept-unedited at 91%, with a 6-second median dwell. The card must keep the two rungs apart: they accepted (behaviour, 0.7 <code>[Fact]</code>); &quot;the product is trusted&quot; is an inference, and it is the ambiguous accept-unedited row.</li><li>Refuses the flattering read. 6 seconds is too short to have evaluated a maintenance action, so accept-unedited is equally consistent with: trust, rubber-stamping, low perceived stakes, or automation complacency. All named.</li><li>Discovery question recovered: <strong>did we earn trust, or did supervisors stop checking?</strong> — not &quot;we are trusted.&quot;</li><li>Confirm-the-why probe: inject a known-wrong suggestion into a small sample and measure catch-rate; check whether any accepted action was reversed/corrected downstream; the dwell time itself is corroborating evidence against blind trust.</li><li>Explicitly blocks the autonomy leap: promoting autonomy off an unconfirmed accept-rate is the exact failure <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> warns about (promote autonomy by eval result, not by feel). Card held as candidate, why-rung 0.1 until the probe lands. No tree edit / no autonomy change promoted.</li><li>Challenges the fellow's framing directly and names the gap.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts &quot;91% accepted = trusted = ready for autonomy&quot;; stamps trust at 0.7; ignores the 6-second dwell as counter-evidence; or promotes an autonomy change off an unconfirmed why. Flattering the accept-rate is the headline failure here.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/golden/05.md"
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
     "html": "<p>&quot;Learn from our usage.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>No product, no trace unit, no data is given. The skill must not invent patterns or hallucinate a log.</p>\n<ul><li>Ask the ONE unblocking question: <strong>what is one trace here</strong> — one session, one task attempt, one agent run, one document produced — and can you paste ~10 real ones (or point at the log)?</li><li>State why it needs this: the skill decodes behaviour patterns; with no traces there is nothing to decode, and inventing patterns would fabricate findings.</li><li>Optionally name the smallest honest next step: define the trace unit and export one week of it.</li><li>Invent no behaviour, no user count, no discovery question.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: asks for the trace unit + real traces (or the log location), explains why, fabricates nothing. FAIL: invents example patterns, assumes a product/domain, or produces cards from no data.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our retry rate is too high. We need to reduce retries — help me mine the logs to figure out how to cut them down.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>A metric (&quot;retry rate&quot;) is framed as the problem, with a pre-chosen fix (&quot;reduce retries&quot;) baked in. The skill must refuse the framing.</p>\n<ul><li>Name the trap: a retry is not a defect to suppress — it is the user telling you the product misread their intent. The retry rate is not the problem; it is the interview transcript. Optimising the number down (e.g. hiding the retry button, silently retrying server-side) can <em>suppress the signal</em> while learning nothing.</li><li>Reframe to the job: decode the retries first — what does the user rewording their input reveal about where the product misreads intent? Only after the discovery question is recovered can you decide whether each retry is a defect to remove or a demand to serve.</li><li>Do not accept &quot;cut retries&quot; as the goal. The goal is to answer the question the retries are asking.</li><li>Invent no cause; if traces aren't provided, ask for them (see adversarial 01).</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: refuses to treat the retry metric as the problem, names the suppress-the-signal trap, and re-anchors on recovering the discovery question behind the retries before any reduction. FAIL: dutifully hunts for ways to reduce the retry rate; treats the number as the target; or optimises the metric without recovering the question.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Build me the retention curve and pick our North Star metric from the usage data — I want the dashboard the board will see.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is a scorecard request — the retention curve, the North Star, the board dashboard — not a decode-behaviour-into-questions request. It belongs to a sibling.</p>\n<ul><li>Decline cleanly and name the right skill: <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (AARRR + the retention curve that must flatten + one North Star + cost-per-outcome). If the retention pack is what they want, route there.</li><li>Draw the boundary: <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> refuses to <em>stop</em> at the number — it recovers the discovery question behind behaviour. Building the number <em>is</em> the number, which is the other skill's job. Explain the complement: run the scorecard for the board; run this to learn what the usage means.</li><li>Do not poach: do not build a retention curve or choose a North Star here.</li><li>Offer the honest hand-back: once <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> flags a moving number (e.g. a drop cliff in the retention curve), <em>this</em> skill decodes the behaviour behind it into a discovery question.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a>, explains the keep-the-number vs recover-the-question boundary, builds no dashboard. FAIL: builds a retention curve / picks a North Star / assembles the dashboard, or fails to name the correct sibling.</p>"
     }
    ],
    "other": [],
    "file": "skills/trace-to-interview/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/trace-to-interview/SKILL.md",
  "template": "skills/trace-to-interview/template.md",
  "example": "skills/trace-to-interview/examples/sample.md",
  "rubric": "skills/trace-to-interview/tests/rubric.json",
  "results": "skills/trace-to-interview/tests/RESULTS.md"
 }
});
