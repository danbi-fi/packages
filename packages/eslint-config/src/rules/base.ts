module.exports = {
  rules: {
    "prettier/prettier": ["error"],
    "no-console": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "no-return-await": ["off"],
    "import/extensions": ["off"],
    "import/no-unresolved": ["off"],
    "class-methods-use-this": ["off"],
    "no-unused-vars": ["off"],
    "import/prefer-default-export": ["off"],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": ["warn"],
  },
};
