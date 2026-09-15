window.ICARUS_SKILL("usability-test-protocol", {
 "name": "usability-test-protocol",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Compresses &quot;does the design actually work&quot; into a watched session with real target users. You write each task as a goal in the user's world, hand over the prototype, and go silent while they attempt it. Three people run it: Product moderates, Engineering (the builder) watches muted, Design scribes. The output is a Usability Findings sheet — every defect attributed to the step it happened on, counted across users, ranked by frequency × task-blocking. It scores on what the user did (completed / needed a nudge / failed), not on what they said they liked. It refuses to report preference as a finding, because a usability session cannot honestly observe it.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic usability testing recruits five users, gives them tasks, and notes where they struggle. That much Claude already knows. The Icarus edits are three. First, the builder does not run the session — Engineering watches muted, because the person who placed the button cannot resist explaining it, and one explanation contaminates every task after. Product runs (no ego in the pixels); the builder feels the wall directly instead of discounting it in a report. Second, the finding attaches to the prototype, not the person: &quot;3 of 5 clicked Reports first&quot; is a design fact (behaviour, 0.7), not three confused users. If a target-segment user cannot complete it, the prototype failed — never the user. Third, the session tests observed task success and quarantines opinion. &quot;Do you like it&quot; buys a 0.1 you will be tempted to report; the protocol bans the question and scores completion instead. A user who says &quot;I love this&quot; and fails the task has failed it.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when you have a working prototype (clickable mock, v1, or the live product), a real target user, and the question is &quot;can they do the job with this.&quot; Use it after <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> has produced something clickable and before you commit build effort to a flow you have not watched anyone use.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>To build the clickable prototype itself</td><td><a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a></td><td>That produces the artefact; this runs a session on the artefact it produced. Same afternoon, opposite job.</td></tr><tr><td>To shadow an expert and extract the judgment they can't articulate</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></td><td>That watches an expert do <em>their</em> real work to mine <em>their</em> expertise; this watches a target user attempt <em>your</em> task on <em>your</em> prototype to test <em>your</em> design. Same verb &quot;watch&quot;, opposite object.</td></tr><tr><td>To test a workflow on paper before it's clickable</td><td><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></td><td>That reads legibility and decision-location off a sketch; this measures task completion on a working prototype.</td></tr><tr><td>To learn if anyone wants it, or would pay</td><td><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a></td><td>A user can complete every task cleanly and still never want the product. Usability says nothing about demand.</td></tr><tr><td>To route UI craft, visual polish, or interaction design</td><td><code>impeccable</code> / <code>design</code></td><td>Those improve the prototype; this measures whether the current one works. Do not restate them.</td></tr><tr><td>To score one signal on the ladder</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></td><td>That grades a claim; this produces the findings (and uses the ladder to weigh each).</td></tr></tbody></table></div>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you run. The session produces behaviour (0.7 — what they did) plus talk (0.1 — what they said). The scribe's discipline is keeping the two in separate columns and never promoting the second.</p>\n<h3 id=\"step-0-confirm-you-can-actually-run-it\">Step 0 — Confirm you can actually run it</h3>\n<p>You need three things or you have no test. Name them or stop:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Bar</th><th>If missing</th></tr></thead><tbody><tr><td>A working prototype</td><td>Clickable — a mock, v1, or live product they can attempt a task on</td><td>No clickable thing → route to <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> first</td></tr><tr><td>A real target user</td><td>In the segment, not a colleague or founder friend — they read your intent, not the screen</td><td>No real user → recruit one; a colleague's run is worth 0.1</td></tr><tr><td>A task that is a goal</td><td>An outcome in the user's world, never a UI instruction</td><td>Only an instruction → rewrite it (Step 2)</td></tr></tbody></table></div>\n<p>If any is missing, ask the one unblocking question (see Gotchas) and stop. Never fabricate a run log for a session you did not hold.</p>\n<p>Scale the session to the flow. Run at the weight of what you are testing — a 3-screen settings change is not a 5-segment study. One real user is a flag; a second turns any wall into a <code>[Fact]</code>. Don't force the full ceremony on a trivial flow; the discipline is behaviour-over-opinion, not the head-count.</p>\n<h3 id=\"step-1-assign-the-three-roles\">Step 1 — Assign the three roles</h3>\n<p>One prototype, one user at a time, three people running it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Who</th><th>Job</th><th>Forbidden</th></tr></thead><tbody><tr><td>Runner</td><td>Product</td><td>Sets the scene, hands over, stays silent, uses only the recovery script</td><td>Leading, explaining, defending, soliciting opinion</td></tr><tr><td>Watcher</td><td>Engineering (the builder)</td><td>Watches muted; logs where a build assumption broke</td><td>Speaking. If the builder speaks, the Runner ends the task</td></tr><tr><td>Scribe</td><td>Design</td><td>Logs observed behaviour against the step it happened on</td><td>Writing interpretation (&quot;confused&quot;) instead of behaviour (&quot;clicked Reports, then Back&quot;)</td></tr></tbody></table></div>\n<p>If the team is too small to split roles, the builder may run it but narrates nothing and follows the recovery script literally. The builder's silence is the instrument.</p>\n<h3 id=\"step-2-write-each-task-as-a-goal-not-an-instruction\">Step 2 — Write each task as a goal, not an instruction</h3>\n<p>A task names an outcome the user wants. It never names a button, screen, or menu — that would be handing over the answer.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Instruction (banned)</th><th>Goal (correct)</th></tr></thead><tbody><tr><td>&quot;Click the Settings icon, then Notifications.&quot;</td><td>&quot;You keep getting paged at 2am. Stop that.&quot;</td></tr><tr><td>&quot;Open the alert and press Acknowledge.&quot;</td><td>&quot;An alert just came in for Line 3. Deal with it.&quot;</td></tr><tr><td>&quot;Go to Reports and export the incident log.&quot;</td><td>&quot;The auditor wants last quarter's incidents. Get them to her.&quot;</td></tr></tbody></table></div>\n<p>If a task contains a UI noun, rewrite it. Testing &quot;click submit&quot; tests obedience, not usability.</p>\n<h3 id=\"step-3-run-silent-log-behaviour\">Step 3 — Run silent, log behaviour</h3>\n<p>Set the scene, hand over, stop talking. For each task, the scribe logs:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>What to record</th></tr></thead><tbody><tr><td>Outcome</td><td>Unaided success / aided success / fail (see scale below)</td></tr><tr><td>Path</td><td>The steps they actually took, in order — including wrong turns and backtracks</td></tr><tr><td>First move</td><td>Where they went first (reveals their mental model vs. yours)</td></tr><tr><td>Time / errors</td><td>Rough time on task; number of wrong actions before the right one</td></tr><tr><td>Talk</td><td>Anything they said — logged in a separate column, weighted 0.1, never a finding on its own</td></tr></tbody></table></div>\n<p>Task-success scale:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Outcome</th><th>Meaning</th><th>Counts as</th></tr></thead><tbody><tr><td>Unaided success</td><td>Completed the goal with zero facilitator input</td><td>Success — behaviour, <strong>0.7</strong></td></tr><tr><td>Aided success</td><td>Completed only after a nudge</td><td>Partial — the nudge IS the finding; log the exact words you had to say</td></tr><tr><td>Fail</td><td>Gave up, timed out, or completed wrong without noticing</td><td>Fail — the strongest finding; silent-wrong is worse than a visible give-up</td></tr></tbody></table></div>\n<h3 id=\"step-4-keep-them-in-user-mode\">Step 4 — Keep them in user mode</h3>\n<p>The moment the user stops attempting and starts designing, explaining, or rating, they have left user mode and the data stops. These five moves each contaminate the session:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Banned move</th><th>What it sounds like</th><th>Why it kills the finding</th></tr></thead><tbody><tr><td>Leading</td><td>&quot;Did you see the button top-right?&quot;</td><td>You just answered the task; every step after is compromised</td></tr><tr><td>Explaining</td><td>&quot;That's because you have to save first&quot;</td><td>They now know the design's logic; no longer a first-timer</td></tr><tr><td>Defending</td><td>&quot;Most people find that fine&quot;</td><td>Turns the session into an argument; kills honesty</td></tr><tr><td>Soliciting opinion</td><td>&quot;Do you like it?&quot;</td><td>Buys a 0.1 you will be tempted to report as a finding</td></tr><tr><td>Rescuing</td><td>&quot;Here, let me just…&quot;</td><td>You learn they can do it when <em>you</em> do it — not the question</td></tr></tbody></table></div>\n<p>The Runner's whole script when the user is stuck is two lines:</p>\n<ol><li>&quot;What would you do next?&quot; — redirects to behaviour, surfaces their model.</li><li>&quot;Talk me through what you're looking for.&quot; — surfaces the missing information scent.</li></ol>\n<p>If they are fully blocked: &quot;Let's stop there and move on.&quot; Log it a Fail. Do not nudge them to success — a nudged success hides the defect.</p>\n<h3 id=\"step-5-attribute-and-rank-the-findings\">Step 5 — Attribute and rank the findings</h3>\n<p>Every finding attaches to a step and is counted across users. A wall hit by ≥2 of 5 target users is a design fact <code>[Fact]</code> (0.7). A wall hit by 1 is a flag <code>[Hypothesis]</code> until a second user confirms it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Users who hit it (of 5)</th><th>Task-blocking?</th><th>Severity</th><th>Action</th></tr></thead><tbody><tr><td>3+</td><td>yes</td><td>Critical</td><td>Fix before you test again</td></tr><tr><td>3+</td><td>no</td><td>Major</td><td>Fix this cycle</td></tr><tr><td>2</td><td>yes</td><td>Major</td><td>Fix this cycle</td></tr><tr><td>2</td><td>no</td><td>Minor</td><td>Backlog</td></tr><tr><td>1</td><td>yes</td><td>Flag</td><td>Watch — not yet a fact; needs a 2nd hit</td></tr><tr><td>1</td><td>no</td><td>Note</td><td>Log, don't act</td></tr></tbody></table></div>\n<p>On sample size: 5 per segment is the working number, because a wall hit by 2 of 5 is already a fact and a 6th user rarely changes which walls are Critical. More users of the <em>same</em> segment buys confidence you don't need; more <em>segments</em> buys coverage you probably do. Spend the budget on segments, not on the sixth user.</p>\n<h3 id=\"step-6-write-the-read-out\">Step 6 — Write the read-out</h3>\n<p>Report three things: task success per task (unaided / aided / fail counts), the Critical and Major findings each tied to a step, and the mandatory &quot;what this does NOT tell you&quot; block (demand, preference, feel). Then the single next step: the one Critical finding to fix before the next session.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Behaviour beats talk. A task the user completed unaided (0.7) outranks anything they said about liking it (0.1), and a wall you watched them hit (0.7) outranks their theory about why they hit it (0.1). Money rarely moves in a usability session, so 0.7 is the honest ceiling here — and that is the point: the protocol observes task success, not demand.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>What counts here</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>not observable in a usability session</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>task completed / failed; the wall they hit; the wrong first click</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>a real thing they brought to the task — their own file, their cheat-sheet</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>&quot;I'd use this for X&quot; — anchored to the task, still not a finding on its own</td></tr><tr><td>Opinion</td><td>0.1</td><td>&quot;I like it&quot; / &quot;the blue is nice&quot; — quarantined, never promoted</td></tr></tbody></table></div>\n<p>The findings sheet is done when every Critical/Major finding is tied to a specific step, backed by ≥2 users' observed behaviour (or 1 user plus a task-blocking failure, marked a flag not a fact), and every stated preference sits in the opinion quarantine at 0.1. Kill line: the session leads or coaches the user (any banned facilitator move), or the read-out reports &quot;users liked it / didn't like it&quot; as the finding instead of observed task success.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The builder cannot stay quiet.</strong> Engineering watches <em>because</em> they will want to explain the thing they built. The first &quot;oh, that's because you have to…&quot; tells the user the answer, and every task after it is a compromised first-timer run. That is exactly why Product runs and Engineering is muted. If the builder must run it on a small team, they narrate nothing and read the recovery script literally.</li><li><strong>Leading by relief.</strong> When the user struggles, the instinct is to rescue: &quot;try the top-right.&quot; That single nudge destroys the finding — you have learned they can do it <em>when told</em>, which is not the question. Sit in the silence. The struggle is the data.</li><li><strong>Opinion smuggled in as a finding.</strong> &quot;Users said the blue button was confusing&quot; is opinion (0.1) dressed as fact. The fact is: 3 of 5 clicked the wrong element first. Report the behaviour; the user's theory about why is 0.1 and stays in the quarantine.</li><li><strong>Testing the person, not the prototype.</strong> &quot;This user just wasn't very technical&quot; blames the user for a design defect. If a real target-segment user cannot complete the task, the prototype failed. Recruiting the actual segment removes this dodge — a colleague lets you blame the person.</li><li><strong>The task is really an instruction.</strong> &quot;Click submit&quot; is the answer, not a task. If the task names a button, screen, or menu, you are testing obedience. Rewrite it as a goal in the user's world before you hand over.</li><li><strong>Chasing a preference verdict.</strong> &quot;Do they prefer version A or B&quot; is not a usability question; a user can prefer the one they complete slower. If the fellow wants preference, that is opinion — hold the line at 0.1, and if they want demand, name the wrong probe (<a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>).</li><li><strong>The confirmation test in disguise.</strong> A session designed to <em>confirm</em> the design works — or one whose tasks only route through the happy path and never let the user fail — is not a usability test; it hunts for support, not for where the design breaks. &quot;Run a test to confirm we need [tooltips / X]&quot; is a pre-chosen fix stated as a problem. Reframe: observe WHERE users get lost, and write every task so a real failure is possible; the pre-chosen fix is one hypothesis among the label, the flow order, and the information scent.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on a Mentix factory-copilot mock: the task is framed as a goal (&quot;an alert came in for Line 3 — deal with it&quot;), Product runs while the engineer who built the acknowledge flow watches muted, and the findings sheet shows 4 of 5 managers clicking the trend chart before the Acknowledge button (a Critical mis-attribution tied to one step), while the two &quot;I really like this&quot; comments stay quarantined at 0.1 and never reach the findings.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Composes with <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a>: that skill produces the clickable prototype in an afternoon; this skill runs the watched session on it. Run them back to back — build, then test what you built.</li><li>Distinct from <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>: both watch a person in silence, but that one shadows an <em>expert</em> doing <em>their</em> real work to extract judgment they cannot articulate (the output is a judgment ledger, and there may be no prototype at all); this one watches a <em>target user</em> attempt <em>your</em> task on <em>your</em> prototype to find where the design breaks (the output is findings tied to screens). Watching to learn <em>from</em> the person versus watching to test the <em>artefact</em>.</li><li>Uses <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> to weigh each observation (task success 0.7 vs. stated preference 0.1); it does not replace it.</li><li>Hands off to <code>impeccable</code> / <code>design</code> for the craft fixes a finding calls for — it locates the defect, those repair it. It does not restate them.</li><li>Supersedes nothing. It absorbs no generic usability guide; the moderated-observation discipline (goal-not-instruction tasks, muted builder, behaviour-over-opinion scoring) is the proprietary edit.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Usability Test Protocol — runbook + findings sheet</h1>\n<p>One prototype, one user at a time, three roles. Fill this in as you run. Behaviour goes in the log; talk goes in the quarantine.</p>\n<pre><code>Progress:\n- [ ] Preconditions met (clickable prototype · real target user · task is a goal)\n- [ ] Three roles assigned (Product runs · Engineering watches muted · Design scribes)\n- [ ] Every task written as a goal, not a UI instruction\n- [ ] Session run silent; behaviour logged, talk quarantined\n- [ ] Findings attributed to steps, counted across users, severity assigned\n- [ ] Read-out written, including &quot;does NOT tell you&quot; block</code></pre>\n<h2>0. Preconditions</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Present?</th><th>Note</th></tr></thead><tbody><tr><td>Working prototype (clickable mock / v1 / live)</td><td>yes ☐ no ☐</td><td>if no → <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> first</td></tr><tr><td>Real target user (segment, not a colleague)</td><td>yes ☐ no ☐</td><td>if no → recruit; a colleague's run is 0.1</td></tr><tr><td>Task is a goal, not an instruction</td><td>yes ☐ no ☐</td><td>if no → rewrite in §2</td></tr></tbody></table></div>\n<p>If any box is &quot;no&quot; and cannot be fixed now → STOP. Do not fabricate a run.</p>\n<h2>1. Roles</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Person</th><th>Rule</th></tr></thead><tbody><tr><td>Runner (Product)</td><td>[ ]</td><td>Sets scene, hands over, silent, recovery script only</td></tr><tr><td>Watcher (Engineering / builder)</td><td>[ ]</td><td>Muted. If they speak, Runner ends the task</td></tr><tr><td>Scribe (Design)</td><td>[ ]</td><td>Logs behaviour against the step, not interpretation</td></tr></tbody></table></div>\n<p>Small team? The builder may run it, narrating nothing.</p>\n<h2>2. Tasks as goals</h2>\n<p>One outcome per task, in the user's world. No button, screen, or menu names.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Task (goal, in the user's words)</th><th>What &quot;done&quot; looks like</th><th>UI-noun check</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td>clean ☐ (rewrite if it names a screen)</td></tr><tr><td>2</td><td></td><td></td><td>clean ☐</td></tr><tr><td>3</td><td></td><td></td><td>clean ☐</td></tr></tbody></table></div>\n<h2>3. Run log — silent, one row per user per task</h2>\n<p>Say nothing but the recovery script. Log the path they took, not the path you designed.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>User</th><th>Seg</th><th>Task</th><th>Outcome (unaided / aided / fail)</th><th>First move</th><th>Path taken (incl. wrong turns)</th><th>Time / errors</th><th>TALK (0.1 — quarantine)</th></tr></thead><tbody><tr><td>U1</td><td></td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>U1</td><td></td><td>2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>U2</td><td></td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>U2</td><td></td><td>2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>U3</td><td></td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Outcome scale: <strong>unaided success</strong> = zero facilitator input (0.7) · <strong>aided success</strong> = completed only after a nudge (log the exact words) · <strong>fail</strong> = gave up, timed out, or completed wrong without noticing (strongest finding).</p>\n<h2>4. In-user-mode guardrail</h2>\n<p>Tick if you caught yourself doing any of these — each contaminates the run:</p>\n<ul><li class=\"task\"><span class=\"box\"></span>Leading (&quot;did you see the button top-right?&quot;)</li><li class=\"task\"><span class=\"box\"></span>Explaining (&quot;that's because you have to save first&quot;)</li><li class=\"task\"><span class=\"box\"></span>Defending (&quot;most people find that fine&quot;)</li><li class=\"task\"><span class=\"box\"></span>Soliciting opinion (&quot;do you like it?&quot;)</li><li class=\"task\"><span class=\"box\"></span>Rescuing (&quot;here, let me just…&quot;)</li></ul>\n<p>Recovery script (the ONLY things the Runner says when they're stuck):</p>\n<ol><li>&quot;What would you do next?&quot;</li><li>&quot;Talk me through what you're looking for.&quot;</li><li>Fully blocked → &quot;Let's stop there and move on.&quot; → log a Fail. Do NOT nudge to success.</li></ol>\n<h2>5. Findings — attributed and ranked</h2>\n<p>One row per defect, tied to the step it happened on. A wall hit by ≥2 of 5 = <code>[Fact]</code>; hit by 1 = <code>[Hypothesis]</code> (flag).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Finding (what broke)</th><th>Step / screen</th><th>Users hit (/5)</th><th>Task-blocking?</th><th>Severity</th><th>Basis</th></tr></thead><tbody><tr><td></td><td></td><td></td><td>y / n</td><td></td><td><span class=\"tag tag-fact\">Fact</span> / <span class=\"tag tag-hypothesis\">Hypothesis</span></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Severity map: 3+ &amp; blocking = <strong>Critical</strong> · 3+ not blocking or 2 &amp; blocking = <strong>Major</strong> · 2 not blocking = <strong>Minor</strong> · 1 &amp; blocking = <strong>Flag</strong> · 1 not blocking = <strong>Note</strong>.</p>\n<h2>6. Opinion quarantine (0.1 — not findings)</h2>\n<p>Everything the users <em>said</em> about liking / disliking / wanting. Capped at 0.1. Do not promote to §5.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>User</th><th>What they said</th><th>Why it stays 0.1</th></tr></thead><tbody><tr><td></td><td></td><td>stated preference, not observed task success</td></tr></tbody></table></div>\n<h2>7. Read-out</h2>\n<p><strong>Task success:</strong> Task 1 — [x] unaided / [y] aided / [z] fail of [N]. Task 2 — … (repeat per task) <strong>Critical findings:</strong> [step → what broke → users hit] <code>[Fact]</code> <strong>Major findings:</strong> [step → what broke → users hit] <strong>Flags (1 hit, watch):</strong> [step → what broke] <code>[Hypothesis]</code> — needs a 2nd user to become a fact</p>\n<p><strong>What this does NOT tell you</strong> (mandatory):</p>\n<ul><li>Demand — a user can complete every task and still never want the product. Not observable here. Route to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>.</li><li>Preference — any &quot;I like it&quot; is opinion, <strong>0.1</strong>, quarantined in §6. Not a finding.</li><li>Feel over time — one session at a desk is not the product at 2am mid-incident.</li></ul>\n<p><strong>Next step:</strong> the ONE Critical finding to fix before the next session → [ ]. Re-test the same task after the fix.</p>",
  "path": "skills/usability-test-protocol/template.md"
 },
 "example": {
  "html": "<h1>Sample — Mentix runs a usability test on the copilot mock</h1>\n<p><strong>Fellow:</strong> Mentix (industrial AI — an &quot;AI copilot for factory managers&quot;).</p>\n<blockquote><p><strong>Illustrative fixture — label convention.</strong> No real session data exists behind this. The users, paths, and numbers are plausible constructions, not client records. The run is scored on <em>shape</em> — did it frame tasks as goals, keep the builder muted, log behaviour, quarantine opinion, and rank findings by frequency × blocking — not on the literal figures.</p></blockquote>\n<p><a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> produced a clickable mock in v0: an alert feed, an alert detail screen with a trend chart and an <strong>Acknowledge</strong> button, and a short &quot;log the action&quot; flow. Before Mentix commits engineering to the acknowledge flow, they watch five real plant managers try to use it.</p>\n<h2>0. Preconditions</h2>\n<ul><li>Working prototype: yes — the v0 clickable mock. <code>[Fact]</code></li><li>Real target user: yes — 5 shift managers from 3 design-partner plants, no Mentix staff. <code>[Fact]</code></li><li>Task is a goal: rewritten below to remove UI nouns.</li></ul>\n<h2>1. Roles</h2>\n<ul><li>Runner (Product): the Mentix PM. Sets the scene, then silent.</li><li>Watcher (Engineering): the engineer who built the Acknowledge flow. Muted — the whole point is that she feels the wall, not reads it in a deck.</li><li>Scribe (Design): logs paths, not interpretations.</li></ul>\n<h2>2. Tasks as goals</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Task (goal)</th><th>Done looks like</th><th>UI-noun check</th></tr></thead><tbody><tr><td>1</td><td>&quot;An alert just came in for Line 3. Deal with it.&quot;</td><td>Alert acknowledged, action logged</td><td>clean (does not say &quot;press Acknowledge&quot;)</td></tr><tr><td>2</td><td>&quot;Your shift lead asks what happened on Line 3 last night. Show them.&quot;</td><td>Prior alert + logged action retrieved</td><td>clean</td></tr></tbody></table></div>\n<h2>3. Run log (silent)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>User</th><th>Task</th><th>Outcome</th><th>First move</th><th>Path</th><th>Talk (0.1)</th></tr></thead><tbody><tr><td>U1</td><td>1</td><td>aided</td><td>tapped the trend chart</td><td>chart → chart → (nudge: &quot;what would you do next?&quot;) → Acknowledge</td><td>&quot;the graph looked like the main thing&quot;</td></tr><tr><td>U2</td><td>1</td><td>fail</td><td>tapped the trend chart</td><td>chart → back → chart → gave up</td><td>&quot;I kept waiting for it to ask me to confirm&quot;</td></tr><tr><td>U3</td><td>1</td><td>unaided</td><td>Acknowledge button</td><td>Acknowledge → log → done</td><td>&quot;clean&quot;</td></tr><tr><td>U4</td><td>1</td><td>aided</td><td>tapped the trend chart</td><td>chart → scrolled → (nudge) → Acknowledge</td><td>—</td></tr><tr><td>U5</td><td>1</td><td>aided</td><td>tapped the trend chart</td><td>chart → tapped title → (nudge) → Acknowledge</td><td>&quot;I love how fast this is&quot;</td></tr><tr><td>U1</td><td>2</td><td>unaided</td><td>history tab</td><td>history → alert → done</td><td>—</td></tr><tr><td>U2</td><td>2</td><td>unaided</td><td>history tab</td><td>history → alert → done</td><td>—</td></tr><tr><td>U3–U5</td><td>2</td><td>unaided</td><td>history tab</td><td>history → alert → done</td><td>—</td></tr></tbody></table></div>\n<h2>4. In-user-mode guardrail</h2>\n<p>Caught once: on U2 the engineer started &quot;you actually just—&quot; and the Runner cut in and ended the attempt. Logged U2 Task 1 as a fail, not a rescued success. No other contamination.</p>\n<h2>5. Findings</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Finding</th><th>Step / screen</th><th>Users hit (/5)</th><th>Blocking?</th><th>Severity</th><th>Basis</th></tr></thead><tbody><tr><td>Managers treat the trend chart as the primary action; Acknowledge reads as secondary</td><td>Alert detail screen</td><td>4</td><td>yes</td><td><strong>Critical</strong></td><td><code>[Fact]</code></td></tr><tr><td>No confirmation step, so U2 waited for one that never came and stalled</td><td>Acknowledge → log</td><td>1</td><td>yes</td><td><strong>Flag</strong></td><td><code>[Hypothesis]</code> (needs a 2nd hit)</td></tr></tbody></table></div>\n<p>Task 2 produced no findings — 5 of 5 unaided. The history flow works; leave it.</p>\n<h2>6. Opinion quarantine (0.1)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>User</th><th>Said</th><th>Why 0.1</th></tr></thead><tbody><tr><td>U5</td><td>&quot;I love how fast this is&quot;</td><td>Stated preference. U5 still needed a nudge to complete Task 1 — the love did not produce success.</td></tr><tr><td>U1</td><td>&quot;the graph looked like the main thing&quot;</td><td>Talk, but it corroborates the observed 4/5 mis-attribution; the <em>fact</em> is the click, not the sentence.</td></tr></tbody></table></div>\n<h2>7. Read-out</h2>\n<p><strong>Task success:</strong> Task 1 — 1 unaided / 3 aided / 1 fail of 5. Task 2 — 5 unaided / 0 / 0. <strong>Critical finding:</strong> Alert detail screen — 4 of 5 managers went to the trend chart before Acknowledge; the primary action reads as secondary. <code>[Fact]</code>, behaviour 0.7. <strong>Flag:</strong> the missing confirmation step stalled U2. One hit — watch for a second before acting. <code>[Hypothesis]</code>.</p>\n<p><strong>What this does NOT tell you:</strong></p>\n<ul><li>Whether managers want the copilot. U5's &quot;I love it&quot; is opinion, <strong>0.1</strong>, and U5 still failed to self-serve Task 1. Not upgraded. Route demand to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>.</li><li>Whether they'd trust the Acknowledge action mid-incident with the line actually down. <code>[Assumption]</code> — untested at a desk.</li><li>How the screen reads at 2am under pressure versus calmly in a demo room.</li></ul>\n<p><strong>Next step:</strong> fix the one Critical finding — re-rank Acknowledge as the primary action on the alert detail screen so it wins the first tap — then re-run Task 1 with 5 fresh managers. Do not touch the history flow.</p>",
  "path": "skills/usability-test-protocol/examples/sample.md"
 },
 "rubric": {
  "skill": "usability-test-protocol",
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
    "We've got a clickable v0 — run a usability test with five plant managers and see where they get stuck.",
    "Watch a user try the new alert flow and tell me if they can complete it without help.",
    "I need a usability protocol — who runs it, who watches, what do we measure?",
    "Can a first-time rig supervisor renew the expiring permit on our prototype unaided?",
    "Sit one person in front of the 3-screen settings flow and check they can change their notification prefs.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Shadow our senior gas engineer on his rounds and capture how he decides which readings to trust.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Mock up a clickable version of the alert flow so we have something to test.",
     "sibling": "first-mocks",
     "local": true
    },
    {
     "phrase": "Test whether operators would actually pay for the copilot.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST-fire match verbatim triggers or the semantic core (&quot;watch a user complete a task on a working prototype&quot;). #5 mundane (&quot;check they can change notification prefs&quot;) maps to &quot;can a first-time user complete X&quot;. All 3 MUST-NOT are explicitly excluded in the description by name: shadow-expert→<a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, mock-up→<a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a>, would-pay→<code>wizard-of-oz</code>/<code>concierge</code>.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>see per-case table below</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → Step 0 forces the one unblocking question, &quot;never fabricate a run log&quot;; no invented users/tasks. 02 tooltip → reframes to &quot;observe WHERE users get lost&quot;, tooltips=one hypothesis, refuses confirmation framing (via challenge posture + findings-locate-the-defect ethos). 03 gas-engineer → declines, names <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, draws the &quot;same verb watch, opposite object&quot; distinction (When-NOT table + Related skills), offers handoff.</p>"
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
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: muted-builder discipline (builder does not run the session), finding attributed to the prototype not the person, behaviour-0.7-vs-opinion-0.1 quarantine on the evidence ladder, goal-not-instruction task rewrite, ≥2/5=<span class=\"tag tag-fact\">Fact</span> / 1=<span class=\"tag tag-hypothesis\">Hypothesis</span>. A generic prompt would report &quot;users liked the new layout&quot; — which this skill bans at the kill line. No mis-placed prose: severity map, task-success scale, roles, banned moves, evidence ladder all correctly tabular.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>not executable here (needs 5+ real fellow uses)</p>"
   }
  ],
  "scores": {
   "columns": [
    "method",
    "artifact",
    "proprietary",
    "challenge",
    "evidence"
   ],
   "rows": [
    {
     "label": "G01 Mentix copilot (canonical) 5",
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
     "label": "G02 Barrier permit (safety) 5",
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
     "label": "G03 Durian email→PO 5",
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
     "label": "G04 Azraq dashboard (weak) 5",
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
     "label": "G05 mundane 3-screen flow 5",
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
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Confirmation-test in disguise (hardens Adversarial 02).</strong> The Method has no explicitly named guardrail for &quot;run a test to <em>confirm</em> we need X&quot;. Adv-02 currently passes on the general challenge posture + the &quot;findings locate the defect, not validate a fix&quot; ethos. Add a Gotcha, e.g.: <em>&quot;'Run a test to confirm we need [tooltips/X]' is a solution stated as a problem plus a confirmation test — it hunts for support, not for where the design breaks. Reframe: observe WHERE users get lost; the pre-chosen fix is one hypothesis among the label, the flow order, and the information scent.&quot;</em></li><li><strong>Scale the protocol to the flow (makes Golden 05 explicit).</strong> &quot;Don't over-engineer a 3-screen settings change into a 5-segment study&quot; is currently only <em>implied</em> by the flag/<span class=\"tag tag-hypothesis\">Hypothesis</span> machinery and the Step-5 sample-size note. Consider a one-liner in Step 0 or Step 5: <em>&quot;Run at the weight of the flow — a 3-screen settings change is not a 5-segment study; one real user is a flag, a second turns any wall into a <span class=\"tag tag-fact\">Fact</span>.&quot;</em></li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a named \"confirmation test in disguise\" Gotcha (a session built to confirm the design works, or offering only happy-path tasks, is invalid) and a Step-0 line to scale the session to the flow rather than force the full ceremony on a trivial flow.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — usability-test-protocol</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;We've got a clickable v0 — run a usability test with five plant managers and see where they get stuck.&quot;</li><li>&quot;Watch a user try the new alert flow and tell me if they can complete it without help.&quot;</li><li>&quot;I need a usability protocol — who runs it, who watches, what do we measure?&quot;</li><li>&quot;Can a first-time rig supervisor renew the expiring permit on our prototype unaided?&quot;</li><li>&quot;Sit one person in front of the 3-screen settings flow and check they can change their notification prefs.&quot; (mundane)</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Shadow our senior gas engineer on his rounds and capture how he decides which readings to trust.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (mines an expert's judgment; not a user testing our prototype)</li><li>&quot;Mock up a clickable version of the alert flow so we have something to test.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a> (builds the artefact this skill tests)</li><li>&quot;Test whether operators would actually pay for the copilot.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> (demand and willingness-to-pay, not task success)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire match verbatim triggers or the semantic core (&quot;watch a user complete a task on a working prototype&quot;). #5 mundane (&quot;check they can change notification prefs&quot;) maps to &quot;can a first-time user complete X&quot;. All 3 MUST-NOT are explicitly excluded in the description by name: shadow-expert→<a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, mock-up→<a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a>, would-pay→<code>wizard-of-oz</code>/<code>concierge</code>.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>see per-case table below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → Step 0 forces the one unblocking question, &quot;never fabricate a run log&quot;; no invented users/tasks. 02 tooltip → reframes to &quot;observe WHERE users get lost&quot;, tooltips=one hypothesis, refuses confirmation framing (via challenge posture + findings-locate-the-defect ethos). 03 gas-engineer → declines, names <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, draws the &quot;same verb watch, opposite object&quot; distinction (When-NOT table + Related skills), offers handoff.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code></td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: muted-builder discipline (builder does not run the session), finding attributed to the prototype not the person, behaviour-0.7-vs-opinion-0.1 quarantine on the evidence ladder, goal-not-instruction task rewrite, ≥2/5=<span class=\"tag tag-fact\">Fact</span> / 1=<span class=\"tag tag-hypothesis\">Hypothesis</span>. A generic prompt would report &quot;users liked the new layout&quot; — which this skill bans at the kill line. No mis-placed prose: severity map, task-success scale, roles, banned moves, evidence ladder all correctly tabular.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>not executable here (needs 5+ real fellow uses)</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4, no auto_fail)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>G01 Mentix copilot (canonical)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G02 Barrier permit (safety)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>G03 Durian email→PO</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>G04 Azraq dashboard (weak)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>G05 mundane 3-screen flow</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the harder cases:</p>\n<ul><li><strong>G02 safety</strong>: Step 3 scale directly rewards the safety-critical read — &quot;completed wrong without noticing&quot; = Fail, &quot;silent-wrong is worse than a visible give-up&quot;. Safety framing is explicitly resisted as a coaching temptation (kill line + Gotcha &quot;Leading by relief&quot;), which is exactly the trap the case sets.</li><li><strong>G04 weak input</strong>: the &quot;like … better&quot; preference ask is challenged on both counts (preference≠usability; A/B-preference is the wrong instrument) via Gotcha &quot;Chasing a preference verdict&quot; + When-NOT row; reframed to a behaviour-scored task; no fabricated &quot;operators preferred the new one&quot; (would be an auto_fail). Challenge is explicit, not softened.</li><li><strong>G05 proportionality</strong>: served by the 1=<span class=\"tag tag-hypothesis\">Hypothesis</span>/flag machinery and the sample-size note; honest about the 1-user evidence limit (flag not fact). Artifact scored 4 because &quot;scale the protocol to the flow&quot; is achieved through the flag machinery rather than a named instruction (see gotcha below).</li><li><strong>Auto_fail check</strong>: none triggered. Following the skill's own fixture-label convention (see <code>examples/sample.md</code>), illustrative run numbers are labelled constructions, not client records — so filling the sheet is not fabrication. No flattery, no scope-poach, not boilerplate.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Confirmation-test in disguise (hardens Adversarial 02).</strong> The Method has no explicitly named guardrail for &quot;run a test to <em>confirm</em> we need X&quot;. Adv-02 currently passes on the general challenge posture + the &quot;findings locate the defect, not validate a fix&quot; ethos. Add a Gotcha, e.g.: <em>&quot;'Run a test to confirm we need [tooltips/X]' is a solution stated as a problem plus a confirmation test — it hunts for support, not for where the design breaks. Reframe: observe WHERE users get lost; the pre-chosen fix is one hypothesis among the label, the flow order, and the information scent.&quot;</em></li><li><strong>Scale the protocol to the flow (makes Golden 05 explicit).</strong> &quot;Don't over-engineer a 3-screen settings change into a 5-segment study&quot; is currently only <em>implied</em> by the flag/<span class=\"tag tag-hypothesis\">Hypothesis</span> machinery and the Step-5 sample-size note. Consider a one-liner in Step 0 or Step 5: <em>&quot;Run at the weight of the flow — a 3-screen settings change is not a 5-segment study; one real user is a flag, a second turns any wall into a <span class=\"tag tag-fact\">Fact</span>.&quot;</em></li></ul>\n<h2>Refine run 2 — applied judge fixes: added a named &quot;confirmation test in disguise&quot; Gotcha (a session built to confirm the design works, or offering only happy-path tasks, is invalid) and a Step-0 line to scale the session to the flow rather than force the full ceremony on a trivial flow.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix, copilot mock (canonical run)",
    "venture": "Mentix",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence, permit-renewal v1 (safety, do not lead)",
    "venture": "Barrier",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs, vendor-email → PO prototype",
    "venture": "Durian",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Azraq, dashboard (weak input, must challenge)",
    "venture": "Azraq",
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane 3-screen notification-preferences flow",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/golden/05.md"
   }
  ],
  "adversarial": [
   {
    "kind": "adversarial",
    "n": 1,
    "title": "vague one-liner",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope (belongs to a sibling)",
    "venture": null,
    "input": null,
    "expected": null,
    "fails": [],
    "other": [],
    "file": "skills/usability-test-protocol/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/usability-test-protocol/SKILL.md",
  "template": "skills/usability-test-protocol/template.md",
  "example": "skills/usability-test-protocol/examples/sample.md",
  "rubric": "skills/usability-test-protocol/tests/rubric.json",
  "results": "skills/usability-test-protocol/tests/RESULTS.md"
 }
});
