#!/usr/bin/env node
/**
 * Validate the daedalus-kit hub.
 *
 *  - every skills/<name>/SKILL.md has name + description frontmatter
 *  - frontmatter name matches its folder name
 *  - every skill in tools/scripts/icarus-skills.json exists and ships a full
 *    eval harness: tests/rubric.json, 5 tests/golden, 3 tests/adversarial
 *  - every rubric keeps the shared bar: 21/25, min 4 per dimension,
 *    the five Icarus dimensions, the four auto-fails
 *  - agents/*.md and commands/*.md have frontmatter descriptions
 *  - .claude-plugin/plugin.json parses and names every top-level field
 *
 * Usage: node tools/scripts/validate-skills.mjs
 * Adapted from scripts/validate-marketplace.mjs in The-Utopia-Studio/skills.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const DIMENSIONS = [
  "method_fidelity",
  "artifact_complete",
  "proprietary_edge",
  "challenge",
  "evidence_standard",
];
const AUTO_FAILS = 4;

/** Minimal YAML-ish frontmatter reader: top-level `key:` pairs only. */
function frontmatter(file) {
  const raw = fs.readFileSync(file, "utf8");
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = raw.slice(4, end);
  const out = {};
  let key = null;
  for (const line of block.split("\n")) {
    const m = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line);
    if (m) {
      key = m[1];
      out[key] = m[2].trim();
    } else if (key && line.trim()) {
      out[key] = `${out[key]} ${line.trim()}`.trim();
    }
  }
  return out;
}

function checkSkill(name) {
  const dir = path.join(ROOT, "skills", name);
  const skillFile = path.join(dir, "SKILL.md");
  if (!fs.existsSync(skillFile)) {
    err(`skills/${name}: no SKILL.md`);
    return;
  }
  const fm = frontmatter(skillFile);
  if (!fm) {
    err(`skills/${name}/SKILL.md: no frontmatter block`);
    return;
  }
  if (!fm.name) err(`skills/${name}/SKILL.md: frontmatter missing 'name'`);
  else if (fm.name !== name) err(`skills/${name}/SKILL.md: name '${fm.name}' does not match folder`);
  if (!fm.description) err(`skills/${name}/SKILL.md: frontmatter missing 'description'`);
  else if (fm.description.replace(/^>-?\s*/, "").length < 40)
    warn(`skills/${name}: description is short — triggers need phrasings, not a summary`);
}

function checkHarness(name) {
  const t = path.join(ROOT, "skills", name, "tests");
  const rubricPath = path.join(t, "rubric.json");
  if (!fs.existsSync(rubricPath)) {
    err(`skills/${name}: missing tests/rubric.json`);
    return;
  }
  for (const [sub, want] of [["golden", 5], ["adversarial", 3]]) {
    const d = path.join(t, sub);
    const got = fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith(".md")).length : 0;
    if (got !== want) err(`skills/${name}: tests/${sub} has ${got} cases, expected ${want}`);
  }
  let rubric;
  try {
    rubric = JSON.parse(fs.readFileSync(rubricPath, "utf8"));
  } catch (e) {
    err(`skills/${name}: tests/rubric.json does not parse — ${e.message}`);
    return;
  }
  if (rubric.pass_threshold !== 21 || rubric.max !== 25 || rubric.min_per_dimension !== 4)
    err(`skills/${name}: rubric bar drifted from 21/25 with min 4 per dimension`);
  const ids = (rubric.dimensions || []).map((d) => d.id);
  if (ids.join("|") !== DIMENSIONS.join("|"))
    err(`skills/${name}: rubric dimensions drifted — got [${ids.join(", ")}]`);
  if ((rubric.auto_fail || []).length !== AUTO_FAILS)
    err(`skills/${name}: expected ${AUTO_FAILS} auto_fail entries, got ${(rubric.auto_fail || []).length}`);
}

function checkMarkdownDir(dirName, field) {
  const dir = path.join(ROOT, dirName);
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md");
  for (const f of files) {
    const fm = frontmatter(path.join(dir, f));
    if (!fm) err(`${dirName}/${f}: no frontmatter block`);
    else if (!fm[field]) err(`${dirName}/${f}: frontmatter missing '${field}'`);
  }
  return files.length;
}

// --- run ---
const manifest = JSON.parse(
  fs.readFileSync(path.join(ROOT, "tools", "scripts", "icarus-skills.json"), "utf8"),
);
const onDisk = fs
  .readdirSync(path.join(ROOT, "skills"), { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const name of onDisk) checkSkill(name);
for (const name of manifest) {
  if (!onDisk.includes(name)) err(`manifest lists '${name}' but skills/${name} is missing`);
  else checkHarness(name);
}
const extra = onDisk.filter((n) => !manifest.includes(n));

let plugin;
try {
  plugin = JSON.parse(fs.readFileSync(path.join(ROOT, ".claude-plugin", "plugin.json"), "utf8"));
  for (const k of ["name", "description", "version"])
    if (!plugin[k]) err(`.claude-plugin/plugin.json: missing '${k}'`);
} catch (e) {
  err(`.claude-plugin/plugin.json does not parse — ${e.message}`);
}

const agentCount = checkMarkdownDir("agents", "description");
const commandCount = checkMarkdownDir("commands", "description");

console.log(`skills:   ${onDisk.length} (${manifest.length} Icarus + ${extra.length} hub: ${extra.join(", ")})`);
console.log(`agents:   ${agentCount}`);
console.log(`commands: ${commandCount}`);
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log("\nOK");
