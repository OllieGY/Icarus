#!/usr/bin/env node
/**
 * Smoke-test the built site in a real browser.
 *
 * Visits every route, asserts each one renders without console errors, checks
 * that every internal link resolves, and lints the rendered page against the
 * brand rules (no rounded corners, no shadows, no gradients, no pure black).
 * Screenshots a handful of pages at desktop and phone width.
 *
 * Usage:
 *   node tools/scripts/smoke-site.mjs                     file:// (default)
 *   node tools/scripts/smoke-site.mjs http://localhost:8080/
 *   node tools/scripts/smoke-site.mjs --shots <dir>
 */

import path from "node:path";
import fs from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const args = process.argv.slice(2);
const shotIndex = args.indexOf("--shots");
const SHOTS = shotIndex === -1 ? null : args[shotIndex + 1];
const baseArg = args.find((a) => /^https?:/.test(a));
const BASE = baseArg || pathToFileURL(path.join(ROOT, "site", "index.html")).href;

const require = createRequire("/opt/node22/lib/node_modules/");
let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("playwright is not available on this machine — skipping the browser smoke test");
  process.exit(0);
}

const failures = [];
const fail = (m) => failures.push(m);

const BRAND_LINT = () => {
  const bad = [];
  const seen = new Set();
  const SKIP = new Set(["HTML", "HEAD", "META", "TITLE", "LINK", "SCRIPT", "STYLE", "BASE"]);
  for (const el of document.querySelectorAll("body, body *")) {
    if (SKIP.has(el.tagName)) continue;
    const s = getComputedStyle(el);
    if (s.display === "none" || s.visibility === "hidden") continue;
    const where = el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.split(" ")[0] : "");
    const note = (rule) => {
      const key = rule + "|" + where;
      if (seen.has(key)) return;
      seen.add(key);
      bad.push(rule + " on " + where);
    };
    for (const corner of ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]) {
      const v = s[corner];
      // Circles are the one allowed round form in the brand geometry.
      if (v && v !== "0px" && v !== "50%") note("border-radius " + v);
    }
    if (s.boxShadow && s.boxShadow !== "none") note("box-shadow");
    if (s.textShadow && s.textShadow !== "none") note("text-shadow");
    if (s.backgroundImage && s.backgroundImage.includes("gradient")) note("gradient");
    if (s.color === "rgb(0, 0, 0)" && el.textContent.trim()) note("pure black text");
    if (s.backgroundColor === "rgb(0, 0, 0)") note("pure black background");
    for (const side of ["Top", "Right", "Bottom", "Left"])
      if (parseFloat(s["border" + side + "Width"]) > 0 && s["border" + side + "Color"] === "rgb(0, 0, 0)")
        note("pure black border");
  }
  return bad;
};

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(String(e)));
page.on("requestfailed", (r) => errors.push(`request failed: ${r.url()}`));

async function go(hash) {
  errors.length = 0;
  await page.goto(BASE + hash, { waitUntil: "load" });
  await page.waitForFunction(() => window.__icarus && window.__icarus.ready(), null, { timeout: 15000 }).catch(() => {});
  const state = await page.evaluate(() => ({
    h1: document.querySelector("main h1")?.textContent || null,
    view: document.querySelector("main")?.getAttribute("data-view") || null,
    loading: !!document.querySelector("main .loading"),
    error: document.querySelector("main .error")?.textContent || null,
    links: [...document.querySelectorAll('a[href^="#/"]')].map((a) => a.getAttribute("href")),
    title: document.title,
  }));
  if (errors.length) fail(`${hash}: console/page errors — ${[...new Set(errors)].join(" | ")}`);
  if (!state.h1) fail(`${hash}: no h1 rendered`);
  if (state.loading) fail(`${hash}: still loading after wait`);
  if (state.error) fail(`${hash}: error panel — ${state.error.slice(0, 120)}`);
  return state;
}

// 1. Home, then every route the app declares.
await page.goto(BASE + "#/", { waitUntil: "load" });
const routes = await page.evaluate(() => window.__icarus.routes());
console.log(`routes to visit: ${routes.length}`);

const allLinks = new Set();
let visited = 0;
for (const hash of routes) {
  const state = await go(hash);
  state.links.forEach((l) => allLinks.add(l));
  visited++;
  if (visited % 50 === 0) console.log(`  ${visited}/${routes.length}…`);
}
console.log(`visited ${visited} routes, collected ${allLinks.size} distinct internal links`);

// 2. Every internal link the pages actually render must resolve.
await page.goto(BASE + "#/", { waitUntil: "load" });
const unresolved = await page.evaluate(
  (links) => links.filter((l) => !window.__icarus.resolve(l)),
  [...allLinks],
);
if (unresolved.length) fail(`unresolved links: ${unresolved.slice(0, 10).join(", ")}${unresolved.length > 10 ? ` (+${unresolved.length - 10})` : ""}`);

// 3. A route that does not exist must land on the not-found view, not blow up.
const missing = await go("#/skill/does-not-exist");
if (!/no such page/i.test(missing.h1 || "")) fail("#/skill/does-not-exist did not render the not-found view");

// 4. The prompt composer names the skill and carries the user's text.
await page.goto(BASE + "#/skill/evidence-ladder/use", { waitUntil: "load" });
await page.waitForSelector("main textarea");
await page.fill("main textarea", "Forty landing-page sign-ups and two supervisors who love the alerts.");
const composed = await page.evaluate(() => document.querySelectorAll("main pre.copy-body")[document.querySelectorAll("main pre.copy-body").length - 1].textContent);
if (!composed.includes("`evidence-ladder`")) fail("composer does not name the skill");
if (!composed.includes("Forty landing-page sign-ups")) fail("composer drops the user's situation");
if (!composed.includes("GOLDEN_RULES.md")) fail("composer does not point at the rules");
if (/rungs do not stack|money moved 1\.0/i.test(composed)) fail("composer restates the skill's method instead of invoking it");

// 5. Search finds a known skill.
await page.goto(BASE + "#/search?q=evidence", { waitUntil: "load" });
const found = await page.evaluate(() => [...document.querySelectorAll("main .result-title")].map((a) => a.textContent));
if (!found.includes("evidence-ladder")) fail(`search for "evidence" did not return evidence-ladder`);

// 6. Brand lint and layout at both widths.
for (const [width, height, name] of [
  [1440, 900, "desktop"],
  [400, 800, "phone"],
]) {
  await page.setViewportSize({ width, height });
  for (const hash of ["#/", "#/stage/04", "#/skill/evidence-ladder/method", "#/skill/evidence-ladder/harness", "#/lessons", "#/contribute"]) {
    await go(hash);
    const bad = await page.evaluate(BRAND_LINT);
    if (bad.length) fail(`${hash} @${width}: brand — ${[...new Set(bad)].slice(0, 6).join("; ")}`);
    const overflow = await page.evaluate(() => ({
      doc: document.documentElement.scrollWidth,
      win: window.innerWidth,
    }));
    if (overflow.doc > overflow.win + 1) fail(`${hash} @${width}: horizontal overflow (${overflow.doc} > ${overflow.win})`);
    if (SHOTS) {
      fs.mkdirSync(SHOTS, { recursive: true });
      const slug = hash.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") || "home";
      await page.screenshot({ path: path.join(SHOTS, `${name}-${slug}.png`), fullPage: width === 1440 });
    }
  }
}

// 7. The nav must open on a phone.
await page.setViewportSize({ width: 400, height: 800 });
await page.goto(BASE + "#/", { waitUntil: "load" });
await page.click("#menu-toggle");
if (!(await page.isVisible("#nav"))) fail("nav does not open at 400px");

await browser.close();

if (failures.length) {
  for (const f of failures) console.error(`FAIL ${f}`);
  console.error(`\n${failures.length} failure(s).`);
  process.exit(1);
}
console.log(`\nOK — ${visited} routes, ${allLinks.size} links resolved, brand lint clean at 1440px and 400px`);
