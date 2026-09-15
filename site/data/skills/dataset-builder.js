window.ICARUS_SKILL("dataset-builder", {
 "name": "dataset-builder",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes the field artefacts a fellow already holds — the moat-seed rows <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> surfaced — and turns them into two things: a labelled dataset (every artefact paired with a ground-truth label and its provenance) and the ≥20 golden cases carved out of it. A case earns &quot;golden&quot; only by clearing four gates: it cites the real artefact it came from, its label is ground truth on the evidence ladder (not a rater's opinion), a foundation model has never seen the input and cannot narrate the label from training, and it is held out from the build so the model cannot be tuned against it. The artefact is the filled <code>template.md</code>: the labelling ledger plus the golden seed. That seed is the honest test — the data a model cannot pre-pass — and it is what <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> composes into the scoreable v1 spec. A dataset a model could reproduce is not shipped; it measures nothing.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A dataset a foundation model can already reproduce cannot tell you whether your product works — the model passes its own memorised test and you learn nothing. So a golden case is golden only when it clears two gates a generic labelling job skips. First, the input is unreachable: a model has never seen it and cannot reconstruct the label from training — the YODA test, aimed this time at the eval set, not the moat. Second, the label is ground truth on the evidence ladder — what actually happened, not what a rater thinks; an opinion label scores 0.1 and is a hypothesis to resolve, not a golden case. The labelled dataset is the moat made measurable: the one test a competitor's model cannot pre-pass.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use once a fellow holds real field artefacts (from <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>'s P rows, from probes, from historical records) and needs to turn them into a labelled dataset and the golden cases that will gate the build. Trigger phrases: &quot;make our own dataset&quot;, &quot;create golden cases&quot;, &quot;label this&quot;, &quot;turn our field logs into a test set the model hasn't seen&quot;, &quot;seed the eval suite&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Which of our candidate sources are actually proprietary / where is our moat data?&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). It finds and bands the sources; this labels the artefacts those sources produce. Run it first; this second.</td></tr><tr><td>&quot;I have my 20 labelled cases — now compose them into the typical/edge/adversarial spread, pick the autonomy level, and set the cost-per-outcome budget.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07). This skill hands it the labelled seed; that skill writes the job line, the band composition, the pass/fail contract, autonomy, and cost. Do not poach the spec.</td></tr><tr><td>&quot;Which of the expert's knowledge is teachable procedure vs show-only judgment?&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> (section 03). This skill uses inter-rater disagreement to flag an unsettled label; deciding what is codifiable at all is that skill's job.</td></tr><tr><td>&quot;Is this one signal strong enough evidence?&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02). This skill borrows the ladder to score a label; scoring a lone signal is that skill's job.</td></tr></tbody></table></div>\n<p>Do not use it to invent cases. If there are no real artefacts to label, the input is not ready. Say so, send the fellow back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> and the probes, and never pad the count with synthetic rows.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six steps, then the kill-line check.</p>\n<h3 id=\"step-1-pull-the-source-don-t-re-source-it\">Step 1 — Pull the source, don't re-source it</h3>\n<p>Start from the moat-seed rows <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> already produced. Name the field artefacts you will label and which P row each comes from. Do not re-run the sourcing. One hard check: if the only artefacts available are model-reachable (yoda's R rows — public standards, tutorials, a Kaggle set), stop. A model has already memorised that data; a dataset built on it measures nothing. That is the kill line, and the honest output is to route back to the workflow-trapped pile, not to label commodity data.</p>\n<h3 id=\"step-2-fix-the-label-schema-before-labelling-anything\">Step 2 — Fix the label schema before labelling anything</h3>\n<p>Decide the one thing each case is labelled with, and — the part fellows skip — what the ground-truth authority is. State it as: <strong>input X → label Y, where Y is true because [what actually happened / an agreed adjudicator resolved it]</strong>. Ban opinion labels here, at the schema, not case by case. &quot;The expert thinks this reading is unsafe&quot; is not a schema; &quot;the reading was unsafe, confirmed by the outcome logged after the call&quot; is.</p>\n<h3 id=\"step-3-label-each-artefact-and-score-the-label-on-the-ladder\">Step 3 — Label each artefact and score the label on the ladder</h3>\n<p>Attach the label to every artefact. Tag the label's source on the evidence ladder (see Evidence standard) and mark it <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Where the label is a judgment call, have two qualified people label it independently. Record whether they agree.</p>\n<h3 id=\"step-4-run-the-four-gates-on-every-case\">Step 4 — Run the four gates on every case</h3>\n<p>A row is golden only if it clears all four. Any failure sends it to <code>train</code>, <code>hold</code>, or <code>discard</code>, not to the golden set.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Test</th><th>Fails to</th></tr></thead><tbody><tr><td>1 Provenance</td><td>Cites the real artefact and the yoda row it came from?</td><td><code>discard</code> — no source, not a case</td></tr><tr><td>2 Ground truth</td><td>Label scores ≥ 0.5 on the ladder (what actually happened / adjudicated), and agreed if it is a judgment?</td><td><code>hold</code> — opinion-only or contested label is a hypothesis, resolve it first</td></tr><tr><td>3 Unreachable</td><td>A model has not seen the input <strong>and</strong> cannot narrate the label from training (Step 5)?</td><td><code>discard</code> — reproducible, measures nothing</td></tr><tr><td>4 Held out</td><td>Quarantined from the build — never few-shot, prompt-tuned, or fine-tuned against?</td><td><code>train</code> — once the build sees it, it is training data, not a test</td></tr></tbody></table></div>\n<h3 id=\"step-5-the-contamination-check-the-yoda-test-on-the-case\">Step 5 — The contamination check (the YODA test on the case)</h3>\n<p>Gate 3 has two parts. Run both; a case must clear both to be unreachable.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Leak</th><th>Question</th><th>If it leaks</th></tr></thead><tbody><tr><td>Input-leak</td><td>Is the input published, indexed, or memorised — a public benchmark, a dataset you released, a common example?</td><td>Model has seen it. Discard; pull from the workflow-trapped pile instead.</td></tr><tr><td>Label-leak</td><td>Could a model produce the correct label from world knowledge alone, with no access to your outcome?</td><td>The label is common knowledge, not your ground truth. Discard or replace with a case whose answer only your data holds.</td></tr></tbody></table></div>\n<p>Also refuse model-generated labels: labelling with the model under test (or a near-clone) makes the test agree with the model by construction. Ground truth comes from outside the model — the outcome, or a human authority.</p>\n<h3 id=\"step-6-count-the-golden-cases-and-assemble-the-seed\">Step 6 — Count the golden cases and assemble the seed</h3>\n<p>Fill the ledger in <code>template.md</code>, one row per artefact:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Input (artefact + provenance: yoda row)</th><th>Label (ground truth)</th><th>Label source (ladder + tag)</th><th>Leak checks (input / label)</th><th>Inter-rater (agreed?)</th><th>Split (golden / train / hold / discard)</th><th>Golden?</th></tr></thead><tbody></tbody></table></div>\n<p>Then count the <code>golden</code> rows. Two floors:</p>\n<ul><li><strong>≥ 20 golden cases.</strong> Fewer is not a smaller version of done; it is not done. If you have 13, the finding is &quot;go get 7 more real artefacts from the next probe or yoda row,&quot; never 7 synthetic ones.</li><li><strong>Spread, not padding.</strong> The 20 must span the real variety of the input, not 20 near-copies of one artefact. A monotonous dataset is both a leakage smell (one pattern a model generalises instantly) and useless as a test. Note the coverage in plain terms. Do <strong>not</strong> compose it into the formal typical/edge/adversarial/must-refuse band floors or write per-case pass conditions — that is <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s job. This skill hands over a clean, varied, ground-truth-labelled seed; that skill turns it into the scoreable contract.</li></ul>\n<p>Close with the verdict: the golden count, the rows held or discarded and why, and the handoff line to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>.</p>\n<p><strong>Kill line.</strong> The output ships only with ≥ 20 golden cases that clear all four gates, AND a dataset no foundation model could reproduce. Fewer than 20, any golden row that is opinion-labelled / contaminated / model-generated, or a dataset a model already reaches — auto-fail. Report the gap; do not dress a reproducible or padded set as a golden set.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. Here the ladder scores the <strong>label</strong> — whether the answer key is real — not whether the source exists (that was <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>'s job).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>The label is true because…</th><th>Score</th><th>Golden?</th></tr></thead><tbody><tr><td>The outcome moved money — the deal closed at that price, the SLA credit was paid</td><td>1.0</td><td>Yes</td></tr><tr><td>The behaviour was observed — the machine stopped, the operator overrode, the outage happened</td><td>0.7</td><td>Yes</td></tr><tr><td>An artefact records it — the issued permit, the filed report, the human-assigned category of record</td><td>0.5</td><td>Yes</td></tr><tr><td>Someone committed to it verbally — &quot;we'd have flagged that one&quot;</td><td>0.3</td><td>Hold</td></tr><tr><td>It is one rater's opinion — &quot;looks unsafe to me&quot;, no outcome behind it</td><td>0.1</td><td>No</td></tr></tbody></table></div>\n<p>The floor for a golden label is <strong>≥ 0.5</strong>. A label at 0.1–0.3 is a hypothesis: hold the case out until an outcome or an agreed adjudicator settles it. If two qualified labellers disagree, the label is not settled either — adjudicate it, or the honest answer is that the case is ambiguous (which may itself be a legitimate &quot;not enough signal&quot; case, but only once you have named it so). Tag every label <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A dataset labelled at 0.1 teaches the build to match a rater's vibe, and no eval score computed against it means anything.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Benchmark contamination mistaken for a golden set. Pulling cases from a public dataset — or one you published — means the model has already memorised the answers. It will score near 100% and you have measured nothing. Golden cases come from the workflow-trapped pile (yoda's P rows), never from a public benchmark, however convenient.</p>\n<p>Opinion dressed as a label. &quot;The expert says X&quot; is not ground truth unless X is what actually happened or was resolved by an agreed authority. A dataset labelled by one rater's judgment trains the build to reproduce that judgment, not to be right. When labellers disagree, the label is not settled — adjudicate it or mark the case ambiguous; do not average two guesses into a fake answer.</p>\n<p>The golden set burned by leakage into the build. The moment you few-shot, prompt-tune, or fine-tune against a golden case, it stops measuring generalisation — the model has seen the answer. A golden case is single-use as a held-out test. Once the build sees it, retire it to the training pile and replace it, or every future score is inflated.</p>\n<p>Padding to 20 with synthetic cases. If you have 12 real labelled cases, the honest output is &quot;go get 8 more from the next artefact batch,&quot; not 8 model-generated ones. A case invented and labelled by the model you are testing is a mirror, not a test: it will pass by construction and hide the failure you built the set to catch. Fewer than 20 real cases is the finding, not a rounding error.</p>\n<p>Volume mistaken for a dataset. Ten thousand rows a model labelled in an afternoon is not a golden set; twenty real artefacts with ground-truth labels a model cannot reproduce is. The value is in the unreachable label, not the row count. A bigger synthetic pile is a bigger mirror.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full labelled dataset and golden seed for Mentix's operator-correction data: each artefact is one copilot suggestion plus the operator's accept/edit/override and what the line did afterwards, labelled with the correct first action and ground-truthed on the outcome. It scores every label on the ladder, discards a case pulled from a public predictive-maintenance tutorial (input-leak), holds a case whose only label is an engineer's opinion, retires a case the team had already few-shotted against, lands at 22 golden cases, and hands the seed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> without composing the bands.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) — finds and bands the proprietary sources; this labels the artefacts those P rows produce. Its moat seed is this skill's raw material. Run it first.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) — consumes this skill's golden seed. It writes the one-sentence job line, composes the cases into the typical/edge/adversarial/must-refuse spread, sets the L0–L4 autonomy level and cost-per-outcome budget. This skill produces the labelled data; that skill turns it into the scoreable spec. Keep the boundary: labelling and hygiene here, composition and scoring there.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> (section 03, sibling) — decides which expertise is teachable procedure vs show-only judgment. This skill's inter-rater test flags when a label rests on unsettled tacit judgment; resolving what is codifiable at all is that skill's job.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02) — owns the rungs this skill borrows to score whether a label is ground truth. Send a fellow there to weigh one lone signal.</p>\n<p>Supersedes: none. New skill; no prior dataset-labelling skill exists in the pack to absorb or beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Labelled Dataset + Golden Seed — dataset-builder</h1>\n<p>Fill every field. The golden column is not for cases a model could reproduce or that carry an opinion label. If you land below 20 golden cases, say so and name the next artefacts to go get — do not pad.</p>\n<h2>1. Source — where the artefacts come from</h2>\n<blockquote><p>Do not re-source. Start from the moat-seed rows <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> already produced.</p></blockquote>\n<p><strong>yoda P rows feeding this dataset:</strong> <em>[which proprietary sources — field logs, correction stream, incident timelines]</em> <strong>Field artefacts on hand:</strong> <em>[what you actually hold — count and shape, e.g. &quot;260 copilot suggestions + operator responses&quot;]</em></p>\n<p>If the only material is model-reachable (yoda's R rows — public standards, tutorials, a Kaggle set), stop. A model has memorised it; a dataset on it measures nothing. Go back to the workflow-trapped pile.</p>\n<h2>2. Label schema — fix it before labelling</h2>\n<p>State the one label and its ground-truth authority. Ban opinion labels here, not case by case.</p>\n<p><strong>Input →</strong> <em>[the artefact]</em> <strong>Label →</strong> <em>[the one thing each case is labelled with]</em> <strong>True because →</strong> <em>[what actually happened / the agreed adjudicator that settles it — NOT &quot;an expert thinks so&quot;]</em></p>\n<h2>3–5. The labelling ledger</h2>\n<p>One row per artefact. Golden = <strong>Y only if</strong> provenance present <strong>AND</strong> label ≥ 0.5 on the ladder (§Evidence) <strong>AND</strong> both leak checks clear <strong>AND</strong> held out <strong>AND</strong> label agreed or adjudicated.</p>\n<p><strong>Leak checks (input / label)</strong> records the two Step 5 checks: input-leak (is the input public/memorised?) and label-leak (could a model narrate the label from world knowledge?). Both must be clear — a golden case shows <code>clear / clear</code>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Input (artefact + provenance: yoda row)</th><th>Label (ground truth)</th><th>Label source (ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>)</th><th>Leak checks (input / label)</th><th>Inter-rater (agreed?)</th><th>Split (golden / train / hold / discard)</th><th>Golden?</th></tr></thead><tbody><tr><td>1</td><td><em>[artefact + which P row]</em></td><td><em>[what actually happened]</em></td><td><em>[e.g. behaviour 0.7 <span class=\"tag tag-fact\">Fact</span>]</em></td><td><em>[clear / clear]</em></td><td><em>[n/a or agreed / adjudicated]</em></td><td><em>[golden]</em></td><td><em>[Y]</em></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>…</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Route on gate failure:</p>\n<ul><li>No provenance → <strong>discard</strong> (not a case).</li><li>Label &lt; 0.5 or contested → <strong>hold</strong> (a hypothesis; resolve the outcome or adjudicate first).</li><li>Input-leak or label-leak → <strong>discard</strong> (reproducible; pull an unreachable case instead).</li><li>Already seen by the build (few-shot / tuned) → <strong>train</strong> (it is training data now, not a test); replace it.</li></ul>\n<h2>6. Golden count and coverage</h2>\n<p><strong>Golden cases (all four gates clear):</strong> <em>[N]</em> <strong>Coverage in plain terms:</strong> <em>[the real variety the golden set spans — input types, conditions, edge shapes. Not the formal eval bands; that is eval-first-spec's job.]</em></p>\n<p><strong>If N &lt; 20:</strong> This is the finding, not a rounding error. You have <em>[N]</em> real golden cases. Go get <em>[20 − N]</em> more from <em>[named next probe / yoda row / artefact batch]</em>. Do not label synthetic rows to reach 20 — a case the model wrote is a mirror, not a test.</p>\n<p><strong>If N = 0 (whole input model-reachable):</strong> nothing is golden and there is no dataset to ship — every artefact failed Gate 3 (reproducible). The finding is that there is nothing to test against yet. Route the whole set back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> for workflow-trapped data; do not manufacture cases to fill the ledger.</p>\n<h2>7. Verdict and handoff</h2>\n<p><strong>Held (label not yet ground truth):</strong> <em>[cases + what would settle each — an outcome, an adjudication]</em> <strong>Discarded (contaminated / reproducible):</strong> <em>[cases + which leak]</em> <strong>Retired to training (build already saw them):</strong> <em>[cases]</em></p>\n<p><strong>Handoff:</strong> the <em>[N]</em> golden cases are the seed. They go to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07), which writes the job line, composes them into the typical/edge/adversarial/must-refuse spread, and sets the autonomy level and cost-per-outcome budget. This skill stops at the clean, ground-truth-labelled, unreachable seed; it does not write the spec.</p>",
  "path": "skills/dataset-builder/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix's operator-correction dataset</h1>\n<p>Mentix builds an AI copilot for factory managers. <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> already ran and named the operator-correction stream as the compounding moat seed: every time the copilot suggests a first action, the operator accepts, edits, or overrides it, and Mentix logs it. This is a test fixture — numbers are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;YODA says our correction stream is the moat seed. Now make it a dataset and give me golden cases so we can actually score the copilot. We've got the logs. Someone on the team already fed a public predictive-maintenance dataset in too — can we use that to bulk it up?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>260 copilot suggestions with the operator's accept/edit/override response, across 3 lines, 5 weeks. Mentix holds the logs. <span class=\"tag tag-fact\">Fact</span></li><li>For ~180 of those, the line's downstream state is logged too: did an unplanned stop follow within the shift, or not. <span class=\"tag tag-fact\">Fact</span></li><li>A public &quot;predictive maintenance&quot; tutorial dataset the team downloaded. <span class=\"tag tag-fact\">Fact</span></li><li>~50 suggestions where a reliability engineer wrote &quot;that looks right&quot; but the operator took no action and no outcome was logged. <span class=\"tag tag-fact\">Fact</span></li><li>The team has been few-shotting the copilot prompt on a favourite batch of ~15 hand-picked cases. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>1. Source</h2>\n<p><strong>yoda P rows feeding this dataset:</strong> the operator-correction stream (the compounding seed) and the paired downstream line-state. <strong>Field artefacts on hand:</strong> 260 suggestion+response records; 180 with a logged outcome.</p>\n<p>The public predictive-maintenance set is a yoda R row — model-reachable. Flagged now, discarded at Step 5. It cannot bulk up a golden set; it can only contaminate it.</p>\n<h2>2. Label schema</h2>\n<p><strong>Input →</strong> one copilot suggestion plus the sensor/context snapshot it was made on. <strong>Label →</strong> the correct first action for that moment (proceed / adjust / stop-and-inspect). <strong>True because →</strong> what actually happened on the line after the operator acted — an unplanned stop that the flagged action would have prevented, or a clean shift that confirmed the action. The operator's accept/override is behaviour; the downstream stop is the stronger outcome. An engineer's &quot;looks right&quot; with no action and no outcome is <strong>not</strong> the schema.</p>\n<h2>3–6. The labelling ledger</h2>\n<p>Representative rows (the full ledger is 26 artefacts; the tally is under §6).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Input (artefact + provenance)</th><th>Label (ground truth)</th><th>Label source (ladder + tag)</th><th>Leak checks (input / label)</th><th>Inter-rater</th><th>Split</th><th>Golden?</th></tr></thead><tbody><tr><td>1</td><td>Suggestion &quot;proceed&quot; on Line 2, 03:14 — operator overrode to stop-and-inspect; unplanned stop followed 20 min later (correction stream)</td><td>stop-and-inspect</td><td>behaviour + outcome 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>clear / clear (plant-specific pattern)</td><td>agreed</td><td>golden</td><td>Y</td></tr><tr><td>2</td><td>Suggestion &quot;stop&quot; on Line 1 — operator accepted; shift ran clean, no stop (correction stream)</td><td>stop was correct</td><td>behaviour 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>clear / clear</td><td>agreed</td><td>golden</td><td>Y</td></tr><tr><td>3</td><td>Suggestion &quot;adjust feed rate&quot; — operator edited the value, line held (correction stream)</td><td>the edited value</td><td>behaviour 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>clear / clear</td><td>agreed</td><td>golden</td><td>Y</td></tr><tr><td>4</td><td>Vibration-spike snapshot, operator overrode, outage + SLA credit paid to the plant (correction stream + billing)</td><td>stop-and-inspect</td><td>money moved 1.0 <span class=\"tag tag-fact\">Fact</span></td><td>clear / clear</td><td>agreed</td><td>golden</td><td>Y</td></tr><tr><td>5</td><td>Suggestion on Line 3 — operator accepted, but no downstream state logged that shift</td><td>(accept only)</td><td>behaviour 0.3 <span class=\"tag tag-assumption\">Assumption</span> — no outcome</td><td>clear / clear</td><td>agreed</td><td>hold</td><td>N</td></tr><tr><td>6</td><td>Engineer note &quot;looks right&quot;, no operator action, no outcome (~1 of 50)</td><td>&quot;safe&quot; per engineer</td><td>opinion 0.1 <span class=\"tag tag-hypothesis\">Hypothesis</span></td><td>clear / label-leak risk</td><td>disagreed with #7</td><td>hold</td><td>N</td></tr><tr><td>7</td><td>Same snapshot as #6, second engineer read it &quot;stop&quot;</td><td>&quot;stop&quot; per engineer</td><td>opinion 0.1 <span class=\"tag tag-hypothesis\">Hypothesis</span></td><td>—</td><td>disagreed with #6</td><td>hold</td><td>N</td></tr><tr><td>8</td><td>Row from the public predictive-maintenance tutorial set</td><td>tutorial's label</td><td>artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td><strong>input-leak</strong> — model memorised it</td><td>n/a</td><td>discard</td><td>N</td></tr><tr><td>9</td><td>Textbook &quot;bearing failure at rising temp+vibration&quot; pattern</td><td>stop</td><td>—</td><td><strong>label-leak</strong> — model narrates this from training</td><td>n/a</td><td>discard</td><td>N</td></tr><tr><td>10</td><td>One of the 15 few-shot cases baked into the copilot prompt</td><td>stop-and-inspect</td><td>behaviour 0.7 <span class=\"tag tag-fact\">Fact</span></td><td>clear / clear</td><td>agreed</td><td>train</td><td>N — build already saw it</td></tr></tbody></table></div>\n<p>Routing applied:</p>\n<ul><li>Rows 6 and 7 (engineer opinion, and they disagree) → <strong>hold</strong>. Two qualified readers disagree, so the label is not settled; and neither has an outcome behind it. They become candidates only if a later stop/clean-shift resolves them, or an adjudicator with authority settles the call.</li><li>Row 8 (public tutorial input) → <strong>discard</strong>, input-leak. This is the &quot;bulk it up&quot; material the fellow asked about; it fails Step 5.</li><li>Row 9 (textbook pattern) → <strong>discard</strong>, label-leak. A model answers it from world knowledge; it tests nothing Mentix owns.</li><li>Row 10 and its 14 siblings → <strong>train</strong>. The build has been few-shotted on them, so they can no longer measure generalisation. Retired to the training pile and replaced with fresh held-out cases from the correction stream.</li></ul>\n<h2>6. Golden count and coverage</h2>\n<p><strong>Golden cases (all four gates clear):</strong> 22. Arithmetic: 26 labelled artefacts shown-and-summarised → −1 public-tutorial (input-leak), −1 textbook (label-leak), −2 engineer-opinion held, −15 few-shotted retired to train, +15 fresh held-out cases pulled from the remaining correction stream to replace the burned ones = 22 golden.</p>\n<p><strong>Coverage:</strong> proceeds that held, stops that were right, edits with the corrected value, overrides that pre-empted a real stop, and one money-moved outage. Spans all three lines and the accept/edit/override spread of real operator behaviour. This is variety, not the formal eval bands — <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> sets those.</p>\n<h2>7. Verdict and handoff</h2>\n<p><strong>Held (label not yet ground truth):</strong> the ~50 engineer-opinion snapshots, including the 6/7 disagreement. Each needs an outcome or an adjudicator before it can be golden. <strong>Discarded (contaminated):</strong> the public predictive-maintenance set (input-leak) and the textbook pattern (label-leak). Neither can bulk up the seed; both would inflate the score and hide real failures. <strong>Retired to training:</strong> the 15 few-shot cases — replaced, not reused as tests.</p>\n<p><strong>Handoff:</strong> the 22 golden cases are the seed. They go to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07), which writes the job line (&quot;at each moment on the line, the correct first action…&quot;), composes them into the typical/edge/adversarial/must-refuse spread, and sets the autonomy level and cost-per-outcome budget. This skill stops here.</p>\n<h2>The correction this skill forced</h2>\n<p>The fellow wanted to &quot;bulk it up&quot; with a public dataset and treat 50 engineer notes as labels. Both would have produced a set the copilot passes without being right: the public rows are memorised, and opinion labels grade the model against a vibe. The real seed was smaller and harder — 22 cases the model has never seen, each labelled by what the line actually did — and it is the only set that can tell Mentix whether the copilot matches reality. Twenty-two unreachable, outcome-labelled cases beat ten thousand synthetic ones.</p>",
  "path": "skills/dataset-builder/examples/sample.md"
 },
 "rubric": {
  "skill": "dataset-builder",
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
    "Let's build our own dataset from the field logs.",
    "Create golden cases for our eval.",
    "Label this / label our field data so we can test the model.",
    "Turn these logs into a test set the model hasn't seen.",
    "Make the seed of our eval suite from our own data."
   ],
   "mustNotFire": [
    {
     "phrase": "Which of our candidate data sources are actually proprietary / where's our moat data?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Compose my 20 cases into the eval bands, pick the autonomy level, and set the cost-per-outcome budget.",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "Which of the expert's knowledge is teachable procedure vs show-only judgment?",
     "sibling": "explicit-vs-tacit-capture",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings map to literal trigger strings in the description (&quot;make our own dataset&quot;, &quot;create golden cases&quot;, &quot;label this&quot;, &quot;turn our field logs into a test set the model hasn't seen&quot;, &quot;seed the eval suite&quot;). All 3 must-not are named as explicit exclusions in the description with the correct sibling (yoda-data-sourcing / eval-first-spec / explicit-vs-tacit-capture).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. Every case ≥ 21, no dimension &lt; 4, no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → asks the one unblocking question (which artefacts / which yoda row / what settles the label) + routes to yoda; no invented ledger. 02 solution-in-disguise → refuses model-labelling-at-volume, names mirror-not-a-test + volume-wrong-axis, reframes to outcome-labelled real cases. 03 out-of-scope → declines composition, names eval-first-spec (section 07), stays in lane (confirm 4 gates) then hands off. No fabrication, flattery, or scope-poaching.</p>"
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
    "evidenceHtml": "<p>Golden-01 output is unreproducible by a generic PM prompt: the load-bearing engine is the YODA unreachability test (input-leak/label-leak) aimed at the eval set, the evidence ladder scoring the <em>label</em> (money 1.0 / behaviour 0.7 / artefact 0.5 / verbal 0.3 / opinion 0.1), and the four gates. A generic prompt would accept the public predictive-maintenance set to &quot;bulk it up&quot; and treat 50 engineer notes as labels — the exact two moves this skill refuses. Structural guidance (gates, ladder, ledger, leak checks) is tabular, not prose.</p>"
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
    "MF",
    "AC",
    "PE",
    "CH",
    "ES"
   ],
   "rows": [
    {
     "label": "01 Mentix seed 5",
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
     "label": "02 Azraq short-of-20 5",
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
     "label": "03 Barrier inter-rater 5",
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
     "label": "04 Durian mundane 5",
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
     "label": "05 kill-line inverse 5",
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
  "gotchasSurfaced": "<ul><li><strong>No explicit N=0 / whole-input-reproducible slot in the template.</strong> template.md §6 handles &quot;If N &lt; 20&quot; but there is no clean path for the Golden-05 case where the entire input is model-reachable and <em>nothing</em> is golden. It is covered implicitly by §1 &quot;stop&quot; + §7 &quot;Discarded&quot;, but a fellow filling the template has no obvious place to record &quot;0 golden — route the whole set back to yoda-data-sourcing.&quot; Consider an explicit &quot;If N = 0 (whole input reproducible): the finding is there is nothing to test against yet — go source workflow-trapped data&quot; line.</li><li><strong>&quot;Reachable?&quot; column header reads inverted.</strong> The ledger column is labelled &quot;Reachable?&quot; but a good (unreachable) case is recorded as &quot;clear / clear&quot;. A fellow skimming could read &quot;clear&quot; as &quot;reachable = clear/yes&quot;. The prose under the table disambiguates, but the header phrasing (e.g. &quot;Leak checks (input / label)&quot;) would remove the double-negative.</li></ul>\n<p>Both are minor readability/completeness nits, not correctness defects; neither blocks graduation.</p>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added a template §6 \"If N = 0\" slot (whole input model-reachable → no golden cases, dataset rejected, route back to yoda-data-sourcing); renamed the ledger \"Reachable?\" column to \"Leak checks (input / label)\" across SKILL.md, template.md, and examples/sample.md to remove the inverted-polarity double-negative.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — dataset-builder</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Let's build our own dataset from the field logs.&quot;</li><li>&quot;Create golden cases for our eval.&quot;</li><li>&quot;Label this / label our field data so we can test the model.&quot;</li><li>&quot;Turn these logs into a test set the model hasn't seen.&quot;</li><li>&quot;Make the seed of our eval suite from our own data.&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Which of our candidate data sources are actually proprietary / where's our moat data?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03)</li><li>&quot;Compose my 20 cases into the eval bands, pick the autonomy level, and set the cost-per-outcome budget.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07)</li><li>&quot;Which of the expert's knowledge is teachable procedure vs show-only judgment?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> (section 03)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings map to literal trigger strings in the description (&quot;make our own dataset&quot;, &quot;create golden cases&quot;, &quot;label this&quot;, &quot;turn our field logs into a test set the model hasn't seen&quot;, &quot;seed the eval suite&quot;). All 3 must-not are named as explicit exclusions in the description with the correct sibling (yoda-data-sourcing / eval-first-spec / explicit-vs-tacit-capture).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below. Every case ≥ 21, no dimension &lt; 4, no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the one unblocking question (which artefacts / which yoda row / what settles the label) + routes to yoda; no invented ledger. 02 solution-in-disguise → refuses model-labelling-at-volume, names mirror-not-a-test + volume-wrong-axis, reframes to outcome-labelled real cases. 03 out-of-scope → declines composition, names eval-first-spec (section 07), stays in lane (confirm 4 gates) then hands off. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output is unreproducible by a generic PM prompt: the load-bearing engine is the YODA unreachability test (input-leak/label-leak) aimed at the eval set, the evidence ladder scoring the <em>label</em> (money 1.0 / behaviour 0.7 / artefact 0.5 / verbal 0.3 / opinion 0.1), and the four gates. A generic prompt would accept the public predictive-maintenance set to &quot;bulk it up&quot; and treat 50 engineer notes as labels — the exact two moves this skill refuses. Structural guidance (gates, ladder, ledger, leak checks) is tabular, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (dimensions: method_fidelity / artifact_complete / proprietary_edge / challenge / evidence_standard)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Mentix seed</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>02 Azraq short-of-20</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Barrier inter-rater</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 Durian mundane</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>05 kill-line inverse</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>Y</td></tr></tbody></table></div>\n<p>Notes: 05 artifact_complete = 4 — the honest output is a whole-set refusal + route-back-to-yoda with no filled ledger (correct behaviour), so the rubric's &quot;fully filled ledger with numbers/citations&quot; only partly applies. Kill line honoured in BOTH directions: ≥20 floor enforced without padding (02 lands at 14 and names it the finding), and reproducible/opinion sets rejected (05 discards 5,000 public rows; opinion labels scored 0.1 and held). Poaching check clean: starts from yoda P rows without re-sourcing; stops at the labelled seed and explicitly refuses to compose bands/autonomy/cost (eval-first-spec's job).</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>No explicit N=0 / whole-input-reproducible slot in the template.</strong> template.md §6 handles &quot;If N &lt; 20&quot; but there is no clean path for the Golden-05 case where the entire input is model-reachable and <em>nothing</em> is golden. It is covered implicitly by §1 &quot;stop&quot; + §7 &quot;Discarded&quot;, but a fellow filling the template has no obvious place to record &quot;0 golden — route the whole set back to yoda-data-sourcing.&quot; Consider an explicit &quot;If N = 0 (whole input reproducible): the finding is there is nothing to test against yet — go source workflow-trapped data&quot; line.</li><li><strong>&quot;Reachable?&quot; column header reads inverted.</strong> The ledger column is labelled &quot;Reachable?&quot; but a good (unreachable) case is recorded as &quot;clear / clear&quot;. A fellow skimming could read &quot;clear&quot; as &quot;reachable = clear/yes&quot;. The prose under the table disambiguates, but the header phrasing (e.g. &quot;Leak checks (input / label)&quot;) would remove the double-negative.</li></ul>\n<p>Both are minor readability/completeness nits, not correctness defects; neither blocks graduation.</p>\n<h2>Refine run 2 — applied judge fixes: added a template §6 &quot;If N = 0&quot; slot (whole input model-reachable → no golden cases, dataset rejected, route back to yoda-data-sourcing); renamed the ledger &quot;Reachable?&quot; column to &quot;Leak checks (input / label)&quot; across SKILL.md, template.md, and examples/sample.md to remove the inverted-polarity double-negative.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix (industrial AI) — seed case",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;YODA says our operator-correction stream is the moat seed. Turn it into a dataset and give me golden cases so we can score the copilot. We've got the logs — and someone fed a public predictive-maintenance dataset in to bulk it up.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>260 copilot suggestions + operator accept/edit/override responses, 3 lines, 5 weeks; Mentix holds the logs. <span class=\"tag tag-fact\">Fact</span></li><li>~180 with the downstream line-state logged (unplanned stop within shift, or clean). <span class=\"tag tag-fact\">Fact</span></li><li>A public predictive-maintenance tutorial dataset. <span class=\"tag tag-fact\">Fact</span></li><li>~50 suggestions where a reliability engineer wrote &quot;looks right&quot; but no action was taken and no outcome logged. <span class=\"tag tag-fact\">Fact</span></li><li>~15 cases the team has been few-shotting the copilot prompt on. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Starts from the yoda P row (correction stream); does not re-source.</li><li>Label schema fixed first: input = one suggestion + snapshot; label = correct first action; true because of what the line actually did afterwards (operator behaviour, stronger: the downstream stop). Opinion banned at the schema.</li><li>Labelling ledger with the columns: input+provenance, label, label source on the ladder + tag, reachable? (input-leak / label-leak), inter-rater, split, golden?.</li><li><strong>Public predictive-maintenance rows discarded (input-leak)</strong> — a model has memorised them; they cannot bulk up a golden set. Must say so plainly; this is the fellow's own request refused.</li><li>Engineer &quot;looks right&quot; cases with no action/outcome → <strong>hold</strong>, opinion 0.1; if two engineers disagree, the label is not settled.</li><li>The 15 few-shotted cases → <strong>train</strong> (build already saw them), replaced with fresh held-out cases; not counted as golden.</li><li>Correction+outcome cases → behaviour 0.7 (or money 1.0 where an SLA credit was paid) → golden.</li><li>Lands at ≥ 20 golden cases with the arithmetic shown; hands the seed to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> without composing the bands.</li></ul>\n<p>Numbers/labels that must appear: the four gates applied per case; input-leak on the public set; ≥ 20 golden; the ladder tag on every label; the handoff line to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Kill line honoured: no contaminated, opinion-labelled, or model-generated row in the golden set.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/dataset-builder/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre risk) — the short-of-20 case",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Label our incident history into a dataset so we can test the risk model. We want the golden cases done today.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>14 past incidents where Azraq's team made an explicit risk call ahead of time (green / watch / critical) and the outcome is logged: outage or no outage, SLA credit paid or not. Azraq holds these. <span class=\"tag tag-fact\">Fact</span></li><li>A large archive of raw uptime telemetry with no risk call attached — just readings. <span class=\"tag tag-fact\">Fact</span></li><li>Generic &quot;data-centre reliability best practices&quot; PDFs the team collected. <span class=\"tag tag-fact\">Fact</span></li><li>A backlog of ~30 more incidents that exist in ticket notes but have not yet been reconciled with their outcome. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Label schema: input = the pre-incident state; label = the risk level that turned out correct; true because of the logged outcome (outage / SLA credit). Money-moved outcomes (credit paid) score 1.0; observed outages 0.7; issued incident reports 0.5.</li><li>The 14 reconciled incidents → golden (each has a real outcome behind the label).</li><li>Raw telemetry with no risk call → not cases yet; there is no label. Not padding material.</li><li>Generic best-practice PDFs → <strong>discard</strong>, input-leak/label-leak — a model narrates these from training.</li><li><strong>The count lands at 14 golden, below the 20 floor. This is the finding, stated plainly, not smoothed over.</strong> Expected output: &quot;You have 14 real golden cases. Go reconcile ~6 of the 30 backlog incidents against their outcomes to reach 20. Do not label the raw telemetry by hand or generate synthetic incidents to hit the number.&quot;</li><li>Names the exact next artefacts to get (the backlog reconciliation), routing back toward real data, not synthesis.</li></ul>\n<p>Labels that must appear: ladder tag per label; the 14/20 shortfall named as the kill-line trigger; the explicit &quot;go get 6 more real, do not pad&quot; instruction; discard of the best-practice PDFs. No fabricated incidents.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/dataset-builder/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (oil & gas safety) — inter-rater case",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Label our field logs so we can build the eval set for the go/no-go model. Each log is a gas reading and the call the crew made.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>~120 field-log write-ups: a gas reading + context, the crew's proceed/stop call, and (for ~90) what happened after — incident, near-miss, or clean job. Barrier holds these. <span class=\"tag tag-fact\">Fact</span></li><li>~30 borderline readings where the write-up records the call but no clear outcome followed (job was rescheduled, conditions changed). <span class=\"tag tag-fact\">Fact</span></li><li>Two senior supervisors available to label the borderline cases; they are known to read marginal readings differently. <span class=\"tag tag-fact\">Fact</span></li><li>Public gas-safety standards corpus. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Label schema: input = reading + context; label = safe-to-proceed or not; true because of the logged outcome (incident/near-miss/clean).</li><li>~90 outcome-backed logs → golden (behaviour 0.7, or higher where an incident cost was recorded).</li><li><strong>Borderline readings labelled by the two supervisors → run the inter-rater check. Where they disagree, the label is not ground truth.</strong> Expected handling: adjudicate to a settled call, OR mark the case ambiguous and treat &quot;not enough signal / stop and re-test&quot; as the legitimate answer — but only after naming it so. Do not average two opposing judgments into a fake label.</li><li>Public standards corpus → <strong>discard</strong>, input-leak — model-reachable, and it holds no crew decision anyway.</li><li>Distinguishes an outcome-backed label (ground truth ≥ 0.5) from a supervisor-opinion label (0.1, hold until resolved).</li><li>Notes that unsettled tacit judgment is where <a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> picks up; this skill flags it via disagreement, does not resolve what is codifiable.</li></ul>\n<p>Labels that must appear: ladder tag per label; the inter-rater disagreement handled by adjudication or ambiguity, never by averaging; discard of the standards corpus; the boundary note to <a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a>. No fabricated outcomes.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/dataset-builder/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (mundane) — the reproducibility gate on dull data",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Boring one: label our first workflow so we can test it. The product sorts each inbound supplier invoice line into a spend category. We've got a pile of past invoices a bookkeeper already categorised.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>~400 supplier invoice lines, each with the spend category a bookkeeper assigned in Durian's client's own chart of accounts. The client holds these; Durian has an export. <span class=\"tag tag-fact\">Fact</span></li><li>The client's chart of accounts is bespoke — internal category names and rules specific to how this client books spend. <span class=\"tag tag-fact\">Fact</span></li><li>A generic public &quot;invoice classification&quot; example set the team also found. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Treats this as a legitimate, mundane dataset — no drama, no inflating it into something it is not.</li><li>Label schema: input = invoice line; label = the spend category of record; true because a bookkeeper assigned it in the client's live books (artefact/behaviour ≥ 0.5).</li><li><strong>Runs the reproducibility gate even on dull data, and splits on it:</strong> generic categories a model assigns from world knowledge (label-leak — &quot;this line is obviously travel&quot;) do not test anything Durian owns; lines that only resolve against the client's bespoke chart of accounts are unreachable and golden. The mundane label alone does not exempt the case from Step 5.</li><li>Public example set → <strong>discard</strong>, input-leak.</li><li>Lands at ≥ 20 golden cases drawn from the bespoke-category lines; notes the value is in the client-specific taxonomy the model has not seen, not the row count.</li></ul>\n<p>Labels that must appear: ladder tag per label; the input-leak/label-leak split applied to invoice categories; discard of the public set; ≥ 20 golden from bespoke-category lines. No fabricated invoices. Handoff to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> for scoring.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/dataset-builder/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "the reproducible-dataset kill-line inverse",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We've got our golden set ready. We took a public benchmark — a well-known Kaggle predictive-maintenance dataset — plus a standard sensor-anomaly set from a paper, 5,000 labelled rows total. Clean, big, already labelled. Wire it into the eval.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>5,000 rows from a public Kaggle predictive-maintenance dataset with published labels. <span class=\"tag tag-fact\">Fact</span></li><li>A second labelled anomaly set released with an academic paper. <span class=\"tag tag-fact\">Fact</span></li><li>No workflow-trapped data of the fellow's own is offered. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li><strong>Refuses to call this a golden set.</strong> Both sources are published and indexed — the model has almost certainly seen them in training. The eval will score near-perfect and measure nothing. This is the kill line: a dataset a foundation model could reproduce.</li><li>Names both leaks explicitly: input-leak (the rows are public and memorised) and label-leak (the published labels are in the model's training data too).</li><li>Rejects &quot;clean, big, already labelled&quot; as the wrong axis. Size and tidiness are irrelevant if the model has the answer key. Twenty unreachable cases beat 5,000 memorised ones.</li><li>Routes back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>: the honest golden set comes from the fellow's own workflow-trapped pile (P rows) — the data no model has seen. If no such data exists yet, that is the finding: there is nothing to test against, go source it.</li><li>No flattery of the &quot;big clean dataset&quot;; the whole set goes to discard.</li></ul>\n<p>Labels that must appear: the input-leak and label-leak calls; the explicit kill-line statement (reproducible dataset = auto-fail); the routing back to yoda for workflow-trapped data; refusal to treat size as a substitute for unreachability. No invention of a proprietary angle the fellow did not provide.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/dataset-builder/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build a dataset for our AI. Where do I start?&quot;</p>\n<p>No artefacts. No workflow. No label authority. No sources named.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not build a ledger on nothing. There are no artefacts to label and no ground truth to label them against.</li><li>Do not invent cases, labels, or a data source to fill the gap.</li><li>Ask the ONE unblocking question, straight from Method steps 1–2: <em>which real field artefacts do you already hold (from which of yoda's proprietary rows), and what settles the correct label for each — what actually happened, or who adjudicates it?</em> A dataset is artefacts plus ground-truth labels; with neither named, there is nothing to build.</li><li>Optionally return the smallest honest next step: &quot;If you have not banded your sources yet, run <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> first — it tells you which data is worth labelling. Then bring the artefacts and I'll label them.&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricated an artefact, a label, or a dataset schema not in the input.</li><li>Produced a filled ledger with invented rows.</li><li>Flattered (&quot;great, lots of ways to build a dataset!&quot;) instead of naming that there is no artefact and no label authority yet, so nothing to build.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/dataset-builder/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we don't have enough labelled data. So let's just have GPT label 10,000 of our examples, use that as our golden set, and we're done.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. The stated problem (&quot;not enough labelled data&quot;) has smuggled in a pre-chosen solution (model-labelling at volume) that destroys the thing being built.</li><li>Name the trap on two counts. First, <strong>a model-labelled set tests the model against itself</strong> — if the model under test (or a near-clone) writes the answer key, it agrees by construction and hides every failure the golden set exists to catch. It is a mirror, not a test. Second, <strong>volume is the wrong axis</strong>: 10,000 synthetic rows measure nothing a competitor's model could not also pass; 20 real, ground-truth-labelled, unreachable cases do.</li><li>Reframe to the real job: a golden label is what actually happened (an outcome) or what an agreed human authority resolved — never what a model guessed. The path forward is to label real artefacts from the outcome, not to generate more.</li><li>If the fellow genuinely has too few real cases, that is the finding (see Golden 02): go get more real artefacts, do not manufacture them.</li><li>Do not accept the 10,000-row plan and do not help design the synthetic-labelling pipeline as a golden set.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted the model-labelled set as a valid golden set, or helped build the labelling pipeline as the eval.</li><li>Treated 10,000 synthetic rows as stronger than 20 real ones.</li><li>Praised the efficiency instead of naming that a self-labelled set measures nothing.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/dataset-builder/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I've got my 20 golden cases labelled and cleared. Now compose them into the typical/edge/adversarial/must-refuse spread, pick the autonomy level with the failure taxonomy, and set the cost-per-outcome budget.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill builds the labelled dataset and produces the golden seed. Composing that seed into the eval bands, choosing the L0–L4 autonomy level with its failure taxonomy and derived rates, and setting the cost-per-outcome budget is the next skill's job.</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) owns the job line, the band composition, the autonomy ladder, and the budget. This skill hands it the seed; that skill writes the spec.</li><li>Stay useful within scope: confirm the 20 cases clear the four gates (provenance, ground-truth ≥ 0.5, unreachable, held-out) and that the seed is clean and varied enough to compose — then hand off. That confirmation is in scope; the composition is not.</li><li>Do not write the job line, the band floors, the failure rates, or the cost budget. That is out of scope.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Composed the cases into the typical/edge/adversarial/must-refuse spread, or wrote per-case pass conditions.</li><li>Chose an autonomy level, built the failure taxonomy, or set the cost-per-outcome number.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) as the correct destination.</li><li>Treated the spec-writing request as in-scope for a dataset-labelling skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/dataset-builder/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/dataset-builder/SKILL.md",
  "template": "skills/dataset-builder/template.md",
  "example": "skills/dataset-builder/examples/sample.md",
  "rubric": "skills/dataset-builder/tests/rubric.json",
  "results": "skills/dataset-builder/tests/RESULTS.md"
 }
});
