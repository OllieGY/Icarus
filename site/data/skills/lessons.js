window.ICARUS_SKILL("lessons", {
 "name": "lessons",
 "sections": [
  {
   "heading": "What it does",
   "key": "what",
   "slug": "what-it-does",
   "html": "<p>Keeps <code>lessons/LOG.md</code> honest and short. Two directions:</p>\n<p><strong>Read first.</strong> Before any Icarus stage runs on a fellow's problem, scan the log for an entry whose trigger matches. A lesson already paid for should not be paid for twice.</p>\n<p><strong>Write after.</strong> When something went wrong, surprised the room, or changed how the studio operates, append one entry using <code>lessons/TEMPLATE.md</code>. Newest first.</p>"
  },
  {
   "heading": "The bar for an entry",
   "key": null,
   "slug": "the-bar-for-an-entry",
   "html": "<p>A lesson is not a note. It earns its line only if it names what would have to be true for the studio to do it differently next time. Three tests:</p>\n<div class=\"table-wrap\"><table><thead><tr><th>Test</th><th>Fails if</th></tr></thead><tbody><tr><td><strong>Specific</strong></td><td>It names a fellow, a date, a number. &quot;Communicate better&quot; is not a lesson.</td></tr><tr><td><strong>Costly</strong></td><td>Something was actually lost — time, a pilot, credibility, a wrong build. A near-miss counts if the cost is named.</td></tr><tr><td><strong>Actionable</strong></td><td>It says which rule, skill, or default changes. A lesson that changes nothing is a war story; put it somewhere else.</td></tr></tbody></table></div>\n<p>If an entry fails any of the three, say so and ask for the missing half rather than writing a soft version.</p>"
  },
  {
   "heading": "Method",
   "key": "method",
   "slug": "method",
   "html": "<ol><li>Ask what happened, in the fellow's own words. Do not paraphrase it into studio jargon yet.</li><li>Place the evidence on the ladder (see <a class=\"skill-ref\" href=\"#/skill/icarus-golden-rules\"><code>icarus-golden-rules</code></a>). A lesson drawn from one person's opinion is a hypothesis, tag it that way.</li><li>Name the decision that would change. Which rule in <code>GOLDEN_RULES.md</code>, which skill, which default.</li><li>Write the entry into <code>lessons/LOG.md</code> at the top, filled from <code>lessons/TEMPLATE.md</code>.</li><li>If the lesson changes a golden rule, say so out loud and stop — a rule change is Ollie's call, not an edit you make quietly.</li></ol>"
  },
  {
   "heading": "What good looks like",
   "key": null,
   "slug": "what-good-looks-like",
   "html": "<blockquote><p><strong>2026-03-11 — Mentix pilot scoped from a verbal yes.</strong> Ran three weeks of build on &quot;they said they'd deploy it plant-wide by Q3&quot; [Verbal 0.3] without a paid pilot. Procurement never opened a budget line. Cost: 3 engineering weeks. <strong>Lesson:</strong> a deployment promise without a budget owner named is 0.3, and 0.3 does not justify build. <strong>Changes:</strong> <a class=\"skill-ref\" href=\"#/skill/pilot-six-term-sheet\"><code>pilot-six-term-sheet</code></a> runs before any build week is booked.</p></blockquote>"
  },
  {
   "heading": "Gotchas",
   "key": "gotchas",
   "slug": "gotchas",
   "html": "<ul><li>Do not log the same lesson twice in different words. Search the log first; if it exists, strengthen the existing entry instead.</li><li>Resist logging outcomes (&quot;the pilot failed&quot;). Log the decision rule that would have changed the outcome.</li><li>A lesson about a person's performance is a management conversation, not a log entry.</li></ul>"
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
  "skill": "skills/lessons/SKILL.md",
  "template": null,
  "example": null,
  "rubric": null,
  "results": null
 }
});
