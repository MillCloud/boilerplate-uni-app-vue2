/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, global-require, import/no-extraneous-dependencies */
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
    require('tailwindcss')(),
    require('postcss-preset-env')(
      process.env.UNI_PLATFORM === 'h5'
        ? {}
        : {
            autoprefixer: false,
          },
    ),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss'),
    // process.env.NODE_ENV === 'production' &&
    //   require('@fullhuman/postcss-purgecss')({
    //     content: [`./public/**/*.html`, `./src/**/*.vue`],
    //     defaultExtractor(content) {
    //       const contentWithoutStyleBlocks = content.replace(
    //         // eslint-disable-next-line regexp/match-any
    //         /<style[^]+?<\/style>/gi,
    //         '',
    //       );
    //       // eslint-disable-next-line regexp/optimal-quantifier-concatenation
    //       return contentWithoutStyleBlocks.match(/[\w/:-]*[\w/-]+/g) || [];
    //     },
    //     safelist: [
    //       // eslint-disable-next-line regexp/no-empty-alternative
    //       /-(leave|enter|appear)(|-(to|from|active))$/,
    //       // eslint-disable-next-line regexp/no-empty-alternative
    //       /^(?!(|.*?:)cursor-move).+-move$/,
    //       // eslint-disable-next-line regexp/no-empty-alternative
    //       /^router-link(|-exact)-active$/,
    //       /data-v-.*/,
    //       /^uni-.*/,
    //       /^cl-.*/,
    //       /^u-.*/,
    //       /^tui-.*/,
    //     ],
    //   }),
  ],
};
/* eslint-enable no-unused-vars, @typescript-eslint/no-unused-vars, global-require, import/no-extraneous-dependencies */
