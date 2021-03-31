const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // 不能使用函数
  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        files: ['src/**/*.{css,less,sass,scss,vue}'],
        fix: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@a': path.resolve(__dirname, 'src', 'assets'),
        '@c': path.resolve(__dirname, 'src', 'components'),
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
    proxy: process.env.VUE_APP_BASE_URL || 'https://fake.url',
  },
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE || 'zh-Hans',
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-Hans',
      localeDir: 'i18n/locales',
      enableInSFC: false,
    },
  },
};
