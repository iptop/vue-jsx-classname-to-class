var syntaxJsx = require('@babel/plugin-syntax-jsx').default
module.exports = function (babel) {
  return {
    inherits: syntaxJsx,
    visitor: {
      Program: function (path) {
        path.traverse({
          JSXAttribute: function (path) {
            var node = path.node
            if (!node) {
              return
            }
            var nameNode = node.name
            if (nameNode.name === 'className') {
              nameNode.name = 'class'
            }
          }
        })
      }
    }
  }
}
