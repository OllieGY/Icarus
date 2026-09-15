/**
 * Stage membership, read from skills/ICARUS.md.
 *
 * That table is the only place a skill's stage is recorded — the copied skills
 * carry no stage in their frontmatter and must stay verbatim (CLAUDE.md rule 8).
 * The validator and the site build both read it here so they cannot disagree.
 */

import fs from "node:fs";
import path from "node:path";
import { parseTables, stripInline } from "./markdown.mjs";

const norm = (h) => h.toLowerCase().replace(/[^a-z0-9]/g, "");

/** Every backticked name in a cell, in order. */
export function backticked(cell) {
  return [...String(cell).matchAll(/`([^`]+)`/g)].map((m) => m[1].trim());
}

/**
 * Parse the flow table out of a markdown document.
 * Returns `[{id, label, tagline, skills}]`, or [] when there is no such table.
 */
export function parseStageTable(md) {
  const table = parseTables(md).find((t) => {
    const h = t.headers.map(norm);
    return h[0] === "" || h[0] === "#" ? h.includes("stage") && h.includes("skills") : false;
  });
  if (!table) return [];
  const cols = table.headers.map(norm);
  const iId = 0;
  const iStage = cols.indexOf("stage");
  const iSkills = cols.indexOf("skills");
  return table.rows
    .filter((r) => /^\d+$/.test(stripInline(r[iId] || "")))
    .map((r) => {
      const full = stripInline(r[iStage] || "");
      const dash = full.indexOf(" — ");
      return {
        id: stripInline(r[iId]),
        label: dash === -1 ? full : full.slice(0, dash).trim(),
        tagline: dash === -1 ? null : full.slice(dash + 3).trim(),
        skills: backticked(r[iSkills] || ""),
      };
    });
}

/** The stages, read from skills/ICARUS.md. */
export function readStages(root) {
  return parseStageTable(fs.readFileSync(path.join(root, "skills", "ICARUS.md"), "utf8"));
}

/** The same table as README.md states it, for the drift check. */
export function readReadmeStages(root) {
  return parseStageTable(fs.readFileSync(path.join(root, "README.md"), "utf8"));
}

/**
 * Check stage coverage: every manifest skill in exactly one stage, every named
 * skill on disk. Returns `{errors, warnings, stages, index}` where `index` maps
 * a skill name to its stage id.
 */
export function checkStages(root, manifest, onDisk) {
  const errors = [];
  const warnings = [];
  const stages = readStages(root);
  if (!stages.length) {
    errors.push("skills/ICARUS.md: no stage table found (expected headers # | Stage | Skills)");
    return { errors, warnings, stages, index: new Map() };
  }
  const index = new Map();
  const seen = new Map();
  for (const stage of stages) {
    for (const name of stage.skills) {
      if (!onDisk.includes(name)) errors.push(`skills/ICARUS.md stage ${stage.id} names '${name}' but skills/${name} is missing`);
      if (seen.has(name)) errors.push(`'${name}' appears in stage ${seen.get(name)} and stage ${stage.id}`);
      else {
        seen.set(name, stage.id);
        index.set(name, stage.id);
      }
    }
  }
  for (const name of manifest)
    if (!index.has(name)) errors.push(`'${name}' is in the manifest but in no skills/ICARUS.md stage`);

  const readme = readReadmeStages(root);
  if (readme.length) {
    for (const stage of stages) {
      const mirror = readme.find((r) => r.id === stage.id);
      if (!mirror) warnings.push(`README.md flow table is missing stage ${stage.id}`);
      else if (mirror.skills.join(",") !== stage.skills.join(","))
        warnings.push(`README.md stage ${stage.id} lists different skills from skills/ICARUS.md`);
    }
  }
  return { errors, warnings, stages, index };
}
