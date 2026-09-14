> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Foundry Signal, two weeks before an enterprise close

Foundry Signal builds a factory copilot for industrial lines. A European manufacturer's procurement
team has asked for "your EU AI Act documentation" ahead of signature. The team's instinct was to
commission a policy document. This is what the gate returned instead.

## What the team brought

> "The buyer is asking for documentation and we have nine working days. Are we compliant? We've got
> the eval suite and the traces, we ran a red-team week in July, and legal says we're probably fine."

Evidence actually on the table, as stated:

- `failure-taxonomy.md`, 9 failure modes, each costed against monthly volume. Dated 2026-06-11. [Fact]
- Golden set of 340 cases in the eval repo; last full run 2026-08-29, 91% pass across all 9 modes. [Fact]
- Trace schema shipped; 11 weeks of production traces, each joined to the decision it produced,
  30-day retention stated in the runbook. [Fact]
- Approval surface: the copilot cannot issue a line-stop recommendation without a named supervisor
  accepting it; the acceptance is logged. [Fact]
- Signed data-rights clause with both EU plants; retention and deletion terms in §4 of the MSA. [Fact]
- Dataset record with provenance and licence basis for all four training sources. [Fact]
- Architecture and decision spec in `spec/copilot-v2.md`. [Fact]
- Deployer-facing instructions-for-use page shipped with v2. [Fact]
- "Red-team week in July": a shared doc of prompts people tried. No transcripts, no pass/fail,
  no linkage to the taxonomy. [Fact that the doc exists; [Assumption] that it demonstrates robustness]
- Post-market monitoring: "on the roadmap for Q4." [Verbal commitment]
- "Legal says we're probably fine": a verbal remark in a call, no memo. [Opinion]

## 0. Scope

| # | Question | Answer |
|---|---|---|
| 1 | Provider / deployer | Foundry Signal is the **provider**; the two plants are deployers. |
| 2 | Users and affected people | Line operators and supervisors at two plants in the EU. |
| 3 | Decides about a person | Recommends line-stops that bear on worker safety; does not decide employment or access. |
| 4 | Safety component | Contested. The recommendation gates a safety action but does not actuate machinery. |
| 5 | Train / distribute a model | No. Fine-tunes nothing others build on. |
| 6 | Direct interaction | Yes — supervisors read and accept its recommendations in-product. |

## 1. Classification

**Claim.** Foundry Signal is the provider of a high-risk AI system on the use-case route: its
recommendations gate a line-stop decision affecting worker safety at two EU plants.

**Basis.** Scope answers 1–3. Question 4 is unresolved and could add a second route through product
legislation.

**Tag.** `[Assumption]`. The basis is our own reading, dated today. "Legal says we're probably fine"
is an opinion (0.1) delivered on a call; it is not a determination and does not upgrade this to
`[Fact]`. Do not put this sentence in a data room until counsel confirms it.

## 2. The obligations map — 9 obligations, 7 HELD, 0 PARTIAL, 2 GAP

| # | Obligation | Artefact | Rung | Tag | Status |
|---|---|---|---|---|---|
| 1 | Risk management | `failure-taxonomy.md`, 9 modes, each costed × monthly volume (2026-06-11) | 0.5 artefact | [Fact] | HELD |
| 2 | Data and data governance | Dataset record, provenance + licence for 4 sources; MSA §4 retention and deletion, signed | 0.5 artefact | [Fact] | HELD |
| 3 | Technical documentation | `spec/copilot-v2.md` — what it decides, on what inputs, with what architecture | 0.5 artefact | [Fact] | HELD |
| 4 | Record-keeping / logging | Trace schema + 11 weeks of production traces joined to decisions; 30-day retention | 0.7 behaviour | [Fact] | HELD |
| 5 | Transparency / instructions for use | Deployer instructions-for-use page shipped with v2 | 0.5 artefact | [Fact] | HELD |
| 6 | Human oversight | Named supervisor must accept every line-stop recommendation; acceptance logged | 0.7 behaviour | [Fact] | HELD |
| 7 | Accuracy and robustness | Golden set, 340 cases, run 2026-08-29, 91% across all 9 taxonomy modes | 0.7 behaviour | [Fact] | HELD |
| 8 | Cybersecurity / adversarial robustness | July red-team doc — prompts tried, no transcripts, no pass/fail, not linked to the taxonomy | 0.5 artefact, but of the wrong thing | [Assumption] | **GAP** |
| 9 | Post-market monitoring | "On the roadmap for Q4" | 0.3 verbal | [Assumption] | **GAP** |

**Tally: 7 HELD · 0 PARTIAL · 2 GAP, of 9.**

**Readiness.** Row 8 is a GAP, so the kill criterion fires: you cannot answer a technically literate
buyer's robustness question today. Rows 4 and 7 are strong, which is why this is nine days of work
and not a programme.

## 3. The two genuine gaps

| Row | What is actually missing | Smallest artefact that closes it | Owner | Earliest |
|---|---|---|---|---|
| 8 | No recorded adversarial runs. The July doc records what people typed, not what broke, and it is not mapped to the 9 failure modes. | 12 recorded transcripts against the 3 highest-cost modes, each with pass/fail and the guardrail that caught it — run `adversarial-launch-pass`. | Priya (eng lead) | 4 days |
| 9 | No live monitoring. A roadmap item is 0.3 and fills nothing. | The 3 metrics from `metrics-that-matter` wired to the existing trace stream, with a named weekly reviewer. | Priya (eng lead) | 1 week |

Both fit inside nine days. Neither is a document-writing exercise.

## 4. For counsel — not answered here

| Question | Goes to |
|---|---|
| Does gating a line-stop make this a safety component under the machinery regime as well as the use-case route? (Scope Q4 is unresolved.) | External counsel |
| Which obligations are in force for a system placed on the market this quarter? | External counsel |
| Does either plant's re-labelling or modification of the copilot make them a provider? | External counsel |
| Is the 30-day trace retention sufficient for the record-keeping obligation, or does it conflict with MSA §4 deletion? | External counsel |

## 5. If the buyer asks under another frame

- **NIST AI RMF** — rows 1–2 are MAP, rows 4/7/8 are MEASURE, rows 5–6 and 3 are GOVERN, row 9 is
  MANAGE. Same evidence, four labels. The two gaps land in MEASURE and MANAGE.
- **ISO/IEC 42001** — certifiable, and audits the management system rather than the model. Rows 1–9
  are most of its evidence base; an external audit still has to be budgeted and booked, which is
  months, not days. Say so rather than implying the map equals certification.
- **The security questionnaire** — it has already arrived and overlaps rows 2, 4 and 6. Answering it
  is commercial work; take it to `pilot-six-term-sheet`. A returned questionnaire does not turn row 8
  green.

## What this example demonstrates

The team asked for a compliance document and expected weeks of work. Seven of nine obligations were
already held, because the kit's ordinary outputs — a costed failure taxonomy, a scored golden set,
joined traces, a human approval surface, a signed data clause — *are* the evidence the obligations ask
for. The work was two gaps and nine days.

It also demonstrates the refusal. Row 8 looked held: there was a red-team doc, a week of effort, and a
team confident about it. A doc of prompts people tried is an artefact of activity, not of robustness,
and it is not mapped to the failure modes. It is a GAP. Row 9 was a roadmap item — 0.3 — and a roadmap
item never fills a row, however credible the intent. And the classification itself stayed
`[Assumption]`, because "legal says we're probably fine" is an opinion on a call, not a determination.
