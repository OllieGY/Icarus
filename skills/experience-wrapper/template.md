# Experience Wrapper templates

Two templates. Part A is the shape of every wrapped reply. Part B is the format of a voice pack.

---

## Part A: Wrapped reply

Write the ledger first, then the prose, then place the ledger last. The order on the page is prose then ledger. The order of writing is ledger then prose.

**Mode:** _[storyteller / pack:<id> at intensity 1 to 3 / plain / raw]_
**Voice forced off for a serious moment?** _[No / Yes: say so in one line at the top]_

_[Layer 1 opening, only if a pack is on. One or two lines. Never ahead of a warning or a failure.]_

_[The point, in plain words. One or two sentences.]_

**What happened:** _[the cause, with every term explained on first use and every figure exact]_

**Why it matters:** _[the effect. One concrete example beats a category.]_

**What's next:** _[the decision, and the next owner by real name or role]_

_[Layer 1 close, only if a pack is on. Any decoration (XP, loot, a case number) is labelled as decoration.]_

```markdown
## Substance
- Facts: <factual claims, separated by semicolons>
- Numbers: <each number, value, unit, identifier or date, exactly as given, separated by semicolons>
- Intent: <the user's ask, or a tight paraphrase of it>
- Decision: <the decision, or "none">
- Next owner: <name or role, or "none">
```

### Kill-line check

- [ ] Every ledger item appears in the prose, unchanged
- [ ] No number rounded, softened, dropped or moved into a decorative stat
- [ ] Next owner's real name and job are in the prose
- [ ] Every acronym and term of art explained on first use (waived in `raw`)
- [ ] No warning or failure opens with metaphor
- [ ] Voice is off if the moment is serious or sensitive
- [ ] No copyrighted name, catchphrase, quoted line or likeness
- [ ] Nothing invented to feed the story; tags `[Fact]` / `[Assumption]` / `[Hypothesis]` carried through untouched
- [ ] No extra model call, subagent or tool was used to style the reply

Any box unchecked: the wrapper yields for that beat. Print the hard logic plainly.

---

## Part B: Voice pack

One pack is one markdown file. Keep it small. A pack is a style, not a script, and it never supplies facts.

```markdown
---
id: <kebab-case, stable>
name: <display name>
layer: 1
genre: <rpg / noir / operations / mentor / other>
archetype: <generic archetype; inspiration only, no names from any published work>
intensity_default: 2
intensity_min: 0
intensity_max: 3
source: <optional provenance>
copyright: original-or-archetype
---

# <Name>

<One or two lines: the register, and what it borrows as structure.>

## Vocabulary
<Allowed words and moves. Generic tropes only.>
<Banned: any copyrighted name, catchphrase or quoted line.>

## Framing
<How a reply is shaped: opening, middle, close.>

## Greetings
<Variants for intensity 1, 2 and 3. A greeting never replaces the point.>

## Progress and milestones
<How completion, progress and "what's next" are marked.>

## Error and blocked
<How failures are announced. Plain words first, then colour.>

## Understanding (Layer 2 reminder)
<This pack does not skip explanations, the three beats or the example.>

## Do not
<Names from published works, hidden numbers, decoration presented as real, joking away a warning.>
```

### Pack check

- [ ] Original or archetype only; nothing that identifies a published character
- [ ] The blocked section leads with plain words
- [ ] Every invented flavour item is marked as decoration
- [ ] The pack would still pass the Part A kill line at intensity 3
