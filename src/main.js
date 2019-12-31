import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/base.scss'

Vue.config.productionTip = false
Vue.EventBus = Vue.prototype.$eventBus = new Vue()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
