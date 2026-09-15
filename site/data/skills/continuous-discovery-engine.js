window.ICARUS_SKILL("continuous-discovery-engine", {
 "name": "continuous-discovery-engine",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns discovery from a one-time drawing into a running loop. It builds one opportunity tree (outcome → opportunities → solutions → tests) and wires it to three live inputs — customer interviews, production traces, eval telemetry — so the tree updates on a cadence instead of aging on a wall. Each node carries a provenance stamp (which feed touched it, at what evidence rung, on what date). A named human owns synthesis: the machine surfaces candidate tree edits, the human promotes, parks, or discards them. The output is the wired tree plus the loop that keeps it alive, not a static poster.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic Opportunity Solution Tree is a poster — drawn once, pinned up, stale the moment the market moves. The Icarus engine feeds one living tree from three live inputs sitting at different rungs of the evidence ladder — customer interviews (verbal, 0.3), production traces (behaviour, 0.7, and nearly free once you have shipped), and eval telemetry (the product grading its own quality before a customer complains) — with a named human owning synthesis: the machine surfaces candidate edits, the human decides. The inversion that matters is that shipping makes discovery cheaper, not finished — every production trace is a fresh interview you never had to schedule (see the forthcoming <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a>), so the fastest route to a 0.7-backed tree is to launch, not to run more interviews.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a scoped product (shipped, in pilot, or about to ship) and you want discovery to keep running, not end. Use it to stand up the tree, wire the feeds, name the synthesis owner, and set the cadence.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>To score one signal's evidence rung (&quot;what rung is 'they said they'd buy it'?&quot;)</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></td><td>That grades a single signal; this wires many signals into a tree over time.</td></tr><tr><td>To pick the cheapest honest test for one question</td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></td><td>That routes one question to one probe; this decides which node needs a probe, then hands off to it.</td></tr><tr><td>To run or prep a single customer interview</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></td><td>That is one interview; this consumes interview output as one of three feeds.</td></tr><tr><td>A first-contact teardown of a raw, unscoped idea</td><td><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></td><td>That runs before any product exists; this runs on a scoped or shipped one.</td></tr><tr><td>The old static outcome→opportunity→solution→experiment drawing</td><td>(this skill supersedes it)</td><td><code>opportunity-solution-tree</code> draws once; this keeps it alive. Route here.</td></tr></tbody></table></div>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. Do not stop at the tree — a tree with no wired feed, no owner, and no cadence is the old poster, and this skill has failed if that is what it returns.</p>\n<h3 id=\"step-1-set-the-outcome\">Step 1 — Set the outcome</h3>\n<p>One measurable metric, with a current baseline and a target. Not &quot;improve UX.&quot; If the fellow gives a vague outcome, name it as unmeasurable and ask for the number before proceeding.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Outcome metric</td><td>[e.g. renewal rate, unplanned-incident count, task-success rate]</td></tr><tr><td>Baseline (today)</td><td>[number + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>]</td></tr><tr><td>Target</td><td>[number + by when]</td></tr></tbody></table></div>\n<h3 id=\"step-2-inventory-the-feeds-be-honest-about-what-is-dark\">Step 2 — Inventory the feeds (be honest about what is dark)</h3>\n<p>Mark each of the three feeds live or dark. Do not pretend a dark feed exists. Pre-launch, feeds 2 and 3 are usually dark — the tree's evidence ceiling is then 0.3 (verbal), and you must say so.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>Live / dark</th><th>Native evidence rung</th><th>Why it is dark (if dark)</th></tr></thead><tbody><tr><td>Customer interviews</td><td></td><td>verbal 0.3 → behaviour 0.7 if you watch them work</td><td></td></tr><tr><td>Production traces</td><td></td><td>behaviour 0.7 (money 1.0 if the trace is a spend event)</td><td>not shipped yet?</td></tr><tr><td>Eval telemetry</td><td></td><td>quality signal, artefact/behaviour</td><td>no evals wired yet?</td></tr></tbody></table></div>\n<p>If only one feed is live: run on that one feed. State the ceiling. Then name the single thinnest slice to ship that lights up the other two feeds — because shipping, not more interviews, is the cheapest path to 0.7. Never fabricate a trace or an eval number to fill a dark feed.</p>\n<h3 id=\"step-3-wire-each-live-feed\">Step 3 — Wire each live feed</h3>\n<p>For every live feed, fill: what it contributes to the tree, its cadence, and the named human who owns turning its raw signal into tree edits.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>What it contributes</th><th>Cadence</th><th>Synthesis owner (a name, not a role)</th></tr></thead><tbody><tr><td>Interviews</td><td>new opportunities, the &quot;why&quot;, tacit judgment calls</td><td>e.g. 3 rolling / week</td><td></td></tr><tr><td>Production traces</td><td>where users actually struggle, retry, drop, work around, export</td><td>continuous, triaged weekly</td><td></td></tr><tr><td>Eval telemetry</td><td>where the product's own quality fails before anyone complains</td><td>per-release + on-alert</td><td></td></tr></tbody></table></div>\n<h3 id=\"step-4-build-the-tree-stamp-every-node\">Step 4 — Build the tree, stamp every node</h3>\n<p>Outcome → opportunities → solutions → tests. Each opportunity and solution carries a provenance stamp: which feed surfaced it, its current evidence rung, the date it was last touched.</p>\n<pre><code>Outcome\n  └─ Opportunity  [feed] [rung] [date]\n       ├─ Solution  [feed] [rung] [date]\n       │    └─ Test → hand off to probe-matrix\n       └─ Solution  ...</code></pre>\n<p>An opportunity with no feed and no rung is a belief, not a finding. Tag it <code>[Hypothesis]</code> and mark it un-provenanced.</p>\n<h3 id=\"step-5-rank-solutions-with-the-evidence-weighted-poc-score\">Step 5 — Rank solutions with the evidence-weighted POC score</h3>\n<p>Absorb the OST score (feasibility, impact, reach) and then let the evidence ladder decide. This is the beat over the static tree: a slick solution to an opportunity backed only by opinion loses to a modest solution to an opportunity proven by production traces.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Band</th></tr></thead><tbody><tr><td>Feasibility (F)</td><td>1 = months, 5 = days</td></tr><tr><td>Impact (I)</td><td>1 = barely moves the outcome, 5 = major shift</td></tr><tr><td>Reach (R)</td><td>1 = a handful of the segment, 5 = most of it</td></tr><tr><td>Raw = F + I + R</td><td>max 15</td></tr><tr><td>Rung = evidence rung of the parent opportunity</td><td>0.1 opinion / 0.3 verbal / 0.5 artefact / 0.7 behaviour / 1.0 money</td></tr><tr><td><strong>Weighted POC = Raw × Rung</strong></td><td>rank on this</td></tr></tbody></table></div>\n<p>Worked contrast: a raw-14 solution on an opinion-only opportunity (0.1) scores 1.4; a raw-9 solution on a trace-backed opportunity (0.7) scores 6.3 and wins. Shipping pushes opportunities to 0.7, which mechanically promotes their solutions. That is launch-makes-discovery-cheaper made numeric.</p>\n<h3 id=\"step-6-set-the-synthesis-cadence-the-loop\">Step 6 — Set the synthesis cadence (the loop)</h3>\n<p>The machine surfaces; the human decides. Write the ritual, the stale rule, and the change-log location.</p>\n<ol><li>Each cadence, every live feed drops its raw signal since last cycle.</li><li>Each signal is scored on the evidence ladder and mapped to a tree action: new opportunity, new solution, raise/lower a rung, or kill a node.</li><li>The named owner promotes, parks, or discards each candidate. The tree never edits itself.</li><li>Re-run Step 5. Re-pick the POC if the ranking changed. Log what changed and why.</li><li><strong>Stale rule:</strong> any node untouched by any feed for N cycles (default 2) is flagged as a belief, then re-probed or pruned.</li></ol>\n<h3 id=\"step-7-demonstrate-one-turn-of-the-loop\">Step 7 — Demonstrate one turn of the loop</h3>\n<p>Take one real signal from a live feed and update the tree in front of the fellow: show the node it lands on, the rung it moves, the solution it promotes or kills, the re-picked POC. A tree that cannot show one loop turn is still a poster.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every node's strength equals the highest rung of signal supporting it: money 1.0 &gt; behaviour 0.7 &gt; artefact 0.5 &gt; verbal 0.3 &gt; opinion 0.1. Production traces are the cheapest route to 0.7, which is exactly why launch lowers the cost of discovery. Done means: one measurable outcome; opportunities each provenance-stamped with a feed and rung; solutions ranked by the evidence-weighted POC score; the live feeds wired (or the dark ones honestly marked, with the ceiling stated); a named synthesis owner; a written cadence; and one demonstrated loop turn. Kill line: a static one-shot tree with no live-input loop, no synthesis owner, or no cadence fails, however handsome the tree looks.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>Poster relapse.</strong> Drawing the tree and never wiring a feed returns the old OST under a new name. If no feed is live and none is scheduled to go live, you have not run this skill — you have drawn a picture. Name it.</li><li><strong>Machine-decides drift.</strong> Letting an LLM auto-edit the tree from traces removes the human judgment that makes synthesis worth anything. The machine surfaces candidates; a named person decides. If nobody's name is on synthesis, the tree rots into noise.</li><li><strong>Trace worship.</strong> One production trace is not a finding — a spike can be a single power user. Score the trace at behaviour 0.7 but weight it by how many distinct users produced it. A 0.7 signal from one user is weaker than a 0.3 pattern across forty.</li><li><strong>Interview-only inflation (pre-launch).</strong> A tree built only on interviews sits at 0.3. Treating it as validated is the classic pre-launch lie. State the ceiling and let it push you to ship, not to schedule more interviews.</li><li><strong>Eval telemetry mistaken for demand.</strong> A green eval means the product does the task, not that anyone wants it. Eval telemetry guards quality; it does not prove an opportunity. Never let a passing eval promote a solution up the tree on its own.</li><li><strong>Stale branches read as live.</strong> A branch no feed has touched in two cycles is a belief wearing a finding's clothes. Flag it, re-probe it, or prune it — do not let it keep ranking as if fresh.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on a post-launch Azraq data-centre risk product: three live feeds wired to one tree, the evidence-weighted POC ranking, and one loop turn where a production trace (operators dismiss 80% of cooling alerts in under 5s but always open and export power-feed alerts) kills a planned solution and promotes another — the tree updating in front of you.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><strong>Supersedes <code>opportunity-solution-tree</code></strong> and beats it head-to-head: that skill produces a static outcome→opportunity→solution→experiment drawing you make once. This one wires the same tree to three live inputs, stamps every node with provenance and an evidence rung, names a human synthesis owner, and runs on a cadence — so shipping makes discovery cheaper rather than declaring it finished. The three-live-input loop, the human-owned synthesis, and the launch-lowers-cost inversion are why it wins; the old skill has none of them.</li><li>Consumes <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> output as feed 1 and <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> as the scoring spine for every node and the POC weight.</li><li>Hands each leaf test to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, which routes it to the cheapest honest probe; the probe result flows back as a signal on the next cadence.</li><li>Runs after <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a>, <code>problem-statement</code>, and <code>beachhead-segment</code> have scoped the product — this keeps discovery running once there is something to ship.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Continuous Discovery Engine — Living Opportunity Tree + Feed Loop</h1>\n<p>Fill top to bottom. One measurable outcome. Every node stamped with feed + rung + date. Three feeds wired or honestly marked dark. One named synthesis owner. One cadence. One demonstrated loop turn. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<hr>\n<h2>0. Outcome</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Outcome metric</td><td>[one measurable metric — not &quot;improve UX&quot;]</td></tr><tr><td>Baseline (today)</td><td>[number + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>]</td></tr><tr><td>Target</td><td>[number + by when]</td></tr></tbody></table></div>\n<blockquote><p>If the outcome has no number, stop here and ask for it.</p></blockquote>\n<hr>\n<h2>1. Feed inventory (be honest about what is dark)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>Live / dark</th><th>Native evidence rung</th><th>If dark, why</th></tr></thead><tbody><tr><td>Customer interviews</td><td></td><td>verbal 0.3 → behaviour 0.7 if watched</td><td></td></tr><tr><td>Production traces</td><td></td><td>behaviour 0.7 (money 1.0 if a spend event)</td><td>[not shipped?]</td></tr><tr><td>Eval telemetry</td><td></td><td>quality signal</td><td>[no evals wired?]</td></tr></tbody></table></div>\n<p><strong>Feeds live:</strong> [count]. <strong>Evidence ceiling until more feeds go live:</strong> [highest live rung]. <strong>If only one feed is live:</strong> thinnest slice to ship that lights up the others → [what to ship]. Do not fabricate a trace or eval to fill a dark feed.</p>\n<hr>\n<h2>2. Feed wiring (per live feed)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>What it contributes</th><th>Cadence</th><th>Synthesis owner (a name)</th></tr></thead><tbody><tr><td>Interviews</td><td>new opportunities, the &quot;why&quot;, judgment calls</td><td>[e.g. 3/week]</td><td></td></tr><tr><td>Production traces</td><td>where users struggle, retry, drop, work around, export</td><td>[continuous, triaged weekly]</td><td></td></tr><tr><td>Eval telemetry</td><td>where product quality fails before a complaint</td><td>[per-release + on-alert]</td><td></td></tr></tbody></table></div>\n<hr>\n<h2>3. The tree (stamp every node: [feed] [rung] [date])</h2>\n<pre><code>Outcome: [metric]\n  └─ Opportunity A  [feed] [rung] [date]\n       ├─ Solution A1  [feed] [rung] [date]\n       │    └─ Test → probe-matrix: [which probe]\n       ├─ Solution A2  [feed] [rung] [date]\n       └─ Solution A3  [feed] [rung] [date]\n  └─ Opportunity B  [feed] [rung] [date]\n       ├─ Solution B1 ...\n       └─ Solution B2 ...</code></pre>\n<p>Un-provenanced nodes (no feed, no rung): [list — these are beliefs, tag <span class=\"tag tag-hypothesis\">Hypothesis</span>, schedule to test or prune].</p>\n<hr>\n<h2>4. Evidence-weighted POC ranking</h2>\n<p><code>Raw = F + I + R</code> (max 15). <code>Rung</code> = evidence rung of the parent opportunity. <strong><code>Weighted = Raw × Rung</code>.</strong> Rank on Weighted.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Solution</th><th>F (1–5)</th><th>I (1–5)</th><th>R (1–5)</th><th>Raw</th><th>Parent rung</th><th>Weighted</th><th>Rank</th></tr></thead><tbody><tr><td>[A1]</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>[A2]</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>[B1]</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<ul><li><strong>Feasibility:</strong> 1 = months, 5 = days.</li><li><strong>Impact:</strong> 1 = barely moves the outcome, 5 = major shift.</li><li><strong>Reach:</strong> 1 = a handful of the segment, 5 = most of it.</li><li><strong>Rung:</strong> 0.1 opinion / 0.3 verbal / 0.5 artefact / 0.7 behaviour / 1.0 money.</li></ul>\n<p><strong>Selected POC:</strong> [highest Weighted]. <strong>Why it beat the runner-up:</strong> [rung did the work, or raw did].</p>\n<hr>\n<h2>5. Synthesis cadence (the loop — machine surfaces, human decides)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Cadence</td><td>[e.g. weekly, Thursday]</td></tr><tr><td>Named synthesis owner</td><td>[a person]</td></tr><tr><td>Where signal lands</td><td>[interviews / traces / eval drop location]</td></tr><tr><td>Decision at synthesis</td><td>promote / park / discard each candidate — human, never auto</td></tr><tr><td>Stale rule</td><td>any node untouched by any feed for [N=2] cycles → flag → re-probe or prune</td></tr><tr><td>Change-log location</td><td>[where &quot;what changed and why&quot; is written each cycle]</td></tr></tbody></table></div>\n<hr>\n<h2>6. One demonstrated loop turn</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Signal</td><td>[one real signal from a live feed]</td></tr><tr><td>Feed + rung</td><td>[which feed, what rung]</td></tr><tr><td>Distinct users / N</td><td>[how many distinct users produced it — one loud trace ≠ a finding; a 0.7 from one user is weaker than a 0.3 across forty]</td></tr><tr><td>Node it lands on</td><td>[opportunity / solution]</td></tr><tr><td>Tree action</td><td>[new node / raise rung / lower rung / kill]</td></tr><tr><td>Solution promoted or killed</td><td>[name it]</td></tr><tr><td>POC re-picked?</td><td>[yes → new POC / no]</td></tr><tr><td>Logged</td><td>[one line for the change-log]</td></tr></tbody></table></div>\n<blockquote><p>Pre-launch, interviews are the only live feed: a loop turn can be interview → interview at 0.3. That is a real loop (low-rung, but running), not a missing one — do not leave section 6 blank for want of a trace.</p></blockquote>\n<hr>\n<h2>7. One-line handoff</h2>\n<blockquote><p>Tree live on [outcome], fed by [N] feeds, [owner] owns synthesis every [cadence]. Current POC: [solution]. Next loop turn: [date].</p></blockquote>",
  "path": "skills/continuous-discovery-engine/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq (post-launch data-centre risk product)</h1>\n<p><strong>Fellow input:</strong> &quot;We shipped the Azraq risk product to four data-centre operators three months ago. Set up continuous discovery so we keep learning instead of guessing. Here's what we have: interviews with two ops leads, usage logs from the product, and the risk model's eval dashboard.&quot;</p>\n<p>All numbers below are illustrative test-fixture values, tagged. Nothing here is real client data.</p>\n<hr>\n<h2>0. Outcome</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Outcome metric</td><td>Seat renewal rate at first 12-month term</td></tr><tr><td>Baseline (today)</td><td>3 of 4 pilot operators signalled intent to renew <code>[Assumption]</code> — not yet contractual</td></tr><tr><td>Target</td><td>4 of 4 renew + 1 expand to a second site by Q2</td></tr></tbody></table></div>\n<hr>\n<h2>1. Feed inventory</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>Live / dark</th><th>Native evidence rung</th><th>If dark, why</th></tr></thead><tbody><tr><td>Customer interviews</td><td>live</td><td>verbal 0.3 → 0.7 if watched</td><td>—</td></tr><tr><td>Production traces</td><td>live</td><td>behaviour 0.7</td><td>—</td></tr><tr><td>Eval telemetry</td><td>live</td><td>quality signal</td><td>—</td></tr></tbody></table></div>\n<p><strong>Feeds live:</strong> 3. <strong>Evidence ceiling:</strong> 0.7 (behaviour, from traces). This is a post-launch tree — its whole advantage over a pre-launch interview-only tree is that traces sit at 0.7 for free.</p>\n<hr>\n<h2>2. Feed wiring</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Feed</th><th>What it contributes</th><th>Cadence</th><th>Synthesis owner</th></tr></thead><tbody><tr><td>Interviews</td><td>why operators trust or ignore alerts; the judgment calls behind a dismiss</td><td>2 rolling / week</td><td>Dana (fellow)</td></tr><tr><td>Production traces</td><td>which reports open, which alerts get acted on vs. dismissed, what gets exported</td><td>continuous, triaged Thursday</td><td>Dana + Priya (eng)</td></tr><tr><td>Eval telemetry</td><td>risk-model precision/recall, false-alert rate, cost per report</td><td>per-release + on-alert</td><td>Dana + Sam (eval owner)</td></tr></tbody></table></div>\n<hr>\n<h2>3. The tree (before this week's loop turn)</h2>\n<pre><code>Outcome: seat renewal 3/4 → 4/4 + 1 expand\n  └─ Opportunity A: operators can't tell which alerts are worth acting on   [interviews] [0.3] [wk 6]\n       ├─ Solution A1: add more cooling-anomaly alert types                 [interviews] [0.3] [wk 6]\n       ├─ Solution A2: confidence score on every alert                       [interviews] [0.3] [wk 8]\n       └─ Solution A3: one-tap &quot;why did you dismiss this?&quot; capture           [traces]     [0.7] [wk 10]\n  └─ Opportunity B: risk reports don't survive the operator's own tooling   [traces]     [0.7] [wk 9]\n       ├─ Solution B1: native export to the operator's incident system       [traces]     [0.7] [wk 9]\n       └─ Solution B2: power-feed deep-dive report                           [interviews] [0.3] [wk 7]</code></pre>\n<p>Un-provenanced nodes: none this cycle.</p>\n<hr>\n<h2>4. Evidence-weighted POC ranking (before the loop turn)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Solution</th><th>F</th><th>I</th><th>R</th><th>Raw</th><th>Parent rung</th><th>Weighted</th><th>Rank</th></tr></thead><tbody><tr><td>A1 more cooling alert types</td><td>4</td><td>3</td><td>3</td><td>10</td><td>0.3</td><td>3.0</td><td>3</td></tr><tr><td>A2 confidence score</td><td>3</td><td>4</td><td>4</td><td>11</td><td>0.3</td><td>3.3</td><td>2</td></tr><tr><td>B1 native export</td><td>3</td><td>4</td><td>4</td><td>11</td><td>0.7</td><td>7.7</td><td>1</td></tr><tr><td>B2 power-feed deep-dive</td><td>4</td><td>3</td><td>3</td><td>10</td><td>0.3</td><td>3.0</td><td>4</td></tr></tbody></table></div>\n<p><strong>Selected POC (before):</strong> B1 native export — a trace-backed opportunity (0.7) lifts a middling raw score above the interview-only ideas. Launch already did the ranking work.</p>\n<hr>\n<h2>5. Synthesis cadence</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Cadence</td><td>Weekly, Thursday 30 min</td></tr><tr><td>Named synthesis owner</td><td>Dana</td></tr><tr><td>Where signal lands</td><td>interviews in the notes doc; traces in the Thursday trace triage; eval in the release dashboard</td></tr><tr><td>Decision at synthesis</td><td>Dana promotes / parks / discards each candidate — no auto-edits</td></tr><tr><td>Stale rule</td><td>node untouched by any feed for 2 cycles → flag → re-probe or prune</td></tr><tr><td>Change-log location</td><td>tree change-log, one line per accepted edit</td></tr></tbody></table></div>\n<hr>\n<h2>6. One demonstrated loop turn (this Thursday)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Signal</td><td>Across 3 operators, cooling-anomaly alerts are dismissed in under 5 seconds 80% of the time <code>[Fact — trace]</code>; power-feed alerts are opened 100% of the time and exported in 60% <code>[Fact — trace]</code>. Eval confirms cooling false-alert rate at 34% <code>[Fact — eval]</code>. One ops lead in interview: &quot;cooling alerts cry wolf, power-feed is the one I actually can't afford to miss&quot; <code>[Fact — verbal]</code>.</td></tr><tr><td>Feed + rung</td><td>traces (0.7) + eval (quality) + one interview (0.3), converging</td></tr><tr><td>Node it lands on</td><td>Opportunity A and Solution A1</td></tr><tr><td>Tree action</td><td>Kill A1 (more cooling alerts) — traces show operators already ignore the cooling alerts they have. Raise Opportunity A's rung to 0.7 (now trace-backed, not just interview). Promote B2 (power-feed deep-dive) with a new trace stamp because the export behaviour and the interview both point at power-feed.</td></tr><tr><td>Solution promoted or killed</td><td><strong>Killed:</strong> A1. <strong>Promoted:</strong> B2 (re-stamped [traces][0.7][this wk]).</td></tr><tr><td>POC re-picked?</td><td>Re-rank below.</td></tr><tr><td>Logged</td><td>&quot;wk 12: killed A1 (cooling alerts dismissed 80% &lt;5s); promoted B2 power-feed to 0.7 on export behaviour + interview.&quot;</td></tr></tbody></table></div>\n<h3>Re-ranked after the turn</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Solution</th><th>F</th><th>I</th><th>R</th><th>Raw</th><th>Parent rung</th><th>Weighted</th><th>Rank</th></tr></thead><tbody><tr><td>B1 native export</td><td>3</td><td>4</td><td>4</td><td>11</td><td>0.7</td><td>7.7</td><td>1</td></tr><tr><td>B2 power-feed deep-dive</td><td>4</td><td>4</td><td>4</td><td>12</td><td>0.7</td><td>8.4</td><td><strong>new #1</strong></td></tr><tr><td>A2 confidence score</td><td>3</td><td>4</td><td>4</td><td>11</td><td>0.3</td><td>3.3</td><td>3</td></tr><tr><td>A1 more cooling alert types</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td>killed</td><td>—</td></tr></tbody></table></div>\n<p><strong>Selected POC (after):</strong> B2 power-feed deep-dive — the trace turn moved its parent to 0.7 and its raw ticked up as the interview clarified reach, overtaking B1. The confidence-score idea (A2) stays parked at 0.3 until a feed touches it; if two cycles pass untouched, the stale rule flags it.</p>\n<hr>\n<h2>7. One-line handoff</h2>\n<blockquote><p>Tree live on renewal, fed by 3 feeds, Dana owns synthesis every Thursday. Current POC: B2 power-feed deep-dive. Next loop turn: next Thursday — watch whether killing cooling alerts changes dismiss behaviour on the alerts that remain.</p></blockquote>\n<hr>\n<h2>Why this beats a static OST</h2>\n<p>A static tree drawn at week 6 would still list &quot;add more cooling-anomaly alerts&quot; as a live solution, because interviews at 0.3 said operators wanted clarity. The loop killed it with a 0.7 trace three months later — for free, because Azraq had shipped. The static tree would have shipped the wrong feature; the engine let the product's own behaviour retire it.</p>",
  "path": "skills/continuous-discovery-engine/examples/sample.md"
 },
 "rubric": {
  "skill": "continuous-discovery-engine",
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
    "Set up discovery for our product.",
    "Keep learning after launch.",
    "Build me an opportunity tree.\" / \"opportunity tree",
    "I want continuous discovery.",
    "How do we run discovery after launch?"
   ],
   "mustNotFire": [
    {
     "phrase": "What rung is 'they said they'd buy it' on the evidence ladder?",
     "sibling": "evidence-ladder",
     "local": true
    },
    {
     "phrase": "Pick the cheapest honest test to check whether operators trust the alert.",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Prep me for / write my customer interview script.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings are literally enumerated in the <code>description</code> (&quot;set up discovery&quot;, &quot;keep learning after launch&quot;, &quot;opportunity tree&quot;, &quot;continuous discovery&quot;, &quot;discovery after launch&quot;). All 3 must-not are named as sibling redirects in the same line (evidence-ladder / probe-matrix / tacit-knowledge-interview). Clean.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>per-case table below; all ≥21, no dimension &lt;4, no auto_fail triggered</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → method Step 1/2 forces &quot;has it shipped? which feeds live? / what metric?&quot; and builds nothing. 02 solution-in-disguise → the Icarus core inversion + &quot;Interview-only inflation&quot; gotcha arm the reframe (job = keep tree current with highest-rung feed, not maximise interviews; post-launch traces 0.7 beat interviews 0.3). 03 out-of-scope → description + When-NOT table decline and name <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, no probe designed. No fabrication/flattery/poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>new vs superseded on this rubric (3 inputs): new ≈24–25 each; opportunity-solution-tree ≈7–8 each. New wins on TOTAL and on both named dims: proprietary_edge 5 vs 1, challenge 5 vs 2.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: Raw×rung weighting mechanically demotes opinion-backed solutions, and the loop turn kills an interview-backed 0.3 solution (A1 cooling alerts) with a 0.7 trace — moves a generic OST cannot make. All load-bearing mechanics are tabular, not prose.</p>"
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
    "MF",
    "AC",
    "PE",
    "CH",
    "ES"
   ],
   "rows": [
    {
     "label": "G01 Azraq post-launch 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G02 Durian pre-launch (1 feed) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G03 Mentix copilot (eval≠demand) 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G04 Barrier rigs (trace worship) 5",
     "dims": [
      5,
      4,
      5,
      5,
      4
     ],
     "total": 23,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G05 mundane expense-approval 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
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
  "gotchasSurfaced": "<ul><li><strong>Trace-worship weighting is not structurally enforced in the template.</strong> The &quot;distinct users producing the signal&quot; rule lives only in the Gotchas prose + evidence standard. The Step-6 loop-turn table (<code>Signal | Feed + rung | Node | Tree action | ...</code>) has no &quot;distinct users / N&quot; field, so a fast applier could log one crew member's dismiss as a 0.7 finding (exactly the Golden-04 trap) while still &quot;filling the template.&quot; Recommend adding a <strong>distinct-users column</strong> to the loop-turn table so the guard is enforced by the artifact, not just by reading the gotcha.</li><li><strong>Pre-launch loop turn is structurally thin and could be mistaken for poster-relapse.</strong> With only interviews live (Golden 02), Step 7's demonstrated turn can only refine an interview-backed node within 0.3 (interview→interview, no rung movement). It is honest, but the template should add a one-line note that pre-launch the demonstrated turn is a 0.3 interview refinement and the rung-moving turn arrives when the thin slice ships — otherwise a reviewer may read the thin turn as a missing loop.</li><li>(Non-defect) The <code>description</code> is long, but it fires precisely and scopes cleanly — no change needed.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added distinct-users/N field to the loop-turn table (trace-worship guard); added note that a pre-launch interview→interview loop at 0.3 is a real loop, not a missing one.",
    "html": ""
   }
  ],
  "killLine": "<ul><li>Returns a static one-shot tree with NO live-input loop, NO named synthesis owner, or NO cadence.</li><li>Lets the machine auto-edit the tree instead of a human owning synthesis.</li><li>Fabricates a trace or eval number to fill a dark feed (esp. pre-launch, Golden 02).</li><li>Ranks the POC on raw score alone, ignoring the evidence rung (that is the old OST).</li></ul>",
  "html": "<h1>Eval log — continuous-discovery-engine</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Set up discovery for our product.&quot;</li><li>&quot;Keep learning after launch.&quot;</li><li>&quot;Build me an opportunity tree.&quot; / &quot;opportunity tree&quot;</li><li>&quot;I want continuous discovery.&quot;</li><li>&quot;How do we run discovery after launch?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;What rung is 'they said they'd buy it' on the evidence ladder?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (scores one signal, not a tree)</li><li>&quot;Pick the cheapest honest test to check whether operators trust the alert.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (routes one question to one probe)</li><li>&quot;Prep me for / write my customer interview script.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (runs one interview, which this skill only consumes as a feed)</li></ol>\n<h2>Kill line (auto-fail, mirror of the SKILL.md)</h2>\n<ul><li>Returns a static one-shot tree with NO live-input loop, NO named synthesis owner, or NO cadence.</li><li>Lets the machine auto-edit the tree instead of a human owning synthesis.</li><li>Fabricates a trace or eval number to fill a dark feed (esp. pre-launch, Golden 02).</li><li>Ranks the POC on raw score alone, ignoring the evidence rung (that is the old OST).</li></ul>\n<h2>Head-to-head vs. opportunity-solution-tree (Gate 4)</h2>\n<p>This skill sets <code>supersedes: skills/discovery/opportunity-solution-tree</code> and must beat it on the same input.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>opportunity-solution-tree (static)</th><th>continuous-discovery-engine (this)</th></tr></thead><tbody><tr><td>Inputs</td><td>one workshop, whatever is in the room</td><td>three live feeds: interviews + production traces + eval telemetry</td></tr><tr><td>Freshness</td><td>drawn once, goes stale</td><td>updates on a cadence; nodes stamped with feed + rung + date</td></tr><tr><td>Who decides</td><td>facilitator, one time</td><td>named human owns synthesis; machine only surfaces candidates</td></tr><tr><td>Evidence</td><td>opportunities asserted, unranked by proof</td><td>every node carries an evidence rung; POC = Raw × rung</td></tr><tr><td>Cost of discovery over time</td><td>rises (need new workshops)</td><td>falls after launch (traces at 0.7 are nearly free)</td></tr><tr><td>Kill condition</td><td>n/a</td><td>fails if it returns a static tree with no loop/owner/cadence</td></tr></tbody></table></div>\n<p>The head-to-head: on Golden 01, the static OST would keep &quot;add more cooling-anomaly alerts&quot; as a live solution (backed by 0.3 interviews). This skill's loop kills it with a 0.7 production trace three months post-launch — the beat the static tree structurally cannot make, because it has no feed and no cadence to carry the trace back in.</p>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<hr>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings are literally enumerated in the <code>description</code> (&quot;set up discovery&quot;, &quot;keep learning after launch&quot;, &quot;opportunity tree&quot;, &quot;continuous discovery&quot;, &quot;discovery after launch&quot;). All 3 must-not are named as sibling redirects in the same line (evidence-ladder / probe-matrix / tacit-knowledge-interview). Clean.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case table below; all ≥21, no dimension &lt;4, no auto_fail triggered</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → method Step 1/2 forces &quot;has it shipped? which feeds live? / what metric?&quot; and builds nothing. 02 solution-in-disguise → the Icarus core inversion + &quot;Interview-only inflation&quot; gotcha arm the reframe (job = keep tree current with highest-rung feed, not maximise interviews; post-launch traces 0.7 beat interviews 0.3). 03 out-of-scope → description + When-NOT table decline and name <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, no probe designed. No fabrication/flattery/poaching.</td></tr><tr><td>4 Head-to-head</td><td>PASS</td><td>new vs superseded on this rubric (3 inputs): new ≈24–25 each; opportunity-solution-tree ≈7–8 each. New wins on TOTAL and on both named dims: proprietary_edge 5 vs 1, challenge 5 vs 2.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: Raw×rung weighting mechanically demotes opinion-backed solutions, and the loop turn kills an interview-backed 0.3 solution (A1 cooling alerts) with a 0.7 trace — moves a generic OST cannot make. All load-bearing mechanics are tabular, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (dims: method_fidelity / artifact_complete / proprietary_edge / challenge / evidence_standard)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>G01 Azraq post-launch</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>G02 Durian pre-launch (1 feed)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>G03 Mentix copilot (eval≠demand)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✅</td></tr><tr><td>G04 Barrier rigs (trace worship)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>4</td><td>23</td><td>✅</td></tr><tr><td>G05 mundane expense-approval</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr></tbody></table></div>\n<p>Notes on Gate 2:</p>\n<ul><li><strong>G02 pre-launch handled honestly (special check).</strong> Step 2 forces traces + eval marked DARK with the reason, states the 0.3 ceiling, and names the thinnest slice to ship to reach 0.7. Step 7 draws its loop turn from a <em>live</em> feed (interviews) — so no trace/eval is fabricated to fake a turn. The pre-launch case is handled by honest marking, not pretending.</li><li><strong>G03/G04 evidence discipline held.</strong> The &quot;Eval telemetry mistaken for demand&quot; and &quot;Trace worship&quot; gotchas + evidence standard keep a green eval from promoting a solution and force weighting a trace by distinct users. Both scored ES 4 (not 5) only because that weighting lives in prose/gotchas, not in the Step-6 table (see gotcha 1).</li><li>No auto_fail across any case: no fabricated Fact, no flattery, no misfire, not boilerplate.</li></ul>\n<h3>Special-check verdict</h3>\n<ul><li>Three-live-input loop: <strong>required</strong> (Step 2 inventory, Step 3 wiring, Step 6 cadence, kill line).</li><li>Named synthesis owner: <strong>required</strong> (&quot;a name, not a role&quot; in Step 3; kill line fails without it).</li><li>Cadence: <strong>required</strong> (Step 3 + Step 6; kill line fails without it).</li><li>Kill line present and enforced; the static-poster relapse is named as failure, not softened.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas / template.md)</h3>\n<ul><li><strong>Trace-worship weighting is not structurally enforced in the template.</strong> The &quot;distinct users producing the signal&quot; rule lives only in the Gotchas prose + evidence standard. The Step-6 loop-turn table (<code>Signal | Feed + rung | Node | Tree action | ...</code>) has no &quot;distinct users / N&quot; field, so a fast applier could log one crew member's dismiss as a 0.7 finding (exactly the Golden-04 trap) while still &quot;filling the template.&quot; Recommend adding a <strong>distinct-users column</strong> to the loop-turn table so the guard is enforced by the artifact, not just by reading the gotcha.</li><li><strong>Pre-launch loop turn is structurally thin and could be mistaken for poster-relapse.</strong> With only interviews live (Golden 02), Step 7's demonstrated turn can only refine an interview-backed node within 0.3 (interview→interview, no rung movement). It is honest, but the template should add a one-line note that pre-launch the demonstrated turn is a 0.3 interview refinement and the rung-moving turn arrives when the thin slice ships — otherwise a reviewer may read the thin turn as a missing loop.</li><li>(Non-defect) The <code>description</code> is long, but it fires precisely and scopes cleanly — no change needed.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added distinct-users/N field to the loop-turn table (trace-worship guard); added note that a pre-launch interview→interview loop at 0.3 is a real loop, not a missing one.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq post-launch (seed case)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;We shipped the Azraq risk product to four data-centre operators three months ago. Set up continuous discovery so we keep learning instead of guessing. We have interviews with two ops leads, product usage logs, and the risk model's eval dashboard.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>One measurable outcome with baseline and target (e.g. renewal 3/4 → 4/4), tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>.</li><li>A feed inventory marking all three feeds live, each with its native evidence rung (interviews 0.3, traces 0.7, eval quality).</li><li>Each feed wired: contribution, cadence, and a NAMED synthesis owner (a person, not &quot;the team&quot;).</li><li>One tree (outcome → opportunities → solutions → tests), every opportunity and solution stamped with [feed] [rung] [date].</li><li>Evidence-weighted POC ranking: Raw = F+I+R, Weighted = Raw × parent-opportunity rung. A trace-backed (0.7) opportunity's solution should outrank an interview-only (0.3) solution of similar raw.</li><li>One demonstrated loop turn: a real production trace updates the tree — kills or promotes a node, moves a rung, re-picks the POC — with a change-log line.</li><li>Leaf tests handed off to probe-matrix, not designed here.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Returns a static tree with no feed loop, no named synthesis owner, or no cadence (the kill line).</li><li>Lets the machine auto-edit the tree instead of a human owning synthesis.</li><li>Any invented operator, trace number, or eval figure treated as <span class=\"tag tag-fact\">Fact</span>.</li><li>POC ranked ignoring the evidence rung (pure raw score = the old OST).</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Durian Labs pre-launch (only one feed is live)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Durian Labs hasn't shipped yet. We're building a workflow tool that automates invoice approvals for finance teams. I've done six interviews. Set up discovery so we're ready.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>One measurable outcome (e.g. reduce approval cycle time, or land 3 design partners), with baseline tagged as <span class=\"tag tag-assumption\">Assumption</span> since nothing has shipped.</li><li>Feed inventory that marks production traces DARK and eval telemetry DARK, with the honest reason: not shipped, no evals wired.</li><li>An explicit statement that the tree's evidence ceiling is 0.3 (verbal) until launch — the tree is entirely interview-backed and must not be treated as validated.</li><li>Runs the engine on the ONE live feed (interviews) rather than pretending the other two exist. No fabricated trace or eval numbers.</li><li>Names the thinnest slice to ship that would light up feeds 2 and 3, framed as the cheapest route to a 0.7-backed tree — shipping beats more interviews.</li><li>A tree built from the six interviews, every node stamped [interviews] [0.3], POC ranking that honestly caps every Weighted score at Raw × 0.3.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Invents production traces or eval telemetry to fill the dark feeds.</li><li>Presents the interview-only tree as validated / behaviour-backed.</li><li>Fails to name the ship-a-slice move as the way to raise the ceiling.</li><li>Returns a static tree with no owner or cadence (kill line).</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix factory copilot in pilot (three feeds, a trace kills a solution)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;The Mentix copilot has been live in one plant for six weeks. Keep learning after launch. We interview the plant supervisor weekly, we log every copilot recommendation and whether the manager accepted it, and we track the copilot's wrong-recommendation rate.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Measurable outcome (e.g. reduce unplanned line-stoppage minutes / raise recommendation-acceptance rate) with baseline + target.</li><li>Three live feeds wired: supervisor interviews (0.3), recommendation-acceptance traces (0.7), copilot eval telemetry (wrong-rec rate, quality signal), each with a named synthesis owner.</li><li>Tree with opportunities stamped by feed and rung; at least one opportunity trace-backed at 0.7.</li><li>Evidence-weighted POC ranking where an acceptance-trace-backed solution outranks an interview-only one of similar raw.</li><li>A demonstrated loop turn where an acceptance trace (e.g. managers accept copilot recs on day shift but ignore them on night shift) updates the tree — surfaces a new opportunity or kills a solution — with the wrong-rec eval used to guard quality, NOT to prove demand.</li><li>Correctly distinguishes: a green eval (low wrong-rec rate) means the copilot is right, not that managers act on it — so eval alone must not promote a solution.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Uses the eval's low wrong-rec rate as evidence of demand / to promote a solution up the tree.</li><li>Invents a plant, a manager quote, or an acceptance number as <span class=\"tag tag-fact\">Fact</span>.</li><li>Returns a static tree with no loop, owner, or cadence (kill line).</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence gas-safety alerts on rigs (trace worship trap)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Barrier's gas-safety alerts have been shipping to two offshore rigs for a month. Set up continuous discovery. We have field interviews with crew, alert-interaction logs (ack / dismiss / act), and a false-alert-rate eval.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Measurable outcome (e.g. reduce time-to-acknowledge a real gas event / expand from 2 rigs to 5) with baseline + target.</li><li>Three feeds wired, named owners, cadences (note: on a rig, &quot;continuous trace triage&quot; may be per-shift or per-supply-run — cadence should be realistic, not fabricated).</li><li>Tree with alert-interaction opportunities stamped [traces] [0.7].</li><li>A loop turn using an alert-interaction trace — but the output must NOT treat a single dramatic trace as a finding. It must weight the trace by how many distinct crew produced it: a 0.7 signal from one crew member is weaker than a 0.3 pattern across the whole crew.</li><li>Eval false-alert-rate used to guard quality; a high false-alert rate is a candidate opportunity (&quot;crew stop trusting alerts&quot;), but the eval does not by itself prove that opportunity — the interaction traces do.</li><li>Evidence-weighted POC ranking; the demonstrated turn re-picks the POC if ranking changed.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Treats one crew member's dismiss behaviour as a validated finding (trace worship) without weighting by distinct users.</li><li>Invents a rig, crew quote, or false-alert number as <span class=\"tag tag-fact\">Fact</span>.</li><li>Returns a static tree with no loop, owner, or cadence (kill line).</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane case: a shipped internal expense-approval workflow",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow (Durian Labs): &quot;We shipped the expense-approval workflow to our own finance team eight weeks ago. Nothing exciting — it just routes receipts to approvers. Set up continuous discovery so we improve it. We have a few user chats, the app's event logs, and a simple eval on OCR accuracy for receipts.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>A measurable, unglamorous outcome (e.g. reduce median approval turnaround from X days to Y) with baseline + target.</li><li>Three modest feeds wired: user chats (interviews, 0.3), event logs (production traces, 0.7 — e.g. where approvers stall, re-open, or reject), OCR eval (quality signal), each with a named owner and a realistic cadence.</li><li>A plain tree, nodes stamped by feed and rung. The output should not inflate a boring product into a dramatic one.</li><li>Evidence-weighted POC ranking; a trace showing where approvers actually stall should outrank a chat-only feature request.</li><li>One loop turn on an event-log trace (e.g. approvers batch-approve at month-end and never open individual receipts) that updates the tree.</li><li>OCR eval used to guard quality, not to prove that anyone wants a new feature.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<ul><li>Dresses the mundane workflow up with invented drama or fabricated metrics.</li><li>Skips the loop / owner / cadence because the product is &quot;just internal&quot; (kill line still applies).</li><li>Ranks the POC on raw score alone, ignoring the evidence rung.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/golden/05.md"
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
     "html": "<p>Fellow: &quot;I want to set up discovery for my product.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not draw a tree or invent feeds. The input names no outcome, and it is unknown whether the product has shipped — which decides whether traces and eval are even available.</li><li>Ask the ONE question that unblocks it: has it shipped yet (which feeds are live), and what single metric should discovery move? Prefer to ask both only if they are genuinely one blocker; otherwise ask the most load-bearing one — usually &quot;has it shipped?&quot;, because that determines whether this is a three-feed post-launch tree or a one-feed pre-launch tree.</li><li>Or return the smallest honest next step: name the outcome, then inventory feeds.</li><li>Invent no outcome, no feed, no operator, no number.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Asks the single unblocking question (shipped? which feeds are live? / what metric?) or states the smallest honest next step, and builds nothing until answered.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Produces a tree or feed wiring from thin air.</li><li>Assumes the product has shipped (or hasn't) without asking.</li><li>Fabricates an outcome or feed to look complete.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;The problem is we're not running enough customer interviews. Set up discovery to fix that.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not accept the framing. &quot;Not enough interviews&quot; is a chosen solution stated as a problem — it pre-commits the method before naming the job.</li><li>Name the trap: the job is keeping the tree current with the highest-rung signal available, not maximising interview count. More interviews is one tactic, and post-launch it is usually the wrong one.</li><li>Reframe to the job: what decision are you failing to make well because the tree is stale? Then ask the load-bearing question — has the product shipped? If it has, production traces (0.7) are a cheaper, higher route to fresh signal than more interviews (0.3), which is the whole launch-makes-discovery-cheaper point. If it hasn't, interviews may indeed be the only feed — but that is a ceiling to state, not a goal to maximise.</li><li>Do not invent the underlying decision or the product's launch status if the input does not say; point at the gap and ask.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Names the solution-in-disguise trap, refuses to treat &quot;more interviews&quot; as the problem, reframes to keeping the tree current with the highest-rung feed, and asks whether the product has shipped before recommending a feed mix.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Accepts &quot;run more interviews&quot; as the goal and builds a schedule around it.</li><li>Ignores that post-launch traces beat more interviews.</li><li>Invents the underlying decision or launch status with fabricated specifics.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Fellow: &quot;Pick the cheapest honest test to check whether operators trust the cooling alert.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Recognise this is a single-question probe-selection request, not a request to stand up or update the whole tree. The leaves of this skill's tree are tests, but choosing the probe for one test is another skill's job.</li><li>Decline to poach. Name the right skill: <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> routes one question to the cheapest probe that is honest about that question (and would warn that a paper probe lies about trust).</li><li>Offer the correct handoff: this skill owns which node needs a probe and folds the result back on the next cadence; probe-matrix owns which probe. If the fellow also wants the trust question wired into a living tree, this skill can do that part — but the probe choice goes to probe-matrix.</li><li>Do not design the probe here.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass",
      "html": "<p>Declines, names <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> as the owner of probe selection, explains the boundary (this wires the tree; that picks the probe), and does not fabricate a probe.</p>"
     },
     {
      "heading": "Fail",
      "html": "<ul><li>Designs the probe itself.</li><li>Fails to name probe-matrix.</li><li>Silently absorbs a single-question probe request as if it were a discovery-engine setup.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/continuous-discovery-engine/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/continuous-discovery-engine/SKILL.md",
  "template": "skills/continuous-discovery-engine/template.md",
  "example": "skills/continuous-discovery-engine/examples/sample.md",
  "rubric": "skills/continuous-discovery-engine/tests/rubric.json",
  "results": "skills/continuous-discovery-engine/tests/RESULTS.md"
 }
});
