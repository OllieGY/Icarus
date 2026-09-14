---
name: context-budget
description: >-
  Returns a per-call context ledger that must BALANCE against money — rows for the system prompt
  and its altitude, the curated tool set, just-in-time vs preloaded retrieval, the compaction
  trigger and survival list, the note-file schema, and sub-agent fork boundaries — each row
  token-costed, multiplied by measured calls per outcome, and reconciled against the
  cost-per-outcome budget committed in `eval-first-spec`. If the ledger does not clear, the skill
  refuses to pass and names the row to cut. Fires on "the agent
  forgets halfway through", "it degrades on long tasks", "we have 40 tools and it picks the wrong
  one", "design the prompt architecture", "context window keeps filling". NOT for which agent owns
  which decision (use `agent-design`), NOT for whether you need a fleet at all (use
  `workflow-design`), NOT for the pipeline and model-swap points (use
  `compound-system-architecture`), NOT for setting the cost-per-outcome budget itself (use
  `eval-first-spec`).
metadata:
  type: generator
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Context Budget

## What it does

Takes a running or planned agent and returns one artefact: a **context ledger** that itemises
every token entering a single call, by source, and balances the total against money. Rows are
fixed: system prompt (with its stated altitude and the failure pole it drifts toward), the
curated tool set, retrieval split into just-in-time vs preloaded, the compaction trigger and
the exact survival list, the note-file schema that carries state across compaction, and the
sub-agent fork boundaries. Every row carries a token number and how that number was obtained.
The total is multiplied by the **measured** calls per outcome and reconciled against the
cost-per-outcome ceiling already committed in `eval-first-spec`.

It refuses three things. It refuses to emit a total when any row is costed by guess. It refuses
to invent the ceiling — if no cost-per-outcome number has been committed, it routes to
`eval-first-spec` and stops. And when the ledger does not clear the ceiling it refuses to pass:
it names the single row to cut and what cutting it buys, rather than shaving the ceiling to
meet the ledger.

## The reframe

The generic version of this task is "keep your prompts focused" — advice with no unit, no total,
and nothing to fail. This skill treats context as a **finite attention budget, not a container to
fill**. Two consequences follow, and both are load-bearing.

First, model quality degrades across a long run *inside* the window — context rot. So a bigger
window is not the fix; it is more room to degrade in. The question is never "does it fit" but
"does every token in this call earn its place against a number the team already signed".

Second, that number is not chosen here. It was committed in `eval-first-spec` as cost-per-outcome
to the cent. This skill's whole job is to make the context architecture *clear* that number, which
turns prompt engineering from taste into arithmetic that can fail.

The hard test on tools follows from the same stance: **if a human engineer holding the tool list
cannot say which tool applies to a given request, neither can the model.** Delete one, or merge
them. Applied strictly, that test deletes tools far more often than it renames them — a tool
that has never been called across your logged runs is not badly named, it is dead weight in
every call you have ever paid for.

## When to use / When NOT

Use when there is a real agent — running or specced — with a committed cost-per-outcome ceiling,
and you need to decide what goes into each call. Trigger phrases: "the agent forgets halfway
through", "it degrades on long tasks", "we have 40 tools and it picks the wrong one", "design the
prompt architecture", "context window keeps filling".

| If you want… | Use instead |
|---|---|
| To decide which agent owns which decision, its role, tools and memory layer | `agent-design`. It picks *what* the agent is; this costs what enters its window. It routes here once the tool list exists. |
| To decide whether you need a fleet at all, and how agents hand off | `workflow-design`. Fork boundaries here are context boundaries inside one agent's run, not fleet orchestration. |
| The end-to-end pipeline, component split, and model-swap points | `compound-system-architecture`. It designs the system; this budgets one call inside it. |
| To set the cost-per-outcome budget in the first place | `eval-first-spec`. This skill consumes that number; it never sets it. Without it, stop and route there. |

Do not run this on an idea. With no agent, no tool list, and no measured runs, there is nothing
to count. Ask for the three inputs in Method step 0 and stop.

## Method

Fill `template.md`. Nine steps, in order. Steps 1–7 produce rows; step 8 is the only verdict.

### Step 0 — Carry in the three inputs you may not invent

| Input | Where it comes from | Minimum rung |
|---|---|---|
| Cost-per-outcome ceiling, to the cent | `eval-first-spec`, already committed | 0.5 — it is a written commitment, not a recollection |
| Price per 1M input and output tokens | Your invoice (money 1.0) or the provider's published rate card (artefact 0.5) | 0.5 |
| Calls per outcome, `A` | Counted from logged real runs | 0.7 |

Any of the three missing: name which one, say where to get it, stop. Do not emit a total.

### Step 1 — Inventory what enters a call today, by source, measured

One row per source. Count with a tokenizer over the actual artefact, or read the `usage` field
from logged runs. An engineer's estimate is 0.1 and cannot hold a row. **The model's own answer
to "how many tokens are you using?" is a self-assessment: 0.1.** Mark every row `[Fact]` (counted)
or `[Assumption]` (modelled, with the model stated).

### Step 2 — Set system-prompt altitude and name the pole it drifts toward

| Altitude | What the prompt contains | Failure mode |
|---|---|---|
| Too low — hardcoded brittle logic | Named cases, one if/then per past incident, literal strings | Breaks on case 51; every new failure adds another line and another 60 tokens |
| Right altitude | The one decision it owns, the heuristics *with their reasons*, the boundaries, the output contract | — |
| Too high — vague "be helpful" | "Use good judgment", role-play framing, adjectives | Nothing to debug; no failure traces to a line |

State the altitude, then name which pole this prompt drifts toward and cite the evidence for the
drift (e.g. "+430 tokens added across six incident patches, from the file's own history"). Both
poles are failures. A prompt that sits at neither still has to earn its tokens.

### Step 3 — Apply the tool disambiguation test and cut

For every pair of tools, write the one request that a human engineer holding only the list could
not route. If that request exists, the pair fails: **merge them, or delete one.** Renaming passes
only when the two genuinely answer different questions; two tools answering the same question
with different data shapes always merge. Separately, delete every tool with zero invocations
across your logged runs — that is behaviour (0.7), and it outranks anyone's view that the tool
might be needed one day. Record before/after tool count and the tokens released per call.

### Step 4 — Split retrieval into just-in-time vs preloaded, defaulting to JIT

Default is JIT. Preloading is an exception each item must argue, and the reason must name what
**fails** without it — not that it "helps" or "gives useful background". Record, per item: tokens,
JIT or preload, the reason, and (for JIT) the measured hit rate, since an item retrieved on 4 of
11 calls costs 4/11 of its size per call, not its full size.

### Step 5 — Set the compaction trigger and the exact survival list

The trigger is a number, not a feeling: a carried-token threshold, or a call index, measured
against where quality actually started to slip in your logged runs. Then write what survives,
literally and exhaustively — typically the system prompt, the tool schemas, the note file, the
**original request verbatim**, the in-flight tool result, and pinned artefact paths. Everything
else collapses into one summary with a stated token cap. Compaction is not free: it costs one
call that reads the thing it is about to discard. Put that call in the ledger.

### Step 6 — Define the note-file schema

The file that carries state across compaction, with fixed sections, a writer, a read trigger, and
a token cap per section. Without a cap the note file becomes a second context leak. Sections that
earn their place: goal (immutable), decisions taken (append-only, with evidence), open questions,
**rejected paths** (so the agent does not retry them after compaction), artefacts written, next
action (overwritten each call).

### Step 7 — Draw sub-agent fork boundaries

Fork a sub-task only when all three hold: it must **read far more than it returns**; its return
fits a stated cap (a verdict plus citations, not raw material); and it does not need the parent's
history to do its job. The parent's ledger row for a fork is the size of the returned verdict.
The sub-agent's own consumption is a separate row — forking hides tokens from the window, never
from the invoice.

### Step 8 — Total, multiply, reconcile, cut

```
tokens_per_outcome = (fixed_rows × A) + Σ(growing rows across the run) + Σ(JIT hits) + compaction call
cost_context       = (input_tokens × price_in) + (output_tokens × price_out)
```

Then the gate: `cost_context` must fit inside the model-call share of the cost-per-outcome ceiling
carried from `eval-first-spec` — the ceiling minus the human-review and remediation lines already
committed there. Show the subtraction.

**Kill line.** If the ledger does not clear, the skill does not pass it. Name the single largest
row by tokens-that-did-not-earn-their-place, the cut, and what the cut buys in cents. Re-total.
Repeat until it clears or until the honest finding is "this agent is not economic at this
autonomy level" — which is a finding for `eval-first-spec`, not a licence to raise the ceiling.
Raising the committed ceiling to make a ledger balance is an auto-fail.

## Evidence standard

| Signal | Score |
|---|---|
| Money moved — the invoice line for these calls | 1.0 |
| Behaviour observed — `usage` fields from logged real runs; tool-invocation counts; where quality slipped | 0.7 |
| Artefact shown — tokenizer count over the actual prompt file or tool-schema JSON; a published rate card | 0.5 |
| Verbal commitment — "we'll trim the prompt next sprint" | 0.3 |
| Opinion — an engineer's estimate, or the model's own account of its context use | 0.1 |

Rungs never stack: forty engineers estimating the same prompt at 2k tokens is still 0.1, and
never sums or averages to more. **Every ledger row must be costed at ≥ 0.5, and `A` at ≥ 0.7.**
A row costed at 0.1 is not a row, it is a guess, and a ledger that balances on guesses balances
on nothing — report it as unbalanced and name the measurement to run. Tag every claim `[Fact]`,
`[Assumption]`, or `[Hypothesis]`.

## What good looks like

Foundry Signal's line-stoppage copilot, at the point the ledger first totalled (illustrative
fixture, not client data):

- Ceiling carried in: **$1.90** per resolved alarm, of which $1.05 human review and $0.30
  remediation are already committed → **$0.55** left for model calls. `A = 11` calls per resolved
  alarm, counted over 200 logged runs [Fact, 0.7].
- Ledger v0: system prompt 1,800 + 41 tool schemas 9,020 + note file 900 = 11,720 fixed per call;
  history growing 2,400 per call; JIT retrieval 1,400 hitting on 4 of 11 calls. Total 266,520
  input + 4,180 output → **$0.86. Does not clear, over by 56%.**
- Cut 1 — disambiguation test: `get_machine_status` / `read_sensor_snapshot` / `fetch_line_state`
  all answer "why did line 3 stop?"; twelve tools had zero invocations in 200 runs [Fact, 0.7].
  41 → 9 tools, 7,040 tokens released per call → **$0.63. Still does not clear.**
- Cut 2 — compaction at 14,400 carried tokens with a 1,100-token survival list, its own call
  costed at $0.07 → **$0.50 against $0.55. Clears, headroom $0.05 (9%).**

The output that would be wrong here: "trimmed the prompt, should be much cheaper now." No row,
no total, nothing that can fail.

## Gotchas

**A bigger context window read as the fix.** Doubling the window does not slow context rot; it
extends the run over which quality degrades. Nothing in the ledger changes except the cost.

**Token counts from the model's own estimate.** The model will give you a confident number. It is
a self-assessment — 0.1, and it cannot hold a row. Read the `usage` field.

**Renaming ambiguous tools and calling it a cut.** A rename releases zero tokens. If the
before/after token count did not move, step 3 did not happen.

**Cost-per-call smuggled in for cost-per-outcome.** "$0.04 a call" is not a budget. Multiply by
the `A` you measured, not the `A` you hope for after the fix.

**Preloading the corpus that made the demo look smart.** "Useful background" is not a reason.
Name what fails without it, or it is JIT.

**Compaction that discards the task.** If the survival list does not include the original request
verbatim, the agent will finish a different, cheaper task with great confidence.

**The note file as a second leak.** An append-only file with no per-section cap reaches the size
of the history it replaced, and you paid twice.

**A fork treated as free.** A sub-agent that reads 80k tokens to return a 300-token verdict cost
80k tokens. It is quieter in the parent's window and identical on the invoice.

## Related skills

| Skill | Handoff |
|---|---|
| `eval-first-spec` | Sets the cost-per-outcome ceiling and `A`'s target. Run it first; this skill consumes its number and hands back "clears / does not clear at this autonomy level". |
| `agent-design` | Picks the agent's role, tools and memory layer. Hands this skill the tool list to cost and cut; the note-file schema here implements its lessons file. |
| `workflow-design` | Owns the fleet and hand-offs. Step 7's fork boundaries stop at one agent's window; anything about which agent spawns when goes there. |
| `compound-system-architecture` | Owns the pipeline and model-swap points. A model swap changes the price row here; the ledger is re-totalled, not redesigned. |
| `guardrail-design` | Owns what the agent is stopped from doing. Tool blast radius lives there; tool *count* lives here. |

Supersedes: none.
