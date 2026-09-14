# Catalogue

Daily intake of external finds. Newest first.

This is **not** a second skills folder. It is **not** a marketplace install list. Do not
`/plugin install` a pack from a line in here. Do not copy a skill directory into
`skills/`. A find earns a block in this file; it does not earn a seat on the session.

Copied Utopia skills stay verbatim. Provenance is in [`skills/SOURCES.md`](./skills/SOURCES.md).

## Rule 9 — fold or reject; never vendor wholesale

Every skill Claude can load costs context on every session, for every fellow. Net-new
surface has to earn that recurring cost, not just be good in isolation. Adoption and
behaviour outrank author opinion: install counts and real usage are evidence, a README's
self-description is not.

Exactly one disposition per find:

| Disposition | Means | Does **not** mean |
|---|---|---|
| **REBUILD** | Steal the bones. Rebuild them into an existing studio skill, command, hook, or hub file. Provenance line, not a copied folder. This is Rule 9's fold. | `cp -r` the source into `skills/`. A new skill pack. |
| **CATALOGUE** | Park it here. Not folded yet, not rejected yet. Watch until there is a target and a kill line. | Permission to install it "for now". A holding pen that becomes a skills folder. |
| **REJECT** | Duplicate, obvious, low-signal, or would add surface without earning the context cost. One-line reason. Stop. | A polite maybe. Revisit without new evidence. |

There is no **ADD-NEW** here. A brand-new skill still has to clear the six graduation
gates in [`GOLDEN_RULES.md`](./GOLDEN_RULES.md). That decision is not a catalogue entry.

Companion method (not vendored into this hub): `market-skill-ingestion` in
[`The-Utopia-Studio/skills`](https://github.com/The-Utopia-Studio/skills) at
`skills/meta/market-skill-ingestion/`. Use it when the find is a market skill and the
question is whether it belongs in the shared set. This file is the intake log; that skill
is the gate.

## Intake template

Copy this block to the top of the log. Newest first.

```markdown
### YYYY-MM-DD — <one line: the find, not the pitch>

**Source.** URL or `owner/repo@skill`. Who uses it. Install count if known.

**Steal.** The bones only — the non-obvious method, threshold, gotcha, or template.
One short list. If this is empty, REJECT.

**Disposition.** REBUILD | CATALOGUE | REJECT

**Fold into.** Existing skill, command, or hub file. `none` if REJECT or still parked.

**Evidence rung.** Money 1.0 / behaviour 0.7 / artefact 0.5 / commitment 0.3 / opinion 0.1.
Tag `[Fact]` / `[Assumption]` / `[Hypothesis]`. A README's claim about itself is 0.1.

**Kill if.** The condition that makes this a waste. Required.
```

Three tests, same spirit as lessons: specific (a source you can open), costly (why the
context seat would hurt if we got this wrong), actionable (a disposition and a kill line).
A block with no kill line is not done.

---

## Log

### 2026-09-14 — Hub README led with a slogan, not a method

**Source.** This repo's README opening, plus `.claude-plugin/plugin.json`. Internal
rewrite, logged so the catalogue is not empty and so the language bar is a receipt.

**Steal.** Lead with What it is / Why it is useful / How to use it. Name the kit (Claude
plugin, gated stages, not a prompt pack). Pin the bar: evidence ladder, tagged claims,
challenge before help, eval harness, six gates. Tell the reader the five steps that
make the hub run. Do not restate the ladder as the whole pitch.

**Disposition.** REBUILD

**Fold into.** `README.md` (opening and the "What is in here" row for this file);
`.claude-plugin/plugin.json` description (PM hub / gated method, not a leftover
Daedalus-kit one-liner). This file is the Rule 9 parking lot.

**Evidence rung.** Artefact 0.5 — the files as they shipped. `[Fact]` The previous opening
named the hub and restated the ladder; it did not say how to run it. Plugin.json already
described a PM hub, not Daedalus-the-platform, but it still read as an inventory line,
not a method.

**Kill if.** The opening grows a manifesto, this file becomes a second skills folder, or
a line here is treated as a marketplace pack to install.
