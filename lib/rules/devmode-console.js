const DEV_MODE_SYMBOL = require('../devmode-symbol');

function checkDevConsole(context, node) {
  if (node.object.name !== 'console') {
    return;
  }

  let ancestors = context.getAncestors();
  let isDev = false;

  for (let i = 0; i < ancestors.length; ++i) {
    let ancestor = ancestors[i];

    if (ancestor.type === 'IfStatement'
      && ancestor.test.name === DEV_MODE_SYMBOL
    ) {
      isDev = true;
      break;
    }
  }

  if (!isDev) {
    context.report(node, `The console usage should we wrapped into if (${DEV_MODE_SYMBOL}) { ... }`);
  }
}

module.exports = function(context) {
  return {
    'MemberExpression': function(node) {
      checkDevConsole(context, node);
    }
  };
};
