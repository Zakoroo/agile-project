# Contributing

1. Create a branch: `git switch -c feat/<short-name>` (or `fix/`, `chore/`, etc.)
2. Write code + tests; run formatter, linter, and unit tests locally.
3. Commit using Conventional Commits.
4. Push and open a PR into `main`. Add context and link the issue (“Closes #123”).
5. Request reviewers and post the PR in `#reviews` with quick context.
6. Address review comments; keep CI green.
7. Squash & merge when approved; delete your branch.

## Risky changes

- Security-related, DB schema, or public APIs require **2 reviewers** and CODEOWNERS approval.
