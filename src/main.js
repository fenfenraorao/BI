import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import text from './text' // 导入基本文案
// import lodash from 'lodash'

import 'element-ui/lib/theme-chalk/index.css'
// import '../src/assets/css/element-variable.scss'

// import '../src/assets/css/font/font.css'
import '../src/assets/css/index.scss'

Vue.use(ElementUI)

// import filters from './utils/filters'
// for (const i in filters) {
//   Vue.filter(i, filters[i])
// }

Vue.config.productionTip = false
Vue.prototype.$text = text
// Vue.prototype._ = lodash

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
