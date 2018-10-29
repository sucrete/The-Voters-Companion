/* eslint-disable */
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
    googleResponse: {},
    allStatesResponse: {},
    USVoteElections: {},
    voterInformation: {},
    holla: 'ghost!'
  },
  mutations: {
    setUsersAddress (state, payload) {
      // console.log('setUsersAddress was fired')
      state.form.country.label = payload
    },
    setUsersPostcode (state, payload) {
      // console.log('postcode payload (in STORE): ' + payload)
      state.form.postcode = payload
    },
    setGoogleResponse (state, payload) {
      state.googleResponse = payload
    },
    setSuggestion (state, payload) {
      state.algoliaResponse = payload
    },
    setAllStateIDs (state, payload) {
      state.allStatesResponse = payload
    },
    setUSVoteElections (state, payload) {
      state.USVoteElections = payload
      console.log('elections >>>>>>>>>>>>>>' + '\n' + JSON.stringify(payload, null, '\t'))
    },
    setVoterInformation (state, payload) {
      state.voterInformation = payload
      console.log('voter info shoved in to the STORE')
    }
  },
  actions: {

  },
  getters: {
    showMeDatState: state => {
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
    },
    getElections: state => {
      return state.USVoteElections
    },
    getVoterInfo: state => {
      return state.voterInformation
    }
  }
})
