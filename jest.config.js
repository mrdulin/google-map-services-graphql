const pkg = require('./package.json');

module.exports = {
  bail: 1,
  displayName: {
    name: pkg.name,
    color: 'blue',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: true,
};
