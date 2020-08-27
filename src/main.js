import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkIDoQkjK7HOtLiTedW6IqDY3xFDNg5J4",
  authDomain: "fir-auth-f3628.firebaseapp.com",
  databaseURL: "https://fir-auth-f3628.firebaseio.com",
  projectId: "fir-auth-f3628",
  storageBucket: "fir-auth-f3628.appspot.com",
  messagingSenderId: "917851475603",
  appId: "1:917851475603:web:d5dc2cb4a91e2a20acc766"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
