const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // 不能使用函数
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['src/**/*.{vue,html,scss}'],
        fix: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@a': path.resolve(__dirname, 'src', 'assets'),
        '@c': path.resolve(__dirname, 'src', 'components'),
        '@h': path.resolve(__dirname, 'src', 'hooks'),
        '@u': path.resolve(__dirname, 'src', 'utils'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";',
      },
    },
  },
  devServer: {
    proxy: 'https://fake.url/api',
  },
  pluginOptions: {
    i18n: {
      locale: 'zh-Hans',
      fallbackLocale: 'zh-Hans',
      localeDir: 'i18n/locales',
      enableInSFC: false,
    },
  },
};
