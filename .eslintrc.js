module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["warn"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-use-before-define": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "no-restricted-globals": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    radix: "off",
    "react/button-has-type": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "off",
    "react/require-default-props": "off",
    "react/no-unescaped-entities": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never"
      }
    ],
    "import/order": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  },
  globals: {
    JSX: true
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
