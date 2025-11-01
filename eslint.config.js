// eslint.config.js
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import lodashPlugin from 'eslint-plugin-lodash';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import eslintRules from './tools/eslint/rules/1-eslint.js';
import importRules from './tools/eslint/rules/2-import.js';
import reactRules from './tools/eslint/rules/3-react.js';
import reactJSXRules from './tools/eslint/rules/4-react-jsx.js';
import lodashRules from './tools/eslint/rules/5-lodash.js';
import typescriptRules from './tools/eslint/rules/6-typescript.js';
import a11yRules from './tools/eslint/rules/7-jsx-a11y.js';

export default [
    // замена .eslintignore
    {
        ignores: ['node_modules/**', 'dist/**'],
    },

    // базовые правила JS
    js.configs.recommended,

    // базовые правила для TS (без type-check, быстрее и без project)
    ...tseslint.configs.recommended,

    // React / TSX правила
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            react: { version: 'detect' },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            import: importPlugin,
            lodash: lodashPlugin,
            'jsx-a11y': jsxA11y,
        },
        rules: {
            // Правила ESLint.
            ...eslintRules,

            // Правила импортов.
            ...importRules,

            // Правила React.
            ...reactRules,

            // Правила React JSX.
            ...reactJSXRules,

            // Правила Lodash.
            ...lodashRules,

            // Правила TypeScript.
            ...typescriptRules,

            // Правила JSX a11y.
            ...a11yRules,
            'react/prop-types': 0,
        },
    },
    {
        files: ['*.config.js', 'tools/**/*.js'],
        rules: {
            'import/extensions': ['error', 'always', { ignorePackages: true }],
        },
    },
    // Отключаем конфликтующие с Prettier правила
    prettier,
];
