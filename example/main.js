import Vue from 'Vue'
import App from './App.vue'

import './assets/iconfont'
// import '../src/svgiconfont.css'
import svgIconfont from '../src/index'
// import svgIconfont from '../lib/index'

Vue.config.productionTip = false

Vue.use(svgIconfont, {
  tagName: 'svg-iconfont',
  className: 'fafont',
  prefix: 'fa'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
