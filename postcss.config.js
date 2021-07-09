/* eslint-disable no-unused-vars */
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
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
    process.env.NODE_ENV === 'production' &&
      require('@fullhuman/postcss-purgecss')({
        content: [`./public/**/*.html`, `./src/**/*.vue`],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            '',
          );
          return contentWithoutStyleBlocks.match(/[\w/:-]*[\w/-]+/g) || [];
        },
        safelist: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
          /data-v-.*/,
          /^uni-.*/,
          /^u-.*/,
          /^tui-.*/,
        ],
      }),
  ],
};
