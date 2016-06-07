export default function (Vue, methods) {
  // override init and inject vuex init procedure
  const _init = Vue.prototype._init
  Vue.prototype._init = function (options = {}) {
    options.init = options.init
      ? [methodInit].concat(options.init)
      : methodInit

    _init.call(this, options)
  }

  function methodInit () {
    Object.keys(methods).forEach(key => {
      const methodName = key
      const method = methods[key]
      this[methodName] = method
    })
  }
}
