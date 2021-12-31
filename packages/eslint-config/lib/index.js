"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        // "prettier/@typescript-eslint",
        // "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        project: 'tsconfig.json',
        createDefaultProgram: true,
        // sourceType: "module",
    },
    overrides: [
        {
            files: ['src/**/*.ts'],
        },
    ],
    rules: {
        'prettier/prettier': ['error'],
        'no-console': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'no-return-await': ['off'],
        'import/extensions': ['off'],
        'import/no-unresolved': ['off'],
        'class-methods-use-this': ['off'],
        'no-unused-vars': ['off'],
        'import/prefer-default-export': ['off'],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': ['warn'],
    },
    // settings: {
    //   "import/resolver": {
    //     alias: {
    //       map: [["@resolvers", "./prisma/generated/type-graphql"]],
    //       extensions: [".ts", ".json"],
    //     },
    //   },
    // },
};
//# sourceMappingURL=index.js.map