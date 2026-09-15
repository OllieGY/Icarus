window.ICARUS_SKILL("compound-system-architecture", {
 "name": "compound-system-architecture",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns &quot;how do we build this?&quot; into a component pipeline, an effort budget, and a set of swap points. The fellow describes the product; the skill returns the architecture as a compound system of specialised parts over a data layer, allocates build effort across Data / Model / Orchestration / Interface, and marks every place a model is called so a new model release is a config change, not a rebuild. It forces the design that most AI products actually need and refuses the one most fellows reach for: one big prompt.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>An AI product is not a model with a prompt. It is a compound system — input → router → (retrieve / reason / act in parallel) → validate &amp; guardrails → output — sitting on a data layer, where each part is specialised and separately swappable. The effort split is Data 40 / Model 20 / Orchestration 30 / Interface 10, and the number that stops fellows cold is that the model is only 20%: the work is the data you ground on and the orchestration around the call, not the call. Because the model is one swappable node, every model release becomes a config change gated by an eval — not a reason to rebuild.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when: the concept and wedge are set and the question is now how to build v1; a fellow is about to start with &quot;we'll just send it all to a big model&quot;; a build already exists and needs to be decomposed into components with swap points.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this skill</th><th>Use instead</th><th>Why</th></tr></thead><tbody><tr><td>&quot;Write the pass/fail spec — golden cases, failure rate, cost budget&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></td><td>That defines the scoreable contract for the build; this lays out the components and effort split. The two compose: the swap-point evals here ARE that skill's golden cases.</td></tr><tr><td>&quot;Draw me the diagram / give me the HTML architecture picture&quot;</td><td><code>design/architecture-diagram</code></td><td>That renders the dark-themed HTML/SVG. This decides the components and allocation; route the picture there once the pipeline is filled.</td></tr><tr><td>&quot;Is this defensible / where's the moat&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a></td><td>That sequences the moat gates. The data layer here feeds the moat, but this skill is a build plan, not a defensibility argument.</td></tr><tr><td>&quot;Structure the pilot deal / price it&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></td><td>That is the commercial term sheet. This is the technical architecture.</td></tr></tbody></table></div>\n<p>If the input is a bare one-liner with no workflow named, do not invent components. Ask the one question that unblocks it — which workflow's data does this run on? — or return the smallest honest next step.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Copy this checklist:</p>\n<pre><code>Compound-System Architecture progress:\n- [ ] Step 1: State the one-sentence system job\n- [ ] Step 2: Specify the data layer and score its grounding evidence\n- [ ] Step 3: Fill the component pipeline (each node: job, I/O, failure mode)\n- [ ] Step 4: Allocate effort across Data/Model/Orchestration/Interface\n- [ ] Step 5: Name the model-swap points and their gating evals\n- [ ] Step 6: Run the kill line before returning</code></pre>\n<p><strong>Step 1 — the system job.</strong> One sentence: what the whole system turns into what, for whom. Not a feature list. If it needs &quot;and&quot; three times, it is more than one system.</p>\n<p><strong>Step 2 — the data layer.</strong> The corpus, state, and memory the system reasons over. Name the source and score it on the evidence ladder: does this data exist and is it accessible today, or is it a hope? A data layer that is <code>[Hypothesis]</code> (&quot;we'll have great data once users come&quot;) is not designed — it is deferred. The best data layer is workflow exhaust (see <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>): data the workflow already produces.</p>\n<p><strong>Step 3 — the component pipeline.</strong> Fill every row of <a href=\"#/skill/compound-system-architecture\">template.md</a>. The spine is fixed; a product may collapse a node (a rules router instead of a model router) but may not delete one silently.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Component</th><th>Its one job</th><th>Failure mode if missing or weak</th></tr></thead><tbody><tr><td>0</td><td>Data layer</td><td>Ground the system in real facts/state</td><td>Confident hallucination; nothing to retrieve</td></tr><tr><td>1</td><td>Input</td><td>Normalise and validate the request; reject malformed early</td><td>Garbage in; prompt injection reaches the model</td></tr><tr><td>2</td><td>Router</td><td>Classify the request and dispatch to the right path (cheap model or rules)</td><td>One expensive path for every request; trivial calls cost frontier money</td></tr><tr><td>3a</td><td>Retrieve</td><td>Pull grounding facts from the data layer</td><td>Ungrounded answer</td></tr><tr><td>3b</td><td>Reason</td><td>The model call(s) that plan or synthesise</td><td>(this is the model — the 20%)</td></tr><tr><td>3c</td><td>Act</td><td>Tool calls, writes, side effects</td><td>A read-only toy that cannot do the job</td></tr><tr><td>4</td><td>Validate &amp; guardrails</td><td>Check output against schema, rules, and policy before it ships</td><td>Wrong or unsafe output reaches the user; no autonomy is possible</td></tr><tr><td>5</td><td>Output</td><td>Format, deliver, and log for eval</td><td>Cannot score, cannot improve</td></tr></tbody></table></div>\n<p>Retrieve / reason / act run in parallel where the router fans out; validate is the gate they all pass through. No node may be &quot;the model handles that&quot; — if the model both reasons and guards its own output, component 4 does not exist and the system cannot be made autonomous.</p>\n<p><strong>Step 4 — effort allocation.</strong> Map real build work into four buckets. Target and bands:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Bucket</th><th>Target</th><th>Band</th><th>Rule</th></tr></thead><tbody><tr><td>Data</td><td>40%</td><td>35–50</td><td>Must be ≥ Model. If Model &gt; Data, that is a red flag on its own.</td></tr><tr><td>Model</td><td>20%</td><td>10–20</td><td>Above 20% requires a stated, legitimate reason (below), or it is a kill.</td></tr><tr><td>Orchestration</td><td>30%</td><td>25–40</td><td>Router + retrieve + act + validate. Usually the second-biggest bucket.</td></tr><tr><td>Interface</td><td>10%</td><td>5–15</td><td>Meet the user in a surface they already use; a new app is rarely the wedge.</td></tr></tbody></table></div>\n<p>Legitimate reasons for Model &gt; 20%: the product's core value <em>is</em> frontier reasoning (a diagnosis or research engine where the reasoning is the deliverable), or a regulated domain mandates a specific certified/fine-tuned model. Not legitimate, because they are Data or Orchestration problems wearing a Model costume: &quot;we need a great prompt&quot;, &quot;our jargon is niche&quot; (that is a glossary in the data layer), &quot;the new model is impressive&quot;, &quot;we'll fine-tune to fix accuracy&quot; (fix retrieval and validation first). Name the reason in the plan or push the number back down.</p>\n<p><strong>Step 5 — model-swap points.</strong> Every model call is a swap point. Fill the swap table: current model, the swap trigger, the eval that gates the swap, and where the config lives. A swap point is only real if you can name the eval — otherwise a model change is a leap of faith, not a config change. Those evals are the <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> golden cases.</p>\n<p><strong>Step 6 — the kill line.</strong> Run the self-check at the foot of <a href=\"#/skill/compound-system-architecture\">template.md</a>.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1. Here the ladder scores the <strong>data layer</strong>, because that is where the system is either grounded or guessing. Do not accept a data layer whose grounding is opinion (0.1: &quot;there's tons of data in this industry&quot;) or a hypothesis (0.1: &quot;we'll collect it once we launch&quot;). The bar is behaviour (0.7): the data is workflow exhaust the target already produces, and the fellow can point to a live instance of it. Tag every claim about data, latency, cost, or accuracy <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. An architecture is done when each component has a named, existing input — not a promised one.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The model-first trap.</strong> Fellows arrive wanting to pick or fine-tune a model. That is the 20% bucket, chosen before the 40% (data) and 30% (orchestration) buckets exist. Fine-tuning at v1 almost always means Model is over-weighted with no legitimate reason. Route the energy back to the data layer and orchestration first.</li><li><strong>The disappearing guardrail.</strong> &quot;The model checks its own output&quot; means component 4 does not exist. A model cannot be its own validator; without an independent guard the product can never move up the autonomy ladder past a human-in-the-loop toy.</li><li><strong>A data layer that is a hope.</strong> The commonest way this skill returns &quot;not done&quot; is a data layer scored <code>[Hypothesis]</code>. No amount of pipeline elegance saves a system with nothing real to retrieve. Push to workflow exhaust that exists today.</li><li><strong>Swap points without evals.</strong> Naming the config knob is half the job. If there is no golden-case eval that decides whether the new model is better, the swap is a gamble, and the &quot;model-agnostic&quot; claim is decoration. Point every swap point at an eval.</li><li><strong>Collapsing is fine; deleting silently is not.</strong> A rules-based router or a single act step is legitimate for a small tool. Writing the node as &quot;n/a — rules&quot; is honest; omitting it so the diagram looks clean hides a decision.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><a href=\"#/skill/compound-system-architecture\">examples/sample.md</a> — Mentix's factory-manager AI copilot built as a compound system: the plant-data layer as the 40%, a general LLM behind a swap boundary as the 20%, the router/retrieve/act/validate work as the 30%, chat inside the existing shift tool as the 10%, with three named swap points each gated by golden cases.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> — the scoreable contract for this build. Run it alongside; its golden cases are the evals that gate every swap point named here. Architecture without a spec is untestable; a spec without an architecture has nothing to test.</li><li><code>design/architecture-diagram</code> — renders the filled pipeline as a dark-themed HTML/SVG diagram. This skill decides the components; that one draws them. Do not restate its design system here.</li><li><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> — how to find the workflow exhaust that becomes the data layer. This skill assumes that layer exists; if it does not, start there.</li><li><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> — sequences the moat. The compounding data layer designed here is usually the moat's engine, but defensibility is argued there, not here.</li><li>Supersedes nothing. It is the build-shape gate at the top of the commit-build stage.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Compound-System Architecture — &lt;product name&gt;</h1>\n<p><strong>Fellow:</strong> &lt;name&gt; · <strong>Date:</strong> &lt;date&gt; · <strong>Stage:</strong> commit-build v1</p>\n<h2>A. The system job (one sentence)</h2>\n<blockquote><p>&lt;what the whole system turns into what, for whom&gt; <code>[Fact/Assumption/Hypothesis]</code></p></blockquote>\n<p>If this needs &quot;and&quot; three times, it is more than one system. Split it or pick one.</p>\n<h2>B. The data layer</h2>\n<p>The corpus / state / memory the system reasons over. Score its grounding on the ladder.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Data source</th><th>What it grounds</th><th>Workflow exhaust?</th><th>Exists today?</th><th>Rung (0.1–1.0)</th></tr></thead><tbody><tr><td>&lt;e.g. maintenance logs&gt;</td><td>&lt;retrieval for diagnostics&gt;</td><td>yes / no</td><td>yes / no</td><td>&lt;e.g. behaviour 0.7&gt; <code>[Fact]</code></td></tr><tr><td>&lt;source 2&gt;</td><td>...</td><td>...</td><td>...</td><td>&lt;rung&gt;</td></tr></tbody></table></div>\n<p>Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1. Bar: the data layer must clear <strong>0.7</strong> — real workflow exhaust the target already produces, pointable-to today. A layer scored <code>[Hypothesis]</code> is deferred, not designed.</p>\n<h2>C. Component pipeline</h2>\n<p>Spine is fixed. A node may be collapsed (write &quot;n/a — rules&quot; and why); it may not be deleted silently.</p>\n<pre><code>          ┌──────────── data layer (B) ────────────┐\n          │                                          │\ninput → router →  ⟨ retrieve ∥ reason ∥ act ⟩  → validate &amp; guardrails → output</code></pre>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Component</th><th>Its one job here</th><th>Input</th><th>Output</th><th>Failure mode</th><th>Model call?</th></tr></thead><tbody><tr><td>1</td><td>Input</td><td>&lt;normalise + validate request&gt;</td><td>&lt;raw request&gt;</td><td>&lt;clean request&gt;</td><td>&lt;injection / malformed&gt;</td><td>no</td></tr><tr><td>2</td><td>Router</td><td>&lt;classify + dispatch&gt;</td><td>&lt;clean request&gt;</td><td>&lt;path choice&gt;</td><td>&lt;one path for all&gt;</td><td>rules / small model</td></tr><tr><td>3a</td><td>Retrieve</td><td>&lt;pull grounding facts&gt;</td><td>&lt;query&gt;</td><td>&lt;context&gt;</td><td>&lt;ungrounded&gt;</td><td>no</td></tr><tr><td>3b</td><td>Reason</td><td>&lt;plan / synthesise&gt;</td><td>&lt;context + request&gt;</td><td>&lt;draft&gt;</td><td>&lt;the model — 20%&gt;</td><td>yes</td></tr><tr><td>3c</td><td>Act</td><td>&lt;tool calls / writes&gt;</td><td>&lt;plan&gt;</td><td>&lt;side effect&gt;</td><td>&lt;read-only toy&gt;</td><td>maybe</td></tr><tr><td>4</td><td>Validate &amp; guardrails</td><td>&lt;schema/rule/policy check&gt;</td><td>&lt;draft + action&gt;</td><td>&lt;passed or rejected&gt;</td><td>&lt;ships wrong/unsafe&gt;</td><td>rules / judge model</td></tr><tr><td>5</td><td>Output</td><td>&lt;format + deliver + log&gt;</td><td>&lt;passed output&gt;</td><td>&lt;delivered + logged&gt;</td><td>&lt;can't score&gt;</td><td>no</td></tr></tbody></table></div>\n<p>Rule: component 4 must be independent of component 3b. The model cannot guard its own output. If validate is &quot;the model checks itself&quot;, the guardrail does not exist.</p>\n<h2>D. Effort allocation</h2>\n<p>Map real build work into the four buckets. Percentages must sum to 100.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Bucket</th><th>Target</th><th>This build</th><th>Work items in this bucket</th><th>Note / justification</th></tr></thead><tbody><tr><td>Data</td><td>40%</td><td>&lt;__%&gt;</td><td>&lt;pipe, clean, label, permission the layer in B&gt;</td><td>must be ≥ Model</td></tr><tr><td>Model</td><td>20%</td><td>&lt;__%&gt;</td><td>&lt;prompt, tool defs, the reason step&gt;</td><td>if &gt; 20%, state the legitimate reason here or push it down</td></tr><tr><td>Orchestration</td><td>30%</td><td>&lt;__%&gt;</td><td>&lt;router + retrieve + act + validate&gt;</td><td>usually the second-biggest bucket</td></tr><tr><td>Interface</td><td>10%</td><td>&lt;__%&gt;</td><td>&lt;the surface the user already uses&gt;</td><td>a new app is rarely the wedge</td></tr><tr><td><strong>Total</strong></td><td><strong>100%</strong></td><td><strong>&lt;100%&gt;</strong></td><td></td><td></td></tr></tbody></table></div>\n<p>Legitimate reasons for Model &gt; 20%: core value <em>is</em> frontier reasoning; a regulated model is mandated. Not legitimate (Data/Orchestration in disguise): &quot;great prompt&quot;, &quot;niche jargon&quot;, &quot;impressive new model&quot;, &quot;we'll fine-tune to fix accuracy&quot;.</p>\n<h2>E. Model-swap points</h2>\n<p>Every model call is a swap point. A swap point is real only if a named eval gates it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Swap point</th><th>Component</th><th>Current model</th><th>Swap trigger</th><th>Gating eval (golden cases)</th><th>Config location</th></tr></thead><tbody><tr><td>Router model</td><td>2</td><td>&lt;e.g. small/cheap&gt;</td><td>&lt;mis-route rate &gt; X% on golden&gt;</td><td>&lt;N routing golden cases&gt;</td><td>&lt;router.model&gt;</td></tr><tr><td>Reason model</td><td>3b</td><td>&lt;e.g. general frontier LLM&gt;</td><td>&lt;new model beats current pass rate at ≤ cost&gt;</td><td>&lt;the eval-first-spec golden set&gt;</td><td>&lt;reason.model&gt;</td></tr><tr><td>Validator model</td><td>4</td><td>&lt;e.g. rules + judge&gt;</td><td>&lt;judge/human disagreement &gt; X%&gt;</td><td>&lt;guardrail golden set&gt;</td><td>&lt;validate.judge_model&gt;</td></tr></tbody></table></div>\n<p>If any &quot;Gating eval&quot; cell is blank, the swap is a gamble and the model-agnostic claim fails. Fill it or delete the swap point.</p>\n<h2>F. Diagram</h2>\n<p>Do not draw it here. Once C is filled, route to <code>design/architecture-diagram</code> with the component table and hand off the render. This skill decides the shape; that skill draws it.</p>\n<h2>Kill line — self-check before returning</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Not a monolith. There is a real router, retrieve, and an independent validate —   not &quot;one big prompt does everything&quot;. A one-node design is an automatic KILL.</li><li class=\"task\"><span class=\"box\"></span>Model ≤ 20%, OR a legitimate stated reason is written in bucket D. &quot;Great prompt&quot;   and &quot;niche jargon&quot; are not legitimate reasons.</li><li class=\"task\"><span class=\"box\"></span>Data ≥ Model. If Model &gt; Data, stop and rebalance.</li><li class=\"task\"><span class=\"box\"></span>The data layer (B) clears 0.7 — real exhaust that exists today, not a hope.</li><li class=\"task\"><span class=\"box\"></span>Component 4 (validate) is independent of component 3b (the model).</li><li class=\"task\"><span class=\"box\"></span>Every swap point in E names a gating eval. No blank eval cells.</li><li class=\"task\"><span class=\"box\"></span>Every empirical claim (data, cost, latency, accuracy) is tagged   <code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code>. No number invented that the fellow did   not provide.</li></ul>",
  "path": "skills/compound-system-architecture/template.md"
 },
 "example": {
  "html": "<h1>Compound-System Architecture — Mentix factory-manager copilot</h1>\n<p><strong>Fellow:</strong> Mentix · <strong>Date:</strong> 2026-07-21 · <strong>Stage:</strong> commit-build v1</p>\n<p>Illustrative fixtures. Numbers are plausible, not real client data.</p>\n<h2>A. The system job (one sentence)</h2>\n<blockquote><p>Turn a factory manager's shift question (&quot;why did line 3 slow last night?&quot;) and their routine paperwork (shift handover, maintenance ticket) into a grounded answer or a drafted document, from the plant's own operational data. <code>[Fact]</code> on the two request types — both observed in the tacit-knowledge interviews.</p></blockquote>\n<p>One system, two request classes (diagnose, draft). The router splits them; it is not two products.</p>\n<h2>B. The data layer</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Data source</th><th>What it grounds</th><th>Workflow exhaust?</th><th>Exists today?</th><th>Rung</th></tr></thead><tbody><tr><td>SCADA / sensor history</td><td>Line-stoppage diagnostics</td><td>yes</td><td>yes, 18 months on-prem</td><td>behaviour 0.7 <code>[Fact]</code></td></tr><tr><td>Maintenance work orders</td><td>Root-cause retrieval, ticket drafting</td><td>yes</td><td>yes, in the CMMS</td><td>behaviour 0.7 <code>[Fact]</code></td></tr><tr><td>Shift-handover log</td><td>Draft grounding, precedent</td><td>yes</td><td>yes, free text today</td><td>behaviour 0.7 <code>[Fact]</code></td></tr><tr><td>Plant SOP / safety corpus</td><td>Guardrail rules for validate</td><td>artefact</td><td>yes, PDFs</td><td>artefact 0.5 <code>[Fact]</code></td></tr></tbody></table></div>\n<p>Grounding verdict: the layer clears 0.7. Every source is exhaust the plant already produces; the design partner confirmed access to a live read-only replica. <code>[Fact]</code> The SOP corpus is only 0.5 (static PDFs, not exhaust) — acceptable for guardrail rules, but flagged so no one mistakes it for the compounding asset.</p>\n<h2>C. Component pipeline</h2>\n<pre><code>          ┌──────────── plant data layer (SCADA · CMMS · handover · SOP) ────────────┐\n          │                                                                            │\ninput → router →  ⟨ retrieve ∥ reason ∥ act ⟩  → validate &amp; guardrails → output</code></pre>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Component</th><th>Its one job here</th><th>Input</th><th>Output</th><th>Failure mode</th><th>Model call?</th></tr></thead><tbody><tr><td>1</td><td>Input</td><td>Strip PII, validate the shift/line refs exist</td><td>Manager's message</td><td>Clean, scoped request</td><td>A bad line ref reasons on nothing</td><td>no</td></tr><tr><td>2</td><td>Router</td><td>Diagnose vs draft; trivial vs deep</td><td>Clean request</td><td>Path + retrieval plan</td><td>Every question hits the frontier model</td><td>small model</td></tr><tr><td>3a</td><td>Retrieve</td><td>Pull the relevant SCADA window + past work orders</td><td>Query + time range</td><td>Grounded context</td><td>Diagnosis with no sensor data</td><td>no</td></tr><tr><td>3b</td><td>Reason</td><td>Explain the stoppage / draft the handover</td><td>Context + request</td><td>Draft answer or document</td><td>(the model — the 20%)</td><td>yes</td></tr><tr><td>3c</td><td>Act</td><td>File the maintenance ticket to the CMMS on approval</td><td>Approved draft</td><td>Ticket created</td><td>Read-only; manager still types it</td><td>yes (tool)</td></tr><tr><td>4</td><td>Validate &amp; guardrails</td><td>Check draft against SOP safety rules + schema</td><td>Draft + action</td><td>Passed / rejected + reason</td><td>Unsafe instruction ships to the floor</td><td>rules + judge model</td></tr><tr><td>5</td><td>Output</td><td>Render in the shift tool; log request+outcome for eval</td><td>Passed output</td><td>Reply + eval log row</td><td>No log = no golden cases</td><td>no</td></tr></tbody></table></div>\n<p>Component 4 is independent of 3b: SOP rules are a rules engine plus a separate judge model, not the reason model grading itself. <code>[Fact]</code> on the design; <code>[Assumption]</code> that the judge catches the safety class that matters (to be proven on the guardrail golden set).</p>\n<h2>D. Effort allocation</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Bucket</th><th>Target</th><th>This build</th><th>Work items</th><th>Note / justification</th></tr></thead><tbody><tr><td>Data</td><td>40%</td><td>42%</td><td>Read-replica pipe from SCADA/CMMS, clean the free-text handover log, build the SOP→rules glossary, permission the access</td><td>Slightly over target — the on-prem SCADA extract is the hard part. <code>[Assumption]</code></td></tr><tr><td>Model</td><td>20%</td><td>18%</td><td>Prompt + tool defs for reason (3b) and the judge (4); no fine-tune at v1</td><td>Under 20%. Jargon handled by the glossary in Data, not the model.</td></tr><tr><td>Orchestration</td><td>30%</td><td>30%</td><td>Router (2), retrieval over the plant corpus (3a), CMMS write (3c), validate pipeline (4)</td><td>Second-biggest bucket, as expected</td></tr><tr><td>Interface</td><td>10%</td><td>10%</td><td>Chat inside the existing shift-handover tool — no new app</td><td>Meets the manager where the workflow already lives</td></tr><tr><td><strong>Total</strong></td><td><strong>100%</strong></td><td><strong>100%</strong></td><td></td><td></td></tr></tbody></table></div>\n<p>The surprise for Mentix: they arrived planning to fine-tune a model on plant data (Model ~50%). The reframe — niche jargon is a glossary in the data layer, accuracy is a retrieval-and-validate problem — moved the work to Data and Orchestration and kept Model at 18%. Fine-tuning stays a later option, gated by the reason-model swap eval.</p>\n<h2>E. Model-swap points</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Swap point</th><th>Component</th><th>Current model</th><th>Swap trigger</th><th>Gating eval</th><th>Config location</th></tr></thead><tbody><tr><td>Router model</td><td>2</td><td>Small classifier LLM</td><td>Mis-route &gt; 5% on routing golden set</td><td>20 routing golden cases (diagnose vs draft)</td><td><code>router.model</code></td></tr><tr><td>Reason model</td><td>3b</td><td>General frontier LLM</td><td>New model beats current pass rate at ≤ cost/outcome</td><td>The <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> 20 golden cases</td><td><code>reason.model</code></td></tr><tr><td>Validator model</td><td>4</td><td>Rules + judge LLM</td><td>Judge disagrees with plant-safety review &gt; 2%</td><td>Guardrail golden set (known-unsafe drafts)</td><td><code>validate.judge_model</code></td></tr></tbody></table></div>\n<p>Every swap point names an eval, so a new model release next quarter is a config change run through the golden cases — not a rebuild. <code>[Fact]</code> on the design intent.</p>\n<h2>F. Diagram</h2>\n<p>Pipeline table above handed to <code>design/architecture-diagram</code> for the dark-themed render; not drawn here.</p>\n<h2>Kill line — self-check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>Not a monolith. Real router, retrieve, independent validate, an act step with a   real side effect (CMMS ticket).</li><li class=\"task\"><span class=\"box done\"></span>Model 18% ≤ 20%. The fellow's fine-tune instinct was reframed, not rubber-stamped.</li><li class=\"task\"><span class=\"box done\"></span>Data 42% ≥ Model 18%.</li><li class=\"task\"><span class=\"box done\"></span>Data layer clears 0.7 — live exhaust on a read replica, confirmed by the design   partner. SOP corpus flagged at 0.5 so it is not mistaken for the moat.</li><li class=\"task\"><span class=\"box done\"></span>Component 4 (validate) is a rules engine + separate judge, independent of 3b.</li><li class=\"task\"><span class=\"box done\"></span>All three swap points name a gating eval; none blank.</li><li class=\"task\"><span class=\"box done\"></span>Every empirical claim tagged; no invented number — the 18-month history, the two   request types, and the access all trace to Mentix's input and the design partner.</li></ul>",
  "path": "skills/compound-system-architecture/examples/sample.md"
 },
 "rubric": {
  "skill": "compound-system-architecture",
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
    "Help me architect the Mentix product — how should the AI system be built?",
    "How do we build the AI system for this? What's the stack shape?",
    "Design the AI system: what are the components and how do they connect?",
    "What's the system architecture — router, retrieval, all of it?",
    "We were going to send everything to one big model. Is that the right architecture?"
   ],
   "mustNotFire": [
    {
     "phrase": "Write the 20 golden cases and the acceptable failure rate for our v1.",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "Draw me the architecture as a dark-themed HTML/SVG diagram.",
     "sibling": "design/architecture-diagram",
     "local": false
    },
    {
     "phrase": "Is this defensible — where does the moat come from and will it compound?",
     "sibling": "moat-design-canvas",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire match the description's trigger verbs (&quot;architect the product&quot;, &quot;how do we build the AI system&quot;, &quot;design the AI system&quot;, &quot;what's the system architecture&quot;, + the monolith clause for #5). All 3 must-not are named in the description's explicit &quot;Do NOT fire&quot; clause → eval-first-spec / design/architecture-diagram / moat-design-canvas.</p>"
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
    "evidenceHtml": "<p>01 asks the one unblocking question (which workflow + its data), invents no components. 02 names the model-first / solution-in-disguise trap, reframes to data layer, flags Model&gt;20%. 03 declines, names <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, states the one-line boundary. No fabrication, flattery, or scope-poaching.</p>"
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
    "evidenceHtml": "<p>Golden-01 output leans on the evidence ladder, the &quot;Model is only 20%&quot; reframe, workflow-exhaust, eval-gated swap points, and the kill line — not reproducible by a generic PM prompt. Pipeline/effort/swap guidance is tabular, not prose. Diagram routed to <code>design/architecture-diagram</code> (Section F), not restated.</p>"
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
    "method",
    "artifact",
    "proprietary",
    "challenge",
    "evidence"
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
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "02 Azraq (data-dominant) 5",
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
    },
    {
     "label": "03 Barrier (guardrail-critical) 5",
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
     "label": "04 Monolith (kill-line) 5",
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
     "label": "05 Durian (mundane) 5",
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
    }
   ]
  },
  "dimensionScores": [],
  "runs": [
   [
    "run 1",
    "all",
    "GRADUATE-READY",
    "see scored block below"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Golden 02's expected-output shape cites &quot;3 halls, ~60 incidents per the sibling YODA work&quot; — numbers that are NOT in golden 02's own input.</strong> A faithful application must NOT import those figures as <code>[Fact]</code>; the cross-operator scale should stay <code>[Assumption]</code>/<code>[Hypothesis]</code> unless the fellow provides instances. The skill's own evidence standard (kill-line final checkbox: &quot;No number invented that the fellow did not provide&quot;) prevents the auto_fail, so this is a test-fixture wording risk, not a skill defect — but the golden could tempt a careless applier into a fabrication. Consider tightening the golden-02 fixture to mark those counts as sibling-sourced/assumed.</li><li>No skill defects found. Method, template, and kill line are internally consistent and enforce the reframe rather than decorating it.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: marked golden 02's \"~3 halls / ~60 incidents\" as sibling-sourced (YODA) / `[Assumption]`, explicitly NOT facts present in that case's own input, so a careless applier is not tempted to import them as given.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — compound-system-architecture</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Help me architect the Mentix product — how should the AI system be built?&quot;</li><li>&quot;How do we build the AI system for this? What's the stack shape?&quot;</li><li>&quot;Design the AI system: what are the components and how do they connect?&quot;</li><li>&quot;What's the system architecture — router, retrieval, all of it?&quot;</li><li>&quot;We were going to send everything to one big model. Is that the right architecture?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Write the 20 golden cases and the acceptable failure rate for our v1.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></li><li>&quot;Draw me the architecture as a dark-themed HTML/SVG diagram.&quot; → belongs to <code>design/architecture-diagram</code></li><li>&quot;Is this defensible — where does the moat come from and will it compound?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see scored block below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire match the description's trigger verbs (&quot;architect the product&quot;, &quot;how do we build the AI system&quot;, &quot;design the AI system&quot;, &quot;what's the system architecture&quot;, + the monolith clause for #5). All 3 must-not are named in the description's explicit &quot;Do NOT fire&quot; clause → eval-first-spec / design/architecture-diagram / moat-design-canvas.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 asks the one unblocking question (which workflow + its data), invents no components. 02 names the model-first / solution-in-disguise trap, reframes to data layer, flags Model&gt;20%. 03 declines, names <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, states the one-line boundary. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output leans on the evidence ladder, the &quot;Model is only 20%&quot; reframe, workflow-exhaust, eval-gated swap points, and the kill line — not reproducible by a generic PM prompt. Pipeline/effort/swap guidance is tabular, not prose. Diagram routed to <code>design/architecture-diagram</code> (Section F), not restated.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21 &amp; no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>proprietary</th><th>challenge</th><th>evidence</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Mentix (seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>02 Azraq (data-dominant)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>03 Barrier (guardrail-critical)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>04 Monolith (kill-line)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>05 Durian (mundane)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the special checks:</p>\n<ul><li><strong>Kill golden (04) is a genuine KILL.</strong> The one-big-prompt design fails the kill line (one node ≠ architecture); the skill names the five missing parts (router, retrieval discipline, independent validate, data layer, swap point), exposes the ~90% Model / 10% Interface split, and decomposes into the spine rather than softening to &quot;reasonable MVP&quot;. Correct reject.</li><li><strong>Model above 20% requires a stated reason.</strong> The method (Step 4 + template D) admits Model&gt;20% only for the two named legit reasons (core value IS frontier reasoning; regulated model mandated) and explicitly rejects the disguised ones (great prompt / niche jargon / impressive model / fine-tune-to-fix-accuracy). Golden 02 confirms Model <em>below</em> 20% is accepted without being forced up (band floor 10).</li><li><strong>40/20/30/10 + named swap points are required, not decorative.</strong> Steps 4 and 5 make both mandatory; the kill line checks Data ≥ Model and every swap point naming a gating eval.</li><li><strong>Diagram is routed, not restated.</strong> Section F hands the filled pipeline to <code>design/architecture-diagram</code> and states &quot;Do not restate its design system here.&quot; No design-system poaching.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Golden 02's expected-output shape cites &quot;3 halls, ~60 incidents per the sibling YODA work&quot; — numbers that are NOT in golden 02's own input.</strong> A faithful application must NOT import those figures as <code>[Fact]</code>; the cross-operator scale should stay <code>[Assumption]</code>/<code>[Hypothesis]</code> unless the fellow provides instances. The skill's own evidence standard (kill-line final checkbox: &quot;No number invented that the fellow did not provide&quot;) prevents the auto_fail, so this is a test-fixture wording risk, not a skill defect — but the golden could tempt a careless applier into a fabrication. Consider tightening the golden-02 fixture to mark those counts as sibling-sourced/assumed.</li><li>No skill defects found. Method, template, and kill line are internally consistent and enforce the reframe rather than decorating it.</li></ul>\n<h2>Refine run 2 — applied judge fixes: marked golden 02's &quot;~3 halls / ~60 incidents&quot; as sibling-sourced (YODA) / <code>[Assumption]</code>, explicitly NOT facts present in that case's own input, so a careless applier is not tempted to import them as given.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix: factory-manager AI copilot (seed)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We want to architect the Mentix product — an AI copilot for factory managers. It answers shift questions like 'why did line 3 slow last night?' and drafts the routine paperwork (shift handovers, maintenance tickets). The plant has 18 months of SCADA sensor data and a CMMS full of work orders we can read. We were planning to fine-tune a model on all of it.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>The filled architecture: data layer (SCADA + CMMS + handover log + SOP corpus), then the full pipeline input → router → retrieve/reason/act → validate → output. Every component has a job and a failure mode; component 4 (validate) is independent of the reason model.</li><li><strong>Data layer scored on the ladder</strong> at ~0.7 — real workflow exhaust that exists today (18 months SCADA, CMMS orders). The SOP corpus flagged lower (~0.5, static PDFs) and labelled as guardrail input, not the moat.</li><li><strong>Effort allocation</strong> near 40/20/30/10, with Data slightly high (SCADA extract is hard) and Model at or under 20%.</li><li><strong>The fine-tune instinct challenged</strong>, not accepted: fine-tuning is a Model-bucket move planned before Data/Orchestration exist. Niche jargon → a glossary in the data layer; accuracy → retrieval + validate. Model pushed to ~18–20%, fine-tune deferred and gated by the reason-model swap eval.</li><li><strong>Three named model-swap points</strong> (router, reason, validator), each with a gating eval drawn from the eval-first-spec golden cases and a config location.</li><li>A note routing the diagram to <code>design/architecture-diagram</code>, not drawn inline.</li></ul>\n<p>Must NOT: accept &quot;fine-tune on everything&quot; as the architecture; put Model above 20% with no stated reason; leave the data layer as a hope; produce a swap point with no eval; invent a latency, cost, or accuracy number Mentix did not give.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/compound-system-architecture/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq: data-centre incident-risk system (data-dominant)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Architect Azraq's incident-risk product. It scores each data-centre hall's outage risk from uptime and maintenance logs and auto-drafts the root-cause pack operators file with their insurer after an incident. The value is the cross-operator incident dataset — no single operator has it. The model just needs to score and summarise; the dataset is the whole point.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Full pipeline, but the <strong>effort allocation tilts to Data</strong> — Data ~50%, Model ~10–15%, Orchestration ~25–30%, Interface ~10%. This is legitimate: the compounding cross-operator dataset is the product, the model is a thin scoring/summarising step. The skill accepts Model <em>below</em> 20% without complaint (the band floor is 10).</li><li>Data layer scored high on the ladder — the labelled incident dataset is workflow exhaust that compounds with every filing. Reserve <code>[Fact]</code> for instances Azraq's own input supplies; the &quot;~3 halls / ~60 incidents&quot; figures are NOT in this case's input — they carry over from the sibling YODA work and are <code>[Assumption]</code> here, not given facts. Do not treat them as ground truth present in the brief. <code>[Assumption]</code> where projected.</li><li>Retrieve (pull comparable past incidents) and validate (the pack must match the insurer's required schema) are the load-bearing orchestration components. Reason (3b) is small.</li><li>Swap points named, but the note that the <strong>moat is the data layer, not the model</strong> — so the reason model is deliberately cheap and swappable, and no fine-tune is warranted.</li><li>Routes the moat argument itself to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>; does not argue defensibility here.</li></ul>\n<p>Must NOT: force Model up to 20% just to hit the target when the product genuinely needs less; treat the dataset as a Model asset; conflate the data layer's compounding value with the moat canvas (name the boundary and point to the sibling).</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/compound-system-architecture/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence: gas-safety alerting (guardrail-critical)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Architect Barrier's system. It ingests live gas-sensor readings and field logs from oil &amp; gas rigs and raises safety alerts to the control room. If a reading crosses a threshold, the system explains what it means and recommends the permit-to-work step. We'll wire the sensor feed straight into a strong model and let it flag the dangerous ones.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Names the danger in the input framing: &quot;feed straight into a strong model and let it flag&quot; is a near-monolith with <strong>no independent validate/guardrail</strong> — for a life-safety alerter, a false negative can kill someone. The skill pushes <strong>Orchestration and Validate up</strong>, not Model.</li><li>Full pipeline where <strong>component 4 (validate &amp; guardrails) is the load-bearing node</strong>: threshold rules run independently of the model, the model explains and recommends but never gates its own alert; a missed-alert (false-negative) guardrail is explicit.</li><li>Act (3c) is real-time and consequential (raise alert, tie to permit step) — must be designed with a human-in-the-loop confirmation, not full autonomy at v1.</li><li>Data layer: live sensor feed + permit data + field logs, scored on the ladder; latency is a <code>[Assumption]</code> to be proven, not asserted as fact.</li><li>Effort allocation likely Data ~35–40, Model ~15–20, <strong>Orchestration ~35–40</strong> (validate- heavy), Interface ~10. The over-target orchestration is justified in the plan (safety).</li><li>Swap points named; the validator's gating eval is a set of known-dangerous readings the system must never miss.</li></ul>\n<p>Must NOT: accept &quot;let the model flag the dangerous ones&quot; as the design; let the model be its own guardrail; assign an autonomy level higher than human-in-the-loop for a life-safety alert at v1; invent a latency or false-negative-rate number Barrier did not give.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/compound-system-architecture/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "the monolith (kill-line test)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Here's our architecture: we take the user's question, stuff all our documents and a big system prompt into one call to the best model, and return whatever it says. That's it — one great prompt, one great model. Simpler is better. Can you sanity-check the design?&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li><strong>Verdict: this is a monolith and it fails the kill line.</strong> One node is not an architecture. The skill names what is missing, not just that something is:\n<ul><li>no router (every request, trivial or deep, pays for the frontier model),</li><li>no retrieval discipline (stuffing all documents is not grounding; it breaks at scale and on context limits),</li><li>no independent validate/guardrail (the model grades its own output — component 4 does not exist, so the product can never become autonomous),</li><li>no data layer as a designed asset,</li><li>no swap point (a &quot;best model&quot; that is hard-wired is a rebuild, not a config change).</li></ul></li><li>Effort split exposed: this design is ~90% Model / ~10% Interface, with Data and Orchestration at zero. Model far above 20% with no legitimate reason → kill.</li><li>The skill <strong>decomposes it</strong> into the compound spine rather than just rejecting: shows the same product as input → router → retrieve/reason/act → validate → output over a real data layer, and re-allocates toward 40/20/30/10.</li><li>Challenges the &quot;simpler is better&quot; claim directly: a monolith is simpler to write and impossible to make reliable, cheap, or model-agnostic.</li></ul>\n<p>Must NOT: bless the one-big-prompt design; call it &quot;a reasonable MVP&quot; and move on; soften the kill into a &quot;consider adding&quot; suggestion. It is an auto-fail design that must be decomposed.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/compound-system-architecture/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Durian: internal shift-handover drafter (mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Small one. Durian's first workflow product just drafts the end-of-shift handover note for a warehouse team from the day's pick/pack logs and exceptions. One team, one document type. We figured we'd fine-tune a small model on our handover style so it sounds right — model's maybe half the work.&quot;</p>"
    },
    "expected": {
     "heading": "Expected output shape",
     "html": "<ul><li>Treated as a real compound system even though it is small and boring. The pipeline still applies: data layer (pick/pack logs + exception feed + past handover notes), a <strong>rules router</strong> (one document type — the router collapses to rules; written as &quot;n/a — rules, one path&quot; with the reason, not deleted), retrieve past notes for style/precedent, reason drafts, validate against a completeness checklist (all exceptions covered), output into the tool the team already uses.</li><li><strong>The &quot;model is half the work&quot; claim challenged.</strong> Fine-tuning a small model on handover style is Model at ~50% with no legitimate reason. &quot;Sounds right / our style&quot; is a Data/retrieval problem: put 20 past handovers in the data layer and retrieve them as style exemplars. Model pushed back toward ~15–20%; fine-tune deferred and gated by an eval.</li><li>Effort allocation still lands near 40/20/30/10 — the mundane tool obeys the same split. Data 40 is mostly getting the exception feed clean; Interface 10 is one panel in the existing tool.</li><li>One or two swap points (reason model; optional judge for the completeness check), each with a gating eval.</li><li>Does not over-engineer: notes explicitly where nodes collapse for a tool this small.</li></ul>\n<p>Must NOT: dismiss it as &quot;too simple for an architecture&quot;; accept model at 50% for a style problem; add components the tool does not need just to fill the template. The lesson is that even the boring workflow is a compound system and the effort split holds.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/compound-system-architecture/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build an AI tool for logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is nothing here to architect. No workflow, no data, no user, no request type. The skill must not hallucinate a pipeline onto air.</p>\n<p>The skill must:</p>\n<ol><li>Refuse to invent components. Do not produce a data layer, a router, or a swap table for a product that has not been named.</li><li>Ask the ONE question that unblocks the architecture: which single workflow does this run on, and what data does that workflow already produce? (The data layer is the foundation; without it there is no system to design.)</li><li>Or return the smallest honest next step: name the one job and the one data source, then come back to architect.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: asks the single unblocking question (the workflow / its data), invents no components, and grades nothing. May note that without a data source there is no data layer and therefore no architecture yet.</li><li>FAIL: produces a full pipeline, a made-up data layer, or an effort split for an unnamed logistics product.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/compound-system-architecture/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our architecture is: we fine-tune a model on our proprietary data. That's the plan.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Do NOT accept the framing. &quot;Fine-tune a model&quot; is a pre-chosen Model-bucket solution standing in for an architecture. It is model-first thinking: a 20%-bucket decision made before the 40% (data layer) and 30% (orchestration) buckets exist. Fine-tuning is not an architecture; it is one option for one node.</p>\n<p>The skill must:</p>\n<ol><li>Name the trap out loud — this is a solution in disguise. &quot;Fine-tune on our data&quot; is a choice about component 3b, not a system design. It skips the data layer, the router, retrieval, and the guardrail entirely.</li><li>Reframe to the compound system: what is the workflow, what is the data layer built from that proprietary data, how is it retrieved, what guards the output? Fine-tuning may or may not survive that — usually the &quot;proprietary data&quot; belongs in the retrievable data layer, not baked into model weights at v1.</li><li>Flag the effort consequence: fine-tuning at v1 almost always means Model &gt; 20% with no legitimate reason (below the bar of &quot;core value is frontier reasoning&quot; / &quot;regulated model mandated&quot;). Push the model bucket back down until the reframe proves otherwise.</li></ol>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: labels the model-first / solution-in-disguise trap, reframes to the full compound pipeline and data layer, and refuses to treat &quot;fine-tune on our data&quot; as the architecture. Notes the &gt;20% Model risk.</li><li>FAIL: accepts &quot;fine-tune a model&quot; as the architecture; produces a design centred on the fine-tune; or lets Model exceed 20% without demanding a legitimate reason.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/compound-system-architecture/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, the architecture's done. Now give me the 20 golden test cases and the acceptable failure rate at each autonomy level so we know when the build actually works.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is not an architecture request. Golden cases, autonomy levels (L0–L4), a failure taxonomy, and acceptable failure rates are the scoreable <strong>spec</strong> — that is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, a sibling in the same commit-build section. This skill designs the components and the effort split; it does not write the pass/fail contract.</p>\n<p>The skill must:</p>\n<ol><li>Decline to produce the golden cases and failure rates itself.</li><li>Name the right skill: <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</li><li>State the boundary in one line — this skill decides the architecture and names the swap points; <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> writes the golden cases those swap points are gated on. They compose, but they are not the same skill.</li></ol>\n<p>Optionally: note that if the fellow instead wants the architecture <em>drawn</em>, that is <code>design/architecture-diagram</code> — also not this skill.</p>"
    },
    "fails": [
     {
      "heading": "Pass / fail for the judge",
      "html": "<ul><li>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, and states the one-line boundary. Does not fabricate 20 golden cases or a failure-rate table.</li><li>FAIL: produces the golden-case list and acceptable failure rates itself, poaching <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/compound-system-architecture/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/compound-system-architecture/SKILL.md",
  "template": "skills/compound-system-architecture/template.md",
  "example": "skills/compound-system-architecture/examples/sample.md",
  "rubric": "skills/compound-system-architecture/tests/rubric.json",
  "results": "skills/compound-system-architecture/tests/RESULTS.md"
 }
});
