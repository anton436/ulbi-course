module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "i18next"],
  rules: {
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    indent: [2, 2],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-uses-react": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/function-component-definition": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    quotes: ["error", "double"],
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
