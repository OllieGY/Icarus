# DeepGen

An agent framework that decides which deep technical or vertical domains the studio should go
deep on, compiles a domain agent from real and synthetic domain data, and then runs tasks in
that domain in a loop that makes run N better than run N−1.

**Status: design, not built, not graduated.** Nothing in this folder is loaded by the plugin.
It composes the 45 Icarus skills; it restates none of them. Rule 9 holds: DeepGen enters the
skill set only if a piece of it earns a harness and passes the six gates. The rest stays here
as the operating design.

## The idea in one table

| Layer | Question it answers | Cadence | Owner skills |
|---|---|---|---|
| Portfolio | Which domain next, and how much to spend on it | Monthly | `fellow-path-router`, `so-what-stress-test`, `yoda-data-sourcing`, `moat-design-canvas` |
| Domain | What does a compiled domain agent consist of, and is it ready | Per domain, weeks | `explicit-vs-tacit-capture`, `dataset-builder`, `eval-first-spec`, `agent-design`, `guardrail-design`, `compound-system-architecture` |
| Task | Did this run work, what did the human change, what gets written back | Per run | `agent-concierge-probe`, `trace-to-interview`, `refine-flywheel`, `metrics-that-matter` |

Learning flows upward. A task run writes a lesson. A month of lessons re-scores a domain. A
domain's realised outcome re-weights the portfolio. That is the whole recursion.

## What "train" means here

DeepGen does not fine-tune weights at v1. Training means compiling the **memory layer** of a
domain agent (`agent-design`): a curated CLAUDE.md, the explicit procedures as skills, an
append-only lessons.md of expert overrides, and a trace archive that feeds the eval. Fine-tuning
is a model-swap point gated by the golden set (`compound-system-architecture`), earned only when
the memory layer has plateaued on the eval. `[Assumption]` until a domain reaches that plateau.

Synthetic data trains and screens. It never validates. See [`DATA.md`](./DATA.md).

## Files

| File | What it holds |
|---|---|
| [`DESIGN.md`](./DESIGN.md) | The framework. Four candidate designs explored, one recommended. Architecture, the fleet, the prioritiser, the recursion, the kill line. |
| [`INTAKE.md`](./INTAKE.md) | The intake UI spec. Every field, the gate it feeds, the skill it hands to. The readiness rules. |
| [`DATA.md`](./DATA.md) | The real and synthetic data pipelines. Four allowed uses of synthetic, one ban. Contamination rules. |
| [`EVALS.md`](./EVALS.md) | Three eval tiers (task, domain, management), the four loops, self-improvement mechanics, kill switches. |
| [`schemas/domain-brief.schema.json`](./schemas/domain-brief.schema.json) | The JSON the intake emits. |
| [`ui/index.html`](./ui/index.html) | The intake UI. Utopia brand system. Emits a Domain Brief and a readiness read. |

## How to run the intake today

Two ways, same output.

1. In a session: `/deepgen <domain, decision, what you hold>`. Runs the intake questions in chat,
   composes the skills, returns the readiness read and the brief.
2. In the browser: open `ui/index.html` (or the published artifact). Fill the fields. Save the
   brief. Ollie reads briefs back from the artifact store.

## Kill line for the framework

DeepGen is working only if, per domain, all four hold:

1. The golden set is 100% real, held out, and grew this month (`dataset-builder` gate 4, `[Fact]` from the ledger).
2. The eval re-ran on the whole set before any model or prompt change (`refine-flywheel` station 3).
3. Cost-per-outcome fell turn over turn, or the autonomy level rose on a scored re-run.
4. The prioritiser's predicted payoff for the domain was logged before the build and compared after.

Any one missing and DeepGen is a filing cabinet with a UI. Say so, and name which.
