import Vue from 'vue'
import interceptors from "./interceptors";
import './cube-ui'
import App from './App.vue'
import store from './store'
import router from './router'
const app = {}
interceptors(app)


Vue.config.productionTip = false

app.inst = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


