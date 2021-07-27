const RequireContextDependency = require("webpack/lib/dependencies/RequireContextDependency")

module.exports = class AsyncImportPlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap('AsyncImportPlugin', factory => {
      factory.hooks.parser.for('javascript/auto').tap('AsyncImportPlugin', (parser, options) => {
        parser.hooks.call.for('require.asyncImport').tap('AsyncImportPlugin', expr => {
          let regExp = /^\.\/.*$/;
          let recursive = true;
          let mode = "sync";
          switch (expr.arguments.length) {
            case 4: {
              const modeExpr = parser.evaluateExpression(expr.arguments[3]);
              if (!modeExpr.isString()) return;
              mode = modeExpr.string;
            }
            // falls through
            case 3: {
              const regExpExpr = parser.evaluateExpression(expr.arguments[2]);
              if (!regExpExpr.isRegExp()) return;
              regExp = regExpExpr.regExp;
            }
            // falls through
            case 2: {
              const recursiveExpr = parser.evaluateExpression(expr.arguments[1]);
              if (!recursiveExpr.isBoolean()) return;
              recursive = recursiveExpr.bool;
            }
            // falls through
            case 1: {
              const requestExpr = parser.evaluateExpression(expr.arguments[0]);
              if (!requestExpr.isString()) return;
              const dep = new RequireContextDependency(
                {
                  request: requestExpr.string,
                  recursive,
                  regExp,
                  mode,
                  category: "commonjs"
                },
                expr.range
              );
              dep.loc = expr.loc;
              dep.optional = !!parser.scope.inTry;
              parser.state.current.addDependency(dep);
              return true;
            }
          }
        });
      });
    });
  }
};
