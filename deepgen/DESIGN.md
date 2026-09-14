# DeepGen design

## What matters

- The studio's edge is not the model. It is the domain data a model cannot reach and the expert
  judgment nobody wrote down. DeepGen exists to turn that into agents, domain by domain, without
  ever letting a synthetic "yes" or a felt "it's better" count as evidence.
- Every part of this framework already exists as an Icarus skill. The new thing is the
  **compiler** that sequences them per domain, the **ledger** that decides which domain next, and
  the **loops** that feed realised outcomes back into both.
- With four active fellows the "learning" at the portfolio layer is a calibration log for the
  first year, not a model. `[Fact]` on headcount. Say it up front so nobody sells it as more.

## Recommendation

Build DeepGen as a **domain compiler with a prioritising ledger** (Design B below), with a
bounded self-curriculum inside it (the safe half of Design C). Reject the monolith and defer
fine-tuning to an eval-gated swap point.

## Challenge first: four things in the ask that need correcting

| The ask says | The problem | What DeepGen does instead |
|---|---|---|
| "train it" | Fine-tuning at v1 is the model-first trap (`compound-system-architecture`, Model bucket over 20% with no legitimate reason). It burns the data budget on the rented part. | Train = compile the memory layer. Fine-tune only as a swap point that must hold the golden set. |
| "synthetic and real data to train it" | Synthetic sits below opinion on the ladder (`synthetic-users`). A synthetic case labelled by the model under test is a mirror, not a test (`dataset-builder`, gate 3). | Synthetic goes to the train pile and the kill screen. The golden set is 100% real. No exceptions, no padding to 20. |
| "recursively learns to run tasks" | A loop with no exit and a judge that is the drafter is self-graded theatre (`workflow-design` step 6). | Every loop names its exit. The judge is a separate agent on a separate model config. Autonomy moves only on a scored re-run. |
| "learns how to prioritise domains" | Four fellows is N=4. Any weight update from four outcomes is noise dressed as learning. | The ledger logs predicted vs realised per domain. Weights change by hand, on a monthly review, with the calibration table in front of Ollie. Automated re-weighting is `[Hypothesis]` until N ≥ 10 domain cycles. |

## Four designs explored

| | A. Monolith learner | B. Domain compiler + ledger | C. Self-play curriculum | D. Fine-tune per domain |
|---|---|---|---|---|
| Shape | One agent per domain with a growing prompt and corpus | A pipeline that compiles a **domain package** (memory layer + golden set + guardrails + cadence doc) from intake and corpus; a ledger ranks which domain to compile next | Agent generates tasks, runs them, judges itself, updates its prompt | A tuned model per domain, retrained on traces |
| Where value compounds | Prompt length | Memory layer, traces, golden set, ledger calibration | Prompt | Weights |
| Independent validator | No. The model checks itself. | Yes. Critic agent, separate model config, scores against held-out golden set. | No, unless bolted on | Only if the eval exists first |
| Synthetic discipline | None | Train pile only, tagged, contamination-audited | Synthetic becomes the test. Fatal. | Synthetic traces poison weights silently |
| Cost to first useful run | Low | Medium: needs 20 real golden cases first | Low | High: needs thousands of labelled traces |
| Portability across domains | Copy the prompt | Stamp a new package from the same compiler | Copy the loop | Retrain |
| Fails which rule | Compound-system component 4; `agent-design` kill line (no compounding memory) | None by design | `dataset-builder` gate 3; `workflow-design` critic independence | Model-first trap; `eval-first-spec` reality floor |
| Verdict | **Reject** | **Build** | **Fold the curriculum generator into B, bounded to the train pile** | **Defer** to a swap point in B |

The counter-intuitive part of B: the compiler spends most of its effort on data and orchestration,
and the domain agent itself is the cheapest, most swappable piece. That is the 40/20/30/10 split
applied to a framework instead of a product.

## Architecture

DeepGen as a compound system (`compound-system-architecture`). Each node's job and its failure
mode if weak.

| # | Component | DeepGen instance | Fails to |
|---|---|---|---|
| 0 | Data layer | Per domain: P-band sources (`yoda-data-sourcing`), tacit captures, trace archive, train pile (synthetic allowed, tagged), golden set (real, held out). Framework-wide: the Domain Ledger, the calibration log, the global lie ledger. | Ungrounded agents. The commonest "not done". |
| 1 | Input | The intake UI → Domain Brief (schema in `schemas/`). Rejects a brief with no named decision or no data source. | Compiling a domain from a domain name. |
| 2 | Router | The Domain Ledger. Decides which domain and which stage runs next. Rules, not a model. | One expensive path for every request. |
| 3a | Retrieve | Researcher agent: bands sources R/G/P, pulls artefacts, cites provenance. | Base-model prior in a name tag. |
| 3b | Reason | The compiled domain agent, running a task at its autonomy level. The 20%. | (this is the model) |
| 3c | Act | Tools with blast radius under the autonomy level. At L1, no commit tool. | A read-only toy, or an L1 agent that posts. |
| 4 | Validate | Critic agent + guardrail stack. Different model config from 3b. Never the model under test. | Self-graded output. No autonomy possible. |
| 5 | Output | Task output + trace (input, output, human edit, outcome) → trace archive. | Cannot score, cannot compound. |

Effort split, framework build: Data 40 / Model 20 / Orchestration 30 / Interface 10. The intake UI
is the 10. If the UI takes more than that, the priorities are backwards.

Model-swap points and their gating evals:

| Swap point | Trigger | Gate |
|---|---|---|
| Domain agent model (3b) | Any provider release | Full golden re-run per domain, no safety-mode regression (`refine-flywheel` station 3) |
| Critic model (4) | Any release, or drift in judge agreement with human adjudication | Judge-vs-adjudicator agreement on a held-out labelled sample, `[Fact]` from the eval ledger |
| Synthetic generator | Any release | Synthetic-real divergence check (`DATA.md`) |
| Fine-tuned domain model | Memory layer plateau: three consecutive re-runs with no pass-rate gain | Must beat the compiled-memory agent on the same golden set, cost-per-outcome included |

## The three layers

### Portfolio layer: the Domain Ledger

One row per candidate domain. Two kinds of columns: hard gates and ranking features. A domain
is ranked only after it clears every hard gate. Gates never average with features (Rule 1).

Hard gates, all required:

| Gate | Test | Skill that decides |
|---|---|---|
| Decision named | One recurring decision an expert gets right and a new hire gets wrong, stated as a job line with a judged-by clause | `agent-design` step 1, `eval-first-spec` part 1 |
| Seed exists | At least one P-band source with an access path and reality evidence ≥ 0.5 | `yoda-data-sourcing` step 5 |
| Expert watchable | A real expert doing the real task can be shadowed, live or recorded | `tacit-knowledge-interview` step 0 |
| Cost of failure stated | Cost-of-one-failure per mode, from an incident, a regulation, or an invoice, not "that would be bad" | `guardrail-design` step 1 |
| Demand rung ≥ 0.3 | Best rung on the ladder for "someone pays or does this today" is at least a specific verbal commitment | `evidence-ladder` |

Ranking features, for domains past the gates:

| Feature | What it measures | Direction |
|---|---|---|
| Demand rung | Best rung, never the sum | Higher is better. Money 1.0 wins outright. |
| Real artefacts held | Count of independently checkable artefacts toward the 20 golden | More is better; 14 `[Fact]` is the floor |
| Tacit density | Captured T rows at ≥ 0.5 divided by total T rows | Higher means the moat is already in hand |
| Compounding seed | Does running the product generate more P-band data | Yes beats no |
| Expert hours available per week | Labelling and shadowing capacity | More is better; below 2 the domain stalls `[Assumption]` |
| Catastrophic modes present | Count of failure modes banded Catastrophic | Raises value and lowers starting autonomy. Not a penalty. |
| Qatar-first fit and global scalability | Both must hold | Either missing is a REDESIGN, not a rank |
| Predicted payoff | Expected golden pass-rate gain per expert hour over the first quarter | Logged before the build. `[Hypothesis]` always. |

How the ledger learns:

1. Before a domain build starts, the predicted payoff and the feature values are frozen in the ledger.
2. After each monthly cycle, realised values are written beside them: pass-rate gain, cost-per-outcome trend, money moved, expert hours actually spent.
3. The calibration table (predicted vs realised, per domain, per feature) goes in front of Ollie at the monthly review.
4. A weight changes only by a logged decision, with the lesson recorded in `lessons/LOG.md`.
5. Automated re-weighting is `[Hypothesis]` until ten domain cycles exist. At N=4 the ledger is an honest notebook, not a learner.

### Domain layer: the domain package

A "trained" domain is a package with six parts. Missing any part means the domain is not
compiled; report which.

| Part | Produced by | Compounds? |
|---|---|---|
| CLAUDE.md for the domain: facts, thresholds, regulations, Qatar-specific rules, the org map | Human, curated, from the intake and the researcher's sourcing | No. Stops re-learning context. |
| Skills: the explicit procedures (E rows) | `explicit-vs-tacit-capture` → written as tell-able procedures | Versioned, not compounding |
| lessons.md: every expert override and every human edit that changed an output, one entry each | `tacit-knowledge-interview` forks, then every task run's corrections | **Yes. The tacit half accretes here.** |
| Trace archive: every run, input, output, edit, outcome | The system, automatically | **Yes. Eval fuel, discovery corpus, YODA moat.** |
| Golden set: ≥ 20 real held-out cases across four bands, per-mode acceptable rates, autonomy level, cost-per-outcome to the cent | `dataset-builder` → `eval-first-spec` | Grows as real outcomes land |
| Guardrail spec and cadence doc | `guardrail-design`, `refine-flywheel` | Autonomy ratchets on scored re-runs |

### Task layer: one run

At each trigger the domain agent runs one task at its autonomy level. The run produces a trace.
The human's edit distance is tweak-time. A correction writes one lessons.md entry. A real
outcome, once known, labels the case and it enters `dataset-builder`'s four gates. That is all.
Nothing at this layer promotes autonomy or re-weights anything.

## The fleet

`workflow-design` step 0, the fleet-or-solo gate: parallelism across domains, yes; role conflict
between drafter and critic, yes; context depth, yes. A fleet is warranted. Archetypes are
cognitive modes, not topics.

| Agent | Mode | Spawns when (observable event) | Done when | Hands to | Surface |
|---|---|---|---|---|---|
| Researcher | Gather, source | A brief lists a source with band `[Assumption]`, or a `[Hypothesis]` claim has no citation | Every source banded R/G/P with an access path and a reality rung | Analyst | Think |
| Analyst | Structure, label, quantify | ≥ 1 artefact arrived with no label, or two labellers disagree | Every artefact has a ground-truth label at ≥ 0.5 or is filed `hold` | Critic | Build |
| Prototyper | Make tangible | A failure mode in the taxonomy has fewer than the band floor of cases in the **train** pile | Synthetic variants exist, tagged `[Hypothesis]`, lie-ledgered, quarantined from golden | Analyst (for adjudication) | Build |
| Drafter (the domain agent) | Compose, run the task | A task trigger fires in the domain, or a re-run is due | The output is committed by the human, or refused, and the trace is archived | Critic | Build |
| Critic | Falsify | A draft exists, a golden re-run is due, or a model changed | Pass, or a named defect list with the case numbers, against the golden set | Drafter (loop, max 3), then human | Build |
| Steward | Schedule, watch, hand back | A cadence tick, a model release notice, or a kill switch tripped | Loop ran, ledger updated, human paged on any kill switch | Ollie | Admin |

Loop exits: critic → drafter caps at three iterations, then escalates to the named domain owner.
Steward escalates on any kill switch (`EVALS.md`) the same day. The critic runs on a different
model config from the drafter. If they are the same, the eval does not exist.

## Recursion: how a run becomes a better run

```
task run → trace → human edit (tweak-time) → lessons.md entry (if corrected)
        → outcome lands → label → dataset-builder gates → golden or train
        → weekly: failing modes → prototyper makes train variants → analyst adjudicates a sample
        → monthly: full golden re-run → autonomy ratchet → ledger realised column → Ollie reviews weights
        → on every model release: full re-run before swap
```

Three properties that keep it honest:

- The only things that cross from run to memory are corrections and outcomes. Praise is not logged.
- The only thing that moves autonomy is a scored re-run at the next level's rates over N real cycles.
- The only thing that changes a ledger weight is Ollie, with the calibration table open.

## Qatar-first, global

Every domain package carries two deployment profiles from day one. Qatar: Arabic and English,
data residency, the regulator named, the QDB stakeholder who cares. Global: the same job line
with the local regulation swapped in the CLAUDE.md store. A domain that only works in Doha, or
only outside it, is a REDESIGN at the ledger, not a rank.

## Kill line

DeepGen ships as a framework only when: the intake refuses a domain with no decision or no
seed; every domain package has all six parts; the critic is a separate agent; the golden set is
real and held out; the ledger holds predicted and realised columns; and every loop has an exit.
Any one missing and the honest description is "a prompt library with a form".

## To sharpen

1. Which domain goes first? The ledger needs one real row to calibrate against. Barrier
   Intelligence has the most worked examples in the skill set (`[Fact]`, from `examples/`).
2. Who is the named adjudicator per domain for contested labels? Without one, `hold` never clears.
3. Is there budget for a second model config for the critic, or does it run on the same provider
   with a different system and no shared context? The latter is weaker but legal.
4. Where does the trace archive live: Supabase in Daedalus, or per-fellow? This decides who owns the moat.
5. What is the monthly review slot? The ledger only learns if the review happens.
