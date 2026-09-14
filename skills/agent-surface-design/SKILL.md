---
name: agent-surface-design
description: >-
  Returns a three-surface distribution plan — (a) an MCP server, (b) a shipped
  portable Agent Skill, (c) an AGENTS.md fragment for their repo — each
  surface carrying ONE job, with one named to ship first and the other two refused, plus an adoption metric per surface scored on the evidence ladder (launch
  post or directory listing 0.1; installed-but-uncalled 0.3; tool calls from a
  customer's own agent 0.7; money attached to those calls 1.0). Fires on "should we
  build an MCP server", "how do people find this", "our customers' agents should be
  able to use this", "distribution for an AI product", "should we ship a skill". NOT
  for whether the wedge itself forces adoption (use wedge-five-questions), NOT for
  designing the blast radius or human sign-off (use guardrail-design), NOT for
  claiming the tool-call telemetry contractually (use data-rights-clause), NOT for
  whether being the default tool is durable (use moat-design-canvas), NOT for
  designing your own internal agent (use agent-design).
metadata:
  type: generator
  supersedes: none
allowed-tools: Read Glob Grep Write
---

# Agent Surface Design

## What it does

Takes one product and returns a three-surface distribution plan for a world where the buyer's agent is a user. Three surfaces, each with the ONE job it carries and one adoption metric scored on the evidence ladder: **(a)** an MCP server — the tool list, what each tool wins that the others do not, the auth flow, remote vs local, and the blast radius of every exposed tool now that it runs inside a third party's agent loop; **(b)** a shipped Agent Skill — your operating knowledge as a portable skill, so the customer's agent knows HOW to use the tools and not merely that they exist; **(c)** an AGENTS.md / README-for-agents fragment the customer drops into their own repo.

It refuses three things. It refuses to ship all three surfaces by default — you name the one that goes first and what the other two are waiting on. It refuses to count a launch announcement, a directory listing, or an install as a distribution result. And it refuses to let the tool-call telemetry flowing through your server go unclaimed: that traffic is workflow exhaust, and a clause has to cover it before the first pilot call, not after.

## The reframe

Distribution used to mean reaching a human who then chooses your product. It now means being reachable by the agent that human delegated the job to. If a customer's assistant can reach your product mid-task, you become the default tool for that job — not the best tool, the *reachable* one. If it cannot, a competitor's server is, and your product is a tab the human never opens because the agent already finished the work somewhere else.

That flips two habits. First, the unit of adoption stops being the signup and becomes the **call**: an agent spending a turn on your tool, inside a run someone else paid for, is behaviour that cost them something. An install is a checkbox in a config file and costs nothing. Second, your documentation stops being for humans. The tool list IS the interface; a foreign agent decides whether to call you from a name and one line of description, without trying it first. Most "we shipped an MCP server" posts are a wrapper over an existing API, listed in a directory, and never called — which is 0.1 evidence dressed as a channel.

## When to use / When NOT

Use when you have a product with a real job to do and you are deciding how a foreign agent — one you do not operate, running inside your customer's stack — reaches it.

| If you want… | Use instead |
|---|---|
| To know whether the thing itself forces adoption at all | `wedge-five-questions`. A surface cannot rescue a wedge no one pulls. Run that first; if it fails, no server helps. |
| The failure-mode design, confidence thresholds and human sign-off for the actions you expose | `guardrail-design`. This skill only *classifies* blast radius per tool and hands the classes over. |
| To actually claim the tool-call telemetry in a contract | `data-rights-clause`. This skill names the exhaust and the timing; that skill writes the clause. |
| To know whether being the default tool survives three years of competitors | `moat-design-canvas`. Reachability today is not durability. |
| To design your own internal agent — its role, tools, memory, eval | `agent-design`. That agent is yours; these surfaces are for agents you will never see. |

Do not use it to invent a product. If no job and no product are on the table, ask for them and stop.

## Method

Fill in `template.md`. Six steps.

### Step 1 — Name the job a foreign agent is trying to finish

Write it in the foreign agent's terms, not your marketing's. Shape: *"A [whose] agent, mid-[task], needs to [finish one step] and today it [what it does instead]."* Then place your product in that loop: is it the step the agent is already trying and failing at, or a step it does not know exists? These take different surfaces. If the agent's loop never reaches your step at all, you have a wedge problem, not a surface problem — stop and route to `wedge-five-questions`.

### Step 2 — Assign one job per surface, then name the one that goes first

| Surface | The ONE job it carries | What it structurally cannot do |
|---|---|---|
| (a) MCP server | Let a foreign agent *do* the thing — the call, the auth, the result | Teach when to call it, or in what order |
| (b) Shipped Agent Skill | Teach the agent HOW and WHEN — sequence, defaults, failure handling, your operating knowledge | Perform the action |
| (c) AGENTS.md fragment | Make the agent aware you exist at all, inside the customer's repo, at zero install cost | Travel outside that repo |

Now refuse to ship all three. Pick by the binding constraint:

| Symptom you can evidence | Ship first |
|---|---|
| Foreign agents already attempt the action and hit no tool | (a) the server — capability is the constraint |
| The server exists, is listed, and goes uncalled or is called wrongly | (b) the skill — knowledge is the constraint |
| The agent never learns your product is relevant inside the work | (c) the fragment — awareness is the constraint |

Shipping all three at once splits the signal: when the first call arrives you cannot attribute it, so you learn nothing about which surface earned it. Name one. Name the trigger that releases the second.

### Step 3 — Design the tool list against two hard rules

**The disambiguation test.** A foreign agent picks a tool from its name and one line, alongside every other tool loaded in that session — including competitors'. For each tool, write the one sentence the agent uses to choose it. If two of your tools share a first clause, or the sentence needs your internal vocabulary, the tool fails and must be renamed or merged. A list where three tools could plausibly answer the same request is not a list, it is a coin flip.

**The return-shape rule.** Every tool returns human-readable context with a stated token ceiling. Never raw IDs. A return of `{"site_id": "a3f2…"}` forces another round trip before it means anything, and every extra round trip is a place the agent gives up or hallucinates a wrapper. State per tool: the ceiling, what is truncated first, and the next action named in the return.

Then classify **blast radius** per tool — `read` · `write-reversible` · `write-irreversible` · `spend` — remembering that this now runs inside a loop whose prompt you cannot see and cannot rate-limit by intent. Anything above `read` routes to `guardrail-design` before it ships.

Finish the surface with **auth flow** and **remote vs local**:

| | Remote (you host, OAuth) | Local (customer runs it, stdio) |
|---|---|---|
| Who holds the call traces | You, by default — which is exactly why the clause must be explicit | Them. You get no exhaust unless they send it and consented |
| Adoption you can actually count | Per call, server-side — a 0.7 metric is available | Nothing, unless instrumented and agreed up front |

If the metric you name in Step 5 can only be produced server-side and you ship local-only, say plainly that you will have no adoption evidence at all.

### Step 4 — Write the skill that teaches the tools

The skill is your operating knowledge in portable form: the sequence tools are called in, the defaults, what to do when a call fails, and the judgment a tool description has no room for. Write it to the portable Agent Skills frontmatter — at minimum `name` and a trigger-led `description` — so it runs outside one vendor. No host-specific tool names hardcoded, no assumption about which runtime loads it. Test: hand it to an agent with the tools loaded and no other context; if it still calls them in the right order, the skill carries its job.

### Step 5 — Set one adoption metric per surface, with its rung and its instrumentation

One metric per surface. For each: the number, the instrumentation that produces it, its ladder rung, and the impostor you refuse to count.

| Signal | Rung | Why |
|---|---|---|
| Calls sitting inside a paid or metered run; a renewal that cites them | **1.0** money | Cash moved against the call |
| A customer's own agent called a tool, in a run you did not prompt or operate | **0.7** behaviour | The call cost them a real run — tokens, latency, a turn |
| Added to a customer's config, zero calls | **0.3** verbal | A free one-click. It is a promise to maybe call you |
| Listed in a directory; server published; launch announcement; press | **0.1** opinion | Your artefact about yourself. A listed-but-uncalled server is a claim, not a result |

Rungs never stack. Four thousand installs is still 0.3; it is not four thousand times 0.3, and it is not 0.7. The only thing that lifts a surface is one signal at a higher rung.

### Step 6 — Run the exhaust and blast-radius check, then route

The traffic through your server — which tools, in what order, with what arguments, how often the agent retried, what it did next — is exhaust of the customer's own workflow at a resolution they cannot see themselves. It is the most compounding thing the surface produces, and remote hosting means you hold it by default whether or not anyone agreed. Claim it by clause **before the first pilot call**; retention discovered after the fact costs you the account and the corpus. Route to `data-rights-clause`. Route every non-`read` tool to `guardrail-design`.

**Kill line.** If this skill ever reports a distribution result from a launch announcement, a directory listing, an install count, a partnership, or calls your own team made — anything that is not a call made by an agent you do not operate — the output is auto-failed. Naming more than one surface as "first" fails the same way.

## Evidence standard

The ladder, used identically everywhere in this hub: money moved 1.0 · behaviour observed 0.7 · artefact shown 0.5 · verbal commitment 0.3 · opinion 0.1. Rungs never stack; a claim's weight is its best rung, never the sum, never the average. A model's or a vendor's self-assessment is 0.1.

Tag every empirical claim `[Fact]`, `[Assumption]`, or `[Hypothesis]`. An adoption metric whose whole case is `[Assumption]` has not been met; it is the cheapest next test. If every surface in the plan tops out at 0.3 or below, the plan's headline is **NO ADOPTION EVIDENCE** — write that, name the one call that would move it to 0.7, and do not soften it into "early traction". Empty input is a request for evidence, never a zero: ask for the job and the call logs and stop.

## What good looks like

Larder Labs, grocery ops planning. Job: *"A regional chain's ops agent, mid weekly-replenishment, needs last week's per-store sell-through ranked by stockout risk, and today it scrapes a CSV export."* [Fact — seen in two customers' agent traces]

Surface first: **(a) the MCP server**, because agents already attempt the step and hit no tool. Two tools, not nine. `get_stockout_risk` — *"use when you need this week's ranked stockout risk for a named store group"*; `get_sell_through` — *"use when you need raw per-SKU units sold for a date range"*. Neither sentence starts the same way. Both return prose with the store names in it, ≤700 tokens, oldest weeks truncated first, and the next action named. Both `read`, so blast radius is low and nothing routes to guardrails yet. Remote, OAuth per chain.

Adoption metric: *distinct customer orgs whose own agent made ≥1 `get_stockout_risk` call in a week we did not prompt.* Instrumentation: server-side call log, org id from the OAuth token. Last month: **3 orgs, 41 calls, none of them ours — behaviour 0.7 [Fact]**. One of the three has those calls inside a metered plan billed in September — **money 1.0 [Fact]**, and that single account is the load-bearing claim, not the 41. The 600 registry views and the launch post are recorded at **0.1** and excluded from the headline. Surfaces (b) and (c) are written but held; the release trigger is the first customer agent that calls `get_sell_through` when it should have called `get_stockout_risk` — that miscall is the evidence that knowledge, not capability, has become the constraint.

## Gotchas

**The API wrapper with 40 tools.** Auto-generating one tool per endpoint fails disambiguation on contact: the agent cannot choose, so it picks the first plausible one and then apologises. Tools are jobs, not endpoints. Two good tools beat forty faithful ones.

**Counting calls instead of finished jobs.** A tool that returns raw IDs generates *more* calls, not fewer — six round trips and then abandonment reads as healthy traffic. Count runs where the agent got what it came for. Retries are a failure metric wearing an adoption metric's clothes.

**Your own traffic in the denominator.** Solutions-engineer demos, onboarding walk-throughs, and your own eval harness are calls you operate. They are 0.1 about your product, not 0.7 about theirs. Segment by org id before you report anything.

**Treating the skill as documentation.** A skill that describes your product is a brochure an agent will not read. A skill that teaches the sequence, the defaults and the failure handling is the thing that makes the tools get called correctly — which is why it is a separate surface with a separate metric.

**Shipping local to dodge a security review.** It works, and it costs you the entire adoption signal and the entire exhaust. That may be the right trade for an air-gapped buyer; it is never a free one. Say out loud what you gave up.

**Claiming the traces after the pilot.** The call logs are the compounding asset and the single fastest way to lose a security-sensitive account. A clause at pilot #1 is cheap; a retroactive consent conversation about traffic you already stored is not.

## Related skills

| Hand off to | For |
|---|---|
| `wedge-five-questions` | Whether the thing itself forces adoption. Run before this skill; a surface amplifies a wedge, it does not create one. |
| `guardrail-design` | Every `write-reversible`, `write-irreversible` and `spend` tool this skill classifies. |
| `data-rights-clause` | Turning the exhaust finding in Step 6 into signed clause language at pilot #1. |
| `moat-design-canvas` | Whether default-tool position compounds or gets copied. |
| `agent-design` | Your own internal agent — role, tools, memory, eval. Different problem, different owner. |

Supersedes: none.
