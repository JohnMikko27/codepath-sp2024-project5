module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-console": "off",
        "quotes": [
            "error",
            "double"
        ],
        "no-plusplus": "off",
        "indent": ["warn", 2],
        "semi": ["warn", "always"],
        "import/extensions": "off",
        "no-undef": "off",
        "no-unused-vars": "warn", 
        "no-use-before-define": "off",
        "react/prop-types": "off"
  },
}
