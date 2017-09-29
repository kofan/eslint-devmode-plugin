const DEV_MODE_SYMBOL = require('./devmode-symbol');

module.exports = {
  rules: {
    'devmode-console': require('./rules/devmode-console')
  },
  rulesConfig: {
    'devmode-console': 2
  },
  environments: {
    devmode: {
      globals: {
        [DEV_MODE_SYMBOL]: true
      }
    }
  }
};
