import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'react/destructuring-assignment': 'off',
      'react/prop-types': 'off',
      'react/jsx-fragments': ['off'],
      'react/require-default-props': 'off',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
