# icarus — operating rules

This repo is Utopia Studio's Product Management hub. Any session that loads it inherits
the Icarus method.

1. **Read [`GOLDEN_RULES.md`](./GOLDEN_RULES.md) before judging any product work.** Ten rules. They are not suggestions.
2. **Weight evidence by what people did.** Money 1.0, behaviour 0.7, artefact 0.5, commitment 0.3, opinion 0.1. Rungs never stack. A claim's weight is its best rung, never the sum, never the average.
3. **Tag every empirical claim** `[Fact]`, `[Assumption]`, or `[Hypothesis]`.
4. **Challenge first.** Name the gap, the kill criteria, and what would change your view. Flattering weak work is an auto-fail.
5. **Never fabricate a number, quote, or citation.** Empty input is a request for evidence, not a zero.
6. **Stay in scope.** Each skill names its siblings and hands off. Poaching is an auto-fail.
7. **Compose the Icarus skills, do not restate them.** A new file that reimplements `evidence-ladder` will drift from it.
8. **Copied skills stay verbatim.** Editing a skill in `skills/` breaks its eval harness. Re-run its `tests/` or leave it alone. Provenance is in [`skills/SOURCES.md`](./skills/SOURCES.md).
9. **Nothing enters folded or it does not enter.** No external skill gets vendored wholesale (Rule 9).
10. **Run `node tools/scripts/validate-skills.mjs && node tools/scripts/build-site.mjs` before every commit.**
    The first catches rubric drift, the second rebuilds [`site/`](./site/). A stale `site/data` fails CI.

A rule change in `GOLDEN_RULES.md` is Ollie's call. Propose it, do not make it quietly.
