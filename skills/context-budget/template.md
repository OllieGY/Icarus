# Context Ledger — one call, costed to the cent

Fill every field. The ledger is not a plan; it is an account that must balance against a number
someone already signed. Do not emit a total until every row is costed at ≥ 0.5 on the ladder.

---

## 0. The three inputs you may not invent

| Input | Value | Source | Rung + tag |
|---|---|---|---|
| Cost-per-outcome ceiling | _[$X.XX per one completed outcome]_ | `eval-first-spec`, committed _[date]_ | _[0.5 [Fact]]_ |
| — of which human review | _[$X.XX]_ | same | _[ ]_ |
| — of which remediation reserve | _[$X.XX]_ | same | _[ ]_ |
| **= left for model calls** | _[$X.XX]_ | subtraction, shown | — |
| Price / 1M input tokens | _[$X.XX]_ | _[invoice line 1.0 / published rate card 0.5 — never from memory]_ | _[ ]_ |
| Price / 1M output tokens | _[$X.XX]_ | _[same]_ | _[ ]_ |
| Calls per outcome `A` | _[n]_ | _[counted over N logged runs]_ | _[0.7 [Fact]]_ |

Any row above missing or below its rung: **stop.** Name which one, say where to get it, emit no
total. If there is no committed ceiling at all, this is not a context problem yet — route to
`eval-first-spec`.

## 1. Inventory — what enters one call today

| # | Source | Tokens | How counted | Rung + tag | Enters every call? |
|---|---|---|---|---|---|
| 1 | System prompt | _[ ]_ | _[tokenizer over the actual file]_ | _[0.5 [Fact]]_ | yes |
| 2 | Tool schemas (_[n]_ tools) | _[ ]_ | _[tokenizer over the schema JSON]_ | _[ ]_ | yes |
| 3 | Preloaded context | _[ ]_ | _[ ]_ | _[ ]_ | yes |
| 4 | JIT retrieval | _[ ]_ × _[hit rate]_ | _[usage logs]_ | _[0.7]_ | no |
| 5 | Carried conversation + tool results | _[ ]_ growing _[ ]_/call | _[usage logs]_ | _[0.7]_ | grows |
| 6 | Note file re-read | _[ ]_ | _[ ]_ | _[ ]_ | yes |
| 7 | Sub-agent verdicts returned | _[ ]_ | _[ ]_ | _[ ]_ | _[ ]_ |

An engineer's estimate, or the model's own answer to "how much context are you using", is 0.1 and
cannot hold a row. Replace it with a count or mark the row **uncosted**.

## 2. System prompt — altitude and drift pole

**Stated altitude:** _[the one decision it owns, at what autonomy level]_

**Pole it drifts toward:** _[hardcoded brittle logic | vague "be helpful"]_

**Evidence of drift:** _[e.g. "+N tokens across M incident patches, from the file history" — rung + tag]_

**The correction:** _[what moves it back to altitude, and the tokens that releases]_

## 3. Tool set — disambiguation test

| Tool pair | The request neither list-holder could route | Verdict | Tokens released |
|---|---|---|---|
| _[a]_ / _[b]_ | _[write the actual request]_ | _[MERGE / DELETE one / keep — different questions]_ | _[ ]_ |

| Tool | Invocations across _[N]_ logged runs | Verdict |
|---|---|---|
| _[ ]_ | _[0]_ | DELETE — zero use is behaviour (0.7), it outranks anyone's view |

**Before:** _[n]_ tools, _[ ]_ tokens/call → **After:** _[n]_ tools, _[ ]_ tokens/call.
A rename that releases zero tokens is not a cut.

## 4. Retrieval — JIT vs preloaded

Default is JIT. Preloading is an exception each item argues.

| Item | Tokens | JIT / preload | Measured hit rate | Reason — name what FAILS without it |
|---|---|---|---|---|
| _[ ]_ | _[ ]_ | _[JIT]_ | _[4 of 11 calls]_ | — |
| _[ ]_ | _[ ]_ | _[preload]_ | n/a | _["without it the first call cannot X" — not "useful background"]_ |

## 5. Compaction — trigger and survival list

**Trigger:** _[carried-token threshold or call index]_, set from _[where quality slipped in logged runs]_

**Survives compaction, exhaustively:**
1. System prompt _[tokens]_
2. Tool schemas _[tokens]_
3. Note file, latest _[tokens]_
4. **Original request, verbatim** _[tokens]_
5. In-flight tool result _[tokens]_
6. Pinned artefact paths / IDs _[tokens]_

**Everything else** → one summary, hard cap _[tokens]_.

**Cost of the compaction call itself:** reads _[tokens]_, writes _[tokens]_ = _[$X.XX]_. It goes in
the ledger; compaction is not free.

## 6. Note file — schema

`_[path]_` · writer: _[who, when]_ · read: _[trigger]_ · total cap: _[tokens]_

| Section | Cap | Write rule |
|---|---|---|
| Goal | _[ ]_ | immutable, written once |
| Decisions taken | _[ ]_ | append-only, each with its evidence |
| Open questions | _[ ]_ | _[ ]_ |
| Rejected paths | _[ ]_ | append-only — stops post-compaction retries |
| Artefacts written | _[ ]_ | path + one line |
| Next action | _[ ]_ | overwritten each call |

Over cap: _[which entries collapse, into what]_. An uncapped note file is a second context leak.

## 7. Sub-agent fork boundaries

| Sub-task | Reads | Returns (cap) | Needs parent history? | Fork? | Cost of the fork itself |
|---|---|---|---|---|---|
| _[ ]_ | _[ ]_ | _[ ]_ | _[no]_ | _[YES]_ | _[$X.XX — it bills even though the parent never sees it]_ |

Fork only when all three hold: reads ≫ returns, return fits the cap, no parent history needed.

## 8. The total

```
fixed rows/call        = _[ ]_
× A (_[n]_ calls)      = _[ ]_
+ growing rows (sum across the run, after compaction) = _[ ]_
+ JIT hits             = _[ ]_
+ compaction call      = _[ ]_
= input tokens/outcome = _[ ]_
  output tokens/outcome= _[ ]_

cost_context = (_[in]_ × _[$/1M in]_) + (_[out]_ × _[$/1M out]_) = $_[ ]_
ceiling left for model calls (§0)                                = $_[ ]_
```

**Verdict:** _[CLEARS — headroom $X.XX (N%) | DOES NOT CLEAR — over by $X.XX (N%)]_

## 9. If it does not clear — the row to cut

| Row | Tokens | Share of total | Earns its place? | Cut | What it buys |
|---|---|---|---|---|---|
| _[ ]_ | _[ ]_ | _[ ]_% | _[no — reason]_ | _[the specific change]_ | _[$X.XX]_ |

Re-total after the cut. Repeat until it clears, or until the honest finding is **"not economic at
this autonomy level"** — which goes back to `eval-first-spec`. Raising the committed ceiling to
make the ledger balance is an auto-fail.

## 10. Next step

- **Clears:** ship this ledger with the build and re-run it whenever the tool count, the model
  price, or the measured `A` changes. A ledger is only true for the numbers it was totalled on.
- **Does not clear:** do not ship the architecture. Make the §9 cut, re-total, re-measure `A` on
  the next 20 runs.
- **Uncosted rows:** you do not have a ledger. Run the count named in §1 first.
