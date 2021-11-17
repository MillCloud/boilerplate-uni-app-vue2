const { eslint } = require('@modyqyw/fabric');

module.exports = {
  ...eslint.vue2Typescript,
  rules: {
    ...eslint.vue2Typescript.rules,
    'vue/multi-word-component-names': 'off',
  },
};
