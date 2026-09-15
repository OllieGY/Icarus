window.ICARUS_SKILL("workflow-design", {
 "name": "workflow-design",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;I'll spin up some agents&quot; into a directed workflow of specialised agents, each summoned by a rule and dismissed by a rule, run across the three surfaces where the work actually belongs. The fellow describes the work; the skill first checks whether a fleet is even warranted, then lays out the multi-step orchestration, assigns the spawn-by-rule fleet (researcher / analyst / prototyper / drafter / critic — a menu, not a requirement), wires each agent to an observable spawn trigger and a done condition, and puts every step on the right surface: Think in Claude.ai, Build in Claude Code, Admin in Cowork. It refuses the two things fellows reach for: a lone agent doing work that needs a fleet, and a &quot;fleet&quot; that is really five chat windows with no triggers.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A workflow is not a chat thread and a fleet is not a tab bar. It is a directed graph of agents where each agent is spawned by a <strong>rule you could write as an if-condition</strong>, not by the fellow remembering to open a new window. The unit of design is the spawn trigger — the observable event that summons an agent and the done signal that dismisses it. The five archetypes divide labour by <strong>cognitive mode</strong> (gather, structure, make tangible, compose, falsify), not by topic; you never spawn &quot;the marketing agent&quot;, you spawn the critic because a draft crossed the review threshold. And the critic must be a different agent from the drafter for the same reason a validator is never the model that wrote the output: nothing critiques its own work. The three surfaces are three modes, not three logos — diverge in Claude.ai, build deterministically and repo-grounded in Claude Code, schedule and monitor the running fleet in Cowork — and putting a step on the wrong surface is the commonest waste in the whole build.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when: the work has independent sub-tasks that can run in parallel, or a role conflict that one head cannot hold (drafting and critiquing at once), or depth that overruns a single context; and the question is now how the agents coordinate and when each one fires.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;Spec one agent — its role, tools, and memory layer&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a></td><td>That designs a single agent's guts. This coordinates several. If the honest answer is one agent, route there — a fleet for solo work is theatre.</td></tr><tr><td>&quot;Design the product's system: input → router → retrieve → reason → validate → output&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></td><td>That is the product's internal request-time pipeline — how a user request is processed. This is the fellow's build/operate fleet — the agents that do the WORK, with a different lifetime and graph.</td></tr><tr><td>&quot;Write the golden cases and the acceptable failure rate&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></td><td>That is the scoreable contract. The critic here runs against those cases; it does not write them.</td></tr><tr><td>&quot;Make the UI / craft the interface&quot;</td><td><code>impeccable</code>, <code>design/*</code></td><td>Route the prototyper's craft there. Do not restate a design skill inside the fleet map.</td></tr></tbody></table></div>\n<p>If the input is a bare one-liner with no work named (&quot;set up some agents for my startup&quot;), do not invent a fleet. Ask the one question that unblocks it — what work needs doing, and what artefact does it produce? — or return the smallest honest next step.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>Workflow-Design progress:\n- [ ] Step 0: Fleet-or-solo gate — does this even need more than one agent?\n- [ ] Step 1: State the one-sentence workflow job\n- [ ] Step 2: Map the multi-step workflow (each step: owner, artefact, gate)\n- [ ] Step 3: Assign the fleet — pick the archetypes actually needed\n- [ ] Step 4: Wire every spawn trigger as an observable event + done signal\n- [ ] Step 5: Assign each step a surface (Think / Build / Admin) and say why\n- [ ] Step 6: Critic-independence check\n- [ ] Step 7: Run the kill line before returning</code></pre>\n<p><strong>Step 0 — fleet-or-solo gate.</strong> Before designing a fleet, prove one is needed. Score the three tests; a fleet is warranted only if at least one is a hard yes.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Test</th><th>Question</th><th>Yes means</th></tr></thead><tbody><tr><td>Parallelism</td><td>Are there ≥2 sub-tasks that could run at the same time with no shared state?</td><td>fan-out pays</td></tr><tr><td>Role conflict</td><td>Does one agent have to both produce and judge the same artefact?</td><td>split drafter/critic</td></tr><tr><td>Context depth</td><td>Does the whole job overrun one agent's usable context or memory?</td><td>decompose</td></tr></tbody></table></div>\n<p>If all three are no, the answer is one agent. Say so, route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, and stop. Do not build a fleet to look busy.</p>\n<p><strong>Step 1 — the workflow job.</strong> One sentence: what work the whole fleet turns into what artefact, for whom. Not a list of agents. If it needs &quot;and&quot; three times, it is more than one workflow.</p>\n<p><strong>Step 2 — the multi-step workflow.</strong> Fill the step table in <a href=\"#/skill/workflow-design\">template.md</a>. Every step names its input, its owner agent, the artefact it emits, and the gate that must pass before the next step starts. A step with no output artefact is a meeting, not a step.</p>\n<p><strong>Step 3 — assign the fleet.</strong> The five archetypes are a menu. Use the ones the work needs; mark the rest &quot;n/a — not needed, why&quot;. Each is a cognitive mode, not a topic.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Agent</th><th>Cognitive mode</th><th>Spawns when</th><th>Done when</th><th>Hands off to</th></tr></thead><tbody><tr><td>Researcher</td><td>Gather + source</td><td>a claim is tagged <code>[Assumption]</code>/<code>[Hypothesis]</code> with no source</td><td>claim is sourced or demoted</td><td>Analyst</td></tr><tr><td>Analyst</td><td>Structure + quantify</td><td>raw facts need a model, a number, or a decision</td><td>the number is built with the arithmetic shown</td><td>Drafter / Critic</td></tr><tr><td>Prototyper</td><td>Make tangible</td><td>a concept needs a concrete thing to react to</td><td>a paper/clickable artefact exists</td><td>Critic / user</td></tr><tr><td>Drafter</td><td>Compose</td><td>a decision or spec must become an artefact</td><td>the artefact is complete against its template</td><td>Critic</td></tr><tr><td>Critic</td><td>Falsify</td><td>a draft/artefact crosses the review threshold</td><td>verdict: pass, or a named defect list</td><td>Drafter (loop) / human</td></tr></tbody></table></div>\n<p><strong>Step 4 — wire the spawn triggers.</strong> This is the core of the skill. Every trigger has three parts: an observable EVENT, a CONDITION/threshold, and a DONE signal. &quot;When we need research&quot; is not a trigger — it is a wish. Fill the wiring table and score each trigger on the ladder: a trigger you can point at an artefact state for is at least 0.5; a vibes trigger is 0.1 and fails. Every loop (critic → drafter) needs an exit: a max-iteration count or an escalate-to- human condition, or it spins forever.</p>\n<p><strong>Step 5 — assign surfaces.</strong> Pick the surface by the mode of the step, not by habit.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Surface</th><th>Mode</th><th>Belongs here</th></tr></thead><tbody><tr><td>Think — Claude.ai</td><td>Diverge, explore, no-tools reasoning</td><td>researcher's gather, analyst's framing, invention, first concepts</td></tr><tr><td>Build — Claude Code</td><td>Deterministic, repo-grounded, tooled</td><td>prototyper's clickable, drafter's spec-against-repo, the eval harness, anything touching files</td></tr><tr><td>Admin — Cowork</td><td>Schedule, fan-out, monitor the running fleet</td><td>recurring triggers, parallel dispatch, watching the fleet, hand-back to human</td></tr></tbody></table></div>\n<p><strong>Step 6 — critic-independence check.</strong> The critic is a separate agent from the drafter. If the same agent drafts and critiques, the critic does not exist and quality is self-graded.</p>\n<p><strong>Step 7 — the kill line.</strong> Run the self-check at the foot of <a href=\"#/skill/workflow-design\">template.md</a>.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. Here the ladder scores the <strong>spawn triggers</strong>, because that is where a fleet is either a machine or a mood board. A trigger tied to opinion (&quot;spawn the researcher when it feels stuck&quot;, 0.1) fails; a trigger tied to an observable artefact state (&quot;the draft holds an unsourced <code>[Assumption]</code>&quot;, 0.5) passes; the bar to aim for is behaviour (0.7) — the fleet has run once and the handoff artefacts actually appeared. The two bars are not in tension: 0.5 is the design-time pass bar every trigger must clear (a trigger can only be pointed at an artefact state before the fleet has run), and 0.7 is the post-run read of a fleet that has actually executed — so do not dock a valid 0.5 design-time trigger for not yet reaching 0.7. The critic's verdict is held to the same ladder: &quot;looks good&quot; is opinion 0.1 and does not close a review; a verdict must cite the artefact or eval result it checked. Tag every empirical claim about volume, cadence, or cost <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A workflow is done when every trigger reads as an if-condition, not a hope.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The tab-switching fleet.</strong> Five agents with no triggers is five chat windows you switch between by hand. If the fellow has to remember to spawn an agent, it is a to-do list, not a fleet. The tell: a fleet table with a roster but a blank or vibes trigger column.</li><li><strong>The self-critiquing drafter.</strong> The same agent that writes the draft also &quot;checks it&quot;. That is the fleet-level disappearing guardrail — the critic is decoration and quality is self- graded. Split them, or admit there is no review.</li><li><strong>Over-orchestration.</strong> A fleet for work one agent could do in one context is the more common failure than under-orchestration, and it is more expensive. If Step 0 shows no parallelism, no role conflict, and no depth problem, a fleet is theatre; route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>.</li><li><strong>Wrong surface.</strong> Divergent thinking pushed into Claude Code (slow, over-tooled) or a repo build attempted in Claude.ai (no files, no ground truth). Cheap to fix once named, expensive to leave. Match surface to mode.</li><li><strong>Loops with no exit.</strong> A critic → drafter loop with no max-iteration or escalate condition runs until someone notices. Every loop names its exit.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/workflow-design\">examples/sample.md</a> — Barrier Intelligence's discovery-to-v1 build run as a spawn-by-rule fleet: researcher mines rig field logs and permit data, analyst quantifies near-miss base rates, prototyper builds a paper alert card, drafter writes the alert-rule spec, and an independent critic falsifies each rule against known incidents — with every spawn trigger written as an observable event and the surface split (Think / Build / Admin) called for each step.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> — designs a single agent's role, tools, memory layer, and eval. This skill coordinates several such agents; each node in this fleet is one <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> output. When Step 0 returns solo, hand the whole thing there.</li><li><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> — the product's internal request-time pipeline (input → router → retrieve/reason/act → validate → output). That graph runs inside the shipped product per user request; this graph is the fellow's build/operate fleet with a different lifetime. Do not conflate the two routers.</li><li><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> — the golden cases the critic runs against. This skill spawns the critic; that skill writes what the critic checks.</li><li><code>impeccable</code>, <code>design/*</code> — where the prototyper's UI craft is done. Route to them; do not restate a design system inside the fleet map.</li><li>Supersedes nothing. It is the multi-agent orchestration gate in the build-craft stage, paired with <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (single agent).</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Workflow + Fleet Map — &lt;product / workflow name&gt;</h1>\n<p><strong>Fellow:</strong> &lt;name&gt; · <strong>Date:</strong> &lt;date&gt; · <strong>Stage:</strong> build-craft</p>\n<h2>Step 0 — Fleet-or-solo gate</h2>\n<p>A fleet is warranted only if at least one test is a hard yes. Answer before designing.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Test</th><th>Question</th><th>Yes / No</th><th>Note</th></tr></thead><tbody><tr><td>Parallelism</td><td>≥2 sub-tasks that could run at once with no shared state?</td><td>&lt;yes/no&gt;</td><td>&lt;what runs in parallel&gt;</td></tr><tr><td>Role conflict</td><td>Must one agent both produce and judge the same artefact?</td><td>&lt;yes/no&gt;</td><td>&lt;drafter vs critic?&gt;</td></tr><tr><td>Context depth</td><td>Does the whole job overrun one agent's usable context/memory?</td><td>&lt;yes/no&gt;</td><td>&lt;where it breaks&gt;</td></tr></tbody></table></div>\n<p><strong>Verdict:</strong> &lt;fleet warranted / SOLO — route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> and stop&gt;. If all three are no, do not continue. One agent is the correct design.</p>\n<h2>A. The workflow job (one sentence)</h2>\n<blockquote><p>&lt;what the fleet turns into what artefact, for whom&gt; <code>[Fact/Assumption/Hypothesis]</code></p></blockquote>\n<p>If it needs &quot;and&quot; three times, it is more than one workflow. Split it or pick one.</p>\n<h2>B. The multi-step workflow</h2>\n<p>Ordered or branched. Every step emits an artefact and gates the next. A step with no output artefact is a meeting, not a step.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step</th><th>Input</th><th>Owner agent</th><th>Output artefact</th><th>Gate to next step</th></tr></thead><tbody><tr><td>1</td><td>&lt;e.g. gather field evidence&gt;</td><td>&lt;raw logs&gt;</td><td>Researcher</td><td>&lt;sourced fact set&gt;</td><td>&lt;every claim sourced or demoted&gt;</td></tr><tr><td>2</td><td>&lt;quantify&gt;</td><td>&lt;fact set&gt;</td><td>Analyst</td><td>&lt;base-rate model&gt;</td><td>&lt;arithmetic shown&gt;</td></tr><tr><td>3</td><td>&lt;make tangible&gt;</td><td>&lt;concept&gt;</td><td>Prototyper</td><td>&lt;paper/clickable artefact&gt;</td><td>&lt;a stranger can react to it&gt;</td></tr><tr><td>4</td><td>&lt;compose&gt;</td><td>&lt;decision + model&gt;</td><td>Drafter</td><td>&lt;spec against template&gt;</td><td>&lt;template complete&gt;</td></tr><tr><td>5</td><td>&lt;falsify&gt;</td><td>&lt;draft&gt;</td><td>Critic</td><td>&lt;pass / defect list&gt;</td><td>&lt;verdict cites evidence&gt;</td></tr></tbody></table></div>\n<h2>C. The fleet</h2>\n<p>The five archetypes are a menu. Mark unused ones &quot;n/a — not needed, why&quot;. Each is a cognitive mode, not a topic.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Agent</th><th>Cognitive mode</th><th>Used?</th><th>Spawn trigger (observable)</th><th>Done condition</th><th>Hands off to</th></tr></thead><tbody><tr><td>Researcher</td><td>Gather + source</td><td>&lt;yes/n·a&gt;</td><td>&lt;claim tagged <code>[Assumption]</code> with no source&gt;</td><td>&lt;sourced or demoted&gt;</td><td>Analyst</td></tr><tr><td>Analyst</td><td>Structure + quantify</td><td>&lt;yes/n·a&gt;</td><td>&lt;facts need a number/decision&gt;</td><td>&lt;arithmetic shown&gt;</td><td>Drafter / Critic</td></tr><tr><td>Prototyper</td><td>Make tangible</td><td>&lt;yes/n·a&gt;</td><td>&lt;concept needs a thing to react to&gt;</td><td>&lt;artefact exists&gt;</td><td>Critic / user</td></tr><tr><td>Drafter</td><td>Compose</td><td>&lt;yes/n·a&gt;</td><td>&lt;decision/spec must become an artefact&gt;</td><td>&lt;complete vs template&gt;</td><td>Critic</td></tr><tr><td>Critic</td><td>Falsify</td><td>&lt;yes/n·a&gt;</td><td>&lt;artefact crosses review threshold&gt;</td><td>&lt;pass or named defects&gt;</td><td>Drafter (loop) / human</td></tr></tbody></table></div>\n<h2>D. Spawn-trigger wiring</h2>\n<p>Every trigger = observable EVENT + CONDITION + DONE signal. Score each on the ladder. A vibes trigger is 0.1 and fails. Every loop needs an exit.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Trigger event</th><th>Condition / threshold</th><th>Agent spawned</th><th>Done signal</th><th>Rung (0.1–1.0)</th></tr></thead><tbody><tr><td>&lt;new field log lands&gt;</td><td>&lt;daily batch &gt; 0 rows&gt;</td><td>Researcher</td><td>&lt;patterns extracted or none found&gt;</td><td>&lt;artefact 0.5 <code>[Fact]</code>&gt;</td></tr><tr><td>&lt;draft holds unsourced <code>[Assumption]</code>&gt;</td><td>&lt;any such tag present&gt;</td><td>Researcher</td><td>&lt;tag sourced or demoted&gt;</td><td>&lt;artefact 0.5&gt;</td></tr><tr><td>&lt;draft reaches &quot;complete vs template&quot;&gt;</td><td>&lt;all template rows filled&gt;</td><td>Critic</td><td>&lt;verdict returned&gt;</td><td>&lt;artefact 0.5&gt;</td></tr><tr><td>&lt;critic returns defects&gt;</td><td>&lt;defect list non-empty&gt;</td><td>Drafter</td><td>&lt;defects cleared or escalated&gt;</td><td>&lt;behaviour 0.7&gt;</td></tr></tbody></table></div>\n<p><strong>Loop exits:</strong> &lt;critic → drafter loop: max &lt;N&gt; iterations, then escalate to human&gt;.</p>\n<p>Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1. Bar: every trigger must clear <strong>0.5</strong> — pointable to an artefact state. Any 0.1 trigger (&quot;when it feels stuck&quot;) is a KILL until rewritten as an observable condition.</p>\n<h2>E. Surface assignment</h2>\n<p>Pick the surface by the mode of the step, not by habit. Wrong surface is the commonest waste.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Step</th><th>Surface</th><th>Why this surface</th></tr></thead><tbody><tr><td>&lt;1 gather&gt;</td><td>Think — Claude.ai</td><td>&lt;divergent, no-tools reasoning&gt;</td></tr><tr><td>&lt;2 quantify&gt;</td><td>Think — Claude.ai</td><td>&lt;framing / arithmetic&gt;</td></tr><tr><td>&lt;3 prototype&gt;</td><td>Build — Claude Code</td><td>&lt;repo-grounded, tooled&gt;</td></tr><tr><td>&lt;4 draft spec&gt;</td><td>Build — Claude Code</td><td>&lt;touches files, deterministic&gt;</td></tr><tr><td>&lt;daily log fan-out&gt;</td><td>Admin — Cowork</td><td>&lt;scheduled, parallel dispatch, monitored&gt;</td></tr></tbody></table></div>\n<p>Rule: Think = diverge/explore; Build = deterministic/tooled/repo; Admin = schedule/fan-out/ monitor the running fleet.</p>\n<h2>F. Critic-independence check</h2>\n<blockquote><p>The critic is a separate agent from the drafter. Confirm: &lt;yes — critic is a distinct agent with its own trigger&gt;. If the same agent drafts and critiques, the critic does not exist.</p></blockquote>\n<h2>Kill line — self-check before returning</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>A fleet is actually warranted (Step 0 has ≥1 hard yes). If not, this is a SOLO design —   route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, do not ship a fleet. A single-agent job dressed as a fleet is a KILL.</li><li class=\"task\"><span class=\"box\"></span>Conversely, if Step 0 has ≥1 hard yes but the design still runs on one agent, the fleet is   under-built — a lone agent doing fleet-sized work is a KILL. Build out the fleet here; do not   cram fleet-sized work into a single <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> spec.</li><li class=\"task\"><span class=\"box\"></span>Every fleet agent used has a spawn trigger that reads as an observable if-condition. No   blank or vibes triggers. A trigger with no observable event is a KILL.</li><li class=\"task\"><span class=\"box\"></span>Every spawn trigger clears 0.5 on the ladder (pointable to an artefact state).</li><li class=\"task\"><span class=\"box\"></span>The critic is a different agent from the drafter (Section F).</li><li class=\"task\"><span class=\"box\"></span>Every loop names an exit (max iterations or escalate-to-human).</li><li class=\"task\"><span class=\"box\"></span>Every step in B emits an artefact and gates the next.</li><li class=\"task\"><span class=\"box\"></span>Every step in E has a surface, chosen by mode not habit.</li><li class=\"task\"><span class=\"box\"></span>Every empirical claim (volume, cadence, cost) is tagged <code>[Fact]</code>/<code>[Assumption]</code>/   <code>[Hypothesis]</code>. No number invented that the fellow did not provide.</li></ul>",
  "path": "skills/workflow-design/template.md"
 },
 "example": {
  "html": "<h1>Workflow + Fleet Map — Barrier Intelligence: alert-rule build fleet</h1>\n<p><strong>Fellow:</strong> Barrier Intelligence · <strong>Date:</strong> 2026-07-22 · <strong>Stage:</strong> build-craft</p>\n<p>Illustrative fixtures. Numbers are plausible, not real client data.</p>\n<h2>Step 0 — Fleet-or-solo gate</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Test</th><th>Question</th><th>Yes / No</th><th>Note</th></tr></thead><tbody><tr><td>Parallelism</td><td>≥2 sub-tasks that could run at once?</td><td>yes</td><td>log-mining across 4 rigs runs in parallel; permit-data pull is independent</td></tr><tr><td>Role conflict</td><td>Must one agent produce and judge the same artefact?</td><td>yes</td><td>a safety alert-rule cannot be graded by the agent that wrote it</td></tr><tr><td>Context depth</td><td>Does the job overrun one context?</td><td>yes</td><td>4 rigs × ~9 months of shift logs + permit history exceeds one window</td></tr></tbody></table></div>\n<p><strong>Verdict:</strong> fleet warranted — all three tests are yes. This is not solo work; do not route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>.</p>\n<h2>A. The workflow job (one sentence)</h2>\n<blockquote><p>Turn Barrier's rig field logs and permit data into a set of gas-safety alert rules that fire before an incident, each rule falsified against known past incidents. <code>[Fact]</code> on the two inputs — both are exhaust Barrier already collects.</p></blockquote>\n<p>One workflow, one artefact class (validated alert rules). Not two products.</p>\n<h2>B. The multi-step workflow</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Step</th><th>Input</th><th>Owner agent</th><th>Output artefact</th><th>Gate to next step</th></tr></thead><tbody><tr><td>1</td><td>Mine near-miss patterns</td><td>Shift logs, permit records</td><td>Researcher</td><td>Sourced pattern set</td><td>every pattern cites a log line</td></tr><tr><td>2</td><td>Quantify base rates</td><td>Pattern set</td><td>Analyst</td><td>Incident base-rate model</td><td>arithmetic shown, per rig</td></tr><tr><td>3</td><td>Sketch the alert card</td><td>Top-3 patterns</td><td>Prototyper</td><td>Paper alert card</td><td>a field supervisor can read it in 10s</td></tr><tr><td>4</td><td>Write the alert-rule spec</td><td>Base rates + card</td><td>Drafter</td><td>Alert-rule spec vs template</td><td>template complete</td></tr><tr><td>5</td><td>Falsify each rule</td><td>Rule spec</td><td>Critic</td><td>Pass / defect list</td><td>verdict cites a known incident</td></tr></tbody></table></div>\n<h2>C. The fleet</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Agent</th><th>Cognitive mode</th><th>Used?</th><th>Spawn trigger (observable)</th><th>Done condition</th><th>Hands off to</th></tr></thead><tbody><tr><td>Researcher</td><td>Gather + source</td><td>yes</td><td>a daily log/permit batch lands, OR a draft rule holds an unsourced <code>[Assumption]</code></td><td>pattern cited to a log line, or claim demoted</td><td>Analyst</td></tr><tr><td>Analyst</td><td>Structure + quantify</td><td>yes</td><td>Researcher emits a pattern set with no base rate</td><td>base rate built per rig, arithmetic shown</td><td>Drafter</td></tr><tr><td>Prototyper</td><td>Make tangible</td><td>yes</td><td>a top-3 pattern has no field-facing artefact</td><td>a paper alert card exists</td><td>Critic / supervisor</td></tr><tr><td>Drafter</td><td>Compose</td><td>yes</td><td>base rates + card ready, no rule spec yet</td><td>spec complete against the alert-rule template</td><td>Critic</td></tr><tr><td>Critic</td><td>Falsify</td><td>yes</td><td>a rule spec reaches &quot;template complete&quot;</td><td>verdict: pass, or defects each tied to a known incident</td><td>Drafter (loop) / safety lead</td></tr></tbody></table></div>\n<p>No archetype is unused here — a safety-critical build needs all five. In a lighter workflow the prototyper or researcher would be marked &quot;n/a — not needed&quot;.</p>\n<h2>D. Spawn-trigger wiring</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Trigger event</th><th>Condition / threshold</th><th>Agent spawned</th><th>Done signal</th><th>Rung</th></tr></thead><tbody><tr><td>Daily log/permit batch lands</td><td>batch &gt; 0 rows</td><td>Researcher</td><td>patterns extracted or &quot;none new&quot; logged</td><td>artefact 0.5 <code>[Fact]</code></td></tr><tr><td>Draft rule holds unsourced <code>[Assumption]</code></td><td>any such tag present</td><td>Researcher</td><td>tag sourced to a log line or demoted</td><td>artefact 0.5 <code>[Fact]</code></td></tr><tr><td>Pattern set has no base rate</td><td>any pattern without a number</td><td>Analyst</td><td>base rate built, arithmetic shown</td><td>artefact 0.5 <code>[Fact]</code></td></tr><tr><td>Rule spec reaches &quot;template complete&quot;</td><td>all template rows filled</td><td>Critic</td><td>verdict returned with incident citations</td><td>behaviour 0.7 <code>[Assumption]</code></td></tr><tr><td>Critic returns defects</td><td>defect list non-empty</td><td>Drafter</td><td>defects cleared or escalated</td><td>behaviour 0.7 <code>[Assumption]</code></td></tr></tbody></table></div>\n<p><strong>Loop exits:</strong> critic → drafter loop runs max 3 iterations; a rule still failing on iteration 3 escalates to the human safety lead, it does not auto-ship. <code>[Fact]</code> on the rule; the &quot;3&quot; is an <code>[Assumption]</code> to be tuned once the fleet has run.</p>\n<p>Every trigger clears 0.5 — each points at an artefact state (a batch, a tag, a missing number, a completed template, a non-empty defect list). None is a mood.</p>\n<h2>E. Surface assignment</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Step</th><th>Surface</th><th>Why this surface</th></tr></thead><tbody><tr><td>1 Mine patterns</td><td>Think — Claude.ai</td><td>divergent reading of unstructured logs; no tools needed</td></tr><tr><td>2 Quantify base rates</td><td>Think — Claude.ai</td><td>framing + arithmetic, reviewed before it touches code</td></tr><tr><td>3 Sketch alert card</td><td>Build — Claude Code</td><td>rendered against the repo's card component; route craft to <code>impeccable</code></td></tr><tr><td>4 Write rule spec</td><td>Build — Claude Code</td><td>touches the rules file and the eval harness; deterministic</td></tr><tr><td>5 Falsify rules</td><td>Build — Claude Code</td><td>runs the spec against the golden incident set (the eval-first-spec cases)</td></tr><tr><td>Daily log fan-out + fleet monitor</td><td>Admin — Cowork</td><td>scheduled 06:00 pull across 4 rigs, parallel dispatch, watch the running loop</td></tr></tbody></table></div>\n<p>The surprise for Barrier: they planned to run the whole build inside one Claude Code session. Mining unstructured logs is divergent Think work that Claude Code over-tools; the daily 4-rig fan-out is scheduled Admin work Cowork does natively. Moving those two off Claude Code cut the build to the parts that actually need a repo.</p>\n<h2>F. Critic-independence check</h2>\n<blockquote><p>The critic is a separate agent from the drafter, with its own trigger (a completed spec) and its own bar (each defect cited to a known incident). Confirmed independent. A safety product whose rules are graded by the agent that wrote them has no guardrail.</p></blockquote>\n<h2>Kill line — self-check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Fleet warranted — Step 0 has three hard yeses (parallelism, role conflict, depth).</li><li class=\"task\"><span class=\"box done\"></span>Every agent used has an observable spawn trigger; the trigger column has no vibes entries.</li><li class=\"task\"><span class=\"box done\"></span>Every trigger clears 0.5 — each points at an artefact state.</li><li class=\"task\"><span class=\"box done\"></span>Critic is a distinct agent from the drafter (Section F).</li><li class=\"task\"><span class=\"box done\"></span>The critic → drafter loop names an exit: max 3, then escalate to the safety lead.</li><li class=\"task\"><span class=\"box done\"></span>Every step in B emits an artefact and gates the next.</li><li class=\"task\"><span class=\"box done\"></span>Every step has a surface chosen by mode, not habit — two moved off Claude Code.</li><li class=\"task\"><span class=\"box done\"></span>Empirical claims tagged; the loop count and the base-rate numbers are <code>[Assumption]</code>,   the two inputs and the incident set are <code>[Fact]</code> from Barrier's own data. No number invented.</li></ul>",
  "path": "skills/workflow-design/examples/sample.md"
 },
 "rubric": {
  "skill": "workflow-design",
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
    "Help me design the workflow for building Barrier's alert rules — how should the agents work together?",
    "How should I orchestrate the agents for this build? What's the fleet?",
    "Which agents do I need and when does each one spawn?",
    "Set up the multi-agent workflow — who does what, and how do they hand off?",
    "I keep doing everything in one Claude Code session; how do I split this across agents and surfaces?"
   ],
   "mustNotFire": [
    {
     "phrase": "Design me one agent — its role, tools, and memory layer so it improves over time.",
     "sibling": "agent-design",
     "local": true
    },
    {
     "phrase": "Design the product's system: input",
     "sibling": "compound-system-architecture",
     "local": true
    },
    {
     "phrase": "Write the 20 golden cases and the acceptable failure rate the critic checks against.",
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
    "evidenceHtml": "<p>All 5 must-fire hit explicit description strings (&quot;design the workflow&quot;, &quot;orchestrate the agents&quot;, &quot;which agents do I need and when do they spawn&quot;, &quot;multi-agent setup&quot;, split-across-agents-and-surfaces). All 3 must-not-fire are explicitly negated in the description and routed to the named sibling: single-agent role/tools/memory → <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>; input→router→reason→validate pipeline → <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>; write the pass/fail eval → <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below; all ≥21 with no dim &lt;4. No auto_fail on any case — example tags base rates/loop-count <code>[Assumption]</code>, inputs <code>[Fact]</code>, header flags &quot;illustrative fixtures, not real client data&quot; (no fabricated numbers); no flattery (G04 refuses); no scope-poach (Adv cases route out); not boilerplate.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>Adv01 (vague one-liner) → When-NOT clause verbatim: &quot;do not invent a fleet. Ask the one question... what work / what artefact — or return the smallest honest next step.&quot; Adv02 (solution-in-disguise &quot;I need five agents&quot;) → &quot;menu, not a requirement&quot; (description + Step 3) + Step 0 gate + over-orchestration gotcha. Adv03 (single-agent spec) → When-NOT table + description route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, honest bridge (&quot;come back for the fleet; run Step 0&quot;).</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. Correctly distinguished from <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (single agent's guts), <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (product's request-time pipeline, different lifetime), <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (writes what the critic checks) via When-NOT table + Related skills. No supersession claimed.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Could not come from a generic PM prompt: spawn-trigger-as-if-condition scored on the money→behaviour→artefact→verbal→opinion ladder (vibes 0.1 fails, artefact-state 0.5 passes); critic-independence as a first-class gate (&quot;nothing critiques its own work&quot;); the fleet-or-solo gate that routes solo work AWAY (a generic prompt just builds the fleet asked for); Think/Build/Admin as three cognitive modes not three logos. Guidance is tabular, not prose.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses. Not executable in this eval.</p>"
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
     "label": "G01 Barrier (full 5-agent sequence; = worked example) 5",
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
     "label": "G02 Azraq (research-dominant; honest prototyper n/a) 5",
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
     "label": "G03 Mentix (surface split; feels-slow = wrong-surface) 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 triggerless fleet (kill-line reject + rewrite) 5",
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
     "label": "G05 Durian (mundane; two-agent, near-solo boundary) 5",
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
    "2026-08-06",
    "All",
    "PASS",
    "Judge run 1 below. Gates 1/2/3/5 PASS, Gate 4 n/a (supersedes: none), Gate 6 pending (needs real use). Kill line enforced both directions."
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Kill-line self-check is asymmetric.</strong> Template item 1 states only the over-orchestration direction (&quot;if not warranted → SOLO → route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>… a single-agent job dressed as a fleet is a KILL&quot;). The under-orchestration direction the description also promises to kill — &quot;a lone agent doing work that needs a fleet&quot; — is enforced by Step 0's hard-yes tests but has no symmetrical checkbox. Step 0 already catches it, so this is cosmetic; one mirror line in the self-check (&quot;if Step 0 has a hard yes and the design is still one agent, that is a KILL — the fleet is under-built&quot;) would make both directions explicit at the exit.</li><li><strong>Ladder rungs on triggers can read as under-ambitious.</strong> Evidence standard says &quot;the bar to aim for is behaviour (0.7)&quot; yet the pass bar in Step 4 / template D / self-check is 0.5 (artefact-state). Correct by design — a trigger is only ever pointable at an artefact state at design time; 0.7 (the fleet has actually run and handoffs appeared) is a post-hoc read. Worth one clarifying clause so a literal reader doesn't dock a valid 0.5 trigger for &quot;not reaching 0.7.&quot; Non-blocking; the example already tags run-time triggers 0.7 and design-time ones 0.5.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added the symmetrical under-orchestration KILL checkbox (fleet under-built) to template.md's kill line, and clarified in the Evidence standard that 0.5 is the design-time trigger pass bar while 0.7 is the post-run read (not in tension).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — workflow-design</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Help me design the workflow for building Barrier's alert rules — how should the agents work together?&quot;</li><li>&quot;How should I orchestrate the agents for this build? What's the fleet?&quot;</li><li>&quot;Which agents do I need and when does each one spawn?&quot;</li><li>&quot;Set up the multi-agent workflow — who does what, and how do they hand off?&quot;</li><li>&quot;I keep doing everything in one Claude Code session; how do I split this across agents and surfaces?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Design me one agent — its role, tools, and memory layer so it improves over time.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a></li><li>&quot;Design the product's system: input → router → retrieve → reason → validate → output.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></li><li>&quot;Write the 20 golden cases and the acceptable failure rate the critic checks against.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>2026-08-06</td><td>All</td><td>PASS</td><td>Judge run 1 below. Gates 1/2/3/5 PASS, Gate 4 n/a (supersedes: none), Gate 6 pending (needs real use). Kill line enforced both directions.</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<p>Protocol note: no <code>JUDGE_PROTOCOL.md</code> was present in the scratchpad; the run was executed against this project's established, consistent eval convention — <code>rubric.json</code> (5 dims ×5, pass ≥21 AND no dim &lt;4, auto_fail list), this file's Gate 1 trigger set, the sibling judge-run format, and the task's stated kill line and verification targets.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire hit explicit description strings (&quot;design the workflow&quot;, &quot;orchestrate the agents&quot;, &quot;which agents do I need and when do they spawn&quot;, &quot;multi-agent setup&quot;, split-across-agents-and-surfaces). All 3 must-not-fire are explicitly negated in the description and routed to the named sibling: single-agent role/tools/memory → <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>; input→router→reason→validate pipeline → <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>; write the pass/fail eval → <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below; all ≥21 with no dim &lt;4. No auto_fail on any case — example tags base rates/loop-count <code>[Assumption]</code>, inputs <code>[Fact]</code>, header flags &quot;illustrative fixtures, not real client data&quot; (no fabricated numbers); no flattery (G04 refuses); no scope-poach (Adv cases route out); not boilerplate.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>Adv01 (vague one-liner) → When-NOT clause verbatim: &quot;do not invent a fleet. Ask the one question... what work / what artefact — or return the smallest honest next step.&quot; Adv02 (solution-in-disguise &quot;I need five agents&quot;) → &quot;menu, not a requirement&quot; (description + Step 3) + Step 0 gate + over-orchestration gotcha. Adv03 (single-agent spec) → When-NOT table + description route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, honest bridge (&quot;come back for the fleet; run Step 0&quot;).</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. Correctly distinguished from <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (single agent's guts), <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (product's request-time pipeline, different lifetime), <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (writes what the critic checks) via When-NOT table + Related skills. No supersession claimed.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Could not come from a generic PM prompt: spawn-trigger-as-if-condition scored on the money→behaviour→artefact→verbal→opinion ladder (vibes 0.1 fails, artefact-state 0.5 passes); critic-independence as a first-class gate (&quot;nothing critiques its own work&quot;); the fleet-or-solo gate that routes solo work AWAY (a generic prompt just builds the fleet asked for); Think/Build/Admin as three cognitive modes not three logos. Guidance is tabular, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses. Not executable in this eval.</td></tr></tbody></table></div>\n<h3>Kill-line assessment (task's explicit focus)</h3>\n<p>Both directions of the kill line are enforced, so the kill line does NOT trip on this skill:</p>\n<ul><li><strong>Single-agent-where-fleet-needed (under-orchestration)</strong> — named in &quot;What it does&quot; (&quot;a lone agent doing work that needs a fleet&quot;) and caught by Step 0's three hard-yes tests (parallelism / role-conflict / depth): a hard yes means a fleet is warranted.</li><li><strong>Fleet-where-solo-suffices (over-orchestration)</strong> — Step 0 verdict routes to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> and stops; kill-line self-check item 1 (&quot;a single-agent job dressed as a fleet is a KILL&quot;); Gotcha 3 calls this &quot;the more common failure than under-orchestration.&quot;</li><li><strong>Spawn rules with no trigger</strong> — Kill-line item 2, Gotcha 1 (the tab-switching fleet), Step 4 (&quot;'When we need research' is not a trigger — it is a wish&quot;), and G04 exercise the reject: rewrite each vibes trigger (0.1) to an observable event+condition+done (≥0.5), refuse to return until every trigger reads as an if-condition.</li><li><strong>Critic-independence</strong> — Step 6, template Section F, Gotcha 2, and the ladder applied to the critic's verdict (&quot;looks good&quot; 0.1 does not close a review).</li></ul>\n<h3>Gate 2 per-case scores (0–5 each; pass = total ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 Barrier (full 5-agent sequence; = worked example)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G02 Azraq (research-dominant; honest prototyper n/a)</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G03 Mentix (surface split; feels-slow = wrong-surface)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✓</td></tr><tr><td>G04 triggerless fleet (kill-line reject + rewrite)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>G05 Durian (mundane; two-agent, near-solo boundary)</td><td>5</td><td>5</td><td>4</td><td>4</td><td>5</td><td>23</td><td>✓</td></tr></tbody></table></div>\n<h3>Gotchas surfaced (for the author, non-blocking)</h3>\n<ul><li><strong>Kill-line self-check is asymmetric.</strong> Template item 1 states only the over-orchestration direction (&quot;if not warranted → SOLO → route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>… a single-agent job dressed as a fleet is a KILL&quot;). The under-orchestration direction the description also promises to kill — &quot;a lone agent doing work that needs a fleet&quot; — is enforced by Step 0's hard-yes tests but has no symmetrical checkbox. Step 0 already catches it, so this is cosmetic; one mirror line in the self-check (&quot;if Step 0 has a hard yes and the design is still one agent, that is a KILL — the fleet is under-built&quot;) would make both directions explicit at the exit.</li><li><strong>Ladder rungs on triggers can read as under-ambitious.</strong> Evidence standard says &quot;the bar to aim for is behaviour (0.7)&quot; yet the pass bar in Step 4 / template D / self-check is 0.5 (artefact-state). Correct by design — a trigger is only ever pointable at an artefact state at design time; 0.7 (the fleet has actually run and handoffs appeared) is a post-hoc read. Worth one clarifying clause so a literal reader doesn't dock a valid 0.5 trigger for &quot;not reaching 0.7.&quot; Non-blocking; the example already tags run-time triggers 0.7 and design-time ones 0.5.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added the symmetrical under-orchestration KILL checkbox (fleet under-built) to template.md's kill line, and clarified in the Evidence standard that 0.5 is the design-time trigger pass bar while 0.7 is the post-run read (not in tension).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence: alert-rule build fleet (seed)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Help me design the workflow for building Barrier's gas-safety alert rules. We have rig field logs across 4 rigs and permit data. I want to mine near-miss patterns, turn them into alert rules, and make sure the rules actually catch the incidents we already know about. How should the agents work together?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li><strong>Step 0 fleet-or-solo gate run first</strong>, returning &quot;fleet warranted&quot; because parallelism (4 rigs mined in parallel), role conflict (a rule cannot be graded by its author), and context depth (4 rigs × months of logs) are all yes.</li><li>The filled workflow: mine → quantify → sketch → draft spec → falsify, each step naming an owner agent, an output artefact, and a gate.</li><li><strong>All five archetypes assigned</strong> (safety-critical work needs them), each with an OBSERVABLE spawn trigger — e.g. researcher spawns on a daily batch or an unsourced <code>[Assumption]</code> in a draft; critic spawns when a spec reaches &quot;template complete&quot;.</li><li><strong>Every spawn trigger scored ≥0.5</strong> on the ladder (points at an artefact state), no vibes triggers.</li><li><strong>Critic independent of drafter</strong>, called out explicitly — a safety rule cannot be graded by its author.</li><li><strong>The critic → drafter loop names an exit</strong> (max iterations, then escalate to a human safety lead; rules do not auto-ship on failure).</li><li><strong>Surface split assigned</strong>: log-mining and quantification as Think (Claude.ai), the spec and eval harness as Build (Claude Code), the daily 4-rig fan-out and fleet monitoring as Admin (Cowork). At least one step moved off the fellow's default surface with a reason.</li></ul>\n<p>Must NOT: design a single agent doing all of it; leave any trigger blank or as &quot;when we need X&quot;; let the drafter grade its own rules; invent an incident count or base rate Barrier did not give.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/workflow-design/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: research-dominant fleet across operators",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Azraq builds data-centre risk reports. I want a workflow that pulls uptime and incident data from a bunch of operators, spots the cross-operator failure patterns, and produces a risk memo. Most of the effort is research and analysis — there isn't much to prototype. Which agents do I need and how do they coordinate?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Step 0 gate returns &quot;fleet warranted&quot; on parallelism (many operators pulled independently) and context depth (cross-operator corpus overruns one window). Role conflict is weaker here but the memo still needs an independent critic.</li><li><strong>Not all five archetypes forced.</strong> Researcher and analyst dominate; the prototyper is marked &quot;n/a — not needed, no artefact to react to&quot; honestly, rather than invented to fill the roster. Drafter (memo) and critic (independent review) remain.</li><li>Researcher spawns per operator feed and on any unsourced <code>[Assumption]</code> in the memo; analyst spawns when a pattern set has no cross-operator number. Triggers are observable and scored.</li><li><strong>Parallel fan-out across operators assigned to Admin (Cowork)</strong>; the pattern-finding and framing to Think (Claude.ai); the memo assembly to Build or Think per how tooled it is.</li><li>Critic independent of the drafter; its verdict must cite the operator data, not taste.</li><li>Cross-operator scale claims tagged <code>[Assumption]</code>/<code>[Hypothesis]</code> unless Azraq supplied instances — no imported counts.</li></ul>\n<p>Must NOT: force a five-agent roster when the work needs four; present the prototyper as needed &quot;for completeness&quot;; leave the operator fan-out on a single sequential agent when parallelism is the whole point.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/workflow-design/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix: build-heavy workflow, surface split is the point",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Mentix has the plant-data corpus and a v0 copilot. Now I want the ongoing workflow that keeps improving it: agents that draft new plant workflows to automate, build them against the repo, and check them before they ship. I keep doing all of this in one long Claude Code session and it feels slow. How should this be orchestrated?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Step 0 gate: fleet warranted on role conflict (build vs check) and depth; parallelism is moderate (several candidate workflows can be drafted in parallel).</li><li>Fleet: drafter (new workflow spec), a build-oriented prototyper/engineer step against the repo, and an independent critic. Researcher/analyst spawn only when a spec makes an unsourced claim about plant behaviour.</li><li><strong>The surface reassignment is the core value here.</strong> The skill must name that divergent concept work (&quot;which workflow to automate next&quot;) belongs in Think (Claude.ai), the repo build and eval in Build (Claude Code), and the scheduling / monitoring of the running improvement loop in Admin (Cowork). It must explicitly move the exploratory step OUT of the one-long- Claude-Code-session default and say why (over-tooled, slow for divergence).</li><li>Every agent has an observable spawn trigger; the critic is separate from the drafter.</li><li>Loop exit named for the critic → drafter cycle.</li></ul>\n<p>Must NOT: leave everything in Claude Code because that is the fellow's habit; treat &quot;it feels slow&quot; as a model problem rather than a wrong-surface problem; skip the critic because &quot;the build agent tests its own work&quot;.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/workflow-design/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "triggerless fleet (kill-line reject)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Here's my fleet for the Barrier build. Five agents: researcher, analyst, prototyper, drafter, critic. I spawn the researcher when we need research, the analyst when we need analysis, the prototyper when we want to prototype, the drafter when it's time to write, and the critic when we want a review. Does this work?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<p>This is a KILL on the second kill line: spawn rules with no trigger. The skill must reject the map as drawn, not polish it.</p>\n<ul><li><strong>Name the trap:</strong> every &quot;trigger&quot; here restates the agent's own name (&quot;spawn the researcher when we need research&quot;). That is not a trigger — it is a wish. The fellow still spawns each agent by hand, so this is a tab-switching fleet, not a spawn-by-rule fleet.</li><li><strong>Rewrite each trigger as an observable event + condition + done signal</strong>, e.g. researcher spawns when &quot;a draft holds an unsourced <code>[Assumption]</code>&quot; (done when sourced or demoted); critic spawns when &quot;a spec reaches template-complete&quot; (done when a verdict with citations returns).</li><li><strong>Score the original triggers at 0.1</strong> (opinion/vibes) and the rewritten ones at ≥0.5 (artefact state), showing the ladder move.</li><li>Check critic independence and loop exits while rebuilding.</li><li>Refuse to return the map until every trigger reads as an if-condition.</li></ul>\n<p>Must NOT: accept the roster because it names the right five agents; treat the vibes triggers as &quot;close enough&quot;; flatter the fellow for having a fleet when it is five chat windows.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/workflow-design/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian Labs: weekly internal report (mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Small one. Durian wants to automate our weekly internal metrics report. Someone pulls the numbers, writes it up, and someone else sanity-checks it before it goes out Friday. Can this be a workflow?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<p>A deliberately unglamorous workflow. The value is restraint plus rigour, not a big fleet.</p>\n<ul><li>Step 0 gate: fleet warranted, but only just — role conflict is the yes (writer vs checker), parallelism and depth are no. So a TWO-agent fleet, not five. The skill must not pad the roster to five for symmetry; researcher, analyst, and prototyper are marked &quot;n/a — not needed&quot; with the reason (the numbers already exist; nothing to research or prototype).</li><li>Fleet: drafter (assembles the report from the metrics source) and critic (sanity-checks before send). Both with observable triggers: drafter spawns when &quot;the week's metrics snapshot is available&quot;; critic spawns when &quot;the draft is complete against the report template&quot;; done when &quot;verdict returned&quot;.</li><li><strong>Mostly Admin (Cowork):</strong> the whole thing is a scheduled Friday job with a fan-out to pull metrics and a monitor step; the write-up is light Build/Think. Surface assigned by mode.</li><li>Loop exit: critic → drafter runs once; a second failure escalates to the human owner.</li><li>Numbers (cadence, metric values) tagged; nothing invented.</li></ul>\n<p>Must NOT: turn a two-person weekly report into a five-agent fleet; skip the critic because &quot;it's just an internal report&quot;; leave the schedule unassigned to a surface. If anything, the skill may note this is near the solo boundary and one disciplined agent with a review step could also work.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/workflow-design/tests/golden/05.md"
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
     "html": "<p>&quot;I want to set up a bunch of agents for my startup.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no work named, no artefact, no workflow. The skill must not invent a fleet. It asks the ONE question that unblocks it, or returns the smallest honest next step. Invent no agents, no triggers, no surfaces.</p>\n<p>The skill must:</p>\n<ol><li>Refuse to draw a fleet from nothing. A roster invented here would be five agents with no work to do — the exact tab-switching failure the skill exists to prevent.</li><li>Ask the single unblocking question: what work needs doing, and what artefact does it produce? (Optionally the follow-up: is there parallelism, a produce-vs-judge conflict, or depth — the Step 0 test — because if none, the answer is one agent, not a fleet.)</li><li>Offer the smallest honest next step: name the one workflow, then the fleet-or-solo gate runs.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: asks what work/artefact the fleet is for (and/or points at the Step 0 gate), invents no agents or triggers, does not produce a speculative roster.</li><li>FAIL: outputs a five-agent fleet for an unnamed startup; guesses the workflow; fills triggers or surfaces with placeholder content presented as a design.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/workflow-design/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is I need five agents: a researcher, an analyst, a prototyper, a drafter, and a critic. Set them up for me.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>The &quot;problem&quot; is a pre-chosen fleet. The five-archetype roster is a menu the skill offers, not a requirement — and here it is being handed back as the problem statement. The skill must not accept the framing and start wiring five agents.</p>\n<p>The skill must:</p>\n<ol><li>Name the trap: &quot;I need five agents&quot; is a solution in disguise. The roster is an output of designing a workflow, not an input. Which agents you need falls out of what work exists and whether a fleet is even warranted.</li><li>Reframe to the underlying workflow: what work turns into what artefact, for whom? Run Step 0 (fleet-or-solo) — the answer may be two agents, or one. The five-agent count is unjustified until the work is named.</li><li>Flag the consequence: forcing all five when the work needs two produces idle agents and, more dangerously, invented triggers — a prototyper with nothing to prototype gets a made-up spawn rule. That is the tab-switching fleet.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: labels the &quot;I need five agents&quot; framing as a solution in disguise, reframes to the workflow and the Step 0 gate, and refuses to instantiate five agents on request. States the roster is a menu, not a requirement.</li><li>FAIL: accepts the five-agent brief and starts assigning them; treats the roster as the design; invents triggers for archetypes the (unstated) work does not need.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/workflow-design/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Design me one agent for Mentix — its role, what tools it gets, and how its memory layer is set up so it improves over time.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is a single-agent spec: role, tools, memory. That is <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, the sibling skill. It is not a workflow or a fleet — there is nothing to orchestrate. The skill must decline and name the right skill. Do not poach.</p>\n<p>The skill must:</p>\n<ol><li>State the boundary: workflow-design coordinates more than one agent; a single agent's role, tools, and memory layer is <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>. One agent has no orchestration to design.</li><li>Route to <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> explicitly.</li><li>Offer the honest bridge: if this agent later turns out to need collaborators — a separate critic, parallel researchers — come back here for the fleet. Run the Step 0 gate to decide.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> as the correct skill, does not design a fleet, and states the one-agent / multi-agent boundary cleanly.</li><li>FAIL: builds a fleet map for one agent; answers the role/tools/memory question itself (poaching agent-design); or fails to name the sibling.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/workflow-design/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/workflow-design/SKILL.md",
  "template": "skills/workflow-design/template.md",
  "example": "skills/workflow-design/examples/sample.md",
  "rubric": "skills/workflow-design/tests/rubric.json",
  "results": "skills/workflow-design/tests/RESULTS.md"
 }
});
