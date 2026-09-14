---
name: agent-interaction-design
description: >-
  Returns an interaction spec for ONE autonomy level — the before / during /
  approval-object / confidence / after grid, a p50+p95 latency budget with the
  affordance at each band, the correction-capture point, and the recovery path for
  the three stall modes. Fires on "how much should the agent do on its own",
  "design the approval flow", "what does the user see while it works", "human in
  the loop design", "should we show confidence". Kills any irreversible action
  specified without an in-surface diff and an undo, and refuses to design a level
  the cost of one failure does not support. Do NOT fire to derive the threshold
  itself or place failure modes on the cost × volume matrix (use
  `guardrail-design` — it decides WHERE the gate goes, this designs what the human
  sees at it), to draw the screens (use `first-mocks`), to run the moderated
  session (use `usability-test-protocol`), or to list the fields a trace writes
  (use `trace-instrumentation-spec`).
metadata:
  type: generator
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Agent Interaction Design

## What it does

Takes one agent, one chosen autonomy level and the cost of one failure, and returns the
filled `template.md`: a six-row interaction spec for that level — the plan shown **before**,
what is disclosed and interruptible **during**, the exact **approval object** a human signs
for anything irreversible, whether and how **confidence** is shown, the undo scope, recovery
path and correction capture **after**, and a **latency budget** in p50/p95 per step with the
affordance that buys patience at each band. It refuses to spec a level the evidence does not
support. It does not draw the screens and does not derive the thresholds; both have owners.

## The reframe

Autonomy is not a slider you set by taste. Each level's interface is **forced** by the cost of
one failure — already derived in `eval-first-spec` — and by reversibility and detection lag.
An irreversible action at L2 with no diff and no undo is a design error, not a preference,
and this skill fails it rather than styling it.

Two consequences generic UX advice misses. First, **the approval surface is the
data-collection surface**: the corrections a human makes at the gate are the compounding
asset `refine-flywheel` runs on, so a design that makes approving one click and correcting a
trip to another system kills the flywheel while the accept rate looks excellent. Cheap
approval plus expensive correction does not measure agreement, it manufactures it. Second,
**the latency budget belongs in the spec, not the backlog**: a pattern that works at 2
seconds is a different pattern at 30, the same flow becoming a streamed run and then a
backgroundable job. p50 is what you demo; p95 is where adoption is decided.

## When to use / When NOT

Use when the level is chosen (or being argued about) and you need to specify what the human
actually sees and signs. Trigger phrases: "how much should the agent do on its own", "design
the approval flow", "what does the user see while it works", "human in the loop design",
"should we show confidence".

| If you want… | Use instead |
|---|---|
| The confidence threshold derived, failure modes placed on cost-of-error × volume, the three-layer rules/threshold/sign-off stack sized | `guardrail-design`. It decides **where** the gate goes and at what number. This skill takes that number as an input and designs **what the human sees** at the gate. Nearest neighbour — do not redo its derivation here. |
| The screens drawn — layout, components, a clickable prototype | `first-mocks`. This spec is what those mocks must satisfy; it names the objects, not the pixels. |
| A moderated session run with real users to find where they get stuck | `usability-test-protocol`. Step 6 hands off to it; the stranger test here is a desk check, not a session. |
| The exact fields, ids and schema the correction event writes | `trace-instrumentation-spec`. This skill names the capture **moment** and what must be recoverable from it; that one names the fields. |
| The autonomy level itself picked, the failure taxonomy, the acceptable failure rate, cost per outcome | `eval-first-spec`. Level and cost of one failure are **inputs** here. No level, no spec. |

Hard precondition: no cost of one failure, no interaction spec — ask for it and stop. Do not
default to L1 to be safe; L1 has a cost too, paid in the human's time, and choosing it
without the number is the same error as choosing L4 without it.

## Method

Fill `template.md`. Six steps.

### Step 1 — Pull the inputs, refuse to proceed without them

| Input | From | Must be |
|---|---|---|
| Chosen autonomy level L0–L4 | `eval-first-spec` | stated, not inferred |
| Cost of one failure, per mode | `eval-first-spec` | money (1.0) or observed behaviour (0.7). Opinion (0.1) caps you at L1 |
| Reversibility + detection lag per action | the builder's workflow | p95 lag, measured or tagged `[Assumption]` with a measure-by date |
| Confidence threshold θ and the sign-off triggers | `guardrail-design` | derived against observed outcomes, not the model's self-report |

### Step 2 — Check the level is admissible, then fill its column only

A level is not a preference; it must clear an admissibility test.

| Level | Admissible only when | Forced by admissibility |
|---|---|---|
| L0 suggest | always | plan is the output; no write tool bound |
| L1 draft-for-approval | anything irreversible, or cost of one failure > cost of one review | an approval object per write, with an in-surface diff |
| L2 act-with-undo | undo restores the pre-action state **and** undo window ≥ p95 detection lag | persistent per-action undo, not per-session |
| L3 act-and-report | failure is detectable and compensable after the fact, and cost of one failure ≤ value of one outcome | report reaches a named human inside the detection window; per-action reversal path |
| L4 autonomous | measured failure rate ≤ the derived acceptable rate over N real cycles, cost of one failure ≈ 0 | sampled audit + rate alarm; any reversal is an incident |

Fill the grid for the admissible level only. If the requested level fails its test, name the
gap and spec the level below it — or **split the action by reversibility**: the reversible
half runs at the higher level, the irreversible half keeps its gate. That split is usually
the real answer to "approving 120 rows is tedious".

**Kill line.** An irreversible action specified at L2+ with no in-surface diff and no undo,
or a grid emitted for a level whose cost of one failure is unevidenced, fails the skill.

### Step 3 — The approval object rule

For every irreversible action, name what is rendered: the **before value, the after value,
the field that changed, and the source that justified it** — in the surface the human is
already in. The rule: *the human must be able to see the change without leaving the surface.*
A card that summarises and links to the record is a rubber stamp with a hyperlink.

Three affordances, always: approve, **edit**, reject-with-reason. Edit must be reachable in
the same number of actions as approve, ±1. A bare reject writes a binary where the flywheel
needed a gradient, so offer reason codes.

### Step 4 — Confidence: banded, actionable, or absent

Never a bare percentage: a number the user cannot act on is decoration, and the model's own
confidence is a self-assessment — **opinion, 0.1** — so it may never be the sole basis of an
auto-act path. Three admissible forms:

| Form | What it looks like | When |
|---|---|---|
| Action band | "ready" / "check this field" / "held for you" — mapped to θ from `guardrail-design` | the default |
| The reason, not the number | the source row, the matched record, the rule that fired | when the user can judge the evidence faster than the score |
| Abstention | the agent declines the item and asks one question | below θ |

At θ the behaviour changes, it does not shade: below θ an item falls one level (an L2 item
becomes an L1 item); it never proceeds with a warning label.

### Step 5 — Latency budget and the affordance at each band

Set p50 and p95 **per step**, then read the affordance off the band p95 lands in.

| p95 band | Required affordance | Interruptible |
|---|---|---|
| < 1s | none — render the result | n/a |
| 1–4s | in-place skeleton or optimistic state; no modal | no |
| 4–15s | streamed partial output, or the current step named | yes, at step boundaries |
| 15–60s | step list mapped 1:1 to real tool calls, plus remaining count; must be backgroundable | yes |
| > 60s | not an interactive pattern — it is a job with a notification | yes, and cancellable |

Timeout = 3 × p95, floor 10s. At timeout the recovery path fires; a spinner past timeout is a
defect. A step list that does not map 1:1 to real tool calls breaks interrupt.

### Step 6 — Capture, recovery, stranger test

**Capture point.** Name the one event that writes the correction — normally
edit-before-commit on the approval object, plus the undo at L2. These must be recoverable
from it: proposed artefact, committed artefact, the delta, the reason code, the level and θ
in force. The field list is `trace-instrumentation-spec`'s job; write no schema here.

**Correction-cost test.** Correcting must cost within 2× of approving, counted in actions.
Then watch corrections per 100 approvals: below the disagreement rate your golden set
measured, the surface is suppressing corrections, not the agent improving.

**Three stall modes**, each with an owner and a max time to recovery:

| Stall | Recovery |
|---|---|
| Wrong plan | interrupt returns to the plan with work-so-far preserved and editable. Never discard partial work |
| Tool failure | name the tool, the step, and the state it left behind; offer the manual path. Never "something went wrong" |
| Below θ | abstain, ask ONE question, keep the rest of the batch moving |

**Stranger test.** A zero-context reader, given only the approval object, must answer: what
is about to change, what if it is wrong, how do I stop it. Three for three or it is not
done — and it is a desk check; the real session is `usability-test-protocol`.

## Evidence standard

| Signal | Weight |
|---|---|
| Money moved | 1.0 |
| Behaviour observed | 0.7 |
| Artefact shown | 0.5 |
| Verbal commitment | 0.3 |
| Opinion | 0.1 |

Rungs never stack: three customers saying they would let it run unattended is 0.3, not 0.9. A
claim's weight is its best rung, never the sum, never the average.

**L3 and L4 cannot be bought with talk.** "They said they'd be happy for it to run on its
own" is a verbal commitment (0.3) and caps the spec at L1; what buys L3/L4 is observed
unattended cycles with the measured failure rate (0.7) or a paid autonomous tier (1.0). The
model's reported confidence is opinion (0.1) and buys nothing. Latency must be measured (0.7)
or tagged `[Assumption]` with a date to measure it by — "it should feel fast" is not a
budget. Tag every empirical claim `[Fact]`, `[Assumption]`, `[Hypothesis]`.

**Kill line, restated.** Unevidenced cost of one failure, or an irreversible action at L2+
without diff and undo: fail it, however complete the rest looks.

## What good looks like

Larder Labs, weekly replenishment exceptions. Level L1 from `eval-first-spec`; cost of one
failure £38 per over-ordered chilled case, measured on 40 write-offs `[Fact]`, money 1.0;
θ = 0.82 from `guardrail-design`; p50 1.9s / p95 11s per exception over 400 runs `[Fact]`.

The team asked for L2 with undo, because approving 120 rows is tedious. L2 fails
admissibility on one number: the order file leaves by EDI at the Wednesday 16:00 cutoff and
the error surfaces at delivery — detection lag 7 days, and after the send there is no undo at
all. So the spec splits the action: staged edits run at L2 with undo until cutoff, and the
send keeps one L1 approval object over the whole file — a per-row diff with one-click per-row
edit, not 120 modals and not one Approve All. p95 11s sits in the 4–15s band, so the run
streams per exception, interruptible at each row; timeout 33s. Capture point is
edit-before-commit; correcting costs 1 action against 1 to approve, inside the 2× bar.

## Gotchas

**The diff that lives somewhere else.** "Review in the ERP" means the human approves your
summary, not the change. What is not visible in the surface is not approved.

**Undo that is not one.** A 30-second undo on something noticed a week later is not an undo:
the window must be ≥ p95 detection lag, or the action is irreversible and the level drops.
And reverting the agent's action must not revert what the human did after it — scope undo to
the action, not the session.

**Approve All with no per-row diff.** The fastest route to a high accept rate and a dead
flywheel. Bulk one-click acceptance is an artefact of the interface, not agreement — treat
it as 0.1, not 0.7.

**A bare percentage.** A confidence score tells the user nothing they can do. Band it to the
action, or show the reason instead.

**The autonomy slider in settings.** Punting the level to the user hands them a decision they
cannot make: they do not know the cost of one failure per mode. You do.

**p50 tuned, p95 ignored.** The demo is p50; adoption is p95. A median under 2s with a 47s
tail is a 47s product to whoever hits the tail on their first run.

**Progress theatre.** Invented steps that map to no real tool call: users trust them, then
cannot interrupt anything real.

## Related skills

| Skill | Hand-off |
|---|---|
| `eval-first-spec` | Upstream. Supplies the level and the cost of one failure. No level, no spec. |
| `guardrail-design` | Upstream and nearest neighbour. Supplies θ and the sign-off triggers; this designs the surface at them. |
| `first-mocks` | Downstream. Draws what this specifies. |
| `usability-test-protocol` | Downstream. Runs the session the stranger test only approximates. |
| `trace-instrumentation-spec` | Downstream. Turns the named capture moment into fields. |
| `refine-flywheel` | Downstream. Consumes these corrections; a suppressed correction rate starves it. |
| `agent-design` | Sibling. Role, tools and memory — the machine side of the same agent. |

Supersedes: none.
