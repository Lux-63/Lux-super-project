import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from 'eslint-plugin-import';
import js from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';


export default [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'import/no-unresolved': 'warn',
      'import/order': 'error',
      'import/no-duplicates': 'warn',
    },
  },
  eslintPluginUnicorn.configs.recommended,
		{
			rules: {
				'unicorn/better-regex': 'warn',
        "unicorn/filename-case": [
	        "error",
	        {
              "cases": { 
                "pascalCase": true,
                "camelCase": true,
              }
	        }
        ],
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-null': 'off',
			},
		},
  eslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];
