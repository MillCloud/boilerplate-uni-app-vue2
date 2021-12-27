module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{css,less,scss,sass,vue,svelte}': 'stylelint --fix',
  '*.{js,jsx,ts,tsx,vue,svelte}': 'eslint --fix',
};
