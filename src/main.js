import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { rutas } from './routes/rutas.js'
import Resoure from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Router)
 const routing = new Router ({
   routes: rutas,
   mode: 'history'
 })

 Vue.use(Resoure)

new Vue({
  router: routing,
  render: h => h(App)
}).$mount('#app')
