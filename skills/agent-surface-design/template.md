# Agent Surface Plan — three surfaces, one job each, one ships first

Fill every field. Do not ship all three surfaces. Do not report a launch, a listing, or an
install count as an adoption result. Ladder: money 1.0 · behaviour 0.7 · artefact 0.5 ·
verbal 0.3 · opinion 0.1. Rungs never stack.

## 0. The job a foreign agent is trying to finish

> A _[whose]_ agent, mid-_[task]_, needs to _[finish one step]_, and today it _[what it does instead]_.

**Job:** _[write it in the agent's terms, not your marketing's]_
**Evidence that agents reach this step:** _[cite + rung + [Fact]/[Assumption]/[Hypothesis]]_
**Where your product sits:** _[the step it is already failing at | a step it does not know exists]_

If the agent's loop never reaches your step, stop. That is a wedge problem → `wedge-five-questions`.

## 1. Surface-to-job map, and the one that goes first

| Surface | The ONE job it carries here | Evidence this job is the binding constraint |
|---|---|---|
| (a) MCP server | _[let the agent DO the specific thing]_ | _[cite + rung]_ |
| (b) Shipped Agent Skill | _[teach HOW/WHEN — sequence, defaults, failure handling]_ | _[cite + rung]_ |
| (c) AGENTS.md fragment | _[make the agent aware inside the customer's repo]_ | _[cite + rung]_ |

**SHIPS FIRST: _[exactly one — (a), (b) or (c)]_** because _[the constraint it removes]_.
**Second surface released when:** _[the observable trigger, not a date]_
**Third surface released when:** _[the observable trigger]_

## 2. Surface (a) — the MCP server

| Tool | The one job it wins that no other tool wins | Disambiguation sentence (how the agent picks it over every other loaded tool) | Return shape + token ceiling | Blast radius |
|---|---|---|---|---|
| _[name]_ | _[job]_ | _"Use when …"_ | _[prose containing …; ≤N tokens; truncate … first; next action named]_ | _[read / write-reversible / write-irreversible / spend]_ |
| _[name]_ | | | | |

- **Disambiguation check:** no two sentences share a first clause; none needs internal vocabulary. _[PASS/FAIL]_
- **Return-shape check:** no tool returns raw IDs only. _[PASS/FAIL]_
- **Auth flow:** _[who authenticates, with what, scoped to what]_
- **Remote or local:** _[remote / local]_ — traces held by _[you / them]_; adoption countable server-side _[yes / no]_
- Every non-`read` tool above → `guardrail-design` before ship.

## 3. Surface (b) — the shipped Agent Skill

```yaml
---
name: _[portable skill name]_
description: _[trigger-led — the phrasings a foreign agent's task will match]_
---
```

**What it teaches that the tool list cannot:** _[the sequence · the defaults · what to do when a call fails · the judgment]_
**Vendor-portability check:** no host-specific tool names, no assumption about the runtime. _[PASS/FAIL]_
**Cold test:** an agent with the tools loaded and nothing else calls them in the right order. _[PASS/FAIL/not run]_

## 4. Surface (c) — the AGENTS.md fragment

```markdown
_[the actual text the customer pastes into their repo: what your product is for, when to reach
for it, the one command or tool that starts it, and what NOT to use it for]_
```

## 5. Adoption metric per surface

| Surface | The metric (one number) | Instrumentation that produces it | Rung | Impostor refused |
|---|---|---|---|---|
| (a) | _[e.g. distinct customer orgs whose own agent made ≥1 call, unprompted, in a week]_ | _[where it is read from today]_ | _[0.1–1.0]_ | _[installs 0.3 · listing 0.1 · our own calls 0.1]_ |
| (b) | _[e.g. runs where the taught sequence was followed in a session we did not operate]_ | | | |
| (c) | _[e.g. repos with the fragment merged AND a first call traced to it]_ | | | |

**Load-bearing claim:** _[the single highest-rung claim + its rung]_ — not the average, not the pile.
**Coverage tally:** _[n orgs / n calls / n paid]_
**Headline:** _[ADOPTION EVIDENCED at <rung> | NO ADOPTION EVIDENCE — nothing above 0.3]_
**The one call that would move it up a rung:** _[name it]_

## 6. Exhaust and blast-radius check

- **Exhaust produced:** _[which tools, order, arguments, retries, next action — at what resolution]_
- **Who holds it today:** _[you / them]_ · **Claimed by a clause?** _[yes / NO — and a pilot is scheduled for …]_
- → `data-rights-clause` before the first pilot call. A clause bolted on after retention has begun is not a clause.
- **Tools above `read`:** _[list]_ → `guardrail-design`
- **Durability of default-tool position:** out of scope here → `moat-design-canvas`

## 7. Next step

- If the headline is **NO ADOPTION EVIDENCE**: do not build surface two. Go get the one 0.7 call.
- If a surface's metric can only exist server-side and you shipped local: say so; you have no metric.
- Re-run this plan when the release trigger in section 1 fires, not on a schedule.
