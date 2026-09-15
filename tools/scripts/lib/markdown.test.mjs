/**
 * Renderer tests. Snippets are shaped like the real files in this repo —
 * folded frontmatter, hand-off tables with inline code and arrows, fenced
 * progress checklists, bold-led method steps, claim tags.
 *
 * Run: node --test tools/scripts/lib/
 */

import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderMarkdown, splitSections, parseTables, stripInline, escapeHtml } from "./markdown.mjs";
import { splitFrontmatter, parseBlock, cleanScalar, plainScalarErrors } from "./frontmatter.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..");

test("escapes html in text and code", () => {
  const html = renderMarkdown("A <script> & `a<b>`");
  assert.ok(!html.includes("<script>"));
  assert.ok(html.includes("&lt;script&gt;"));
  assert.ok(html.includes("<code>a&lt;b&gt;</code>"));
});

test("renders a hand-off table with inline code and arrows", () => {
  const md = [
    "| If the fellow wants… | Use instead |",
    "|---|---|",
    "| To pick which test to run next | `probe-matrix` — it picks the probe |",
  ].join("\n");
  const html = renderMarkdown(md, { linkFor: (n) => `#/skill/${n}` });
  assert.ok(html.includes("<table>"));
  assert.ok(html.includes("<th>If the fellow wants…</th>"));
  assert.ok(html.includes('href="#/skill/probe-matrix"'));
});

test("parseTables classifies by header row", () => {
  const md = [
    "## Judge run — run 1",
    "",
    "| Gate | Result | Evidence |",
    "|---|---|---|",
    "| 1 Trigger | PASS (5/5) | because |",
    "",
    "### Gate 2 — per-case scores",
    "",
    "| # | Case | method_fidelity | artifact_complete | proprietary_edge | challenge | evidence_standard | Total | Pass? |",
    "|---|---|---|---|---|---|---|---|---|",
    "| 01 | Mentix | 5 | 5 | 5 | 4 | 5 | 24 | PASS |",
  ].join("\n");
  const tables = parseTables(md);
  assert.equal(tables.length, 2);
  assert.deepEqual(tables[0].headers, ["Gate", "Result", "Evidence"]);
  assert.equal(tables[1].rows[0].at(-1), "PASS");
  assert.equal(tables[1].rows[0][7], "24");
});

test("a pipe inside inline code does not split a cell", () => {
  const [t] = parseTables("| A | B |\n|---|---|\n| `a \\| b` | two |");
  assert.equal(t.rows[0].length, 2);
});

test("fenced checklist survives verbatim and does not start sections", () => {
  const md = ["## Method", "", "```", "Progress:", "## not a heading", "- [ ] Step 1", "```", "", "## Gotchas", "", "text"].join("\n");
  const sections = splitSections(md, 2);
  assert.deepEqual(sections.map((s) => s.heading), ["Method", "Gotchas"]);
  const html = renderMarkdown(sections[0].md);
  assert.ok(html.includes("<pre"));
  assert.ok(html.includes("## not a heading"));
});

test("bold-led step paragraphs and claim tags", () => {
  const html = renderMarkdown("**Step 3 — Weight each claim.** A claim's weight is its best rung. [Assumption]", {
    tagClaims: true,
  });
  assert.ok(html.includes("<strong>Step 3 — Weight each claim.</strong>"));
  assert.ok(html.includes('class="tag tag-assumption"'));
});

test("nested and lazy list continuation", () => {
  const html = renderMarkdown("- one\n  continued here\n- two\n  - nested\n");
  assert.ok(html.includes("continued here"));
  assert.ok(html.includes("<ul><li>nested</li></ul>"));
});

test("folded frontmatter parses and cleans", () => {
  const raw = "---\nname: x\ndescription: >-\n  One line\n  and another\ntype: generator\n---\n\n# Body\n";
  const { block, body } = splitFrontmatter(raw);
  const data = parseBlock(block);
  assert.equal(cleanScalar(data.description), "One line and another");
  assert.equal(data.type, "generator");
  assert.ok(body.startsWith("# Body"));
});

test("plain scalar containing a colon-space is reported", () => {
  assert.equal(plainScalarErrors("---\ndescription: Output: a log of things\n---\n").length, 1);
  assert.equal(plainScalarErrors("---\ndescription: >-\n  Output: a log\n---\n").length, 0);
});

test("stripInline removes markers", () => {
  assert.equal(stripInline("**Bold** `code` [link](x) _em_"), "Bold code link em");
});

test("every markdown file in the repo renders without throwing", () => {
  const files = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name === ".git" || e.name === "node_modules" || e.name === "site") continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith(".md")) files.push(full);
    }
  };
  walk(ROOT);
  assert.ok(files.length > 300, `expected the repo's markdown, found ${files.length}`);
  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    const split = splitFrontmatter(raw);
    const body = split ? split.body : raw;
    const html = renderMarkdown(body, { tagClaims: true });
    const rel = path.relative(ROOT, file);
    assert.equal(html.includes("&lt;p&gt;"), false, `${rel}: double-escaped`);
    const sourceTables = parseTables(body).length;
    const renderedTables = (html.match(/<table>/g) || []).length;
    assert.equal(renderedTables, sourceTables, `${rel}: ${sourceTables} tables in source, ${renderedTables} rendered`);
    const outsideCode = html.replace(/<pre[\s\S]*?<\/pre>/g, "").replace(/<code>[\s\S]*?<\/code>/g, "");
    assert.equal(/\*\*\S/.test(outsideCode), false, `${rel}: unrendered bold leaked`);
  }
});

test("escapeHtml is total", () => {
  assert.equal(escapeHtml('<a href="x">&'), "&lt;a href=&quot;x&quot;&gt;&amp;");
});
