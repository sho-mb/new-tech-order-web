// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "@stylistic/ts/indent": ["error", 2],
    "no-console": "off",
  },
});
