---
description: Run the DeepGen intake on a candidate domain — the one decision, the seed data, the expert, the cost of failure, the demand rung — and return a readiness read plus a Domain Brief.
argument-hint: "[domain, the decision an expert gets right, what data and expert access you hold]"
---

Run the DeepGen intake on this:

$ARGUMENTS

Read `GOLDEN_RULES.md` and `deepgen/INTAKE.md` first. Ask only for fields the input leaves empty,
one gate at a time, in this order: decision, seed, expert, cost of failure, demand rung. Stop at
the first BLOCKED gate and ask the one question that would move it. Do not proceed to the next
gate on an assumption.

Compose, do not restate: `agent-design` step 1 for the decision, `eval-first-spec` part 1 for
the job line, `yoda-data-sourcing` steps 3 to 5 for the sources, `tacit-knowledge-interview`
step 0 for expert access, `guardrail-design` step 2 for cost bands, `evidence-ladder` for the
demand rung.

Return the five-gate readiness read (PASS / OWED / BLOCKED, no percentage, no total), the single
next action with the skill that runs it, and the Domain Brief as JSON against
`deepgen/schemas/domain-brief.schema.json`. Tag every field. Never write "validated". A brief
with all five gates PASS is "ready for the researcher", nothing more.

If the input is a domain name and nothing else, ask for the one decision and stop.
