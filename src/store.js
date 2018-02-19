import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
      data: {}
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
    declareSuggestion (state) {
      var suggestionObject = JSON.stringify(state.algoliaResponse, null, '\t')
      console.log(suggestionObject)
    },
    setEODResponse (state, payload) {
      state.EODResponse = JSON.parse(payload)
    },
    setUSVoteElections (state, payload) {
      state.USVoteElections = JSON.parse(payload)
      console.log('☁ ☁ ☁ state elections within FINAL API search ☁ ☁ ☁ --> ' + JSON.stringify(payload, null, '\t'))
    }
  },
  actions: {
    searchAPIs: ({ state, commit, dispatch }) => {
      var noJoke = state.googvotekey
      console.log('vote key after search fired ' + noJoke)
      var chainedAddress = state.form.country.label + ' ' + state.form.postcode
      var convertedAddress = chainedAddress.split(' ').join('%20')
      var convertedAddressFinal = convertedAddress.split(',').join('%2C')
      axios.get('https://www.googleapis.com/civicinfo/v2/representatives?key=' + noJoke + '&address=' + convertedAddressFinal).then(response => {
        commit('setGoogleResponse', response)
        console.log('log your boy ---> ' + JSON.stringify(response, null, '\t'))
        setTimeout(function () {
          dispatch('getStateAndCounty')
        }, 333)
      }).catch(err => {
        console.log('your error is: ' + err)
        dispatch('getStateAndCounty')
      })
    },
    getStateAndCounty: ({ state, commit, dispatch }) => {
      // var USVoteFoundationKey = state.usVoteKey
      console.log('us vote foundation vote key fired --> ' + process.env.VOTE_KEY)
      var stateName = state.algoliaResponse.administrative
      var countyName = state.algoliaResponse.hit.county[0].split(' ').join('%20')
      console.log('your county name, my friend ----------------------------------> ' + countyName)
      axios.get('https://localelections.usvotefoundation.org/v1/eod/regions?oauth_consumer_key=' + process.env.VOTE_KEY + '&state_name=' + stateName + '&county_name=' + countyName).then(response => {
        console.log('** YOUR EOD RESPONSE ** YOUR EOD REPSONSE ** YOUR EOD RESPONSE **' + '\n' + '\n' + '\n' + JSON.stringify(response, null, '\t'))
        commit('setEODResponse', response)
        setTimeout(function () {
          dispatch('search4Elections')
        }, 333)
      }).catch(err => {
        console.log('your EOD API call failed. error --> ' + err)
      })
    },
    search4Elections: ({ state, commit }) => {
      var USVoteFoundationKey = state.usVoteKey
      var electionsCallHeader = {
        Authorization: 'Token ' + USVoteFoundationKey
      }
      var stateURI = state.EODResponse.objects[0].state
      /* eslint-disable */
      var stateID = stateURI.match(/\/([0-9]+)(?=[^\/]*$)/)[1]
      /* eslint-enable */
      console.log('the STATE ID for ' + state.EODResponse.objects[0].state_name + ' is: ' + state.stateID)
      axios.get('https://localelections.usvotefoundation.org/api/v1/elections?state_id=' + stateID, {headers: {electionsCallHeader}}).then(response => {
        console.log('** YOUR ELECTIONS RESPONSE ** YOUR ELECTIONS REPSONSE ** YOUR ELECTIONS RESPONSE **' + '\n' + '\n' + '\n' + JSON.stringify(response, null, '\t'))
        commit('setUSVoteElections', response)
      }).catch(err => {
        console.log('your Elections API call failed. error --> ' + err)
      })
    }
  },
  getters: {
    showMeDatState: state => {
      console.log(state.form.country.label + ' --- (from the STORE)')
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
