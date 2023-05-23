module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.nuxt/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/components/**/*.vue",
    "<rootDir>/pages/**/*.vue",
    "<rootDir>/store/**/*.js",
  ],
  coverageDirectory: "<rootDir>/tests/coverage",
  coverageReporters: ["lcov", "text"],
};
