/* eslint-disable global-require */
const tailwindDefaultTheme = require('tailwindcss/defaultTheme');
const antdColors = require('@ant-design/colors');

const tailwindColors = tailwindDefaultTheme.colors;

module.exports = {
  purge: false,
  separator: '--',
  theme: {
    screens: {},
    extend: {
      colors: {
        pink: tailwindColors.pink,
        rose: tailwindColors.rose,
        red: {
          ...tailwindColors.red,
          ...antdColors.red.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        orange: {
          ...tailwindColors.orange,
          ...antdColors.orange.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        yellow: {
          ...tailwindColors.yellow,
          ...antdColors.yellow.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        amber: tailwindColors.amber,
        lime: {
          ...tailwindColors.lime,
          ...antdColors.lime.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        green: {
          ...tailwindColors.green,
          ...antdColors.green.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        emerald: tailwindColors.emerald,
        teal: tailwindColors.teal,
        cyan: {
          ...tailwindColors.cyan,
          ...antdColors.cyan.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        blue: {
          ...tailwindColors.blue,
          ...antdColors.blue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        indigo: tailwindColors.indigo,
        purple: {
          ...tailwindColors.purple,
          ...antdColors.purple.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        violet: tailwindColors.violet,
        fuchsia: tailwindColors.fuchsia,
        gray: {
          ...tailwindColors.gray,
          ...antdColors.grey.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        blueGray: tailwindColors.blueGray,
        coolGray: tailwindColors.coolGray,
        warmGray: tailwindColors.warmGray,
        trueGray: tailwindColors.trueGray,
        light: tailwindColors.light,
        dark: tailwindColors.dark,
        black: tailwindColors.black,
        white: tailwindColors.white,
        sky: tailwindColors.sky,
        volcano: {
          ...antdColors.volcano.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        gold: {
          ...antdColors.gold.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        geekBlue: {
          ...antdColors.geekblue.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
        magenta: {
          ...antdColors.magenta.reduce(
            (acc, cur, idx) => ({
              ...acc,
              [idx + 1]: cur,
            }),
            {},
          ),
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: false,
    space: false,
    divideWidth: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
  },
};
