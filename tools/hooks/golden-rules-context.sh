#!/usr/bin/env bash
# SessionStart hook: put the golden rules in front of Claude in every session that has this
# plugin installed.
#
# Without this, GOLDEN_RULES.md only loads when this repo is itself the working directory —
# so a session working on the user's OWN product, which is the whole point of the kit, would
# never see the rules the skills assume.
#
# Emits the rules as additionalContext. Fails open: a hook that errors must never stop a
# session from starting.
set -u

RULES="${CLAUDE_PLUGIN_ROOT:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}/GOLDEN_RULES.md"
[ -r "$RULES" ] || exit 0

# The ten rule headings plus the ladder — the whole file is too much for every session.
SUMMARY=$(awk '
  /^## Rule/ { print; next }
  /^\| (Money moved|Behaviour observed|Artefact shown|Verbal commitment|Opinion) \|/ { print; next }
' "$RULES")

[ -n "$SUMMARY" ] || exit 0

python3 - "$SUMMARY" <<'PY' 2>/dev/null || exit 0
import json, sys
summary = sys.argv[1]
print(json.dumps({
    "hookSpecificOutput": {
        "hookEventName": "SessionStart",
        "additionalContext": (
            "Icarus is installed. Its method governs any product judgement in this session.\n\n"
            + summary
            + "\n\nEvidence never stacks: a claim's weight is its best rung, never a sum or an "
            "average. Tag every empirical claim [Fact], [Assumption] or [Hypothesis]. Never "
            "fabricate a number, quote or citation — empty input is a request for evidence, "
            "not a zero. Full text: ${CLAUDE_PLUGIN_ROOT}/GOLDEN_RULES.md"
        ),
    }
}))
PY
