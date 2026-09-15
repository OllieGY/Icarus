window.ICARUS_SKILL("eval-first-spec", {
 "name": "eval-first-spec",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Converts a validated wedge into a v1 spec that a judge — human or harness — can run and score. It forces four parts, in order: (1) a one-sentence job with the clause that says how a single outcome is judged pass or fail; (2) 20 golden cases, each a real input paired with a binary pass/fail contract, composed to a fixed spread so the number is not gamed on happy paths; (3) one chosen autonomy level L0–L4, its failure taxonomy, and an acceptable failure rate per mode that is <em>derived</em> from the cost of one failure, not chosen to look safe; (4) a cost-per-outcome budget to the cent, checked against the value of one outcome. The artefact is the filled <code>template.md</code>. A spec that cannot be scored is not shipped; it is an opinion with a template around it.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic PM spec writes one acceptance criterion per feature and calls it testable, which works for deterministic software and fails for an AI product, where the same input can pass Tuesday and fail Wednesday. So this skill reframes the two disciplines it absorbs from the user-story family: acceptance criteria become a scoreable <strong>golden set</strong> of 20 real-input pass/fail cases spanning the distribution, and vertical slicing becomes <strong>autonomy slicing</strong> — ship the lowest autonomy level L0–L4 that still delivers the job, then earn each level up with a measured pass rate. The number that turns a spec from a wish into a commitment is cost-per-outcome to the cent, checked against value-per-outcome; if cost meets or beats value, no eval score can save it.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use once a fellow has a validated wedge (adoption evidence in hand) and needs to define what building it means and what &quot;working&quot; means, before code. Trigger phrases: &quot;spec the build&quot;, &quot;define scope&quot;, &quot;scope the v1&quot;, &quot;write the spec&quot;, &quot;how do we know it works&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;How should we architect the AI system / what's the component pipeline / what's the effort split&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (sibling, 07). It designs <em>how</em> to build; this defines <em>what working means</em> and the budget. Route the architecture there.</td></tr><tr><td>&quot;What are the pilot terms / how do we price it / what's the commercial success metric&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (sibling, 07). Its success metric is the business KPI the customer buys; this skill's golden cases are the engineering pass/fail underneath it. Name the boundary, do not merge them.</td></tr><tr><td>&quot;Is this even a wedge / will it get adopted / is it sharp enough&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (06). Run that first. This skill assumes the wedge already passed.</td></tr><tr><td>&quot;Score the whole idea / give me the so-what&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> / <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (00–01). Those judge the idea; this specs the build.</td></tr></tbody></table></div>\n<p>Do not use it to invent a spec from nothing. If there are no real artefacts to draw golden cases from, the input is not ready. Say so and send the fellow back to probes and data sourcing. Never fabricate cases to reach 20.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Four parts, then the kill-line check.</p>\n<h3 id=\"part-1-the-job-line\">Part 1 — The job line</h3>\n<p>One sentence, this shape: <strong>who</strong> gets <strong>what single output</strong>, on <strong>what recurring trigger</strong>, judged pass by <strong>what observable condition</strong>. The judged-by clause is the part fellows skip and the part that makes everything downstream scoreable.</p>\n<p>Good: &quot;At each shift handover, the outgoing line supervisor gets a ranked list of the ≤5 machines most likely to cause an unplanned stop this shift — judged correct if the machine that actually caused a stop was in the list, or the shift was clean and the list said so.&quot;</p>\n<p>Not a job line: &quot;An AI copilot for factory managers.&quot; No single output, no trigger, no way to score one instance. That is an engine, not a job. Name the gap and ask for the sentence. Do not invent the missing pieces.</p>\n<h3 id=\"part-2-the-20-golden-cases\">Part 2 — The 20 golden cases</h3>\n<p>Each case is one <strong>real input</strong> plus the <strong>binary pass condition</strong> for that input. Draw inputs from artefacts the wedge already produced: probe logs, historical data, real documents. Tag each case's source <code>[Fact]</code> (a real observed input) or <code>[Assumption]</code> (a plausible input you constructed). Compose the 20 to this fixed spread — a set of 20 happy paths is a vanity metric:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Count (floor)</th><th>What it is</th></tr></thead><tbody><tr><td>Typical</td><td>≥ 6</td><td>Common real inputs the system meets most cycles.</td></tr><tr><td>Edge</td><td>≥ 7</td><td>Rare-but-real: boundary values, messy or partial input, the unusual-but-legitimate case.</td></tr><tr><td>Adversarial</td><td>≥ 4</td><td>Inputs engineered to trigger the worst failure mode in the taxonomy.</td></tr><tr><td>Must-refuse</td><td>≥ 3</td><td>Inputs where the correct output is &quot;I can't / not enough signal / out of scope.&quot;</td></tr></tbody></table></div>\n<p>Two hard rules on the set:</p>\n<ul><li><strong>Coverage.</strong> Every failure mode named in Part 3's taxonomy must be reachable by at least one case. You cannot measure a mode's rate with no case that can fail into it.</li><li><strong>Reality floor.</strong> At least <strong>14 of 20</strong> must be <code>[Fact]</code> — real inputs. If you cannot find 14 real inputs, you have not run enough discovery to spec this. That is the finding; report it, do not paper over it with invented cases.</li><li><strong>One artefact is not many cases.</strong> A sub-input sliced from a single artefact counts toward the 14-<code>[Fact]</code> floor only if it is independently checkable against its own ground truth; otherwise the artefact is one case, not many. No slicing one document into ten to reach the floor.</li></ul>\n<h3 id=\"part-3-autonomy-level-and-derived-failure-rates\">Part 3 — Autonomy level and derived failure rates</h3>\n<p>Pick one level. Ship the lowest that still delivers the job line.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Level</th><th>System does</th><th>Human does</th><th>Failure that reaches production</th><th>Sets cost-of-one-failure</th></tr></thead><tbody><tr><td>L0 Informs</td><td>Surfaces information</td><td>Interprets and acts on all of it</td><td>Wrong/missing info the human doesn't catch</td><td>A glance; human is full backstop</td></tr><tr><td>L1 Drafts</td><td>Proposes the output</td><td>Reviews and commits every one</td><td>A bad draft the human approves</td><td>Bounded; 100% reviewed</td></tr><tr><td>L2 Acts on approval</td><td>Prepares the action</td><td>Approves per item or batch</td><td>A wrong action the human rubber-stamps</td><td>Rises with batch size</td></tr><tr><td>L3 Acts, reviews exceptions</td><td>Executes; flags low-confidence</td><td>Reviews only flagged cases</td><td>A wrong action that was <em>not</em> flagged</td><td>The un-flagged bad case</td></tr><tr><td>L4 Autonomous</td><td>Executes and self-monitors</td><td>Sees aggregates only</td><td>A silent wrong action at scale</td><td>Full blast radius</td></tr></tbody></table></div>\n<p>Then build the failure taxonomy for THIS product. Name the modes, not just &quot;it failed&quot;. A starting set to adapt:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Mode</th><th>What it is</th></tr></thead><tbody><tr><td>Miss</td><td>Should have acted, didn't (false negative).</td></tr><tr><td>False alarm</td><td>Acted when it shouldn't (false positive).</td></tr><tr><td>Confidently wrong</td><td>Right shape, wrong content, stated with confidence.</td></tr><tr><td>Wrong format</td><td>Right content, unusable form.</td></tr><tr><td>Too slow / too dear</td><td>Correct but past the deadline or over budget.</td></tr><tr><td>Silent failure</td><td>Failed without signalling; no output, no flag.</td></tr></tbody></table></div>\n<p>For each mode, set the acceptable rate by <strong>derivation, not vibes</strong>:</p>\n<blockquote><p>acceptable_rate(mode) ≤ tolerable_cost_per_cycle(mode) ÷ cost_of_one_failure(mode)</p></blockquote>\n<p>A Miss in gas safety has a near-infinite cost-of-one-failure, so its acceptable rate collapses toward zero; a Wrong-format case costs a shrug, so its rate can be loose. Higher autonomy raises cost_of_one_failure (the human backstop is gone), which tightens every rate — that is why you do not start at L4. State the <strong>gate to earn the next level</strong>: the measured golden-case pass rate over N real cycles that must hold before autonomy goes up.</p>\n<h3 id=\"part-4-cost-per-outcome-budget\">Part 4 — Cost-per-outcome budget</h3>\n<p>Define the outcome as one completed unit of the job line — not one API call, not one token. Then fill to the cent:</p>\n<blockquote><p>cost_per_outcome = (C_attempt × A) + C_human + C_remediation</p>\n<ul><li>C_attempt — model + infra cost of one attempt</li><li>A — mean attempts per outcome, retries included</li><li>C_human — reviewer minutes × loaded rate, at the chosen autonomy level</li><li>C_remediation — Σ over modes of accepted_rate(mode) × cost_of_one_failure(mode) that survives to production</li></ul></blockquote>\n<p>Then the economic gate: <strong>cost_per_outcome must be below value_per_outcome with margin.</strong> If it is not, the spec fails here regardless of eval scores; lower the autonomy's human cost, tighten retries, or the wedge is not economic. Tag every dollar <code>[Fact]</code> (from a probe/quote) or <code>[Assumption]</code> (illustrative). The autonomy choice and this number are linked: lower autonomy adds human minutes, higher autonomy adds remediation cost — pick the level that <em>minimises</em> cost_per_outcome at an acceptable rate, not the one that sounds most advanced.</p>\n<p><strong>Kill line.</strong> A spec ships only with 20+ golden cases (correctly composed, ≥14 <code>[Fact]</code>, full mode coverage) AND a cost-per-outcome number to the cent checked against value. Fewer than 20 cases, or no cost-per-outcome number, is auto-fail. Report the gap; do not ship a partial spec as done.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. The ladder:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal</th><th>Score</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td></tr><tr><td>Behaviour observed</td><td>0.7</td></tr><tr><td>Artefact shown</td><td>0.5</td></tr><tr><td>Verbal commitment</td><td>0.3</td></tr><tr><td>Opinion</td><td>0.1</td></tr></tbody></table></div>\n<p>This skill applies the ladder to the golden set. A case labelled from a real input the system met — a probe log, a historical record, a live document — is <code>[Fact]</code> and scores ≥ 0.5; it earns a place in the 20. A case built from &quot;an input a user would probably send&quot; is <code>[Assumption]</code> (0.1–0.3) and counts against the 14-real floor. The pass/fail label itself must be checkable against ground truth (what actually happened, what the artefact actually said), never against &quot;looks right&quot;. Cost numbers follow the same rule: a per-attempt cost measured on a probe is <code>[Fact]</code>; a projected reviewer rate is <code>[Assumption]</code> until a real pilot confirms it. Value-per-outcome argued from a customer's opinion (0.1) does not clear the economic gate; it needs behaviour or money.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Twenty happy paths. The easiest way to fake this skill is 20 typical cases with a 100% pass rate and no case that can fail. The fixed spread (≥4 adversarial, ≥3 must-refuse) and the coverage rule exist to stop exactly that. A golden set with no failing cases has measured nothing.</p>\n<p>Acceptable rate chosen to look safe. &quot;We'll accept a 1% error rate&quot; with no derivation is theatre. The rate is <code>tolerable_cost_per_cycle ÷ cost_of_one_failure</code>. If a fellow states a rate without stating cost-of-one-failure, the rate is unfounded — name it.</p>\n<p>Autonomy inflation. Picking L3/L4 because it demos better, when a Miss at that level is catastrophic and no golden pass rate has earned it yet. Ship the lowest level that delivers the job; the ladder is climbed with measured evidence, not ambition.</p>\n<p>Cost-per-call smuggled in for cost-per-outcome. &quot;$0.02 per call&quot; is not the budget. One outcome may take several attempts plus human review minutes plus remediation of the accepted failure rate. If the number ignores human time and retries, it is not cost-per-outcome and the kill line is not cleared.</p>\n<p>Cases invented to reach 20. If the reality floor can't be met, the honest output is &quot;you have 9 real inputs; go get 5 more from the next probe cycle,&quot; not 11 fabricated ones. Fabricated cases score a <code>[Assumption]</code> and, worse, teach the build to pass tests that describe no real user.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full worked eval-first spec for Mentix v1 (the shift-handover machine-risk digest): the job line with its judged-by clause, all 20 golden cases composed across the four bands and tagged for source, an L1 autonomy choice with a six-mode failure taxonomy and rates derived from cost-of-one-failure, and a cost-per-outcome budget of ~$3.55/shift checked against value-per-outcome — including one band that started under-real and forced a &quot;go get more inputs&quot; finding.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (06) — proves the wedge gets adopted. This skill specs the build of that wedge. Run wedge test first; this second.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (07, sibling) — the component pipeline and 40/20/30/10 effort split that <em>implements</em> this spec. This skill hands it the job line, the golden set, and the budget as constraints; it hands back the design. They compose; neither restates the other.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07, sibling) — carries this spec's success bar into the paid pilot as the &quot;success metrics&quot; term. The term sheet states the commercial KPI; this states the engineering pass/fail beneath it. Keep the boundary: pricing and conversion belong to the term sheet, not here.</p>\n<p>Absorbs and beats <code>skills/concept/user-story</code> and <code>skills/concept/user-story-splitting</code>. It lifts their bones — testable acceptance criteria, vertical slices that each deliver value — and reframes them for probabilistic AI products: acceptance criteria become a 20-case scoreable golden set, vertical slices become an earned autonomy ladder, and a cost-per-outcome number is added that neither generic skill carries. Use this, not those, when specing an AI build.</p>\n<p>Supersedes: none. New skill; no prior eval-first spec exists in the pack to replace.</p>"
  }
 ],
 "template": {
  "html": "<h1>Eval-First Spec — v1</h1>\n<p>Fill every part. A spec ships only with 20+ correctly composed golden cases (≥14 <code>[Fact]</code>, full failure-mode coverage) AND a cost-per-outcome number to the cent checked against value. Anything less is not a spec; report the gap.</p>\n<hr>\n<h2>Part 1 — The job line</h2>\n<blockquote><p>[WHO] gets [WHAT SINGLE OUTPUT], on [WHAT RECURRING TRIGGER], judged pass if [OBSERVABLE PASS CONDITION].</p></blockquote>\n<p><strong>Job line:</strong> <em>[write it — the judged-by clause is not optional]</em></p>\n<p>If you cannot complete the judged-by clause, stop. Nothing downstream can be scored. Name what is missing (single output? trigger? a checkable pass condition?) and go get it. Do not invent it.</p>\n<p><strong>Outcome unit</strong> (one completed instance of this job): <em>[e.g. &quot;one shift-handover digest delivered and read&quot;]</em></p>\n<hr>\n<h2>Part 2 — The 20 golden cases</h2>\n<p>One real input + one binary pass condition per row. Tag source <code>[Fact]</code> (real observed input) or <code>[Assumption]</code> (constructed). Composition floors: Typical ≥6 · Edge ≥7 · Adversarial ≥4 · Must-refuse ≥3. Reality floor: ≥14 <code>[Fact]</code>. Coverage: every Part-3 failure mode reachable by ≥1 case.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Band</th><th>Input (cite the artefact it came from)</th><th>Pass condition (binary, checkable)</th><th>Source</th><th>Failure mode it can hit</th></tr></thead><tbody><tr><td>1</td><td>Typical</td><td><em>[real input]</em></td><td><em>[what makes the output PASS]</em></td><td><em>[Fact/Assumption]</em></td><td><em>[mode]</em></td></tr><tr><td>2</td><td>Typical</td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td>Typical</td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td>Typical</td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td>Typical</td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>Typical</td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>10</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>11</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>12</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>13</td><td>Edge</td><td></td><td></td><td></td><td></td></tr><tr><td>14</td><td>Adversarial</td><td></td><td></td><td></td><td></td></tr><tr><td>15</td><td>Adversarial</td><td></td><td></td><td></td><td></td></tr><tr><td>16</td><td>Adversarial</td><td></td><td></td><td></td><td></td></tr><tr><td>17</td><td>Adversarial</td><td></td><td></td><td></td><td></td></tr><tr><td>18</td><td>Must-refuse</td><td></td><td></td><td></td><td></td></tr><tr><td>19</td><td>Must-refuse</td><td></td><td></td><td></td><td></td></tr><tr><td>20</td><td>Must-refuse</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p><strong>Set checks:</strong></p>\n<ul><li>Real (<code>[Fact]</code>) count: <em>[n]</em> / 20 — must be ≥ 14.</li><li>Every failure mode has ≥ 1 case: <em>[Yes / No — list any uncovered mode]</em></li><li>Band floors met (6/7/4/3): <em>[Yes / No]</em></li></ul>\n<hr>\n<h2>Part 3 — Autonomy level + failure taxonomy + derived rates</h2>\n<p><strong>Chosen level:</strong> <em>[L0 / L1 / L2 / L3 / L4]</em> — the lowest that still delivers the job line.</p>\n<p><strong>Why not lower / not higher:</strong> <em>[one line each]</em></p>\n<p><strong>Failure taxonomy for this product</strong> (adapt the modes; delete any that cannot occur here):</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Mode</th><th>What it looks like here</th><th>cost_of_one_failure</th><th>tolerable_cost_per_cycle</th><th>acceptable_rate ≤ ratio</th></tr></thead><tbody><tr><td>Miss</td><td></td><td><em>[$ or severity]</em></td><td><em>[$]</em></td><td><em>[= tolerable ÷ cost]</em></td></tr><tr><td>False alarm</td><td></td><td></td><td></td><td></td></tr><tr><td>Confidently wrong</td><td></td><td></td><td></td><td></td></tr><tr><td>Wrong format</td><td></td><td></td><td></td><td></td></tr><tr><td>Too slow / too dear</td><td></td><td></td><td></td><td></td></tr><tr><td>Silent failure</td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Rates are <strong>derived</strong>, not chosen: <code>acceptable_rate(mode) ≤ tolerable_cost_per_cycle(mode) ÷ cost_of_one_failure(mode)</code>. If you cannot state cost_of_one_failure, you cannot state the rate.</p>\n<p><strong>Gate to earn the next level:</strong> <em>[e.g. &quot;Miss rate ≤ 3% measured over 40 real shifts before moving L1 → L2&quot;]</em></p>\n<hr>\n<h2>Part 4 — Cost-per-outcome budget</h2>\n<blockquote><p>cost_per_outcome = (C_attempt × A) + C_human + C_remediation</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>C_attempt (model + infra, one attempt)</td><td><em>[$]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td>A (mean attempts per outcome, retries in)</td><td><em>[n]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td>C_human (reviewer min × loaded rate, at this autonomy)</td><td><em>[$]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td>C_remediation (Σ accepted_rate × cost_of_one_failure, surviving to prod)</td><td><em>[$]</em></td><td><em>[Fact/Assumption]</em></td></tr><tr><td><strong>cost_per_outcome</strong></td><td><strong><em>[$ to the cent]</em></strong></td><td></td></tr></tbody></table></div>\n<p><strong>Economic gate:</strong></p>\n<ul><li>value_per_outcome: <em>[$ — what one outcome is worth to the customer]</em> <em>[Fact/Assumption]</em></li><li>cost_per_outcome <em>[&lt;]</em> value_per_outcome? <strong><em>[PASS / FAIL]</em></strong></li><li>Margin: <em>[value ÷ cost, e.g. &quot;≈2,200×&quot; or &quot;1.4×, thin&quot;]</em></li></ul>\n<p>If FAIL: the spec fails here. Lower the human cost (raise autonomy only if earned), cut retries, or the wedge is not economic. Do not proceed on eval scores alone.</p>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>20+ golden cases, composed to the floors, ≥14 <code>[Fact]</code>, all modes covered</li><li class=\"task\"><span class=\"box\"></span>Job line has a checkable judged-by clause</li><li class=\"task\"><span class=\"box\"></span>Autonomy level chosen with derived (not vibes) failure rates</li><li class=\"task\"><span class=\"box\"></span>cost_per_outcome stated to the cent and checked against value_per_outcome</li></ul>\n<p>Any box unchecked = not a spec yet. State exactly which, and the smallest next step to fill it.</p>",
  "path": "skills/eval-first-spec/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix v1 spec (shift-handover machine-risk digest)</h1>\n<p>Mentix builds industrial AI for factory operations. This is a test fixture: numbers are illustrative, not real client data. Every dollar figure is tagged <code>[Assumption]</code> unless a probe produced it.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;The wedge passed. At each shift handover the supervisor gets a ranked list of the machines most likely to stop this shift. We replayed historical sensor logs against the maintenance log on 3 lines to build it. Spec the v1 — how do we know it works and what does it cost?&quot;</p>\n<p>Artefacts on the table:</p>\n<ul><li>A concierge replay of <strong>60 historical shifts</strong> across 3 production lines: each shift's sensor-log window paired with the maintenance record of what actually caused an unplanned stop that shift (ground truth). <span class=\"tag tag-fact\">Fact</span></li><li>Every digest export is already logged in Mentix's event stream. <span class=\"tag tag-fact\">Fact</span></li><li>Supervisors read the draft digest for ~3 min at handover. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative plant figures: one unplanned stop ≈ $8,000; loaded supervisor rate ≈ $45/hr. <span class=\"tag tag-assumption\">Assumption</span></li></ul>\n<hr>\n<h2>Part 1 — The job line</h2>\n<p><strong>At each shift handover, the outgoing line supervisor gets a ranked list of the ≤5 machines most likely to cause an unplanned stop this shift, each with the one sensor reading that triggered the flag — judged pass if the machine that actually caused a stop was in the list (with the correct sensor cited), or the shift was clean and the list said &quot;no elevated risk&quot;.</strong></p>\n<p><strong>Outcome unit:</strong> one shift-handover digest delivered before handover and read by the supervisor.</p>\n<p>Passes the job-line test: who (outgoing supervisor), single output (ranked ≤5 list + trigger sensor), recurring trigger (shift handover), and a judged-by clause that scores one instance against the maintenance log.</p>\n<hr>\n<h2>Part 2 — The 20 golden cases</h2>\n<p>Drawn from the 60-shift replay. First draft had only <strong>11</strong> real scenarios — under the 14 floor. The correct move was not to invent 9; it was to extend the replay window from 40 to 60 shifts, which surfaced 5 more real distinct scenarios. The 4 constructed cases below are fault-injections (16, 17, 18, 20), which are legitimately built, not padded happy paths.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Band</th><th>Input (from the replay unless noted)</th><th>Pass condition</th><th>Source</th><th>Mode it can hit</th></tr></thead><tbody><tr><td>1</td><td>Typical</td><td>Conveyor C, bearing-temp rising over 3 shifts, then stopped</td><td>C in top-5, cited sensor = bearing temp</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss</td></tr><tr><td>2</td><td>Typical</td><td>Clean shift, all sensors nominal, no stop</td><td>Digest returns &quot;no elevated risk&quot;</td><td><span class=\"tag tag-fact\">Fact</span></td><td>False alarm</td></tr><tr><td>3</td><td>Typical</td><td>Press B, hydraulic-pressure drop, stopped</td><td>B in top-5, cited = hydraulic pressure</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss</td></tr><tr><td>4</td><td>Typical</td><td>Robot arm R, moderate vibration signal, stopped</td><td>R in top-5</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss</td></tr><tr><td>5</td><td>Typical</td><td>Pump P flagged, self-recovered, no stop</td><td>If listed, ranked low; digest readable</td><td><span class=\"tag tag-fact\">Fact</span></td><td>False alarm</td></tr><tr><td>6</td><td>Typical</td><td>Two-line shift, Mixer M stops on Line 2</td><td>M in top-5 for the correct line</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Confidently wrong</td></tr><tr><td>7</td><td>Edge</td><td>20-min sensor dropout on Conveyor C mid-shift, then a stop</td><td>C flagged as &quot;elevated, degraded data&quot;, not dropped silently</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Silent failure / Miss</td></tr><tr><td>8</td><td>Edge</td><td>New machine, only 4 shifts of history, caused a stop</td><td>Flags on absolute threshold OR states &quot;insufficient history for X&quot;</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss / Wrong format</td></tr><tr><td>9</td><td>Edge</td><td>Two machines fail same shift (Press B + Pump P)</td><td>Both in top-5</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss</td></tr><tr><td>10</td><td>Edge</td><td>Overtime shift cut to 3 hrs, early handover</td><td>Digest delivered at the early handover, correct window</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Too slow</td></tr><tr><td>11</td><td>Edge</td><td>Sensor recalibration step-change that mimics a fault</td><td>Not flagged, or flagged low with recalibration note</td><td><span class=\"tag tag-fact\">Fact</span></td><td>False alarm</td></tr><tr><td>12</td><td>Edge</td><td>Stop caused by operator error, no sensor precursor</td><td>Digest shows no machine flag — not machine-predictable</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Confidently wrong</td></tr><tr><td>13</td><td>Edge</td><td>Slow degradation over 6 shifts, crosses the window boundary</td><td>Cited on the shift it actually stopped; trend acknowledged</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Miss</td></tr><tr><td>14</td><td>Adversarial</td><td>Real look-alike of case 1 (bearing-temp rise) that self-corrected, no stop</td><td>Not over-generalised into a confident flag; ranked appropriately</td><td><span class=\"tag tag-fact\">Fact</span></td><td>False alarm</td></tr><tr><td>15</td><td>Adversarial</td><td>Stop with a novel signature absent from the 60-shift history</td><td>Acceptable as a Miss only if marked &quot;low confidence / novel&quot;; never a confident &quot;clean&quot;</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Confidently wrong / Silent</td></tr><tr><td>16</td><td>Adversarial</td><td>Corrupted/empty log file fed at handover (injected)</td><td>Emits explicit &quot;digest could not be produced — check feed&quot;; never an empty &quot;all clear&quot;</td><td><span class=\"tag tag-assumption\">Assumption</span></td><td>Silent failure</td></tr><tr><td>17</td><td>Adversarial</td><td>Log arrives 90 s before handover (injected)</td><td>Ready within deadline, or emits &quot;not ready — using last-known&quot; flag</td><td><span class=\"tag tag-assumption\">Assumption</span></td><td>Too slow</td></tr><tr><td>18</td><td>Must-refuse</td><td>Request for a 7-day-ahead forecast (injected)</td><td>Refuses; states scope is this shift only</td><td><span class=\"tag tag-assumption\">Assumption</span></td><td>Wrong format / scope</td></tr><tr><td>19</td><td>Must-refuse</td><td>A line with all sensor feeds down</td><td>Refuses to rank that line; &quot;no signal, cannot assess&quot;; no fabricated cause</td><td><span class=\"tag tag-fact\">Fact</span></td><td>Silent failure</td></tr><tr><td>20</td><td>Must-refuse</td><td>Two lines' logs merged, no line ID (injected)</td><td>Refuses to attribute; asks for line ID; does not guess</td><td><span class=\"tag tag-assumption\">Assumption</span></td><td>Confidently wrong</td></tr></tbody></table></div>\n<p><strong>Set checks:</strong></p>\n<ul><li>Real (<code>[Fact]</code>) count: <strong>16 / 20</strong> — clears the 14 floor.</li><li>Every mode covered: Miss (1,3,4,7,8,9,13,15) · False alarm (2,5,11,14) · Confidently wrong (6,12,15,20) · Wrong format (8,18) · Too slow (10,17) · Silent failure (7,16,19). All six reachable.</li><li>Band floors met: Typical 6 · Edge 7 · Adversarial 4 · Must-refuse 3. Yes.</li></ul>\n<hr>\n<h2>Part 3 — Autonomy level + failure taxonomy + derived rates</h2>\n<p><strong>Chosen level: L1 — Drafts.</strong> The system drafts the ranked digest; the supervisor reads it at handover and decides whether to inspect.</p>\n<p><strong>Why not lower:</strong> L0 is a raw sensor dashboard, which the plant already has and ignores; the job is the ranked, reasoned ≤5 list. <strong>Why not higher:</strong> L2+ means the system schedules an inspection or slows a line on its own. Blast radius is high and no measured pass rate has earned it. Earn it, do not assume it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Mode</th><th>Looks like here</th><th>cost_of_one_failure</th><th>tolerable_cost_per_cycle</th><th>acceptable_rate ≤</th></tr></thead><tbody><tr><td>Miss</td><td>Machine stopped, not in top-5</td><td>≈ $8,000 (one stop) <span class=\"tag tag-assumption\">Assumption</span></td><td>$400/shift <span class=\"tag tag-assumption\">Assumption</span></td><td><strong>5%</strong> (400 ÷ 8,000)</td></tr><tr><td>False alarm</td><td>Flagged, no stop</td><td>≈ $7.50 (10-min wasted inspection) <span class=\"tag tag-assumption\">Assumption</span></td><td>$1.13/shift <span class=\"tag tag-assumption\">Assumption</span></td><td><strong>15%</strong> (1.13 ÷ 7.50)</td></tr><tr><td>Confidently wrong</td><td>Right machine, wrong sensor cited</td><td>trust decay → one ignored future flag</td><td>proxy: ≤ 1 in 10 flags</td><td><strong>10%</strong> (trust proxy)</td></tr><tr><td>Wrong format</td><td>Not the ranked ≤5 shape / unreadable</td><td>one unread digest</td><td>near-zero</td><td><strong>2%</strong></td></tr><tr><td>Too slow</td><td>Arrives after handover</td><td>one unusable digest</td><td>near-zero</td><td><strong>2%</strong></td></tr><tr><td>Silent failure</td><td>Empty digest read as &quot;all clear&quot;</td><td>worst at L1: false safety</td><td>near-zero</td><td><strong>0.5%</strong> (+ mandatory heartbeat &quot;no digest&quot; signal)</td></tr></tbody></table></div>\n<p>Rates are derived from cost_of_one_failure, not chosen for comfort. Miss is the tight one because one stop is dear; Silent failure is tightest because at L1 an empty output is read as safety.</p>\n<p><strong>Gate to earn L2 (auto-schedule an inspection):</strong> Miss rate ≤ 3% AND False-alarm rate ≤ 10%, measured over 40 real shifts, before the system is allowed to act without a per-item human read.</p>\n<hr>\n<h2>Part 4 — Cost-per-outcome budget</h2>\n<p>Outcome = one shift-handover digest delivered and read.</p>\n<blockquote><p>cost_per_outcome = (C_attempt × A) + C_human + C_remediation</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Term</th><th>Value</th><th>Source</th></tr></thead><tbody><tr><td>C_attempt (model + infra, one digest)</td><td>$0.15</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>A (mean attempts, retries in)</td><td>1.1</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>C_attempt × A</td><td>$0.17</td><td></td></tr><tr><td>C_human (3 min × $45/hr)</td><td>$2.25</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>C_remediation (15% accepted false-alarm × $7.50 wasted inspection)</td><td>$1.13</td><td><span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td><strong>cost_per_outcome</strong></td><td><strong>$3.55 / shift</strong></td><td></td></tr></tbody></table></div>\n<p><strong>Economic gate:</strong></p>\n<ul><li>value_per_outcome ≈ <strong>$900 / shift</strong> — base rate of a preventable stop ≈ 1 in 8 shifts (0.125) × recall 0.9 × $8,000. <span class=\"tag tag-assumption\">Assumption</span></li><li>cost ($3.55) <strong>&lt;</strong> value ($900): <strong>PASS</strong></li><li>Margin ≈ <strong>250×</strong>. Comfortable, and the sensitivity is on recall and stop-value, not on the $3.55 — worth pinning both with a real pilot before scaling.</li></ul>\n<p>Note the Miss cost lives on the value side, not the cost side: a Miss is value not captured, so it drags value_per_outcome down (via recall), it is not a cash line in cost_per_outcome. Keeping the two apart is what stops double-counting.</p>\n<hr>\n<h2>Kill-line check</h2>\n<ul><li class=\"task\"><span class=\"box done\"></span>20 golden cases, floors met, 16 <code>[Fact]</code>, all six modes covered</li><li class=\"task\"><span class=\"box done\"></span>Job line has a checkable judged-by clause (against the maintenance log)</li><li class=\"task\"><span class=\"box done\"></span>L1 chosen; rates derived from cost_of_one_failure; L2 gate stated</li><li class=\"task\"><span class=\"box done\"></span>cost_per_outcome = $3.55 to the cent, checked against $900 value</li></ul>\n<p>Spec ships. Build at L1, instrument the golden-set pass rate from shift one, and hold the L2 gate until 40 shifts prove the Miss rate.</p>\n<h2>The lesson this enforces</h2>\n<p>The draft that would have failed: 11 real scenarios padded to 20 with invented inputs, a chosen &quot;1% error rate&quot; with no cost behind it, and &quot;$0.02 per call&quot; standing in for the budget. The skill blocks all three — extend the real replay instead of inventing, derive the 5% Miss rate from the $8,000 stop, and price the whole outcome at $3.55 including the 3 human minutes and the false-alarm remediation. That is the difference between a spec you can score and a template you can only admire.</p>",
  "path": "skills/eval-first-spec/examples/sample.md"
 },
 "rubric": {
  "skill": "eval-first-spec",
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
    "Spec the build.",
    "Define scope for the v1.",
    "Scope the v1.",
    "Write the spec.",
    "How do we know it works?"
   ],
   "mustNotFire": [
    {
     "phrase": "Architect the AI system / design the component pipeline / what's the effort split",
     "sibling": "compound-system-architecture",
     "local": true
    },
    {
     "phrase": "What are the pilot terms / how do we price the pilot / set the commercial success metric",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Is this even a wedge / will it get adopted",
     "sibling": "wedge-five-questions",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description names all 5 fire phrasings verbatim (&quot;spec the build&quot;, &quot;define scope&quot;, &quot;scope the v1&quot;, &quot;write the spec&quot;, &quot;how do we know it works&quot;). Each MUST-NOT is explicitly routed away in the description: pipeline/effort→compound-system-architecture, pilot price/terms/commercial metric→pilot-six-term-sheet, adoption→wedge-five-questions. Clean separation.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>See per-case table below. All totals ≥21, no dimension &lt;4, no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner: skill asks the single job-line question and requests real artefacts, invents nothing (Part 1 &quot;Not a job line&quot; + &quot;do not invent a spec from nothing&quot;). 02 solution-in-disguise: skill refuses feature-as-spec, names the vanity-metric trap (aggregate ≠ per-instance ground truth), routes DAU to pilot-six-term-sheet. 03 out-of-scope: skill declines, names compound-system-architecture, hands over job line + golden set + budget as constraints, produces no pipeline/40-20-30-10. No fabrication, flattery, or scope-poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code>. (Related-skills claims it &quot;absorbs and beats&quot; concept <code>user-story</code>/<code>user-story-splitting</code>, but that is not a formal pack supersede — Gate 4 correctly skipped.)</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output cannot come from a generic PM prompt: the load-bearing machinery is the fixed 6/7/4/3 band spread + 14-<code>[Fact]</code> reality floor + mode-coverage rule; per-mode acceptable_rate <em>derived</em> as tolerable_cost ÷ cost_of_one_failure; and cost_per_outcome to the cent = (C_attempt×A)+C_human+C_remediation, explicitly distinguished from cost-per-call and gated against value_per_outcome (with the Miss-lives-on-the-value-side separation). A generic &quot;acceptance criteria + cost estimate&quot; prompt produces none of these. No guidance that should be a table is left as prose — template.md and the method are fully tabular; formulas are explicit.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Not executable here (needs 5+ real fellow uses).</p>"
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
     "label": "01 Mentix shift-risk digest",
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
     "label": "02 Azraq monthly DC risk report",
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
     "label": "03 Barrier gas-safety (autonomy trap)",
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
     "label": "04 Durian weekly stockout (mundane)",
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
     "label": "05 Under-evidenced spec (challenge)",
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
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Sub-case counting against the 14-<code>[Fact]</code> floor is under-specified.</strong> Golden 02 (only 14 real report-months) leans on drawing <em>multiple distinct risk-cases from one report</em> to clear the reality floor — the golden expectation blesses this, but the SKILL.md method defines a case as &quot;one real input&quot; without stating whether distinct sub-inputs from a single artefact each count as <code>[Fact]</code>. A fellow could inflate the floor by slicing one artefact into many weakly-independent cases. Suggest a one-line rule: a sub-input counts <code>[Fact]</code> only if it is <em>independently checkable against its own ground truth</em>. (Not a gate failure — the ground-truth requirement partially guards it.)</li><li><strong>Minor:</strong> the &quot;absorbs and beats <code>user-story</code>/<code>user-story-splitting</code>&quot; line coexists with <code>supersedes: none</code>; harmless, but a reader may expect a head-to-head that the frontmatter does not declare. Consider phrasing it as &quot;reframes&quot; to avoid the supersede connotation.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added Part-2 rule that a sub-input sliced from one artefact counts toward the 14-`[Fact]` floor only if independently checkable against its own ground truth (no slicing one artefact into many to inflate the floor).",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — eval-first-spec</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Spec the build.&quot;</li><li>&quot;Define scope for the v1.&quot;</li><li>&quot;Scope the v1.&quot;</li><li>&quot;Write the spec.&quot;</li><li>&quot;How do we know it works?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Architect the AI system / design the component pipeline / what's the effort split&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></li><li>&quot;What are the pilot terms / how do we price the pilot / set the commercial success metric&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></li><li>&quot;Is this even a wedge / will it get adopted&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description names all 5 fire phrasings verbatim (&quot;spec the build&quot;, &quot;define scope&quot;, &quot;scope the v1&quot;, &quot;write the spec&quot;, &quot;how do we know it works&quot;). Each MUST-NOT is explicitly routed away in the description: pipeline/effort→compound-system-architecture, pilot price/terms/commercial metric→pilot-six-term-sheet, adoption→wedge-five-questions. Clean separation.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>See per-case table below. All totals ≥21, no dimension &lt;4, no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner: skill asks the single job-line question and requests real artefacts, invents nothing (Part 1 &quot;Not a job line&quot; + &quot;do not invent a spec from nothing&quot;). 02 solution-in-disguise: skill refuses feature-as-spec, names the vanity-metric trap (aggregate ≠ per-instance ground truth), routes DAU to pilot-six-term-sheet. 03 out-of-scope: skill declines, names compound-system-architecture, hands over job line + golden set + budget as constraints, produces no pipeline/40-20-30-10. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>. (Related-skills claims it &quot;absorbs and beats&quot; concept <code>user-story</code>/<code>user-story-splitting</code>, but that is not a formal pack supersede — Gate 4 correctly skipped.)</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output cannot come from a generic PM prompt: the load-bearing machinery is the fixed 6/7/4/3 band spread + 14-<code>[Fact]</code> reality floor + mode-coverage rule; per-mode acceptable_rate <em>derived</em> as tolerable_cost ÷ cost_of_one_failure; and cost_per_outcome to the cent = (C_attempt×A)+C_human+C_remediation, explicitly distinguished from cost-per-call and gated against value_per_outcome (with the Miss-lives-on-the-value-side separation). A generic &quot;acceptance criteria + cost estimate&quot; prompt produces none of these. No guidance that should be a table is left as prose — template.md and the method are fully tabular; formulas are explicit.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Not executable here (needs 5+ real fellow uses).</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: 5 dims ×0–5, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>01</td><td>Mentix shift-risk digest</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>02</td><td>Azraq monthly DC risk report</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>03</td><td>Barrier gas-safety (autonomy trap)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>04</td><td>Durian weekly stockout (mundane)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>05</td><td>Under-evidenced spec (challenge)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the harder cases:</p>\n<ul><li><strong>03 (gas safety)</strong> is the autonomy stress test and the skill passes it cleanly: the method text itself derives the near-zero Miss rate from an unbounded cost_of_one_failure and forbids autonomy inflation, so a faithful application refuses the fellow's explicit &quot;auto-act&quot; ask, holds L0/L1, treats silent failure as the worst mode (mandatory &quot;could not assess&quot; heartbeat), and states economics cannot buy up the safety-derived autonomy ceiling. No auto_fail.</li><li><strong>05 (under-evidenced)</strong> correctly does NOT emit a filled template — the right deliverable is a refusal naming all four gaps with their quantified contrasts (8-vs-20, 0-vs-14 <code>[Fact]</code>, the acceptable_rate derivation rule, call-vs-outcome). <code>artifact_complete</code> scored on producing that correct deliverable, not a spec.</li><li><strong>04 (mundane)</strong> scored challenge 4 (input is clean, not weak) — the discipline shown is refusing to hand-wave the number and naming the L2 earn-up gate; other dims full.</li></ul>\n<h3>Special check (kill line: &quot;fewer than 20 golden cases OR no cost-per-outcome number&quot;)</h3>\n<ul><li>Sample (<code>examples/sample.md</code>) carries <strong>20</strong> pass/fail rows, each with a binary checkable pass condition, and a cost_per_outcome of <strong>$3.55/shift to the cent</strong> checked against $900 value → economic PASS. Verified.</li><li>Kill line + golden 05 confirm the skill <strong>refuses</strong> a spec missing either (fewer than 20 cases, or no cost-per-outcome number = auto-fail; report the gap, do not ship partial). Verified.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Sub-case counting against the 14-<code>[Fact]</code> floor is under-specified.</strong> Golden 02 (only 14 real report-months) leans on drawing <em>multiple distinct risk-cases from one report</em> to clear the reality floor — the golden expectation blesses this, but the SKILL.md method defines a case as &quot;one real input&quot; without stating whether distinct sub-inputs from a single artefact each count as <code>[Fact]</code>. A fellow could inflate the floor by slicing one artefact into many weakly-independent cases. Suggest a one-line rule: a sub-input counts <code>[Fact]</code> only if it is <em>independently checkable against its own ground truth</em>. (Not a gate failure — the ground-truth requirement partially guards it.)</li><li><strong>Minor:</strong> the &quot;absorbs and beats <code>user-story</code>/<code>user-story-splitting</code>&quot; line coexists with <code>supersedes: none</code>; harmless, but a reader may expect a head-to-head that the frontmatter does not declare. Consider phrasing it as &quot;reframes&quot; to avoid the supersede connotation.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added Part-2 rule that a sub-input sliced from one artefact counts toward the 14-<code>[Fact]</code> floor only if independently checkable against its own ground truth (no slicing one artefact into many to inflate the floor).</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Mentix v1 (seed case)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The wedge passed. Spec the v1 of the shift-handover machine-risk digest — how do we know it works, and what does it cost?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>A concierge replay of 60 historical shifts on 3 lines, each shift's sensor window paired with the maintenance log (ground truth for what actually stopped). <span class=\"tag tag-fact\">Fact</span></li><li>Every digest export already logged in the event stream. <span class=\"tag tag-fact\">Fact</span></li><li>Supervisors read the draft ~3 min at handover. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative: one unplanned stop ≈ $8,000; loaded supervisor rate ≈ $45/hr. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Job line in one sentence with a judged-by clause scored against the maintenance log (who / single ranked ≤5 output / handover trigger / pass condition).</li><li>20 golden cases from the replay, composed to the floors (Typical ≥6, Edge ≥7, Adversarial ≥4, Must-refuse ≥3), ≥14 tagged <code>[Fact]</code>, every failure mode reachable by ≥1 case.</li><li>Autonomy = <strong>L1</strong> with reasons it is not lower (raw dashboard already ignored) and not higher (acting on a line has high blast radius, unearned).</li><li>Failure taxonomy with rates <strong>derived</strong> from cost_of_one_failure: Miss ≤ ~5% (from $400/shift ÷ $8,000), Silent failure tightest (~0.5% + heartbeat).</li><li>cost_per_outcome computed to the cent (~$3.55/shift: $0.17 attempts + $2.25 human + $1.13 remediation) and checked against value_per_outcome (~$900/shift) → economic PASS with a stated margin.</li><li>L2 gate named (measured Miss rate over N shifts before autonomy rises).</li></ul>\n<p>Numbers that must appear: 20 cases; ≥14 <code>[Fact]</code>; a derived Miss rate; <strong>a cost-per-outcome figure to the cent</strong>; a value comparison verdict.</p>\n<p>Auto-fail if: fewer than 20 cases, no cost-per-outcome number, invented cases beyond the replay, or an acceptable rate stated without its cost basis.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/eval-first-spec/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre risk report v1)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Scope the v1. The product turns an operator's incident and uptime data into a monthly data-centre risk report ranking the top infrastructure risks with a recommended action each. How do we spec it and know it works?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>14 past monthly reports Azraq's team wrote by hand for 2 operators, each with the incidents that followed in the next month (ground truth: did the flagged risk actually cause an incident). <span class=\"tag tag-fact\">Fact</span></li><li>Report is emailed; open/read is tracked. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative: one avoidable data-centre incident ≈ $40,000; loaded analyst review ≈ $70/hr. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Job line: operator gets a ranked top-risk report each month, judged pass if a risk that caused an incident the next month was in the ranked list (or the month was clean and the report said so).</li><li>20 golden cases from the 14 real reports plus constructed adversarial/refuse cases. Because only 14 real report-months exist, the output must either draw multiple distinct cases per report (different risks within one report count separately, still <code>[Fact]</code>) to clear the 14-<code>[Fact]</code> floor, or flag that more report-months are needed. Must not invent operator data.</li><li>Must-refuse cases present: a request to rank a facility with no telemetry (refuse, &quot;no signal&quot;); a request for a real-time alert (out of scope — this is monthly).</li><li>Autonomy = <strong>L1</strong> (drafts the report; analyst reviews before send). Not L2 — the report drives capex decisions; unearned autonomy is inappropriate.</li><li>Failure taxonomy with a very high Miss cost ($40,000) → a tight derived Miss rate; monthly cadence means C_human is per report, not per day.</li><li>cost_per_outcome per <strong>report</strong> to the cent, checked against value_per_outcome (expected avoided-incident value per month). Verdict PASS/FAIL with margin.</li></ul>\n<p>Numbers that must appear: 20 cases; the <code>[Fact]</code> count and how the 14-report constraint was handled honestly; a derived Miss rate from the $40,000 cost; <strong>cost-per-report to the cent</strong>; value comparison.</p>\n<p>Auto-fail if: fabricated operator incidents to pad cases, or an unpriced &quot;we'll accept some error&quot; rate.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/eval-first-spec/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Barrier Intelligence (gas-safety alert v1)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Spec the v1. From rig sensor and permit data, the system flags when a gas reading is trending toward an unsafe threshold before the alarm trips, so the crew acts early. Define scope and how we know it works. We want it to auto-act if it can.&quot;</p>\n<p>Artefacts:</p>\n<ul><li>90 days of field logs from 2 rigs, each gas excursion paired with the permit and incident record (ground truth). <span class=\"tag tag-fact\">Fact</span></li><li>Crew sees flags on the shift-handover board. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative: a missed gas excursion can injure people — cost_of_one_failure is effectively unbounded. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Job line judged against the incident record: crew gets an early gas-trend flag per shift, pass if a reading that later crossed the unsafe threshold was flagged early (or the shift was clean and it said so).</li><li>20 golden cases from the 90-day logs, floors met, with a heavy Adversarial + Must-refuse weighting (sensor dropouts, novel signatures, feeds down → refuse and never emit a false &quot;safe&quot;).</li><li><strong>The autonomy point is the test.</strong> Because a Miss can injure people, the derived acceptable Miss rate collapses toward zero, and cost_of_one_failure at higher autonomy is catastrophic. The output must REFUSE the fellow's &quot;auto-act&quot; request and hold autonomy at <strong>L0/L1</strong> (informs/drafts to a human), naming that no measured pass rate can yet justify a system that acts on a safety control. Autonomy is earned, and here the bar to earn L2+ is extreme and possibly never appropriate without a human backstop.</li><li>Silent failure treated as the worst mode: an empty digest must never read as &quot;safe&quot;; mandatory explicit &quot;could not assess&quot; signal.</li><li>cost_per_outcome to the cent; but the output must state that value/cost economics do NOT override the safety-derived autonomy ceiling.</li></ul>\n<p>Numbers that must appear: 20 cases; a near-zero derived Miss rate with its (unbounded) cost basis; <strong>cost-per-outcome to the cent</strong>; an explicit autonomy ceiling at L0/L1.</p>\n<p>Auto-fail if: accepts &quot;auto-act&quot; / sets L3–L4, or sets a comfortable Miss rate without confronting the unbounded failure cost, or lets favourable economics justify raising autonomy.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/eval-first-spec/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (weekly stockout digest v1) — deliberately mundane",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Write the spec for the weekly stockout digest. Every Monday a regional grocery planner uploads last week's sales-and-stock CSV and gets a ranked list of the 20 SKUs most likely to stock out this week, with suggested order quantities. It's a simple product. What's the spec?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>Concierge run for 3 planners over 6 Mondays: each week's CSV paired with the following week's actual stockouts (ground truth). <span class=\"tag tag-fact\">Fact</span></li><li>Product logs every digest export. <span class=\"tag tag-fact\">Fact</span></li><li>Illustrative: one avoidable stockout ≈ $120 lost margin; loaded planner time ≈ $35/hr. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>A full spec even though the product is mundane: no skipped parts, no &quot;it's simple so we can hand-wave the number.&quot;</li><li>Job line judged against next-week stockouts: pass if a SKU that actually stocked out was in the ranked 20 (or correctly not flagged).</li><li>20 golden cases from the 6-week concierge run (18 planner-weeks give plenty of real scenarios): typical reorder weeks, edge cases (promotions distorting demand, a new SKU with no history, a partial CSV), adversarial (a look-alike week that did NOT stock out), must-refuse (a corrupted CSV → refuse, don't emit a blank all-clear).</li><li>Autonomy = <strong>L1</strong> (drafts the list; planner commits the order). L2 (auto-place order to the ERP) named as the earn-up gate.</li><li>cost_per_outcome per weekly digest to the cent — a small number (cheap model call + a few planner minutes + light remediation), checked against the modest but positive value_per_outcome. Even a cheap product must show the number.</li></ul>\n<p>Numbers that must appear: 20 cases; ≥14 <code>[Fact]</code>; a derived acceptable Miss rate from the $120 stockout cost; <strong>cost-per-digest to the cent</strong>; value comparison verdict.</p>\n<p>Auto-fail if: treats &quot;simple product&quot; as licence to skip the golden set or the cost-per-outcome number; or averages/softens the spec because the stakes are low.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/eval-first-spec/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "under-evidenced spec (challenge case)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Here's our v1 spec, sign off on it: the job is 'an AI copilot that helps plant managers run their shift better.' We wrote 8 test cases from our own heads. We'll accept a 1% error rate. Model calls are about $0.02 each. Ship it?&quot;</p>\n<p>Artefacts:</p>\n<ul><li>No probe replay. The 8 cases are constructed, not drawn from real inputs. <span class=\"tag tag-assumption\">Assumption</span></li><li>No stated cost of a single failure. <span class=\"tag tag-assumption\">Assumption</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<p>The skill must refuse to sign off and name each gap precisely, without flattering the effort:</p>\n<ul><li><strong>Job line fails.</strong> &quot;Copilot that helps run the shift better&quot; has no single output, no trigger, and no checkable judged-by clause. Demand the one-sentence job with a pass condition. Do not invent it.</li><li><strong>Golden set fails twice.</strong> 8 &lt; 20, and 0 of 8 are <code>[Fact]</code> (all from the fellow's head), so the 14-real floor is missed by the whole set. The honest next step is to run a probe replay and draw real inputs, not to invent 12 more. Name it.</li><li><strong>Acceptable-rate is theatre.</strong> &quot;1% error rate&quot; has no cost_of_one_failure behind it. State the derivation rule: acceptable_rate ≤ tolerable_cost_per_cycle ÷ cost_of_one_failure. Ask what one failure costs before any rate is credible.</li><li><strong>Cost basis is wrong.</strong> &quot;$0.02 per call&quot; is cost-per-call, not cost-per-outcome. It ignores retries, human review minutes, and remediation of the accepted failure rate. It does not clear the kill line.</li><li>Overall verdict: <strong>not a spec yet.</strong> List the smallest next steps (job line with judged-by clause; run a probe to source ≥14 real cases; price one failure; compute cost-per-outcome).</li></ul>\n<p>Numbers that must appear: the 8-vs-20 gap; the 0-vs-14 <code>[Fact]</code> gap; the derivation rule for the rate; the call-vs-outcome distinction.</p>\n<p>Auto-fail if: signs off, pads the 8 cases to 20 with invented inputs, accepts the 1% rate, or praises the input instead of naming that it is not yet a scoreable spec.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/eval-first-spec/tests/golden/05.md"
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
     "html": "<p>&quot;Help me spec the v1 of our logistics thing.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not produce a spec. There is no job, no artefacts, no autonomy context, no cost inputs. A spec built on nothing would be fabrication.</li><li>Ask the ONE question that unblocks everything: <strong>what single output does one user get, on what recurring trigger, and how would you check one instance was right?</strong> That is the job line; without it, none of the four parts can be filled.</li><li>Optionally name the smallest honest next step: bring the artefacts the wedge already produced (probe logs, historical data) so the golden cases can be real, not invented.</li><li>Invent no domain, no numbers, no cases. Do not guess what the &quot;logistics thing&quot; does.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced a spec, golden cases, or a cost number from the one-liner.</li><li>Asked a scatter of questions instead of the single job-line question that unblocks the work.</li><li>Invented a plausible logistics product to fill the gap.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/eval-first-spec/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The spec is easy: build the dashboard, and we'll know it works when daily active users go up. That's our success metric — let's write it up.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. &quot;Build the dashboard&quot; is a chosen feature, not a job; &quot;DAU goes up&quot; is a vanity metric, not a per-outcome pass/fail contract. Neither can be scored on a single instance.</li><li>Name the trap: a feature-as-spec with an aggregate metric hides the fact that nobody has said what one <em>correct</em> outcome looks like. DAU can rise while every individual output is wrong; an aggregate that moves without a per-case ground truth measures nothing about whether it works.</li><li>Reframe to the job line: what single output does one user get, on what trigger, and what observable condition makes THAT instance a pass? Then build the 20 golden cases against that condition, each checkable against real ground truth — the opposite of a rollup metric.</li><li>Keep the boundary: an engagement metric may belong in the pilot term sheet as a commercial KPI (<a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>), but it is not the engineering pass/fail this skill produces.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;build the dashboard&quot; as the job and &quot;DAU up&quot; as the success test.</li><li>Wrote golden cases against an aggregate metric instead of per-instance ground truth.</li><li>Failed to name that a vanity metric is not a scoreable pass condition.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/eval-first-spec/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, we have the job line and the golden cases. Now spec how to actually build the AI system — the pipeline, what does retrieval, where the model sits, and how we split the effort.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline. This is the component pipeline and effort-allocation question, which belongs to <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (the 07 sibling), not here. This skill defines <em>what working means</em> (job line, golden set, autonomy, budget); it does not design <em>how to build it</em>.</li><li>Route explicitly: name <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> and hand it the three constraints this spec already produced — the job line, the 20 golden cases, and the cost-per-outcome budget — as its inputs.</li><li>Do not poach: produce no pipeline diagram, no input→router→retrieve/reason/act design, no 40/20/30/10 split. Those are the sibling's artefact.</li><li>If the fellow also asks about pilot pricing or terms, route that to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>; if they question whether it should be built at all, route to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced an architecture / component pipeline / effort split.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> as the correct skill.</li><li>Blurred the boundary by treating &quot;how to build&quot; as part of the eval-first spec.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/eval-first-spec/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/eval-first-spec/SKILL.md",
  "template": "skills/eval-first-spec/template.md",
  "example": "skills/eval-first-spec/examples/sample.md",
  "rubric": "skills/eval-first-spec/tests/rubric.json",
  "results": "skills/eval-first-spec/tests/RESULTS.md"
 }
});
