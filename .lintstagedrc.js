module.exports = {
  '*.{css,less,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue,json,jsonc,json5}': 'vue-cli-service lint --fix',
  '*.{md,markdown}': 'markdownlint --fix',
};
