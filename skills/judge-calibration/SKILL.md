---
name: judge-calibration
description: >-
  Build an LLM judge you can defend — the rubric decomposed into binary atomic criteria, a
  stratified 30+ item calibration set humans label blind and FIRST, an agreement report using
  TPR and TNR separately (never bare accuracy), a hard gate at 0.85 on BOTH, the pinned judge
  model ID and calibration date, the bias controls run (position swap, length control,
  self-preference), and the re-calibration trigger. Fires on "can we trust the judge", "set up
  an LLM judge", "our eval scores don't match reality", "how do we score this automatically",
  "calibrate the grader". Not for writing the golden cases or labelling the data (use
  `dataset-builder`), not for the spec and its pass/fail job line (use `eval-first-spec`), not
  for deciding which failures matter (use `failure-mode-mining`), not for re-running the set
  after a model release (use `refine-flywheel`).
metadata:
  type: generator
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Judge Calibration

## What it does

Turns an unmeasured LLM grader into a calibrated instrument, or refuses to ship it. The artefact is the filled `template.md` — a calibrated judge spec in six parts: (a) the rubric decomposed into atomic BINARY criteria, one observable claim each; (b) a human-labelled calibration set drawn from the golden cases, stratified, labelled blind and before the judge ever runs; (c) a per-criterion agreement report giving TPR and TNR separately with the full confusion matrix; (d) the pass gate at **≥0.85 on both rates, per criterion**; (e) the pinned judge model ID and the date it was calibrated; (f) the bias controls applied and their numbers.

It refuses three things outright. It will not report bare accuracy. It will not bless a judge on a rate computed over a minority class of fewer than 12 labelled items. It will not accept the judge's own confidence as evidence of anything.

## The reframe

A judge is a measuring instrument, and an uncalibrated instrument is an **opinion (0.1) wearing a number**. The generic version of this task is "write a good judge prompt and eyeball the outputs" — which produces a number nobody has checked against a human, attached to every eval score the team will quote for the next six months. Three consequences, each enforced below.

**The judge's confidence in itself is worth 0.1, permanently.** A model rating its own output 9/10, a self-consistency score, a vendor benchmark table — all self-assessment, all opinion, all floor. No quantity of them stacks. Only *measured agreement against human labels you collected blind* is behaviour (0.7), and that is the highest rung a judge score reaches on its own.

**Accuracy is the number that hides the failure.** A judge that passes everything scores 90% on a set that is 90% pass, having caught zero failures. Accuracy is a weighted average of two different questions, and averaging is how misses get laundered by the majority class. Report **TPR** (of the items a human passed, the fraction the judge passed) and **TNR** (of the items a human failed, the fraction the judge failed) separately, per criterion, always. A judge is bought for its TNR.

**Calibration expires.** It is pinned to one model snapshot. The moment the model underneath changes — new snapshot, point release, a floating alias that silently rolled — every score taken since is uncalibrated and inherits 0.1. A judge drifting on a new snapshot does not announce itself; it just moves your pass rate.

## When to use / When NOT

Use when a team already has golden cases and a rubric, is about to automate grading (or already has), and needs the judge's agreement with a human to be a measured number rather than a hope. Trigger phrases: "can we trust the judge", "set up an LLM judge", "our eval scores don't match reality", "how do we score this automatically", "calibrate the grader".

| If you want… | Use instead |
|---|---|
| To write the golden cases themselves, or attach ground-truth labels to field artefacts | `dataset-builder` — it produces the set this skill samples from. No golden set, no calibration set. |
| The spec, the one-sentence job, the pass/fail line that defines "working" | `eval-first-spec` — it writes the rubric. This skill only makes that rubric measurable by a machine. |
| To decide which failures actually matter and what each costs | `failure-mode-mining` — severity and taxonomy. This skill measures whether the judge *detects* a failure, not whether it is worth detecting. |
| To re-run the eval set after a model release and decide on autonomy | `refine-flywheel` — it owns the loop. This skill owns whether the judge doing the scoring in that loop is still calibrated. |

Hard precondition: no golden set and no human labels, no calibration. Say so and stop. Do not invent a calibration set.

## Method

Fill `template.md`. Seven steps, in order.

### Step 1 — Take the golden set and the existing rubric

Name the unit being judged (one output of one system, the unit the spec's job line names), the golden set it is drawn from, and the rubric as it stands. Quote the rubric verbatim. A 1–5 Likert is fine as *input* — it is what step 2 dismantles.

### Step 2 — Decompose to binary atomic criteria

| Test | The criterion survives only if | Kill it when |
|---|---|---|
| Binary | Answerable PASS/FAIL, no scale | It asks "how good", "how well", "rate 1–5" |
| Atomic | It makes exactly one claim | It contains "and", "while also", a list |
| Observable | Evidence sits in the output or the source record | It needs a mind read: "appropriate tone", "sounds confident" |
| Reproducible | Two humans labelling blind agree ≥0.90 on it | They disagree more than 1 time in 10 |

**Kill any criterion two humans would score differently.** Measure it, do not assume it — the double-labelled subset in step 3 gives human-human agreement per criterion, and that number is the ceiling. A judge cannot be more reliable than the label it is compared against, so a criterion at 0.61 human-human is not a hard judging problem, it is a broken criterion. Killed criteria move to a named human-only review list; they are not deleted from the world.

Never replace a 1–5 scale with a 1–5 scale. A Likert average launders failures: 4.2/5 does not say whether the shipped thing was correct. Decompose it into the atomic claims being averaged, then throw the average away.

### Step 3 — Build the calibration set; humans label FIRST and blind

| Requirement | Floor |
|---|---|
| Total items, drawn from the golden set | ≥30 |
| Human-PASS items, **per criterion** | ≥12 |
| Human-FAIL items, **per criterion** | ≥12 |
| Near-misses (fail on exactly one criterion) | ≥6 |
| Hard negatives (fluent, confident, wrong) | ≥6 |
| Items double-labelled by a second human, blind | ≥10 |

Stratify by label, not by natural rate. Sample at a 90% production pass rate and your TNR rests on three items — unreadable. Hard negatives are the load-bearing stratum: a judge fails in the direction of the confident, well-written, wrong answer.

**Blind and first is not a nicety.** Humans label before the judge runs and without seeing its verdict. A human "reviewing and confirming" judge output has not produced a label — they have produced a 0.1 confirmation, and the resulting agreement rate is the judge agreeing with itself through a person. Labels collected that way void the number. Say so and re-label.

### Step 4 — Run the judge; compute TPR and TNR per criterion

|  | Judge PASS | Judge FAIL |
|---|---|---|
| **Human PASS** | TP | FN |
| **Human FAIL** | FP | TN |

`TPR = TP / (TP + FN)` · `TNR = TN / (TN + FP)`

Report both per criterion, with the four raw counts beside them so the denominators are visible. Overall accuracy may appear as a diagnostic only, and only next to the per-rate table that contradicts it. A headline accuracy figure standing alone auto-fails this skill.

### Step 5 — Diagnose by criterion; rewrite the criterion, not the threshold

Pull the false positives for the failing criterion and read what they share. Almost always the criterion is compound, unobservable, or admits a plausible near-answer. Rewrite it to an exact, checkable claim and re-run. **Moving the gate down to meet the judge is the failure this step exists to stop** — it converts a measurement problem into a permanent blind spot.

### Step 6 — Gate, pin, date

Gate: **≥0.85 TPR and ≥0.85 TNR on every criterion.** Both. Per criterion. A criterion at 0.94 TPR and 0.67 TNR does not pass, and the judge does not pass with it.

A criterion that cannot be rewritten to clear the gate is not automated. Move it to the human-only list and ship the judge on the criteria that cleared: a partial judge that knows what it cannot see beats a whole judge that is wrong somewhere unmapped.

Pin the exact snapshot string the provider returns — never a floating alias ending in `-latest`, which is an unpinned instrument by definition. Record snapshot, calibration date, set version and per-criterion rates as one block. Those four travel together; a rate without its snapshot is not a result.

### Step 7 — Bias controls, re-calibration trigger, drift check

| Control | Run it when | The test | It fails when |
|---|---|---|---|
| Position swap | The judge compares two outputs | Score every pair in both orders; count how often it picks the first-listed on pairs humans scored equal | Materially off 50/50. Fix by scoring each output independently against the criteria, not pairwise |
| Length control | Always | Bucket by output length; compare the judge's pass rate on human-FAIL items per bucket | It passes long wrong answers more than short ones — it is scoring verbosity |
| Self-preference | The judge shares a model family with the system under test | On items humans scored identically, compare the judge's pass rate on own-family vs other-family outputs | A gap. Fix by pinning the judge to a different family, not by asking it to be fair |

Re-calibration triggers — any one fires a full re-run of steps 3–6:

- the judge model ID changes, including a point release or a silently-rolled alias;
- any criterion's text changes, or a criterion is added or killed;
- the judge's prompt template changes;
- the system under test moves to a new model family (self-preference risk is now different);
- 90 days elapse, whatever else happened.

Drift check between re-calibrations: each cycle a human blind-labels 10 fresh items and you compare. More than 2 disagreements fires a full re-calibration immediately. Scores taken between a trigger firing and re-calibration completing are uncalibrated — mark them, do not quote them.

## Evidence standard

| Signal | Score |
|---|---|
| Money moved | 1.0 |
| Behaviour observed | 0.7 |
| Artefact shown | 0.5 |
| Verbal commitment | 0.3 |
| Opinion | 0.1 |

Rungs never stack, and a claim's weight is its best rung — never the sum, never the average. Fifty judge runs agreeing with each other is still 0.1, because they are fifty opinions. Applied to a judge:

- **0.7** — measured agreement against blind human labels on a stratified set. The highest rung a judge score reaches on its own, and what this skill exists to produce.
- **0.5** — the labelling sheet, the rubric, the records used as ground truth. Real artefacts; agreement still unmeasured.
- **0.3** — "two engineers will label it next sprint." A plan is not a measurement.
- **0.1** — the judge's self-reported confidence, a self-consistency score, a vendor benchmark, "everyone uses a model judge now." Floor. Scoring any of these above 0.1 fails the skill.
- **1.0** — only where the judged outcome is one a customer paid or contracted against: a pilot acceptance clause that pays on outputs passing these criteria. If your judge gates an invoice, its calibration is a commercial control, not a dashboard.

Tag every empirical claim `[Fact]`, `[Assumption]`, `[Hypothesis]`. A judge whose rates are `[Assumption]` has not been calibrated; it has a test to run.

**Kill line.** Reporting a judge as calibrated on bare accuracy, on a rate whose minority class has fewer than 12 labelled items, on labels collected after the labeller saw the judge's verdict, or with either rate below 0.85 — any one auto-fails the output. Below the gate, every score the judge has produced reverts to 0.1 and must be re-taken.

## What good looks like

A factory-copilot team decomposed "rate the shift brief 1–5 on accuracy, usefulness and tone" into four binary criteria and killed a fifth (`the brief is useful and well-written` — two engineers agreed on it only 0.61 of the time, so it went to a monthly human-only read). Two engineers blind-labelled 44 items — ≥12 PASS and ≥12 FAIL per criterion, 10 near-misses, 8 hard negatives — before the judge ran.

Overall accuracy came out at **0.903**, and that number was worthless:

| Criterion | TP | FN | FP | TN | TPR | TNR | Verdict |
|---|---|---|---|---|---|---|---|
| C1 names exactly one subsystem | 29 | 1 | 1 | 13 | 0.97 | 0.93 | PASS |
| C2 subsystem matches the closed work order | 24 | 2 | 6 | 12 | 0.92 | **0.67** | FAIL |
| C3 action executable without sign-off | 26 | 2 | 2 | 14 | 0.93 | 0.88 | PASS |
| C4 every cited reading is in the telemetry window | 29 | 2 | 1 | 12 | 0.94 | 0.92 | PASS |

C2 — the only criterion measuring whether the brief was *correct* — missed 6 failures out of 18. All six were hard negatives naming an adjacent subsystem on the same line. The gate did not move. The criterion was rewritten from "identifies the root cause" to "the named subsystem string is an exact match for the subsystem field on the work order closed for this event", and re-ran at TPR 0.96 / TNR 0.94 [Fact, behaviour 0.7].

Full worked version — position-swap, length and self-preference numbers, and the pinned snapshot block — in `examples/sample.md`.

## Gotchas

**Accuracy in the headline, rates in the appendix.** The moment one number is quoted upstairs it becomes the number. If the deck says 90%, nobody reads the TNR of 0.67 underneath. Put both rates in the headline or do not publish.

**Sampling the calibration set at the production pass rate.** It feels representative and destroys the TNR denominator. Thirty items at a 90% pass rate gives three failures; TNR 3/3 and TNR 2/3 are both meaningless, and one of them looks perfect.

**The label that is really a confirmation.** "Our reviewer went through the judge's verdicts and agreed with 94% of them" is not 0.94 agreement — the reviewer was anchored to the verdict they were shown. A 0.1 confirmation dressed as a 0.7 measurement, and the most common way a judge gets blessed.

**Lowering the gate to meet the judge.** A criterion at 0.67 TNR tells you the criterion is vague, not that 0.67 is the ceiling. Move the gate and you lose the ability to ever detect what the criterion was written to catch.

**The floating model alias.** An alias resolving to "current" rolls without telling you — an instrument recalibrating itself in the dark. Pin the snapshot string.

**Same-family judge scoring your own system.** When judge and system under test come from one family, the judge's preference for its own house style is indistinguishable from a quality signal until you measure it on human-tied pairs. Prompting the judge to "be impartial" is an opinion-level control and changes nothing measurable.

**Criteria drifting without re-calibration.** A criterion reworded for clarity is a new instrument. Rates are pinned to the criterion text as much as to the model snapshot.

**Calibrating once and citing forever.** The date on the calibration block is not decoration. A rate with no date is a rate with no claim attached.

## Related skills

| Skill | Handoff |
|---|---|
| `dataset-builder` | Produces the labelled golden cases. Run it first — this skill samples the calibration set out of what it built, and cannot run without it. |
| `eval-first-spec` | Writes the spec, the job line and the pass/fail contract. It supplies the rubric this skill decomposes. Send rubric-writing questions there. |
| `failure-mode-mining` | Decides which failures matter and what they cost. It tells you which criteria are worth having; this skill tells you whether the judge can see them. |
| `refine-flywheel` | Runs the post-launch loop and re-scores on every model release. This skill hands it a calibrated judge plus a re-calibration trigger; a release that changes the judge model fires this skill again before the flywheel's numbers mean anything. |

Supersedes: none.
