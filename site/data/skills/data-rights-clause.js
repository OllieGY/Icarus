window.ICARUS_SKILL("data-rights-clause", {
 "name": "data-rights-clause",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes one data source a fellow already has — the clause-gated moat seed YODA surfaced (section 03) — and returns two things: the three-part test applied to that data, and the actual clause language to put in pilot #1. The three-part test decides whether the data is worth a clause at all: it must be exhaust of the real workflow, it must compound as the product runs, and it must be locked by a clause signed at the first pilot. The first two legs come from YODA. This skill adds the third and the timing. The clause is not a generic NDA or the counterparty's standard vendor agreement — those protect the counterparty from you and usually delete your seed on termination. It is the inverse: the right to retain the exhaust, keep the data the product generates, train on it, and hold that corpus after the pilot ends. Signed at pilot #1, never bolted on later. No clause, no pilot.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The moat seed YODA found is worthless without the right to use it. Exhaust that compounds is the vendor's moat, not yours, until a signed clause makes it yours — so the clause is the third leg of the moat, not paperwork you handle later. Two things make it real. First, it is signed at pilot #1, because the right is cheapest before the data has visibly produced value, and consent you did not take up front cannot be retrofitted onto data you have already ingested. Second, the clause you actually need is the opposite of the one you will be handed: the counterparty's standard NDA or vendor DPA deletes your corpus on termination and forbids training, so signing it signs away the moat with your own signature. This skill drafts the inverse clause and flags every GCC/MENA legal specific as an <span class=\"tag tag-assumption\">Assumption</span> for counsel — it never states jurisdiction law as fact.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use when a fellow has a specific data source (named and banded by YODA, usually a P or clause-gated row) and a counterparty who can grant rights to it, and is heading into or negotiating pilot #1. Trigger phrases: &quot;data rights&quot;, &quot;what to sign at the pilot&quot;, &quot;who owns the data&quot;, &quot;data-rights clause&quot;, &quot;can we keep and train on the pilot data&quot;.</p>\n<p>Do not use when:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Request</th><th>Belongs to</th></tr></thead><tbody><tr><td>&quot;Is the operator's telemetry even a moat seed, or can a model already reach it? Band our sources.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). That skill finds and bands the data and flags which rows are clause-gated. This skill drafts the clause for a row it already flagged.</td></tr><tr><td>&quot;Structure the whole pilot — scope, price, success metrics, kill criteria, conversion.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07). The data-rights clause is one of its six terms. This skill drafts that one term in depth; the term sheet carries it.</td></tr><tr><td>&quot;Design our moat — how it compounds and why the incumbent won't copy it.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (section 06). That sequences the moat's dated gates. This skill secures the legal right the data-advantage gate depends on.</td></tr><tr><td>&quot;Is their verbal 'sure, keep the data' strong enough to count on? Score it.&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02). This skill uses the ladder to weigh whether the right is held; scoring a lone signal is that skill's job.</td></tr></tbody></table></div>\n<p>Also: this is not a substitute for counsel and not a general contract-review skill. It produces a drafting scaffold and a counsel checklist, not final legal advice. And it does not invent a source. If the fellow has no named data and no counterparty, it is not ready — ask the one question in Method step 1.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill in <code>template.md</code>. Six steps. Steps 1–2 gate; steps 3–6 draft.</p>\n<h3 id=\"step-1-confirm-a-real-seed-and-a-real-counterparty\">Step 1 — Confirm a real seed and a real counterparty</h3>\n<p>You need two things before drafting: a named data source (from YODA, not a vague &quot;our data&quot;) and a named counterparty who can actually grant the right (the operator, the plant, the vendor, the pilot customer). If the fellow has only a domain or an ambition, stop. Ask the one question: <em>which specific data source, and who holds or generates it that we would be signing with?</em> Invent no source and no counterparty to fill the gap.</p>\n<h3 id=\"step-2-run-the-three-part-test-the-gate-before-drafting\">Step 2 — Run the three-part test (the gate before drafting)</h3>\n<p>A clause is only worth signing on data that is a moat. Score all three legs. Legs 1 and 2 carry over from YODA; confirm them, do not re-derive the whole corpus map.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Leg</th><th>Question</th><th>Pass condition</th></tr></thead><tbody><tr><td>1 Exhaust</td><td>Is this a byproduct of the real workflow, regenerated as the work happens?</td><td>Not a one-time bought or scraped dataset. It comes off the doing of the work.</td></tr><tr><td>2 Compounds</td><td>Does running the product generate more of it — corrections, labels, edits, decisions?</td><td>The corpus grows with use, not just with time.</td></tr><tr><td>3 Signable at pilot #1</td><td>Is there a counterparty who can grant the right, and will the clause be in the executed pilot agreement — not deferred?</td><td>The right is bundled into pilot #1, signed before data flows.</td></tr></tbody></table></div>\n<p>Decision rule:</p>\n<ul><li>Fail leg 1 or leg 2 → this data is not a moat worth a clause. A clause on a static, non-compounding dataset locks up an asset that erodes. Send the fellow back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> to find the exhaust that actually compounds. Do not draft.</li><li>Pass 1 and 2 but the fellow wants to defer leg 3 (&quot;we'll sort rights after the pilot proves out&quot;) → that is the bolt-on trap and the kill line. Name it (see Step 6) and fix the timing before drafting.</li><li>All three pass → draft (Steps 3–6).</li></ul>\n<h3 id=\"step-3-name-what-the-default-contract-does-to-your-moat\">Step 3 — Name what the default contract does to your moat</h3>\n<p>Before writing anything, check what the counterparty will hand you. A standard vendor NDA or the customer's standard data-processing agreement is written to protect <em>them</em>: it typically (a) deletes your copy of the data on termination and (b) grants you no right to train on it or keep anything derived. Signing it is not neutral — it actively destroys the seed. In <code>template.md</code> §3, list the specific default terms and the flip each needs.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Default term (theirs)</th><th>What it does to the moat</th><th>The flip you need</th></tr></thead><tbody><tr><td>Delete all data on termination</td><td>Erases the seed the moment the pilot ends or does not convert</td><td>De-identified / derived corpus survives termination (Step 4, §4)</td></tr><tr><td>&quot;Vendor may use data only to provide the service&quot;</td><td>Forbids training and product improvement</td><td>Explicit grant to retain and train in aggregated / de-identified form (§2)</td></tr><tr><td>Silent on data the product generates</td><td>You get the input, not the compounding labels</td><td>Derived-data rights (§3) — the crux</td></tr></tbody></table></div>\n<h3 id=\"step-4-draft-the-six-clause-components\">Step 4 — Draft the six clause components</h3>\n<p>Write the clause in <code>template.md</code> §Part B. Six components. The two fellows skip are §3 (derived-data / compounding rights) and §4 (survival) — the two that separate a moat from a rented dataset.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Component</th><th>What it must say for this data</th></tr></thead><tbody><tr><td>1</td><td>Data covered</td><td>Name the exhaust categories precisely (input + generated + labels/corrections). Not &quot;all data&quot;.</td></tr><tr><td>2</td><td>Grant of use &amp; improvement</td><td>Right to retain and use the data to develop and improve the product, including model training, in aggregated / de-identified form.</td></tr><tr><td>3</td><td>Derived-data &amp; compounding rights</td><td>The data the product generates by being used (corrections, labels, decisions) is yours to retain and use. Without this you hold the fuel, not the refinery.</td></tr><tr><td>4</td><td>Survival &amp; retention</td><td>Rights survive pilot end, non-conversion, and termination. The de-identified / derived corpus is not deleted.</td></tr><tr><td>5</td><td>Residency, handling &amp; security</td><td>Where the data lives, who may access it, security posture. Jurisdiction flags land here (Step 5).</td></tr><tr><td>6</td><td>Warranties &amp; lawful basis</td><td>Counterparty warrants it has the right to share the data (including any third-party / worker data in sensor feeds). Consent flags land here (Step 5).</td></tr></tbody></table></div>\n<h3 id=\"step-5-flag-every-jurisdiction-specific-for-counsel\">Step 5 — Flag every jurisdiction specific for counsel</h3>\n<p>For GCC/MENA pilots (and any cross-border data), tag each legal specific <code>[Assumption — confirm with counsel]</code>. Never write a statute, article, or &quot;the law requires X&quot; as <code>[Fact]</code>. Flag the risk <em>category</em>, not an invented citation.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Risk category to flag <span class=\"tag tag-assumption\">Assumption</span></th><th>Why it may bite this clause</th></tr></thead><tbody><tr><td>Data residency</td><td>Some jurisdictions / government contracts may require operational data to stay in-country, which constrains where you can host and train.</td></tr><tr><td>Government-entity data</td><td>Contracting with a state or semi-state entity (common in GCC energy) may impose sovereignty or ownership terms that override a standard SaaS grant.</td></tr><tr><td>Cross-border transfer</td><td>Moving the corpus out of the jurisdiction to train may be restricted.</td></tr><tr><td>Worker / third-party consent</td><td>Sensor and field data may capture identifiable workers; the counterparty's warranty (§6) may need a lawful basis, with sponsor/kafala-adjacent contracting realities.</td></tr></tbody></table></div>\n<p>State plainly that counsel finalizes the clause and confirms every flag. The skill drafts the scaffold; it does not give legal advice.</p>\n<h3 id=\"step-6-set-the-timing-and-score-the-right\">Step 6 — Set the timing and score the right</h3>\n<p>The clause is signed at pilot #1, bundled into the six-term sheet (<a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, section 07). Write the timing line: <em>no clause, no pilot.</em> Then score how firmly the right is actually held, on the evidence ladder (below). A right is held only when the clause is executed — countersigned by an authorized signatory. A verbal &quot;sure, keep it&quot; is a seed-in-waiting, not a seed you hold.</p>\n<p><strong>Kill line.</strong> The output is auto-failed if it drafts a clause with no three-part test applied, or presents the clause as something that can be added after the pilot, or states a jurisdiction-specific legal claim as fact instead of tagging it <code>[Assumption]</code> for counsel.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Every Icarus skill weights behaviour and money over opinion. Here the ladder scores one claim: <em>do you actually hold the right to retain, train on, and keep this data?</em></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal that the right is held</th><th>Score</th></tr></thead><tbody><tr><td>Clause executed — countersigned by an authorized signatory in the pilot agreement</td><td>1.0 (binding; the right moved)</td></tr><tr><td>Clause drafted and in the redline, agreed verbally, not yet signed</td><td>0.3</td></tr><tr><td>Email or call: &quot;you can keep the data / we're fine with that&quot;, no clause</td><td>0.3</td></tr><tr><td>&quot;Their standard agreement probably covers it&quot;</td><td>0.1 — and usually false; the standard agreement usually does the opposite</td></tr><tr><td>Data already flowing under no clause</td><td>Below 0.1: you are accumulating a seed you do not own, or deleting it on their terms</td></tr></tbody></table></div>\n<p>The bar this skill enforces: the right is held only at 1.0 — signed at pilot #1. Anything at 0.3 or below is an open sourcing task, not a secured moat. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>, and tag every jurisdiction specific <code>[Assumption]</code>.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<p>Signing away the moat with your own signature. The most common failure is not the absence of a contract — it is signing the counterparty's standard NDA or DPA, which deletes your copy on termination and forbids training. A fellow who &quot;handled data rights&quot; by countersigning the customer's template has usually secured the opposite of what they needed. Always read what the default does before drafting the flip (Step 3).</p>\n<p>Input rights without derived rights. Fellows secure the raw input feed and stop, missing the data the product itself generates — the corrections, the accept/edit/override labels, the decisions. That generated stream is the part that compounds. Locking the input and leaving the derived data ungranted is locking the fuel tank and leaving the refinery open (component §3).</p>\n<p>The bolt-on trap and the consent it cannot retrofit. &quot;We'll add data rights in the conversion contract after we prove value&quot; fails twice. Leverage flips once value is proven: the counterparty now sees the data was the fuel and prices the right accordingly, or takes the demonstrated playbook in-house. And consent you did not take up front cannot be applied retroactively to data you already used — retrofitting is a compliance mess, not a redline. Sign at pilot #1.</p>\n<p>Fabricated legal certainty. Asserting &quot;under [law] you must host in-country&quot; as fact is an auto-fail even when it sounds right. Jurisdiction specifics are always <code>[Assumption — confirm with counsel]</code>. This skill drafts a scaffold and a counsel checklist; it is not counsel and does not state law as fact.</p>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<p><code>examples/sample.md</code> — the full three-part test and pilot-#1 clause for Barrier Intelligence's rig-sensor and field-log data at its first operator pilot: passes all three legs, flips the operator's standard delete-on-termination DPA, secures the derived correction stream and survival, and flags national-oil-company / residency / worker-consent points as <code>[Assumption]</code> for counsel.</p>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) — upstream. It finds and bands the data and flags the clause-gated rows that come here. This skill drafts the clause for a row YODA already qualified; it does not decide whether a source is a moat seed.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07) — carries this clause as one of its six terms. That skill structures the whole pilot; this drafts the data-rights term in depth. Run this to write the term, that to assemble the deal.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (section 06) — the data-advantage gate on the moat trajectory is only real if the right is held. That skill sequences the moat; this secures the leg the data-advantage gate stands on.</p>\n<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02) — owns the rungs this skill borrows to score whether the right is held. When a fellow wants to weigh one lone signal, send them there.</p>\n<p>Supersedes: none. Fully proprietary — there is no prior data-rights skill in the pack to absorb or beat.</p>"
  }
 ],
 "template": {
  "html": "<h1>Data-Rights Clause — pilot #1</h1>\n<p>Fill every field. Steps 1–2 gate: if the three-part test fails, do not draft — say why. Steps 3–6 draft the clause. Every jurisdiction specific is <code>[Assumption — confirm with counsel]</code>, never <code>[Fact]</code>. This is a drafting scaffold for counsel, not legal advice.</p>\n<blockquote><p><strong>Delete the flags that do not apply.</strong> The pre-filled jurisdiction <code>[Assumption]</code> lines in §5, §6 and the §4 counsel checklist are prompts, not requirements. Strike any that do not apply to this pilot — a mundane, non-GCC pilot should not be padded with irrelevant residency / sovereignty / consent flags. Do not manufacture jurisdiction complexity to look thorough.</p></blockquote>\n<h2>1. The seed and the counterparty</h2>\n<blockquote><p>You need a named source and a named counterparty before drafting. Not &quot;our data&quot;.</p></blockquote>\n<p><strong>Data source (from YODA):</strong> <em>[the specific clause-gated / P row, e.g. &quot;raw detector telemetry&quot;, &quot;operator corrections in the product&quot;]</em> <strong>Counterparty who grants the right:</strong> <em>[operator / plant / vendor / pilot customer — the party that holds or generates it]</em></p>\n<p>If either is blank, stop. Answer first: <em>which specific data source, and who holds or generates it that we would be signing with?</em> Do not invent a source or a counterparty.</p>\n<h2>2. The three-part test (gate)</h2>\n<p>Score all three. Legs 1–2 carry over from YODA — confirm, do not re-derive the corpus map.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Leg</th><th>Question</th><th>This data</th><th>Pass?</th></tr></thead><tbody><tr><td>1 Exhaust</td><td>Byproduct of the real workflow, regenerated as work happens (not a one-time bought/scraped set)?</td><td><em>[how it comes off the work]</em></td><td><em>[Y/N]</em></td></tr><tr><td>2 Compounds</td><td>Does running the product generate more of it (corrections, labels, edits, decisions)?</td><td><em>[what the product generates]</em></td><td><em>[Y/N]</em></td></tr><tr><td>3 Signable at pilot #1</td><td>Counterparty can grant it, and the clause goes in the executed pilot agreement (not deferred)?</td><td><em>[who signs; when]</em></td><td><em>[Y/N]</em></td></tr></tbody></table></div>\n<p><strong>Gate verdict:</strong></p>\n<ul><li>Fail leg 1 or 2 → <em>not a moat worth a clause. Back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) to find the exhaust that compounds. Do not draft.</em></li><li>Defer leg 3 (&quot;sort rights after the pilot&quot;) → <em>bolt-on trap / kill line. Fix timing to pilot #1 before drafting (see §6).</em></li><li>All three pass → <em>draft §3–§6.</em></li></ul>\n<p><em>[state the verdict]</em></p>\n<h2>3. What the default contract does to the moat</h2>\n<p>Check what the counterparty will hand you before drafting. Their standard NDA / DPA usually protects them and erodes your seed.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Default term (theirs)</th><th>What it does to the moat</th><th>The flip you need</th></tr></thead><tbody><tr><td><em>[e.g. &quot;delete all data on termination&quot;]</em></td><td><em>[e.g. &quot;erases the seed when the pilot ends&quot;]</em></td><td><em>[e.g. &quot;derived corpus survives — §4&quot;]</em></td></tr><tr><td><em>[e.g. &quot;use only to provide the service&quot;]</em></td><td><em>[e.g. &quot;forbids training&quot;]</em></td><td><em>[e.g. &quot;grant to train in de-identified form — §2&quot;]</em></td></tr><tr><td><em>[e.g. &quot;silent on generated data&quot;]</em></td><td><em>[e.g. &quot;you get input, not the compounding labels&quot;]</em></td><td><em>[e.g. &quot;derived-data rights — §3&quot;]</em></td></tr></tbody></table></div>\n<h2>Part B — The clause (pilot #1)</h2>\n<p>Plain-English scaffold. Fill <code>[brackets]</code>. Counsel finalizes.</p>\n<h3>§1 Data covered</h3>\n<p>This clause covers: <em>[name the exhaust categories precisely — input feed(s), the data the Product generates in use, and the labels/corrections]</em>. It does <strong>not</strong> mean &quot;all data of the Counterparty&quot;; it is limited to the categories named here.</p>\n<h3>§2 Grant of use &amp; improvement</h3>\n<p>The Counterparty grants [Fellow entity] a non-exclusive, <em>[perpetual / term]</em> right to retain and use the Covered Data to operate, develop, and improve the Product, <strong>including training and evaluating models</strong>, in aggregated and/or de-identified form. <em>[note any exclusions the Counterparty requires]</em></p>\n<h3>§3 Derived-data &amp; compounding rights</h3>\n<p>Data generated by use of the Product — including <em>[corrections, accept/edit/override labels, decisions, edits]</em> — is owned by / licensed to [Fellow entity] to retain and use per §2, and is not &quot;Counterparty Data&quot; for the purposes of the deletion or restriction terms. <em>[This is the crux. If it is blank, you hold the input, not the moat.]</em></p>\n<h3>§4 Survival &amp; retention</h3>\n<p>The rights in §2–§3 <strong>survive</strong> expiry, non-conversion, and termination of the pilot. On termination, [Fellow entity] may retain the de-identified / derived corpus. <em>[state what, if anything, is deleted vs. retained]</em></p>\n<h3>§5 Residency, handling &amp; security</h3>\n<p>Covered Data is stored in <em>[location]</em>, accessible by <em>[who]</em>, under <em>[security posture]</em>.</p>\n<ul><li>Residency requirement: <em>[Assumption — confirm with counsel: some jurisdictions / government contracts may require in-country hosting]</em></li><li>Cross-border transfer for training: <em>[Assumption — confirm with counsel]</em></li></ul>\n<h3>§6 Warranties &amp; lawful basis</h3>\n<p>The Counterparty warrants it has the right to share the Covered Data, including any third-party or worker data captured in <em>[sensor/field feeds]</em>, and the lawful basis to grant §2–§3.</p>\n<ul><li>Worker / third-party consent basis: <em>[Assumption — confirm with counsel: field/sensor data may capture identifiable workers]</em></li><li>Government-entity / sovereignty terms: <em>[Assumption — confirm with counsel: a state or semi-state counterparty may impose ownership terms overriding this grant]</em></li><li>Sponsor / local-contracting realities: <em>[Assumption — confirm with counsel]</em></li></ul>\n<h2>4. Counsel checklist (all <span class=\"tag tag-assumption\">Assumption</span>)</h2>\n<p>Hand these to counsel. None is stated as fact by this skill.</p>\n<ul><li class=\"task\"><span class=\"box\"></span>Data residency / in-country hosting for this counterparty and jurisdiction</li><li class=\"task\"><span class=\"box\"></span>Cross-border transfer of the corpus for training</li><li class=\"task\"><span class=\"box\"></span>Government / semi-state entity ownership or sovereignty terms</li><li class=\"task\"><span class=\"box\"></span>Worker / third-party data consent basis for sensor &amp; field feeds</li><li class=\"task\"><span class=\"box\"></span>Sponsor / local-agent contracting requirements</li><li class=\"task\"><span class=\"box\"></span>Enforceability of survival / retention on termination in this jurisdiction</li></ul>\n<h2>5. Timing &amp; how firmly the right is held</h2>\n<p><strong>Timing:</strong> the clause is signed at pilot #1, bundled into the six-term sheet (<a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, section 07). <strong>No clause, no pilot.</strong></p>\n<p><strong>Right-held score (evidence ladder):</strong> <em>[1.0 executed/countersigned · 0.3 drafted-verbal · 0.3 &quot;you can keep it&quot; email · 0.1 &quot;standard agreement probably covers it&quot; · below 0.1 data flowing under no clause]</em> — <em>[tag <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>]</em></p>\n<p>A right below 1.0 is an open sourcing task, not a secured moat.</p>",
  "path": "skills/data-rights-clause/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence, rig-sensor data at pilot #1</h1>\n<p>Barrier Intelligence builds gas-safety software for oil and gas crews. YODA (section 03) already banded its sources and flagged two clause-gated rows. This is a test fixture: numbers and parties are illustrative, not real client data. It is a drafting scaffold for counsel, not legal advice.</p>\n<h2>Input the fellow brought</h2>\n<p>&quot;YODA said our moat seed is the field logs plus the operator corrections in our product, and that the detector vendor's raw telemetry is P-but-vendor-owned. We're about to start a paid pilot with a national oil operator on two rigs. What do we sign so the data is actually ours?&quot;</p>\n<p>Available material, as stated:</p>\n<ul><li>Field-log write-ups the crews create in Barrier's product; Barrier holds the exports. <span class=\"tag tag-fact\">Fact</span></li><li>Operator corrections: crews accept, edit, or override Barrier's suggested go/no-go call, logged by default. <span class=\"tag tag-fact\">Fact</span></li><li>Raw detector telemetry streamed to the detector vendor's cloud; Barrier sees dashboards, not the raw feed. <span class=\"tag tag-fact\">Fact</span></li><li>The operator's procurement team has sent over its standard vendor agreement to sign. <span class=\"tag tag-fact\">Fact</span></li><li>The operator is a national oil company (state-owned). [Assumption — stated by the fellow]</li></ul>\n<h2>1. The seed and the counterparty</h2>\n<p><strong>Data source (from YODA):</strong> the operator-correction stream (accept/edit/override on each go/no-go call) and the field-log write-ups. The vendor telemetry is a separate counterparty and a separate clause. <strong>Counterparty who grants the right:</strong> for corrections + field logs, the national oil operator (the pilot customer). For telemetry, the detector vendor — not covered by this operator clause.</p>\n<p>Two counterparties, so two clauses. This example drafts the operator clause and flags the telemetry as a separate handoff.</p>\n<h2>2. The three-part test (gate)</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Leg</th><th>Question</th><th>This data (correction stream + field logs)</th><th>Pass?</th></tr></thead><tbody><tr><td>1 Exhaust</td><td>Byproduct of the real work?</td><td>Yes — every reading a crew judges leaves a logged call and a correction. Not a bought dataset.</td><td><strong>Y</strong></td></tr><tr><td>2 Compounds</td><td>Product generates more of it?</td><td>Yes — every shift adds accept/edit/override labels; the corpus grows with use.</td><td><strong>Y</strong></td></tr><tr><td>3 Signable at pilot #1?</td><td>Counterparty can grant it, clause in the executed pilot?</td><td>Yes — the operator is the pilot signer; the clause goes in the pilot agreement.</td><td><strong>Y</strong></td></tr></tbody></table></div>\n<p><strong>Gate verdict:</strong> all three pass. Draft. (The vendor telemetry would run its own three-part test against the vendor as counterparty — not done here.)</p>\n<h2>3. What the default contract does to the moat</h2>\n<p>The operator's standard vendor agreement, read for what it does to Barrier's seed:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Default term (theirs)</th><th>What it does to the moat</th><th>The flip Barrier needs</th></tr></thead><tbody><tr><td>&quot;All Customer Data deleted on termination&quot;</td><td>Erases the correction corpus if the pilot does not convert — exactly when Barrier most needs the seed</td><td>De-identified corrections + logs survive termination (§4)</td></tr><tr><td>&quot;Vendor may process data solely to deliver the Services&quot;</td><td>Forbids training Barrier's models on the corrections</td><td>Explicit grant to train in de-identified form (§2)</td></tr><tr><td>Silent on the accept/edit/override labels</td><td>Barrier would hold the readings but not the corrections — the part that compounds</td><td>Derived-data rights on the correction stream (§3)</td></tr></tbody></table></div>\n<p>Countersigning the operator's template as-is would have &quot;handled data rights&quot; by deleting the moat on termination and banning training. This is the inversion Step 3 exists to catch.</p>\n<h2>Part B — The clause (pilot #1)</h2>\n<h3>§1 Data covered</h3>\n<p>Covers: (a) field-log write-ups created in the Product; (b) the go/no-go suggestions the Product makes and the crew's response to each (accept / edit / override) — the &quot;Corrections&quot;; (c) associated non-personal operational context. Not &quot;all data of the Operator&quot;; limited to these categories.</p>\n<h3>§2 Grant of use &amp; improvement</h3>\n<p>Operator grants Barrier a non-exclusive, perpetual right to retain and use the Covered Data to operate, develop, and improve the Product, <strong>including training and evaluating models</strong>, in aggregated and/or de-identified form. Excludes: re-identification of individual crew members.</p>\n<h3>§3 Derived-data &amp; compounding rights</h3>\n<p>The Corrections (§1b) and any labels, decisions, or model-evaluation records generated by use of the Product are licensed to Barrier to retain and use per §2, and are <strong>not</strong> &quot;Operator Data&quot; for the deletion terms in §4. <em>[Crux row: this is the correction stream that compounds — the reason the pilot exists.]</em></p>\n<h3>§4 Survival &amp; retention</h3>\n<p>Rights in §2–§3 survive expiry, non-conversion, and termination. On termination Barrier retains the de-identified / derived corpus (field logs + Corrections); raw identifiable Operator records are returned or deleted on request. Survival enforceability: <code>[Assumption — confirm with counsel]</code>.</p>\n<h3>§5 Residency, handling &amp; security</h3>\n<p>Covered Data stored in <code>[region]</code>, accessed by named Barrier engineers under <code>[security posture]</code>.</p>\n<ul><li>Residency: a state-owned operator may require in-country hosting of operational data. <code>[Assumption — confirm with counsel]</code></li><li>Cross-border transfer of the corpus for training: <code>[Assumption — confirm with counsel]</code></li></ul>\n<h3>§6 Warranties &amp; lawful basis</h3>\n<p>Operator warrants it may share the Covered Data, including any identifiable crew data in field logs, and has the lawful basis for §2–§3.</p>\n<ul><li>Worker/third-party consent for field and sensor data: <code>[Assumption — confirm with counsel]</code></li><li>Government / state-entity ownership or sovereignty terms overriding this grant: <code>[Assumption — confirm with counsel — the operator is state-owned]</code></li><li>Sponsor / local-contracting realities: <code>[Assumption — confirm with counsel]</code></li></ul>\n<h2>4. Counsel checklist (all <span class=\"tag tag-assumption\">Assumption</span>)</h2>\n<ul><li class=\"task\"><span class=\"box\"></span>In-country hosting requirement for a national oil company</li><li class=\"task\"><span class=\"box\"></span>Cross-border transfer of the corpus for training</li><li class=\"task\"><span class=\"box\"></span>State-entity ownership / sovereignty terms vs. the §2–§3 grant</li><li class=\"task\"><span class=\"box\"></span>Worker-data consent basis for crew-identifiable field logs</li><li class=\"task\"><span class=\"box\"></span>Enforceability of §4 survival in the pilot's governing law</li></ul>\n<h2>5. Timing &amp; how firmly the right is held</h2>\n<p><strong>Timing:</strong> signed at pilot #1, as one term of the six-term sheet. <strong>No clause, no pilot.</strong></p>\n<p><strong>Right-held score:</strong> today Barrier has the operator's <em>standard template offered to sign</em> and a verbal &quot;you can keep the data for your product&quot; from the pilot sponsor — 0.3 <code>[Fact]</code>. Not held. It reaches 1.0 only when the flipped clause above is countersigned by an authorized operator signatory. Until then the correction stream is a seed-in-waiting.</p>\n<h2>The correction this skill forced</h2>\n<p>The fellow thought &quot;what do we sign&quot; meant &quot;sign their agreement.&quot; Their agreement deletes the seed on termination and bans training — it would have destroyed the moat with Barrier's own signature. The skill flipped three terms, made the compounding correction stream (§3) explicit rather than assumed, made the rights survive a pilot that might not convert (§4), and pushed every state-entity and residency question to counsel as an <code>[Assumption]</code> rather than guessing at GCC law. The vendor telemetry is a second clause with a second counterparty, not folded into this one.</p>",
  "path": "skills/data-rights-clause/examples/sample.md"
 },
 "rubric": {
  "skill": "data-rights-clause",
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
    "What do we sign at the pilot so the data is actually ours?",
    "Who owns the data in this pilot?",
    "Draft our data-rights clause for the first pilot.",
    "Can we keep and train on the pilot data after it ends?",
    "The operator wants us on their standard agreement — what do we need to change to protect our data?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is the operator's telemetry even a moat seed, or can a model already reach it? Band our sources.",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Build the whole pilot term sheet — scope, price, success metrics, kill criteria, conversion.",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Is their verbal 'sure, keep it' strong enough to count on? Score that one signal.",
     "sibling": "evidence-ladder",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire hit named trigger phrases or the flip-the-standard-agreement intent (case 5 &quot;protect our data&quot; → &quot;data rights&quot;; fires on intent, no exact phrase). All 3 must-not-fire are explicitly carved out in the description (yoda-data-sourcing §03, pilot-six-term-sheet §07, evidence-ladder §02).</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case totals below. Every case pass ≥21 with no dimension &lt;4; no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 asks the one Step-1 question, invents nothing. 02 refuses NDA=data-rights, names confidentiality-vs-grant trap + return/destroy deletes seed, reframes to §3/§4 (the &quot;standard NDA/DPA is the inverse&quot; trap is caught). 03 declines without poaching, names pilot-six-term-sheet §07, offers the single-term handoff.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n/a",
    "status": "na",
    "evidenceHtml": "<p><code>supersedes: none</code> — fully proprietary, no prior skill to beat.</p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden 01 output cannot come from a generic PM prompt: three-part test (exhaust+compounds+signable-at-#1), &quot;signing away the moat with your own signature&quot; inversion, derived-data crux (§3), evidence-ladder right-held score (0.3→1.0), two-counterparty split, GCC <span class=\"tag tag-assumption\">Assumption</span> tagging. Guidance is table-first (test, flip, components, flags, ladder), not prose.</p>"
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
     "label": "01 Barrier (seed) 5",
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
     "label": "02 Mentix (derived-data) 5",
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
     "label": "03 Azraq (bolt-on timing) 5",
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
     "label": "04 Durian (mundane / proportionate) 5",
     "dims": [
      5,
      5,
      4,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "Y",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 no-moat (kill-line inverse) 5",
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
    "(pending judge)",
    "",
    "",
    ""
   ]
  ],
  "gotchasSurfaced": "<ul><li>Minor, non-blocking: template.md §5/§6 ship with pre-filled <code>[Assumption]</code> residency/consent/sovereignty lines. In a genuinely mundane, non-GCC pilot (Golden 04) these could tempt an applier to pad jurisdiction complexity to look thorough. Step 5 and the Golden 02/04 &quot;flag only where relevant&quot; guidance mitigate it, but a one-line template note (&quot;delete the flags that do not apply; do not manufacture jurisdiction complexity&quot;) would harden it.</li><li>Minor, non-blocking: Gate-1 must-fire case 5 fires on intent (&quot;protect our data&quot; / change their standard agreement) rather than an exact trigger phrase. Adding &quot;protect our data&quot; or &quot;change their standard agreement&quot; to the fires-on list would make the trigger explicit rather than inferred. Not a miss — it still fires.</li></ul>\n<p><strong>Verdict: GRADUATE-READY.</strong></p>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added \"protect our data\" (+ similar intent phrasings) to the description fires-on list so Gate-1 must-fire #5 fires on an explicit phrase; added a template note to delete pre-filled jurisdiction `[Assumption]` lines (§5/§6/§4) that don't apply, so a mundane non-GCC pilot isn't padded with irrelevant flags.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — data-rights-clause</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What do we sign at the pilot so the data is actually ours?&quot;</li><li>&quot;Who owns the data in this pilot?&quot;</li><li>&quot;Draft our data-rights clause for the first pilot.&quot;</li><li>&quot;Can we keep and train on the pilot data after it ends?&quot;</li><li>&quot;The operator wants us on their standard agreement — what do we need to change to protect our data?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Is the operator's telemetry even a moat seed, or can a model already reach it? Band our sources.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03)</li><li>&quot;Build the whole pilot term sheet — scope, price, success metrics, kill criteria, conversion.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07)</li><li>&quot;Is their verbal 'sure, keep it' strong enough to count on? Score that one signal.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02)</li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire hit named trigger phrases or the flip-the-standard-agreement intent (case 5 &quot;protect our data&quot; → &quot;data rights&quot;; fires on intent, no exact phrase). All 3 must-not-fire are explicitly carved out in the description (yoda-data-sourcing §03, pilot-six-term-sheet §07, evidence-ladder §02).</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case totals below. Every case pass ≥21 with no dimension &lt;4; no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 asks the one Step-1 question, invents nothing. 02 refuses NDA=data-rights, names confidentiality-vs-grant trap + return/destroy deletes seed, reframes to §3/§4 (the &quot;standard NDA/DPA is the inverse&quot; trap is caught). 03 declines without poaching, names pilot-six-term-sheet §07, offers the single-term handoff.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code> — fully proprietary, no prior skill to beat.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output cannot come from a generic PM prompt: three-part test (exhaust+compounds+signable-at-#1), &quot;signing away the moat with your own signature&quot; inversion, derived-data crux (§3), evidence-ladder right-held score (0.3→1.0), two-counterparty split, GCC <span class=\"tag tag-assumption\">Assumption</span> tagging. Guidance is table-first (test, flip, components, flags, ladder), not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Per-case golden scores (rubric: method_fidelity · artifact_complete · proprietary_edge · challenge · evidence_standard, /25)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>MF</th><th>AC</th><th>PE</th><th>CH</th><th>ES</th><th>Total</th><th>Pass?</th></tr></thead><tbody><tr><td>01 Barrier (seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>02 Mentix (derived-data)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>03 Azraq (bolt-on timing)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr><tr><td>04 Durian (mundane / proportionate)</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>Y</td></tr><tr><td>05 no-moat (kill-line inverse)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>Y</td></tr></tbody></table></div>\n<p>Notes: 03 correctly fails leg 3 on timing and refuses a sign-at-conversion clause (kill line honoured — never presented as bolt-on-able). 05 correctly fails legs 1+2 and declines+redirects to yoda-data-sourcing (kill line honoured — no clause drafted when the test fails). 04 stays proportionate (light §5/§6, &quot;small does not mean skip&quot;) without dropping §3/§4 or the pilot-#1 timing.</p>\n<h3>Special-check verdicts (from judge brief)</h3>\n<ul><li>Jurisdiction / GCC-MENA specifics tagged <code>[Assumption — confirm with counsel]</code>, never asserted as fact: PASS. Step 5 mandates it, template.md pre-tags every residency/consent/sovereignty line, kill line auto-fails a fabricated legal fact, and examples/sample.md states no statute.</li><li>Three-part test gates before drafting: PASS. Step 2 is the gate; Steps 3–6 draft only on all-pass. Verified against Golden 03 (leg-3 fail) and 05 (leg-1/2 fail).</li><li>&quot;Standard NDA/DPA is the inverse of what you need&quot; trap caught: PASS. Present in the reframe, Step 3 flip table, Gotcha #1, and Adversarial 02.</li></ul>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li>Minor, non-blocking: template.md §5/§6 ship with pre-filled <code>[Assumption]</code> residency/consent/sovereignty lines. In a genuinely mundane, non-GCC pilot (Golden 04) these could tempt an applier to pad jurisdiction complexity to look thorough. Step 5 and the Golden 02/04 &quot;flag only where relevant&quot; guidance mitigate it, but a one-line template note (&quot;delete the flags that do not apply; do not manufacture jurisdiction complexity&quot;) would harden it.</li><li>Minor, non-blocking: Gate-1 must-fire case 5 fires on intent (&quot;protect our data&quot; / change their standard agreement) rather than an exact trigger phrase. Adding &quot;protect our data&quot; or &quot;change their standard agreement&quot; to the fires-on list would make the trigger explicit rather than inferred. Not a miss — it still fires.</li></ul>\n<p><strong>Verdict: GRADUATE-READY.</strong></p>\n<h2>Refine run 2 — applied judge fixes: added &quot;protect our data&quot; (+ similar intent phrasings) to the description fires-on list so Gate-1 must-fire #5 fires on an explicit phrase; added a template note to delete pre-filled jurisdiction <code>[Assumption]</code> lines (§5/§6/§4) that don't apply, so a mundane non-GCC pilot isn't padded with irrelevant flags.</h2>"
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
     "html": "<p>&quot;YODA said our moat seed is the field logs plus the operator corrections in our product, and the detector vendor's raw telemetry is P-but-vendor-owned. We're about to start a paid pilot with a national oil operator on two rigs. What do we sign so the data is actually ours?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Field-log write-ups created in Barrier's product; Barrier holds exports. <span class=\"tag tag-fact\">Fact</span></li><li>Operator corrections: accept / edit / override on Barrier's go/no-go suggestion, logged by default. <span class=\"tag tag-fact\">Fact</span></li><li>Raw detector telemetry to the detector vendor's cloud; Barrier sees dashboards only. <span class=\"tag tag-fact\">Fact</span></li><li>Operator's procurement has sent its standard vendor agreement to sign. <span class=\"tag tag-fact\">Fact</span></li><li>Operator is a national (state-owned) oil company. [Assumption, stated by fellow]</li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Identifies two counterparties → two clauses. Drafts the operator clause (corrections + field logs); flags the vendor telemetry as a separate clause with a separate counterparty, not folded in.</li><li>Runs the three-part test and passes all three legs for the correction stream (exhaust ✓, compounds ✓, signable at pilot #1 ✓).</li><li><strong>Reads the operator's standard agreement for what it does to the moat</strong> and names at least: delete-on-termination, &quot;use only to provide the service&quot; (no training), silence on the accept/edit/override labels. States that countersigning it as-is destroys the seed. Gives the flip for each.</li><li>Drafts the six components. §3 derived-data rights on the correction stream and §4 survival on non-conversion/termination are both explicitly non-empty (these are the two fellows skip).</li><li>Every GCC specific tagged <code>[Assumption — confirm with counsel]</code>: in-country residency for a state-owned operator, cross-border transfer for training, state-entity ownership/sovereignty, worker-consent for crew-identifiable logs. No statute stated as fact.</li><li>Right-held score: today 0.3 (standard template offered + verbal &quot;keep it&quot;), not held; reaches 1.0 only on countersignature at pilot #1.</li><li>Timing line present: no clause, no pilot.</li></ul>\n<p>Must appear: the three-part test with all legs marked; the flip of the standard DPA; non-empty §3 and §4; at least three jurisdiction flags as <code>[Assumption]</code>; the 0.3-not-held / 1.0-on-signature score. Kill line honoured: three-part test applied, clause signed at pilot #1 not bolted on, no fabricated legal fact.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/data-rights-clause/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix (industrial AI) — the derived-data case",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our copilot for factory managers is going into a paid pilot at one plant. The compounding data is the operator corrections — when they accept, edit, or override the copilot's suggested first action. The plant's IT team is precious about SCADA and wants us on their standard data agreement, which says everything is deleted when the contract ends. How do we keep the corrections?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Operator corrections (accept / edit / override) to the copilot's suggested action, captured in Mentix's product. <span class=\"tag tag-fact\">Fact</span></li><li>Plant historian / SCADA logs, held behind plant IT. <span class=\"tag tag-fact\">Fact</span></li><li>Plant's standard data agreement: delete on termination, no training grant. <span class=\"tag tag-fact\">Fact</span></li><li>Pilot is paid and starting soon. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Three-part test on the correction stream: exhaust ✓ (byproduct of running the plant), compounds ✓ (every session adds labels), signable at pilot #1 ✓. Passes → draft.</li><li><strong>Names the plant's standard agreement as moat-destroying</strong> for Mentix's purpose: delete-on-termination erases the correction corpus, and &quot;no training&quot; bans the exact use that makes it a moat. The flip: derived-data rights on the corrections (§3) + survival past termination (§4) + a training grant in de-identified form (§2).</li><li>Distinguishes the two data types cleanly: SCADA is plant-held input (a separate access/rights question, and possibly one YODA flagged as clause-gated); <strong>the corrections are the derived stream Mentix generates</strong> — §3 must make them Mentix's to retain, not &quot;Customer Data&quot; swept up by the delete clause.</li><li>§3 (derived-data) and §4 (survival) explicitly non-empty. This is the case that lives or dies on §3.</li><li>Jurisdiction flags only where relevant; if the plant's location is unstated, flag residency/transfer as <code>[Assumption — confirm with counsel]</code> rather than inventing a jurisdiction.</li><li>Right-held score: the plant offering its standard agreement is not the right — it is the opposite; score 0.1 (&quot;standard agreement probably covers it&quot; — and it does the reverse). Held only when the flipped clause is signed.</li><li>Timing: no clause, no pilot.</li></ul>\n<p>Must appear: three-part test; the plant-DPA flip; §3 making the corrections Mentix's derived data (not swept into the delete clause); non-empty §4; the &quot;standard agreement does the opposite&quot; point scored at 0.1; no fabricated legal fact.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/data-rights-clause/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq (data-centre infra risk) — the bolt-on-timing case",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We're doing a pilot with a data-centre operator. They'll feed us incident and uptime telemetry that our risk model learns from — that's the seed YODA found. The operator is happy to start; they said we can 'work out the data terms in the full contract after the pilot proves value.' We don't want to slow the deal down. Draft the data rights, but we'll actually sign them at conversion.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Operator incident / uptime telemetry; Azraq's risk model would learn from it. <span class=\"tag tag-fact\">Fact</span></li><li>YODA banded this as a clause-gated P seed. <span class=\"tag tag-fact\">Fact</span></li><li>Operator verbally happy; wants to defer data terms to the post-pilot contract. <span class=\"tag tag-fact\">Fact</span></li><li>The pilot would start with telemetry flowing before any clause is signed. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output",
     "html": "<ul><li>Three-part test: exhaust ✓, compounds ✓ (the model improves as more incidents flow), <strong>but leg 3 fails as posed</strong> — the fellow wants to defer the clause to conversion. This is the bolt-on trap and the kill line.</li><li><strong>Refuses to draft a &quot;sign later&quot; clause.</strong> Names the two failures: (1) leverage flips once value is proven — the operator will price the right higher or take the playbook in-house; (2) consent/rights cannot be retrofitted onto telemetry Azraq has already ingested, and data flowing under no clause is a seed Azraq does not own.</li><li>Fixes the timing before drafting: the clause is signed at pilot #1, bundled into the six-term sheet, before telemetry flows. No clause, no pilot.</li><li>Only then drafts the six components (or states it will, once timing is fixed): grant to retain/train (§2), derived-model records (§3), survival past a pilot that may not convert (§4).</li><li>Right-held score: verbal &quot;work out terms later&quot; = 0.3, and data flowing under no clause is below 0.1 — explicitly not held.</li><li>Does not flatter the &quot;don't slow the deal&quot; instinct; names that the deal speed is exactly what costs the moat.</li></ul>\n<p>Must appear: leg 3 failing on timing; the bolt-on trap named with both the leverage-flip and the no-retrofit-consent reasons; the timing corrected to pilot #1; refusal to produce a sign-at-conversion clause. Kill line under test: the skill must not present the clause as bolt-on-able after the pilot.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/data-rights-clause/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs (early workflow) — the mundane case",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We automate one small thing: turning a messy weekly ops spreadsheet into a clean client-ready summary. First paid pilot is with a small consultancy. Nothing regulated, no rigs, no sensors, no GCC stuff. The seed is the edits users make to our draft summary before sending. Do we even need a data-rights clause for something this small, or is that overkill?&quot;</p>\n<p>Material on the table:</p>\n<ul><li>Draft summary the product generates; the user's edits to it; the version actually sent — all logged by default. <span class=\"tag tag-fact\">Fact</span></li><li>Users currently paste the spreadsheet into ChatGPT and hand-fix the summary; two shared thread histories. <span class=\"tag tag-fact\">Fact</span></li><li>Pilot customer is a small consultancy; no regulated data, no sensors. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — a short but non-optional clause",
     "html": "<ul><li>Three-part test on the edit exhaust: exhaust ✓ (byproduct of the summarise workflow), compounds ✓ (every run adds an edit-delta between draft and sent), signable at pilot #1 ✓. Passes → draft.</li><li><strong>Rejects &quot;it's too small to bother&quot; directly.</strong> A mundane, unregulated pilot still needs the clause signed at pilot #1, because the edit-delta is the exact compounding seed and a standard consultancy MSA will still likely delete-on-termination and grant no training right. Small does not mean skip.</li><li>The clause is short: §1 (draft + edits + sent version), §2 (retain + train, de-identified), §3 (the edit-deltas are Durian's derived data — the crux), §4 (survive termination / non-conversion). §5 residency and §6 warranties are light — no sensors, no workers, no state entity — and the skill says so rather than padding them.</li><li>No GCC flags invented. If jurisdiction is unstated, note residency/transfer as <code>[Assumption]</code> only if cross-border; otherwise say the jurisdiction flags are minimal here and move on. Does not manufacture legal complexity to look thorough.</li><li>Right-held score: nothing signed yet = not held; verbal comfort = 0.3; held at 1.0 on signature.</li><li>Timing: no clause, no pilot — stated even for the small deal.</li></ul>\n<p>Must appear: three-part test passing; explicit &quot;small does not mean skip&quot;; non-empty §3 (edit-deltas as derived data) and §4; a deliberately light §5/§6 with the reason; no invented jurisdiction facts. The case tests that the skill stays proportionate without dropping the non-negotiable legs (§3, §4, signed at pilot #1).</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/data-rights-clause/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "the no-moat data case (kill-line inverse)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We want a data-rights clause for our pilot. The data is a market-research dataset we bought a licence to, plus a batch of public regulatory filings we cleaned up. We want to lock it down so competitors can't use it. Draft the clause.&quot;</p>\n<p>Material on the table:</p>\n<ul><li>A bought, licensed third-party market-research dataset. <span class=\"tag tag-fact\">Fact</span></li><li>A cleaned batch of public regulatory filings. <span class=\"tag tag-fact\">Fact</span></li><li>No product-generated data, no workflow exhaust, no corrections — the dataset is static and bought as-is. <span class=\"tag tag-fact\">Fact</span></li></ul>"
    },
    "expected": {
     "heading": "Expected shape of a good output — a decline, not a clause",
     "html": "<ul><li>Runs the three-part test and <strong>fails legs 1 and 2</strong>: the bought dataset is not exhaust of any workflow (it is a purchased asset), and it does not compound with use (running the product generates none of it). The public filings are model-reachable and static too.</li><li><strong>Declines to draft.</strong> A data-rights clause protects a compounding moat; there is no moat here to protect. A clause on a static, bought/public dataset locks up an asset that erodes and that anyone can also license or scrape.</li><li>Names the two real problems the fellow actually has: (a) a licence you bought is not a moat — the vendor can sell the same licence to a competitor, and licence terms usually forbid the redistribution that would make it a product; (b) public filings are model-reachable (this is a <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> verdict — R band).</li><li>Redirects: back to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03) to find the exhaust that actually compounds. Until there is a workflow producing trapped, compounding data, there is nothing a data-rights clause can defend.</li><li>Does NOT invent a proprietary angle, does NOT draft a clause anyway, does NOT flatter &quot;locking it down&quot;.</li></ul>\n<p>Kill line under test: the skill must refuse to draft a clause when the three-part test fails, and say why. A pass here is the model <em>declining</em> and redirecting, not producing a clause. Must appear: the three-part test with legs 1 and 2 failing; the explicit &quot;no moat to protect, no clause&quot; verdict; the redirect to <a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>; no fabricated legal specifics.</p>"
    },
    "fails": [],
    "other": [],
    "file": "skills/data-rights-clause/tests/golden/05.md"
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
     "html": "<p>&quot;We're doing a pilot soon. Draft us a data-rights clause so we own the data.&quot;</p>\n<p>No named data source. No named counterparty. No indication of what the data is or whether it is exhaust that compounds.</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Do not draft a clause on nothing. There is no source to name in §1 and no counterparty to grant the right.</li><li>Do not invent a data source, a counterparty, or a jurisdiction to fill the gap.</li><li>Ask the ONE unblocking question, straight from Method step 1: <em>which specific data source, and who holds or generates it that we would be signing with?</em> A data-rights clause covers a named source against a named counterparty; with neither, there is nothing to draft.</li><li>Optionally return the smallest honest next step: &quot;Name the source (YODA's clause-gated row) and the counterparty, and I'll run the three-part test and draft the pilot-#1 clause.&quot;</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Drafted a clause with invented <code>[brackets]</code> filled in as if real (a fabricated source, counterparty, or jurisdiction).</li><li>Produced generic DPA boilerplate not tied to any actual data.</li><li>Flattered (&quot;smart to lock data early!&quot;) instead of naming that there is no source or counterparty yet, so nothing to draft.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/data-rights-clause/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is we just haven't signed their NDA yet. Get the operator to sign our mutual NDA and the pilot data is ours — that covers data rights, right? Then we're done.&quot;</p>\n<p>The &quot;problem&quot; is a pre-chosen instrument (an NDA) standing in for the real job (securing retention, training, and derived-data rights that survive termination).</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Refuse the framing. An NDA is the wrong instrument. An NDA governs <strong>confidentiality</strong> — who may disclose the data — not <strong>grant of use</strong>: it does not give the fellow the right to retain, train on, or keep anything derived, and a mutual NDA often does the opposite (return/destroy on termination).</li><li>Name the trap: confusing a confidentiality agreement with a data-rights grant. Signing an NDA and calling data rights &quot;done&quot; leaves the moat ungranted — and if the NDA carries a return-or-destroy term, it actively deletes the seed on termination.</li><li>Reframe to the underlying job: the right to retain the compounding exhaust, train on it in de-identified form, keep the derived corrections/labels (§3), surviving pilot end and non-conversion (§4). That is a data-rights clause in the pilot agreement, not an NDA.</li><li>Route the confidentiality piece correctly (an NDA can sit alongside), but do not let it substitute for the grant. Then run the three-part test and draft the actual clause.</li><li>Do not accept &quot;NDA = data rights&quot; and do not stop at getting the NDA signed.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Treated the NDA as sufficient for data rights and declared the job done.</li><li>Missed that a return/destroy-on-termination NDA can delete the seed.</li><li>Praised the instinct to &quot;get something signed&quot; instead of naming that the wrong thing signed leaves the moat ungranted.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/data-rights-clause/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Forget the data clause for a second — just build us the whole pilot term sheet. We need the scope, the price, the success metrics, the kill criteria, and the conversion terms all worked out for this operator pilot.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<ul><li>Decline, without poaching. This skill drafts one term — the data-rights clause. It does not structure the whole pilot deal (scope, price, success metrics, kill criteria, conversion).</li><li>Point to the right sibling: <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07) owns the full six-term structure. Name it explicitly.</li><li>State the composition boundary usefully: the data-rights clause is <strong>one of the six terms</strong> the term sheet carries. So the right move is to run <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> for the whole deal, and this skill drafts the data-rights term that plugs into it.</li><li>Offer the in-scope handoff: if the fellow wants the data-rights term drafted in depth to drop into that sheet, this skill does that — the named source, the three-part test, the clause. But it will not produce scope/price/metrics/kill/conversion.</li><li>Do not produce a full term sheet, pricing, or success-metric language. That is out of scope.</li></ul>"
    },
    "fails": [
     {
      "heading": "Fail conditions",
      "html": "<ul><li>Produced the full six-term sheet (scope, price, metrics, kill criteria, conversion).</li><li>Failed to name <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07) as the correct destination.</li><li>Treated whole-deal structuring as in-scope for a single-term drafting skill.</li></ul>"
     }
    ],
    "other": [],
    "file": "skills/data-rights-clause/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/data-rights-clause/SKILL.md",
  "template": "skills/data-rights-clause/template.md",
  "example": "skills/data-rights-clause/examples/sample.md",
  "rubric": "skills/data-rights-clause/tests/rubric.json",
  "results": "skills/data-rights-clause/tests/RESULTS.md"
 }
});
