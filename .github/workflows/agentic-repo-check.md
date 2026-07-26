---
on:
  workflow_dispatch:

engine: copilot

permissions:
  contents: read

network: defaults

safe-outputs:
  staged: true
  report-failure-as-issue: false
  create-issue:
    title-prefix: "[agentic-preview] "
    max: 1
---

# Tool Shelf repository check

Inspect this repository as a read-only reviewer.

Focus on:

- whether `README.md`, `EXPERIMENT.md`, and `METRICS.md` agree with the implementation
- gaps in tests or CI that could hide user-facing regressions
- accessibility, privacy, and operational risks relevant to this Japanese web tool
- small improvements that would produce measurable value during the current 30-day experiment

Do not modify files, push commits, or contact external services.

Prepare exactly one proposed GitHub issue. Give it a concise Japanese title and a
Japanese body containing:

1. a short repository-health summary
2. up to five findings, each linked to specific files or code
3. the single highest-value next action
4. checks a human should run before accepting that action

Prefer concrete evidence over generic advice. The safe output is running in staged
mode, so the issue must be previewed in the Actions summary and must not be created.
