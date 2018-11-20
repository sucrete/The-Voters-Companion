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

    <img id="hrufkins" :src=" landingSquare " />

    <div id="inputEverything">
      <!-- DO NOT CHANGE THE ID OF THIS INPUT! -->
      <input type="search" id="address-input" @input="updateValue($event.target.value)" @keyup.enter="searchEvent" placeholder="What is your address?" />
    </div>

    <div id="landingInfo">
      REGISTER TO VOTE <br /> <br />CONNECT WITH YOUR REPS <br /><br />STAY INFORMED
    </div>

    <modal name="v--modal-box" class="v--modal-box" :width="200" :height="200" :delay="100" transition="scale">

        <div class="image">
          <img style="height: 50px; width: auto; " :src=" lightYellowStar "/>
        </div>
        <span style="font-family: IBM Plex Sans Condensed; font-weight: 600;"> Loading... </span>

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
import greenSquare from '../assets/votrLandingSquare.svg'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      logFin: logoFinal,
      lightYellowStar: carpet,
      landingSquare: greenSquare,
      stateID: '',
      googvotekey: process.env.GOOGLE_API_KEY,
      voterAPI: '',
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
      this.searchGoogleAPI()
    },
    searchGoogleAPI () {
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
        this.postAndGetUSVoteInformation()
      }).catch(err => {
        console.log('searchGoogleAPI method failed. error----> ' + err)
      })
    },
    postAndGetUSVoteInformation () {
      const axiosUSVotePost = axios.create()
      var state = this.$store.getters.showMeDatState
      // var allStates = state.allStatesResponse.data.objects
      var stateName = state.algoliaResponse.administrative
      axiosUSVotePost.post('/api/postVoterAPI',{
        data: {
          USVoteKey: process.env.VOTE_KEY,
          voterStateName: stateName
        }
      }).then(response => {
        console.log('your USVotePost method occurred')
        console.log('\n' + 'it worked, bruv!' + '\n' + '\n')
        console.log(JSON.stringify(response.data, null, '\t'))
        const axiosUSVoteGet = axios.create()
        axiosUSVoteGet.get('/api/getVoterAPI').then(response => {
          // vAPI = response.data
          self.voterAPI = response.data
          console.log('getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n')
          console.log('+ ---------------- self.voterAPI ---------------- +' + '\n' + JSON.stringify(self.voterAPI, null, '\t'))
          this.setInfoAndPush()
        }).catch(function (error) {
          console.log('getVoterAPI DIDN\'T go through' + '\n' + 'getVoterAPI DIDN\'T go through' + '\n' + 'getVoterAPI DIDN\'T go through' + '\n' + 'getVoterAPI DIDN\'T go through' + '\n' + 'getVoterAPI DIDN\'T go through'  + '\n' + error)
        })
      }).catch(function (error) {
        console.log('POST test error ----->  ' + error)
      })
    },
    setInfoAndPush () {
      console.log('setInfoAndPush fired')
      var entireGoogleResponse = this.$store.getters.stuper
      var entireElectionInfoFromThisDotVoterAPI = self.voterAPI.electionInfo
      var entireVoterInfoFromThisDotVoterAPI = self.voterAPI.voterInfo
      console.log('entireGoogleResponse' + '\n' + '\n' + JSON.stringify(entireGoogleResponse, null, '\t'))
      console.log('entireElectionInfoFromThisDotVoterAPI' + '\n' + '\n' + JSON.stringify(entireElectionInfoFromThisDotVoterAPI, null, '\t'))

      this.$store.commit('setUSVoteElections', self.voterAPI.electionInfo)
      this.$store.commit('setVoterInformation', self.voterAPI.voterInfo)
      this.$router.push({path: 'overview'})
    },
    focusHelper () {
      var daletShin = document.getElementById('address-input')
      var daletSemach = document.getElementById('inputEverything')
      setTimeout(function () {
        daletShin.focus()
        daletSemach.style.cssText = 'z-index: 700;'
      }, 1500)
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
  z-index: 7;
  left: 11.75rem;
  top: 6rem;
  width: 19.2rem;
  height: auto;
}

#logoLink {
  z-index: 777;
  position: absolute;
  top: 2.1rem;
  right: 4.8rem;
  /* filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.35));
	-webkit-filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.35)); */
  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);
    filter:drop-shadow(4px 4px 0 #A57F70) */
}

#landingInfo {
  position: relative;
  color: rgb(64, 44, 24);
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
  background-color: rgb(222, 232, 207);
}

#brownType {
  z-index: 99;
  color: rgb(242, 128, 63);
  font-family: 'Roboto Condensed', sans-serif !important;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 90%;
  left: 2.2rem;
  top: .5rem;
  margin-top: 2.5rem;
  position: absolute;
  text-shadow: 0.08em 0.08em 0 white;
  /* -webkit-text-stroke: 3px #343434; */
}
.logoBlock {
  margin-top: 10px;
  position: relative;
  height: 12.75rem;
  width: 17rem;
  margin: 0 auto;
  top: 7rem;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 8;
  /* background-image: url("https://i.imgur.com/HSwsLkl.png"); */
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
  font-size: 130%;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  /* border-bottom: 1px solid rgba(77, 166, 70, 0.35);
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px rgba(77, 166, 70, 0.35), 0 1px 0 rgba(77, 166, 70, 0.35); */
}
#address-input:focus{
  outline: none;
  box-shadow: 0 2px 2px rgba(0,0,0,0.05), 0 3px 6px rgba(0,0,0,0.15);
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

/* loading modal below this line ================================= */
/* The modal-loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN */
.v--modal {
  border-radius: 100% !important;
  box-sizing: none !important;
  position: relative;
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
  top: 2.1rem;
  left: 3.2rem;
  position: relative;
}
.v--modal-box span {
  color: white;
  display: block;
  font-size: 115%;
  width: 100%;
  text-align: center;
  position: absolute !important;
  z-index: 778;
  bottom: 50px;
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

  }
  55% {
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  75% {
    opacity: 0;
  }

  100%{
    transform: rotate(-90deg);
  }
}

.v--modal-overlay .v--modal-box {
  overflow: visible !important;
  position: relative !important;
  background-color: #e9e8cb;
  box-shadow: 0px 8px 12px rgba(58, 68, 41, 0.2), 0px 12px 20px rgba(0, 0, 0, .1), 0px 0px 17px rgba(0, 0, 0, .14)!important;
}

.v--modal-overlay {
  background-color: rgba(0, 0, 0, .4);
  border-radius: 0px;
  /* width: 100vw;
  height: 100vh; */
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
@media screen and (min-width:300px) and (max-width:568px) {
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  #inputEverything {
    font-size: 100%;
    margin-top: 3.25rem;
  }
  #address-input {
    width: 88vw !important;
    padding-top: 5px;
    padding-left: 9px;
    position: absolute;
    right: 2.7vw;
  }
  #landingInfo {
    width: 95vw;
    right: 1rem;
  }
  #logoLink {
    visibility: hidden;
  }
  .logoBlock {
    top: 14px;
    right: 4px;
  }
  .ap-dropdown-menu {
    width: 85vw !important;
    left: 0vw !important;
  }
  .ap-input-icon {
    right: -1.5vw;
  }
  .ap-icon-clear {
    right: 2.75vw;
  }
  #app {
    min-height: 98.9vh !important;
    max-height: 99vh !important;
  }
  #hrufkins {
    top: .9rem;
    height: auto;
    left: -.1rem;
  }
  .logoBlock {
    width: 14.6rem;
    height: 11rem;
    left: 0px;
    top: 1.7rem;
  }
  #brownType {
    font-size: 2rem;
    left: 2.1rem;
    top: .4rem;
  }
}

</style>
