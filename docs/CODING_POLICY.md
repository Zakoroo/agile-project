# Coding Policy & Code Reviews

## Branching & PRs

- Short-lived feature branches; merge via PR into `main`.
- Pair programming encouraged; still open a PR.

## Review Turnaround – SLA

- Review within **24h (weekdays)**. If more time is needed, acknowledge with an ETA in the PR or #reviews.

## Approvals

- **1 reviewer** for routine code; **2 reviewers** for risky areas (security, DB schema, public APIs).
- Author may not self-approve. Use CODEOWNERS for critical paths.

## Automated Gates

- CI must run **formatter, linter, unit tests, static analysis**. Fail fast.

## Tests & Docs

- New/changed code includes **unit tests**; adjust existing tests as needed.
- Update inline docs and README; include migration notes when relevant.

## Commit Message Style

- Prefer **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`; explain the **why**.

## Reviewer Rotation & Load

- Rotate a primary reviewer weekly; if someone has **≥2 pending** PRs, pick someone else.

## Review Etiquette

- Kind, specific, actionable comments. Authors respond to all comments; resolve or note follow-ups.

## Definition of Done

- ✅ CI green (formatter + linter + tests + static analysis)
- ✅ PR approved (per rules above)
- ✅ Docs updated (purpose, README/wiki if needed)
- ✅ Issue/task linked (use “Closes #123”)
- ✅ No secrets/keys committed; env handled correctly

## Weekly Tech Huddle (15–30 min)

- Not for line-by-line reviews; discuss patterns, conventions, refactors, and standards.

## Hotfixes

- Urgent fixes may fast-track with pair review and a retro PR documenting follow-ups.

## Security & Data Hygiene

- Never commit secrets; use env vars/secret managers.
- Keep `.gitignore` current; scan dependencies regularly.

## Style & Tooling

- Enforce auto-formatter, linter, and minimal EditorConfig via CI (GitHub Actions).
