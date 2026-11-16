> Illustrative fixture. Companies are fictional; numbers are plausible, not real client data.

# Worked example: one ledger, four wrappings

Two situations. In the first, the same findings are rendered four ways and the ledger does not move. In the second, a voice pack is on and the skill turns it off.

---

<!-- gold: 01 -->
## Situation 1: the stale version pin (Foundry Signal)

Findings, fixed before any render. Foundry Signal's web app pins its design-system package to `^0.7.0`. The latest release is `0.11.1`. On a `0.x` version a caret allows patch updates only, so the range can never reach `0.11.1`. A check called `design:doctor` exists but is not run in CI. The decision is to bump the pin and add the check to CI. The next owner is Tomas. [Fact, all given in the input]

The user asks: "Summarise the pin problem and who should fix it."

### 1a. Before: typical jargon, no layers

The design-system pin in `package.json` is `^0.7.0`. On a 0.x semver range a caret only allows patch bumps, so it will never resolve to `0.11.1`. `ci.yml` still doesn't invoke `design:doctor`. Tomas should bump the pin and wire the doctor into CI.

Correct, and closed to anyone who does not already know what a pin, a caret, semver and CI are.

### 1b. `raw`

## Substance
- Facts: The design-system package pin in package.json is ^0.7.0; latest is 0.11.1; design:doctor is defined but not run in CI
- Numbers: ^0.7.0; 0.11.1; 0.x
- Intent: Summarise the pin problem and who should fix it
- Decision: Bump the pin past the 0.x caret trap and add design:doctor to CI
- Next owner: Tomas

### 1c. `storyteller` (Layer 2 only)

The project is locked to an old version of its design system (the shared set of buttons, colours and layouts every screen is built from). The file that sets the version, `package.json`, says `^0.7.0`. The latest version is `0.11.1`.

What happened: the `^` in front is a caret, a mark that tells the installer how far it may update on its own. On a `0.x` version (any version that starts with zero) a caret only allows patch bumps, the smallest kind of fix. So `^0.7.0` can never reach `0.11.1`. A check that would catch this, `design:doctor`, already exists, but CI (continuous integration: the automatic checks that run on every change) never runs it.

Why it matters: the design system can sit on a stale version, and no automatic check will say so.

What's next: Tomas bumps the pin (the locked version) so it can reach `0.11.1`, and adds `design:doctor` to CI.

## Substance
- Facts: The design-system package pin in package.json is ^0.7.0; latest is 0.11.1; design:doctor is defined but not run in CI
- Numbers: ^0.7.0; 0.11.1; 0.x
- Intent: Summarise the pin problem and who should fix it
- Decision: Bump the pin past the 0.x caret trap and add design:doctor to CI
- Next owner: Tomas

### 1d. `pack:dungeon-crawler`, intensity 2

> **SYSTEM:** *Crawler, this floor has no boss. It has a door someone wedged shut and walked away from.*

The project is locked to an old version of its design system (the shared set of buttons, colours and layouts every screen is built from). The file that sets the version, `package.json`, says `^0.7.0`. The latest version is `0.11.1`.

What happened: the `^` in front is a caret, a mark that tells the installer how far it may update on its own. On a `0.x` version (any version that starts with zero) a caret only allows patch bumps, the smallest kind of fix. So `^0.7.0` can never reach `0.11.1`. A check that would catch this, `design:doctor`, already exists, but CI (continuous integration: the automatic checks that run on every change) never runs it.

Why it matters: the design system can sit on a stale version, and no automatic check will say so.

What's next: Tomas (party role: the Blacksmith; real job: he owns this fix) bumps the pin, the locked version, so it can reach `0.11.1`, and adds `design:doctor` to CI.

> **SYSTEM:** *Floor cleared, pending that side quest. XP awarded: none. XP is purely decorative, and the pin was never treasure. It is a latch.*

## Substance
- Facts: The design-system package pin in package.json is ^0.7.0; latest is 0.11.1; design:doctor is defined but not run in CI
- Numbers: ^0.7.0; 0.11.1; 0.x
- Intent: Summarise the pin problem and who should fix it
- Decision: Bump the pin past the 0.x caret trap and add design:doctor to CI
- Next owner: Tomas

### 1e. `pack:watch-officer`, intensity 2

Watch log, design-system version.

Status: the project is locked to an old version of its design system (the shared set of buttons, colours and layouts every screen is built from). The file that sets the version, `package.json`, says `^0.7.0`. The latest version is `0.11.1`.

What changed: nothing, and that is the problem. The `^` in front is a caret, a mark that tells the installer how far it may update on its own. On a `0.x` version (any version that starts with zero) a caret only allows patch bumps, the smallest kind of fix. So `^0.7.0` can never reach `0.11.1`. A check that would catch this, `design:doctor`, already exists, but CI (continuous integration: the automatic checks that run on every change) never runs it.

Risk if we hold this heading: the design system can sit on a stale version, and no automatic check will say so.

The order: bump the pin (the locked version) so it can reach `0.11.1`, and add `design:doctor` to CI. Tomas has the watch. Not clear to proceed until both land.

## Substance
- Facts: The design-system package pin in package.json is ^0.7.0; latest is 0.11.1; design:doctor is defined but not run in CI
- Numbers: ^0.7.0; 0.11.1; 0.x
- Intent: Summarise the pin problem and who should fix it
- Decision: Bump the pin past the 0.x caret trap and add design:doctor to CI
- Next owner: Tomas

### What moved and what did not

| | Before | Raw | Storyteller | Dungeon crawler | Watch officer |
|---|---|---|---|---|---|
| Opening and close | none | none | none | `SYSTEM:` asides | watch log, handover |
| Terms explained | 0 | 0, by request | all | all | all |
| `^0.7.0`, `0.11.1`, `0.x` | exact | exact | exact | exact | exact |
| Decision | same | same | same | same | same |
| Next owner | Tomas | Tomas | Tomas | Tomas, with a party role beside his real job | Tomas, "has the watch" |
| Ledger | absent | identical | identical | identical | identical |

The story changes. The load does not.

---

<!-- gold: 03 -->
## Situation 2: a live incident with a pack on (Meridian Grid)

The conversation is in `pack:dungeon-crawler` at intensity 2. Then the user writes:

"A production incident is paging the on-call: payment success dropped from 98.4% to 71.0% in 12 minutes; next owner is the on-call, Jordan."

A live incident is a serious moment. Layer 1 is forced off. Layer 2 stays.

### 2a. The reply

Voice pack off for this reply: this is a live incident.

Payments are failing right now. The share of payments that go through fell from 98.4% to 71.0% in 12 minutes.

What happened: a production incident (a fault in the live system that customers use) has started, and it has paged the on-call, the engineer on duty to respond to alarms. The cause is not in what you gave me, so I am not going to guess at one.

Why it matters: at 71.0% payment success, 29.0% of payment attempts are failing (100 minus 71.0), and it fell that far in 12 minutes.

What's next: Jordan, the on-call, has it. No decision has been stated yet.

## Substance
- Facts: A production incident is paging the on-call; payment success dropped from 98.4% to 71.0% in 12 minutes
- Numbers: 98.4%; 71.0%; 12 minutes
- Intent: Report the production incident and who has it
- Decision: none
- Next owner: Jordan (on-call)

### 2b. What a failing reply looks like

> **SYSTEM:** *Crawler, the Payment Golem has entered a rage phase! Success is down to about 70%. The Paladin has been summoned. +50 XP for spotting it.*

Four failures in three lines: the voice stayed on in an incident; `71.0%` was rounded to "about 70%"; Jordan vanished into a role; and decorative XP was handed out as if it were real. Every one of them is caught by the kill line in `template.md`.
