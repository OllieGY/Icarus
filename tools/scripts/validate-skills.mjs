#!/usr/bin/env node
/**
 * Validate the Icarus kit before every commit.
 *
 *  - SKILL.md frontmatter: name matches folder, description present and within limits,
 *    and NO unknown top-level keys (Claude Code rejects those at packaging time, so a
 *    stray `type:` silently breaks the plugin).
 *  - A plain (unquoted, non-block) scalar containing ": " is invalid YAML — a strict
 *    parser rejects the whole block and the skill never loads. See docs/SOURCES.md.
 *  - Every skill in tools/scripts/icarus-skills.json exists; graduated ones ship a full
 *    harness (rubric + 5 golden + 3 adversarial) and an un-drifted rubric bar.
 *  - Banned terms: this kit is public. Studio-internal vocabulary and the real company
 *    names must not come back.
 *  - Manifests parse, agree on version, and name every required field.
 *
 * Usage: node tools/scripts/validate-skills.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

const DIMENSIONS = ["method_fidelity", "artifact_complete", "proprietary_edge", "challenge", "evidence_standard"];
const AUTO_FAILS = 4;

// Claude Code's documented frontmatter surface plus the Agent Skills spec fields.
const ALLOWED_TOP = new Set([
  "name", "description", "when_to_use", "argument-hint", "arguments",
  "disable-model-invocation", "user-invocable", "allowed-tools", "disallowed-tools",
  "model", "effort", "context", "agent", "background", "hooks", "paths", "shell",
  "metadata", "license", "compatibility",
]);

// Public-repo hygiene. Each entry may name files that are allowed to mention it.
const BANNED = [
  { re: /\bfellows?\b/i, why: "studio-internal word for the user", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/] },
  { re: /\bDaedalus\b/i, why: "internal platform name", allow: [/^CHANGELOG\.md$/] },
  { re: /\bQDB\b/, why: "names a specific funder", allow: [] },
  { re: /\bAzraq\b/i, why: "real company", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/] },
  { re: /\bMentix\b/i, why: "real company", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/] },
  { re: /\bBarrier Intelligence\b/i, why: "real company", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/] },
  { re: /\bDurian\b/i, why: "real company", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/] },
  { re: /\bsection \d\d\b/i, why: "cross-ref by number; name the sibling skill instead", allow: [] },
  { re: /\bM9\b/, why: "internal curriculum module", allow: [] },
  { re: /\bin-venture\b/i, why: "studio-internal framing", allow: [] },
  { re: /\bthe studio\b/i, why: "studio-internal framing", allow: [/^CHANGELOG\.md$/, /^docs\/SOURCES\.md$/, /^README\.md$/] },
  { re: /\bCo-Build\b/i, why: "internal programme name", allow: [] },
];

/** Minimal YAML-ish frontmatter reader: top-level `key:` pairs only. */
function frontmatterBlock(file) {
  const raw = fs.readFileSync(file, "utf8");
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return null;
  return raw.slice(4, end);
}

function topLevelKeys(block) {
  const keys = [];
  for (const line of block.split("\n")) {
    const m = /^([A-Za-z][\w-]*):/.exec(line);
    if (m) keys.push(m[1]);
  }
  return keys;
}

function fieldValue(block, key) {
  const lines = block.split("\n");
  const i = lines.findIndex((l) => l.startsWith(`${key}:`));
  if (i === -1) return null;
  let v = lines[i].slice(key.length + 1).trim();
  if (v === ">-" || v === ">" || v === "|" || v === "|-") {
    v = "";
    for (let j = i + 1; j < lines.length && /^\s+\S/.test(lines[j]); j++) v += `${lines[j].trim()} `;
  }
  return v.trim();
}

/**
 * A plain scalar containing ": " is invalid YAML. Eleven source skills shipped this way
 * and silently failed to load; see docs/SOURCES.md.
 */
function checkPlainScalars(file, label) {
  const block = frontmatterBlock(file);
  if (block === null) return;
  for (const line of block.split("\n")) {
    const m = /^([A-Za-z][\w-]*):[ \t]+([^>|"'\s].*)$/.exec(line);
    if (m && /:\s/.test(m[2]))
      err(`${label}: '${m[1]}' is a plain scalar containing ": " — invalid YAML. Use a >- block.`);
  }
}

function checkSkill(name) {
  const file = path.join(ROOT, "skills", name, "SKILL.md");
  const label = `skills/${name}/SKILL.md`;
  if (!fs.existsSync(file)) return err(`skills/${name}: no SKILL.md`);
  checkPlainScalars(file, label);
  const block = frontmatterBlock(file);
  if (block === null) return err(`${label}: no frontmatter block`);

  for (const k of topLevelKeys(block))
    if (!ALLOWED_TOP.has(k))
      err(`${label}: unknown top-level key '${k}' — Claude Code rejects these at packaging time. Move it under 'metadata:'.`);

  const fmName = fieldValue(block, "name");
  if (!fmName) err(`${label}: frontmatter missing 'name'`);
  else if (fmName !== name) err(`${label}: name '${fmName}' does not match folder`);

  const desc = fieldValue(block, "description");
  if (!desc) return err(`${label}: frontmatter missing 'description'`);
  if (desc.length > 1536) err(`${label}: description is ${desc.length} chars; listings truncate at 1536`);
  else if (desc.length > 1024) warn(`skills/${name}: description ${desc.length} chars — over the Agent Skills 1024 limit, so it won't port cleanly`);
  if (desc.length < 80) warn(`skills/${name}: description is short — triggers need phrasings, not a summary`);
}

function checkHarness(name) {
  const t = path.join(ROOT, "skills", name, "tests");
  const rubricPath = path.join(t, "rubric.json");
  if (!fs.existsSync(rubricPath)) return err(`skills/${name}: missing tests/rubric.json`);
  for (const [sub, want] of [["golden", 5], ["adversarial", 3]]) {
    const d = path.join(t, sub);
    const got = fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith(".md")).length : 0;
    if (got !== want) err(`skills/${name}: tests/${sub} has ${got} cases, expected ${want}`);
  }
  let rubric;
  try {
    rubric = JSON.parse(fs.readFileSync(rubricPath, "utf8"));
  } catch (e) {
    return err(`skills/${name}: tests/rubric.json does not parse — ${e.message}`);
  }
  if (rubric.skill !== name) err(`skills/${name}: rubric names skill '${rubric.skill}'`);
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
    const file = path.join(dir, f);
    checkPlainScalars(file, `${dirName}/${f}`);
    const block = frontmatterBlock(file);
    if (block === null) err(`${dirName}/${f}: no frontmatter block`);
    else if (!fieldValue(block, field)) err(`${dirName}/${f}: frontmatter missing '${field}'`);
  }
  return files.length;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function checkBannedTerms() {
  let hits = 0;
  for (const file of walk(ROOT)) {
    const rel = path.relative(ROOT, file);
    const text = fs.readFileSync(file, "utf8");
    for (const { re, why, allow } of BANNED) {
      if (allow.some((a) => a.test(rel))) continue;
      const m = re.exec(text);
      if (m) {
        hits++;
        const line = text.slice(0, m.index).split("\n").length;
        err(`${rel}:${line}: banned term "${m[0]}" (${why})`);
      }
    }
  }
  return hits;
}

// --- run ---
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "scripts", "icarus-skills.json"), "utf8"));
const onDisk = fs.readdirSync(path.join(ROOT, "skills"), { withFileTypes: true })
  .filter((d) => d.isDirectory()).map((d) => d.name).sort();

for (const name of onDisk) checkSkill(name);

const graduated = [];
for (const entry of manifest) {
  const { name, graduated: isGrad } = entry;
  if (!onDisk.includes(name)) { err(`manifest lists '${name}' but skills/${name} is missing`); continue; }
  checkHarness(name);
  if (isGrad) graduated.push(name);
}
const manifestNames = new Set(manifest.map((m) => m.name));
const hub = onDisk.filter((n) => !manifestNames.has(n));

let plugin;
try {
  plugin = JSON.parse(fs.readFileSync(path.join(ROOT, ".claude-plugin", "plugin.json"), "utf8"));
  for (const k of ["name", "description", "version", "license", "repository"])
    if (!plugin[k]) err(`.claude-plugin/plugin.json: missing '${k}'`);
} catch (e) {
  err(`.claude-plugin/plugin.json does not parse — ${e.message}`);
}
try {
  const mkt = JSON.parse(fs.readFileSync(path.join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));
  const entry = (mkt.plugins || []).find((x) => x.name === plugin?.name);
  if (!entry) err(`.claude-plugin/marketplace.json: no plugins entry named '${plugin?.name}'`);
  else if (entry.version !== plugin?.version)
    err(`marketplace.json version '${entry.version}' does not match plugin.json '${plugin?.version}'`);
} catch (e) {
  err(`.claude-plugin/marketplace.json does not parse — ${e.message}`);
}

const agentCount = checkMarkdownDir("agents", "description");
const commandCount = checkMarkdownDir("commands", "description");
checkBannedTerms();

console.log(`skills:    ${onDisk.length} — ${graduated.length} graduated, ${manifest.length - graduated.length} not yet graduated, ${hub.length} hub (${hub.join(", ")})`);
console.log(`agents:    ${agentCount}`);
console.log(`commands:  ${commandCount}`);
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.error(`ERROR ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}
console.log("\nOK");
