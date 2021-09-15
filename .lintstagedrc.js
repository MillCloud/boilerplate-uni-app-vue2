module.exports = {
  '*.{css,less,scss,vue}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue}': 'vue-cli-service lint --fix',
  '*.{md,markdown}': 'markdownlint --fix',
};
