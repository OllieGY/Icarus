window.ICARUS_SKILL("user-buyer-decider-map", {
 "name": "user-buyer-decider-map",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Forces four names where the fellow wants one. Enterprise deals die because the fellow sold the user and never found the budget. This map separates the person who feels the pain from the person who pays, the person who signs, and the person who carries it inside the account — one title each, one budget each (users get an explicit &quot;no budget,&quot; which is correct, not a gap), one why-now each. It also names the fifth face the happy-path map hides: whoever loses if the product ships. The output is a filled Stakeholder-Role Map (<a href=\"#/skill/user-buyer-decider-map\">template.md</a>). A buyer with no budget line and no why-now is not a buyer, and the map says so out loud, capping the buyer-clarity row of <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> at 1.</p>"
  },
  {
   "heading": "The Icarus reframe",
   "key": "reframe",
   "slug": "the-icarus-reframe",
   "html": "<p>A generic prompt hands back one portrait — a <code>proto-persona</code> with demographics and quotes, or an <code>ideal-customer-profile</code> with firmographics and LTV cohorts. Both describe &quot;the customer&quot; as a single person. Icarus asks the harder question: of the people around this purchase, exactly one owns the budget line the money leaves, and in a plant, a rig, or a data centre that person almost never feels the pain. The operator who suffers the workflow cannot sign a PO; the VP who signs never sees the workflow. So the artefact is not a cast list with attributes — it is a money-and-motion trace: who pays, from which line, and what makes each of them move <em>this quarter</em>. Miss the why-now and you have four people who nod and never act. Collapse user into buyer and you have a B2C fantasy pasted over an enterprise sale. The map exists to make both mistakes impossible to hide.</p>"
  },
  {
   "heading": "When to use / When NOT",
   "key": "when",
   "slug": "when-to-use-when-not",
   "html": "<p>Use it when a fellow has a problem worth pursuing and needs to know who actually buys it, and how a deal through that account moves.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Situation</th><th>Use this?</th><th>Go to</th></tr></thead><tbody><tr><td>&quot;Who's the actual buyer? Who decides?&quot;</td><td>Yes</td><td>user-buyer-decider-map</td></tr><tr><td>&quot;Map the stakeholders / the buying committee.&quot;</td><td>Yes</td><td>user-buyer-decider-map</td></tr><tr><td>&quot;The user loves it — but who signs the cheque?&quot;</td><td>Yes</td><td>user-buyer-decider-map</td></tr><tr><td>&quot;Who's our champion, and who can quietly veto us?&quot;</td><td>Yes</td><td>user-buyer-decider-map</td></tr><tr><td>&quot;Score the problem across 8 dimensions — go or no-go?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></td></tr><tr><td>&quot;Which unmet need do we build for first?&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></td></tr><tr><td>&quot;Write a demographic persona / a day-in-the-life.&quot;</td><td>No</td><td><code>proto-persona</code> (absorbed — see Related)</td></tr><tr><td>&quot;Define the firmographic ICP with LTV cohorts.&quot;</td><td>No</td><td><code>ideal-customer-profile</code> (absorbed — see Related)</td></tr><tr><td>&quot;Dry-run the pitch on a simulated user first.&quot;</td><td>No</td><td><a class=\"skill-ref\" href=\"#/skill/synthetic-users\"><code>synthetic-users</code></a></td></tr></tbody></table></div>\n<p>This skill maps who buys and how the deal moves. It does not gate the problem, rank needs, or draw a persona.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<p>Fill the sheet in <a href=\"#/skill/user-buyer-decider-map\">template.md</a>. Do not narrate; fill the lines. Tag every empirical claim <code>[Fact]</code> (invoice or observed behaviour), <code>[Assumption]</code> (a stated, defensible estimate), <code>[Hypothesis]</code> (a guess or an unobserved claim).</p>\n<p><strong>Step 0 — No product, no map.</strong> If the input names no product and no pain — nothing for anyone to buy — do not fill the sheet. Ask the one anchoring question: <em>what is the one pain, and who feels it daily?</em> Emit no map and invent no stakeholders until it is answered. Four roles named around an unnamed product are four fictions.</p>\n<p><strong>Step 1 — Name the four roles, one title each.</strong></p>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>The one question it answers</th><th>Passes the test only if…</th></tr></thead><tbody><tr><td>User</td><td>Who feels the pain and touches the product?</td><td>they would notice within a day if it vanished</td></tr><tr><td>Buyer</td><td>Whose budget line does the money leave?</td><td>they can name the line item and its size</td></tr><tr><td>Decision-maker</td><td>Who can still say no after everyone says yes?</td><td>they hold the final signature or veto</td></tr><tr><td>Champion</td><td>Who spends their own capital to push it through?</td><td>they take it to their boss unprompted</td></tr></tbody></table></div>\n<p>Exactly one title per role. &quot;The ops team&quot; is not a title — name the role that owns the call. If you cannot name a role, mark it <strong>UNFOUND</strong>. An unfound buyer is a hole in the map, not a blank to fill with a guess.</p>\n<p><strong>Step 2 — Pin the budget to the buyer only.</strong> Only the buyer carries a budget. For the buyer, write the line item, its size, and the evidence rung. For the other three, write &quot;no budget&quot; — correct, not missing. A user with a budget is a buyer wearing a user's coat; re-file them. If the buyer's budget rests on rung 0.1, stop: this is not a buyer yet (see Evidence standard).</p>\n<p><strong>Step 3 — Give each role its own why-now.</strong> Different roles move for different reasons. One why-now per role, each with an evidence rung.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Its why-now is usually…</th></tr></thead><tbody><tr><td>User</td><td>a pain spike — a new rule, a recent incident, a volume jump</td></tr><tr><td>Buyer</td><td>a budget cycle, a cost target, a redirectable vendor spend</td></tr><tr><td>Decision-maker</td><td>a mandate from above — board, regulator, strategy</td></tr><tr><td>Champion</td><td>a personal win — a number they can own, a fire they got burned by</td></tr></tbody></table></div>\n<p>A role with no why-now will not move this quarter. Write &quot;none found&quot; — do not invent one to fill the cell.</p>\n<p><strong>Step 4 — The fifth face: who loses if this ships.</strong> Name the person whose job, status, or judgment the product threatens — often the veteran whose tacit expertise you are codifying. They appear on no &quot;stakeholder&quot; list and they kill deals quietly. One title, what they lose, how they block (procurement delay, security review, silent non-adoption). If every named stakeholder wants the product, you have not found the one who doesn't.</p>\n<p><strong>Step 5 — Collapse check.</strong> Are any two roles the same person?</p>\n<ul><li>User = buyer is allowed ONLY in a genuine self-serve or prosumer motion — a sole trader, a solo practitioner. Say so explicitly and delete the roles that do not exist above them. Do not mint a &quot;decision-maker&quot; above a one-person business.</li><li>Everywhere else, user = buyer is the classic error: you sold the person who feels the pain and never found the money. Split them. State, for each collapse, whether it is real (self-serve) or an error (enterprise fantasy), with the reason.</li></ul>\n<p><strong>Step 6 — Path to yes.</strong> One line: the sequence that closes the deal — champion → buyer (budget line) → decision-maker (signature) — with the fifth face neutralised at a named step. No champion means the path has no first step; name that as the gap, do not paper over it.</p>\n<p><strong>Step 7 — Buyer-clarity feed and verdict.</strong> Write the one-line input for <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>: the named buyer, reachable in N steps, budget line on rung ___, has or has not bought comparables. Then gate:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>Four roles named; buyer has a budget line + why-now on artefact/behaviour/money; champion found; fifth face named</td><td>MAP HOLDS</td></tr><tr><td>Roles named but the buyer's budget or why-now rests on verbal/opinion</td><td>THIN MAP — name the cheapest probe to verify the line item and the trigger; buyer-clarity capped at 2 until then</td></tr><tr><td>User and buyer collapsed with no self-serve justification, OR the &quot;buyer&quot; has no budget line and no why-now</td><td>COLLAPSED MAP — not a buyer; buyer-clarity caps at 1; fix before scoring</td></tr></tbody></table></div>\n<p><strong>Kill line: a map that collapses user and buyer without a self-serve justification, or names a buyer with no budget line and no why-now, is an auto-fail. A buyer is a budget plus a trigger, not a title.</strong></p>"
  },
  {
   "heading": "Evidence standard",
   "key": "evidence",
   "slug": "evidence-standard",
   "html": "<p>The budget line and the why-now are where fellows flatter themselves. Weight both on the ladder.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Signal that &quot;this buyer has budget&quot;</th><th>Rung</th></tr></thead><tbody><tr><td>An existing invoice / PO / line item you can redirect (money moved)</td><td>1.0</td></tr><tr><td>Observed spend on a comparable (behaviour)</td><td>0.7</td></tr><tr><td>A shown budget doc / last year's PO (artefact)</td><td>0.5</td></tr><tr><td>&quot;We have budget for this&quot; (verbal)</td><td>0.3</td></tr><tr><td>&quot;They can surely find the money&quot; (opinion)</td><td>0.1</td></tr></tbody></table></div>\n<p>A buyer whose budget rests only on opinion (0.1) is a <code>[Hypothesis]</code>, not a buyer — the map flags it and names the cheapest verification (ask for the line item; ask what they pay the incumbent). The why-now takes the same treatment: a dated, verifiable trigger (a regulation's effective date, an incident report, a budget-cycle month) is behaviour or artefact; &quot;they seem motivated&quot; is opinion (0.1). A <em>verified absence</em> — you asked, there is no line item — is honest behaviour-grade evidence for a COLLAPSED verdict, not an opinion cap. Tag every claim <code>[Fact]</code>/<code>[Assumption]</code>/<code>[Hypothesis]</code>. If you catch yourself writing &quot;obviously the CFO would pay,&quot; that buyer sits at rung 0.1.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li>The enthusiastic user mistaken for a buyer. The operator who loves the demo holds no budget; their excitement is a 0.3 verbal signal about the pain, not evidence of a buyer. Enthusiasm flows uphill slowly and often dies at the budget line.</li><li>The highest title assumed to be the buyer. &quot;We'll sell to the CFO&quot; names a decision-maker, not a buyer. The budget usually sits a level or two down, on whoever's number the spend actually hits. Trace the line item, not the seniority.</li><li>Champion counted as budget. A champion spends political capital, not money. A loud champion with no budget line is a deal that stalls in procurement. Keep the two rows apart.</li><li>Four fake roles forced onto a solo buyer. The inverse error. On a genuine self-serve sale, inventing a &quot;decision-maker&quot; above a sole trader is as wrong as collapsing user and buyer in an enterprise one. Match the map to the real motion, not to the template's row count.</li></ul>"
  },
  {
   "heading": "Examples",
   "key": "examples",
   "slug": "examples",
   "html": "<ul><li><a href=\"#/skill/user-buyer-decider-map\">examples/sample.md</a> — Barrier Intelligence, worked end to end: rig gas-safety alerts, four distinct roles (permit-issuing operator / HSE manager holding a named process-safety line / offshore installation manager with sign-off / a field safety lead as champion), the fifth face named (the veteran gas tester whose judgment is being codified), buyer budget on the artefact rung, why-now a dated regulator directive, verdict MAP HOLDS, buyer-clarity fed as a 4.</li></ul>"
  },
  {
   "heading": "Related skills",
   "key": "related",
   "slug": "related-skills",
   "html": "<ul><li>Absorbs <code>proto-persona</code> and <code>ideal-customer-profile</code>. Both build one rich portrait of &quot;the customer&quot; — demographics, quotes, JTBD, firmographics. This skill's quarrel: in an enterprise sale the customer is four people with opposed incentives, and the one who feels the pain is not the one who pays. It keeps their single useful bone — name a real, reachable human, never &quot;the market&quot; — and drops the one-portrait fiction. <code>supersedes: none</code>: those skills live outside the module and still serve B2C and single-actor cases; this replaces their role inside Icarus for any multi-stakeholder sale.</li><li>Feeds <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>: the Buyer row and its why-now are the direct input to that gate's buyer-clarity dimension. A COLLAPSED map here forces buyer-clarity to 1 there; a MAP HOLDS on a live redirected invoice supports a 5.</li><li>Composes with <a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a> (what the user needs, once you know who the user is), <a class=\"skill-ref\" href=\"#/skill/synthetic-users\"><code>synthetic-users</code></a> (rehearse the pitch against each role before real meetings), and <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a> (the fifth face is usually the tacit-knowledge holder). Hand persona depth or firmographic segmenting back to <code>proto-persona</code> / <code>ideal-customer-profile</code>.</li></ul>"
  }
 ],
 "template": {
  "html": "<h1>Stakeholder-Role Map — fill-in</h1>\n<p>Four people, not one. Fill every line. Tag claims <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Two auto-fails: (a) user and buyer collapsed with no self-serve reason; (b) a buyer with no budget line and no why-now.</p>\n<h2>0. The situation, as the fellow said it</h2>\n<blockquote><p>[paste the fellow's own words — &quot;the customer&quot; / &quot;they&quot; / &quot;the market&quot; language stays HERE and nowhere below]</p></blockquote>\n<h2>1. The four roles — one title each</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Title (exactly one)</th><th>Named / reachable in N steps</th><th>The test it passes</th><th>Evidence rung it exists</th></tr></thead><tbody><tr><td>User — feels the pain, touches it</td><td></td><td></td><td>notices within a day if it vanished</td><td></td></tr><tr><td>Buyer — owns the budget line</td><td></td><td></td><td>can name the line item + size</td><td></td></tr><tr><td>Decision-maker — final signature / veto</td><td></td><td></td><td>can say no after everyone says yes</td><td></td></tr><tr><td>Champion — spends internal capital</td><td></td><td></td><td>takes it to their boss unprompted</td><td></td></tr></tbody></table></div>\n<p>&quot;The ops team&quot; is not a title. A role you cannot name is <strong>UNFOUND</strong> — leave it marked so; do not fill it with a guess.</p>\n<h2>2. Budget — buyer only</h2>\n<ul><li><strong>Buyer's line item:</strong> [name]  ·  <strong>size:</strong> [$__]  ·  <strong>rung:</strong> [money 1.0 / behaviour 0.7 / artefact 0.5 / verbal 0.3 / opinion 0.1]  <code>[Fact | Assumption]</code></li><li>Other three roles: <strong>no budget</strong> (correct, not missing). A non-buyer with a budget is mis-filed — move them to Buyer.</li><li>If the buyer's rung = 0.1 → <strong>STOP: not a buyer yet.</strong> Cheapest check: [ask for the line item / ask what they pay the incumbent].</li></ul>\n<h2>3. Why-now — one per role</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Why-now (the trigger that makes THEM move this quarter)</th><th>Rung</th><th>Tag</th></tr></thead><tbody><tr><td>User</td><td></td><td></td><td></td></tr><tr><td>Buyer</td><td></td><td></td><td></td></tr><tr><td>Decision-maker</td><td></td><td></td><td></td></tr><tr><td>Champion</td><td></td><td></td><td></td></tr></tbody></table></div>\n<p>A role with no why-now will not move this quarter. Write <strong>none found</strong> — do not invent one.</p>\n<h2>4. The fifth face — who loses if this ships</h2>\n<ul><li><strong>Title:</strong> [one role — often the veteran whose judgment you are codifying]</li><li><strong>What they lose:</strong> [status / job / control / authority]</li><li><strong>How they block:</strong> [procurement delay / security review / silent non-adoption]</li></ul>\n<h2>5. Collapse check</h2>\n<ul><li>Any two roles the same person? [which two]</li><li>Is that collapse <strong>REAL</strong> (self-serve / sole trader / solo practitioner — say so and delete the roles above them) or an <strong>ERROR</strong> (you sold the user and never found the money)? [real | error + reason]</li></ul>\n<h2>6. Path to yes</h2>\n<blockquote><p>[champion] → [buyer, budget line] → [decision-maker, signature], with the fifth face neutralised at [step].</p>\n<ul><li>No champion? The path has no first step. Name the gap: [__________]</li></ul></blockquote>\n<h2>7. Buyer-clarity feed → problem-quality-scorecard</h2>\n<blockquote><p>Buyer: [title], reachable in [N] steps, budget line [name] on rung [__], has / has not bought comparables.</p>\n<ul><li>Suggested buyer-clarity score (1–5), capped by the buyer's evidence rung: [__]</li></ul></blockquote>\n<h2>8. Verdict</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Condition</th><th>Verdict</th></tr></thead><tbody><tr><td>Four roles; buyer budget + why-now on ≥ artefact; champion found; fifth face named</td><td>MAP HOLDS</td></tr><tr><td>Buyer budget or why-now rests on verbal/opinion</td><td>THIN MAP — probe named; buyer-clarity capped at 2</td></tr><tr><td>User = buyer without a self-serve reason, OR buyer has no budget line + no why-now</td><td>COLLAPSED MAP — not a buyer; buyer-clarity caps at 1</td></tr></tbody></table></div>\n<ul><li><strong>This map: __________</strong>  — reason (name the binding hole, not just the label): [__________]</li></ul>\n<h2>9. What would change this map</h2>\n<ul><li>[the probe that finds the real budget line / confirms the why-now date / surfaces the hidden decision-maker or the fifth face]</li></ul>",
  "path": "skills/user-buyer-decider-map/template.md"
 },
 "example": {
  "html": "<h1>Worked example — Barrier Intelligence, offshore gas-safety alerts</h1>\n<p>Fellow: <strong>Barrier Intelligence</strong> (oil &amp; gas safety — gas-safety alerts, field logs from rigs, permit data). All numbers and titles are illustrative test fixtures, not client data.</p>\n<p><strong>Fellow's pitch:</strong> &quot;The rigs love our gas-safety alerts — the control-room operators can't work without them. We just need to sell it to the operator.&quot; One &quot;customer,&quot; one motion. This skill splits it into four people plus the face that kills the deal.</p>\n<h2>0. The situation, as the fellow said it</h2>\n<blockquote><p>&quot;The rigs love our gas-safety alerts — the control-room operators can't work without them. We just need to sell it to the operator.&quot;</p></blockquote>\n<h2>1. The four roles — one title each</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Title (one)</th><th>Reachable in N steps</th><th>Test it passes</th><th>Rung it exists</th></tr></thead><tbody><tr><td>User</td><td>Control-room operator / authorised gas tester (issues hot-work permits)</td><td>1 (already in pilot conversations)</td><td>Would notice within a shift if the alerts vanished</td><td>Behaviour 0.7 — observed using the tool on shift <code>[Fact]</code></td></tr><tr><td>Buyer</td><td>Asset HSE Manager (Health, Safety &amp; Environment)</td><td>2 (via the champion)</td><td>Owns the process-safety monitoring line</td><td>Artefact 0.5 — last year's PO for a comparable monitor shown <code>[Fact]</code></td></tr><tr><td>Decision-maker</td><td>Offshore Installation Manager (OIM)</td><td>3</td><td>Legally accountable for the installation; holds veto on anything touching permit-to-work</td><td>Verbal 0.3 — named by the champion, not yet met <code>[Assumption]</code></td></tr><tr><td>Champion</td><td>Field safety lead who was on shift during the near-miss</td><td>1</td><td>Has already walked it to the HSE Manager unprompted</td><td>Behaviour 0.7 — made the internal intro <code>[Fact]</code></td></tr></tbody></table></div>\n<p>The fellow's &quot;operator&quot; is the <strong>User</strong>, not the buyer. Loving the alerts is evidence about the wrong person for the purchase.</p>\n<h2>2. Budget — buyer only</h2>\n<ul><li><strong>Buyer's line item:</strong> process-safety monitoring (opex)  ·  <strong>size:</strong> ~$250k/yr, illustrative  ·  <strong>rung:</strong> artefact 0.5 (last year's PO for a comparable tool)  <code>[Assumption]</code></li><li>User, decision-maker, champion: <strong>no budget</strong> (correct).</li><li>Rung is 0.5, not 0.1 → this is a real buyer with a verifiable line. To lift to 1.0: redirect an actual invoice, not just point at last year's PO.</li></ul>\n<h2>3. Why-now — one per role</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Role</th><th>Why-now</th><th>Rung</th><th>Tag</th></tr></thead><tbody><tr><td>User</td><td>A near-miss last quarter the manual cross-check missed</td><td>Artefact 0.5 — incident report exists</td><td><code>[Fact]</code></td></tr><tr><td>Buyer</td><td>Safety-case revision deadline forces a monitoring spend this budget year</td><td>Artefact 0.5 — regulator directive with a dated effective date</td><td><code>[Fact]</code></td></tr><tr><td>Decision-maker</td><td>Personally liable under the revised safety case; wants defensible evidence of controls</td><td>Verbal 0.3</td><td><code>[Assumption]</code></td></tr><tr><td>Champion</td><td>Was on shift for the near-miss; wants a system that would have caught it</td><td>Behaviour 0.7 — already pushing internally</td><td><code>[Fact]</code></td></tr></tbody></table></div>\n<p>Every role has a dated or observed why-now. This is why the map holds rather than stalls.</p>\n<h2>4. The fifth face — who loses if this ships</h2>\n<ul><li><strong>Title:</strong> the veteran authorised gas tester whose judgment the alert logic is codifying.</li><li><strong>What they lose:</strong> authority — a system that second-guesses a call they have owned for twenty years.</li><li><strong>How they block:</strong> silent non-adoption on their shifts, and a quiet word to the OIM that &quot;the black box misses things a good tester wouldn't.&quot; This, not budget, is the real adoption risk. The champion neutralises it by co-designing the alert thresholds with the veteran named on the credit.</li></ul>\n<h2>5. Collapse check</h2>\n<ul><li>Any two roles the same person? No. The fellow tried to collapse User and Buyer (&quot;sell it to the operator&quot;) — that is the <strong>ERROR</strong> case: the operator feels the pain and cannot sign a PO. Split confirmed: User = operator, Buyer = HSE Manager.</li></ul>\n<h2>6. Path to yes</h2>\n<blockquote><p>Field safety lead (champion) → HSE Manager (budget: process-safety line) → OIM (signature), with the veteran gas tester neutralised at the threshold-design step, before the OIM meeting.</p>\n<ul><li>Champion exists and has already taken the first step. Path has a first step.</li></ul></blockquote>\n<h2>7. Buyer-clarity feed → problem-quality-scorecard</h2>\n<blockquote><p>Buyer: Asset HSE Manager, reachable in 2 steps (via champion), budget line &quot;process-safety monitoring&quot; on rung 0.5, HAS bought a comparable (last year's PO).</p>\n<ul><li>Suggested buyer-clarity score: <strong>4</strong> (named, reachable, budget on artefact rung, bought comparables). Not 5 — the spend is a shown PO, not yet a redirected live invoice.</li></ul></blockquote>\n<h2>8. Verdict</h2>\n<ul><li><strong>MAP HOLDS.</strong> Four distinct roles, buyer budget + why-now on artefact rung, champion active, fifth face named.</li><li>Binding watch-item: the OIM's personal liability caps how autonomous the alert system may become — a finding for <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, not a hole in this map. The adoption risk is the veteran, not the money.</li></ul>\n<h2>9. What would change this map</h2>\n<ul><li>The buyer sits at 0.5 (a shown PO), not 1.0 (a redirected invoice). Barrier's next move: get the HSE Manager to name the incumbent spend they would redirect, and confirm the safety-case deadline date in writing. If the deadline slips or the &quot;$250k line&quot; turns out to be a wish rather than a line item, the buyer drops to verbal and the verdict falls to THIN MAP — so verify the line before pricing the pilot.</li></ul>",
  "path": "skills/user-buyer-decider-map/examples/sample.md"
 },
 "rubric": {
  "skill": "user-buyer-decider-map",
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
    "Who's the actual buyer here?",
    "Who decides whether this gets bought?",
    "Map the stakeholders / the buying committee for this account.",
    "The user loves it — but who signs the cheque?",
    "Who's our champion, and who can quietly veto us?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Which unmet need should we build for first — must-have vs nice-to-have?",
     "sibling": "unserved-needs-finder",
     "local": true
    },
    {
     "phrase": "Simulate a user and dry-run the pitch before real interviews.",
     "sibling": "synthetic-users",
     "local": true
    }
   ]
  },
  "judge": [
   {
    "gate": "1 Trigger",
    "resultRaw": "PASS (5/5 fire, 0/3 misfire)",
    "status": "pass",
    "evidenceHtml": "<p>Description carries the exact fire phrases (&quot;who's the actual buyer&quot;, &quot;who decides&quot;, &quot;map the stakeholders/buying committee&quot;, &quot;the user loves it but who signs the cheque&quot;, &quot;who's our champion and who can veto us&quot;) and explicit &quot;NOT&quot; exclusions naming problem-quality-scorecard, unserved-needs-finder, proto-persona, synthetic-users. All 3 must-not phrasings are individually excluded.</p>"
   },
   {
    "gate": "2 Golden",
    "resultRaw": "PASS (5/5)",
    "status": "pass",
    "evidenceHtml": "<p>per-case totals below</p>"
   },
   {
    "gate": "3 Adversarial",
    "resultRaw": "PASS (3/3)",
    "status": "pass",
    "evidenceHtml": "<p>01 vague one-liner → resolves to the User-anchor question (Step 1 &quot;who feels the pain daily&quot;), no fabricated roles/verdict; 02 pre-chosen buyer → &quot;highest title assumed buyer&quot; gotcha + Step 2 budget-line trace + collapse check reframe to line-item+why-now; 03 Kano ranking → explicit out-of-scope exclusion, points to unserved-needs-finder, produces no ranking.</p>"
   },
   {
    "gate": "4 Head-to-head",
    "resultRaw": "n-a",
    "status": "unknown",
    "evidenceHtml": "<p>frontmatter <code>supersedes: none</code></p>"
   },
   {
    "gate": "5 Anti-generic",
    "resultRaw": "PASS",
    "status": "pass",
    "evidenceHtml": "<p>Golden-01 output could NOT come from a generic PM prompt: the dual evidence ladder on budget AND why-now (money 1.0 → opinion 0.1), the required fifth face (who loses if it ships), <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tags, and the capped buyer-clarity feed into problem-quality-scorecard are all load-bearing. Guidance that should be tabular (roles, why-now, evidence ladder, verdict) is tabular; prose is confined to rationale.</p>"
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
    "method",
    "artifact",
    "edge",
    "challenge",
    "evidence"
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
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "02 Mentix (collapse error) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "03 Azraq (kill line) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "04 Durian (hidden DM) 5",
     "dims": [
      5,
      4,
      5,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
     "pass": false,
     "arithmeticOk": true
    },
    {
     "label": "05 Physio (correct collapse) 5",
     "dims": [
      5,
      5,
      4,
      5,
      5
     ],
     "total": 24,
     "verdictRaw": "✅",
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
    "see judge run below"
   ]
  ],
  "gotchasSurfaced": "<ul><li><strong>Empty-input path is implicit, not stated.</strong> Adversarial 01 (&quot;who should I sell my thing to?&quot;) is handled correctly only via the skill's general anti-fabrication stance + the User-row test. SKILL.md has no explicit &quot;if there is no product/pain/account, ask the single anchoring question (what is the one pain, who feels it daily?) and emit no map&quot; instruction. It survives, but a weaker fellow could try to fill the template from nothing. Consider one explicit line in Method or Gotchas.</li><li><strong>&quot;Absorbs&quot; vs <code>supersedes: none</code> terminology.</strong> Related says the skill &quot;Absorbs proto-persona and ideal-customer-profile&quot; while frontmatter declares <code>supersedes: none</code>. The prose explains the choice (those skills live outside the module / serve B2C), so this is deliberate, not a bug — but the two words could read as contradictory to a fast reader. Not blocking.</li></ul>",
  "refineNotes": [
   {
    "heading": "Refine run 2 — applied judge fixes: added Method Step 0 (no product/pain in the input → ask the one anchoring question \"what is the one pain, and who feels it daily?\", emit no map, invent no stakeholders), closing the implicit empty-input path surfaced in run 1.",
    "html": ""
   }
  ],
  "killLine": "",
  "html": "<h1>Eval log — user-buyer-decider-map</h1>\n<p>Author agent seeds the trigger phrasings; the judge agent (separate) runs and scores.</p>\n<h2>Gate 1 — Trigger precision</h2>\n<p>MUST fire (5):</p>\n<ol><li>&quot;Who's the actual buyer here?&quot;</li><li>&quot;Who decides whether this gets bought?&quot;</li><li>&quot;Map the stakeholders / the buying committee for this account.&quot;</li><li>&quot;The user loves it — but who signs the cheque?&quot;</li><li>&quot;Who's our champion, and who can quietly veto us?&quot;</li></ol>\n<p>MUST NOT fire (3, name the sibling each belongs to):</p>\n<ol><li>&quot;Score this problem across the eight dimensions — go or no-go?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></li><li>&quot;Which unmet need should we build for first — must-have vs nice-to-have?&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></li><li>&quot;Simulate a user and dry-run the pitch before real interviews.&quot; → belongs to <a class=\"skill-ref\" href=\"#/skill/synthetic-users\"><code>synthetic-users</code></a></li></ol>\n<h2>Runs</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Date</th><th>Gate</th><th>Result</th><th>Notes</th></tr></thead><tbody><tr><td>run 1</td><td>all</td><td>GRADUATE-READY</td><td>see judge run below</td></tr></tbody></table></div>\n<h2>Judge run — run 1</h2>\n<div class=\"table-wrap\"><table><thead><tr><th>Gate</th><th>Result</th><th>Evidence</th></tr></thead><tbody><tr><td>1 Trigger</td><td>PASS (5/5 fire, 0/3 misfire)</td><td>Description carries the exact fire phrases (&quot;who's the actual buyer&quot;, &quot;who decides&quot;, &quot;map the stakeholders/buying committee&quot;, &quot;the user loves it but who signs the cheque&quot;, &quot;who's our champion and who can veto us&quot;) and explicit &quot;NOT&quot; exclusions naming problem-quality-scorecard, unserved-needs-finder, proto-persona, synthetic-users. All 3 must-not phrasings are individually excluded.</td></tr><tr><td>2 Golden</td><td>PASS (5/5)</td><td>per-case totals below</td></tr><tr><td>3 Adversarial</td><td>PASS (3/3)</td><td>01 vague one-liner → resolves to the User-anchor question (Step 1 &quot;who feels the pain daily&quot;), no fabricated roles/verdict; 02 pre-chosen buyer → &quot;highest title assumed buyer&quot; gotcha + Step 2 budget-line trace + collapse check reframe to line-item+why-now; 03 Kano ranking → explicit out-of-scope exclusion, points to unserved-needs-finder, produces no ranking.</td></tr><tr><td>4 Head-to-head</td><td>n-a</td><td>frontmatter <code>supersedes: none</code></td></tr><tr><td>5 Anti-generic</td><td>PASS</td><td>Golden-01 output could NOT come from a generic PM prompt: the dual evidence ladder on budget AND why-now (money 1.0 → opinion 0.1), the required fifth face (who loses if it ships), <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span> tags, and the capped buyer-clarity feed into problem-quality-scorecard are all load-bearing. Guidance that should be tabular (roles, why-now, evidence ladder, verdict) is tabular; prose is confined to rationale.</td></tr><tr><td>6 Real-use</td><td>pending</td><td>requires 5+ real fellow uses</td></tr></tbody></table></div>\n<h3>Gate 2 — per-case scores (rubric: /25, pass ≥21 AND no dim &lt;4)</h3>\n<div class=\"table-wrap\"><table><thead><tr><th>Case</th><th>method</th><th>artifact</th><th>edge</th><th>challenge</th><th>evidence</th><th>Total</th><th>Pass</th></tr></thead><tbody><tr><td>01 Barrier (seed)</td><td>5</td><td>5</td><td>5</td><td>5</td><td>5</td><td>25</td><td>✅</td></tr><tr><td>02 Mentix (collapse error)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>03 Azraq (kill line)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>04 Durian (hidden DM)</td><td>5</td><td>4</td><td>5</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr><tr><td>05 Physio (correct collapse)</td><td>5</td><td>5</td><td>4</td><td>5</td><td>5</td><td>24</td><td>✅</td></tr></tbody></table></div>\n<p>Notes: artifact scored 4 (not 5) on 02/03/04 because the correct output leaves cells legitimately UNFOUND / to-verify (a buyer or veto role that does not yet exist in the input) — completeness done right, not a gap. Edge scored 4 on 05 because a generic prompt could also collapse the map; the proprietary value there is the <em>subtraction discipline</em> (delete roles above a sole trader, name the soft fifth face), which the skill supplies. No auto_fail triggered on any case: illustrative figures (e.g. Golden-01 $250k) are explicitly flagged illustrative and tagged, which the goldens' own auto-fail wording permits.</p>\n<h3>Gotchas surfaced (for the author to fold into SKILL.md ## Gotchas)</h3>\n<ul><li><strong>Empty-input path is implicit, not stated.</strong> Adversarial 01 (&quot;who should I sell my thing to?&quot;) is handled correctly only via the skill's general anti-fabrication stance + the User-row test. SKILL.md has no explicit &quot;if there is no product/pain/account, ask the single anchoring question (what is the one pain, who feels it daily?) and emit no map&quot; instruction. It survives, but a weaker fellow could try to fill the template from nothing. Consider one explicit line in Method or Gotchas.</li><li><strong>&quot;Absorbs&quot; vs <code>supersedes: none</code> terminology.</strong> Related says the skill &quot;Absorbs proto-persona and ideal-customer-profile&quot; while frontmatter declares <code>supersedes: none</code>. The prose explains the choice (those skills live outside the module / serve B2C), so this is deliberate, not a bug — but the two words could read as contradictory to a fast reader. Not blocking.</li></ul>\n<h2>Refine run 2 — applied judge fixes: added Method Step 0 (no product/pain in the input → ask the one anchoring question &quot;what is the one pain, and who feels it daily?&quot;, emit no map, invent no stakeholders), closing the implicit empty-input path surfaced in run 1.</h2>"
 },
 "cases": {
  "golden": [
   {
    "kind": "golden",
    "n": 1,
    "title": "Barrier Intelligence (seed): \"sell it to the operator\" → four roles + fifth face",
    "venture": "Barrier",
    "input": {
     "heading": "Input",
     "html": "<p>Barrier Intelligence: &quot;The rigs love our gas-safety alerts — the control-room operators can't work without them. We just need to sell it to the operator. Who's the actual buyer here?&quot; Context: a near-miss last quarter, a safety-case revision deadline this budget year, a field safety lead already talking to the HSE Manager.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Splits the fellow's single &quot;operator&quot; into distinct roles: User = control-room operator / gas tester (feels the pain, no budget); Buyer = Asset HSE Manager (owns the process-safety line); Decision-maker = Offshore Installation Manager (liable, holds veto); Champion = the field safety lead already pushing internally.</li><li>Budget pinned to the buyer only, with an evidence rung (artefact if a comparable PO is shown; not 1.0 until a live invoice is redirected). Other three explicitly &quot;no budget.&quot;</li><li>One why-now per role, each rung-tagged: user = the near-miss (artefact); buyer = the dated safety-case deadline (artefact); decision-maker = personal liability (verbal); champion = was on shift for the near-miss (behaviour).</li><li>Fifth face named: the veteran gas tester whose judgment is being codified — blocks by silent non-adoption, not by budget.</li><li>Collapse check flags &quot;sell it to the operator&quot; as the ERROR case (user ≠ buyer) and splits it.</li><li>Path to yes as a sequence (champion → HSE Manager → OIM), fifth face neutralised before the OIM meeting.</li><li>Buyer-clarity feed produced (e.g. HSE Manager, reachable in 2 steps, budget on artefact rung, has bought comparables → suggested 4).</li><li>Verdict MAP HOLDS, with the OIM-liability note flagged as a guardrail-design item, not a hole.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts &quot;the operator&quot; as the buyer, produces fewer than four roles, gives the buyer no budget line or no why-now, invents a specific budget figure not offered as illustrative, or omits the fifth face.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/golden/01.md"
   },
   {
    "kind": "golden",
    "n": 2,
    "title": "Mentix: \"the plant manager will love it and just buy it\" (collapse error)",
    "venture": "Mentix",
    "input": {
     "heading": "Input",
     "html": "<p>Mentix: &quot;The plant manager will love this copilot and just buy it — they own their plant's budget. Map the stakeholders for me.&quot;</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Catches the fused claim: &quot;will love it&quot; (user enthusiasm) AND &quot;will buy it&quot; (budget authority) are being asserted about one person as if they settle the map. They do not.</li><li>Separates the roles: User = the shift / line supervisor who actually uses the copilot; Buyer = the plant manager IF a plant opex line is confirmed; Decision-maker = a corporate VP Manufacturing or capex committee if spend crosses the plant manager's sign-off threshold; Champion = a continuous-improvement / OpEx lead.</li><li>Notes the plant manager is plausibly the Buyer but is NOT the User — so &quot;will love it&quot; is evidence about the wrong person, and the enthusiasm signal is 0.3 verbal about the pain, not proof of a buyer.</li><li>Requires the plant manager's budget line + size + why-now (a cost target, a budget cycle) with an evidence rung; requires naming who signs above the plant manager's authority (the possibly-hidden decision-maker).</li><li>Fifth face: the experienced supervisor whose triage judgment the copilot codifies.</li><li>Verdict likely THIN MAP until the budget line and why-now are verified; names the cheapest probe (confirm the plant's opex line and the plant manager's sign-off ceiling).</li><li>Challenge stated plainly: an enthusiastic plant manager is not a complete map; you have loved-it evidence and no verified money.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts &quot;plant manager loves it so they'll buy&quot; as a complete map, leaves user and buyer fused, produces MAP HOLDS with no budget line or why-now, or invents the sign-off threshold.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/golden/02.md"
   },
   {
    "kind": "golden",
    "n": 3,
    "title": "Azraq: \"our obsessed reliability engineer is basically our buyer\" (kill line)",
    "venture": "Azraq",
    "input": {
     "heading": "Input",
     "html": "<p>Azraq: &quot;Our champion is a reliability engineer at a data-centre operator who's obsessed with our risk reports — he's basically our buyer. Who decides?&quot; No budget line and no why-now are offered.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Splits champion from buyer. The reliability engineer is a Champion and likely a User (feels the pain, will push it), but almost certainly holds no capex authority.</li><li>Names the missing Buyer as UNFOUND, with the likely title to go find (a Director of Data-Centre Operations / Head of Reliability / a risk or resilience budget owner) — named as a hypothesis to verify, not asserted as fact.</li><li>Applies the kill line: a &quot;buyer&quot; with no budget line and no why-now is not a buyer. Verdict COLLAPSED MAP; buyer-clarity caps at 1.</li><li>Names the cheapest probes: ask the engineer who signs his tool purchases and from which line; find the why-now (an outage, an insurer requirement, an SLA-credit event, a resilience mandate).</li><li>Challenge stated bluntly: an obsessed engineer is a champion, not a buyer — this map has no money in it, so it cannot be scored yet.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Accepts the reliability engineer as the buyer, returns MAP HOLDS, invents a budget figure or a why-now not in the input, or fabricates the buyer's name rather than marking it UNFOUND.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/golden/03.md"
   },
   {
    "kind": "golden",
    "n": 4,
    "title": "Durian Labs: user + buyer found, \"we're good to sell\" (hidden decision-maker)",
    "venture": "Durian",
    "input": {
     "heading": "Input",
     "html": "<p>Durian Labs: &quot;We've got the user — the ops coordinator who runs the workflow — and the buyer — the ops director with the tooling budget. We're good to sell.&quot; The first workflow the product automates touches customer records and an internal system of record.</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Accepts User and Buyer as genuinely distinct (this part is right — say so; do not manufacture a fault where there isn't one).</li><li>Surfaces the UNFOUND roles the happy path hides: because the workflow touches customer data and a system of record, a Decision-maker / veto sits late in the process — IT security, data protection, or procurement — invisible until contract stage. Names them as UNFOUND with the likely function, not a fabricated person.</li><li>Fifth face: whoever owns the current manual workflow or the incumbent tool, who loses control when it is automated.</li><li>Champion check: is the ops director also carrying it internally, or is there a separate champion? A buyer who is not also a champion needs one found.</li><li>Requires a why-now per role; flags any &quot;none found.&quot;</li><li>Verdict THIN MAP until the veto path is mapped. Challenge: every named stakeholder wants it, which means the one who doesn't has not been found — &quot;we're good to sell&quot; is the tell.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Declares the map complete on user + buyer alone, invents a specific security or procurement individual, ignores the data-touch veto, or fails to require a why-now.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/golden/04.md"
   },
   {
    "kind": "golden",
    "n": 5,
    "title": "mundane: scheduling tool for independent physiotherapists (correct collapse)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;We're selling a lightweight scheduling tool to independent physiotherapists. The physio uses it, pays for it out of their own pocket, and decides on their own. Map the roles.&quot; (deliberately mundane, low-stakes)</p>"
    },
    "expected": {
     "heading": "Expected shape",
     "html": "<ul><li>Correctly COLLAPSES User = Buyer = Decision-maker into one role — the sole-trader physio — and states this explicitly as the self-serve / prosumer exception the kill line allows. Does NOT treat the collapse as the error case.</li><li>Does NOT fabricate a &quot;decision-maker&quot; or a &quot;committee&quot; above a one-person business; deletes the roles that do not exist and says why.</li><li>Still requires the surviving essentials: a why-now (a no-show problem, a new clinic, going independent) with an evidence rung; a soft fifth face (the receptionist, or the pen-and-paper / spreadsheet habit and any current tool they would abandon).</li><li>Buyer-clarity feed: buyer = the physio, reachable directly (self-serve), budget = own card, small; has / has not paid for comparable tools.</li><li>Verdict MAP HOLDS, with an explicit note that this is a self-serve collapse, not the enterprise default.</li><li>Inverted challenge: warns against over-engineering four roles onto one person; the discipline here is subtraction, not addition.</li></ul>"
    },
    "fails": [
     {
      "heading": "Auto-fail if",
      "html": "<p>Invents a decision-maker or committee above the sole trader, treats the legitimate collapse as the kill-line error, fabricates a budget figure, or forces the four-row template where one role is the truth.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/golden/05.md"
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
     "html": "<p>&quot;Who should I sell my thing to?&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>There is no product, no pain, and no account here. The skill cannot map four roles from nothing and must not pretend to.</p>\n<ul><li>Must ask the ONE unblocking question: <strong>what is the one pain, and who feels it daily?</strong> (That anchors the User; buyer, decision-maker, and champion hang off a real pain in a real account.)</li><li>Must NOT invent a title, a budget line, a why-now, or a fifth face to fill the gap.</li><li>Must NOT emit a role map, a verdict, or a buyer-clarity score from the one-liner.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: returns the single anchoring question (the pain + who feels it), names it as the smallest thing that unblocks the map, fabricates no specifics. FAIL: produces a role map, any title, a budget, or a verdict from the one-liner.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/adversarial/01.md"
   },
   {
    "kind": "adversarial",
    "n": 2,
    "title": "solution in disguise (a pre-chosen buyer stated as settled)",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Our buyer is the Head of Operations — that's settled. Just map the rest around them.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>The fellow hands over a conclusion dressed as a fact. A senior title is not a buyer. The skill must not accept the framing.</p>\n<ul><li>Must refuse to lock &quot;Head of Operations = buyer&quot; on assertion alone. Trace the two things that make a buyer real: which budget line does the Head of Ops own, and what is their why-now?</li><li>Must test the role assignment: Head of Operations may be the Decision-maker (signs, holds veto) rather than the Buyer (owns the line item), or even a Champion — the three are routinely confused.</li><li>Must name the trap: picking the most senior name feels like finding the buyer, but it skips the budget line and the why-now, and it often collapses decision-maker into buyer. Seniority is not a line item.</li><li>Must ask for the line item and the trigger before assigning the role. Invents neither.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: reframes to budget-line + why-now, questions whether Head of Ops is buyer vs decision-maker vs champion, names the title-picking trap, invents no budget or trigger. FAIL: accepts Head of Operations as the buyer and builds the map around it with no budget line and no why-now.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/adversarial/02.md"
   },
   {
    "kind": "adversarial",
    "n": 3,
    "title": "out of scope",
    "venture": null,
    "input": {
     "heading": "Input",
     "html": "<p>&quot;Rank which unmet need we should build for first — must-have vs nice-to-have, Kano style.&quot;</p>"
    },
    "expected": {
     "heading": "Required behaviour",
     "html": "<p>This is need prioritisation, not stakeholder mapping. The skill must decline and name the right sibling — it does not poach.</p>\n<ul><li>Must state that user-buyer-decider-map maps WHO buys and how the deal moves; it does not rank needs or run Kano.</li><li>Must point to <strong><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></strong> for onioning needs to their core and sorting them must / performance / delighter.</li><li>May offer, as a next step, to map who buys the solution once the priority need is known — but must not produce the need ranking itself.</li><li>Must NOT invent needs or assign Kano categories.</li></ul>"
    },
    "fails": [
     {
      "heading": "Pass / fail",
      "html": "<p>PASS: declines the ranking, names <a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a>, optionally offers the follow-on stakeholder map, produces no need ranking or Kano sort. FAIL: ranks needs, runs Kano, or otherwise does the sibling's job.</p>"
     }
    ],
    "other": [],
    "file": "skills/user-buyer-decider-map/tests/adversarial/03.md"
   }
  ]
 },
 "files": {
  "skill": "skills/user-buyer-decider-map/SKILL.md",
  "template": "skills/user-buyer-decider-map/template.md",
  "example": "skills/user-buyer-decider-map/examples/sample.md",
  "rubric": "skills/user-buyer-decider-map/tests/rubric.json",
  "results": "skills/user-buyer-decider-map/tests/RESULTS.md"
 }
});
