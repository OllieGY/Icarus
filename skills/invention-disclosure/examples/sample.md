> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked run — Meridian Grid

**The ask.** "We've built something nobody else has for scoring data-centre outage risk across
operators. Should we patent it?"

---

## Part A — The gate

**Technical contribution, one sentence.** Instead of scoring each site against its own history, the
system aligns incident sequences across operators by matching equipment-class and load-profile
fingerprints, then scores a site against the aligned cross-operator distribution — surfacing a
failure precursor a single-operator model cannot see until it has happened locally at least twice.

**Artefact:** the scoring pipeline plus a 2026-07 backtest over four operators' anonymised incident
histories, recording 11 precursor detections with a median 9-day lead over the incumbent
single-site model. Ladder **0.7** (measured run on real data). `[Fact]`

Gate clears. Both boxes ticked.

---

## Part B — The disclosure

### B1. Identification

| Field | Entry |
|---|---|
| Title | Cross-operator alignment of incident sequences for site-level failure-precursor scoring |
| Problem | Single-operator risk models need a failure to have occurred locally before they can weight it, so a precursor is only learned after it has already cost an outage. |
| Field | Data-centre reliability engineering |

### B2. Technical contribution in full

The alignment step is the contribution, not the scoring. Incident sequences from separate operators
are not directly comparable — equipment mixes, load patterns and maintenance regimes differ — so
pooling them naively produces noise. The system computes a fingerprint per site from equipment-class
mix and load-profile shape, matches sites across operators on fingerprint distance, and scores an
incoming sequence against the matched cohort's distribution rather than the site's own history.

Effect: median 9-day lead over the single-site incumbent on the 11 precursors the backtest caught,
at equal false-positive rate. `[Fact]` — 2026-07 backtest.

| Test | Clears? | Why |
|---|---|---|
| US §101 | YES | The recited improvement is the fingerprint-alignment step and its effect on detection lead time, not "use ML on outage data". Under *Recentive*, applying known ML to a new data environment would fail; the alignment mechanism is the specific improvement. |
| EPO technical effect | YES, arguably | Earlier detection of an equipment failure precursor is a technical effect on a technical system. `[Assumption]` — counsel to confirm the framing survives the two-hurdle approach. |
| Qatar / GCC | NEEDS REWRITE | As drafted it reads close to a data-processing method. Recite the sensor-derived inputs and the maintenance action triggered, so it is a process applied to physical infrastructure rather than a computer program as such. |

### B3. Inventors

| Name | Role | Specific conceptual contribution | Status | Assignment |
|---|---|---|---|---|
| Dana O. | Reliability lead | Conceived the fingerprint-matching basis — equipment class plus load-profile shape as the alignment key | Employee | YES, 2025-11-03 |
| Wei-Lin C. | ML engineer | Conceived scoring against the matched cohort distribution rather than the pooled distribution | Employee | YES, 2026-01-12 |

**Not inventors:** two engineers who implemented the pipeline to specification; the code-generation
assistant used during development, which is a tool.

All boxes tick. No blocking gap.

### B4. Dates and evidence

| Field | Entry | Evidence | Ladder | Tag |
|---|---|---|---|---|
| Conception | 2025-10-21 | Dated design note, "cross-op alignment v0", in the engineering wiki | 0.5 | `[Fact]` |
| Reduction to practice | 2026-07-14 | Backtest run, four operators, 11 precursors | 0.7 | `[Fact]` |

### B5. Prior art known to the team

| Reference | What it does | How this differs |
|---|---|---|
| The incumbent DCIM platform's risk module | Scores each site against its own incident history | No cross-operator alignment; cannot see a precursor the site has not already experienced |
| Two published papers on pooled reliability statistics | Pool failure data across a fleet under common ownership | Common ownership means comparable equipment and no alignment problem; the fingerprint step is unnecessary there and absent |

Not a search. Counsel's question 3 below.

### B6. Dependencies

| Dependency | Position | Risk | Route |
|---|---|---|---|
| Operator incident histories | Covered by the pilot data-rights clause signed at pilot #1 | None to the filing; central to the moat | `data-rights-clause` owns the terms |
| Open-weight embedding model for load-profile shapes | Community licence with use restrictions — not open source under the OSI definition | Low for patentability; a diligence question | Note in the data room |

---

## Part C — The disclosure log and the clock

| # | Date | What was shown | To whom | NDA? | Evidence |
|---|---|---|---|---|---|
| 1 | 2026-02-09 | The alignment concept and early results | Operator A, pre-pilot | YES — mutual NDA, signed 2026-02-05 | Executed NDA |
| 2 | 2026-07-22 | Full method, backtest numbers | Four pilot operators | YES — pilot agreement confidentiality clause | Executed pilot agreements |
| 3 | 2026-08-30 | Outcome only: "9-day median lead", no method | Investor update, 40 recipients, no NDA | NO | The update email |

**First non-NDA disclosure:** 2026-08-30 — but it disclosed a **result**, not the method.

### The clock

| Jurisdiction | Grace | Door | Deadline |
|---|---|---|---|
| United States | 12 months, own disclosure | **OPEN** | — (would be 2027-08-30 if the August email counted) |
| EPO / UK | 6 months, abuse or recognised exhibition only | **OPEN** | — |
| Qatar | none stated | **OPEN** | — |
| Saudi Arabia | 6 / 12 months, narrow | **OPEN** | — |
| UAE | 12 months | **OPEN** | — |

Grace figures: `references/jurisdictions.md`, checked 2026-09-15. `[Fact]`

**The live risk, stated plainly.** Whether the 2026-08-30 investor email was an enabling public
disclosure is **not this skill's call** — it went to 40 people with no confidentiality obligation,
and it described the effect rather than the mechanism. Treated as `[Assumption]` pending counsel
(question 1). Every door is recorded OPEN on the basis that it disclosed no method, and the whole
route below is built to file before that assumption can be tested by anyone else. **This is the one
fact that would change the plan if counsel disagrees.**

---

## Part D — Protect / publish / secret / nothing

| # | Row | Answer | Ladder | Tag | Pushes |
|---|---|---|---|---|---|
| 1 | Detectability | A competitor selling cross-operator benchmarking must show customers which cohort a site is matched against — the alignment is visible in the product's own output | 0.5, artefact: the incumbent's comparable feature shows its peer group | `[Fact]` | PATENT |
| 2 | Secret-ability | No. The cohort membership appears in the customer-facing report; a determined competitor reads the approach off the output | 0.5 | `[Fact]` | PATENT or PUBLISH |
| 3 | Where the value sits | Exclusion. The corpus is the compounding asset, and the alignment method is the only way to use a cross-operator corpus at all — blocking it blocks the category | 0.5 | `[Assumption]` | PATENT |
| 4 | Core or peripheral | Core. It is the wedge | 0.7, behaviour: three of four operators changed a maintenance decision on the output | `[Fact]` | protect |
| 5 | Cost against runway | $33k–$72k over five years on the PCT route against an 18-month runway and a raise in progress. Fits if the raise closes; the provisional alone is $2.3k–$5.3k and fits regardless | — | `[Assumption]` | proceed, staged |

**Outcome: PATENT** — because the method is visible in the product's own output, so it cannot be
kept secret, and it sits on the category's only route.

---

## Part E — Route and five-year ledger

**Route:** US provisional now → PCT at month 12 → national phases at month 30 in the US, the EPO and
Qatar. Chosen because every door is open, the operators are in three jurisdictions, and the PCT buys
18 months to see which market actually pays before committing national-phase money.

| Step | Target | Cost | Source, checked 2026-09-15 | Tag |
|---|---|---|---|---|
| US provisional, official fee | 2026-10 | $325 (undiscounted) | USPTO fee schedule, rev. 2026-08-14 | `[Fact]` |
| Provisional drafting, enabling | 2026-10 | $2,000–$5,000 | Attorney band, decision-tables Route A — a market band, not a tariff | `[Assumption]` |
| PCT international phase, all in | 2027-10 | $5,500–$10,000 | WIPO fee tables 2026-08-01; filing fee CHF 1,330 less e-filing reduction | `[Assumption]` — official fee `[Fact]`, attorney portion a band |
| US national phase, drafting and filing | 2029-04 | $12,000–$32,000 | decision-tables Route C | `[Assumption]` |
| US office-action responses, 2–3 | 2030–2031 | $3,000–$10,500 | decision-tables Route C | `[Assumption]` |
| US issue fee | 2031 | $1,290 | USPTO fee schedule, rev. 2026-08-14 | `[Fact]` at today's rate |
| EPO entry incl. translation | 2029-04 | $10,500–$19,000 | decision-tables Route C | `[Assumption]` |
| Qatar national phase | 2029-04 | $3,000–$6,000 | **local agent quote required; agent fees are not published** | `[Assumption]` |
| **Five-year total** | | **$37,600–$84,100** | | `[Assumption]` |

Tagging follows the Step 5 rule: a published official fee quoted at today's rate is `[Fact]` with
its source; an attorney band, and any total built from one, is `[Assumption]`. **EPO and Qatari
prosecution after entry, European validation, and all annuities are not in this total** — they are
real money and no one has quoted them yet.

**Timing reality.** US standard pendency ~26 months, first action 20–24; Track One would target final
disposition 12 months from petition grant at $4,515 undiscounted. Qatar's published figures conflict:
2–3 years in agent guides, 60–72 months as the ministry's indicative registration period — **the
ledger plans on 60–72 months** and tags it `[Assumption]`. `[Fact]` for both source figures.

**What the asset is by the horizon that matters.** The Series A closes inside 12 months. No grant
will exist by then anywhere. The asset at that date is **the provisional's priority date and a clean
inventor-and-assignment record** — that is what the data room contains, and it should be described
as exactly that.

---

## Part F — Defensibility verdict

> **"The DCIM incumbent our operators already run won't copy this because the claim covers their
> only economic path to cross-operator precursor detection."**

| Test | Pass? | Reasoning | Tag |
|---|---|---|---|
| Copy path | **PASS** | Any cross-operator product must align non-comparable fleets somehow. Fingerprint alignment is the cheap route; the alternative is manual per-pair calibration, which does not scale past a handful of operators | `[Assumption]` — our read of their options |
| Detectable | **PASS** | The cohort a site is scored against is shown in the customer-facing report. If they ship it, we can see it | `[Fact]` — the incumbent's existing peer-group feature displays this |
| Enforceable | **PASS, conditionally** | US venue, and the incumbent is a US-listed vendor with assets to reach. We could not fund a challenge today; an acquirer could, and the Series A changes the answer | `[Assumption]` |

**Verdict: VETO CANDIDATE (3/3).**

**Handoff.** The sentence goes to `moat-design-canvas` as a candidate for its incumbent-veto blank.
That canvas decides whether it holds against the incumbent's wider structure — and note it already
has a stronger structural row available here: the operators' data-isolation contracts, which the
incumbent cannot un-sign. **A patent veto and a data-rights veto are not the same veto, and the
canvas, not this skill, decides which one carries the moat.** The four dated gates are not sequenced
here.

---

## Part G — Kill-line self-check

- [x] No AI system or unnamed team in the inventor table — the code assistant is listed as a tool.
- [x] No no-grace jurisdiction marked OPEN against a non-NDA method disclosure; the one non-NDA
      disclosure is flagged `[Assumption]` and sent to counsel rather than waved through.
- [x] Every fee cites a source row and date; the Qatar agent fee is tagged `[Assumption]`.
- [x] The three tests were run before the veto sentence was called anything.
- [x] No claim language drafted, no freedom-to-operate opinion given, no statute stated without a source.
- [x] Both inventors have signed assignments.

---

## Part H — For counsel, not for us

| # | Question | To |
|---|---|---|
| 1 | Was the 2026-08-30 investor email, which stated the 9-day result to 40 unbound recipients without the mechanism, an enabling public disclosure in any of the five jurisdictions? **This is the plan's load-bearing assumption.** | External patent counsel, this week |
| 2 | Does the Qatar framing need the sensor inputs and triggered maintenance action recited to clear the computer-program exclusion? | Local agent |
| 3 | Freedom to operate against the incumbent's risk-module patents and the two pooled-reliability papers in B5 | Counsel — separate search and opinion |
| 4 | Claim scope: how broadly can the fingerprint-alignment step be claimed without reading on the pooled-fleet prior art? | Counsel |
| 5 | Qatar national-phase agent fees and the current official schedule | Local agent |

---

## Part I — Next step

- **File the US provisional by 2026-10-15.** Owner: Dana O. Counsel call booked before counsel
  question 1 is answered, not after — the call is how it gets answered.
- Until counsel rules on question 1, **no further non-NDA disclosure of the method.** The investor
  update template gets a method-free rule, owned by the CEO, from today.
- The PCT decision is a calendar entry for 2027-08, not a decision to make now. That is what the
  provisional bought.
- Take the veto sentence to `moat-design-canvas`; take the operator data terms to
  `data-rights-clause` if pilot #2's paper differs from pilot #1's.
