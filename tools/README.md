# Tools

What the hub runs on, and what it leans on.

## In this repo

| Tool | What it does |
|---|---|
| [`scripts/validate-skills.mjs`](./scripts/validate-skills.mjs) | Checks every skill's frontmatter, that folder names match, that all 45 Icarus skills still carry a full eval harness, and that no rubric has drifted from 21/25 with the five dimensions and four auto-fails. Run it before every commit: `node tools/scripts/validate-skills.mjs`. |
| [`scripts/icarus-skills.json`](./scripts/icarus-skills.json) | The manifest of the 45. Adding a skill here means the validator will demand its eval harness. |
| [`hooks/log-skill-usage.sh`](./hooks/log-skill-usage.sh) | PreToolUse hook that appends every skill invocation to `~/.claude/skill-usage.log` as JSONL. Tells you which skills actually fire. |

### Wiring the usage hook

```bash
mkdir -p ~/.claude/hooks
cp tools/hooks/log-skill-usage.sh ~/.claude/hooks/
chmod +x ~/.claude/hooks/log-skill-usage.sh
```

Then in `~/.claude/settings.json`:

```json
{
  "hooks": {
    "PreToolUse": [
      { "matcher": "Skill", "hooks": [{ "type": "command", "command": "~/.claude/hooks/log-skill-usage.sh" }] }
    ]
  }
}
```

Top skills by use:

```bash
jq -r '.skill' ~/.claude/skill-usage.log | sort | uniq -c | sort -rn | head -20
```

A skill that fires far less than expected has a bad description or is not useful. Rewrite
the trigger phrasings or retire it — do not leave it costing context on every session.

## Connectors the hub assumes

Not vendored here; attached per session.

| Connector | Used for |
|---|---|
| Linear | Turning a stage output into tasks. Every Icarus artifact should land as issues, not a document nobody opens. |
| Notion | Fellow workspaces, the Co-Build asset registry, stage pages. |
| Granola | Interview transcripts feeding `tacit-knowledge-interview`, `trace-to-interview`, `summarize-interview`. |
| Figma | `first-mocks`, `usability-test-protocol`. |
| Google Drive | Fellow decks, QDB material. |

## The rest of the studio set

This hub carries Icarus only. The generic product skills it routes to — `create-prd`,
`jobs-to-be-done`, `impeccable`, `railway-deploy`, `deploy-to-vercel` — live in the
marketplace. Install alongside:

```
/plugin marketplace add The-Utopia-Studio/skills
/plugin install utopia-product@skills
```
