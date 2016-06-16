module.exports = function (Vue, methods) {
  // override init and inject vuex init procedure
  var _init = Vue.prototype._init
  Vue.prototype._init = function (options) {
    var options = options || {}

    options.init = options.init
      ? [methodInit].concat(options.init)
      : methodInit

    _init.call(this, options)
  }

  function methodInit () {
    var self = this

    Object.keys(methods).forEach(function (key) {
      var methodName = key
      var method = methods[key]
      var options = self.$options

      if (options.parent && options.parent[methodName]) {
        self[methodName] = options.parent[methodName]
      } else {
        self[key] = method
      }
    })
  }
}
