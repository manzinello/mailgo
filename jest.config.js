module.exports = {
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ["src/*.ts"],
  coverageDirectory: "./coverage/",
  moduleNameMapper: {
    "\\.(png|gif)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.test.ts"],
  testURL: "http://localhost/",
  verbose: true,
};
