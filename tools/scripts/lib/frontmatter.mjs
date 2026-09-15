/**
 * Frontmatter reading, shared by the validator and the site build.
 *
 * Extracted verbatim in behaviour from validate-skills.mjs so both tools agree
 * on what a skill's frontmatter says. Minimal on purpose: top-level `key:` pairs
 * only, with folded continuation lines joined by a space — the same shape the
 * validator has always read.
 */

import fs from "node:fs";

/**
 * Split a file into its frontmatter block and its body.
 * Returns null when there is no `---` block at the top.
 */
export function splitFrontmatter(raw) {
  if (!raw.startsWith("---")) return null;
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = raw.slice(4, end);
  const body = raw.slice(end + 4).replace(/^\n+/, "");
  return { block, body };
}

/** Parse a frontmatter block into `{key: value}`. Continuation lines fold with a space. */
export function parseBlock(block) {
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

/** Read a file's frontmatter as `{key: value}`, or null when there is no block. */
export function frontmatter(file) {
  const split = splitFrontmatter(fs.readFileSync(file, "utf8"));
  return split ? parseBlock(split.block) : null;
}

/** Read a file as `{data, body}`, or null when there is no frontmatter block. */
export function readDocument(file) {
  const raw = fs.readFileSync(file, "utf8");
  const split = splitFrontmatter(raw);
  if (!split) return null;
  return { data: parseBlock(split.block), body: split.body };
}

/** Strip a YAML block-scalar marker (`>-`, `|`, `>`) off a folded value. */
export function cleanScalar(value) {
  return (value || "").replace(/^[>|][-+]?\s*/, "").trim();
}

/**
 * A plain (unquoted, non-block) scalar containing ": " is invalid YAML —
 * strict parsers reject the whole frontmatter and the skill fails to load.
 * 11 of the 45 source skills shipped this way; see skills/SOURCES.md.
 *
 * Returns one message per offending key.
 */
export function plainScalarErrors(raw) {
  const out = [];
  const split = splitFrontmatter(raw);
  if (!split) return out;
  for (const line of split.block.split("\n")) {
    const m = /^([A-Za-z][\w-]*):[ \t]+([^>|"'\s].*)$/.exec(line);
    if (m && /:\s/.test(m[2]))
      out.push(`'${m[1]}' is a plain scalar containing ": " — invalid YAML. Use a >- block.`);
  }
  return out;
}
