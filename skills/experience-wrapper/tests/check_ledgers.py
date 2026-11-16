#!/usr/bin/env python3
"""Check that Substance Ledgers are byte-equivalent to the gold ledger.

Two ways to run it, from the skill folder:

  python3 tests/check_ledgers.py
      Self-check. Confirms each tests/golden/NN.md carries the same ledger as
      tests/gold-ledgers.md, and that every ledger in examples/sample.md
      matches the gold case named by the nearest "<!-- gold: NN -->" marker.

  python3 tests/check_ledgers.py --gold 02 raw.md storyteller.md pack.md
      Check real run outputs against gold case 02. Each file must hold at
      least one ledger, and every ledger in it must match.

Facts, Numbers, Decision and Next owner must match character for character.
Intent is reported when it differs but does not fail the check, because it
may be a tight paraphrase of the user's ask.

Standard library only. Exit code 0 on pass, 1 on any mismatch.
"""
import pathlib
import re
import sys

STRICT = ("Facts", "Numbers", "Decision", "Next owner")
FIELDS = ("Facts", "Numbers", "Intent", "Decision", "Next owner")
ROOT = pathlib.Path(__file__).resolve().parent.parent
MARK = re.compile(r"<!--\s*gold:\s*(\d+)\s*-->")


def ledgers(text):
    """Yield (gold_marker_or_None, ledger_dict) for each Substance block."""
    marker = None
    lines = [re.sub(r"^\s*>\s?", "", ln) for ln in text.splitlines()]
    i = 0
    while i < len(lines):
        m = MARK.search(lines[i])
        if m:
            marker = m.group(1).zfill(2)
        if lines[i].strip() == "## Substance":
            block = {}
            j = i + 1
            while j < len(lines) and lines[j].startswith("- "):
                key, sep, value = lines[j][2:].partition(": ")
                if sep and key in FIELDS:
                    block[key] = value
                j += 1
            yield marker, block
            i = j
            continue
        i += 1


def compare(label, got, want):
    problems = []
    for key in STRICT:
        if key not in got:
            problems.append(f"{label}: missing line '{key}'")
        elif got[key] != want[key]:
            problems.append(
                f"{label}: {key} differs\n    gold: {want[key]}\n    got:  {got[key]}"
            )
    if got.get("Intent") != want.get("Intent"):
        print(f"  note  {label}: Intent differs from gold (allowed if a tight paraphrase)")
    return problems


def load_gold():
    path = ROOT / "tests" / "gold-ledgers.md"
    gold = {m: b for m, b in ledgers(path.read_text(encoding="utf-8")) if m}
    if not gold:
        sys.exit(f"no gold ledgers found in {path}")
    return gold


def main(argv):
    gold = load_gold()
    problems, checked = [], 0

    if argv[:1] == ["--gold"]:
        if len(argv) < 3:
            sys.exit("usage: check_ledgers.py --gold NN file [file ...]")
        case = argv[1].zfill(2)
        if case not in gold:
            sys.exit(f"no gold case {case}; have {sorted(gold)}")
        for name in argv[2:]:
            found = list(ledgers(pathlib.Path(name).read_text(encoding="utf-8")))
            if not found:
                problems.append(f"{name}: no '## Substance' block found")
            for n, (_, block) in enumerate(found, 1):
                checked += 1
                problems += compare(f"{name} ledger {n}", block, gold[case])
    else:
        for case, want in sorted(gold.items()):
            path = ROOT / "tests" / "golden" / f"{case}.md"
            found = list(ledgers(path.read_text(encoding="utf-8")))
            if len(found) != 1:
                problems.append(f"{path.name}: expected 1 ledger, found {len(found)}")
            for _, block in found:
                checked += 1
                problems += compare(f"golden/{path.name}", block, want)
                if block.get("Intent") != want.get("Intent"):
                    problems.append(f"golden/{path.name}: Intent differs from gold-ledgers.md")
        sample = ROOT / "examples" / "sample.md"
        for n, (marker, block) in enumerate(ledgers(sample.read_text(encoding="utf-8")), 1):
            checked += 1
            if marker not in gold:
                problems.append(f"sample.md ledger {n}: no gold marker above it")
                continue
            problems += compare(f"sample.md ledger {n} (gold {marker})", block, gold[marker])

    for p in problems:
        print(f"  FAIL  {p}")
    print(f"{checked} ledger(s) checked, {len(problems)} problem(s)")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
