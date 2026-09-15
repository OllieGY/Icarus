# Decision tables — invention-disclosure

> The scoring tables the method runs on. Fees and legal specifics live in
> [`jurisdictions.md`](./jurisdictions.md); this file holds the judgement calls and the
> cost bands built from them. Every band is a planning figure, not a quote.

---

## 1. The four outcomes

There are four, and only four. "File something and decide later" is not one of them — it is a
provisional with no follow-through, which expires worthless twelve months later having published
nothing and protected nothing.

| Outcome | What you get | What it costs you | Fits when |
|---|---|---|---|
| **PATENT** | A time-limited right to exclude, and an asset a buyer or investor can diligence | Money over years, and full public disclosure 18 months in | Infringement is detectable from outside, the claim sits on the copy path, and you can fund enforcement |
| **TRADE SECRET** | Indefinite protection, no disclosure, no filing cost | Nothing if someone reverse-engineers or independently invents it; you must actually maintain the measures | The method lives behind an API or inside your own operations and cannot be read off the product |
| **DEFENSIVE PUBLICATION** | A competitor cannot patent it and charge you for your own method | Your own novelty, everywhere, permanently | The thing is likely obvious, you will not fund a filing, and the real risk is someone else patenting it first |
| **NOTHING** | Your money and attention back | No protection of any kind | It is neither detectable, nor secret-able, nor at risk of being patented against you |

---

## 2. Protect / Publish / Secret / Nothing — the scorecard

Score all five rows before naming an outcome. Each row is answered with evidence, tagged, and
scored on the ladder. A row answered on opinion (0.1) does not decide anything.

| # | Row | Question | Pushes toward |
|---|---|---|---|
| 1 | **Detectability** | Could you tell, from the competitor's product, API, docs, job ads or output, that they are using your method? | Detectable → PATENT. Undetectable → SECRET (a patent you cannot police is a published instruction manual) |
| 2 | **Secret-ability** | Can it actually be kept secret as the product ships and the team turns over? | Behind an API, in your own operations, in weights you never ship → SECRET. On the screen, in the client bundle, in the output format → not securable, so PATENT or PUBLISH |
| 3 | **Where the value sits** | Is the value in stopping a copy, or in the signal to an investor, acquirer or government buyer? | Exclusion → PATENT on the merits. Signal only → PATENT as a financing decision, priced as such, or NOTHING |
| 4 | **Core or peripheral** | Is this on the wedge's critical path, or a side method you happened to build? | Core → protect something. Peripheral → PUBLISH or NOTHING; a portfolio of peripheral filings is a burn rate |
| 5 | **Cost against runway** | Does the five-year ledger fit the runway without displacing the build? | Fits → proceed. Does not → PUBLISH now, file later on the next raise, and say so plainly |

### The two-by-two that decides most cases

|  | **Detectable from outside** | **Not detectable** |
|---|---|---|
| **Can be kept secret** | Judgement call: patent for the asset and the signal, keep the implementation detail secret alongside it | **TRADE SECRET.** Filing publishes a method nobody could otherwise see, and you could never prove infringement |
| **Cannot be kept secret** | **PATENT.** This is the case patents were built for | **DEFENSIVE PUBLICATION.** You cannot protect it and cannot hide it; stop someone else owning it |

The trap sits bottom-right of the secret-able column: an undetectable method that the team wants
to patent "because investors like patents". That is paying to publish a secret. If the value is
genuinely the signal, say so out loud (row 3), price it, and let the builder decide with open eyes.

---

## 3. Cost and time ledgers by route

All figures from [`jurisdictions.md`](./jurisdictions.md), checked 2026-09-15. Official fees at
undiscounted rates unless stated; attorney work at mid-band for AI/software. Round bands, not
quotes. Every ledger a skill emits must cite the source rows and tag anything not traceable there
as `[Assumption]`.

### Route A — US provisional only, then decide

| Item | Year | Cost |
|---|---|---|
| Provisional official fee (undiscounted / small / micro) | 0 | $325 / $130 / $65 |
| Drafting a provisional that actually enables the later claims | 0 | $2,000–$5,000 |
| **Year-0 total** | | **≈ $2,300–$5,300** |

Buys 12 months of priority and the right to say "patent pending". Converts or dies at month 12.
A provisional that does not enable the non-provisional's claims buys nothing at all.

### Route B — US only, provisional → non-provisional → grant

| Item | Year | Cost |
|---|---|---|
| Route A | 0 | $2,300–$5,300 |
| Non-provisional drafting, AI/software | 1 | $10,000–$30,000 |
| USPTO filing package | 1 | $2,000 / $800 / $400 |
| Office-action responses, 2–3 | 2–3 | $3,000–$10,500 |
| Issue fee | 3–4 | $1,290 / $516 / $258 |
| **Five-year total** | | **≈ $18,600–$49,000** |

Add Track One at $4,515 / $1,806 / $903 to compress first action to 2–4 months and aim at final
disposition in 12. Worth it when a raise, a tender, or an acquisition conversation is on a clock.
Maintenance starts at year 3.5: $2,150 / $860 / $430.

### Route C — US provisional → PCT → national phases (US, EPO, Qatar)

| Item | Year | Cost |
|---|---|---|
| Route A | 0 | $2,300–$5,300 |
| PCT international phase, all in | 1 | $5,500–$10,000 |
| US national phase — drafting and filing package | 2.5 | $12,000–$32,000 |
| US office-action responses, 2–3 | 3–4 | $3,000–$10,500 |
| US issue fee | 4 | $1,290 |
| EPO entry, incl. translation | 2.5 | $10,500–$19,000 |
| Qatar national phase, agent + official + Arabic translation | 2.5 | $3,000–$6,000 `[Assumption]` — agent quote required |
| **Five-year total** | | **≈ $37,600–$84,100** |

Two warnings about this ledger, both learned by getting it wrong.

**It counts US prosecution, and earlier drafts did not.** The office-action responses and the issue
fee sit inside a five-year window that starts national phases at year 2.5, and Route B counts them.
A Route C total that omits them is not a cheaper route, it is the same route measured with a shorter
ruler — and comparing it against Route B compares different scopes.

**It still stops at entry for the EPO and Qatar.** European and Qatari prosecution, translation at
grant, validation in individual European states, and all annuities are **not** in the total. They
are real and they are `[Assumption]` until an agent quotes them. The Qatar row is the least certain
number in this file; local agent fees are not published. Get quotes before this goes in front of
anyone who will make a decision on it.

### Route D — GCC coverage

| Option | Cost | Covers |
|---|---|---|
| GCCPO filing (examination hub) | ≈ $3,500–$5,000 all in | Bahrain, Kuwait, Qatar |
| Six separate national filings | $15,000–$25,000+ | All six states |
| Saudi national, separately | SAR 800–1,000 filing, SAR 5,000 grant, annuities from SAR 500 rising | Saudi only |
| UAE national, separately | AED 1,000–2,000 application, AED 3,500–7,000 examination | UAE only |

The GCCPO route is Paris-priority only, so it must be filed within 12 months of the first filing —
it cannot be reached through the PCT's 30-month window. That deadline catches people out.

### Time to grant

| Jurisdiction | Band |
|---|---|
| US, Track One | ~12 months to final disposition |
| US, standard | ~26 months total pendency, first action at 20–24 |
| Qatar | 2–3 years (agent guides) vs 60–72 months (ministry indicative figure) — **plan on the slower one** |
| Saudi Arabia | 3–5 years from national-phase entry |
| EPO | Multi-year; add the translation and validation step at grant |

Planning consequence: for a company that will raise or sell inside three years, a granted patent is
usually not the asset. The **filing**, the priority date and the disclosure discipline are. Say that
rather than implying a grant will arrive in time to matter.

---

## 4. What the evidence says a patent does for a company like this

Two findings, both cited, neither one a reason to file on its own.

| Finding | Source | How to use it |
|---|---|---|
| Startups that won the patent "lottery" — drawing a lenient examiner on a first application — had roughly **55% higher employment growth and 80% higher sales growth five years later**, driven by access to funding from VCs, banks and public investors, and they went on to more and higher-quality follow-on innovation | Farre-Mensa, Hegde & Ljungqvist, "What Is a Patent Worth? Evidence from the U.S. Patent 'Lottery'", *Journal of Finance* 75(2) 2020, 639–682 — https://onlinelibrary.wiley.com/doi/abs/10.1111/jofi.12867 | This is the strongest evidence that a **first** patent moves financing outcomes. It is about the first grant, in the US, and the channel is financing — not litigation. It supports a SIGNAL ONLY verdict; it does not turn an undetectable method into a moat |
| Only **25% of software startups** hold patents, rising to **67%** of venture-backed software startups, against 97% of venture-backed biotech. Startups rate patents as weak incentives for the core innovation activities; when they skip a filing on a major innovation, **cost** is the reason most often given | Graham, Merges, Samuelson & Sichelman, 2008 Berkeley Patent Survey (1,332 US startups) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1429049 | The base rate. Most software companies do not patent most of what they build, and that is a normal outcome, not a failure. Use it to keep DO NOT FILE an honest, respectable answer |

A third, softer input for the diligence question: 2025 practitioner reporting puts IP-ownership
gaps — unassigned contractors, unclear model and data rights — among the commonest reasons startup
diligence stalls, and flags that "open-weight" model licences such as Llama's are not open source
under the Open Source Initiative's definition. That is a reason to complete the assignment block
and the dependency rows whatever the filing verdict is.
Sources: Cooley 2025 Venture Ecosystem Report as reported by techandmedialaw.com —
https://techandmedialaw.com/ai-investor-checklist/ ; OSI analysis of the Llama licence as reported
by Promise Legal — https://blog.promise.legal/open-weight-ai-license-trap-startups/

---

## 5. The three defensibility tests

Run on the candidate claim before anyone calls a patent a moat. All three must pass.

| Test | Passes when | Fails when |
|---|---|---|
| **Copy path** | The claim sits across the cheapest route a competent competitor would take to copy you | The claim covers a route they would never bother with, while the obvious route stays open |
| **Detectable** | You could see infringement from outside — product behaviour, API, documentation, output artefacts, job postings | You would need their source code or their servers to know |
| **Enforceable** | You could fund a challenge, or a credible acquirer would, in the jurisdiction where the copying happens | Enforcement costs multiples of the company's cash, or the venue offers no realistic remedy |

| Result | Verdict |
|---|---|
| 3/3 | **VETO CANDIDATE** — hand the sentence to `moat-design-canvas` and let the canvas decide whether it holds against the rest of the incumbent's structure |
| Copy path or detectable fails, but the financing case is real and stated | **SIGNAL ONLY** — file for diligence and balance-sheet reasons, priced as such, never described as a moat |
| Copy path fails and the financing case is aspiration | **DO NOT FILE** — take the publish, secret, or nothing branch |

A patent that passes all three is one structural veto among several. It is not the moat; the moat
is the dated trajectory `moat-design-canvas` sequences, and the veto sentence is one input to it.
