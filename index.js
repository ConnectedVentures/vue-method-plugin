const override = require('./override');
let Vue

function install (_Vue, methods) {
  Vue = _Vue
  override(Vue, methods)
}

module.exports = {
  install
}
