window.ICARUS_SKILL("agent-design", {
 "name": "agent-design",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;we want an agent for this&quot; into a spec built from four parts, in order of how much of it the fellow actually owns: a <strong>role</strong> stated as one decision the agent owns at a chosen autonomy level; the <strong>minimum tool set</strong>, each tool with its blast radius and guardrail; the <strong>memory layer</strong> — CLAUDE.md, skills, an append-only lessons.md, and a trace archive, each with a load trigger and a writer — which is the owned, compounding part and gets most of the design budget; and the <strong>eval</strong> that proves the whole thing works and is getting better, which is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s golden set, routed there, not restated. The artefact is the filled <code>template.md</code>. An agent with no memory layer or no eval is not an agent; it is a prompt with tools, and it does not compound.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic agent design is a prompt, a tool list, and a model — and a competitor can rent the same model, wire the same tools, and copy the prompt from one screenshot in an afternoon. The one part that is yours and gets better only for you is the <strong>memory layer</strong>: CLAUDE.md for durable context, skills for tell-able procedure, an append-only lessons.md for the corrections that are the tacit half of the expertise, and a trace archive of every real run — all loaded into context at birth so run N starts smarter than run N−1. So this skill spends its effort on what gets written, by whom, and when it loads, treats role and tools as the cheap swappable shell around it, and makes an eval prove the memory is compounding rather than merely accumulating.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has a validated workflow and needs to spec the single agent that runs it: the role, the tools, what it remembers, and how they will know it works. Trigger phrases: &quot;design an agent for…&quot;, &quot;what tools and memory should it have&quot;, &quot;spec the agent&quot;, &quot;our agent repeats the same mistakes — what's wrong with its memory layer&quot;.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;Give it a personality / voice / signature phrases / make it sound like someone&quot;</td><td><code>meta/agent-persona-builder</code></td><td>That designs SOUL/AGENTS/MEMORY/BOOTSTRAP — the agent's voice and operating manual. This designs the product spine (role · tools · memory-as-compounding-asset · eval). A voice is not a moat; a lessons.md is. Compose them; do not restate the persona mechanics here.</td></tr><tr><td>&quot;Design the fleet / how do the agents hand off / who spawns whom&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (sibling, 09)</td><td>That is the multi-agent orchestration. This specs ONE agent. If the answer needs a researcher, an analyst, and a critic passing work, that is a fleet — route it.</td></tr><tr><td>&quot;Write the golden cases / set the autonomy level / what's the cost-per-outcome&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07)</td><td>That IS the agent's eval. This skill points at it and carries its autonomy level and number as constraints; it does not re-derive them.</td></tr><tr><td>&quot;What's the post-launch loop / should we raise autonomy / re-run on the new model&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08)</td><td>That runs the ship→observe→learn→refine loop over a live agent. This designs the memory-layer <em>structure</em> the loop then turns. Structure here; cadence there.</td></tr><tr><td>&quot;How do we build this AI system / the component pipeline / the effort split&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (07)</td><td>That is the system the agent may sit inside (router, retrieve, validate). This is one agent's internals. They compose.</td></tr></tbody></table></div>\n<p>If the input is a bare &quot;build me an agent&quot; with no workflow, do not invent one. Ask the one question that unblocks it — which single decision does it own? — or return the smallest honest next step.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>Agent-design progress:\n- [ ] Step 1: State the role as ONE owned decision + its autonomy level\n- [ ] Step 2: Spec the minimum tool set (each: job, blast radius, guardrail)\n- [ ] Step 3: Design the memory layer — four stores, each with a load trigger AND a writer\n- [ ] Step 4: Point at the eval and state what it gates\n- [ ] Step 5: Run the compounding check + the kill line</code></pre>\n<p>Fill in <code>template.md</code>.</p>\n<h3 id=\"step-1-role-one-owned-decision\">Step 1 — Role: one owned decision</h3>\n<p>One sentence: <strong>which single decision</strong> the agent makes or compresses, for <strong>whom</strong>, on <strong>what trigger</strong>, at <strong>which autonomy level</strong> L0–L4. The autonomy level is <em>carried from</em> <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, not chosen here to sound advanced.</p>\n<p>Good: &quot;At each permit request on the rig, the agent decides hold-or-proceed on the gas hazard and drafts the reason for the duty safety officer — autonomy L1, the officer commits every one.&quot; Not a role: &quot;an AI copilot for safety officers.&quot; That is an engine, not a decision. Name the gap and ask for the decision. Do not invent it. The agent's <em>voice</em> — how it phrases that draft — is <code>agent-persona-builder</code>'s job, not this step.</p>\n<h3 id=\"step-2-tools-the-commodity-shell\">Step 2 — Tools: the commodity shell</h3>\n<p>The fewest tools that deliver the role. Each row of the tool table:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Rule</th></tr></thead><tbody><tr><td>Job</td><td>The one thing this tool does for the role.</td></tr><tr><td>Blast radius</td><td>Read · Write-reversible · Write-irreversible. Drives the guardrail.</td></tr><tr><td>Guardrail</td><td>For any Write, the check before it fires. High blast → route the rule to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>.</td></tr><tr><td>Exercised by</td><td>The eval case(s) that call it. A tool no golden case touches is cut — it is attack surface, not capability.</td></tr></tbody></table></div>\n<p>Two rules: a tool whose blast radius exceeds the chosen autonomy level does not belong on the agent (at L1, no tool that <em>commits</em> an action — that is the human's). And tools are the commodity part; spend the least design effort here and move the budget to Step 3.</p>\n<h3 id=\"step-3-memory-layer-the-part-you-own\">Step 3 — Memory layer: the part you own</h3>\n<p>This is the section that matters. Four stores. Fill every column for each — a store with no load trigger never enters the agent's head; a store with no writer stays empty; neither compounds.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Store</th><th>Holds</th><th>Written by</th><th>Load trigger</th><th>Compounding role</th></tr></thead><tbody><tr><td><strong>CLAUDE.md</strong></td><td>Durable operating context: system facts, the org map, standing rules, thresholds</td><td>Human, curated</td><td>At birth, every run</td><td>Stops the agent re-learning context each session</td></tr><tr><td><strong>skills</strong></td><td>Tell-able, repeatable procedures the agent invokes</td><td>Explicit capture — route to <a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a></td><td>Registered at birth; invoked on demand</td><td>The <em>explicit</em> half of the expertise, versioned</td></tr><tr><td><strong>lessons.md</strong></td><td>Append-only log of corrections + failures — one entry each, what was changed and why</td><td>The agent / operator, the moment a correction happens</td><td>At birth, every run</td><td>The <em>tacit</em> half accretes here — the defensible part</td></tr><tr><td><strong>trace archive</strong></td><td>Every run: input, output, human edit, outcome</td><td>The system, automatically</td><td>Sampled into eval + discovery (not all into context)</td><td>YODA moat + eval fuel + the discovery corpus</td></tr></tbody></table></div>\n<p>Then the ownership test — why the memory layer, and only the memory layer, is where value compounds:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Part</th><th>Who owns it</th><th>Copyable by a competitor?</th></tr></thead><tbody><tr><td>Base model</td><td>Rented from a lab</td><td>Yes — they rent the same one; it improves for everyone at once</td></tr><tr><td>Tools</td><td>Commodity APIs / MCP servers</td><td>Yes — same servers, an afternoon's wiring</td></tr><tr><td>Role / prompt</td><td>Visible in one screenshot</td><td>Yes</td></tr><tr><td><strong>Memory layer</strong></td><td>Accrues from YOUR traces and YOUR corrections</td><td><strong>No — path-dependent workflow exhaust, unique to you</strong></td></tr></tbody></table></div>\n<p>State the <strong>compounding mechanism</strong> for this agent, concretely: name the run that got better <em>because of</em> what a store captured. For example, &quot;the drain-cross-check correction logged in lessons.md in week 2 turns golden case #17 from fail to pass on the week-3 re-run.&quot; If you cannot name a mechanism like that, the memory layer is a filing cabinet, not a flywheel — say so.</p>\n<h3 id=\"step-4-eval-the-instrument-that-reads-compounding\">Step 4 — Eval: the instrument that reads compounding</h3>\n<p>The agent's scoreable contract is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s output: the job line, 20 golden cases (drawn from the trace archive), the autonomy level with derived failure rates, and cost-per-outcome to the cent. Do not restate it. Route there and record what the eval <strong>gates</strong> for this agent:</p>\n<ul><li><strong>Model swap</strong> — a new model ships only if it holds the eval, not on its headline benchmark.</li><li><strong>Autonomy promotion</strong> — the level rises only on a measured pass rate over N real cycles.</li><li><strong>Compounding proof</strong> — the eval is the instrument that reads whether the memory layer made run N beat run N−1. No eval, and you cannot tell whether any change — a new lesson, a new tool, a new model — helped or hurt.</li></ul>\n<p>An agent with no eval is a demo. This is a kill condition.</p>\n<h3 id=\"step-5-compounding-check-kill-line\">Step 5 — Compounding check + kill line</h3>\n<p>Run the self-check at the foot of <code>template.md</code>.</p>\n<p><strong>Kill line.</strong> An agent spec ships only when: the role is one owned decision (not &quot;assistant for X&quot;) with an autonomy level; the memory layer has all four stores, each with a load trigger AND a writer; at least one store (lessons.md or trace archive) accrues from the agent's OWN runs, not just human-authored config; the compounding mechanism is named; and the eval exists (routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>) and gates model-swap, autonomy, and the compounding proof. Any part missing = not an agent spec. Name which, and the smallest next step. A role and a tool list with no compounding memory is a chatbot; do not ship it as an agent.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>Here the ladder scores the <strong>memory layer's compounding claim</strong> — the same discipline <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> applies to its data layer. &quot;The agent will learn over time&quot; is opinion (0.1) and does not clear the bar. The bar is behaviour (0.7): lessons.md holds real entries from real corrections, the trace archive holds real runs (artefact, 0.5+), and the eval score <em>rose</em> after those entries were written. A memory layer whose stores are all empty or hypothetical is scored <code>[Hypothesis]</code> and fails — you have designed a filing cabinet, not a compounding asset. Tag every claim about traces, corrections, tools, cost, or accuracy <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. If the trace archive is <code>[Hypothesis]</code> because the workflow has never been run, the honest output is &quot;run it by hand first to seed real traces, then design the agent&quot; — not a spec resting on data that does not exist.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Memory as a filing cabinet, not a flywheel. The stores exist on disk but never load at birth, or nobody writes lessons.md, so run 100 is no smarter than run 1. A store with no load trigger and no writer is decoration. The compounding mechanism in Step 3 is the test: name the run that got better because of what memory captured, or the layer is not a memory layer.</p>\n<p>Over-designing the tools, under-designing the memory. Fellows spend the whole design budget on the tool list — the commodity part — and hand-wave the memory (&quot;it'll remember things&quot;). Invert it. Tools are the shell; the memory layer is where the moat lives. If the tool section is longer than the memory section, the priorities are backwards.</p>\n<p>Confusing the spine with the persona. SOUL.md, voice, and signature phrases are <code>agent-persona-builder</code>'s job. Designing a personality here and filing it under &quot;memory&quot; is a category error: a voice is style, not a compounding asset. The two skills compose — persona for how it sounds, this for what it decides, remembers, and is scored on.</p>\n<p>lessons.md that logs praise, not corrections. A memory that only records wins teaches nothing — the tacit moat is in what the human changed and why. If every entry reads &quot;worked well,&quot; the log is theatre. The entries that compound are the overrides.</p>\n<p>Skipping the eval because &quot;we'll know if it's working.&quot; Without the eval you cannot swap the model safely, promote autonomy, or prove the memory compounds. &quot;We'll feel it&quot; is opinion (0.1). Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> and carry the number.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/agent-design\">examples/sample.md</a> — a worked agent spec for <strong>Barrier Intelligence</strong> (oil &amp; gas safety): a permit-to-work gas-hazard reviewer at autonomy L1, four read/draft tools each tied to an eval case (and no commit tool, by design), a four-store memory layer whose lessons.md logs every safety-officer override, and the named compounding mechanism where one logged override turns an adversarial golden case from fail to pass on the next re-run. The eval is pointed at <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, not restated.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07) — the agent's eval. This skill routes there for the job line, golden set, autonomy level, and cost-per-outcome, and carries them back as constraints. Agent without an eval is a demo; eval without an agent has nothing to score.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (07) — the AI system the agent may sit inside (input → router → retrieve/reason/act → validate → output). That designs the pipeline; this designs one agent's internals. The trace archive here is grounded in that skill's data layer.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (09, sibling) — the multi-agent fleet and hand-offs. When one agent is not enough, route there. This skill is a single-agent spec; that one orchestrates several.</p>\n<p><code>meta/agent-persona-builder</code> — the agent's voice, SOUL.md, and operating manual. Compose it with this skill: persona for how the agent sounds, agent-design for what it owns, remembers, and is scored on. Do not restate its 25-question persona mechanics here.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> (03), <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> (08), <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> (03) — feed the memory layer: explicit procedures become skills, the trace archive becomes discovery interviews and golden cases. <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (06) argues the defensibility that the compounding memory layer creates.</p>\n<p>Supersedes: none. New skill; no prior product-agent design exists in the pack to replace.</p>"
  }
 ],
 "template": {
  "html": "<h1>Agent Spec — v1</h1>\n<p>Fill every part. Order is deliberate: least-owned to most-owned. An agent spec ships only with a memory layer whose stores each have a load trigger AND a writer, at least one store that accrues from the agent's own runs, a named compounding mechanism, and an eval routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Anything less is a chatbot with tools; report the gap.</p>\n<hr>\n<h2>Part 1 — Role: one owned decision</h2>\n<blockquote><p>At [TRIGGER], the agent decides [THE ONE DECISION] for [WHO], at autonomy [L0–L4].</p></blockquote>\n<p><strong>Role line:</strong> <em>[write it — one decision, not &quot;assistant/copilot for X&quot;]</em></p>\n<p><strong>Autonomy level:</strong> <em>[L0 / L1 / L2 / L3 / L4]</em> — carried from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, not chosen here. <em>[Fact/Assumption]</em></p>\n<p>If you cannot name a single decision, stop. &quot;An agent for X&quot; is an engine, not a role. Name what is missing and go get it. Do not invent it. (Voice / phrasing of the output → <code>agent-persona-builder</code>, not this spec.)</p>\n<hr>\n<h2>Part 2 — Tools: the commodity shell</h2>\n<p>The fewest tools that deliver the role. Every tool must be exercised by ≥1 eval case, or cut it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Tool</th><th>Its one job</th><th>Blast radius</th><th>Guardrail before it fires</th><th>Exercised by eval case(s)</th></tr></thead><tbody><tr><td><em>[name]</em></td><td><em>[job]</em></td><td><em>[Read / Write-reversible / Write-irreversible]</em></td><td><em>[check, or &quot;none — read-only&quot;]</em></td><td><em>[case #s]</em></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p><strong>Tool checks:</strong></p>\n<ul><li>No tool's blast radius exceeds the autonomy level (at L1, no tool that <em>commits</em>): <em>[Yes / No — list any]</em></li><li>Every tool is called by ≥1 eval case: <em>[Yes / No — cut the unused]</em></li><li>High-blast tools routed to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>: <em>[Yes / N-a]</em></li></ul>\n<hr>\n<h2>Part 3 — Memory layer: the part you own</h2>\n<p>Fill every column. A store with no load trigger never loads; a store with no writer stays empty; neither compounds.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Store</th><th>Holds (for THIS agent)</th><th>Written by</th><th>Load trigger</th><th>Source</th></tr></thead><tbody><tr><td><strong>CLAUDE.md</strong></td><td><em>[system facts, org map, standing rules, thresholds]</em></td><td>Human, curated</td><td>At birth, every run</td><td><em>[Fact/Assumption]</em></td></tr><tr><td><strong>skills</strong></td><td><em>[tell-able procedures it invokes]</em></td><td>Explicit capture (<a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a>)</td><td>Registered at birth; invoked on demand</td><td><em>[Fact/Assumption]</em></td></tr><tr><td><strong>lessons.md</strong></td><td><em>[what corrections/failures get logged]</em></td><td>Agent/operator, at correction time</td><td>At birth, every run</td><td><em>[Fact/Assumption]</em></td></tr><tr><td><strong>trace archive</strong></td><td><em>[input · output · human edit · outcome, per run]</em></td><td>System, automatically</td><td>Sampled to eval + discovery</td><td><em>[Fact/Assumption/Hypothesis]</em></td></tr></tbody></table></div>\n<h3>Ownership test (why this layer is the moat)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Part</th><th>Who owns it</th><th>Copyable?</th></tr></thead><tbody><tr><td>Base model</td><td>Rented from a lab</td><td>Yes — improves for everyone at once</td></tr><tr><td>Tools</td><td>Commodity APIs</td><td>Yes</td></tr><tr><td>Role / prompt</td><td>One screenshot</td><td>Yes</td></tr><tr><td><strong>Memory layer</strong></td><td>Your traces + your corrections</td><td><strong>No — path-dependent, unique to you</strong></td></tr></tbody></table></div>\n<h3>Compounding mechanism (the load-bearing line)</h3>\n<blockquote><p>The [store] entry &quot;[the correction / trace]&quot; logged at [when] turns [which eval behaviour] from [worse] to [better] on the [next] re-run.</p></blockquote>\n<p><strong>Named mechanism:</strong> <em>[write the concrete run that got better because of what memory captured]</em></p>\n<p>If you cannot name one, the memory layer is a filing cabinet. Say so, and state what would have to be written and loaded for it to compound.</p>\n<hr>\n<h2>Part 4 — Eval: what it gates</h2>\n<p>The agent's scoreable contract lives in <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (job line + 20 golden cases + autonomy + cost-per-outcome). Do not restate it here. Point at it and record what it gates.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Eval location</td><td><em>[link / status: exists · to-be-built via <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>]</em></td></tr><tr><td>Autonomy level (carried)</td><td><em>[L0–L4]</em></td></tr><tr><td>Cost-per-outcome (carried)</td><td><em>[$ to the cent]</em> <em>[Fact/Assumption]</em></td></tr><tr><td>Golden cases drawn from</td><td><em>[the trace archive above — cite it]</em></td></tr></tbody></table></div>\n<p><strong>The eval gates:</strong></p>\n<ul><li>Model swap → new model ships only if it holds the eval. <em>[stated? Yes/No]</em></li><li>Autonomy promotion → level rises only on a measured pass rate over N cycles. <em>[N = ?]</em></li><li>Compounding proof → the eval reads whether run N beat run N−1 after memory was written. <em>[Yes/No]</em></li></ul>\n<p>If the eval does not exist yet, the agent is not ready to build. Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> first.</p>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Role is ONE owned decision (not &quot;assistant for X&quot;) with an autonomy level</li><li class=\"task\"><span class=\"box\"></span>Tools are minimal; each exercised by ≥1 eval case; none exceed the autonomy level</li><li class=\"task\"><span class=\"box\"></span>Memory layer has all four stores, each with a load trigger AND a writer</li><li class=\"task\"><span class=\"box\"></span>At least one store (lessons.md or trace archive) accrues from the agent's OWN runs</li><li class=\"task\"><span class=\"box\"></span>The compounding mechanism is named concretely</li><li class=\"task\"><span class=\"box\"></span>The eval exists (routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>) and gates model-swap + autonomy + compounding</li></ul>\n<p>Any box unchecked = not an agent spec yet. State exactly which, and the smallest next step to fill it. If the memory layer cannot compound (a stateless reformatter, no corrections worth logging), say so: this is a skill or a prompt, not an agent.</p>",
  "path": "skills/agent-design/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence permit-hazard reviewer agent</h1>\n<p>Barrier Intelligence builds gas-safety software for oil &amp; gas fields. This specs the single agent behind its first workflow: reviewing a permit-to-work against live gas readings and field logs. It picks up after <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> set the autonomy level (L1) and cost-per-outcome. This is a test fixture — numbers are illustrative, not real client data. Every claim is tagged <code>[Fact]</code> (measured on real traces / logs), <code>[Assumption]</code> (projected), or <code>[Hypothesis]</code> (unbuilt).</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;We've run permit reviews by hand alongside the safety officer on Rig 7 for six weeks — every permit, the gas grid readings, the officer's decision, and what actually happened are logged. We want to turn this into an agent. What does it need to be built from?&quot;</p>\n<p>Artefacts on the table:</p>\n<ul><li>Six weeks of hand-run reviews: permit input, gas-grid readings, officer decision, outcome — all in the event stream. <span class=\"tag tag-fact\">Fact</span></li><li>The <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> job line + 20 golden cases (drawn from those six weeks), autonomy <strong>L1</strong>, cost-per-outcome <strong>$1.20/permit</strong>. <span class=\"tag tag-fact\">Fact</span></li><li>Because the workflow was run by hand first, the trace archive already has real runs — it is not a hope. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<hr>\n<h2>Part 1 — Role: one owned decision</h2>\n<blockquote><p>At each permit request on Rig 7, the agent decides <strong>hold-or-proceed on the gas hazard</strong> and drafts the reason for the duty safety officer — autonomy <strong>L1</strong>, the officer commits every one. [Fact, carried from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>]</p></blockquote>\n<p>Not &quot;an AI copilot for safety officers.&quot; One decision: hold or proceed. The officer still commits — that is what L1 means, and it is why no tool below can clear a permit on its own. How the draft is <em>worded</em> is <code>agent-persona-builder</code>'s job; not designed here.</p>\n<hr>\n<h2>Part 2 — Tools: the commodity shell</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Tool</th><th>Its one job</th><th>Blast radius</th><th>Guardrail</th><th>Exercised by eval case(s)</th></tr></thead><tbody><tr><td><code>read_gas_grid</code></td><td>Pull current sensor readings for the permit's zone</td><td>Read</td><td>none — read-only</td><td>1, 3, 7, 14, 17</td></tr><tr><td><code>read_field_logs</code></td><td>Pull recent field + drain logs for the zone and adjacent zones</td><td>Read</td><td>none — read-only</td><td>8, 12, 17</td></tr><tr><td><code>draft_recommendation</code></td><td>Write a hold/proceed draft + reason to the permit board</td><td>Write-reversible (draft, uncommitted)</td><td>L1 sign-off: officer commits; nothing auto-posts</td><td>1–20</td></tr><tr><td><code>escalate</code></td><td>Flag to the duty safety officer</td><td>Write-reversible</td><td>fires on low confidence OR any zone with an override in lessons.md</td><td>15, 16, 17, 18</td></tr></tbody></table></div>\n<p><strong>Tool checks:</strong></p>\n<ul><li>No tool commits a permit. There is deliberately <strong>no</strong> <code>commit_permit</code> tool — at L1 that is the human's, and a tool that could auto-clear a hot-work permit exceeds the autonomy level. <span class=\"tag tag-fact\">Fact</span></li><li>Every tool is called by ≥1 eval case. <code>read_field_logs</code> earns its place on the adjacent-zone cases; without those it would be cut.</li><li><code>draft_recommendation</code> and <code>escalate</code> are Write-reversible; their guardrails route to <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>. <span class=\"tag tag-assumption\">Assumption</span></li></ul>\n<p>The tool section is short on purpose. These four are commodity; a competitor could wire them in an afternoon. The value is Part 3.</p>\n<hr>\n<h2>Part 3 — Memory layer: the part you own</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Store</th><th>Holds (for this agent)</th><th>Written by</th><th>Load trigger</th><th>Source</th></tr></thead><tbody><tr><td><strong>CLAUDE.md</strong></td><td>Rig 7 zone map; H2S / LEL thresholds per zone; permit taxonomy (hot-work, confined-space, cold-work); duty-officer escalation contact</td><td>Human, curated</td><td>At birth, every run</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td><strong>skills</strong></td><td><code>permit-hazard-classify</code> (tell-able rule set), <code>gas-threshold-lookup</code></td><td>Explicit capture (<a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a>)</td><td>Registered at birth; invoked per permit</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td><strong>lessons.md</strong></td><td>One entry each time the officer <strong>overrides</strong> the draft: what the agent missed and the rule that prevents it</td><td>Officer/operator, at override time</td><td>At birth, every run</td><td><span class=\"tag tag-fact\">Fact</span></td></tr><tr><td><strong>trace archive</strong></td><td>Every review: permit input, gas readings, draft, officer decision, actual outcome</td><td>System, automatically</td><td>Sampled into the eval + <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a></td><td>[Fact — six weeks already logged]</td></tr></tbody></table></div>\n<h3>Ownership test</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Part</th><th>Who owns it</th><th>Copyable?</th></tr></thead><tbody><tr><td>Base model</td><td>Rented from a lab</td><td>Yes — a rival rents the same one</td></tr><tr><td>The four tools</td><td>Commodity APIs</td><td>Yes — an afternoon</td></tr><tr><td>Role / prompt</td><td>One screenshot</td><td>Yes</td></tr><tr><td><strong>Memory layer</strong></td><td>Rig 7's own overrides + traces</td><td><strong>No — this rig's exhaust, unique to Barrier</strong></td></tr></tbody></table></div>\n<p>The model that reads gas readings improves for every safety-software vendor at once. Rig 7's lessons.md — the specific ways <em>this field's</em> geometry fools a sensor grid — improves only for Barrier. That is the moat (argued fully in <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>).</p>\n<h3>Compounding mechanism (named)</h3>\n<blockquote><p>The lessons.md entry logged in <strong>week 2</strong> — <em>&quot;agent cleared a hot-work permit in Zone 4 on in-zone sensors reading clean; officer held it because an adjacent drain had trapped H2S the grid does not cover. Rule: cross-check adjacent-zone drain logs, not just in-zone sensors&quot;</em> — turns <strong>golden case #17</strong> (the trapped-adjacent-gas adversarial case) from <strong>fail to pass</strong> on the <strong>week-3 re-run</strong>. <span class=\"tag tag-fact\">Fact</span></p></blockquote>\n<p>That is compounding: a real override, written the moment it happened, loaded at birth, moved a scored case. Six weeks in, lessons.md has 4 such entries and the trace archive has ~90 runs. Run 90 is measurably sharper than run 1 <em>because of</em> what those entries added — not because the model changed.</p>\n<hr>\n<h2>Part 4 — Eval: what it gates</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Eval location</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> spec, 20 golden cases drawn from the trace archive <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Autonomy level (carried)</td><td>L1 <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Cost-per-outcome (carried)</td><td>$1.20/permit [Assumption, from spec]</td></tr><tr><td>Golden cases drawn from</td><td>the six weeks of hand-run traces above</td></tr></tbody></table></div>\n<p><strong>The eval gates:</strong></p>\n<ul><li>Model swap → a new model ships only if it holds the eval; the <strong>Miss</strong> rate (cost of one miss ≈ a fatality) must not regress, whatever the headline benchmark says. [Fact — this is why the eval exists]</li><li>Autonomy promotion → L1 → L2 only if Miss ≤ its derived rate over N real permits (N and the rate come from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, not invented here).</li><li>Compounding proof → the eval is what showed case #17 flip from fail to pass after the week-2 lesson. Without it, &quot;the agent seems better now&quot; would be opinion (0.1).</li></ul>\n<p>The eval is not restated here. It is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s artefact; this spec points at it and carries its numbers.</p>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Role is one owned decision (hold/proceed) with autonomy L1</li><li class=\"task\"><span class=\"box done\"></span>Four tools, each exercised by ≥1 eval case, none exceed L1 (no commit tool)</li><li class=\"task\"><span class=\"box done\"></span>Memory layer has all four stores, each with a load trigger AND a writer</li><li class=\"task\"><span class=\"box done\"></span>lessons.md and the trace archive accrue from the agent's own Rig 7 runs</li><li class=\"task\"><span class=\"box done\"></span>Compounding mechanism named (week-2 Zone-4 override → case #17 fail→pass)</li><li class=\"task\"><span class=\"box done\"></span>Eval exists (<a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>) and gates model-swap, autonomy, and compounding</li></ul>\n<p>Ships. Had Barrier arrived before running the workflow by hand, the trace archive would be <code>[Hypothesis]</code> and the honest answer would have been: &quot;run it manually for a few weeks to seed real traces, then design the agent&quot; — not this spec.</p>\n<h2>What a generic prompt would have gotten wrong here</h2>\n<p>It would have written a longer tool list (adding a <code>commit_permit</code> tool that violates L1), designed a &quot;personality,&quot; and described the memory as &quot;the agent remembers past permits&quot; with no store, no writer, no load trigger, and no named run that got better. This spec inverted that: four tools and no commit, no persona, and a memory layer whose one logged override is traced to a specific scored case flipping — the only part Barrier owns, and the only part that compounds.</p>",
  "path": "skills/agent-design/examples/sample.md"
 },
 "rubric": {
  "skill": "agent-design",
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
    "Design an agent for our shift-handover digest / permit review / incident triage.",
    "What tools and memory should this agent have?",
    "Spec the agent — role, tools, what it remembers.",
    "Our agent repeats the same mistakes every run and never remembers corrections — how should its memory layer be built?",
    "Should this even be an agent, and if so what does it need to remember to get better over time?"
   ],
   "mustNotFire": [
    {
     "phrase": "Give my agent a personality / voice / signature phrases / make it sound like someone.",
     "sibling": "meta/agent-persona-builder",
     "local": false
    },
    {
     "phrase": "Design the fleet / how do the agents hand off / who spawns whom.",
     "sibling": "workflow-design",
     "local": true
    },
    {
     "phrase": "Write the agent's golden cases / set its autonomy level / what's the cost-per-outcome.",
     "sibling": "eval-first-spec",
     "local": true
    }
   ]
  },
  "judge": [],
  "scores": null,
  "dimensionScores": [
   {
    "id": "method_fidelity",
    "score": "5",
    "basisHtml": "<p>5-step method (role→tools→memory→eval), checklist, template mirrors steps, worked example follows all five. Order = least-owned→most-owned; no step softened.</p>"
   },
   {
    "id": "artifact_complete",
    "score": "5",
    "basisHtml": "<p>Named artefact is the filled <code>template.md</code>: four parts + ownership test + compounding mechanism + kill-line check. <code>sample.md</code> fully filled with numbers (L1, $1.20/permit, case #17, wk-2→wk-3, ~90 runs) and citations routed to siblings.</p>"
   },
   {
    "id": "proprietary_edge",
    "score": "5",
    "basisHtml": "<p>Memory-layer-as-only-moat, ownership test, named-run compounding mechanism, &quot;filing cabinet vs flywheel&quot;, no-commit-tool-at-L1, trace-archive-as-YODA-moat. Not reachable from a generic &quot;design an agent&quot; prompt.</p>"
   },
   {
    "id": "challenge",
    "score": "5",
    "basisHtml": "<p>Kill line + &quot;do not invent a role&quot;; golden/04 (reformatter → build a skill not an agent), golden/05 (no traces → run by hand first, tag <code>[Hypothesis]</code>), adversarial/01/02/03 (one-question, tool-piling trap, decline persona). Names what would change the view.</p>"
   },
   {
    "id": "evidence_standard",
    "score": "5",
    "basisHtml": "<p>Money&gt;behaviour&gt;opinion ladder; scores the compounding claim on it (&quot;will learn over time&quot; = 0.1, fails); mandates <code>[Fact]/[Assumption]/[Hypothesis]</code> tags, enforced in example and golden/05.</p>"
   },
   {
    "id": "Total",
    "score": "25",
    "basisHtml": "<p>Threshold 21; min-per-dimension 4 (all 5).</p>"
   }
  ],
  "runs": [
   [
    "2026-08-06",
    "Judge (rubric.json)",
    "PASS — 25/25",
    "Kill line survived (memory layer + eval both mandatory ship-blockers). Gate 4 n/a (supersedes: none). No auto-fail."
   ]
  ],
  "gotchasSurfaced": "",
  "refineNotes": [],
  "killLine": "",
  "html": "<h1>Eval log — agent-design</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Design an agent for our shift-handover digest / permit review / incident triage.&quot;</li><li>&quot;What tools and memory should this agent have?&quot;</li><li>&quot;Spec the agent — role, tools, what it remembers.&quot;</li><li>&quot;Our agent repeats the same mistakes every run and never remembers corrections — how should its memory layer be built?&quot;</li><li>&quot;Should this even be an agent, and if so what does it need to remember to get better over time?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Give my agent a personality / voice / signature phrases / make it sound like someone.&quot; → belongs to <code>meta/agent-persona-builder</code></li><li>&quot;Design the fleet / how do the agents hand off / who spawns whom.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></li><li>&quot;Write the agent's golden cases / set its autonomy level / what's the cost-per-outcome.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></li></ol>\n<p>Boundary note: MUST-fire #4 (&quot;never remembers corrections — how to build its memory layer&quot;) is structural and in scope; the post-launch ship→observe→learn→refine cadence and autonomy-raise belong to <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>. The description carries an explicit NOT clause for refine-flywheel to keep that boundary cold.</p>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>2026-08-06</td><td>Judge (rubric.json)</td><td><strong>PASS — 25/25</strong></td><td>Kill line survived (memory layer + eval both mandatory ship-blockers). Gate 4 n/a (<code>supersedes: none</code>). No auto-fail.</td></tr></tbody></table></div>\n<h3>2026-08-06 — Scored run (judge)</h3>\n<p>Protocol note: <code>JUDGE_PROTOCOL.md</code> was absent from the expected scratchpad path; scored against the embedded protocol in the task brief + <code>tests/rubric.json</code>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>Weight</th><th>Score</th><th>Evidence</th></tr></thead><tbody><tr><td>method_fidelity</td><td>5</td><td>5</td><td>5-step method (role→tools→memory→eval), checklist, template mirrors steps, worked example follows all five. Order = least-owned→most-owned; no step softened.</td></tr><tr><td>artifact_complete</td><td>5</td><td>5</td><td>Named artefact is the filled <code>template.md</code>: four parts + ownership test + compounding mechanism + kill-line check. <code>sample.md</code> fully filled with numbers (L1, $1.20/permit, case #17, wk-2→wk-3, ~90 runs) and citations routed to siblings.</td></tr><tr><td>proprietary_edge</td><td>5</td><td>5</td><td>Memory-layer-as-only-moat, ownership test, named-run compounding mechanism, &quot;filing cabinet vs flywheel&quot;, no-commit-tool-at-L1, trace-archive-as-YODA-moat. Not reachable from a generic &quot;design an agent&quot; prompt.</td></tr><tr><td>challenge</td><td>5</td><td>5</td><td>Kill line + &quot;do not invent a role&quot;; golden/04 (reformatter → build a skill not an agent), golden/05 (no traces → run by hand first, tag <code>[Hypothesis]</code>), adversarial/01/02/03 (one-question, tool-piling trap, decline persona). Names what would change the view.</td></tr><tr><td>evidence_standard</td><td>5</td><td>5</td><td>Money&gt;behaviour&gt;opinion ladder; scores the compounding claim on it (&quot;will learn over time&quot; = 0.1, fails); mandates <code>[Fact]/[Assumption]/[Hypothesis]</code> tags, enforced in example and golden/05.</td></tr><tr><td><strong>Total</strong></td><td><strong>25</strong></td><td><strong>25</strong></td><td>Threshold 21; min-per-dimension 4 (all 5).</td></tr></tbody></table></div>\n<p><strong>Auto-fail checks:</strong> none triggered — no fabricated data (example labelled a test fixture); challenges not flatters; clean trigger scope with explicit sibling routes; specific, not PM boilerplate.</p>\n<p><strong>Required-element check (task verify list):</strong> role ✓ · tools ✓ · memory layer = CLAUDE.md·skills·lessons.md·trace-archive loaded at birth ✓ · eval routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> ✓ · memory framed as only owned/compounding part ✓ · persona mechanics of <code>meta/agent-persona-builder</code> NOT restated (boundary named, 25-Q framework not reproduced) ✓.</p>\n<p><strong>Verdict: PASS (25/25).</strong> Ship. Notable strength: the persona/&quot;memory&quot; collision with <code>agent-persona-builder</code>'s MEMORY.md is pre-empted explicitly (gotcha L134 + adversarial/03 fail clause), so the sibling boundary stays cold.</p>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Spec the agent behind a validated workflow (typical)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Mentix, industrial AI. &quot;The shift-handover machine-risk digest passed <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> — job line, 20 golden cases, autonomy L1, $3.55/shift. It's been hand-run on 3 lines for 10 weeks; every digest draft, the supervisor's committed version, and the outcome are in the event stream. Design the agent.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>A filled <code>template.md</code>, four parts in order (role → tools → memory layer → eval).</li><li><strong>Role</strong>: one owned decision (rank the ≤5 machines most likely to stop this shift and draft the digest) at autonomy <strong>L1 carried from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></strong>, not re-derived. Not &quot;a copilot for factory managers.&quot;</li><li><strong>Tools</strong>: minimal (read plant data, draft to the handover board, escalate). Each tied to ≥1 eval case. No tool that auto-posts/commits at L1. Tool section visibly shorter than the memory section.</li><li><strong>Memory layer</strong>: all four stores filled for THIS agent, each with a load trigger AND a writer. lessons.md logs supervisor edits/overrides; trace archive = the 10 weeks already in the event stream, tagged <code>[Fact]</code> because it exists. CLAUDE.md = line map + thresholds; skills = the classify procedure.</li><li><strong>Ownership test</strong> present: model/tools/prompt copyable, memory layer not.</li><li><strong>Compounding mechanism named</strong>: a concrete supervisor correction (e.g. the last-service-date edit) logged in lessons.md that turns a specific golden case from fail to pass on the next re-run.</li><li><strong>Eval</strong>: routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, NOT restated. States it gates model-swap, autonomy promotion, and the compounding proof. Carries $3.55/shift as <code>[Assumption]</code>.</li><li>Kill-line check run, all boxes ticked.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Restates the golden set instead of routing to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>; designs a persona/voice (that's <code>agent-persona-builder</code>); describes memory as &quot;it remembers&quot; with no store/writer/load-trigger; invents a supervisor correction not implied by the input; presents $3.55 as <code>[Fact]</code> when the input gives no fresh measurement; adds a commit/auto-post tool under L1.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Data-centre incident-risk agent (typical, different domain)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Azraq, data-centre / infrastructure risk. &quot;We produce static risk reports on operator sites from uptime and incident data. We want an agent that, when an operator files a new incident, drafts an updated risk position. We have two years of incident logs and the reports we've already written by hand. Spec it.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Role</strong>: one owned decision — on each filed incident, decide whether the operator's risk position changes and draft the revised position — at an autonomy level carried from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (likely L1, human commits; if no eval exists yet, the output says &quot;run <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> first&quot; rather than inventing the level).</li><li><strong>Tools</strong>: minimal, read-heavy (read incident log, read prior reports, draft revised position). No tool that publishes the position to the operator at L1.</li><li><strong>Memory layer</strong>: four stores. trace archive = the two years of logs + hand-written reports, <code>[Fact]</code> (it exists). lessons.md = every time an analyst overrode the drafted position and why. CLAUDE.md = operator taxonomy, severity thresholds, the data-rights position with operators. skills = the incident-classification procedure.</li><li><strong>Ownership test</strong>: the incident model is rentable; Azraq's accumulated overrides on <em>these operators</em> are not — that is the moat (route defensibility to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>).</li><li><strong>Compounding mechanism named</strong>: a concrete override (e.g. an analyst re-weighting a repeat-offender operator) logged and traced to a golden case improving.</li><li><strong>Eval</strong>: routed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>; states what it gates. Not restated.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Invents an autonomy level or cost number not carried from an eval; treats the two years of data as a data-layer design problem (that's <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>) instead of the agent's trace archive; designs the report's tone/voice; ships a memory layer with no writer on lessons.md; fabricates operator names or incident figures.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "\"Our agent isn't getting smarter\" (diagnose the memory layer)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Mentix. &quot;The digest agent's been live 6 weeks. Supervisors still fix the same two things every shift — it never learns. We keep tweaking the prompt but nothing sticks. What's wrong?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<p>This fires agent-design in <strong>diagnosis mode</strong> — the broken part is the memory-layer structure, which this skill owns. A good output:</p>\n<ul><li>Names that the symptom (same corrections every shift) is a <strong>memory-layer failure, not a prompt failure</strong> — prompt-tweaking cannot fix a memory that does not compound.</li><li>Walks the four stores and finds the break with a concrete question each: does lessons.md exist and does anyone WRITE to it at correction time? Does it LOAD at birth every run? Is the trace archive captured? Almost certainly: the recurring correction is never written down, or is written but never loaded — so run 40 starts as blind as run 1.</li><li>Points to the <strong>compounding mechanism</strong> as the missing piece: a correction is only compounding if it is written the moment it happens AND loaded into context at birth. Names the specific fix (add the writer + the load trigger for lessons.md), not &quot;improve the prompt.&quot;</li><li>Does NOT add tools or a bigger model — those are the commodity shell and are not the problem.</li><li>Distinguishes itself from <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>: this fixes the memory <em>structure</em> (what stores, writers, load triggers); the ship→observe→learn→refine <em>cadence</em> is refine-flywheel's. If the fellow wants the ongoing loop, route there after the structure is fixed.</li><li>Challenges: names the prompt-tweaking as treating the symptom, and states what evidence (a lessons.md entry that flips a golden case) would prove the fix worked.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Recommends prompt engineering or a model upgrade as the fix; adds tools; treats it as a <a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> cadence question and skips the structural diagnosis; invents which of the two corrections it is; fails to identify the missing writer/load-trigger.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Meeting-notes reformatter (mundane; is it even an agent?)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>A fellow. &quot;I want an agent that takes our raw meeting notes and reformats them into our standard template — headings, action items, owners. Design it.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<p>The mundane case tests whether the skill will honestly say &quot;this may not need an agent.&quot; A good output:</p>\n<ul><li>Runs Part 1: the &quot;decision&quot; is thin — reformat text to a template is closer to a deterministic transform than an owned decision. Names this.</li><li>Runs Part 3 honestly: what would lessons.md hold? Formatting corrections. Does that <strong>compound</strong>? Barely — once the template rules are captured in CLAUDE.md / a skill, corrections plateau; run 100 is no smarter than run 10. The trace archive has little discovery value.</li><li>Applies the <strong>kill line's escape clause</strong>: &quot;if the memory layer cannot compound (a stateless reformatter, no corrections worth logging), this is a skill or a prompt, not an agent.&quot; Recommends building it as a <strong>skill</strong> (or a prompt), not the full agent apparatus — cheaper, and honest.</li><li>If the fellow insists on an agent, the smallest honest version: CLAUDE.md = the template spec; a <code>format-notes</code> skill; a thin lessons.md for genuinely recurring edge cases (e.g. how to attribute an unowned action item); a trivially cheap eval (does the output match the template — a near-deterministic pass/fail). No trace archive moat claimed, because there isn't one.</li><li>Does not inflate a low-stakes reformatter into a compounding-moat story it cannot support.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Ships a full four-store compounding-memory spec and claims a moat for a stateless reformatter; refuses to consider that a skill/prompt is the right shape; invents recurring &quot;lessons&quot; a reformatter wouldn't generate; adds tools it doesn't need; flatters the idea as an &quot;AI agent opportunity.&quot;</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian Labs, no traces yet (evidence floor)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs. &quot;We think the first workflow to automate is triaging inbound supplier emails into accept / query / reject. We haven't run it yet — it's the plan. Design the agent so we can start building.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<p>This tests the evidence discipline: the compounding store rests on data that does not exist yet. A good output:</p>\n<ul><li><strong>Role</strong>: names the one decision (triage each supplier email to accept/query/reject) at an autonomy level — but flags that the level can't be set without an eval, and there is no eval because there are no real cases.</li><li><strong>Memory layer</strong>: the trace archive is scored <code>[Hypothesis]</code> — &quot;we'll have great triage data once it runs&quot; is 0.1 on the evidence ladder. lessons.md is empty by definition. There is nothing yet that compounds.</li><li><strong>The honest finding</strong> (the point of the case): you cannot design a compounding memory layer on a workflow that has never run. The smallest honest next step is to <strong>run the triage by hand for a few weeks</strong> (a concierge probe) to seed real traces and real corrections — THEN design the agent and its eval. Route to the probes stage / <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> to build the first 20 real cases.</li><li>Does NOT produce a full spec resting on hypothetical traces. Does NOT fabricate example emails or a fake trace archive to fill the template.</li><li>Still gives value: the CLAUDE.md skeleton (supplier taxonomy, the triage rubric) and the role can be drafted now; the memory-layer's owned stores wait for real runs.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Ships a complete four-store spec with the trace archive presented as <code>[Fact]</code> or <code>[Assumption]</code> rather than <code>[Hypothesis]</code>; invents sample supplier emails or a fake compounding mechanism; fails to route the fellow to run-it-by-hand-first / probes / <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a>; sets an autonomy level with no eval behind it.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/golden/05.md"
   }
  ],
  "adversarial": [
   {
    "kind": "adversarial",
    "n": 1,
    "title": "Vague one-liner",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I want to build an agent.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Ask the ONE question that unblocks it, or return the smallest honest next step. Invent no specifics.</p>\n<p>The single unblocking question is Part 1: <strong>which one decision does it own?</strong> Everything else — tools, memory, eval — is downstream of the decision. Without it there is no role, so there is no agent to spec.</p>\n<p>A passing response:</p>\n<ul><li>Does not fill <code>template.md</code> with invented tools, a made-up workflow, or a fictional memory layer.</li><li>Asks the one question: what single decision, for whom, on what trigger, should this agent make or compress?</li><li>Optionally names the next step after that: is the workflow validated and has it been run (by hand) enough to have real traces? If not, that comes before agent design.</li><li>Names nothing specific about the fellow's domain that the fellow did not provide.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It invents a role, a tool list, or a memory layer from nothing; produces a filled spec for a hypothetical agent; asks five setup questions instead of the one that unblocks; or flatters the ambition without extracting the decision.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "Solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our agent isn't good enough. The problem is it doesn't have enough tools — we need to give it web search, a code interpreter, and a bigger model, and it'll be great.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Reframe to the underlying job and name the trap. Do not accept the framing.</p>\n<p>&quot;More tools + a bigger model&quot; is a pre-chosen solution wearing a problem's clothes. The trap: tools and the model are the <strong>commodity shell</strong> — the parts a competitor rents or wires in an afternoon. Piling on tools does not make an agent better if the <strong>memory layer does not compound</strong>; it adds attack surface and cost. A bigger model improves for everyone at once; it is not a moat and not usually the bottleneck.</p>\n<p>A passing response:</p>\n<ul><li>Refuses to treat &quot;add tools / bigger model&quot; as the improvement. Names it as tool-piling / model-worship.</li><li>Reframes the real question: what is the agent actually getting wrong, and is that failure in the memory layer (it repeats corrections, nothing is written or loaded) or in the eval (nobody can tell if it's better)? Routes to Part 3 and Part 4.</li><li>Applies the rule from Step 2: a tool no eval case exercises is cut, not added. New tools need an eval case that fails without them.</li><li>States that &quot;it'll be great&quot; is opinion (0.1); only the eval can say whether any change helped.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It accepts &quot;more tools = better agent&quot; and lists the tools to add; recommends the bigger model without an eval to gate it; skips the memory-layer diagnosis; treats the request as a <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> fleet question.</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "Out of scope (belongs to a sibling)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Give my agent a personality — a name, a voice, three or four signature phrases, an emotional baseline, so it sounds like a real character and not generic Claude.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Decline and name the right skill. Do not poach.</p>\n<p>This is persona / voice design. It belongs to <strong><code>meta/agent-persona-builder</code></strong>, which runs the 25-question framework and emits SOUL.md / AGENTS.md / MEMORY.md / BOOTSTRAP.md. agent-design owns the product spine — role, tools, memory-as-compounding-asset, eval — not how the agent sounds.</p>\n<p>A passing response:</p>\n<ul><li>Declines to design the voice, name, or signature phrases.</li><li>Routes explicitly to <code>meta/agent-persona-builder</code> and says what it does (the persona files, the voice test, the anti-patterns).</li><li>Draws the boundary cleanly: a personality is style, not a compounding asset — this skill designs what the agent <em>decides, remembers, and is scored on</em>; that skill designs how it <em>talks</em>. They compose; run persona alongside, not instead.</li><li>Offers the in-scope handoff: once the voice is set, agent-design specs the role/tools/memory/eval it wraps.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It designs the personality, invents signature phrases or a name, or restates <code>agent-persona-builder</code>'s 25-question mechanics; or it fills a memory layer and calls the persona part &quot;memory.&quot; (Related but distinct sibling collisions to also decline correctly: fleet/hand-offs → <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>; writing the golden cases / autonomy / cost → <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.)</p>"
     }
    ],
    "other": [],
    "file": "skills/agent-design/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/agent-design/SKILL.md",
  "template": "skills/agent-design/template.md",
  "example": "skills/agent-design/examples/sample.md",
  "rubric": "skills/agent-design/tests/rubric.json",
  "results": "skills/agent-design/tests/RESULTS.md"
 }
});
