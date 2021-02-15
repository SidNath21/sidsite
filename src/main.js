import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router/routes'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const eventBus = new Vue();

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDWQAVfdu6efMCu1fNeEpUPi9zjPTchWRM",
  authDomain: "sidportfolio-31dae.firebaseapp.com",
  databaseURL: "https://sidportfolio-31dae.firebaseio.com",
  projectId: "sidportfolio-31dae",
  storageBucket: "sidportfolio-31dae.appspot.com",
  messagingSenderId: "628676299992",
  appId: "1:628676299992:web:a58c41e7a32d9ac5629bad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
