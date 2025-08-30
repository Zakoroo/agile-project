import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * ESLint v9 Flat Config
 * - tseslint: TypeScript-aware rules + parser
 * - Prettier: formatting as an ESLint rule
 * - globals: Node + Jest globals
 */
export default tseslint.config(
  // 1) Ignore build + deps
  { ignores: ['dist', 'node_modules'] },

  // 2) Recommended TypeScript rules (safe defaults)
  ...tseslint.configs.recommended,

  // 3) Our project settings
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
      globals: { ...globals.node },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Make Prettier formatting issues fail the lint step
      'prettier/prettier': 'error',
    },
  },

  // 4) Jest test files: add Jest globals so ESLint knows them
  {
    files: ['tests/**/*.ts', '**/*.test.ts'],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  // 5) Disable stylistic rules that conflict with Prettier
  eslintConfigPrettier,
);
