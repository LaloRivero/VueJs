import Vue from 'vue'
import firebase from 'firebase'
import APIkey from './APIkey'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const firebaseConfig = APIkey
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER')
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId })
    }
  },
}).$mount('#app')
