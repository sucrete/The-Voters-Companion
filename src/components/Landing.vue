<template>
<!-- eslint-disable -->
  <div id="landing">
    <div id="verticalLine"></div>
    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;" hidden><router-link  to="overview" >Hello component</router-link></h2>
    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->

    <div class="logoBlock">
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
      <a id="logoLink" href="https://www.usvotefoundation.org/" target="_blank">
        <img :src=" logFin "/>
      </a>
    </div>

    <div id="inputEverything">
      <input type="search" id="address-input" @input="updateValue($event.target.value)" @keyup.enter="searchEvent" placeholder="What is your address?" />
      <span class="highlight"></span>
      <span class="bar"></span>
    </div>

    <div id="landingInfo">
      Register to vote. Connect with your representatives. Stay informed.
    </div>

    <modal name="v--modal-box" class="v--modal-box" :width="200" :height="200" :delay="100" transition="scale">
      <div class="daletVav">
        <div class="image">
          <img style="height: 50px; width: auto; " :src=" lightYellowStar "/>
        </div>
        <span style="font-family: IBM Plex Sans Condensed; font-weight: 600;"> Loading... </span>
      </div>
    </modal>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
// import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
import places from 'places.js'
import carpet from '../assets/light_yellow_star.png'
import logoFinal from '../assets/mauve.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      logFin: logoFinal,
      lightYellowStar: carpet,
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
        this.getStates()
      }).catch(err => {
        console.log('searchAPIs method failed. error----> ' + err)
      })
    },
    getStates () {

      // var counties = state.algoliaResponse.hit.county
      /* eslint-disable */
      // var countyName = null
      // if (counties[0].includes('County')) {
      //   countyName = counties[0].match(/^(.*?)\ County/)[1].split(' ').join('+')
      // } else {
      //   countyName = counties[0].split(' ').join('+')
      // }
      /* eslint-enable */
      const axiosInstance2 = axios.create({
        params: {
          limit: 57
          // county_name: countyName
        },
        headers: {
          'Authorization': 'Token ' + process.env.VOTE_KEY
        }
      })
      axiosInstance2.get('https://localelections.usvotefoundation.org/api/v1/states').then(response => {
        this.$store.commit('setAllStateIDs', response)
        this.search4Elections()
      }).catch(err => {
        console.log('your EOD API call failed. error --> ' + err)
      })
    },
    search4Elections () {
      var state = this.$store.getters.showMeDatState
      var allStates = state.allStatesResponse.data.objects
      var stateName = state.algoliaResponse.administrative
      /* eslint-disable */
      // this.stateID = stateURI.match(/\/([0-9]+)(?=[^\/]*$)/)[1]
      /* eslint-enable */
      allStates.forEach(where => {
        if (where.name === stateName) {
          this.stateID = where.id
        }
      })

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
        console.log('STATE VOTER INFORMATION search F003979003979AIIIIIILLLLLLLLLLLLLLEEEDDD!!!!!!!!!' + '\n' + '\n' + '\n' + 'yer err ======> ' + err)
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

#logoLink {
  z-index: 777;
  position: absolute;
  top: 4.8rem;
  right: 6rem;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.17));
	-webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.17));
  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);
    filter:drop-shadow(4px 4px 0 #A57F70) */
}

#landingInfo {
  color: #bcf2aa;
  font-family: 'Cambo', serif;
  font-size: 250%;
  text-align: left;
  width: 34rem;
  top: 30.5rem;
  line-height: 110%;
  margin-left: 4.75rem;
  margin-top: .75rem;
}

#app {
  background-color: rgb(17, 122, 63);
}

#verticalLine {
  opacity: 0;
  position: absolute;
  width: inherit;
  height: 46.2rem;
  top: -.6rem;
  border-left: 2px solid rgb(19, 136, 70, .75);
  left: -.8rem;
  z-index: 30;

}

#brownType {
  color: #f2cbbc;
  font-family: 'Chicle', serif !important;
  text-align: left;
  font-size: 8.5rem;
  line-height: 80%;
  left: 2.5rem;
  margin-top: 4.75rem;
  position: absolute;
  /* -webkit-text-stroke: 3px #343434; */
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
  right: 4rem;
}
.ap-icon-clear {
  right: 4.25rem;
}
#inputEverything {
  margin-top: 3.25rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
#address-input {
  width: 36rem;
  margin: 0 auto;
  outline: none;
  border: none;
  font-size: 130%;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
  /* border-bottom: 1px solid rgba(77, 166, 70, 0.35);
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px rgba(77, 166, 70, 0.35), 0 1px 0 rgba(77, 166, 70, 0.35); */
}
.ap-dropdown-menu {
  position: relative;
  width: 34rem;
  left: 4.25rem !important;
}
input:focus {
  outline: none;
  border: none;
  color: #f6c777;
  font-weight: 600;
}
input::-webkit-input-placeholder {
  color: #f6c777 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #f6c777 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #f6c777 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #f6c777 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #f6c777 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}

#landing {
  position: relative;
}

#e9_texte {
  font-size: 1.5rem;
  font-family:Arial;
}
#address-input	{
  padding-left: 1rem;
  display:block;
  border:none;
  border-radius: 0%;
  background-color: transparent;
  border-bottom: 2px solid #f6c777 !important;
}
#address-input:focus {
  outline:none;
}

/* BOTTOM BARS ================================= */
.bar 	{
  position:relative;
  display:block;
  width:300px; }

.bar:before, .bar:after 	{
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;
  background:#5264AE !important;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%;
}

/* active state */
#address-input:focus ~ .bar:before, #address-input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%;
  width:100px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
#address-input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#5264AE; }
  to 	{ width:0; background:transparent; }
}

/* loading modal below this line ================================= */
/* The modal-loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN */
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
  background-color: rgba(255, 255, 255, .5);
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
/* loading modal above this line ================================= */
</style>
