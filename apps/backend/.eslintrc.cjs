/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    '@repo/eslint-config/backend.js',
  ],
}
