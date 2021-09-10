module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@@/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '.*\\.(vue)$': 'unplugin-vue2-script-setup/jest',
  },
};
