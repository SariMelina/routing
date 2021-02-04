import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { rutas } from './routes/rutas.js'

Vue.config.productionTip = false

Vue.use(Router)
 const routing = new Router ({
   routes: rutas
 })

new Vue({
  render: h => h(App)
}).$mount('#app')
