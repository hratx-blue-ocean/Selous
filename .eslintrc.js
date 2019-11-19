module.exports = {
  "extends": "airbnb",
  "plugins": [
    "eslint-plugin-react",
  ],
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-curly-newline": 0,
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": 0,
    "react/state-in-constructor": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 2,
    "react/no-array-index-key": 1,
    "react/destructuring-assignment": 1,
    "import/extensions": 0,
    "react/prop-types": 0,
  },
};
