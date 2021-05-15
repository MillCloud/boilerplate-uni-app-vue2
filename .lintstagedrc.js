module.exports = {
  '*.json': 'prettier --write',
  '*.{css,less,sass,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'vue-cli-service lint --fix',
  '*.{md,markdown}': 'markdownlint --fix && lint-md --fix',
};
