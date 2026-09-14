---
name: icarus-golden-rules
description: >-
 Loads the Icarus golden rules — the evidence ladder (money 1.0 / behaviour 0.7 /
 artefact 0.5 / commitment 0.3 / opinion 0.1), the [Fact]/[Assumption]/[Hypothesis]
 tag rule, the five challenge questions, the 21/25 rubric and its four auto-fails —
 before any product judgement is made. Fires on "what are the rules", "how do we
 score this", "is this up to standard", "review this against our method", "did this
 skill do its job", and whenever an output is about to claim something is validated,
 de-risked, or ready. NOT the router for which stage to run (use start-here-router),
 NOT a weighting of one evidence pile (use evidence-ladder), NOT the whole-idea
 five-question gate (use so-what-stress-test).
metadata:
 supersedes: none
 type: component
allowed-tools: Read Glob Grep Write
user-invocable: false
---

# Icarus Golden Rules

## What it does

Puts this kit's method in front of Claude before it judges anything. Read
[`GOLDEN_RULES.md`](../../GOLDEN_RULES.md) in full, then apply the ten rules to whatever is being
produced or reviewed. This skill is a component: other skills and agents cite it, it
produces no artifact of its own.

## When it fires

Any time an output is about to assert quality, validation, or readiness. Any time
someone asks how your team scores something. Any time a skill's own output needs
grading before it leaves the room.

## The load-bearing four

If you read nothing else:

1. **Weight by what people did.** Money 1.0, behaviour 0.7, artefact 0.5, commitment 0.3, opinion 0.1. Rungs never stack. A claim's weight is its best rung, never the sum, never the average.
2. **Tag every empirical claim** `[Fact]`, `[Assumption]`, or `[Hypothesis]`.
3. **Challenge before you help.** Name the gap, the kill criteria, and what would change your view. Flattery is an auto-fail.
4. **Never fabricate.** No number, quote, or citation that was not in the input. Empty input is a request for evidence, not a zero.

## Grading an output

Score 5 dimensions out of 5 each — method fidelity, artifact complete, proprietary
edge, challenge, evidence standard. Pass is ≥21/25 with no dimension below 4. Any one
of the four auto-fails voids the score regardless of the total:

- Fabricated a specific number, quote, or citation not in the input
- Flattered a weak idea instead of challenging it
- Fired outside its trigger scope / poached a sibling skill
- Output is generic PM boilerplate

Full dimension descriptions and the six graduation gates are in `GOLDEN_RULES.md`.

## What good looks like

A grade that names the failing dimension and quotes the line that failed it. "Scored
19/25 — `evidence_standard` 3/5: 'customers confirmed demand' cites four interview
quotes (0.1) and one LOI with no payment (0.3), then calls the claim validated. Best
real rung is 0.3. Rewrite the headline to 0.3 and name the cheapest probe to 1.0."

A grade that says "looks good, minor notes" has failed the `challenge` dimension itself.

## Gotchas

- Do not let a single payment launder a stack of opinion by averaging the pile.
- A free one-click sign-up is 0.3, not 0.7. A reaction to a mockup you made is 0.1, not 0.5.
- A builder saying "we're de-risked" is itself an opinion (0.1) until the ladder says otherwise.
