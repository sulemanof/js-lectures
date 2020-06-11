module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "mocha": true
    },
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
};
