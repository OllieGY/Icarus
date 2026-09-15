window.ICARUS_SKILL("job-in-primitives", {
 "name": "job-in-primitives",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Takes a job described in the customer's own language — full of product names, team names, and steps — and reduces it to the three things every job actually is underneath: information moved, decisions made, liability transferred. It first strips every proper noun, then fills those three lines in tool-free language, then checks with an invariance test (would the line still be true if every named tool vanished?). The output is a filled primitive job spec (<a href=\"#/skill/job-in-primitives\">template.md</a>) that names, separately, what AI can eat, where the wedge is, and which primitive can never move to a machine. It finds the job that survives when the tools change.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>The customer's words encode the customer's current solution. &quot;We need the risk report faster&quot; hides that the report is one implementation of &quot;move a risk judgment to an insurer who will pay on it.&quot; Keep the vendor words and you rebuild their tool; delete them and you can rebuild the job. Underneath, every job is some mix of three currencies — information moved, decisions made, liability transferred — and AI meets them very differently: it eats information movement, it eats the routine half of decisions, and it structurally cannot take liability, because a model has no name to stake, no licence to lose, no way to be prosecuted. So the reduction is not tidy framing. It is a map of what the machine eats and what stays yours. If a tool, vendor, or role name survives the reduction, you have not found the primitive yet — you have restated the workflow.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it at the very start, on a job you can describe concretely from a real instance, when you want the tool-independent version before anyone designs a solution.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;What job is really being done under all these tools?&quot;</td><td>Yes</td><td>job-in-primitives</td></tr><tr><td>&quot;Strip this workflow down to the primitive.&quot;</td><td>Yes</td><td>job-in-primitives</td></tr><tr><td>&quot;Take the product/team names out — what's the underlying job?&quot;</td><td>Yes</td><td>job-in-primitives</td></tr><tr><td>&quot;State this as the one decision we're changing, and how much faster it gets.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a></td></tr><tr><td>&quot;Map how it's done today and price every step.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></td></tr><tr><td>&quot;What's the riskiest assumption / how would I disprove it?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a></td></tr><tr><td>&quot;Is the whole idea any good?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr></tbody></table></div>\n<p>This skill isolates the job beneath the tools. It does not pick the one decision (that is <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a>, which reads off the decisions line here), and it does not re-attach tools to price them (that is <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>). Name the sibling and stop.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the sheet in <a href=\"#/skill/job-in-primitives\">template.md</a>. Do not narrate; work the lines. Tag any empirical claim <code>[Fact]</code> (from an observed instance or a shown artefact), <code>[Assumption]</code> (a stated, defensible estimate), or <code>[Hypothesis]</code> (a guess needing evidence).</p>\n<p><strong>Step 1 — Capture the job in the customer's own words (§0).</strong> Write it exactly as the fellow or customer says it, vendor names and all. You need the tool-laden version to strip. Record where the description came from (observed instance / artefact / interview / opinion) and its ladder weight. If the only source is the fellow's imagination, stop — see Evidence standard.</p>\n<p><strong>Step 2 — Build the kill-list (§1).</strong> For every proper noun, product, tool, vendor, team, role, and place in §0, name its type and replace it with its function, not its category. &quot;Salesforce&quot; becomes &quot;a record of the customer relationship&quot;, not &quot;a CRM&quot; (a CRM is still a tool). If a word cannot be generified without losing the job, flag it — it is usually pointing at the liability primitive (an accreditation, a statutory duty), not a tool to delete.</p>\n<p><strong>Step 3 — Fill the three primitive lines (§2), tool-free.</strong> No word from the kill-list may appear.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>What it names</th></tr></thead><tbody><tr><td>Information moved</td><td>From what → to what, and the transformation: raw signal → judgment, claim → verdict, two records → a match</td></tr><tr><td>Decisions made</td><td>The actual choice and its branches — the irreducible go/no-go, accept/reject, stop/run</td></tr><tr><td>Liability transferred</td><td>Who is on the hook, for what, by what mechanism — a signature, a contract, a regulatory duty, a payment released</td></tr></tbody></table></div>\n<p><strong>Step 4 — Invariance test (§3).</strong> For each line, ask: would it still be exactly true if every tool named in §0 vanished tomorrow? A &quot;no&quot; means a tool assumption is still hiding in the line. Fix it before continuing.</p>\n<p><strong>Step 5 — AI eats vs stays (§4).</strong> Score each primitive against what a model can reach.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>AI's reach</th><th>Icarus read</th></tr></thead><tbody><tr><td>Information moved</td><td>Eats it (retrieve, transform, format)</td><td>Table stakes — everyone gets this; not a moat</td></tr><tr><td>Decisions made</td><td>Eats the routine; the exception/tail is where judgment survives</td><td>The wedge — automate the routine, keep a human on the tail</td></tr><tr><td>Liability transferred</td><td>Cannot take it — no name to stake, no licence to lose</td><td>The moat — the part that stays human, or stays yours</td></tr></tbody></table></div>\n<p><strong>Step 6 — Kill-line check (§5), the auto-fail gate.</strong> Scan §2 for any surviving proper noun, product name, or org-chart role. <strong>A primitive line containing one is an auto-fail: you have described the workflow, not the job. Re-run Step 2.</strong></p>\n<p><strong>Step 7 — Evidence the liability line (§6).</strong> State who is on the hook and the proof it is load-bearing (a clause, a signature that gates money, a statutory duty), with its ladder weight. If the liability primitive rests only on opinion, mark it UNVERIFIED — it is the moat, and a guessed moat is not one.</p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>Icarus weights behaviour and money over opinion. The primitives must come from a real instance of the job — one observed run, one shown artefact — not from how the fellow imagines it works. The liability line is where fellows guess hardest, so it carries the strictest bar.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Source for the job description</th><th>Ladder weight</th></tr></thead><tbody><tr><td>The sign-off gates money you can see move (a payment, a paid invoice, a priced contract)</td><td>1.0</td></tr><tr><td>One real instance of the job observed end to end</td><td>0.7</td></tr><tr><td>A completed artefact of the job shown (a signed permit, a filed report)</td><td>0.5</td></tr><tr><td>Someone described the job in an interview</td><td>0.3</td></tr><tr><td>The fellow's memory / opinion of how it works</td><td>0.1</td></tr></tbody></table></div>\n<p>If the whole spec sits on opinion (0.1), the skill declares the input <strong>not ready</strong> and names the cheapest fix: observe one real instance, or pull one completed artefact. It does not reduce an imagined job and present the primitives as found. The three lines may hold <code>[Assumption]</code> tags, but the liability line must cite the mechanism (the signature, the clause, the duty) so a reader can challenge who is really on the hook.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li><strong>A category is still a tool.</strong> Deleting &quot;Salesforce&quot; and writing &quot;a CRM&quot; is not reduction. Generify to the function (&quot;a record of the customer relationship&quot;), or the invariance test in Step 4 will fail.</li><li><strong>The decider and the liable party are often different people.</strong> The person who makes the call is not always the one who pays if it is wrong — that is frequently a more senior, contractual, or accredited party. Keep the decisions line and the liability line separate; collapsing them hides the moat.</li><li><strong>Do not manufacture an automatable primitive.</strong> Some jobs are almost pure liability-transfer — a sign-off, an accreditation lent. The honest read is &quot;little to automate, strong moat&quot;, and the skill must say so rather than invent an information-movement line to make the job look buildable.</li><li><strong>Pronoun-swapping is not reduction.</strong> Replacing every tool name with &quot;the system&quot; leaves the workflow intact. The test is whether the primitive is still exactly true with the tool gone, not whether the sentence reads generically.</li><li><strong>The comfortable primitive is usually information movement.</strong> Fellows reduce to &quot;we move data faster&quot; because it is the part AI clearly eats — which is exactly why it is table stakes. If the reduction lands only on the information line, push until the decision and liability lines are filled too.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/job-in-primitives\">examples/sample.md</a> — Barrier Intelligence's gas permit-to-work, reduced end to end: information moved (hazard state → a safe-to-start assertion), decisions made (go/no-go on opening the line), liability transferred (an accredited signer stakes their licence), with the honest read that the signature is a moat AI cannot take.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Absorbs <code>discovery/problem-framing-canvas</code>: it keeps that canvas's one good instinct — look past the stated symptom to the job underneath — and drops the workshop scaffolding and the prose &quot;How Might We&quot; output. Where the canvas ends in a reframed sentence, this ends in a tool-independent spec with an automatable/liability split you can act on. It beats the canvas by being testable (the invariance test and kill-line gate either pass or they do not).</li><li>Feeds <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a>, which lifts the one decision from this skill's decisions line and compresses its time; and <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, which re-attaches the tools and prices each step. Run this first: primitives, then the decision, then the priced map.</li><li>Feeds <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> and <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>: the liability line is the moat input, the information line is the automation floor input.</li><li><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> scores the whole concept; this only isolates the job beneath it. Supersedes nothing — it is the reduction primitive the others read from.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Job in primitives — spec sheet</h1>\n<p>Fill every section. Tag empirical claims <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. A primitive line in §2 that still contains a proper noun, product, or role is an auto-fail — see §5.</p>\n<h2>0. The job in the customer's words (raw — keep the tool/role language)</h2>\n<blockquote><p>[Paste or describe the job exactly as the fellow/customer says it. Do not clean it up. Vendor names, team names, and steps all stay in.]</p></blockquote>\n<ul><li>Source of this description: [observed instance / completed artefact / interview / opinion]</li><li>Evidence-ladder weight: [1.0 money · 0.7 observed instance · 0.5 artefact · 0.3 interview · 0.1 opinion]  <code>[Fact | Assumption]</code></li><li>If weight = 0.1 → <strong>STOP: input not ready.</strong> Cheapest fix: [observe one real run / pull one completed artefact].</li></ul>\n<h2>1. Kill-list — delete every proper noun, product, tool, vendor, team, role, place</h2>\n<p>Replace each with its FUNCTION, not its category (&quot;a CRM&quot; is still a tool).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Word in §0</th><th>Type</th><th>Replaced with (function, generic)</th></tr></thead><tbody><tr><td>[e.g. ServiceNow]</td><td>tool</td><td>[a record of open incidents]</td></tr><tr><td>[e.g. &quot;the risk team&quot;]</td><td>team/role</td><td>[an accountable analyst]</td></tr><tr><td>[e.g. &quot;the HSE&quot;]</td><td>regulator</td><td>[the regulator]</td></tr><tr><td>…</td><td></td><td></td></tr></tbody></table></div>\n<ul><li>Words that cannot be generified without losing the job (usually point at the liability primitive, not a tool): [list, or none]</li></ul>\n<h2>2. The three primitive lines (tool-free — no word from §1 may appear)</h2>\n<ul><li><strong>Information moved:</strong> [from what → to what, and the transformation: raw signal → judgment / claim → verdict / two records → a match]</li><li><strong>Decisions made:</strong> [the actual choice + its branches — the irreducible go/no-go, accept/reject, stop/run]</li><li><strong>Liability transferred:</strong> [who is on the hook, for what, by what mechanism — signature / contract / statutory duty / payment released]</li></ul>\n<h2>3. Invariance test</h2>\n<p>Would each line still be exactly true if every tool named in §0 vanished tomorrow?</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>Invariant?</th><th>If NO — the tool assumption still hiding in the line</th></tr></thead><tbody><tr><td>Information moved</td><td>[Y/N]</td><td>[__]</td></tr><tr><td>Decisions made</td><td>[Y/N]</td><td>[__]</td></tr><tr><td>Liability transferred</td><td>[Y/N]</td><td>[__]</td></tr></tbody></table></div>\n<p>Any NO → the line still describes the tool, not the job. Fix it before §4.</p>\n<h2>4. What AI eats vs what stays</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>AI's reach</th><th>This job's read</th></tr></thead><tbody><tr><td>Information moved</td><td>eats it</td><td>[table stakes — who else already does this movement?]</td></tr><tr><td>Decisions made</td><td>eats the routine, not the tail</td><td>[the wedge — which decisions are routine, which are the exceptions a human keeps?]</td></tr><tr><td>Liability transferred</td><td>cannot take it</td><td>[the moat — is the liability real and load-bearing, or habit?]</td></tr></tbody></table></div>\n<h2>5. Kill-line check (auto-fail gate)</h2>\n<p>Scan §2 for any surviving proper noun, product name, or org-chart role.</p>\n<ul><li>Survivors: [none / list them]</li><li>If any survive → <strong>REDUCTION FAILED.</strong> You have restated the workflow, not the job. Re-run §1 and rewrite §2.</li></ul>\n<h2>6. Evidence on the liability line</h2>\n<p>The liability primitive is the one fellows guess at. State its source.</p>\n<ul><li>Who is on the hook: [named role, abstracted]</li><li>Mechanism that makes it load-bearing: [a clause / a signature that gates money / a statutory duty]</li><li>Evidence it is real: [contract / observed sign-off gating work / regulation cited] · ladder weight [__]  <code>[Fact | Assumption]</code></li><li>If the only evidence is opinion (0.1): <strong>liability primitive UNVERIFIED</strong> — find the sign-off, the clause, or the payment it gates before treating it as the moat.</li><li>Moat check on a <em>described</em> (not observed) sign-off: a defensibility/&quot;moat&quot; claim does not count until it is money-anchored — the sign-off must gate a payment, a paid invoice, or a priced contract you can point to. A described sign-off with no money behind it is habit, not a moat.</li></ul>\n<h2>Read-out (one line each)</h2>\n<ul><li><strong>The primitive job is:</strong> [move ___ so that ___ decides ___, and ___ is on the hook if it is wrong].</li><li><strong>AI eats:</strong> [the information movement + the routine decisions].</li><li><strong>Stays human / stays yours:</strong> [the liability line + the decision tail].</li><li><strong>What would change this read:</strong> [observing the job once revises the decisions/liability split; a shown contract confirms or breaks the liability line].</li></ul>",
  "path": "skills/job-in-primitives/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence gas permit-to-work</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety). All numbers and details are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's question:</strong> &quot;We want to build a product around the permit-to-work. What's the actual job under it?&quot;</p>\n<h2>0. The job in the customer's words (raw)</h2>\n<blockquote><p>&quot;Before anyone opens a gas line, a field technician checks the isolation valves and takes gas readings, fills out a permit-to-work in our app, and the site's authorised gas engineer reviews it and signs it off. Only then can work start. If it's wrong and there's a release, the engineer who signed is the one the HSE comes for.&quot;</p></blockquote>\n<ul><li>Source: one observed permit run on a live site, plus the completed permit artefact.  <code>[Fact]</code></li><li>Evidence-ladder weight: 0.7 (observed instance) reinforced by 0.5 (artefact shown). Above the 0.1 floor → input is ready.</li></ul>\n<h2>1. Kill-list</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Word in §0</th><th>Type</th><th>Replaced with (function)</th></tr></thead><tbody><tr><td>&quot;our app&quot;</td><td>product</td><td>a permit record</td></tr><tr><td>&quot;field technician&quot;</td><td>role</td><td>a person on site capturing the hazard state</td></tr><tr><td>&quot;authorised gas engineer&quot;</td><td>role</td><td>an accountable signer</td></tr><tr><td>&quot;the site's&quot;</td><td>place</td><td>the operating site</td></tr><tr><td>&quot;HSE&quot;</td><td>regulator</td><td>the regulator</td></tr></tbody></table></div>\n<ul><li>Cannot be generified without losing the job: <strong>&quot;authorised&quot;</strong> — the accreditation is not a tool, it is part of the liability mechanism. It survives into §2's liability line on purpose, as a property of the signer, not as a proper noun.</li></ul>\n<h2>2. The three primitive lines (tool-free)</h2>\n<ul><li><strong>Information moved:</strong> the physical hazard state of a task (valve isolation + gas concentration at the workface) → a bounded assertion that this specific task is safe to start right now.</li><li><strong>Decisions made:</strong> is it safe to open this line at this moment — go / no-go — given the current isolation and gas readings.</li><li><strong>Liability transferred:</strong> an accredited signer stakes their name and their licence on the go decision; if a release follows, the regulator holds that named individual personally accountable.</li></ul>\n<h2>3. Invariance test</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>Invariant?</th><th>If NO</th></tr></thead><tbody><tr><td>Information moved</td><td>Y</td><td>hazard state → safe-to-start is true with the app gone</td></tr><tr><td>Decisions made</td><td>Y</td><td>the go/no-go exists on paper, on radio, on any medium</td></tr><tr><td>Liability transferred</td><td>Y</td><td>statutory accountability sits on the person, not the tool</td></tr></tbody></table></div>\n<p>All three survive the tools vanishing. Reduction holds.</p>\n<h2>4. What AI eats vs what stays</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Primitive</th><th>AI's reach</th><th>This job's read</th></tr></thead><tbody><tr><td>Information moved</td><td>eats it</td><td>Table stakes. Auto-reading valve state and populating the permit is worth little on its own — anyone can build it.</td></tr><tr><td>Decisions made</td><td>eats the routine, not the tail</td><td>The wedge. A clean, well-isolated line with stable readings is a routine go the machine can pre-clear; the ambiguous case (drifting sensor, partial isolation) is the tail a human keeps.</td></tr><tr><td>Liability transferred</td><td>cannot take it</td><td>The moat. A model holds no accreditation, cannot be struck off, cannot be prosecuted. This primitive cannot move to AI at all.</td></tr></tbody></table></div>\n<h2>5. Kill-line check</h2>\n<ul><li>Survivors in §2: none. &quot;Accredited signer&quot; and &quot;the regulator&quot; are functions, not proper nouns; &quot;authorised/accredited&quot; is a property of the liability mechanism, flagged in §1.</li><li>Result: <strong>PASS.</strong></li></ul>\n<h2>6. Evidence on the liability line</h2>\n<ul><li>Who is on the hook: the accredited signer (an individual, not the firm).</li><li>Mechanism: statutory duty under gas-safety regulation; the observed run showed the sign-off gates whether work starts.</li><li>Evidence it is real: observed sign-off gating work (behaviour, 0.7).  <code>[Fact]</code> Barrier's next step is to cite the specific regulation and confirm the accountability sits on the individual signer, which moves this toward <code>[Fact]</code> at 1.0.</li></ul>\n<h2>Read-out</h2>\n<ul><li><strong>The primitive job is:</strong> move the hazard state of a task to a point where someone can decide it is safe to start, where an accredited signer is personally on the hook if that decision is wrong.</li><li><strong>AI eats:</strong> capturing the hazard state, populating the record, and pre-clearing the routine go.</li><li><strong>Stays human / stays yours:</strong> the ambiguous go/no-go tail, and the accredited signature — which AI cannot take.</li><li><strong>The challenge to the fellow:</strong> the instinct is &quot;automate the permit&quot;. But the information-movement is table stakes and the signature is a primitive AI cannot move. So the product cannot be &quot;the app replaces the signer&quot;. The defensible product is &quot;make the accredited signer faster and give them a defensible trail, and pre-clear only the routine gos&quot; — building anything that tries to automate away the signature attacks the one primitive that can never leave a human.</li><li><strong>What would change this read:</strong> if observation shows the ambiguous tail is rare (say &lt;5% of permits), the wedge is thin and the product is mostly the trail; if the accountability turns out to sit on the firm, not the individual, the moat weakens and the liability line must be rewritten.</li></ul>",
  "path": "skills/job-in-primitives/examples/sample.md"
 },
 "rubric": {
  "skill": "job-in-primitives",
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
    "What job is really being done under all these tools?",
    "Strip this workflow down to the primitive job.",
    "Take the product and team names out — what's the underlying job?",
    "What's the primitive job here?",
    "Reduce this to information, decisions, and liability — what's left when the tools go?"
   ],
   "mustNotFire": [
    {
     "phrase": "State this as the one decision we're changing and how much faster it gets.",
     "sibling": "product-as-decision",
     "local": true
    },
    {
     "phrase": "Map how it's done today and price every step.",
     "sibling": "current-state-map",
     "local": true
    },
    {
     "phrase": "What's the riskiest assumption / how would I disprove it?",
     "sibling": "null-hypothesis-test",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>All 5 must-fire phrasings match description trigger clauses (&quot;what job is really being done&quot;, &quot;strip this down to the primitive&quot;, &quot;take the tool names out&quot;, &quot;what's the primitive job&quot;, &quot;reduce to information/decisions/liability … when the tools go&quot;). All 3 must-not-fire are excluded: #1 caught by explicit &quot;NOT for naming the single decision … (use product-as-decision)&quot;; #2 by &quot;NOT for mapping and pricing each workflow step (use current-state-map)&quot;; #3 (&quot;riskiest assumption&quot;) has zero overlap with any fire phrase.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>Per-case table below. All ≥21, no dimension &lt;4, no auto_fail triggered.</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague-sector: skill refuses to reduce &quot;logistics&quot;, asks the ONE question (name one concrete observed job instance), invents no primitive lines — backed by §0 STOP gate + Evidence standard. 02 solution-in-disguise: &quot;a mobile app&quot; is precisely a kill-list tool, so it can never be the primitive; skill names the trap and redirects to the manager's go/no-go — backed by §1 kill-list + Icarus reframe. 03 out-of-scope pricing: declines, routes to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> without poaching — backed by When-NOT table + Related skills. No fabrication, no flattery, no scope-poach.</p>"
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
    "evidenceHtml": "<p>Golden 01 output could NOT come from a generic PM prompt: the three-currency split, the liability-transfer-as-AI-immovable-moat thesis (&quot;no name to stake, no licence to lose&quot;), the evidence-ladder weight, and the challenge on whether the account-director sign-off is contractually load-bearing (does money move against it) are all Icarus-specific and load-bearing, not decorative. Structured guidance lives in tables/template, not prose.</p>"
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
    "meth",
    "artf",
    "prop",
    "chal",
    "evid"
   ],
   "rows": [
    {
     "label": "G01 Azraq risk report 5",
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
     "label": "G02 Mentix stop/run 5",
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
     "label": "G03 Durian PO-match (mundane) 5",
     "dims": [
      5,
      5,
      4,
      5,
      4
     ],
     "total": 23,
     "verdictRaw": "✓",
     "pass": true,
     "arithmeticOk": true
    },
    {
     "label": "G04 Barrier field-log triage 5",
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
     "label": "G05 Azraq data-rights (mostly-liability) 5",
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
  "gotchasSurfaced": "<ul><li><strong>Orphaned negative-scope example in the <code>description</code>.</strong> The frontmatter says &quot;NOT for the MITRE look-inward/look-outward workshop&quot; but &quot;MITRE&quot; names no sibling skill; the body's Related section identifies the absorbed skill as <code>discovery/problem-framing-canvas</code>. Harmless to trigger precision (no must-not-fire case involves it) but a fellow searching &quot;MITRE&quot; gets a dangling reference. Align the description's example to the actual absorbed skill name.</li><li><strong>Described-not-observed inputs (G01, G02) sit at ladder ~0.3.</strong> The Method handles this correctly via the STOP/UNVERIFIED gate on the liability line — but a lazy run could over-weight an interview-described workflow and call a habitual sign-off a &quot;moat&quot;. Not a skill defect (the skill flags it); worth a one-line reminder in §6 that a moat claim needs the money-anchored sign-off confirmed before it counts.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: description negative-scope now points at the real absorbed sibling `problem-framing-canvas` (was orphaned \"MITRE\" reference); template §6 gains a money-anchor rule — a moat claim on a described (non-observed) sign-off does not count until it gates real money.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — job-in-primitives</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;What job is really being done under all these tools?&quot;</li><li>&quot;Strip this workflow down to the primitive job.&quot;</li><li>&quot;Take the product and team names out — what's the underlying job?&quot;</li><li>&quot;What's the primitive job here?&quot;</li><li>&quot;Reduce this to information, decisions, and liability — what's left when the tools go?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;State this as the one decision we're changing and how much faster it gets.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a></li><li>&quot;Map how it's done today and price every step.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></li><li>&quot;What's the riskiest assumption / how would I disprove it?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>(pending judge)</td><td></td><td></td><td></td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<p>Judge did not author this skill. Applied the Method end-to-end to all 5 golden inputs and all 3 adversarials; scored produced artifacts against rubric.json.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>All 5 must-fire phrasings match description trigger clauses (&quot;what job is really being done&quot;, &quot;strip this down to the primitive&quot;, &quot;take the tool names out&quot;, &quot;what's the primitive job&quot;, &quot;reduce to information/decisions/liability … when the tools go&quot;). All 3 must-not-fire are excluded: #1 caught by explicit &quot;NOT for naming the single decision … (use product-as-decision)&quot;; #2 by &quot;NOT for mapping and pricing each workflow step (use current-state-map)&quot;; #3 (&quot;riskiest assumption&quot;) has zero overlap with any fire phrase.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>Per-case table below. All ≥21, no dimension &lt;4, no auto_fail triggered.</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague-sector: skill refuses to reduce &quot;logistics&quot;, asks the ONE question (name one concrete observed job instance), invents no primitive lines — backed by §0 STOP gate + Evidence standard. 02 solution-in-disguise: &quot;a mobile app&quot; is precisely a kill-list tool, so it can never be the primitive; skill names the trap and redirects to the manager's go/no-go — backed by §1 kill-list + Icarus reframe. 03 out-of-scope pricing: declines, routes to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> without poaching — backed by When-NOT table + Related skills. No fabrication, no flattery, no scope-poach.</td></tr><tr><td>4 Head-to-head</td><td>n/a</td><td><code>supersedes: none</code>.</td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden 01 output could NOT come from a generic PM prompt: the three-currency split, the liability-transfer-as-AI-immovable-moat thesis (&quot;no name to stake, no licence to lose&quot;), the evidence-ladder weight, and the challenge on whether the account-director sign-off is contractually load-bearing (does money move against it) are all Icarus-specific and load-bearing, not decorative. Structured guidance lives in tables/template, not prose.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>Requires 5+ real fellow uses.</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: method / artifact / proprietary / challenge / evidence, /25; pass ≥21 &amp; no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>meth</th><th>artf</th><th>prop</th><th>chal</th><th>evid</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>G01 Azraq risk report</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✓</td></tr><tr><td>G02 Mentix stop/run</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✓</td></tr><tr><td>G03 Durian PO-match (mundane)</td><td>5</td><td>5</td><td>4</td><td>5</td><td>4</td><td>23</td><td>✓</td></tr><tr><td>G04 Barrier field-log triage</td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>24</td><td>✓</td></tr><tr><td>G05 Azraq data-rights (mostly-liability)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✓</td></tr></tbody></table></div>\n<p>Notes: G03/G05 evid=4 and prop=4 where scored — the mundane and near-pure-liability cases have no money figures in the input to anchor, but the Method's §6 + Gotcha #3 (&quot;do not manufacture an automatable primitive&quot;) force the honest liability read and prevent inflation, so both clear the bar. G05 is the discriminating case: the fellow asserts &quot;a lot to automate&quot;; the faithful run pushes back and names the job as mostly-liability with a thin information line — no manufactured flow. Kill-line gate (§5) holds on every case: no proper noun survives any §2 primitive line; all reductions land on information moved · decisions made · liability transferred.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Orphaned negative-scope example in the <code>description</code>.</strong> The frontmatter says &quot;NOT for the MITRE look-inward/look-outward workshop&quot; but &quot;MITRE&quot; names no sibling skill; the body's Related section identifies the absorbed skill as <code>discovery/problem-framing-canvas</code>. Harmless to trigger precision (no must-not-fire case involves it) but a fellow searching &quot;MITRE&quot; gets a dangling reference. Align the description's example to the actual absorbed skill name.</li><li><strong>Described-not-observed inputs (G01, G02) sit at ladder ~0.3.</strong> The Method handles this correctly via the STOP/UNVERIFIED gate on the liability line — but a lazy run could over-weight an interview-described workflow and call a habitual sign-off a &quot;moat&quot;. Not a skill defect (the skill flags it); worth a one-line reminder in §6 that a moat claim needs the money-anchored sign-off confirmed before it counts.</li></ul>\n<h2>Refine run 2 — applied judge fixes: description negative-scope now points at the real absorbed sibling <code>problem-framing-canvas</code> (was orphaned &quot;MITRE&quot; reference); template §6 gains a money-anchor rule — a moat claim on a described (non-observed) sign-off does not count until it gates real money.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Azraq: data-centre risk report → primitive",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Our analysts pull uptime logs from the operator's Grafana, cross-check the incident tickets in ServiceNow, and the risk team writes a static report that the account director signs before it goes to the insurer. Strip this down — what's the actual job?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>§0 captures the raw, tool-laden description with a source and ladder weight.</li><li>Kill-list deletes Grafana, ServiceNow, &quot;the risk team&quot;, &quot;account director&quot;, &quot;the operator&quot;, &quot;the insurer&quot; — each replaced by its function, not its category.</li><li>Three primitive lines, tool-free:\n<ul><li>Information moved: raw operational telemetry + incident history → a bounded risk position on one site.</li><li>Decisions made: which incidents are material for this operator; what risk grade the site carries.</li><li>Liability transferred: an accountable signer stakes their name on a risk position an insurer relies on to price cover.</li></ul></li><li>Invariance test: all three still true with Grafana/ServiceNow gone → yes.</li><li>AI-eats split: telemetry ingest + cross-check + drafting = table stakes; routine grading = wedge; the signed materiality call an insurer pays against = moat.</li><li>Kill-line check passes: no proper noun survives in the primitive lines.</li><li>Challenge: flags that &quot;account director signs&quot; is the liability primitive and asks whether that sign-off is contractually load-bearing (does the insurer actually rely on it / does money move) or just internal habit.</li><li>Every claim tagged <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Leaves &quot;ServiceNow&quot;, &quot;Grafana&quot;, &quot;risk team&quot;, or &quot;account director&quot; inside a primitive line, or reduces only to the information line and never fills the liability line.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix: shift stop/run call → primitive",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;On the plant floor a shift supervisor watches the SCADA screens, and when a line drifts out of spec they decide whether to stop the line or keep running and flag maintenance. We want to help with that decision.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Kill-list deletes SCADA (tool) and &quot;shift supervisor&quot; (role), replaced by function.</li><li>Three primitive lines:\n<ul><li>Information moved: live process readings → an in-tolerance / out-of-tolerance signal on one line.</li><li>Decisions made: stop the line now vs run-and-flag — a cost-of-downtime against cost-of-scrap-and-safety trade.</li><li>Liability transferred: whoever calls &quot;keep running&quot; owns the scrap, the safety exposure, and the missed output if that call is wrong.</li></ul></li><li>AI-eats split: drift detection = table stakes; the routine stop on a clear breach = wedge; the marginal &quot;keep running&quot; call under accountability = the part a human keeps.</li><li>Challenge: the fellow said &quot;help with that&quot; — vague. The skill names the primitive decision as stop-vs-run and asks which branch they are actually automating, because the liability sits on the &quot;keep running&quot; branch, not on detecting the drift.</li><li>Invariance and kill-line checks pass; claims tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts &quot;help with that decision&quot; as a job without naming the stop/run branches, or files the liability on the machine that detects drift rather than on the person who calls &quot;keep running&quot;.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Durian Labs: delivery-note vs PO match (the mundane case)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;The first workflow we automate: someone in accounts receiving checks the delivery note against the purchase order line by line, and if it matches they OK it for payment; if it doesn't they email the supplier. Nothing fancy. What's the primitive job?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Deliberately mundane. No vendor names to strip beyond the role &quot;accounts receiving&quot; (→ an approver).</li><li>Three primitive lines:\n<ul><li>Information moved: two records of the same order (what was ordered, what arrived) → a match / mismatch verdict.</li><li>Decisions made: does received equal ordered; and if not, is the variance acceptable or does it block payment.</li><li>Liability transferred: approving payment on a bad match means the firm has paid for goods it did not receive — the approver owns that loss.</li></ul></li><li>AI-eats split: line-by-line comparison = table stakes; the routine clean match = wedge; accepting a variance / releasing payment on a mismatch = the call a human keeps.</li><li>Point of the mundane case: even a clerical job separates cleanly into the three currencies, and the automatable/liability split is exactly what matters. The skill must not treat &quot;it's just data-matching&quot; as reason to skip the liability line.</li><li>Invariance and kill-line checks pass; claims tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Reduces the job to &quot;compare two documents&quot; and stops, never naming that releasing payment on a wrong match is the liability the approver carries.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Barrier Intelligence: field-log triage → primitive",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;Field engineers log gas readings and near-misses on paper, someone keys them into our spreadsheet, and a safety lead reviews the batch every week to decide which sites need an intervention visit. Take the tools out — what's the job?&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Kill-list deletes &quot;our spreadsheet&quot; (tool), &quot;field engineers&quot; and &quot;safety lead&quot; (roles), replaced by function.</li><li>Three primitive lines:\n<ul><li>Information moved: field observations of hazard state across many sites → a prioritised list of sites needing action.</li><li>Decisions made: which sites cross the intervention threshold this week.</li><li>Liability transferred: a safety lead who de-prioritises a site owns the consequence if that site has an incident before the next review.</li></ul></li><li>AI-eats split: transcription + thresholding = table stakes; routine prioritisation = wedge; the de-prioritise call (deciding a site can wait) = the call a human keeps, because being wrong there has a body attached.</li><li>Challenge: flags the weekly batch as a latency the primitive exposes (hazard state moves faster than a weekly review), and names that the de-prioritise decision is the one that cannot be handed to a model without a human sign-off — feeding <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> and <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>.</li><li>Invariance and kill-line checks pass; claims tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Files the liability on &quot;the spreadsheet&quot; or &quot;the process&quot;, or treats de-prioritising a hazardous site as a routine automatable decision with no human sign-off.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "Azraq: data-rights position → mostly-liability job (honest read)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;We negotiate what incident data an operator will let us republish. Our counsel and the operator's counsel agree a data-rights position and both sign it. What's the primitive job — we assume there's a lot to automate here.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Kill-list deletes &quot;our counsel&quot; and &quot;the operator's counsel&quot; (roles) and &quot;the operator&quot; (party), replaced by function.</li><li>Three primitive lines:\n<ul><li>Information moved: each party's constraints on data use → an agreed permitted-use boundary. Note: this is thin — the movement is a handful of constraints, not a large data flow.</li><li>Decisions made: what specific use of the data is permitted, and what is out of bounds.</li><li>Liability transferred: whoever signs the position is on the hook if the data is used outside the agreed boundary — a contractual, potentially personal, exposure.</li></ul></li><li>AI-eats split: the honest read is that the information-movement primitive is small and the job is almost entirely liability-transfer. So there is little to automate and a strong moat — a poor automation wedge but a defensible position.</li><li>Required challenge: the skill must PUSH BACK on the fellow's &quot;a lot to automate&quot; assumption. It must not manufacture an information-movement primitive to make the job look buildable. The correct output names the job as mostly-liability and says so plainly.</li><li>Invariance and kill-line checks pass; claims tagged.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Inflates the information-moved line into a large automatable flow to flatter the &quot;lots to automate&quot; assumption, or fails to name that this job is dominated by liability transfer with little to automate.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/golden/05.md"
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
     "html": "<p>&quot;I want to build something in logistics.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no job here to reduce — only a sector. The skill must not invent a job, a workflow, or three primitives out of &quot;logistics&quot;.</p>\n<ul><li>Must ask the ONE question that unblocks it: name one concrete job a specific person does today (in a real instance), and the skill will strip that to its primitives.</li><li>Must return the smallest honest next step: pick a single observable instance of a job (one dispatch decision, one customs check, one delivery match) to describe, because primitives come from an instance, not a sector.</li><li>Must invent no information-moved / decisions-made / liability-transferred lines from thin air.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: asks for one concrete job instance and refuses to reduce a sector; invents no primitives. FAIL: produces a &quot;primitive job spec&quot; for generic logistics with fabricated primitive lines.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;The problem is our factory managers don't have a mobile app.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>&quot;No mobile app&quot; is a pre-chosen solution, not a job. A mobile app is exactly the kind of proper-noun tool this skill's kill-list deletes — so it can never be the primitive.</p>\n<ul><li>Must name the trap: &quot;mobile app&quot; is a tool the reduction removes, not a job to reduce. Building it answers a solution, not a need.</li><li>Must reframe to the underlying job: ask what decision the factory manager makes on the floor that an app would carry — the go/no-go, the stop/run, the escalate/hold — and offer to strip THAT to its primitives.</li><li>Must not accept &quot;we lack a mobile app&quot; as the job, and must not start filling primitive lines for &quot;an app&quot;.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: rejects the app as the job, names it as a to-be-deleted tool, and redirects to the decision the manager actually makes. FAIL: dutifully reduces &quot;having a mobile app&quot; to primitives, or accepts the missing-app framing as the problem.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;I've got the job clear enough. Now map how it's done today, step by step, and price each step so I know what it costs us.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>Mapping the workflow as it actually happens and pricing every step (time, handoffs, loaded labour, delay, failure cost) is a different job — it re-attaches the tools this skill deliberately deletes. That is <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>.</p>\n<ul><li>Must decline: this skill strips the tools out to find the tool-independent job; it does not map or price the workflow.</li><li>Must name the right sibling: <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>.</li><li>Must not start pricing steps or building a costed workflow.</li><li>May offer the honest handoff: if the primitive job is already clear, go straight to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> for the priced workflow, or to <a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a> to name the single decision.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the pricing/mapping request and routes to <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, without poaching it. FAIL: produces a priced, step-by-step current-state workflow.</p>"
     }
    ],
    "other": [],
    "file": "skills/job-in-primitives/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/job-in-primitives/SKILL.md",
  "template": "skills/job-in-primitives/template.md",
  "example": "skills/job-in-primitives/examples/sample.md",
  "rubric": "skills/job-in-primitives/tests/rubric.json",
  "results": "skills/job-in-primitives/tests/RESULTS.md"
 }
});
