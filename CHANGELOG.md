# Changelog

## 1.1.0 — 2026-09-15

One skill, and the first `references/` folder in the kit.

### Added — `invention-disclosure`

Stage 06, beside `moat-design-canvas` and `data-rights-clause`. Nothing in the kit touched patents,
trade secrets, prior art or invention capture, so a builder asking "should we patent this" got either
nothing or a generic answer from a neighbouring skill.

It returns four things in one form: a complete invention disclosure (named natural-person inventors
with each one's conceptual contribution, conception date, reduction to practice scored on the ladder,
prior art, dependencies, assignment block); a **disclosure log** that computes, per jurisdiction,
whether the filing door is OPEN, CLOSING on a date, or BURNED; the protect / publish / secret /
nothing decision with a filing route and a five-year cost ledger; and a defensibility verdict —
one candidate incumbent-veto sentence scored on three tests, returning VETO CANDIDATE, SIGNAL ONLY,
or DO NOT FILE.

Two things make it more than a form. It runs the clock **first**, because the United States gives an
inventor twelve months after their own disclosure, the EPO gives six and only for abuse or a
recognised exhibition, and Qatar's law states none — so the usual sequence of build, demo, pitch,
then ask has often closed Europe and the Gulf before the question is asked. And it refuses to call a
patent a moat: the veto sentence goes to `moat-design-canvas`, which decides whether it holds, and a
filing that fails the copy-path or detectability test is named a financing signal rather than
defensibility.

Not graduated. Two judge agents scored it and disagreed on the golden set; both runs were against
the pre-refine text and neither stands after the fixes, which is recorded in the skill's
`tests/RESULTS.md` rather than smoothed into a pass. Never used in real product work.

### Added — the `references/` convention

`skills/invention-disclosure/references/` holds `jurisdictions.md` (US, EPO/UK, PCT, Qatar, the GCC
Patent Office, Saudi Arabia, the UAE — fees, grace periods, timelines, software eligibility, AI
inventorship, trade secrets, defensive publication) and `decision-tables.md` (the four outcomes, the
scorecard, cost and time ledgers by route, the three defensibility tests).

Every figure carries a source and a checked date, and the skill's kill line fails any output that
cites a fee or a deadline not traceable to those files and not tagged `[Assumption]`. This is the
first skill in the kit to use a `references/` folder; it exists because a jurisdiction table goes
stale on a schedule the method does not, and because loading it into every session is waste.

### Changed

- `docs/FLOW.md` and `GOLDEN_RULES.md` stage 06 rows, the skill counts in `README.md`, `docs/FLOW.md`
  and both manifests, and a new row in the README's AI-native table.
- `skills/moat-design-canvas/SKILL.md` gains one handoff line naming the new sibling. That edit
  invalidates its graduation, which its `tests/RESULTS.md` already records as stale.
- `docs/SOURCES.md` records the new skill and the `references/` convention.

## 1.0.0 — 2026-09-14

First public release. The kit was extracted from a venture studio's internal product set,
rewritten for a general audience, and extended for the way AI products are actually built
and evaluated in 2026.

### Added — eight skills

| Skill | What it returns |
|---|---|
| `failure-mode-mining` | A counted failure taxonomy from traces sampled to saturation, open-coded blind, that replaces the taxonomy you guessed and forces the rates downstream to be re-derived. |
| `judge-calibration` | A defensible LLM judge: binary atomic criteria, human labels first, TPR and TNR reported separately, a ≥0.85 gate, a pinned model, and a recalibration trigger. |
| `context-budget` | A per-call context ledger priced in tokens and reconciled against the cost-per-outcome you already committed to. If it does not clear, it names the row to cut. |
| `agent-surface-design` | A three-surface distribution plan (MCP server, shipped skill, AGENTS.md fragment) with adoption scored on tool-call logs, not on a launch post. |
| `adversarial-launch-pass` | A private attack set built from your own corpus and your own thresholds, recorded, as a third gate in `v1-launch-bar`. A model's claim that it would refuse is opinion 0.1; only a transcript is behaviour. |
| `trace-instrumentation-spec` | The field register a run must emit before launch, including the human edit delta the improvement loop cannot be computed without. |
| `agent-interaction-design` | What the user sees before, during and after, specified per autonomy level, with p50/p95 budgets and the correction-capture point. |
| `compliance-gate` | A classification plus an obligations-to-artefacts map, marking each HELD / PARTIAL / GAP. Refuses to draft legal text, and refuses to count an intention as an artefact. |

All eight are **not yet graduated**: written, specified, never scored by a separate judge.
They are marked `"graduated": false` in `tools/scripts/icarus-skills.json`.

### Added — extensions to existing skills

- `eval-first-spec`: a bare-model baseline arm (with / without / Δ over the golden set; mean
  Δ ≤ 0 is a refusal to ship, not a caveat), trajectory graders so a lucky right answer
  fails, and a handoff emitting each case as an acceptance criterion.
- `refine-flywheel`: the self-growing set (every production and red-team failure becomes a
  permanent dated case; report set growth beside pass rate) and release gates — pinned model,
  shadow window, canary share, rollback trigger, named owner.
- `agent-design`: per-tool ergonomics with the disambiguation test, and memory governance per
  store including the tenant-isolation rule.
- `value-based-pricing`: outcome verification and dispute mechanics, and the margin check at
  the measured failure rate rather than the ideal one.
- `compound-system-architecture`: a cost ledger of the levers (caching, routing, batching,
  truncation, retrieval narrowing), each measured on the golden set, against a stated margin band.
- `dataset-builder`: a capped synthetic tier that may only fill named uncovered modes.
- `pilot-six-term-sheet`: the buyer's security and procurement checklist, priced, before signature.
- `workflow-design`: fleet-level evals — spawn correctness, handoff integrity, termination,
  and fleet turn and cost ceilings.

### Changed — the public rewrite

- The studio's word for its users became "you" / "the builder" across 308 files.
- Four real portfolio companies became four fictional ones: **Meridian Grid** (data-centre
  risk), **Foundry Signal** (industrial AI), **Halcyon Safety** (oil and gas safety),
  **Larder Labs** (retail ops). Every fixture now carries an illustrative-fixture line; only
  11 of 47 skills did.
- Cross-references by stage number became the sibling skill's name.
- `fellow-path-router` → **`start-here-router`**.
- `platform-vs-venture` → **`build-vs-buy-boundary`**, with its lanes rewritten as
  Inherit / Build / Buy against any platform, framework or substrate.
- Frontmatter normalised: `type` and `supersedes` moved under `metadata:`. Unknown top-level
  keys are rejected at plugin packaging time, so all 46 skills were silently at risk.
- Three descriptions trimmed under the Agent Skills 1024-character limit.
- `tools/scripts/rewrite-public.py` performs the transformation, is kept in the repo, and is
  re-checked for idempotency in CI.

### Removed

- `fellow-level-ladder`. It graded a person's mastery for a mentor to read at review time.
  Outside a fellowship that has no home, its artefact chain duplicates `start-here-router`
  in the opposite direction, and its five golden cases were graded verdicts on named real
  companies.

### Infrastructure

- `hooks/hooks.json`: a `SessionStart` hook putting the golden rules in front of Claude in
  every session, not only one whose working directory is this repo — the previous
  arrangement meant the rules never loaded for the case the kit exists for. Plus the
  skill-usage `PreToolUse` hook, which previously shipped as copy-paste instructions with
  two conflicting install paths.
- `AGENTS.md` for tools outside Claude Code. `docs/FLOW.md` and `docs/SOURCES.md` moved out
  of the scanned skills directory. The eleven-stage table now lives in one place.
- `.github/workflows/validate.yml`: the validator, a strict YAML parse of every frontmatter,
  the rewrite idempotency check, and manifest parsing on every push.
- `tools/scripts/validate-skills.mjs` now gates unknown frontmatter keys, description length,
  rubric identity and drift, manifest agreement, and a banned-terms list so the internal
  vocabulary and the real company names cannot return.
- Manifests carry `$schema`, `license`, `repository`, `homepage`, `author`, `category` and
  `tags`.

### Known state

The 44 carried-over skills graduated before the rewrite. Trigger phrasings were preserved,
but a judge's verdict does not carry over to text it did not read, so every affected
`tests/RESULTS.md` now says its graduation is stale. Re-running the harness against the
rewritten corpus is the next task, and nothing here should be described as certified until
that happens.

## 0.1.0 — 2026-09-14

Initial assembly: 45 skills copied verbatim, the golden rules consolidated from the source
material, one agent, three commands, a validator and a lessons log. Repository renamed from
`daedalus-kit` to `icarus`. Fixed eleven skills whose `description` was a plain YAML scalar
containing `": "`, which made the whole frontmatter block unparseable and the skill
silently unloadable.
