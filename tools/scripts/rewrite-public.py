#!/usr/bin/env python3
"""
One-off (idempotent) rewrite that turned the internal corpus into the public kit.

Kept in the repo so the transformation is auditable against the upstream source named in
docs/SOURCES.md. Re-running it on the rewritten tree is a no-op.

Usage: python3 tools/scripts/rewrite-public.py [--check]
  --check  report what would change and exit 1 if anything would, changing nothing.
"""
import os, re, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CHECK = "--check" in sys.argv

DISCLAIMER = "> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data."

# --- company anonymisation -------------------------------------------------
COMPANIES = [
    (r"\bDurian Labs\b", "Larder Labs"),
    (r"\bDurian\b", "Larder Labs"),
    (r"\bdurianlabs\.co\b", "example.com"),
    (r"\bAzraq\b", "Meridian Grid"),
    (r"\bMentix\b", "Foundry Signal"),
    (r"\bBarrier Intelligence\b", "Halcyon Safety"),
    (r"\bBarrier\b(?! to)", "Halcyon Safety"),
]

# --- the person-noun swap --------------------------------------------------
# Order matters: longest / most specific first.
PEOPLE = [
    (r"\bfellow work\b", "real product work"),
    (r"\bfellow session\b", "working session"),
    (r"\bfellow sessions\b", "working sessions"),
    (r"\bfellow's own words\b", "the builder's own words"),
    (r"\bFellow's\b", "Builder's"),
    (r"\bfellow's\b", "builder's"),
    (r"\bFellows\b", "Builders"),
    (r"\bfellows\b", "builders"),
    (r"\bFellow\b", "Builder"),
    (r"\bfellow\b", "builder"),
]

# --- studio / platform framing ---------------------------------------------
FRAMING = [
    (r"a studio building on", "a team building on"),
    (r"[Tt]he studio's method", "this kit's method"),
    (r"[Tt]he studio optimises", "This kit optimises"),
    (r"\bthe studio\b", "your team"),
    (r"\bThe studio\b", "Your team"),
    (r"\bstudio team\b", "product team"),
    (r"\bin-venture\b", "in-house"),
    (r"\bIn-venture\b", "In-house"),
    # Daedalus, the internal platform, becomes the generic lane.
    (r"Daedalus \(the studio platform\)", "your platform team"),
    (r"Daedalus \(the studio\)", "your platform team"),
    (r"Daedalus \(studio\)", "your platform team"),
    (r"Daedalus's", "your platform team's"),
    (r"\bDaedalus\b", "your platform team"),
    (r"\bQDB\b", "an investor"),
    (r"the Co-Build asset registry", "a shared asset registry"),
]

# --- cross-reference hygiene ------------------------------------------------
# Every "section NN" sits next to the skill name it refers to, so the number is noise.
SECTIONS = [
    (r"\s*\(sibling, section \d\d\)", " (sibling)"),
    (r"\s*\(section \d\d, forthcoming\)", ""),
    (r"\s*\(section \d\d, shipped\)", ""),
    (r"\s*\(section \d\d\)", ""),
    (r",\s*section \d\d(?=[;,)])", ""),
    (r",\s*section \d\d\b", ""),
    (r"\s*\(sibling, section \d\d\b", " (sibling"),
    (r"\s*\(section \d\d\b", " ("),
]

MODULE = [
    (r"the M9 retention-dashboard / cohort-analysis skills",
     "a retention-dashboard or cohort-analysis skill"),
    (r"the M9 retention pack", "an external analytics pack"),
    (r"\(M9 retention pack\)", "(external)"),
    (r"\s*\(M9\)", " (external)"),
    (r"\bM9\b", "an external analytics pack"),
    (r"## The Icarus reframe", "## The reframe"),
    (r"\bthe Icarus module\b", "this kit"),
    (r"\bthe Icarus funnel\b", "this kit's flow"),
    (r"\bIcarus sections\b", "the stages"),
    (r"\bnine Icarus sections\b", "the stages"),
    (r"\bthe Icarus ladder\b", "the ladder"),
]

# Renames run BEFORE the person swap, or `fellow-path-router` becomes `builder-path-router`
# and stops matching. The retired `fellow-level-ladder` is handled here too so that stale
# references to it fail loudly rather than silently becoming a plausible-looking name.
RENAMES = [
    (r"\bfellow-path-router\b", "start-here-router"),
    (r"\bplatform-vs-venture\b", "build-vs-buy-boundary"),
    (r"\bFellow Path Router\b", "Start Here Router"),
    (r"\bPlatform vs Venture\b", "Build vs Buy Boundary"),
]

ALL = COMPANIES + RENAMES + PEOPLE + FRAMING + SECTIONS + MODULE


def rewrite(text: str) -> str:
    """Apply every substitution, then repair only what the substitutions damaged.

    The cleanup pass runs ONLY when a substitution actually fired. Running it
    unconditionally would reformat files the rewrite never touched — which makes the
    script non-idempotent and produces pure whitespace churn in the diff.
    """
    out = text
    for pat, rep in ALL:
        out = re.sub(pat, rep, out)
    if out == text:
        return text
    # collapse damage from removed parentheticals
    out = re.sub(r"[ \t]+([.,;)])", r"\1", out)
    out = re.sub(r"\(\s+", "(", out)
    out = re.sub(r"[ \t]{2,}(?![-|])", " ", out)
    return out


def needs_disclaimer(path: str) -> bool:
    rel = os.path.relpath(path, ROOT)
    return (
        rel.startswith("skills/")
        and ("/tests/golden/" in rel or "/tests/adversarial/" in rel or "/examples/" in rel)
        and rel.endswith(".md")
    )


def add_disclaimer(text: str) -> str:
    if DISCLAIMER in text or "Illustrative fixture" in text.split("\n\n")[0]:
        return text
    stripped = text.lstrip("\n")
    return f"{DISCLAIMER}\n\n{stripped}"


def main() -> int:
    changed = []
    for dirpath, dirnames, filenames in os.walk(os.path.join(ROOT, "skills")):
        dirnames[:] = [d for d in dirnames if d != ".git"]
        for fn in filenames:
            if not fn.endswith(".md"):
                continue
            p = os.path.join(dirpath, fn)
            original = open(p, encoding="utf-8").read()
            new = rewrite(original)
            if needs_disclaimer(p):
                new = add_disclaimer(new)
            if new != original:
                changed.append(os.path.relpath(p, ROOT))
                if not CHECK:
                    open(p, "w", encoding="utf-8").write(new)
    print(f"{'would change' if CHECK else 'changed'}: {len(changed)} files")
    if CHECK and changed:
        for c in changed[:20]:
            print("  ", c)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
