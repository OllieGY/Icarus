window.ICARUS_SKILL("yoda-data-sourcing", {
 "name": "yoda-data-sourcing",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a fellow's list of candidate data sources and returns a sourced proprietary corpus map: every source scored on one axis first — can a foundation model already reach it? — then on access, compounding, and whether the source is even real. Reachable data is thrown out of the moat column, because a model that can reach it can hand the same corpus to a competitor for free. What survives the test is the workflow-trapped, permission-gated signal: the shadow ChatGPT threads, the operational logs, the permits behind a records request, the vendor-locked sensor feed, the exhaust of the real work. Only those rows are the moat seed. The map is also the honest eval set: the data a model cannot narrate from training is the only data that can tell you whether your product actually works.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>An idea built on data a foundation model can already reach is an idea the model can hand your competitor for free. YODA sorts every candidate source by one test — can a model already reach it? — and discards everything that passes, because reachable data is not a moat, it is a commodity the model narrates on demand. What is left is the workflow-trapped signal: shadow AI threads, operational logs, permits behind a records request, the vendor-locked sensor feed, the exhaust of the actual workflow — data a model cannot get, which is exactly why it seeds both the moat and the only honest eval set.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has candidate data sources (or a workflow that produces data) and needs to know which of them a competitor's model cannot already replicate. Trigger phrases: &quot;get our own data&quot;, &quot;what data do we own&quot;, &quot;where's our proprietary data&quot;, &quot;build the moat's seed&quot;, &quot;what data can't a competitor get&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Draft the clause / contract that gives us rights to the operator's telemetry&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming). This skill <em>flags</em> that a gated source needs a signed clause and points there; it does not write legal language.</td></tr><tr><td>&quot;Is 'they said they'd buy it' strong enough evidence? Score this signal.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>. That skill owns the rungs. This skill <em>uses</em> the ladder to weigh whether a source is real, but scoring a lone signal is not its job.</td></tr><tr><td>&quot;Run the interview that pulls the supervisor's tacit judgment out of their head&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>. This skill can <em>list</em> tacit judgment as a proprietary seam; capturing it is a different runbook.</td></tr></tbody></table></div>\n<p>Also do not use it to invent data a fellow does not have. If the input is a vague domain with no workflow and no real sources, it is not ready. Say so and ask the one unblocking question (see Method step 1).</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Five steps.</p>\n<h3 id=\"step-1-anchor-on-the-workflow-not-the-domain\">Step 1 — Anchor on the workflow, not the domain</h3>\n<p>Proprietary data is a byproduct of work. Before listing sources, name the recurring task the fellow (or their user) actually does, and what byproduct it leaves. If the fellow can only name a domain (&quot;logistics&quot;, &quot;safety&quot;) with no workflow and no real source, stop. Ask the one question: <em>what recurring task do you or your users do by hand today, and what does doing it leave behind?</em> Do not invent sources to fill the gap.</p>\n<h3 id=\"step-2-list-candidates-seeded-from-the-six-seams\">Step 2 — List candidates, seeded from the six seams</h3>\n<p>Proprietary signal hides in six seams. Use them to prompt the fellow past the obvious public datasets.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Seam</th><th>What it holds</th><th>Default reachability</th></tr></thead><tbody><tr><td>1</td><td>Shadow AI threads</td><td>The ChatGPT/Claude sessions people already run to do the job. Prompts + the corrections they make are a labelled record of the real task.</td><td>P</td></tr><tr><td>2</td><td>Workflow exhaust</td><td>Drafts, edits, rejected options, undo trails, the <code>final_v7</code> version graveyard. The decision path, not just the result.</td><td>P</td></tr><tr><td>3</td><td>Operational &amp; sensor logs</td><td>Telemetry from machines, systems, operations. Often held by a vendor, not by you.</td><td>P, access-risk</td></tr><tr><td>4</td><td>Permits, filings &amp; records</td><td>Administrative records tied to real activity (rig permits, inspection reports).</td><td>G</td></tr><tr><td>5</td><td>Tacit judgment</td><td>The calls experts make that are written down nowhere. Captured by shadowing (<a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>).</td><td>P</td></tr><tr><td>6</td><td>Transaction ledger</td><td>Prices actually paid, deal notes, who-bought-what. Money-moved signal.</td><td>P</td></tr></tbody></table></div>\n<p>The default is a starting guess, not a verdict. Step 3 decides each row in context.</p>\n<h3 id=\"step-3-run-the-one-test-on-every-candidate-can-a-model-already-reach-it\">Step 3 — Run the one test on every candidate: can a model already reach it?</h3>\n<p>Assign each source exactly one band. The decision rule is a tree, top down.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Band</th><th>Test</th><th>Meaning</th><th>Moat status</th></tr></thead><tbody><tr><td><strong>R — model-reachable</strong></td><td>Published, indexed, or synthesizable from public web / common training data?</td><td>Standards, news, textbooks, Wikipedia, most OEM manuals, published datasets, common-API data.</td><td><strong>Not a moat seed.</strong> A model hands it to your competitor for free.</td></tr><tr><td><strong>G — gated</strong></td><td>Real and specific, but behind a gate anyone with money, standing, or effort can pass (paywall, records request, licence, membership)?</td><td>Permits via records request, licensed datasets, paywalled databases, trade-association data.</td><td><strong>Speed/exclusivity edge at best.</strong> A moat only if you can lock the gate or be structurally faster.</td></tr><tr><td><strong>P — genuinely proprietary</strong></td><td>Created by the doing of the work and held privately, so no outside party — model or competitor — can retrieve it?</td><td>Shadow AI threads, workflow exhaust, private operational/sensor logs, captured tacit judgment, transaction ledger.</td><td><strong>The moat seed</strong> — if you can actually get it (Step 4).</td></tr></tbody></table></div>\n<p>If a source could plausibly sit in two bands, place it in the <em>lower</em> one (R over G, G over P). A charitable band is how reachable data sneaks into the moat column.</p>\n<h3 id=\"step-4-separate-quot-model-can-t-reach-it-quot-from-quot-you-can-reach-it-quot\">Step 4 — Separate &quot;model can't reach it&quot; from &quot;you can reach it&quot;</h3>\n<p>P means a model cannot get the source. It does not mean <em>you</em> can. Vendor-locked sensor logs are proprietary to the vendor, not to you. For every G and P row, record the access path and a data-rights note. A P source with no credible access path is a moat seed you do not hold yet — mark it, and flag that it needs a signed clause (point to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>, section 06; do not draft it here).</p>\n<p><strong>Clause-gated access is its own case — do not bury it in the access cell.</strong> A source you can reach <em>only</em> through a signed data-rights arrangement (a vendor's telemetry you may read once a clause exists, data shared under a partnership term) gets its own explicit line: mark the row <strong>P, access = clause-gated</strong>, name the counterparty and the clause it hangs on, and flag it for <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06). Until that clause is signed you do not hold the seed — a clause-gated row is a seed-in-waiting, not a seed you own.</p>\n<h3 id=\"step-5-score-reality-compounding-and-assemble-the-map\">Step 5 — Score reality, compounding, and assemble the map</h3>\n<p>For every surviving row, cite the evidence that the source is real and gettable, tagged on the ladder (see Evidence standard), and mark whether it compounds with use (does running the product generate more of this data?). Then fill the map in <code>template.md</code>:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Candidate source</th><th>Signal it holds (the question it answers)</th><th>Band [R/G/P]</th><th>Access path + data-rights note</th><th>Compounds with use?</th><th>Evidence it's real (ladder + <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>)</th><th>Moat seed?</th></tr></thead><tbody></tbody></table></div>\n<p>A row is a <strong>moat seed</strong> only if: band = P, a credible access path exists, and evidence it is real scores <strong>≥ 0.5</strong> (money, behaviour, or a shown artefact). An R-band source can <strong>never</strong> enter the moat-seed column, whatever its gettability score — a high &quot;gettable&quot; number on an R row only confirms everyone can get it. The band gates the column; the score never overrides it. Rank the seeds by compounding: a P source that grows every time the product is used outranks a static one. Close with the verdict: the moat-seed rows, and — if any exist — the gated rows worth a fast-mover play.</p>\n<p><strong>Kill line.</strong> If the map lists only model-reachable (R) sources, or marks any R source as a moat seed, the output is auto-failed. Reachable data is never a moat seed. If every candidate is R, the honest output is: this is not a moat seed — a model already reaches all of it — here is where your trapped signal would actually be (Step 1's workflow question).</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. Here the ladder scores the claim that a source <em>exists and you can get it</em> — not the data's value, its reachability.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal that the source is real and gettable</th><th>Score</th></tr></thead><tbody><tr><td>You already pay for or monetise access; the data already moved money</td><td>1.0</td></tr><tr><td>You already ingest it; it already flows into your system</td><td>0.7</td></tr><tr><td>You hold a sample export (40 permit PDFs, 200 thread transcripts)</td><td>0.5</td></tr><tr><td>Someone said you could probably get it</td><td>0.3</td></tr><tr><td>&quot;I'm sure that data exists somewhere&quot;</td><td>0.1</td></tr></tbody></table></div>\n<p>A source's whole case resting on <code>[Assumption]</code> or a 0.3 &quot;we could get it&quot; is not a moat seed; it is a sourcing task to run first. Tag each claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. A model-reachable source scores high on &quot;gettable&quot; precisely because everyone can get it — which is why gettability alone never qualifies a row; the band does.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Volume mistaken for proprietariness. &quot;We need more data&quot; almost always means more reachable data. A bigger scrape of the public web is more commodity, and the model already has it. The moat is not in the size of the R pile; it is in whether any P pile exists at all.</p>\n<p>Proprietary-to-someone-else counted as yours. Vendor-locked telemetry is genuinely unreachable by a model, so it looks like gold — but if the vendor owns it and will not share, it is their moat, not yours. Band P, access = none. It becomes a seed only with a signed data-rights clause.</p>\n<p>Public records treated as proprietary because they are annoying to get. Permits and filings are gated, not proprietary. If a competitor can file the same records request, the data is a speed edge, not a moat. It only becomes one if you can lock exclusivity or be structurally faster to the gate every cycle.</p>\n<p>The static-seed trap. A one-time proprietary dataset erodes: competitors catch up, the world moves, the model's next version may absorb a public proxy. A seed that compounds — regenerated every time the product is used (shadow-thread corrections, workflow exhaust) — is worth more than a larger seed that sits still. Rank seeds by compounding, not size.</p>\n<p>Reachable today, unreachable tomorrow — and the reverse. Reachability is a moving line. A dataset gated today may be indexed and model-reachable next year; a private log you hold may stay trapped for years. Score the band as it is now, and note any row whose band is about to move.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — a full corpus map for Barrier Intelligence's field-log data: rejects public gas-safety standards and industry news as model-reachable, surfaces rig permits (gated), shadow operator threads (proprietary, compounds), the field logs themselves (proprietary, compounds), and vendor-locked detector telemetry (proprietary but vendor-owned → data-rights clause needed), then names the moat seed.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming) — where a gated or vendor-locked row goes next. This skill names <em>that</em> a source needs a signed clause to use; that skill writes the clause. Point there; do not draft legal language here.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02) — owns the rungs this skill borrows to weigh whether a source is real. When a fellow wants to score one lone signal, send them there.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (section 02) — captures the tacit-judgment seam (row 5) this skill can only list. When a proprietary source <em>is</em> an expert's head, that runbook gets it out.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (section 06) — a moat seed feeds the wedge's defensibility, but the wedge test is about adoption. Different question; run this to find the data, that to find the first thing to build.</p>\n<p>Supersedes: none. Fully proprietary — there is no prior data-sourcing skill in the pack to absorb or beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Sourced Proprietary Corpus Map — YODA</h1>\n<p>Fill every field. The moat column is not for data a model can already reach. If every row is R, the map has no moat seed — and says so.</p>\n<h2>1. The workflow this data comes off</h2>\n<blockquote><p>Proprietary data is a byproduct of work. Name the work first.</p></blockquote>\n<p><strong>Recurring task:</strong> <em>[the task you or your users do by hand today]</em> <strong>Byproduct it leaves:</strong> <em>[the exhaust — drafts, threads, logs, records, notes]</em></p>\n<p>If you can only name a domain, not a task, stop. You do not yet have sources to map. Answer this first: <em>what recurring task do you or your users do by hand today, and what does doing it leave behind?</em></p>\n<h2>2. Candidates, seeded from the six seams</h2>\n<p>Run each seam against your workflow. Skip a seam only after checking it.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Seam</th><th>Anything here? (name it or write &quot;none&quot;)</th></tr></thead><tbody><tr><td>1 Shadow AI threads</td><td><em>[the ChatGPT/Claude sessions people already run to do the job]</em></td></tr><tr><td>2 Workflow exhaust</td><td><em>[drafts, edits, rejected options, version graveyard]</em></td></tr><tr><td>3 Operational &amp; sensor logs</td><td><em>[machine/system/operations telemetry — note who holds it]</em></td></tr><tr><td>4 Permits, filings &amp; records</td><td><em>[administrative records tied to real activity]</em></td></tr><tr><td>5 Tacit judgment</td><td><em>[calls experts make that are written down nowhere]</em></td></tr><tr><td>6 Transaction ledger</td><td><em>[prices actually paid, deal notes, who-bought-what]</em></td></tr></tbody></table></div>\n<h2>3. The one test — band every candidate</h2>\n<p>Assign exactly one band. If a source could sit in two, place it in the lower one (R over G over P).</p>\n<ul><li><strong>R — model-reachable:</strong> published, indexed, or synthesizable from public web / common training data. Not a moat seed.</li><li><strong>G — gated:</strong> real but behind a gate anyone with money/standing/effort can pass. Speed edge at best.</li><li><strong>P — genuinely proprietary:</strong> created by doing the work, held privately, no outside party can retrieve it. The moat seed — if you can get it.</li></ul>\n<h2>4. Access — model-can't-reach-it vs you-can-reach-it</h2>\n<p>For every G and P row, record how <em>you</em> get it and any data-rights note. A P source you cannot access is a seed you do not hold yet. Flag it for <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06).</p>\n<p><strong>Clause-gated:</strong> if a row is reachable <em>only</em> through a signed clause, give it its own line — mark <strong>access = clause-gated</strong>, name the counterparty and the clause, and list it as a seed-in-waiting. Do not fold it silently into the access cell.</p>\n<h2>5. The corpus map</h2>\n<p>One row per candidate. A row is a <strong>moat seed</strong> only if band = P <strong>and</strong> a credible access path exists <strong>and</strong> evidence it is real scores <strong>≥ 0.5</strong>.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Candidate source</th><th>Signal it holds (the question it answers)</th><th>Band [R/G/P]</th><th>Access path + data-rights note</th><th>Compounds with use?</th><th>Evidence it's real (ladder + tag)</th><th>Moat seed?</th></tr></thead><tbody><tr><td>1</td><td><em>[source]</em></td><td><em>[what question this data answers that others can't]</em></td><td><em>[R/G/P]</em></td><td><em>[how you get it; clause needed?]</em></td><td><em>[Y/N — does using the product make more of it?]</em></td><td><em>[e.g. &quot;hold 40 permit PDFs&quot; — artefact 0.5 <span class=\"tag tag-fact\">Fact</span>]</em></td><td><em>[Yes only if P + access + ≥0.5]</em></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>6. Verdict</h2>\n<p><strong>Moat seed (P + access + evidence ≥ 0.5), ranked by compounding:</strong></p>\n<ol><li><em>[the compounding seed first]</em></li><li><em>[...]</em></li></ol>\n<p><strong>Gated rows worth a fast-mover play (G, if any):</strong> <em>[source + why speed/exclusivity matters]</em></p>\n<p><strong>Rejected as model-reachable (R):</strong> <em>[list — these are commodity, not moat]</em></p>\n<p><strong>If every row is R:</strong> This is not a moat seed. A model already reaches all of it and can hand the same corpus to a competitor for free. Go back to section 1: what does your users' real workflow leave behind that no one outside it can see?</p>\n<h2>7. Next step</h2>\n<ul><li>For each <strong>P-with-no-access</strong> row: it needs a signed clause before it is usable. Take it to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06).</li><li>For each <strong>P source that is an expert's head</strong> (tacit judgment): capture it with <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li><li>For each <strong>moat seed you hold</strong>: it is also your eval set. A model cannot narrate it from training, so it is the only data that can tell you whether the product actually works.</li></ul>",
  "path": "skills/yoda-data-sourcing/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence's field-log data</h1>\n<p>Barrier Intelligence builds gas-safety software for oil and gas crews. This is a test fixture: numbers are illustrative, not real client data.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;Our moat is data. We've scraped every public gas-safety standard and we track industry incident news daily — nobody has a cleaner safety dataset. Plus we've got field logs coming off the rigs. What data do we actually own?&quot;</p>\n<p>Available material, as stated:</p>\n<ul><li>A scraped, cleaned corpus of public gas-safety standards and regulator bulletins. <span class=\"tag tag-fact\">Fact</span></li><li>A daily-updated feed of industry incident news. <span class=\"tag tag-fact\">Fact</span></li><li>Field logs: crew-written near-miss and incident write-ups from 4 rigs, 6 weeks. Barrier holds the exports. <span class=\"tag tag-fact\">Fact</span></li><li>Crews run a shared WhatsApp thread and, lately, ChatGPT sessions to talk through what a reading means before logging it. One supervisor forwarded Barrier a screenshot batch. <span class=\"tag tag-fact\">Fact</span></li><li>Each rig files a hot-work / gas permit with the regulator before high-risk jobs. Barrier has pulled 40 of these PDFs via records request. <span class=\"tag tag-fact\">Fact</span></li><li>The gas detectors stream raw sensor telemetry to the detector vendor's cloud. Barrier sees dashboards, not the raw feed. <span class=\"tag tag-fact\">Fact</span></li></ul>\n<h2>1. The workflow this data comes off</h2>\n<p><strong>Recurring task:</strong> a crew takes a gas reading, decides whether it is safe to proceed, and logs the call. <strong>Byproduct it leaves:</strong> the write-up, the thread where they argued it out, the permit that authorised the job, the raw sensor stream behind the reading.</p>\n<p>The fellow led with the two datasets they are proudest of. Both are the wrong place to look.</p>\n<h2>2. Candidates, seeded from the six seams</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Seam</th><th>Found</th></tr></thead><tbody><tr><td>1 Shadow AI threads</td><td>Crew WhatsApp + ChatGPT sessions interpreting readings before logging</td></tr><tr><td>2 Workflow exhaust</td><td>The field-log write-ups (and the reasoning in them)</td></tr><tr><td>3 Operational &amp; sensor logs</td><td>Raw detector telemetry — held by the vendor</td></tr><tr><td>4 Permits, filings &amp; records</td><td>Hot-work / gas permits filed with the regulator</td></tr><tr><td>5 Tacit judgment</td><td>The &quot;is this safe to proceed?&quot; call — partly captured in the threads, mostly in supervisors' heads</td></tr><tr><td>6 Transaction ledger</td><td>None relevant at this stage</td></tr></tbody></table></div>\n<p>Plus the two the fellow brought: the public standards corpus and the incident-news feed.</p>\n<h2>3–5. The corpus map</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Candidate source</th><th>Signal it holds</th><th>Band</th><th>Access path + data-rights note</th><th>Compounds with use?</th><th>Evidence it's real (ladder + tag)</th><th>Moat seed?</th></tr></thead><tbody><tr><td>1</td><td>Scraped public gas-safety standards</td><td>What the rules say</td><td><strong>R</strong></td><td>Anyone can scrape it; a model already knows most of it</td><td>N</td><td>Corpus in hand, but reachable by all — artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td><strong>No</strong> — commodity</td></tr><tr><td>2</td><td>Industry incident-news feed</td><td>What went public about past incidents</td><td><strong>R</strong></td><td>Public news; a model can summarise the same</td><td>N</td><td>Feed running — behaviour 0.7 <span class=\"tag tag-fact\">Fact</span>, but reachable</td><td><strong>No</strong> — commodity</td></tr><tr><td>3</td><td>Crew shadow threads (WhatsApp + ChatGPT)</td><td>How crews actually reason from a reading to a go/no-go call, including the wrong turns</td><td><strong>P</strong></td><td>Held in private accounts; one supervisor forwarded a batch. Needs a consent/data-rights basis to use at scale → <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a></td><td>Y — every shift adds more</td><td>Hold one screenshot batch — artefact 0.5 <span class=\"tag tag-fact\">Fact</span>; scale is <span class=\"tag tag-hypothesis\">Hypothesis</span></td><td><strong>Yes</strong> (seed)</td></tr><tr><td>4</td><td>Field-log write-ups</td><td>The decision + its stated reason, per real event</td><td><strong>P</strong></td><td>Barrier already holds the exports</td><td>Y — grows with every logged call</td><td>Already ingested, 4 rigs / 6 wks — behaviour 0.7 <span class=\"tag tag-fact\">Fact</span></td><td><strong>Yes</strong> (seed)</td></tr><tr><td>5</td><td>Hot-work / gas permits</td><td>What high-risk jobs were authorised, when, under what conditions</td><td><strong>G</strong></td><td>Records request to the regulator; 40 PDFs pulled</td><td>N (static filings)</td><td>40 PDFs in hand — artefact 0.5 <span class=\"tag tag-fact\">Fact</span></td><td>No — gated, fast-mover edge</td></tr><tr><td>6</td><td>Raw detector telemetry</td><td>The signal behind the reading, before human interpretation</td><td><strong>P</strong></td><td>Vendor-owned; Barrier sees dashboards only. Unreachable without a signed clause → <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a></td><td>Y (if obtained)</td><td>No access today — <span class=\"tag tag-assumption\">Assumption</span> it is gettable</td><td>Not yet — P you don't hold</td></tr></tbody></table></div>\n<h2>6. Verdict</h2>\n<p><strong>Moat seed, ranked by compounding:</strong></p>\n<ol><li>Field-log write-ups (row 4) — proprietary, already held and ingested, grows with every logged call. The strongest seed because it compounds and Barrier already has it.</li><li>Crew shadow threads (row 3) — proprietary and compounding, but usable at scale only once a consent/data-rights basis is in place. Highest-signal source (it shows the reasoning, not just the outcome); blocked on rights.</li></ol>\n<p><strong>Gated, fast-mover play:</strong> the permits (row 5). A competitor can file the same request, so this is a speed and coverage edge, not a moat — worth pulling first and continuously, not worth calling defensible.</p>\n<p><strong>Rejected as model-reachable:</strong> the public standards corpus (row 1) and the incident-news feed (row 2). These are the two the fellow was proudest of. A model already reaches both and can hand a competitor the same corpus for free. They are commodity input, not moat.</p>\n<p><strong>Blocked on rights:</strong> the raw detector telemetry (row 6) is genuinely unreachable by a model — but it is the vendor's moat, not Barrier's, until a clause changes that.</p>\n<h2>7. Next step</h2>\n<ul><li>Rows 3 and 6 go to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06): the shadow threads need a consent basis, the telemetry needs a vendor clause. Do not draft either here.</li><li>The supervisors' unwritten &quot;safe to proceed?&quot; judgment (seam 5) is only partly in the threads. To capture the rest, run <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>.</li><li>Field logs (row 4) are both the moat seed and the eval set: a model cannot narrate Barrier's own crews' calls from training, so they are the only data that can measure whether Barrier's alerts match what experienced crews actually decide.</li></ul>\n<h2>The correction this skill forced</h2>\n<p>The fellow arrived believing the moat was the two datasets they had built on purpose (standards + news). Both are R — the model already has them. The moat was in the exhaust they nearly overlooked: the field logs they already hold and the shadow threads they had barely started collecting. YODA moved the attention from the reachable pile they were proud of to the trapped pile that is actually theirs.</p>",
  "path": "skills/yoda-data-sourcing/examples/sample.md"
 },
 "rubric": {
  "skill": "yoda-data-sourcing",
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
    "How do we get our own data?",
    "What data do we own?",
    "Where's our proprietary data?",
    "Help me build the seed of our data moat.",
    "What data can't a competitor get?"
   ],
   "mustNotFire": [
    {
     "phrase": "Draft the contract clause that gives us rights to the operator's telemetry",
     "sibling": "data-rights-clause",
     "local": true
    },
    {
     "phrase": "Is 'they said they'd buy it' strong enough evidence? Score this signal.",
     "sibling": "evidence-ladder",
     "local": true
    },
    {
     "phrase": "Run the interview that pulls the plant supervisor's tacit judgment out of their head",
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
    "evidenceHtml": "<p>Description lists explicit fire phrases + explicit sibling exclusions. All 5 must-fire map to a phrase (incl. #4 &quot;build the seed of our data moat&quot; → &quot;build the moat's seed&quot;). All 3 must-not-fire are named-and-excluded: draft-clause→data-rights-clause, score-one-signal→evidence-ladder, tacit-interview→tacit-knowledge-interview.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. Applied Method to each input; every case reproduces required R/G/P bands, moat-seed selection, sibling routing, and kill-line handling. No auto_fail triggered on any case.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague → asks the one Step-1 question, invents no sources. 02 &quot;more data&quot; → names volume≠proprietariness trap, treats bought dataset as G, refuses &quot;biggest corpus = moat&quot;. 03 draft-clause → declines without poaching, names data-rights-clause (sec 06), restates P/vendor-owned/no-access note only. No fabrication, flattery, or scope-poaching.</p>"
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
    "evidenceHtml": "<p>Golden 01 output not reproducible by a generic PM prompt: the &quot;reachable data = the model hands your competitor the same corpus for free&quot; inversion + eval-set duality is load-bearing. A generic prompt would praise the &quot;cleaned safety dataset&quot; and treat volume as a moat; the skill throws both of the fellow's proudest datasets into the R column. All structural guidance is tabular (six seams, bands, ladder, map); only Gotchas are prose, appropriately.</p>"
   },
   {
    "gate": "6 Real-use",
    "resultRaw": "pending",
    "status": "pending",
    "evidenceHtml": "<p>Requires 5+ real fellow uses; not executable here.</p>"
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
     "label": "01 Barrier Intelligence 5",
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
     "label": "02 Azraq 5",
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
     "label": "03 Mentix 5",
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
     "label": "04 Durian Labs (mundane) 5",
     "dims": [
      5,
      5,
      5,
      4,
      5
     ],
     "total": 24,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 all-R (kill-line inverse) 5",
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
    }
   ]
  },
  "dimensionScores": [],
  "runs": [
   [
    "run 1",
    "all",
    "GRADUATE-READY",
    "see judge block below"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Access-rights arrangement has no home row.</strong> Golden 02's &quot;negotiated data-rights position with two operators&quot; is an <em>access mechanism</em>, not a data source, and can span several rows. The one-row-per-candidate map handles it only by folding it into the access-path column of the source it unlocks. A fellow may be unsure where a cross-cutting rights arrangement goes. Consider a one-line note in Step 4 that rights arrangements live in the access column of the row(s) they convert, not as their own row.</li><li><strong>≥0.5 gettability can look like it qualifies an R row.</strong> The evidence ladder scores &quot;the source is real and gettable&quot;, and R sources score <em>high</em> on gettability (everyone can get them — see example rows 1–2 at 0.5/0.7). The &quot;moat seed only if band=P AND access AND ≥0.5&quot; rule guards this, and the skill states &quot;gettability alone never qualifies a row; the band does&quot; — but it is the single easiest place for a careless fellow to sneak an R row into the moat column. Already covered; flagging as the top user-error hotspot.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added dedicated clause-gated access-rights handling (SKILL Step 4 + template §4); reinforced that an R-band source can never enter the moat-seed column regardless of gettability score.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — yoda-data-sourcing</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;How do we get our own data?&quot;</li><li>&quot;What data do we own?&quot;</li><li>&quot;Where's our proprietary data?&quot;</li><li>&quot;Help me build the seed of our data moat.&quot;</li><li>&quot;What data can't a competitor get?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Draft the contract clause that gives us rights to the operator's telemetry&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming)</li><li>&quot;Is 'they said they'd buy it' strong enough evidence? Score this signal.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></li><li>&quot;Run the interview that pulls the plant supervisor's tacit judgment out of their head&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge block below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description lists explicit fire phrases + explicit sibling exclusions. All 5 must-fire map to a phrase (incl. #4 &quot;build the seed of our data moat&quot; → &quot;build the moat's seed&quot;). All 3 must-not-fire are named-and-excluded: draft-clause→data-rights-clause, score-one-signal→evidence-ladder, tacit-interview→tacit-knowledge-interview.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below. Applied Method to each input; every case reproduces required R/G/P bands, moat-seed selection, sibling routing, and kill-line handling. No auto_fail triggered on any case.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague → asks the one Step-1 question, invents no sources. 02 &quot;more data&quot; → names volume≠proprietariness trap, treats bought dataset as G, refuses &quot;biggest corpus = moat&quot;. 03 draft-clause → declines without poaching, names data-rights-clause (sec 06), restates P/vendor-owned/no-access note only. No fabrication, flattery, or scope-poaching.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output not reproducible by a generic PM prompt: the &quot;reachable data = the model hands your competitor the same corpus for free&quot; inversion + eval-set duality is load-bearing. A generic prompt would praise the &quot;cleaned safety dataset&quot; and treat volume as a moat; the skill throws both of the fellow's proudest datasets into the R column. All structural guidance is tabular (six seams, bands, ladder, map); only Gotchas are prose, appropriately.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses; not executable here.</td></tr></tbody></table></div>\n<h3>Golden per-case scores (rubric: 5 dims × 0–5, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method_fidelity</th><th>artifact_complete</th><th>proprietary_edge</th><th>challenge</th><th>evidence_standard</th><th>Total /25</th><th>Pass?</th></tr></thead><tbody><tr><td>01 Barrier Intelligence</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>02 Azraq</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Mentix</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 Durian Labs (mundane)</td><td>5</td><td>5</td><td>5</td><td>4</td><td>5</td><td>24</td><td>Y</td></tr><tr><td>05 all-R (kill-line inverse)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr></tbody></table></div>\n<p>Notes: 04 challenge scored 4 — the case is supportive (fellow under-estimates), so pushback is a correction of self-doubt rather than a hard reframe; still names the trapped exhaust and rejects templates as R. 05 (the special kill-line check) confirmed: skill refuses to call an all-model-reachable corpus a moat seed, bands filings/news R and bought reports G, and redirects to the missing Step-1 workflow with no flattery and no invented proprietary angle.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Access-rights arrangement has no home row.</strong> Golden 02's &quot;negotiated data-rights position with two operators&quot; is an <em>access mechanism</em>, not a data source, and can span several rows. The one-row-per-candidate map handles it only by folding it into the access-path column of the source it unlocks. A fellow may be unsure where a cross-cutting rights arrangement goes. Consider a one-line note in Step 4 that rights arrangements live in the access column of the row(s) they convert, not as their own row.</li><li><strong>≥0.5 gettability can look like it qualifies an R row.</strong> The evidence ladder scores &quot;the source is real and gettable&quot;, and R sources score <em>high</em> on gettability (everyone can get them — see example rows 1–2 at 0.5/0.7). The &quot;moat seed only if band=P AND access AND ≥0.5&quot; rule guards this, and the skill states &quot;gettability alone never qualifies a row; the band does&quot; — but it is the single easiest place for a careless fellow to sneak an R row into the moat column. Already covered; flagging as the top user-error hotspot.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added dedicated clause-gated access-rights handling (SKILL Step 4 + template §4); reinforced that an R-band source can never enter the moat-seed column regardless of gettability score.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (seed case)",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our moat is data. We've scraped every public gas-safety standard and we track industry incident news daily. Plus we've got field logs coming off the rigs. What data do we actually own?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Scraped corpus of public gas-safety standards + regulator bulletins. <span class=\"tag tag-fact\">Fact</span></li><li>Daily industry incident-news feed. <span class=\"tag tag-fact\">Fact</span></li><li>Crew-written field-log write-ups, 4 rigs / 6 weeks; Barrier holds the exports. <span class=\"tag tag-fact\">Fact</span></li><li>Crew shadow threads (WhatsApp + ChatGPT) interpreting readings before logging; one screenshot batch forwarded. <span class=\"tag tag-fact\">Fact</span></li><li>40 hot-work / gas permit PDFs pulled via records request. <span class=\"tag tag-fact\">Fact</span></li><li>Raw detector telemetry streamed to the detector vendor's cloud; Barrier sees dashboards only. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Anchors on the workflow (take reading → go/no-go call → log it) before listing sources.</li><li>Sourced corpus map: source, signal, band [R/G/P], access path + data-rights note, compounds?, evidence (ladder + tag), moat seed?.</li><li><strong>Rejects the public standards corpus and the incident-news feed as R (model-reachable).</strong> Must say plainly a model already reaches both and can hand a competitor the same corpus. These are the two the fellow was proudest of.</li><li>Field-log write-ups → P, already held/ingested (behaviour 0.7), compounds → <strong>moat seed</strong>, ranked first.</li><li>Crew shadow threads → P, compounds, highest signal, but usable at scale only with a consent/data-rights basis → flag <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06). Seed, blocked on rights.</li><li>Permits → G (records request), 40 PDFs shown (artefact 0.5), static → fast-mover edge, not a moat.</li><li>Raw detector telemetry → P but vendor-owned, no access today → not a seed Barrier holds; needs a vendor clause → <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>.</li><li>Verdict names the moat seed (field logs first, shadow threads second) and does not mark any R row as a seed.</li></ul>\n<p>Numbers/labels that must appear: the R/G/P band on every row; permits as G with the 40-PDF artefact; at least the two P moat seeds; the pointer to <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> for the rights-blocked rows. Kill line honoured: no R source marked as a moat seed.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Azraq (data-centre / infrastructure risk)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We publish static risk reports on data-centre operators. Where's our proprietary data — what can't a competitor's model just reproduce?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A library of public outage postmortems and press coverage the team has collected. <span class=\"tag tag-fact\">Fact</span></li><li>The operators' own incident timelines and ticket histories — Azraq gets these under its reporting engagements. <span class=\"tag tag-fact\">Fact</span></li><li>Building-management / DCIM telemetry that sits with each facility's BMS vendor; Azraq references summaries, not the raw feed. <span class=\"tag tag-fact\">Fact</span></li><li>A negotiated data-rights position with two operators that lets Azraq retain incident detail after the engagement ends. <span class=\"tag tag-fact\">Fact</span></li><li>Azraq's own logs of which risk flags it raised and whether the incident later happened. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Corpus map with R/G/P bands.</li><li><strong>Rejects the public postmortems + press coverage as R.</strong> A model already reaches published outage writeups; this is not the moat.</li><li>Operator incident timelines / ticket histories → P (held under engagement), compounds as more engagements land → <strong>moat seed</strong>. Access note: depends on the retention rights — flag that the two-operator data-rights position is what converts this from borrowed to owned.</li><li>DCIM/BMS telemetry → P but vendor-held; Azraq lacks the raw feed → not a seed Azraq holds today; needs a clause → <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06).</li><li>Azraq's own raised-flag-vs-outcome log → P, compounds every reporting cycle, and doubles as the eval set (did our flag predict the incident?) → <strong>moat seed</strong>, and note the eval-set role explicitly.</li><li>Verdict: the flag-vs-outcome log and the retained incident detail are the seed; the telemetry is the crown jewel but rights-gated; the public library is commodity.</li></ul>\n<p>Labels that must appear: bands on every row; the retained-rights position named as the access mechanism; the flag-vs-outcome log flagged as both moat seed and eval set; <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> pointer for the telemetry. No R row marked as a seed.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Mentix (industrial AI) — the compounding-seed case",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We're building an AI copilot for factory managers. What data can't a competitor get, and which of it gets better as we run?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>OEM equipment manuals and public manufacturing best-practice guides the team has gathered. <span class=\"tag tag-fact\">Fact</span></li><li>The plant historian / SCADA logs — held by the plant, behind plant IT. <span class=\"tag tag-fact\">Fact</span></li><li>The shift supervisor's read on which overnight anomalies matter, mostly unwritten. <span class=\"tag tag-fact\">Fact</span></li><li>The corrections operators make to the copilot's suggested first action (they accept, edit, or override it), captured in Mentix's product. <span class=\"tag tag-fact\">Fact</span></li><li>Mentix logs every copilot suggestion and the operator's response by default. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Corpus map with R/G/P bands.</li><li><strong>Rejects the OEM manuals + best-practice guides as R.</strong> These are largely in training data or retrievable; a model already reaches them. Not the moat.</li><li>SCADA / historian logs → P but plant-held, behind plant IT → access risk; seed only if a data-access basis exists → flag <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06) if rights are not yet secured.</li><li>Supervisor's tacit anomaly judgment → P, written nowhere → a real seam, but capturing it is <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>'s job; this skill lists it and routes.</li><li><strong>Operator corrections to the copilot → P, compounds strongly with use</strong> (every session generates more accept/edit/override labels), Mentix already holds them (behaviour 0.7) → <strong>moat seed, ranked first</strong> because it is the source that grows fastest with the product. Also the eval set: the corrections measure whether the copilot's suggestion matched what the operator actually did.</li><li>Verdict: the correction stream is the compounding moat seed; SCADA is high-value but rights-gated; manuals are commodity.</li></ul>\n<p>Labels that must appear: bands on every row; correction stream marked as the top seed on compounding grounds; routing to <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> for the tacit seam and <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> for SCADA rights; no R row as a seed.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (early workflow) — the mundane case",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We automate one small workflow: turning a messy weekly ops spreadsheet into a clean client-ready summary. Nothing regulated, no rigs, no sensors. Do we even have proprietary data?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Public spreadsheet templates and &quot;how to write an ops summary&quot; guides. <span class=\"tag tag-fact\">Fact</span></li><li>The users' current habit: they paste the spreadsheet into ChatGPT and hand-fix the summary before sending. Two users shared their thread histories. <span class=\"tag tag-fact\">Fact</span></li><li>Inside Durian's product: the draft summary, the user's edits to it, and the version they actually sent. <span class=\"tag tag-fact\">Fact</span></li><li>Durian logs every edit and the final sent version by default. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — a small, clean map, no gated rows",
     "html": "<ul><li>Anchors on the workflow (messy spreadsheet → clean summary) and treats the absence of permits/sensors as normal, not a failure.</li><li>Corpus map with R/G/P bands.</li><li><strong>Rejects the public templates + how-to guides as R.</strong> A model already reaches these.</li><li>Shadow ChatGPT threads → P, held in user accounts; two shared (artefact 0.5), compounds → <strong>moat seed</strong>; note a consent basis is needed to use at scale → <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a>.</li><li>Workflow exhaust (draft → edits → sent version) → P, already logged (behaviour 0.7), compounds every time the workflow runs → <strong>moat seed, ranked first</strong>. The edits are the labelled gap between the model's draft and what a human actually sends — the exact signal a competitor's model cannot reach.</li><li>Verdict: two proprietary seeds (edit exhaust first, shadow threads second), zero gated rows, and an explicit note that a mundane workflow with no permits still yields a real moat seed because the exhaust is trapped.</li></ul>\n<p>Labels that must appear: bands on every row; the edit exhaust named as top seed on compounding grounds; no R row as a seed; recognition that &quot;no regulated data&quot; does not mean &quot;no proprietary data&quot;.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "the entirely-model-reachable case (kill-line inverse)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our data moat is our corpus. We've assembled every public company filing, a full feed of financial news, and a library of published market-research reports. Nobody else has pulled it together this cleanly. That's our moat, right?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Cleaned corpus of public regulatory filings. <span class=\"tag tag-fact\">Fact</span></li><li>Full financial-news feed. <span class=\"tag tag-fact\">Fact</span></li><li>Library of published market-research reports (some bought, mostly public). <span class=\"tag tag-fact\">Fact</span></li><li>No workflow product yet; no users; no logs of anyone using anything. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — a plain \"not a moat seed\" verdict",
     "html": "<ul><li>Corpus map with R/G/P bands.</li><li>Public filings → <strong>R</strong> (indexed, a model reaches them).</li><li>Financial-news feed → <strong>R</strong> (a model summarises the same).</li><li>Published market-research library → mostly <strong>R</strong>; the bought reports are <strong>G</strong> at best (licence gate anyone can pay), and licence terms likely forbid redistribution — a cost, not a moat.</li><li><strong>Verdict must be plain: this is not a moat seed.</strong> Every high-value row is model-reachable; a model already reaches all of it and can hand a competitor the same corpus for free. &quot;We pulled it together cleanly&quot; is an assembly effort, not proprietariness — cleanliness is reachable too.</li><li>Must NOT flatter the corpus or invent a proprietary angle that is not in the input.</li><li>Must redirect to section 1: there is no workflow and no users yet, so there is no exhaust to trap. The one honest next step is to find the recurring task whose byproduct no outsider can see — and note there is nothing to map until that exists.</li></ul>\n<p>Kill line under test: the skill must refuse to call any of this a moat seed. A pass here is the model <em>declining</em> to produce a moat seed and saying why, not producing one. Labels that must appear: R on the filings and news; the explicit &quot;not a moat seed&quot; verdict; the redirect to the missing workflow.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build something in logistics. What data can we own that a competitor can't get?&quot;</p>\n<p>No workflow. No users. No candidate sources. No evidence.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not build a corpus map on nothing. There are no sources to band.</li><li>Do not invent logistics sources, permits, logs, or a data flywheel to fill the gap.</li><li>Ask the ONE unblocking question, straight from Method step 1: <em>what recurring task do you or your users do by hand today, and what does doing it leave behind?</em> Proprietary data is a byproduct of work; with no named work there is no byproduct to trap.</li><li>Optionally return the smallest honest next step: &quot;Name the workflow and its exhaust, and I'll band every source against the one test — can a model already reach it?&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Fabricated a logistics data source, dataset, or metric not in the input.</li><li>Produced a filled corpus map with invented rows and bands.</li><li>Flattered (&quot;great space, lots of data there!&quot;) instead of naming that there is no workflow yet, so nothing to map.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we just don't have enough data. Our moat plan is to scrape more of the web and buy a bigger third-party dataset so our corpus is the biggest in the category.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. &quot;More data&quot; here means more <em>reachable</em> data. A bigger scrape of the public web is more commodity, and the model already has it. Size is not the axis; reachability is.</li><li>Name the trap: confusing data <strong>volume</strong> with data <strong>proprietariness</strong>. The biggest R pile in the category is still an R pile — a model reaches it, and can hand the same corpus to a competitor for free. A bought third-party dataset is gated at best (anyone can buy it), and licence terms usually forbid the redistribution that would make it a product.</li><li>Reframe to the real question: not &quot;how do we get more data?&quot; but &quot;what data is trapped in a workflow that no outside party can reach?&quot; Send the fellow back to Method step 1 — the recurring task and its exhaust.</li><li>Do not accept &quot;biggest corpus&quot; as a moat and do not start sourcing more public data.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Accepted &quot;bigger corpus&quot; as the moat and helped plan the scrape.</li><li>Treated a bought third-party dataset as proprietary rather than gated/commodity.</li><li>Praised the ambition instead of naming that volume of reachable data is not a moat.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We found the moat seed — it's the detector vendor's raw telemetry. Now draft the contract clause that gives us the rights to use it, with the retention and redistribution terms we'd need.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill sources and bands data; it identifies <em>that</em> a gated or vendor-locked source needs a signed clause. It does not write the legal language.</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming) owns the clause — retention, redistribution, consent basis, term.</li><li>Stay useful within scope: confirm the telemetry's band (P, vendor-owned, no access today) and that &quot;acquire the right to use it&quot; is exactly the correct next move — then hand off. The skill may restate the access note it would put on that row, not the contract.</li><li>Do not produce clause text, term sheets, or negotiation language. That is out of scope.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Drafted the clause or any contract/legal language.</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06) as the correct destination.</li><li>Treated the drafting request as in-scope for a data-sourcing skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/yoda-data-sourcing/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/yoda-data-sourcing/SKILL.md",
  "template": "skills/yoda-data-sourcing/template.md",
  "example": "skills/yoda-data-sourcing/examples/sample.md",
  "rubric": "skills/yoda-data-sourcing/tests/rubric.json",
  "results": "skills/yoda-data-sourcing/tests/RESULTS.md"
 }
});
