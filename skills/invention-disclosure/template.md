# Invention Disclosure

A patent is a clock that started when you first showed the thing. Fill Part C before you fall in
love with a route — it decides which routes still exist. If Step 1's gate does not clear, stop and
answer the one question. Not counsel: this is a scaffold, a route and a counsel-question list.

**Disclosure ID:** _[ID]_ **Date prepared:** _[YYYY-MM-DD]_ **Prepared by:** _[name]_

---

## Part A — The gate

**Technical contribution, one sentence.** Shape: *instead of [the ordinary way], the system [does
this differently], which [measurable effect]*.

> _[one sentence]_

**Artefact behind it (must score ≥ 0.5):** _[code / notebook / design doc / lab record / recorded run]_
— ladder score _[0.5 / 0.7 / 1.0]_, tag _[Fact]_

- [ ] The contribution sentence exists and names a difference, not a product.
- [ ] At least one artefact scores ≥ 0.5.

If either box is empty: **STOP.** Ask only *what does the system do differently from the ordinary
way, and what measurable effect does that have?* Invent nothing — no fees, no grace periods, no
jurisdictions, and at most one sentence noting that if anything has already been shown publicly the
answer is time-sensitive.

**If both boxes tick, the gate has cleared — and it stays cleared.** Two later findings look like
gate failures and are not. If Part B2's eligibility checks all come back NO, or if the effect turns
out to be real but not technical (timing, distribution, reach), **do not come back here and stop.**
The patent branch is closed; the decision is not. Go to Part D, skip Part E, and expect
DEFENSIVE PUBLICATION or NOTHING. A non-technical advantage also belongs in `moat-design-canvas`.

| Where you ended up | Continue at |
|---|---|
| Gate did not clear — no contribution sentence | Nowhere. Ask the one question and stop |
| Gate cleared, eligibility all NO, or the effect is non-technical | **Part D**, then Part G and Part H. Skip Parts B3–B6 detail and Part E |
| Gate cleared, eligibility survivable | Part B in full, then C, D, E, F |

---

## Part B — The disclosure

### B1. Identification

| Field | Entry |
|---|---|
| Title (plain, specific, not a product name) | _[title]_ |
| Problem — the ordinary way and why it is inadequate | _[one sentence]_ |
| Field / domain | _[e.g. industrial scheduling, grid risk]_ |

### B2. Technical contribution in full

_[Describe what is done differently, in enough detail that someone skilled in the field could carry
it out. State the measurable effect as a number wherever one exists — latency, memory, cost per run,
accuracy on a named set, throughput, energy. "Better results" clears no eligibility test.]_

**Eligibility framing check:**

| Test | Does the contribution as written clear it? | Why |
|---|---|---|
| US §101 — a specific improvement to how the system works, not known ML on new data | _[YES / NO]_ | _[reason]_ |
| EPO technical effect — a technical effect the claimed features actually produce | _[YES / NO]_ | _[reason]_ |
| Qatar / GCC — not a computer program, mathematical method or theory as such | _[YES / NO]_ | _[reason]_ |

A NO is not fatal; it is a rewrite instruction. Say what would have to be recited to turn it YES.

### B3. Inventors — named natural persons only

| Name | Role | Specific conceptual contribution | Employment status | Assignment signed? |
|---|---|---|---|---|
| _[name]_ | _[title]_ | _[what THEY conceived — not what they built to instruction]_ | _[employee / contractor / collaborator]_ | _[YES / NO — date]_ |

**Not inventors** (implemented to instruction, or a tool): _[names; and any AI system used]_

- [ ] No AI system, company, or "the team" appears in the inventor table.
- [ ] Every named inventor has a specific conceptual contribution written next to them.
- [ ] Every named inventor has either signed an assignment, **or** is named with the reason they
      cannot sign and the counsel question that follows. **Either way an unsigned inventor is a
      blocking gap** — but the two need different actions: a contractor signs, whereas a customer's
      engineer may be unable to, because their employer may own the share. Route that one to counsel
      in Part H; do not treat silence as a signature, and do not drop them from the table.

### B4. Dates and evidence

| Field | Entry | Evidence | Ladder | Tag |
|---|---|---|---|---|
| Conception date | _[YYYY-MM-DD]_ | _[commit / notebook / dated doc]_ | _[0.5]_ | _[Fact]_ |
| Reduction to practice | _[YYYY-MM-DD or "constructive only"]_ | _[measured run / working code]_ | _[0.5 / 0.7 / 1.0]_ | _[Fact]_ |

### B5. Prior art known to the team

| Reference | What it does | How this differs |
|---|---|---|
| _[patent / paper / product]_ | _[one line]_ | _[one line]_ |

This is not a prior-art search. Naming what you already know is protective; a search is counsel's.

### B6. Dependencies

| Dependency | Licence / rights position | Risk to the filing | Route to |
|---|---|---|---|
| _[open-weight model, library, dataset, customer data]_ | _[licence name; "open-weight" is not open source]_ | _[one line]_ | _[`data-rights-clause` for data terms]_ |

---

## Part C — The disclosure log and the clock

**Fill this before choosing anything.** Every disclosure, date order.

| # | Date | What was shown (method, or only the result?) | To whom | Under NDA? | Evidence |
|---|---|---|---|---|---|
| 1 | _[YYYY-MM-DD]_ | _[…]_ | _[…]_ | _[YES — instrument + clause / NO]_ | _[deck / recording / event page]_ |

**First non-NDA disclosure:** _[YYYY-MM-DD, or "none"]_

### The clock

| Jurisdiction | Grace available | Door state | Deadline |
|---|---|---|---|
| United States | 12 months, inventor's own disclosure | _[OPEN / CLOSING / BURNED]_ | _[YYYY-MM-DD]_ |
| EPO / UK | 6 months, abuse or recognised exhibition only | _[OPEN / BURNED]_ | _[—]_ |
| Qatar | none stated | _[OPEN / BURNED]_ | _[—]_ |
| Saudi Arabia | 6 mo abuse / 12 mo recognised exhibition only | _[OPEN / BURNED]_ | _[—]_ |
| UAE | 12 months | _[OPEN / CLOSING / BURNED]_ | _[YYYY-MM-DD]_ |
| Other: _[…]_ | _[from the reference]_ | _[…]_ | _[…]_ |

Grace figures: `references/jurisdictions.md`, checked _[date]_. A no-grace jurisdiction marked OPEN
against a non-NDA disclosure in the log is the kill line — write BURNED.

- [ ] Every log row has a real date, not a month.
- [ ] Every NDA claim names the instrument and clause.
- [ ] Door states follow from the log, not from hope.

---

## Part D — Protect / publish / secret / nothing

| # | Row | Answer + evidence | Ladder | Tag | Pushes toward |
|---|---|---|---|---|---|
| 1 | Detectability — could you tell from their product, API, docs, output or job ads? | _[…]_ | _[…]_ | _[…]_ | _[PATENT / SECRET]_ |
| 2 | Secret-ability — can it stay secret as the product ships and the team turns over? | _[…]_ | _[…]_ | _[…]_ | _[SECRET / PATENT or PUBLISH]_ |
| 3 | Where the value sits — exclusion, or signal to investors and buyers? | _[…]_ | _[…]_ | _[…]_ | _[PATENT / SIGNAL]_ |
| 4 | Core or peripheral to the wedge? | _[…]_ | _[…]_ | _[…]_ | _[protect / publish or nothing]_ |
| 5 | Cost against runway — does the Part E ledger fit? | _[…]_ | _[…]_ | _[…]_ | _[proceed / defer and say so]_ |

**Outcome:** _[PATENT / TRADE SECRET / DEFENSIVE PUBLICATION / NOTHING]_ — because _[one sentence]_

**If TRADE SECRET**, the measures that must exist (protection requires measures, not intent):

| Measure | Exists today? | Owner | By when |
|---|---|---|---|
| Access control on the method / weights / corpus | _[YES / NO]_ | _[name]_ | _[date]_ |
| Classification and marking | _[…]_ | _[…]_ | _[…]_ |
| NDAs with staff, contractors and counterparties | _[…]_ | _[…]_ | _[…]_ |
| Exit process that retrieves and revokes | _[…]_ | _[…]_ | _[…]_ |

**If DEFENSIVE PUBLICATION**, venue _[TDCommons (free) / IP.com (paid) / other]_ and the date.
Note plainly: this destroys your own novelty everywhere, permanently.

---

## Part E — Route and five-year ledger

_Only if the outcome is PATENT._

**Route chosen:** _[US provisional only / US only / provisional → PCT → national phases / + GCCPO / other]_
**Because:** _[which doors are open, which markets matter]_

| Step | Target date | Cost | Source row + checked date | Tag |
|---|---|---|---|---|
| _[US provisional]_ | _[YYYY-MM]_ | _[$…]_ | _[jurisdictions.md, USPTO fee schedule, 2026-08-14]_ | _[Fact]_ |
| _[…]_ | _[…]_ | _[…]_ | _[…]_ | _[…]_ |
| **Five-year total** | | _[$… – $…]_ | | _[Assumption]_ |

Any figure not in `references/jurisdictions.md` is written `[Assumption] — counsel to quote`. Do not
smooth a range into one number to make the ledger look decisive.

**Timing reality:** _[US standard ~26 months; Track One ~12 from petition grant at $4,515 / $1,806 /
$903; Qatar 2–3 years per agent guides vs 60–72 months ministry indicative — plan on the slower]_

**What the asset actually is by the horizon that matters:** _[the filing and the priority date, or
the grant — say which, and why]_

---

## Part F — Defensibility verdict

**Candidate veto sentence:**

> **"[X] won't copy this because the claim covers their only economic path to ___."**

| Test | Pass? | Evidence / reasoning | Tag |
|---|---|---|---|
| Copy path — the claim sits on the cheapest route a competent copier would take | _[PASS / FAIL]_ | _[…]_ | _[Assumption]_ |
| Detectable — infringement visible from outside their walls | _[PASS / FAIL]_ | _[…]_ | _[…]_ |
| Enforceable — you or a credible acquirer could fund a challenge in that venue | _[PASS / FAIL]_ | _[…]_ | _[…]_ |

**Verdict:** _[VETO CANDIDATE (3/3) / SIGNAL ONLY / DO NOT FILE]_

| Verdict | What happens next |
|---|---|
| VETO CANDIDATE | Hand the sentence to `moat-design-canvas`. It decides whether the veto holds against the incumbent's wider structure. **Do not sequence the gates here.** |
| SIGNAL ONLY | File as a financing and diligence decision, priced as such. Write the sentence "this is not the moat" into the record so no deck inherits the opposite. |
| DO NOT FILE | Take the publish, secret, or nothing branch from Part D. This is a common, respectable answer. |

---

## Part G — Kill-line self-check

- [ ] No AI system, company, or unnamed "team" in the inventor table.
- [ ] No no-grace jurisdiction marked OPEN against a non-NDA disclosure in the log.
- [ ] Every fee and timeline traces to `references/jurisdictions.md` or is tagged `[Assumption]`.
- [ ] The three tests were run before any sentence called a patent a moat.
- [ ] No legal specific stated `[Fact]` without a dated source. No claim language drafted. No
      freedom-to-operate opinion given.
- [ ] Every named inventor has signed an assignment, or the blocking gap is named in the verdict.

Any unticked box: fix it before the artefact leaves the room.

---

## Part H — For counsel, not for us

Write the questions. Do not write the answers.

| # | Question | Addressed to |
|---|---|---|
| 1 | _[Did the [date] disclosure disclose the method, or only the result?]_ | _[external patent counsel]_ |
| 2 | _[Contractor assignment wording, and whether it can be made effective as of conception]_ | _[counsel]_ |
| 3 | _[Freedom to operate against the references in B5]_ | _[counsel — separate search and opinion]_ |
| 4 | _[Claim scope]_ | _[counsel]_ |
| 5 | _[Any jurisdiction not in the reference file]_ | _[local agent]_ |

---

## Part I — Next step

- **PATENT** → the single next action with a date and an owner: _[…]_. Book the counsel call before
  the nearest CLOSING date in Part C, not after.
- **TRADE SECRET** → the measures table in Part D is the deliverable. Unmaintained secrecy is not
  protection.
- **DEFENSIVE PUBLICATION** → publish, dated, and log it — it is itself a disclosure.
- **NOTHING** → write down what would change the answer, so the question is not reopened monthly.
- Any door marked CLOSING is a deadline in someone's calendar, with a name against it, today.
