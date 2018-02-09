import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import { google } from 'googleapis'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    form: {
      postcode: null,
      country: {
        label: null,
        data: {}
      }
    },
    googleResponse: {
      data: {}
    },
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
      // state.googleResponse.data = payload
    }
  },
  actions: {
    // searchAPI: ({commit, state}) => {
    //   var getYourReps = google.civicinfo('v2')
    //   var params = {
    //     auth: process.env.GOOGLE_VOTE_KEY,
    //     address: state.form.country.label,
    //     resource: {}
    //   }
    //   getYourReps.representatives.representativeInfoByAddress(params, function (err, response) {
    //     if (err) {
    //       console.log('Encountered error', err);
    //     } else {
    //       var gimel = response.result
    //       context.commit('setGoogleResponse', gimel)
    //       console.log('RESponse: ', gimel);
    //     }
    //   })
    // //   function loadClient() {
    // //     gapi.client.setApiKey(process.env.GOOGLE_VOTE_KEY)
    // //     return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/civicinfo/v2/rest')
    // //         .then(function() {
    // //           console.log('GAPI client loaded for API')
    // //         }, function(error) {
    // //           console.error('Error loading GAPI client for API')
    // //           return false
    // //         })
    // //       }
    // //   // Make sure the client is loaded before calling this method.
    // //   function execute() {
    // //     return gapi.client.civicinfo.representatives.representativeInfoByAddress({
    // //       'address': state.form.country.label,
    // //       'levels': null,
    // //       'roles': null,
    // //       'resource': {}
    // //     })
    // //       .then(function(response) {
    // //         // Handle the results here (response.result has the parsed body).
    // //         var gimel = response.result
    // //         context.commit('setGoogleResponse', gimel)
    // //
    // //         console.log('Response', response)
    // //       }, function(error) {
    // //         console.error('Execute error', error)
    // //       })
    // //     }
    // //   gapi.load('client')
    // }
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
