import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes'
import store from './components/store'

import EventBus from './components/plugins/event-bus'
import msToMs from './filters/ms-to-mm'
import blur from './directives/blur'

import i18n from './i18n'

Vue.use(EventBus)
Vue.use(VueRouter)
Vue.use(msToMs)
Vue.use(blur)

const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
