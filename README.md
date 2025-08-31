# Agile Project

This repository follows our team's Coding Policy & Code Review process.

## Quick links

- [Coding Policy](docs/CODING_POLICY.md)
- [Contributing Guide](docs/CONTRIBUTING.md)
- [PR Template](.github/pull_request_template.md)

## Getting started

1. Create a feature branch:
2. Commit with Conventional Commits (e.g., )
3. Open a Pull Request into and request reviewers

## Tech stack

awk '1;/^## Getting started$/{print ""; print "## Tech stack"; print "- Node.js + TypeScript"; print "- ESLint (flat) + Prettier"; print "- Jest (JUnit artifact in CI)"; print "- Husky + lint-staged + Commitlint"; print "- GitHub Actions CI"; print ""}' README.md > README.tmp && mv README.tmp README.md
