/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    displayQuestionMark: false,
    badgeURL: null,
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
    setUserBadgeURL (state, payload) {
      state.badgeURL = payload
    },
    displayBadgeQuestionMark (state, payload) {
      state.displayQuestionMark = payload
    },
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
      console.log('elections Object keys >>>>>>>>>>>>>>' + '\n')
      Object.keys(payload).forEach(vlooty => {
  		    console.log(vlooty + '\n')
      })
    },
    setVoterInformation (state, payload) {
      state.voterInformation = payload
      console.log('voter info shoved in to the STORE')
      Object.keys(payload).forEach(vlooty => {
  		    console.log(vlooty + '\n')
      })
    }
  },
  actions: {

  },
  getters: {
    getUserBadgeURL: state => {
      let ubu = state
      return ubu.badgeURL
    },
    shouldIDisplayBadge: state => {
      let gggggget = state
      return gggggget.displayQuestionMark
    },
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
