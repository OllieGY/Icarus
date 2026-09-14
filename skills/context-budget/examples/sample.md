> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Foundry Signal's line-stoppage copilot

Foundry Signal runs a factory copilot that triages unplanned line stoppages: an alarm fires, the
agent pulls state and history, proposes a cause, and an engineer accepts or corrects it. The team
came in with "it forgets what it was doing halfway through a long stoppage, and it keeps calling
the wrong tool."

## What they brought

- 41 tools on the agent, added over nine months. [Fact]
- Tool-invocation counts from 200 logged runs. [Fact, behaviour 0.7]
- `usage` fields from those 200 runs. [Fact, behaviour 0.7]
- A committed spec from `eval-first-spec`: **$1.90 per resolved alarm**, of which $1.05 is the
  7 minutes of engineer review at L1 autonomy and $0.30 is the remediation reserve. [Fact, 0.5]
- The March invoice: **$3.00 / 1M input, $15.00 / 1M output**. [Fact, money 1.0]

**Left for model calls: $1.90 − $1.05 − $0.30 = $0.55 per resolved alarm.**
**`A` = 11 calls per resolved alarm**, counted across the 200 runs. [Fact, 0.7]

The one number they offered that did not survive: "the system prompt is about 600 tokens, we asked
the model." That is a self-assessment — 0.1, and it cannot hold a row. Counted with a tokenizer on
the actual file, it is **1,800**. Three times their estimate, on every call, forever.

## Ledger v0 — as found

| # | Row | Tokens | How counted | Rung |
|---|---|---|---|---|
| 1 | System prompt | 1,800 | tokenizer, actual file | 0.5 [Fact] |
| 2 | Tool schemas (41) | 9,020 | tokenizer, schema JSON | 0.5 [Fact] |
| 3 | Note file | 900 | tokenizer | 0.5 [Fact] |
| 4 | JIT manual/incident retrieval | 1,400 × 4 of 11 calls | usage logs | 0.7 [Fact] |
| 5 | Carried history + tool results | +2,400 per call | usage logs | 0.7 [Fact] |

```
fixed 11,720 × 11 calls = 128,920
history 2,400 × (0+1+…+10) = 132,000
JIT 1,400 × 4            =   5,600
input                    = 266,520   → $0.800
output 380 × 11 = 4,180             → $0.063
cost_context             = $0.86   vs $0.55   DOES NOT CLEAR — over by 56%
```

## Step 2 — Altitude and drift pole

Stated altitude: *decide the most likely cause of one stoppage and cite the evidence; escalate
rather than guess when confidence is low.*

Drift pole: **hardcoded brittle logic.** The prompt carries eleven named incident rules
("if machine 7 and error E-204, check the coolant line first") added one per postmortem —
+430 tokens across six patches, visible in the file's own history. [Fact, artefact 0.5]

The correction is not to delete the rules but to move them: the rules are *retrievable* knowledge,
not *always-on* instruction. Nine of the eleven become JIT rows keyed on machine ID. The prompt
drops to 1,340 tokens and stops growing one incident at a time.

## Step 3 — Tool disambiguation test

| The request | Tools that could answer it | Verdict |
|---|---|---|
| "Why did line 3 stop at 14:02?" | `get_machine_status`, `read_sensor_snapshot`, `fetch_line_state`, +3 more | Six state-readers, one question. **Merge → `read_line_state(line, window)`** |
| "Has this fault happened before?" | `search_manuals`, `search_maintenance_notes`, `search_incident_history`, +4 | Seven searches over seven corpora. **Merge → `search_corpus(corpus, query)`** |
| "The engineer says the cause was the seal, not the coolant." | `log_correction`, `save_operator_feedback`, +3 | Same write, five shapes. **Merge → one** |
| "Tell the shift lead." | 6 notification tools | **Merge → `notify(channel, payload)`** |

And the cut nobody argued with: **12 tools had zero invocations across 200 runs.** [Fact, 0.7]
Not badly named — dead weight, paid for on every call since they were added.

**41 → 9 tools. 9,020 → 1,980 tokens per call.** Note what did *not* happen: no tool was renamed.
Renaming releases zero tokens, and the pair test was never about the names.

```
fixed 4,680 × 11 = 51,480  + history 132,000 + JIT 5,600 = 189,080 → $0.567
+ output $0.063 = $0.63   vs $0.55   STILL DOES NOT CLEAR — over by 15%
```

## Step 5 — Compaction, because history is now 70% of the bill

With the tools cut, the largest row by far is carried history: 132,000 of 189,080 tokens. Quality
also slipped there — in the 200 runs, corrections rose sharply once carried context passed roughly
14k tokens. [Fact, 0.7] That is the trigger, and it is the same number in both senses: it is where
the money goes and where the model gets worse.

**Trigger:** carried tokens ≥ 14,400 (reached after call 6).
**Survives:** system prompt · the 9 tool schemas · note file · **the alarm text verbatim** · the
in-flight tool result · pinned trace IDs. Everything else → one summary, cap 1,100 tokens.

The alarm text verbatim is not padding. In two of the 200 runs the agent post-compaction
diagnosed the *previous* stoppage — a cheaper, confident, wrong answer. [Fact, 0.7]

**The compaction call bills:** reads 19,080, writes 1,100 → **$0.07.** It is a ledger row.

```
history after compaction: calls 1–6 = 36,000 ; calls 7–11 = 29,500  → 65,500  (saves 66,500)
input 51,480 + 65,500 + 5,600 = 122,580 → $0.368
+ output $0.063 + compaction $0.074
cost_context = $0.50   vs $0.55   CLEARS — headroom $0.05 (9%)
```

## Step 6 — The note file that makes the 1,100-token summary safe

`run-notes.md`, written by the agent at the end of every call, re-read at the top of every call,
capped at 900 tokens: goal (immutable, 60) · decisions taken with evidence (append-only, 300) ·
open questions (120) · **rejected paths (200)** · artefacts written (120) · next action (100).

Rejected paths earns its cap: without it, the post-compaction agent re-ran the coolant check it
had already ruled out in three of the 200 runs. [Fact, 0.7]

## Step 7 — One fork

"Search seven corpora for prior instances of this fault" reads ~40k tokens and returns a verdict
of under 300. It forks. But the fork costs **$0.12** on the invoice even though the parent window
never sees the 40k — so it sits in the ledger as its own row, and it is the next thing to attack
if the model price moves.

## Verdict

**CLEARS at $0.50 against $0.55, headroom 9%.** Thin. The ledger is re-run when tool count, model
price, or measured `A` changes — a 20% price rise breaks it, and the fork is the row that goes.

## What the team asked for, and did not get

They asked to move to a larger context window. That changes no row except the price: context rot
is degradation *inside* the window, and their own correction rate rising past 14k carried tokens
is the measurement of it. The window was never the constraint. The 41 tools and the uncompacted
history were, and both were visible in logs they already had.
