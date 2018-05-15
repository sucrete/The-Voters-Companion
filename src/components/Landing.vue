<template>
<!-- eslint-disable -->
  <div id="landing">
    <div id="verticalLine"></div>
    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;" hidden><router-link  to="overview" >Hello component</router-link></h2>
    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->

    <div class="logoBlock">
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
    </div>

    <div id="inputEverything">
      <input type="search" id="address-input" @input="updateValue($event.target.value)" @keyup.enter="searchEvent" placeholder="What is your address?" />
    </div>

    <div id="landingInfoGrid">
      <div id="landingInfo">
        Register. <br />
        Connect with your representatives. <br />
        Stay informed.
      </div>
      <div id="landingLogoWrapper">
        <img id="USVoteLogoCheck" :src=" USVoteLogoCheck "/> <br />
        <img id="USVoteLogoText" :src=" USVoteLogoText" />
      </div>
    </div>

    <modal name="v--modal-box" class="v--modal-box" :width="200" :height="200" :delay="100" transition="scale">
      <div class="daletVav">
        <div class="image">
          <img style="height: 50px; width: auto; " :src=" lightYellowStar "/>
        </div>
        <span style="font-family: Francois One;"> Loading... </span>
      </div>
    </modal>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
// import Places from 'vue-places'
import anime from 'animejs'
// import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
import places from 'places.js'
import soup from '../assets/USVF_logo_fnl/logotoedit.png'
import drink from '../assets/usvote-logo-small.png'
import carpet from '../assets/light_yellow_star.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      USVoteLogoText: soup,
      lightYellowStar: carpet,
      USVoteLogoCheck: drink,
      rican: 'challa!',
      stateID: '',
      googvotekey: process.env.GOOGLE_API_KEY,
      form: {
        country: {
          label: null,
          data: {}
        }
      }
    }
  },
  computed: {
    state () {
      return this.$store.getters.showMeDatState
    }
  },
  methods: {
    show () {
      this.$modal.show('v--modal-box')
    },
    hide () {
      this.$modal.hide('v--modal-box')
    },
    setUsersAddress (val) {
      var $address2 = document.querySelector('#address-value2')
      $address2.textContent = this.addy
      this.$store.commit('setUsersAddress', val)
    },
    searchEvent () {
      this.show()
      this.searchAPIs()
    },
    // need any of these interpolated vars? { state, commit, dispatch }
    searchAPIs () {
      var state = this.$store.getters.showMeDatState
      var noJoke = process.env.GOOGLE_API_KEY
      var postcode = ''
      if (!(state.form.postcode === undefined)) {
        postcode = state.form.postcode
      }
      var chainedAddress = state.form.country.label + postcode
      var convertedAddress = chainedAddress.replace(', United States of America', ' ').split(' ').join('+')
      var convertedAddressFinal = convertedAddress.split(',').join('%2C')
      axios.get('https://www.googleapis.com/civicinfo/v2/representatives?key=' + noJoke + '&address=' + convertedAddressFinal).then(response => {
        this.$store.commit('setGoogleResponse', response)
        this.getStateAndCounty()
      }).catch(err => {
        console.log('searchAPIs method failed. error----> ' + err)
      })
    },
    getStateAndCounty () {
      var state = this.$store.getters.showMeDatState
      var stateName = state.algoliaResponse.administrative.split(' ').join('+')
      var counties = state.algoliaResponse.hit.county
      /* eslint-disable */
      var countyName = null
      if (counties[0].includes('County')) {
        countyName = counties[0].match(/^(.*?)\ County/)[1].split(' ').join('+')
      } else {
        countyName = counties[0].split(' ').join('+')
      }
      /* eslint-enable */
      const axiosInstance2 = axios.create({
        params: {
          state_name: stateName
          // county_name: countyName
        },
        headers: {
          'Authorization': 'OAuth ' + process.env.VOTE_KEY
        }
      })
      axiosInstance2.get('https://localelections.usvotefoundation.org/v1/eod/regions').then(response => {
        this.$store.commit('setEODResponse', response)
        this.search4Elections()
      }).catch(err => {
        console.log('your EOD API call failed. error --> ' + err)
      })
    },
    search4Elections () {
      var state = this.$store.getters.showMeDatState
      var stateURI = state.EODResponse.data.objects[0].state
      /* eslint-disable */
      this.stateID = stateURI.match(/\/([0-9]+)(?=[^\/]*$)/)[1]
      /* eslint-enable */
      if (this.stateID.length === 2) {
        this.stateID = 'S' + this.stateID
      } else {
        this.stateID = 'S0' + this.stateID
      }

      const axiosInstance = axios.create({
        params: {
          state_id: this.stateID
        },
        headers: {
          'Authorization': 'Token ' + process.env.VOTE_KEY
        }
      })
      axiosInstance.get('https://localelections.usvotefoundation.org/api/v1/elections').then(response => {
        this.$store.commit('setUSVoteElections', response)
        this.search4VoterInfo()
      }).catch(err => {
        console.log('your Elections API call failed. error --> ' + err)
      })
    },
    search4VoterInfo () {
      const axiosInstance3 = axios.create({
        params: {
          state_id: this.stateID
        },
        headers: {
          'Authorization': 'Token ' + process.env.VOTE_KEY
        }
      })
      axiosInstance3.get('https://localelections.usvotefoundation.org/api/v1/state_voter_information').then(response => {
        console.log('!!!!!!!!! STATE VOTER INFORMATION, BOYO !!!!!!!!! ' + '\n' + '\n' + '\n' + JSON.stringify(response, null, '\t'))
        this.$store.commit('setVoterInformation', response)
        this.$router.push({path: 'overview'})
      }).catch(err => {
        console.log('STATE VOTER INFORMATION search FAAAAAAAAAAAAAIIIIIILLLLLLLLLLLLLLEEEDDD!!!!!!!!!' + '\n' + '\n' + '\n' + 'yer err ======> ' + err)
      })
    },
    focusHelper () {
      var daletShin = document.getElementById('address-input')
      var daletSemach = document.getElementById('inputEverything')
      setTimeout(function () {
        daletShin.focus()
        daletSemach.style.cssText = 'z-index: 700;'
      }, 500)
    },
    updateValue (val) {
      this.$store.commit('setUsersAddress', val)
    },
    updatePostcode (val) {
      this.$store.commit('setUsersPostcode', val)
    },
    updateSuggestion (val) {
      this.$store.commit('setSuggestion', val)
    }
  },
  mounted () {
    this.focusHelper()

    var placesAutocomplete = places({
      container: document.querySelector('#address-input'),
      type: 'address',
      countries: ['us'],
      autoselect: true,
      value: function (suggestion) {
        return suggestion
      }
    })

    placesAutocomplete.on('change', (e) => {
      this.updateValue(e.suggestion.value)
      this.updatePostcode(e.suggestion.postcode)
      this.updateSuggestion(e.suggestion)
    })

    placesAutocomplete.on('clear', function () {
      var blank = null
      this.updateValue(blank)
      this.updatePostcode(blank)
    })
    placesAutocomplete.on('autocomplete:selected', function (e, suggestion, dataset) {
      this.updateValue(e.suggestion.value)
      this.updatePostcode(e.suggestion.postcode)
    })
  },
  beforeDestroy () {
    this.placesAutocomplete.destroy()
    return false
  },
  created () {
  }
}
</script>
<!-- if you add "scoped" next to your <style> tag your modal will not be a circle -->
<style >
#landingInfoGrid {
  margin: 1rem;
  width: 42rem;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 2.5rem;
}
#landingInfo {
  color: white;
  line-height: 150%;
  text-align: left;
  font-family: 'Francois One', sans-serif;
  font-size: 140%;
  grid-column: 1 / 2;
}
#landingLogoWrapper {
  grid-column: 2 / -1;
}

#app {
  background-color: rgb(17, 122, 63);
}

#verticalLine {
  position: absolute;
  width: inherit;
  height: 45rem;
  top: -.6rem;
  border-left: 2px solid rgb(19, 136, 70);
  left: -.8rem;
  z-index: 30;

}
@import url('https://fonts.googleapis.com/css?family=Chicle');

/* The loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN */
.v--modal {
  border-radius: 100% !important;
  box-sizing: none !important;
}
.daletVav {
  width: 100px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  top: 0; right: 0; left: 0; bottom: 0;
  margin: auto;
}
.image {
  width: 100px;
  height: 160px;
  font-size: 40px;
  text-align: center;
  transform-origin: bottom center;
  animation: 3s rotate infinite !important;
  opacity: 0;
  color: blue;
  left: 1.5rem;
}
.daletVav span {
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
}

/* The loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN  */
@keyframes rotate{
  0% {
    transform: rotate(90deg);
  }
  10% {
    opacity: 0;
  }
  35% {
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: rotate(-90deg);
  }
}

@keyframes rotate{
  0% {
    transform: rotate(90deg);
  }
  10% {
    opacity: 0;
  }
  35% {
    transform: rotate(0deg);
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: rotate(-90deg);
  }
}

.v--modal-box {
  border-style: solid;
  border-width: 7px;
  border-color: #DAF7A6;
  -webkit-box-shadow:  0 2px 20px 0 rgba(0,0,0,.4);
  -moz-box-shadow:  0 2px 20px 0 rgba(0,0,0,.4);
  box-shadow:  0 2px 20px 0 rgba(0,0,0,.4);
  /* box-shadow: 0 2px 20px 0 rgba(0,0,0,.4); */
  box-sizing: none;
}
.v--modal-overlay {
  background-color: rgba(255, 255, 255, 0.34);
  border-radius: 0px;
  width: 100vw;
  height: 100vh;
  border-style: none;
}
.scale-enter-active, .scale-leave-active {
 transition: all 0.5s;
}
.scale-enter, .scale-leave-active {
 opacity: 0;
 transform: scale(0.3) translateY(24px);
}

.infoline {
  line-height: 125%;
}

#brownType {
  color: #f2cbbc;
  font-family: 'Chicle', serif !important;
  text-align: left;
  font-size: 9rem;
  line-height: 80%;
  left: 1.5rem;
  margin-top: 2.5rem;
  position: absolute;
}
.logoBlock {
  position: relative;
  height: 23rem;
  left: 2rem;
  margin: 0 auto;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 6;
}

.ap-input-icon {
  right: 1.5rem;
}
.ap-icon-clear {
  right: 1.75rem;
}
#inputEverything {
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
}
#address-input {
  padding-right: .5rem;
  width: 40.5rem;
  margin: 0 auto;
  outline: none;
  border: none;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  background-color: #F5F4EA;
  border-bottom: 1px solid rgba(77, 166, 70, 0.35);
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px rgba(77, 166, 70, 0.35), 0 1px 0 rgba(77, 166, 70, 0.35);
}
input:focus {
  outline: none;
  border: none;
  color: #e24b11;
}
input::-webkit-input-placeholder {
  color: #7c7c7c !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #7c7c7c !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #7c7c7c !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #7c7c7c !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #7c7c7c !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}

#landing {
  position: relative;
}

</style>
