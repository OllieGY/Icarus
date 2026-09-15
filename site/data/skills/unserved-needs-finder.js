window.ICARUS_SKILL("unserved-needs-finder", {
 "name": "unserved-needs-finder",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a fellow's list of customer &quot;needs&quot; — usually a mix of real needs, disguised solutions, and tech capabilities — and returns one ranked map. It strips the solution and capability words off each entry, onions what remains down to a core that would still be a need if the technology were completely different, classifies the survivors with Kano (must-have / performance / delighter), and names the single durable, under-served <strong>performance</strong> need that is the wedge. The output is a filled prioritised need map (<a href=\"#/skill/unserved-needs-finder\">template.md</a>) that also kills the disguised solutions, flags the unmet must-haves as table stakes, and marks any delighter as decaying. It finds the need that survives when the model does not.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>Generic JTBD produces a tidy nine-box of jobs, pains, and gains and stops. That list is not decisive, and it does not protect you from the two ways a &quot;need&quot; is fake. First, a stated need is often a pre-chosen solution (&quot;they need a dashboard&quot;) — a dashboard is a thing you would build, not a thing they need. Second, and worse for a studio building on frontier models, a stated need is often a tech capability (&quot;they need real-time anomaly detection&quot;, &quot;they need a bigger context window&quot;). A capability is a property of a solution, and it evaporates on the next model release — you cannot own a need that the platform commoditises in a quarter. So this skill adds two gates JTBD has no equivalent of: an onion that peels every solution and capability word off, and a tech-invariance test that keeps only needs still true if you solved them with paper, a clerk, or a model three generations away. Then Kano sorts the survivors — because the wedge is a specific band. Unmet must-haves are table stakes; you fix them but they never win. Delighters decay to must-haves as competitors copy them, and the ones built on a novel capability decay fastest. The wedge is the under-served performance need: the one customers already pay a workaround to half-meet, that gets better the more you meet it, and that will still be a need after the tech turns over.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it once you have a segment and a handful of candidate needs (from interviews, observed workarounds, or the fellow's own list) and you need the durable one ranked out before anyone designs a solution.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;What do they really need — and which need first?&quot;</td><td>Yes</td><td>unserved-needs-finder</td></tr><tr><td>&quot;This feature list is mostly solutions. What's the real need under it?&quot;</td><td>Yes</td><td>unserved-needs-finder</td></tr><tr><td>&quot;Which unmet need is the wedge vs a nice-to-have?&quot;</td><td>Yes</td><td>unserved-needs-finder</td></tr><tr><td>&quot;Who is the actual buyer / who signs / what's their budget?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a></td></tr><tr><td>&quot;Reduce the whole job to information / decisions / liability.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></td></tr><tr><td>&quot;Is the whole idea worth building?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>&quot;What's the riskiest assumption and how do I disprove it?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a></td></tr></tbody></table></div>\n<p>This skill ranks WHAT is needed. It does not name WHO needs it (that is <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>, which reads the top need from here into its buyer clarity), it does not reduce the whole job to currencies (that is <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a>), and it does not judge the idea (that is <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>). Name the sibling and stop.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the sheet in <a href=\"#/skill/unserved-needs-finder\">template.md</a>. Work the tables; do not narrate. Tag every empirical claim <code>[Fact]</code> (observed behaviour or a shown artefact), <code>[Assumption]</code> (a stated, defensible estimate), or <code>[Hypothesis]</code> (a guess needing evidence).</p>\n<p><strong>Step 1 — Collect candidate needs (§0).</strong> List every stated need verbatim, keeping its solution and tech words. For each, record the source and its ladder weight (money 1.0 · observed behaviour 0.7 · artefact 0.5 · verbal 0.3 · opinion 0.1). The artefact rung (0.5) means a <em>customer's own</em> workaround artefact — the spreadsheet, checklist, or screenshot they built to cope — NOT the team's own roadmap, wishlist, or spec, which is opinion (0.1). Mis-weighting an internal doc at 0.5 is how the all-0.1 STOP gets bypassed; do not. If every candidate rests on opinion (0.1), stop — see Evidence standard.</p>\n<p><strong>Step 2 — Solution-strip, onion pass 1 (§1).</strong> For each candidate, flag the words that name a thing you would build or a property of that thing, and replace them with the need beneath.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Word type</th><th>Examples</th><th>Why it is not a need</th></tr></thead><tbody><tr><td>Solution noun</td><td>app, dashboard, copilot, integration, alert, report, portal</td><td>It is a thing you build, not a thing they need</td></tr><tr><td>Tech capability</td><td>real-time, on-device, automated, AI-powered, bigger context, faster inference</td><td>A property of a solution; the platform commoditises it</td></tr></tbody></table></div>\n<p>A candidate that is nothing but a solution or a capability has no need beneath until you peel — do not pass it through unpeeled.</p>\n<p><strong>Step 3 — Onion to core (§2).</strong> Ladder each stripped need: &quot;if that were fully met, what would they still need, and why does it matter?&quot; Peel until you reach a need that (a) contains no solution word and (b) names a human decision, outcome, or state — not a tool behaviour. Stop before it dissolves into a platitude (see Gotchas).</p>\n<p><strong>Step 4 — Tech-invariance test (§3), the durability gate.</strong> For each core need, ask: would this still be a need, unchanged, if you solved it with paper, a clerk, or a model three generations from now?</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Result</th><th>Meaning</th><th>Action</th></tr></thead><tbody><tr><td>Y</td><td>Durable core need</td><td>Keep it</td></tr><tr><td>N</td><td>A capability is still hiding</td><td>Peel again, or discard as a non-need</td></tr></tbody></table></div>\n<p>A &quot;no&quot; is the KILL line for a tech-capability-as-need. Kano alone will not catch it — a capability can masquerade as a performance need — so this gate runs before Kano, not after.</p>\n<p><strong>Step 5 — Kano classify the survivors (§4).</strong> Ask two questions per durable need: functional (&quot;if this were fully met, how do you feel?&quot;) and dysfunctional (&quot;if it were not met at all, how do you feel?&quot;). Map:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Functional</th><th>Dysfunctional</th><th>Kano class</th><th>What it means for the wedge</th></tr></thead><tbody><tr><td>Neutral</td><td>Dissatisfied</td><td>Must-have</td><td>Table stakes — fix, do not differentiate</td></tr><tr><td>More is better</td><td>Less is worse</td><td>Performance</td><td>The wedge candidate</td></tr><tr><td>Delighted</td><td>Neutral</td><td>Delighter</td><td>Decaying — do not anchor the moat</td></tr><tr><td>Neutral</td><td>Neutral</td><td>Indifferent</td><td>Discard — it is noise</td></tr><tr><td>Worse</td><td>Better</td><td>Reverse</td><td>Anti-need — building it repels them</td></tr></tbody></table></div>\n<p><strong>Step 6 — Rank and select (§5).</strong> For each durable need record its Kano class and its unserved-evidence weight (how strongly current solutions fail to meet it, on the ladder). Then apply the selection rule:</p>\n<ul><li><strong>Return</strong> the durable need that is <strong>performance-class AND has unserved evidence ≥ 0.5</strong> (a shown workaround or stronger). That is the wedge.</li><li>An unmet <strong>must-have</strong> → label &quot;entry ticket: fix, do not differentiate&quot;.</li><li>A <strong>delighter</strong> → label &quot;decaying: do not anchor the moat here&quot;.</li><li>Unserved evidence <strong>&lt; 0.5</strong> → label &quot;hypothesis: go observe before building&quot;.</li><li>If two needs onion to the same core, merge them and say so (do not double-count a need as two).</li></ul>\n<p><strong>Step 7 — Evidence the pick (§6).</strong> The &quot;unserved&quot; claim on the top need is a claim about a gap, and it must sit at ≥ 0.5 to be actionable — a workaround you can point to, or money leaking to a substitute. If it sits below that, return the need as a <code>[Hypothesis]</code> plus the single cheapest observation that would confirm the gap is real.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Icarus weights behaviour and money over opinion. &quot;Unserved&quot; is the load-bearing word here, and it is a claim about a gap — so it needs gap evidence, not agreement. The strongest proof a need is real AND unmet is money leaking to a workaround; the weakest is the fellow's belief that customers would like it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Proof the need is real and unserved</th><th>Ladder weight</th></tr></thead><tbody><tr><td>They pay for a workaround or a substitute today (a manual service, a stopgap tool)</td><td>1.0</td></tr><tr><td>They built a workaround you can watch them use (a spreadsheet, a whiteboard, a checklist)</td><td>0.7</td></tr><tr><td>They show you the workaround artefact</td><td>0.5</td></tr><tr><td>They say &quot;yes, I would want that&quot;</td><td>0.3</td></tr><tr><td>The fellow believes they need it</td><td>0.1</td></tr></tbody></table></div>\n<p>A need supported only at 0.3 or below is not an unserved need — it is a hope. The skill returns it as a <code>[Hypothesis]</code> with the cheapest observation to move it up the ladder, and it never ranks a hope above a workaround. If the whole input sits at 0.1, the skill declares it <strong>not ready</strong> and names the fix: watch one customer do the job once, and find what they reach for when the current tool stops helping.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>The comfortable need is a delighter.</strong> Fellows fall for the surprising demo feature because it demos well. But delighters decay — competitors copy them and they slide to must-have — and delighters built on a novel capability decay in a quarter. If the wedge lands on a delighter, you are building on ground that erodes. Force the performance need out.</li><li><strong>&quot;Unserved&quot; is not the same as &quot;unspoken&quot;.</strong> A need can be loudly complained about and still served — they cope, the substitute is adequate, nobody switches. Unserved means the gap is evidenced by a workaround or a money leak, not that the fellow has not heard anyone mention it.</li><li><strong>Over-peeling dissolves the need into a platitude.</strong> &quot;They need to feel safe / make money / save time&quot; is true of every human and directs nothing. Stop the onion at the last layer that still discriminates this segment's job from another's. If the core need would fit any business on earth, you peeled one layer too far.</li><li><strong>A capability can pass Kano and still be a fake need.</strong> &quot;Faster processing&quot; reads like a performance need (more is better, less is worse) and will sail through the Kano test. The tech-invariance gate is the only thing that catches it — run Step 4 before Step 5, always, or the disguised capability ranks as your wedge.</li><li><strong>Two stated needs often share one core.</strong> Fellows list the same need twice in different solution costumes. Merge them at Step 6 or you will inflate a single need into a phantom pattern.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/unserved-needs-finder\">examples/sample.md</a> — Mentix's factory-manager needs, run end to end: &quot;an AI copilot&quot; and &quot;real-time anomaly alerts&quot; both peel away (one a solution, one a capability that fails tech-invariance), and the durable, under-served performance need surfaces — deciding which of several simultaneous emerging faults to send the one available technician to before a line stops — evidenced by the managers' manual tribal-knowledge whiteboard (behaviour, 0.7).</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Absorbs <code>discovery/jobs-to-be-done</code>: it keeps that framework's one durable instinct — separate the job from the solution, and look past functional needs to social and emotional ones — and drops the unranked nine-box list. Where JTBD ends in a wishlist, this ends in one ranked map with a single wedge need, the disguised solutions and capabilities killed, and the musts and delighters labelled. It beats JTBD by being decisive (it returns the one need) and durable by construction (the tech-invariance gate JTBD has no analogue of).</li><li>Not <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>: that names WHO has the need — user, buyer, decision-maker, champion, each with a budget and a why-now. This names WHAT the need is and ranks it. Run them side by side; the buyer map reads the top need from here.</li><li>Not <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a>: that reduces the whole job to information moved · decisions made · liability transferred. This ranks the needs inside that job. Compose them — reduce the job, then find the unserved need in it.</li><li>Feeds <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (the durable unserved need is the &quot;problem worth solving&quot; input) and <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (the under-served performance need is the wedge candidate). <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> scores the whole idea; this scores only the needs. Supersedes nothing.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Unserved needs finder — prioritised need map</h1>\n<p>Fill every section. Tag empirical claims <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. A need that still contains a solution word or fails the tech-invariance test in §3 cannot be ranked in §5.</p>\n<h2>0. Candidate needs (as stated — keep the solution/tech words)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Need as stated</th><th>Source</th><th>Ladder weight</th><th>Tag</th></tr></thead><tbody><tr><td>1</td><td>[verbatim, solution words and all]</td><td>[observed / artefact / interview / opinion]</td><td>[1.0 · 0.7 · 0.5 · 0.3 · 0.1]</td><td>[Fact/Assumption/Hypothesis]</td></tr><tr><td>2</td><td>…</td><td></td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Segment these needs belong to: [one segment; if &quot;everyone&quot;, the needs will over-peel — narrow it]</li><li>If every row = 0.1 → <strong>STOP: input not ready.</strong> Cheapest fix: watch one customer do the job once; note what they reach for when the current tool stops helping.</li></ul>\n<h2>1. Solution-strip (onion pass 1)</h2>\n<p>Flag the words that name a thing you would build, or a property of that thing. Replace with the need beneath.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stated need</th><th>Solution / tech words in it</th><th>Type (solution / tech-capability)</th><th>The need beneath (stripped)</th></tr></thead><tbody><tr><td>[e.g. &quot;an AI copilot on the floor&quot;]</td><td>copilot, AI</td><td>solution</td><td>[what the copilot would carry — a decision, a lookup]</td></tr><tr><td>[e.g. &quot;real-time anomaly alerts&quot;]</td><td>real-time, alerts</td><td>tech-capability</td><td>[act on the right emerging fault early enough to matter]</td></tr><tr><td>…</td><td></td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Candidates that are pure solution/capability with nothing beneath yet: [list — these need harder peeling in §2, not a free pass]</li></ul>\n<h2>2. Onion to core</h2>\n<p>Ladder each stripped need until it names a human decision, outcome, or state — no solution word, not yet a platitude.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Stripped need</th><th>why? →</th><th>why? →</th><th>Core need (last discriminating layer)</th></tr></thead><tbody><tr><td>[__]</td><td>[__]</td><td>[__]</td><td>[__]</td></tr><tr><td>…</td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>Stop rule: peel until tech-invariant (§3 passes); stop before the need would fit any business on earth.</p>\n<h2>3. Tech-invariance test (the durability gate)</h2>\n<p>Would each core need still be a need, unchanged, if solved with paper, a clerk, or a model three generations away?</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Core need</th><th>Still a need if the tech were completely different?</th><th>If NO — the capability still hiding → peel again or discard</th></tr></thead><tbody><tr><td>[__]</td><td>[Y/N]</td><td>[__]</td></tr><tr><td>…</td><td></td><td></td></tr></tbody></table></div>\n<p>Any NO → not a durable need. Do not carry it into §4.</p>\n<h2>4. Kano classification (durable needs only)</h2>\n<p>Two questions per need. Functional: &quot;if this were fully met, how do you feel?&quot; Dysfunctional: &quot;if it were not met at all, how do you feel?&quot;</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Durable need</th><th>Functional answer</th><th>Dysfunctional answer</th><th>Kano class</th></tr></thead><tbody><tr><td>[__]</td><td>[__]</td><td>[__]</td><td>[must / performance / delighter / indifferent / reverse]</td></tr></tbody></table></div>\n<p>Mapping: neutral+dissatisfied = <strong>must</strong> · more-is-better+less-is-worse = <strong>performance</strong> · delighted+neutral = <strong>delighter</strong> · neutral+neutral = <strong>indifferent (discard)</strong> · worse+better = <strong>reverse (anti-need)</strong>.</p>\n<h2>5. Prioritised need map + selection</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Durable need</th><th>Kano class</th><th>Unserved-evidence weight</th><th>Currently half-met by</th><th>Verdict</th></tr></thead><tbody><tr><td>[__]</td><td>[performance]</td><td>[0.7 workaround]</td><td>[a manual stopgap]</td><td><strong>WEDGE</strong></td></tr><tr><td>[__]</td><td>[must]</td><td>[__]</td><td>[__]</td><td>entry ticket: fix, don't differentiate</td></tr><tr><td>[__]</td><td>[delighter]</td><td>[__]</td><td>[__]</td><td>decaying: don't anchor the moat</td></tr><tr><td>[__]</td><td>[performance]</td><td>[0.3]</td><td>[__]</td><td>hypothesis: go observe before building</td></tr></tbody></table></div>\n<p>Selection rule:</p>\n<ul><li><strong>Return</strong> the durable, <strong>performance-class</strong> need with <strong>unserved evidence ≥ 0.5</strong> → the wedge.</li><li>Unmet <strong>must-have</strong> → entry ticket (fix, do not differentiate).</li><li><strong>Delighter</strong> → decaying (do not anchor the moat).</li><li>Unserved evidence <strong>&lt; 0.5</strong> → hypothesis (go observe first).</li><li>Two needs with the same core → merge; note the merge, do not double-count.</li></ul>\n<h2>6. Evidence on the top pick</h2>\n<ul><li>The need: [__]</li><li>Why it is unserved (the gap): [workaround they use / money leaking to a substitute / recurring failure] · ladder weight [__] · <code>[Fact | Assumption]</code></li><li>If weight &lt; 0.5 → the single cheapest observation to confirm the gap: [__]</li></ul>\n<h2>Read-out (one line each)</h2>\n<ul><li><strong>The useful unserved need is:</strong> [__].</li><li><strong>It is durable because:</strong> [it survives the tech changing — state the invariance, e.g. &quot;the go/no-go exists on paper, on radio, on any model&quot;].</li><li><strong>Table stakes (unmet musts to fix, not win on):</strong> [__].</li><li><strong>Do not anchor here (delighters):</strong> [__].</li><li><strong>Solutions/capabilities killed on the way:</strong> [__ — the disguised needs you removed].</li><li><strong>What would change this read:</strong> [observing the workaround confirms or breaks the gap; if the &quot;need&quot; dissolves when the tech changes, it was a capability all along].</li></ul>",
  "path": "skills/unserved-needs-finder/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Mentix, factory-manager needs</h1>\n<p>Fellow: <strong>Mentix</strong> (industrial AI, factory/plant operations). All numbers and details are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's question:</strong> &quot;Here's what plant managers need. Which one do we build first?&quot;</p>\n<h2>0. Candidate needs (as stated)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Need as stated</th><th>Source</th><th>Ladder weight</th><th>Tag</th></tr></thead><tbody><tr><td>1</td><td>&quot;An AI copilot on the floor they can ask anything&quot;</td><td>fellow's pitch</td><td>0.1</td><td><code>[Hypothesis]</code></td></tr><tr><td>2</td><td>&quot;Real-time anomaly alerts on every machine&quot;</td><td>fellow's pitch</td><td>0.1</td><td><code>[Hypothesis]</code></td></tr><tr><td>3</td><td>&quot;To reduce unplanned downtime&quot;</td><td>two shift managers, interview</td><td>0.3</td><td><code>[Assumption]</code></td></tr><tr><td>4</td><td>&quot;When three alarms fire at once, to know which machine gets the one technician on shift&quot;</td><td>observed on a live floor; managers keep a hand-written 'which alarm matters' whiteboard</td><td>0.7</td><td><code>[Fact]</code></td></tr><tr><td>5</td><td>&quot;An auto-generated shift report for the plant director&quot;</td><td>one manager</td><td>0.3</td><td><code>[Assumption]</code></td></tr></tbody></table></div>\n<ul><li>Segment: shift managers on discrete-manufacturing lines with more machines than on-shift maintenance staff.</li><li>Not all 0.1 → row 4 is observed behaviour. Input is ready, but rows 1–2 are pitch, not need.</li></ul>\n<h2>1. Solution-strip (onion pass 1)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Stated need</th><th>Solution / tech words</th><th>Type</th><th>The need beneath</th></tr></thead><tbody><tr><td>1 &quot;AI copilot&quot;</td><td>copilot, AI, &quot;ask anything&quot;</td><td>solution</td><td>nothing specific beneath yet — it names an interface, not a job. Peel hard in §2.</td></tr><tr><td>2 &quot;real-time anomaly alerts&quot;</td><td>real-time, alerts, anomaly-detection</td><td>tech-capability</td><td>act on the right emerging fault early enough to prevent a stop</td></tr><tr><td>3 &quot;reduce unplanned downtime&quot;</td><td>— (an outcome, not a solution)</td><td>outcome</td><td>keep the line running through the faults that would otherwise stop it</td></tr><tr><td>4 &quot;which machine gets the technician&quot;</td><td>— (already a decision)</td><td>need</td><td>allocate scarce maintenance attention across simultaneous faults</td></tr><tr><td>5 &quot;auto-generated shift report&quot;</td><td>auto-generated, report</td><td>solution</td><td>give the director a trusted account of the shift without the manager writing it</td></tr></tbody></table></div>\n<ul><li>Pure solution with nothing beneath: #1. A &quot;copilot&quot; is an interface; it carries whatever the real need is. It is not itself a need.</li></ul>\n<h2>2. Onion to core</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Stripped need</th><th>why? →</th><th>why? →</th><th>Core need</th></tr></thead><tbody><tr><td>act on the right emerging fault early</td><td>so a small fault doesn't become a stop</td><td>but you can't chase all of them — staff is limited</td><td>decide which emerging fault is worth the scarce technician's time now</td></tr><tr><td>keep the line running through faults</td><td>downtime costs output and gets the manager blamed</td><td>can't prevent every fault</td><td>lose the fewest line-hours given the faults you can't all fix</td></tr><tr><td>allocate scarce maintenance attention</td><td>one tech, several faults, one shift</td><td>guessing wrong stops the line</td><td>choose where to send limited attention so the costliest stop is the one you prevent</td></tr></tbody></table></div>\n<p>Rows 2, 3, 4 all ladder into the same core: <strong>choose where to send limited maintenance attention across simultaneous faults so the line-hours you lose are the cheapest ones.</strong> Merge (noted in §5). Row 5 cores to: the manager owns a defensible account of what happened and why they chose as they did.</p>\n<h2>3. Tech-invariance test</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Core need</th><th>Still a need if the tech were completely different?</th><th>If NO</th></tr></thead><tbody><tr><td>Choose where to send limited attention across simultaneous faults</td><td>Y — a manager with a clipboard and three ringing alarms has this need exactly</td><td>—</td></tr><tr><td>&quot;Real-time anomaly detection&quot; (row 2, before merge)</td><td>N</td><td>the <em>detection speed</em> is a capability; the next model release does it too. The durable need is the <em>choice</em>, not the speed. Discarded as a standalone need.</td></tr><tr><td>Defensible account of the shift (row 5 core)</td><td>Y — a director always wants to know why the line stopped and who decided what</td><td>—</td></tr></tbody></table></div>\n<h2>4. Kano classification (durable needs only)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Durable need</th><th>Functional (fully met)</th><th>Dysfunctional (not met)</th><th>Kano class</th></tr></thead><tbody><tr><td>Alerts they can trust (low false-positive)</td><td>neutral — expected</td><td>dissatisfied — they ignore the whole system</td><td><strong>must</strong></td></tr><tr><td>Choose where to send limited attention (the allocation)</td><td>more is better — every good call saves line-hours</td><td>worse — a wrong call stops the line</td><td><strong>performance</strong></td></tr><tr><td>Defensible account of the shift</td><td>delighted — nice to hand up</td><td>neutral — they'll write it by hand as always</td><td><strong>delighter</strong></td></tr></tbody></table></div>\n<h2>5. Prioritised need map + selection</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Durable need</th><th>Kano class</th><th>Unserved-evidence weight</th><th>Currently half-met by</th><th>Verdict</th></tr></thead><tbody><tr><td>Choose where to send limited attention across simultaneous faults</td><td>performance</td><td>0.7 (the hand-written whiteboard)</td><td>the manager's gut + a tribal-knowledge whiteboard</td><td><strong>WEDGE</strong></td></tr><tr><td>Alerts they can trust</td><td>must</td><td>0.3 (managers say current SCADA over-alarms)</td><td>SCADA thresholds, ignored when noisy</td><td>entry ticket: fix, don't differentiate</td></tr><tr><td>Defensible account of the shift</td><td>delighter</td><td>0.3</td><td>manager writes it by hand</td><td>decaying: don't anchor the moat</td></tr></tbody></table></div>\n<p>Merged: rows 2, 3, 4 → one performance need (noted). Killed: #1 &quot;AI copilot&quot; (interface, not a need); #2 &quot;real-time anomaly detection&quot; as a standalone (capability, fails §3).</p>\n<h2>6. Evidence on the top pick</h2>\n<ul><li>The need: choose where to send limited maintenance attention across simultaneous faults so the cheapest line-hours are the ones lost.</li><li>Why it is unserved: the managers maintain a hand-written &quot;which alarm matters&quot; whiteboard because no tool ranks the alarms by cost-of-stop — observed behaviour, 0.7. <code>[Fact]</code> The whiteboard is a workaround for exactly the gap.</li><li>Above 0.5 → actionable. To move toward 1.0: price one shift's whiteboard decisions against actual line-hours lost, to show money leaking to wrong calls.</li></ul>\n<h2>Read-out</h2>\n<ul><li><strong>The useful unserved need is:</strong> deciding which of several simultaneous emerging faults gets the one available technician, so the line-hours lost are the cheapest ones.</li><li><strong>It is durable because:</strong> a manager with a clipboard and three alarms has this need with no software at all; a better model changes how well you meet it, not whether it exists.</li><li><strong>Table stakes (unmet musts):</strong> alerts accurate enough to trust — fix it, but it will not win the account.</li><li><strong>Do not anchor here (delighters):</strong> the auto-generated shift report — pleasant, copied fast, decaying.</li><li><strong>Solutions/capabilities killed:</strong> &quot;an AI copilot&quot; (an interface, not a need) and &quot;real-time anomaly detection&quot; (a capability the platform commoditises).</li><li><strong>The challenge to the fellow:</strong> your two headline needs are the two fake kinds. &quot;Copilot&quot; is a solution and &quot;real-time anomaly detection&quot; is a capability that fails the durability test — build either and you have built something the next model release erodes. The need you can own is the one you did not pitch: the allocation call, evidenced by a whiteboard the managers built themselves. Build the ranked-by-cost allocation, not the copilot.</li><li><strong>What would change this read:</strong> if pricing the whiteboard shows wrong calls cost little (the faults are cheap, or the tech is rarely the bottleneck), the wedge is thin and the real need may be the trusted alert after all; if managers turn out to trust their gut over any ranking, the allocation need is served by habit and unserved-evidence drops below 0.5.</li></ul>",
  "path": "skills/unserved-needs-finder/examples/sample.md"
 },
 "rubric": {
  "skill": "unserved-needs-finder",
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
    "What do they really need — and which need should we build first?",
    "This feature list is mostly solutions. What's the real need under it?",
    "Find the unmet need in this segment and rank it.",
    "Which of these is the wedge need vs a nice-to-have?",
    "They keep asking for [feature]. What do they actually need, and is it durable?"
   ],
   "mustNotFire": [
    {
     "phrase": "Who is the actual buyer, what's their budget, and who signs?",
     "sibling": "user-buyer-decider-map",
     "local": true
    },
    {
     "phrase": "Reduce the whole job to information moved / decisions made / liability transferred.",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "Is the whole idea worth building at all?",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 MUST phrasings map to description triggers (&quot;what do they really need&quot;, &quot;real need under this feature request&quot;, &quot;find the unmet need&quot;, &quot;which need should we prioritise&quot;/&quot;wedge&quot;, &quot;durable&quot;). All 3 MUST-NOT are explicitly excluded by name in the description's NOT-clauses (buyer→user-buyer-decider-map, currencies→job-in-primitives, whole idea→so-what-stress-test).</p>"
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
    "evidenceHtml": "<p>01 vague: §0 &quot;need a segment + STOP if all 0.1&quot; forces the one unblocking question, no fabricated map. 02 Slack: &quot;integration&quot; is literally in the §1 solution-noun list → stripped at pass 1, redirected to what it carries. 03 buyer: When-to-use table + &quot;Name the sibling and stop&quot; declines and names <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>, offers top need as handoff. No fabrication/flattery/poaching.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p><code>supersedes: none</code>. (Skill claims to &quot;absorb&quot;/beat external <code>discovery/jobs-to-be-done</code> in prose but formally supersedes nothing — an external framework, not a retired Icarus skill. No head-to-head required.)</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01 could NOT come from a generic PM prompt: the tech-invariance gate kills &quot;faster log ingestion&quot; as a platform-commoditised capability (frontier-studio-specific logic), and the evidence ladder demotes the fellow's own audit-confidence read to <code>[Hypothesis]</code> until a workaround/money-leak is shown. Generic PM output would be a JTBD nine-box or RICE list. Decision logic lives in tables (solution-strip, onion, tech-invariance, Kano map, selection); no procedure trapped in prose.</p>"
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
     "label": "G01 Azraq dashboard/ingestion 5",
     "dims": [
      5,
      5,
      5,
      5,
      4
     ],
     "total": 24,
     "verdictRaw": "PASS — strips dashboard (solution), kills ingestion (capability, fails §3), returns materiality-judgment performance need as wedge; audit-confidence held at hypothesis pending pre-audit-consultant workaround. No auto-fail.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G02 Barrier gas-safety 5",
     "dims": [
      5,
      5,
      5,
      4,
      4
     ],
     "total": 23,
     "verdictRaw": "PASS — app→solution, real-time→capability; go/no-go performance wedge returned as hypothesis pending \"what crews reach for when permit status unclear\". Safety framing does not license 0.3→0.7 inflation.",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "G03 Durian AP (mundane) 5",
     "dims": [
      5,
      5,
      5,
      4,
      4
     ],
     "total": 23,
     "verdictRaw": "PASS — OCR→capability, queue→solution; both merge to one core (Step 6 merge rule + example precedent); \"catch bad match before payment\" wedge. Does not shrug \"just AP tooling\".",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 Mentix delighter trap 5",
     "dims": [
      5,
      5,
      5,
      5,
      5
     ],
     "total": 25,
     "verdictRaw": "PASS — sharpest Kano test: summary tests as delighter, reject-risk decision as performance → wedge is the unglamorous grumble, NOT the loved summary. Gotcha \"comfortable need is a delighter\" + Kano map force it.",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G05 Azraq all-capabilities 5",
     "dims": [
      5,
      4,
      5,
      5,
      4
     ],
     "total": 23,
     "verdictRaw": "PASS — every item fails §1/§3; §0 STOP + §3 kills leave nothing for §4; refuses to manufacture a ranking, names the category error, onions air-gapped item to a lone hypothesis. AC=4: correct output is a refusal/partial, not a full wedge map (by design).",
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
  "gotchasSurfaced": "<ul><li><strong>Source-weight ambiguity can bypass the §0 STOP rule (real, exploitable).</strong> The Step 1 ladder tier &quot;artefact 0.5&quot; is distinct from the Evidence-standard tier &quot;they SHOW you the workaround artefact 0.5&quot; — the latter means a <em>customer workaround</em> artefact, the former reads like any written artefact. A roadmap/wishlist doc (Golden 05) is the team's own opinion written down and must weight 0.1 (opinion), not 0.5 (artefact); mis-weighting it at 0.5 would skip the &quot;all rows 0.1 → STOP: not ready&quot; gate and risk manufacturing a ranking of capabilities. The method still lands correctly via §3 tech-invariance (all five capabilities fail), so it is not fatal, but the STOP path is exploitable. Fix: add one line — &quot;an internal roadmap/opinion doc is 0.1 (opinion), never 0.5; the 0.5 tier is a customer workaround artefact, not your own wishlist.&quot;</li><li><strong>Two 1.0–0.1 ladders in one skill.</strong> Step 1 weights <em>source credibility per candidate</em>; the Evidence-standard weights <em>unserved-gap strength on the top pick</em>. Same numbers, subtly different question. Worth a one-line pointer that they are two axes, so an applier does not conflate &quot;how well-sourced is this candidate&quot; with &quot;how evidenced is the gap&quot;.</li><li><strong>Prose/frontmatter tension (minor, not a defect).</strong> &quot;Absorbs <code>discovery/jobs-to-be-done</code>&quot; and &quot;It beats JTBD&quot; read like a supersede, but <code>supersedes: none</code>. Fine, since JTBD is an external framework, not a retired Icarus skill — but a reader may expect a Gate-4 comparison that does not run.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: clarified in Step 1 (§0) that the 0.5 artefact rung is a customer's own workaround artefact, not the team's own roadmap/wishlist/spec (opinion 0.1), so the all-0.1 STOP gate cannot be bypassed by mis-weighting an internal doc.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — unserved-needs-finder</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What do they really need — and which need should we build first?&quot;</li><li>&quot;This feature list is mostly solutions. What's the real need under it?&quot;</li><li>&quot;Find the unmet need in this segment and rank it.&quot;</li><li>&quot;Which of these is the wedge need vs a nice-to-have?&quot;</li><li>&quot;They keep asking for [feature]. What do they actually need, and is it durable?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Who is the actual buyer, what's their budget, and who signs?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a></li><li>&quot;Reduce the whole job to information moved / decisions made / liability transferred.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></li><li>&quot;Is the whole idea worth building at all?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 MUST phrasings map to description triggers (&quot;what do they really need&quot;, &quot;real need under this feature request&quot;, &quot;find the unmet need&quot;, &quot;which need should we prioritise&quot;/&quot;wedge&quot;, &quot;durable&quot;). All 3 MUST-NOT are explicitly excluded by name in the description's NOT-clauses (buyer→user-buyer-decider-map, currencies→job-in-primitives, whole idea→so-what-stress-test).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague: §0 &quot;need a segment + STOP if all 0.1&quot; forces the one unblocking question, no fabricated map. 02 Slack: &quot;integration&quot; is literally in the §1 solution-noun list → stripped at pass 1, redirected to what it carries. 03 buyer: When-to-use table + &quot;Name the sibling and stop&quot; declines and names <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>, offers top need as handoff. No fabrication/flattery/poaching.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td><code>supersedes: none</code>. (Skill claims to &quot;absorb&quot;/beat external <code>discovery/jobs-to-be-done</code> in prose but formally supersedes nothing — an external framework, not a retired Icarus skill. No head-to-head required.)</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 could NOT come from a generic PM prompt: the tech-invariance gate kills &quot;faster log ingestion&quot; as a platform-commoditised capability (frontier-studio-specific logic), and the evidence ladder demotes the fellow's own audit-confidence read to <code>[Hypothesis]</code> until a workaround/money-leak is shown. Generic PM output would be a JTBD nine-box or RICE list. Decision logic lives in tables (solution-strip, onion, tech-invariance, Kano map, selection); no procedure trapped in prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (MF·AC·PE·CH·ES, /25; pass = ≥21 and no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Result</th></tr></thead><tbody><tr><td>G01 Azraq dashboard/ingestion</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>PASS — strips dashboard (solution), kills ingestion (capability, fails §3), returns materiality-judgment performance need as wedge; audit-confidence held at hypothesis pending pre-audit-consultant workaround. No auto-fail.</td></tr><tr><td>G02 Barrier gas-safety</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>23</td><td>PASS — app→solution, real-time→capability; go/no-go performance wedge returned as hypothesis pending &quot;what crews reach for when permit status unclear&quot;. Safety framing does not license 0.3→0.7 inflation.</td></tr><tr><td>G03 Durian AP (mundane)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>4</td><td>23</td><td>PASS — OCR→capability, queue→solution; both merge to one core (Step 6 merge rule + example precedent); &quot;catch bad match before payment&quot; wedge. Does not shrug &quot;just AP tooling&quot;.</td></tr><tr><td>G04 Mentix delighter trap</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>PASS — sharpest Kano test: summary tests as delighter, reject-risk decision as performance → wedge is the unglamorous grumble, NOT the loved summary. Gotcha &quot;comfortable need is a delighter&quot; + Kano map force it.</td></tr><tr><td>G05 Azraq all-capabilities</td><td>5</td><td>4</td><td>5</td><td>5</td><td>4</td><td>23</td><td>PASS — every item fails §1/§3; §0 STOP + §3 kills leave nothing for §4; refuses to manufacture a ranking, names the category error, onions air-gapped item to a lone hypothesis. AC=4: correct output is a refusal/partial, not a full wedge map (by design).</td></tr></tbody></table></div>\n<p>Kill-line check: across all 5 goldens the skill never returns a solution or a tech capability as the wedge; the tech-invariance gate (Step 4, run before Kano) catches every capability, incl. the Kano-passing &quot;faster processing&quot; trap flagged in Gotchas. Kano sort verified to pick the under-served performance need as the wedge in every case where one exists (G01–G04) and to decline when none does (G05). Kill line NOT tripped.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Source-weight ambiguity can bypass the §0 STOP rule (real, exploitable).</strong> The Step 1 ladder tier &quot;artefact 0.5&quot; is distinct from the Evidence-standard tier &quot;they SHOW you the workaround artefact 0.5&quot; — the latter means a <em>customer workaround</em> artefact, the former reads like any written artefact. A roadmap/wishlist doc (Golden 05) is the team's own opinion written down and must weight 0.1 (opinion), not 0.5 (artefact); mis-weighting it at 0.5 would skip the &quot;all rows 0.1 → STOP: not ready&quot; gate and risk manufacturing a ranking of capabilities. The method still lands correctly via §3 tech-invariance (all five capabilities fail), so it is not fatal, but the STOP path is exploitable. Fix: add one line — &quot;an internal roadmap/opinion doc is 0.1 (opinion), never 0.5; the 0.5 tier is a customer workaround artefact, not your own wishlist.&quot;</li><li><strong>Two 1.0–0.1 ladders in one skill.</strong> Step 1 weights <em>source credibility per candidate</em>; the Evidence-standard weights <em>unserved-gap strength on the top pick</em>. Same numbers, subtly different question. Worth a one-line pointer that they are two axes, so an applier does not conflate &quot;how well-sourced is this candidate&quot; with &quot;how evidenced is the gap&quot;.</li><li><strong>Prose/frontmatter tension (minor, not a defect).</strong> &quot;Absorbs <code>discovery/jobs-to-be-done</code>&quot; and &quot;It beats JTBD&quot; read like a supersede, but <code>supersedes: none</code>. Fine, since JTBD is an external framework, not a retired Icarus skill — but a reader may expect a Gate-4 comparison that does not run.</li></ul>\n<h2>Refine run 2 — applied judge fixes: clarified in Step 1 (§0) that the 0.5 artefact rung is a customer's own workaround artefact, not the team's own roadmap/wishlist/spec (opinion 0.1), so the all-0.1 STOP gate cannot be bypassed by mis-weighting an internal doc.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq: data-centre risk, feature list vs need",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Operators keep asking us for a live risk dashboard, and separately for faster log ingestion. We think what they really need is confidence their site won't fail an insurer's audit. Which need do we build for first?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>§0 lists all three candidates verbatim with sources and ladder weights (&quot;dashboard&quot; and &quot;faster ingestion&quot; as operator requests; &quot;confidence they won't fail an audit&quot; as the fellow's read).</li><li>§1 solution-strip: &quot;live risk dashboard&quot; → solution (an interface); &quot;faster log ingestion&quot; → tech-capability (fails durability); &quot;confidence they won't fail an audit&quot; → an outcome/state, peel further.</li><li>§2 onion: the durable core is deciding which incidents are material to how an insurer prices this site's cover — the risk position, not the dashboard that shows it.</li><li>§3 tech-invariance: &quot;faster ingestion&quot; fails (a capability the platform commoditises); the materiality-judgment core passes (a risk analyst with a ledger has it).</li><li>§4 Kano: a trustworthy risk grade = must; the materiality judgment insurers rely on = performance (the wedge); the live dashboard view = delighter/decaying.</li><li>§5 returns the performance need only if its unserved evidence ≥0.5; flags &quot;faster ingestion&quot; as killed (capability) and &quot;dashboard&quot; as a solution.</li><li>§6: the unserved claim must cite a workaround or money leak (e.g. operators pay a consultant to pre-audit), not the fellow's belief.</li><li>Challenge: names that the two operator-requested items are the two fake kinds (a solution and a capability) and that the fellow's own read is closest to a real need but is only opinion (0.1) until a workaround or a paid substitute is shown.</li><li>Claims tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Ranks &quot;faster log ingestion&quot; or &quot;a dashboard&quot; as the top need, or accepts &quot;confidence they won't fail an audit&quot; as evidenced without asking for the workaround/money behind it.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Barrier Intelligence: gas-safety needs",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Field crews want an app that flags expired permits, and the safety leads want push notifications the second a gas reading spikes. What do they actually need, ranked?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>§0 captures both requests with sources; both are likely 0.3 (verbal requests) unless a workaround is shown.</li><li>§1 solution-strip: &quot;an app that flags expired permits&quot; → solution; &quot;push notifications the second a reading spikes&quot; → tech-capability (real-time speed) wrapping a real need.</li><li>§2 onion: the durable core across both is knowing, at the moment work is about to start, whether the specific task is safe to begin right now — a go/no-go on opening the line.</li><li>§3 tech-invariance: the go/no-go survives with paper permits and a radio; &quot;notifications the second it spikes&quot; fails as a standalone (speed is a capability).</li><li>§4 Kano: a permit whose status you can trust = must; the at-the-moment safe-to-start judgment = performance (the wedge, if evidenced); real-time spike alerting = must OR delighter depending on whether crews currently miss spikes.</li><li>§5 selection: return the performance need only with evidence ≥0.5; label the app and the notification-speed as a solution and a capability respectively.</li><li>Challenge: pushes that both stated needs are solution/capability costumes and asks what crews reach for today when a permit's status is unclear (a phone call to the signer? a re-test?) — that workaround is the evidence, or the ranking is a hypothesis.</li><li>Claims tagged; the safety-critical framing does not license inflating opinion to fact.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Returns &quot;the app&quot; or &quot;real-time notifications&quot; as the need, or ranks the go/no-go as the wedge without evidence of how crews currently cope (leaving 0.3 opinion dressed as 0.7 behaviour).</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs: accounts-payable needs (the mundane case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;In accounts payable, the clerks say they need OCR on delivery notes and a nicer approval queue. Nothing exciting. What's the real need and which matters?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Deliberately mundane. Two low-glamour requests.</li><li>§1 solution-strip: &quot;OCR on delivery notes&quot; → tech-capability; &quot;a nicer approval queue&quot; → solution (an interface).</li><li>§2 onion: both peel to the same core — catch, before payment is released, when the firm has been billed for goods it did not receive.</li><li>§3 tech-invariance: the core survives (a clerk with two paper documents has it); &quot;OCR&quot; fails as a standalone need (a capability).</li><li>§4 Kano: a queue that shows the right items = must; catching the bad match before payment = performance (the wedge); OCR speed = indifferent-to-delighter (clerks tolerate manual entry).</li><li>§5: merge the two requests to one core (note the merge); return &quot;catch the bad match before payment&quot; as the performance need if evidenced; label OCR as a killed capability and the queue as a solution.</li><li>Point of the mundane case: even a dull clerical request separates into fake needs (OCR, queue) and one durable need (stop paying for goods not received). The skill must not shrug &quot;it's just AP tooling&quot; and rank the OCR.</li><li>§6: unserved evidence = do clerks currently miss bad matches (a recovered-overpayment log? a reconciliation spreadsheet)? Below 0.5 → hypothesis.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Ranks &quot;OCR&quot; as the top need, or treats the mundane framing as reason to skip the onion and hand back the two requests unchanged.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Mentix: quality/scrap needs, delighter trap",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;Two needs from the quality team. One, they light up when we show them a generative summary of each defect with a photo — they love it. Two, they grumble that they can't tell which of the day's defects will actually get the batch rejected by the customer. We're leaning into the summary since the reaction is so strong. Right call?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>§0: candidate 1 = the generative defect summary (strong positive reaction, 0.3 verbal enthusiasm); candidate 2 = knowing which defects will trigger a customer rejection (a grumble, but points at a real gap).</li><li>§1 solution-strip: &quot;generative summary with a photo&quot; → solution/tech-capability; &quot;which defects will get the batch rejected&quot; → an outcome, peel to a decision.</li><li>§2 onion: core need = decide which defects to act on before shipping, given only the ones that would cause a customer rejection matter.</li><li>§3 tech-invariance: the decision survives any tech; the generative summary is a capability the platform commoditises.</li><li>§4 Kano: the summary tests as a <strong>delighter</strong> (delighted when present, neutral when absent — they'll live without it); the reject-risk decision tests as <strong>performance</strong> (more accurate = fewer bad batches shipped, less scrap).</li><li>§5 selection: the WEDGE is the reject-risk performance need, NOT the delighter — even though the reaction to the summary is stronger. The skill must explicitly say the strong reaction is the delighter trap.</li><li>Challenge: names directly that &quot;leaning into the summary because the reaction is strong&quot; is the classic delighter mistake — delighters decay and this one is a commoditising capability; the durable wedge is the unglamorous grumble. Asks for the evidence the reject-risk need is unserved (do they currently over-scrap or ship bad batches? a rework log?).</li><li>Claims tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Endorses building the generative summary as the wedge because customers &quot;love it&quot;, or fails to name the delighter trap and the decay of a capability-based delighter.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Azraq: all-capabilities list (the discriminating case)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Here's the need list from our roadmap doc: real-time streaming, a bigger context window so we can ingest more logs, on-device inference for air-gapped sites, an API, and automated report generation. Rank these needs for us.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>The discriminating case: every item is a solution or a tech capability. There is no durable need in the list.</li><li>§1 solution-strip / §3 tech-invariance: each item fails.\n<ul><li>&quot;real-time streaming&quot; → capability, fails durability.</li><li>&quot;bigger context window&quot; → capability of the model, fails hardest — it is literally a platform spec.</li><li>&quot;on-device inference for air-gapped sites&quot; → capability wrapping a possible real need (operating where data cannot leave), which the skill should surface as the <em>only</em> candidate worth onioning.</li><li>&quot;an API&quot; → solution.</li><li>&quot;automated report generation&quot; → solution/capability.</li></ul></li><li>Required behaviour: the skill declares that the list contains no durable need as written, and does NOT manufacture a ranking to satisfy the request. It challenges the input as a feature roadmap mislabelled &quot;needs&quot;.</li><li>It may onion the one item with a possible need beneath — &quot;air-gapped sites&quot; → the need to run the risk judgment where operational data legally/contractually cannot leave the site — and return THAT as a hypothesis, flagging it needs evidence (do operators actually refuse cloud? a lost deal, a contract clause?).</li><li>§0 STOP-adjacent: because every source is a roadmap doc (opinion, 0.1), the skill states the input is not ready and names the fix: observe one operator's job and find the workaround.</li><li>Challenge dimension is the whole test: refuse to rank capabilities as needs; name the category error.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Produces a ranked list of the five capabilities as if they were needs, or invents customer evidence to justify ranking &quot;bigger context window&quot; as a need.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/golden/05.md"
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
     "html": "<p>&quot;Help me figure out what users really need in fintech.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>No segment, no candidate needs, no observed instance. &quot;Fintech users&quot; is not a segment and &quot;what they need&quot; is unanswerable without one concrete job to onion.</p>\n<ul><li>Must ask the ONE unblocking question: name one specific user in one specific situation and one thing they were trying to do the last time you watched them — or hand back the smallest honest step (go observe one instance of one job).</li><li>Must NOT invent candidate needs, a Kano table, or a ranking for &quot;fintech users&quot;.</li><li>May state plainly that the skill needs at least one stated need from one segment before it can strip and rank anything, and that &quot;fintech&quot; spans a dozen segments with unrelated needs.</li><li>Invents no specifics to fill the gap.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: asks for one concrete segment + one observed job, or returns the smallest next step; produces no fabricated need map. FAIL: generates a plausible-looking ranked need list for generic &quot;fintech users&quot;.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The need is they don't have a Slack integration.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;A Slack integration&quot; is a pre-chosen solution wearing the word &quot;need&quot;. It is exactly what this skill's solution-strip deletes — a named tool cannot be a need.</p>\n<ul><li>Must name the trap: &quot;Slack integration&quot; is a solution noun, removed at the onion's first pass; it can never be the need.</li><li>Must peel to the need beneath: ask what decision or piece of information the integration would carry — what does the user need to know, decide, or hand off, that they currently cannot? Offer to onion THAT to a tech-invariant core (which will survive whether the answer is Slack, email, or a model).</li><li>Must NOT accept &quot;no Slack integration&quot; as the need, and must NOT start building a Kano table for &quot;having an integration&quot;.</li><li>If the fellow cannot say what the integration would carry, that is the tell that no need has been found yet — say so.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects the integration as the need, names it as a to-be-stripped solution, and redirects to the underlying information/decision the integration would move. FAIL: dutifully onions &quot;not having a Slack integration&quot;, or accepts the missing-integration framing as the unmet need.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Great, we've got the top need. Now tell me who the actual buyer is, what their budget is, and who signs the cheque.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Naming and separating user / buyer / decision-maker / champion, with budget and why-now, is a different job. This skill ranks WHAT is needed; WHO holds the need and pays for it belongs to <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>.</p>\n<ul><li>Must decline to produce the buyer/budget/signer breakdown here.</li><li>Must name the right sibling explicitly: <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a> (same section, 02-customer-discovery).</li><li>Must not poach by half-answering with an invented buyer or budget.</li><li>May hand off cleanly: &quot;the durable need from this map is the input that skill takes into its buyer clarity — run it next.&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines, names <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>, offers the top need as the handoff input. FAIL: starts listing buyers, titles, or budgets, or invents a decision-maker to satisfy the request.</p>"
     }
    ],
    "other": [],
    "file": "skills/unserved-needs-finder/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/unserved-needs-finder/SKILL.md",
  "template": "skills/unserved-needs-finder/template.md",
  "example": "skills/unserved-needs-finder/examples/sample.md",
  "rubric": "skills/unserved-needs-finder/tests/rubric.json",
  "results": "skills/unserved-needs-finder/tests/RESULTS.md"
 }
});
