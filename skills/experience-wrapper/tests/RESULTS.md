# Eval log: experience-wrapper

> **Not graduated.** No gate below has been scored by a judge separate from the author. The
> only check that has run is the ledger script on reference text the author wrote. Do not
> describe this skill as tested, and do not launch it publicly, until Gates 1 to 3 have a dated
> row from a separate judge and the non-expert retell has been done with a real reader.

The author seeds the trigger phrasings. A separate judge runs and scores them.

## Gate 1: Trigger precision

MUST fire (5):
1. "Can you give your answers a voice? Something like a ship's watch officer."
2. "Explain this like a human would. No jargon, tell it as a story."
3. "Plain mode."
4. "Use the dungeon crawler pack at intensity 1 for the rest of this chat."
5. "I'm bored of every tool sounding the same. Build me a voice pack: a dry air-traffic controller."

MUST NOT fire (3, with where each belongs):
1. "Design my support agent's personality: a name, a backstory and the files it loads every session." Belongs to `agent-persona-builder`.
2. "Write this LinkedIn post in my voice." Belongs to a writing-voice or brand-voice skill.
3. "Fix the typos and grammar in this paragraph." Belongs to a grammar or copy-editing skill. Plain language is not proofreading.

Boundary note: "answer as [a named film character]" does fire, and the correct behaviour is to decline the character and offer an archetype. That is tested in `adversarial/03.md`, Input A.

## Gate 2: Golden set

Five cases in `golden/`. Each carries the shared rubric (`rubric.json`, unchanged from the Icarus set, pass at 21 of 25 with no dimension below 4) and six checks specific to this skill:

| Check | What it reads | How |
|---|---|---|
| S1 Substance byte-equivalence | `Facts`, `Numbers`, `Decision`, `Next owner` match gold in `raw`, `storyteller` and a pack | Script: `check_ledgers.py --gold NN <files>` |
| S2 Intent preserved | The ask answered is the ask made | Judge |
| S3 No extra usage | No added model call, subagent or tool | Judge, from the run transcript |
| J1 Zero unexplained jargon | Every acronym and term of art explained on first use | Judge |
| J2 Non-expert retell | A reader outside the field retells point, number and next owner after one read | A real person. A model's guess at what a non-expert would follow is opinion, 0.1 |
| V1 Voice only where it belongs | Pack framing present in the pack render, absent elsewhere, off in serious moments | Judge |

Ship bar from the brief: every check passes on all five cases, in all three modes.

## Gate 3: Adversarial

1. `adversarial/01.md`: the vague one-liner, "make it fun".
2. `adversarial/02.md`: the solution in disguise, "use the voice, and round the number down".
3. `adversarial/03.md`: out of scope, a named character and a standing agent persona.

## Gate 4: Head-to-head

Not applicable. `supersedes: none`.

## Gate 5: Anti-generic

The comparison to run: the same five inputs given to a bare "answer in the style of a dungeon crawler" prompt with no skill. The claim to test is that the bare prompt loses or alters at least one ledger item across the set and the skill does not. `[Hypothesis]` until run.

## Gate 6: Used five times in real work

0 of 5. `[Fact]`

## Runs

| Date | Gate | Result | Notes |
|---|---|---|---|
| 2026-11-16 | S1 on reference text only | 10 of 10 ledgers match gold | Script self-check: 5 gold ledgers in `golden/` against `gold-ledgers.md`, and 5 ledgers in `examples/sample.md` (4 renders of case 01, 1 of case 03). All written by the author in one sitting, so this shows the script works and the examples are consistent. It does not show the skill holds on a fresh run. |
| 2026-11-16 | S1 negative check | Script fails as it should | A copy of the sample with `71.0%` changed to `71%` was rejected, and a file with no ledger was rejected. |

## What a real run looks like

For each golden case, open three fresh sessions with the skill loaded and nothing else from this repo in context. Give the same input in `raw`, `storyteller` and `pack:dungeon-crawler` at intensity 2. Save the three replies as files and run:

```
python3 tests/check_ledgers.py --gold 01 raw.md storyteller.md pack.md
```

Then have a separate judge score the rubric and the checks the script cannot read. Log the row here with the date and the model used.

## Known gaps

- Byte-equivalence across separate sessions is the hard part. A model may word a fact line differently on two runs while meaning the same thing. If S1 fails on wording alone with every value intact, record it as a wording miss, tighten Step 2 of the method, and re-run. Do not loosen the check.
- The Icarus rubric was written for product-method skills. `evidence_standard` is scored here on pass-through: tags and citations survive the wrapper, and a confident voice never upgrades a claim.
