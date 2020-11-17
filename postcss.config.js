/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(3));
        }
        if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(2));
        }
        if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.slice(1));
        }
        return id;
      },
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    // https://github.com/FullHuman/purgecss/issues/392
    // require('@fullhuman/postcss-purgecss')(
    //   process.env.NODE_ENV === 'production'
    //     ? {
    //       content: [
    //         './src/**/*.html',
    //         './src/**/*.js',
    //         './src/**/*.jsx',
    //         './src/**/*.ts',
    //         './src/**/*.tsx',
    //         './src/**/*.vue',
    //       ],
    //       defaultExtractor: (content) => content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
    //     }
    //     : {},
    // ),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
  ],
};
