import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBrdmoom9rBPrPrsNPVrrTdYf8YS8-rzzQ",
    authDomain: "my-address-pj-9d261.firebaseapp.com",
    databaseURL: "https://my-address-pj-9d261.firebaseio.com",
    projectId: "my-address-pj-9d261",
    storageBucket: "",
    messagingSenderId: "733705409813",
    appId: "1:733705409813:web:d54feaba99244c41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
