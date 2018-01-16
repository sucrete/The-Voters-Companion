import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    form: {
      country: {
        label: 'boy',
        data: {}
      }
    },
    holla: 'ghost!'
  },
  mutations: {
    setUsersAddress (state, payload) {
      state.form.country.label = payload
    }
  },
  actions: {

  },
  getters: {
    showMeDatState: state => {
      console.log(state.form.country.label + ' from the STORE')
      var bb = state
      return bb.form.country.label
    },
    ghostGetter: state => {
      var carn = state
      return carn.holla
    },
    labelMaker (state) {
      var helloboys = state
      return helloboys.form.country.label
    }
  }
})
