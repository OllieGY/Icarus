# Compliance Gate — classification and obligations map

Fill every field. A row goes green only against an artefact you can open **today**. An intention is
0.3 and does not fill a row. This document is not legal advice and contains no legal conclusion.

## 0. Scope — answer before anything else

| # | Question | Your answer |
|---|---|---|
| 1 | Provider (places it on the market under its own name) / deployer (uses it under its own authority) — name the legal entities | _[ ]_ |
| 2 | Where the **users and affected people** are (not the servers) | _[ ]_ |
| 3 | What it decides **about a person** — or explicitly nothing | _[ ]_ |
| 4 | Safety component of, or embedded in, a regulated product? | _[ ]_ |
| 5 | Do you train, fine-tune substantially, or distribute a model others build on? | _[ ]_ |
| 6 | Does a person interact with it directly, or could its output be mistaken for human-made? | _[ ]_ |

If 1–4 are blank, stop here. Return the questions; do not classify and do not produce a map.

## 1. Classification — claim, basis, tag

**Claim:** _[e.g. "We are the provider of a high-risk AI system on the use-case route."]_

**Basis:** _[the specific answers from §0 that drive it, and the document the basis lives in]_

**Tag:** _[`[Fact]` only if a written, dated determination exists you can open. Otherwise `[Assumption]`.]_

**Route:** _[out of scope | transparency only | general-purpose model | high-risk (use case) | high-risk (safety component)]_

> If the route is **out of scope**, write one paragraph saying so with the basis, list the counsel
> questions in §4, and stop. Do not fill §2.

## 2. The obligations map

Only the obligations that attach to the route in §1. Nine rows for high-risk; three for
transparency-only. Status: **HELD** (artefact exists, opens today, covers the whole obligation) ·
**PARTIAL** (exists but narrower, stale, or unlinked — say what is missing) · **GAP** (nothing ≥ 0.5).

| # | Obligation | Artefact that satisfies it (file / run / record) | Rung | Tag | Status |
|---|---|---|---|---|---|
| 1 | Risk management | _[failure taxonomy + cost × volume matrix — `failure-mode-mining`, `guardrail-design`]_ | _[0.5]_ | _[ ]_ | _[HELD/PARTIAL/GAP]_ |
| 2 | Data and data governance | _[provenance, licence basis, retention rules — `dataset-builder`, `data-rights-clause`]_ | _[ ]_ | _[ ]_ | _[ ]_ |
| 3 | Technical documentation | _[the spec — `eval-first-spec`, `compound-system-architecture`]_ | _[ ]_ | _[ ]_ | _[ ]_ |
| 4 | Record-keeping / logging | _[trace schema + retention window + decision linkage — `trace-instrumentation-spec`]_ | _[0.7 requires real traces]_ | _[ ]_ | _[ ]_ |
| 5 | Transparency / instructions for use | _[what the deployer and user are told about limits and intended use]_ | _[ ]_ | _[ ]_ | _[ ]_ |
| 6 | Human oversight | _[the approval surface — `agent-interaction-design`]_ | _[ ]_ | _[ ]_ | _[ ]_ |
| 7 | Accuracy and robustness | _[golden set + scored run, with date and coverage — `eval-first-spec`]_ | _[0.7 requires scores]_ | _[ ]_ | _[ ]_ |
| 8 | Cybersecurity / adversarial robustness | _[recorded attack transcripts — `adversarial-launch-pass`]_ | _[0.7 requires transcripts]_ | _[ ]_ | _[ ]_ |
| 9 | Post-market monitoring | _[live metric set + the loop that acts on it — `metrics-that-matter`, `refine-flywheel`]_ | _[ ]_ | _[ ]_ | _[ ]_ |

**Tally:** _[n]_ HELD · _[n]_ PARTIAL · _[n]_ GAP, of _[n]_ obligations.

**Readiness kill criterion:** any GAP on rows 4, 7 or 8 means you cannot answer a serious buyer's
documentation request today. State it plainly if it applies. _[ ]_

## 3. The genuine gaps only

Do not list HELD rows here. One row per GAP and per PARTIAL that blocks a deal.

| Row | What is actually missing | Smallest artefact that closes it | Owner (a person) | Earliest it can exist |
|---|---|---|---|---|
| _[#]_ | _[precise — "no recorded adversarial runs", not "insufficient testing"]_ | _[the smallest thing, via the named sibling skill]_ | _[name]_ | _[days/weeks]_ |

## 4. For counsel — questions, not answers

Write the question and the role it goes to. Do not answer any of them here.

| Question | Goes to |
|---|---|
| _[Is the classification in §1 correct on the operative text?]_ | _[external counsel]_ |
| _[Which obligations are in force for a system placed on the market on this date?]_ | _[external counsel]_ |
| _[Has any deployer become a provider by re-labelling or modifying the system?]_ | _[external counsel]_ |
| _[Sector regulator, cross-border transfer, conformity assessment route]_ | _[external counsel / the buyer's DPO]_ |

## 5. Other frames, if asked

| Frame | One line for this system |
|---|---|
| NIST AI RMF (GOVERN / MAP / MEASURE / MANAGE) | _[which of your rows land in which function; voluntary, same evidence]_ |
| ISO/IEC 42001 | _[what an audit of the management system would still need beyond §2; it audits process, not the model]_ |
| The buyer's security questionnaire | _[which rows it overlaps; commercial work → `pilot-six-term-sheet`. A returned questionnaire is not a row.]_ |

## 6. What this document is not

It is not legal advice, not a conformity declaration, not a certification, and not a statement that
you are compliant. It is a stocktake of artefacts you hold, dated _[date]_, for counsel to work from.
