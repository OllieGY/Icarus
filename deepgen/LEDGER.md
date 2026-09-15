# Domain Ledger

One row per candidate domain. Hard gates first; a domain is ranked only after every gate is PASS.
Predicted columns are frozen before the build starts. Realised columns are written monthly by the
steward. Weights change only by a logged decision at the monthly review, with the calibration table
open. At N=1 this ledger is a notebook, not a learner. `[Fact]` on N.

## Rows

| # | Domain | Fellow | Decision named | Seed exists | Expert watchable | Cost stated | Demand ≥ 0.3 | Ranked? | Status |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Industrial sensors: shift-handover machine-risk call | Amyn / Mentix (Satheesh / Barrier for detector telemetry) | OWED | OWED | BLOCKED | BLOCKED | BLOCKED | No | Intake open. First domain by Ollie's call, 2026-09-15. |

## Features, row 1

| Feature | Value | Tag | Source |
|---|---|---|---|
| Demand rung | Unknown. No real signal held in this repo. | `[Hypothesis]` | Nothing above opinion cited yet |
| Real artefacts held | 0 confirmed | `[Fact]` | No fellow artefact in the hub |
| Tacit density | Unknown. The fixture capture shows four forks, three observed; that is the shape, not the count. | `[Assumption]` | `tacit-knowledge-interview/examples` (fixture) |
| Compounding seed | Operator-correction stream on the copilot, if it exists; plant sensor logs | `[Assumption]` | `dataset-builder/examples` (fixture) |
| Expert hours per week | Unknown. Mentix is in surgical mentoring mode, so hours may be scarce. | `[Assumption]` | Studio context |
| Catastrophic modes | Likely one: Miss on a machine that stops. Silent failure read as all-clear at L1. | `[Assumption]` | `eval-first-spec/examples` (fixture) |
| Qatar-first and global | Plant, regulator, residency unknown | `[Hypothesis]` | Not asked yet |
| Vendor-locked telemetry | Detector telemetry is P but vendor-owned; clause-gated | `[Assumption]` | `yoda-data-sourcing/examples` (fixture) |

## Predicted, row 1 (frozen 2026-09-15, before any build)

| Prediction | Value | Falsified if |
|---|---|---|
| First golden 20 | Week 6 from Amyn confirming the decision | Fewer than 20 real held-out cases by week 8 |
| Expert hours to golden 20 | ≤ 12 | More than 20 spent, or golden count < 20 at 12 |
| Autonomy at ship | L1 Drafts | Anything higher proposed before a scored re-run |
| First compounding proof | One lessons.md entry flips one golden case within two re-runs of ship | No flip by re-run 3 |
| Cost-per-outcome direction | Falls turn over turn from re-run 2 | Flat three turns |

All five are `[Hypothesis]`. They exist to be compared, not believed.

## Realised, row 1

| Month | Golden count | `[Fact]` share | Expert hours spent | Pass rate by band | CPO | Autonomy | Money moved | Notes |
|---|---|---|---|---|---|---|---|---|
| | | | | | | | | |

## Calibration

| Domain | Feature | Predicted | Realised | Direction right? | Weight change (logged decision) |
|---|---|---|---|---|---|
| | | | | | |
