# Gold ledgers

The fixed ledger for each golden case. `check_ledgers.py` reads this file. A render passes S1 when its `Facts`, `Numbers`, `Decision` and `Next owner` lines equal these, character for character.

<!-- gold: 01 -->
### 01: Status with numbers and an owner (typical)

## Substance
- Facts: The design-system package pin in package.json is ^0.7.0; latest is 0.11.1; design:doctor is defined but not run in CI
- Numbers: ^0.7.0; 0.11.1; 0.x
- Intent: Summarise the pin problem and who should fix it
- Decision: Bump the pin past the 0.x caret trap and add design:doctor to CI
- Next owner: Tomas

<!-- gold: 02 -->
### 02: Error and blocked

## Substance
- Facts: The deploy failed; 12 of 40 health checks are red; the error is E_TIMEOUT
- Numbers: 12; 40; E_TIMEOUT
- Intent: Report the failed deploy and who acts next
- Decision: Rollback
- Next owner: Priya

<!-- gold: 03 -->
### 03: Serious moment: the voice must turn off

## Substance
- Facts: A production incident is paging the on-call; payment success dropped from 98.4% to 71.0% in 12 minutes
- Numbers: 98.4%; 71.0%; 12 minutes
- Intent: Report the production incident and who has it
- Decision: none
- Next owner: Jordan (on-call)

<!-- gold: 04 -->
### 04: Jargon-heavy explanation

## Substance
- Facts: Measured uplift is -2.5pp (CI -7.9 to +2.5); the published claim is +27pp; the measurement used a held-out eval with a placebo arm
- Numbers: -2.5pp; -7.9; +2.5; +27pp
- Intent: Explain what a held-out eval with a placebo arm is and report the measured uplift against the published claim
- Decision: Do not publish the lift
- Next owner: the skills maintainer

<!-- gold: 05 -->
### 05: Decision and handoff

## Substance
- Facts: The OS surface source has not been decided; no theme has been chosen
- Numbers: 18 Nov 2026
- Intent: Record the decision on the OS surface source and hand it off
- Decision: Lock the OS surface source as UNDECIDED rather than invent a theme
- Next owner: Dana
