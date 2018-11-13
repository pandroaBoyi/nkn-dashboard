// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import axios from '@/assets/js/axios'
import VueAxios from 'vue-axios'
import storage from '@/assets/js/nbLocalStorage'
import namespace from '@/assets/js/nbNamespace'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/assets/css/global.css'

Vue.config.productionTip = false
Vue.prototype.$storage = storage
Vue.prototype.$namespace = namespace
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
