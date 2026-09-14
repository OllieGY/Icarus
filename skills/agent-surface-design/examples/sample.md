> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example — Meridian Grid

Meridian Grid runs a cross-operator pooled benchmark for data-centre infrastructure risk: power,
cooling and capacity incidents contributed by member operators, sold back as a subscription
benchmark. Their question: *"Should we build an MCP server? Our customers' agents should be able
to use this."*

## Input brought to the skill

- Two member operators run their own reliability agents against their internal incident store. In
  onboarding calls Meridian's team watched both agents try to answer "how does our cooling
  downtime compare to peers" and fall back to a quarterly PDF one of them had downloaded. [Fact]
- Meridian published a server three weeks ago and listed it in one public registry. 612 registry
  page views, 38 configs added. [Fact]
- 1 operator's platform lead said "we'd definitely wire this into our agent next quarter". [Fact
  that it was said]
- Meridian's API has 31 endpoints. Engineering has auto-generated 31 tools and wants to ship them.
- Server-side call log exists and carries the OAuth org id. [Fact]
- No pilot signed yet that mentions call logs. [Fact]

## 0. The job a foreign agent is trying to finish

> A member operator's reliability agent, mid-incident-review, needs its own cooling and power
> downtime placed against the pooled peer distribution, and today it quotes a stale quarterly PDF.

Evidence agents reach this step: two observed agent runs falling back to the PDF — **behaviour
0.7 [Fact]**. Where Meridian sits: the step the agent is already attempting and failing.

## 1. Surface-to-job map, and the one that goes first

| Surface | The ONE job here | Constraint evidence |
|---|---|---|
| (a) MCP server | Return the peer comparison as a callable result | Agents attempt it and hit no tool — behaviour 0.7 [Fact] |
| (b) Agent Skill | Teach when to compare against the pool vs the operator's own history, and how to read a suppressed cell | No evidence yet that agents call wrongly — nothing to teach against [Assumption] |
| (c) AGENTS.md fragment | Make the agent aware inside the operator's ops repo | No evidence agents are unaware; they are actively searching [Fact] |

**SHIPS FIRST: (a) the MCP server** — capability is the binding constraint. Awareness is not
(agents already hunt for this) and knowledge is not (no miscalls exist to fix yet).
**Second surface (b) released when:** the first traced miscall — an agent asking the pool for a
single-operator trend, or citing a suppressed cell as zero.
**Third surface (c) released when:** a second operator's agent fails to find the server that their
team has already configured.

## 2. Surface (a) — the server

Thirty-one auto-generated tools is refused outright: it fails disambiguation before a single call
is made. Three tools survive.

| Tool | The one job it wins | Disambiguation sentence | Return + ceiling | Blast radius |
|---|---|---|---|---|
| `compare_to_peer_pool` | Places one operator metric against the pooled distribution | "Use when you need to know how this site's metric compares to other operators." | Prose naming the metric, the operator's value, the pool percentile and the cohort size; ≤600 tokens; oldest quarters truncated first; next action named. | read |
| `get_own_incident_history` | The operator's own series, no pool | "Use when you need this operator's own history over time, with no comparison." | Prose, ≤600 tokens, monthly rows | read |
| `list_available_metrics` | What can be compared at all | "Use once, before the first comparison, to see which metrics this operator contributes." | Prose list, ≤200 tokens | read |

Disambiguation check: PASS — "compares to other operators" / "own history, no comparison" /
"which metrics exist" share no first clause. Return-shape check: PASS — no tool returns a bare
`site_id`. Auth: OAuth per operator org, scoped to that operator's contributed metrics plus the
pooled aggregate. Remote, because the pool cannot be shipped to a member's machine. All three
tools are `read`, so nothing routes to `guardrail-design` yet — which is the reason a read-only
first surface is the cheap one to ship.

## 3–4. Surfaces (b) and (c), written and held

The skill teaches the sequence (`list_available_metrics` → `compare_to_peer_pool`, never the
reverse), the suppression rule (a cohort below the minimum returns "suppressed", which is not
zero), and the failure path when an operator has not contributed the metric being asked about.
The fragment is four lines for the operator's ops repo. Both are drafted; neither ships until
its section-1 trigger fires.

## 5. Adoption metric per surface

| Surface | Metric | Instrumentation | Rung | Impostor refused |
|---|---|---|---|---|
| (a) | Distinct operator orgs whose own agent made ≥1 `compare_to_peer_pool` call in a week Meridian did not prompt | Server-side call log, org id from the OAuth token, minus Meridian's own org ids | **0.7 available** | 612 registry views → 0.1; 38 configs added → 0.3; the "definitely wire this in next quarter" → 0.3 |
| (b) | Runs where `list_available_metrics` preceded the comparison, in a session Meridian did not operate | Call ordering per session id | 0.7 available | Skill downloads → 0.3 |
| (c) | Repos with the fragment merged AND a first call traced from that org | Merge, then first-call join on org id | 0.7 available | Merged-but-never-called → 0.3 |

**Headline: NO ADOPTION EVIDENCE.** Nothing here is above 0.3 today. The 612 views and the
registry listing are 0.1 — Meridian's own artefact about Meridian. The 38 configs are a free
one-click: 0.3, and 38 of them is still 0.3, because rungs do not stack. The platform lead's
promise is 0.3. Zero calls have been made by an agent Meridian does not operate.

**The one call that would move it to 0.7:** one member operator's reliability agent calling
`compare_to_peer_pool` inside an incident review Meridian did not sit in. That is a single log
line, and it is worth more than the entire launch.

## 6. Exhaust and blast radius

Every call reveals which metric an operator is anxious about, at what hour, how often they
re-checked, and what they did next — exhaust of the member's own risk workflow at a resolution
the member does not hold about itself. Meridian holds it by default the moment the remote server
answers. In a pooled-benchmark business where members already negotiate hard on contribution
terms, discovering this retention after the fact loses the member and the pool position at once.
**Not claimed by any clause today. No pilot signed.** → `data-rights-clause`, before the first
pilot call, not after it.

## What the skill refused

It refused the 31-tool list, it refused to ship all three surfaces, and it refused to let "612
views, 38 installs, one enthusiastic platform lead" be written up as distribution traction. The
correct reading of Meridian's launch is: the server exists and has never been used.
