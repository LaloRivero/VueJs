import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import EventBus from './components/plugins/event-bus.js'
import routes from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(EventBus)

const router = new VueRouter({ routes })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
