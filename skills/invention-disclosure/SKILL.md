---
name: invention-disclosure
description: >-
  Capture one invention as a signed disclosure form — named human inventors, conception date,
  reduction-to-practice evidence, a dated log of every demo and deck — then return the
  protect / publish / secret / nothing decision, the filing route with a cited five-year cost
  ledger, and an honest verdict on whether the right adds a structural veto or is only a
  financing signal. Fires on "should we patent this", "invention disclosure", "file a
  provisional", "patent or trade secret", "is a patent worth it / does this IP make us
  defensible". Runs the disclosure clock first, because most jurisdictions give no grace period
  and the first unprotected demo already closed them. NOT for sequencing the moat (use
  `moat-design-canvas` — this hands it one candidate veto sentence), NOT for who owns pilot data
  (use `data-rights-clause`), NOT for regulatory obligations (use `compliance-gate`). Not counsel;
  never drafts claims.
metadata:
  supersedes: none
  type: generator
allowed-tools: Read Glob Grep Write
---

# Invention Disclosure

## What it does

Takes one thing a builder has made and returns four artefacts in a single filled form: a complete
**invention disclosure** (title, technical contribution, named natural-person inventors with each
one's contribution, conception date, reduction-to-practice evidence scored on the ladder, known
prior art, dependencies, assignment block); a **disclosure log** that computes, per jurisdiction,
whether the filing door is OPEN, CLOSING on a date, or already BURNED; the **protect / publish /
secret / nothing** decision with the route and a five-year cost ledger where every figure traces
to [`references/jurisdictions.md`](references/jurisdictions.md); and a **defensibility verdict** —
one candidate incumbent-veto sentence scored on three tests, returning `VETO CANDIDATE`,
`SIGNAL ONLY`, or `DO NOT FILE`.

It does not draft claims, does not answer a freedom-to-operate question, and does not state law as
fact without a dated source. It produces a scaffold, a route, a ledger, and a list of questions
addressed to counsel by name.

## The reframe

**A patent is a clock that started when you first showed the thing, not a decision you make when
you are ready.** The United States gives an inventor twelve months after their own disclosure. The
EPO gives six, and only for evident abuse or a recognised international exhibition — an ordinary
demo is not covered. Qatari legislation stipulates none, so treat Qatar as absolute novelty.
`[Fact]` — [`references/jurisdictions.md`](references/jurisdictions.md), checked 2026-09-15. So the sequence most teams run —
build, demo, pitch, win a pilot, then ask the IP question — has usually closed Europe and the Gulf
before the question is asked. The first step of this skill is therefore not "is it patentable" but
**"what have you already shown, to whom, and on what date"**. That single table is the work. Everything
after it is arithmetic.

**And a patent is not a moat.** It is a candidate for one sentence in `moat-design-canvas`: *"X
won't copy this because the claim covers their only economic path to ___."* That sentence survives
three tests — the claim sits on the cheapest copy path, infringement is detectable from outside the
competitor's walls, and someone could fund enforcement. Fail the first or second and the honest
answer is that the filing is a financing signal, which is a real and defensible reason to file
(a first patent grant is associated with materially higher employment and sales growth five years
on, through access to funding — Farre-Mensa, Hegde & Ljungqvist, *Journal of Finance* 2020 `[Fact]`)
but is not defensibility and must never be sold as it. Fail all three and filing is a way to publish
your method at your own expense.

## When to use / When NOT

Use it when a builder has made something specific and is asking whether to protect it, or is about
to do something — demo, publish, launch, present — that would close a door. Trigger phrases:
"should we patent this", "invention disclosure", "file a provisional", "patent or trade secret",
"is a patent worth it", "does this IP make us defensible".

| Request | Belongs to |
|---|---|
| "Design the moat / will this compound / how do we stay defensible as competitors show up" | `moat-design-canvas`. This skill hands that canvas **one candidate veto sentence** with a pass/fail score; it never sequences the four dated gates or writes the falsifiers. |
| "Who owns the pilot data / can we train on it / what do we sign at pilot #1" | `data-rights-clause`. Data rights are that skill's whole subject. This skill records third-party and customer-data dependencies as a row and routes them there. |
| "Are we compliant / does the AI Act apply / the buyer wants documentation" | `compliance-gate`. Regulatory obligations are a different legal question from an exclusion right, and that skill owns the artefacts map. |
| "Which half of our know-how is the defensible half" | `explicit-vs-tacit-capture`. Run it first when the builder cannot say what the contribution is — its tacit rows are the candidate trade secrets this skill then scores. |
| "Invent something / what should we build" | `invent-by-hand`. That produces the concept; this captures one that already exists. |
| "Which components must we build rather than inherit" | `build-vs-buy-boundary`. |

Also: **this is not counsel.** It does not draft claims, does not opine on whether you infringe
anyone (freedom to operate is a separate search and opinion), and does not confirm that a past
disclosure was legally enabling or public. And it does not invent an invention. If the builder has
a product name and no technical contribution, the input is not ready — ask the one question in
Step 1 and stop.

## Method

Fill in [`template.md`](template.md). Seven steps. Steps 1 and 3 gate; the rest decide.

```
Invention disclosure progress:
- [ ] Step 1: Gate — is there an invention, stated in one sentence, with an artefact behind it
- [ ] Step 2: Fill the disclosure — inventors, dates, contribution, prior art, dependencies, assignment
- [ ] Step 3: Disclosure log → the clock, per jurisdiction: OPEN / CLOSING / BURNED
- [ ] Step 4: Protect / publish / secret / nothing — five scored rows
- [ ] Step 5: Route and the five-year ledger, every figure cited
- [ ] Step 6: Defensibility verdict — the veto sentence, three tests, hand off
- [ ] Step 7: Kill-line self-check and the counsel questions
```

### Step 1 — Gate: is there an invention?

Two things must be present. **A technical contribution in one sentence**, in the shape *"instead of
[the ordinary way], the system [does this differently], which [measurable effect]."* And **at least
one artefact at 0.5** — code, a notebook, a design document, a lab record, a recorded run.

| What the builder says | Read it as |
|---|---|
| "An AI copilot for maintenance planners" | A product. No contribution named. Ask the question, stop. |
| "We fine-tuned an open model on our data" | A build step, not yet an invention. What is done differently? |
| "Instead of re-embedding the whole corpus nightly, we diff the sensor log and re-embed only changed segments, cutting index cost 80% at equal recall" | A contribution. Proceed. |

**Two exits, and they are not the same.** Confusing them is the commonest way to run this skill
wrong — once by stopping when there was a decision to make, once by carrying on over nothing.

| Situation | Exit |
|---|---|
| **No contribution sentence exists** — a product name, a category, a hunch | **Stop.** Ask the one question and nothing else. There is no decision to make yet |
| **The sentence exists and is well formed**, so the gate clears here — but when you reach Step 2, all three eligibility tests return NO (a standard model on standard features, no recited improvement) | **Do not come back here and stop.** The patent branch is closed, but the decision is live: go straight to Step 4, where the usual outcome is DEFENSIVE PUBLICATION or NOTHING. Skip the route and ledger — there is nothing to file |

The second exit is the one builders most need and most rarely get. "You cannot patent this" is not
the end of the conversation; the question of whether someone else can patent it against you is still
open, and it is answered in Step 4.

If the sentence does not exist, ask exactly one question — *what does the system do differently
from the ordinary way, and what measurable effect does that have?* — and stop. Do not invent the
contribution, the inventors, or the dates. An empty input is a request for evidence, not a zero.
Stopping means stopping: no fees, no grace periods, no jurisdiction table, and at most one sentence
noting that if anything has already been shown publicly the answer is time-sensitive.

### Step 2 — Fill the disclosure

| Field | The bar |
|---|---|
| Title | Plain and specific. Not a product name. |
| Problem | One sentence, the ordinary way and why it is inadequate. |
| **Technical contribution** | Framed to survive the three eligibility tests below. This is the field the whole filing lives or dies on. |
| **Inventors** | Named natural persons, each with the specific conceptual contribution they made. Someone who only implemented instructions is not an inventor. **An AI system is never an inventor** — it is a tool, like a simulator or CAD. |
| Conception date | When the idea was complete enough to be carried out, with what evidence fixes it (commit, notebook, dated document). |
| Reduction to practice | What exists and works, scored on the ladder. |
| Prior art known to the team | What you already know about, **including anything you published yourself**. Naming it is protective; concealing what you know is not. This is not a prior-art search. |
| Dependencies | Open-weight model licences, third-party libraries, customer data, collaborator contributions. Data rights → `data-rights-clause`. |
| Assignment | Signed by every named inventor. |

**Framing the contribution for eligibility.** Same invention, three audiences.

| Test | Passes on | Fails on |
|---|---|---|
| US §101 | A specific improvement to how the system works, with the effect recited | Applying known machine learning to a new data environment with no improvement to the ML process — *Recentive v. Fox* (Fed. Cir. 2025) `[Fact]` |
| EPO technical effect | A technical effect the claimed features actually produce; the two-hurdle approach, *G 1/19* | A business or presentational result dressed in technical words |
| Qatar / GCC exclusion | A technical process or product | A computer program, mathematical method, or scientific theory as such — expressly excluded by Qatar's Law No. 30 of 2006 `[Fact]` |

Write the effect as a number wherever one exists: latency, memory, cost per run, accuracy on a
named set, throughput, energy. "Better results" clears none of the three.

**Ownership.** Three populations, three different answers, and only the first is usually safe.

| Who | Default position | What to do |
|---|---|---|
| Employees | Qatar's patent law gives the employer the invention where it results from performing a contract or commitment devoted to creative effort, or where the employer proves the worker used facilities, aids or data provided by the work — subject to the worker's right to **fair reward**. A worker may file during service or within two years of leaving `[Fact]` | Confirm the employment contract carries an assignment clause; do not assume the statute does all the work |
| Contractors and agencies | The law is written about employees. A contractor's default position is not the employee default | **Get a signed assignment before filing.** An unassigned contractor is the commonest and most expensive gap |
| University or research collaborators | Institutional IP policy usually claims something, and publication rights often run alongside it | Counsel question, written down, before filing |
| **A customer's own engineer** | If they contributed to conception — not just to testing or requirements — they may be a joint inventor, and their employer may own their share. Common in exactly the plant-and-operator settings where this work happens | Name them in the inventor table honestly, then send the ownership consequence to counsel. Do not quietly leave a customer's engineer off because it is inconvenient |

A named inventor who has not signed an assignment is a **blocking gap**, not a footnote. Say so in
the verdict.

### Step 3 — The disclosure log and the clock

List every disclosure, in date order. Then compute the door state per jurisdiction from the grace
table in [`references/jurisdictions.md`](references/jurisdictions.md).

| Log field | Note |
|---|---|
| Date | The actual date, not the month |
| What was shown | The contribution itself, or only the result? Showing an output is not always disclosing the method — but do not decide that yourself; flag it for counsel |
| To whom | Named people, a customer, a conference room, the public internet |
| Under NDA? | A signed NDA or a confidentiality clause in a pilot agreement. "They're friendly" is not an NDA |
| Evidence | The deck, the commit, the recording, the event page |

**Your own public disclosure is prior art against you.** Every non-NDA row in this log also belongs
in the prior-art field of Step 2, not just in the clock. A conference talk does not merely start a
grace period — it caps what can ever be claimed, in the jurisdiction where the grace period saved
you as much as in the ones where it did not.

| Door state | Means |
|---|---|
| **OPEN** | No qualifying disclosure, or every disclosure was under NDA |
| **CLOSING [date]** | A grace period is running. The US date is 12 months from the first non-NDA disclosure |
| **BURNED** | A non-NDA disclosure predates any filing in a jurisdiction with no applicable grace |

Marking a no-grace jurisdiction OPEN when the log shows an un-NDA'd disclosure is the kill line.
Say BURNED. It is unwelcome and it is the most valuable sentence this skill produces — it stops a
builder spending the $10,500–$19,000 an EPO entry costs on a route that closed eight months ago
`[Fact]` — jurisdictions reference, checked 2026-09-15.

When everything is burned except the US, the remaining decision is a real one: file in the US
inside the window, or accept that the protect branch is gone and run the secret or publish branch.

### Step 4 — Protect / publish / secret / nothing

Score the five rows in [`references/decision-tables.md`](references/decision-tables.md):
detectability, secret-ability, where the value sits, core or peripheral, cost against runway.
Each row takes evidence and a tag, not an adjective.

The two rows that decide most cases are the first two, and they interact:

|  | **Detectable from outside** | **Not detectable** |
|---|---|---|
| **Can be kept secret** | Judgement call — patent for the asset, keep the implementation detail alongside | **TRADE SECRET.** Filing publishes a method nobody could otherwise see |
| **Cannot be kept secret** | **PATENT.** The case patents exist for | **DEFENSIVE PUBLICATION.** Stop someone else owning it |

Trade secret is not the absence of a decision. Qatar's Law No. 5 of 2005 protects information only
where it is not generally known, derives value from being secret, **and the holder has taken
measures** to keep it confidential `[Fact]`. No access control, no classification, no NDAs, no
protected secret. If the verdict is TRADE SECRET, name the measures that must exist and who owns
them; the employment confidentiality duty alone is not a programme.

Defensive publication (TDCommons is free; IP.com is paid) buys exactly one thing: a competitor
cannot patent this and charge you for your own method. It destroys your own novelty everywhere,
permanently — so it comes after the protect question, never instead of it.

### Step 5 — Route and ledger

Only for PATENT. Build the route from the door states in Step 3, then price it from
[`references/decision-tables.md`](references/decision-tables.md).

| Sequence | When |
|---|---|
| US provisional now | Any door is still open and the contribution is stable enough to enable later claims |
| Provisional → non-provisional at month 12 | The US alone is the market, or everything else is burned |
| Provisional → PCT at month 12 → national phases at month 30 | More than one market matters and the doors are open. Buys 18 further months to decide where |
| National filings in Bahrain, Kuwait and Qatar, centrally examined by the GCC Patent Office, within 12 months of the first filing | Those three states wanted. **Paris priority only — the route is not reachable through the PCT's 30-month window** `[Fact]`. The filing venue itself is `[Assumption]`: published sources describe it both as a single application designating the three states and as national filings forwarded for central examination. The deadline is the actionable part; confirm the venue with a local agent |
| Saudi Arabia and the UAE | Separate national filings; they sit outside the GCCPO's current arrangement `[Fact]` |

Every figure in the ledger cites its source row and its checked date. A figure that is not in the
reference file is written `[Assumption] — counsel to quote` and left unresolved. Do not smooth a
range into a single number to make a ledger look decisive.

**Tag each row by what kind of number it is.** This is the rule, and the ledger's exemplars must
obey it or they teach the opposite of the standard:

| Kind of figure | Tag | Why |
|---|---|---|
| An official fee on a published schedule, quoted at today's rate | `[Fact]` + source + checked date | It is published and verifiable now |
| An attorney band, a translation estimate, any market rate | `[Assumption]` | The reference calls these market bands, not tariffs; no one is bound by them |
| Any total built from a band, and any figure at a future date | `[Assumption]` | A forward-looking cost is a target, never a fact — official fees move too |

So "$4,515 Track One" is `[Fact]`; "$10,000–$30,000 drafting" and "five-year total $18,600–$49,000"
are `[Assumption]`, even though every input to them is cited.

Two timing facts belong in every ledger, because they change what the filing is for. USPTO standard
pendency runs around 26 months with first action at 20–24; Track One targets final disposition
within 12 months of the petition being granted, at $4,515 / $1,806 / $903 `[Fact]`. And Qatar's
published figures disagree with each other — agent guides say 2–3 years to grant, the ministry's
indicative registration period quoted in 2026 is 60–72 months. **Plan on the slower one and tag it.**
For a company raising or selling inside three years, the asset is the filing and the priority date,
not a grant. Say that rather than implying the grant will arrive in time to matter.

### Step 6 — The defensibility verdict

Write one sentence: **"[X] won't copy this because the claim covers their only economic path to
___."** Then score it on three tests.

| Test | Passes when |
|---|---|
| **Copy path** | The claim sits across the cheapest route a competent competitor would actually take |
| **Detectable** | You could see infringement from outside — product behaviour, API, docs, output artefacts, job ads |
| **Enforceable** | You, or a credible acquirer, could fund a challenge in the venue where copying would happen |

| Score | Verdict |
|---|---|
| 3/3 | **VETO CANDIDATE.** Hand the sentence to `moat-design-canvas`, which decides whether it holds against the rest of the incumbent's structure. Do not sequence the gates here |
| Copy path or detectable fails, financing case real and stated | **SIGNAL ONLY.** File as a financing and diligence decision, priced as such. Never described as a moat |
| Copy path fails and the financing case is aspiration | **DO NOT FILE.** Take the publish, secret, or nothing branch |

DO NOT FILE is a respectable, common answer. Only a quarter of software startups hold patents, and
two thirds of venture-backed ones; cost is the reason most often given for skipping a filing on a
major innovation — the 2008 Berkeley Patent Survey, 1,332 US startups `[Fact]`. A skill that returns
PATENT every time has not been thinking.

### Step 7 — Kill-line self-check

**Kill line.** The output is auto-failed if any of these is true:

- An AI system, a company, or an unnamed "the team" is listed as an inventor.
- A jurisdiction with no applicable grace period is marked OPEN while the disclosure log shows a
  non-NDA disclosure that predates any filing.
- A fee or timeline appears that is not traceable to `references/jurisdictions.md` and is not
  tagged `[Assumption]`.
- The output calls a patent a moat without running the three tests.
- Any legal specific is stated `[Fact]` without a dated source, or the output drafts claim language,
  contract language, or a freedom-to-operate opinion.
- A named inventor has not signed an assignment and the output still recommends filing without
  naming that as a blocking gap.

Then write the counsel questions — classification of past disclosures, claim scope, freedom to
operate, collaborator and contractor ownership, export control, any jurisdiction not in the
reference — addressed to a named role. Write the question. Do not write the answer.

## Evidence standard

The ladder is `evidence-ladder`'s, used unchanged: money moved 1.0, behaviour observed 0.7, artefact
shown 0.5, verbal commitment 0.3, opinion 0.1. Rungs never stack, and a claim's weight is its best
rung, never the sum. Two claims get scored here.

| Claim | 1.0 | 0.7 | 0.5 | 0.3 | 0.1 |
|---|---|---|---|---|---|
| **The invention exists and works** | A customer paid for the outcome it produces | A measured run on real data with a recorded delta against the ordinary way | Code, notebook, design document, lab record | "We plan to build it" | "It's novel" |
| **The IP is worth money** | A licence fee actually paid, or a round that closed with the IP priced into it | A buyer or investor asked for the filing in diligence, logged | A prior-art search report or a written opinion | An investor said they want the filing in the data room; a signed but unfunded term sheet naming it | "Investors will love it", "patents are a moat" |

Two impostors to catch, because both are common in this territory. A **signed term sheet that
names the IP but has moved no cash** is a promise about the future, so it is 0.3 — the ladder's
money rung needs cash or budget actually to have changed hands. And **"investors will love it"** is
the builder's own prediction, which is opinion at 0.1 and can never be scored higher; scoring an
opinion above 0.1 fails the skill outright.

One note on reading the ladder here. For claim 1 the 0.7 rung is **the system's** observed
behaviour, evidenced by logs or a recorded run, not a counterparty's — an unrun plan is 0.3 however
confident the team is. That is a narrower reading of "behaviour observed" than the discovery skills
use, and it is stated rather than smuggled.

The bar: **do not file on a contribution below 0.5.** A patent application must enable someone
skilled in the field to carry the invention out; an idea at 0.3 cannot be enabled, so the filing is
either invalid or so narrow it protects nothing. And the two claims are independent — a working
invention at 0.7 with IP value at 0.1 is a real thing that is not worth filing on, which is exactly
the case DO NOT FILE exists for.

Tag every empirical claim `[Fact]`, `[Assumption]`, or `[Hypothesis]`. Every legal specific carries
its source and checked date or it is `[Assumption] — confirm with counsel`. Forward-looking costs
and timelines are `[Assumption]` targets, never facts.

## What good looks like

Foundry Signal, factory copilot. The builder asks whether to patent "our AI scheduling engine".

> **Contribution.** Instead of re-running the full constraint solve on every sensor update, the
> system detects which constraints the update can affect and re-solves only that partition,
> cutting median reschedule latency from 47s to 4.1s on the 12-line plant. `[Fact]` — measured run,
> 2026-06 benchmark, behaviour 0.7.
>
> **Inventors.** Priya R. (conceived the partition-detection rule), Tomas L. (conceived the
> incremental re-solve). Two engineers implemented to specification and are not inventors. The
> model-assisted code search used during development is a tool, not an inventor.
>
> **Assignment.** Priya assigned under her employment contract. Tomas was a contractor until March
> and has **not** signed. **Blocking gap** — no filing proceeds until he does.
>
> **Disclosure log → the clock.**
>
> | Date | What | To whom | NDA |
> |---|---|---|---|
> | 2026-04-18 | Latency result and the partition approach, on a slide | Trade-show booth, public | No |
> | 2026-06-02 | Full method walkthrough | Pilot customer | Yes, pilot agreement §7 |
>
> US: **CLOSING 2027-04-18.** EPO: **BURNED** — the April talk was not an abuse case or a recognised
> exhibition. Qatar: **BURNED** — no grace period stated in the law. `[Fact]`, jurisdictions
> reference, checked 2026-09-15.
>
> **Decision.** Detectable: partly — latency is visible, the partition rule is not. Secret-able: no,
> the behaviour is observable in the product. Core: yes. → PATENT branch, US only, because the
> European and Gulf doors are shut.
>
> **Route and ledger.** US provisional now: $325 official `[Fact]` — USPTO schedule, revised
> 2026-08-14 — plus $2,000–$5,000 drafting `[Assumption]`, a market band. Non-provisional by
> 2027-04-18. Five-year US-only band $18,600–$49,000 `[Assumption]`. Track One is $4,515 `[Fact]` if
> the Series A timeline needs a grant.
>
> **Veto sentence.** "The MES incumbent won't copy this because the claim covers their only economic
> path to sub-5s rescheduling." Copy path: PASS. Detectable: **FAIL** — proving they partition
> internally needs their source. Enforceable: unfunded.
>
> **Verdict: SIGNAL ONLY.** File the US provisional this month for the priority date and the
> diligence answer, and price it as a financing decision. It is not the moat. The moat case still
> rests on the plant-specific constraint corpus — take that to `moat-design-canvas`.
>
> **For counsel.** (1) Did the April slide disclose the method or only the result? (2) Contractor
> assignment wording and whether it can be made effective as of conception. (3) Freedom to operate
> against the two incumbent scheduling patents Priya has seen.

## Gotchas

**The demo that burned Europe and the Gulf.** The single most expensive mistake in this skill's
territory, and it is always already done by the time anyone asks. Run the log first. A team that
learns on day one that its January conference talk closed the EPO can at least still file in the US
within the window; a team that learns in month fourteen has nothing.

**"The model is the invention."** Usually wrong twice. Trained weights are better protected as a
trade secret — they are undetectable from outside and a patent would publish what nobody could
otherwise read. What may be patentable is the method around them: the training loop, the data
pipeline, the retrieval or partition scheme, the guardrail mechanism. Split them and score each
separately.

**The unassigned contractor.** An invention with an unassigned co-inventor cannot be cleanly filed
or cleanly sold, and this surfaces in diligence at the worst possible moment. It is a blocking gap,
not a to-do.

**The placeholder provisional.** A two-page provisional written to "get something on file" does not
support the claims the non-provisional will need. It is worth little and it creates false comfort
for twelve months. A provisional is only as good as its enablement.

**Mistaking the PCT for a patent.** The PCT grants nothing. It buys 30 months and one international
search. "We have a PCT" in a deck means "we have deferred every real decision by eighteen months",
which is sometimes exactly right and is never protection.

**Treating the GCC Patent Office as a regional grant.** Since 2021 it issues no unified patent. It
examines centrally for Bahrain, Kuwait and Qatar; the national offices grant. Saudi Arabia, the UAE
and Oman sit outside it. And it runs on Paris priority, so the 12-month deadline applies — the PCT's
30-month window does not reach it `[Fact]`.

**Patent pending as protection in a deck.** A pending application confers no right to exclude. It
is a priority date and a queue position. Write it as that. And the twenty-year term runs from the
**filing** date, not from grant — so roughly 26 months of US pendency is spent inside the term with
nothing enforceable, and a deck promising "protected for 20 years" is wrong at both ends.

**A patent portfolio as a moat by count.** Five peripheral filings are a burn rate. One filing on
the copy path is a veto candidate. The three tests care about position, never about number.

**Fabricated legal certainty.** Asserting a fee, a deadline, or "the law requires X" without a dated
source is an auto-fail even when it sounds right, and it is the failure mode a confident model falls
into most easily on this subject. Cite the reference row or tag it `[Assumption]`.

## Examples

[examples/sample.md](examples/sample.md) — a full worked run for Meridian Grid's cross-operator
incident-scoring method: doors still open because every disclosure was under a pilot NDA, a US
provisional filed ahead of a PCT decision, a five-year ledger across the US, the EPO and Qatar, and
a veto sentence that passes all three tests and is handed to `moat-design-canvas` rather than
sequenced here.

## Related skills

| Skill | Handoff |
|---|---|
| `moat-design-canvas` | Receives the candidate veto sentence and its 3-test score. That canvas decides whether the veto holds and sequences the dated gates; this skill never does. A VETO CANDIDATE is an input to its incumbent-veto blank, not a finished moat. |
| `data-rights-clause` | Owns data ownership, training rights and survival terms. This skill records the dependency row and routes there; it drafts no contract language. |
| `explicit-vs-tacit-capture` | Runs upstream when the builder cannot name the contribution. Its tacit rows are the candidate trade secrets this skill scores in Step 4. |
| `invent-by-hand` | Produces the concept. This captures and protects one that already exists. |
| `compliance-gate` | Regulatory obligations and the artefacts map. A different legal question; never answered here. |
| `evidence-ladder` | Owns the rungs this skill borrows to score reduction to practice and IP value. Weighing a single lone signal is that skill's job. |
| `pilot-six-term-sheet` | The pilot agreement that decides whether a customer demo counts as an NDA disclosure in Step 3. Confidentiality in the term sheet is what keeps the door open. |

Supersedes: none. It beats the generic "should we patent this" answer not by listing patent types
but by running the disclosure clock first, refusing to score an outcome on an undated log, and
separating the exclusion right from the financing signal instead of selling both as a moat.
