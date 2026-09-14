# DeepGen evals and loops

Three tiers of eval. Four loops. Each loop has an exit. Each eval has an owner and a tag.

## Tier 1: task evals, per domain agent

Owned by `eval-first-spec` and re-run by `refine-flywheel`. Not restated here.

| Instrument | Reads | Moves |
|---|---|---|
| Golden set pass rate, per band and per failure mode | Is the agent right, and where does it fail | Nothing on its own |
| Per-mode rate vs derived acceptable rate | Is a mode inside its budget | Hold or demote |
| Tweak-time: clean-accept rate, median edit fraction, trend | Is the human trusting it | Nominates a level-up. Never grants one. |
| Cost-per-outcome to the cent, four components shown | Is one outcome economic | Fails the spec if above value |

## Tier 2: domain evals, is the package compounding

| Eval | Measure | Pass | Tag |
|---|---|---|---|
| Compounding proof | Golden pass rate at run N vs run N−1 after lessons.md entries were written, on the same model | Rose, and at least one named case flipped fail to pass because of a named entry | `[Fact]` from the eval ledger |
| Memory hygiene | lessons.md entries that are corrections vs praise | 100% corrections. A praise entry is deleted. | `[Fact]` |
| Golden growth | New real golden cases this month | > 0. Zero for two months means the trace archive is not producing outcomes, or nobody is labelling. | `[Fact]` |
| Contamination | Leaks found in the monthly audit; any golden case the drafter has seen | Zero | `[Fact]` |
| Tacit capture rate | T rows at ≥ 0.5 divided by all T rows | Rising | `[Fact]` |
| Autonomy trajectory | Level now vs level at ship, with the scored re-run that moved it | Every move has a re-run beside it | `[Fact]` |
| Drift check | Clean-accept rising while golden pass rate falls | Not observed. If observed, the agent is hedging; freeze. | `[Fact]` |
| Cost trajectory | Cost-per-outcome turn over turn | Falling, or flat with autonomy rising | `[Fact]` |

## Tier 3: management evals, is DeepGen itself doing its job

These score the framework, not any one domain. They are the ones the ask calls "management evals".

| Eval | Measure | Pass | Owner |
|---|---|---|---|
| Prioritiser calibration | Predicted payoff vs realised, per domain, per feature | Direction right on ≥ 3 of 4 domains `[Assumption]` at current N. Magnitude is not scored until N ≥ 10. | Steward, monthly |
| Regret | Expert hours spent on a domain that stalled, while a gated-clear domain with higher realised payoff waited | Zero stalled-while-waiting quarters | Ollie, quarterly |
| False kill | A domain killed at intake that later showed money moved elsewhere | Zero. One is a lesson entry and an intake revision. | Ollie |
| Intake predictivity | Which gate, when OWED at intake, best predicted a stall | Named. The gate's threshold moves only by a logged decision. | Steward |
| Time to first golden 20 | Calendar days from brief to a held-out set of 20 real cases | Falling across domains | Steward |
| Expert-hour efficiency | Golden cases per expert hour; lessons entries per expert hour | Rising | Steward |
| Critic independence | Critic model config ≠ drafter config; critic never labels golden | Audited true every month | Steward |
| Critic agreement | Critic verdict vs human adjudicator on a held-out labelled sample | Above a threshold set per domain from the first adjudicated sample, `[Assumption]` until then | Analyst |
| Guardrail fail-open | Any Catastrophic or High mode that shipped on timeout | Zero | Steward, same day |
| Synthetic leak rate | Synthetic rows found in golden, ever | Zero | Steward |
| Review hygiene | Monthly review held; ledger weights changed only with the calibration table open | Every month | Ollie |

## The four loops

| Loop | Tick | What runs | Exit | Writes |
|---|---|---|---|---|
| 0. Run | Every task run | Drafter runs at its level. Human commits or edits. Tweak-time logged. A correction writes one lessons.md entry. Outcome, when it lands, labels the case. | The human commits, refuses, or three critic rounds fail and it escalates | Trace archive, lessons.md |
| 1. Domain, weekly | Weekly | `trace-to-interview` cards from the week's traces. Failing modes counted. Prototyper grows train variants for under-covered modes. Analyst adjudicates the hold queue. New golden candidates through `dataset-builder` gates. | Hold queue empty or adjudicator paged | Train pile, golden set, lie ledger |
| 2. Domain, monthly | Monthly, and on every model release | Full golden re-run (`refine-flywheel` station 3). Autonomy ratchet up or down on the scored result. Contamination audit. Tier 2 evals. | Ledger realised column written | Eval ledger, cadence doc, ledger |
| 3. Portfolio, monthly | Monthly review with Ollie | Tier 3 evals. Calibration table. Kill, hold, or double down per domain. Weight changes logged. Lesson entries filed. | Review minutes filed | Domain Ledger weights, `lessons/LOG.md` |

Model release is a trigger for loop 2, never a free upgrade. The whole golden set re-runs per
domain before the swap. A safety-mode regression blocks the swap even if the aggregate rose.

## How DeepGen improves itself

Four mechanisms, each with a memory store and a writer.

| Mechanism | Store | Writer | What it changes |
|---|---|---|---|
| Ledger calibration | Domain Ledger, predicted and realised columns | Steward writes realised; Ollie changes weights | Which domain gets the next expert hour |
| Intake revision | `INTAKE.md` gate thresholds and field list | Ollie, after a false kill or a stall the intake did not predict | What the form asks and where the bar sits |
| Lie ledger growth | Global lie ledger plus per-domain entries | Analyst, from synthetic-real divergence | What the synthetic generator is told to distrust about itself |
| Skill gotchas | `lessons/LOG.md`, and the `tests/` of any Icarus skill that missed in real use (gate 6) | Whoever hit the miss | The method itself, through the existing lessons channel |

Nothing here rewrites a skill in `skills/`. A miss is logged as a gotcha and the skill's harness
is re-run, per Rule 8.

## Kill switches

Any one trips a same-day page to Ollie and a freeze on the affected domain's autonomy.

| Switch | Signal | Action |
|---|---|---|
| Synthetic in golden | Audit finds a row with `origin: synthetic` or `labelled_by: model` in the golden set | Freeze domain. Rebuild the set. Lesson entry. |
| Judge is drafter | Critic and drafter resolve to the same model config, or the critic labelled a golden case | Eval results since the overlap are void. Re-run with an independent critic. |
| Hedging drift | Clean-accept rising and golden pass rate falling over two re-runs | Freeze autonomy. Cluster the accepted outputs; the agent is going vague. |
| Fail-open on a high-cost mode | A Catastrophic or High action shipped on a sign-off timeout | Block the action path. `guardrail-design` step 5 is wrong; fix before any further run. |
| Loop spinning | Cost-per-outcome flat three turns while usage rises | Stop the ratchet. Find where the human minutes are going. |
| Calibration reversed | Prioritiser direction wrong on the majority of domains at review | Revert to manual ranking. Weights are opinion until re-derived. |
| Golden starvation | Zero new real golden cases for two months | The trace archive is not producing outcomes. Route to `yoda-data-sourcing` and the adjudicator. |

## The eval ledger

One row per re-run per domain. Kept beside the domain package. The critic writes it; nobody
edits it.

| Date | Domain | Trigger | Model config (drafter / critic) | Golden n | Pass by band (T/E/A/R) | Per-mode rate vs acceptable | Δ vs last | Tweak-time clean-accept | Cost-per-outcome | Autonomy action | Kill switches tripped |
|---|---|---|---|---|---|---|---|---|---|---|---|
