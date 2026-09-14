---
name: compliance-gate
description: >-
  Turns a regulatory panic into a mapping exercise. Returns a classification (in scope or
  not, provider or deployer, high-risk / GPAI / transparency-only) plus an
  obligations-to-artefacts map: one row per obligation, each marked HELD / PARTIAL / GAP
  against a file you can open today, then only the genuine gaps with an owner, then the
  questions that go to counsel. Fires on "are we compliant", "does the EU AI Act apply to
  us", "the buyer is asking for documentation", "what do we need before an enterprise
  deal", "is this high-risk". Refuses to draft legal text and refuses to certify anything.
  NOT for the commercial data-rights terms (use `data-rights-clause`), NOT for the buyer's
  security checklist inside a pilot (use `pilot-six-term-sheet`), NOT for running the
  attacks (use `adversarial-launch-pass`), NOT for designing the oversight surface
  (use `agent-interaction-design`).
metadata:
  type: interactive
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Compliance Gate

## What it does

You answer six scoping questions. You get back one artefact: a **classification** and an
**obligations-to-artefacts map**. The map has one row per obligation that actually attaches to *your* classification. Each row
names the artefact that already satisfies it — a file, a recorded run, a scored set — and is
marked **HELD**, **PARTIAL**, or **GAP**. Below the map sit only the genuine gaps, each with
the smallest artefact that would close it and the person who must make it. Below that sit the
questions this skill will not answer, addressed to counsel by name.

It refuses three things, always: it does not draft legal text, it does not certify or declare
conformity, and it does not answer a jurisdiction-specific question — it writes that one down and stops.

## The reframe

Most teams meet regulation as a panic two weeks before an enterprise deal closes and treat it as a
writing problem — a policy PDF, a 40-page programme, a consultant. It is an evidence problem. Every
obligation in the EU AI Act's high-risk chapter demands you show something you made while building: a
risk taxonomy, a dataset with provenance, scored accuracy results, logs, an oversight surface, a
retention rule. A team that followed this kit produced all of it as a by-product of building well, so
the honest output is usually *"you hold seven of nine — here are the two real gaps"*, not a programme.

The opposite failure is the one you will be pushed into: a team with no golden set and no traces
tells you they are building one and asks for the row to go green. An intention is a verbal
commitment, 0.3. An artefact you can open today is 0.5 or better. **Only artefacts fill rows.** A
green map bought with intentions is worse than a red one, because it will be sent to a buyer.

## When to use / When NOT

Use it when regulation has become a gate on a deal, a launch, or a board answer and you need to
know what you already hold. Fires on: "are we compliant", "does the EU AI Act apply to us", "the
buyer is asking for documentation", "what do we need before an enterprise deal", "is this high-risk".

| If you want… | Use instead |
|---|---|
| The commercial terms — who owns derived data, what you may train on, what survives termination | `data-rights-clause`. This skill *cites* the clause as the data-governance row; it does not write it. |
| To answer the buyer's security checklist and set the pilot's terms | `pilot-six-term-sheet`. The questionnaire is a commercial artefact, not a regulatory one. |
| To actually run the attacks and record what broke | `adversarial-launch-pass`. This skill cites its transcripts; it cannot produce them. |
| To design the approval and escalation surface | `agent-interaction-design`. This skill checks whether one exists; it does not lay one out. |
| The failure taxonomy and the cost × volume matrix the risk row rests on | `failure-mode-mining`, then `guardrail-design`. |

Also never as a substitute for counsel: every row it marks is a claim about *your artefacts*, never
a claim about the law.

## Method

### Step 1 — Scope. Ask, do not assume.

Ask these six; stop until 1–4 are answered. Classifying on guesses produces confidently wrong maps.

| # | Question | Why it changes the answer |
|---|---|---|
| 1 | Who is the **provider** (puts it on the market under their own name or mark) and who is the **deployer** (uses it under their own authority)? Name the legal entities. | Nearly all of the heavy obligations sit on the provider. Most teams guess wrong about which they are. |
| 2 | Where are the **users and the people affected** — not where your servers are? | Placement and use in the EU is the hook. Hosting location is not the test. |
| 3 | What does the system **decide about a person**? Hiring, credit, education, access to services, safety, law enforcement, benefits — or nothing about people at all? | This is what separates a high-risk use case from an internal tool. |
| 4 | Is it a **safety component** of a regulated product, or embedded in one? | A different route into high-risk, through existing product legislation rather than the use-case list. |
| 5 | Do you **train, fine-tune, or distribute a model** that others build on? | Opens general-purpose-model obligations, which are a different set. |
| 6 | Does a person **interact with it directly**, or does it generate content that could be mistaken for human-made? | Opens a transparency obligation that can attach even when nothing else does. |

If 1–4 are unanswered, return the questions and nothing else. Do not produce a map.

### Step 2 — Classify, with the basis stated and the uncertainty tagged

Write it as **one sentence: the claim, then the basis, then the tag.**

| Route | Attaches when | Typical obligation count |
|---|---|---|
| Out of scope | No EU placement or use; no affected people in scope | 0 — say so and stop |
| Transparency only | Direct human interaction or synthetic content, no high-risk use case | 2–3 |
| General-purpose model | You train, fine-tune substantially, or distribute a model to downstream builders | Model documentation, training-data summary, downstream information |
| High-risk — use case | The decision falls in a listed high-risk category | 9 (Step 3) |
| High-risk — safety component | Embedded in or a safety component of a product under existing product legislation | 9 plus that product regime |

Tag `[Fact]` **only** when the basis is a written, dated determination you can open — counsel's memo,
a completed classification record. One you reasoned out this morning is `[Assumption]`, however obvious
it feels; one the buyer asserted is `[Assumption]` at 0.3, because they are not your regulator.

### Step 3 — Enumerate the obligations for that classification only

Not the whole act. Transparency-only is three rows and you are done in a page. For the
high-risk-provider route, the nine that matter:
risk management · data and data governance · technical documentation · record-keeping and logging ·
transparency and instructions for use · human oversight · accuracy and robustness · cybersecurity and
adversarial robustness · post-market monitoring. Article numbers (Art. 9–15, 17, 72; Art. 50 transparency; Art. 53/55 general-purpose models) are
orientation pointers only. Do not quote operative text and do not state an applicable date — phase-in
is a counsel question (Step 6).

### Step 4 — Map each obligation to an artefact you can open today

| Obligation | Artefact that satisfies it | Comes from |
|---|---|---|
| Risk management | The failure taxonomy plus the cost × volume matrix | `failure-mode-mining`, `guardrail-design` |
| Data and data governance | Dataset provenance, licence and consent basis, retention rules | `dataset-builder`, `data-rights-clause` |
| Technical documentation | The spec: what it decides, on what inputs, with what architecture | `eval-first-spec`, `compound-system-architecture` |
| Record-keeping / logging | The trace schema, retention window, and decision-level linkage | `trace-instrumentation-spec` |
| Transparency / instructions for use | What you tell the deployer and the user about limits and intended use | `agent-interaction-design`, `v1-launch-bar` |
| Human oversight | The approval surface: what a human sees, can stop, and must sign | `agent-interaction-design` |
| Accuracy and robustness | The golden set and its scored results | `eval-first-spec`, `dataset-builder` |
| Cybersecurity / adversarial robustness | The recorded attack transcripts and what each one broke | `adversarial-launch-pass` |
| Post-market monitoring | The live metric set and the loop that acts on it | `metrics-that-matter`, `refine-flywheel` |

Marking rules apply to the artefact, not the intention behind it. **HELD** — it exists, you
can open it today, and it covers the obligation's whole scope; for the accuracy, adversarial and
logging rows HELD additionally requires *measured* output (scores, transcripts, real traces, 0.7), so
a written plan for those three is PARTIAL at best. **PARTIAL** — it exists but is narrower than the
obligation, stale, or not linked to decisions; say exactly what is missing ("golden set covers 4 of
the 9 failure modes in the taxonomy"). **GAP** — nothing at 0.5 exists; a roadmap ticket is a GAP, and
a vendor's attestation about their own model is a GAP for *your* system.

### Step 4b — the same evidence under three other frames, briefly

You will be asked for these by name. They re-label the same evidence; they are not new work.
| Frame | What it is | How your rows map |
|---|---|---|
| NIST AI RMF | Voluntary US frame; four functions — GOVERN, MAP, MEASURE, MANAGE | GOVERN ← oversight + documentation rows; MAP ← risk management + data; MEASURE ← accuracy, adversarial, logging; MANAGE ← post-market monitoring |
| ISO/IEC 42001 | A certifiable AI **management system** standard some procurement teams ask for | Audits your process and records, not your model. Your nine rows are most of its evidence base; certification is an external audit you must budget and schedule. |
| The buyer's security questionnaire | Arrives months before any regulator does | Overlaps the logging, data-governance and oversight rows. Answering it is commercial work → `pilot-six-term-sheet`. Do not treat a returned questionnaire as a compliance row. |

### Step 5 — For every GAP, the smallest artefact that closes it, and who owns it

One row per gap: gap · smallest artefact that closes it · named owner · earliest it can exist.
Smallest means smallest: "twelve recorded adversarial transcripts against the three highest-cost
failure modes", not "an adversarial testing programme". If you cannot name one human owner, the gap is
not closed — it is assigned to nobody.

### Step 6 — Name the counsel questions, and stop

List what this skill will not answer — classification confirmation, applicable dates and phase-in,
whether a deployer has become a provider, cross-border transfer, sector regulators, conformity
assessment route — addressed to a named role ("your external counsel", "the buyer's DPO"). Write the
question. Do not write the answer.

**Kill line.** Marking a row HELD on an intention, a roadmap item, a vendor's self-assessment, or
anything below 0.5 — or emitting a compliance verdict, a conformity declaration, drafted legal text,
or an answer to a counsel question — auto-fails the output, however good the rest of the map is.

## Evidence standard

The Icarus ladder, applied to compliance evidence:
| Signal | Score | In this skill |
|---|---|---|
| Money moved | 1.0 | A completed paid external audit or issued certificate |
| Behaviour observed | 0.7 | Scored eval runs, recorded attack transcripts, production traces you can query |
| Artefact shown | 0.5 | A written spec, taxonomy, dataset record, retention policy, signed clause |
| Verbal commitment | 0.3 | "It's on the roadmap", "we'll build the golden set", a buyer's assertion |
| Opinion | 0.1 | "We're basically fine", a vendor's marketing claim, a model's self-assessment of its own safety |

Rungs never stack. Six policy documents at 0.5 do not make a 0.7 row; one scored eval run does. A
claim's weight is its best rung, never the sum, never the average. Tag every empirical claim
`[Fact]`, `[Assumption]`, or `[Hypothesis]` — including the classification itself.

**Challenge before you help.** If the input arrives as "we're compliant, right?", name the gap first.
Kill criterion for readiness: *any GAP on the accuracy, adversarial, or logging rows means you cannot
answer a serious buyer's documentation request today* — those are the three a technically literate
reviewer opens first. What would change the view: a scored golden-set run and a week of queryable
traces. Not another document.

## What good looks like

Foundry Signal — factory copilot, EU-deployed, provider:

> **Classification.** Foundry Signal is the provider of a high-risk AI system on the use-case route:
> the copilot's recommendations gate a line-stop decision affecting worker safety, and it runs at two
> EU plants. `[Assumption]` — basis is our own reading of the use-case list, dated today; no counsel
> determination exists. Confirm before this sentence goes in a data room.
>
> **9 obligations. 7 HELD, 0 PARTIAL, 2 GAP.**
>
> | Obligation | Artefact | Status |
> |---|---|---|
> | Risk management | `failure-taxonomy.md`, 9 modes, each costed × monthly volume | HELD (0.5) |
> | Accuracy and robustness | Golden set, 340 cases, last run 2026-08-29, 91% on the 9 modes | HELD (0.7) |
> | Cybersecurity / adversarial | — | **GAP** |
> | Post-market monitoring | — | **GAP** |
>
> **Gap 1.** No recorded adversarial runs. Smallest artefact: 12 transcripts against the 3
> highest-cost modes, via `adversarial-launch-pass`. Owner: Priya (eng lead). Earliest: 4 days.
> **Gap 2.** No live metric set. Smallest artefact: the 3 monitored metrics from
> `metrics-that-matter` wired to the existing trace stream. Owner: Priya. Earliest: 1 week.
>
> **For counsel, not for us.** (1) Does the line-stop recommendation make this a safety component
> under the machinery regime as well as the use-case route? (2) Which obligations are in force for a
> system placed on the market this quarter? (3) Does the plant operator's re-labelling make them a
> provider? Two gaps, four days and one scheduling decision — not a programme.

## Gotchas

**Intention laundering.** "We're building the golden set this sprint" is 0.3, so the row is a GAP.
This is the commonest pressure on this skill and the reason it exists. Write GAP.

**The deployer who is quietly a provider.** Putting your name on a bought system, substantially
modifying it, or using it for a purpose its maker did not intend can flip you to provider, and the
obligations move with you. Do not answer this yourself; it goes to counsel in Step 6.

**The vendor's model card.** The vendor's self-assessment of *their base model* — 0.1 about *your*
system, and it never fills your accuracy row. Neither does a sub-processor's certificate.

**"US-only" measured from the rack.** The test is where the users and affected people are, not where
the servers sit. Ask again.

**The happy-path golden set.** Taxonomy names nine failure modes, golden set exercises four: PARTIAL
with the number written down, never HELD. Logs in a bucket with no link from a decision back to the
inputs that produced it are likewise PARTIAL, as is an unstated retention window.

**Reciting the whole act.** Nine rows for high-risk, three for transparency-only, zero for out of
scope. Enumerating obligations that do not attach to you is boilerplate and buries the two that do.

## Related skills

| Skill | Handoff |
|---|---|
| `failure-mode-mining` → `guardrail-design` | Produce the taxonomy and the cost × volume matrix behind the risk-management row. Run them first; this skill cannot invent either. |
| `eval-first-spec` | The spec and the golden set. Two rows depend on it entirely. |
| `dataset-builder` | Provenance and the data record. Feeds the data-governance and accuracy rows. |
| `adversarial-launch-pass` | Runs the attacks and records the transcripts. This skill cites them; it never runs them. |
| `trace-instrumentation-spec` | The logging and traceability row, whole. |
| `agent-interaction-design` | The oversight and transparency rows. Designs the approval surface; this skill only checks one exists. |
| `data-rights-clause` | The commercial data terms and retention rules. Cited by the data-governance row, never drafted here. |
| `pilot-six-term-sheet` | Owns the buyer's security questionnaire and the pilot's commercial terms. |

Supersedes: none.
