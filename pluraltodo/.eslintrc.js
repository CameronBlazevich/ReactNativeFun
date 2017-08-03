module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/require-extension': 'off',
    'react/wrap-multilines': 'off',
    'func-names': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['warn', 'windows'],
  },
};
