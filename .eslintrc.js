module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-extra-boolean-cast": "off",
    "no-duplicate-imports": "error",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": "allow-with-description" }],
    "@typescript-eslint/no-unused-vars": "warn",
    "react/display-name": "off",
    "prefer-const": "off",
    "no-debugger": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        quotes: ["error", "double"],

        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^@?\\w", "^[a-zA-Z]/.*|$"],
              [
                "^(~/(router|services|configs|i18n|lib|constants|modules|logic|api|layouts|components|ui|pages|assets|widgets|shared))(/.*|$)",
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
              ],
            ],
          },
        ],
        "simple-import-sort/sort": "off",
      },
    },
  ],
};
