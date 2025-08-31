- **TypeScript**: static types → catch bugs at compile-time.
- **ESLint (Flat Config) + typescript-eslint**: code quality & best practices.
- **Prettier**: consistent formatting; integrated with ESLint to fail on style drift.
- **Jest**: unit tests.
- **Husky + lint-staged**: run quick checks on staged files pre-commit.
- **Commitlint**: enforce Conventional Commits.
- **GitHub Actions**: CI gates for formatter, linter, types, tests.

## Prerequisites

- Node.js LTS installed (verify with `node -v`, `npm -v`).

## Install

````bash
npm ci

## Common scripts
npm run format:write   # format all files
npm run format:check   # verify formatting (CI uses this)
npm run lint           # ESLint (CI uses this)
npm run typecheck      # TypeScript noEmit (CI uses this)
npm test               # Jest (CI uses this)
npm run build          # compile src -> dist (not used in CI)


## Git hooks (Husky)
- **TypeScript**: static types → catch bugs at compile-time.
- **ESLint (Flat Config) + typescript-eslint**: code quality & best practices.
- **Prettier**: consistent formatting; integrated with ESLint to fail on style drift.
- **Jest**: unit tests.
- **Husky + lint-staged**: run quick checks on staged files pre-commit.
- **Commitlint**: enforce Conventional Commits.
- **GitHub Actions**: CI gates for formatter, linter, types, tests.

## Prerequisites
- Node.js LTS installed (verify with `node -v`, `npm -v`).

## Install
```bash
npm ci

## Common scripts
npm run format:write   # format all files
npm run format:check   # verify formatting (CI uses this)
npm run lint           # ESLint (CI uses this)
npm run typecheck      # TypeScript noEmit (CI uses this)
npm test               # Jest (CI uses this)
npm run build          # compile src -> dist (not used in CI)
````

## Git hooks (Husky)

- pre-commit: runs lint-staged. Skips gracefully if nothing is staged.
- commit-msg: runs Commitlint (Conventional Commits).

## CI (GitHub Actions)

- Triggers on PRs and pushes to main.
- Steps: Prettier check → ESLint → TypeScript --noEmit → Jest + JUnit artifact.
- Failing any step blocks merge.

```bash
src/        # application code (TypeScript)
tests/      # unit tests (Jest)
.github/    # CI workflow + templates
docs/       # policy and dev docs
```

## TypeScript config split

- tsconfig.json: dev/typechecking (includes tests, noEmit: true)
- tsconfig.build.json: build-only (emits JS from src to dist)
