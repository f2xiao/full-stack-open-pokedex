module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "indent": [
      "off",
        2
      ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "off",
      "single"
    ],
    "semi": [
      "off",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "off",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "error",
    "react/prop-types": 0,
    "no-unused-vars":["off"]
  }
}
