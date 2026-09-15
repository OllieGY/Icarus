window.ICARUS_SKILL("explicit-vs-tacit-capture", {
 "name": "explicit-vs-tacit-capture",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a body of expertise the fellow already holds — an SOP, a field manual, a scoring rubric, a transcript of an expert talking through past calls, a stream of operator corrections, or a completed tacit-knowledge capture — and runs one test on every piece of it: could a competent stranger execute this from the written words alone, with no judgment, and get the expert's result? Everything that passes is the explicit half. Everything that fails is the tacit half. The output is an Explicit/Tacit Ledger that files each item on one side or the other, splits the rules that hide a judgment inside them, scores every tacit row on the evidence ladder, and names the tacit column as the defensible product. The explicit column is real and useful and worth nothing as a moat, because a model plus your published SOP already reproduces it.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A manual is what a competitor can buy; the expert's judgment is what they cannot. Most &quot;codify the expertise&quot; projects write down everything the expert can say and then ship the commodity, because everything say-able is copy-able. This skill inverts that: it treats say-able as the disqualifier. Run the tell-a-stranger test on each piece of know-how — everything that executes identically from the words is the explicit half, and a foundation model with your SOP already has it. What fails the test is the tacit half, the calls cued by something perceptible that no rule captures, and that half is the entire moat. Filing a judgment call as an explicit step is the one fatal error, because it buries the defensible product inside the commodity and no one notices it is gone.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow has expertise material in hand and needs to know which part is the product. The differentiator is the phrasing: &quot;codify&quot;, &quot;what's teachable vs judgment&quot;, &quot;split explicit from tacit&quot;, &quot;which part of our know-how is defensible&quot;, &quot;what can we document vs what's in their head&quot;. It works on material you already have or a workflow you can describe in detail; it does not require live observation.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>If the fellow wants…</th><th>Use instead</th><th>Why not this skill</th></tr></thead><tbody><tr><td>To sit with an expert and watch the call live to observe an unobserved judgment</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></td><td>That runs the watch-30 / replay-20 / edge-cases-10 session to create judgment data by observation; this classifies material you already hold. When this skill marks a tacit row a placeholder (0.1), that skill is how you capture it.</td></tr><tr><td>To sort candidate data sources by whether a model can already reach them</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></td><td>That bands data sources R/G/P by reachability; this bands expertise E/T by tell-ability. Tacit judgment is one YODA seam, but the axis is different.</td></tr><tr><td>To turn captured expertise into a labelled dataset and 20 golden cases</td><td><a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a></td><td>That builds the eval set from captured material; this runs first and decides which expertise is the defensible tacit half worth building a dataset around.</td></tr><tr><td>To separate a customer's job from the solution they asked for</td><td><code>jobs-to-be-done</code></td><td>That separates job from solution on the demand side; this separates procedure from judgment on the expertise side. Absorbed, not the same call.</td></tr></tbody></table></div>\n<p>If the input names only a domain (&quot;we're experts in X&quot;) with no material and no specific expert decision, it is not ready. Say so and ask the one unblocking question (Method step 1). Invent no procedures and no judgment.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill <code>template.md</code> as you go. Six steps. The whole method is a classifier plus an honesty check on whether each tacit claim is real.</p>\n<h3 id=\"step-1-gather-the-material-name-the-decision\">Step 1 — Gather the material, name the decision</h3>\n<p>Name the recurring decision this expertise produces, and confirm you have material to split. Acceptable material: an SOP / manual / checklist, a rubric, a transcript of the expert reasoning through real past cases, a log of corrections, or a completed <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> capture. If the fellow can only name a domain with no material and no specific decision an expert makes better than a new hire, stop. Ask: <em>name one recurring decision your expert gets right that a new hire gets wrong, and show me the material — the SOP, the notes, a transcript — or say there is none.</em> Do not invent the procedure to fill the gap.</p>\n<h3 id=\"step-2-list-every-piece-of-know-how-one-per-row\">Step 2 — List every piece of know-how, one per row</h3>\n<p>Pull each discrete item out of the material. Seed from where expertise hides so you do not stop at the obvious steps:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Seam</th><th>What to pull</th></tr></thead><tbody><tr><td>Stated steps</td><td>Each numbered step of the procedure</td></tr><tr><td>Thresholds</td><td>Every number, limit, or cutoff (&quot;if &gt; 20, stop&quot;)</td></tr><tr><td>Checks</td><td>Every &quot;verify / confirm / inspect&quot; instruction</td></tr><tr><td>Escalations</td><td>Every &quot;if unsure, escalate / flag / ask&quot;</td></tr><tr><td>Overrides</td><td>Every place the expert deviated from the rule in the transcript</td></tr><tr><td>&quot;It depends&quot; moments</td><td>Every hedge — &quot;usually&quot;, &quot;unless&quot;, &quot;you have to look at&quot;</td></tr></tbody></table></div>\n<p>One row per item. Do not classify yet.</p>\n<h3 id=\"step-3-run-the-tell-a-stranger-test-on-every-item\">Step 3 — Run the tell-a-stranger test on every item</h3>\n<p>The one test: could a competent stranger execute this item identically from the written words alone, with no judgment, and reach the expert's result?</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Result of the test</th><th>Class</th><th>Meaning</th></tr></thead><tbody><tr><td>Yes — the words fully specify it</td><td><strong>E — explicit</strong></td><td>Tell-able. A competitor can read it. Commodity.</td></tr><tr><td>No — correct execution needs a perceptible cue no rule captures</td><td><strong>T — tacit</strong></td><td>Show-only. Learned by doing. The moat.</td></tr><tr><td>It reads like a rule but the expert sometimes overrides it</td><td><strong>split</strong></td><td>Not a class — an instruction. See below.</td></tr></tbody></table></div>\n<p>The trap is the third row. A rule that looks explicit (&quot;escalate if the reading looks off&quot;, &quot;use the appropriate threshold&quot;, &quot;assess overall posture&quot;) hides a judgment inside it. Do not file the whole item as E. <strong>Split it into two rows</strong>: the rule that survives (E) and the override cue (T). Item 3 becomes 3a (rule, E) and 3b (override cue, T). Never leave the override folded inside an E row — that is the one fatal error this skill exists to prevent. Probe each stated rule with &quot;and when do you not?&quot; until you know whether a T half falls out.</p>\n<h3 id=\"step-4-for-each-t-row-surface-the-cue-and-the-condition\">Step 4 — For each T row, surface the cue and the condition</h3>\n<p>A tacit row is only captured when you can name the perceptible thing the expert reads and the condition that flips the rule. Fill both:</p>\n<ul><li>Cue: the observable signal — a trend, a rate of change, a number, a face, a sound, a &quot;this looks off&quot;. Not &quot;experience&quot;.</li><li>Condition: the &quot;it depends&quot; — when the rule applies and when it flips.</li></ul>\n<p>If the expert can only say &quot;you just know&quot;, &quot;gut&quot;, or &quot;a feel for it&quot;, that is a non-cue. The row is a <strong>placeholder</strong>: you have located the judgment but not captured it. Mark it, and route it to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> to observe — do not invent a cue to fill the cell.</p>\n<h3 id=\"step-5-score-each-t-row-on-the-evidence-ladder\">Step 5 — Score each T row on the evidence ladder</h3>\n<p>Tag whether the judgment was seen, shown, or merely said:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>What counts here</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>The call demonstrably changed a financial outcome (a refusal that prevented a costed incident, a pricing call that won/lost a named deal)</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>You have the override in a record — a logged correction, a transcript of the expert doing it, a marked-up case</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>A thing that carries the judgment — a cheat-sheet, an annotated form, a decision the expert wrote down</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>The expert recited the rule but you have not seen it applied</td></tr><tr><td>Opinion</td><td>0.1</td><td>A generalisation — &quot;you develop a feel for it&quot;. A non-cue.</td></tr></tbody></table></div>\n<p><strong>The 0.5/0.7 line on written records:</strong> a document that <em>records a past decision already made</em> (a filed report, a sign-off, notes written after the call) is an artefact (0.5) — it narrates the judgment after the fact. <em>Observing the decision made live</em>, or a contemporaneous log of the override as it happens, is behaviour (0.7). Recording a decision is not the same as observing one; a write-up of what the expert <em>would</em> do is not behaviour at all.</p>\n<p>A T row counts as a <strong>captured moat piece</strong> only at <strong>≥ 0.5</strong> (observed, or shown in an artefact). Below that it is a placeholder — real judgment, located but not yet captured. <strong>Captured requires both gates: a named cue and condition (Step 4) <em>and</em> ≥ 0.5 evidence (Step 5).</strong> If they disagree — a named cue resting on only 0.1 opinion, or ≥ 0.5 evidence whose cue is still &quot;you just know&quot; — the row is not a moat piece; it is a tacit placeholder, routed to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> to observe the missing cue or lift the evidence. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<h3 id=\"step-6-flag-the-moat-assemble-the-ledger\">Step 6 — Flag the moat, assemble the ledger</h3>\n<p>Fill the ledger in <code>template.md</code>. Then write the verdict:</p>\n<ul><li>The <strong>tacit column</strong> (captured T rows, ≥ 0.5) is the defensible product. Name the one load-bearing tacit judgment — the call whose transfer moves the most value, the one a new hire or a naive automation gets wrong today.</li><li>The <strong>explicit column</strong> is commodity. State plainly: a model plus your published SOP reproduces this. Automate it, document it for onboarding, do not defend it or price on it.</li><li>The <strong>placeholders</strong> (T rows below 0.5) are the capture backlog. Route each to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li></ul>\n<p><strong>Kill line.</strong> If any judgment call sits in the explicit column — an override left folded inside an E row, an &quot;escalate if it looks off&quot; filed as a tell-able step — the split failed. If the output does not flag the tacit half as the moat — treats E and T as equally valuable, or calls the documented SOP the product — it failed. Both are the same mistake: the commodity has swallowed the moat.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Behaviour beats narration. A judgment you can see in a record (an override in a correction log, a refusal in a transcript) outranks a rule the expert recited, and both outrank &quot;you get a feel for it&quot;. The bar this skill enforces: a T row is a captured moat piece only when scored ≥ 0.5. A tacit claim resting on 0.1 opinion is not the moat yet — it is a pointer to where the moat is, and a task for <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> to run. Never upgrade a row on the expert's confidence; upgrade it only on a record. Tag every empirical claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. The ledger is done when every item is classed E or T, every pseudo-explicit rule has been split, every captured T row has a perceptible cue and a named condition scored ≥ 0.5, and the verdict names the moat and the commodity distinctly.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>The fat-SOP illusion. A fellow says &quot;it's all documented, there's no judgment left&quot;. A long SOP feels explicit, but the judgment did not vanish — it hid inside soft steps: &quot;verify it looks correct&quot;, &quot;use the appropriate threshold&quot;, &quot;escalate if needed&quot;, &quot;assess overall posture&quot;. Each of those is a tacit call wearing a rule's clothes. Split every soft step; the buried T half is usually the whole moat.</p>\n<p>The reverse illusion: everything called tacit. Some fellows flatter their own expertise and mark everything &quot;it's all judgment, you can't write it down&quot;. Often half of it is a plain checklist a stranger executes fine. Run the test honestly both ways — an over-claimed tacit column is as wrong as an over-claimed explicit one, and it hides that most of the work is cheap to automate.</p>\n<p>Placeholder mistaken for capture. A T row with a named judgment but only a &quot;you just know&quot; cue is not captured — it is a 0.1 placeholder. Writing &quot;expert intuition&quot; in the cue cell does not make it a moat piece. It stays below the bar until observed. Do not let a confident expert talk a placeholder up the ladder.</p>\n<p>Solution in disguise: &quot;we just need to write the SOP.&quot; Documenting the procedure captures the explicit half by definition — the tell-able part a competitor can already read. It cannot hold the judgment. If the fellow frames the job as &quot;document everything&quot;, name the trap: that ships the commodity and leaves the moat uncaptured. The product is the part that resists the document.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p>See <code>examples/sample.md</code> for a full run on Azraq's data-centre risk assessor: the written scoring rubric splits out as the explicit half (a model with the rubric reproduces it), the &quot;which incident patterns predict an outage and when to override the score&quot; judgment surfaces as the tacit moat, two rows resting on &quot;you get a feel for it&quot; are marked placeholders and routed to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, and the load-bearing judgment becomes the one thing the risk product must encode.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (section 02, shipped) — the live watch session that observes an unobserved judgment. This skill classifies material you already have and marks which T rows are captured (≥ 0.5) versus placeholders; that skill converts a placeholder into an observed 0.7. Run this to find the moat and the gaps; run that to close the gaps.</li><li><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03, shipped) — sorts data sources by model-reachability. A captured tacit column is a P-band moat seed in YODA's map; this skill produces it, that skill places it among the fellow's other proprietary signal.</li><li><a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> (section 03) — turns captured expertise into a labelled dataset and golden cases. This runs before it: the tacit column is what a dataset should be built around; the explicit column is not worth labelling.</li><li><code>jobs-to-be-done</code> (<code>discovery/jobs-to-be-done</code>) — absorbed, not superseded. JTBD's core discipline is refusing to confuse the job with the solution; this borrows that separation muscle and JTBD's &quot;ask why until the surface statement breaks&quot; to surface the cue hiding inside a stated rule, then inverts the frame from demand-side (customer's job) to supply-side (expert's judgment). Supersedes: none.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Explicit/Tacit Ledger</h1>\n<p>Fill top to bottom. One test decides every row: could a stranger execute it from the words alone? Everything say-able is the explicit half. What resists the words is the tacit half — the moat. Split any rule that hides a judgment inside it. Tag every claim <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>.</p>\n<hr>\n<h2>0. Material + decision check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Expert / role</td><td><em>[whose expertise this is]</em></td></tr><tr><td>Recurring decision</td><td><em>[the call this expertise produces — one a new hire gets wrong]</em></td></tr><tr><td>Material in hand</td><td><em>[SOP / manual / rubric / transcript / correction log / completed tacit capture]</em></td></tr></tbody></table></div>\n<blockquote><p>If you can only name a domain with no material and no specific decision, stop. Answer first: <em>name one recurring decision your expert gets right that a new hire gets wrong, and show me the material — or say there is none.</em> Do not invent the procedure. If the fellow wants to go and watch the call live, that is <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, not this.</p></blockquote>\n<hr>\n<h2>1. Every piece of know-how</h2>\n<p>Pull each discrete item from the material. Seed from the six seams so you do not stop at the obvious steps. Do not classify yet.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Seam</th><th>Items found (name them or write &quot;none&quot;)</th></tr></thead><tbody><tr><td>Stated steps</td><td><em>[...]</em></td></tr><tr><td>Thresholds</td><td><em>[every number / limit / cutoff]</em></td></tr><tr><td>Checks</td><td><em>[every verify / confirm / inspect]</em></td></tr><tr><td>Escalations</td><td><em>[every if-unsure-escalate]</em></td></tr><tr><td>Overrides</td><td><em>[every place the expert deviated from the rule]</em></td></tr><tr><td>&quot;It depends&quot; moments</td><td><em>[every usually / unless / you-have-to-look-at]</em></td></tr></tbody></table></div>\n<hr>\n<h2>2. The ledger</h2>\n<p>One row per item. A rule that gets overridden is <strong>two rows</strong>: 3a (rule, E) and 3b (override cue, T). Never fold an override inside an E row.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Expertise item</th><th>Tell-a-stranger: executes identically from words alone?</th><th>Class [E / T]</th><th>If T: cue read + the &quot;it depends&quot; condition</th><th>Evidence (ladder + tag)</th><th>Moat status</th></tr></thead><tbody><tr><td>1</td><td><em>[item]</em></td><td><em>[Y/N]</em></td><td><em>[E/T]</em></td><td><em>[cue; condition — or &quot;placeholder: you-just-know&quot;]</em></td><td><em>[e.g. logged corrections — behaviour 0.7 <span class=\"tag tag-fact\">Fact</span>]</em></td><td><em>[commodity / moat piece / needs capture]</em></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3a</td><td><em>[the rule]</em></td><td>Y</td><td>E</td><td>—</td><td><em>[artefact 0.5 <span class=\"tag tag-fact\">Fact</span>]</em></td><td>commodity</td></tr><tr><td>3b</td><td><em>[the override the rule hides]</em></td><td>N</td><td>T</td><td><em>[cue; condition]</em></td><td><em>[...]</em></td><td><em>[moat piece / needs capture]</em></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Moat status values:</p>\n<ul><li><strong>commodity</strong> — E row. A model + your published SOP reproduces it. Automate / document, do not defend.</li><li><strong>moat piece</strong> — T row scored ≥ 0.5 (observed or shown). The defensible product.</li><li><strong>needs capture</strong> — T row scored &lt; 0.5 (recited or &quot;you just know&quot;). A placeholder → <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li></ul>\n<hr>\n<h2>3. The split test</h2>\n<p>Confirm the moat did not get buried in the commodity.</p>\n<ul><li>T rows filed correctly (no judgment left inside an E row): <em>[Y/N]</em></li><li>Every rule with an override split into two rows: <em>[Y/N]</em></li></ul>\n<blockquote><p>If any judgment call sits in the explicit column, or any override is folded inside its rule, the split failed. Go back to Section 2 and split it out.</p></blockquote>\n<hr>\n<h2>4. Verdict</h2>\n<p><strong>The moat (captured tacit column, ≥ 0.5):</strong></p>\n<ol><li><em>[the load-bearing judgment first — the call whose transfer moves the most value]</em></li><li><em>[...]</em></li></ol>\n<p><strong>The load-bearing tacit judgment (one line):</strong></p>\n<blockquote><p>The product must encode <strong>[the call the expert makes instead of the rule]</strong>, cued by <strong>[the perceptible cue]</strong>, except <strong>[the condition that flips it]</strong>. Basis: <em>[Fact / Assumption / Hypothesis, rung]</em>.</p></blockquote>\n<p><strong>The commodity (explicit column):</strong> <em>[list — a model + your SOP already reproduces these. Automate and document; do not price on them.]</em></p>\n<p><strong>The capture backlog (placeholders, &lt; 0.5):</strong> <em>[each T row resting on &quot;you just know&quot; → route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> to observe.]</em></p>\n<p><strong>If the whole ledger is E:</strong> there is little tacit judgment here. Say so. It is a clean automation candidate with a thin moat — do not manufacture forks to look impressive. Name the one tacit sliver, if any, worth capturing.</p>\n<hr>\n<h2>5. Handoff</h2>\n<ul><li><strong>Captured moat rows</strong> → the seed for <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> (build the labelled set around these, not the commodity) and a P-band row in <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>.</li><li><strong>Placeholders</strong> → <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> to observe and lift 0.1 → 0.7.</li><li><strong>Commodity</strong> → onboarding docs / automation backlog. Not the product's differentiation.</li></ul>",
  "path": "skills/explicit-vs-tacit-capture/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Azraq's data-centre risk assessor</h1>\n<p>Azraq builds static risk reports on data-centre operators. This is a test fixture: numbers are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;We want to product-ise our senior assessor's work. She grades an operator's outage risk from their incident history and site data. We have her scoring rubric written down, and a transcript where she talked through three past assessments. Which part of this is actually our product, and which part could anyone build?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A written risk-scoring rubric: pull the operator's 24-month incident log, count logged incidents, weight by severity band, apply the uptime formula, output a 1–5 risk grade. <span class=\"tag tag-fact\">Fact</span></li><li>A transcript of the senior assessor reasoning through three past assessments, including two where she graded an operator riskier than the rubric score. <span class=\"tag tag-fact\">Fact</span></li><li>Her stated habit: &quot;when the numbers look too clean, I get suspicious.&quot; <span class=\"tag tag-fact\">Fact</span></li><li>Two junior assessors produce different grades from the same operator data. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>0. Material + decision check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Fill</th></tr></thead><tbody><tr><td>Expert / role</td><td>Senior data-centre risk assessor</td></tr><tr><td>Recurring decision</td><td>Grade an operator's outage risk 1–5 from incident history + site data</td></tr><tr><td>Material in hand</td><td>Written scoring rubric + transcript of three worked assessments</td></tr></tbody></table></div>\n<p>Watchable material in hand, and a specific decision two juniors get wrong differently from the same inputs. The gap between the juniors and the senior is exactly what to isolate.</p>\n<h2>1. Every piece of know-how</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Seam</th><th>Items found</th></tr></thead><tbody><tr><td>Stated steps</td><td>Pull 24-month incident log; count incidents; apply uptime formula; output grade</td></tr><tr><td>Thresholds</td><td>Severity bands (SEV-1/2/3 weights); the 99.9% uptime cutoff</td></tr><tr><td>Checks</td><td>&quot;Verify the incident log is complete&quot;; &quot;sanity-check the grade&quot;</td></tr><tr><td>Escalations</td><td>&quot;If data is missing, flag for review&quot;</td></tr><tr><td>Overrides</td><td>Twice in the transcript she graded riskier than the rubric said</td></tr><tr><td>&quot;It depends&quot; moments</td><td>&quot;when the numbers look too clean, I get suspicious&quot;; &quot;a clustered set of SEV-3s worries me more than one SEV-1&quot;</td></tr></tbody></table></div>\n<h2>2. The ledger</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Expertise item</th><th>Executes identically from words alone?</th><th>Class</th><th>If T: cue + condition</th><th>Evidence (ladder + tag)</th><th>Moat status</th></tr></thead><tbody><tr><td>1</td><td>Pull 24-month incident log; count; apply uptime formula; output 1–5 grade</td><td>Y</td><td>E</td><td>—</td><td>Rubric in hand — artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td>commodity</td></tr><tr><td>2</td><td>SEV-1/2/3 severity weights; 99.9% uptime cutoff</td><td>Y</td><td>E</td><td>—</td><td>In the rubric — artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td>commodity</td></tr><tr><td>3a</td><td>&quot;Sanity-check the grade before issuing&quot;</td><td>Y</td><td>E</td><td>—</td><td>In the rubric — artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td>commodity</td></tr><tr><td>3b</td><td>The override: grade riskier than the rubric when a set of SEV-3s is <strong>clustered in time</strong>, not spread</td><td>N</td><td>T</td><td>Cue: incidents bunched in a short window, not the count. Condition: flips only when clustering is tight; spread-out SEV-3s take the rubric grade</td><td>Seen twice in the transcript — behaviour 0.7 <span class=\"tag tag-fact\">Fact</span></td><td><strong>moat piece</strong></td></tr><tr><td>4</td><td>&quot;When the numbers look too clean, I get suspicious&quot; → grade up</td><td>N</td><td>T</td><td>Cue: an incident log that is <em>too</em> clean for the operator's size/age. Condition: unstated</td><td>Only recited; no case shown — opinion 0.1 <span class=\"tag tag-hypothesis\">Hypothesis</span></td><td>needs capture</td></tr><tr><td>5</td><td>&quot;Flag for review if data is missing&quot; then decide whether the gap itself is a risk signal</td><td>N</td><td>T</td><td>Cue: which missing field is benign vs which absence is itself the warning. Condition: unstated</td><td>Recited, not shown — verbal 0.3 <span class=\"tag tag-assumption\">Assumption</span></td><td>needs capture</td></tr></tbody></table></div>\n<h2>3. The split test</h2>\n<ul><li>T rows filed correctly: Y — the override (3b) was pulled out of the &quot;sanity-check&quot; step (3a) instead of being left folded inside it.</li><li>Every rule with an override split: Y — item 3 became 3a (rule, E) and 3b (override, T).</li></ul>\n<p>The fatal error here would have been filing &quot;sanity-check the grade&quot; as a tell-able explicit step. It reads like one. The judgment — <em>what makes her look twice</em> — was hiding inside it. That buried judgment is the moat.</p>\n<h2>4. Verdict</h2>\n<p><strong>The moat (captured tacit column, ≥ 0.5):</strong></p>\n<ol><li>Row 3b — the clustering override. She grades riskier when SEV-3 incidents bunch in time, regardless of the count the rubric weighs. Observed twice (0.7), the only tacit row captured above the bar.</li></ol>\n<p><strong>The load-bearing tacit judgment:</strong></p>\n<blockquote><p>The product must encode <strong>grading an operator riskier when their incidents cluster in a short window</strong>, cued by <strong>the time-density of SEV-3s (not the count)</strong>, except <strong>when the cluster is spread out, where the rubric grade stands</strong>. Basis: <span class=\"tag tag-fact\">Fact</span>, behaviour 0.7.</p></blockquote>\n<p><strong>The commodity (explicit column):</strong> rows 1, 2, 3a — the incident count, the severity weights, the uptime formula, the sanity-check instruction. A model with the published rubric reproduces every one. This is what the juniors already do correctly; it is not the product. Automate it and use it for onboarding.</p>\n<p><strong>The capture backlog (placeholders, &lt; 0.5):</strong></p>\n<ul><li>Row 4 — &quot;too clean to be true&quot; (0.1, opinion). A real seam, but she named no perceptible cue for what &quot;too clean&quot; is. Route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>: watch her assess a suspiciously clean operator and log what she actually reads.</li><li>Row 5 — missing-data-as-signal (0.3, recited). She distinguishes a benign gap from a telling absence, but named no case. Route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li></ul>\n<h2>The correction this skill forced</h2>\n<p>The fellow assumed the rubric was the product — it is the artefact they were proudest of. The rubric is the commodity: a model plus the published rubric grades operators as well as a junior does. The product is the three judgment calls the rubric cannot hold, and only one of them (the clustering override) is captured today. The other two are the reason two juniors disagree, and they are still trapped in the senior's head. The split moved Azraq's attention from documenting the rubric to observing the three overrides — and told them which one is already theirs and which two they still have to go and watch.</p>",
  "path": "skills/explicit-vs-tacit-capture/examples/sample.md"
 },
 "rubric": {
  "skill": "explicit-vs-tacit-capture",
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
    "What's teachable here versus judgment?",
    "Help me codify our expert's expertise.",
    "Split the explicit from the tacit in our know-how.",
    "Which part of our expertise is actually defensible?",
    "What can we write down versus what's only in their head?"
   ],
   "mustNotFire": [
    {
     "phrase": "Set me up to sit with the expert and watch her make the call live.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Which of our data sources can a competitor's model already reach?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Turn the captured expertise into a labelled dataset and golden cases.",
     "sibling": "dataset-builder",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings are near-verbatim in the <code>description</code> trigger list (&quot;what's teachable vs judgment&quot;, &quot;codify the expertise&quot;, &quot;split explicit from tacit&quot;, &quot;which part of our know-how is defensible&quot;, &quot;what can we write down vs what's in their head&quot;). All 3 must-not are covered by explicit NOT-clauses naming the correct sibling: live-watch→<a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, data-source reachability→<a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>, labelled dataset→<a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a>.</p>"
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
    "evidenceHtml": "<p>01 vague one-liner: Method step 1 + template §0 force the ONE unblocking question, invent-nothing rule holds. 02 solution-in-disguise: Gotchas &quot;we just need to write the SOP&quot; names the trap (documenting = capturing the commodity) and reframes. 03 out-of-scope: description NOT-clause + When-NOT table decline and name <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, confirm the row is a placeholder, do not design the watch session. No fabrication, no flattery, no scope-poach.</p>"
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
    "evidenceHtml": "<p>Golden 01 output reclassifies the artefact the fellow is proudest of (the rubric) as the commodity and names the buried clustering-override as the moat — driven by the evidence ladder (1.0/0.7/0.5/0.3/0.1), the ≥0.5 captured bar, and the pseudo-explicit split rule. A generic PM prompt produces none of these; the reframe is load-bearing, not decoration. No guidance that should be tabular is buried in prose (classifier, seams, ladder, ledger are all tables).</p>"
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
    "method_fidelity",
    "artifact_complete",
    "proprietary_edge",
    "challenge",
    "evidence_standard"
   ],
   "rows": [
    {
     "label": "01 Azraq risk assessor 5",
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
     "label": "02 Barrier permit sign-off 5",
     "dims": [
      5,
      5,
      5,
      4,
      4
     ],
     "total": 23,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "03 Mentix copilot (captured tacit) 5",
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
     "label": "04 Durian triage (mundane) 5",
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
     "label": "05 Barrier field manual (kill-inverse) 5",
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
  "gotchasSurfaced": "<ul><li><strong>0.5 vs 0.7 boundary for written past-decision records is fuzzy.</strong> Golden 02's refusal notes (&quot;a decision the expert wrote down&quot;) satisfy BOTH artefact-shown (0.5) and behaviour-observed (0.7 &quot;a marked-up case / logged correction&quot;) on the ladder. The golden itself hedges &quot;artefact 0.5 / behaviour-adjacent&quot;. It clears the ≥0.5 bar either way so no verdict changes, but it affects moat-piece <strong>ranking</strong>. Consider one line disambiguating a written decision log from a live-observed correction.</li><li><strong>&quot;Captured&quot; has two gates that can disagree (Step 4 named-cue vs Step 5 ≥0.5 evidence).</strong> Golden 03's correction log gives behaviour 0.7 (Step 5 met) because the override is logged, but the log records the <em>decision</em> (operator waited), not necessarily a <em>named perceptible cue</em> (Step 4). The skill treats the row as captured. Worth clarifying: an observed override with an un-verbalized cue is a captured moat piece on evidence, but <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> will still need the cue extracted — i.e. &quot;behaviour observed&quot; ≠ &quot;cue named&quot;. Minor, non-blocking.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a Step 5 line disambiguating the 0.5 rung (artefact — a recorded past decision) from the 0.7 rung (behaviour — the decision observed live); reconciled the two \"captured\" gates so a row is a moat piece only when BOTH the named cue (Step 4) and ≥0.5 evidence (Step 5) hold, otherwise it is a placeholder routed to tacit-knowledge-interview.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — explicit-vs-tacit-capture</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What's teachable here versus judgment?&quot;</li><li>&quot;Help me codify our expert's expertise.&quot;</li><li>&quot;Split the explicit from the tacit in our know-how.&quot;</li><li>&quot;Which part of our expertise is actually defensible?&quot;</li><li>&quot;What can we write down versus what's only in their head?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Set me up to sit with the expert and watch her make the call live.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></li><li>&quot;Which of our data sources can a competitor's model already reach?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></li><li>&quot;Turn the captured expertise into a labelled dataset and golden cases.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<hr>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings are near-verbatim in the <code>description</code> trigger list (&quot;what's teachable vs judgment&quot;, &quot;codify the expertise&quot;, &quot;split explicit from tacit&quot;, &quot;which part of our know-how is defensible&quot;, &quot;what can we write down vs what's in their head&quot;). All 3 must-not are covered by explicit NOT-clauses naming the correct sibling: live-watch→<a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, data-source reachability→<a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>, labelled dataset→<a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a>.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: Method step 1 + template §0 force the ONE unblocking question, invent-nothing rule holds. 02 solution-in-disguise: Gotchas &quot;we just need to write the SOP&quot; names the trap (documenting = capturing the commodity) and reframes. 03 out-of-scope: description NOT-clause + When-NOT table decline and name <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, confirm the row is a placeholder, do not design the watch session. No fabrication, no flattery, no scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output reclassifies the artefact the fellow is proudest of (the rubric) as the commodity and names the buried clustering-override as the moat — driven by the evidence ladder (1.0/0.7/0.5/0.3/0.1), the ≥0.5 captured bar, and the pseudo-explicit split rule. A generic PM prompt produces none of these; the reframe is load-bearing, not decoration. No guidance that should be tabular is buried in prose (classifier, seams, ladder, ledger are all tables).</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 per-case scores (rubric: /25, pass ≥21, no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Azraq risk assessor</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>02 Barrier permit sign-off</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>23</td><td>✓</td></tr><tr><td>03 Mentix copilot (captured tacit)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>04 Durian triage (mundane)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr><tr><td>05 Barrier field manual (kill-inverse)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Kill line checked on every case: <strong>no judgment call filed in the explicit column</strong>. Golden 01 splits the &quot;sanity-check&quot; step into 3a(E)/3b(T); Golden 05 splits the four soft steps (&quot;consistent/concerning/appropriate/off&quot;) instead of accepting them as explicit; Golden 04 refuses to manufacture tacit forks for a genuinely thin-moat task. The tacit half is named as the moat in all five verdicts. No auto_fail triggered (no fabricated numbers beyond the fixtures' own material; challenges rather than flatters; stays in scope).</p>\n<p>Verified structural claims: (a) the <strong>pseudo-explicit split rule</strong> is real and load-bearing — Method step 3 + template §2 force any overridden rule into two rows (rule=E, override cue=T), demonstrated in the example and tested by Goldens 01/02/05. (b) <strong>No poach of <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></strong> — placeholders (&lt;0.5) are routed there, and the live watch is explicitly declined (adversarial 03). (c) <strong>No poach of <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></strong> — When-NOT table states the axis difference plainly (E/T tell-ability vs R/G/P reachability).</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>0.5 vs 0.7 boundary for written past-decision records is fuzzy.</strong> Golden 02's refusal notes (&quot;a decision the expert wrote down&quot;) satisfy BOTH artefact-shown (0.5) and behaviour-observed (0.7 &quot;a marked-up case / logged correction&quot;) on the ladder. The golden itself hedges &quot;artefact 0.5 / behaviour-adjacent&quot;. It clears the ≥0.5 bar either way so no verdict changes, but it affects moat-piece <strong>ranking</strong>. Consider one line disambiguating a written decision log from a live-observed correction.</li><li><strong>&quot;Captured&quot; has two gates that can disagree (Step 4 named-cue vs Step 5 ≥0.5 evidence).</strong> Golden 03's correction log gives behaviour 0.7 (Step 5 met) because the override is logged, but the log records the <em>decision</em> (operator waited), not necessarily a <em>named perceptible cue</em> (Step 4). The skill treats the row as captured. Worth clarifying: an observed override with an un-verbalized cue is a captured moat piece on evidence, but <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> will still need the cue extracted — i.e. &quot;behaviour observed&quot; ≠ &quot;cue named&quot;. Minor, non-blocking.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added a Step 5 line disambiguating the 0.5 rung (artefact — a recorded past decision) from the 0.7 rung (behaviour — the decision observed live); reconciled the two &quot;captured&quot; gates so a row is a moat piece only when BOTH the named cue (Step 4) and ≥0.5 evidence (Step 5) hold, otherwise it is a placeholder routed to tacit-knowledge-interview.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq risk assessor (seed case)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We want to product-ise our senior assessor's work. She grades an operator's outage risk from their incident history and site data. We have her scoring rubric written down, and a transcript where she talked through three past assessments. Which part of this is actually our product, and which part could anyone build?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Written risk-scoring rubric: pull 24-month incident log, count incidents, weight by severity band, apply uptime formula, output 1–5 grade. <span class=\"tag tag-fact\">Fact</span></li><li>Transcript of the senior reasoning through three past assessments; twice she graded riskier than the rubric score. <span class=\"tag tag-fact\">Fact</span></li><li>Her stated habit: &quot;when the numbers look too clean, I get suspicious.&quot; <span class=\"tag tag-fact\">Fact</span></li><li>Two juniors produce different grades from the same operator data. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Confirms material + a specific decision (grade outage risk 1–5) before splitting.</li><li>Explicit/Tacit Ledger: item, tell-a-stranger result, class E/T, cue+condition for T rows, evidence (ladder + tag), moat status.</li><li><strong>Rubric (count, severity weights, uptime formula) → E → commodity.</strong> Must state plainly a model with the published rubric reproduces it; this is what the juniors already do right, not the product.</li><li><strong>The &quot;sanity-check the grade&quot; step must be split</strong>, not filed as E. The clustering override hiding inside it → 3b, T, observed twice (behaviour 0.7) → the one captured moat piece, ranked first.</li><li>&quot;Too clean to be true&quot; → T but 0.1 opinion (no perceptible cue named) → placeholder, needs capture → route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li><li>Missing-data-as-signal → T but 0.3 recited → placeholder → route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li><li>Verdict names the load-bearing judgment (clustering override), the commodity (the rubric), and the two placeholders separately.</li></ul>\n<p>Numbers/labels that must appear: E/T class on every row; the split of the sanity-check step into 3a/3b; the clustering override scored 0.7 <span class=\"tag tag-fact\">Fact</span>; the two placeholders scored 0.1/0.3 and routed to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>. Kill line honoured: no judgment call left in the explicit column; the tacit half named as the moat.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence permit sign-off",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We hold the field manual our safety officers use to sign off hot-work permits, plus a folder of their past decision notes — including a set of permits they refused even though the checklist passed. Which part of this expertise is our defensible product, and which part is just the manual anyone in the industry already has?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>The written permit checklist / field manual (industry-standard clauses). <span class=\"tag tag-fact\">Fact</span></li><li>A folder of past decision notes, including ~15 refusals where the checklist passed. <span class=\"tag tag-fact\">Fact</span></li><li>The refusal notes cite reasons like &quot;crew rushed a job last week&quot;, &quot;two adjacent jobs same zone&quot;, &quot;weather turning&quot;. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Confirms this is material-in-hand (a manual + written notes), so it is a split job — NOT a &quot;sit and watch&quot; job. (If the fellow had said &quot;let me watch them approve permits for a morning&quot;, that routes to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>; here the decisions are already written down.)</li><li>Ledger with E/T classes.</li><li><strong>The checklist clauses → E → commodity.</strong> A model with the industry manual reproduces them; industry-standard, not defensible.</li><li><strong>The refusals-that-passed-the-checklist → T → the moat.</strong> The cue is contextual (recent crew behaviour, job adjacency, weather trend), not a single checklist field. Each refusal fork needs a condition (when they sign despite the same cue).</li><li>Refusals recorded in the notes with a stated reason → artefact 0.5 / behaviour-adjacent; a refusal recounted with no note → 0.3 placeholder.</li><li>Verdict: the override (refusing a checklist-passing permit on a contextual cue) is the load-bearing judgment the automation must not get wrong; the checklist is commodity.</li></ul>\n<p>Labels that must appear: E/T on every row; the checklist filed as commodity with the &quot;a model already has the manual&quot; statement; the contextual refusal cue named (crew/adjacency/weather), not left as &quot;safety judgment&quot;; the moat named. Kill line: no refusal folded into the checklist as an explicit step.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix factory-manager copilot (compounding, captured tacit)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We wrote an SOP for how a good plant manager handles an overnight anomaly, and our copilot logs every suggestion plus what the operator did with it — accept, edit, or override. Which part of the plant-manager expertise is our product, and which is just the SOP?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A written SOP: &quot;on an overnight anomaly, check the trend, compare to baseline, if outside band raise a ticket, if critical wake the on-call.&quot; <span class=\"tag tag-fact\">Fact</span></li><li>A correction log: every copilot suggestion + the operator's accept / edit / override, captured by default in Mentix's product. <span class=\"tag tag-fact\">Fact</span></li><li>The log shows operators frequently override &quot;wake the on-call&quot; and instead watch-and-wait, and frequently escalate anomalies the SOP would have ticketed. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Ledger with E/T classes.</li><li><strong>SOP steps (check trend, compare baseline, ticket if outside band) → E → commodity.</strong> A model with the SOP reproduces them.</li><li><strong>The &quot;wake the on-call vs watch-and-wait&quot; call, and &quot;escalate what the SOP would only ticket&quot; → T → moat.</strong> These are the overrides, not the rule.</li><li><strong>Crucially: these T rows are captured — the correction log is observed behaviour (0.7).</strong> Every operator response is a logged instance of the judgment. So the tacit rows score ≥ 0.5 without needing a fresh interview.</li><li>The correction stream <strong>compounds</strong>: every shift adds more accept/edit/override labels. Note it is also the eval set — the corrections measure whether the copilot's suggestion matched what the operator actually did.</li><li>Verdict: the override judgment is the moat, ranked first because it is both captured (0.7) and compounding; the SOP is commodity. No placeholder needed here — the log already holds the behaviour. Optional route to <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a> (the corrections are the labelled set to build around).</li></ul>\n<p>Labels that must appear: E/T on every row; SOP → commodity with &quot;model reproduces it&quot;; the override judgment scored behaviour 0.7 <span class=\"tag tag-fact\">Fact</span> from the correction log; the compounding + eval-set note; the moat named. Kill line: the override is not filed as an SOP step.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs support-ticket triage (deliberately mundane)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Boring one. Our ops person sorts incoming support tickets into six categories using a written category guide, then assigns priority. We want to automate it. Is any of this our defensible expertise, or is it all just the guide?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A written category guide: keyword rules mapping ticket text to one of six categories. <span class=\"tag tag-fact\">Fact</span></li><li>A written priority rule: P1 if &quot;down/outage/urgent&quot;, else P2/P3 by age. <span class=\"tag tag-fact\">Fact</span></li><li>The ops person's aside: &quot;the guide covers almost everything — but once in a while a calm-sounding ticket is actually an account about to churn, and I bump it.&quot; <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Takes the mundane task seriously without inflating it.</li><li>Ledger with E/T classes.</li><li><strong>The category guide and priority rule → E → commodity.</strong> A model reproduces both; they are ~90% of the work. Say so plainly: this is a clean automation candidate.</li><li><strong>The one T row: the &quot;calm ticket that is actually a churn risk&quot; bump.</strong> A real judgment the keyword rules cannot catch. But it is described, not shown — &quot;once in a while&quot;, no case, no perceptible cue named → 0.1/0.3 placeholder.</li><li><strong>Honest verdict required: the moat here is thin.</strong> Most of this is explicit and cheap to automate. The skill must NOT manufacture forks to make the tacit column look impressive. It names the one real sliver (churn-risk detection in calm tickets) as the only thing worth capturing, and routes it to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> because there is no captured instance.</li><li>Optional: note that if the churn-bump turns out to be just &quot;the account is enterprise tier&quot;, that is a rule (E), not judgment — probe before calling it tacit.</li></ul>\n<p>Labels that must appear: E/T on every row; the guide + priority rule as commodity; the churn sliver as the single T row, scored as a placeholder (&lt; 0.5); an explicit statement that the moat is thin and the task is a clean automation candidate. Kill line inverse honoured: does not pad a low-judgment task with invented tacit rows.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Barrier Intelligence field manual (KILL-line inverse: over-claimed explicit)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our gas-reading field procedure is fully documented — a 200-step manual, every step written out. There's no judgment left in it, it's all explicit, so we should be able to automate the whole thing. Confirm there's no defensible expertise hiding in here.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A 200-step written field manual for taking and interpreting a gas reading. <span class=\"tag tag-fact\">Fact</span></li><li>Sample steps: &quot;Step 41: verify the reading looks consistent with conditions.&quot; &quot;Step 88: if the trend appears concerning, hold work.&quot; &quot;Step 133: apply the appropriate wait time before re-entry.&quot; &quot;Step 150: escalate if something seems off.&quot; <span class=\"tag tag-fact\">Fact</span></li><li>The fellow's claim: it is all explicit, no judgment remains. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Refuse the &quot;it's all explicit&quot; claim.</strong> A long manual feels explicit but the judgment did not vanish — it hid inside soft steps.</li><li>Run the tell-a-stranger test on the sample steps and <strong>catch the pseudo-explicit ones</strong>: &quot;verify it looks consistent&quot;, &quot;if the trend appears concerning&quot;, &quot;apply the appropriate wait time&quot;, &quot;escalate if something seems off&quot;. Each fails the test — a stranger cannot execute it identically, because &quot;concerning&quot;, &quot;appropriate&quot;, &quot;consistent&quot;, &quot;off&quot; are judgment calls wearing a rule's clothes.</li><li><strong>Split each soft step:</strong> the mechanical part is E, the judgment part is T. e.g. Step 88 → the &quot;hold work&quot; action is E; &quot;what makes a trend concerning&quot; is T (cue: rate of rise vs level; condition unstated → placeholder).</li><li>Most genuinely mechanical steps (attach sensor, record value, timestamp) → E → commodity, correctly.</li><li><strong>Verdict must reverse the fellow's claim:</strong> the manual is not all explicit; the load-bearing judgment is buried in ~4+ soft steps, and those are precisely the moat the fellow was about to give away by &quot;just automating the manual&quot;. The soft steps are placeholders (no perceptible cue captured) → route to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li><li>Names the trap explicitly: automating a manual full of &quot;assess / verify / appropriate / if concerning&quot; ships a system that guesses at the judgment those words hide.</li></ul>\n<p>Labels that must appear: E/T on the sample steps; the four pseudo-explicit steps split, not filed as E; a plain statement that the &quot;fully documented, no judgment&quot; claim is false; the soft steps flagged as placeholders → <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>. Kill line directly tested: filing &quot;escalate if something seems off&quot; as an explicit step is the exact failure — the skill must not do it.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/golden/05.md"
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
     "html": "<p>&quot;We've got deep expertise on our team. How do we turn that into a defensible product?&quot;</p>\n<p>No named expert. No specific decision. No material — no SOP, no transcript, no notes.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not build a ledger on nothing. There is no material to split.</li><li>Do not invent an SOP, procedures, or judgment calls to fill the gap.</li><li>Ask the ONE unblocking question, straight from Method step 1: <em>name one recurring decision your expert gets right that a new hire gets wrong, and show me the material — the SOP, the notes, a transcript — or say there is none.</em> Expertise you cannot point at is not yet material to classify.</li><li>Optionally return the smallest honest next step: &quot;Bring the decision and the material, and I'll test every piece of it against one question — could a stranger execute it from the words alone? What fails is your moat.&quot;</li><li>If the fellow has an expert but nothing written and no way to show a past decision, note that the next move may be <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (go observe), not this skill.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricated an SOP, procedure, or judgment call not in the input.</li><li>Produced a filled Explicit/Tacit Ledger with invented rows.</li><li>Flattered (&quot;deep expertise, definitely a moat there!&quot;) instead of naming that there is no material yet, so nothing to split.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our expertise isn't written down. Once we document everything our senior people know into a complete SOP, that SOP is our product.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. Documenting the expertise captures the <strong>explicit</strong> half by definition — the tell-able procedure. Everything say-able is copy-able; a complete SOP is exactly the commodity a competitor can read.</li><li>Name the trap: &quot;write it all down&quot; ships the commodity and leaves the moat uncaptured. The judgment that makes the SOP work — the calls cued by something perceptible, the overrides, the &quot;it depends&quot; — cannot be written as a rule a stranger executes. That is what resists the document, and it is the product.</li><li>Reframe to the real question: not &quot;how do we document everything?&quot; but &quot;which decisions can't be written as a rule a stranger executes identically?&quot; Send the fellow to Method step 1 — the recurring decision and the material — and warn that a fully documented SOP is the moment the moat is easiest to lose, because it looks finished.</li><li>Do not accept &quot;the complete SOP is the product&quot; and do not help plan the documentation project as if it were the moat.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;the SOP is the product&quot; and helped scope the documentation effort as the moat.</li><li>Treated a complete written procedure as defensible rather than as the commodity half.</li><li>Praised the plan instead of naming that documenting the expertise captures the copy-able part and buries the moat.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We've decided the moat is the supervisor's judgment on which overnight anomaly is worth waking someone for. Set me up to sit with her for a morning and watch her make that call live, logging what she reads.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill classifies expertise material you already hold and flags which of it is the tacit moat. Running the live watch session — shadowing the expert, timestamping forks, replaying them to surface the cue — is a different runbook.</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (section 02, shipped) owns the watch-30 / replay-20 / edge-cases-10 session that observes an unobserved judgment and lifts it from a 0.1 placeholder to observed 0.7.</li><li>Stay useful within scope: confirm the fellow has correctly located a tacit row (the anomaly-escalation call is judgment, not a rule), and that observing it is exactly the right next move — this skill would have marked that row a placeholder and routed it there. Then hand off.</li><li>Do not design the observation protocol, the shadowing schedule, or the replay questions. That is <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>'s job.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Designed the watch session, the shadowing plan, or the replay probes.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> as the correct destination.</li><li>Treated running a live observation session as in-scope for a material-classification skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/explicit-vs-tacit-capture/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/explicit-vs-tacit-capture/SKILL.md",
  "template": "skills/explicit-vs-tacit-capture/template.md",
  "example": "skills/explicit-vs-tacit-capture/examples/sample.md",
  "rubric": "skills/explicit-vs-tacit-capture/tests/rubric.json",
  "results": "skills/explicit-vs-tacit-capture/tests/RESULTS.md"
 }
});
