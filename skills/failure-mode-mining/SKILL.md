---
name: failure-mode-mining
description: >-
  Turns a pile of production traces into a COUNTED failure taxonomy: traces sampled to
  saturation, open-coded blind one line each, axial-coded into 8 or fewer mutually exclusive
  modes, each carrying frequency (count and % of sample), cost per occurrence, a frequency ×
  cost rank, one exemplar trace ID, and a NEW / INSTANCE-OF-GUESSED / NOT-A-DEFECT verdict —
  then sends you backwards to re-derive the acceptable failure rates the guessed taxonomy got
  wrong. Fires on "why is it failing", "our agent keeps getting X wrong", "what's actually
  going wrong in production", "which failure do we fix first", "run error analysis on these
  traces". NOT for mining traces for jobs-to-be-done (use `trace-to-interview`), NOT for
  picking which probe to run (use `probe-matrix`), NOT for designing the guardrail once the
  modes are known (use `guardrail-design`), NOT for building the golden set (use
  `dataset-builder`).
metadata:
  type: interactive
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Failure Mode Mining

## What it does

Takes the production traces you already hold and returns a **counted** failure taxonomy — the
error-analysis pass almost every AI product skips. The artefact is the filled
[template.md](template.md): a sample drawn to theoretical saturation, one open code per trace
written in your own words, those codes axial-coded into **≤8 mutually exclusive modes**, and
every mode carrying five numbers and two verdicts — frequency (count and % of sample), cost
per occurrence, frequency × cost rank, one exemplar trace ID, its evidence rung, and a verdict
of NEW / INSTANCE-OF-GUESSED / NOT-A-DEFECT against the taxonomy you guessed before launch.

It refuses three things. It refuses to code traces with the guessed taxonomy in front of you.
It refuses a sample under 30 traces, or a sample made only of the failures someone already
found interesting. And it refuses to call a mode a mode on one sighting — n=1 is a
`[Hypothesis]` with a trace ID attached, not a row in the taxonomy.

Because it is interactive, it asks the intake questions in Step 1 and **stops** until they are
answered. It does not guess the unit of analysis.

## The reframe

A generic prompt handed a folder of traces summarises them. You get "users sometimes get
irrelevant results, the tone is occasionally off, latency can be high" — three impressions, no
denominator, no cost, no way to pick what to fix on Monday.

Two moves make this not that.

**Open-code blind, then reconcile.** The team already has a guessed failure taxonomy, written
before launch in `eval-first-spec` — Miss, False alarm, Confidently wrong, Wrong format, Too
slow, Silent failure. Using that list as the coding frame is what makes error analysis theatre:
every trace gets filed into a box that already exists, the counts confirm the guess, and the
mode nobody imagined stays invisible because there was no box for it. So you code blind first,
in your own words, and only meet the guessed list in Step 5. The finding that pays for the
whole exercise is usually the NEW mode — the one with no box.

**The taxonomy is measured, so it invalidates the guessed one.** This skill's output does not
sit beside the spec; it **replaces** the a-priori taxonomy inside it, which forces the derived
acceptable-failure-rate per mode to be re-run against a measured cost-of-one-failure, and
re-places every mode on the cost × volume matrix in `guardrail-design` with real volume instead
of an estimate. A mode you priced as rare and measured at 28% of the sample was guarded wrong.
Error analysis that does not send work backwards did not measure anything.

## When to use / When NOT

Use it once a product is live (or a pilot is running) and you hold real traces — a trace being
one complete attempt at the job, input through output through what the human did next. Trigger
phrases: "why is it failing", "our agent keeps getting X wrong", "what's actually going wrong
in production", "which failure do we fix first", "run error analysis on these traces".

| If you want… | Use instead |
|---|---|
| "What job aren't we finishing? What do the logs say users actually need?" | `trace-to-interview` — it reads a trace as a discovery interview that already happened. This skill reads a trace as a defect. Same feed, opposite question. A mode this skill verdicts NOT-A-DEFECT is handed there. |
| "Which experiment should I run to learn this cheaply?" | `probe-matrix` — probe selection before you have production traffic. This skill needs traces that already exist; it cannot be run pre-launch. |
| "The modes are known — now set the confidence threshold and the human sign-off" | `guardrail-design` — it consumes this taxonomy and sizes the mechanism per quadrant. This skill hands it counts and costs, then stops. |
| "Turn these into labelled golden cases held out from the build" | `dataset-builder` — it labels artefacts and clears the four gates. This skill hands it exemplar trace IDs per mode; it does not write the test set. |
| "Set the cadence for re-running all of this after each model release" | `refine-flywheel` — this is one pass; that is the loop that repeats it. |

If no traces exist, the input is not ready. Say so and stop. Never construct traces to code.

## Method

Fill in [template.md](template.md). Six steps, then the kill-line check.

### Step 1 — Define the unit of analysis and pull the sample (ask, then stop)

Ask these four before anything else. This is the interactive gate; do not proceed on guesses.

| Question | Why it blocks everything downstream |
|---|---|
| What is one trace? Name the fields it must contain. | Without a unit, counts have no denominator. Minimum contents: the input, the system's full output, the timestamp, and **what the human did next** (accepted / edited / overrode / abandoned). A trace with no human-next-action cannot be scored for cost. |
| How was the sample drawn? | Random or systematic over a stated window, or it is not a sample. |
| How many traces are available in total, and how many are in the sample? | The % of sample is meaningless without both. |
| Are these all traces, or only the ones someone flagged as bad? | This is the sampling-bias question, and it is the one people answer wrong. |

Two hard refusals at this step:

- **Fewer than 30 traces → refuse.** You cannot reach saturation, and a mode at n=2 in a
  sample of 12 is noise wearing a percentage sign. Report the gap; name how many more and over
  what window.
- **Cherry-picked failures only → refuse to report frequencies.** A pile of escalated tickets
  tells you what modes *exist*; it cannot tell you how *often*. If that is all you have, you may
  open-code it for mode discovery, but every frequency column must read `not measurable —
  biased sample`, and the frequency × cost rank in Step 6 cannot be produced at all. Say that
  out loud rather than ranking on a biased denominator.

### Step 2 — Open-code blind

Close the spec. Do not look at the guessed taxonomy, the roadmap, or the bug tracker.

Read traces in batches of ~10. For each trace write **one line, in your own words**, describing
what went wrong in this specific trace — the way you would say it to a colleague. Not a
category. Not a label from a list.

Good open code: *"blamed press-4, but press-4 was the one that jammed last night, not this shift."*
Bad open code: *"Confidently wrong."* (That is a category, and it is one you were given.)

Track saturation as you go. After each batch, record how many codes in that batch could not be
expressed with any code you had already written. **Stop when two consecutive batches of ~10 add
no new code.** If you run out of sample before that happens, saturation was **not reached** —
say so in the artefact, name the batch that was still producing new codes, and do not present
the taxonomy as complete.

### Step 3 — Axial-code into ≤8 mutually exclusive modes

Group the open codes into modes. Hard cap of 8: a taxonomy with 14 modes is a list of traces
with extra steps, and nothing can be counted reliably into it. Each mode gets a name written in
the language of the workflow, not the language of the model.

**The mutual-exclusivity test.** Take 10 traces from the sample at random. Assign each to
exactly one mode, without hesitating and without inventing a tiebreak rule. If a single trace
plausibly belongs in two modes, the boundary is wrong — merge the two modes, or split them on
the dimension that actually separates them, and re-run the test on 10 fresh traces. Record the
result in the artefact: *"exclusivity test: 10/10 single-assignment"* or the number that failed
and what you changed. A taxonomy that has not passed this test cannot be counted, because the
same trace would land in two counts.

One trace, one mode, always. If a trace shows two failures, code the **first** one — the one
that made the rest inevitable.

### Step 4 — Count and price each mode

| Column | Rule |
|---|---|
| Count | Integer. Every trace in the sample lands in exactly one mode; the counts must sum to N. |
| % of sample | count ÷ N, stated with N beside it. |
| Cost per occurrence | The loaded cost of **one** undetected occurrence, with its source and its evidence rung. Measured rework minutes × loaded rate is behaviour (0.7). A line from the downtime ledger or a credit issued is money (1.0). "Feels like about 10 minutes" is opinion (0.1). |
| Frequency × cost | count × cost per occurrence, over the sample window. This is the rank, not the count. |
| Exemplar | One trace ID. One. If you cannot cite a trace ID for a mode, the mode is not evidenced. |
| Rung + tag | The best rung its cost claim reaches, and `[Fact]` / `[Assumption]` / `[Hypothesis]`. |

A mode with **n=1** is not a mode. Move it to a `[Hypothesis]` list at the foot of the artefact
with its trace ID, and say what sample size would settle it.

A guessed mode with **n=0 in the sample** is an observed zero, not an absence. Report it as
`0 of N` and bound it honestly: with zero events in N traces, the rule of three puts the upper
bound on its true rate near 3/N. Never write "this mode does not occur."

### Step 5 — Reconcile against the guessed taxonomy

Only now open the failure taxonomy from `eval-first-spec`. Verdict every measured mode:

| Verdict | Means | What it forces |
|---|---|---|
| **NEW** | No box existed for it. | It has **no** derived acceptable failure rate and **no** golden-set coverage. Both are now missing from the spec. |
| **INSTANCE-OF-GUESSED** | It is the real, specific shape of a guessed mode. | Its guessed cost-of-one-failure gets replaced by the measured one, so its derived rate must be re-run. |
| **NOT-A-DEFECT** | The system did what it was built to do; the user wanted a different job. | Not a bug. Route it to `trace-to-interview` as an unmet-job signal and remove it from the defect counts (state the adjusted N). |

Then list the guessed modes that measured **0 of N**. A spec that spent a derived acceptable
rate on a mode that never fired, while a 28%-of-sample mode had no box at all, is the finding.

### Step 6 — Rank, and name what must be re-derived

Rank the defect modes by **frequency × cost**, not by count. Then write the backwards list
explicitly — this is the output's teeth:

- `eval-first-spec` — the measured taxonomy replaces the guessed one; the acceptable failure
  rate per mode is re-derived on measured cost-of-one-failure; the golden set needs coverage
  cases for every NEW mode (no case can fail into a mode that has no case).
- `guardrail-design` — every mode is re-placed on the cost × volume matrix with **measured**
  volume; a mode guarded as rare that measured common is guarded wrong today.
- `dataset-builder` — the exemplar trace IDs are the seed cases.
- `trace-to-interview` — every NOT-A-DEFECT mode.

**Kill line.** The skill fails if it returns a taxonomy with no counts, a rank built on a
cherry-picked sample, a mode with no exemplar trace ID, more than 8 modes, a mode at n=1
presented as a mode, or any evidence that the guessed taxonomy was used as the coding frame in
Step 2. Also an auto-fail: presenting a frequency × cost rank whose cost column is entirely
opinion (0.1) without saying so.

## Evidence standard

| Signal | Score |
|---|---|
| Money moved | 1.0 |
| Behaviour observed | 0.7 |
| Artefact shown | 0.5 |
| Verbal commitment | 0.3 |
| Opinion | 0.1 |

Rungs never stack. A mode's weight is its best rung, never the sum and never the average of the
traces in it. Fourteen traces each coded from someone's recollection is still 0.1 — fourteen
opinions is not one fact.

Applied here:

- **A count is behaviour (0.7)** when it comes from traces you hold, coded against what the
  human actually did next. It is opinion (0.1) when it comes from a support engineer's sense of
  what comes up a lot.
- **A cost is money (1.0)** only with a ledger line: a credit issued, a downtime charge, a
  refunded invoice. Measured rework minutes × a loaded rate is behaviour (0.7). A number
  someone sized in the meeting is 0.1, and a mode ranked on it carries `[Assumption]` in the
  rank column — the rank is provisional and you say which number would settle it.
- **A model's own self-assessment is 0.1.** "The agent flagged low confidence on 40% of runs"
  is not a failure count; it is the system grading itself. So is an LLM judge's label, until it
  has been calibrated against human-checked ground truth on a sample you name.
- Tag every empirical claim `[Fact]`, `[Assumption]`, or `[Hypothesis]`. A mode at n=1 is
  `[Hypothesis]` by definition.

Challenge the input before you code it. Name the sampling gap, state the kill criterion (what
result would mean this taxonomy is wrong — usually: a fresh batch of 10 that adds two new
modes), and say what would change your view.

## What good looks like

Three rows from a real-shaped output — a factory copilot, 50 traces over six weeks on two
lines, saturation declared at batch 5:

| Mode | n (% of 50) | Cost / occurrence | Freq × cost | Exemplar | Verdict |
|---|---|---|---|---|---|
| Missed rare stop | 4 (8%) | $3,100 — plant downtime ledger, money 1.0 `[Fact]` | **$12,400** | FS-2411-0087 | INSTANCE-OF-GUESSED (Miss) |
| Stale-shift attribution | 14 (28%) | $19.80 — 22 min tech time × $54/h loaded, behaviour 0.7 `[Fact]` | $277.20 | FS-2411-0112 | **NEW** |
| Operator asked for a parts requisition | 5 (10%) | n/a | — | FS-2411-0141 | NOT-A-DEFECT → `trace-to-interview` |

What makes this output, and not a summary: the most **frequent** mode is not the top-ranked one
and the rank says so; the 28% mode had **no box in the guessed taxonomy**, so it has no derived
acceptable rate and no golden case that can fail into it — that is a gap in the shipped spec,
found by counting; and 5 of the 50 traces were not defects at all, so the defect denominator is
45, stated, not silently 50.

## Gotchas

**Coding with the taxonomy open.** The single most common way to fake this skill. You will get
counts, they will be tidy, they will confirm the list you already had, and the NEW mode will not
appear. If the open codes in Step 2 read like category names rather than sentences about
specific traces, the frame leaked in. Re-code a fresh batch blind and compare.

**Ranking on the escalated pile.** Escalations are the failures that were expensive enough or
annoying enough to be reported. They over-represent loud modes and hide the silent ones —
exactly the modes that matter at higher autonomy. The biased sample can discover modes; it can
never rank them.

**Counting an LLM judge as observed behaviour.** An automated labeller is a cheap way to code
5,000 traces and a fast way to launder a model's opinion into a `[Fact]`. It stays 0.1 until you
hand-check a stated sample against it and report the agreement rate.

**Merging until the modes are clean.** Collapsing awkward modes into "quality issues" always
passes the exclusivity test and always destroys the finding. If two modes will not separate,
the honest fix is to find the dimension that actually splits them, not to widen the box.

**Stopping at 30 because 30 was the floor.** 30 is the refusal threshold, not the target. The
stopping rule is two consecutive batches with no new code. If batch 3 is still producing new
codes at trace 30, you are not done — you are at the minimum.

**Calling the taxonomy done and shipping it sideways.** If the output does not name what must
be re-derived in `eval-first-spec` and re-placed in `guardrail-design`, you have produced a
document, not a finding. The measured taxonomy replaces the guessed one; it does not sit beside it.

## Related skills

| Skill | Handoff |
|---|---|
| `eval-first-spec` | Supplies the guessed taxonomy this skill codes blind against, then receives the measured one. Every acceptable failure rate derived from a guessed cost is re-run; every NEW mode needs golden-set coverage. This is the backwards edge that makes the skill worth running. |
| `guardrail-design` | Receives each mode's measured volume and cost for the cost × volume matrix. Its quadrants were sized on estimates; this replaces the volume axis with counts. |
| `dataset-builder` | Receives the exemplar trace IDs as seed cases for the labelled set. This skill names the exemplars; it does not label or hold them out. |
| `trace-to-interview` | Receives every NOT-A-DEFECT mode — the ones where the system worked and the user wanted another job. Same trace feed, the other question. |
| `refine-flywheel` | Owns the cadence. This is one error-analysis pass; the flywheel decides when it re-runs and whether the result moves autonomy. |

Supersedes: none.
