/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const UnpluginVue2ScriptSetupPlugin = require('unplugin-vue2-script-setup/webpack');

/** @type {Options} */
module.exports = {
  chainWebpack: (config) => {
    // stylelint
    config.plugin('stylelint').use(StylelintPlugin, [
      {
        files: ['src/**/*.{css,less,sass,scss,vue}'],
        fix: true,
      },
    ]);
    // unplugin-vue2-script-setup
    config.plugin('unplugin-vue2-script-setup').use(
      UnpluginVue2ScriptSetupPlugin({
        reactivityTransform: true,
      }),
    );
    // use process.env.VUE_APP_PLATFORM directly
    // config
    //   .plugin('env')
    //   .use(require.resolve('webpack/lib/EnvironmentPlugin'), [
    //     { UNI_PLATFORM: process.env.UNI_PLATFORM },
    //   ]);
    // alias
    config.resolve.alias.set('@', path.resolve('src'));
    // fork-ts-checker
    config.plugins.delete('fork-ts-checker');
    // production only
    config.when(process.env.NODE_ENV === 'production', (config_) => {
      // terser-webpack-plugin
      config_.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        return args;
      });
    });
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
  transpileDependencies: [
    '@dcloudio/uni-ui',
    'axios-logger',
    'axios-retry',
    'luch-request',
    'uview-ui',
  ],
};
