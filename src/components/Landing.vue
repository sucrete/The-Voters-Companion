<template>
<!-- eslint-disable -->
  <div id="landing">
    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->
    <a id="logoLink" href="https://www.usvotefoundation.org/" target="_blank">
      <img :src=" logFin "/>
    </a>
    <div class="logoBlock">
      <h1 id="brownType" >THE<br>VOTER'S<br>COMPANION</h1>
    </div>

    <img id="hrufkins" src="https://cdn.rawgit.com/sucrete/392a487c4fe9b943f8b78e7dfb0a4667/raw/0d949f232054fe1c787ce02d4b123b1b2101bcea/boldsquare.svg" />

    <div id="inputEverything">
      <input type="search" id="address-input" @input="updateValue($event.target.value)" @keyup.enter="searchEvent" placeholder="What is your address?" />
    </div>

    <div id="landingInfo">
      Register to vote. <br /> <br />Connect with your representatives. <br /><br />Stay informed.
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
        // console.log('RESPONSE SUCCESS. HERE IT BE ---->   ' + JSON.stringify(response, null, '\t'))
        this.getStates()
      }).catch(err => {
        console.log('searchAPIs method failed. error----> ' + err)
      })
    },
    getStates () {

      const axiosInstanceTest = axios.create()
      const axiosGetTest = axios.create()

      axiosInstanceTest.post('/',{
        data: {
          USVoteKey: process.env.VOTE_KEY
        }
      }).then(response => {
        console.log('ur post good -----> ')
      }).catch(error => {
        console.log('u suk and here\'s why ----> ' + error)
      })

      axiosGetTest.get('/').then(response => {
        console.log('yep yep yep yep yep' + '\n' + 'yep yep yep yep yep' + '\n' + 'yep yep yep yep yep' + '\n' + 'yep yep yep yep yep' + '\n' + 'yep yep yep yep yep' + '\n' + JSON.stringify(response))
      }).catch(error => {
        console.log('nope nope nope nope nope' + '\n' + 'nope nope nope nope nope' + '\n' + 'nope nope nope nope nope' + '\n' + 'nope nope nope nope nope' + '\n' + 'nope nope nope nope nope'  + '\n' + error)
      })

      const axiosInstance2 = axios.create()
      axiosInstance2.get('https://api.usvotefoundation.org/elections/v1/states',{
        params: {
          limit: 57
          // county_name: countyNames
        },
        headers: {
          'Authorization': 'Token ' + process.env.VOTE_KEY,
          'Content-Type': 'application/json, text/plain, */*'
        }
      }).then(response => {
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
          'Authorization': 'Token ' + process.env.VOTE_KEY,
          'Cache-Control': 'no-cache'
        }
      })
      axiosInstance.get('https://api.usvotefoundation.org/elections/v1/elections').then(response => {
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
      axiosInstance3.get('https://api.usvotefoundation.org/elections/v1/state_voter_information').then(response => {
        // console.log('!!!!!!!!! STATE VOTER INFORMATION, BOYO !!!!!!!!! ' + '\n' + '\n' + '\n' + JSON.stringify(response, null, '\t'))
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
#hrufkins {
  position: absolute;
  z-index: 101;
  left: 11.75rem;
  top: 6rem;
  width: 19.2rem;
  height: auto;
}
#whiteVerticalElement {
  width: 1.5rem;
  height: 18rem;
  z-index: 1;
  background-color: white;
  position: absolute;
  left: calc(50% - .75rem);
  top: 50%;
}
#logoLink {
  z-index: 777;
  position: absolute;
  top: 3rem;
  right: 3rem;
  /* filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.35));
	-webkit-filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.35)); */
  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);
    filter:drop-shadow(4px 4px 0 #A57F70) */
}

#landingInfo {
  position: relative;
  color: #3f5586;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: center;
  width: 20rem;
  height: 13rem;
  top: 1rem;
  line-height: 110%;
  padding: 1rem;
  z-index: 88;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 700;
}

#app {
  background-color: #e9f7df;
}

#brownType {
  z-index: 99;
  color: #3f5586;
  font-family: 'Roboto Condensed', serif !important;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 90%;
  left: 1.5rem;
  margin-top: 2.5rem;
  position: absolute;
  text-shadow: 0.08em 0.08em 0 white;
  /* -webkit-text-stroke: 3px #343434; */
}
.logoBlock {
  position: relative;
  height: 12.75rem;
  width: 17rem;
  margin: 0 auto;
  top: 7rem;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 6;
  background-color: #ebe2cb;
  /* background-image: url("https://i.imgur.com/HSwsLkl.png"); */
  border-style: solid;
  border-width: .75rem;
  border-color: white;
  z-index: 100;
}

.ap-input-icon {
  right: 4rem;
}
.ap-icon-clear {
  right: 4.25rem;
}
#inputEverything {
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
#address-input {
  padding-left: 1rem;
  display:block;
  border:none;
  background-color: white;
  position: relative;
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
  color: #696969;
  font-weight: 600;
}
input::-webkit-input-placeholder {
  color: #696969 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #696969 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #696969 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #696969 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #696969 !important;
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
