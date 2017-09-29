const IF_STATEMENT = 'IfStatement';
const IS_DEV_SYMBOL = 'DEV_MODE';

function checkDevConsole(context, node) {
  if (node.object.name !== "console") {
    return;
  }

  let ancestors = context.getAncestors();
  let isDev = false;

  for (let i = 0; i < ancestors.length; ++i) {
    let ancestor = ancestors[i];

    if (ancestor.type === IF_STATEMENT
      && ancestor.test.name === IS_DEV_SYMBOL
    ) {
      isDev = true;
      break;
    }
  }

  if (!isDev) {
    context.report(node, `The console usage should we wrapped into if (${IS_DEV_SYMBOL}) { ... }`);
  }
}

module.exports = function(context) {
  return {
    'MemberExpression': function(node) {
      checkDevConsole(context, node);
    }
  };
};
