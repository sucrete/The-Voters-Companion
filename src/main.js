/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import { store } from './store.js'
import VModal from 'vue-js-modal'
import '../node_modules/bulma/css/bulma.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../node_modules/dynamics.js/lib/dynamics.js'
import 'showdown/dist/showdown.js'
import { MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdTabs)

Vue.use(BootstrapVue)

Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
/* eslint-enable */
