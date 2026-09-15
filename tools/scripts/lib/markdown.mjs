/**
 * A small markdown renderer, built for this repo's markdown and nothing else.
 *
 * Covers what the hub actually uses: ATX headings, paragraphs, fenced code,
 * pipe tables, ordered / unordered / task lists (with nesting), blockquotes,
 * thematic breaks, and the inline set (bold, italic, inline code, links,
 * autolinks). Everything else passes through as escaped text.
 *
 * Two Icarus-specific touches, both opt-in through `opts`:
 *   - `linkFor(name)` turns a backticked skill name into a link.
 *   - claim tags [Fact] / [Assumption] / [Hypothesis] become tag bars.
 */

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };

export function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

const TAG_RE = /\[(Fact|Assumption|Hypothesis)\]/g;

/** Split text on fenced code blocks so block scanners never look inside one. */
function* scanLines(md) {
  const lines = md.split("\n");
  let fence = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const open = /^\s{0,3}(`{3,}|~{3,})(.*)$/.exec(line);
    if (fence) {
      if (open && open[1][0] === fence[0] && open[1].length >= fence.length && !open[2].trim())
        fence = null;
      yield { i, line, inFence: true };
      continue;
    }
    if (open) {
      fence = open[1];
      yield { i, line, inFence: true };
      continue;
    }
    yield { i, line, inFence: false };
  }
}

/**
 * Split a markdown document into sections at the given heading level.
 * Fence-aware: a `## ` inside a code block never starts a section.
 * Returns `[{heading, level, md}]`; text before the first heading comes back
 * with `heading: null`.
 */
export function splitSections(md, level = 2) {
  const marker = new RegExp(`^#{${level}}\\s+(.*)$`);
  const out = [];
  let current = { heading: null, level, lines: [] };
  for (const { line, inFence } of scanLines(md)) {
    const m = inFence ? null : marker.exec(line);
    if (m) {
      out.push(current);
      current = { heading: m[1].trim(), level, lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  out.push(current);
  return out
    .map((s) => ({ heading: s.heading, level: s.level, md: s.lines.join("\n").trim() }))
    .filter((s) => s.heading !== null || s.md);
}

function splitRow(line) {
  const trimmed = line.trim().replace(/^\|/, "").replace(/\|$/, "");
  const cells = [];
  let cur = "";
  let tick = false;
  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (c === "`") tick = !tick;
    if (c === "\\" && trimmed[i + 1] === "|") {
      cur += "|";
      i++;
      continue;
    }
    if (c === "|" && !tick) {
      cells.push(cur.trim());
      cur = "";
      continue;
    }
    cur += c;
  }
  cells.push(cur.trim());
  return cells;
}

const isDivider = (line) => /^\s*\|?\s*:?-{1,}:?\s*(\|\s*:?-{1,}:?\s*)*\|?\s*$/.test(line) && line.includes("-");

/**
 * Every pipe table in a document, as `{headers, rows}` of raw cell markdown.
 * Used by the build to classify tables by their header row rather than by the
 * heading above them, which drifts.
 */
export function parseTables(md) {
  const lines = [];
  for (const { line, inFence } of scanLines(md)) lines.push(inFence ? "" : line);
  const out = [];
  for (let i = 0; i < lines.length - 1; i++) {
    if (!lines[i].includes("|") || !isDivider(lines[i + 1])) continue;
    const headers = splitRow(lines[i]);
    if (headers.length < 2) continue;
    const rows = [];
    let j = i + 2;
    for (; j < lines.length && lines[j].includes("|") && lines[j].trim(); j++)
      rows.push(splitRow(lines[j]));
    out.push({ headers, rows });
    i = j - 1;
  }
  return out;
}

/** Plain text from an inline markdown string: no tags, no markers. */
export function stripInline(md) {
  return String(md)
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/_([^_]*)_/g, "$1")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function renderInline(src, opts) {
  const out = [];
  let text = "";
  const flushText = () => {
    if (!text) return;
    let html = escapeHtml(text);
    if (opts.tagClaims)
      html = html.replace(TAG_RE, (_, kind) => `<span class="tag tag-${kind.toLowerCase()}">${kind}</span>`);
    out.push(html);
    text = "";
  };

  for (let i = 0; i < src.length; i++) {
    const rest = src.slice(i);

    const code = /^`([^`]+)`/.exec(rest);
    if (code) {
      flushText();
      const name = code[1];
      const href = opts.linkFor ? opts.linkFor(name) : null;
      const el = `<code>${escapeHtml(name)}</code>`;
      out.push(href ? `<a class="skill-ref" href="${escapeHtml(href)}">${el}</a>` : el);
      i += code[0].length - 1;
      continue;
    }

    const link = /^\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/.exec(rest);
    if (link) {
      flushText();
      const href = opts.resolveLink ? opts.resolveLink(link[2]) : link[2];
      const external = /^https?:/.test(href);
      out.push(
        `<a href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>` +
          `${renderInline(link[1], opts)}</a>`,
      );
      i += link[0].length - 1;
      continue;
    }

    const auto = /^<(https?:\/\/[^>]+)>/.exec(rest);
    if (auto) {
      flushText();
      out.push(`<a href="${escapeHtml(auto[1])}" target="_blank" rel="noopener noreferrer">${escapeHtml(auto[1])}</a>`);
      i += auto[0].length - 1;
      continue;
    }

    const strong = /^\*\*([^\s*][\s\S]*?)\*\*/.exec(rest);
    if (strong) {
      flushText();
      out.push(`<strong>${renderInline(strong[1], opts)}</strong>`);
      i += strong[0].length - 1;
      continue;
    }

    const em = /^\*([^\s*][\s\S]*?)\*(?!\*)/.exec(rest);
    if (em) {
      flushText();
      out.push(`<em>${renderInline(em[1], opts)}</em>`);
      i += em[0].length - 1;
      continue;
    }

    // Underscore emphasis only outside a word, so snake_case identifiers
    // (cost_per_outcome, method_fidelity) survive intact.
    const atWordStart = i === 0 || !/[A-Za-z0-9_]/.test(src[i - 1]);
    const under = atWordStart ? /^_([^\s_][^_]*?)_(?![A-Za-z0-9_])/.exec(rest) : null;
    if (under) {
      flushText();
      out.push(`<em>${renderInline(under[1], opts)}</em>`);
      i += under[0].length - 1;
      continue;
    }

    text += src[i];
  }
  flushText();
  return out.join("");
}

function slugify(s) {
  return stripInline(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

const LIST_ITEM = /^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/;

function renderBlocks(lines, opts) {
  const out = [];
  let i = 0;

  const paragraph = (buf) => {
    if (!buf.length) return;
    out.push(`<p>${renderInline(buf.join(" ").trim(), opts)}</p>`);
  };

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    const fence = /^\s{0,3}(`{3,}|~{3,})\s*([\w-]*)\s*$/.exec(line);
    if (fence) {
      const close = fence[1][0];
      const body = [];
      i++;
      while (i < lines.length) {
        const c = /^\s{0,3}(`{3,}|~{3,})\s*$/.exec(lines[i]);
        if (c && c[1][0] === close) {
          i++;
          break;
        }
        body.push(lines[i]);
        i++;
      }
      const lang = fence[2] ? ` data-lang="${escapeHtml(fence[2])}"` : "";
      out.push(`<pre${lang}><code>${escapeHtml(body.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      const id = opts.headingIds === false ? "" : ` id="${escapeHtml(opts.idPrefix || "")}${slugify(text)}"`;
      out.push(`<h${level}${id}>${renderInline(text, opts)}</h${level}>`);
      i++;
      continue;
    }

    if (/^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      out.push("<hr>");
      i++;
      continue;
    }

    if (line.includes("|") && i + 1 < lines.length && isDivider(lines[i + 1])) {
      const headers = splitRow(line);
      const rows = [];
      i += 2;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      const head = headers.map((h) => `<th>${renderInline(h, opts)}</th>`).join("");
      const body = rows
        .map((r) => `<tr>${r.map((c) => `<td>${renderInline(c, opts)}</td>`).join("")}</tr>`)
        .join("");
      out.push(`<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`);
      continue;
    }

    if (/^\s{0,3}>/.test(line)) {
      const body = [];
      while (i < lines.length && (/^\s{0,3}>/.test(lines[i]) || (lines[i].trim() && body.length))) {
        body.push(lines[i].replace(/^\s{0,3}>\s?/, ""));
        i++;
      }
      out.push(`<blockquote>${renderBlocks(body, opts)}</blockquote>`);
      continue;
    }

    const item = LIST_ITEM.exec(line);
    if (item) {
      const baseIndent = item[1].length;
      const ordered = /\d/.test(item[2]);
      const items = [];
      let buf = null;
      while (i < lines.length) {
        const m = LIST_ITEM.exec(lines[i]);
        if (m && m[1].length <= baseIndent) {
          if (/\d/.test(m[2]) !== ordered && m[1].length === baseIndent) break;
          if (buf) items.push(buf);
          buf = [m[3]];
          i++;
          continue;
        }
        if (!buf) break;
        if (!lines[i].trim()) {
          const next = lines[i + 1] || "";
          const nextItem = LIST_ITEM.exec(next);
          const continues = next.trim() && (nextItem ? nextItem[1].length > baseIndent : /^\s{2,}/.test(next));
          if (!continues) break;
          buf.push("");
          i++;
          continue;
        }
        const indented = /^\s{2,}/.test(lines[i]);
        const nested = LIST_ITEM.exec(lines[i]);
        if (!indented && !nested) {
          buf.push(lines[i].trim()); // lazy continuation
          i++;
          continue;
        }
        if (!indented) break;
        buf.push(lines[i].replace(/^ {1,4}/, ""));
        i++;
      }
      if (buf) items.push(buf);
      const rendered = items
        .map((raw) => {
          const task = /^\[([ xX])\]\s+(.*)$/.exec(raw[0] || "");
          const lines2 = task ? [task[2], ...raw.slice(1)] : raw;
          const inner = renderBlocks(lines2, opts).trim();
          // Unwrap the leading paragraph so a short item is not a block of its own.
          const lead = /^<p>((?:(?!<\/p>)[\s\S])*)<\/p>\n?([\s\S]*)$/.exec(inner);
          const content = lead ? lead[1] + (lead[2] ? `\n${lead[2]}` : "") : inner;
          if (task)
            return `<li class="task"><span class="box${task[1] === " " ? "" : " done"}"></span>${content}</li>`;
          return `<li>${content}</li>`;
        })
        .join("");
      out.push(ordered ? `<ol>${rendered}</ol>` : `<ul>${rendered}</ul>`);
      continue;
    }

    const buf = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^\s{0,3}(`{3,}|~{3,})/.test(lines[i]) &&
      !/^\s{0,3}>/.test(lines[i]) &&
      !LIST_ITEM.test(lines[i]) &&
      !/^\s{0,3}(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i]) &&
      !(lines[i].includes("|") && isDivider(lines[i + 1] || ""))
    ) {
      buf.push(lines[i]);
      i++;
    }
    if (buf.length) {
      paragraph(buf);
      continue;
    }
    i++;
  }

  return out.join("\n");
}

/**
 * Render markdown to HTML.
 *
 * opts:
 *   linkFor(name)      backticked name -> href, or null to leave it as code
 *   resolveLink(href)  rewrite a link target (repo paths -> routes or GitHub)
 *   tagClaims          wrap [Fact]/[Assumption]/[Hypothesis] in tag bars
 *   headingIds         false to skip heading ids; idPrefix to namespace them
 */
export function renderMarkdown(md, opts = {}) {
  if (!md || !md.trim()) return "";
  return renderBlocks(String(md).replace(/\r\n/g, "\n").split("\n"), opts);
}

export { slugify };
