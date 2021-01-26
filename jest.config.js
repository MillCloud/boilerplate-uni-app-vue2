module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '@a/(.*)$': '<rootDir>/src/assets/$1',
    '@c/(.*)$': '<rootDir>/src/components/$1',
    '@h/(.*)$': '<rootDir>/src/hooks/$1',
    '@u/(.*)$': '<rootDir>/src/utils/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
