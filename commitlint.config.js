// https://commitlint.js.org/#/reference-rules
const LEVEL = {
  WARN: 1,
  ERROR: 2,
  DISABLE: 0,
}

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'header-max-length': [LEVEL.ERROR, 'always', 72],
    'body-max-line-length': [LEVEL.DISABLE, 'always', 0],
    'body-leading-blank': [LEVEL.ERROR, 'always'],
    'footer-leading-blank': [LEVEL.ERROR, 'always'],
  },
}
