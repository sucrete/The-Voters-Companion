/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import anime from 'animejs'
import { store } from './store.js'
import VModal from 'vue-js-modal'
import '../node_modules/bulma/css/bulma.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/dynamics.js/lib/dynamics.js'
import '../node_modules/showdown/dist/showdown.js'

Vue.use(BootstrapVue)

Vue.use(anime)

Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
