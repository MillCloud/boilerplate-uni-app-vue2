import pkg from '@/../package.json';

export { default as pkg } from '@/../package.json';

export const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Requested-With': 'XMLHttpRequest',
  'X-Version': `${pkg.name}-${process.env.VUE_APP_PLATFORM}-${
    process.env.NODE_ENV
  }/${pkg.version.replace('-', '')}`,
};
