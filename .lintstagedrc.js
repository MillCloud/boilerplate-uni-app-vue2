module.exports = {
  '*.md': 'markdownlint --fix',
  '*.{css,less,scss,sass,vue,svelte}': 'stylelint --fix',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,svelte}': 'eslint --fix',
};
