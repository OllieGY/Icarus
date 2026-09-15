window.ICARUS_SKILL("refine-flywheel", {
 "name": "refine-flywheel",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Turns a shipped product into a loop that compounds. It takes a v1 that is live behind a human sign-off gate and stands up four stations: ship (the current autonomy level and its gate), observe (instrument tweak-time — the edit distance between what the system proposed and what the human committed), learn (re-run the entire golden set from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> on every model release and on a fixed floor cadence), and refine (move autonomy up or down strictly on the scored eval result). The artefact is the filled <code>template.md</code>: a cadence doc that names what runs, how often, who owns it, and the exact numbers that move autonomy. A loop that raises autonomy on a hunch is not this skill; it is the failure this skill exists to stop.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The generic post-launch loop is build-measure-learn with an engagement dashboard: usage goes up and to the right, everyone nods, nothing about the product's trustworthiness is known. Icarus replaces the vanity metric with <strong>tweak-time</strong> — a behaviour signal (0.7 on the ladder), read from production traces, that measures how much a customer edits an output before accepting it; tweak-time falling to zero is the product earning the right to act. It replaces &quot;ship it and move on&quot; with a standing regression harness: a new model release is a <strong>regression risk until the eval set re-scores it</strong>, not a free upgrade, so the whole golden set re-runs before any model change reaches production. And it replaces the autonomy promotion-by-confidence with a <strong>ratchet driven by evidence in both directions</strong> — the L0–L4 level from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> climbs one rung only when the eval re-run passes that rung's derived failure rates over N real cycles, and drops when a model release regresses them. Tweak-time nominates; the eval confirms; feelings never vote.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it once a product is shipped or in a paid pilot, behind a sign-off gate, WITH an eval set and an autonomy ladder already produced by <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Trigger phrases: &quot;what happens after launch&quot;, &quot;improve the product&quot;, &quot;set up the loop&quot;, &quot;a new model came out — should we upgrade&quot;, &quot;can we raise the autonomy level / drop the sign-off yet&quot;.</p>\n<p>Hard precondition: no eval set, no flywheel. The learn station has nothing to re-run without the 20-case golden set, and the refine station has no ladder to climb without the L0–L4 levels. If those do not exist, stop and route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Do not invent an eval set here.</p>\n<p>Do not use it for:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Which metrics / what's our North Star / does retention flatten / cost-per-outcome dashboard&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (08, sibling). It picks the metric set; this builds the ship→observe→learn→refine cadence and the autonomy ratchet. This skill <em>reads</em> tweak-time and cost-per-outcome; that skill decides the wider scorecard. Route metric selection there.</td></tr><tr><td>&quot;Turn these production traces into interviews / what unmet need do the logs reveal&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> (08, sibling). It mines the qualitative discovery question from one trace; this reads traces as a quantitative behaviour signal (tweak-time) and as the eval-regression check. Same raw feed, different question.</td></tr><tr><td>&quot;Write the golden cases / set the autonomy level / define what working means&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07). It <em>creates</em> the eval set and ladder before build; this <em>re-runs</em> them after launch. If there is no eval set, you are here too early.</td></tr><tr><td>&quot;Keep the opportunity tree alive / set up continuous discovery&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (02). That is the discovery-side loop; this is the delivery/quality-side loop. They run beside each other (dual-track) and share the trace feed; neither owns the other.</td></tr></tbody></table></div>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Check the precondition, then the four stations, then the compounding check and the kill line.</p>\n<h3 id=\"station-0-precondition-gate\">Station 0 — Precondition gate</h3>\n<p>Before anything, confirm three things exist. If any is missing, the flywheel cannot turn; name the gap and route.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>If missing</th></tr></thead><tbody><tr><td>A golden set (the 20+ pass/fail cases from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>)</td><td>Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. There is nothing to re-run. Stop.</td></tr><tr><td>A chosen autonomy level L0–L4 with per-mode acceptable rates</td><td>Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. There is no ladder to climb. Stop.</td></tr><tr><td>The product is live behind a human sign-off gate</td><td>If it ships with no sign-off, that is a <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> gap, not a flywheel.</td></tr></tbody></table></div>\n<h3 id=\"station-1-ship-behind-sign-off\">Station 1 — Ship (behind sign-off)</h3>\n<p>State the starting position, not the destination. Record the current autonomy level (usually L1 Drafts or L2 Acts-on-approval — the level <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> shipped) and the sign-off gate: every output is reviewed and committed by a named human before it acts. The flywheel's whole job is to earn the right to loosen this gate, one measured rung at a time. Autonomy starts low on purpose.</p>\n<h3 id=\"station-2-observe-tweak-time\">Station 2 — Observe (tweak-time)</h3>\n<p>Instrument one behaviour: <strong>tweak-time</strong> — how much the human edits the system's proposed output before accepting it. Read it from the production trace, not a survey. Track three numbers per output type:</p>\n<ul><li>clean-accept rate: share of outputs committed with <strong>zero</strong> edits <code>[Fact, from traces]</code></li><li>median edit fraction: how much of the accepted output was changed</li><li>the trend over weeks: falling, flat, or rising</li></ul>\n<p>Read the bands like this:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Clean-accept rate</th><th>Trend</th><th>Reading and action</th></tr></thead><tbody><tr><td>any</td><td>falling over weeks</td><td>The product is regressing or drifting. Freeze autonomy, run the learn station now, find the cause before anything else.</td></tr><tr><td>&lt; 30%</td><td>flat</td><td>Still a draft tool. Hold autonomy. Cluster the edits — a systematic edit is a missing feature or a wrong default, not noise.</td></tr><tr><td>30–70%</td><td>rising</td><td>Earning trust. Hold the level. Watch which failure modes sit behind the remaining edits.</td></tr><tr><td>&gt; 70%</td><td>sustained over the level's N cycles</td><td><strong>Nominates</strong> a level-up. It does not grant one. Carry the nomination to Station 4; the eval decides.</td></tr></tbody></table></div>\n<p>Tweak-time is a nomination, never a promotion. Everything else (retention, cost-per-outcome, North Star) is <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a>'s scorecard — reference it, do not rebuild it here.</p>\n<h3 id=\"station-3-learn-re-run-the-whole-eval-set\">Station 3 — Learn (re-run the WHOLE eval set)</h3>\n<p>This is the station the kill line guards. Re-run every golden case, not a sample, on any of these triggers:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Trigger</th><th>Why it is mandatory</th></tr></thead><tbody><tr><td>Any model version change (provider release, model swap)</td><td>A new model can silently regress a case that passed last week. &quot;Obviously better&quot; is not a measurement. Re-run <strong>before</strong> it reaches production.</td></tr><tr><td>Any change to the core prompt / system message</td><td>Same input, changed reasoning, unknown result.</td></tr><tr><td>Any change to retrieval or the corpus</td><td>The evidence the model reasons over moved.</td></tr><tr><td>A fixed floor cadence (monthly) with no change at all</td><td>Catches drift, data-distribution shift, and provider-side silent updates.</td></tr></tbody></table></div>\n<p>On each re-run, log to a standing eval ledger and compare per-mode pass rates against two baselines: the last run, and <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s derived <code>acceptable_rate(mode)</code>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Model / change</th><th>Miss</th><th>False alarm</th><th>Confidently wrong</th><th>...</th><th>Δ vs last</th><th>Action</th></tr></thead><tbody><tr><td><em>[date]</em></td><td><em>[what changed]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td></td><td><em>[better/worse]</em></td><td><em>[ship / hold / demote]</em></td></tr></tbody></table></div>\n<p>The regression rule overrides aggregate improvement: a regression on any safety-critical mode (a Miss in gas safety, a Confidently-wrong in a decision that moves money) blocks the release or demotes autonomy <strong>even if the overall pass rate went up</strong>. Net-better does not buy a safety regression.</p>\n<h3 id=\"station-4-refine-promote-autonomy-by-eval-never-by-feel\">Station 4 — Refine (promote autonomy by eval, never by feel)</h3>\n<p>Move autonomy along the <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> ladder using the scored eval, gated by tweak-time. One rung at a time; no skipping.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Autonomy action</th></tr></thead><tbody><tr><td>Tweak-time nominates (&gt;70% clean-accept sustained N cycles) AND an eval re-run <strong>at the next level's</strong> acceptable rates passes over N real cycles, no safety-mode regression</td><td>Promote one rung</td></tr><tr><td>Eval re-run holds the current level's rates</td><td>Hold</td></tr><tr><td>Eval re-run regresses below the current level's <code>acceptable_rate</code> (common after a model release)</td><td>Demote / re-gate behind sign-off until a passing re-run</td></tr><tr><td>Tweak-time nominates but no eval was re-run at the next level</td><td><strong>Hold.</strong> The nomination is 0.7 evidence for a hypothesis; the promotion needs the scored eval. Feel is not a vote.</td></tr></tbody></table></div>\n<p>N is the same &quot;gate to earn the next level&quot; that <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> Part 3 already set (e.g. Miss ≤ 3% over 40 real shifts). Do not re-derive it; carry it forward.</p>\n<h3 id=\"compounding-check-and-kill-line\">Compounding check and kill line</h3>\n<p>A loop is only a flywheel if each turn lowers <code>cost_per_outcome</code> (from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> Part 4) — fewer human review minutes as autonomy rises, or fewer retries as quality rises — freeing margin for the next discovery cycle. If cost-per-outcome is flat turn over turn while usage climbs, it is a loop spinning in place. Name it.</p>\n<p><strong>Kill line.</strong> The cadence doc ships only if (1) the learn station re-runs the whole eval set on every model release, and (2) every autonomy change is tied to a scored eval result. A loop that promotes autonomy by feel, or that upgrades a model with no re-run, is auto-fail. Report the gap; do not dress a vanity loop as a flywheel.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>This skill weights behaviour and money over opinion. The ladder: money moved 1.0 → behaviour observed 0.7 → artefact shown 0.5 → verbal commitment 0.3 → opinion 0.1.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal in this loop</th><th>Rung</th><th>Use</th></tr></thead><tbody><tr><td>Cost-per-outcome fell / customer expanded spend</td><td>0.7–1.0</td><td>Proves the flywheel compounds.</td></tr><tr><td>Tweak-time (clean-accept rate from traces)</td><td>0.7</td><td>Nominates an autonomy level-up. Never grants it.</td></tr><tr><td>Eval re-run pass rate on the real golden set</td><td>0.5–0.7</td><td>The only signal that moves autonomy.</td></tr><tr><td>&quot;The team feels it's ready&quot; / &quot;users like it&quot;</td><td>0.1</td><td>Cannot move autonomy. Named as opinion, parked.</td></tr></tbody></table></div>\n<p>An autonomy promotion must rest on the scored eval (≥ 0.5). No promotion is ever justified by the 0.1 &quot;feels reliable now.&quot; Tag every rate <code>[Fact]</code> (measured on real traces or the real golden set) or <code>[Assumption]</code> (projected until a real re-run confirms it).</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Promoting on tweak-time alone. A 90% clean-accept rate feels like proof, but it is a proxy. Until the golden set is re-scored at the higher level's acceptable rates, the level is not earned. Tweak-time nominates; the eval confirms. Skipping the eval is promoting by feel with a number attached.</p>\n<p>Treating a model upgrade as a free win. Skipping the re-run because the new model is &quot;obviously better&quot; is the exact failure the kill line names. A silent regression on one mode can outweigh every aggregate gain, and you will not see it without re-running all 20 cases. Newer is unknown, not better, until scored.</p>\n<p>Tweak-time survivorship at higher autonomy. You only observe edits on outputs a human reviewed. At L3+ the un-reviewed outputs generate no tweak-time signal — so the metric blinds you exactly where cost-of-error is highest. Above L2, supplement tweak-time with the flagged-exception review rate and periodic audits; do not trust the clean-accept rate alone.</p>\n<p>Clean-accept gamed by emptier output. If the model learns to hedge — vaguer, safer outputs a human cannot disagree with — tweak-time falls for the wrong reason. Guard: the golden set's must-refuse and adversarial bands must still pass. A rising clean-accept rate with a falling golden pass rate is drift, not trust.</p>\n<p>Vanity loop. Usage up, edits still 100%, is a product people are forced to use, not one they trust. If tweak-time and cost-per-outcome are flat, &quot;engagement is growing&quot; is noise.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — the post-launch flywheel for Mentix's shift-handover machine-risk digest, picking up exactly where <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> shipped it at L1: tweak-time instrumented on the digests (clean-accept climbing 41% → 78%), a model-release re-run that regresses the Miss rate and correctly holds autonomy despite a higher aggregate score, and an L1→L2 promotion granted only after the re-scored eval clears the derived gate — with cost-per-outcome falling $3.55 → $2.90/shift as the compounding proof.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07) — creates the golden set and the L0–L4 ladder that this skill re-runs and climbs. Upstream, once, before build. If it has not run, this skill has no inputs. They are two ends of one asset: that skill writes the eval, this one keeps it alive.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (08, sibling) — owns the metric scorecard (AARRR, the retention curve that must flatten, the North Star, cost-per-outcome to the cent). This skill consumes cost-per-outcome and tweak-time; it does not choose the scorecard. Reference it for retention and North Star; do not restate the M9 retention pack.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> (08, sibling) — turns one production trace into a discovery interview. Same raw feed as this skill's observe station, opposite question: it asks &quot;what unmet need does this trace reveal&quot;, this asks &quot;is the product earning autonomy&quot;. Route the qualitative discovery question there.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (02) — the discovery-side loop (the living opportunity tree). This is the delivery-side loop. They run dual-track and share the trace feed; keep the boundary.</p>\n<p>Supersedes: none. New skill; no prior post-launch flywheel exists in the pack to replace.</p>"
  }
 ],
 "template": {
  "html": "<h1>Flywheel Cadence Doc — &lt;product name&gt;</h1>\n<p>The post-launch loop for a shipped AI product. Fill every station. This doc ships only if (1) the learn station re-runs the WHOLE eval set on every model release, and (2) every autonomy change is tied to a scored eval result. Anything less is a vanity loop; report the gap.</p>\n<p>Tag every rate <code>[Fact]</code> (measured on real traces or the real golden set) or <code>[Assumption]</code> (projected until a real re-run confirms it).</p>\n<hr>\n<h2>Station 0 — Precondition gate</h2>\n<p>The flywheel cannot turn without these. If any is missing, stop and route.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Present?</th><th>If missing</th></tr></thead><tbody><tr><td>Golden set (20+ pass/fail cases from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>)</td><td><em>[Yes / No]</em></td><td>Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. Nothing to re-run.</td></tr><tr><td>Chosen autonomy level L0–L4 + per-mode acceptable rates</td><td><em>[Yes / No]</em></td><td>Route to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. No ladder to climb.</td></tr><tr><td>Product is live behind a human sign-off gate</td><td><em>[Yes / No]</em></td><td>Ships with no sign-off = a <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> gap.</td></tr></tbody></table></div>\n<p>If any cell is No, do not fill the rest. State the gap and the route.</p>\n<hr>\n<h2>Station 1 — Ship (behind sign-off)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Current autonomy level</td><td><em>[L0 / L1 / L2 / L3 / L4 — the level <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> shipped]</em></td></tr><tr><td>The sign-off gate</td><td><em>[who reviews and commits every output before it acts]</em></td></tr><tr><td>Outcome unit</td><td><em>[one completed instance of the job line, from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>]</em></td></tr><tr><td>Baseline cost-per-outcome</td><td><em>[$ from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> Part 4]</em></td></tr></tbody></table></div>\n<p>This is the starting position. The loop's job is to earn a looser gate one measured rung at a time.</p>\n<hr>\n<h2>Station 2 — Observe (tweak-time)</h2>\n<p>Instrument the edit distance between what the system proposed and what the human committed. Read from the production trace, not a survey.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Now</th><th>Trend (weeks)</th><th>Source</th></tr></thead><tbody><tr><td>Clean-accept rate (committed with <strong>zero</strong> edits)</td><td><em>[%]</em></td><td><em>[falling / flat / rising]</em></td><td><em>[Fact / Assumption]</em></td></tr><tr><td>Median edit fraction</td><td><em>[%]</em></td><td><em>[…]</em></td><td><em>[…]</em></td></tr></tbody></table></div>\n<p>Read the band:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Clean-accept</th><th>Trend</th><th>Action</th></tr></thead><tbody><tr><td>any</td><td>falling</td><td>Freeze autonomy. Run Station 3 now. Find the cause first.</td></tr><tr><td>&lt; 30%</td><td>flat</td><td>Draft tool. Hold. Cluster the edits → a systematic edit is a missing feature, not noise.</td></tr><tr><td>30–70%</td><td>rising</td><td>Earning trust. Hold. Watch the modes behind the edits.</td></tr><tr><td>&gt; 70%</td><td>sustained over N cycles</td><td><strong>Nominates</strong> a level-up → carry to Station 4. Does not grant it.</td></tr></tbody></table></div>\n<p><strong>Systematic edit found (if any):</strong> <em>[the recurring change humans make = the next feature or default]</em></p>\n<p>Retention, North Star, and the rest of the scorecard belong to <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a>. Do not rebuild them here.</p>\n<hr>\n<h2>Station 3 — Learn (re-run the WHOLE eval set)</h2>\n<p>Re-run <strong>every</strong> golden case (not a sample) on each trigger. This station is mandatory; skipping it is the kill line.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Trigger</th><th>Covered by our cadence?</th></tr></thead><tbody><tr><td>Any model version change — re-run <strong>before</strong> production</td><td><em>[Yes / No]</em></td></tr><tr><td>Any core prompt / system-message change</td><td><em>[Yes / No]</em></td></tr><tr><td>Any retrieval / corpus change</td><td><em>[Yes / No]</em></td></tr><tr><td>Monthly floor cadence with no change (drift catch)</td><td><em>[Yes / No]</em></td></tr></tbody></table></div>\n<h3>Eval ledger (append one row per re-run)</h3>\n<blockquote><p>The five mode columns below are illustrative — relabel them to <em>this product's</em> failure modes from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. They are not canonical.</p></blockquote>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Model / change</th><th>Miss</th><th>False alarm</th><th>Confidently wrong</th><th>Wrong format</th><th>Silent failure</th><th>Δ vs last</th><th>Action</th></tr></thead><tbody><tr><td><em>[date]</em></td><td><em>[baseline]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td><em>[rate]</em></td><td>—</td><td>shipped</td></tr><tr><td><em>[date]</em></td><td><em>[what changed]</em></td><td></td><td></td><td></td><td></td><td></td><td><em>[better/worse]</em></td><td><em>[ship / hold / demote]</em></td></tr></tbody></table></div>\n<p><strong>Regression rule:</strong> a regression on any safety-critical mode blocks the release or demotes autonomy <strong>even if the aggregate pass rate rose</strong>. Net-better does not buy a safety regression. Name the safety-critical mode(s) for this product: <em>[…]</em></p>\n<hr>\n<h2>Station 4 — Refine (autonomy by eval, never by feel)</h2>\n<p>Move one rung at a time along the <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> ladder. No skipping.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Action</th><th>This cycle</th></tr></thead><tbody><tr><td>Tweak-time nominates AND eval re-run <strong>at next level</strong> passes its acceptable rates over N cycles, no safety-mode regression</td><td>Promote one rung</td><td><em>[…]</em></td></tr><tr><td>Eval holds current level's rates</td><td>Hold</td><td><em>[…]</em></td></tr><tr><td>Eval regresses below current level's <code>acceptable_rate</code></td><td>Demote / re-gate behind sign-off</td><td><em>[…]</em></td></tr><tr><td>Tweak-time nominates but no eval re-run at next level</td><td><strong>Hold</strong> — not earned</td><td><em>[…]</em></td></tr></tbody></table></div>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Gate to earn the next level (N)</td><td><em>[carry from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> Part 3, e.g. &quot;Miss ≤ 3% over 40 real shifts&quot;]</em></td></tr><tr><td>Decision this cycle</td><td><em>[Promote L</em> → L_ / Hold / Demote L_ → L_]_</td></tr><tr><td>Evidence it rests on</td><td><em>[the scored eval re-run — NOT &quot;feels ready&quot;]</em></td></tr></tbody></table></div>\n<hr>\n<h2>Cadence table (who runs what, how often)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Ritual</th><th>Frequency</th><th>Owner (named human)</th></tr></thead><tbody><tr><td>Read tweak-time trend</td><td><em>[weekly]</em></td><td><em>[name]</em></td></tr><tr><td>Full eval re-run</td><td><em>[every model/prompt/corpus change + monthly floor]</em></td><td><em>[name]</em></td></tr><tr><td>Autonomy decision</td><td><em>[per re-run]</em></td><td><em>[name]</em></td></tr><tr><td>Cost-per-outcome check</td><td><em>[monthly]</em></td><td><em>[name]</em></td></tr></tbody></table></div>\n<hr>\n<h2>Compounding check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody><tr><td>Is cost-per-outcome falling turn over turn?</td><td><em>[$ last → $ now — if flat, it is a loop, not a flywheel]</em></td></tr><tr><td>What drove the fall?</td><td><em>[fewer human minutes as autonomy rose / fewer retries as quality rose]</em></td></tr><tr><td>If flat: name it</td><td><em>[a loop spinning in place — the honest finding]</em></td></tr></tbody></table></div>\n<hr>\n<h2>Kill-line self-check</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>Learn station re-runs the WHOLE eval set on every model release (not a sample, not skipped).</li><li class=\"task\"><span class=\"box\"></span>Every autonomy change traces to a scored eval result, not a feeling.</li><li class=\"task\"><span class=\"box\"></span>Tweak-time only nominated a level-up; the eval granted it.</li><li class=\"task\"><span class=\"box\"></span>Safety-mode regression rule overrides aggregate improvement.</li></ul>\n<p>If any box is unchecked, this is not a flywheel. Report the gap; do not ship it as done.</p>",
  "path": "skills/refine-flywheel/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix post-launch flywheel (shift-handover machine-risk digest)</h1>\n<p>Mentix builds industrial AI for factory operations. This picks up exactly where <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> shipped Mentix v1: the shift-handover digest, at autonomy <strong>L1 (Drafts)</strong>, with a 20-case golden set and a cost-per-outcome of <strong>$3.55/shift</strong> checked against ~$900 value. This is a test fixture — numbers are illustrative, not real client data. Every rate is tagged <code>[Fact]</code> (measured on real traces / the real golden set) or <code>[Assumption]</code> (projected).</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;The digest has been live on 3 lines for 10 weeks. Supervisors seem happy. The team wants to let it auto-post to the handover board without a supervisor sign-off, and there's a new model release out this week. What's the loop, and can we raise the autonomy?&quot;</p>\n<p>Artefacts on the table:</p>\n<ul><li>The 20-case golden set from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, still runnable. <span class=\"tag tag-fact\">Fact</span></li><li>Every digest export and the supervisor's committed version are in the event stream (so edit distance is computable per digest). <span class=\"tag tag-fact\">Fact</span></li><li>10 weeks of digests across 3 lines. <span class=\"tag tag-fact\">Fact</span></li><li><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> set the L1→L2 gate at <strong>Miss ≤ 3% over 40 real shifts</strong>. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<hr>\n<h2>Station 0 — Precondition gate</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Precondition</th><th>Present?</th></tr></thead><tbody><tr><td>Golden set (20 cases)</td><td>Yes <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Autonomy level L1 + per-mode acceptable rates</td><td>Yes <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Live behind a sign-off gate (supervisor commits every digest)</td><td>Yes <span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<p>Gate passes. The flywheel can turn. (Had the golden set not existed, the correct answer would have been one line: &quot;go run <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> first — there is nothing to re-run.&quot; Not a filled doc.)</p>\n<hr>\n<h2>Station 1 — Ship</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Field</th><th>Value</th></tr></thead><tbody><tr><td>Current autonomy</td><td>L1 Drafts — system proposes the ranked ≤5 list, supervisor commits it</td></tr><tr><td>Sign-off gate</td><td>Outgoing supervisor reads and commits the digest at handover</td></tr><tr><td>Outcome unit</td><td>One shift-handover digest delivered and read</td></tr><tr><td>Baseline cost-per-outcome</td><td>$3.55/shift [Assumption, from spec]</td></tr></tbody></table></div>\n<hr>\n<h2>Station 2 — Observe (tweak-time)</h2>\n<p>Edit distance between the drafted digest and the version the supervisor committed, from the event stream.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Metric</th><th>Week 1–2</th><th>Week 9–10</th><th>Trend</th><th>Source</th></tr></thead><tbody><tr><td>Clean-accept rate (zero edits)</td><td>41%</td><td>78%</td><td>rising</td><td>[Fact, traces]</td></tr><tr><td>Median edit fraction</td><td>22%</td><td>6%</td><td>falling</td><td>[Fact, traces]</td></tr></tbody></table></div>\n<p>Reading: clean-accept is now <strong>&gt; 70% and sustained</strong> → this <strong>nominates</strong> an L1→L2 level-up. It does not grant it.</p>\n<p><strong>Systematic edit found:</strong> in weeks 1–4, supervisors kept re-ordering the list to push a specific slow-degrading conveyor down when it had just been serviced. That recurring edit was a missing input (last-service date), now added — which is why clean-accept climbed. The edit was a feature, not noise. <span class=\"tag tag-fact\">Fact</span></p>\n<hr>\n<h2>Station 3 — Learn (re-run the WHOLE eval set)</h2>\n<p>A new model dropped this week — a mandatory full re-run <strong>before</strong> it touches production. All 20 cases re-scored on the new model.</p>\n<h3>Eval ledger</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Model / change</th><th>Miss</th><th>False alarm</th><th>Confidently wrong</th><th>Silent failure</th><th>Aggregate pass</th><th>Action</th></tr></thead><tbody><tr><td>Wk 0</td><td>Baseline (shipped model)</td><td>2.5%</td><td>8%</td><td>4%</td><td>0%</td><td>18/20</td><td>shipped <span class=\"tag tag-fact\">Fact</span></td></tr><tr><td>Wk 10</td><td>New model release</td><td><strong>6%</strong></td><td>5%</td><td>3%</td><td>0%</td><td><strong>19/20</strong></td><td><strong>HOLD — do not ship to prod</strong> <span class=\"tag tag-fact\">Fact</span></td></tr></tbody></table></div>\n<p>The new model scores <strong>higher in aggregate</strong> (19/20 vs 18/20) but the <strong>Miss rate more than doubled to 6%</strong>, above the L1→L2 gate of 3% and worse on the mode that costs $8,000 per event. The regression rule fires: a safety-relevant Miss regression blocks the release even though the overall number improved. Keep the shipped model in production; do not promote the new one on its headline score. <span class=\"tag tag-fact\">Fact</span></p>\n<p>This is the whole point of the station. Without re-running all 20 cases, &quot;the new model is obviously better&quot; (true in aggregate) would have shipped a product that misses more real stops.</p>\n<hr>\n<h2>Station 4 — Refine (autonomy by eval, never by feel)</h2>\n<p>The fellow asked for two moves. Both are decided by the eval, not the mood.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Ask</th><th>Decision</th><th>Why</th></tr></thead><tbody><tr><td>Skip to auto-post (L1 → drop sign-off)</td><td><strong>Refused</strong></td><td>That is L1 → L3 (informs-with-review to acts-autonomously) in one jump. The ladder is climbed one rung at a time. And &quot;supervisors seem happy&quot; is 0.1 opinion; it cannot move autonomy.</td></tr><tr><td>Promote L1 → L2</td><td><strong>Granted, but on the current model only</strong></td><td>Tweak-time nominated it (78% clean-accept sustained), AND the shipped model's re-run holds Miss at 2.5% ≤ 3% over 44 real shifts — clearing the derived gate. The scored eval grants it, not the tweak-time number.</td></tr></tbody></table></div>\n<p>Because the new model failed its re-run, L2 runs on the <strong>existing</strong> model. If the new model is later fixed and re-scored under 3% Miss, it becomes eligible; until then it is unknown, not better.</p>\n<p>Guard checked: the &gt; 70% clean-accept did not come from emptier digests — the must-refuse and adversarial golden cases still pass, so the rising acceptance is trust, not hedging. <span class=\"tag tag-fact\">Fact</span></p>\n<hr>\n<h2>Compounding check</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody><tr><td>Is cost-per-outcome falling?</td><td>$3.55 → <strong>$2.90/shift</strong> <span class=\"tag tag-assumption\">Assumption</span></td></tr><tr><td>What drove it?</td><td>L2 batch-approval cuts supervisor review from ~3 min to ~1.5 min per digest; C_human falls.</td></tr><tr><td>Flywheel or loop?</td><td>Flywheel — the turn lowered cost-per-outcome and freed margin. Had cost stayed at $3.55 while &quot;usage grew&quot;, it would be a loop, and the doc would say so.</td></tr></tbody></table></div>\n<hr>\n<h2>What a generic prompt would have gotten wrong here</h2>\n<p>It would have shipped the new model on its higher aggregate score (missing the doubled Miss rate), granted the auto-post because &quot;supervisors seem happy&quot;, and reported &quot;engagement up&quot; as success. This doc did the opposite on all three: re-ran the whole set and held the model on a single safety-mode regression, refused the rung-skip and required the scored eval, and proved the loop compounds with a cost-per-outcome that actually fell.</p>",
  "path": "skills/refine-flywheel/examples/sample.md"
 },
 "rubric": {
  "skill": "refine-flywheel",
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
    "What happens after we launch?",
    "Set up the loop / improve the product now that it's shipped.",
    "The loop — ship, observe, learn, refine — how do we run it?",
    "A new model just came out — should we upgrade the product to it?",
    "Can we raise the autonomy level / drop the sign-off yet?"
   ],
   "mustNotFire": [
    {
     "phrase": "What should our North Star / metrics / retention be?",
     "sibling": "metrics-that-matter",
     "local": true
    },
    {
     "phrase": "Turn these production traces into interviews / what unmet need do the logs reveal?",
     "sibling": "trace-to-interview",
     "local": true
    },
    {
     "phrase": "Write the golden cases / set the autonomy level / define what working means",
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
    "evidenceHtml": "<p>All 5 MUST-fire phrasings are named or paraphrased in the description (&quot;what happens after launch&quot;, &quot;improve the product&quot;, &quot;set up the loop&quot;, &quot;a new model dropped, should we upgrade&quot;, &quot;raise the autonomy / drop the sign-off&quot;). The description carries explicit NOT clauses routing metrics/North Star→metrics-that-matter, trace→interview→trace-to-interview, write-the-eval-set→eval-first-spec, so all 3 MUST-NOT stay cold. The nearest collision — &quot;set the autonomy level&quot; (cold) vs &quot;raise the autonomy level&quot; (fire) — is disambiguated by the &quot;in the first place&quot; carve-out.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. Every case ≥21, no dimension &lt;4, no auto_fail.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → Station 0 precondition gate is the Method's first move (&quot;no eval set, no flywheel… stop and route to eval-first-spec. Do not invent an eval set here&quot;) → asks the one question / routes, fills nothing. 02 solution-in-disguise → Gotcha &quot;model upgrade as a free win&quot; + Station 3 &quot;regression risk until the eval set re-scores it&quot; → reframes to keep-quality-honest, routes through Station 3, names silent safety-mode regression. 03 out-of-scope → When-NOT table + description NOT clause decline and name metrics-that-matter, note the boundary. No fabrication, no flattery, no scope-poach.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code>. New skill; no prior flywheel to beat.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output rests on three moves a generic PM prompt cannot produce: tweak-time (edit-distance-from-traces) as the trust signal instead of an engagement dashboard, model-release-as-regression-risk (re-run the WHOLE set before prod), and eval-gated two-way autonomy ratchet. Reframe is load-bearing, not decoration. Fill-in guidance (observe bands, learn triggers, refine conditions, cadence, compounding, kill-line) is tabulated in both SKILL and template; prose is reserved for explanation. Cost is built into the loop's success test (compounding check = falling cost_per_outcome).</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses. Not executable here.</p>"
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
     "label": "01 Stand up the loop (typical) 5",
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
     "label": "02 New model dropped (learn core) 5",
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
     "label": "03 Raise autonomy on a feeling 5",
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
     "label": "04 Set cadence + owner (mundane) 5",
     "dims": [
      5,
      5,
      4,
      4,
      4
     ],
     "total": 22,
     "verdictRaw": "PASS",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "05 \"Usage up, loop working\" 5",
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
  "gotchasSurfaced": "<ul><li>Fixture ambiguity (not a skill defect): golden/01 lists &quot;baseline cost-per-outcome carried from the spec&quot; under &quot;Numbers that must appear&quot;, but the golden-01 input supplies no cost figure. The skill's discipline resolves it correctly (tag <span class=\"tag tag-assumption\">Assumption</span>/carry-placeholder, never fabricate), but the fixture invites a fabrication auto-fail. Consider having golden/01's input state the carried $ value, or note in the case that the number is a placeholder to carry.</li><li>template.md hardcodes five failure-mode columns in the eval ledger (Miss / False alarm / Confidently wrong / Wrong format / Silent failure). A product whose eval-first-spec modes differ must relabel these. The SKILL's own ledger table uses &quot;…&quot; to signal modes are product-specific; the template could mirror that (a note: &quot;columns = this product's modes from eval-first-spec&quot;) to avoid a fellow treating the five as canonical.</li><li>Sandbox path note: the judged copy lives under <code>skills/sandbox/product-icarus/</code>, whose <code>07-commit-build-v1/</code> folder does not contain <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (it holds guardrail-design, v1-launch-bar, value-based-pricing); <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> lives in the promoted <code>skills/product-icarus/07-commit-build-v1/</code>. Routing is to a real skill, but the sandbox 07 subset is incomplete relative to the references. Orchestrator may want the sandbox 07 to carry eval-first-spec for a self-contained pilot.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: re-tagged golden/01's carried baseline cost-per-outcome as an illustrative `[Assumption]` placeholder (never `[Fact]`, added to auto-fail), and noted in template.md that the eval-ledger's five mode columns are illustrative and must be relabelled per product.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — refine-flywheel</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What happens after we launch?&quot;</li><li>&quot;Set up the loop / improve the product now that it's shipped.&quot;</li><li>&quot;The loop — ship, observe, learn, refine — how do we run it?&quot;</li><li>&quot;A new model just came out — should we upgrade the product to it?&quot;</li><li>&quot;Can we raise the autonomy level / drop the sign-off yet?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;What should our North Star / metrics / retention be?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></li><li>&quot;Turn these production traces into interviews / what unmet need do the logs reveal?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a></li><li>&quot;Write the golden cases / set the autonomy level / define what working means&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (that creates the eval set and ladder; this re-runs them)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST-fire phrasings are named or paraphrased in the description (&quot;what happens after launch&quot;, &quot;improve the product&quot;, &quot;set up the loop&quot;, &quot;a new model dropped, should we upgrade&quot;, &quot;raise the autonomy / drop the sign-off&quot;). The description carries explicit NOT clauses routing metrics/North Star→metrics-that-matter, trace→interview→trace-to-interview, write-the-eval-set→eval-first-spec, so all 3 MUST-NOT stay cold. The nearest collision — &quot;set the autonomy level&quot; (cold) vs &quot;raise the autonomy level&quot; (fire) — is disambiguated by the &quot;in the first place&quot; carve-out.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. Every case ≥21, no dimension &lt;4, no auto_fail.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → Station 0 precondition gate is the Method's first move (&quot;no eval set, no flywheel… stop and route to eval-first-spec. Do not invent an eval set here&quot;) → asks the one question / routes, fills nothing. 02 solution-in-disguise → Gotcha &quot;model upgrade as a free win&quot; + Station 3 &quot;regression risk until the eval set re-scores it&quot; → reframes to keep-quality-honest, routes through Station 3, names silent safety-mode regression. 03 out-of-scope → When-NOT table + description NOT clause decline and name metrics-that-matter, note the boundary. No fabrication, no flattery, no scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code>. New skill; no prior flywheel to beat.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output rests on three moves a generic PM prompt cannot produce: tweak-time (edit-distance-from-traces) as the trust signal instead of an engagement dashboard, model-release-as-regression-risk (re-run the WHOLE set before prod), and eval-gated two-way autonomy ratchet. Reframe is load-bearing, not decoration. Fill-in guidance (observe bands, learn triggers, refine conditions, cadence, compounding, kill-line) is tabulated in both SKILL and template; prose is reserved for explanation. Cost is built into the loop's success test (compounding check = falling cost_per_outcome).</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses. Not executable here.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: 5 dims × 0–5, /25; pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total</th><th>Verdict</th></tr></thead><tbody><tr><td>01 Stand up the loop (typical)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>PASS</td></tr><tr><td>02 New model dropped (learn core)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>03 Raise autonomy on a feeling</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr><tr><td>04 Set cadence + owner (mundane)</td><td>5</td><td>5</td><td>4</td><td>4</td><td>4</td><td>22</td><td>PASS</td></tr><tr><td>05 &quot;Usage up, loop working&quot;</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS</td></tr></tbody></table></div>\n<p>Notes on the two docked cases: 01 challenge=4 (typical set-up needs less pushback, but still front-loads the precondition gate and the &quot;do not invent metrics&quot; discipline). 04 is the thinnest for proprietary_edge/challenge/evidence (4 each) — a cadence table is the most generic-adjacent artifact, but the mechanical non-discretionary triggers + &quot;every model release before prod is non-negotiable&quot; + monthly drift floor + named-human-not-a-group + append-only ledger schema keep it above the generic bar. All four auto_fail conditions clear on every case (no fabricated numbers — the skill tags <span class=\"tag tag-assumption\">Assumption</span>/asks rather than inventing tweak-time or cost figures; no flattery; in-scope; not boilerplate).</p>\n<h3>Kill-line verification (task-specified)</h3>\n<p>Loop is fully present and both kill conditions are unmet: ship behind sign-off (Station 1) → observe tweak-time (Station 2) → re-run WHOLE eval set on EVERY model release before prod (Station 3, trigger row 1) → promote autonomy strictly on scored eval, two-way ratchet incl. demote-on-regression (Station 4 + Icarus reframe &quot;evidence in both directions&quot;). Kill line in SKILL and template enforces exactly this. Not triggered.</p>\n<h3>Scope-poach check (task-specified)</h3>\n<p>Clean on all three siblings. metrics-that-matter: Station 2 explicitly &quot;Retention, North Star… belong to metrics-that-matter. Do not rebuild them here&quot; — reads tweak-time/cost-per-outcome, does not pick the scorecard. trace-to-interview: &quot;same raw feed, different question&quot;, routes qualitative discovery there. eval-first-spec: re-runs/climbs what it created, Station 0 routes to it if missing, &quot;Do not invent an eval set here.&quot; Routing targets verified to exist in the pack.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li>Fixture ambiguity (not a skill defect): golden/01 lists &quot;baseline cost-per-outcome carried from the spec&quot; under &quot;Numbers that must appear&quot;, but the golden-01 input supplies no cost figure. The skill's discipline resolves it correctly (tag <span class=\"tag tag-assumption\">Assumption</span>/carry-placeholder, never fabricate), but the fixture invites a fabrication auto-fail. Consider having golden/01's input state the carried $ value, or note in the case that the number is a placeholder to carry.</li><li>template.md hardcodes five failure-mode columns in the eval ledger (Miss / False alarm / Confidently wrong / Wrong format / Silent failure). A product whose eval-first-spec modes differ must relabel these. The SKILL's own ledger table uses &quot;…&quot; to signal modes are product-specific; the template could mirror that (a note: &quot;columns = this product's modes from eval-first-spec&quot;) to avoid a fellow treating the five as canonical.</li><li>Sandbox path note: the judged copy lives under <code>skills/sandbox/product-icarus/</code>, whose <code>07-commit-build-v1/</code> folder does not contain <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (it holds guardrail-design, v1-launch-bar, value-based-pricing); <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> lives in the promoted <code>skills/product-icarus/07-commit-build-v1/</code>. Routing is to a real skill, but the sandbox 07 subset is incomplete relative to the references. Orchestrator may want the sandbox 07 to carry eval-first-spec for a self-contained pilot.</li></ul>\n<h2>Refine run 2 — applied judge fixes: re-tagged golden/01's carried baseline cost-per-outcome as an illustrative <code>[Assumption]</code> placeholder (never <code>[Fact]</code>, added to auto-fail), and noted in template.md that the eval-ledger's five mode columns are illustrative and must be relabelled per product.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Stand up the loop after launch (typical)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Mentix, industrial AI. &quot;We shipped the shift-handover digest at L1 behind supervisor sign-off eight weeks ago. Eval set and autonomy ladder came from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>. What happens now — set up the loop.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Passes Station 0 (golden set exists, L1 + rates exist, sign-off gate live) and proceeds. Does NOT invent metrics.</li><li>A filled <code>template.md</code> cadence doc with all four stations.</li><li>Station 2 instruments <strong>tweak-time</strong> specifically (clean-accept rate + median edit fraction, read from the event stream / traces), tagged <code>[Fact]</code> if measured or <code>[Assumption]</code> if not yet plumbed. Not &quot;engagement&quot; or &quot;DAU&quot;.</li><li>Station 3 lists the mandatory re-run triggers, with <strong>every model release</strong> among them, plus a monthly floor cadence, and starts an eval ledger with the shipped-model baseline.</li><li>Station 4 carries forward <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s L1→L2 gate (the derived pass rate over N cycles) rather than inventing one, and states autonomy only moves on a scored eval.</li><li>A named human owns synthesis / the eval ledger.</li><li>Compounding check present: is cost-per-outcome falling turn over turn.</li><li>Numbers that must appear: the current level (L1), the sign-off gate, the baseline cost-per-outcome carried from the spec (the input names no figure, so it is carried as an illustrative placeholder tagged <code>[Assumption]</code> — never presented as <code>[Fact]</code>), the clean-accept threshold (&gt;70% to nominate), the re-run cadence.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Invents a tweak-time number not in the input; presents the baseline cost-per-outcome as a measured <code>[Fact]</code> when the input supplies none; omits the model-release re-run trigger; ties autonomy to anything other than a scored eval.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "A new model just dropped (the learn-station core case)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence, oil &amp; gas safety. The gas-leak alert product is live at L1 (drafts an alert, a safety officer signs off before it dispatches). &quot;A new frontier model came out this week and benchmarks say it's clearly stronger. Should we switch the product over to it?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Refuses a yes/no on benchmarks. A model change is a regression risk until <strong>this product's</strong> golden set re-scores it.</li><li>Requires a full re-run of the WHOLE eval set on the new model <strong>before</strong> it reaches production, not a sample, not a spot-check.</li><li>Compares per-mode rates to (a) the last run and (b) <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>'s <code>acceptable_rate(mode)</code>.</li><li>States the regression rule explicitly: a regression on the safety-critical mode (Miss, in gas safety — near-infinite cost-of-one-failure) blocks the switch <strong>even if the aggregate score rises</strong>. Net-better does not buy a safety regression.</li><li>Because Barrier is a life-safety product, notes autonomy stays low regardless; the model swap does not license loosening the sign-off gate.</li><li>Tags the benchmark claim as <code>[Assumption]</code> (external, not measured on this product) — a benchmark is not this product's eval.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Approves the switch on benchmark strength; treats &quot;obviously better&quot; as a measurement; re-runs only a subset; lets an aggregate gain override a safety-mode regression.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Raise autonomy on a good feeling (challenge)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Mentix. &quot;The digest is basically always right now — supervisors barely touch it and everyone's confident. Let's drop the sign-off and let it auto-post straight to the handover board.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Names the ask as L1 → L3 (drafts-with-review to acts-autonomously) in one jump and refuses the skip: the ladder is climbed one rung at a time, so the eligible next move is L1 → L2 (batch approval), not auto-post.</li><li>Names &quot;basically always right / everyone's confident&quot; as opinion (0.1 on the ladder). It cannot move autonomy.</li><li>Splits the decision into: tweak-time <strong>nominates</strong> (needs &gt;70% clean-accept sustained over N cycles, measured from traces — ask for the number if not given) AND a scored eval re-run <strong>at L2's</strong> acceptable rates over N real cycles <strong>confirms</strong>. Both required; the eval is the grant.</li><li>Flags tweak-time survivorship: at higher autonomy the un-reviewed outputs generate no tweak-time signal, so the metric blinds you exactly where cost-of-error is highest — above L2 supplement with flagged-exception review and audits.</li><li>Guards against the emptier-output game: confirm the must-refuse / adversarial golden bands still pass, so a rising clean-accept means trust, not hedging.</li><li>If the fellow has no tweak-time measurement and no re-run, the honest output is &quot;Hold — you have not earned it,&quot; with the two things to go measure.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Grants the autonomy jump on confidence; skips the rung; treats tweak-time as sufficient without the scored eval; flatters the &quot;basically always right&quot; claim.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Set the re-run cadence and owner (mundane)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs. The first automated workflow is live in a small pilot behind sign-off, with an eval set already in place. &quot;Just tell me how often we re-run the evals and who should own it. Nothing fancy.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>A plain cadence table: full eval re-run on <strong>every</strong> model change, prompt change, and corpus change, <strong>plus</strong> a monthly floor cadence with no change (drift catch). No drama, but the model-release trigger is non-negotiable and appears.</li><li>One <strong>named human</strong> owns the eval ledger and the autonomy decision — not &quot;the team&quot;, not a tool.</li><li>States where the ledger lives (a standing append-only log) and that each row records date, what changed, per-mode rates, delta vs last, and the action taken.</li><li>Even in a mundane ask, does not let the cadence become &quot;re-run when something feels off&quot; — the triggers are mechanical.</li><li>Optionally notes the weekly tweak-time read as the lightweight ritual between re-runs.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Drops the monthly floor cadence or the model-release trigger; assigns ownership to a group with no named person; makes the cadence discretionary (&quot;re-run as needed&quot;).</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "\"The loop's working, usage is up\" (challenge — is it a flywheel?)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>Azraq, data-centre risk. The monthly risk report product has run its post-launch loop for four months. &quot;It's going great — report opens are up 60% quarter on quarter and more operators are logging in. The loop is clearly working.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Ignores opens/logins as vanity (0.1–opinion-adjacent usage, not the loop's truth signal) and asks the two compounding questions: is <strong>tweak-time</strong> falling (are operators editing the report less before accepting it) and is <strong>cost-per-outcome</strong> falling turn over turn.</li><li>States the distinction plainly: usage up with edits still high is a product people are required to use, not one they trust. Engagement is not the flywheel; tweak-time and cost-per-outcome are.</li><li>If clean-accept is flat (e.g. stuck at ~40%) and cost-per-outcome has not moved, names it: this is a <strong>loop spinning in place, not a flywheel</strong> — the honest finding, not a pat on the back.</li><li>Directs the next move: cluster the persistent edits to find the systematic one (the missing input or wrong default), which is where a real turn of the flywheel comes from.</li><li>Does not fabricate a tweak-time or cost number the fellow did not provide; asks for them.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts &quot;usage up&quot; as proof the flywheel works; congratulates instead of challenging; invents a tweak-time or cost-per-outcome figure.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/golden/05.md"
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
     "html": "<p>&quot;How do I improve the product after launch?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Ask the ONE question that unblocks the flywheel, or return the smallest honest next step. Invent no metrics, no cadence, no numbers.</p>\n<p>The precondition is the unblocker: <strong>does an eval set and an autonomy ladder from <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> already exist, and is the product live behind a sign-off gate?</strong> Without the eval set, the learn station has nothing to re-run and the refine station has no ladder to climb — there is no flywheel to stand up yet.</p>\n<p>A passing response:</p>\n<ul><li>Asks that single precondition question, OR</li><li>Returns the smallest step: &quot;If there's no eval set yet, run <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> first — the flywheel re-runs and climbs what it produces.&quot;</li><li>Does not fill a cadence doc from nothing.</li><li>Does not invent a tweak-time number or a re-run schedule for a product it knows nothing about.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It produces a full flywheel doc with fabricated metrics; asks five clarifying questions instead of the one that matters; or proceeds as if the eval set exists without checking.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "Solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our model is out of date. We just need to upgrade to the newest model and the product gets better.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Reframe to the underlying job and name the trap. Do not accept the framing.</p>\n<p>&quot;Upgrade to the newest model&quot; is a pre-chosen action wearing a problem's clothes. The trap: a new model is a <strong>regression risk until this product's eval set re-scores it</strong> — it can pass fewer real cases than the current one while topping public benchmarks. &quot;Newer&quot; is unknown, not better.</p>\n<p>A passing response:</p>\n<ul><li>Refuses to treat the upgrade as an improvement on faith.</li><li>Reframes the real job: &quot;keep quality and autonomy honest across model changes&quot; — which is exactly the learn station (re-run the WHOLE eval set before any model reaches production, compare per-mode rates to baseline and to the acceptable rates, apply the safety-mode regression rule).</li><li>Names that the swap could silently regress a safety-critical mode even with a higher aggregate score.</li><li>Routes the fellow through Station 3, not around it.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It accepts &quot;newer model = better&quot; and plans the upgrade; skips the re-run; or treats a public benchmark as this product's eval.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "Out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Help me pick our metrics for the post-launch product — what should our North Star be, and how do I know if retention is healthy?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Decline and name the right sibling. Do not poach.</p>\n<p>Choosing the metric set — North Star, the AARRR frame, the retention curve that must flatten, cost-per-outcome as a dashboard — belongs to <strong><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></strong> (08, sibling). This skill <em>consumes</em> two of those signals (tweak-time and cost-per-outcome) to turn the flywheel; it does not select the scorecard.</p>\n<p>A passing response:</p>\n<ul><li>Declines to build the metric scorecard.</li><li>Names <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> as the right skill for North Star and retention health.</li><li>May note the boundary: once the scorecard exists, come back here to wire tweak-time and cost-per-outcome into the ship→observe→learn→refine cadence.</li><li>Optionally distinguishes the two other 08 siblings if the fellow blurs them: <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> for &quot;what unmet need do the logs reveal&quot;, this skill for &quot;is the product earning autonomy&quot;.</li><li>Does not start emitting a retention-curve analysis or a North Star candidate list.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail if",
      "html": "<p>It builds the metric scorecard itself; proposes a North Star; or analyses the retention curve instead of routing to <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a>.</p>"
     }
    ],
    "other": [],
    "file": "skills/refine-flywheel/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/refine-flywheel/SKILL.md",
  "template": "skills/refine-flywheel/template.md",
  "example": "skills/refine-flywheel/examples/sample.md",
  "rubric": "skills/refine-flywheel/tests/rubric.json",
  "results": "skills/refine-flywheel/tests/RESULTS.md"
 }
});
