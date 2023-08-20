// module.exports = {
//   moduleDirectories: ["node_modules", "src"],
//   moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
//   transform: {
//     '^.+\\.js?$': require.resolve('babel-jest')
//   },
//   testEnvironment: 'node',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1'
//   },
//   testMatch: [
//     '<rootDir>/**/*.test.(js|jsx|ts|tsx)', '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
//   ],
//   transformIgnorePatterns: ['<rootDir>/node_modules/' , 'node_modules/(?!(react-leaflet-custom-control)/)']
// };

module.exports = {
  collectCoverage:true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  verbose: true,
}