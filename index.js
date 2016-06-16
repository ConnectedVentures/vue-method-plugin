var override = require('./override')
var Vue

function install (_Vue, methods) {
  Vue = _Vue
  override(Vue, methods)
}

module.exports = {
  install: install
};
