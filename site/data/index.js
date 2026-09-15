window.ICARUS_DATA = {
 "meta": {
  "schemaVersion": 1,
  "plugin": {
   "name": "icarus",
   "version": "0.1.0",
   "description": "Utopia Studio's Product Management hub. The 45 eval-gated Icarus skills, the golden rules they run on, starter agents, tools, and an append-only lessons log. Takes a raw idea from first-principles problem to a scored, pilot-ready v1."
  },
  "repoUrl": "https://github.com/OllieGY/icarus",
  "blobUrl": "https://github.com/OllieGY/icarus/blob/main",
  "source": {
   "repo": "https://github.com/The-Utopia-Studio/skills",
   "commit": "edc6b9f1"
  },
  "counts": {
   "skills": 47,
   "graduated": 45,
   "hub": 2,
   "stages": 11,
   "agents": 1,
   "commands": 3,
   "lessons": 3,
   "rebuilds": 7,
   "goldenCases": 225,
   "adversarialCases": 135,
   "gate6Pending": 41
  }
 },
 "method": {
  "oneLine": "<p>An idea earns the right to become a company by passing gates, not by sounding good. Evidence is weighted the same way everywhere — the <strong>evidence ladder</strong>: money moved 1.0 → behaviour 0.7 → artefact 0.5 → commitment 0.3 → opinion 0.1. A probe's job is to move a claim up that ladder.</p>",
  "howGated": "<p>Every skill ships an eval harness in its own <code>tests/</code> folder — five <code>golden/</code> cases from real fellow work (Azraq, Mentix, Barrier Intelligence, Durian), three <code>adversarial/</code> cases, a <code>rubric.json</code>, and a <code>RESULTS.md</code> log. Before graduating, each passed, scored by a judge agent separate from its author:</p>\n<ol><li>Trigger precision — fires on 5/5 wanted phrasings, 0/3 siblings.</li><li>Golden set — ≥21/25 on every case, no dimension below 4.</li><li>Adversarial — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.</li><li>Head-to-head — a superseding skill must beat the skill it replaces on the same inputs.</li><li>Anti-generic — its output could not have come from a generic PM prompt.</li></ol>\n<p>Gate 6 (used 5+ times in real fellow work) completes in use — log each miss as a gotcha and re-run the set.</p>",
  "flowNote": "<p>Skills are flat in this folder; the intended sequence is:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>#</th><th>Stage</th><th>Skills</th></tr></thead><tbody><tr><td>00</td><td><strong>Concept council</strong> — entry &amp; triage</td><td><a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a>, <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a>, <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>01</td><td><strong>First-principles problem</strong></td><td><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a>, <a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a>, <a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a>, <a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a>, <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, <a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a>, <a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></td></tr><tr><td>02</td><td><strong>Customer discovery</strong></td><td><a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a>, <a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a>, <a class=\"skill-ref\" href=\"#/skill/synthetic-users\"><code>synthetic-users</code></a>, <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>, <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a></td></tr><tr><td>03</td><td><strong>YODA — your own data</strong></td><td><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a>, <a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a>, <a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a></td></tr><tr><td>04</td><td><strong>Probes — build to learn</strong></td><td><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a>, <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></td></tr><tr><td>05</td><td><strong>Frame the business &amp; product</strong></td><td><a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a>, <a class=\"skill-ref\" href=\"#/skill/four-lenses-test\"><code>four-lenses-test</code></a>, <a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a>, <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a></td></tr><tr><td>06</td><td><strong>Invent — wedge &amp; moat</strong></td><td><a class=\"skill-ref\" href=\"#/skill/invent-by-hand\"><code>invent-by-hand</code></a>, <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>, <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>, <a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a></td></tr><tr><td>07</td><td><strong>Commit — build &amp; sell v1</strong></td><td><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a>, <a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>, <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, <a class=\"skill-ref\" href=\"#/skill/value-based-pricing\"><code>value-based-pricing</code></a>, <a class=\"skill-ref\" href=\"#/skill/v1-launch-bar\"><code>v1-launch-bar</code></a></td></tr><tr><td>08</td><td><strong>Refine flywheel</strong></td><td><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a>, <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a>, <a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></td></tr><tr><td>09</td><td><strong>Build craft</strong></td><td><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></td></tr><tr><td>10</td><td><strong>Fellow progression</strong></td><td><a class=\"skill-ref\" href=\"#/skill/fellow-level-ladder\"><code>fellow-level-ladder</code></a>, <a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a></td></tr></tbody></table></div>\n<p>Three skills supersede a weaker generic incumbent (and beat it head-to-head): <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> → <code>identify-assumptions-new</code>; <a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> → <code>opportunity-solution-tree</code>; <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> → <code>prototyping-pretotyping</code>. The build-craft section (09) and the UI/deploy steps route to the existing Product-module skills (Impeccable, Railway, Vercel) rather than restating them.</p>"
 },
 "stages": [
  {
   "id": "00",
   "label": "Concept council",
   "tagline": "entry & triage",
   "skills": [
    "fellow-path-router",
    "concept-council",
    "so-what-stress-test"
   ]
  },
  {
   "id": "01",
   "label": "First-principles problem",
   "tagline": null,
   "skills": [
    "product-as-decision",
    "job-in-primitives",
    "current-state-map",
    "physics-floor-gap",
    "problem-quality-scorecard",
    "null-hypothesis-test",
    "bottoms-up-quantification"
   ]
  },
  {
   "id": "02",
   "label": "Customer discovery",
   "tagline": null,
   "skills": [
    "user-buyer-decider-map",
    "unserved-needs-finder",
    "synthetic-users",
    "tacit-knowledge-interview",
    "evidence-ladder",
    "continuous-discovery-engine"
   ]
  },
  {
   "id": "03",
   "label": "YODA",
   "tagline": "your own data",
   "skills": [
    "yoda-data-sourcing",
    "explicit-vs-tacit-capture",
    "dataset-builder"
   ]
  },
  {
   "id": "04",
   "label": "Probes",
   "tagline": "build to learn",
   "skills": [
    "probe-matrix",
    "paper-sketch-probe",
    "wizard-of-oz-probe",
    "concierge-probe",
    "agent-concierge-probe"
   ]
  },
  {
   "id": "05",
   "label": "Frame the business & product",
   "tagline": null,
   "skills": [
    "product-frame-stack",
    "four-lenses-test",
    "first-mocks",
    "usability-test-protocol"
   ]
  },
  {
   "id": "06",
   "label": "Invent",
   "tagline": "wedge & moat",
   "skills": [
    "invent-by-hand",
    "wedge-five-questions",
    "moat-design-canvas",
    "data-rights-clause"
   ]
  },
  {
   "id": "07",
   "label": "Commit",
   "tagline": "build & sell v1",
   "skills": [
    "eval-first-spec",
    "compound-system-architecture",
    "guardrail-design",
    "pilot-six-term-sheet",
    "value-based-pricing",
    "v1-launch-bar"
   ]
  },
  {
   "id": "08",
   "label": "Refine flywheel",
   "tagline": null,
   "skills": [
    "refine-flywheel",
    "trace-to-interview",
    "metrics-that-matter"
   ]
  },
  {
   "id": "09",
   "label": "Build craft",
   "tagline": null,
   "skills": [
    "agent-design",
    "workflow-design"
   ]
  },
  {
   "id": "10",
   "label": "Fellow progression",
   "tagline": null,
   "skills": [
    "fellow-level-ladder",
    "platform-vs-venture"
   ]
  }
 ],
 "skills": {
  "fellow-path-router": {
   "name": "fellow-path-router",
   "description": "Routes a fellow through the Icarus module by situation type, not by tearing down one idea. Fires on \"where do I start\", \"I already have a product / traction — which stages apply to me\", \"onboard me to Icarus\", \"which stages should I skip\", \"I have a mature product, what's my path\". Classifies the fellow as Type A (blank page), B (traction, no moat), or C (mature product) on the evidence ladder, then returns a keep / trim / subtract / leap stage ledger and a think:build:test ratio tied to that type's dominant risk. Do NOT fire to tear down or grade one idea (use concept-council or so-what-stress-test), to assess the fellow's own skill level (use fellow-level-ladder), or to draw the platform build-vs-buy line (use platform-vs-venture).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "00",
   "hub": false,
   "summary": "Takes a fellow's whole situation — not an idea — and returns their route through Icarus.",
   "triggers": [
    "where do I start",
    "I already have traction — which Icarus stages apply to me?",
    "onboard me to Icarus",
    "which stages should I skip?",
    "I have a mature product — what's my path through this?"
   ],
   "mustNotFire": [
    {
     "phrase": "tear this idea apart / what am I missing?",
     "sibling": "concept-council",
     "local": true
    },
    {
     "phrase": "how good is this fellow — what level are they?",
     "sibling": "fellow-level-ladder",
     "local": true
    },
    {
     "phrase": "what should we build vs. what does the platform give us?",
     "sibling": "platform-vs-venture",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Tear my idea apart / what am I missing / what should I build first\"",
     "useInstead": [
      {
       "name": "concept-council",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></p>",
     "why": "That is a five-lens teardown of one raw idea ending in a probe. This routes the fellow's path across sections; it does not judge the idea."
    },
    {
     "want": "\"Is this idea worth doing / pressure-test it / so what\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": "That gates one idea across five business questions. This sequences stages, it does not grade a concept."
    },
    {
     "want": "\"How is this fellow doing / assess them / level them up\"",
     "useInstead": [
      {
       "name": "fellow-level-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/fellow-level-ladder\"><code>fellow-level-ladder</code></a></p>",
     "why": "That grades the person's mastery (Literate→Author). This routes the product's path. A Frontier-level fellow can still be on a Type A product."
    },
    {
     "want": "\"Should we build or use the platform / what does Daedalus give me\"",
     "useInstead": [
      {
       "name": "platform-vs-venture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a></p>",
     "why": "That draws the build-vs-buy line for platform primitives. This sequences the fellow's own stages."
    }
   ],
   "related": [
    {
     "name": "concept-council",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "fellow-level-ladder",
     "local": true
    },
    {
     "name": "platform-vs-venture",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Situation and evidence rung",
     "anchor": "step-1-situation-and-evidence-rung"
    },
    {
     "n": 2,
     "label": "Step 2 — Classify by the evidence gate",
     "anchor": "step-2-classify-by-the-evidence-gate"
    },
    {
     "n": 3,
     "label": "Step 3 — Fill the stage ledger",
     "anchor": "step-3-fill-the-stage-ledger"
    },
    {
     "n": 4,
     "label": "Step 4 — Name the dominant risk",
     "anchor": "step-4-name-the-dominant-risk"
    },
    {
     "n": 5,
     "label": "Step 5 — Set the think:build:test ratio",
     "anchor": "step-5-set-the-think-build-test-ratio"
    },
    {
     "n": 6,
     "label": "Step 6 — Entry point and first artefact",
     "anchor": "step-6-entry-point-and-first-artefact"
    },
    {
     "n": 7,
     "label": "Step 7 — Kill-line self-check",
     "anchor": "step-7-kill-line-self-check"
    }
   ],
   "gotchaHeadlines": [
    "Type is claimed, not shown",
    "Subtracting a stage is not skipping its evidence",
    "The ratio is a cap, not a suggestion",
    "Same flow for everyone is the failure mode",
    "A working tool is not always a venture"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "concept-council": {
   "name": "concept-council",
   "description": "First-contact teardown of a raw product idea. Fires when a fellow says \"here's my idea\", \"tear this apart\", \"rip this concept apart\", \"what am I missing\", or \"what should I build first\". Convenes five adversarial lenses, names the one load-bearing gap, and returns a Gap Map plus one First-Probe Brief costing under a week. NOT for an already-scoped concept you want stress-tested against the five so-whats (use so-what-stress-test) or scored numerically across eight dimensions (use problem-quality-scorecard).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "00",
   "hub": false,
   "summary": "Takes a raw, unproven idea and returns one decision: the single cheapest test to run this week.",
   "triggers": [
    "Here's my idea — an AI copilot for factory managers.",
    "Tear this apart.",
    "What am I missing?",
    "What should I build first?",
    "Rip this concept apart."
   ],
   "mustNotFire": [
    {
     "phrase": "Run the five so-what questions on my concept.",
     "sibling": "so-what-stress-test",
     "local": true
    },
    {
     "phrase": "Score my problem across the eight dimensions / give it a numeric quality score.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Write the PRD for this idea.",
     "sibling": "prd-development",
     "local": false
    }
   ],
   "handoffs": [
    {
     "want": "The five so-what questions run on an already-formed concept",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": "That interrogates a stated concept; this tears down a raw one and ends in a probe."
    },
    {
     "want": "A numeric score across eight problem dimensions",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": "That grades; this does not score the idea, it finds the one gap and tests it."
    },
    {
     "want": "The unit-cost physics floor of a claim",
     "useInstead": [
      {
       "name": "physics-floor-gap",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></p>",
     "why": "That is a cost-teardown, not a five-lens attack."
    },
    {
     "want": "A written PRD or spec",
     "useInstead": [
      {
       "name": "prd-development",
       "local": false
      },
      {
       "name": "one-pager-prd",
       "local": false
      },
      {
       "name": "create-prd",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>prd-development</code>, <code>one-pager-prd</code>, <code>create-prd</code></p>",
     "why": "This runs upstream of any spec. Decline and point there."
    }
   ],
   "related": [
    {
     "name": "problem-statement",
     "local": false
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "brainstorm-experiments-new",
     "local": false
    },
    {
     "name": "beachhead-segment",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Restate the concept in one sentence",
     "anchor": "step-1-restate-the-concept-in-one-sentence"
    },
    {
     "n": 2,
     "label": "Step 2 — Convene the panel",
     "anchor": "step-2-convene-the-panel"
    },
    {
     "n": 3,
     "label": "Step 3 — Score each attack",
     "anchor": "step-3-score-each-attack"
    },
    {
     "n": 4,
     "label": "Step 4 — Name the one load-bearing gap",
     "anchor": "step-4-name-the-one-load-bearing-gap"
    },
    {
     "n": 5,
     "label": "Step 5 — Design the First-Probe",
     "anchor": "step-5-design-the-first-probe"
    },
    {
     "n": 6,
     "label": "Step 6 — Write the First-Probe Brief",
     "anchor": "step-6-write-the-first-probe-brief"
    }
   ],
   "gotchaHeadlines": [
    "More than one \"build first\" is an auto-fail",
    "A probe over a week is a rewrite, not a plan",
    "Opinion-dressed-as-evidence",
    "Lenses that fetch instead of attack",
    "Fabrication to fill a lens",
    "Solution in disguise"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "so-what-stress-test": {
   "name": "so-what-stress-test",
   "description": "Fires when a fellow wants a whole idea pressure-tested fast across five business questions — \"is this worth doing\", \"pressure-test this\", \"poke holes in this\", \"stress test my idea\", \"so what?\". Runs So what / Who pays / What's the wedge / What's the moat / What kills it, then returns a per-question verdict table and an overall Pass / Redesign / Kill, refusing to pass any question answered on opinion. Do NOT fire to score a problem on the 8-dimension gate (use problem-quality-scorecard), for the 5-lens adversarial teardown that ends in one probe (use concept-council), or to deep-dive only the wedge (use wedge-five-questions).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "00",
   "hub": false,
   "summary": "Compresses \"should this exist?\" into five business questions and one verdict.",
   "triggers": [
    "Is this worth doing? Can you poke holes in it?",
    "Pressure-test this idea for me across the board.",
    "So what — why does anyone care that we solve this?",
    "Stress test my idea before I put more time in.",
    "Give me the fast go/no-go on this concept: who pays, what's the moat, what kills it?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem on all 8 dimensions and give me the numeric gate.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Run the five-lens council teardown and end on one probe.",
     "sibling": "concept-council",
     "local": true
    },
    {
     "phrase": "Pressure-test only my wedge against the five wedge thresholds.",
     "sibling": "wedge-five-questions",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Score this problem on all 8 dimensions\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": "That is a numeric problem gate; this scores the whole idea across five business questions, not one 8-axis problem."
    },
    {
     "want": "\"Run the council / give me the five-lens teardown\"",
     "useInstead": [
      {
       "name": "concept-council",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></p>",
     "why": "That is a multi-lens adversarial reading ending in one probe; this returns a five-question table and a Pass/Redesign/Kill."
    },
    {
     "want": "\"Pressure-test just my wedge\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></p>",
     "why": "That deep-dives the wedge alone against five pass thresholds; here the wedge is one row of five."
    }
   ],
   "related": [
    {
     "name": "concept-council",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "weak",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1–2",
     "anchor": "step-1-2"
    },
    {
     "n": 2,
     "label": "Step 3 — grade each row",
     "anchor": "step-3-grade-each-row"
    },
    {
     "n": 3,
     "label": "Step 4 — verdict logic (apply in order)",
     "anchor": "step-4-verdict-logic-apply-in-order"
    },
    {
     "n": 4,
     "label": "Step 5 — the rewrite (Redesign only)",
     "anchor": "step-5-the-rewrite-redesign-only"
    },
    {
     "n": 5,
     "label": "Step 6 — self-check",
     "anchor": "step-6-self-check"
    }
   ],
   "gotchaHeadlines": [
    "The user is not the payer",
    "Denial on Q5 reads as a pass to the fellow and a fail to the skill",
    "A moat plan is not a moat",
    "Fatal overrides Pass",
    "A one-liner with no answers is not a Redesign",
    "Solution in disguise"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "product-as-decision": {
   "name": "product-as-decision",
   "description": "Restates a product idea as ONE decision a named human makes, then quantifies how that decision is compressed — before→after on a single axis of time, effort, or autonomy (e.g. six minutes → thirty seconds). Fires on \"what's the product here\", \"frame the problem\", \"what decision are we changing\", \"state this as a decision\", \"what are we actually changing for the user\". Output is a filled Compressed-Decision Statement: the decision (never a feature), its one owner, the before→after compression with a source, and the autonomy-ladder move, every claim tagged [Fact]/[Assumption]/[Hypothesis]. NOT for stripping the job to primitives (use job-in-primitives), NOT for mapping and pricing the whole workflow (use current-state-map), NOT for the 8-dimension go/no-go (use problem-quality-scorecard), NOT for the per-unit prize ratio (use physics-floor-gap).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Forces one sentence: this product makes ONE decision, made by one named human, go from a costly before to a cheap after.",
   "triggers": [
    "What's the product here?",
    "Frame the problem for me.",
    "What decision are we actually changing?",
    "State this as a decision, not a feature.",
    "In one line, what are we changing for the user?"
   ],
   "mustNotFire": [
    {
     "phrase": "Strip this down to the primitive job — what's really being done?",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "Map the workflow and tell me what each step costs today.",
     "sibling": "current-state-map",
     "local": true
    },
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Strip this to the primitive job — what's really being done?\"",
     "useInstead": [
      {
       "name": "job-in-primitives",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></p>",
     "why": null
    },
    {
     "want": "\"Map the workflow and price every step as it happens today.\"",
     "useInstead": [
      {
       "name": "current-state-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></p>",
     "why": null
    },
    {
     "want": "\"Score this problem across the 8 dimensions — go or no-go?\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is the per-unit prize big enough to bother?\"",
     "useInstead": [
      {
       "name": "physics-floor-gap",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></p>",
     "why": null
    },
    {
     "want": "\"Stress-test the whole idea across five questions.\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "job-in-primitives",
     "local": true
    },
    {
     "name": "current-state-map",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "discovery/problem-statement",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Name the decision, not the feature",
     "anchor": "step-1-name-the-decision-not-the-feature"
    },
    {
     "n": 2,
     "label": "Step 2 — Name the one owner",
     "anchor": "step-2-name-the-one-owner"
    },
    {
     "n": 3,
     "label": "Step 3 — Pick the single moving axis",
     "anchor": "step-3-pick-the-single-moving-axis"
    },
    {
     "n": 4,
     "label": "Step 4 — State before → after, quantified, sourced",
     "anchor": "step-4-state-before-after-quantified-sourced"
    },
    {
     "n": 5,
     "label": "Step 5 — Place before and after on the autonomy ladder",
     "anchor": "step-5-place-before-and-after-on-the-autonomy-ladder"
    },
    {
     "n": 6,
     "label": "Step 6 — Compression band",
     "anchor": "step-6-compression-band"
    },
    {
     "n": 7,
     "label": "Step 7 — Downstream",
     "anchor": "step-7-downstream"
    },
    {
     "n": 8,
     "label": "Step 8 — Write the one-line statement",
     "anchor": "step-8-write-the-one-line-statement"
    }
   ],
   "gotchaHeadlines": [
    "Feature smuggling",
    "Compressing the artefact, not the decision",
    "The after marked as a fact",
    "Two decisions wearing one coat",
    "Interface change dressed as compression"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "job-in-primitives": {
   "name": "job-in-primitives",
   "description": "Reduces a job to its three irreducible currencies — information moved, decisions made, liability transferred — after deleting every tool, vendor, product, and org-chart role name from the description. Fires on \"what job is really being done here\", \"strip this down to the primitive\", \"what's the primitive job\", \"take the tool names out and tell me the underlying job\", or when a fellow describes a workflow thick with product and team names and wants the tool-independent job beneath it. Outputs a filled primitive job spec: the customer's-words version + a kill-list of deleted proper nouns + the three primitive lines + an invariance test + an AI-eats-vs-stays split. NOT for naming the single decision and its before→after time compression (use product-as-decision), NOT for mapping and pricing each workflow step (use current-state-map), NOT for the problem-framing-canvas workshop (this absorbs its instinct, not its scaffolding).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Takes a job described in the customer's own language — full of product names, team names, and steps — and reduces it to the three things every job actually is underneath: information moved, decisions made, liability transferred.",
   "triggers": [
    "What job is really being done under all these tools?",
    "Strip this workflow down to the primitive job.",
    "Take the product and team names out — what's the underlying job?",
    "What's the primitive job here?",
    "Reduce this to information, decisions, and liability — what's left when the tools go?"
   ],
   "mustNotFire": [
    {
     "phrase": "State this as the one decision we're changing and how much faster it gets.",
     "sibling": "product-as-decision",
     "local": true
    },
    {
     "phrase": "Map how it's done today and price every step.",
     "sibling": "current-state-map",
     "local": true
    },
    {
     "phrase": "What's the riskiest assumption / how would I disprove it?",
     "sibling": "null-hypothesis-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"State this as the one decision we're changing, and how much faster it gets.\"",
     "useInstead": [
      {
       "name": "product-as-decision",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a></p>",
     "why": null
    },
    {
     "want": "\"Map how it's done today and price every step.\"",
     "useInstead": [
      {
       "name": "current-state-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></p>",
     "why": null
    },
    {
     "want": "\"What's the riskiest assumption / how would I disprove it?\"",
     "useInstead": [
      {
       "name": "null-hypothesis-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is the whole idea any good?\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "discovery/problem-framing-canvas",
     "local": false
    },
    {
     "name": "product-as-decision",
     "local": true
    },
    {
     "name": "current-state-map",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    },
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Capture the job in the customer's own words (§0)",
     "anchor": "step-1-capture-the-job-in-the-customer-s-own-words-0"
    },
    {
     "n": 2,
     "label": "Step 2 — Build the kill-list (§1)",
     "anchor": "step-2-build-the-kill-list-1"
    },
    {
     "n": 3,
     "label": "Step 3 — Fill the three primitive lines (§2), tool-free",
     "anchor": "step-3-fill-the-three-primitive-lines-2-tool-free"
    },
    {
     "n": 4,
     "label": "Step 4 — Invariance test (§3)",
     "anchor": "step-4-invariance-test-3"
    },
    {
     "n": 5,
     "label": "Step 5 — AI eats vs stays (§4)",
     "anchor": "step-5-ai-eats-vs-stays-4"
    },
    {
     "n": 6,
     "label": "Step 6 — Kill-line check (§5), the auto-fail gate",
     "anchor": "step-6-kill-line-check-5-the-auto-fail-gate"
    },
    {
     "n": 7,
     "label": "Step 7 — Evidence the liability line (§6)",
     "anchor": "step-7-evidence-the-liability-line-6"
    }
   ],
   "gotchaHeadlines": [
    "A category is still a tool",
    "The decider and the liable party are often different people",
    "Do not manufacture an automatable primitive",
    "Pronoun-swapping is not reduction",
    "The comfortable primitive is usually information movement"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "current-state-map": {
   "name": "current-state-map",
   "description": "Maps a workflow exactly as it happens today and puts a sourced price on every step — touch time, handoffs, delay, and failure/rework — then totals it into the current priced practice per unit. Fires on \"how is this done today\", \"map the workflow\", \"what does it cost now\", \"walk the as-is process and price it\", \"where does the time and money go in this workflow\". Outputs a filled priced step ledger: per-step cost + cited source + evidence-ladder weight + the four hidden-cost lines + grand total per unit + the step that holds the most cost, every number tagged [Fact]/[Assumption]/[Hypothesis]. NOT the theoretical floor or the build/walk gap verdict (use physics-floor-gap — this builds the current-cost side that skill divides against), NOT the primitive job with tool and role names stripped (use job-in-primitives), NOT total market size (use bottoms-up-quantification), NOT qualitative problem-space framing / HMW (use problem-framing-canvas).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Turns \"how is this done today?\" into an invoice.",
   "triggers": [
    "How is this done today? Map it and price every step.",
    "Map the workflow and tell me what each step costs.",
    "What does this process cost us now?",
    "Walk the as-is process and price it.",
    "Where does the time and money go in this workflow?"
   ],
   "mustNotFire": [
    {
     "phrase": "What should this cost / is the gap big enough to build?",
     "sibling": "physics-floor-gap",
     "local": true
    },
    {
     "phrase": "Strip this job to its primitive — information, decisions, liability.",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "What's the TAM / total market for this?",
     "sibling": "bottoms-up-quantification",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"What should this cost / is the gap big enough to build?\"",
     "useInstead": [
      {
       "name": "physics-floor-gap",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (feed it this map's total)</p>",
     "why": null
    },
    {
     "want": "\"Strip this job to its primitive — information, decisions, liability.\"",
     "useInstead": [
      {
       "name": "job-in-primitives",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></p>",
     "why": null
    },
    {
     "want": "\"What's the TAM / total market for this?\"",
     "useInstead": [
      {
       "name": "bottoms-up-quantification",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></p>",
     "why": null
    },
    {
     "want": "\"Frame the problem space — biases, who's affected, How Might We.\"",
     "useInstead": [
      {
       "name": "problem-framing-canvas",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>problem-framing-canvas</code></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "job-in-primitives",
     "local": true
    },
    {
     "name": "product-as-decision",
     "local": true
    },
    {
     "name": "bottoms-up-quantification",
     "local": true
    },
    {
     "name": "problem-framing-canvas",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Name the unit and its trigger",
     "anchor": "step-1-name-the-unit-and-its-trigger"
    },
    {
     "n": 2,
     "label": "Step 2 — Walk the as-is steps in order",
     "anchor": "step-2-walk-the-as-is-steps-in-order"
    },
    {
     "n": 3,
     "label": "Step 3 — Price touch labour",
     "anchor": "step-3-price-touch-labour"
    },
    {
     "n": 4,
     "label": "Step 4 — Add the handoff tax",
     "anchor": "step-4-add-the-handoff-tax"
    },
    {
     "n": 5,
     "label": "Step 5 — Price delay separately from labour",
     "anchor": "step-5-price-delay-separately-from-labour"
    },
    {
     "n": 6,
     "label": "Step 6 — Price failure and rework",
     "anchor": "step-6-price-failure-and-rework"
    },
    {
     "n": 7,
     "label": "Step 7 — Total = touch + handoff + delay + failure",
     "anchor": "step-7-total-touch-handoff-delay-failure"
    },
    {
     "n": 8,
     "label": "Step 8 — Cost concentration",
     "anchor": "step-8-cost-concentration"
    },
    {
     "n": 9,
     "label": "Step 9 — Map-readiness verdict",
     "anchor": "step-9-map-readiness-verdict"
    }
   ],
   "gotchaHeadlines": [
    "Conflating elapsed time with touch time",
    "Pricing the official SOP, not the real practice",
    "Dropping the failure tail because it is hard to source",
    "Counting only the people you can see",
    "A tidy total hiding a guessed dominant line"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "physics-floor-gap": {
   "name": "physics-floor-gap",
   "description": "Sizes the per-unit prize of a piece of work from first principles by comparing what it is priced at today against its theoretical floor once AI does the automatable part. Fires on \"is this a big enough problem\", \"how big is the prize\", \"size the opportunity from first principles\", \"what's the physics floor\", \"is the gap big enough\", or when a fellow has a unit of work and its current per-unit cost and wants a build/walk verdict. Outputs a filled floor/gap calc sheet: token-cost line + judgment-minutes line + current priced number + gap ratio + band verdict, every number tagged [Fact]/[Assumption]/[Hypothesis]. NOT for total market size (use bottoms-up-quantification), NOT for the 8-dimension problem gate (use problem-quality-scorecard), NOT for scoring the whole idea (use so-what-stress-test).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Answers one question and refuses the rest: is the per-unit prize big enough to bother?",
   "triggers": [
    "Is this a big enough problem to build for?",
    "How big is the prize per report?",
    "Size the opportunity from first principles.",
    "What's the physics floor for this work?",
    "Is the gap big enough — what does one unit cost today vs what it should cost?"
   ],
   "mustNotFire": [
    {
     "phrase": "What's the TAM for data-centre risk software?",
     "sibling": "bottoms-up-quantification",
     "local": true
    },
    {
     "phrase": "Score my problem across all 8 dimensions — is it a good problem?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Is the whole idea any good? Stress-test the concept.",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"What's the total market / TAM / how many customers × price?\"",
     "useInstead": [
      {
       "name": "bottoms-up-quantification",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is this a good problem across all 8 dimensions?\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is the whole idea any good? Stress-test the concept.\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"Which wedge should we attack first?\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "bottoms-up-quantification",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Name the unit and its frequency",
     "anchor": "step-1-name-the-unit-and-its-frequency"
    },
    {
     "n": 2,
     "label": "Step 2 — Floor part A: token/compute cost of the automatable portion",
     "anchor": "step-2-floor-part-a-token-compute-cost-of-the-automatable-portion"
    },
    {
     "n": 3,
     "label": "Step 3 — Floor part B: irreducible human-judgment minutes × loaded labour",
     "anchor": "step-3-floor-part-b-irreducible-human-judgment-minutes-loaded-labour"
    },
    {
     "n": 4,
     "label": "Step 4 — Floor = A + B",
     "anchor": "step-4-floor-a-b"
    },
    {
     "n": 5,
     "label": "Step 5 — Current priced practice",
     "anchor": "step-5-current-priced-practice"
    },
    {
     "n": 6,
     "label": "Step 6 — Gap ratio = Current ÷ Floor",
     "anchor": "step-6-gap-ratio-current-floor"
    },
    {
     "n": 7,
     "label": "Step 7 — Band verdict",
     "anchor": "step-7-band-verdict"
    }
   ],
   "gotchaHeadlines": [
    "Under-counting judgment to manufacture a prize",
    "The wrapper trap",
    "A big ratio that is really a moat",
    "Stale floor",
    "Opinion dressed as a fact",
    "A ratio near a band boundary is fragile"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "problem-quality-scorecard": {
   "name": "problem-quality-scorecard",
   "description": "Numeric go/no-go gate that scores ONE product problem 1-5 on eight evidence-backed dimensions (frequency, budgeted pain, severity, data exhaust, structural persistence, buyer clarity, wedge sharpness, founder asymmetry), sums to /40, and returns pass (>=32) / redesign (28-31) / kill (<28). Fires on \"should I build this\", \"score this problem\", \"go or no-go\", \"is this problem good enough\", \"rate this problem\". Output is a filled 8-row scorecard with a money-or-behaviour citation on every row. NOT for broad risk mapping across GTM/strategy/team (use identify-assumptions-new), NOT the five qualitative whole-idea questions (so-what-stress-test), NOT the per-unit size ratio (physics-floor-gap), NOT the wedge-only deep dive (wedge-five-questions).",
   "type": "generator",
   "supersedes": "skills/discovery/identify-assumptions-new",
   "stage": "01",
   "hub": false,
   "summary": "Compresses \"should we build this?\" into one number and one verdict.",
   "triggers": [
    "Should I build this?\" (a problem in hand, wants a build decision)",
    "Score this problem.",
    "Go or no-go on this problem?",
    "Is this problem good enough to build?",
    "Rate this problem."
   ],
   "mustNotFire": [
    {
     "phrase": "Map all my risky assumptions across GTM, strategy, and team.",
     "sibling": "identify-assumptions-new",
     "local": false
    },
    {
     "phrase": "Stress-test my whole idea with the big business questions.",
     "sibling": "so-what-stress-test",
     "local": true
    },
    {
     "phrase": "What's the per-unit size ratio — does the physics floor leave room?",
     "sibling": "physics-floor-gap",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "Every risky assumption mapped across value, GTM, strategy, team",
     "useInstead": [
      {
       "name": "identify-assumptions-new",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>identify-assumptions-new</code> (the skill this supersedes) — a risk inventory, not a gate</p>",
     "why": null
    },
    {
     "want": "The five qualitative whole-idea business questions",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "The per-unit size ratio / does the physics floor leave margin",
     "useInstead": [
      {
       "name": "physics-floor-gap",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a></p>",
     "why": null
    },
    {
     "want": "A deep dive on the wedge alone",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></p>",
     "why": null
    },
    {
     "want": "To turn a solution back into a problem before scoring",
     "useInstead": [
      {
       "name": "problem-statement",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>problem-statement</code>, then return here</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "identify-assumptions-new",
     "local": false
    },
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "problem-statement",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — State the one problem in one sentence",
     "anchor": "step-1-state-the-one-problem-in-one-sentence"
    },
    {
     "n": 2,
     "label": "Step 2 — For each of the 8 dimensions, write the evidence you actually hold and\ntag its rung",
     "anchor": "step-2-for-each-of-the-8-dimensions-write-the-evidence-you-actually-hold-and-tag"
    },
    {
     "n": 3,
     "label": "Step 3 — Apply the evidence ceiling",
     "anchor": "step-3-apply-the-evidence-ceiling"
    },
    {
     "n": 4,
     "label": "Step 4 — Score each dimension against its 1-vs-5 anchor",
     "anchor": "step-4-score-each-dimension-against-its-1-vs-5-anchor"
    },
    {
     "n": 5,
     "label": "Step 5 — Sum and gate",
     "anchor": "step-5-sum-and-gate"
    }
   ],
   "gotchaHeadlines": [
    "Frequency inflation",
    "Wish in the money column",
    "Wedge / founder double-count",
    "Scoring a solution",
    "Verified-low is not opinion"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "pass"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "null-hypothesis-test": {
   "name": "null-hypothesis-test",
   "description": "Falsification pass for the load-bearing beliefs under a chosen plan or wedge. Restates each assumption as a null hypothesis (the belief is FALSE), designs the single cheapest observation whose failure would disprove it, and ranks every assumption by P(wrong) x impact-if-wrong so the fellow shoots at the most-likely- fatal belief first. Fires on \"what has to be true\", \"how would I disprove this\", \"what's the riskiest assumption\", \"what could kill this\", \"which belief do I test first\". Output is an Assumption -> Null -> Disproof table with a pre-committed kill signal on every row. NOT the go/no-go on whether the problem is worth building at all (problem-quality-scorecard), NOT bottom-up sizing (bottoms-up-quantification), NOT the priced workflow map (current-state-map), NOT a narrative failure story (pre-mortem).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Takes the beliefs a plan silently depends on and turns each into a falsifiable bet: its null form (the belief is false), the single cheapest observation that could kill it, and the exact result that counts as death — written down before you run it.",
   "triggers": [
    "What has to be true for this to work?",
    "How would I disprove this before we build?",
    "What's the riskiest assumption here?",
    "What could kill this — which belief do I test first?",
    "Which of my assumptions should I test before building?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this problem good enough to build? Give me a go/no-go.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Size this market bottom-up — build me the number.",
     "sibling": "bottoms-up-quantification",
     "local": true
    },
    {
     "phrase": "Map how this workflow is done today and what each step costs.",
     "sibling": "current-state-map",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "A go/no-go on whether the problem is worth building at all",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (8-dimension gate) — this skill runs <em>after</em> a problem clears it, or on the dimensions it opinion-capped</p>",
     "why": null
    },
    {
     "want": "To build magnitude from the smallest verifiable units",
     "useInstead": [
      {
       "name": "bottoms-up-quantification",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/bottoms-up-quantification\"><code>bottoms-up-quantification</code></a></p>",
     "why": null
    },
    {
     "want": "To map how the workflow is done today and price each step",
     "useInstead": [
      {
       "name": "current-state-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a></p>",
     "why": null
    },
    {
     "want": "A narrative \"imagine it failed, tell the story\" exercise",
     "useInstead": [
      {
       "name": "pre-mortem",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>pre-mortem</code> — that generates failure modes as prose; this designs the one cheapest observation that disproves a specific belief and ranks it</p>",
     "why": null
    },
    {
     "want": "To turn a solution back into a problem first",
     "useInstead": [
      {
       "name": "problem-statement",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>problem-statement</code>, then return here</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "identify-assumptions-new",
     "local": false
    },
    {
     "name": "identify-assumptions-existing",
     "local": false
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "bottoms-up-quantification",
     "local": true
    },
    {
     "name": "current-state-map",
     "local": true
    },
    {
     "name": "pre-mortem",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Surface only the load-bearing beliefs",
     "anchor": "step-1-surface-only-the-load-bearing-beliefs"
    },
    {
     "n": 2,
     "label": "Step 2 — Write the null for each belief",
     "anchor": "step-2-write-the-null-for-each-belief"
    },
    {
     "n": 3,
     "label": "Step 3 — Score P(wrong) 1-5",
     "anchor": "step-3-score-p-wrong-1-5"
    },
    {
     "n": 4,
     "label": "Step 4 — Score Impact-if-wrong 1-5",
     "anchor": "step-4-score-impact-if-wrong-1-5"
    },
    {
     "n": 5,
     "label": "Step 5 — Rank = P(wrong) x Impact (max 25), and set the order",
     "anchor": "step-5-rank-p-wrong-x-impact-max-25-and-set-the-order"
    },
    {
     "n": 6,
     "label": "Step 6 — For each belief above the park line, design the single cheapest\ndisproof",
     "anchor": "step-6-for-each-belief-above-the-park-line-design-the-single-cheapest-disproof"
    },
    {
     "n": 7,
     "label": "Step 7 — Write the test order and what would change the view",
     "anchor": "step-7-write-the-test-order-and-what-would-change-the-view"
    }
   ],
   "gotchaHeadlines": [
    "Confirmation dressed as rigour",
    "Parking the fatal belief",
    "Ranking by fear, not by wrong x impact",
    "Falsifying a solution",
    "Cheap-but-empty disproof"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "bottoms-up-quantification": {
   "name": "bottoms-up-quantification",
   "description": "Builds the magnitude of an opportunity from the smallest countable units up, with every multiplier and its source shown in the open, and permits a top-down TAM only at the end as a labelled sanity check. Fires on \"size this bottom-up\", \"build the number\", \"don't give me a TAM\", \"how big is this really, show me the arithmetic\", \"what's the total from the units up\", or when a fellow has a per-unit value and wants a total market magnitude they can defend line by line. Outputs a filled bottom-up size model: atom + reachable population + frequency + value-per-event + capture, each rung ladder-weighted, weakest rung caps confidence, plus a TAM reconciliation band. NOT for the per-unit prize ratio of one unit (use physics-floor-gap — run it first), NOT for the 8-dimension problem gate (use problem-quality-scorecard), NOT for scoring the whole idea (use so-what-stress-test).",
   "type": "generator",
   "supersedes": "none",
   "stage": "01",
   "hub": false,
   "summary": "Answers one question and shows its working: how big is the whole thing, built from the smallest unit you can actually count?",
   "triggers": [
    "Size this bottom-up — don't give me a TAM.",
    "Build the number from the units up.",
    "How big is this really, and I want to see the arithmetic.",
    "What's the total addressable value, built from what one unit is worth times how many there are?",
    "Give me a defensible market size I can walk an investor through line by line."
   ],
   "mustNotFire": [
    {
     "phrase": "Is one report a big enough prize to bother — what's the per-unit gap?",
     "sibling": "physics-floor-gap",
     "local": true
    },
    {
     "phrase": "Score my problem across all 8 dimensions — is it a good problem?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Is the whole idea any good? Stress-test the concept.",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Is one unit even worth building for — what's the per-unit prize?\"",
     "useInstead": [
      {
       "name": "physics-floor-gap",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/physics-floor-gap\"><code>physics-floor-gap</code></a> (run it first)</p>",
     "why": null
    },
    {
     "want": "\"Score my problem across all 8 dimensions.\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is the whole idea any good? Stress-test the concept.\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"Which wedge should we attack first?\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Name the atom",
     "anchor": "step-1-name-the-atom"
    },
    {
     "n": 2,
     "label": "Step 2 — Reachable population",
     "anchor": "step-2-reachable-population"
    },
    {
     "n": 3,
     "label": "Step 3 — Frequency",
     "anchor": "step-3-frequency"
    },
    {
     "n": 4,
     "label": "Step 4 — Value captured per event",
     "anchor": "step-4-value-captured-per-event"
    },
    {
     "n": 5,
     "label": "Step 5 — Capture fraction",
     "anchor": "step-5-capture-fraction"
    },
    {
     "n": 6,
     "label": "Step 6 — The arithmetic, in the open",
     "anchor": "step-6-the-arithmetic-in-the-open"
    },
    {
     "n": 7,
     "label": "Step 7 — Confidence band (the weakest rung caps it)",
     "anchor": "step-7-confidence-band-the-weakest-rung-caps-it"
    },
    {
     "n": 8,
     "label": "Step 8 — TAM sanity check. LAST. Labelled",
     "anchor": "step-8-tam-sanity-check-last-labelled"
    },
    {
     "n": 9,
     "label": "Step 9 — Reconciliation band",
     "anchor": "step-9-reconciliation-band"
    }
   ],
   "gotchaHeadlines": [
    "Leading with the TAM",
    "Padding the chain",
    "Averaging confidence instead of taking the minimum",
    "A headline count as population",
    "Sizing on the whole-workflow value, not the captured slice",
    "Ignoring the reconciliation"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "user-buyer-decider-map": {
   "name": "user-buyer-decider-map",
   "description": "Splits a buying situation into four distinct people — user (feels the pain, touches the product), buyer (owns the budget line), decision-maker (final signature / veto), champion (spends internal capital to push it) — each pinned to ONE title, ONE budget (or an explicit none), ONE why-now. Fires on \"who's the actual buyer\", \"who decides\", \"map the stakeholders\", \"map the buying committee\", \"the user loves it but who signs the cheque\", \"who's our champion and who can veto us\". Output is a filled Stakeholder-Role Map that feeds the buyer-clarity row of problem-quality-scorecard. NOT the 8-dimension go/no-go (problem-quality-scorecard), NOT ranking which unmet need to build first (unserved-needs-finder), NOT a demographic day-in-the-life persona (proto-persona), NOT simulating users before interviews (synthetic-users).",
   "type": "generator",
   "supersedes": "none",
   "stage": "02",
   "hub": false,
   "summary": "Forces four names where the fellow wants one.",
   "triggers": [
    "Who's the actual buyer here?",
    "Who decides whether this gets bought?",
    "Map the stakeholders / the buying committee for this account.",
    "The user loves it — but who signs the cheque?",
    "Who's our champion, and who can quietly veto us?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Which unmet need should we build for first — must-have vs nice-to-have?",
     "sibling": "unserved-needs-finder",
     "local": true
    },
    {
     "phrase": "Simulate a user and dry-run the pitch before real interviews.",
     "sibling": "synthetic-users",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Score the problem across 8 dimensions — go or no-go?\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "\"Which unmet need do we build for first?\"",
     "useInstead": [
      {
       "name": "unserved-needs-finder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></p>",
     "why": null
    },
    {
     "want": "\"Write a demographic persona / a day-in-the-life.\"",
     "useInstead": [
      {
       "name": "proto-persona",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>proto-persona</code> (absorbed — see Related)</p>",
     "why": null
    },
    {
     "want": "\"Define the firmographic ICP with LTV cohorts.\"",
     "useInstead": [
      {
       "name": "ideal-customer-profile",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>ideal-customer-profile</code> (absorbed — see Related)</p>",
     "why": null
    },
    {
     "want": "\"Dry-run the pitch on a simulated user first.\"",
     "useInstead": [
      {
       "name": "synthetic-users",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/synthetic-users\"><code>synthetic-users</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "proto-persona",
     "local": false
    },
    {
     "name": "ideal-customer-profile",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "unserved-needs-finder",
     "local": true
    },
    {
     "name": "synthetic-users",
     "local": true
    },
    {
     "name": "tacit-knowledge-interview",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — No product, no map",
     "anchor": "step-0-no-product-no-map"
    },
    {
     "n": 2,
     "label": "Step 1 — Name the four roles, one title each",
     "anchor": "step-1-name-the-four-roles-one-title-each"
    },
    {
     "n": 3,
     "label": "Step 2 — Pin the budget to the buyer only",
     "anchor": "step-2-pin-the-budget-to-the-buyer-only"
    },
    {
     "n": 4,
     "label": "Step 3 — Give each role its own why-now",
     "anchor": "step-3-give-each-role-its-own-why-now"
    },
    {
     "n": 5,
     "label": "Step 4 — The fifth face: who loses if this ships",
     "anchor": "step-4-the-fifth-face-who-loses-if-this-ships"
    },
    {
     "n": 6,
     "label": "Step 5 — Collapse check",
     "anchor": "step-5-collapse-check"
    },
    {
     "n": 7,
     "label": "Step 6 — Path to yes",
     "anchor": "step-6-path-to-yes"
    },
    {
     "n": 8,
     "label": "Step 7 — Buyer-clarity feed and verdict",
     "anchor": "step-7-buyer-clarity-feed-and-verdict"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "unserved-needs-finder": {
   "name": "unserved-needs-finder",
   "description": "Ranks what a customer actually needs by onioning each stated need to a tech-invariant core, sorting the survivors with Kano (must / performance / delighter), and returning the one durable, under-served need that will still be a need after the technology turns over. Fires on \"what do they really need\", \"find the unmet need\", \"which need should we prioritise\", \"what's the real need under this feature request\", or when a fellow hands you a list of \"needs\" that are mostly features and wants the durable one ranked out. Outputs a filled prioritised need map: candidate needs → solution-strip → onion-to-core → tech-invariance gate → Kano bands → one ranked wedge need with its unserved evidence. NOT for naming WHO holds the need or their budget (use user-buyer-decider-map), NOT for reducing the whole job to its currencies (use job-in-primitives), NOT for scoring whether the whole idea is worth building (use so-what-stress-test).",
   "type": "generator",
   "supersedes": "none",
   "stage": "02",
   "hub": false,
   "summary": "Takes a fellow's list of customer \"needs\" — usually a mix of real needs, disguised solutions, and tech capabilities — and returns one ranked map.",
   "triggers": [
    "What do they really need — and which need should we build first?",
    "This feature list is mostly solutions. What's the real need under it?",
    "Find the unmet need in this segment and rank it.",
    "Which of these is the wedge need vs a nice-to-have?",
    "They keep asking for [feature]. What do they actually need, and is it durable?"
   ],
   "mustNotFire": [
    {
     "phrase": "Who is the actual buyer, what's their budget, and who signs?",
     "sibling": "user-buyer-decider-map",
     "local": true
    },
    {
     "phrase": "Reduce the whole job to information moved / decisions made / liability transferred.",
     "sibling": "job-in-primitives",
     "local": true
    },
    {
     "phrase": "Is the whole idea worth building at all?",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Who is the actual buyer / who signs / what's their budget?\"",
     "useInstead": [
      {
       "name": "user-buyer-decider-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a></p>",
     "why": null
    },
    {
     "want": "\"Reduce the whole job to information / decisions / liability.\"",
     "useInstead": [
      {
       "name": "job-in-primitives",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/job-in-primitives\"><code>job-in-primitives</code></a></p>",
     "why": null
    },
    {
     "want": "\"Is the whole idea worth building?\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"What's the riskiest assumption and how do I disprove it?\"",
     "useInstead": [
      {
       "name": "null-hypothesis-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/null-hypothesis-test\"><code>null-hypothesis-test</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "discovery/jobs-to-be-done",
     "local": false
    },
    {
     "name": "user-buyer-decider-map",
     "local": true
    },
    {
     "name": "job-in-primitives",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Collect candidate needs (§0)",
     "anchor": "step-1-collect-candidate-needs-0"
    },
    {
     "n": 2,
     "label": "Step 2 — Solution-strip, onion pass 1 (§1)",
     "anchor": "step-2-solution-strip-onion-pass-1-1"
    },
    {
     "n": 3,
     "label": "Step 3 — Onion to core (§2)",
     "anchor": "step-3-onion-to-core-2"
    },
    {
     "n": 4,
     "label": "Step 4 — Tech-invariance test (§3), the durability gate",
     "anchor": "step-4-tech-invariance-test-3-the-durability-gate"
    },
    {
     "n": 5,
     "label": "Step 5 — Kano classify the survivors (§4)",
     "anchor": "step-5-kano-classify-the-survivors-4"
    },
    {
     "n": 6,
     "label": "Step 6 — Rank and select (§5)",
     "anchor": "step-6-rank-and-select-5"
    },
    {
     "n": 7,
     "label": "Step 7 — Evidence the pick (§6)",
     "anchor": "step-7-evidence-the-pick-6"
    }
   ],
   "gotchaHeadlines": [
    "The comfortable need is a delighter",
    "\"Unserved\" is not the same as \"unspoken\"",
    "Over-peeling dissolves the need into a platitude",
    "A capability can pass Kano and still be a fake need",
    "Two stated needs often share one core"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "synthetic-users": {
   "name": "synthetic-users",
   "description": "Build a synthetic user panel grounded in your YODA corpus and pre-test a concept, message, or flow against it — cheaply, before you spend real interview time. Returns a Synthetic Panel + Pre-Test Transcript carrying a lie ledger (what synthetic users systematically get wrong: they never pay, never no-show, over-rationalise, over-agree) and a kill / revise / promote-to-real-interview verdict. Fires on \"test this before real interviews\", \"simulate a user\", \"dry-run the pitch\", \"pre-test the message/flow\", \"which of these should I even bother interviewing about\". NOT for running the real interview that captures an expert's judgment (use tacit-knowledge-interview), scripting a Mom-Test discovery interview (use interview-script) or planning one (use discovery-interview-prep), or sourcing the corpus the panel is built from (use yoda-data-sourcing). Never treats a synthetic response as validation.",
   "type": "interactive",
   "supersedes": "none",
   "stage": "02",
   "hub": false,
   "summary": "Takes a concept, a message, or a flow you are about to take to real customers, and runs it past a small panel of synthetic users built from your YODA corpus — the field logs, shadow threads, and tacit captures a foundation model cannot reach.",
   "triggers": [
    "Can I test this concept before I book real interviews?",
    "Simulate a user for this pitch.",
    "Dry-run the pitch / message before I take it to customers.",
    "Build me a synthetic panel from our data to pre-test the flow.",
    "Which of these two messages should I even bother interviewing about?"
   ],
   "mustNotFire": [
    {
     "phrase": "Shadow our expert doing the task and capture their judgment",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Write the Mom-Test script for my discovery interview",
     "sibling": "interview-script",
     "local": false
    },
    {
     "phrase": "What data can't a competitor get — build our corpus",
     "sibling": "yoda-data-sourcing",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "To watch a real expert do a real task and capture their judgment",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></p>",
     "why": "That creates real behaviour signal (0.7); this simulates and caps at [Hypothesis]. This runs before it to decide whether that interview is worth booking."
    },
    {
     "want": "A Mom-Test script for a real discovery interview",
     "useInstead": [
      {
       "name": "interview-script",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>interview-script</code></p>",
     "why": "That prepares questions for a real person; this poses a concept to a simulation."
    },
    {
     "want": "To plan/prep real discovery interviews (goal, segment, method)",
     "useInstead": [
      {
       "name": "discovery-interview-prep",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>discovery-interview-prep</code></p>",
     "why": "That plans the real round; this pre-screens what the round should even cover."
    },
    {
     "want": "To source the proprietary data the panel is built from",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></p>",
     "why": "That finds the corpus; this consumes it. No corpus, no grounded panel — see Step 0."
    },
    {
     "want": "To find the unmet need, or map who the buyer is",
     "useInstead": [
      {
       "name": "unserved-needs-finder",
       "local": true
      },
      {
       "name": "user-buyer-decider-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a>, <a class=\"skill-ref\" href=\"#/skill/user-buyer-decider-map\"><code>user-buyer-decider-map</code></a></p>",
     "why": "Those define what to build for and who buys; this pre-tests a concept once you have one."
    }
   ],
   "related": [
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "tacit-knowledge-interview",
     "local": true
    },
    {
     "name": "interview-script",
     "local": false
    },
    {
     "name": "discovery-interview-prep",
     "local": false
    },
    {
     "name": "unserved-needs-finder",
     "local": true
    },
    {
     "name": "user-buyer-decider-map",
     "local": true
    },
    {
     "name": "prototyping-pretotyping",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — No corpus, no panel",
     "anchor": "step-0-no-corpus-no-panel"
    },
    {
     "n": 2,
     "label": "Step 1 — Declare the target and the kill question",
     "anchor": "step-1-declare-the-target-and-the-kill-question"
    },
    {
     "n": 3,
     "label": "Step 2 — Build the panel from the corpus, not from imagination",
     "anchor": "step-2-build-the-panel-from-the-corpus-not-from-imagination"
    },
    {
     "n": 4,
     "label": "Step 3 — Run the pre-test as a kill screen",
     "anchor": "step-3-run-the-pre-test-as-a-kill-screen"
    },
    {
     "n": 5,
     "label": "Step 4 — The lie ledger",
     "anchor": "step-4-the-lie-ledger"
    },
    {
     "n": 6,
     "label": "Step 5 — Verdict: kill / revise / promote",
     "anchor": "step-5-verdict-kill-revise-promote"
    }
   ],
   "gotchaHeadlines": [
    "The confirmation machine",
    "An ungrounded panel is the base model's prior in costume",
    "Panel inflation feels like rigour and isn't",
    "Survival is not validation",
    "Demand characteristics",
    "Invented quotes are not corpus quotes"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "tacit-knowledge-interview": {
   "name": "tacit-knowledge-interview",
   "description": "Shadow an expert doing real work and extract the judgment calls they make without noticing. Fires when a fellow says \"interview an expert\", \"capture how they decide\", \"watch them work\", \"shadow an operator\", \"capture the judgment\", or \"encode when they override the rule\". Runs a watch-30 / replay-20 / edge-cases-10 session and returns a Tacit-Knowledge Capture: the explicit procedure split from the tacit judgment, each fork tagged with the cue read and the exception that overrides it. NOT for scripting a Mom-Test customer discovery interview (use interview-script), planning discovery interviews about a problem or churn (use discovery-interview-prep), or condensing a transcript you already have (use summarize-interview).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "02",
   "hub": false,
   "summary": "Takes an expert who does a task better than they can explain it and returns the part they cannot explain: the forks where they chose without a written rule and never noticed choosing.",
   "triggers": [
    "I want to interview an expert and capture how they actually decide, not the SOP.",
    "Let me shadow a plant supervisor for a shift and capture the judgment calls — like when they override the alarm.",
    "Watch our senior operator work and pull out the calls they make without noticing.",
    "Shadow the safety officer while they sign off permits and capture why they sometimes say no.",
    "Encode when the shift lead overrides the runbook — the real judgment behind the procedure."
   ],
   "mustNotFire": [
    {
     "phrase": "Write me a Mom-Test customer interview script to validate this problem.",
     "sibling": "interview-script",
     "local": false
    },
    {
     "phrase": "Help me plan discovery interviews to find out why customers churned last quarter.",
     "sibling": "discovery-interview-prep",
     "local": false
    },
    {
     "phrase": "Summarize this interview transcript into key insights.",
     "sibling": "summarize-interview",
     "local": false
    }
   ],
   "handoffs": [
    {
     "want": "A Mom-Test script to learn a customer's problem or JTBD",
     "useInstead": [
      {
       "name": "interview-script",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>interview-script</code></p>",
     "why": "That prepares questions to validate a problem; this shadows an expert doing work to extract judgment."
    },
    {
     "want": "To plan/prep discovery interviews about churn or a new idea",
     "useInstead": [
      {
       "name": "discovery-interview-prep",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>discovery-interview-prep</code></p>",
     "why": "That picks a goal, segment, and methodology for problem discovery; this needs live observation of a task, not a plan."
    },
    {
     "want": "To condense an interview transcript already recorded",
     "useInstead": [
      {
       "name": "summarize-interview",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>summarize-interview</code></p>",
     "why": "That extracts signal from words you have; this creates new signal by watching behaviour you have not yet observed."
    },
    {
     "want": "To score a single signal on the evidence ladder",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></p>",
     "why": "That grades one claim; this produces the capture (and uses the ladder to weigh each fork)."
    },
    {
     "want": "To find data a model cannot already reach",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></p>",
     "why": "That locates proprietary data; this creates judgment data by observation. Related, not the same."
    }
   ],
   "related": [
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "concept-council",
     "local": true
    },
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "interview-script",
     "local": false
    },
    {
     "name": "discovery-interview-prep",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — Confirm you can watch the real task",
     "anchor": "step-0-confirm-you-can-watch-the-real-task"
    },
    {
     "n": 2,
     "label": "Step 1 — Watch 30: shadow silently",
     "anchor": "step-1-watch-30-shadow-silently"
    },
    {
     "n": 3,
     "label": "Step 2 — Replay 20: \"you did X there — why? always?\"",
     "anchor": "step-2-replay-20-you-did-x-there-why-always"
    },
    {
     "n": 4,
     "label": "Step 3 — Edge-cases 10: the exceptions that break the rule",
     "anchor": "step-3-edge-cases-10-the-exceptions-that-break-the-rule"
    },
    {
     "n": 5,
     "label": "Step 4 — Separate the two halves",
     "anchor": "step-4-separate-the-two-halves"
    },
    {
     "n": 6,
     "label": "Step 5 — Score each fork",
     "anchor": "step-5-score-each-fork"
    },
    {
     "n": 7,
     "label": "Step 6 — Name the load-bearing judgment",
     "anchor": "step-6-name-the-load-bearing-judgment"
    }
   ],
   "gotchaHeadlines": [
    "The expert recites the manual",
    "\"Experience\" and \"gut\" are non-answers",
    "The replay answer can contradict the watch",
    "Observer effect: they perform the SOP because you are there",
    "Interrupting the watch",
    "Solution in disguise: \"we just need documentation.\"",
    "A described session is not a watched one"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "evidence-ladder": {
   "name": "evidence-ladder",
   "description": "Weights a pile of \"validation\" by what people DID, not what they said. Takes interview quotes, sign-ups, LOIs, pilots, payments and places each on one ladder — money moved 1.0, behaviour observed 0.7, artefact shown 0.5, verbal commitment 0.3, opinion 0.1 — then returns a weighted evidence table, the weight of the load-bearing claim, and for every low signal the cheapest probe that raises it a rung. Fires on \"how strong is this signal\", \"score the interview\", \"did they actually validate\", \"weight this evidence\", \"is this real validation\". NOT a build gate on a problem (use problem-quality-scorecard), NOT a picker for which test to run next (use probe-matrix), NOT a transcript summary (use summarize-interview). This is the reference skill the rest of the module cites for the ladder.",
   "type": "generator",
   "supersedes": "none",
   "stage": "02",
   "hub": false,
   "summary": "Takes a pile of things a fellow is calling \"validation\" — quotes, landing-page sign-ups, letters of intent, paid pilots, payments — and weights each one by what the person actually did, on a single five-rung ladder.",
   "triggers": [
    "How strong is this signal?",
    "Score the interview — did I actually validate anything?",
    "Did they actually validate it, or did they just say nice things?",
    "Weight this evidence for me — three LOIs and forty sign-ups.",
    "Is this real validation or just enthusiasm?"
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem 1-5 and tell me if I should build it / go or no-go.",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Which test should I run to check this / how do I probe this?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Summarize this customer interview into JTBD and action items.",
     "sibling": "summarize-interview",
     "local": false
    }
   ],
   "handoffs": [
    {
     "want": "A build/no-build decision on one problem, scored to a gate",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — it gates a problem; this weights loose signals</p>",
     "why": null
    },
    {
     "want": "To pick which test to run next",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — this skill hands it the &quot;reach rung R&quot; target; it picks the probe</p>",
     "why": null
    },
    {
     "want": "A transcript turned into a structured summary",
     "useInstead": [
      {
       "name": "summarize-interview",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>summarize-interview</code> — it extracts; this weights</p>",
     "why": null
    },
    {
     "want": "The five qualitative whole-idea questions",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "To turn a solution back into a weighable claim",
     "useInstead": [
      {
       "name": "problem-statement",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>problem-statement</code>, then return here</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "summarize-interview",
     "local": false
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "paper-sketch-probe",
     "local": true
    },
    {
     "name": "wizard-of-oz-probe",
     "local": true
    },
    {
     "name": "concierge-probe",
     "local": true
    },
    {
     "name": "agent-concierge-probe",
     "local": true
    },
    {
     "name": "problem-statement",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — List every signal, one per row",
     "anchor": "step-1-list-every-signal-one-per-row"
    },
    {
     "n": 2,
     "label": "Step 2 — Place each signal on the ladder",
     "anchor": "step-2-place-each-signal-on-the-ladder"
    },
    {
     "n": 3,
     "label": "Step 3 — Weight each claim by its BEST rung, never the sum",
     "anchor": "step-3-weight-each-claim-by-its-best-rung-never-the-sum"
    },
    {
     "n": 4,
     "label": "Step 4 — Mark the ONE core claim and report the headline",
     "anchor": "step-4-mark-the-one-core-claim-and-report-the-headline"
    },
    {
     "n": 5,
     "label": "Step 5 — For every signal below 1.0, name the cheapest probe that reaches the\nnext rung",
     "anchor": "step-5-for-every-signal-below-1-0-name-the-cheapest-probe-that-reaches-the-next-"
    },
    {
     "n": 6,
     "label": "Step 6 — Write the one-line honest read",
     "anchor": "step-6-write-the-one-line-honest-read"
    }
   ],
   "gotchaHeadlines": [
    "Stacking enthusiasm",
    "Their reaction to your demo, counted as their artefact",
    "LOI or signed quote, counted as money",
    "Free sign-up, counted as behaviour",
    "Self-report, counted as observed",
    "Averaging the pile"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "continuous-discovery-engine": {
   "name": "continuous-discovery-engine",
   "description": "Stands up ONE living opportunity tree fed by three live inputs and keeps it current after launch. Fires when a fellow says \"set up discovery\", \"continuous discovery\", \"opportunity tree\", \"keep learning after launch\", or \"discovery after launch\". Returns an opportunity tree (outcome → opportunities → solutions → tests) wired to customer interviews, production traces, and eval telemetry — each feed stamped with its evidence rung, its cadence, and a named synthesis owner. NOT for scoring one signal's rung (use evidence-ladder), picking which probe tests one question (use probe-matrix), or running a single customer interview (use tacit-knowledge-interview).",
   "type": "interactive",
   "supersedes": "skills/discovery/opportunity-solution-tree",
   "stage": "02",
   "hub": false,
   "summary": "Turns discovery from a one-time drawing into a running loop.",
   "triggers": [
    "Set up discovery for our product.",
    "Keep learning after launch.",
    "Build me an opportunity tree.\" / \"opportunity tree",
    "I want continuous discovery.",
    "How do we run discovery after launch?"
   ],
   "mustNotFire": [
    {
     "phrase": "What rung is 'they said they'd buy it' on the evidence ladder?",
     "sibling": "evidence-ladder",
     "local": true
    },
    {
     "phrase": "Pick the cheapest honest test to check whether operators trust the alert.",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Prep me for / write my customer interview script.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "To score one signal's evidence rung (\"what rung is 'they said they'd buy it'?\")",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></p>",
     "why": "That grades a single signal; this wires many signals into a tree over time."
    },
    {
     "want": "To pick the cheapest honest test for one question",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></p>",
     "why": "That routes one question to one probe; this decides which node needs a probe, then hands off to it."
    },
    {
     "want": "To run or prep a single customer interview",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></p>",
     "why": "That is one interview; this consumes interview output as one of three feeds."
    },
    {
     "want": "A first-contact teardown of a raw, unscoped idea",
     "useInstead": [
      {
       "name": "concept-council",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a></p>",
     "why": "That runs before any product exists; this runs on a scoped or shipped one."
    },
    {
     "want": "The old static outcome→opportunity→solution→experiment drawing",
     "useInstead": [],
     "useInsteadHtml": "<p>(this skill supersedes it)</p>",
     "why": "opportunity-solution-tree draws once; this keeps it alive. Route here."
    }
   ],
   "related": [
    {
     "name": "opportunity-solution-tree",
     "local": false
    },
    {
     "name": "tacit-knowledge-interview",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "concept-council",
     "local": true
    },
    {
     "name": "problem-statement",
     "local": false
    },
    {
     "name": "beachhead-segment",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Set the outcome",
     "anchor": "step-1-set-the-outcome"
    },
    {
     "n": 2,
     "label": "Step 2 — Inventory the feeds (be honest about what is dark)",
     "anchor": "step-2-inventory-the-feeds-be-honest-about-what-is-dark"
    },
    {
     "n": 3,
     "label": "Step 3 — Wire each live feed",
     "anchor": "step-3-wire-each-live-feed"
    },
    {
     "n": 4,
     "label": "Step 4 — Build the tree, stamp every node",
     "anchor": "step-4-build-the-tree-stamp-every-node"
    },
    {
     "n": 5,
     "label": "Step 5 — Rank solutions with the evidence-weighted POC score",
     "anchor": "step-5-rank-solutions-with-the-evidence-weighted-poc-score"
    },
    {
     "n": 6,
     "label": "Step 6 — Set the synthesis cadence (the loop)",
     "anchor": "step-6-set-the-synthesis-cadence-the-loop"
    },
    {
     "n": 7,
     "label": "Step 7 — Demonstrate one turn of the loop",
     "anchor": "step-7-demonstrate-one-turn-of-the-loop"
    }
   ],
   "gotchaHeadlines": [
    "Poster relapse",
    "Machine-decides drift",
    "Trace worship",
    "Interview-only inflation (pre-launch)",
    "Eval telemetry mistaken for demand",
    "Stale branches read as live"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "pass"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "yoda-data-sourcing": {
   "name": "yoda-data-sourcing",
   "description": "Assemble a sourced proprietary-data corpus map — sort every candidate data source by one test (can a foundation model already reach it?) and keep only the workflow-trapped, permission-gated signal (shadow AI threads, operational logs, permits, vendor-locked sensor feeds, workflow exhaust) as the moat seed. Fires on \"get our own data\", \"what data do we own\", \"where's our proprietary data\", \"build the moat's seed\", \"what data can't a competitor get\". Not for drafting the contract that unlocks a gated source (use data-rights-clause, section 06), not for scoring whether one signal counts as real evidence (use evidence-ladder), not for running the interview that captures tacit judgment (use tacit-knowledge-interview).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "03",
   "hub": false,
   "summary": "Takes a fellow's list of candidate data sources and returns a sourced proprietary corpus map: every source scored on one axis first — can a foundation model already reach it?",
   "triggers": [
    "How do we get our own data?",
    "What data do we own?",
    "Where's our proprietary data?",
    "Help me build the seed of our data moat.",
    "What data can't a competitor get?"
   ],
   "mustNotFire": [
    {
     "phrase": "Draft the contract clause that gives us rights to the operator's telemetry",
     "sibling": "data-rights-clause",
     "local": true
    },
    {
     "phrase": "Is 'they said they'd buy it' strong enough evidence? Score this signal.",
     "sibling": "evidence-ladder",
     "local": true
    },
    {
     "phrase": "Run the interview that pulls the plant supervisor's tacit judgment out of their head",
     "sibling": "tacit-knowledge-interview",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Draft the clause / contract that gives us rights to the operator's telemetry\"",
     "useInstead": [
      {
       "name": "data-rights-clause",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming). This skill <em>flags</em> that a gated source needs a signed clause and points there; it does not write legal language.</p>",
     "why": null
    },
    {
     "want": "\"Is 'they said they'd buy it' strong enough evidence? Score this signal.\"",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>. That skill owns the rungs. This skill <em>uses</em> the ladder to weigh whether a source is real, but scoring a lone signal is not its job.</p>",
     "why": null
    },
    {
     "want": "\"Run the interview that pulls the supervisor's tacit judgment out of their head\"",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>. This skill can <em>list</em> tacit judgment as a proprietary seam; capturing it is a different runbook.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "data-rights-clause",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "tacit-knowledge-interview",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Anchor on the workflow, not the domain",
     "anchor": "step-1-anchor-on-the-workflow-not-the-domain"
    },
    {
     "n": 2,
     "label": "Step 2 — List candidates, seeded from the six seams",
     "anchor": "step-2-list-candidates-seeded-from-the-six-seams"
    },
    {
     "n": 3,
     "label": "Step 3 — Run the one test on every candidate: can a model already reach it?",
     "anchor": "step-3-run-the-one-test-on-every-candidate-can-a-model-already-reach-it"
    },
    {
     "n": 4,
     "label": "Step 4 — Separate \"model can't reach it\" from \"you can reach it\"",
     "anchor": "step-4-separate-model-can-t-reach-it-from-you-can-reach-it"
    },
    {
     "n": 5,
     "label": "Step 5 — Score reality, compounding, and assemble the map",
     "anchor": "step-5-score-reality-compounding-and-assemble-the-map"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "explicit-vs-tacit-capture": {
   "name": "explicit-vs-tacit-capture",
   "description": "Split a body of expertise into the tell-able procedures (explicit) and the show-only judgment (tacit), and flag the tacit half as the defensible product. Fires when a fellow says \"what's teachable vs judgment\", \"codify the expertise\", \"split explicit from tacit\", \"which part of our know-how is defensible\", \"what can we write down vs what's in their head\", or \"turn our expertise into a product spec\". Returns an Explicit/Tacit Ledger: every piece of know-how classified by one test — could a stranger execute it from the words alone? — with the tacit rows scored on the evidence ladder and the moat named. NOT for running the live watch session that observes an unobserved judgment (use tacit-knowledge-interview), NOT for sorting data sources by whether a model can already reach them (use yoda-data-sourcing), NOT for turning captured expertise into a labelled dataset and golden cases (use dataset-builder).",
   "type": "generator",
   "supersedes": "none",
   "stage": "03",
   "hub": false,
   "summary": "Takes a body of expertise the fellow already holds — an SOP, a field manual, a scoring rubric, a transcript of an expert talking through past calls, a stream of operator corrections, or a completed tacit-knowledge capture — and runs one test on every piece of it: could a competent stranger execute this from the written words alone, with no judgment, and get the expert's result?",
   "triggers": [
    "What's teachable here versus judgment?",
    "Help me codify our expert's expertise.",
    "Split the explicit from the tacit in our know-how.",
    "Which part of our expertise is actually defensible?",
    "What can we write down versus what's only in their head?"
   ],
   "mustNotFire": [
    {
     "phrase": "Set me up to sit with the expert and watch her make the call live.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Which of our data sources can a competitor's model already reach?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Turn the captured expertise into a labelled dataset and golden cases.",
     "sibling": "dataset-builder",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "To sit with an expert and watch the call live to observe an unobserved judgment",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></p>",
     "why": "That runs the watch-30 / replay-20 / edge-cases-10 session to create judgment data by observation; this classifies material you already hold. When this skill marks a tacit row a placeholder (0.1), that skill is how you capture it."
    },
    {
     "want": "To sort candidate data sources by whether a model can already reach them",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a></p>",
     "why": "That bands data sources R/G/P by reachability; this bands expertise E/T by tell-ability. Tacit judgment is one YODA seam, but the axis is different."
    },
    {
     "want": "To turn captured expertise into a labelled dataset and 20 golden cases",
     "useInstead": [
      {
       "name": "dataset-builder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/dataset-builder\"><code>dataset-builder</code></a></p>",
     "why": "That builds the eval set from captured material; this runs first and decides which expertise is the defensible tacit half worth building a dataset around."
    },
    {
     "want": "To separate a customer's job from the solution they asked for",
     "useInstead": [
      {
       "name": "jobs-to-be-done",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>jobs-to-be-done</code></p>",
     "why": "That separates job from solution on the demand side; this separates procedure from judgment on the expertise side. Absorbed, not the same call."
    }
   ],
   "related": [
    {
     "name": "tacit-knowledge-interview",
     "local": true
    },
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "dataset-builder",
     "local": true
    },
    {
     "name": "jobs-to-be-done",
     "local": false
    },
    {
     "name": "discovery/jobs-to-be-done",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Gather the material, name the decision",
     "anchor": "step-1-gather-the-material-name-the-decision"
    },
    {
     "n": 2,
     "label": "Step 2 — List every piece of know-how, one per row",
     "anchor": "step-2-list-every-piece-of-know-how-one-per-row"
    },
    {
     "n": 3,
     "label": "Step 3 — Run the tell-a-stranger test on every item",
     "anchor": "step-3-run-the-tell-a-stranger-test-on-every-item"
    },
    {
     "n": 4,
     "label": "Step 4 — For each T row, surface the cue and the condition",
     "anchor": "step-4-for-each-t-row-surface-the-cue-and-the-condition"
    },
    {
     "n": 5,
     "label": "Step 5 — Score each T row on the evidence ladder",
     "anchor": "step-5-score-each-t-row-on-the-evidence-ladder"
    },
    {
     "n": 6,
     "label": "Step 6 — Flag the moat, assemble the ledger",
     "anchor": "step-6-flag-the-moat-assemble-the-ledger"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "dataset-builder": {
   "name": "dataset-builder",
   "description": "Turn field artefacts into a labelled dataset and 20+ golden cases — the seed of the eval suite that gates the build. Attaches a ground-truth label to every real artefact, scores each label on the evidence ladder, and clears each case through four gates (provenance, ground-truth, unreachable, held-out) so a foundation model cannot pre-pass its own memorised test. Fires on \"make our own dataset\", \"create golden cases\", \"label this\", \"turn our field logs into a test set the model hasn't seen\", \"seed the eval suite\". Not for finding which sources are proprietary in the first place (use yoda-data-sourcing, section 03), not for composing the labelled cases into the four-band spread / autonomy level / cost budget of a scoreable spec (use eval-first-spec, section 07), not for splitting an expert's teachable procedure from show-only judgment (use explicit-vs-tacit-capture, section 03).",
   "type": "generator",
   "supersedes": "none",
   "stage": "03",
   "hub": false,
   "summary": "Takes the field artefacts a fellow already holds — the moat-seed rows yoda-data-sourcing surfaced — and turns them into two things: a labelled dataset (every artefact paired with a ground-truth label and its provenance) and the ≥20 golden cases carved out of it.",
   "triggers": [
    "Let's build our own dataset from the field logs.",
    "Create golden cases for our eval.",
    "Label this / label our field data so we can test the model.",
    "Turn these logs into a test set the model hasn't seen.",
    "Make the seed of our eval suite from our own data."
   ],
   "mustNotFire": [
    {
     "phrase": "Which of our candidate data sources are actually proprietary / where's our moat data?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Compose my 20 cases into the eval bands, pick the autonomy level, and set the cost-per-outcome budget.",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "Which of the expert's knowledge is teachable procedure vs show-only judgment?",
     "sibling": "explicit-vs-tacit-capture",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Which of our candidate sources are actually proprietary / where is our moat data?\"",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). It finds and bands the sources; this labels the artefacts those sources produce. Run it first; this second.</p>",
     "why": null
    },
    {
     "want": "\"I have my 20 labelled cases — now compose them into the typical/edge/adversarial spread, pick the autonomy level, and set the cost-per-outcome budget.\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07). This skill hands it the labelled seed; that skill writes the job line, the band composition, the pass/fail contract, autonomy, and cost. Do not poach the spec.</p>",
     "why": null
    },
    {
     "want": "\"Which of the expert's knowledge is teachable procedure vs show-only judgment?\"",
     "useInstead": [
      {
       "name": "explicit-vs-tacit-capture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/explicit-vs-tacit-capture\"><code>explicit-vs-tacit-capture</code></a> (section 03). This skill uses inter-rater disagreement to flag an unsettled label; deciding what is codifiable at all is that skill's job.</p>",
     "why": null
    },
    {
     "want": "\"Is this one signal strong enough evidence?\"",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02). This skill borrows the ladder to score a label; scoring a lone signal is that skill's job.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "explicit-vs-tacit-capture",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Pull the source, don't re-source it",
     "anchor": "step-1-pull-the-source-don-t-re-source-it"
    },
    {
     "n": 2,
     "label": "Step 2 — Fix the label schema before labelling anything",
     "anchor": "step-2-fix-the-label-schema-before-labelling-anything"
    },
    {
     "n": 3,
     "label": "Step 3 — Label each artefact and score the label on the ladder",
     "anchor": "step-3-label-each-artefact-and-score-the-label-on-the-ladder"
    },
    {
     "n": 4,
     "label": "Step 4 — Run the four gates on every case",
     "anchor": "step-4-run-the-four-gates-on-every-case"
    },
    {
     "n": 5,
     "label": "Step 5 — The contamination check (the YODA test on the case)",
     "anchor": "step-5-the-contamination-check-the-yoda-test-on-the-case"
    },
    {
     "n": 6,
     "label": "Step 6 — Count the golden cases and assemble the seed",
     "anchor": "step-6-count-the-golden-cases-and-assemble-the-seed"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "probe-matrix": {
   "name": "probe-matrix",
   "description": "Routes the ONE question a fellow needs answered to the cheapest probe that is HONEST about that question, using the probe honesty contract (paper/sketch, Wizard-of-Oz, concierge, agent-concierge — each honest about some things and lying about others). Fires on \"how do I test this cheaply\", \"which experiment\", \"what's the cheapest way to learn X\", \"which probe\", \"how do I validate this\". Output is a probe selection + plan: the question, the chosen probe, why it is honest about this question, what it will still lie about, cost, and a pre-registered pass/fail read-out — and it REFUSES a probe that lies about the very thing being tested, naming the honest one instead. NOT the how-to for running a probe (use the runbooks paper-sketch-probe / wizard-of-oz-probe / concierge-probe / agent-concierge-probe), NOT the build/no-build gate on the problem itself (problem-quality-scorecard), NOT how to score a signal you already hold (evidence-ladder).",
   "type": "interactive",
   "supersedes": "skills/discovery/prototyping-pretotyping",
   "stage": "04",
   "hub": false,
   "summary": "Turns \"how do I test this cheaply?\" into one decision: the single question you most need answered, matched to the cheapest probe that can answer it honestly.",
   "triggers": [
    "What's the cheapest way to test whether operators trust the alert?",
    "Which experiment should I run to learn if they'll pay?",
    "Which probe fits this question?",
    "How do I validate this cheaply before building?",
    "What's the cheapest way to learn whether plant managers would use the copilot?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this problem good enough to build?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Walk me through actually setting up the concierge probe — tooling and scripts.",
     "sibling": "concierge-probe",
     "local": true
    },
    {
     "phrase": "What evidence rung does 'they said they'd buy it' sit on?",
     "sibling": "evidence-ladder",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "The step-by-step to actually run a probe (tooling, scripts, human ops)",
     "useInstead": [
      {
       "name": "paper-sketch-probe",
       "local": true
      },
      {
       "name": "wizard-of-oz-probe",
       "local": true
      },
      {
       "name": "concierge-probe",
       "local": true
      },
      {
       "name": "agent-concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p>the runbook: <a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a>, or <a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a></p>",
     "why": null
    },
    {
     "want": "A build / no-build decision on the problem itself",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "To score a signal already in hand (an interview quote, a click, a payment)",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></p>",
     "why": null
    },
    {
     "want": "To reframe a solution-in-disguise back into a problem",
     "useInstead": [
      {
       "name": "problem-statement",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>problem-statement</code>, then return here</p>",
     "why": null
    },
    {
     "want": "Every risky assumption mapped across value / GTM / strategy / team",
     "useInstead": [
      {
       "name": "identify-assumptions-new",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>identify-assumptions-new</code></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "prototyping-pretotyping",
     "local": false
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "problem-statement",
     "local": false
    },
    {
     "name": "paper-sketch-probe",
     "local": true
    },
    {
     "name": "wizard-of-oz-probe",
     "local": true
    },
    {
     "name": "concierge-probe",
     "local": true
    },
    {
     "name": "agent-concierge-probe",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Extract the ONE question",
     "anchor": "step-1-extract-the-one-question"
    },
    {
     "n": 2,
     "label": "Step 2 — Classify the learning target",
     "anchor": "step-2-classify-the-learning-target"
    },
    {
     "n": 3,
     "label": "Step 3 — Read the honesty contract and pick the cheapest honest probe",
     "anchor": "step-3-read-the-honesty-contract-and-pick-the-cheapest-honest-probe"
    },
    {
     "n": 4,
     "label": "Step 4 — Kill check",
     "anchor": "step-4-kill-check"
    },
    {
     "n": 5,
     "label": "Step 5 — Pre-register the pass/fail read-out",
     "anchor": "step-5-pre-register-the-pass-fail-read-out"
    },
    {
     "n": 6,
     "label": "Step 6 — Route to the runbook",
     "anchor": "step-6-route-to-the-runbook"
    }
   ],
   "gotchaHeadlines": [
    "Trust is not demand",
    "Cheapest ≠ honest",
    "Wizard-of-Oz feasibility trap",
    "One question, one probe",
    "Don't over-escalate the mundane",
    "The obvious pick still owes you a lie"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "pass"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "paper-sketch-probe": {
   "name": "paper-sketch-probe",
   "description": "Fires when a fellow wants to test a workflow on paper before building it — \"paper test\", \"sketch it\", \"paper prototype\", \"sketch probe\", \"draw the flow and check they can follow it\". Output is a hand-drawn workflow sketch plus a structured read-out naming what was legible and where the decision lived. NOT for choosing which probe to run (that is `probe-matrix`), and NOT for testing demand, trust, or willingness to pay — a sketch lies about all three; route those to `wizard-of-oz-probe` or `concierge-probe`.",
   "type": "generator",
   "supersedes": "none",
   "stage": "04",
   "hub": false,
   "summary": "Compresses a \"does this workflow read the way I think it does\" question into a 30-minute test.",
   "triggers": [
    "Can you paper-test the factory-copilot workflow before we build it?",
    "Let's sketch it — I want to see if a plant manager can follow the alert-to-action steps.",
    "I want to run a paper prototype of the invoice-to-approval flow.",
    "Run a sketch probe on the incident-report workflow.",
    "Draw the 3-screen signup and check a new user can follow it.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Fake the backend so users think the anomaly detection is live and see if they act.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    },
    {
     "phrase": "I'll run it by hand myself for the first ten customers to see if they'll pay.",
     "sibling": "concierge-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Would they trust the output enough to act\"",
     "useInstead": [
      {
       "name": "concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> (trust needs real stakes)</p>",
     "why": null
    },
    {
     "want": "\"Would they use it if it worked\"",
     "useInstead": [
      {
       "name": "wizard-of-oz-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a></p>",
     "why": null
    },
    {
     "want": "\"Will they pay / is there demand\"",
     "useInstead": [
      {
       "name": "wizard-of-oz-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a>, then a fake-door; a sketch lies about demand</p>",
     "why": null
    },
    {
     "want": "\"Which probe answers my question at all\"",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "wizard-of-oz-probe",
     "local": true
    },
    {
     "name": "concierge-probe",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "skills/discovery/prototyping-pretotyping",
     "local": false
    },
    {
     "name": "prototyping-pretotyping",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Write the one claim (2 min)",
     "anchor": "write-the-one-claim-2-min"
    },
    {
     "n": 2,
     "label": "Draw the workflow (10 min)",
     "anchor": "draw-the-workflow-10-min"
    },
    {
     "n": 3,
     "label": "Recruit one real operator (target segment)",
     "anchor": "recruit-one-real-operator-target-segment"
    },
    {
     "n": 4,
     "label": "Run silent (10 min)",
     "anchor": "run-silent-10-min"
    },
    {
     "n": 5,
     "label": "Classify each pause (5 min)",
     "anchor": "classify-each-pause-5-min"
    },
    {
     "n": 6,
     "label": "Write the read-out (3 min)",
     "anchor": "write-the-read-out-3-min"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "wizard-of-oz-probe": {
   "name": "wizard-of-oz-probe",
   "description": "Fires when a fellow wants a human to run the machine behind the curtain for a day to test usage — \"fake the backend\", \"wizard of oz\", \"woz test\", \"human behind the curtain\", \"have a person answer the requests and see if they act on it\". Output is a WoZ setup plus a result read-out that reports usage behaviour and an explicit \"what this does NOT prove\" section for feasibility, unit cost, and scale. NOT for choosing which probe to run (that is `probe-matrix`), NOT for testing whether a workflow reads on paper (that is `paper-sketch-probe`), and NOT for finding real cost-per-task (that is `agent-concierge-probe`).",
   "type": "generator",
   "supersedes": "none",
   "stage": "04",
   "hub": false,
   "summary": "Compresses a \"would they actually use this if it worked\" question into a one-day test.",
   "triggers": [
    "Let's fake the backend and have a human answer the requests for a day.",
    "Run a wizard of oz on the PO-generation workflow.",
    "I want a woz test: will managers act on the recommendation if it arrives reliably?",
    "Put a human behind the curtain for the risk-report requests this week.",
    "Fake the auto-summary email by hand and see if anyone reads it.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Just sketch the workflow on paper and check they can follow the steps.",
     "sibling": "paper-sketch-probe",
     "local": true
    },
    {
     "phrase": "I need our real cost-per-task before we price it.",
     "sibling": "agent-concierge-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Can an operator follow the workflow on the screens\"",
     "useInstead": [
      {
       "name": "paper-sketch-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></p>",
     "why": null
    },
    {
     "want": "\"What is our real cost per task\"",
     "useInstead": [
      {
       "name": "agent-concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/agent-concierge-probe\"><code>agent-concierge-probe</code></a> (honest to the cent)</p>",
     "why": null
    },
    {
     "want": "\"Which probe answers my question at all\"",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "paper-sketch-probe",
     "local": true
    },
    {
     "name": "agent-concierge-probe",
     "local": true
    },
    {
     "name": "concierge-probe",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "skills/discovery/prototyping-pretotyping",
     "local": false
    },
    {
     "name": "prototyping-pretotyping",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Write the one claim",
     "anchor": "write-the-one-claim"
    },
    {
     "n": 2,
     "label": "Design the curtain",
     "anchor": "design-the-curtain"
    },
    {
     "n": 3,
     "label": "Set the fidelity contract — before running",
     "anchor": "set-the-fidelity-contract-before-running"
    },
    {
     "n": 4,
     "label": "Recruit real operators, 3–8, target segment",
     "anchor": "recruit-real-operators-3-8-target-segment"
    },
    {
     "n": 5,
     "label": "Run the window. Log every interaction",
     "anchor": "run-the-window-log-every-interaction"
    },
    {
     "n": 6,
     "label": "Write the read-out",
     "anchor": "write-the-read-out"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "concierge-probe": {
   "name": "concierge-probe",
   "description": "Runbook for delivering a product outcome by hand, as the founder, to ONE real customer — to test willingness to pay and the real workflow including the exceptions that break automation. Fires on \"do it by hand first\", \"concierge test\", \"concierge MVP\", \"deliver it manually\", \"founder-delivered version before we automate\". Output: a concierge log plus a willingness-to-pay signal scored on the evidence ladder (money charged 1.0 beats a verbal yes 0.3). Not probe-matrix (that picks which probe); not agent-concierge-probe (an agent, not the founder, runs the task, and it measures cost not WTP); not wizard-of-oz-probe (fakes the interface to test would-they-use-it, not whether they pay).",
   "type": "generator",
   "supersedes": "none",
   "stage": "04",
   "hub": false,
   "summary": "You deliver the outcome by hand — no product, no automation — to one paying customer, and log what really happens.",
   "triggers": [
    "Let's do it by hand first before we build the reporting tool.",
    "Run a concierge test on Barrier Intelligence's morning alert.",
    "Concierge MVP for the Azraq quarterly risk report.",
    "I'll deliver it manually to one operator and charge them £400.",
    "Give me the founder-delivered version of the Durian digest before we automate."
   ],
   "mustNotFire": [
    {
     "phrase": "Which probe should I run to test whether operators trust the alert?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Let an agent run the task end to end and tell me the cost per outcome.",
     "sibling": "agent-concierge-probe",
     "local": true
    },
    {
     "phrase": "Fake the interface and I'll play the backend by hand to see if they'd use it.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "You have not decided which probe to run",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>probe-matrix</code></p>",
     "why": null
    },
    {
     "want": "You want an agent, not yourself, to run the task and price it",
     "useInstead": [
      {
       "name": "agent-concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>agent-concierge-probe</code></p>",
     "why": null
    },
    {
     "want": "You want to test whether people would use a slick interface if it worked, without doing the work by hand",
     "useInstead": [
      {
       "name": "wizard-of-oz-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>wizard-of-oz-probe</code></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "../probe-matrix",
     "local": false
    },
    {
     "name": "../agent-concierge-probe",
     "local": false
    },
    {
     "name": "../wizard-of-oz-probe",
     "local": false
    },
    {
     "name": "../../02-customer-discovery/evidence-ladder",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Scope to one",
     "anchor": "step-1-scope-to-one"
    },
    {
     "n": 2,
     "label": "Step 2 — Set the price before you deliver",
     "anchor": "step-2-set-the-price-before-you-deliver"
    },
    {
     "n": 3,
     "label": "Step 3 — Deliver by hand, log everything",
     "anchor": "step-3-deliver-by-hand-log-everything"
    },
    {
     "n": 4,
     "label": "Step 4 — Score WTP on the evidence ladder",
     "anchor": "step-4-score-wtp-on-the-evidence-ladder"
    },
    {
     "n": 5,
     "label": "Step 5 — Read out against the honesty contract",
     "anchor": "step-5-read-out-against-the-honesty-contract"
    }
   ],
   "gotchaHeadlines": [
    "Hiding behind a fake UI",
    "Smuggling in a pre-chosen solution",
    "Free pilots",
    "You solve the exceptions silently",
    "Concluding scale",
    "Counting your own enthusiasm as demand"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "agent-concierge-probe": {
   "name": "agent-concierge-probe",
   "description": "Runbook for having an AGENT run a real task end to end, to measure the automation frontier (which steps it does unaided vs which need a human) and the cost-per-outcome to the cent (input+output tokens + tool calls + human-fix minutes, all priced). Fires on \"agent does the task\", \"measure cost per outcome\", \"agent concierge\", \"automation frontier\", \"price it to the cent\", \"what can the agent not do unaided\". Output: a cost-per-outcome read with the full breakdown, plus a frontier map. Not probe-matrix (that picks the probe); not concierge-probe (the founder, not an agent, runs it, and it tests willingness to pay); not wizard-of-oz-probe; not paper-sketch-probe (that tests whether a workflow reads on paper). It is honest about cost and frontier and says nothing about self-serve UX or trust/adoption — it lies about those.",
   "type": "generator",
   "supersedes": "none",
   "stage": "04",
   "hub": false,
   "summary": "You hand a real, already-mapped task to an agent, let it run the task end to end across several outcomes, and instrument every run.",
   "triggers": [
    "Let an agent do the task end to end and see how far it gets.",
    "Measure the cost per outcome for the Mentix work-order triage.",
    "Run an agent concierge on Durian's first workflow.",
    "Where's the automation frontier — what can the agent not do unaided?",
    "Price this to the cent: tokens, tool calls, and human-fix time per outcome."
   ],
   "mustNotFire": [
    {
     "phrase": "I'll deliver it by hand myself and charge one operator.",
     "sibling": "concierge-probe",
     "local": true
    },
    {
     "phrase": "Which probe fits testing cost per outcome?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Sketch the screens on paper and walk the operator through it.",
     "sibling": "paper-sketch-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "You have not chosen a probe",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>probe-matrix</code></p>",
     "why": null
    },
    {
     "want": "You want to test willingness to pay, or you (the founder) will do the task by hand",
     "useInstead": [
      {
       "name": "concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>concierge-probe</code></p>",
     "why": null
    },
    {
     "want": "You want to fake an interface to test would-they-use-it",
     "useInstead": [
      {
       "name": "wizard-of-oz-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>wizard-of-oz-probe</code></p>",
     "why": null
    },
    {
     "want": "You want to test whether a workflow reads / is legible on paper before anyone builds it",
     "useInstead": [
      {
       "name": "paper-sketch-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><code>paper-sketch-probe</code></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "../probe-matrix",
     "local": false
    },
    {
     "name": "../concierge-probe",
     "local": false
    },
    {
     "name": "../wizard-of-oz-probe",
     "local": false
    },
    {
     "name": "../../02-customer-discovery/evidence-ladder",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Take a mapped workflow",
     "anchor": "step-1-take-a-mapped-workflow"
    },
    {
     "n": 2,
     "label": "Step 2 — Instrument before you run",
     "anchor": "step-2-instrument-before-you-run"
    },
    {
     "n": 3,
     "label": "Step 3 — Run N outcomes",
     "anchor": "step-3-run-n-outcomes"
    },
    {
     "n": 4,
     "label": "Step 4 — Price it to the cent",
     "anchor": "step-4-price-it-to-the-cent"
    },
    {
     "n": 5,
     "label": "Step 5 — Map the frontier",
     "anchor": "step-5-map-the-frontier"
    },
    {
     "n": 6,
     "label": "Step 6 — Read out against the honesty contract",
     "anchor": "step-6-read-out-against-the-honesty-contract"
    }
   ],
   "gotchaHeadlines": [
    "The invisible human",
    "N=1 costing",
    "Bare-number costing",
    "Frontier drift into adoption"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "product-frame-stack": {
   "name": "product-frame-stack",
   "description": "Walks one validated problem up a load-bearing stack — validated problem → vision → strategy → product vision → North Star → OKRs → dual-track roadmap — and BLOCKS any layer from resting on an unvalidated problem below it. Fires on \"frame the business\", \"vision to roadmap\", \"what's the strategy\", \"turn this validated problem into a roadmap\", \"give me the vision, North Star and OKRs\". Output is a filled frame stack where every layer inherits the problem's evidence rung and every roadmap item ladders to a North Star. NOT the go/no-go that validates the problem in the first place (use problem-quality-scorecard / so-what-stress-test — this consumes their verdict), NOT the desirable/feasible/viable score (four-lenses-test), NOT the post-launch metric-tree and retention check (metrics-that-matter).",
   "type": "generator",
   "supersedes": "none",
   "stage": "05",
   "hub": false,
   "summary": "Turns a validated problem into the full strategic frame in one pass: vision, strategy, product vision, North Star, OKRs, and a dual-track roadmap.",
   "triggers": [
    "Frame the business — vision to roadmap.",
    "What's our strategy?",
    "We passed the problem gate — now what's the frame?",
    "Give me the vision, North Star, and OKRs for this.",
    "Turn this validated problem into a roadmap."
   ],
   "mustNotFire": [
    {
     "phrase": "Score this problem across the eight dimensions — go or no-go?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Should we build this — is it desirable, feasible, viable?",
     "sibling": "four-lenses-test",
     "local": true
    },
    {
     "phrase": "What metrics matter after launch — is retention flattening?",
     "sibling": "metrics-that-matter",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Score this problem across the eight dimensions — go or no-go?\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (the gate this consumes)</p>",
     "why": null
    },
    {
     "want": "\"Is this desirable / feasible / viable — should we build it?\"",
     "useInstead": [
      {
       "name": "four-lenses-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/four-lenses-test\"><code>four-lenses-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"What metrics matter after launch? Is retention flattening?\"",
     "useInstead": [
      {
       "name": "metrics-that-matter",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a></p>",
     "why": null
    },
    {
     "want": "\"What should we actually build — invent the solution?\"",
     "useInstead": [
      {
       "name": "invent-by-hand",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/invent-by-hand\"><code>invent-by-hand</code></a></p>",
     "why": null
    },
    {
     "want": "\"State this as the one decision it changes.\"",
     "useInstead": [
      {
       "name": "product-as-decision",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/product-as-decision\"><code>product-as-decision</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "concept/business-model",
     "local": false
    },
    {
     "name": "concept/recommendation-canvas",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "product-as-decision",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "four-lenses-test",
     "local": true
    },
    {
     "name": "metrics-that-matter",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Layer 0 — Gate check (the floor). Apply this first, in order",
     "anchor": "layer-0-gate-check-the-floor-apply-this-first-in-order"
    },
    {
     "n": 2,
     "label": "Layer 1 — Vision",
     "anchor": "layer-1-vision"
    },
    {
     "n": 3,
     "label": "Layer 2 — Strategy",
     "anchor": "layer-2-strategy"
    },
    {
     "n": 4,
     "label": "Layer 3 — Product vision",
     "anchor": "layer-3-product-vision"
    },
    {
     "n": 5,
     "label": "Layer 4 — North Star",
     "anchor": "layer-4-north-star"
    },
    {
     "n": 6,
     "label": "Layer 5 — OKRs",
     "anchor": "layer-5-okrs"
    },
    {
     "n": 7,
     "label": "Layer 6 — Roadmap (dual-track)",
     "anchor": "layer-6-roadmap-dual-track"
    }
   ],
   "gotchaHeadlines": [
    "Building on an ungated problem",
    "Strategy that is really a solution",
    "Lagging North Star",
    "Roadmap as a dated feature list",
    "Ceiling inflation",
    "Vision as a product spec"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "four-lenses-test": {
   "name": "four-lenses-test",
   "description": "Scores a specific concept across the four build-risk lenses — Desirability, Usability, Feasibility, Viability — where each lens is graded ONLY by its named tool (onion+JTBD+Kano for Desirability, a watched usability observation for Usability, a dev spike for Feasibility, ICE anchored to measured value for Viability) and run by its dual-track owner (Product/Design discovery beside Engineering delivery). Fires on \"is this desirable / usable / feasible / viable\", \"should we build it\", \"run the four lenses\", \"go or no-go on this concept\", \"is this worth building\". Output is a filled Four-Lens Scorecard: per-lens tool, owner, evidence + ladder weight, score, and an AND gate that KILLS the go if any single lens fails, every claim tagged [Fact]/[Assumption]/[Hypothesis]. NOT for the full problem→vision→strategy→roadmap spine (use product-frame-stack), NOT for scoring the PROBLEM on 8 dimensions (use problem-quality-scorecard), NOT for the five-question so-what gut check on the whole idea (use so-what-stress-test).",
   "type": "generator",
   "supersedes": "none",
   "stage": "05",
   "hub": false,
   "summary": "Takes one concept the fellow is thinking of building and forces a verdict on four separate risks — Desirability (do they want it enough to change behaviour or pay), Usability (can they actually get the outcome), Feasibility (can we build it at the accuracy/latency/cost the decision needs), Viability (does the money work).",
   "triggers": [
    "Is this desirable, usable, feasible, and viable?",
    "Should we build it? Go or no-go on this concept.",
    "Run the four lenses on this idea.",
    "Score this idea across desirability, feasibility, and viability.",
    "Is this worth building?"
   ],
   "mustNotFire": [
    {
     "phrase": "Walk me from validated problem to vision, strategy, North Star, and roadmap.",
     "sibling": "product-frame-stack",
     "local": true
    },
    {
     "phrase": "Score this problem across the eight dimensions — is it worth solving?",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Give me the five-question so-what gut check on the whole idea.",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Walk me from validated problem to vision, strategy, North Star, roadmap.\"",
     "useInstead": [
      {
       "name": "product-frame-stack",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/product-frame-stack\"><code>product-frame-stack</code></a></p>",
     "why": null
    },
    {
     "want": "\"Score this PROBLEM across the eight dimensions — is it worth solving?\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a></p>",
     "why": null
    },
    {
     "want": "\"Give me the five-question so-what gut check on the whole idea.\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></p>",
     "why": null
    },
    {
     "want": "\"Just find and prioritise the unserved need.\"",
     "useInstead": [
      {
       "name": "unserved-needs-finder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/unserved-needs-finder\"><code>unserved-needs-finder</code></a></p>",
     "why": null
    },
    {
     "want": "\"Run the actual usability session and write the findings.\"",
     "useInstead": [
      {
       "name": "usability-test-protocol",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a></p>",
     "why": null
    },
    {
     "want": "\"List every risky assumption across the eight risk categories.\"",
     "useInstead": [
      {
       "name": "identify-assumptions-new",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>identify-assumptions-new</code></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "product-frame-stack",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    },
    {
     "name": "unserved-needs-finder",
     "local": true
    },
    {
     "name": "usability-test-protocol",
     "local": true
    },
    {
     "name": "first-mocks",
     "local": true
    },
    {
     "name": "value-based-pricing",
     "local": true
    },
    {
     "name": "physics-floor-gap",
     "local": true
    },
    {
     "name": "concept/recommendation-canvas",
     "local": false
    },
    {
     "name": "discovery/identify-assumptions-new",
     "local": false
    },
    {
     "name": "supersedes: none",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — Name the one concept",
     "anchor": "step-0-name-the-one-concept"
    },
    {
     "n": 2,
     "label": "Step 1 — Assign the tool and owner to each lens",
     "anchor": "step-1-assign-the-tool-and-owner-to-each-lens"
    },
    {
     "n": 3,
     "label": "Step 2 — Score each lens",
     "anchor": "step-2-score-each-lens"
    },
    {
     "n": 4,
     "label": "Step 3 — Apply the gate (AND, never average)",
     "anchor": "step-3-apply-the-gate-and-never-average"
    },
    {
     "n": 5,
     "label": "Step 4 — Name the next probe per lens",
     "anchor": "step-4-name-the-next-probe-per-lens"
    },
    {
     "n": 6,
     "label": "Step 5 — Write the one-line verdict",
     "anchor": "step-5-write-the-one-line-verdict"
    }
   ],
   "gotchaHeadlines": [
    "Averaging the four",
    "A lens with no tool",
    "Feasibility by estimate instead of spike",
    "Usability tested as opinion",
    "Viability priced on cost-plus or a competitor",
    "Lensing a fog"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "first-mocks": {
   "name": "first-mocks",
   "description": "Turns a concept into the cheapest concrete artefact a human can react to, via the no-code make-sequence: Crazy 8s → paper/Miro flow → digital mock → clickable hybrid in v0 or Figma Make, built in one afternoon. Fires on \"mock it up\", \"run Crazy 8s\", \"clickable prototype\", \"turn this idea into something I can click\", \"get from a rough idea to a prototype in an afternoon\". Output is a Clickable-Prototype Plan: the ONE thing the mock must provoke a reaction to, the fidelity band, the no-code ceiling, and the hand-off to a real reaction. NOT which experiment to run (probe-matrix), NOT running the test session (usability-test-protocol), NOT the visual / UI craft — colour, type, distinctive components — which it ROUTES to impeccable / shape / design and never restates. Bans jumping to code.",
   "type": "interactive",
   "supersedes": "none",
   "stage": "05",
   "hub": false,
   "summary": "Takes a concept you can only describe in words and forces it down to the cheapest artefact a human can actually react to.",
   "triggers": [
    "Let's mock this up — can you help me mock up the flow?",
    "Run Crazy 8s on this screen.",
    "I want a clickable prototype by end of day.",
    "Turn this idea into something I can click through.",
    "How do I get from a rough idea to a prototype in an afternoon without writing code?"
   ],
   "mustNotFire": [
    {
     "phrase": "Which cheap experiment should I run to learn if they'll pay?",
     "sibling": "probe-matrix",
     "local": true
    },
    {
     "phrase": "Design the colour system and typography for this screen.",
     "sibling": "impeccable",
     "local": false
    },
    {
     "phrase": "Run the usability session and tell me how to watch the user.",
     "sibling": "usability-test-protocol",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "Which cheap experiment answers their ONE learning question (paper / WoZ / concierge / agent)",
     "useInstead": [
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a></p>",
     "why": "That selects the experiment and its honesty; this MAKES an artefact. Route there first if the question is \"which test.\""
    },
    {
     "want": "The paper sketch run as an evidence-gathering probe",
     "useInstead": [
      {
       "name": "paper-sketch-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></p>",
     "why": "That runs a sketch as a probe with a read-out; the paper step here is one rung in a make-sequence, not the probe."
    },
    {
     "want": "To watch a user react to the mock and score it",
     "useInstead": [
      {
       "name": "usability-test-protocol",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a></p>",
     "why": "That runs the session and captures behaviour (0.7); this produces the thing the session uses."
    },
    {
     "want": "The visual / UI craft — layout, colour, type, distinctive non-generic components",
     "useInstead": [
      {
       "name": "impeccable",
       "local": false
      },
      {
       "name": "shape",
       "local": false
      },
      {
       "name": "design/*",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>impeccable</code> / <code>shape</code> / <code>design/*</code></p>",
     "why": "Those own the look and do it better. This routes to them and never restates them — restating one is the kill line."
    },
    {
     "want": "To write the real product code",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      },
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a>, <a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07)</p>",
     "why": "The moment you write product code you have left first-mocks. Code is banned at this stage."
    }
   ],
   "related": [
    {
     "name": "discovery/prototyping-pretotyping",
     "local": false
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "usability-test-protocol",
     "local": true
    },
    {
     "name": "impeccable",
     "local": false
    },
    {
     "name": "shape",
     "local": false
    },
    {
     "name": "design/*",
     "local": false
    },
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "v1-launch-bar",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — Name the ONE thing the mock must provoke a reaction to",
     "anchor": "step-0-name-the-one-thing-the-mock-must-provoke-a-reaction-to"
    },
    {
     "n": 2,
     "label": "Step 1 — Crazy 8s",
     "anchor": "step-1-crazy-8s"
    },
    {
     "n": 3,
     "label": "Step 2 — Converge to one flow on paper / Miro",
     "anchor": "step-2-converge-to-one-flow-on-paper-miro"
    },
    {
     "n": 4,
     "label": "Step 3 — Digital mock, no code",
     "anchor": "step-3-digital-mock-no-code"
    },
    {
     "n": 5,
     "label": "Step 4 — Clickable hybrid in an afternoon",
     "anchor": "step-4-clickable-hybrid-in-an-afternoon"
    },
    {
     "n": 6,
     "label": "Step 5 — Route the visual craft OUT",
     "anchor": "step-5-route-the-visual-craft-out"
    },
    {
     "n": 7,
     "label": "Step 6 — Hand to the reaction, pre-registered",
     "anchor": "step-6-hand-to-the-reaction-pre-registered"
    }
   ],
   "gotchaHeadlines": [
    "Code is the seductive shortcut and the trap",
    "Skipping the Crazy 8s to the idea you already had",
    "Polishing pixels inside first-mocks",
    "Reacting to the mock as if it were evidence",
    "A mock aimed at everything"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "usability-test-protocol": {
   "name": "usability-test-protocol",
   "description": "Run a moderated usability session on a working prototype and return findings tied to the screen, not the user. Fires when a fellow says \"run a usability test\", \"watch a user try it\", \"usability protocol\", \"can a first-time user complete X\", or \"see where they get stuck\". Product runs, Engineering watches muted, Design notes; the task is framed as a goal not an instruction, the user is kept in user mode (no leading, no explaining, no \"do you like it\"), and every finding is scored on observed task success (behaviour 0.7), never stated preference (opinion 0.1). Output is a Usability Findings sheet — each defect tied to a step, counted across users, severity by frequency × blocking. NOT for building the prototype (use `first-mocks`; this tests what that builds), NOT for shadowing an expert to capture their judgment (use `tacit-knowledge-interview`; that mines expertise, this tests your design), and NOT for testing demand or willingness to pay (a user can complete every task and still never want it — route to `wizard-of-oz-probe` / `concierge-probe`).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "05",
   "hub": false,
   "summary": "Compresses \"does the design actually work\" into a watched session with real target users.",
   "triggers": [
    "We've got a clickable v0 — run a usability test with five plant managers and see where they get stuck.",
    "Watch a user try the new alert flow and tell me if they can complete it without help.",
    "I need a usability protocol — who runs it, who watches, what do we measure?",
    "Can a first-time rig supervisor renew the expiring permit on our prototype unaided?",
    "Sit one person in front of the 3-screen settings flow and check they can change their notification prefs.\" (mundane)"
   ],
   "mustNotFire": [
    {
     "phrase": "Shadow our senior gas engineer on his rounds and capture how he decides which readings to trust.",
     "sibling": "tacit-knowledge-interview",
     "local": true
    },
    {
     "phrase": "Mock up a clickable version of the alert flow so we have something to test.",
     "sibling": "first-mocks",
     "local": true
    },
    {
     "phrase": "Test whether operators would actually pay for the copilot.",
     "sibling": "wizard-of-oz-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "To build the clickable prototype itself",
     "useInstead": [
      {
       "name": "first-mocks",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a></p>",
     "why": "That produces the artefact; this runs a session on the artefact it produced. Same afternoon, opposite job."
    },
    {
     "want": "To shadow an expert and extract the judgment they can't articulate",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></p>",
     "why": "That watches an expert do their real work to mine their expertise; this watches a target user attempt your task on your prototype to test your design. Same verb \"watch\", opposite object."
    },
    {
     "want": "To test a workflow on paper before it's clickable",
     "useInstead": [
      {
       "name": "paper-sketch-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/paper-sketch-probe\"><code>paper-sketch-probe</code></a></p>",
     "why": "That reads legibility and decision-location off a sketch; this measures task completion on a working prototype."
    },
    {
     "want": "To learn if anyone wants it, or would pay",
     "useInstead": [
      {
       "name": "wizard-of-oz-probe",
       "local": true
      },
      {
       "name": "concierge-probe",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wizard-of-oz-probe\"><code>wizard-of-oz-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a></p>",
     "why": "A user can complete every task cleanly and still never want the product. Usability says nothing about demand."
    },
    {
     "want": "To route UI craft, visual polish, or interaction design",
     "useInstead": [
      {
       "name": "impeccable",
       "local": false
      },
      {
       "name": "design",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>impeccable</code> / <code>design</code></p>",
     "why": "Those improve the prototype; this measures whether the current one works. Do not restate them."
    },
    {
     "want": "To score one signal on the ladder",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a></p>",
     "why": "That grades a claim; this produces the findings (and uses the ladder to weigh each)."
    }
   ],
   "related": [
    {
     "name": "first-mocks",
     "local": true
    },
    {
     "name": "tacit-knowledge-interview",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "impeccable",
     "local": false
    },
    {
     "name": "design",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — Confirm you can actually run it",
     "anchor": "step-0-confirm-you-can-actually-run-it"
    },
    {
     "n": 2,
     "label": "Step 1 — Assign the three roles",
     "anchor": "step-1-assign-the-three-roles"
    },
    {
     "n": 3,
     "label": "Step 2 — Write each task as a goal, not an instruction",
     "anchor": "step-2-write-each-task-as-a-goal-not-an-instruction"
    },
    {
     "n": 4,
     "label": "Step 3 — Run silent, log behaviour",
     "anchor": "step-3-run-silent-log-behaviour"
    },
    {
     "n": 5,
     "label": "Step 4 — Keep them in user mode",
     "anchor": "step-4-keep-them-in-user-mode"
    },
    {
     "n": 6,
     "label": "Step 5 — Attribute and rank the findings",
     "anchor": "step-5-attribute-and-rank-the-findings"
    },
    {
     "n": 7,
     "label": "Step 6 — Write the read-out",
     "anchor": "step-6-write-the-read-out"
    }
   ],
   "gotchaHeadlines": [
    "The builder cannot stay quiet",
    "Leading by relief",
    "Opinion smuggled in as a finding",
    "Testing the person, not the prototype",
    "The task is really an instruction",
    "Chasing a preference verdict",
    "The confirmation test in disguise"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "invent-by-hand": {
   "name": "invent-by-hand",
   "description": "Invent an original product concept before the machine hands you the generic one — onion the stated idea to its invariant core need, diverge and keep the strange child, anchor every concept to your proprietary YODA corpus, then run the generic-prompt test (if the one-line prompt a competitor would type reaches your concept, it isn't yours yet). Returns an invented concept + rationale. Fires on \"what should we actually build\", \"invent the solution\", \"make it non-obvious\", \"give me a concept a competitor couldn't just prompt for\", \"what's the product idea here\". Not for carving and adoption-testing the first slice (use wedge-five-questions, run it next), not for finding the proprietary data the concept stands on (use yoda-data-sourcing, run it first), not for designing a cheap experiment to validate an already-chosen idea (use concierge-probe / probe-matrix, section 04).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "06",
   "hub": false,
   "summary": "Takes a fellow's stated idea and forces an original product concept out of it — one a frontier model would not hand to every competitor who typed the obvious prompt.",
   "triggers": [
    "What should we actually build?",
    "Invent the solution.",
    "How do we make this non-obvious?",
    "Give me a concept a competitor couldn't just prompt for.",
    "What's the product idea here?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this the smallest thing to build first / will crews adopt it? Score it.",
     "sibling": "wedge-five-questions",
     "local": true
    },
    {
     "phrase": "Where's our proprietary data / what data can't a competitor get?",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Design a cheap experiment to validate this idea / build a pretotype.",
     "sibling": "concierge-probe",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Is this the smallest thing to build first / will it get adopted / is my wedge sharp\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (sibling, section 06). It carves the invented concept into the first adopted slice and tests it 5/5. Run this to invent the concept, that to test the first build.</p>",
     "why": null
    },
    {
     "want": "\"Where's our proprietary data / what data can't a competitor get\"",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). It finds the corpus this skill stands on. Run it first — a concept with no band-P corpus to anchor to is invention on sand, and this skill routes back there.</p>",
     "why": null
    },
    {
     "want": "\"Design a cheap experiment to validate this idea / build a pretotype\"",
     "useInstead": [
      {
       "name": "concierge-probe",
       "local": true
      },
      {
       "name": "probe-matrix",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/concierge-probe\"><code>concierge-probe</code></a> / <a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> (section 04). That is where a chosen concept meets behaviour cheaply. This skill produces the concept worth probing; it does not design the probe.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "[Hypothesis]",
     "local": false
    },
    {
     "name": "moat-design-canvas",
     "local": true
    },
    {
     "name": "unserved-needs-finder",
     "local": true
    },
    {
     "name": "job-in-primitives",
     "local": true
    },
    {
     "name": "first-mocks",
     "local": true
    },
    {
     "name": "concierge-probe",
     "local": true
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "brainstorm-experiments-new",
     "local": false
    },
    {
     "name": "discovery/brainstorm-experiments-new",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Onion to the invariant core need",
     "anchor": "step-1-onion-to-the-invariant-core-need"
    },
    {
     "n": 2,
     "label": "Step 2 — Diverge: generate at least six, keep the strange child",
     "anchor": "step-2-diverge-generate-at-least-six-keep-the-strange-child"
    },
    {
     "n": 3,
     "label": "Step 3 — Anchor each survivor to the YODA corpus",
     "anchor": "step-3-anchor-each-survivor-to-the-yoda-corpus"
    },
    {
     "n": 4,
     "label": "Step 4 — Run the generic-prompt test",
     "anchor": "step-4-run-the-generic-prompt-test"
    },
    {
     "n": 5,
     "label": "Step 5 — Sketch the chosen concept by hand",
     "anchor": "step-5-sketch-the-chosen-concept-by-hand"
    },
    {
     "n": 6,
     "label": "Step 6 — State the invented concept, rationale, and kill line",
     "anchor": "step-6-state-the-invented-concept-rationale-and-kill-line"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "wedge-five-questions": {
   "name": "wedge-five-questions",
   "description": "Pressure-test ONE proposed wedge against five pass/fail thresholds (standalone value, forced cadence, travel, structural expansion, scoreable adoption) and return a 5-row verdict that calls it a real wedge only on 5/5. Fires on \"is this a wedge\", \"is my wedge sharp enough\", \"what's my wedge\", \"the smallest thing that forces adoption\", \"will this actually get adopted\". Not for defensibility over years (use moat-design-canvas), not for scoring the whole idea across eight dimensions (use problem-quality-scorecard), not for the one-glance so-what gut check (use so-what-stress-test).",
   "type": "generator",
   "supersedes": "none",
   "stage": "06",
   "hub": false,
   "summary": "Takes one proposed wedge and forces a binary verdict: real wedge, or a feature in a wedge costume.",
   "triggers": [
    "Is this a wedge?",
    "What's the smallest thing that forces adoption?",
    "Is my wedge sharp enough?",
    "What's my wedge?",
    "Will this actually get adopted?"
   ],
   "mustNotFire": [
    {
     "phrase": "Map our defensibility and moat over the next three years",
     "sibling": "moat-design-canvas",
     "local": true
    },
    {
     "phrase": "Score the whole idea across all its dimensions",
     "sibling": "problem-quality-scorecard",
     "local": true
    },
    {
     "phrase": "Give me the one-glance so-what on this idea",
     "sibling": "so-what-stress-test",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"How do we stay defensible over three years / build the moat\"",
     "useInstead": [
      {
       "name": "moat-design-canvas",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (sibling in this section; defensibility over time, not first-adoption). Reference it, do not rebuild it here.</p>",
     "why": null
    },
    {
     "want": "\"Score the whole idea across its dimensions\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (8 dimensions; wedge sharpness is only one). This skill zooms all the way into the wedge with five distinct thresholds.</p>",
     "why": null
    },
    {
     "want": "\"Give me the one-glance so-what\"",
     "useInstead": [
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (its Q3 asks &quot;what's the wedge?&quot; at a glance). This is the deep test that Q3 hands off to.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "moat-design-canvas",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "so-what-stress-test",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — State the wedge in one sentence",
     "anchor": "step-1-state-the-wedge-in-one-sentence"
    },
    {
     "n": 2,
     "label": "Step 2 — Run the five thresholds",
     "anchor": "step-2-run-the-five-thresholds"
    },
    {
     "n": 3,
     "label": "Step 3 — Attach evidence to every row and score it",
     "anchor": "step-3-attach-evidence-to-every-row-and-score-it"
    },
    {
     "n": 4,
     "label": "Step 4 — Compute the verdict (binary AND)",
     "anchor": "step-4-compute-the-verdict-binary-and"
    },
    {
     "n": 5,
     "label": "Step 5 — For each fail, name the one change",
     "anchor": "step-5-for-each-fail-name-the-one-change"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "moat-design-canvas": {
   "name": "moat-design-canvas",
   "description": "Sequence a validated wedge into a defensible moat as four DATED gates (wedge → usage → lock-in → data advantage), forced through an incumbent-veto sentence (\"X won't copy this because ___\") and three monthly falsifiers; returns a filled moat canvas. Fires on \"what's the moat\", \"how is this defensible\", \"will this compound\", \"design the moat\", \"will competitors just copy this / how do we stay defensible as they show up\". Not for whether one wedge gets adopted now (use wedge-five-questions — run it first), not for drafting the pilot data-rights clause itself (use data-rights-clause), not for scoring the whole idea across dimensions (use problem-quality-scorecard).",
   "type": "generator",
   "supersedes": "none",
   "stage": "06",
   "hub": false,
   "summary": "Takes a wedge that has already passed wedge-five-questions and forces it into a moat you can put dates on.",
   "triggers": [
    "What's the moat here / design the moat.",
    "How is this defensible?",
    "Will this compound over time?",
    "Will competitors just copy this?",
    "How do we stay defensible as competitors show up?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is this a wedge / will anyone adopt it / is my wedge sharp enough?",
     "sibling": "wedge-five-questions",
     "local": true
    },
    {
     "phrase": "What exact data-rights clause do we sign at the pilot / who owns the data / does it hold in the UAE?",
     "sibling": "data-rights-clause",
     "local": true
    },
    {
     "phrase": "Score the whole idea across all its dimensions.",
     "sibling": "problem-quality-scorecard",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Is this a wedge / will anyone adopt it / is my wedge sharp enough\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (sibling in this section). Adoption <em>now</em>, not defensibility over <em>time</em>. Run it first: a moat around an unadopted wedge protects nothing.</p>",
     "why": null
    },
    {
     "want": "\"What exact data-rights clause do we sign at the pilot / who owns the data / does it hold in the UAE\"",
     "useInstead": [
      {
       "name": "data-rights-clause",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (sibling in this section). This canvas <em>names</em> the data-advantage gate and points to it; it does not draft the contract language.</p>",
     "why": null
    },
    {
     "want": "\"Score the whole idea across its dimensions\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> (8 dimensions; defensibility is one). This zooms into the moat alone.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "data-rights-clause",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Confirm the wedge is real (Gate 0)",
     "anchor": "step-1-confirm-the-wedge-is-real-gate-0"
    },
    {
     "n": 2,
     "label": "Step 2 — Sequence the four dated gates",
     "anchor": "step-2-sequence-the-four-dated-gates"
    },
    {
     "n": 3,
     "label": "Step 3 — Write the incumbent-veto sentence",
     "anchor": "step-3-write-the-incumbent-veto-sentence"
    },
    {
     "n": 4,
     "label": "Step 4 — Write three monthly falsifiers",
     "anchor": "step-4-write-three-monthly-falsifiers"
    },
    {
     "n": 5,
     "label": "Step 5 — Verdict and kill line",
     "anchor": "step-5-verdict-and-kill-line"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "data-rights-clause": {
   "name": "data-rights-clause",
   "description": "Draft the data-rights clause for a fellow's first paid pilot. Run the three-part test — the data must be workflow exhaust, must compound with use, and must be covered by a clause signed at pilot #1 — then produce the actual clause language (data covered · retention · derived-data / compounding rights · training rights · survival on termination) with GCC/MENA jurisdiction points (residency, government-entity data, worker/sponsor consent) marked [Assumption] for counsel. Fires on \"data rights\", \"what to sign at the pilot\", \"who owns the data\", \"data-rights clause\", \"can we keep and train on the pilot data\", \"protect our data\", \"make sure we keep our data\", \"change their standard agreement so the data stays ours\". Not for deciding whether a source is a moat seed or model-reachable (use yoda-data-sourcing, section 03); not for structuring the whole pilot — scope, price, success metrics, conversion (use pilot-six-term-sheet, section 07, which carries this clause as one of its six terms); not for scoring whether a lone signal is real evidence (use evidence-ladder). Not a substitute for counsel.",
   "type": "generator",
   "supersedes": "none",
   "stage": "06",
   "hub": false,
   "summary": "Takes one data source a fellow already has — the clause-gated moat seed YODA surfaced (section 03) — and returns two things: the three-part test applied to that data, and the actual clause language to put in pilot #1.",
   "triggers": [
    "What do we sign at the pilot so the data is actually ours?",
    "Who owns the data in this pilot?",
    "Draft our data-rights clause for the first pilot.",
    "Can we keep and train on the pilot data after it ends?",
    "The operator wants us on their standard agreement — what do we need to change to protect our data?"
   ],
   "mustNotFire": [
    {
     "phrase": "Is the operator's telemetry even a moat seed, or can a model already reach it? Band our sources.",
     "sibling": "yoda-data-sourcing",
     "local": true
    },
    {
     "phrase": "Build the whole pilot term sheet — scope, price, success metrics, kill criteria, conversion.",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Is their verbal 'sure, keep it' strong enough to count on? Score that one signal.",
     "sibling": "evidence-ladder",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Is the operator's telemetry even a moat seed, or can a model already reach it? Band our sources.\"",
     "useInstead": [
      {
       "name": "yoda-data-sourcing",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/yoda-data-sourcing\"><code>yoda-data-sourcing</code></a> (section 03). That skill finds and bands the data and flags which rows are clause-gated. This skill drafts the clause for a row it already flagged.</p>",
     "why": null
    },
    {
     "want": "\"Structure the whole pilot — scope, price, success metrics, kill criteria, conversion.\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07). The data-rights clause is one of its six terms. This skill drafts that one term in depth; the term sheet carries it.</p>",
     "why": null
    },
    {
     "want": "\"Design our moat — how it compounds and why the incumbent won't copy it.\"",
     "useInstead": [
      {
       "name": "moat-design-canvas",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> (section 06). That sequences the moat's dated gates. This skill secures the legal right the data-advantage gate depends on.</p>",
     "why": null
    },
    {
     "want": "\"Is their verbal 'sure, keep the data' strong enough to count on? Score it.\"",
     "useInstead": [
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> (section 02). This skill uses the ladder to weigh whether the right is held; scoring a lone signal is that skill's job.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Confirm a real seed and a real counterparty",
     "anchor": "step-1-confirm-a-real-seed-and-a-real-counterparty"
    },
    {
     "n": 2,
     "label": "Step 2 — Run the three-part test (the gate before drafting)",
     "anchor": "step-2-run-the-three-part-test-the-gate-before-drafting"
    },
    {
     "n": 3,
     "label": "Step 3 — Name what the default contract does to your moat",
     "anchor": "step-3-name-what-the-default-contract-does-to-your-moat"
    },
    {
     "n": 4,
     "label": "Step 4 — Draft the six clause components",
     "anchor": "step-4-draft-the-six-clause-components"
    },
    {
     "n": 5,
     "label": "Step 5 — Flag every jurisdiction specific for counsel",
     "anchor": "step-5-flag-every-jurisdiction-specific-for-counsel"
    },
    {
     "n": 6,
     "label": "Step 6 — Set the timing and score the right",
     "anchor": "step-6-set-the-timing-and-score-the-right"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "eval-first-spec": {
   "name": "eval-first-spec",
   "description": "Turn a validated wedge into the scope you can SCORE — a one-sentence job, 20 pass/fail golden cases drawn from real artefacts, an L0–L4 autonomy level with a failure taxonomy and a derived acceptable failure rate per mode, and a cost-per-outcome budget to the cent. Fires on \"spec the build\", \"define scope\", \"scope the v1\", \"write the spec\", \"how do we know it works\". Not for the component pipeline or effort split (use compound-system-architecture), not for pilot price / terms / commercial success metrics (use pilot-six-term-sheet), not for whether the thing gets adopted at all (use wedge-five-questions).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Converts a validated wedge into a v1 spec that a judge — human or harness — can run and score.",
   "triggers": [
    "Spec the build.",
    "Define scope for the v1.",
    "Scope the v1.",
    "Write the spec.",
    "How do we know it works?"
   ],
   "mustNotFire": [
    {
     "phrase": "Architect the AI system / design the component pipeline / what's the effort split",
     "sibling": "compound-system-architecture",
     "local": true
    },
    {
     "phrase": "What are the pilot terms / how do we price the pilot / set the commercial success metric",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Is this even a wedge / will it get adopted",
     "sibling": "wedge-five-questions",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"How should we architect the AI system / what's the component pipeline / what's the effort split\"",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (sibling, 07). It designs <em>how</em> to build; this defines <em>what working means</em> and the budget. Route the architecture there.</p>",
     "why": null
    },
    {
     "want": "\"What are the pilot terms / how do we price it / what's the commercial success metric\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (sibling, 07). Its success metric is the business KPI the customer buys; this skill's golden cases are the engineering pass/fail underneath it. Name the boundary, do not merge them.</p>",
     "why": null
    },
    {
     "want": "\"Is this even a wedge / will it get adopted / is it sharp enough\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (06). Run that first. This skill assumes the wedge already passed.</p>",
     "why": null
    },
    {
     "want": "\"Score the whole idea / give me the so-what\"",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      },
      {
       "name": "so-what-stress-test",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> / <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> (00–01). Those judge the idea; this specs the build.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "wedge-five-questions",
     "local": true
    },
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    },
    {
     "name": "skills/concept/user-story",
     "local": false
    },
    {
     "name": "skills/concept/user-story-splitting",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Part 1 — The job line",
     "anchor": "part-1-the-job-line"
    },
    {
     "n": 2,
     "label": "Part 2 — The 20 golden cases",
     "anchor": "part-2-the-20-golden-cases"
    },
    {
     "n": 3,
     "label": "Part 3 — Autonomy level and derived failure rates",
     "anchor": "part-3-autonomy-level-and-derived-failure-rates"
    },
    {
     "n": 4,
     "label": "Part 4 — Cost-per-outcome budget",
     "anchor": "part-4-cost-per-outcome-budget"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "compound-system-architecture": {
   "name": "compound-system-architecture",
   "description": "Fires when a fellow is ready to design how the AI product is actually built — \"architect the product\", \"how do we build the AI system\", \"design the AI system\", \"what's the system architecture\", \"what does the stack look like\". Returns a compound-system architecture (input → router → retrieve/reason/act → validate & guardrails → output over a data layer), a 40/20/30/10 effort-allocation plan, and named model-swap points, then kills any monolithic one-big-prompt design. Do NOT fire to write the pass/fail scope (use eval-first-spec), to render the HTML/SVG picture (use design/architecture-diagram), or to argue defensibility (use moat-design-canvas).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Turns \"how do we build this?\" into a component pipeline, an effort budget, and a set of swap points.",
   "triggers": [
    "Help me architect the Mentix product — how should the AI system be built?",
    "How do we build the AI system for this? What's the stack shape?",
    "Design the AI system: what are the components and how do they connect?",
    "What's the system architecture — router, retrieval, all of it?",
    "We were going to send everything to one big model. Is that the right architecture?"
   ],
   "mustNotFire": [
    {
     "phrase": "Write the 20 golden cases and the acceptable failure rate for our v1.",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "Draw me the architecture as a dark-themed HTML/SVG diagram.",
     "sibling": "design/architecture-diagram",
     "local": false
    },
    {
     "phrase": "Is this defensible — where does the moat come from and will it compound?",
     "sibling": "moat-design-canvas",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Write the pass/fail spec — golden cases, failure rate, cost budget\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></p>",
     "why": "That defines the scoreable contract for the build; this lays out the components and effort split. The two compose: the swap-point evals here ARE that skill's golden cases."
    },
    {
     "want": "\"Draw me the diagram / give me the HTML architecture picture\"",
     "useInstead": [
      {
       "name": "design/architecture-diagram",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>design/architecture-diagram</code></p>",
     "why": "That renders the dark-themed HTML/SVG. This decides the components and allocation; route the picture there once the pipeline is filled."
    },
    {
     "want": "\"Is this defensible / where's the moat\"",
     "useInstead": [
      {
       "name": "moat-design-canvas",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a></p>",
     "why": "That sequences the moat gates. The data layer here feeds the moat, but this skill is a build plan, not a defensibility argument."
    },
    {
     "want": "\"Structure the pilot deal / price it\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></p>",
     "why": "That is the commercial term sheet. This is the technical architecture."
    }
   ],
   "related": [
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "design/architecture-diagram",
     "local": false
    },
    {
     "name": "yoda-data-sourcing",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — the system job",
     "anchor": "step-1-the-system-job"
    },
    {
     "n": 2,
     "label": "Step 2 — the data layer",
     "anchor": "step-2-the-data-layer"
    },
    {
     "n": 3,
     "label": "Step 3 — the component pipeline",
     "anchor": "step-3-the-component-pipeline"
    },
    {
     "n": 4,
     "label": "Step 4 — effort allocation",
     "anchor": "step-4-effort-allocation"
    },
    {
     "n": 5,
     "label": "Step 5 — model-swap points",
     "anchor": "step-5-model-swap-points"
    },
    {
     "n": 6,
     "label": "Step 6 — the kill line",
     "anchor": "step-6-the-kill-line"
    }
   ],
   "gotchaHeadlines": [
    "The model-first trap",
    "The disappearing guardrail",
    "A data layer that is a hope",
    "Swap points without evals",
    "Collapsing is fine; deleting silently is not"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "guardrail-design": {
   "name": "guardrail-design",
   "description": "Fires when a fellow needs to decide how an AI product is stopped from doing the wrong thing — \"design the guardrails\", \"when does a human sign off\", \"how do we handle failures / bad outputs\", \"what confidence threshold should we auto-approve at\", \"where do we put the human in the loop\". Returns a guardrail spec: every failure mode placed on a cost-of-error × volume matrix, a three-layer stack (rules in code → confidence threshold → human sign-off) sized per mode, a derived confidence threshold, and a human-sign-off trigger for every high-cost / low- confidence path. Do NOT fire to derive the acceptable failure rate or pick the autonomy level (use eval-first-spec), to lay out the whole component pipeline (use compound-system-architecture), or to decide whether a human can now be REMOVED because accuracy has held (use refine-flywheel).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Turns \"how do we stop it doing something bad?\" into a spec a build can enforce.",
   "triggers": [
    "Design the guardrails for our AI product.",
    "When does a human need to sign off on this?",
    "How should we handle failures / bad outputs?",
    "What confidence threshold should we auto-approve at?",
    "We can't let it do X wrong unsupervised — where do we put the human in the loop?"
   ],
   "mustNotFire": [
    {
     "phrase": "What acceptable failure rate should we accept per mode / which autonomy level L0–L4?",
     "sibling": "eval-first-spec",
     "local": true
    },
    {
     "phrase": "We've been accurate for a month — can we drop the human review now?\" (autonomy promotion)",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "How do we build the AI system / what's the component pipeline / effort split?",
     "sibling": "compound-system-architecture",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"What acceptable failure rate per mode / which autonomy level L0–L4\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></p>",
     "why": "That derives the rate and picks the level from cost-of-one-failure. This skill consumes both and builds the mechanism that holds them. Run it first; it hands this the taxonomy and the rates."
    },
    {
     "want": "\"Design the whole AI system / the component pipeline / the effort split\"",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></p>",
     "why": "That names component 4 exists. This designs what is inside it. Compose: the architecture says \"a guard sits here\", this says \"here is the guard, layer by layer, sized to cost × volume\"."
    },
    {
     "want": "\"We've held accuracy for a month — can we drop the human sign-off now\"",
     "useInstead": [
      {
       "name": "refine-flywheel",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></p>",
     "why": "That promotes autonomy as an eval result, never by feel. This designs the guard at the current level; removing a layer as autonomy climbs is the flywheel's job, gated by a re-run of the eval set."
    },
    {
     "want": "\"Structure the pilot / price it / what's the commercial success metric\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a></p>",
     "why": "Commercial, not correctness."
    }
   ],
   "related": [
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "refine-flywheel",
     "local": true
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — pull the inputs",
     "anchor": "step-1-pull-the-inputs"
    },
    {
     "n": 2,
     "label": "Step 2 — band and place",
     "anchor": "step-2-band-and-place"
    },
    {
     "n": 3,
     "label": "Step 3 — the three-layer stack",
     "anchor": "step-3-the-three-layer-stack"
    },
    {
     "n": 4,
     "label": "Step 4 — derive the threshold",
     "anchor": "step-4-derive-the-threshold"
    },
    {
     "n": 5,
     "label": "Step 5 — the sign-off trigger",
     "anchor": "step-5-the-sign-off-trigger"
    },
    {
     "n": 6,
     "label": "Step 6 — cost the stack",
     "anchor": "step-6-cost-the-stack"
    },
    {
     "n": 7,
     "label": "Step 7 — the kill line",
     "anchor": "step-7-the-kill-line"
    }
   ],
   "gotchaHeadlines": [
    "The uniform stack",
    "Uncalibrated confidence",
    "Sign-off that fails open",
    "Rubber-stamp by over-flagging"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "pilot-six-term-sheet": {
   "name": "pilot-six-term-sheet",
   "description": "Turn a would-be pilot into a six-term paid-pilot sheet — scope, price (paid or prepaid), the signed data-rights clause, success metrics, kill criteria, and conversion terms priced now — and refuse to call anything a pilot unless all six terms are non-empty. Fires on \"pilot terms\", \"structure the deal\", \"paid pilot\", \"pilot term sheet\", \"structure the pilot so it isn't a free trial\". Not for brainstorming or validating which revenue model to bet on (that is `monetization-strategy`, exploratory; this commits one basis to price the conversion term now), not for drafting the data-rights legal language (that is `data-rights-clause`, section 06; this carries the clause as term 3 and routes there), not for testing whether the thing will get adopted at all (that is `wedge-five-questions`).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Takes a fellow's proposed pilot and forces a binary check: a real paid pilot, or unpaid work with a slide deck.",
   "triggers": [
    "Structure the pilot terms for this deal.",
    "Help me structure the deal with this customer.",
    "How do I set up a paid pilot?",
    "Write me a pilot term sheet.",
    "Structure the pilot so it isn't a free trial."
   ],
   "mustNotFire": [
    {
     "phrase": "Brainstorm 3–5 revenue models and validate which one customers will pay for",
     "sibling": "monetization-strategy",
     "local": false
    },
    {
     "phrase": "Draft the data-rights legal clause for the pilot",
     "sibling": "data-rights-clause",
     "local": true
    },
    {
     "phrase": "Is this the right wedge — will it actually get adopted?",
     "sibling": "wedge-five-questions",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Brainstorm 3–5 revenue models for the product and validate willingness to pay\"",
     "useInstead": [
      {
       "name": "monetization-strategy",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>monetization-strategy</code> (exploratory: which model to bet on, tested cheaply). This skill does the opposite — it commits to ONE pricing basis so the conversion term is a signed number today.</p>",
     "why": null
    },
    {
     "want": "\"Draft the actual data-rights legal clause / the language we put in the contract\"",
     "useInstead": [
      {
       "name": "data-rights-clause",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/data-rights-clause\"><code>data-rights-clause</code></a> (section 06, forthcoming). This skill carries that clause as term 3 and routes there; it does not write legal language.</p>",
     "why": null
    },
    {
     "want": "\"Is this even the right first thing to build / will it get adopted?\"",
     "useInstead": [
      {
       "name": "wedge-five-questions",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> (section 06). A pilot around a non-wedge is a priced dead end. Confirm the wedge first.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "monetization-strategy",
     "local": false
    },
    {
     "name": "data-rights-clause",
     "local": true
    },
    {
     "name": "wedge-five-questions",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Confirm there is a pilot to structure",
     "anchor": "step-1-confirm-there-is-a-pilot-to-structure"
    },
    {
     "n": 2,
     "label": "Step 2 — Fill the six terms",
     "anchor": "step-2-fill-the-six-terms"
    },
    {
     "n": 3,
     "label": "Step 3 — Price it against the price ladder (term 2)",
     "anchor": "step-3-price-it-against-the-price-ladder-term-2"
    },
    {
     "n": 4,
     "label": "Step 4 — Price the conversion NOW (term 6), commit one basis",
     "anchor": "step-4-price-the-conversion-now-term-6-commit-one-basis"
    },
    {
     "n": 5,
     "label": "Step 5 — Compute the verdict (binary AND across six)",
     "anchor": "step-5-compute-the-verdict-binary-and-across-six"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "value-based-pricing": {
   "name": "value-based-pricing",
   "description": "Set the price and the charging metric for a validated product — anchor the number at 10–20% of the MEASURED incremental value, and charge on the outcome / asset / decision the customer gets, never on seats or tiers. Emits a value-priced model. Fires on \"how should we price this\", \"what do we charge\", \"per seat or per outcome\", \"set the price\", \"what's the number\". Not for brainstorming which revenue model to bet on across the product (that is `monetization-strategy`, exploratory; this commits ONE value-anchored number on ONE metric), not for structuring the whole pilot deal — scope, success metrics, kill criteria (that is `pilot-six-term-sheet`; this produces the price and metric that become its term 2 and term 6), not for measuring the value in the first place (that is `current-state-map`, which prices the status quo this consumes).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Takes a validated product and returns one price on one metric, both defended.",
   "triggers": [
    "How should we price this?",
    "What do we charge, and on what?",
    "Should we price per seat or per outcome?",
    "Set the price for the pilot conversion.",
    "Are we charging on the right thing / the right metric?"
   ],
   "mustNotFire": [
    {
     "phrase": "Brainstorm 3–5 revenue models and test which one to bet on",
     "sibling": "monetization-strategy",
     "local": false
    },
    {
     "phrase": "Structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "How is this done today / what does the status quo cost us",
     "sibling": "current-state-map",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Brainstorm 3–5 revenue models and test which one to bet on\"",
     "useInstead": [
      {
       "name": "monetization-strategy",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>monetization-strategy</code> (concept) — exploratory, tests willingness to pay across models. This skill does the opposite: it commits to ONE value-anchored number on ONE metric.</p>",
     "why": null
    },
    {
     "want": "\"Structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (section 07). This skill produces the price (its term 2) and the charging metric (its term 6 basis); it does not structure the six-term deal.</p>",
     "why": null
    },
    {
     "want": "\"How is this done today / what does the status quo cost / what is it worth\"",
     "useInstead": [
      {
       "name": "current-state-map",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/current-state-map\"><code>current-state-map</code></a> (section 01) prices the status quo — the value denominator this skill consumes. If the value is not measured yet, route there first.</p>",
     "why": null
    },
    {
     "want": "\"What does one outcome cost us to produce\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (section 07) produces cost_per_outcome — the floor this skill checks the price against.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "monetization-strategy",
     "local": false
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    },
    {
     "name": "current-state-map",
     "local": true
    },
    {
     "name": "eval-first-spec",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Measure the value, or stop (Part 1)",
     "anchor": "step-1-measure-the-value-or-stop-part-1"
    },
    {
     "n": 2,
     "label": "Step 2 — Take the delta over the status quo (Part 2)",
     "anchor": "step-2-take-the-delta-over-the-status-quo-part-2"
    },
    {
     "n": 3,
     "label": "Step 3 — Set the floor (Part 3)",
     "anchor": "step-3-set-the-floor-part-3"
    },
    {
     "n": 4,
     "label": "Step 4 — Choose the metric, not the level (Part 4)",
     "anchor": "step-4-choose-the-metric-not-the-level-part-4"
    },
    {
     "n": 5,
     "label": "Step 5 — Set the capture rate and write the price (Part 5)",
     "anchor": "step-5-set-the-capture-rate-and-write-the-price-part-5"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "v1-launch-bar": {
   "name": "v1-launch-bar",
   "description": "Gate a built v1 to go / no-go on two recorded tests — a true stranger reaches first correct value in ≤60 seconds unaided, AND the learn-from-corrections mechanism is wired and proven to compound (the thing 95% of enterprise pilots never deliver). Output is a recorded-evidence go / no-go checklist. Fires on \"are we ready to launch\", \"is v1 good enough\", \"launch bar\", \"go/no-go on v1\", \"should we ship this pilot\". Not the ongoing post-launch loop or cadence (use refine-flywheel), not pilot price / terms / commercial success metric (use pilot-six-term-sheet), not defining what \"working\" means or the golden-set + cost spec before code (use eval-first-spec).",
   "type": "generator",
   "supersedes": "none",
   "stage": "07",
   "hub": false,
   "summary": "Turns \"I think we're ready\" into a go / no-go decision made on recorded evidence, not opinion.",
   "triggers": [
    "Are we ready to launch?",
    "Is v1 good enough to ship?",
    "Run it against the launch bar.",
    "Give me the go/no-go on v1.",
    "Should we ship this pilot?"
   ],
   "mustNotFire": [
    {
     "phrase": "How do we keep improving the product month over month / what's the cadence / run the loop",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "How should we price the pilot / what are the terms / set the commercial success metric",
     "sibling": "pilot-six-term-sheet",
     "local": true
    },
    {
     "phrase": "Define what working means / write the golden set / what's the cost-per-outcome",
     "sibling": "eval-first-spec",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"How do we keep improving the product / what's the monthly cadence / run the loop / what happens after launch\"",
     "useInstead": [
      {
       "name": "refine-flywheel",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08). This skill is the one-time gate and wires the mechanism; that skill runs it forever and measures the delta this skill commits to. Hand the pilot over once it is GO.</p>",
     "why": null
    },
    {
     "want": "\"How do we price the pilot / what are the terms / set the commercial success metric\"",
     "useInstead": [
      {
       "name": "pilot-six-term-sheet",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> (07, sibling). Its success metric is the business KPI the customer buys; the two launch tests here are the product bar underneath it.</p>",
     "why": null
    },
    {
     "want": "\"Define what working means / write the golden set / what's the cost-per-outcome\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07, sibling). That is the pre-build spec. This skill assumes its pass rate is already an input, and does not re-derive it.</p>",
     "why": null
    },
    {
     "want": "\"How should we run the user observation / who watches / how do we avoid leading\"",
     "useInstead": [
      {
       "name": "usability-test-protocol",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a> (05). Route the <em>how</em> of the stranger observation there; this skill owns the <em>gate</em>, not the protocol.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    },
    {
     "name": "usability-test-protocol",
     "local": true
    },
    {
     "name": "refine-flywheel",
     "local": true
    },
    {
     "name": "skills/product-verification/evidence-driven-testing",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — Confirm you have something to gate",
     "anchor": "step-0-confirm-you-have-something-to-gate"
    },
    {
     "n": 2,
     "label": "Step 1 — Gate A: the 60-second stranger test",
     "anchor": "step-1-gate-a-the-60-second-stranger-test"
    },
    {
     "n": 3,
     "label": "Step 2 — Gate B: the learn-from-corrections test",
     "anchor": "step-2-gate-b-the-learn-from-corrections-test"
    },
    {
     "n": 4,
     "label": "Step 3 — The decision",
     "anchor": "step-3-the-decision"
    },
    {
     "n": 5,
     "label": "Step 4 — Handoff",
     "anchor": "step-4-handoff"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "refine-flywheel": {
   "name": "refine-flywheel",
   "description": "Stands up the post-launch loop for a shipped AI product — ship behind sign-off → observe tweak-time (how much the customer edits before accepting) → learn by re-running the WHOLE eval set on every model release → refine by promoting autonomy only as a scored eval result, never by feel. Fires on \"what happens after launch\", \"improve the product\", \"set up the loop\", \"a new model dropped, should we upgrade\", \"can we raise the autonomy / drop the sign-off yet\". Returns a filled flywheel cadence doc. NOT for which metrics/North Star/retention to track (use metrics-that-matter), NOT for turning one trace into a discovery interview (use trace-to-interview), NOT for writing the eval set or autonomy ladder in the first place (use eval-first-spec — this re-runs what that created).",
   "type": "generator",
   "supersedes": "none",
   "stage": "08",
   "hub": false,
   "summary": "Turns a shipped product into a loop that compounds.",
   "triggers": [
    "What happens after we launch?",
    "Set up the loop / improve the product now that it's shipped.",
    "The loop — ship, observe, learn, refine — how do we run it?",
    "A new model just came out — should we upgrade the product to it?",
    "Can we raise the autonomy level / drop the sign-off yet?"
   ],
   "mustNotFire": [
    {
     "phrase": "What should our North Star / metrics / retention be?",
     "sibling": "metrics-that-matter",
     "local": true
    },
    {
     "phrase": "Turn these production traces into interviews / what unmet need do the logs reveal?",
     "sibling": "trace-to-interview",
     "local": true
    },
    {
     "phrase": "Write the golden cases / set the autonomy level / define what working means",
     "sibling": "eval-first-spec",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Which metrics / what's our North Star / does retention flatten / cost-per-outcome dashboard\"",
     "useInstead": [
      {
       "name": "metrics-that-matter",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (08, sibling). It picks the metric set; this builds the ship→observe→learn→refine cadence and the autonomy ratchet. This skill <em>reads</em> tweak-time and cost-per-outcome; that skill decides the wider scorecard. Route metric selection there.</p>",
     "why": null
    },
    {
     "want": "\"Turn these production traces into interviews / what unmet need do the logs reveal\"",
     "useInstead": [
      {
       "name": "trace-to-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a> (08, sibling). It mines the qualitative discovery question from one trace; this reads traces as a quantitative behaviour signal (tweak-time) and as the eval-regression check. Same raw feed, different question.</p>",
     "why": null
    },
    {
     "want": "\"Write the golden cases / set the autonomy level / define what working means\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07). It <em>creates</em> the eval set and ladder before build; this <em>re-runs</em> them after launch. If there is no eval set, you are here too early.</p>",
     "why": null
    },
    {
     "want": "\"Keep the opportunity tree alive / set up continuous discovery\"",
     "useInstead": [
      {
       "name": "continuous-discovery-engine",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (02). That is the discovery-side loop; this is the delivery/quality-side loop. They run beside each other (dual-track) and share the trace feed; neither owns the other.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "metrics-that-matter",
     "local": true
    },
    {
     "name": "trace-to-interview",
     "local": true
    },
    {
     "name": "continuous-discovery-engine",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Station 0 — Precondition gate",
     "anchor": "station-0-precondition-gate"
    },
    {
     "n": 2,
     "label": "Station 1 — Ship (behind sign-off)",
     "anchor": "station-1-ship-behind-sign-off"
    },
    {
     "n": 3,
     "label": "Station 2 — Observe (tweak-time)",
     "anchor": "station-2-observe-tweak-time"
    },
    {
     "n": 4,
     "label": "Station 3 — Learn (re-run the WHOLE eval set)",
     "anchor": "station-3-learn-re-run-the-whole-eval-set"
    },
    {
     "n": 5,
     "label": "Station 4 — Refine (promote autonomy by eval, never by feel)",
     "anchor": "station-4-refine-promote-autonomy-by-eval-never-by-feel"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "unknown"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "trace-to-interview": {
   "name": "trace-to-interview",
   "description": "Turns a set of production traces into discovery interviews — recovering, for each behaviour pattern, the discovery question the user answered by acting instead of talking. Fires on \"learn from usage\", \"mine the logs\", \"what are our production traces telling us\", \"turn usage data into discovery\", \"what are users saying in the logs\". Outputs a trace-interview log: one card per behaviour pattern with the observed behaviour [Fact, 0.7], the discovery question it answers, the inferred JTBD/satisfaction signal [Hypothesis], distinct-user weight, the confirm-the-why probe, and the cost of the scheduled interview it replaced — routed to continuous-discovery-engine as a feed-2 signal. NOT the AARRR/retention/North-Star scorecard (use metrics-that-matter — that keeps the number; this recovers the question behind it), NOT structuring a recorded human interview transcript (use summarize-interview — that is words at 0.3; this is behaviour at 0.7), NOT standing up the whole three-feed discovery loop and its cadence (use continuous-discovery-engine — this decodes one feed and hands the cards up).",
   "type": "generator",
   "supersedes": "none",
   "stage": "08",
   "hub": false,
   "summary": "Reads production traces as interviews that already happened.",
   "triggers": [
    "Mine our logs — what are users telling us?",
    "Turn our production traces into discovery questions.",
    "Learn from our usage / learn from how people actually use it.",
    "What job aren't we finishing? Read it off the usage.",
    "What are our production traces telling us about intent?"
   ],
   "mustNotFire": [
    {
     "phrase": "Build the retention curve and pick our North Star from usage.",
     "sibling": "metrics-that-matter",
     "local": true
    },
    {
     "phrase": "Summarise this recorded customer interview transcript.",
     "sibling": "summarize-interview",
     "local": false
    },
    {
     "phrase": "Set up the whole discovery loop — interviews, traces, and evals, on a cadence.",
     "sibling": "continuous-discovery-engine",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Build the retention curve / North Star / AARRR dashboard.\"",
     "useInstead": [
      {
       "name": "metrics-that-matter",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/metrics-that-matter\"><code>metrics-that-matter</code></a> (keeps the number; this recovers the question)</p>",
     "why": null
    },
    {
     "want": "\"Summarise this recorded customer interview / transcript.\"",
     "useInstead": [
      {
       "name": "summarize-interview",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>summarize-interview</code> (words at 0.3; this is behaviour at 0.7)</p>",
     "why": null
    },
    {
     "want": "\"Stand up the whole discovery loop — interviews + traces + evals, on a cadence.\"",
     "useInstead": [
      {
       "name": "continuous-discovery-engine",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/continuous-discovery-engine\"><code>continuous-discovery-engine</code></a> (this decodes one feed and feeds it up)</p>",
     "why": null
    },
    {
     "want": "\"Prep and run a live tacit-knowledge interview with an operator.\"",
     "useInstead": [
      {
       "name": "tacit-knowledge-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a></p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "continuous-discovery-engine",
     "local": true
    },
    {
     "name": "summarize-interview",
     "local": false
    },
    {
     "name": "metrics-that-matter",
     "local": true
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "[Hypothesis]",
     "local": false
    },
    {
     "name": "refine-flywheel",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Define one trace and pull the set",
     "anchor": "step-1-define-one-trace-and-pull-the-set"
    },
    {
     "n": 2,
     "label": "Step 2 — Segment by behaviour, not by event count",
     "anchor": "step-2-segment-by-behaviour-not-by-event-count"
    },
    {
     "n": 3,
     "label": "Step 3 — Decode each pattern to the question it answers",
     "anchor": "step-3-decode-each-pattern-to-the-question-it-answers"
    },
    {
     "n": 4,
     "label": "Step 4 — Write one interview card per pattern",
     "anchor": "step-4-write-one-interview-card-per-pattern"
    },
    {
     "n": 5,
     "label": "Step 5 — Run the ambiguity gate",
     "anchor": "step-5-run-the-ambiguity-gate"
    },
    {
     "n": 6,
     "label": "Step 6 — Weight by distinct users",
     "anchor": "step-6-weight-by-distinct-users"
    },
    {
     "n": 7,
     "label": "Step 7 — Price the interview it replaced",
     "anchor": "step-7-price-the-interview-it-replaced"
    },
    {
     "n": 8,
     "label": "Step 8 — Route",
     "anchor": "step-8-route"
    }
   ],
   "gotchaHeadlines": [
    "Metric relapse",
    "Borrowing the behaviour's rung for the why",
    "Trace worship",
    "Reading acceptance as trust",
    "Optimising the number instead of answering the question"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "metrics-that-matter": {
   "name": "metrics-that-matter",
   "description": "Fires when a fellow asks which numbers matter for a launched product — \"what metrics should we track\", \"what should our North Star be\", \"is our retention any good / does the curve flatten\", \"our MAU is up-and-to-the-right, is that real or vanity\", \"what's our cost per outcome\". Returns a metric scorecard: one customer-centric North Star, an AARRR one-metric skeleton, the flattening-retention truth test that GATES the North Star, and cost-per-outcome priced to the cent. Do NOT fire to design the post-launch improvement loop or promote autonomy (use refine-flywheel), to turn production traces into discovery interviews (use trace-to-interview), or to build the actual cohort dashboard, SQL, or alert thresholds (use the M9 retention-dashboard / cohort-analysis skills).",
   "type": "generator",
   "supersedes": "none",
   "stage": "08",
   "hub": false,
   "summary": "Turns \"what should we measure?\" into a one-page scorecard with a single North Star, an AARRR skeleton, a retention curve that must flatten, and a cost-per-outcome to the cent.",
   "triggers": [
    "What metrics should we track for the handover drafter now it's live?",
    "What should our North Star be?",
    "Is our retention any good — does our cohort curve actually flatten?",
    "Our MAU is up-and-to-the-right. Is that real or is it vanity?",
    "What's our cost per outcome, and which numbers actually matter post-launch?"
   ],
   "mustNotFire": [
    {
     "phrase": "Design the after-launch loop — how we ship, observe, and promote autonomy by eval.",
     "sibling": "refine-flywheel",
     "local": true
    },
    {
     "phrase": "Turn our production traces / usage logs into discovery interviews.",
     "sibling": "trace-to-interview",
     "local": true
    },
    {
     "phrase": "Build the cohort retention dashboard — write the SQL and set the alert thresholds.",
     "sibling": "retention-dashboard",
     "local": false
    }
   ],
   "handoffs": [
    {
     "want": "\"Design the after-launch loop — ship, observe, promote autonomy by eval\"",
     "useInstead": [
      {
       "name": "refine-flywheel",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a></p>",
     "why": "That is the improvement cadence. This picks and validates the metrics the loop watches; it does not run the loop."
    },
    {
     "want": "\"Mine our production traces / turn usage logs into discovery interviews\"",
     "useInstead": [
      {
       "name": "trace-to-interview",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a></p>",
     "why": "That reads traces as discovery. This scores metrics; a trace is not a metric."
    },
    {
     "want": "\"Build the cohort dashboard, write the SQL, set the alert thresholds\"",
     "useInstead": [
      {
       "name": "retention-dashboard",
       "local": false
      },
      {
       "name": "cohort-analysis",
       "local": false
      },
      {
       "name": "analytics-tracking",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>retention-dashboard</code>, <code>cohort-analysis</code>, <code>analytics-tracking</code> (M9)</p>",
     "why": "Those render and instrument. This decides what to render and applies the truth test; route the build there."
    },
    {
     "want": "\"Validate a North Star against the 7 NSM criteria / classify the business game\"",
     "useInstead": [
      {
       "name": "north-star-metric",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>north-star-metric</code> (M9)</p>",
     "why": "That is the framework. This calls it once, then adds the retention gate and cost-per-outcome it lacks."
    },
    {
     "want": "\"Work out CAC, LTV, payback, contribution margin\"",
     "useInstead": [
      {
       "name": "financial-unit-economics",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>financial-unit-economics</code> (M9)</p>",
     "why": "That is full unit economics. This needs only cost-per-outcome and margin-per-outcome; route the rest there."
    }
   ],
   "related": [
    {
     "name": "refine-flywheel",
     "local": true
    },
    {
     "name": "trace-to-interview",
     "local": true
    },
    {
     "name": "north-star-metric",
     "local": false
    },
    {
     "name": "retention-dashboard",
     "local": false
    },
    {
     "name": "metrics-dashboard",
     "local": false
    },
    {
     "name": "cohort-analysis",
     "local": false
    },
    {
     "name": "financial-unit-economics",
     "local": false
    },
    {
     "name": "value-based-pricing",
     "local": true
    },
    {
     "name": "guardrail-design",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — game and North Star",
     "anchor": "step-1-game-and-north-star"
    },
    {
     "n": 2,
     "label": "Step 2 — AARRR skeleton",
     "anchor": "step-2-aarrr-skeleton"
    },
    {
     "n": 3,
     "label": "Step 3 — the retention truth test",
     "anchor": "step-3-the-retention-truth-test"
    },
    {
     "n": 4,
     "label": "Step 4 — cost-per-outcome to the cent",
     "anchor": "step-4-cost-per-outcome-to-the-cent"
    },
    {
     "n": 5,
     "label": "Step 5 — vanity audit",
     "anchor": "step-5-vanity-audit"
    },
    {
     "n": 6,
     "label": "Step 6 — the kill line",
     "anchor": "step-6-the-kill-line"
    }
   ],
   "gotchaHeadlines": [
    "The up-and-to-the-right lie",
    "North Star as output, not outcome",
    "The margin that inverts at scale",
    "Retention with no denominator of use"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "agent-design": {
   "name": "agent-design",
   "description": "Fires when a fellow is designing ONE production agent and asks what it should be built from — \"design an agent for X\", \"what tools and memory does this agent need\", \"spec the agent\", \"our agent isn't getting smarter / never remembers corrections — how do we build its memory\". Returns a four-part agent spec — role (one owned decision) · tools (the commodity shell) · memory layer (CLAUDE.md · skills · lessons.md · trace archive, loaded at birth) · eval — where the memory layer is the only part the fellow owns and therefore the only part that compounds. Do NOT fire for the agent's voice / persona / signature phrases (use meta/agent-persona-builder), the multi-agent fleet or hand-offs (use workflow-design), writing its golden cases / autonomy level / cost budget (use eval-first-spec — this skill routes there and carries the number), or the post-launch ship-observe-learn-refine loop and autonomy-raise (use refine-flywheel).",
   "type": "generator",
   "supersedes": "none",
   "stage": "09",
   "hub": false,
   "summary": "Turns \"we want an agent for this\" into a spec built from four parts, in order of how much of it the fellow actually owns: a role stated as one decision the agent owns at a chosen autonomy level; the minimum tool set, eac",
   "triggers": [
    "Design an agent for our shift-handover digest / permit review / incident triage.",
    "What tools and memory should this agent have?",
    "Spec the agent — role, tools, what it remembers.",
    "Our agent repeats the same mistakes every run and never remembers corrections — how should its memory layer be built?",
    "Should this even be an agent, and if so what does it need to remember to get better over time?"
   ],
   "mustNotFire": [
    {
     "phrase": "Give my agent a personality / voice / signature phrases / make it sound like someone.",
     "sibling": "meta/agent-persona-builder",
     "local": false
    },
    {
     "phrase": "Design the fleet / how do the agents hand off / who spawns whom.",
     "sibling": "workflow-design",
     "local": true
    },
    {
     "phrase": "Write the agent's golden cases / set its autonomy level / what's the cost-per-outcome.",
     "sibling": "eval-first-spec",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Give it a personality / voice / signature phrases / make it sound like someone\"",
     "useInstead": [
      {
       "name": "meta/agent-persona-builder",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>meta/agent-persona-builder</code></p>",
     "why": "That designs SOUL/AGENTS/MEMORY/BOOTSTRAP — the agent's voice and operating manual. This designs the product spine (role · tools · memory-as-compounding-asset · eval). A voice is not a moat; a lessons.md is. Compose them; do not restate the persona mechanics here."
    },
    {
     "want": "\"Design the fleet / how do the agents hand off / who spawns whom\"",
     "useInstead": [
      {
       "name": "workflow-design",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (sibling, 09)</p>",
     "why": "That is the multi-agent orchestration. This specs ONE agent. If the answer needs a researcher, an analyst, and a critic passing work, that is a fleet — route it."
    },
    {
     "want": "\"Write the golden cases / set the autonomy level / what's the cost-per-outcome\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a> (07)</p>",
     "why": "That IS the agent's eval. This skill points at it and carries its autonomy level and number as constraints; it does not re-derive them."
    },
    {
     "want": "\"What's the post-launch loop / should we raise autonomy / re-run on the new model\"",
     "useInstead": [
      {
       "name": "refine-flywheel",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/refine-flywheel\"><code>refine-flywheel</code></a> (08)</p>",
     "why": "That runs the ship→observe→learn→refine loop over a live agent. This designs the memory-layer structure the loop then turns. Structure here; cadence there."
    },
    {
     "want": "\"How do we build this AI system / the component pipeline / the effort split\"",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a> (07)</p>",
     "why": "That is the system the agent may sit inside (router, retrieve, validate). This is one agent's internals. They compose."
    }
   ],
   "related": [
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "workflow-design",
     "local": true
    },
    {
     "name": "meta/agent-persona-builder",
     "local": false
    },
    {
     "name": "explicit-vs-tacit-capture",
     "local": true
    },
    {
     "name": "trace-to-interview",
     "local": true
    },
    {
     "name": "dataset-builder",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Role: one owned decision",
     "anchor": "step-1-role-one-owned-decision"
    },
    {
     "n": 2,
     "label": "Step 2 — Tools: the commodity shell",
     "anchor": "step-2-tools-the-commodity-shell"
    },
    {
     "n": 3,
     "label": "Step 3 — Memory layer: the part you own",
     "anchor": "step-3-memory-layer-the-part-you-own"
    },
    {
     "n": 4,
     "label": "Step 4 — Eval: the instrument that reads compounding",
     "anchor": "step-4-eval-the-instrument-that-reads-compounding"
    },
    {
     "n": 5,
     "label": "Step 5 — Compounding check + kill line",
     "anchor": "step-5-compounding-check-kill-line"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "workflow-design": {
   "name": "workflow-design",
   "description": "Fires when a fellow needs to coordinate MORE THAN ONE agent to get the work done — \"design the workflow\", \"orchestrate the agents\", \"set up the fleet\", \"how do the agents work together\", \"which agents do I need and when do they spawn\", \"multi-agent setup\". Returns a workflow + fleet map: the multi-step orchestration, a spawn-by-rule fleet (researcher, analyst, prototyper, drafter, critic) each with an observable spawn trigger, and a Think/Build/Admin surface assignment (Claude.ai / Claude Code / Cowork), then kills a single-agent design where a fleet is needed and any spawn rule with no trigger. Do NOT fire to spec ONE agent's role/tools/memory (use agent-design), to design the product's internal request-time pipeline of input→router→reason→validate (use compound-system-architecture), or to write the pass/fail eval (use eval-first-spec).",
   "type": "generator",
   "supersedes": "none",
   "stage": "09",
   "hub": false,
   "summary": "Turns \"I'll spin up some agents\" into a directed workflow of specialised agents, each summoned by a rule and dismissed by a rule, run across the three surfaces where the work actually belongs.",
   "triggers": [
    "Help me design the workflow for building Barrier's alert rules — how should the agents work together?",
    "How should I orchestrate the agents for this build? What's the fleet?",
    "Which agents do I need and when does each one spawn?",
    "Set up the multi-agent workflow — who does what, and how do they hand off?",
    "I keep doing everything in one Claude Code session; how do I split this across agents and surfaces?"
   ],
   "mustNotFire": [
    {
     "phrase": "Design me one agent — its role, tools, and memory layer so it improves over time.",
     "sibling": "agent-design",
     "local": true
    },
    {
     "phrase": "Design the product's system: input",
     "sibling": "compound-system-architecture",
     "local": true
    },
    {
     "phrase": "Write the 20 golden cases and the acceptable failure rate the critic checks against.",
     "sibling": "eval-first-spec",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Spec one agent — its role, tools, and memory layer\"",
     "useInstead": [
      {
       "name": "agent-design",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a></p>",
     "why": "That designs a single agent's guts. This coordinates several. If the honest answer is one agent, route there — a fleet for solo work is theatre."
    },
    {
     "want": "\"Design the product's system: input → router → retrieve → reason → validate → output\"",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></p>",
     "why": "That is the product's internal request-time pipeline — how a user request is processed. This is the fellow's build/operate fleet — the agents that do the WORK, with a different lifetime and graph."
    },
    {
     "want": "\"Write the golden cases and the acceptable failure rate\"",
     "useInstead": [
      {
       "name": "eval-first-spec",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/eval-first-spec\"><code>eval-first-spec</code></a></p>",
     "why": "That is the scoreable contract. The critic here runs against those cases; it does not write them."
    },
    {
     "want": "\"Make the UI / craft the interface\"",
     "useInstead": [
      {
       "name": "impeccable",
       "local": false
      },
      {
       "name": "design/*",
       "local": false
      }
     ],
     "useInsteadHtml": "<p><code>impeccable</code>, <code>design/*</code></p>",
     "why": "Route the prototyper's craft there. Do not restate a design skill inside the fleet map."
    }
   ],
   "related": [
    {
     "name": "agent-design",
     "local": true
    },
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "eval-first-spec",
     "local": true
    },
    {
     "name": "impeccable",
     "local": false
    },
    {
     "name": "design/*",
     "local": false
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 0 — fleet-or-solo gate",
     "anchor": "step-0-fleet-or-solo-gate"
    },
    {
     "n": 2,
     "label": "Step 1 — the workflow job",
     "anchor": "step-1-the-workflow-job"
    },
    {
     "n": 3,
     "label": "Step 2 — the multi-step workflow",
     "anchor": "step-2-the-multi-step-workflow"
    },
    {
     "n": 4,
     "label": "Step 3 — assign the fleet",
     "anchor": "step-3-assign-the-fleet"
    },
    {
     "n": 5,
     "label": "Step 4 — wire the spawn triggers",
     "anchor": "step-4-wire-the-spawn-triggers"
    },
    {
     "n": 6,
     "label": "Step 5 — assign surfaces",
     "anchor": "step-5-assign-surfaces"
    },
    {
     "n": 7,
     "label": "Step 6 — critic-independence check",
     "anchor": "step-6-critic-independence-check"
    },
    {
     "n": 8,
     "label": "Step 7 — the kill line",
     "anchor": "step-7-the-kill-line"
    }
   ],
   "gotchaHeadlines": [
    "The tab-switching fleet",
    "The self-critiquing drafter",
    "Over-orchestration",
    "Wrong surface",
    "Loops with no exit"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [
     {
      "gate": "1 Trigger",
      "status": "pass"
     },
     {
      "gate": "2 Golden",
      "status": "pass"
     },
     {
      "gate": "3 Adversarial",
      "status": "pass"
     },
     {
      "gate": "4 Head-to-head",
      "status": "na"
     },
     {
      "gate": "5 Anti-generic",
      "status": "pass"
     },
     {
      "gate": "6 Real-use",
      "status": "pending"
     }
    ],
    "goldenResult": "PASS (5/5)",
    "gate6": "pending",
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "fellow-level-ladder": {
   "name": "fellow-level-ladder",
   "description": "Assess where ONE fellow sits on the Icarus ladder — Literate → Practitioner → Operator → Frontier → Author — by checking which EXIT ARTEFACT each level requires actually EXISTS and can be cited, never by how ready the fellow feels. Fires on \"how's this fellow doing\", \"assess a fellow\", \"what level am I / is this fellow at\", \"am I ready to level up\", \"level up this fellow\". Output is a filled level assessment: the ladder table with a cited artefact and evidence rung per rung, the assigned level (highest level with an unbroken artefact chain beneath it), and the single next exit artefact to produce plus the skill that produces it. Self-assessment on feelings / confidence / tenure is banned and scored 0.1. NOT the build-vs-buy boundary of what Daedalus gives the fellow (use platform-vs-venture, sibling in section 10 — this reads that map only for the Author rung), NOT where a fellow should START or which stages fit their type (use fellow-path-router, section 00), NOT re-running an artefact's own gate (problem-quality-scorecard / pilot-six-term-sheet / evidence-ladder — this cites their verdicts, it does not re-derive them).",
   "type": "interactive",
   "supersedes": "none",
   "stage": "10",
   "hub": false,
   "summary": "Places one fellow on a five-rung ladder and returns the one artefact that moves them up.",
   "triggers": [
    "How's this fellow doing?",
    "Assess Mentix / where is this fellow on the ladder?",
    "What level am I at right now?",
    "Am I ready to level up?",
    "Level up this fellow — what's the next rung?"
   ],
   "mustNotFire": [
    {
     "phrase": "Should the fellow build their own eval harness or use the platform's? Draw the build-vs-buy line.",
     "sibling": "platform-vs-venture",
     "local": true
    },
    {
     "phrase": "Where should this fellow start / which Icarus stages apply to my type?",
     "sibling": "fellow-path-router",
     "local": true
    },
    {
     "phrase": "Is this problem good enough to build — score it.",
     "sibling": "problem-quality-scorecard",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "The line between what Daedalus builds once and what the fellow owns (build vs buy, \"what does the platform give me\")",
     "useInstead": [
      {
       "name": "platform-vs-venture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/platform-vs-venture\"><code>platform-vs-venture</code></a> (sibling, section 10). This skill <em>reads</em> that map only to test the Author rung; it does not draw the boundary.</p>",
     "why": null
    },
    {
     "want": "Where to START / which Icarus stages apply to their type (blank page vs traction vs mature product)",
     "useInstead": [
      {
       "name": "fellow-path-router",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> (section 00). It classifies and routes the flow; this grades progression against exit artefacts.</p>",
     "why": null
    },
    {
     "want": "To score the problem / check the pilot is real / weight a discovery signal",
     "useInstead": [
      {
       "name": "problem-quality-scorecard",
       "local": true
      },
      {
       "name": "pilot-six-term-sheet",
       "local": true
      },
      {
       "name": "evidence-ladder",
       "local": true
      }
     ],
     "useInsteadHtml": "<p>the artefact's own skill: <a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a>, <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a>, <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a>. This skill cites their verdicts; it never re-derives them.</p>",
     "why": null
    }
   ],
   "related": [
    {
     "name": "platform-vs-venture",
     "local": true
    },
    {
     "name": "fellow-path-router",
     "local": true
    },
    {
     "name": "problem-quality-scorecard",
     "local": true
    },
    {
     "name": "probe-matrix",
     "local": true
    },
    {
     "name": "evidence-ladder",
     "local": true
    },
    {
     "name": "pilot-six-term-sheet",
     "local": true
    },
    {
     "name": "v1-launch-bar",
     "local": true
    },
    {
     "name": "refine-flywheel",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — Name the fellow and quarantine the claim",
     "anchor": "step-1-name-the-fellow-and-quarantine-the-claim"
    },
    {
     "n": 2,
     "label": "Step 2 — Walk the five rungs, cite or fail each",
     "anchor": "step-2-walk-the-five-rungs-cite-or-fail-each"
    },
    {
     "n": 3,
     "label": "Step 3 — Apply the contiguity rule (no skipping)",
     "anchor": "step-3-apply-the-contiguity-rule-no-skipping"
    },
    {
     "n": 4,
     "label": "Step 4 — Banned-signal check",
     "anchor": "step-4-banned-signal-check"
    },
    {
     "n": 5,
     "label": "Step 5 — Assign the level and name the ONE next artefact",
     "anchor": "step-5-assign-the-level-and-name-the-one-next-artefact"
    }
   ],
   "gotchaHeadlines": [
    "Claimed level is not held level",
    "The gap trap",
    "Stale artefact",
    "Author inflation",
    "Don't over-drama the low rungs"
   ],
   "harness": {
    "hasHarness": true,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "platform-vs-venture": {
   "name": "platform-vs-venture",
   "description": "Draws the ownership line for an AI build. For every component it decides one of three things: Daedalus (the studio platform) builds it once and the fellow inherits it, the fellow builds it because it is their moat, or it is a rented commodity. Fires on \"build vs buy\", \"build or use the platform\", \"what does Daedalus give me\", \"do we build our own eval harness / RAG / router\", \"what's ours vs the studio's\", \"should we build our own model\". Returns a build/buy boundary map that splits each component into platform substrate (inherit) and domain signal (build), and kills two errors: rebuilding a platform primitive, or buying/outsourcing what is actually the moat. Not for sequencing the moat into dated gates (use moat-design-canvas), not for laying out the component pipeline and effort split (use compound-system-architecture — run it first), not for writing the actual guardrail rules and thresholds (use guardrail-design).",
   "type": "generator",
   "supersedes": "none",
   "stage": "10",
   "hub": false,
   "summary": "Takes the components of a fellow's AI build and assigns each one to a lane: Platform (Daedalus builds it once, every venture inherits it), Venture (the fellow builds it, it is their moat), or Buy (a vendor rents it, it is nobody's moat).",
   "triggers": [
    "build vs buy on this",
    "build or use the platform?",
    "what does Daedalus give me?",
    "do we build our own eval harness / RAG / router?",
    "should we build our own model?"
   ],
   "mustNotFire": [
    {
     "phrase": "sequence the moat into dated gates",
     "sibling": "moat-design-canvas",
     "local": true
    },
    {
     "phrase": "lay out the component pipeline and effort split",
     "sibling": "compound-system-architecture",
     "local": true
    },
    {
     "phrase": "write the actual guardrail rules and thresholds",
     "sibling": "guardrail-design",
     "local": true
    }
   ],
   "handoffs": [
    {
     "want": "\"Lay out the component pipeline and the Data/Model/Orch/Interface effort split\"",
     "useInstead": [
      {
       "name": "compound-system-architecture",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/compound-system-architecture\"><code>compound-system-architecture</code></a></p>",
     "why": "That produces the components. This draws the ownership line through them. Run it first; feed its pipeline in here."
    },
    {
     "want": "\"Sequence our moat into dated gates with falsifiers\"",
     "useInstead": [
      {
       "name": "moat-design-canvas",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a></p>",
     "why": "That sequences the moat over time. This decides which components are the moat and must stay in-venture. The components this skill marks Venture are the raw material that one sequences."
    },
    {
     "want": "\"Write the actual guardrail rules and thresholds / the sign-off matrix\"",
     "useInstead": [
      {
       "name": "guardrail-design",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a></p>",
     "why": "This decides that the guardrail engine is Platform and the domain rules are Venture, then routes rule-writing there. It does not write the rules."
    },
    {
     "want": "\"Which Icarus stages apply to me / what type of fellow am I\"",
     "useInstead": [
      {
       "name": "fellow-path-router",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a></p>",
     "why": "That classifies the fellow and the flow. This classifies the components of one build."
    },
    {
     "want": "\"Spec the agent's tools and memory / design the fleet\"",
     "useInstead": [
      {
       "name": "agent-design",
       "local": true
      },
      {
       "name": "workflow-design",
       "local": true
      }
     ],
     "useInsteadHtml": "<p><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></p>",
     "why": "Those design the agent and the orchestration. This decides which parts of that design are inherited versus built."
    }
   ],
   "related": [
    {
     "name": "compound-system-architecture",
     "local": true
    },
    {
     "name": "moat-design-canvas",
     "local": true
    },
    {
     "name": "guardrail-design",
     "local": true
    },
    {
     "name": "data-rights-clause",
     "local": true
    },
    {
     "name": "[Assumption]",
     "local": false
    },
    {
     "name": "dataset-builder",
     "local": true
    },
    {
     "name": "agent-design",
     "local": true
    },
    {
     "name": "workflow-design",
     "local": true
    }
   ],
   "steps": [
    {
     "n": 1,
     "label": "Step 1 — List the components",
     "anchor": "step-1-list-the-components"
    },
    {
     "n": 2,
     "label": "Step 2 — Run the moat test on each component",
     "anchor": "step-2-run-the-moat-test-on-each-component"
    },
    {
     "n": 3,
     "label": "Step 3 — Split each shared component into substrate and signal",
     "anchor": "step-3-split-each-shared-component-into-substrate-and-signal"
    },
    {
     "n": 4,
     "label": "Step 4 — Assign the three lanes",
     "anchor": "step-4-assign-the-three-lanes"
    },
    {
     "n": 5,
     "label": "Step 5 — The two-error kill line",
     "anchor": "step-5-the-two-error-kill-line"
    },
    {
     "n": 6,
     "label": "Step 6 — Verdict and the one change",
     "anchor": "step-6-verdict-and-the-one-change"
    }
   ],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": true,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 5,
    "adversarialCases": 3,
    "passThreshold": "21/25"
   }
  },
  "icarus-golden-rules": {
   "name": "icarus-golden-rules",
   "description": "Loads the Icarus golden rules — the evidence ladder (money 1.0 / behaviour 0.7 / artefact 0.5 / commitment 0.3 / opinion 0.1), the [Fact]/[Assumption]/[Hypothesis] tag rule, the five challenge questions, the 21/25 rubric and its four auto-fails — before any product judgement is made. Fires on \"what are the rules\", \"how do we score this\", \"is this up to standard\", \"review this against our method\", \"did this skill do its job\", and whenever an output is about to claim something is validated, de-risked, or ready. NOT the router for which stage to run (use fellow-path-router), NOT a weighting of one evidence pile (use evidence-ladder), NOT the whole-idea five-question gate (use so-what-stress-test).",
   "type": "component",
   "supersedes": "none",
   "stage": null,
   "hub": true,
   "summary": "Puts the studio's method in front of Claude before it judges anything.",
   "triggers": [],
   "mustNotFire": [],
   "handoffs": [],
   "related": [],
   "steps": [],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": false,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 0,
    "adversarialCases": 0,
    "passThreshold": null
   }
  },
  "lessons": {
   "name": "lessons",
   "description": "Reads and writes the hub's append-only lessons log — what the studio learned the hard way, and what rule it changed. Fires on \"log a lesson\", \"what did we learn\", \"we got this wrong\", \"add this to lessons\", \"have we hit this before\", \"post-mortem this\", and at the end of any fellow session worth remembering. Also fires BEFORE product work to check whether a known lesson already applies. NOT a retro facilitation format, NOT a meeting-notes summariser, NOT the graduation eval log (that lives in each skill's tests/RESULTS.md).",
   "type": "interactive",
   "supersedes": "none",
   "stage": null,
   "hub": true,
   "summary": "Keeps lessons/LOG.md honest and short.",
   "triggers": [],
   "mustNotFire": [],
   "handoffs": [],
   "related": [],
   "steps": [],
   "gotchaHeadlines": [],
   "harness": {
    "hasHarness": false,
    "gates": [],
    "goldenResult": null,
    "gate6": null,
    "goldenCases": 0,
    "adversarialCases": 0,
    "passThreshold": null
   }
  }
 },
 "skillOrder": [
  "fellow-path-router",
  "concept-council",
  "so-what-stress-test",
  "product-as-decision",
  "job-in-primitives",
  "current-state-map",
  "physics-floor-gap",
  "problem-quality-scorecard",
  "null-hypothesis-test",
  "bottoms-up-quantification",
  "user-buyer-decider-map",
  "unserved-needs-finder",
  "synthetic-users",
  "tacit-knowledge-interview",
  "evidence-ladder",
  "continuous-discovery-engine",
  "yoda-data-sourcing",
  "explicit-vs-tacit-capture",
  "dataset-builder",
  "probe-matrix",
  "paper-sketch-probe",
  "wizard-of-oz-probe",
  "concierge-probe",
  "agent-concierge-probe",
  "product-frame-stack",
  "four-lenses-test",
  "first-mocks",
  "usability-test-protocol",
  "invent-by-hand",
  "wedge-five-questions",
  "moat-design-canvas",
  "data-rights-clause",
  "eval-first-spec",
  "compound-system-architecture",
  "guardrail-design",
  "pilot-six-term-sheet",
  "value-based-pricing",
  "v1-launch-bar",
  "refine-flywheel",
  "trace-to-interview",
  "metrics-that-matter",
  "agent-design",
  "workflow-design",
  "fellow-level-ladder",
  "platform-vs-venture",
  "icarus-golden-rules",
  "lessons"
 ],
 "hubSkills": [
  "icarus-golden-rules",
  "lessons"
 ],
 "external": {
  "actionable": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "agent-persona-builder": {
   "referencedBy": [
    "agent-design",
    "agents/README.md"
   ]
  },
  "agent-watchdog": {
   "referencedBy": [
    "agent-watchdog"
   ]
  },
  "analytics-tracking": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "beachhead-segment": {
   "referencedBy": [
    "concept-council",
    "continuous-discovery-engine"
   ]
  },
  "brainstorm-experiments-new": {
   "referencedBy": [
    "concept-council",
    "invent-by-hand"
   ]
  },
  "business-model": {
   "referencedBy": [
    "product-frame-stack"
   ]
  },
  "challenge": {
   "referencedBy": [
    "GOLDEN_RULES.md",
    "first-mocks",
    "icarus-golden-rules",
    "probe-matrix"
   ]
  },
  "cohort-analysis": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "concierge": {
   "referencedBy": [
    "usability-test-protocol"
   ]
  },
  "create-prd": {
   "referencedBy": [
    "concept-council"
   ]
  },
  "description": {
   "referencedBy": [
    "agents/README.md",
    "continuous-discovery-engine",
    "current-state-map",
    "explicit-vs-tacit-capture",
    "fellow-level-ladder",
    "guardrail-design",
    "job-in-primitives",
    "lessons/LOG.md",
    "synthetic-users",
    "wedge-five-questions"
   ]
  },
  "design": {
   "referencedBy": [
    "first-mocks",
    "usability-test-protocol"
   ]
  },
  "discard": {
   "referencedBy": [
    "dataset-builder"
   ]
  },
  "discovery-interview-prep": {
   "referencedBy": [
    "synthetic-users",
    "tacit-knowledge-interview"
   ]
  },
  "edc6b9f1": {
   "referencedBy": [
    "GOLDEN_RULES.md"
   ]
  },
  "edc6b9f18820c1f729818484b97496011fbd36e3": {
   "referencedBy": [
    "skills/SOURCES.md"
   ]
  },
  "efficient-fable": {
   "referencedBy": [
    "efficient-frontier"
   ]
  },
  "efficient-frontier": {
   "referencedBy": [
    "efficient-frontier",
    "rebuilds/README.md",
    "stay-within-limits"
   ]
  },
  "escalate": {
   "referencedBy": [
    "agent-design"
   ]
  },
  "evidence-driven-testing": {
   "referencedBy": [
    "v1-launch-bar"
   ]
  },
  "fatal": {
   "referencedBy": [
    "so-what-stress-test"
   ]
  },
  "financial-unit-economics": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "format-notes": {
   "referencedBy": [
    "agent-design"
   ]
  },
  "gas-threshold-lookup": {
   "referencedBy": [
    "agent-design"
   ]
  },
  "golden": {
   "referencedBy": [
    "dataset-builder"
   ]
  },
  "hold": {
   "referencedBy": [
    "dataset-builder"
   ]
  },
  "icarus-critic": {
   "referencedBy": [
    "agent-watchdog",
    "agents/README.md",
    "efficient-frontier"
   ]
  },
  "ideal-customer-profile": {
   "referencedBy": [
    "user-buyer-decider-map"
   ]
  },
  "identify-assumptions-existing": {
   "referencedBy": [
    "null-hypothesis-test"
   ]
  },
  "identify-assumptions-new": {
   "referencedBy": [
    "four-lenses-test",
    "null-hypothesis-test",
    "probe-matrix",
    "problem-quality-scorecard",
    "skills/ICARUS.md"
   ]
  },
  "impeccable": {
   "referencedBy": [
    "first-mocks",
    "usability-test-protocol",
    "workflow-design"
   ]
  },
  "interview-script": {
   "referencedBy": [
    "synthetic-users",
    "tacit-knowledge-interview"
   ]
  },
  "invent-wedge-moat": {
   "referencedBy": [
    "fellow-path-router"
   ]
  },
  "jobs-to-be-done": {
   "referencedBy": [
    "explicit-vs-tacit-capture"
   ]
  },
  "market-skill-ingestion": {
   "referencedBy": [
    "lessons/LOG.md"
   ]
  },
  "metrics-dashboard": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "model": {
   "referencedBy": [
    "agents/README.md"
   ]
  },
  "monetization-strategy": {
   "referencedBy": [
    "pilot-six-term-sheet",
    "value-based-pricing"
   ]
  },
  "name": {
   "referencedBy": [
    "agents/README.md"
   ]
  },
  "north-star-metric": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "one-pager-prd": {
   "referencedBy": [
    "concept-council"
   ]
  },
  "opportunity-solution-tree": {
   "referencedBy": [
    "continuous-discovery-engine",
    "skills/ICARUS.md"
   ]
  },
  "pass": {
   "referencedBy": [
    "so-what-stress-test"
   ]
  },
  "permit-hazard-classify": {
   "referencedBy": [
    "agent-design"
   ]
  },
  "plan-arbiter": {
   "referencedBy": [
    "plan-arbiter"
   ]
  },
  "plow-ahead": {
   "referencedBy": [
    "plow-ahead"
   ]
  },
  "prd-development": {
   "referencedBy": [
    "concept-council"
   ]
  },
  "pre-mortem": {
   "referencedBy": [
    "null-hypothesis-test"
   ]
  },
  "problem-framing-canvas": {
   "referencedBy": [
    "current-state-map",
    "job-in-primitives"
   ]
  },
  "problem-statement": {
   "referencedBy": [
    "concept-council",
    "continuous-discovery-engine",
    "evidence-ladder",
    "first-mocks",
    "null-hypothesis-test",
    "probe-matrix",
    "problem-quality-scorecard"
   ]
  },
  "product-manager-skills": {
   "referencedBy": [
    "lessons/LOG.md"
   ]
  },
  "proto-persona": {
   "referencedBy": [
    "user-buyer-decider-map"
   ]
  },
  "prototyping-pretotyping": {
   "referencedBy": [
    "first-mocks",
    "paper-sketch-probe",
    "probe-matrix",
    "skills/ICARUS.md",
    "synthetic-users",
    "wizard-of-oz-probe"
   ]
  },
  "quick-recap": {
   "referencedBy": [
    "quick-recap"
   ]
  },
  "read-the-damn-docs": {
   "referencedBy": [
    "read-the-damn-docs"
   ]
  },
  "recommendation-canvas": {
   "referencedBy": [
    "product-frame-stack"
   ]
  },
  "retention-dashboard": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "shape": {
   "referencedBy": [
    "first-mocks"
   ]
  },
  "stay-within-limits": {
   "referencedBy": [
    "stay-within-limits"
   ]
  },
  "summarize-interview": {
   "referencedBy": [
    "evidence-ladder",
    "tacit-knowledge-interview",
    "tools/README.md",
    "trace-to-interview"
   ]
  },
  "supersedes": {
   "referencedBy": [
    "paper-sketch-probe"
   ]
  },
  "tools": {
   "referencedBy": [
    "agents/README.md"
   ]
  },
  "train": {
   "referencedBy": [
    "dataset-builder"
   ]
  },
  "user-story": {
   "referencedBy": [
    "eval-first-spec"
   ]
  },
  "user-story-splitting": {
   "referencedBy": [
    "eval-first-spec"
   ]
  },
  "utopia-founder-productivity": {
   "referencedBy": [
    "agents/README.md"
   ]
  },
  "vanity": {
   "referencedBy": [
    "metrics-that-matter"
   ]
  },
  "weak": {
   "referencedBy": [
    "so-what-stress-test"
   ]
  },
  "wizard-of-oz": {
   "referencedBy": [
    "usability-test-protocol"
   ]
  },
  "yoda-your-own-data": {
   "referencedBy": [
    "fellow-path-router"
   ]
  }
 },
 "rules": [
  {
   "n": 1,
   "title": "Evidence is weighted by what people did, not what they said",
   "html": "<p>One ladder, used identically everywhere in the hub.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Rung</th><th>Weight</th><th>Counts only when</th><th>Common impostor → downgrade to</th></tr></thead><tbody><tr><td>Money moved</td><td>1.0</td><td>cash or budget actually changed hands — invoice paid, deposit, pre-order, paid pilot</td><td>a signed LOI or quote with no payment → Verbal 0.3</td></tr><tr><td>Behaviour observed</td><td>0.7</td><td>you saw them do it (or hold the logs); it cost them time, effort, or switching; unprompted</td><td>a self-reported routine you did not witness → Verbal 0.3; a free one-click sign-up → Verbal 0.3</td></tr><tr><td>Artefact shown</td><td>0.5</td><td>they showed you a thing THEY made or use — a spreadsheet, a workaround, their permit log</td><td>a reaction to a mockup YOU made → Opinion 0.1</td></tr><tr><td>Verbal commitment</td><td>0.3</td><td>a specific promise about the future — &quot;I'd pay $X&quot;, &quot;we'd switch by Q3&quot;</td><td>vague praise (&quot;great idea&quot;, &quot;we'd love that&quot;) → Opinion 0.1</td></tr><tr><td>Opinion</td><td>0.1</td><td>a view, a feeling, a prediction — &quot;I think&quot;, &quot;everyone needs this&quot;</td><td>— floor: never below, never above</td></tr></tbody></table></div>\n<p>Three rules on top of the table:</p>\n<ol><li><strong>Rungs do not stack.</strong> Fifty people saying yes is still 0.3. The only thing that raises a claim is one signal at a higher rung, not more signals at the same one.</li><li><strong>A claim's weight is its best rung, never the sum.</strong> Three verbal yeses is 0.3, not 0.9.</li><li><strong>Never average the pile.</strong> A mean lets one payment launder a stack of opinion. Report the load-bearing claim's weight plus a coverage tally.</li></ol>\n<p>Scoring an opinion above 0.1 fails the skill.</p>"
  },
  {
   "n": 2,
   "title": "Tag every empirical claim",
   "html": "<p><code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Untagged guesses presented as facts are an auto-fail.</p>"
  },
  {
   "n": 3,
   "title": "Challenge before you help",
   "html": "<p>Weak input gets named, not softened. Every skill must push back, name the gaps and kill criteria, and say what would change its view. Flattering a weak idea instead of challenging it is an auto-fail.</p>\n<p>The five whole-idea questions (<a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a>), run silently on anything proposed:</p>\n<ul><li><strong>So what?</strong> What outcome changes if this works?</li><li><strong>Who pays?</strong> Buyer, budget owner, why now?</li><li><strong>What's the wedge?</strong> Smallest thing that forces adoption.</li><li><strong>What's the moat?</strong> Data rights, workflow lock-in, distribution, regulation, domain edge.</li><li><strong>What kills it?</strong> Top three failure modes, and the fastest way to know.</li></ul>\n<p>No question passes on opinion alone.</p>"
  },
  {
   "n": 4,
   "title": "Never fabricate",
   "html": "<p>No specific number, quote, or citation that was not in the input. Empty input is a request for evidence, not a zero: ask the one classifying question and stop. Do not emit a headline score over nothing.</p>"
  },
  {
   "n": 5,
   "title": "Stay in scope",
   "html": "<p>Each skill names its siblings and hands off rather than poaching. Firing outside trigger scope is an auto-fail. Generic PM boilerplate is an auto-fail — if a generic prompt could have produced the output, the skill did no work.</p>"
  },
  {
   "n": 6,
   "title": "The scoring rubric, unchanged across all 45 skills",
   "html": "<p>Pass threshold 21/25, no dimension below 4.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Dimension</th><th>Weight</th><th>Bar</th></tr></thead><tbody><tr><td><code>method_fidelity</code></td><td>5</td><td>Follows the Icarus method exactly; no steps skipped or softened.</td></tr><tr><td><code>artifact_complete</code></td><td>5</td><td>Produces the named artifact, fully filled, with the required numbers and citations.</td></tr><tr><td><code>proprietary_edge</code></td><td>5</td><td>Could NOT have come from a generic prompt. Uses first-principles / evidence-ladder / eval logic.</td></tr><tr><td><code>challenge</code></td><td>5</td><td>Pushes back on weak input; names gaps, kill criteria, and what would change the view.</td></tr><tr><td><code>evidence_standard</code></td><td>5</td><td>Weights money and behaviour over opinion; tags claims <span class=\"tag tag-fact\">Fact</span>/<span class=\"tag tag-assumption\">Assumption</span>/<span class=\"tag tag-hypothesis\">Hypothesis</span>.</td></tr></tbody></table></div>\n<p>Auto-fail, any one of:</p>\n<ul><li>Fabricated a specific number, quote, or citation not in the input</li><li>Flattered a weak idea instead of challenging it</li><li>Fired outside its trigger scope / poached a sibling skill</li><li>Output is generic PM boilerplate</li></ul>"
  },
  {
   "n": 7,
   "title": "Six gates before a skill graduates",
   "html": "<p>Scored by a judge agent separate from the author.</p>\n<ol><li><strong>Trigger precision</strong> — fires on 5/5 wanted phrasings, 0/3 siblings.</li><li><strong>Golden set</strong> — ≥21/25 on every case, no dimension below 4.</li><li><strong>Adversarial</strong> — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.</li><li><strong>Head-to-head</strong> — a superseding skill must beat the skill it replaces on the same inputs.</li><li><strong>Anti-generic</strong> — its output could not have come from a generic PM prompt.</li><li><strong>Used 5+ times in real fellow work</strong> — completes in use. Log each miss as a gotcha and re-run the set.</li></ol>\n<p>Golden cases come from real fellow work: Azraq, Mentix, Barrier Intelligence, Durian.</p>"
  },
  {
   "n": 8,
   "title": "Judgment, not steps",
   "html": "<p>&quot;A skill that is only a checklist gets sent back. Include a concrete 'what good looks like,' real numbers where you score things, and at least one worked example.&quot;</p>"
  },
  {
   "n": 9,
   "title": "Fold or reject; never vendor wholesale",
   "html": "<p>&quot;Every market skill is, by default, folded into an existing studio skill or rejected. It is never added as new surface, and never vendored wholesale.&quot;</p>\n<p>Every skill Claude can load costs context on every session, for every fellow. Net-new surface has to earn that recurring cost, not just be good in isolation. Adoption and behaviour outrank author opinion: install counts and real usage are evidence, a README's self-description is not.</p>"
  },
  {
   "n": 10,
   "title": "Don't re-run a stage you have already earned",
   "html": "<p>The biggest waste is not skipping a stage, it is re-running one whose answer you already hold in behaviour or money. Subtract stages you have evidenced past. Refuse to leap a stage you only feel you have done. Type is graded to the highest rung the fellow can actually show, and it rounds down, never up.</p>\n<hr>"
  }
 ],
 "rulesIntro": "<p>The method every skill and agent in this hub runs on. If a skill's output breaks a rule here, the output is wrong — not the rule.</p>\n<p><strong>Provenance.</strong> Consolidated from <code>The-Utopia-Studio/skills</code> at commit <code>edc6b9f1</code>, folder <code>skills/product/</code>: <code>ICARUS.md</code> (flow and graduation gates), the <code>tests/rubric.json</code> shared by all 45 Icarus skills (dimensions and auto-fails, byte-identical across the set), <code>evidence-ladder/SKILL.md</code> (the ladder), <code>CONTRIBUTING.md</code> (the authoring bar), and <code>skills/meta/market-skill-ingestion/SKILL.md</code> (the ingestion rule). Nothing here is invented. Where the source says it in one line, that line is quoted.</p>\n<hr>",
 "ladder": [
  {
   "rung": "Money moved",
   "weight": 1,
   "countsWhen": "cash or budget actually changed hands — invoice paid, deposit, pre-order, paid pilot",
   "impostor": "a signed LOI or quote with no payment → Verbal 0.3"
  },
  {
   "rung": "Behaviour observed",
   "weight": 0.7,
   "countsWhen": "you saw them do it (or hold the logs); it cost them time, effort, or switching; unprompted",
   "impostor": "a self-reported routine you did not witness → Verbal 0.3; a free one-click sign-up → Verbal 0.3"
  },
  {
   "rung": "Artefact shown",
   "weight": 0.5,
   "countsWhen": "they showed you a thing THEY made or use — a spreadsheet, a workaround, their permit log",
   "impostor": "a reaction to a mockup YOU made → Opinion 0.1"
  },
  {
   "rung": "Verbal commitment",
   "weight": 0.3,
   "countsWhen": "a specific promise about the future — \"I'd pay $X\", \"we'd switch by Q3\"",
   "impostor": "vague praise (\"great idea\", \"we'd love that\") → Opinion 0.1"
  },
  {
   "rung": "Opinion",
   "weight": 0.1,
   "countsWhen": "a view, a feeling, a prediction — \"I think\", \"everyone needs this\"",
   "impostor": "— floor: never below, never above"
  }
 ],
 "agents": [
  {
   "name": "icarus-critic",
   "description": "Adversarial reviewer for any product claim, PRD, deck, or pilot plan. Grades the work against the Icarus golden rules and returns a verdict, not encouragement. Use when a fellow says an idea is validated, de-risked, or ready; when a document is about to go to QDB or an investor; or when a build week is about to be booked. Refuses to pass any claim carried by opinion alone.",
   "tools": [
    "Read",
    "Grep",
    "Glob",
    "Skill"
   ],
   "model": null,
   "html": "<p>You are the Icarus critic. Your job is to find the load-bearing claim and test whether it holds. You are not a coach and not a copy editor.</p>\n<p><strong>Before anything else</strong>, read <code>GOLDEN_RULES.md</code> at the repo root. Everything below assumes those ten rules.</p>\n<h2>How you work</h2>\n<ol><li><strong>Find the one load-bearing claim.</strong> Usually &quot;the target will pay for this&quot; or &quot;this will be adopted&quot;. Everything else in the document is decoration until that claim holds. State it in one sentence, in their words.</li><li><strong>Place every signal on the evidence ladder.</strong> Money 1.0, behaviour 0.7, artefact 0.5, commitment 0.3, opinion 0.1. Downgrade every impostor: an LOI with no payment is 0.3, a free sign-up is 0.3, a reaction to their own mockup is 0.1. Rungs do not stack. The headline is the best real rung of the load-bearing claim, never an average.</li><li><strong>Run the five questions.</strong> So what / Who pays / What's the wedge / What's the moat / What kills it. Each gets a Pass, Redesign, or Kill, with the evidence rung next to it. A question answered on opinion cannot pass.</li><li><strong>Name the three fastest ways this dies</strong>, and for each, the cheapest probe that would tell them inside two weeks.</li><li><strong>Give a verdict</strong>: PASS, REDESIGN, or KILL. Then the single next action.</li></ol>\n<h2>Compose, do not reinvent</h2>\n<p>Call the Icarus skills rather than improvising their logic:</p>\n<ul><li><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> — the five whole-idea questions</li><li><a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> — weighting a pile of signals</li><li><a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a> — is the wedge real, 5/5 or not a wedge</li><li><a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a> — defensibility over years</li><li><a class=\"skill-ref\" href=\"#/skill/problem-quality-scorecard\"><code>problem-quality-scorecard</code></a> — the eight-dimension build gate</li><li><a class=\"skill-ref\" href=\"#/skill/probe-matrix\"><code>probe-matrix</code></a> — picking the probe that raises a rung</li></ul>\n<p>If the ask is really routing (&quot;where do I start&quot;), stop and hand to <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a>. If it is a single wedge question, hand to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>. Do not poach.</p>\n<h2>Hard rules</h2>\n<ul><li>Never invent a number, quote, or citation. If the input has no evidence, say the pile is empty, ask for signals, and stop. An empty ladder is a request, not a zero.</li><li>Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>.</li><li>Never soften a verdict to be kind. &quot;Strong direction, few notes&quot; is a failed review.</li><li>Say what would change your mind. A verdict with no falsifier is an opinion.</li><li>Qatar-first deployment and global commercial scalability both have to hold. A concept that works only in Doha, or only outside it, is a REDESIGN.</li></ul>\n<h2>Output shape</h2>\n<p>A one-line verdict. The load-bearing claim and its rung. A five-row question table. A three-row kill table with probes. One next action with an owner and a date. Nothing else.</p>",
   "path": "agents/icarus-critic.md"
  }
 ],
 "personas": [],
 "commands": [
  {
   "name": "/icarus",
   "description": "Route a fellow or a product through the Icarus stages — which apply, which to skip, and in what order.",
   "argumentHint": "[situation — where you are, what exists, what evidence you hold]",
   "promptHtml": "<p>Run the <a class=\"skill-ref\" href=\"#/skill/fellow-path-router\"><code>fellow-path-router</code></a> skill on this situation:</p>\n<p>$ARGUMENTS</p>\n<p>Before routing, read <code>GOLDEN_RULES.md</code>. Classify to the highest rung of evidence they can actually show, and round down — a fellow who says &quot;mature product&quot; but cannot show flattening retention is Type B, not C, and you say so.</p>\n<p>Return the stage ledger (KEEP / TRIM / SUBTRACT / LEAP across the eleven sections) and the think:build:test ratio tied to that type's dominant failure mode. Do not grade the idea — that is <a class=\"skill-ref\" href=\"#/skill/concept-council\"><code>concept-council</code></a> or <code>/stress-test</code>. If there is no product signal and no problem signal, ask the one classifying question and stop.</p>",
   "promptRaw": "Run the `fellow-path-router` skill on this situation:\n\n$ARGUMENTS\n\nBefore routing, read `GOLDEN_RULES.md`. Classify to the highest rung of evidence they can\nactually show, and round down — a fellow who says \"mature product\" but cannot show\nflattening retention is Type B, not C, and you say so.\n\nReturn the stage ledger (KEEP / TRIM / SUBTRACT / LEAP across the eleven sections) and the\nthink:build:test ratio tied to that type's dominant failure mode. Do not grade the idea —\nthat is `concept-council` or `/stress-test`. If there is no product signal and no problem\nsignal, ask the one classifying question and stop.",
   "skillsInvoked": [
    "fellow-path-router",
    "concept-council"
   ],
   "path": "commands/icarus.md"
  },
  {
   "name": "/lesson",
   "description": "Log what the studio learned the hard way into the append-only lessons log.",
   "argumentHint": "[what happened, and what it cost]",
   "promptHtml": "<p>Run the <a class=\"skill-ref\" href=\"#/skill/lessons\"><code>lessons</code></a> skill on this:</p>\n<p>$ARGUMENTS</p>\n<p>Check <code>lessons/LOG.md</code> first — if this lesson already exists in other words, strengthen the existing entry instead of adding a second one.</p>\n<p>An entry earns its line only if it is specific (a fellow, a date, a number), costly (something was actually lost, named), and actionable (it says which rule, skill, or default changes). If any of the three is missing, ask for that half rather than writing a soft version.</p>\n<p>Append the filled entry at the top of <code>lessons/LOG.md</code> using <code>lessons/TEMPLATE.md</code>.</p>\n<p>If the lesson would change a rule in <code>GOLDEN_RULES.md</code>, say so and stop. Rule changes are Ollie's call, not a quiet edit.</p>",
   "promptRaw": "Run the `lessons` skill on this:\n\n$ARGUMENTS\n\nCheck `lessons/LOG.md` first — if this lesson already exists in other words, strengthen\nthe existing entry instead of adding a second one.\n\nAn entry earns its line only if it is specific (a fellow, a date, a number), costly\n(something was actually lost, named), and actionable (it says which rule, skill, or\ndefault changes). If any of the three is missing, ask for that half rather than writing a\nsoft version.\n\nAppend the filled entry at the top of `lessons/LOG.md` using `lessons/TEMPLATE.md`.\n\nIf the lesson would change a rule in `GOLDEN_RULES.md`, say so and stop. Rule changes are\nOllie's call, not a quiet edit.",
   "skillsInvoked": [
    "lessons"
   ],
   "path": "commands/lesson.md"
  },
  {
   "name": "/stress-test",
   "description": "Pressure-test a whole idea across the five business questions and return Pass, Redesign, or Kill.",
   "argumentHint": "[the idea, plus whatever evidence you actually hold]",
   "promptHtml": "<p>Run the <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> skill on this:</p>\n<p>$ARGUMENTS</p>\n<p>Read <code>GOLDEN_RULES.md</code> first. Weight every signal on the evidence ladder before answering any question, and refuse to pass a question carried by opinion alone. Tag every empirical claim <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>. Invent no numbers — if the pile is empty, say so and ask for signals rather than scoring nothing.</p>\n<p>Return the five-row verdict table, the overall Pass / Redesign / Kill, and the single cheapest probe that would move the load-bearing claim up one rung.</p>\n<p>If the ask is really about one wedge, hand to <a class=\"skill-ref\" href=\"#/skill/wedge-five-questions\"><code>wedge-five-questions</code></a>. If it is about defensibility over years, hand to <a class=\"skill-ref\" href=\"#/skill/moat-design-canvas\"><code>moat-design-canvas</code></a>. Do not poach either.</p>",
   "promptRaw": "Run the `so-what-stress-test` skill on this:\n\n$ARGUMENTS\n\nRead `GOLDEN_RULES.md` first. Weight every signal on the evidence ladder before answering\nany question, and refuse to pass a question carried by opinion alone. Tag every empirical\nclaim `[Fact]`, `[Assumption]`, or `[Hypothesis]`. Invent no numbers — if the pile is\nempty, say so and ask for signals rather than scoring nothing.\n\nReturn the five-row verdict table, the overall Pass / Redesign / Kill, and the single\ncheapest probe that would move the load-bearing claim up one rung.\n\nIf the ask is really about one wedge, hand to `wedge-five-questions`. If it is about\ndefensibility over years, hand to `moat-design-canvas`. Do not poach either.",
   "skillsInvoked": [
    "so-what-stress-test",
    "wedge-five-questions",
    "moat-design-canvas"
   ],
   "path": "commands/stress-test.md"
  }
 ],
 "lessons": [
  {
   "date": "2026-09-14",
   "headline": "Eleven graduated skills shipped with frontmatter that will not parse",
   "fields": {
    "what": "<p>Copying the 45 Icarus skills into this hub, a strict YAML check found 11 whose <code>description</code> is an unquoted scalar containing <code>&quot;: &quot;</code> — <code>Output: a concierge log ...</code> and similar. Strict parsers reject the whole block, so the skill does not load. All 11 had passed six graduation gates, including trigger precision, which is scored by reading the description rather than by loading the skill.</p>",
    "evidence": "<p>Eleven parse failures, reproduced, each fixed and round-trip verified. <code>[Fact]</code></p>",
    "cost": "<p>Unknown but non-zero: any fellow session where one of these silently failed to load got generic answers instead of the studio method, with no error to notice.</p>",
    "lesson": "<p>A human-graded gate cannot catch a machine-parse failure. Trigger precision was scored on the words in the description, never on whether the file loads.</p>",
    "changes": "<p><code>tools/scripts/validate-skills.mjs</code> fails on any plain scalar containing <code>&quot;: &quot;</code>, and runs before every commit. Gate 1 should mean &quot;loads, then fires&quot; — proposed addition to Rule 7 in <code>GOLDEN_RULES.md</code>, for Ollie to accept or reject. Fix is worth porting upstream to <code>The-Utopia-Studio/skills</code>.</p>"
   },
   "html": "<p><strong>What happened.</strong> Copying the 45 Icarus skills into this hub, a strict YAML check found 11 whose <code>description</code> is an unquoted scalar containing <code>&quot;: &quot;</code> — <code>Output: a concierge log ...</code> and similar. Strict parsers reject the whole block, so the skill does not load. All 11 had passed six graduation gates, including trigger precision, which is scored by reading the description rather than by loading the skill.</p>\n<p><strong>Evidence.</strong> Eleven parse failures, reproduced, each fixed and round-trip verified. <code>[Fact]</code></p>\n<p><strong>Cost.</strong> Unknown but non-zero: any fellow session where one of these silently failed to load got generic answers instead of the studio method, with no error to notice.</p>\n<p><strong>Lesson.</strong> A human-graded gate cannot catch a machine-parse failure. Trigger precision was scored on the words in the description, never on whether the file loads.</p>\n<p><strong>Changes.</strong> <code>tools/scripts/validate-skills.mjs</code> fails on any plain scalar containing <code>&quot;: &quot;</code>, and runs before every commit. Gate 1 should mean &quot;loads, then fires&quot; — proposed addition to Rule 7 in <code>GOLDEN_RULES.md</code>, for Ollie to accept or reject. Fix is worth porting upstream to <code>The-Utopia-Studio/skills</code>.</p>",
   "mentions": []
  },
  {
   "date": "2026-09-14",
   "headline": "Icarus skills were unreachable from a Claude session because of repo ownership",
   "fields": {
    "what": "<p>Setting this hub up, the session could not read <code>The-Utopia-Studio/Icarus</code> work: Claude Code scopes GitHub access to one owner per session, and a cross-owner attach is refused outright. Two attempts and a clone all failed before the public <code>The-Utopia-Studio/skills</code> repo turned out to hold the same 45 skills.</p>",
    "evidence": "<p>Tool refusal, reproduced twice, plus an unauthenticated clone failure. <code>[Fact]</code></p>",
    "cost": "<p>Roughly twenty minutes of a build session, and a plan written against the wrong assumption that the source was unavailable.</p>",
    "lesson": "<p>Anything fellows or agents need to load at session start must sit in a public repo or under the same owner as the working repo. Private cross-org skills are invisible to the tool that is supposed to use them.</p>",
    "changes": "<p>Hub README states the source repo and commit up front. No rule change in <code>GOLDEN_RULES.md</code>.</p>"
   },
   "html": "<p><strong>What happened.</strong> Setting this hub up, the session could not read <code>The-Utopia-Studio/Icarus</code> work: Claude Code scopes GitHub access to one owner per session, and a cross-owner attach is refused outright. Two attempts and a clone all failed before the public <code>The-Utopia-Studio/skills</code> repo turned out to hold the same 45 skills.</p>\n<p><strong>Evidence.</strong> Tool refusal, reproduced twice, plus an unauthenticated clone failure. <code>[Fact]</code></p>\n<p><strong>Cost.</strong> Roughly twenty minutes of a build session, and a plan written against the wrong assumption that the source was unavailable.</p>\n<p><strong>Lesson.</strong> Anything fellows or agents need to load at session start must sit in a public repo or under the same owner as the working repo. Private cross-org skills are invisible to the tool that is supposed to use them.</p>\n<p><strong>Changes.</strong> Hub README states the source repo and commit up front. No rule change in <code>GOLDEN_RULES.md</code>.</p>",
   "mentions": []
  },
  {
   "date": "2026-09-14",
   "headline": "A vendored external repo is still sitting inside the studio skill set",
   "fields": {
    "what": "<p><code>product-manager-skills</code> was added to the marketplace as a whole external repo — README, CHANGELOG, LICENSE, <code>package.json</code>, <code>bin/</code>, <code>docs/</code>, <code>templates/</code> all still present — rather than folded into an existing studio skill. It is the exact failure mode <code>market-skill-ingestion</code> exists to stop, and it shipped anyway.</p>",
    "evidence": "<p>Directory listing of the vendored folder, and the skill's own SKILL.md naming it as the failure case. <code>[Fact]</code></p>",
    "cost": "<p>Context on every session for every fellow who installs the product pack. One useful idea carried under a repo's worth of dead weight.</p>",
    "lesson": "<p>The ingestion rule only holds if someone runs it before merge, not after. An external skill enters folded or it does not enter.</p>",
    "changes": "<p>This hub carries only the 45 Icarus skills plus two written here. Rule 9 in <code>GOLDEN_RULES.md</code> is the gate for anything added later.</p>"
   },
   "html": "<p><strong>What happened.</strong> <code>product-manager-skills</code> was added to the marketplace as a whole external repo — README, CHANGELOG, LICENSE, <code>package.json</code>, <code>bin/</code>, <code>docs/</code>, <code>templates/</code> all still present — rather than folded into an existing studio skill. It is the exact failure mode <code>market-skill-ingestion</code> exists to stop, and it shipped anyway.</p>\n<p><strong>Evidence.</strong> Directory listing of the vendored folder, and the skill's own SKILL.md naming it as the failure case. <code>[Fact]</code></p>\n<p><strong>Cost.</strong> Context on every session for every fellow who installs the product pack. One useful idea carried under a repo's worth of dead weight.</p>\n<p><strong>Lesson.</strong> The ingestion rule only holds if someone runs it before merge, not after. An external skill enters folded or it does not enter.</p>\n<p><strong>Changes.</strong> This hub carries only the 45 Icarus skills plus two written here. Rule 9 in <code>GOLDEN_RULES.md</code> is the gate for anything added later.</p>",
   "mentions": []
  }
 ],
 "rebuilds": {
  "intro": "<p>Icarus-owned drafts of seven agent-ops jobs, inspired by <a href=\"https://github.com/BuilderIO/skills\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills</a> (MIT, Builder.io 2026). Attribution in <a href=\"#/rebuilds\"><code>NOTICE</code></a>. Provenance in <a href=\"#/rebuilds\"><code>SOURCES.md</code></a>.</p>\n<p><strong>This folder is not a skill pack.</strong> Claude plugins load <code>skills/</code> at the plugin root. Nothing here auto-loads, and nothing here has earned a place in the graduated 45. Rule 9 still holds: nothing enters folded or it does not enter.</p>\n<p>These drafts exist so Ollie can rebuild them as his own — fold into an existing Icarus skill, reject, or (only after the harness and six gates) graduate a new one. They do <strong>not</strong> claim graduation. They do <strong>not</strong> ship a <code>tests/</code> harness.</p>",
  "promote": "<p>Copy into <code>skills/&lt;name&gt;/</code> <strong>only</strong> after all of the following:</p>\n<ol><li>Full Icarus harness: <code>template.md</code>, <code>examples/</code>, five golden cases, three adversarial cases, <code>tests/rubric.json</code> (21/25, min 4, five dimensions, four auto-fails), <code>tests/RESULTS.md</code>.</li><li>Six graduation gates, scored by a judge who did not author the skill (Rule 7).</li><li>Fold-or-reject first (Rule 9). Net-new surface has to beat folding into <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, <a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a>, or hub instructions. Every loaded skill costs context for every fellow.</li><li>Add the name to <code>tools/scripts/icarus-skills.json</code> and re-run <code>node tools/scripts/validate-skills.mjs</code>.</li><li>Record provenance in <code>skills/SOURCES.md</code>. These drafts are not that record.</li></ol>\n<p><code>validate-skills.mjs</code> scans <code>skills/</code> only. Passing it after this folder exists does not mean these candidates graduated.</p>",
  "keepers": [
   {
    "name": "agent-watchdog",
    "description": "Fires when asked to watch, babysit, audit, or compare another agent's session, transcript, PR, branch, or run summary — \"check what Claude did\", \"watch this until done\", \"fix the gaps\". Reconstructs the original ask, inspects evidence, reports gaps. Default is audit-only. Do NOT fire for ordinary code review with no other-agent run, or for Icarus product-claim grading (use icarus-critic).",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire when there is another agent's run to audit. Infer mode from the wording: watch-only, audit, audit-and-fix (only if they authorized repair), compare.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Use instead</th></tr></thead><tbody><tr><td>No other-agent session; just review my diff</td><td>Ordinary review. This skill is idle.</td></tr><tr><td>Grade a PRD / pilot / &quot;we're validated&quot;</td><td><code>agents/icarus-critic</code></td></tr><tr><td>Pick among competing <em>plans</em> (not diffs)</td><td><code>rebuilds/plan-arbiter</code></td></tr><tr><td>Design the fleet that spawned them</td><td><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></td></tr></tbody></table></div>\n<p>If authority is unclear, audit-only and say what you would fix. Do not poach the implementer.</p>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Watchdog progress:\n- [ ] Resolve the artefact (session, PR, branch, paste)\n- [ ] Reconstruct the contract from the original ask\n- [ ] Investigate independently before grading their story\n- [ ] Classify each issue against evidence\n- [ ] Report; fix only if authorized and narrow</code></pre>\n<p><strong>Contract.</strong> Original request, later scope changes, explicit constraints, implied pass conditions, and their final claims. Their summary is not the source of truth.</p>\n<p><strong>Independent pass.</strong> Form your own hypotheses about the same problem. Read the files, tests, CI, screenshots. Subagent reports are leads, not facts. Then diff: what they missed, what you missed, where they drifted product silently. Concrete add-ons (file, guard, test) — not &quot;coverage feels thin&quot;.</p>\n<p><strong>Classify.</strong> Gap (asked, missing). Bug (likely fails). Verification miss (may be right; evidence weak). Scope drift. No issue (already handled, with evidence). A claim with no artefact behind it stays <code>[Hypothesis]</code>.</p>\n<p><strong>Live relay.</strong> Interrupt a running agent only for a defect in the files they are touching now, a correction of something you told them, or an answer they are blocked on. Everything else waits for a checkpoint, ranked. Unranked backlogs produce half-finished surfaces.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<pre><code>Status — done / blocked / stale / still running. [Fact] if you saw it.\nRequested — the contract, in their words.\nObserved — what changed, claimed, verified.\nGaps — classified, with files/commands.\nIndependent findings — what your pass caught.\nFixes — omit unless authorized.\nResidual risk — still Empty or [Hypothesis].</code></pre>\n<p><strong>Kill line.</strong> You graded the recap without opening the diff → fail. You &quot;fixed&quot; without authorization → fail. You fabricated CI status → Rule 4.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>Their prose 0.1. A diff you read 0.5. A test/CI log you inspected 0.5+. Behaviour 0.7 only if you re-ran the check. Money 1.0 does not apply unless the run spent paid quota they asked you to watch — and then cite the usage artefact, do not invent a percentage.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: fold session-audit into <code>icarus-critic</code>'s sibling mode or <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>'s critic, not a 46th skill.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : fold session-audit into  icarus-critic 's sibling mode or   workflow-design  's critic, not a 46th skill.",
    "triggerOneLine": "Babysit / audit another agent's session, PR, or branch.",
    "foldOrNew": "<p>Fold into <code>agents/icarus-critic</code> (session work, not product claims) or <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>.</p>",
    "origin": {
     "kept": "<p>Watch or audit another agent's session/PR/branch: reconstruct the request, check claims against diffs/tests/CI, report gaps, optionally narrow-fix when authorized.</p>",
     "changed": "<p>The other agent's recap is scored as opinion until the artefact is inspected. Independent investigation is mandatory (challenge before help). Issue classes sit on the evidence ladder. No Codex-session host protocol, no assumed pager/watch tools — if the artefact cannot be resolved, that is Empty, not a fake poll. Product-claim grading stays with <code>icarus-critic</code>; this draft does not restate the five whole-idea questions.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold into the critic agent as a session-audit mode, or into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>. Net-new <code>skills/</code> surface is the expensive option and has not been evidenced in fellow work.</p>",
     "html": "<h1>Origin — agent-watchdog</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/agent-watchdog\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>agent-watchdog</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Watch or audit another agent's session/PR/branch: reconstruct the request, check claims against diffs/tests/CI, report gaps, optionally narrow-fix when authorized.</p>\n<p><strong>Changed for Icarus.</strong> The other agent's recap is scored as opinion until the artefact is inspected. Independent investigation is mandatory (challenge before help). Issue classes sit on the evidence ladder. No Codex-session host protocol, no assumed pager/watch tools — if the artefact cannot be resolved, that is Empty, not a fake poll. Product-claim grading stays with <code>icarus-critic</code>; this draft does not restate the five whole-idea questions.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold into the critic agent as a session-audit mode, or into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>. Net-new <code>skills/</code> surface is the expensive option and has not been evidenced in fellow work.</p>"
    },
    "path": "rebuilds/agent-watchdog/SKILL.md"
   },
   {
    "name": "efficient-frontier",
    "description": "Fires when a high-cost frontier model is about to do token-heavy gather, scan, code, or test work that cheaper subagents can bound — \"don't burn the expensive model on the repo walk\", \"orchestrate, then delegate\". Frontier keeps planning, tradeoffs, integration, and final review. Do NOT fire for solo work one agent can finish (use agent-design), or for product fleet design (use workflow-design).",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire when exploration, implementation, and verification can be sliced, and the frontier model is the one in this seat.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Use instead</th></tr></thead><tbody><tr><td>One agent, one context, no parallelism</td><td><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>. A fleet here is theatre.</td></tr><tr><td>Fellow product fleet / spawn rules</td><td><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (compose; do not restate)</td></tr><tr><td>Usage window about to die</td><td><code>rebuilds/stay-within-limits</code></td></tr><tr><td>Claude-Fable-only wiring</td><td>Skip. This draft is model-agnostic.</td></tr></tbody></table></div>\n<p>Do not claim universal savings. <code>[Hypothesis]</code> until a session shows cheaper tokens in and the eval still held.</p>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Frontier progress:\n- [ ] Split judgment (keep) from bounded labour (delegate)\n- [ ] Write self-contained handoff packets\n- [ ] No two agents writing the same files\n- [ ] Treat returns as evidence, not verdicts\n- [ ] Integrate and review before claiming done</code></pre>\n<p><strong>Keep on the frontier.</strong> Architecture, prioritisation, ambiguity, risk, synthesis, final review, the validation <em>strategy</em>.</p>\n<p><strong>Delegate.</strong> Repo inventory, docs extraction, search, log reduction, test clustering, mechanical edits, scripted checks. Independent slices only.</p>\n<p><strong>Packets.</strong> Assume the worker has not seen this thread: repo path, objective, in/out of scope, files, return shape, verification commands, stop conditions (code ≠ assumption, check failed twice, scope escape, no concrete evidence).</p>\n<p><strong>Review.</strong> Reopen cited files. Spot-check high-risk diffs. Re-run or sample the check that matters. Disagreement among workers is resolved here, not by forwarding the loudest subagent.</p>\n<p><strong>Do not</strong> delegate the immediate blocker your next step depends on. <strong>Do not</strong> dual-write. <strong>Do not</strong> skip <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>'s fleet-or-solo gate — if there is no parallelism, no role conflict, and no context overflow, stop.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<p>A map: what the frontier decided, what each worker returned (files, commands, residual risk), what you inspected yourself. Uninspected subagent &quot;LGTM&quot; is opinion (0.1) and cannot close the job.</p>\n<p><strong>Kill line.</strong> You claimed cost savings with no usage artefact → fabrication or untagged hypothesis, fail. You forwarded a subagent verdict without opening the diff on a high-blast path → fail.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>Worker prose 0.1. Their diff you opened 0.5. A check you re-ran 0.7. &quot;This pattern always saves money&quot; is opinion. Tag every savings, latency, or quality claim.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> Step 5 (surface + cost of the step) rather than a new loaded skill. The Fable-specific sibling is skipped on purpose.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : fold into   workflow-design   Step 5 (surface + cost of the step) rather than a new loaded skill. The Fable-specific sibling is skipped on purpose.",
    "triggerOneLine": "Frontier model as judge; cheaper agents for gather / code / test.",
    "foldOrNew": "<p>Fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> surface + spawn rules. Savings claims are <code>[Hypothesis]</code> until measured.</p>",
    "origin": {
     "kept": "<p>Preserve the expensive model for planning, tradeoffs, integration, and final review; send bounded research, coding, and testing to cheaper subagents with compact returns.</p>",
     "changed": "<p>Composed with <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (fleet-or-solo, spawn triggers, critic independence) and <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (blast radius) instead of restating a parallel orchestration theory. Savings are <code>[Hypothesis]</code> until measured. No &quot;default framing&quot; slogan, no Fable-specific sibling (skipped as <code>efficient-fable</code>). Subagent output is evidence, not a verdict — same discipline as <code>icarus-critic</code>.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> surface assignment and spawn rules. Graduate only if fellow sessions show frontier models burning context on gather work that a cheaper worker already does.</p>",
     "html": "<h1>Origin — efficient-frontier</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/efficient-frontier\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>efficient-frontier</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Preserve the expensive model for planning, tradeoffs, integration, and final review; send bounded research, coding, and testing to cheaper subagents with compact returns.</p>\n<p><strong>Changed for Icarus.</strong> Composed with <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> (fleet-or-solo, spawn triggers, critic independence) and <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (blast radius) instead of restating a parallel orchestration theory. Savings are <code>[Hypothesis]</code> until measured. No &quot;default framing&quot; slogan, no Fable-specific sibling (skipped as <code>efficient-fable</code>). Subagent output is evidence, not a verdict — same discipline as <code>icarus-critic</code>.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> surface assignment and spawn rules. Graduate only if fellow sessions show frontier models burning context on gather work that a cheaper worker already does.</p>"
    },
    "path": "rebuilds/efficient-frontier/SKILL.md"
   },
   {
    "name": "plan-arbiter",
    "description": "Fires when two or more agent plans must be compared, merged, or judged — \"pick between Codex and Claude's plans\", \"merge these\", \"which plan should we execute\". Returns one executable handoff with rejected alternatives. Do NOT fire for a single plan, for implementing before a decision, or for speccing a fleet (use workflow-design).",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire when the input holds ≥2 proposed plans (paste, files, transcripts, PRs).</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Use instead</th></tr></thead><tbody><tr><td>One plan, no rival</td><td>Challenge that plan or implement it. No arbitration.</td></tr><tr><td>&quot;Set up the fleet / who spawns whom&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></td></tr><tr><td>&quot;Spec the one agent that will execute&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a></td></tr><tr><td>&quot;Watch the other agent and grade the diff&quot;</td><td><code>rebuilds/agent-watchdog</code></td></tr><tr><td>Bare &quot;which AI is better&quot; with no plans</td><td>Ask for the artefacts. Empty is not a score.</td></tr></tbody></table></div>\n<p>Planning stays read-only unless they already asked you to implement after the pick.</p>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Plan-arbiter progress:\n- [ ] Collect source artefacts (prefer originals over summaries)\n- [ ] Normalize each plan into comparable claims\n- [ ] Place load-bearing claims on the ladder\n- [ ] Decide: adopt / hybrid / revise-first\n- [ ] Handoff: sequence, verification, rejected, executor</code></pre>\n<p><strong>Normalize.</strong> For each plan, extract: objective, scope, assumptions (tagged), files/APIs/data touched, sequence, how they would know it worked, rollback, and what they left Empty. Verbosity is not quality. A plan that does not name files or a pass condition is opinion (0.1).</p>\n<p><strong>Cross-review.</strong> Check each claim against the repo and the original ask. Name hidden dependencies, missing tests, irreversible steps, and scope that was not requested. Complementary strengths are allowed: architecture from A, migration from B — only if each borrowed piece has a named reason. Unresolved Empty that both plans share is not a tie-break; it is a revise-first.</p>\n<p><strong>Decide.</strong> Adopt one mostly as written; hybrid only with a piece-by-piece ledger; or send both back. Tie-break, in order: fit to the ask; grounding in real files/tests; smaller first slice that does not block the intended later shape; verification and rollback; cheaper executor once quality is comparable. Do not pick the longer plan. Do not average two <code>[Hypothesis]</code> stacks.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<pre><code>Decision — Adopt A / Hybrid / Revise-first.\nWhy — the load-bearing claim and its rung.\nExecution — ordered steps, files.\nBorrowed — piece, source plan, reason.\nRejected — idea, reason (not &quot;less nice&quot;).\nVerification — the smallest checks that could falsify it.\nExecutor — which agent/model, why. [Hypothesis] unless they named one.</code></pre>\n<p><strong>Kill line.</strong> A mushy hybrid with no rejection list fails. Scoring a plan above its best rung fails. Inventing a third plan and calling it a merge when neither source is in the input fails Rule 4.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>The ladder scores <strong>plan claims</strong>, not author prestige. &quot;Claude wrote it&quot; is opinion. A plan that cites an existing test and a file path is artefact (0.5). A plan that has already been run once in this repo is behaviour (0.7) if you can see the log. Tag every empirical claim. Empty stays Empty.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>'s critic spawn, rather than a new loaded skill.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : fold into   workflow-design  's critic spawn, rather than a new loaded skill.",
    "triggerOneLine": "Two or more agent plans; pick one executable direction.",
    "foldOrNew": "<p>Fold into <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> critic, or new only if multi-plan loops show up in fellow work.</p>",
    "origin": {
     "kept": "<p>Normalize competing agent plans, cross-review them against the real task, then adopt / hybrid / revise — with one handoff, rejected alternatives, and an executor recommendation.</p>",
     "changed": "<p>Winner is the plan whose load-bearing claims sit highest on the evidence ladder, not the one with more sections. Hybrids must name each borrowed piece; averaging two weak plans is an auto-fail. Empty shared by both plans forces revise-first. No Builder visual-plan links, no Codex/Claude brand default. Hands off to <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> / <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> instead of restating fleet design.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: this is the critic node in <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>. Graduate as net-new only if fellow work shows repeated multi-agent planning loops that the critic table cannot hold.</p>",
     "html": "<h1>Origin — plan-arbiter</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/plan-arbiter\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>plan-arbiter</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Normalize competing agent plans, cross-review them against the real task, then adopt / hybrid / revise — with one handoff, rejected alternatives, and an executor recommendation.</p>\n<p><strong>Changed for Icarus.</strong> Winner is the plan whose load-bearing claims sit highest on the evidence ladder, not the one with more sections. Hybrids must name each borrowed piece; averaging two weak plans is an auto-fail. Empty shared by both plans forces revise-first. No Builder visual-plan links, no Codex/Claude brand default. Hands off to <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> / <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> instead of restating fleet design.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: this is the critic node in <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>. Graduate as net-new only if fellow work shows repeated multi-agent planning loops that the critic table cannot hold.</p>"
    },
    "path": "rebuilds/plan-arbiter/SKILL.md"
   },
   {
    "name": "plow-ahead",
    "description": "Fires when the user has already said go — \"plow ahead\", \"keep going until done\", \"use your best judgment\", \"don't stop for questions unless blocked\", \"finish while I'm away\". Converts ordinary ambiguity into tagged assumptions, picks the reversible choice, validates, and recaps. Do NOT fire when they asked to compare options, wait for approval, or brainstorm. Not a product stage skill.",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire only on an explicit autonomy request. Silence is not permission.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Do this instead</th></tr></thead><tbody><tr><td>&quot;Which of these two designs should we ship?&quot;</td><td>Stop. They asked to compare.</td></tr><tr><td>&quot;Wait for me before you implement.&quot;</td><td>Stop. Approval is reserved.</td></tr><tr><td>Competing plans from two agents</td><td><code>rebuilds/plan-arbiter</code></td></tr><tr><td>Auditing someone else's session</td><td><code>rebuilds/agent-watchdog</code></td></tr><tr><td>Speccing one production agent</td><td><a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> (graduated)</td></tr></tbody></table></div>\n<p>If the ask is a one-liner with no goal, do not invent scope. Ask the one classifying question — what artefact is done? — then, if they already said go on a named artefact, proceed.</p>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Plow-ahead progress:\n- [ ] Restate the goal as one artefact + one pass condition\n- [ ] Convert each routine fork into a tagged assumption\n- [ ] Act on the lowest-blast-radius reversible choice\n- [ ] Validate with the smallest check that could fail\n- [ ] Recap so a reviewer can audit without the thread</code></pre>\n<p><strong>Routine vs blocker.</strong> A routine fork is two options the repo, tests, or local docs can decide. A blocker is Empty that you cannot fill without fabricating (Rule 4): missing credentials, paid accounts, irreversible git/history, a decision they reserved, a safety/privacy risk you cannot shrink locally, a validation failure that has already been investigated and the next patch would be speculative.</p>\n<p><strong>Choice rule.</strong> Reuse a nearby pattern before inventing one. Prefer local, reversible, low blast radius (read the <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> tool table; do not restate it). If two options are close, pick the one a reviewer can see later. Log the choice as <code>[Assumption]</code> plus the reason. Do not write a new repo file for the log unless the task needs one.</p>\n<p><strong>Empty.</strong> If a needed fact is not in the repo, the issue, or fetched docs, write <code>Empty</code> and either fetch (<code>rebuilds/read-the-damn-docs</code>) or stop. Do not fill Empty with a confident guess and call it judgment.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<p>The turn ends with this recap, every claim tagged:</p>\n<pre><code>Goal — artefact + pass condition.\nDecisions — each assumption, rung, why.\nChanges — files / behaviour, not vibes.\nValidation — commands run and result. Unrun = Empty.\nResidual risk — what is still [Hypothesis].</code></pre>\n<p>A recap that hides skipped tests fails. &quot;Should work&quot; is opinion (0.1).</p>\n<p><strong>Kill line.</strong> You asked a preference question after they said go, and both options were reversible → you failed this skill. You mutated production, force- pushed, or spent money without a stop → you failed. You fabricated a number or a &quot;docs say&quot; claim you did not fetch → Rule 4, auto-fail.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>Money 1.0 · behaviour 0.7 · artefact 0.5 · commitment 0.3 · opinion 0.1. Here the ladder scores <strong>decisions made while they were away</strong>. A recap citing a test log is artefact (0.5). A recap citing &quot;I thought this was fine&quot; is opinion and does not close the job. Tag every empirical claim.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. No golden set. <code>[Hypothesis]</code> that this belongs in hub instructions or folded into <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a>, not as net-new <code>skills/</code> surface.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated. No golden set.  [Hypothesis]  that this belongs in hub instructions or folded into   agent-design  , not as net-new  skills/  surface.",
    "triggerOneLine": "User said go; stop asking which reasonable option they prefer.",
    "foldOrNew": "<p>Fold into <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> autonomy + <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a> stop conditions, or reject as session convention.</p>",
    "origin": {
     "kept": "<p>Explicit go → convert ordinary questions into assumptions, proceed, stop only for true blockers, recap decisions so the work is auditable without the thread.</p>",
     "changed": "<p>Assumptions are tagged <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Empty is named, not filled. Stop conditions are Rule 4 (never fabricate) plus high-blast-radius writes from <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> / <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, not a host-specific list. Recap claims sit on the evidence ladder. No Builder installer, no &quot;always spawn subagents&quot; default — parallelism is <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>'s fleet-or-solo gate.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold the autonomy contract into <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> and the stop conditions into <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, or keep this as session convention in hub instructions. Do not graduate it as a 46th skill until fellow sessions show clarification theater costing real time, logged.</p>",
     "html": "<h1>Origin — plow-ahead</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/plow-ahead\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>plow-ahead</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Explicit go → convert ordinary questions into assumptions, proceed, stop only for true blockers, recap decisions so the work is auditable without the thread.</p>\n<p><strong>Changed for Icarus.</strong> Assumptions are tagged <code>[Fact]</code> / <code>[Assumption]</code> / <code>[Hypothesis]</code>. Empty is named, not filled. Stop conditions are Rule 4 (never fabricate) plus high-blast-radius writes from <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> / <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, not a host-specific list. Recap claims sit on the evidence ladder. No Builder installer, no &quot;always spawn subagents&quot; default — parallelism is <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a>'s fleet-or-solo gate.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold the autonomy contract into <a class=\"skill-ref\" href=\"#/skill/agent-design\"><code>agent-design</code></a> and the stop conditions into <a class=\"skill-ref\" href=\"#/skill/guardrail-design\"><code>guardrail-design</code></a>, or keep this as session convention in hub instructions. Do not graduate it as a 46th skill until fellow sessions show clarification theater costing real time, logged.</p>"
    },
    "path": "rebuilds/plow-ahead/SKILL.md"
   },
   {
    "name": "quick-recap",
    "description": "Fires when a unit of agent work is ending and the completion state must be obvious — \"give me a status\", \"red yellow green\", \"are we done\". Ends the response with one coloured completeness claim. Do NOT fire mid-task, as a substitute for a recap of decisions (use plow-ahead), or as a product verdict (use so-what-stress-test / icarus-critic).",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire at the end of a completed unit of work, or when they ask for the convention itself.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Use instead</th></tr></thead><tbody><tr><td>Decision log of assumptions made while they were away</td><td><code>rebuilds/plow-ahead</code> recap</td></tr><tr><td>Audit of another agent's session</td><td><code>rebuilds/agent-watchdog</code></td></tr><tr><td>Pass / Redesign / Kill on a business idea</td><td><a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a></td></tr><tr><td>Logging a studio lesson</td><td><a class=\"skill-ref\" href=\"#/skill/lessons\"><code>lessons</code></a></td></tr></tbody></table></div>\n<p>Do not install <code>AGENTS.md</code> / <code>CLAUDE.md</code> blocks unless they asked. This draft is a convention, not a host installer.</p>"
     },
     {
      "heading": "Method",
      "html": "<p>One line, last thing in the response, no trailing divider:</p>\n<ul><li><strong>Green</strong> — the requested artefact exists and the named check ran (or the check is N/A because the ask was read-only and you cite what you read).</li><li><strong>Yellow</strong> — the artefact moved, but one <strong>non-routine</strong> follow-up remains. Name it. &quot;Write tests sometime&quot; is not specific enough; &quot;set <code>X</code> before the webhook test&quot; is.</li><li><strong>Red</strong> — blocked on them. Name the exact input. Empty stays Empty. Do not guess a credential or a product call.</li></ul>\n<p>Keep the sentence under 100 characters. Colour from <strong>their</strong> point of view: finished, pending one named step, or stuck.</p>\n<p>Routine leftover (a commit they did not ask for, a nit) is not yellow. Yellow is a step they must take or a blocker that is not yet red because work partially landed.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<pre><code>🟢 &lt;what finished&gt;\n🟡 &lt;what landed&gt;, &lt;the one remaining step&gt;\n🔴 Need &lt;exact input&gt; to continue</code></pre>\n<p>Green without a named artefact fails. Yellow with a shopping list fails — split or pick the load-bearing leftover. Red that still offers a fabricated workaround fails Rule 4.</p>\n<p>Tag the claim silently: green requires at least artefact (0.5). If you did not run validation, you do not get to imply you did; yellow or name the skip.</p>"
     },
     {
      "heading": "Kill line",
      "html": "<p>A green status over skipped tests, unresolved Empty, or a still-open blocker is flattery of your own work — auto-fail. A red that invents the missing secret &quot;for now&quot; is fabrication.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>The colour is not decoration. It is the headline rung of &quot;this unit is done&quot;. Opinion (&quot;should be fine&quot;) cannot be green. A diff you produced is artefact (0.5) and can support green for a write they asked for <strong>if</strong> you also say what you did not verify. Behaviour (0.7) is a check you ran.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: this belongs in hub instructions or a <code>/command</code>, not a loaded skill. Every skill costs context for every fellow; a one-line convention does not clear that bar on its own.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : this belongs in hub instructions or a  /command , not a loaded skill. Every skill costs context for every fellow; a one-line convention does not clear that bar on its own.",
    "triggerOneLine": "End the turn with a red / yellow / green completeness claim.",
    "foldOrNew": "<p>Fold into hub <code>CLAUDE.md</code> / a command. Loading this as a skill for every fellow is likely too dear.</p>",
    "origin": {
     "kept": "<p>End completed work with a single green / yellow / red status line so done vs pending vs blocked is obvious.</p>",
     "changed": "<p>The colour is a completeness claim on the evidence ladder, not a badge. Green without artefact + honesty about validation is flattery. No managed <code>AGENTS.md</code> installer — Rule 9: do not vendor host instruction blocks into Icarus. Hands off to plow-ahead for decision recaps and to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> for product verdicts.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold into hub <code>CLAUDE.md</code> or a slash command. Loading it as a graduated skill is likely a context tax without a fellow-work evidence trail.</p>",
     "html": "<h1>Origin — quick-recap</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/quick-recap\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>quick-recap</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> End completed work with a single green / yellow / red status line so done vs pending vs blocked is obvious.</p>\n<p><strong>Changed for Icarus.</strong> The colour is a completeness claim on the evidence ladder, not a badge. Green without artefact + honesty about validation is flattery. No managed <code>AGENTS.md</code> installer — Rule 9: do not vendor host instruction blocks into Icarus. Hands off to plow-ahead for decision recaps and to <a class=\"skill-ref\" href=\"#/skill/so-what-stress-test\"><code>so-what-stress-test</code></a> for product verdicts.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold into hub <code>CLAUDE.md</code> or a slash command. Loading it as a graduated skill is likely a context tax without a fellow-work evidence trail.</p>"
    },
    "path": "rebuilds/quick-recap/SKILL.md"
   },
   {
    "name": "read-the-damn-docs",
    "description": "Fires before integrating, upgrading, debugging, or answering current behaviour of a third-party API, library, CLI, cloud, or model SDK — \"add Stripe\", \"what's the current AI SDK import\", \"this Next cache is wrong\". Fetch official docs for the installed or target version before coding from memory. Do NOT fire for typo-level edits or for Icarus method questions (use icarus-golden-rules).",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire when the work depends on an external contract, a version-sensitive framework, auth/billing/PII/migrations/deploys, an error that smells like drift, or they asked for current / official / latest.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Do this instead</th></tr></thead><tbody><tr><td>Rename a local variable / fix a typo</td><td>Proceed. No vendor contract.</td></tr><tr><td>&quot;What does Icarus score as money?&quot;</td><td><a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a></td></tr><tr><td>Internal helper already used next door</td><td>Read the local call site. That is the contract.</td></tr><tr><td>Competing implementation plans</td><td><code>rebuilds/plan-arbiter</code> after the docs pass</td></tr></tbody></table></div>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Docs progress:\n- [ ] Name the exact surface (package, version, endpoint, flag)\n- [ ] Prefer local repo docs/ADRs/schemas for *this* codebase\n- [ ] Fetch official docs for the version in play (not &quot;the one I remember&quot;)\n- [ ] Extract the few facts the task needs; tag them\n- [ ] Implement or answer from those facts\n- [ ] Smallest check that could falsify the reading</code></pre>\n<p><strong>Authority order.</strong> Local contract first (README, ADR, generated types, tests). Then official product docs, API reference, migration guide, changelog for that major. Then source/types when docs are incomplete. Community posts are symptoms, not the contract.</p>\n<p><strong>Version.</strong> Before adding a dependency, read the registry version you will actually install. Writing imports for a major you did not check is fabrication-by-habit.</p>\n<p><strong>Empty.</strong> If network, auth, or missing files block the fetch, say Empty before relying on memory. Narrow the uncertainty. Do not present the result as confirmed-current.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<p>Name the pages or files consulted when they affected the answer. A patch that &quot;usually&quot; works, with no citation, fails this skill even if CI is green by luck.</p>\n<p><strong>Kill line.</strong> &quot;From memory, Stripe webhooks work like this&quot; on a security-sensitive flow, without a fetch → fail. Citing a number, limit, or flag that was not in the fetched page → Rule 4.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>Memory 0.1. Official page you opened 0.5. A check you ran against the live SDK 0.7. Do not upgrade a blog snippet. Tag every empirical claim about limits, defaults, breaking changes, scopes, and pricing as <code>[Fact]</code> only when the page is in this turn's context.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: this is Rule 4 applied to vendor APIs and should fold into <a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a> / hub instructions, not occupy a skill slot on every fellow session.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : this is Rule 4 applied to vendor APIs and should fold into   icarus-golden-rules   / hub instructions, not occupy a skill slot on every fellow session.",
    "triggerOneLine": "Integrating or debugging a vendor API / library / CLI.",
    "foldOrNew": "<p>Fold into Rule 4 (<a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a>). Net-new surface is the weak default.</p>",
    "origin": {
     "kept": "<p>Before integrating or debugging version-sensitive vendor surfaces, search and read official docs instead of guessing from model memory.</p>",
     "changed": "<p>Mapped onto Rule 4 (never fabricate) and the evidence ladder: memory is opinion, a fetched page is artefact, a run against the SDK is behaviour. Empty when the fetch fails. No Codex-specific wording, no laundry list of Builder-favoured frameworks as a closed canon — the trigger is &quot;external contract&quot;, not a brand checklist. Local repo docs win for internal behaviour.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold into <a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a> as a docs-before-code clause. A dedicated loaded skill is the weak default under Rule 9.</p>",
     "html": "<h1>Origin — read-the-damn-docs</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/read-the-damn-docs\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>read-the-damn-docs</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Before integrating or debugging version-sensitive vendor surfaces, search and read official docs instead of guessing from model memory.</p>\n<p><strong>Changed for Icarus.</strong> Mapped onto Rule 4 (never fabricate) and the evidence ladder: memory is opinion, a fetched page is artefact, a run against the SDK is behaviour. Empty when the fetch fails. No Codex-specific wording, no laundry list of Builder-favoured frameworks as a closed canon — the trigger is &quot;external contract&quot;, not a brand checklist. Local repo docs win for internal behaviour.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold into <a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a> as a docs-before-code clause. A dedicated loaded skill is the weak default under Rule 9.</p>"
    },
    "path": "rebuilds/read-the-damn-docs/SKILL.md"
   },
   {
    "name": "stay-within-limits",
    "description": "Fires on long-running or parallel agent waves that can exhaust a host usage window — \"don't blow the cap\", \"check usage between waves\", \"pause if we're near the limit\". Check real usage before launching the next wave; pause with a self-contained resume. Do NOT fire for a single short turn, and do not invent a percentage when the host has no usage signal.",
    "sections": [
     {
      "heading": "Trigger / When NOT",
      "html": "<p>Fire when the session will run multiple waves, many subagents, or a long unattended loop.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Not this</th><th>Do this instead</th></tr></thead><tbody><tr><td>One bounded turn</td><td>Idle. No wave to throttle.</td></tr><tr><td>Orchestrating who does research vs judgment</td><td><code>rebuilds/efficient-frontier</code> (compose)</td></tr><tr><td>Fleet design for a product workflow</td><td><a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a></td></tr><tr><td>They asked you to plow through blockers</td><td><code>rebuilds/plow-ahead</code> still stops on spend/credentials</td></tr></tbody></table></div>"
     },
     {
      "heading": "Method",
      "html": "<pre><code>Limits progress:\n- [ ] Name the host signal you will actually read (or Empty)\n- [ ] Bound the next wave (default: few parallel workers, not a swarm)\n- [ ] Let in-flight work finish; do not kill it to &quot;save&quot; budget\n- [ ] Re-read usage; pause new launches if the window is near-exhausted\n- [ ] Leave a self-contained resume: plan, checks, next packets</code></pre>\n<p><strong>Caps are host facts, not folklore.</strong> Claude 5-hour/weekly windows, a 95% stop line, dollar caution bands, and specific CLIs are <code>[Assumption]</code> unless this session's host docs or a usage tool output are in context. Do not copy another catalog's numbers into Icarus as <code>[Fact]</code>.</p>\n<p><strong>Empty.</strong> No usage tool, no dashboard, no stated budget → say Empty. Throttle conservatively (serialise waves, smaller batches) and tell them you cannot see the cap. Do not emit a fake &quot;42% used&quot;.</p>\n<p><strong>Pause.</strong> When the observed window is near-exhausted, stop launching. Say which window, what you observed (cite the artefact), what remains, and the next check. Resume prompts must include the remaining plan, the re-check rule, and the next wave's handoff packets — conversation momentum is not a store.</p>\n<p><strong>Wake machinery.</strong> Use whatever the host actually offers (scheduler, cron, a later turn). Do not invent a wakeup API. Wall-clock guesses (&quot;enough time passed&quot;) are weaker than a new window identifier from the tool.</p>"
     },
     {
      "heading": "Done bar",
      "html": "<p>Either: waves launched with a cited usage read between them, or a pause handoff that another turn can execute cold. A swarm that &quot;probably&quot; stayed under cap is opinion (0.1).</p>\n<p><strong>Kill line.</strong> Fabricated a usage percentage or a dollar threshold not in this session's input → Rule 4. Ignored a visible cap and started another wave → this skill failed.</p>"
     },
     {
      "heading": "Evidence standard",
      "html": "<p>A usage JSON / dashboard screenshot is artefact (0.5). A completed wave with that artefact before and after is behaviour (0.7) for the &quot;we stayed inside&quot; claim. &quot;Max users should stop at $500&quot; without their config is opinion.</p>"
     },
     {
      "heading": "Status",
      "html": "<p>Candidate draft. Not graduated. <code>[Hypothesis]</code>: fold into <code>efficient-frontier</code> or host instructions. Host-specific CLIs do not belong in the graduated PM pack.</p>"
     }
    ],
    "statusText": "Candidate draft. Not graduated.  [Hypothesis] : fold into  efficient-frontier  or host instructions. Host-specific CLIs do not belong in the graduated PM pack.",
    "triggerOneLine": "Long or parallel waves that can exhaust a usage window.",
    "foldOrNew": "<p>Fold into <code>efficient-frontier</code> or host instructions. Host-specific caps are <code>[Assumption]</code>.</p>",
    "origin": {
     "kept": "<p>Before and between substantial parallel waves, check usage; pause near the cap; resume with a self-contained plan so the window is not exhausted mid-task.</p>",
     "changed": "<p>Every numeric cap (95%, 5-hour blocks, dollar bands, named CLIs) is <code>[Assumption]</code> unless this host produced the artefact. Empty when there is no usage signal — do not fabricate a percentage. Compose with <code>efficient-frontier</code> and <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> rather than restating orchestration. Rule 4 over folklore.</p>",
     "foldOrNew": "<p><code>[Hypothesis]</code> only: fold into <code>efficient-frontier</code> or <code>CLAUDE.md</code>. A graduated Icarus skill that encodes Claude Max folklore would fail the evidence standard on any other host.</p>",
     "html": "<h1>Origin — stay-within-limits</h1>\n<p>Inspired by <a href=\"https://github.com/BuilderIO/skills/tree/main/skills/stay-within-limits\" target=\"_blank\" rel=\"noopener noreferrer\">BuilderIO/skills <code>stay-within-limits</code></a> (MIT, Builder.io 2026). See <a href=\"#/rebuilds\"><code>../NOTICE</code></a>.</p>\n<p><strong>Kept as idea.</strong> Before and between substantial parallel waves, check usage; pause near the cap; resume with a self-contained plan so the window is not exhausted mid-task.</p>\n<p><strong>Changed for Icarus.</strong> Every numeric cap (95%, 5-hour blocks, dollar bands, named CLIs) is <code>[Assumption]</code> unless this host produced the artefact. Empty when there is no usage signal — do not fabricate a percentage. Compose with <code>efficient-frontier</code> and <a class=\"skill-ref\" href=\"#/skill/workflow-design\"><code>workflow-design</code></a> rather than restating orchestration. Rule 4 over folklore.</p>\n<p><strong>Fold or new.</strong> <code>[Hypothesis]</code> only: fold into <code>efficient-frontier</code> or <code>CLAUDE.md</code>. A graduated Icarus skill that encodes Claude Max folklore would fail the evidence standard on any other host.</p>"
    },
    "path": "rebuilds/stay-within-limits/SKILL.md"
   }
  ],
  "skips": [
   {
    "name": "an",
    "why": "Opens Agent-Native apps on Builder Dispatch / host MCP. No Utopia equivalent."
   },
   {
    "name": "webmcp",
    "why": "Host built-in browser + window.agentNativeWebMcp. Host-locked."
   },
   {
    "name": "rewind",
    "why": "Clips Desktop + local clips-screen-memory MCP. macOS capture product."
   },
   {
    "name": "visual-edit",
    "why": "Builder Design iframe + local bridge. Product-locked."
   },
   {
    "name": "turn-into-app",
    "why": "Compiles a thread into an Agent-Native app. Builder product."
   },
   {
    "name": "visual-plan",
    "why": "MDX visual plans in the Agent-Native plans app. Product-locked."
   },
   {
    "name": "visual-recap",
    "why": "MDX visual diffs in the same app / GitHub Action. Product-locked."
   },
   {
    "name": "efficient-fable",
    "why": "Same orchestration as efficient-frontier, pinned to Claude Fable. Rebuild the generic form only."
   }
  ]
 },
 "contribute": {
  "earnsPlace": "<p>Every Icarus skill ships an eval harness: five golden cases from real fellow work (Azraq, Mentix, Barrier Intelligence, Durian), three adversarial cases, a rubric, and a results log. It graduates only after passing six gates, scored by a judge agent separate from its author — trigger precision, golden set ≥21/25, adversarial survival, head-to-head against the skill it supersedes, anti-generic, and five real uses.</p>\n<p>Adding anything new means clearing the same bar. And nothing gets vendored wholesale: an external skill is folded into an existing one or rejected, because every skill Claude can load costs context on every session for every fellow.</p>\n<pre data-lang=\"bash\"><code>node tools/scripts/validate-skills.mjs</code></pre>",
  "gatesHtml": "<p>Scored by a judge agent separate from the author.</p>\n<ol><li><strong>Trigger precision</strong> — fires on 5/5 wanted phrasings, 0/3 siblings.</li><li><strong>Golden set</strong> — ≥21/25 on every case, no dimension below 4.</li><li><strong>Adversarial</strong> — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.</li><li><strong>Head-to-head</strong> — a superseding skill must beat the skill it replaces on the same inputs.</li><li><strong>Anti-generic</strong> — its output could not have come from a generic PM prompt.</li><li><strong>Used 5+ times in real fellow work</strong> — completes in use. Log each miss as a gotcha and re-run the set.</li></ol>\n<p>Golden cases come from real fellow work: Azraq, Mentix, Barrier Intelligence, Durian.</p>",
  "foldHtml": "<p>&quot;Every market skill is, by default, folded into an existing studio skill or rejected. It is never added as new surface, and never vendored wholesale.&quot;</p>\n<p>Every skill Claude can load costs context on every session, for every fellow. Net-new surface has to earn that recurring cost, not just be good in isolation. Adoption and behaviour outrank author opinion: install counts and real usage are evidence, a README's self-description is not.</p>",
  "stayInScope": "<p>Each skill names its siblings and hands off rather than poaching. Firing outside trigger scope is an auto-fail. Generic PM boilerplate is an auto-fail — if a generic prompt could have produced the output, the skill did no work.</p>",
  "lessonTemplate": "<h1>Lesson entry template</h1>\n<p>Copy this block to the top of <code>LOG.md</code>. Newest first. Keep it to ten lines.</p>\n<pre data-lang=\"markdown\"><code>### YYYY-MM-DD — &lt;one line, names the thing that happened&gt;\n\n**What happened.** Two sentences. Fellow or system named. In their words, not studio jargon.\n\n**Evidence.** What was actually observed, with its ladder rung. `[Fact]` / `[Assumption]` / `[Hypothesis]`.\n\n**Cost.** What was lost — weeks, a pilot, credibility, a wrong build. A number if there is one.\n\n**Lesson.** The decision rule that would have changed the outcome. One sentence.\n\n**Changes.** Which rule in `GOLDEN_RULES.md`, which skill, or which default now differs. Or: none yet, and why.</code></pre>\n<p>Three tests an entry must pass — specific, costly, actionable. Detail in <a href=\"#/skill/lessons\"><code>skills/lessons/SKILL.md</code></a>.</p>",
  "personaFormat": "<h1>Agents</h1>\n<p>Two formats live here, on purpose.</p>\n<h2>1. Claude Code subagents — <code>agents/*.md</code></h2>\n<p>Single-file agents the plugin loads directly. Frontmatter takes <code>name</code>, <code>description</code>, and optionally <code>tools</code> and <code>model</code>. The body is the system prompt.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Agent</th><th>Use when</th></tr></thead><tbody><tr><td><a href=\"#/agents\"><code>icarus-critic</code></a></td><td>A claim, PRD, deck, or pilot plan needs grading against the golden rules before it goes anywhere.</td></tr></tbody></table></div>\n<p>Keep these composing Icarus skills rather than restating their method. A subagent that reimplements <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> will drift from it.</p>\n<h2>2. Persona packs — <code>agents/personas/&lt;name&gt;/</code></h2>\n<p>Named, persistent agents with a voice and durable memory. Format adapted from the studio marketplace (<code>The-Utopia-Studio/skills</code>, <code>agents/</code>), which runs Ada (technical DD), Khalil (decks), and Salim (fellow coach).</p>\n<p>Four canonical files per persona:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>File</th><th>Purpose</th></tr></thead><tbody><tr><td><code>SOUL.md</code></td><td>Personality, voice, signature phrases, anti-patterns. Non-negotiable.</td></tr><tr><td><code>AGENTS.md</code></td><td>Operating manual — triggers, permissions, skills composed, escalation.</td></tr><tr><td><code>MEMORY.md</code></td><td>Persistent cross-session knowledge. Until something is here, the agent does not know it.</td></tr><tr><td><code>BOOTSTRAP.md</code></td><td>First-boot orientation. Archived after setup.</td></tr><tr><td><code>references/</code></td><td>One markdown file per major workflow.</td></tr></tbody></table></div>\n<p>Why a persona instead of a bare skill: skills make the user remember which one applies. &quot;Run DD as Ada&quot; is a smaller cognitive ask than &quot;which skill do I use for technical due diligence&quot;. Personas also hold voice, which otherwise drifts to generic across sessions.</p>\n<p><code>personas/</code> is empty by design — the Icarus personas are a later task. Build one with the <code>agent-persona-builder</code> skill from <code>utopia-founder-productivity</code>.</p>",
  "toolsHtml": "<div class=\"table-wrap\"><table><thead><tr><th>Tool</th><th>What it does</th></tr></thead><tbody><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/scripts/validate-skills.mjs\" target=\"_blank\" rel=\"noopener noreferrer\"><code>scripts/validate-skills.mjs</code></a></td><td>Checks every skill's frontmatter, that folder names match, that all 45 Icarus skills still carry a full eval harness, and that no rubric has drifted from 21/25 with the five dimensions and four auto-fails. Run it before every commit: <code>node tools/scripts/validate-skills.mjs</code>.</td></tr><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/scripts/icarus-skills.json\" target=\"_blank\" rel=\"noopener noreferrer\"><code>scripts/icarus-skills.json</code></a></td><td>The manifest of the 45. Adding a skill here means the validator will demand its eval harness.</td></tr><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/scripts/build-site.mjs\" target=\"_blank\" rel=\"noopener noreferrer\"><code>scripts/build-site.mjs</code></a></td><td>Reads the whole repo and writes <code>site/data</code> — the catalogue plus one file per skill. <code>--check</code> fails when what is committed no longer matches the markdown. Run it before every commit, with the validator.</td></tr><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/scripts/lib/\" target=\"_blank\" rel=\"noopener noreferrer\"><code>scripts/lib/</code></a></td><td>Shared by both: <code>frontmatter.mjs</code> (the frontmatter reader and the plain-scalar check), <code>markdown.mjs</code> (markdown → HTML, section splitting, table parsing), <code>stages.mjs</code> (stage membership, read from <code>skills/ICARUS.md</code>). <code>node --test tools/scripts/lib/markdown.test.mjs</code> runs the renderer over every markdown file in the repo.</td></tr><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/scripts/smoke-site.mjs\" target=\"_blank\" rel=\"noopener noreferrer\"><code>scripts/smoke-site.mjs</code></a></td><td>Opens the built site in Chromium, visits every route, checks every internal link resolves, and lints the page against the brand rules at 1440px and 400px. Needs Playwright; skips cleanly without it.</td></tr><tr><td><a href=\"https://github.com/OllieGY/icarus/blob/main/tools/hooks/log-skill-usage.sh\" target=\"_blank\" rel=\"noopener noreferrer\"><code>hooks/log-skill-usage.sh</code></a></td><td>PreToolUse hook that appends every skill invocation to <code>~/.claude/skill-usage.log</code> as JSONL. Tells you which skills actually fire.</td></tr></tbody></table></div>\n<h3>Wiring the usage hook</h3>\n<pre data-lang=\"bash\"><code>mkdir -p ~/.claude/hooks\ncp tools/hooks/log-skill-usage.sh ~/.claude/hooks/\nchmod +x ~/.claude/hooks/log-skill-usage.sh</code></pre>\n<p>Then in <code>~/.claude/settings.json</code>:</p>\n<pre data-lang=\"json\"><code>{\n  &quot;hooks&quot;: {\n    &quot;PreToolUse&quot;: [\n      { &quot;matcher&quot;: &quot;Skill&quot;, &quot;hooks&quot;: [{ &quot;type&quot;: &quot;command&quot;, &quot;command&quot;: &quot;~/.claude/hooks/log-skill-usage.sh&quot; }] }\n    ]\n  }\n}</code></pre>\n<p>Top skills by use:</p>\n<pre data-lang=\"bash\"><code>jq -r '.skill' ~/.claude/skill-usage.log | sort | uniq -c | sort -rn | head -20</code></pre>\n<p>A skill that fires far less than expected has a bad description or is not useful. Rewrite the trigger phrasings or retire it — do not leave it costing context on every session.</p>",
  "hookHtml": "<p>Not vendored here; attached per session.</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Connector</th><th>Used for</th></tr></thead><tbody><tr><td>Linear</td><td>Turning a stage output into tasks. Every Icarus artifact should land as issues, not a document nobody opens.</td></tr><tr><td>Notion</td><td>Fellow workspaces, the Co-Build asset registry, stage pages.</td></tr><tr><td>Granola</td><td>Interview transcripts feeding <a class=\"skill-ref\" href=\"#/skill/tacit-knowledge-interview\"><code>tacit-knowledge-interview</code></a>, <a class=\"skill-ref\" href=\"#/skill/trace-to-interview\"><code>trace-to-interview</code></a>, <code>summarize-interview</code>.</td></tr><tr><td>Figma</td><td><a class=\"skill-ref\" href=\"#/skill/first-mocks\"><code>first-mocks</code></a>, <a class=\"skill-ref\" href=\"#/skill/usability-test-protocol\"><code>usability-test-protocol</code></a>.</td></tr><tr><td>Google Drive</td><td>Fellow decks, QDB material.</td></tr></tbody></table></div>",
  "sourcesHtml": "<h1>Sources</h1>\n<p>Every Icarus skill in <code>skills/</code> is a verbatim copy. Nothing has been rewritten, trimmed, or re-scored.</p>\n<p><strong>Source.</strong> <code>https://github.com/The-Utopia-Studio/skills</code> at commit <code>edc6b9f18820c1f729818484b97496011fbd36e3</code>, path <code>skills/product/&lt;name&gt;/</code>. <strong>Copied.</strong> 2026-09-14. Each folder carries its <code>SKILL.md</code>, <code>template.md</code>, <code>examples/</code>, and full <code>tests/</code> harness.</p>\n<p>Re-sync a skill with:</p>\n<pre data-lang=\"bash\"><code>cp -R &lt;clone&gt;/skills/product/&lt;name&gt; skills/&lt;name&gt;\nnode tools/scripts/validate-skills.mjs</code></pre>",
  "operatingRules": "<p>This repo is Utopia Studio's Product Management hub. Any session that loads it inherits the Icarus method.</p>\n<ol><li><strong>Read <a href=\"#/rules\"><code>GOLDEN_RULES.md</code></a> before judging any product work.</strong> Ten rules. They are not suggestions.</li><li><strong>Weight evidence by what people did.</strong> Money 1.0, behaviour 0.7, artefact 0.5, commitment 0.3, opinion 0.1. Rungs never stack. A claim's weight is its best rung, never the sum, never the average.</li><li><strong>Tag every empirical claim</strong> <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>.</li><li><strong>Challenge first.</strong> Name the gap, the kill criteria, and what would change your view. Flattering weak work is an auto-fail.</li><li><strong>Never fabricate a number, quote, or citation.</strong> Empty input is a request for evidence, not a zero.</li><li><strong>Stay in scope.</strong> Each skill names its siblings and hands off. Poaching is an auto-fail.</li><li><strong>Compose the Icarus skills, do not restate them.</strong> A new file that reimplements <a class=\"skill-ref\" href=\"#/skill/evidence-ladder\"><code>evidence-ladder</code></a> will drift from it.</li><li><strong>Copied skills stay verbatim.</strong> Editing a skill in <code>skills/</code> breaks its eval harness. Re-run its <code>tests/</code> or leave it alone. Provenance is in <a href=\"https://github.com/OllieGY/icarus/blob/main/skills/SOURCES.md\" target=\"_blank\" rel=\"noopener noreferrer\"><code>skills/SOURCES.md</code></a>.</li><li><strong>Nothing enters folded or it does not enter.</strong> No external skill gets vendored wholesale (Rule 9).</li><li><strong>Run <code>node tools/scripts/validate-skills.mjs &amp;&amp; node tools/scripts/build-site.mjs</code> before every commit.</strong> The first catches rubric drift, the second rebuilds <a href=\"https://github.com/OllieGY/icarus/blob/main/site/\" target=\"_blank\" rel=\"noopener noreferrer\"><code>site/</code></a>. A stale <code>site/data</code> fails CI.</li></ol>\n<p>A rule change in <code>GOLDEN_RULES.md</code> is Ollie's call. Propose it, do not make it quietly.</p>"
 },
 "search": [
  {
   "ref": "skill:fellow-path-router",
   "kind": "skill",
   "title": "fellow-path-router",
   "stage": "00",
   "subtitle": "Takes a fellow's whole situation — not an idea — and returns their route through Icarus.",
   "text": "fellow-path-router routes a fellow through the icarus module by situation type, not by tearing down one idea. fires on \"where do i start\", \"i already have a product / traction — which stages apply to me\", \"onboard me to icarus\", \"which stages should i skip\", \"i have a mature product, what's my path\". classifies the fellow as type a (blank page), b (traction, no moat), or c (mature product) on the evidence ladder, then returns a keep / trim / subtract / leap stage ledger and a think:build:test ratio tied to that type's dominant risk. do not fire to tear down or grade one idea (use concept-council or so-what-stress-test), to assess the fellow's own skill level (use fellow-level-ladder), or to draw the platform build-vs-buy line (use platform-vs-venture). takes a fellow's whole situation — not an idea — and returns their route through icarus. where do i start i already have traction — which icarus stages apply to me? onboard me to icarus which stages should i skip? i have a mature product — what's my path through this? type is claimed, not shown subtracting a stage is not skipping its evidence the ratio is a cap, not a suggestion same flow for everyone is the failure mode a working tool is not always a venture \"tear my idea apart / what am i missing / what should i build first\" \"is this idea worth doing / pressure-test it / so what\" \"how is this fellow doing / assess them / level them up\" \"should we build or use the platform / what does daedalus give me\""
  },
  {
   "ref": "skill:concept-council",
   "kind": "skill",
   "title": "concept-council",
   "stage": "00",
   "subtitle": "Takes a raw, unproven idea and returns one decision: the single cheapest test to run this week.",
   "text": "concept-council first-contact teardown of a raw product idea. fires when a fellow says \"here's my idea\", \"tear this apart\", \"rip this concept apart\", \"what am i missing\", or \"what should i build first\". convenes five adversarial lenses, names the one load-bearing gap, and returns a gap map plus one first-probe brief costing under a week. not for an already-scoped concept you want stress-tested against the five so-whats (use so-what-stress-test) or scored numerically across eight dimensions (use problem-quality-scorecard). takes a raw, unproven idea and returns one decision: the single cheapest test to run this week. here's my idea — an ai copilot for factory managers. tear this apart. what am i missing? what should i build first? rip this concept apart. more than one \"build first\" is an auto-fail a probe over a week is a rewrite, not a plan opinion-dressed-as-evidence lenses that fetch instead of attack fabrication to fill a lens solution in disguise the five so-what questions run on an already-formed concept a numeric score across eight problem dimensions the unit-cost physics floor of a claim a written prd or spec"
  },
  {
   "ref": "skill:so-what-stress-test",
   "kind": "skill",
   "title": "so-what-stress-test",
   "stage": "00",
   "subtitle": "Compresses \"should this exist?\" into five business questions and one verdict.",
   "text": "so-what-stress-test fires when a fellow wants a whole idea pressure-tested fast across five business questions — \"is this worth doing\", \"pressure-test this\", \"poke holes in this\", \"stress test my idea\", \"so what?\". runs so what / who pays / what's the wedge / what's the moat / what kills it, then returns a per-question verdict table and an overall pass / redesign / kill, refusing to pass any question answered on opinion. do not fire to score a problem on the 8-dimension gate (use problem-quality-scorecard), for the 5-lens adversarial teardown that ends in one probe (use concept-council), or to deep-dive only the wedge (use wedge-five-questions). compresses \"should this exist?\" into five business questions and one verdict. is this worth doing? can you poke holes in it? pressure-test this idea for me across the board. so what — why does anyone care that we solve this? stress test my idea before i put more time in. give me the fast go/no-go on this concept: who pays, what's the moat, what kills it? the user is not the payer denial on q5 reads as a pass to the fellow and a fail to the skill a moat plan is not a moat fatal overrides pass a one-liner with no answers is not a redesign solution in disguise \"score this problem on all 8 dimensions\" \"run the council / give me the five-lens teardown\" \"pressure-test just my wedge\""
  },
  {
   "ref": "skill:product-as-decision",
   "kind": "skill",
   "title": "product-as-decision",
   "stage": "01",
   "subtitle": "Forces one sentence: this product makes ONE decision, made by one named human, go from a costly before to a cheap after.",
   "text": "product-as-decision restates a product idea as one decision a named human makes, then quantifies how that decision is compressed — before→after on a single axis of time, effort, or autonomy (e.g. six minutes → thirty seconds). fires on \"what's the product here\", \"frame the problem\", \"what decision are we changing\", \"state this as a decision\", \"what are we actually changing for the user\". output is a filled compressed-decision statement: the decision (never a feature), its one owner, the before→after compression with a source, and the autonomy-ladder move, every claim tagged [fact]/[assumption]/[hypothesis]. not for stripping the job to primitives (use job-in-primitives), not for mapping and pricing the whole workflow (use current-state-map), not for the 8-dimension go/no-go (use problem-quality-scorecard), not for the per-unit prize ratio (use physics-floor-gap). forces one sentence: this product makes one decision, made by one named human, go from a costly before to a cheap after. what's the product here? frame the problem for me. what decision are we actually changing? state this as a decision, not a feature. in one line, what are we changing for the user? feature smuggling compressing the artefact, not the decision the after marked as a fact two decisions wearing one coat interface change dressed as compression \"strip this to the primitive job — what's really being done?\" \"map the workflow and price every step as it happens today.\" \"score this problem across the 8 dimensions — go or no-go?\" \"is the per-unit prize big enough to bother?\" \"stress-test the whole idea across five questions.\""
  },
  {
   "ref": "skill:job-in-primitives",
   "kind": "skill",
   "title": "job-in-primitives",
   "stage": "01",
   "subtitle": "Takes a job described in the customer's own language — full of product names, team names, and steps — and reduces it to the three things every job actually is underneath: information moved, decisions made, liability transferred.",
   "text": "job-in-primitives reduces a job to its three irreducible currencies — information moved, decisions made, liability transferred — after deleting every tool, vendor, product, and org-chart role name from the description. fires on \"what job is really being done here\", \"strip this down to the primitive\", \"what's the primitive job\", \"take the tool names out and tell me the underlying job\", or when a fellow describes a workflow thick with product and team names and wants the tool-independent job beneath it. outputs a filled primitive job spec: the customer's-words version + a kill-list of deleted proper nouns + the three primitive lines + an invariance test + an ai-eats-vs-stays split. not for naming the single decision and its before→after time compression (use product-as-decision), not for mapping and pricing each workflow step (use current-state-map), not for the problem-framing-canvas workshop (this absorbs its instinct, not its scaffolding). takes a job described in the customer's own language — full of product names, team names, and steps — and reduces it to the three things every job actually is underneath: information moved, decisions made, liability transferred. what job is really being done under all these tools? strip this workflow down to the primitive job. take the product and team names out — what's the underlying job? what's the primitive job here? reduce this to information, decisions, and liability — what's left when the tools go? a category is still a tool the decider and the liable party are often different people do not manufacture an automatable primitive pronoun-swapping is not reduction the comfortable primitive is usually information movement \"state this as the one decision we're changing, and how much faster it gets.\" \"map how it's done today and price every step.\" \"what's the riskiest assumption / how would i disprove it?\" \"is the whole idea any good?\""
  },
  {
   "ref": "skill:current-state-map",
   "kind": "skill",
   "title": "current-state-map",
   "stage": "01",
   "subtitle": "Turns \"how is this done today?\" into an invoice.",
   "text": "current-state-map maps a workflow exactly as it happens today and puts a sourced price on every step — touch time, handoffs, delay, and failure/rework — then totals it into the current priced practice per unit. fires on \"how is this done today\", \"map the workflow\", \"what does it cost now\", \"walk the as-is process and price it\", \"where does the time and money go in this workflow\". outputs a filled priced step ledger: per-step cost + cited source + evidence-ladder weight + the four hidden-cost lines + grand total per unit + the step that holds the most cost, every number tagged [fact]/[assumption]/[hypothesis]. not the theoretical floor or the build/walk gap verdict (use physics-floor-gap — this builds the current-cost side that skill divides against), not the primitive job with tool and role names stripped (use job-in-primitives), not total market size (use bottoms-up-quantification), not qualitative problem-space framing / hmw (use problem-framing-canvas). turns \"how is this done today?\" into an invoice. how is this done today? map it and price every step. map the workflow and tell me what each step costs. what does this process cost us now? walk the as-is process and price it. where does the time and money go in this workflow? conflating elapsed time with touch time pricing the official sop, not the real practice dropping the failure tail because it is hard to source counting only the people you can see a tidy total hiding a guessed dominant line \"what should this cost / is the gap big enough to build?\" \"strip this job to its primitive — information, decisions, liability.\" \"what's the tam / total market for this?\" \"frame the problem space — biases, who's affected, how might we.\""
  },
  {
   "ref": "skill:physics-floor-gap",
   "kind": "skill",
   "title": "physics-floor-gap",
   "stage": "01",
   "subtitle": "Answers one question and refuses the rest: is the per-unit prize big enough to bother?",
   "text": "physics-floor-gap sizes the per-unit prize of a piece of work from first principles by comparing what it is priced at today against its theoretical floor once ai does the automatable part. fires on \"is this a big enough problem\", \"how big is the prize\", \"size the opportunity from first principles\", \"what's the physics floor\", \"is the gap big enough\", or when a fellow has a unit of work and its current per-unit cost and wants a build/walk verdict. outputs a filled floor/gap calc sheet: token-cost line + judgment-minutes line + current priced number + gap ratio + band verdict, every number tagged [fact]/[assumption]/[hypothesis]. not for total market size (use bottoms-up-quantification), not for the 8-dimension problem gate (use problem-quality-scorecard), not for scoring the whole idea (use so-what-stress-test). answers one question and refuses the rest: is the per-unit prize big enough to bother? is this a big enough problem to build for? how big is the prize per report? size the opportunity from first principles. what's the physics floor for this work? is the gap big enough — what does one unit cost today vs what it should cost? under-counting judgment to manufacture a prize the wrapper trap a big ratio that is really a moat stale floor opinion dressed as a fact a ratio near a band boundary is fragile \"what's the total market / tam / how many customers × price?\" \"is this a good problem across all 8 dimensions?\" \"is the whole idea any good? stress-test the concept.\" \"which wedge should we attack first?\""
  },
  {
   "ref": "skill:problem-quality-scorecard",
   "kind": "skill",
   "title": "problem-quality-scorecard",
   "stage": "01",
   "subtitle": "Compresses \"should we build this?\" into one number and one verdict.",
   "text": "problem-quality-scorecard numeric go/no-go gate that scores one product problem 1-5 on eight evidence-backed dimensions (frequency, budgeted pain, severity, data exhaust, structural persistence, buyer clarity, wedge sharpness, founder asymmetry), sums to /40, and returns pass (>=32) / redesign (28-31) / kill (<28). fires on \"should i build this\", \"score this problem\", \"go or no-go\", \"is this problem good enough\", \"rate this problem\". output is a filled 8-row scorecard with a money-or-behaviour citation on every row. not for broad risk mapping across gtm/strategy/team (use identify-assumptions-new), not the five qualitative whole-idea questions (so-what-stress-test), not the per-unit size ratio (physics-floor-gap), not the wedge-only deep dive (wedge-five-questions). compresses \"should we build this?\" into one number and one verdict. should i build this?\" (a problem in hand, wants a build decision) score this problem. go or no-go on this problem? is this problem good enough to build? rate this problem. frequency inflation wish in the money column wedge / founder double-count scoring a solution verified-low is not opinion every risky assumption mapped across value, gtm, strategy, team the five qualitative whole-idea business questions the per-unit size ratio / does the physics floor leave margin a deep dive on the wedge alone to turn a solution back into a problem before scoring"
  },
  {
   "ref": "skill:null-hypothesis-test",
   "kind": "skill",
   "title": "null-hypothesis-test",
   "stage": "01",
   "subtitle": "Takes the beliefs a plan silently depends on and turns each into a falsifiable bet: its null form (the belief is false), the single cheapest observation that could kill it, and the exact result that counts as death — written down before you run it.",
   "text": "null-hypothesis-test falsification pass for the load-bearing beliefs under a chosen plan or wedge. restates each assumption as a null hypothesis (the belief is false), designs the single cheapest observation whose failure would disprove it, and ranks every assumption by p(wrong) x impact-if-wrong so the fellow shoots at the most-likely- fatal belief first. fires on \"what has to be true\", \"how would i disprove this\", \"what's the riskiest assumption\", \"what could kill this\", \"which belief do i test first\". output is an assumption -> null -> disproof table with a pre-committed kill signal on every row. not the go/no-go on whether the problem is worth building at all (problem-quality-scorecard), not bottom-up sizing (bottoms-up-quantification), not the priced workflow map (current-state-map), not a narrative failure story (pre-mortem). takes the beliefs a plan silently depends on and turns each into a falsifiable bet: its null form (the belief is false), the single cheapest observation that could kill it, and the exact result that counts as death — written down before you run it. what has to be true for this to work? how would i disprove this before we build? what's the riskiest assumption here? what could kill this — which belief do i test first? which of my assumptions should i test before building? confirmation dressed as rigour parking the fatal belief ranking by fear, not by wrong x impact falsifying a solution cheap-but-empty disproof a go/no-go on whether the problem is worth building at all to build magnitude from the smallest verifiable units to map how the workflow is done today and price each step a narrative \"imagine it failed, tell the story\" exercise to turn a solution back into a problem first"
  },
  {
   "ref": "skill:bottoms-up-quantification",
   "kind": "skill",
   "title": "bottoms-up-quantification",
   "stage": "01",
   "subtitle": "Answers one question and shows its working: how big is the whole thing, built from the smallest unit you can actually count?",
   "text": "bottoms-up-quantification builds the magnitude of an opportunity from the smallest countable units up, with every multiplier and its source shown in the open, and permits a top-down tam only at the end as a labelled sanity check. fires on \"size this bottom-up\", \"build the number\", \"don't give me a tam\", \"how big is this really, show me the arithmetic\", \"what's the total from the units up\", or when a fellow has a per-unit value and wants a total market magnitude they can defend line by line. outputs a filled bottom-up size model: atom + reachable population + frequency + value-per-event + capture, each rung ladder-weighted, weakest rung caps confidence, plus a tam reconciliation band. not for the per-unit prize ratio of one unit (use physics-floor-gap — run it first), not for the 8-dimension problem gate (use problem-quality-scorecard), not for scoring the whole idea (use so-what-stress-test). answers one question and shows its working: how big is the whole thing, built from the smallest unit you can actually count? size this bottom-up — don't give me a tam. build the number from the units up. how big is this really, and i want to see the arithmetic. what's the total addressable value, built from what one unit is worth times how many there are? give me a defensible market size i can walk an investor through line by line. leading with the tam padding the chain averaging confidence instead of taking the minimum a headline count as population sizing on the whole-workflow value, not the captured slice ignoring the reconciliation \"is one unit even worth building for — what's the per-unit prize?\" \"score my problem across all 8 dimensions.\" \"is the whole idea any good? stress-test the concept.\" \"which wedge should we attack first?\""
  },
  {
   "ref": "skill:user-buyer-decider-map",
   "kind": "skill",
   "title": "user-buyer-decider-map",
   "stage": "02",
   "subtitle": "Forces four names where the fellow wants one.",
   "text": "user-buyer-decider-map splits a buying situation into four distinct people — user (feels the pain, touches the product), buyer (owns the budget line), decision-maker (final signature / veto), champion (spends internal capital to push it) — each pinned to one title, one budget (or an explicit none), one why-now. fires on \"who's the actual buyer\", \"who decides\", \"map the stakeholders\", \"map the buying committee\", \"the user loves it but who signs the cheque\", \"who's our champion and who can veto us\". output is a filled stakeholder-role map that feeds the buyer-clarity row of problem-quality-scorecard. not the 8-dimension go/no-go (problem-quality-scorecard), not ranking which unmet need to build first (unserved-needs-finder), not a demographic day-in-the-life persona (proto-persona), not simulating users before interviews (synthetic-users). forces four names where the fellow wants one. who's the actual buyer here? who decides whether this gets bought? map the stakeholders / the buying committee for this account. the user loves it — but who signs the cheque? who's our champion, and who can quietly veto us?  \"score the problem across 8 dimensions — go or no-go?\" \"which unmet need do we build for first?\" \"write a demographic persona / a day-in-the-life.\" \"define the firmographic icp with ltv cohorts.\" \"dry-run the pitch on a simulated user first.\""
  },
  {
   "ref": "skill:unserved-needs-finder",
   "kind": "skill",
   "title": "unserved-needs-finder",
   "stage": "02",
   "subtitle": "Takes a fellow's list of customer \"needs\" — usually a mix of real needs, disguised solutions, and tech capabilities — and returns one ranked map.",
   "text": "unserved-needs-finder ranks what a customer actually needs by onioning each stated need to a tech-invariant core, sorting the survivors with kano (must / performance / delighter), and returning the one durable, under-served need that will still be a need after the technology turns over. fires on \"what do they really need\", \"find the unmet need\", \"which need should we prioritise\", \"what's the real need under this feature request\", or when a fellow hands you a list of \"needs\" that are mostly features and wants the durable one ranked out. outputs a filled prioritised need map: candidate needs → solution-strip → onion-to-core → tech-invariance gate → kano bands → one ranked wedge need with its unserved evidence. not for naming who holds the need or their budget (use user-buyer-decider-map), not for reducing the whole job to its currencies (use job-in-primitives), not for scoring whether the whole idea is worth building (use so-what-stress-test). takes a fellow's list of customer \"needs\" — usually a mix of real needs, disguised solutions, and tech capabilities — and returns one ranked map. what do they really need — and which need should we build first? this feature list is mostly solutions. what's the real need under it? find the unmet need in this segment and rank it. which of these is the wedge need vs a nice-to-have? they keep asking for [feature]. what do they actually need, and is it durable? the comfortable need is a delighter \"unserved\" is not the same as \"unspoken\" over-peeling dissolves the need into a platitude a capability can pass kano and still be a fake need two stated needs often share one core \"who is the actual buyer / who signs / what's their budget?\" \"reduce the whole job to information / decisions / liability.\" \"is the whole idea worth building?\" \"what's the riskiest assumption and how do i disprove it?\""
  },
  {
   "ref": "skill:synthetic-users",
   "kind": "skill",
   "title": "synthetic-users",
   "stage": "02",
   "subtitle": "Takes a concept, a message, or a flow you are about to take to real customers, and runs it past a small panel of synthetic users built from your YODA corpus — the field logs, shadow threads, and tacit captures a foundation model cannot reach.",
   "text": "synthetic-users build a synthetic user panel grounded in your yoda corpus and pre-test a concept, message, or flow against it — cheaply, before you spend real interview time. returns a synthetic panel + pre-test transcript carrying a lie ledger (what synthetic users systematically get wrong: they never pay, never no-show, over-rationalise, over-agree) and a kill / revise / promote-to-real-interview verdict. fires on \"test this before real interviews\", \"simulate a user\", \"dry-run the pitch\", \"pre-test the message/flow\", \"which of these should i even bother interviewing about\". not for running the real interview that captures an expert's judgment (use tacit-knowledge-interview), scripting a mom-test discovery interview (use interview-script) or planning one (use discovery-interview-prep), or sourcing the corpus the panel is built from (use yoda-data-sourcing). never treats a synthetic response as validation. takes a concept, a message, or a flow you are about to take to real customers, and runs it past a small panel of synthetic users built from your yoda corpus — the field logs, shadow threads, and tacit captures a foundation model cannot reach. can i test this concept before i book real interviews? simulate a user for this pitch. dry-run the pitch / message before i take it to customers. build me a synthetic panel from our data to pre-test the flow. which of these two messages should i even bother interviewing about? the confirmation machine an ungrounded panel is the base model's prior in costume panel inflation feels like rigour and isn't survival is not validation demand characteristics invented quotes are not corpus quotes to watch a real expert do a real task and capture their judgment a mom-test script for a real discovery interview to plan/prep real discovery interviews (goal, segment, method) to source the proprietary data the panel is built from to find the unmet need, or map who the buyer is"
  },
  {
   "ref": "skill:tacit-knowledge-interview",
   "kind": "skill",
   "title": "tacit-knowledge-interview",
   "stage": "02",
   "subtitle": "Takes an expert who does a task better than they can explain it and returns the part they cannot explain: the forks where they chose without a written rule and never noticed choosing.",
   "text": "tacit-knowledge-interview shadow an expert doing real work and extract the judgment calls they make without noticing. fires when a fellow says \"interview an expert\", \"capture how they decide\", \"watch them work\", \"shadow an operator\", \"capture the judgment\", or \"encode when they override the rule\". runs a watch-30 / replay-20 / edge-cases-10 session and returns a tacit-knowledge capture: the explicit procedure split from the tacit judgment, each fork tagged with the cue read and the exception that overrides it. not for scripting a mom-test customer discovery interview (use interview-script), planning discovery interviews about a problem or churn (use discovery-interview-prep), or condensing a transcript you already have (use summarize-interview). takes an expert who does a task better than they can explain it and returns the part they cannot explain: the forks where they chose without a written rule and never noticed choosing. i want to interview an expert and capture how they actually decide, not the sop. let me shadow a plant supervisor for a shift and capture the judgment calls — like when they override the alarm. watch our senior operator work and pull out the calls they make without noticing. shadow the safety officer while they sign off permits and capture why they sometimes say no. encode when the shift lead overrides the runbook — the real judgment behind the procedure. the expert recites the manual \"experience\" and \"gut\" are non-answers the replay answer can contradict the watch observer effect: they perform the sop because you are there interrupting the watch solution in disguise: \"we just need documentation.\" a described session is not a watched one a mom-test script to learn a customer's problem or jtbd to plan/prep discovery interviews about churn or a new idea to condense an interview transcript already recorded to score a single signal on the evidence ladder to find data a model cannot already reach"
  },
  {
   "ref": "skill:evidence-ladder",
   "kind": "skill",
   "title": "evidence-ladder",
   "stage": "02",
   "subtitle": "Takes a pile of things a fellow is calling \"validation\" — quotes, landing-page sign-ups, letters of intent, paid pilots, payments — and weights each one by what the person actually did, on a single five-rung ladder.",
   "text": "evidence-ladder weights a pile of \"validation\" by what people did, not what they said. takes interview quotes, sign-ups, lois, pilots, payments and places each on one ladder — money moved 1.0, behaviour observed 0.7, artefact shown 0.5, verbal commitment 0.3, opinion 0.1 — then returns a weighted evidence table, the weight of the load-bearing claim, and for every low signal the cheapest probe that raises it a rung. fires on \"how strong is this signal\", \"score the interview\", \"did they actually validate\", \"weight this evidence\", \"is this real validation\". not a build gate on a problem (use problem-quality-scorecard), not a picker for which test to run next (use probe-matrix), not a transcript summary (use summarize-interview). this is the reference skill the rest of the module cites for the ladder. takes a pile of things a fellow is calling \"validation\" — quotes, landing-page sign-ups, letters of intent, paid pilots, payments — and weights each one by what the person actually did, on a single five-rung ladder. how strong is this signal? score the interview — did i actually validate anything? did they actually validate it, or did they just say nice things? weight this evidence for me — three lois and forty sign-ups. is this real validation or just enthusiasm? stacking enthusiasm their reaction to your demo, counted as their artefact loi or signed quote, counted as money free sign-up, counted as behaviour self-report, counted as observed averaging the pile a build/no-build decision on one problem, scored to a gate to pick which test to run next a transcript turned into a structured summary the five qualitative whole-idea questions to turn a solution back into a weighable claim"
  },
  {
   "ref": "skill:continuous-discovery-engine",
   "kind": "skill",
   "title": "continuous-discovery-engine",
   "stage": "02",
   "subtitle": "Turns discovery from a one-time drawing into a running loop.",
   "text": "continuous-discovery-engine stands up one living opportunity tree fed by three live inputs and keeps it current after launch. fires when a fellow says \"set up discovery\", \"continuous discovery\", \"opportunity tree\", \"keep learning after launch\", or \"discovery after launch\". returns an opportunity tree (outcome → opportunities → solutions → tests) wired to customer interviews, production traces, and eval telemetry — each feed stamped with its evidence rung, its cadence, and a named synthesis owner. not for scoring one signal's rung (use evidence-ladder), picking which probe tests one question (use probe-matrix), or running a single customer interview (use tacit-knowledge-interview). turns discovery from a one-time drawing into a running loop. set up discovery for our product. keep learning after launch. build me an opportunity tree.\" / \"opportunity tree i want continuous discovery. how do we run discovery after launch? poster relapse machine-decides drift trace worship interview-only inflation (pre-launch) eval telemetry mistaken for demand stale branches read as live to score one signal's evidence rung (\"what rung is 'they said they'd buy it'?\") to pick the cheapest honest test for one question to run or prep a single customer interview a first-contact teardown of a raw, unscoped idea the old static outcome→opportunity→solution→experiment drawing"
  },
  {
   "ref": "skill:yoda-data-sourcing",
   "kind": "skill",
   "title": "yoda-data-sourcing",
   "stage": "03",
   "subtitle": "Takes a fellow's list of candidate data sources and returns a sourced proprietary corpus map: every source scored on one axis first — can a foundation model already reach it?",
   "text": "yoda-data-sourcing assemble a sourced proprietary-data corpus map — sort every candidate data source by one test (can a foundation model already reach it?) and keep only the workflow-trapped, permission-gated signal (shadow ai threads, operational logs, permits, vendor-locked sensor feeds, workflow exhaust) as the moat seed. fires on \"get our own data\", \"what data do we own\", \"where's our proprietary data\", \"build the moat's seed\", \"what data can't a competitor get\". not for drafting the contract that unlocks a gated source (use data-rights-clause, section 06), not for scoring whether one signal counts as real evidence (use evidence-ladder), not for running the interview that captures tacit judgment (use tacit-knowledge-interview). takes a fellow's list of candidate data sources and returns a sourced proprietary corpus map: every source scored on one axis first — can a foundation model already reach it? how do we get our own data? what data do we own? where's our proprietary data? help me build the seed of our data moat. what data can't a competitor get?  \"draft the clause / contract that gives us rights to the operator's telemetry\" \"is 'they said they'd buy it' strong enough evidence? score this signal.\" \"run the interview that pulls the supervisor's tacit judgment out of their head\""
  },
  {
   "ref": "skill:explicit-vs-tacit-capture",
   "kind": "skill",
   "title": "explicit-vs-tacit-capture",
   "stage": "03",
   "subtitle": "Takes a body of expertise the fellow already holds — an SOP, a field manual, a scoring rubric, a transcript of an expert talking through past calls, a stream of operator corrections, or a completed tacit-knowledge capture — and runs one test on every piece of it: could a competent stranger execute this from the written words alone, with no judgment, and get the expert's result?",
   "text": "explicit-vs-tacit-capture split a body of expertise into the tell-able procedures (explicit) and the show-only judgment (tacit), and flag the tacit half as the defensible product. fires when a fellow says \"what's teachable vs judgment\", \"codify the expertise\", \"split explicit from tacit\", \"which part of our know-how is defensible\", \"what can we write down vs what's in their head\", or \"turn our expertise into a product spec\". returns an explicit/tacit ledger: every piece of know-how classified by one test — could a stranger execute it from the words alone? — with the tacit rows scored on the evidence ladder and the moat named. not for running the live watch session that observes an unobserved judgment (use tacit-knowledge-interview), not for sorting data sources by whether a model can already reach them (use yoda-data-sourcing), not for turning captured expertise into a labelled dataset and golden cases (use dataset-builder). takes a body of expertise the fellow already holds — an sop, a field manual, a scoring rubric, a transcript of an expert talking through past calls, a stream of operator corrections, or a completed tacit-knowledge capture — and runs one test on every piece of it: could a competent stranger execute this from the written words alone, with no judgment, and get the expert's result? what's teachable here versus judgment? help me codify our expert's expertise. split the explicit from the tacit in our know-how. which part of our expertise is actually defensible? what can we write down versus what's only in their head?  to sit with an expert and watch the call live to observe an unobserved judgment to sort candidate data sources by whether a model can already reach them to turn captured expertise into a labelled dataset and 20 golden cases to separate a customer's job from the solution they asked for"
  },
  {
   "ref": "skill:dataset-builder",
   "kind": "skill",
   "title": "dataset-builder",
   "stage": "03",
   "subtitle": "Takes the field artefacts a fellow already holds — the moat-seed rows yoda-data-sourcing surfaced — and turns them into two things: a labelled dataset (every artefact paired with a ground-truth label and its provenance) and the ≥20 golden cases carved out of it.",
   "text": "dataset-builder turn field artefacts into a labelled dataset and 20+ golden cases — the seed of the eval suite that gates the build. attaches a ground-truth label to every real artefact, scores each label on the evidence ladder, and clears each case through four gates (provenance, ground-truth, unreachable, held-out) so a foundation model cannot pre-pass its own memorised test. fires on \"make our own dataset\", \"create golden cases\", \"label this\", \"turn our field logs into a test set the model hasn't seen\", \"seed the eval suite\". not for finding which sources are proprietary in the first place (use yoda-data-sourcing, section 03), not for composing the labelled cases into the four-band spread / autonomy level / cost budget of a scoreable spec (use eval-first-spec, section 07), not for splitting an expert's teachable procedure from show-only judgment (use explicit-vs-tacit-capture, section 03). takes the field artefacts a fellow already holds — the moat-seed rows yoda-data-sourcing surfaced — and turns them into two things: a labelled dataset (every artefact paired with a ground-truth label and its provenance) and the ≥20 golden cases carved out of it. let's build our own dataset from the field logs. create golden cases for our eval. label this / label our field data so we can test the model. turn these logs into a test set the model hasn't seen. make the seed of our eval suite from our own data.  \"which of our candidate sources are actually proprietary / where is our moat data?\" \"i have my 20 labelled cases — now compose them into the typical/edge/adversarial spread, pick the autonomy level, and set the cost-per-outcome budget.\" \"which of the expert's knowledge is teachable procedure vs show-only judgment?\" \"is this one signal strong enough evidence?\""
  },
  {
   "ref": "skill:probe-matrix",
   "kind": "skill",
   "title": "probe-matrix",
   "stage": "04",
   "subtitle": "Turns \"how do I test this cheaply?\" into one decision: the single question you most need answered, matched to the cheapest probe that can answer it honestly.",
   "text": "probe-matrix routes the one question a fellow needs answered to the cheapest probe that is honest about that question, using the probe honesty contract (paper/sketch, wizard-of-oz, concierge, agent-concierge — each honest about some things and lying about others). fires on \"how do i test this cheaply\", \"which experiment\", \"what's the cheapest way to learn x\", \"which probe\", \"how do i validate this\". output is a probe selection + plan: the question, the chosen probe, why it is honest about this question, what it will still lie about, cost, and a pre-registered pass/fail read-out — and it refuses a probe that lies about the very thing being tested, naming the honest one instead. not the how-to for running a probe (use the runbooks paper-sketch-probe / wizard-of-oz-probe / concierge-probe / agent-concierge-probe), not the build/no-build gate on the problem itself (problem-quality-scorecard), not how to score a signal you already hold (evidence-ladder). turns \"how do i test this cheaply?\" into one decision: the single question you most need answered, matched to the cheapest probe that can answer it honestly. what's the cheapest way to test whether operators trust the alert? which experiment should i run to learn if they'll pay? which probe fits this question? how do i validate this cheaply before building? what's the cheapest way to learn whether plant managers would use the copilot? trust is not demand cheapest ≠ honest wizard-of-oz feasibility trap one question, one probe don't over-escalate the mundane the obvious pick still owes you a lie the step-by-step to actually run a probe (tooling, scripts, human ops) a build / no-build decision on the problem itself to score a signal already in hand (an interview quote, a click, a payment) to reframe a solution-in-disguise back into a problem every risky assumption mapped across value / gtm / strategy / team"
  },
  {
   "ref": "skill:paper-sketch-probe",
   "kind": "skill",
   "title": "paper-sketch-probe",
   "stage": "04",
   "subtitle": "Compresses a \"does this workflow read the way I think it does\" question into a 30-minute test.",
   "text": "paper-sketch-probe fires when a fellow wants to test a workflow on paper before building it — \"paper test\", \"sketch it\", \"paper prototype\", \"sketch probe\", \"draw the flow and check they can follow it\". output is a hand-drawn workflow sketch plus a structured read-out naming what was legible and where the decision lived. not for choosing which probe to run (that is `probe-matrix`), and not for testing demand, trust, or willingness to pay — a sketch lies about all three; route those to `wizard-of-oz-probe` or `concierge-probe`. compresses a \"does this workflow read the way i think it does\" question into a 30-minute test. can you paper-test the factory-copilot workflow before we build it? let's sketch it — i want to see if a plant manager can follow the alert-to-action steps. i want to run a paper prototype of the invoice-to-approval flow. run a sketch probe on the incident-report workflow. draw the 3-screen signup and check a new user can follow it.\" (mundane)  \"would they trust the output enough to act\" \"would they use it if it worked\" \"will they pay / is there demand\" \"which probe answers my question at all\""
  },
  {
   "ref": "skill:wizard-of-oz-probe",
   "kind": "skill",
   "title": "wizard-of-oz-probe",
   "stage": "04",
   "subtitle": "Compresses a \"would they actually use this if it worked\" question into a one-day test.",
   "text": "wizard-of-oz-probe fires when a fellow wants a human to run the machine behind the curtain for a day to test usage — \"fake the backend\", \"wizard of oz\", \"woz test\", \"human behind the curtain\", \"have a person answer the requests and see if they act on it\". output is a woz setup plus a result read-out that reports usage behaviour and an explicit \"what this does not prove\" section for feasibility, unit cost, and scale. not for choosing which probe to run (that is `probe-matrix`), not for testing whether a workflow reads on paper (that is `paper-sketch-probe`), and not for finding real cost-per-task (that is `agent-concierge-probe`). compresses a \"would they actually use this if it worked\" question into a one-day test. let's fake the backend and have a human answer the requests for a day. run a wizard of oz on the po-generation workflow. i want a woz test: will managers act on the recommendation if it arrives reliably? put a human behind the curtain for the risk-report requests this week. fake the auto-summary email by hand and see if anyone reads it.\" (mundane)  \"can an operator follow the workflow on the screens\" \"what is our real cost per task\" \"which probe answers my question at all\""
  },
  {
   "ref": "skill:concierge-probe",
   "kind": "skill",
   "title": "concierge-probe",
   "stage": "04",
   "subtitle": "You deliver the outcome by hand — no product, no automation — to one paying customer, and log what really happens.",
   "text": "concierge-probe runbook for delivering a product outcome by hand, as the founder, to one real customer — to test willingness to pay and the real workflow including the exceptions that break automation. fires on \"do it by hand first\", \"concierge test\", \"concierge mvp\", \"deliver it manually\", \"founder-delivered version before we automate\". output: a concierge log plus a willingness-to-pay signal scored on the evidence ladder (money charged 1.0 beats a verbal yes 0.3). not probe-matrix (that picks which probe); not agent-concierge-probe (an agent, not the founder, runs the task, and it measures cost not wtp); not wizard-of-oz-probe (fakes the interface to test would-they-use-it, not whether they pay). you deliver the outcome by hand — no product, no automation — to one paying customer, and log what really happens. let's do it by hand first before we build the reporting tool. run a concierge test on barrier intelligence's morning alert. concierge mvp for the azraq quarterly risk report. i'll deliver it manually to one operator and charge them £400. give me the founder-delivered version of the durian digest before we automate. hiding behind a fake ui smuggling in a pre-chosen solution free pilots you solve the exceptions silently concluding scale counting your own enthusiasm as demand you have not decided which probe to run you want an agent, not yourself, to run the task and price it you want to test whether people would use a slick interface if it worked, without doing the work by hand"
  },
  {
   "ref": "skill:agent-concierge-probe",
   "kind": "skill",
   "title": "agent-concierge-probe",
   "stage": "04",
   "subtitle": "You hand a real, already-mapped task to an agent, let it run the task end to end across several outcomes, and instrument every run.",
   "text": "agent-concierge-probe runbook for having an agent run a real task end to end, to measure the automation frontier (which steps it does unaided vs which need a human) and the cost-per-outcome to the cent (input+output tokens + tool calls + human-fix minutes, all priced). fires on \"agent does the task\", \"measure cost per outcome\", \"agent concierge\", \"automation frontier\", \"price it to the cent\", \"what can the agent not do unaided\". output: a cost-per-outcome read with the full breakdown, plus a frontier map. not probe-matrix (that picks the probe); not concierge-probe (the founder, not an agent, runs it, and it tests willingness to pay); not wizard-of-oz-probe; not paper-sketch-probe (that tests whether a workflow reads on paper). it is honest about cost and frontier and says nothing about self-serve ux or trust/adoption — it lies about those. you hand a real, already-mapped task to an agent, let it run the task end to end across several outcomes, and instrument every run. let an agent do the task end to end and see how far it gets. measure the cost per outcome for the mentix work-order triage. run an agent concierge on durian's first workflow. where's the automation frontier — what can the agent not do unaided? price this to the cent: tokens, tool calls, and human-fix time per outcome. the invisible human n=1 costing bare-number costing frontier drift into adoption you have not chosen a probe you want to test willingness to pay, or you (the founder) will do the task by hand you want to fake an interface to test would-they-use-it you want to test whether a workflow reads / is legible on paper before anyone builds it"
  },
  {
   "ref": "skill:product-frame-stack",
   "kind": "skill",
   "title": "product-frame-stack",
   "stage": "05",
   "subtitle": "Turns a validated problem into the full strategic frame in one pass: vision, strategy, product vision, North Star, OKRs, and a dual-track roadmap.",
   "text": "product-frame-stack walks one validated problem up a load-bearing stack — validated problem → vision → strategy → product vision → north star → okrs → dual-track roadmap — and blocks any layer from resting on an unvalidated problem below it. fires on \"frame the business\", \"vision to roadmap\", \"what's the strategy\", \"turn this validated problem into a roadmap\", \"give me the vision, north star and okrs\". output is a filled frame stack where every layer inherits the problem's evidence rung and every roadmap item ladders to a north star. not the go/no-go that validates the problem in the first place (use problem-quality-scorecard / so-what-stress-test — this consumes their verdict), not the desirable/feasible/viable score (four-lenses-test), not the post-launch metric-tree and retention check (metrics-that-matter). turns a validated problem into the full strategic frame in one pass: vision, strategy, product vision, north star, okrs, and a dual-track roadmap. frame the business — vision to roadmap. what's our strategy? we passed the problem gate — now what's the frame? give me the vision, north star, and okrs for this. turn this validated problem into a roadmap. building on an ungated problem strategy that is really a solution lagging north star roadmap as a dated feature list ceiling inflation vision as a product spec \"score this problem across the eight dimensions — go or no-go?\" \"is this desirable / feasible / viable — should we build it?\" \"what metrics matter after launch? is retention flattening?\" \"what should we actually build — invent the solution?\" \"state this as the one decision it changes.\""
  },
  {
   "ref": "skill:four-lenses-test",
   "kind": "skill",
   "title": "four-lenses-test",
   "stage": "05",
   "subtitle": "Takes one concept the fellow is thinking of building and forces a verdict on four separate risks — Desirability (do they want it enough to change behaviour or pay), Usability (can they actually get the outcome), Feasibility (can we build it at the accuracy/latency/cost the decision needs), Viability (does the money work).",
   "text": "four-lenses-test scores a specific concept across the four build-risk lenses — desirability, usability, feasibility, viability — where each lens is graded only by its named tool (onion+jtbd+kano for desirability, a watched usability observation for usability, a dev spike for feasibility, ice anchored to measured value for viability) and run by its dual-track owner (product/design discovery beside engineering delivery). fires on \"is this desirable / usable / feasible / viable\", \"should we build it\", \"run the four lenses\", \"go or no-go on this concept\", \"is this worth building\". output is a filled four-lens scorecard: per-lens tool, owner, evidence + ladder weight, score, and an and gate that kills the go if any single lens fails, every claim tagged [fact]/[assumption]/[hypothesis]. not for the full problem→vision→strategy→roadmap spine (use product-frame-stack), not for scoring the problem on 8 dimensions (use problem-quality-scorecard), not for the five-question so-what gut check on the whole idea (use so-what-stress-test). takes one concept the fellow is thinking of building and forces a verdict on four separate risks — desirability (do they want it enough to change behaviour or pay), usability (can they actually get the outcome), feasibility (can we build it at the accuracy/latency/cost the decision needs), viability (does the money work). is this desirable, usable, feasible, and viable? should we build it? go or no-go on this concept. run the four lenses on this idea. score this idea across desirability, feasibility, and viability. is this worth building? averaging the four a lens with no tool feasibility by estimate instead of spike usability tested as opinion viability priced on cost-plus or a competitor lensing a fog \"walk me from validated problem to vision, strategy, north star, roadmap.\" \"score this problem across the eight dimensions — is it worth solving?\" \"give me the five-question so-what gut check on the whole idea.\" \"just find and prioritise the unserved need.\" \"run the actual usability session and write the findings.\" \"list every risky assumption across the eight risk categories.\""
  },
  {
   "ref": "skill:first-mocks",
   "kind": "skill",
   "title": "first-mocks",
   "stage": "05",
   "subtitle": "Takes a concept you can only describe in words and forces it down to the cheapest artefact a human can actually react to.",
   "text": "first-mocks turns a concept into the cheapest concrete artefact a human can react to, via the no-code make-sequence: crazy 8s → paper/miro flow → digital mock → clickable hybrid in v0 or figma make, built in one afternoon. fires on \"mock it up\", \"run crazy 8s\", \"clickable prototype\", \"turn this idea into something i can click\", \"get from a rough idea to a prototype in an afternoon\". output is a clickable-prototype plan: the one thing the mock must provoke a reaction to, the fidelity band, the no-code ceiling, and the hand-off to a real reaction. not which experiment to run (probe-matrix), not running the test session (usability-test-protocol), not the visual / ui craft — colour, type, distinctive components — which it routes to impeccable / shape / design and never restates. bans jumping to code. takes a concept you can only describe in words and forces it down to the cheapest artefact a human can actually react to. let's mock this up — can you help me mock up the flow? run crazy 8s on this screen. i want a clickable prototype by end of day. turn this idea into something i can click through. how do i get from a rough idea to a prototype in an afternoon without writing code? code is the seductive shortcut and the trap skipping the crazy 8s to the idea you already had polishing pixels inside first-mocks reacting to the mock as if it were evidence a mock aimed at everything which cheap experiment answers their one learning question (paper / woz / concierge / agent) the paper sketch run as an evidence-gathering probe to watch a user react to the mock and score it the visual / ui craft — layout, colour, type, distinctive non-generic components to write the real product code"
  },
  {
   "ref": "skill:usability-test-protocol",
   "kind": "skill",
   "title": "usability-test-protocol",
   "stage": "05",
   "subtitle": "Compresses \"does the design actually work\" into a watched session with real target users.",
   "text": "usability-test-protocol run a moderated usability session on a working prototype and return findings tied to the screen, not the user. fires when a fellow says \"run a usability test\", \"watch a user try it\", \"usability protocol\", \"can a first-time user complete x\", or \"see where they get stuck\". product runs, engineering watches muted, design notes; the task is framed as a goal not an instruction, the user is kept in user mode (no leading, no explaining, no \"do you like it\"), and every finding is scored on observed task success (behaviour 0.7), never stated preference (opinion 0.1). output is a usability findings sheet — each defect tied to a step, counted across users, severity by frequency × blocking. not for building the prototype (use `first-mocks`; this tests what that builds), not for shadowing an expert to capture their judgment (use `tacit-knowledge-interview`; that mines expertise, this tests your design), and not for testing demand or willingness to pay (a user can complete every task and still never want it — route to `wizard-of-oz-probe` / `concierge-probe`). compresses \"does the design actually work\" into a watched session with real target users. we've got a clickable v0 — run a usability test with five plant managers and see where they get stuck. watch a user try the new alert flow and tell me if they can complete it without help. i need a usability protocol — who runs it, who watches, what do we measure? can a first-time rig supervisor renew the expiring permit on our prototype unaided? sit one person in front of the 3-screen settings flow and check they can change their notification prefs.\" (mundane) the builder cannot stay quiet leading by relief opinion smuggled in as a finding testing the person, not the prototype the task is really an instruction chasing a preference verdict the confirmation test in disguise to build the clickable prototype itself to shadow an expert and extract the judgment they can't articulate to test a workflow on paper before it's clickable to learn if anyone wants it, or would pay to route ui craft, visual polish, or interaction design to score one signal on the ladder"
  },
  {
   "ref": "skill:invent-by-hand",
   "kind": "skill",
   "title": "invent-by-hand",
   "stage": "06",
   "subtitle": "Takes a fellow's stated idea and forces an original product concept out of it — one a frontier model would not hand to every competitor who typed the obvious prompt.",
   "text": "invent-by-hand invent an original product concept before the machine hands you the generic one — onion the stated idea to its invariant core need, diverge and keep the strange child, anchor every concept to your proprietary yoda corpus, then run the generic-prompt test (if the one-line prompt a competitor would type reaches your concept, it isn't yours yet). returns an invented concept + rationale. fires on \"what should we actually build\", \"invent the solution\", \"make it non-obvious\", \"give me a concept a competitor couldn't just prompt for\", \"what's the product idea here\". not for carving and adoption-testing the first slice (use wedge-five-questions, run it next), not for finding the proprietary data the concept stands on (use yoda-data-sourcing, run it first), not for designing a cheap experiment to validate an already-chosen idea (use concierge-probe / probe-matrix, section 04). takes a fellow's stated idea and forces an original product concept out of it — one a frontier model would not hand to every competitor who typed the obvious prompt. what should we actually build? invent the solution. how do we make this non-obvious? give me a concept a competitor couldn't just prompt for. what's the product idea here?  \"is this the smallest thing to build first / will it get adopted / is my wedge sharp\" \"where's our proprietary data / what data can't a competitor get\" \"design a cheap experiment to validate this idea / build a pretotype\""
  },
  {
   "ref": "skill:wedge-five-questions",
   "kind": "skill",
   "title": "wedge-five-questions",
   "stage": "06",
   "subtitle": "Takes one proposed wedge and forces a binary verdict: real wedge, or a feature in a wedge costume.",
   "text": "wedge-five-questions pressure-test one proposed wedge against five pass/fail thresholds (standalone value, forced cadence, travel, structural expansion, scoreable adoption) and return a 5-row verdict that calls it a real wedge only on 5/5. fires on \"is this a wedge\", \"is my wedge sharp enough\", \"what's my wedge\", \"the smallest thing that forces adoption\", \"will this actually get adopted\". not for defensibility over years (use moat-design-canvas), not for scoring the whole idea across eight dimensions (use problem-quality-scorecard), not for the one-glance so-what gut check (use so-what-stress-test). takes one proposed wedge and forces a binary verdict: real wedge, or a feature in a wedge costume. is this a wedge? what's the smallest thing that forces adoption? is my wedge sharp enough? what's my wedge? will this actually get adopted?  \"how do we stay defensible over three years / build the moat\" \"score the whole idea across its dimensions\" \"give me the one-glance so-what\""
  },
  {
   "ref": "skill:moat-design-canvas",
   "kind": "skill",
   "title": "moat-design-canvas",
   "stage": "06",
   "subtitle": "Takes a wedge that has already passed wedge-five-questions and forces it into a moat you can put dates on.",
   "text": "moat-design-canvas sequence a validated wedge into a defensible moat as four dated gates (wedge → usage → lock-in → data advantage), forced through an incumbent-veto sentence (\"x won't copy this because ___\") and three monthly falsifiers; returns a filled moat canvas. fires on \"what's the moat\", \"how is this defensible\", \"will this compound\", \"design the moat\", \"will competitors just copy this / how do we stay defensible as they show up\". not for whether one wedge gets adopted now (use wedge-five-questions — run it first), not for drafting the pilot data-rights clause itself (use data-rights-clause), not for scoring the whole idea across dimensions (use problem-quality-scorecard). takes a wedge that has already passed wedge-five-questions and forces it into a moat you can put dates on. what's the moat here / design the moat. how is this defensible? will this compound over time? will competitors just copy this? how do we stay defensible as competitors show up?  \"is this a wedge / will anyone adopt it / is my wedge sharp enough\" \"what exact data-rights clause do we sign at the pilot / who owns the data / does it hold in the uae\" \"score the whole idea across its dimensions\""
  },
  {
   "ref": "skill:data-rights-clause",
   "kind": "skill",
   "title": "data-rights-clause",
   "stage": "06",
   "subtitle": "Takes one data source a fellow already has — the clause-gated moat seed YODA surfaced (section 03) — and returns two things: the three-part test applied to that data, and the actual clause language to put in pilot #1.",
   "text": "data-rights-clause draft the data-rights clause for a fellow's first paid pilot. run the three-part test — the data must be workflow exhaust, must compound with use, and must be covered by a clause signed at pilot #1 — then produce the actual clause language (data covered · retention · derived-data / compounding rights · training rights · survival on termination) with gcc/mena jurisdiction points (residency, government-entity data, worker/sponsor consent) marked [assumption] for counsel. fires on \"data rights\", \"what to sign at the pilot\", \"who owns the data\", \"data-rights clause\", \"can we keep and train on the pilot data\", \"protect our data\", \"make sure we keep our data\", \"change their standard agreement so the data stays ours\". not for deciding whether a source is a moat seed or model-reachable (use yoda-data-sourcing, section 03); not for structuring the whole pilot — scope, price, success metrics, conversion (use pilot-six-term-sheet, section 07, which carries this clause as one of its six terms); not for scoring whether a lone signal is real evidence (use evidence-ladder). not a substitute for counsel. takes one data source a fellow already has — the clause-gated moat seed yoda surfaced (section 03) — and returns two things: the three-part test applied to that data, and the actual clause language to put in pilot #1. what do we sign at the pilot so the data is actually ours? who owns the data in this pilot? draft our data-rights clause for the first pilot. can we keep and train on the pilot data after it ends? the operator wants us on their standard agreement — what do we need to change to protect our data?  \"is the operator's telemetry even a moat seed, or can a model already reach it? band our sources.\" \"structure the whole pilot — scope, price, success metrics, kill criteria, conversion.\" \"design our moat — how it compounds and why the incumbent won't copy it.\" \"is their verbal 'sure, keep the data' strong enough to count on? score it.\""
  },
  {
   "ref": "skill:eval-first-spec",
   "kind": "skill",
   "title": "eval-first-spec",
   "stage": "07",
   "subtitle": "Converts a validated wedge into a v1 spec that a judge — human or harness — can run and score.",
   "text": "eval-first-spec turn a validated wedge into the scope you can score — a one-sentence job, 20 pass/fail golden cases drawn from real artefacts, an l0–l4 autonomy level with a failure taxonomy and a derived acceptable failure rate per mode, and a cost-per-outcome budget to the cent. fires on \"spec the build\", \"define scope\", \"scope the v1\", \"write the spec\", \"how do we know it works\". not for the component pipeline or effort split (use compound-system-architecture), not for pilot price / terms / commercial success metrics (use pilot-six-term-sheet), not for whether the thing gets adopted at all (use wedge-five-questions). converts a validated wedge into a v1 spec that a judge — human or harness — can run and score. spec the build. define scope for the v1. scope the v1. write the spec. how do we know it works?  \"how should we architect the ai system / what's the component pipeline / what's the effort split\" \"what are the pilot terms / how do we price it / what's the commercial success metric\" \"is this even a wedge / will it get adopted / is it sharp enough\" \"score the whole idea / give me the so-what\""
  },
  {
   "ref": "skill:compound-system-architecture",
   "kind": "skill",
   "title": "compound-system-architecture",
   "stage": "07",
   "subtitle": "Turns \"how do we build this?\" into a component pipeline, an effort budget, and a set of swap points.",
   "text": "compound-system-architecture fires when a fellow is ready to design how the ai product is actually built — \"architect the product\", \"how do we build the ai system\", \"design the ai system\", \"what's the system architecture\", \"what does the stack look like\". returns a compound-system architecture (input → router → retrieve/reason/act → validate & guardrails → output over a data layer), a 40/20/30/10 effort-allocation plan, and named model-swap points, then kills any monolithic one-big-prompt design. do not fire to write the pass/fail scope (use eval-first-spec), to render the html/svg picture (use design/architecture-diagram), or to argue defensibility (use moat-design-canvas). turns \"how do we build this?\" into a component pipeline, an effort budget, and a set of swap points. help me architect the mentix product — how should the ai system be built? how do we build the ai system for this? what's the stack shape? design the ai system: what are the components and how do they connect? what's the system architecture — router, retrieval, all of it? we were going to send everything to one big model. is that the right architecture? the model-first trap the disappearing guardrail a data layer that is a hope swap points without evals collapsing is fine; deleting silently is not \"write the pass/fail spec — golden cases, failure rate, cost budget\" \"draw me the diagram / give me the html architecture picture\" \"is this defensible / where's the moat\" \"structure the pilot deal / price it\""
  },
  {
   "ref": "skill:guardrail-design",
   "kind": "skill",
   "title": "guardrail-design",
   "stage": "07",
   "subtitle": "Turns \"how do we stop it doing something bad?\" into a spec a build can enforce.",
   "text": "guardrail-design fires when a fellow needs to decide how an ai product is stopped from doing the wrong thing — \"design the guardrails\", \"when does a human sign off\", \"how do we handle failures / bad outputs\", \"what confidence threshold should we auto-approve at\", \"where do we put the human in the loop\". returns a guardrail spec: every failure mode placed on a cost-of-error × volume matrix, a three-layer stack (rules in code → confidence threshold → human sign-off) sized per mode, a derived confidence threshold, and a human-sign-off trigger for every high-cost / low- confidence path. do not fire to derive the acceptable failure rate or pick the autonomy level (use eval-first-spec), to lay out the whole component pipeline (use compound-system-architecture), or to decide whether a human can now be removed because accuracy has held (use refine-flywheel). turns \"how do we stop it doing something bad?\" into a spec a build can enforce. design the guardrails for our ai product. when does a human need to sign off on this? how should we handle failures / bad outputs? what confidence threshold should we auto-approve at? we can't let it do x wrong unsupervised — where do we put the human in the loop? the uniform stack uncalibrated confidence sign-off that fails open rubber-stamp by over-flagging \"what acceptable failure rate per mode / which autonomy level l0–l4\" \"design the whole ai system / the component pipeline / the effort split\" \"we've held accuracy for a month — can we drop the human sign-off now\" \"structure the pilot / price it / what's the commercial success metric\""
  },
  {
   "ref": "skill:pilot-six-term-sheet",
   "kind": "skill",
   "title": "pilot-six-term-sheet",
   "stage": "07",
   "subtitle": "Takes a fellow's proposed pilot and forces a binary check: a real paid pilot, or unpaid work with a slide deck.",
   "text": "pilot-six-term-sheet turn a would-be pilot into a six-term paid-pilot sheet — scope, price (paid or prepaid), the signed data-rights clause, success metrics, kill criteria, and conversion terms priced now — and refuse to call anything a pilot unless all six terms are non-empty. fires on \"pilot terms\", \"structure the deal\", \"paid pilot\", \"pilot term sheet\", \"structure the pilot so it isn't a free trial\". not for brainstorming or validating which revenue model to bet on (that is `monetization-strategy`, exploratory; this commits one basis to price the conversion term now), not for drafting the data-rights legal language (that is `data-rights-clause`, section 06; this carries the clause as term 3 and routes there), not for testing whether the thing will get adopted at all (that is `wedge-five-questions`). takes a fellow's proposed pilot and forces a binary check: a real paid pilot, or unpaid work with a slide deck. structure the pilot terms for this deal. help me structure the deal with this customer. how do i set up a paid pilot? write me a pilot term sheet. structure the pilot so it isn't a free trial.  \"brainstorm 3–5 revenue models for the product and validate willingness to pay\" \"draft the actual data-rights legal clause / the language we put in the contract\" \"is this even the right first thing to build / will it get adopted?\""
  },
  {
   "ref": "skill:value-based-pricing",
   "kind": "skill",
   "title": "value-based-pricing",
   "stage": "07",
   "subtitle": "Takes a validated product and returns one price on one metric, both defended.",
   "text": "value-based-pricing set the price and the charging metric for a validated product — anchor the number at 10–20% of the measured incremental value, and charge on the outcome / asset / decision the customer gets, never on seats or tiers. emits a value-priced model. fires on \"how should we price this\", \"what do we charge\", \"per seat or per outcome\", \"set the price\", \"what's the number\". not for brainstorming which revenue model to bet on across the product (that is `monetization-strategy`, exploratory; this commits one value-anchored number on one metric), not for structuring the whole pilot deal — scope, success metrics, kill criteria (that is `pilot-six-term-sheet`; this produces the price and metric that become its term 2 and term 6), not for measuring the value in the first place (that is `current-state-map`, which prices the status quo this consumes). takes a validated product and returns one price on one metric, both defended. how should we price this? what do we charge, and on what? should we price per seat or per outcome? set the price for the pilot conversion. are we charging on the right thing / the right metric?  \"brainstorm 3–5 revenue models and test which one to bet on\" \"structure the whole pilot deal — scope, data-rights, success metrics, kill criteria, conversion\" \"how is this done today / what does the status quo cost / what is it worth\" \"what does one outcome cost us to produce\""
  },
  {
   "ref": "skill:v1-launch-bar",
   "kind": "skill",
   "title": "v1-launch-bar",
   "stage": "07",
   "subtitle": "Turns \"I think we're ready\" into a go / no-go decision made on recorded evidence, not opinion.",
   "text": "v1-launch-bar gate a built v1 to go / no-go on two recorded tests — a true stranger reaches first correct value in ≤60 seconds unaided, and the learn-from-corrections mechanism is wired and proven to compound (the thing 95% of enterprise pilots never deliver). output is a recorded-evidence go / no-go checklist. fires on \"are we ready to launch\", \"is v1 good enough\", \"launch bar\", \"go/no-go on v1\", \"should we ship this pilot\". not the ongoing post-launch loop or cadence (use refine-flywheel), not pilot price / terms / commercial success metric (use pilot-six-term-sheet), not defining what \"working\" means or the golden-set + cost spec before code (use eval-first-spec). turns \"i think we're ready\" into a go / no-go decision made on recorded evidence, not opinion. are we ready to launch? is v1 good enough to ship? run it against the launch bar. give me the go/no-go on v1. should we ship this pilot?  \"how do we keep improving the product / what's the monthly cadence / run the loop / what happens after launch\" \"how do we price the pilot / what are the terms / set the commercial success metric\" \"define what working means / write the golden set / what's the cost-per-outcome\" \"how should we run the user observation / who watches / how do we avoid leading\""
  },
  {
   "ref": "skill:refine-flywheel",
   "kind": "skill",
   "title": "refine-flywheel",
   "stage": "08",
   "subtitle": "Turns a shipped product into a loop that compounds.",
   "text": "refine-flywheel stands up the post-launch loop for a shipped ai product — ship behind sign-off → observe tweak-time (how much the customer edits before accepting) → learn by re-running the whole eval set on every model release → refine by promoting autonomy only as a scored eval result, never by feel. fires on \"what happens after launch\", \"improve the product\", \"set up the loop\", \"a new model dropped, should we upgrade\", \"can we raise the autonomy / drop the sign-off yet\". returns a filled flywheel cadence doc. not for which metrics/north star/retention to track (use metrics-that-matter), not for turning one trace into a discovery interview (use trace-to-interview), not for writing the eval set or autonomy ladder in the first place (use eval-first-spec — this re-runs what that created). turns a shipped product into a loop that compounds. what happens after we launch? set up the loop / improve the product now that it's shipped. the loop — ship, observe, learn, refine — how do we run it? a new model just came out — should we upgrade the product to it? can we raise the autonomy level / drop the sign-off yet?  \"which metrics / what's our north star / does retention flatten / cost-per-outcome dashboard\" \"turn these production traces into interviews / what unmet need do the logs reveal\" \"write the golden cases / set the autonomy level / define what working means\" \"keep the opportunity tree alive / set up continuous discovery\""
  },
  {
   "ref": "skill:trace-to-interview",
   "kind": "skill",
   "title": "trace-to-interview",
   "stage": "08",
   "subtitle": "Reads production traces as interviews that already happened.",
   "text": "trace-to-interview turns a set of production traces into discovery interviews — recovering, for each behaviour pattern, the discovery question the user answered by acting instead of talking. fires on \"learn from usage\", \"mine the logs\", \"what are our production traces telling us\", \"turn usage data into discovery\", \"what are users saying in the logs\". outputs a trace-interview log: one card per behaviour pattern with the observed behaviour [fact, 0.7], the discovery question it answers, the inferred jtbd/satisfaction signal [hypothesis], distinct-user weight, the confirm-the-why probe, and the cost of the scheduled interview it replaced — routed to continuous-discovery-engine as a feed-2 signal. not the aarrr/retention/north-star scorecard (use metrics-that-matter — that keeps the number; this recovers the question behind it), not structuring a recorded human interview transcript (use summarize-interview — that is words at 0.3; this is behaviour at 0.7), not standing up the whole three-feed discovery loop and its cadence (use continuous-discovery-engine — this decodes one feed and hands the cards up). reads production traces as interviews that already happened. mine our logs — what are users telling us? turn our production traces into discovery questions. learn from our usage / learn from how people actually use it. what job aren't we finishing? read it off the usage. what are our production traces telling us about intent? metric relapse borrowing the behaviour's rung for the why trace worship reading acceptance as trust optimising the number instead of answering the question \"build the retention curve / north star / aarrr dashboard.\" \"summarise this recorded customer interview / transcript.\" \"stand up the whole discovery loop — interviews + traces + evals, on a cadence.\" \"prep and run a live tacit-knowledge interview with an operator.\""
  },
  {
   "ref": "skill:metrics-that-matter",
   "kind": "skill",
   "title": "metrics-that-matter",
   "stage": "08",
   "subtitle": "Turns \"what should we measure?\" into a one-page scorecard with a single North Star, an AARRR skeleton, a retention curve that must flatten, and a cost-per-outcome to the cent.",
   "text": "metrics-that-matter fires when a fellow asks which numbers matter for a launched product — \"what metrics should we track\", \"what should our north star be\", \"is our retention any good / does the curve flatten\", \"our mau is up-and-to-the-right, is that real or vanity\", \"what's our cost per outcome\". returns a metric scorecard: one customer-centric north star, an aarrr one-metric skeleton, the flattening-retention truth test that gates the north star, and cost-per-outcome priced to the cent. do not fire to design the post-launch improvement loop or promote autonomy (use refine-flywheel), to turn production traces into discovery interviews (use trace-to-interview), or to build the actual cohort dashboard, sql, or alert thresholds (use the m9 retention-dashboard / cohort-analysis skills). turns \"what should we measure?\" into a one-page scorecard with a single north star, an aarrr skeleton, a retention curve that must flatten, and a cost-per-outcome to the cent. what metrics should we track for the handover drafter now it's live? what should our north star be? is our retention any good — does our cohort curve actually flatten? our mau is up-and-to-the-right. is that real or is it vanity? what's our cost per outcome, and which numbers actually matter post-launch? the up-and-to-the-right lie north star as output, not outcome the margin that inverts at scale retention with no denominator of use \"design the after-launch loop — ship, observe, promote autonomy by eval\" \"mine our production traces / turn usage logs into discovery interviews\" \"build the cohort dashboard, write the sql, set the alert thresholds\" \"validate a north star against the 7 nsm criteria / classify the business game\" \"work out cac, ltv, payback, contribution margin\""
  },
  {
   "ref": "skill:agent-design",
   "kind": "skill",
   "title": "agent-design",
   "stage": "09",
   "subtitle": "Turns \"we want an agent for this\" into a spec built from four parts, in order of how much of it the fellow actually owns: a role stated as one decision the agent owns at a chosen autonomy level; the minimum tool set, eac",
   "text": "agent-design fires when a fellow is designing one production agent and asks what it should be built from — \"design an agent for x\", \"what tools and memory does this agent need\", \"spec the agent\", \"our agent isn't getting smarter / never remembers corrections — how do we build its memory\". returns a four-part agent spec — role (one owned decision) · tools (the commodity shell) · memory layer (claude.md · skills · lessons.md · trace archive, loaded at birth) · eval — where the memory layer is the only part the fellow owns and therefore the only part that compounds. do not fire for the agent's voice / persona / signature phrases (use meta/agent-persona-builder), the multi-agent fleet or hand-offs (use workflow-design), writing its golden cases / autonomy level / cost budget (use eval-first-spec — this skill routes there and carries the number), or the post-launch ship-observe-learn-refine loop and autonomy-raise (use refine-flywheel). turns \"we want an agent for this\" into a spec built from four parts, in order of how much of it the fellow actually owns: a role stated as one decision the agent owns at a chosen autonomy level; the minimum tool set, eac design an agent for our shift-handover digest / permit review / incident triage. what tools and memory should this agent have? spec the agent — role, tools, what it remembers. our agent repeats the same mistakes every run and never remembers corrections — how should its memory layer be built? should this even be an agent, and if so what does it need to remember to get better over time?  \"give it a personality / voice / signature phrases / make it sound like someone\" \"design the fleet / how do the agents hand off / who spawns whom\" \"write the golden cases / set the autonomy level / what's the cost-per-outcome\" \"what's the post-launch loop / should we raise autonomy / re-run on the new model\" \"how do we build this ai system / the component pipeline / the effort split\""
  },
  {
   "ref": "skill:workflow-design",
   "kind": "skill",
   "title": "workflow-design",
   "stage": "09",
   "subtitle": "Turns \"I'll spin up some agents\" into a directed workflow of specialised agents, each summoned by a rule and dismissed by a rule, run across the three surfaces where the work actually belongs.",
   "text": "workflow-design fires when a fellow needs to coordinate more than one agent to get the work done — \"design the workflow\", \"orchestrate the agents\", \"set up the fleet\", \"how do the agents work together\", \"which agents do i need and when do they spawn\", \"multi-agent setup\". returns a workflow + fleet map: the multi-step orchestration, a spawn-by-rule fleet (researcher, analyst, prototyper, drafter, critic) each with an observable spawn trigger, and a think/build/admin surface assignment (claude.ai / claude code / cowork), then kills a single-agent design where a fleet is needed and any spawn rule with no trigger. do not fire to spec one agent's role/tools/memory (use agent-design), to design the product's internal request-time pipeline of input→router→reason→validate (use compound-system-architecture), or to write the pass/fail eval (use eval-first-spec). turns \"i'll spin up some agents\" into a directed workflow of specialised agents, each summoned by a rule and dismissed by a rule, run across the three surfaces where the work actually belongs. help me design the workflow for building barrier's alert rules — how should the agents work together? how should i orchestrate the agents for this build? what's the fleet? which agents do i need and when does each one spawn? set up the multi-agent workflow — who does what, and how do they hand off? i keep doing everything in one claude code session; how do i split this across agents and surfaces? the tab-switching fleet the self-critiquing drafter over-orchestration wrong surface loops with no exit \"spec one agent — its role, tools, and memory layer\" \"design the product's system: input → router → retrieve → reason → validate → output\" \"write the golden cases and the acceptable failure rate\" \"make the ui / craft the interface\""
  },
  {
   "ref": "skill:fellow-level-ladder",
   "kind": "skill",
   "title": "fellow-level-ladder",
   "stage": "10",
   "subtitle": "Places one fellow on a five-rung ladder and returns the one artefact that moves them up.",
   "text": "fellow-level-ladder assess where one fellow sits on the icarus ladder — literate → practitioner → operator → frontier → author — by checking which exit artefact each level requires actually exists and can be cited, never by how ready the fellow feels. fires on \"how's this fellow doing\", \"assess a fellow\", \"what level am i / is this fellow at\", \"am i ready to level up\", \"level up this fellow\". output is a filled level assessment: the ladder table with a cited artefact and evidence rung per rung, the assigned level (highest level with an unbroken artefact chain beneath it), and the single next exit artefact to produce plus the skill that produces it. self-assessment on feelings / confidence / tenure is banned and scored 0.1. not the build-vs-buy boundary of what daedalus gives the fellow (use platform-vs-venture, sibling in section 10 — this reads that map only for the author rung), not where a fellow should start or which stages fit their type (use fellow-path-router, section 00), not re-running an artefact's own gate (problem-quality-scorecard / pilot-six-term-sheet / evidence-ladder — this cites their verdicts, it does not re-derive them). places one fellow on a five-rung ladder and returns the one artefact that moves them up. how's this fellow doing? assess mentix / where is this fellow on the ladder? what level am i at right now? am i ready to level up? level up this fellow — what's the next rung? claimed level is not held level the gap trap stale artefact author inflation don't over-drama the low rungs the line between what daedalus builds once and what the fellow owns (build vs buy, \"what does the platform give me\") where to start / which icarus stages apply to their type (blank page vs traction vs mature product) to score the problem / check the pilot is real / weight a discovery signal"
  },
  {
   "ref": "skill:platform-vs-venture",
   "kind": "skill",
   "title": "platform-vs-venture",
   "stage": "10",
   "subtitle": "Takes the components of a fellow's AI build and assigns each one to a lane: Platform (Daedalus builds it once, every venture inherits it), Venture (the fellow builds it, it is their moat), or Buy (a vendor rents it, it is nobody's moat).",
   "text": "platform-vs-venture draws the ownership line for an ai build. for every component it decides one of three things: daedalus (the studio platform) builds it once and the fellow inherits it, the fellow builds it because it is their moat, or it is a rented commodity. fires on \"build vs buy\", \"build or use the platform\", \"what does daedalus give me\", \"do we build our own eval harness / rag / router\", \"what's ours vs the studio's\", \"should we build our own model\". returns a build/buy boundary map that splits each component into platform substrate (inherit) and domain signal (build), and kills two errors: rebuilding a platform primitive, or buying/outsourcing what is actually the moat. not for sequencing the moat into dated gates (use moat-design-canvas), not for laying out the component pipeline and effort split (use compound-system-architecture — run it first), not for writing the actual guardrail rules and thresholds (use guardrail-design). takes the components of a fellow's ai build and assigns each one to a lane: platform (daedalus builds it once, every venture inherits it), venture (the fellow builds it, it is their moat), or buy (a vendor rents it, it is nobody's moat). build vs buy on this build or use the platform? what does daedalus give me? do we build our own eval harness / rag / router? should we build our own model?  \"lay out the component pipeline and the data/model/orch/interface effort split\" \"sequence our moat into dated gates with falsifiers\" \"write the actual guardrail rules and thresholds / the sign-off matrix\" \"which icarus stages apply to me / what type of fellow am i\" \"spec the agent's tools and memory / design the fleet\""
  },
  {
   "ref": "skill:icarus-golden-rules",
   "kind": "skill",
   "title": "icarus-golden-rules",
   "stage": null,
   "subtitle": "Puts the studio's method in front of Claude before it judges anything.",
   "text": "icarus-golden-rules loads the icarus golden rules — the evidence ladder (money 1.0 / behaviour 0.7 / artefact 0.5 / commitment 0.3 / opinion 0.1), the [fact]/[assumption]/[hypothesis] tag rule, the five challenge questions, the 21/25 rubric and its four auto-fails — before any product judgement is made. fires on \"what are the rules\", \"how do we score this\", \"is this up to standard\", \"review this against our method\", \"did this skill do its job\", and whenever an output is about to claim something is validated, de-risked, or ready. not the router for which stage to run (use fellow-path-router), not a weighting of one evidence pile (use evidence-ladder), not the whole-idea five-question gate (use so-what-stress-test). puts the studio's method in front of claude before it judges anything.   "
  },
  {
   "ref": "skill:lessons",
   "kind": "skill",
   "title": "lessons",
   "stage": null,
   "subtitle": "Keeps lessons/LOG.md honest and short.",
   "text": "lessons reads and writes the hub's append-only lessons log — what the studio learned the hard way, and what rule it changed. fires on \"log a lesson\", \"what did we learn\", \"we got this wrong\", \"add this to lessons\", \"have we hit this before\", \"post-mortem this\", and at the end of any fellow session worth remembering. also fires before product work to check whether a known lesson already applies. not a retro facilitation format, not a meeting-notes summariser, not the graduation eval log (that lives in each skill's tests/results.md). keeps lessons/log.md honest and short.   "
  },
  {
   "ref": "rule:1",
   "kind": "rule",
   "title": "Rule 1 — Evidence is weighted by what people did, not what they said",
   "subtitle": "",
   "text": "rule 1 evidence is weighted by what people did, not what they said one ladder, used identically everywhere in the hub. \n     rung  weight  counts only when  common impostor → downgrade to      money moved  1.0  cash or budget actually changed hands — invoice paid, deposit, pre-order, paid pilot  a signed loi or quote with no payment → verbal 0.3    behaviour observed  0.7  you saw them do it (or hold the logs); it cost them time, effort, or switching; unprompted  a self-reported routine you did not witness → verbal 0.3; a free one-click sign-up → verbal 0.3    artefact shown  0.5  they showed you a thing they made or use — a spreadsheet, a workaround, their permit log  a reaction to a mockup you made → opinion 0.1    verbal commitment  0.3  a specific promise about the future — &quot;i'd pay $x&quot;, &quot;we'd switch by q3&quot;  vague praise (&quot;great idea&quot;, &quot;we'd love that&quot;) → opinion 0.1    opinion  0.1  a view, a feeling, a prediction — &quot;i think&quot;, &quot;everyone needs this&quot;  — floor: never below, never above     \n three rules on top of the table: \n   rungs do not stack.  fifty people saying yes is still 0.3. the only thing that raises a claim is one signal at a higher rung, not more signals at the same one.   a claim's weight is its best rung, never the sum.  three verbal yeses is 0.3, not 0.9.   never average the pile.  a mean lets one payment launder a stack of opinion. report the load-bearing claim's weight plus a coverage tally.  \n scoring an opinion above 0.1 fails the skill."
  },
  {
   "ref": "rule:2",
   "kind": "rule",
   "title": "Rule 2 — Tag every empirical claim",
   "subtitle": "",
   "text": "rule 2 tag every empirical claim [fact] ,  [assumption] , or  [hypothesis] . untagged guesses presented as facts are an auto-fail."
  },
  {
   "ref": "rule:3",
   "kind": "rule",
   "title": "Rule 3 — Challenge before you help",
   "subtitle": "",
   "text": "rule 3 challenge before you help weak input gets named, not softened. every skill must push back, name the gaps and kill criteria, and say what would change its view. flattering a weak idea instead of challenging it is an auto-fail. \n the five whole-idea questions (  so-what-stress-test  ), run silently on anything proposed: \n   so what?  what outcome changes if this works?   who pays?  buyer, budget owner, why now?   what's the wedge?  smallest thing that forces adoption.   what's the moat?  data rights, workflow lock-in, distribution, regulation, domain edge.   what kills it?  top three failure modes, and the fastest way to know.  \n no question passes on opinion alone."
  },
  {
   "ref": "rule:4",
   "kind": "rule",
   "title": "Rule 4 — Never fabricate",
   "subtitle": "",
   "text": "rule 4 never fabricate no specific number, quote, or citation that was not in the input. empty input is a request for evidence, not a zero: ask the one classifying question and stop. do not emit a headline score over nothing."
  },
  {
   "ref": "rule:5",
   "kind": "rule",
   "title": "Rule 5 — Stay in scope",
   "subtitle": "",
   "text": "rule 5 stay in scope each skill names its siblings and hands off rather than poaching. firing outside trigger scope is an auto-fail. generic pm boilerplate is an auto-fail — if a generic prompt could have produced the output, the skill did no work."
  },
  {
   "ref": "rule:6",
   "kind": "rule",
   "title": "Rule 6 — The scoring rubric, unchanged across all 45 skills",
   "subtitle": "",
   "text": "rule 6 the scoring rubric, unchanged across all 45 skills pass threshold 21/25, no dimension below 4. \n     dimension  weight  bar       methodfidelity   5  follows the icarus method exactly; no steps skipped or softened.     artifactcomplete   5  produces the named artifact, fully filled, with the required numbers and citations.     proprietaryedge   5  could not have come from a generic prompt. uses first-principles / evidence-ladder / eval logic.     challenge   5  pushes back on weak input; names gaps, kill criteria, and what would change the view.     evidencestandard   5  weights money and behaviour over opinion; tags claims  fact / assumption / hypothesis .     \n auto-fail, any one of: \n  fabricated a specific number, quote, or citation not in the input  flattered a weak idea instead of challenging it  fired outside its trigger scope / poached a sibling skill  output is generic pm boilerplate"
  },
  {
   "ref": "rule:7",
   "kind": "rule",
   "title": "Rule 7 — Six gates before a skill graduates",
   "subtitle": "",
   "text": "rule 7 six gates before a skill graduates scored by a judge agent separate from the author. \n   trigger precision  — fires on 5/5 wanted phrasings, 0/3 siblings.   golden set  — ≥21/25 on every case, no dimension below 4.   adversarial  — survives the vague one-liner, the solution-in-disguise, and the out-of-scope ask without fabricating or flattering.   head-to-head  — a superseding skill must beat the skill it replaces on the same inputs.   anti-generic  — its output could not have come from a generic pm prompt.   used 5+ times in real fellow work  — completes in use. log each miss as a gotcha and re-run the set.  \n golden cases come from real fellow work: azraq, mentix, barrier intelligence, durian."
  },
  {
   "ref": "rule:8",
   "kind": "rule",
   "title": "Rule 8 — Judgment, not steps",
   "subtitle": "",
   "text": "rule 8 judgment, not steps &quot;a skill that is only a checklist gets sent back. include a concrete 'what good looks like,' real numbers where you score things, and at least one worked example.&quot;"
  },
  {
   "ref": "rule:9",
   "kind": "rule",
   "title": "Rule 9 — Fold or reject; never vendor wholesale",
   "subtitle": "",
   "text": "rule 9 fold or reject; never vendor wholesale &quot;every market skill is, by default, folded into an existing studio skill or rejected. it is never added as new surface, and never vendored wholesale.&quot; \n every skill claude can load costs context on every session, for every fellow. net-new surface has to earn that recurring cost, not just be good in isolation. adoption and behaviour outrank author opinion: install counts and real usage are evidence, a readme's self-description is not."
  },
  {
   "ref": "rule:10",
   "kind": "rule",
   "title": "Rule 10 — Don't re-run a stage you have already earned",
   "subtitle": "",
   "text": "rule 10 don't re-run a stage you have already earned the biggest waste is not skipping a stage, it is re-running one whose answer you already hold in behaviour or money. subtract stages you have evidenced past. refuse to leap a stage you only feel you have done. type is graded to the highest rung the fellow can actually show, and it rounds down, never up."
  },
  {
   "ref": "agent:icarus-critic",
   "kind": "agent",
   "title": "icarus-critic",
   "subtitle": "Adversarial reviewer for any product claim, PRD, deck, or pilot plan.",
   "text": "icarus-critic adversarial reviewer for any product claim, prd, deck, or pilot plan. grades the work against the icarus golden rules and returns a verdict, not encouragement. use when a fellow says an idea is validated, de-risked, or ready; when a document is about to go to qdb or an investor; or when a build week is about to be booked. refuses to pass any claim carried by opinion alone."
  },
  {
   "ref": "command:/icarus",
   "kind": "command",
   "title": "/icarus",
   "subtitle": "Route a fellow or a product through the Icarus stages — which apply, which to skip, and in what order.",
   "text": "/icarus route a fellow or a product through the icarus stages — which apply, which to skip, and in what order. fellow-path-router concept-council"
  },
  {
   "ref": "command:/lesson",
   "kind": "command",
   "title": "/lesson",
   "subtitle": "Log what the studio learned the hard way into the append-only lessons log.",
   "text": "/lesson log what the studio learned the hard way into the append-only lessons log. lessons"
  },
  {
   "ref": "command:/stress-test",
   "kind": "command",
   "title": "/stress-test",
   "subtitle": "Pressure-test a whole idea across the five business questions and return Pass, Redesign, or Kill.",
   "text": "/stress-test pressure-test a whole idea across the five business questions and return pass, redesign, or kill. so-what-stress-test wedge-five-questions moat-design-canvas"
  },
  {
   "ref": "lesson:2026-09-14",
   "kind": "lesson",
   "title": "Eleven graduated skills shipped with frontmatter that will not parse",
   "subtitle": "2026-09-14",
   "text": "2026-09-14 eleven graduated skills shipped with frontmatter that will not parse what happened.  copying the 45 icarus skills into this hub, a strict yaml check found 11 whose  description  is an unquoted scalar containing  &quot;: &quot;  —  output: a concierge log ...  and similar. strict parsers reject the whole block, so the skill does not load. all 11 had passed six graduation gates, including trigger precision, which is scored by reading the description rather than by loading the skill. \n  evidence.  eleven parse failures, reproduced, each fixed and round-trip verified.  [fact]  \n  cost.  unknown but non-zero: any fellow session where one of these silently failed to load got generic answers instead of the studio method, with no error to notice. \n  lesson.  a human-graded gate cannot catch a machine-parse failure. trigger precision was scored on the words in the description, never on whether the file loads. \n  changes.   tools/scripts/validate-skills.mjs  fails on any plain scalar containing  &quot;: &quot; , and runs before every commit. gate 1 should mean &quot;loads, then fires&quot; — proposed addition to rule 7 in  golden_rules.md , for ollie to accept or reject. fix is worth porting upstream to  the-utopia-studio/skills ."
  },
  {
   "ref": "lesson:2026-09-14",
   "kind": "lesson",
   "title": "Icarus skills were unreachable from a Claude session because of repo ownership",
   "subtitle": "2026-09-14",
   "text": "2026-09-14 icarus skills were unreachable from a claude session because of repo ownership what happened.  setting this hub up, the session could not read  the-utopia-studio/icarus  work: claude code scopes github access to one owner per session, and a cross-owner attach is refused outright. two attempts and a clone all failed before the public  the-utopia-studio/skills  repo turned out to hold the same 45 skills. \n  evidence.  tool refusal, reproduced twice, plus an unauthenticated clone failure.  [fact]  \n  cost.  roughly twenty minutes of a build session, and a plan written against the wrong assumption that the source was unavailable. \n  lesson.  anything fellows or agents need to load at session start must sit in a public repo or under the same owner as the working repo. private cross-org skills are invisible to the tool that is supposed to use them. \n  changes.  hub readme states the source repo and commit up front. no rule change in  golden_rules.md ."
  },
  {
   "ref": "lesson:2026-09-14",
   "kind": "lesson",
   "title": "A vendored external repo is still sitting inside the studio skill set",
   "subtitle": "2026-09-14",
   "text": "2026-09-14 a vendored external repo is still sitting inside the studio skill set what happened.   product-manager-skills  was added to the marketplace as a whole external repo — readme, changelog, license,  package.json ,  bin/ ,  docs/ ,  templates/  all still present — rather than folded into an existing studio skill. it is the exact failure mode  market-skill-ingestion  exists to stop, and it shipped anyway. \n  evidence.  directory listing of the vendored folder, and the skill's own skill.md naming it as the failure case.  [fact]  \n  cost.  context on every session for every fellow who installs the product pack. one useful idea carried under a repo's worth of dead weight. \n  lesson.  the ingestion rule only holds if someone runs it before merge, not after. an external skill enters folded or it does not enter. \n  changes.  this hub carries only the 45 icarus skills plus two written here. rule 9 in  golden_rules.md  is the gate for anything added later."
  },
  {
   "ref": "rebuild:agent-watchdog",
   "kind": "rebuild",
   "title": "agent-watchdog",
   "subtitle": "Babysit / audit another agent's session, PR, or branch.",
   "text": "agent-watchdog fires when asked to watch, babysit, audit, or compare another agent's session, transcript, pr, branch, or run summary — \"check what claude did\", \"watch this until done\", \"fix the gaps\". reconstructs the original ask, inspects evidence, reports gaps. default is audit-only. do not fire for ordinary code review with no other-agent run, or for icarus product-claim grading (use icarus-critic)."
  },
  {
   "ref": "rebuild:efficient-frontier",
   "kind": "rebuild",
   "title": "efficient-frontier",
   "subtitle": "Frontier model as judge; cheaper agents for gather / code / test.",
   "text": "efficient-frontier fires when a high-cost frontier model is about to do token-heavy gather, scan, code, or test work that cheaper subagents can bound — \"don't burn the expensive model on the repo walk\", \"orchestrate, then delegate\". frontier keeps planning, tradeoffs, integration, and final review. do not fire for solo work one agent can finish (use agent-design), or for product fleet design (use workflow-design)."
  },
  {
   "ref": "rebuild:plan-arbiter",
   "kind": "rebuild",
   "title": "plan-arbiter",
   "subtitle": "Two or more agent plans; pick one executable direction.",
   "text": "plan-arbiter fires when two or more agent plans must be compared, merged, or judged — \"pick between codex and claude's plans\", \"merge these\", \"which plan should we execute\". returns one executable handoff with rejected alternatives. do not fire for a single plan, for implementing before a decision, or for speccing a fleet (use workflow-design)."
  },
  {
   "ref": "rebuild:plow-ahead",
   "kind": "rebuild",
   "title": "plow-ahead",
   "subtitle": "User said go; stop asking which reasonable option they prefer.",
   "text": "plow-ahead fires when the user has already said go — \"plow ahead\", \"keep going until done\", \"use your best judgment\", \"don't stop for questions unless blocked\", \"finish while i'm away\". converts ordinary ambiguity into tagged assumptions, picks the reversible choice, validates, and recaps. do not fire when they asked to compare options, wait for approval, or brainstorm. not a product stage skill."
  },
  {
   "ref": "rebuild:quick-recap",
   "kind": "rebuild",
   "title": "quick-recap",
   "subtitle": "End the turn with a red / yellow / green completeness claim.",
   "text": "quick-recap fires when a unit of agent work is ending and the completion state must be obvious — \"give me a status\", \"red yellow green\", \"are we done\". ends the response with one coloured completeness claim. do not fire mid-task, as a substitute for a recap of decisions (use plow-ahead), or as a product verdict (use so-what-stress-test / icarus-critic)."
  },
  {
   "ref": "rebuild:read-the-damn-docs",
   "kind": "rebuild",
   "title": "read-the-damn-docs",
   "subtitle": "Integrating or debugging a vendor API / library / CLI.",
   "text": "read-the-damn-docs fires before integrating, upgrading, debugging, or answering current behaviour of a third-party api, library, cli, cloud, or model sdk — \"add stripe\", \"what's the current ai sdk import\", \"this next cache is wrong\". fetch official docs for the installed or target version before coding from memory. do not fire for typo-level edits or for icarus method questions (use icarus-golden-rules)."
  },
  {
   "ref": "rebuild:stay-within-limits",
   "kind": "rebuild",
   "title": "stay-within-limits",
   "subtitle": "Long or parallel waves that can exhaust a usage window.",
   "text": "stay-within-limits fires on long-running or parallel agent waves that can exhaust a host usage window — \"don't blow the cap\", \"check usage between waves\", \"pause if we're near the limit\". check real usage before launching the next wave; pause with a self-contained resume. do not fire for a single short turn, and do not invent a percentage when the host has no usage signal."
  }
 ]
};
