/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueGmaps from 'vue-gmaps'
import anime from 'animejs'

import '../node_modules/bulma/css/bulma.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/dynamics.js/lib/dynamics.js'

Vue.use(BootstrapVue);

Vue.use(anime);

Vue.use(VueGmaps, {
  key: 'AIzaSyCJSHi0YcEsa1YqAvMqifmJNDj0VCaL5hQ'
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
