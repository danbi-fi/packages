export default {
  roots: ["<rootDir>/packages"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "((\\.|/)(test|spec))\\.ts?$",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/types/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: ["TS151001"],
      },
    },
  },
};
