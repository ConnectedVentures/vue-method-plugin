module.exports = function (Vue, methods) {
  var version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
    Vue.mixin(usesInit ? { init: methodInit } : { beforeCreate: methodInit })
  } else {
    // Override init and inject method init procedure
    var _init = Vue.prototype._init
    Vue.prototype._init = function (options) {
      var options = options || {}

      options.init = options.init
        ? [methodInit].concat(options.init)
        : methodInit

      _init.call(this, options)
    }
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
