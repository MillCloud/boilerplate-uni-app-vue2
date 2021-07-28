const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TransformPages = require('uni-read-pages');

const { webpack } = new TransformPages();

module.exports = {
  chainWebpack: (config) => {
    config.plugin('stylelint').use(StylelintPlugin, [
      {
        files: ['src/**/*.{css,less,sass,scss,vue}'],
        fix: true,
      },
    ]);
    // use process.env.VUE_APP_PLATFORM directly
    // config
    //   .plugin('env')
    //   .use(require.resolve('webpack/lib/EnvironmentPlugin'), [
    //     { UNI_PLATFORM: process.env.UNI_PLATFORM },
    //   ]);
    config.resolve.alias
      .set('@@', path.resolve(''))
      .set('@', path.resolve('src'));
    config.when(process.env.NODE_ENV === 'production', (config_) => {
      config_.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        return args;
      });
    });
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.routes': webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'aliasPath'],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
    ],
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/styles/variables.scss";',
      },
    },
  },
  devServer: {
    proxy: process.env.VUE_APP_REQUEST_BASE_URL || 'https://fake.url',
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
