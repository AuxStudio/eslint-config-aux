module.exports = {
  globals: {
    MyGlobal: true,
    __DEV__: true
  },
  env: {
    node: true, // this is the best starting point
    browser: true, // for react web
    es6: true, // enables es6 features
    jest: true // unit testing
  },
  parser: "babel-eslint", // needed to make babel stuff work properly
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-named-as-default": 0,
    "function-paren-newline": ["error", "consistent"],
    "no-console": "off", // console logging is extremely useful
    "no-mixed-operators": "off", // I personally don't see anything wrong with x + y / z
    "prefer-rest-params": "off",
    "no-underscore-dangle": "off", // firebase loves returning props with leading underscores
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true
      }
    ],
    "react/require-default-props": "off",
    "arrow-body-style": 0, // don't enforce arrow-body-style, block body (() => { ... }) and single expression (() => ...) depends on use case
    "object-curly-newline": "off",
    "react/no-did-update-set-state": "off", // sometimes this is necessary
    "arrow-parens": "off", // parenthesis around single argument or not, depends on the use case
    "no-bitwise": "off",
    "no-nested-ternary": "off", // often looks better than if else block
    "class-methods-use-this": "off", // class methods are great for self-documentation
    "react/sort-comp": [
      1,
      {
        order: [
          "constructor",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/forbid-foreign-prop-types": "off", // we will only use propTypes from React-native/Text
    "react/jsx-wrap-multilines": "off",
    "import/named": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "max-len": "off",
    "no-lonely-if": "off",
    "no-unneeded-ternary": "off",
    "import/no-extraneous-dependencies": "off",
    "no-case-declarations": "off" // these are often useful in switch statements
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"]
      }
    }
  }
};
