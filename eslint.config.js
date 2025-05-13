import eslint from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  eslint.configs.recommended,
  ...pluginVue.configs["flat/strongly-recommended"],
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
];
