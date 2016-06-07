import override from './override'

let Vue

function install (_Vue, methods) {
  Vue = _Vue
  override(Vue, methods)
}

export default {
  install
}
