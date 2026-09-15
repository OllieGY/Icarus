window.ICARUS_SKILL("icarus-golden-rules", {
 "name": "icarus-golden-rules",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Puts the studio's method in front of Claude before it judges anything. Read <a href=\"#/rules\"><code>GOLDEN_RULES.md</code></a> in full, then apply the ten rules to whatever is being produced or reviewed. This skill is a component: other skills and agents cite it, it produces no artifact of its own.</p>"
  },
  {
   "heading": "When it fires",
   "key": "when",
   "slug": "when-it-fires",
   "html": "<p>Any time an output is about to assert quality, validation, or readiness. Any time someone asks how the studio scores something. Any time a skill's own output needs grading before it leaves the room.</p>"
  },
  {
   "heading": "The load-bearing four",
   "key": null,
   "slug": "the-load-bearing-four",
   "html": "<p>If you read nothing else:</p>\n<ol><li><strong>Weight by what people did.</strong> Money 1.0, behaviour 0.7, artefact 0.5, commitment 0.3, opinion 0.1. Rungs never stack. A claim's weight is its best rung, never the sum, never the average.</li><li><strong>Tag every empirical claim</strong> <code>[Fact]</code>, <code>[Assumption]</code>, or <code>[Hypothesis]</code>.</li><li><strong>Challenge before you help.</strong> Name the gap, the kill criteria, and what would change your view. Flattery is an auto-fail.</li><li><strong>Never fabricate.</strong> No number, quote, or citation that was not in the input. Empty input is a request for evidence, not a zero.</li></ol>"
  },
  {
   "heading": "Grading an output",
   "key": null,
   "slug": "grading-an-output",
   "html": "<p>Score 5 dimensions out of 5 each — method fidelity, artifact complete, proprietary edge, challenge, evidence standard. Pass is ≥21/25 with no dimension below 4. Any one of the four auto-fails voids the score regardless of the total:</p>\n<ul><li>Fabricated a specific number, quote, or citation not in the input</li><li>Flattered a weak idea instead of challenging it</li><li>Fired outside its trigger scope / poached a sibling skill</li><li>Output is generic PM boilerplate</li></ul>\n<p>Full dimension descriptions and the six graduation gates are in <code>GOLDEN_RULES.md</code>.</p>"
  },
  {
   "heading": "What good looks like",
   "key": null,
   "slug": "what-good-looks-like",
   "html": "<p>A grade that names the failing dimension and quotes the line that failed it. &quot;Scored 19/25 — <code>evidence_standard</code> 3/5: 'customers confirmed demand' cites four interview quotes (0.1) and one LOI with no payment (0.3), then calls the claim validated. Best real rung is 0.3. Rewrite the headline to 0.3 and name the cheapest probe to 1.0.&quot;</p>\n<p>A grade that says &quot;looks good, minor notes&quot; has failed the <code>challenge</code> dimension itself.</p>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li>Do not let a single payment launder a stack of opinion by averaging the pile.</li><li>A free one-click sign-up is 0.3, not 0.7. A reaction to a mockup you made is 0.1, not 0.5.</li><li>A fellow saying &quot;we're de-risked&quot; is itself an opinion (0.1) until the ladder says otherwise.</li></ul>"
  }
 ],
 "template": null,
 "example": null,
 "rubric": null,
 "results": null,
 "cases": {
  "golden": [],
  "adversarial": []
 },
 "files": {
  "skill": "skills/icarus-golden-rules/SKILL.md",
  "template": null,
  "example": null,
  "rubric": null,
  "results": null
 }
});
