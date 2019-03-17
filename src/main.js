/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store.js'
import VModal from 'vue-js-modal'

import { MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
//
Vue.use(VueMaterial)

Vue.use(MdTabs)

Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#app',
  mounted() {
    this.$material.ripple = false;
  },
  router,
  template: '<App/>',
  components: { App }
})
/* eslint-enable */
