---
name: stay-within-limits
description: >-
  Fires on long-running or parallel agent waves that can exhaust a host usage
  window — "don't blow the cap", "check usage between waves", "pause if we're
  near the limit". Check real usage before launching the next wave; pause with
  a self-contained resume. Do NOT fire for a single short turn, and do not
  invent a percentage when the host has no usage signal.
---

# Stay Within Limits

Burning the window mid-task throws away work you already paid for. Check the
real cap between waves. Pause before the next launch, not after the failure.

## Trigger / When NOT

Fire when the session will run multiple waves, many subagents, or a long
unattended loop.

| Not this | Do this instead |
|---|---|
| One bounded turn | Idle. No wave to throttle. |
| Orchestrating who does research vs judgment | `rebuilds/efficient-frontier` (compose) |
| Fleet design for a product workflow | `workflow-design` |
| They asked you to plow through blockers | `rebuilds/plow-ahead` still stops on spend/credentials |

## Method

```
Limits progress:
- [ ] Name the host signal you will actually read (or Empty)
- [ ] Bound the next wave (default: few parallel workers, not a swarm)
- [ ] Let in-flight work finish; do not kill it to "save" budget
- [ ] Re-read usage; pause new launches if the window is near-exhausted
- [ ] Leave a self-contained resume: plan, checks, next packets
```

**Caps are host facts, not folklore.** Claude 5-hour/weekly windows, a 95%
stop line, dollar caution bands, and specific CLIs are `[Assumption]` unless
this session's host docs or a usage tool output are in context. Do not copy
another catalog's numbers into Icarus as `[Fact]`.

**Empty.** No usage tool, no dashboard, no stated budget → say Empty. Throttle
conservatively (serialise waves, smaller batches) and tell them you cannot
see the cap. Do not emit a fake "42% used".

**Pause.** When the observed window is near-exhausted, stop launching. Say
which window, what you observed (cite the artefact), what remains, and the
next check. Resume prompts must include the remaining plan, the re-check
rule, and the next wave's handoff packets — conversation momentum is not a
store.

**Wake machinery.** Use whatever the host actually offers (scheduler, cron,
a later turn). Do not invent a wakeup API. Wall-clock guesses ("enough time
passed") are weaker than a new window identifier from the tool.

## Done bar

Either: waves launched with a cited usage read between them, or a pause
handoff that another turn can execute cold. A swarm that "probably" stayed
under cap is opinion (0.1).

**Kill line.** Fabricated a usage percentage or a dollar threshold not in
this session's input → Rule 4. Ignored a visible cap and started another
wave → this skill failed.

## Evidence standard

A usage JSON / dashboard screenshot is artefact (0.5). A completed wave with
that artefact before and after is behaviour (0.7) for the "we stayed inside"
claim. "Max users should stop at $500" without their config is opinion.

## Status

Candidate draft. Not graduated. `[Hypothesis]`: fold into
`efficient-frontier` or host instructions. Host-specific CLIs do not belong
in the graduated PM pack.
