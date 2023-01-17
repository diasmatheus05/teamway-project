module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  setupFiles: ["jest-canvas-mock"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransform.config.js",
    "\\.(css|less)$": "<rootDir>/assetsTransform.config.js",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/index.ts",
    "!src/bootstrap.tsx",
    "!src/environment.ts",
    "!src/types/*.ts",
    "!src/styles/*.ts",
    "!src/**/styles.ts",
    "!src/router/Router.tsx",
    "!src/__mocks__/*.ts",
    "!src/__mocks__/**/*.ts",
    "!src/**/*.stories.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
