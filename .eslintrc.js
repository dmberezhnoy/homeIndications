/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "simple-import-sort"],
  rules: {
    "react/jsx-key": 0,
    "react/prop-types": 0,
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react"],
          ["^@?\\w"],
          [
            "^(api|components|consts|containers|layouts|hooks|icons|images|pages|types|utils|slices|ui-kit|hoc)(/.*|$)",
          ],
          ["^\\u0000"],
        ],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
