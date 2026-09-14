# DeepGen data

Two pipelines, five piles, one ban.

## The real pipeline

Runs once per domain to seed, then continuously from traces. Each step is an Icarus skill; DeepGen
sequences them and carries the artefacts forward.

| Step | Skill | In | Out | Gate it must clear |
|---|---|---|---|---|
| 1 | `yoda-data-sourcing` | Intake field 6 | Corpus map: every source banded R/G/P, access path, reality rung, compounds-with-use | ≥ 1 P row at ≥ 0.5, or stop |
| 2 | `tacit-knowledge-interview` | A watchable expert (field 8) | Tacit capture: forks observed (0.7) split from recited (0.3), each with cue and exception | ≥ 1 fork observed, and ≥ 1 row survives strike-the-SOP |
| 3 | `explicit-vs-tacit-capture` | SOPs, rubrics, the capture from step 2, correction logs | E/T ledger: E rows become skills, T rows at ≥ 0.5 become lessons and judgment cases, placeholders go back to step 2 | No judgment folded inside an E row |
| 4 | `dataset-builder` | Artefacts from P rows, labelled | Labelled ledger, split golden / train / hold / discard; ≥ 20 golden through four gates | 20 real, no leak, no model-generated label, held out |
| 5 | `eval-first-spec` | The golden seed | Job line, 20 cases in four bands (≥ 14 `[Fact]`), autonomy level, per-mode rates, cost-per-outcome | Coverage of every failure mode |
| 6 | Trace archive | Every task run | Input, output, human edit, outcome | Written automatically, sampled into eval and discovery |

Step 6 is what makes the seed compound. A domain whose only real data is the step 1 seed erodes
(`yoda-data-sourcing`, the static-seed trap). The trace archive is the row that grows.

## The synthetic pipeline

Synthetic data has four legal jobs in DeepGen and one that is banned.

| Use | What is generated | Grounded in | Goes to | Tag |
|---|---|---|---|---|
| Curriculum | Task variants for a failure mode that is under-represented in the **train** pile: edge, adversarial, must-refuse shapes | A real failing case or a trace-to-interview card, never the base model's prior | Train pile, quarantined from golden | `[Hypothesis]` |
| Kill screen | A synthetic panel pre-tests a task framing, a prompt, or a flow before expert time is spent (`synthetic-users`) | Named corpus slices: field logs, tacit capture, shadow threads | Verdict only: kill, revise, promote to a real run | Never `[Fact]` |
| Guardrail probes | Inputs engineered to hit a Catastrophic mode, to exercise the code hard-block and the confidence gate | The failure taxonomy | Guardrail test set. **Labels adjudicated by a human before any score is read.** | `[Hypothesis]` until adjudicated |
| Cold-start warm-up | Worked examples in the domain CLAUDE.md and skills when the trace archive is empty | The E rows from `explicit-vs-tacit-capture` | Memory layer, marked synthetic, retired as real traces arrive | `[Assumption]` |
| **Banned** | Synthetic cases in the golden set. Synthetic labels from the model under test. Synthetic rows to reach 20. Synthetic "yes" read as demand. | | | |

Why the ban is absolute: a case the model invented and labelled passes by construction. It hides
the exact failure the golden set exists to catch (`dataset-builder`, "padding to 20"). And a
synthetic user never pays and never no-shows, so its enthusiasm is null (`synthetic-users`, the
lie ledger).

## The five piles

| Pile | Contents | Real or synthetic | Model under test may see it? | Used for |
|---|---|---|---|---|
| Golden | ≥ 20 cases, four bands, ground-truth labels ≥ 0.5 | Real only | **Never.** Held out. | Scoring, autonomy, model swap |
| Train | Labelled real cases that failed a golden gate but are sound, plus curriculum variants | Both, every row tagged | Yes | Few-shot, skills, warm-up |
| Hold | Real cases with a contested or opinion-only label | Real | No | Adjudication queue |
| Discard | Leaked, reproducible, or unsourced | Either | n/a | Audit trail only |
| Guardrail probes | Adversarial and must-refuse inputs with adjudicated labels | Both | Only at probe time | Layer 1 and 2 checks |

A golden case the build has seen, even once as a few-shot, retires to train and is replaced. Log
the retirement.

## Contamination rules

1. Every row carries `origin: real | synthetic` and `labelled_by: outcome | adjudicator | model`. A row with `labelled_by: model` can never be golden.
2. The golden set is stored separately from anything the drafter can read. The critic reads it; the drafter does not.
3. Monthly audit: sample the golden set, run the input-leak and label-leak checks (`dataset-builder` step 5). Any leak found freezes the domain's autonomy until the set is repaired.
4. Synthetic-real divergence: run the drafter on matched pairs (a synthetic variant and the real case it was grown from). Where behaviour diverges, log a domain-specific lie in the lie ledger. The lie ledger is the synthetic generator's memory layer.
5. Train ratio is tracked, not capped: synthetic rows divided by real rows in the train pile, per failure mode. A mode where the ratio rises while its golden pass rate falls is the curriculum drifting from reality. Stop generating for that mode and go get real cases.

## Numbers the pipeline reports each month

| Number | Source | Tag |
|---|---|---|
| Golden count, and new golden this month | Ledger | `[Fact]` |
| `[Fact]` share of the golden set (floor 14 of 20) | Ledger | `[Fact]` |
| Hold queue length and median days to adjudication | Ledger | `[Fact]` |
| Train ratio synthetic:real per mode | Ledger | `[Fact]` |
| Tacit rows captured at ≥ 0.5 vs placeholders | E/T ledger | `[Fact]` |
| Leaks found in audit | Audit | `[Fact]` |
| Trace archive growth, runs per week | Archive | `[Fact]` |

None of these are targets. They are the instrument. A target on golden count produces padding.

## Worked shape, Barrier Intelligence

The skill set already carries the pieces for permit-to-work gas-hazard review (`[Fact]`: worked
examples in `yoda-data-sourcing`, `agent-design`, `guardrail-design`, `workflow-design`). DeepGen
would sequence them like this. No numbers below are measured; the shape is the point.

1. Corpus map: public gas-safety standards are R and out. Rig permits are G. Field logs and shadow operator threads are P and compound. Detector telemetry is P but vendor-owned, so it is clause-gated and routed to `data-rights-clause`.
2. Shadow the duty safety officer on a real shift. Log the forks. The override of a soft alarm is the load-bearing judgment.
3. The permit SOP splits: the checklist is E and becomes a skill; "escalate if the reading looks off" splits into a rule and an override cue, and the cue is T.
4. Each permit decision with its recorded outcome is one artefact. Those with an outcome on record are golden candidates. Those with only the officer's opinion go to hold.
5. Curriculum: for the Miss mode, grow variants from real near-miss logs into the train pile. Never into golden.
6. Every reviewed permit from then on is a trace. Every override the officer makes is a lessons.md entry.
