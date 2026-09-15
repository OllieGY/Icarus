/* Icarus hub — router and views.
 *
 * A classic script on purpose: an ES module will not load over file://, and the
 * point of this build is that site/index.html opens from disk with no server.
 *
 * No method content lives in this file. Every sentence on the page comes from a
 * markdown file in the repo, rendered at build time into site/data (CLAUDE.md
 * rule 7 — compose the skills, do not restate them).
 */
(function () {
  "use strict";

  var DATA = window.ICARUS_DATA;
  var main = document.getElementById("main");
  var nav = document.getElementById("nav");
  var navGroups = document.getElementById("nav-groups");
  var searchInput = document.getElementById("search-input");
  var menuToggle = document.getElementById("menu-toggle");

  // ------------------------------------------------------------ DOM helpers

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs)
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v === null || v === undefined || v === false) return;
        if (k === "html") el.innerHTML = v;
        else if (k === "text") el.textContent = v;
        else if (k === "onclick") el.addEventListener("click", v);
        else el.setAttribute(k, v === true ? "" : String(v));
      });
    (Array.isArray(children) ? children : children ? [children] : []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }

  var frag = function (children) {
    var f = document.createDocumentFragment();
    (children || []).forEach(function (c) {
      if (c) f.appendChild(c);
    });
    return f;
  };

  /** Build-rendered HTML only. User input never reaches this. */
  function prose(html, cls) {
    return h("div", { class: "prose" + (cls ? " " + cls : ""), html: html || "" });
  }

  function label(text) {
    return h("p", { class: "section-label", text: text });
  }

  function skillLink(name, cls) {
    return h("a", { class: cls || "chip", href: "#/skill/" + name, text: name });
  }

  function refChip(ref) {
    return ref.local
      ? skillLink(ref.name)
      : h("span", { class: "chip external", title: "in the marketplace pack, not this hub", text: ref.name });
  }

  function githubLink(repoPath, text) {
    return h("a", {
      href: DATA.meta.blobUrl + "/" + repoPath,
      target: "_blank",
      rel: "noopener noreferrer",
      text: text || repoPath,
    });
  }

  function copyBlock(title, body) {
    var pre = h("pre", { class: "copy-body", text: body });
    var btn = h("button", {
      class: "btn",
      type: "button",
      onclick: function () {
        var done = function () {
          btn.textContent = "COPIED";
          setTimeout(function () {
            btn.textContent = "COPY";
          }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText)
          navigator.clipboard.writeText(body).then(done, function () {
            fallbackCopy(pre, done);
          });
        else fallbackCopy(pre, done);
      },
      text: "COPY",
    });
    return h("div", { class: "copy-block" }, [
      h("div", { class: "copy-head" }, [h("span", { class: "copy-title", text: title }), btn]),
      pre,
    ]);
  }

  function fallbackCopy(pre, done) {
    var range = document.createRange();
    range.selectNodeContents(pre);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
      if (document.execCommand("copy")) done();
    } catch (e) {
      /* selection is left for the reader to copy by hand */
    }
  }

  function statusDot(status, text) {
    return h("span", { class: "card-meta" }, [h("span", { class: "dot " + status }), h("span", { text: text })]);
  }

  // ------------------------------------------------------- per-skill loading

  var loaded = {};
  var pending = {};
  window.ICARUS_SKILL = function (name, detail) {
    loaded[name] = detail;
    if (pending[name]) {
      pending[name].forEach(function (cb) {
        cb(null, detail);
      });
      delete pending[name];
    }
  };

  function loadSkill(name, cb) {
    if (loaded[name]) return cb(null, loaded[name]);
    if (pending[name]) return pending[name].push(cb);
    pending[name] = [cb];
    var s = document.createElement("script");
    s.src = "data/skills/" + encodeURIComponent(name) + ".js";
    s.onerror = function () {
      var waiting = pending[name] || [];
      delete pending[name];
      waiting.forEach(function (fn) {
        fn(new Error("could not load data/skills/" + name + ".js"));
      });
    };
    document.head.appendChild(s);
  }

  // -------------------------------------------------------------- the router

  var ROUTES = [
    [/^\/?$/, viewHome],
    [/^\/stage\/([^/]+)$/, viewStage],
    [/^\/skill\/([^/]+)(?:\/([^/]+))?$/, viewSkill],
    [/^\/rules$/, viewRules],
    [/^\/agents$/, viewAgents],
    [/^\/commands$/, viewCommands],
    [/^\/lessons$/, viewLessons],
    [/^\/rebuilds$/, viewRebuilds],
    [/^\/rebuilds\/([^/]+)$/, viewRebuild],
    [/^\/contribute$/, viewContribute],
    [/^\/search$/, viewSearch],
  ];

  function parseHash(hash) {
    var raw = String(hash || "").replace(/^#/, "");
    var q = raw.indexOf("?");
    var query = {};
    if (q !== -1) {
      raw
        .slice(q + 1)
        .split("&")
        .forEach(function (pair) {
          if (!pair) return;
          var kv = pair.split("=");
          query[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1] || "").replace(/\+/g, " "));
        });
      raw = raw.slice(0, q);
    }
    for (var i = 0; i < ROUTES.length; i++) {
      var m = ROUTES[i][0].exec(raw);
      if (m)
        return {
          view: ROUTES[i][1],
          params: m.slice(1).map(function (p) {
            return p ? decodeURIComponent(p) : p;
          }),
          query: query,
          path: raw,
        };
    }
    return null;
  }

  function render() {
    var route = parseHash(window.location.hash);
    main.textContent = "";
    if (!route) {
      main.appendChild(viewNotFound());
      document.title = "Not found — Icarus";
    } else {
      main.setAttribute("data-view", route.view.name.replace(/^view/, "").toLowerCase());
      main.appendChild(route.view.apply(null, route.params.concat([route.query])));
    }
    window.scrollTo(0, 0);
    markCurrent();
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function markCurrent() {
    var here = window.location.hash.split("?")[0] || "#/";
    var parts = here.split("/");
    var base = parts.length > 3 && parts[1] === "skill" ? parts.slice(0, 3).join("/") : here;
    Array.prototype.forEach.call(navGroups.querySelectorAll("a"), function (a) {
      var target = a.getAttribute("href");
      if (target === base || target === here) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function setTitle(text) {
    document.title = text + " — Icarus";
  }

  function page(kicker, title, children) {
    setTitle(title);
    return frag(
      [
        kicker ? h("p", { class: "page-kicker", text: kicker }) : null,
        h("h1", { text: title }),
        h("div", { class: "rule-bar" }),
      ].concat(children || []),
    );
  }

  // ------------------------------------------------------------------- home

  function viewHome() {
    var c = DATA.meta.counts;
    var stats = [
      [c.graduated, "eval-gated skills"],
      [c.stages, "stages"],
      [c.goldenCases + c.adversarialCases, "test cases"],
      [c.lessons, "lessons logged"],
    ].map(function (s) {
      return h("div", {}, [h("div", { class: "stat-n", text: String(s[0]) }), h("div", { class: "stat-label", text: s[1] })]);
    });

    var flow = DATA.stages.map(function (stage) {
      return h("div", { class: "flow-row" }, [
        h("div", { class: "flow-head" }, [
          h("span", { class: "flow-num", text: stage.id }),
          h("a", { class: "flow-name", href: "#/stage/" + stage.id, text: stage.label }),
          stage.tagline ? h("span", { class: "flow-tag", text: stage.tagline }) : null,
        ]),
        h(
          "div",
          { class: "flow-skills" },
          stage.skills.map(function (n) {
            return h("a", { href: "#/skill/" + n, text: n });
          }),
        ),
      ]);
    });

    if (DATA.hubSkills.length)
      flow.push(
        h("div", { class: "flow-row hub" }, [
          h("div", { class: "flow-head" }, [
            h("span", { class: "flow-num", text: "—" }),
            h("span", { class: "flow-name", text: "Hub" }),
            h("span", { class: "flow-tag", text: "written here, in no stage" }),
          ]),
          h(
            "div",
            { class: "flow-skills" },
            DATA.hubSkills.map(function (n) {
              return h("a", { href: "#/skill/" + n, text: n });
            }),
          ),
        ]),
      );

    var maxWeight = DATA.ladder.reduce(function (a, r) {
      return Math.max(a, r.weight || 0);
    }, 1);

    return page(DATA.meta.plugin.name.toUpperCase() + " · v" + DATA.meta.plugin.version, "Find what to build, and why", [
      prose(DATA.method.oneLine, "lede"),
      h("div", { class: "stat-row" }, stats),
      label("Start here"),
      h("p", { class: "card-summary" }, [
        h("a", { href: "#/skill/fellow-path-router", text: "fellow-path-router" }),
        document.createTextNode(" decides which stages are yours. "),
        h("a", { href: "#/commands", text: "The three commands" }),
        document.createTextNode(" are the fastest way in."),
      ]),
      label("The flow"),
      h("div", { class: "flow" }, flow),
      label("The evidence ladder"),
      h(
        "div",
        { class: "ladder" },
        DATA.ladder.map(function (rung) {
          return h("div", { class: "ladder-row" }, [
            h("div", {}, [
              h("div", { class: "ladder-rung", text: rung.rung }),
              h("div", { class: "ladder-weight", text: rung.weight.toFixed(1) }),
            ]),
            h("div", {}, [
              h("div", { class: "ladder-bar-wrap" }, [
                h("span", { class: "ladder-bar", style: "width:" + Math.max(6, (rung.weight / maxWeight) * 100) + "%" }),
              ]),
              h("div", { class: "ladder-when", text: rung.countsWhen }),
            ]),
          ]);
        }),
      ),
      h("p", { class: "card-summary" }, [
        document.createTextNode("Rungs never stack. "),
        h("a", { href: "#/rules", text: "All ten rules" }),
        document.createTextNode("."),
      ]),
      label("Gate 6"),
      h("p", { class: "card-summary", text: c.gate6Pending + " of " + c.graduated + " skills still have real-use pending. Log uses on the contribute page." }),
      h("p", {}, [h("a", { class: "btn ghost", href: "#/contribute", text: "How the hub evolves" })]),
    ]);
  }

  // ------------------------------------------------------------------ stage

  function skillCard(name, opts) {
    var s = DATA.skills[name];
    if (!s) return null;
    var options = opts || {};
    var meta = [];
    if (s.harness.hasHarness) {
      meta.push(statusDot(s.harness.gate6 === "pass" ? "pass" : "pending", s.harness.passThreshold + " · gate 6 " + (s.harness.gate6 || "unrecorded")));
      meta.push(h("span", { class: "card-meta", text: s.harness.goldenCases + " golden · " + s.harness.adversarialCases + " adversarial" }));
    } else {
      meta.push(h("span", { class: "card-meta", text: "hub skill · no eval harness" }));
    }

    // One chip per sibling: several rows can route to the same place.
    var seen = {};
    var routes = [];
    if (options.handoffs !== false)
      s.handoffs.forEach(function (ho) {
        ho.useInstead.forEach(function (ref) {
          if (seen[ref.name]) return;
          seen[ref.name] = true;
          routes.push(ref);
        });
      });

    return h("div", { class: "card" }, [
      h("div", { class: "card-head" }, [
        h("a", { class: "card-name", href: "#/skill/" + name, text: name }),
        s.type ? h("span", { class: "card-type " + s.type, text: s.type }) : null,
      ]),
      h("p", { class: "card-summary", text: s.summary }),
      s.triggers.length
        ? h(
            "ul",
            { class: "triggers" },
            s.triggers.slice(0, 5).map(function (t) {
              return h("li", { text: t });
            }),
          )
        : null,
      routes.length
        ? h(
            "div",
            { class: "chips", style: "margin-top:16px" },
            [h("span", { class: "card-meta", text: "hands off to" })].concat(routes.map(refChip)),
          )
        : null,
      h("div", { class: "card-meta", style: "margin-top:8px" }, meta),
    ]);
  }

  function viewStage(id) {
    var stage = DATA.stages.filter(function (s) {
      return s.id === id;
    })[0];
    if (!stage) return viewNotFound();
    return page(
      "Stage " + stage.id,
      stage.label,
      [
        stage.tagline ? h("p", { class: "lede", text: stage.tagline }) : null,
        h("p", { class: "meta-line" }, [h("span", {}, [h("strong", { text: String(stage.skills.length) }), document.createTextNode(" skills, run in this order")])]),
        h(
          "div",
          { class: "cards" },
          stage.skills.map(function (n) {
            return skillCard(n);
          }),
        ),
        stageNav(stage),
      ],
    );
  }

  function stageNav(stage) {
    var i = DATA.stages.indexOf(stage);
    var prev = DATA.stages[i - 1];
    var next = DATA.stages[i + 1];
    return h("p", { class: "meta-line" }, [
      prev ? h("a", { href: "#/stage/" + prev.id, text: "← " + prev.id + " " + prev.label }) : null,
      next ? h("a", { href: "#/stage/" + next.id, text: next.id + " " + next.label + " →" }) : null,
    ]);
  }

  // ------------------------------------------------------------------ skill

  var TABS = [
    ["method", "Method"],
    ["template", "Template"],
    ["example", "Example"],
    ["harness", "Harness"],
    ["use", "Use"],
  ];

  function viewSkill(name, tab) {
    var s = DATA.skills[name];
    if (!s) return viewNotFound();
    var active = TABS.some(function (t) {
      return t[0] === tab;
    })
      ? tab
      : "method";

    var stage = s.stage
      ? DATA.stages.filter(function (x) {
          return x.id === s.stage;
        })[0]
      : null;

    var body = h("div", { class: "loading", text: "Loading " + name + "…" });

    var head = page(stage ? "Stage " + stage.id + " · " + stage.label : "Hub skill", name, [
      h("p", { class: "lede", text: s.summary }),
      h("p", { class: "meta-line" }, [
        s.type ? h("span", {}, [h("strong", { text: s.type })]) : null,
        s.supersedes && s.supersedes !== "none" ? h("span", { text: "supersedes " + s.supersedes }) : null,
        githubLink("skills/" + name + "/SKILL.md", "SKILL.md"),
      ]),
      h(
        "nav",
        { class: "tabs" },
        TABS.map(function (t) {
          return h("a", {
            class: "tab",
            href: "#/skill/" + name + "/" + t[0],
            "aria-current": t[0] === active ? "page" : null,
            text: t[1],
          });
        }),
      ),
      body,
    ]);

    loadSkill(name, function (err, detail) {
      body.textContent = "";
      body.className = "";
      if (err) {
        body.className = "error";
        body.appendChild(h("p", { text: "Could not load this skill's detail. Rebuild the site data with: node tools/scripts/build-site.mjs" }));
        return;
      }
      body.appendChild(renderSkillTab(active, s, detail));
    });

    return head;
  }

  function renderSkillTab(tab, s, detail) {
    if (tab === "template") return renderFile(detail.template, detail.files.template, "This skill ships no template.");
    if (tab === "example") return renderFile(detail.example, detail.files.example, "This skill ships no worked example.");
    if (tab === "harness") return renderHarness(s, detail);
    if (tab === "use") return renderUse(s, detail);
    return renderMethod(s, detail);
  }

  function renderFile(file, repoPath, emptyText) {
    if (!file) return h("p", { class: "empty", text: emptyText });
    return frag([
      h("p", { class: "meta-line" }, [githubLink(repoPath, repoPath)]),
      prose(file.html),
    ]);
  }

  function renderMethod(s, detail) {
    var parts = [];

    if (s.steps.length)
      parts.push(
        label("The method, in " + s.steps.length + " steps"),
        h(
          "ol",
          { class: "steps" },
          s.steps.map(function (step) {
            return h("li", {}, [
              h("a", { href: "#" + step.anchor, onclick: scrollToAnchor(step.anchor) }, [
                h("span", { class: "n", text: String(step.n) }),
                h("span", { text: step.label }),
              ]),
            ]);
          }),
        ),
      );

    detail.sections.forEach(function (section) {
      parts.push(prose("<h2>" + escapeText(section.heading) + "</h2>" + section.html));
    });

    if (s.related.length) {
      parts.push(label("Related"));
      parts.push(h("ul", { class: "chips" }, s.related.map(function (r) {
        return h("li", {}, [refChip(r)]);
      })));
    }
    return frag(parts);
  }

  function scrollToAnchor(id) {
    return function (e) {
      var target = main.querySelector("#" + CSS.escape(id));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ block: "start" });
    };
  }

  function renderHarness(s, detail) {
    if (!detail.results && !detail.rubric)
      return h("p", { class: "empty", text: "This skill is written for the hub and carries no eval harness." });

    var parts = [];
    var r = detail.results;

    if (r && r.judge.length) {
      parts.push(label("Graduation gates"));
      parts.push(
        h("div", { class: "table-wrap" }, [
          h("table", {}, [
            h("thead", {}, [h("tr", {}, [h("th", { text: "Gate" }), h("th", { text: "Result" }), h("th", { text: "Evidence" })])]),
            h(
              "tbody",
              {},
              r.judge.map(function (g) {
                return h("tr", {}, [
                  h("td", {}, [h("span", { class: "dot " + g.status }), document.createTextNode(" " + g.gate)]),
                  h("td", { class: "num", text: g.resultRaw }),
                  h("td", { html: g.evidenceHtml }),
                ]);
              }),
            ),
          ]),
        ]),
      );
    }

    if (r && r.scores) {
      parts.push(label("Golden set, scored"));
      parts.push(
        h("div", { class: "table-wrap" }, [
          h("table", {}, [
            h("thead", {}, [
              h(
                "tr",
                {},
                [h("th", { text: "Case" })]
                  .concat(
                    r.scores.columns.map(function (c) {
                      return h("th", { text: c });
                    }),
                  )
                  .concat([h("th", { text: "Total" }), h("th", { text: "Verdict" })]),
              ),
            ]),
            h(
              "tbody",
              {},
              r.scores.rows.map(function (row) {
                return h(
                  "tr",
                  {},
                  [h("td", { text: row.label })]
                    .concat(
                      row.dims.map(function (d) {
                        return h("td", { class: "num", text: String(d) });
                      }),
                    )
                    .concat([
                      h("td", { class: "num", text: String(row.total) + (row.arithmeticOk ? "" : " ?") }),
                      h("td", {}, [h("span", { class: "dot " + (row.pass ? "pass" : "fail") }), document.createTextNode(" " + row.verdictRaw)]),
                    ]),
                );
              }),
            ),
          ]),
        ]),
      );
    }

    if (r && r.dimensionScores.length) {
      parts.push(label("Scored by dimension"));
      parts.push(
        h("div", { class: "table-wrap" }, [
          h("table", {}, [
            h("thead", {}, [h("tr", {}, [h("th", { text: "Dimension" }), h("th", { text: "Score" }), h("th", { text: "Basis" })])]),
            h(
              "tbody",
              {},
              r.dimensionScores.map(function (d) {
                return h("tr", {}, [h("td", { text: d.id }), h("td", { class: "num", text: d.score }), h("td", { html: d.basisHtml })]);
              }),
            ),
          ]),
        ]),
      );
    }

    if (s.triggers.length || s.mustNotFire.length) {
      parts.push(label("Trigger precision"));
      if (s.triggers.length)
        parts.push(
          h("p", { class: "card-meta", text: "must fire on" }),
          h("ul", { class: "triggers" }, s.triggers.map(function (t) {
            return h("li", { text: t });
          })),
        );
      if (s.mustNotFire.length)
        parts.push(
          h("p", { class: "card-meta", style: "margin-top:16px", text: "must not fire on" }),
          h(
            "div",
            { class: "table-wrap" },
            h("table", {}, [
              h("thead", {}, [h("tr", {}, [h("th", { text: "Phrasing" }), h("th", { text: "Belongs to" })])]),
              h(
                "tbody",
                {},
                s.mustNotFire.map(function (m) {
                  return h("tr", {}, [
                    h("td", { text: m.phrase }),
                    h("td", {}, m.sibling ? [refChip({ name: m.sibling, local: m.local })] : []),
                  ]);
                }),
              ),
            ]),
          ),
        );
    }

    [
      ["golden", "Golden cases", detail.cases.golden],
      ["adversarial", "Adversarial cases", detail.cases.adversarial],
    ].forEach(function (group) {
      if (!group[2].length) return;
      parts.push(label(group[1] + " (" + group[2].length + ")"));
      group[2].forEach(function (c) {
        var inner = [];
        [c.input, c.expected].concat(c.fails, c.other).forEach(function (section) {
          if (!section) return;
          inner.push(prose("<h4>" + escapeText(section.heading) + "</h4>" + section.html));
        });
        parts.push(
          h("details", {}, [
            h("summary", {}, [
              document.createTextNode(c.title),
              c.venture ? h("span", { class: "case-meta", text: c.venture }) : null,
            ]),
            frag(inner),
          ]),
        );
      });
    });

    if (r && r.gotchasSurfaced) {
      parts.push(label("Gotchas the judge surfaced"));
      parts.push(prose(r.gotchasSurfaced));
    }
    if (r && r.refineNotes.length) {
      parts.push(label("Refine runs"));
      r.refineNotes.forEach(function (n) {
        parts.push(prose("<h4>" + escapeText(n.heading) + "</h4>" + n.html));
      });
    }

    if (detail.rubric) {
      parts.push(label("Rubric"));
      parts.push(
        h("p", { class: "meta-line", text: "Pass " + detail.rubric.pass_threshold + "/" + detail.rubric.max + ", no dimension below " + detail.rubric.min_per_dimension + "." }),
        h("div", { class: "table-wrap" }, [
          h("table", {}, [
            h("thead", {}, [h("tr", {}, [h("th", { text: "Dimension" }), h("th", { text: "Weight" }), h("th", { text: "Bar" })])]),
            h(
              "tbody",
              {},
              detail.rubric.dimensions.map(function (d) {
                return h("tr", {}, [h("td", { text: d.id }), h("td", { class: "num", text: String(d.weight) }), h("td", { text: d.desc })]);
              }),
            ),
          ]),
        ]),
        h("p", { class: "card-meta", text: "Auto-fail" }),
        h("ul", {}, detail.rubric.auto_fail.map(function (a) {
          return h("li", { text: a });
        })),
      );
    }

    if (r && r.html)
      parts.push(
        h("details", {}, [h("summary", { text: "Full eval log" }), prose(r.html)]),
        h("p", { class: "meta-line" }, [githubLink(detail.files.results || "", detail.files.results || "")]),
      );

    return frag(parts);
  }

  // --------------------------------------------------------------- use tab

  function composePrompt(name, situation) {
    var lines = [
      "Read GOLDEN_RULES.md first, then use the `" + name + "` skill on the situation below.",
      "",
      "Weight every signal on the evidence ladder by what people did, not what they said.",
      "Tag every empirical claim [Fact], [Assumption] or [Hypothesis].",
      "Invent no number, quote or citation. If I have given you no evidence, ask for it rather than scoring nothing.",
      "If this belongs to a sibling skill, say so and hand off instead of answering.",
      "",
      "---",
      "",
      situation && situation.trim() ? situation.trim() : "[describe where you are, what exists, and what evidence you actually hold]",
    ];
    return lines.join("\n");
  }

  function renderUse(s, detail) {
    var parts = [];
    var commands = DATA.commands.filter(function (c) {
      return c.skillsInvoked.indexOf(s.name) !== -1;
    });

    parts.push(label("Invoke it"));
    parts.push(copyBlock("in Claude Code", "Use the `" + s.name + "` skill on: "));
    commands.forEach(function (c) {
      parts.push(copyBlock("slash command", c.name + " " + (c.argumentHint || "")));
    });
    if (!commands.length && s.stage === "00") parts.push(copyBlock("slash command", "/icarus "));

    if (s.triggers.length) {
      parts.push(label("It fires on"));
      parts.push(
        h("ul", { class: "triggers" }, s.triggers.map(function (t) {
          return h("li", { text: t });
        })),
      );
    }

    parts.push(label("Compose a prompt"));
    var out = h("pre", { class: "copy-body", text: composePrompt(s.name, "") });
    var field = h("textarea", {
      placeholder: "Where you are, what exists, and what evidence you actually hold.",
      "aria-label": "Your situation",
    });
    field.addEventListener("input", function () {
      out.textContent = composePrompt(s.name, field.value);
    });
    var btn = h("button", {
      class: "btn",
      type: "button",
      onclick: function () {
        var text = out.textContent;
        var done = function () {
          btn.textContent = "COPIED";
          setTimeout(function () {
            btn.textContent = "COPY";
          }, 1400);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {
          fallbackCopy(out, done);
        });
        else fallbackCopy(out, done);
      },
      text: "COPY",
    });
    parts.push(field, h("div", { class: "copy-head", style: "margin-top:16px" }, [h("span", { class: "copy-title", text: "paste into Claude Code" }), btn]), out);

    if (s.handoffs.length) {
      parts.push(label("Not this skill?"));
      parts.push(
        h("div", { class: "table-wrap" }, [
          h("table", {}, [
            h("thead", {}, [h("tr", {}, [h("th", { text: "If you want" }), h("th", { text: "Use instead" })])]),
            h(
              "tbody",
              {},
              s.handoffs.map(function (ho) {
                return h("tr", {}, [
                  h("td", { text: ho.want }),
                  h("td", {}, [h("span", { class: "chips" }, ho.useInstead.map(refChip))]),
                ]);
              }),
            ),
          ]),
        ]),
      );
    }

    parts.push(label("Files"));
    var files = [];
    Object.keys(detail.files).forEach(function (k) {
      if (detail.files[k]) files.push(h("li", {}, [githubLink(detail.files[k], detail.files[k])]));
    });
    parts.push(h("ul", {}, files));
    return frag(parts);
  }

  // ------------------------------------------------------------- hub views

  function viewRules() {
    return page("The method", "Golden rules", [
      prose(DATA.rulesIntro, "lede"),
      frag(
        DATA.rules.map(function (r) {
          return h("section", {}, [
            h("p", { class: "section-label", text: "Rule " + r.n }),
            h("h2", { text: r.title, style: "font-size:24px;text-transform:none;letter-spacing:0" }),
            prose(r.html),
          ]);
        }),
      ),
      h("p", { class: "meta-line" }, [githubLink("GOLDEN_RULES.md", "GOLDEN_RULES.md")]),
    ]);
  }

  function viewAgents() {
    return page("The hub", "Agents", [
      frag(
        DATA.agents.map(function (a) {
          return h("section", {}, [
            h("p", { class: "section-label", text: a.name }),
            h("p", { class: "lede", text: a.description }),
            h("p", { class: "meta-line" }, [
              a.tools.length ? h("span", { text: "tools: " + a.tools.join(", ") }) : null,
              githubLink(a.path, a.path),
            ]),
            copyBlock("in Claude Code", "Use the " + a.name + " agent on: "),
            h("details", {}, [h("summary", { text: "System prompt" }), prose(a.html)]),
          ]);
        }),
      ),
      label("Persona packs"),
      DATA.personas.length
        ? frag(
            DATA.personas.map(function (p) {
              return h("section", {}, [
                h("p", { class: "section-label", text: p.name }),
                frag(
                  p.files.map(function (f) {
                    return h("details", {}, [h("summary", { text: f.name }), prose(f.html)]);
                  }),
                ),
              ]);
            }),
          )
        : h("p", { class: "empty", text: "None yet — the format is below." }),
      prose(DATA.contribute.personaFormat),
    ]);
  }

  function viewCommands() {
    return page("The hub", "Commands", [
      h("p", { class: "lede", text: "Three slash commands. Each one runs a skill with the golden rules already loaded." }),
      frag(
        DATA.commands.map(function (c) {
          return h("section", {}, [
            h("p", { class: "section-label", text: c.name }),
            h("p", { class: "card-summary", text: c.description }),
            copyBlock("run it", c.name + " " + (c.argumentHint || "")),
            c.skillsInvoked.length
              ? h("div", { class: "chips" }, [h("span", { class: "card-meta", text: "runs" })].concat(
                  c.skillsInvoked.map(function (n) {
                    return skillLink(n);
                  }),
                ))
              : null,
            h("details", {}, [h("summary", { text: "What it sends" }), prose(c.promptHtml)]),
            h("p", { class: "meta-line" }, [githubLink(c.path, c.path)]),
          ]);
        }),
      ),
    ]);
  }

  var FIELD_ORDER = [
    ["what", "What happened"],
    ["evidence", "Evidence"],
    ["cost", "Cost"],
    ["lesson", "Lesson"],
    ["changes", "Changes"],
  ];

  function viewLessons() {
    return page("Append-only", "Lessons", [
      h("p", { class: "lede", text: "What the studio learned the hard way, newest first. An entry earns its place by being specific, costly and actionable." }),
      frag(
        DATA.lessons.map(function (l) {
          var fields = FIELD_ORDER.filter(function (f) {
            return l.fields[f[0]];
          }).map(function (f) {
            return h("div", { class: "entry-field" + (f[0] === "changes" ? " changes" : "") }, [
              h("div", { class: "entry-field-label", text: f[1] }),
              prose(l.fields[f[0]]),
            ]);
          });
          return h("article", { class: "entry" }, [
            h("div", { class: "entry-date", text: l.date }),
            h("h2", { class: "entry-head", text: l.headline }),
            fields.length ? frag(fields) : prose(l.html),
            l.mentions.length
              ? h("div", { class: "chips" }, l.mentions.map(function (n) {
                  return skillLink(n);
                }))
              : null,
          ]);
        }),
      ),
      h("p", { class: "meta-line" }, [githubLink("lessons/LOG.md", "lessons/LOG.md")]),
      label("Logging one"),
      copyBlock("slash command", "/lesson "),
      prose(DATA.contribute.lessonTemplate),
    ]);
  }

  function viewRebuilds() {
    return page("Not graduated", "Rebuilds", [
      h("p", { class: "notice" }, [
        h("strong", { text: "Nothing here is loaded by the plugin. " }),
        document.createTextNode("These are candidate drafts. They ship no eval harness and have passed no gate."),
      ]),
      prose(DATA.rebuilds.intro, "lede"),
      h(
        "div",
        { class: "cards" },
        DATA.rebuilds.keepers.map(function (r) {
          return h("div", { class: "card" }, [
            h("div", { class: "card-head" }, [h("a", { class: "card-name", href: "#/rebuilds/" + r.name, text: r.name })]),
            r.triggerOneLine ? h("p", { class: "card-summary", text: r.triggerOneLine }) : null,
            r.foldOrNew ? h("div", { class: "card-meta" }, [h("span", { html: r.foldOrNew })]) : null,
          ]);
        }),
      ),
      DATA.rebuilds.skips.length
        ? frag([
            label("Skipped"),
            h("div", { class: "table-wrap" }, [
              h("table", {}, [
                h("thead", {}, [h("tr", {}, [h("th", { text: "Skill" }), h("th", { text: "Why" })])]),
                h(
                  "tbody",
                  {},
                  DATA.rebuilds.skips.map(function (s) {
                    return h("tr", {}, [h("td", { text: s.name }), h("td", { text: s.why })]);
                  }),
                ),
              ]),
            ]),
          ])
        : null,
      DATA.rebuilds.promote ? frag([label("How one graduates"), prose(DATA.rebuilds.promote)]) : null,
    ]);
  }

  function viewRebuild(name) {
    var r = DATA.rebuilds.keepers.filter(function (x) {
      return x.name === name;
    })[0];
    if (!r) return viewNotFound();
    return page("Rebuild · not graduated", name, [
      h("p", { class: "lede", text: r.description }),
      h("p", { class: "notice", text: "Candidate draft. No eval harness, no graduation. Rule 9 still holds: nothing enters folded or it does not enter." }),
      frag(
        r.sections.map(function (s) {
          return prose("<h2>" + escapeText(s.heading) + "</h2>" + s.html);
        }),
      ),
      r.origin.html ? frag([label("Origin"), prose(r.origin.html)]) : null,
      h("p", { class: "meta-line" }, [githubLink(r.path, r.path), h("a", { href: "#/rebuilds", text: "← all rebuilds" })]),
    ]);
  }

  // -------------------------------------------------------------- contribute

  function viewContribute() {
    var parts = [
      h("p", { class: "lede", text: "The hub is meant to grow. Everything new clears the same bar the 45 cleared." }),
      label("How a skill earns its place"),
      prose(DATA.contribute.earnsPlace),
      label("The six gates"),
      prose(DATA.contribute.gatesHtml),
      label("Fold or reject"),
      prose(DATA.contribute.foldHtml),
      label("Before every commit"),
      copyBlock("validate, then rebuild the site", "node tools/scripts/validate-skills.mjs\nnode tools/scripts/build-site.mjs"),
      label("Adding an agent or a persona"),
      prose(DATA.contribute.personaFormat),
      label("Logging a lesson"),
      prose(DATA.contribute.lessonTemplate),
      label("The tools"),
      prose(DATA.contribute.toolsHtml),
      DATA.contribute.hookHtml ? prose(DATA.contribute.hookHtml) : null,
      label("Gate 6 — real use"),
      h("p", { class: "card-summary", text: "Gate 6 completes in use. Paste your ~/.claude/skill-usage.log to see which skills actually fire. It stays in this browser and is sent nowhere." }),
    ];

    var out = h("div", {});
    var field = h("textarea", { placeholder: '{"ts":"…","skill":"evidence-ladder"}', "aria-label": "Skill usage log" });
    var clear = h("button", {
      class: "btn ghost",
      type: "button",
      onclick: function () {
        field.value = "";
        try {
          window.localStorage.removeItem("icarus-usage");
        } catch (e) {}
        out.textContent = "";
      },
      text: "CLEAR",
    });
    var run = h("button", {
      class: "btn",
      type: "button",
      onclick: function () {
        try {
          window.localStorage.setItem("icarus-usage", field.value);
        } catch (e) {}
        renderUsage(out, field.value);
      },
      text: "COUNT",
    });
    try {
      var saved = window.localStorage.getItem("icarus-usage");
      if (saved) {
        field.value = saved;
        renderUsage(out, saved);
      }
    } catch (e) {}

    parts.push(field, h("p", { class: "copy-head", style: "margin-top:16px" }, [run, clear]), out);
    parts.push(h("p", { class: "meta-line" }, [githubLink("CLAUDE.md", "CLAUDE.md"), githubLink("GOLDEN_RULES.md", "GOLDEN_RULES.md")]));
    return page("The hub", "Contribute", parts);
  }

  function parseUsageLog(text) {
    var counts = {};
    String(text || "")
      .split("\n")
      .forEach(function (line) {
        if (!line.trim()) return;
        var skill = null;
        try {
          skill = JSON.parse(line).skill;
        } catch (e) {
          var m = /"skill"\s*:\s*"([^"]+)"/.exec(line);
          skill = m ? m[1] : null;
        }
        if (skill) counts[skill] = (counts[skill] || 0) + 1;
      });
    return counts;
  }

  function renderUsage(container, text) {
    container.textContent = "";
    var counts = parseUsageLog(text);
    var names = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a];
    });
    if (!names.length) {
      container.appendChild(h("p", { class: "empty", text: "No skill entries found in that log." }));
      return;
    }
    var never = DATA.skillOrder.filter(function (n) {
      return !counts[n];
    });
    container.appendChild(
      h("div", { class: "table-wrap" }, [
        h("table", {}, [
          h("thead", {}, [h("tr", {}, [h("th", { text: "Skill" }), h("th", { text: "Fires" }), h("th", { text: "Gate 6" })])]),
          h(
            "tbody",
            {},
            names.map(function (n) {
              var known = !!DATA.skills[n];
              return h("tr", {}, [
                h("td", {}, known ? [skillLink(n, "")] : [document.createTextNode(n + " (not in this hub)")]),
                h("td", { class: "num", text: String(counts[n]) }),
                h("td", {}, [
                  h("span", { class: "dot " + (counts[n] >= 5 ? "pass" : "pending") }),
                  document.createTextNode(" " + Math.min(counts[n], 5) + "/5"),
                ]),
              ]);
            }),
          ),
        ]),
      ]),
    );
    container.appendChild(h("p", { class: "card-meta", text: never.length + " skills in this hub have not fired in that log." }));
  }

  // ----------------------------------------------------------------- search

  function viewSearch(query) {
    var q = String((query && query.q) || "").trim();
    var results = q ? searchFor(q) : [];
    setTitle(q ? "Search: " + q : "Search");
    return page("Search", q || "Search the hub", [
      h("p", { class: "meta-line", text: q ? results.length + " result" + (results.length === 1 ? "" : "s") : "Type in the field on the left." }),
      frag(
        results.map(function (r) {
          return h("div", { class: "result" }, [
            h("span", { class: "result-kind", text: r.kind + (r.stage ? " · stage " + r.stage : "") }),
            h("a", { class: "result-title", href: hrefForRef(r.ref), text: r.title }),
            r.subtitle ? h("p", { class: "result-sub", text: r.subtitle }) : null,
          ]);
        }),
      ),
    ]);
  }

  function hrefForRef(ref) {
    var i = ref.indexOf(":");
    var kind = ref.slice(0, i);
    var id = ref.slice(i + 1);
    if (kind === "skill") return "#/skill/" + id;
    if (kind === "rule") return "#/rules";
    if (kind === "agent") return "#/agents";
    if (kind === "command") return "#/commands";
    if (kind === "lesson") return "#/lessons";
    if (kind === "rebuild") return "#/rebuilds/" + id;
    return "#/";
  }

  function searchFor(q) {
    var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return DATA.search
      .map(function (entry) {
        var score = 0;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i];
          if (entry.title.toLowerCase().indexOf(t) !== -1) score += 10;
          if (entry.text.indexOf(t) === -1) return null;
          score += 1;
        }
        return { entry: entry, score: score };
      })
      .filter(Boolean)
      .sort(function (a, b) {
        return b.score - a.score;
      })
      .slice(0, 60)
      .map(function (r) {
        return r.entry;
      });
  }

  // -------------------------------------------------------------- not found

  function viewNotFound() {
    setTitle("Not found");
    return page("404", "No such page", [
      h("p", { class: "lede", text: "That route does not exist in this hub." }),
      h("p", {}, [h("a", { class: "btn ghost", href: "#/", text: "Back to the flow" })]),
    ]);
  }

  // ---------------------------------------------------------------- chrome

  function escapeText(s) {
    var d = document.createElement("div");
    d.textContent = String(s);
    return d.innerHTML;
  }

  function buildNav() {
    var groups = [];

    var stageGroup = h("div", { class: "nav-group" }, [h("div", { class: "nav-group-label", text: "The flow" })]);
    DATA.stages.forEach(function (s) {
      stageGroup.appendChild(
        h("a", { class: "nav-item", href: "#/stage/" + s.id }, [
          h("span", { class: "nav-num", text: s.id }),
          h("span", { text: s.label }),
          h("span", { class: "nav-count", text: String(s.skills.length) }),
        ]),
      );
    });
    groups.push(stageGroup);

    var hub = h("div", { class: "nav-group" }, [h("div", { class: "nav-group-label", text: "The hub" })]);
    [
      ["#/rules", "Golden rules", DATA.rules.length],
      ["#/agents", "Agents", DATA.agents.length],
      ["#/commands", "Commands", DATA.commands.length],
      ["#/lessons", "Lessons", DATA.lessons.length],
      ["#/rebuilds", "Rebuilds", DATA.rebuilds.keepers.length],
      ["#/contribute", "Contribute", null],
    ].forEach(function (item) {
      hub.appendChild(
        h("a", { class: "nav-item", href: item[0] }, [
          h("span", { class: "nav-num", text: "" }),
          h("span", { text: item[1] }),
          item[2] === null ? null : h("span", { class: "nav-count", text: String(item[2]) }),
        ]),
      );
    });
    groups.push(hub);

    if (DATA.hubSkills.length) {
      var extra = h("div", { class: "nav-group" }, [h("div", { class: "nav-group-label", text: "Written here" })]);
      DATA.hubSkills.forEach(function (n) {
        extra.appendChild(
          h("a", { class: "nav-item", href: "#/skill/" + n }, [h("span", { class: "nav-num", text: "" }), h("span", { text: n })]),
        );
      });
      groups.push(extra);
    }

    groups.forEach(function (g) {
      navGroups.appendChild(g);
    });

    var meta = document.getElementById("foot-meta");
    meta.textContent = DATA.meta.counts.graduated + " skills · v" + DATA.meta.plugin.version;
  }

  document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    goSearch();
  });
  var searchTimer = null;
  searchInput.addEventListener("input", function () {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(goSearch, 220);
  });
  function goSearch() {
    var q = searchInput.value.trim();
    if (!q) return;
    window.location.hash = "#/search?q=" + encodeURIComponent(q);
  }

  menuToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  window.addEventListener("hashchange", render);

  // Exposed so the smoke test can check that every link in the page resolves.
  window.__icarus = {
    resolve: function (hash) {
      var r = parseHash(hash);
      if (!r) return false;
      if (/^\/skill\//.test(r.path)) return !!DATA.skills[r.params[0]];
      if (/^\/stage\//.test(r.path))
        return DATA.stages.some(function (s) {
          return s.id === r.params[0];
        });
      if (/^\/rebuilds\/./.test(r.path))
        return DATA.rebuilds.keepers.some(function (s) {
          return s.name === r.params[0];
        });
      return true;
    },
    routes: function () {
      var out = ["#/", "#/rules", "#/agents", "#/commands", "#/lessons", "#/rebuilds", "#/contribute", "#/search?q=evidence"];
      DATA.stages.forEach(function (s) {
        out.push("#/stage/" + s.id);
      });
      DATA.skillOrder.forEach(function (n) {
        TABS.forEach(function (t) {
          out.push("#/skill/" + n + "/" + t[0]);
        });
      });
      DATA.rebuilds.keepers.forEach(function (r) {
        out.push("#/rebuilds/" + r.name);
      });
      return out;
    },
    ready: function () {
      return !main.querySelector(".loading");
    },
  };

  buildNav();
  if (!window.location.hash) window.location.replace("#/");
  render();
})();
