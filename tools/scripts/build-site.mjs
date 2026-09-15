#!/usr/bin/env node
/**
 * Build the Icarus hub front end.
 *
 * Reads the repo — stages, skills, harnesses, agents, commands, lessons,
 * rebuilds, the golden rules — and writes the data the static site renders:
 *
 *   site/data/index.js          the catalogue (window.ICARUS_DATA)
 *   site/data/skills/<name>.js  one file per skill, loaded on demand
 *
 * Nothing under skills/ is read for anything but its own content, and nothing
 * is written there. No method text lives in the site's HTML or JS: every word
 * on the page comes from a file in this repo (CLAUDE.md rule 7).
 *
 * Usage:
 *   node tools/scripts/build-site.mjs           write the site data
 *   node tools/scripts/build-site.mjs --check   fail if what is committed is stale
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readDocument, frontmatter, cleanScalar } from "./lib/frontmatter.mjs";
import { renderMarkdown, splitSections, parseTables, stripInline, slugify } from "./lib/markdown.mjs";
import { readStages, checkStages, backticked } from "./lib/stages.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const OUT = path.join(ROOT, "site", "data");
const CHECK = process.argv.includes("--check");
const REPO_URL = "https://github.com/OllieGY/icarus";
const BLOB = `${REPO_URL}/blob/main`;

const problems = [];
const fail = (m) => problems.push(m);
const read = (...p) => fs.readFileSync(path.join(ROOT, ...p), "utf8");
const exists = (...p) => fs.existsSync(path.join(ROOT, ...p));
const listDir = (...p) =>
  exists(...p) ? fs.readdirSync(path.join(ROOT, ...p), { withFileTypes: true }) : [];
const norm = (h) => String(h).toLowerCase().replace(/[^a-z0-9]/g, "");
const firstSentence = (text) => {
  const t = stripInline(text).replace(/\s+/g, " ").trim();
  const m = /^(.{20,400}?[.!?])\s/.exec(`${t} `);
  return m ? m[1] : t.slice(0, 220);
};

// ---------------------------------------------------------------- name index

const skillNames = listDir("skills")
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();
const isLocal = (name) => skillNames.includes(name);
const rebuildNames = new Set(
  listDir("rebuilds")
    .filter((d) => d.isDirectory())
    .map((d) => d.name),
);
const externalRefs = new Map();
const noteExternal = (name, from) => {
  if (!/^[a-z][a-z0-9-]*$/.test(name) || name.length < 4) return;
  if (!externalRefs.has(name)) externalRefs.set(name, new Set());
  externalRefs.get(name).add(from);
};

/** Markdown options: local skill names become links, repo paths become routes. */
function mdOptions(fromDir, source) {
  return {
    tagClaims: true,
    headingIds: false,
    linkFor(name) {
      if (isLocal(name)) return `#/skill/${name}`;
      if (source) noteExternal(name, source);
      return null;
    },
    resolveLink(href) {
      if (/^(https?:|mailto:|#)/.test(href)) return href;
      const clean = href.split("#")[0];
      if (!clean) return href;
      const rel = path.posix.normalize(path.posix.join(fromDir, clean)).replace(/^\.\//, "");
      const skill = /^skills\/([^/]+)\//.exec(rel);
      if (skill && isLocal(skill[1])) return `#/skill/${skill[1]}`;
      if (rel === "GOLDEN_RULES.md") return "#/rules";
      if (rel === "lessons/LOG.md" || rel === "lessons/TEMPLATE.md") return "#/lessons";
      const rebuild = /^rebuilds\/([^/]+)\/?/.exec(rel);
      if (rebuild && rebuildNames.has(rebuild[1])) return `#/rebuilds/${rebuild[1]}`;
      if (rel === "rebuilds" || rel.startsWith("rebuilds/")) return "#/rebuilds";
      if (rel === "agents" || rel.startsWith("agents/")) return "#/agents";
      if (rel === "commands" || rel.startsWith("commands/")) return "#/commands";
      return `${BLOB}/${rel}`;
    },
  };
}

const render = (md, fromDir, source) => renderMarkdown(md, mdOptions(fromDir, source));

// ------------------------------------------------------------ table helpers

/** The first table whose headers satisfy `match(normalisedHeaders)`. */
function findTable(md, match) {
  return parseTables(md).find((t) => match(t.headers.map(norm), t.headers)) || null;
}

const DIMENSIONS = ["method_fidelity", "artifact_complete", "proprietary_edge", "challenge", "evidence_standard"];

// ------------------------------------------------------------------- skills

/** Canonical section keys, matched on the heading text rather than position. */
const SECTION_KEYS = [
  ["what", /^what it does/i],
  ["reframe", /^the icarus reframe/i],
  ["when", /^when (to use|it fires)/i],
  ["method", /^method/i],
  ["evidence", /^evidence standard/i],
  ["gotchas", /^gotchas/i],
  ["examples", /^examples/i],
  ["related", /^related skills/i],
];

const keyFor = (heading) => (SECTION_KEYS.find(([, re]) => re.test(heading)) || [null])[0];

/**
 * The routing table inside "When to use / When NOT". Skills write it four ways
 * — "If the fellow wants… | Use instead", "Request | Belongs to",
 * "Situation | Use this? | Go to", "Use when the claim is | Do NOT use — route
 * to" — so find the column that names the destination rather than assuming one.
 * Whatever this misses is still on the page: the whole section is rendered.
 */
/** Some skills write the routing as bullets: "…— that is `probe-matrix`." */
function handoffBullets(md, source) {
  const out = [];
  for (const m of md.matchAll(/^\s*[-*]\s+(.*)$/gm)) {
    const line = m[1];
    const route = /(?:that is|use|see|route to|belongs to)\s+`([^`]+)`/i.exec(line);
    if (!route) continue;
    const want = stripInline(line.split(/—|--|\bthat is\b/i)[0]).replace(/[.,;\s]+$/, "");
    if (!want) continue;
    if (!isLocal(route[1])) noteExternal(route[1], source);
    out.push({
      want,
      useInstead: [{ name: route[1], local: isLocal(route[1]) }],
      useInsteadHtml: `<p><code>${route[1]}</code></p>`,
      why: null,
    });
  }
  return out;
}

const ROUTE_COL = /(useinstead|belongsto|goto|routeto|instead|usethis|donotuse)/;
const WANT_COL = /(fellowwants|notthis|request|situation|ask|usewhen|ifthe|want)/;

function extractHandoffs(md, dir, source) {
  const table = findTable(md, (h) => h.length >= 2 && (ROUTE_COL.test(h.slice(1).join("|")) || WANT_COL.test(h[0])));
  if (!table) return handoffBullets(md, source);
  const cols = table.headers.map(norm);
  const route = cols.findIndex((c, i) => i > 0 && ROUTE_COL.test(c) && !/^usethis/.test(c));
  const routeAt = route === -1 ? 1 : route;
  const gate = cols.findIndex((c) => /^usethis/.test(c));
  const whyAt = [1, 2, 3].find((i) => i !== routeAt && i !== gate && i < cols.length);
  const opts = mdOptions(dir, source);

  return table.rows
    .filter((r) => stripInline(r[0] || "").length > 1)
    .filter((r) => gate === -1 || !/^yes/i.test(stripInline(r[gate] || "")))
    .map((r) => {
      const cell = r[routeAt] || "";
      const names = backticked(cell);
      // Some tables name the destination without backticks; accept it when it
      // resolves to a skill that actually exists.
      if (!names.length)
        for (const m of stripInline(cell).matchAll(/\b([a-z][a-z0-9]*(?:-[a-z0-9]+)+)\b/g))
          if (isLocal(m[1]) && !names.includes(m[1])) names.push(m[1]);
      return {
        want: stripInline(r[0]),
        useInstead: [...new Set(names)].map((name) => {
          if (!isLocal(name)) noteExternal(name, source);
          return { name, local: isLocal(name) };
        }),
        useInsteadHtml: renderMarkdown(cell, opts),
        why: whyAt !== undefined && r[whyAt] ? stripInline(r[whyAt]) : null,
      };
    })
    .filter((h) => h.useInstead.length || h.why);
}

/**
 * An index of the Method's steps. Skills write them three ways: `### Step N`,
 * a bold lead on a paragraph, or a bold lead on an ordered-list item.
 * The Method HTML is always rendered in full; this is navigation only.
 */
function extractSteps(md) {
  if (!md) return [];
  const label = (s) => stripInline(s).replace(/\s*[.:]\s*$/, "").trim();
  const heads = splitSections(md, 3)
    .filter((s) => s.heading && /^(step|part|station|layer|phase|round)\s+\d+/i.test(s.heading))
    .map((s) => s.heading);
  if (heads.length) return heads.map((h, n) => ({ n: n + 1, label: label(h), anchor: slugify(h) }));

  const bold = [...md.matchAll(/^\s*(?:\d{1,2}[.)]\s+)?\*\*((?:step|part|layer|phase|round)\s+\d+[^*]*)\*\*/gim)].map(
    (m) => m[1],
  );
  if (bold.length) return bold.map((h, n) => ({ n: n + 1, label: label(h), anchor: slugify(h) }));

  const items = [...md.matchAll(/^\s*\d{1,2}[.)]\s+\*\*([^*]+)\*\*/gm)].map((m) => m[1]);
  return items.map((h, n) => ({ n: n + 1, label: label(h), anchor: slugify(h) }));
}

/** Inject ids on the method's own headings so the step index can scroll to them. */
function anchorHeadings(html) {
  return html.replace(/<h([34])>([\s\S]*?)<\/h\1>/g, (whole, level, inner) => {
    const id = slugify(stripInline(inner.replace(/<[^>]*>/g, "")));
    return id ? `<h${level} id="${id}">${inner}</h${level}>` : whole;
  });
}

// ------------------------------------------------------------- RESULTS.md

const statusOf = (result) => {
  const t = stripInline(result || "").toLowerCase();
  if (/^n\/?a\b|^not applicable/.test(t)) return "na";
  if (/\bpending\b|\bnot run\b/.test(t)) return "pending";
  if (/^fail|\bfail\b(?!ure)/.test(t)) return "fail";
  if (/pass|✓|✔|yes/.test(t)) return "pass";
  return "unknown";
};

/**
 * Parse an eval log. Tables are classified by their header row, never by the
 * heading above them: the headings drift across the 45 files, the columns do not.
 * Whatever a parser misses is still reachable as the rendered full log.
 */
function parseResults(md, dir, source) {
  const opts = mdOptions(dir, source);
  const out = {
    gate1: { mustFire: [], mustNotFire: [] },
    judge: [],
    scores: null,
    dimensionScores: [],
    runs: [],
    gotchasSurfaced: "",
    refineNotes: [],
    killLine: "",
    html: renderMarkdown(md, opts),
  };

  for (const t of parseTables(md)) {
    const h = t.headers.map(norm);
    const totalAt = h.findIndex((c) => /^total/.test(c));
    if (h[0] === "gate" && h[1] === "result") {
      out.judge = t.rows
        .filter((r) => stripInline(r[0] || ""))
        .map((r) => ({
          gate: stripInline(r[0]),
          resultRaw: stripInline(r[1] || ""),
          status: statusOf(r[1]),
          evidenceHtml: renderMarkdown(r[2] || "", opts),
        }));
    } else if (totalAt >= 5 && /^(case|golden|$|#)/.test(h[0])) {
      const dimStart = totalAt - 5;
      out.scores = {
        columns: t.headers.slice(dimStart, totalAt).map((c) => stripInline(c)),
        rows: t.rows
          .filter((r) => r.length > totalAt && /\d/.test(r[totalAt] || ""))
          .map((r) => {
            const dims = r.slice(dimStart, totalAt).map((c) => Number.parseInt(stripInline(c), 10));
            const total = Number.parseInt(stripInline(r[totalAt]), 10);
            const label = stripInline([r[0], r[1]].filter(Boolean).join(" ").trim());
            return {
              label,
              dims,
              total,
              verdictRaw: stripInline(r[totalAt + 1] || ""),
              pass: statusOf(r[totalAt + 1] || "") === "pass",
              arithmeticOk: dims.every(Number.isFinite) && dims.reduce((a, b) => a + b, 0) === total,
            };
          }),
      };
      if (!out.scores.rows.length) out.scores = null;
    } else if (h[0] === "dimension" && h.some((c) => /^score/.test(c))) {
      const iScore = h.findIndex((c) => /^score/.test(c));
      out.dimensionScores = t.rows.map((r) => ({
        id: stripInline(r[0]),
        score: stripInline(r[iScore] || ""),
        basisHtml: renderMarkdown(r[iScore + 1] || "", opts),
      }));
    } else if (h[0] === "date" && h[1] === "gate") {
      out.runs = t.rows.map((r) => r.map((c) => stripInline(c)));
    }
  }

  for (const section of splitSections(md, 2)) {
    if (!section.heading) continue;
    if (/^gate 1\b/i.test(section.heading)) {
      let bucket = null;
      for (const line of section.md.split("\n")) {
        if (/must not fire/i.test(line)) bucket = "not";
        else if (/must fire/i.test(line)) bucket = "fire";
        const item = /^\s*\d{1,2}[.)]\s+(.*)$/.exec(line);
        if (!item || !bucket) continue;
        const text = item[1];
        if (bucket === "fire") {
          const phrase = stripInline(text).replace(/^["“”']|["“”']$/g, "").trim();
          if (phrase) out.gate1.mustFire.push(phrase);
        } else {
          const arrow = /(?:→|->)\s*(?:belongs to\s*)?`([^`]+)`/.exec(text);
          const phrase = stripInline(text.split(/→|->/)[0]).replace(/^["“”']|["“”']$/g, "").trim();
          if (arrow && !isLocal(arrow[1])) noteExternal(arrow[1], source);
          if (phrase)
            out.gate1.mustNotFire.push({
              phrase,
              sibling: arrow ? arrow[1] : null,
              local: arrow ? isLocal(arrow[1]) : false,
            });
        }
      }
    }
    if (/kill[- ]line/i.test(section.heading)) out.killLine = renderMarkdown(section.md, opts);
  }

  // Walk H3s inside each H2 rather than across the file, so a trailing H2 is
  // not swept into the last H3's body.
  const seen = new Set();
  for (const top of splitSections(md, 2)) {
    const blocks = [{ heading: top.heading, md: top.md }].concat(
      splitSections(top.md, 3).filter((s) => s.heading),
    );
    for (const block of blocks) {
      if (!block.heading) continue;
      if (/^gotchas surfaced/i.test(block.heading) && !out.gotchasSurfaced)
        out.gotchasSurfaced = renderMarkdown(splitSections(top.md, 3).find((s) => s.heading === block.heading).md, opts);
      if (/^(refine run|verdict|scored run)/i.test(block.heading) && !seen.has(block.heading)) {
        seen.add(block.heading);
        const body = block.heading === top.heading ? top.md : block.md;
        out.refineNotes.push({ heading: block.heading, html: renderMarkdown(body, opts) });
      }
    }
  }
  return out;
}

// ----------------------------------------------------------- test cases

const VENTURES = /\b(Azraq|Mentix|Barrier|Durian)\b/i;

function parseCase(file, kind, dir, source) {
  const md = fs.readFileSync(file, "utf8");
  const opts = mdOptions(dir, source);
  const title = /^#\s+(?:Golden|Adversarial)\s*(\d+)?\s*(?:—|-|–)?\s*(.*)$/im.exec(md);
  const sections = splitSections(md, 2)
    .filter((s) => s.heading)
    .map((s) => ({ heading: s.heading, html: renderMarkdown(s.md, opts) }));
  const pick = (re) => sections.find((s) => re.test(s.heading)) || null;
  const heading = title ? stripInline(title[2] || "") : "";
  return {
    kind,
    n: title && title[1] ? Number.parseInt(title[1], 10) : Number.parseInt(path.basename(file, ".md"), 10),
    title: heading || path.basename(file, ".md"),
    venture: VENTURES.test(heading) ? VENTURES.exec(heading)[1] : null,
    input: pick(/^input/i),
    expected: pick(/^(expected|required behaviour)/i),
    fails: sections.filter((s) => /^(auto-fail|fail|pass\s*\/\s*fail|pass\b)/i.test(s.heading)),
    other: sections.filter(
      (s) => !/^(input|expected|required behaviour|auto-fail|fail|pass\s*\/\s*fail|pass\b)/i.test(s.heading),
    ),
    file: path.relative(ROOT, file),
  };
}

// --------------------------------------------------------------- one skill

function buildSkill(name, stageId) {
  const dir = `skills/${name}`;
  const doc = readDocument(path.join(ROOT, dir, "SKILL.md"));
  if (!doc) {
    fail(`${dir}/SKILL.md has no frontmatter`);
    return null;
  }
  const fm = doc.data;
  const body = doc.body.replace(/^#\s+[^\n]*\n/, ""); // the H1 repeats the name
  const sections = splitSections(body, 2)
    .filter((s) => s.heading)
    .map((s) => ({
      heading: s.heading,
      key: keyFor(s.heading),
      slug: slugify(s.heading),
      html: render(s.md, dir, name),
    }));
  const byKey = (k) => sections.find((s) => s.key === k) || null;
  const rawSection = (k) => {
    const found = splitSections(body, 2).find((s) => s.heading && keyFor(s.heading) === k);
    return found ? found.md : "";
  };

  const methodMd = rawSection("method");
  const steps = extractSteps(methodMd);
  const method = byKey("method");
  if (method) method.html = anchorHeadings(method.html);

  const whatSection = byKey("what");
  const description = cleanScalar(fm.description);
  const related = [...new Set(backticked(rawSection("related")))]
    .filter((n) => n !== name)
    .map((n) => {
      if (!isLocal(n)) noteExternal(n, name);
      return { name: n, local: isLocal(n) };
    });

  const harnessDir = path.join(ROOT, dir, "tests");
  const hasHarness = fs.existsSync(path.join(harnessDir, "rubric.json"));
  let results = null;
  let rubric = null;
  const cases = { golden: [], adversarial: [] };
  if (hasHarness) {
    try {
      rubric = JSON.parse(fs.readFileSync(path.join(harnessDir, "rubric.json"), "utf8"));
    } catch (e) {
      fail(`${dir}/tests/rubric.json does not parse — ${e.message}`);
    }
    const resultsPath = path.join(harnessDir, "RESULTS.md");
    if (fs.existsSync(resultsPath)) results = parseResults(fs.readFileSync(resultsPath, "utf8"), dir, name);
    for (const kind of ["golden", "adversarial"]) {
      const caseDir = path.join(harnessDir, kind);
      if (!fs.existsSync(caseDir)) continue;
      cases[kind] = fs
        .readdirSync(caseDir)
        .filter((f) => f.endsWith(".md"))
        .sort()
        .map((f) => parseCase(path.join(caseDir, f), kind, dir, name));
    }
  }

  const gate6 = results?.judge.find((g) => /real[- ]use|^6\b/i.test(g.gate)) || null;
  const gate2 = results?.judge.find((g) => /golden|^2\b/i.test(g.gate)) || null;

  const summary = {
    name,
    description,
    type: cleanScalar(fm.type) || null,
    supersedes: cleanScalar(fm.supersedes) || null,
    stage: stageId,
    hub: !stageId,
    summary: whatSection ? firstSentence(rawSection("what")) : firstSentence(description),
    triggers: results ? results.gate1.mustFire : [],
    mustNotFire: results ? results.gate1.mustNotFire : [],
    handoffs: extractHandoffs(rawSection("when"), dir, name),
    related,
    steps,
    gotchaHeadlines: [...rawSection("gotchas").matchAll(/^\s*[-*]\s+\*\*([^*]+)\*\*/gm)].map((m) =>
      stripInline(m[1]).replace(/\s*[.:]$/, ""),
    ),
    harness: {
      hasHarness,
      gates: results ? results.judge.map((g) => ({ gate: g.gate, status: g.status })) : [],
      goldenResult: gate2 ? gate2.resultRaw : null,
      gate6: gate6 ? gate6.status : null,
      goldenCases: cases.golden.length,
      adversarialCases: cases.adversarial.length,
      passThreshold: rubric ? `${rubric.pass_threshold}/${rubric.max}` : null,
    },
  };

  const readIf = (file) =>
    exists(dir, file) ? { html: render(read(dir, file), dir, name), path: `${dir}/${file}` } : null;

  const detail = {
    name,
    sections,
    template: readIf("template.md"),
    example: readIf("examples/sample.md"),
    rubric,
    results,
    cases,
    files: {
      skill: `${dir}/SKILL.md`,
      template: exists(dir, "template.md") ? `${dir}/template.md` : null,
      example: exists(dir, "examples/sample.md") ? `${dir}/examples/sample.md` : null,
      rubric: hasHarness ? `${dir}/tests/rubric.json` : null,
      results: hasHarness && exists(dir, "tests/RESULTS.md") ? `${dir}/tests/RESULTS.md` : null,
    },
  };

  return { summary, detail };
}

// ------------------------------------------------------- the rest of the hub

function buildAgents() {
  return listDir("agents")
    .filter((d) => d.isFile() && d.name.endsWith(".md") && d.name !== "README.md")
    .map((d) => {
      const doc = readDocument(path.join(ROOT, "agents", d.name));
      if (!doc) {
        fail(`agents/${d.name} has no frontmatter`);
        return null;
      }
      return {
        name: cleanScalar(doc.data.name) || path.basename(d.name, ".md"),
        description: cleanScalar(doc.data.description),
        tools: doc.data.tools ? cleanScalar(doc.data.tools).split(/\s*,\s*/) : [],
        model: doc.data.model ? cleanScalar(doc.data.model) : null,
        html: render(doc.body, "agents", `agents/${d.name}`),
        path: `agents/${d.name}`,
      };
    })
    .filter(Boolean);
}

function buildPersonas() {
  return listDir("agents/personas")
    .filter((d) => d.isDirectory())
    .map((d) => ({
      name: d.name,
      files: listDir("agents/personas", d.name)
        .filter((f) => f.isFile() && f.name.endsWith(".md"))
        .map((f) => ({
          name: f.name,
          html: render(read("agents/personas", d.name, f.name), `agents/personas/${d.name}`, d.name),
        })),
    }));
}

function buildCommands() {
  return listDir("commands")
    .filter((d) => d.isFile() && d.name.endsWith(".md") && d.name !== "README.md")
    .map((d) => {
      const doc = readDocument(path.join(ROOT, "commands", d.name));
      if (!doc) {
        fail(`commands/${d.name} has no frontmatter`);
        return null;
      }
      const invoked = [...new Set(backticked(doc.body))].filter(isLocal);
      return {
        name: `/${path.basename(d.name, ".md")}`,
        description: cleanScalar(doc.data.description),
        argumentHint: doc.data["argument-hint"] ? cleanScalar(doc.data["argument-hint"]).replace(/^"|"$/g, "") : null,
        promptHtml: render(doc.body, "commands", `commands/${d.name}`),
        promptRaw: doc.body.trim(),
        skillsInvoked: invoked,
        path: `commands/${d.name}`,
      };
    })
    .filter(Boolean);
}

const FIELD_LABELS = [
  ["what", /^what happened/i],
  ["evidence", /^evidence/i],
  ["cost", /^cost/i],
  ["lesson", /^lesson/i],
  ["changes", /^changes/i],
];

function buildLessons() {
  const md = read("lessons", "LOG.md");
  const opts = mdOptions("lessons", "lessons/LOG.md");
  return splitSections(md, 3)
    .filter((s) => s.heading && /^\d{4}-\d{2}-\d{2}/.test(s.heading))
    .map((s) => {
      const dash = s.heading.indexOf("—");
      const fields = {};
      for (const m of s.md.matchAll(/\*\*([^*]+?)\.?\*\*\s*([\s\S]*?)(?=\n\s*\n\*\*|\n\s*---|$)/g)) {
        const key = (FIELD_LABELS.find(([, re]) => re.test(m[1])) || [])[0];
        if (key) fields[key] = renderMarkdown(m[2].trim(), opts);
      }
      return {
        date: s.heading.slice(0, 10),
        headline: stripInline(dash === -1 ? s.heading : s.heading.slice(dash + 1)),
        fields,
        html: renderMarkdown(s.md.replace(/^\s*---\s*$/gm, ""), opts),
        mentions: [...new Set(backticked(s.md))].filter(isLocal),
      };
    });
}

function buildRebuilds() {
  const readmeMd = read("rebuilds", "README.md");
  const readmeOpts = mdOptions("rebuilds", "rebuilds/README.md");
  const keepersTable = findTable(readmeMd, (h) => h[0] === "folder");
  const skipsTable = findTable(readmeMd, (h) => /^builderskill|^skill$/.test(h[0]));
  const rowFor = (name) =>
    keepersTable?.rows.find((r) => backticked(r[0]).includes(name) || stripInline(r[0]) === name) || null;

  const keepers = listDir("rebuilds")
    .filter((d) => d.isDirectory())
    .map((d) => {
      const dir = `rebuilds/${d.name}`;
      const doc = readDocument(path.join(ROOT, dir, "SKILL.md"));
      if (!doc) {
        fail(`${dir}/SKILL.md has no frontmatter`);
        return null;
      }
      const sections = splitSections(doc.body.replace(/^#\s+[^\n]*\n/, ""), 2)
        .filter((s) => s.heading)
        .map((s) => ({ heading: s.heading, html: render(s.md, dir, d.name) }));
      const status = sections.find((s) => /^status/i.test(s.heading));
      const origin = {};
      if (exists(dir, "ORIGIN.md")) {
        const originMd = read(dir, "ORIGIN.md");
        const opts = mdOptions(dir, d.name);
        for (const m of originMd.matchAll(/\*\*([^*]+?)\.?\*\*\s*([\s\S]*?)(?=\n\s*\n\*\*|$)/g)) {
          const label = norm(m[1]);
          const key = label.startsWith("kept") ? "kept" : label.startsWith("changed") ? "changed" : label.startsWith("fold") ? "foldOrNew" : null;
          if (key) origin[key] = renderMarkdown(m[2].trim(), opts);
        }
        origin.html = render(originMd, dir, d.name);
      }
      const row = rowFor(d.name);
      return {
        name: d.name,
        description: cleanScalar(doc.data.description),
        sections,
        statusText: status ? stripInline(status.html.replace(/<[^>]*>/g, " ")) : null,
        triggerOneLine: row ? stripInline(row[1] || "") : null,
        foldOrNew: row ? renderMarkdown(row[2] || "", readmeOpts) : null,
        origin,
        path: `${dir}/SKILL.md`,
      };
    })
    .filter(Boolean);

  return {
    intro: render(splitSections(readmeMd, 2)[0].md.replace(/^#\s+[^\n]*\n/, ""), "rebuilds", "rebuilds/README.md"),
    promote: (splitSections(readmeMd, 2).find((s) => s.heading && /^how to promote/i.test(s.heading)) || { md: "" }).md
      ? render(
          splitSections(readmeMd, 2).find((s) => /^how to promote/i.test(s.heading)).md,
          "rebuilds",
          "rebuilds/README.md",
        )
      : "",
    keepers,
    skips: skipsTable
      ? skipsTable.rows.map((r) => ({ name: stripInline(r[0]), why: stripInline(r[1] || "") }))
      : [],
  };
}

function buildRules() {
  const md = read("GOLDEN_RULES.md");
  const opts = mdOptions(".", "GOLDEN_RULES.md");
  const sections = splitSections(md, 2).filter((s) => s.heading);
  const rules = sections
    .filter((s) => /^rule\s+\d+/i.test(s.heading))
    .map((s) => {
      const m = /^rule\s+(\d+)\s*(?:—|-|–)\s*(.*)$/i.exec(s.heading);
      return { n: Number.parseInt(m[1], 10), title: stripInline(m[2]), html: renderMarkdown(s.md, opts) };
    });
  const ladderTable = findTable(md, (h) => h[0] === "rung" && h[1] === "weight");
  const ladder = ladderTable
    ? ladderTable.rows.map((r) => ({
        rung: stripInline(r[0]),
        weight: Number.parseFloat(stripInline(r[1])),
        countsWhen: stripInline(r[2] || ""),
        impostor: stripInline(r[3] || ""),
      }))
    : [];
  const intro = splitSections(md, 2)[0];
  return {
    rules,
    ladder,
    intro: renderMarkdown(intro.md.replace(/^#\s+[^\n]*\n/, ""), opts),
    ruleFor: (n) => rules.find((r) => r.n === n),
  };
}

function buildContribute(rules) {
  const readmeMd = read("README.md");
  const readmeOpts = mdOptions(".", "README.md");
  const section = (md, re, opts) => {
    const found = splitSections(md, 2).find((s) => s.heading && re.test(s.heading));
    return found ? renderMarkdown(found.md, opts) : "";
  };
  const toolsMd = read("tools", "README.md");
  const toolsOpts = mdOptions("tools", "tools/README.md");
  return {
    earnsPlace: section(readmeMd, /^how a skill earns its place/i, readmeOpts),
    gatesHtml: rules.ruleFor(7)?.html || "",
    foldHtml: rules.ruleFor(9)?.html || "",
    stayInScope: rules.ruleFor(5)?.html || "",
    lessonTemplate: render(read("lessons", "TEMPLATE.md"), "lessons", "lessons/TEMPLATE.md"),
    personaFormat: render(read("agents", "README.md"), "agents", "agents/README.md"),
    toolsHtml: section(toolsMd, /^in this repo/i, toolsOpts),
    hookHtml: section(toolsMd, /^wiring the usage hook|^connectors/i, toolsOpts),
    sourcesHtml: render(read("skills", "SOURCES.md").split("\n## ")[0], "skills", "skills/SOURCES.md"),
    operatingRules: render(read("CLAUDE.md").replace(/^#\s+[^\n]*\n/, ""), ".", "CLAUDE.md"),
  };
}

// ------------------------------------------------------------------- build

const stageCheck = checkStages(ROOT, JSON.parse(read("tools", "scripts", "icarus-skills.json")), skillNames);
for (const m of stageCheck.errors) fail(`stages: ${m}`);

const stages = readStages(ROOT);
const icarusMd = read("skills", "ICARUS.md");
const icarusSections = splitSections(icarusMd, 2);
const icarusOpts = mdOptions("skills", "skills/ICARUS.md");
const sectionHtml = (re) => {
  const found = icarusSections.find((s) => s.heading && re.test(s.heading));
  return found ? renderMarkdown(found.md, icarusOpts) : "";
};

const skills = {};
const details = new Map();
const skillOrder = [];
for (const stage of stages) {
  for (const name of stage.skills) {
    if (!isLocal(name)) continue;
    const built = buildSkill(name, stage.id);
    if (!built) continue;
    skills[name] = built.summary;
    details.set(name, built.detail);
    skillOrder.push(name);
  }
}
for (const name of skillNames) {
  if (skills[name]) continue;
  const built = buildSkill(name, null);
  if (!built) continue;
  skills[name] = built.summary;
  details.set(name, built.detail);
  skillOrder.push(name);
}

const rules = buildRules();
const agents = buildAgents();
const commands = buildCommands();
const lessons = buildLessons();
const rebuilds = buildRebuilds();
const personas = buildPersonas();
const contribute = buildContribute(rules);
const plugin = JSON.parse(read(".claude-plugin", "plugin.json"));

const sourcesMd = read("skills", "SOURCES.md").replace(/\s+/g, " ");
const sourceRepo = /`(https:\/\/github\.com\/[^`]+)`\s*at commit\s*`([0-9a-f]{7,40})`/.exec(sourcesMd);

const search = [];
for (const name of skillOrder) {
  const s = skills[name];
  search.push({
    ref: `skill:${name}`,
    kind: "skill",
    title: name,
    stage: s.stage,
    subtitle: s.summary,
    text: [name, s.description, s.summary, s.triggers.join(" "), s.gotchaHeadlines.join(" "), s.handoffs.map((h) => h.want).join(" ")]
      .join(" ")
      .toLowerCase(),
  });
}
for (const r of rules.rules)
  search.push({ ref: `rule:${r.n}`, kind: "rule", title: `Rule ${r.n} — ${r.title}`, subtitle: "", text: `rule ${r.n} ${r.title} ${stripInline(r.html.replace(/<[^>]*>/g, " "))}`.toLowerCase() });
for (const a of agents)
  search.push({ ref: `agent:${a.name}`, kind: "agent", title: a.name, subtitle: firstSentence(a.description), text: `${a.name} ${a.description}`.toLowerCase() });
for (const c of commands)
  search.push({ ref: `command:${c.name}`, kind: "command", title: c.name, subtitle: c.description, text: `${c.name} ${c.description} ${c.skillsInvoked.join(" ")}`.toLowerCase() });
for (const l of lessons)
  search.push({ ref: `lesson:${l.date}`, kind: "lesson", title: l.headline, subtitle: l.date, text: `${l.date} ${l.headline} ${stripInline(l.html.replace(/<[^>]*>/g, " "))}`.toLowerCase() });
for (const r of rebuilds.keepers)
  search.push({ ref: `rebuild:${r.name}`, kind: "rebuild", title: r.name, subtitle: r.triggerOneLine || firstSentence(r.description), text: `${r.name} ${r.description}`.toLowerCase() });

const catalogue = {
  meta: {
    schemaVersion: 1,
    plugin: { name: plugin.name, version: plugin.version, description: plugin.description },
    repoUrl: REPO_URL,
    blobUrl: BLOB,
    source: sourceRepo ? { repo: sourceRepo[1], commit: sourceRepo[2].slice(0, 8) } : null,
    counts: {
      skills: skillOrder.length,
      graduated: skillOrder.filter((n) => skills[n].harness.hasHarness).length,
      hub: skillOrder.filter((n) => skills[n].hub).length,
      stages: stages.length,
      agents: agents.length,
      commands: commands.length,
      lessons: lessons.length,
      rebuilds: rebuilds.keepers.length,
      goldenCases: skillOrder.reduce((a, n) => a + skills[n].harness.goldenCases, 0),
      adversarialCases: skillOrder.reduce((a, n) => a + skills[n].harness.adversarialCases, 0),
      gate6Pending: skillOrder.filter((n) => skills[n].harness.gate6 === "pending").length,
    },
  },
  method: {
    oneLine: sectionHtml(/^the method, in one line/i),
    howGated: sectionHtml(/^how each skill is built and gated/i),
    flowNote: sectionHtml(/^the flow/i),
  },
  stages: stages.map((s) => ({ ...s, skills: s.skills.filter(isLocal) })),
  skills,
  skillOrder,
  hubSkills: skillOrder.filter((n) => skills[n].hub),
  external: Object.fromEntries(
    [...externalRefs.entries()]
      .filter(([name]) => !isLocal(name))
      .sort()
      .map(([name, from]) => [name, { referencedBy: [...from].sort() }]),
  ),
  rules: rules.rules,
  rulesIntro: rules.intro,
  ladder: rules.ladder,
  agents,
  personas,
  commands,
  lessons,
  rebuilds,
  contribute,
  search,
};

// ------------------------------------------------------------------- write

const stringify = (value) => JSON.stringify(value, null, 1);
const files = new Map();
files.set(path.join(OUT, "index.js"), `window.ICARUS_DATA = ${stringify(catalogue)};\n`);
for (const [name, detail] of details)
  files.set(path.join(OUT, "skills", `${name}.js`), `window.ICARUS_SKILL(${JSON.stringify(name)}, ${stringify(detail)});\n`);

const expected = new Set([...files.keys()].map((f) => path.relative(ROOT, f)));
const present = new Set();
if (fs.existsSync(OUT))
  for (const dir of [OUT, path.join(OUT, "skills")])
    if (fs.existsSync(dir))
      for (const f of fs.readdirSync(dir))
        if (f.endsWith(".js")) present.add(path.relative(ROOT, path.join(dir, f)));

const stale = [];
for (const [file, content] of files) {
  const rel = path.relative(ROOT, file);
  const current = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  if (current === content) continue;
  stale.push(rel);
  if (!CHECK) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, content);
  }
}
const orphans = [...present].filter((f) => !expected.has(f));
for (const f of orphans) if (!CHECK) fs.unlinkSync(path.join(ROOT, f));

// ----------------------------------------------------------------- report

const gateTables = skillOrder.filter((n) => details.get(n).results?.judge.length).length;
const scoreTables = skillOrder.filter((n) => details.get(n).results?.scores).length;
const dimTables = skillOrder.filter((n) => details.get(n).results?.dimensionScores.length).length;
const noSteps = skillOrder.filter((n) => !skills[n].steps.length);
const noTriggers = skillOrder.filter((n) => skills[n].harness.hasHarness && !skills[n].triggers.length);
const noHandoffs = skillOrder.filter((n) => skills[n].harness.hasHarness && !skills[n].handoffs.length);

const c = catalogue.meta.counts;
console.log(`stages:     ${c.stages}`);
console.log(`skills:     ${c.skills} (${c.graduated} graduated, ${c.hub} hub)`);
console.log(`cases:      ${c.goldenCases} golden + ${c.adversarialCases} adversarial`);
console.log(`results:    ${gateTables}/${c.graduated} gate tables, ${scoreTables} score tables, ${dimTables} dimension tables`);
console.log(`parsed:     steps ${c.skills - noSteps.length}/${c.skills}, triggers ${c.graduated - noTriggers.length}/${c.graduated}, hand-offs ${c.graduated - noHandoffs.length}/${c.graduated}`);
console.log(`hub:        ${c.agents} agents, ${personas.length} personas, ${c.commands} commands, ${c.lessons} lessons, ${c.rebuilds} rebuilds`);
console.log(`external:   ${Object.keys(catalogue.external).length} marketplace siblings referenced`);
for (const list of [
  ["no method steps parsed", noSteps],
  ["no trigger phrasings parsed", noTriggers],
  ["no hand-off table parsed", noHandoffs],
])
  if (list[1].length) console.log(`warn        ${list[0]}: ${list[1].join(", ")}`);

for (const p of problems) console.error(`ERROR ${p}`);
if (problems.length) {
  console.error(`\n${problems.length} error(s).`);
  process.exit(1);
}

if (CHECK) {
  if (stale.length || orphans.length) {
    for (const f of stale) console.error(`ERROR stale: ${f}`);
    for (const f of orphans) console.error(`ERROR orphaned: ${f}`);
    console.error(`\nsite data is out of date — run: node tools/scripts/build-site.mjs`);
    process.exit(1);
  }
  console.log("\nsite data is up to date");
} else {
  const total = [...files.values()].reduce((a, s) => a + Buffer.byteLength(s), 0);
  console.log(
    `\nwrote ${files.size} files (${(total / 1024 / 1024).toFixed(2)} MB, catalogue ${(Buffer.byteLength(files.get(path.join(OUT, "index.js"))) / 1024).toFixed(0)} KB)` +
      `${stale.length ? `, ${stale.length} changed` : ", no changes"}${orphans.length ? `, ${orphans.length} removed` : ""}`,
  );
}
