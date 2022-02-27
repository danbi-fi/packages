"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "./rules/base",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        createDefaultProgram: true,
    },
    rules: {},
};
//# sourceMappingURL=index.js.map