// const { pathsToModuleNameMapper } = require('react-native')
// const { compilerOptions } = require('./tsconfig.base.json')

module.exports = {
  preset: 'react-native',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect", "<rootDir>/jest.setup.js"],
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  // modulePaths: [
  //     '<rootDir>'
  // ],
}
