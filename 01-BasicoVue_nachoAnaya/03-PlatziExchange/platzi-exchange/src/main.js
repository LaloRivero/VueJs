import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'
import '@/assets/css/tailwind.css'
import router from '@/router'
import { dollarFilter } from '@/filters'
import { percentFilter } from '@/filters'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false
Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
