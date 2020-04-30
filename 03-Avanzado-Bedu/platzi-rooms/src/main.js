import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyAvFMPTCFcAi7TjfRw9ojhD2dSj2KIYjjY',
  authDomain: 'platzi-rooms-254cf.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-254cf.firebaseio.com',
  projectId: 'platzi-rooms-254cf',
  storageBucket: 'platzi-rooms-254cf.appspot.com',
  messagingSenderId: '1063696170261',
  appId: '1:1063696170261:web:737d32d2624687ef0e3d1c',
  measurementId: 'G-74XB2VZEJB',
}
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
