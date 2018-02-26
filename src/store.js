import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    googvotekey: process.env.GOOGLE_API_KEY,
    usVoteKey: process.env.VOTE_KEY,
    form: {
      postcode: null,
      country: {
        label: null,
        data: {}
      }
    },
    algoliaResponse: {},
    googleResponse: {
      data: {
        hanger: 'knock knock'
      }
    },
    EODResponse: {},
    USVoteElections: {},
    holla: 'ghost!'
  },
  mutations: {
    setUsersAddress (state, payload) {
      console.log('setUsersAddress was fired')
      state.form.country.label = payload
    },
    setUsersPostcode (state, payload) {
      console.log('postcode payload (in STORE): ' + payload)
      state.form.postcode = payload
    },
    setGoogleResponse (state, payload) {
      state.googleResponse.data = payload
    },
    setSuggestion (state, payload) {
      state.algoliaResponse = payload
    },
    setEODResponse (state, payload) {
      state.EODResponse = payload
      console.log('▼▼▼▼▼ EODResponse mutated state ▼▼▼▼▼ EODResponse mutated state ▼▼▼▼▼ EODResponse mutated state ▼▼▼▼▼' + '\n' + 'here it is:' + '\n' + '\n' + JSON.stringify(payload.data.objects[0], null, '\t'))
    },
    setUSVoteElections (state, payload) {
      state.USVoteElections = payload
      console.log('☁ ☁ ☁ state elections within FINAL API search ☁ ☁ ☁ --> ' + JSON.stringify(payload, null, '\t'))
    }
  },
  actions: {

  },
  getters: {
    showMeDatState: state => {
      console.log(state.form.country.label + ' --- (from the STORE)')
      var bb = state
      return bb
    },
    ghostGetter: state => {
      var carn = state
      return carn.holla
    },
    labelMaker (state) {
      var helloboys = state
      return helloboys.form.country.label
    },
    stuper: state => {
      return state.googleResponse.data
    }
  }
})
