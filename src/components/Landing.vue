<template>
<!-- eslint-disable -->
  <div id="landing">
    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->
    <div id="USVoteHeader">
      MADE WITH SUPPORT FROM THE <a id="usvLink" href="https://www.usvotefoundation.org/" target="_blank">U.S. VOTE FOUNDATION</a>
    </div>
    <a id="logoLink" href="https://www.usvotefoundation.org/" target="_blank">
      <img hidden :src=" logFin "/>
    </a>
    <hr noshade  size="1" id="topLine"/>
    <h1 id="siteTitle" >THE  VOTER'S  COMPANION</h1>
    <div id="subtitle">
      FOR U.S. VOTERS
    </div>
    <div id="inputEverything">
      <!-- DO NOT CHANGE THE ID OF THIS INPUT! -->
      <input type="search" id="address-input" @input="updateValue($event.target.value)" @keyup.enter="searchEvent" placeholder="WHAT IS YOUR ADDRESS?" />
    </div>
    <hr noshade size="1" id="bottomLine"/>
    <div id="infoAndStarsWrapper">
      <div class="buttonWrapper">
        <div class="button spin3d">
          <span id="aa">REGISTER TO VOTE</span>
          <span id="bb">CONNECT WITH YOUR REPRESENTATIVES</span>
          <span id="cc">STAY INFORMED</span>
        </div>
      </div>
      <div id="starsWrapper">
        <img class="star" :src=" starOne "/>
        <img class="star" :src=" starTwo "/>
        <img class="star" :src=" starThree "/>
      </div>
    </div>

    <modal name="v--modal-box" class="v--modal-box" :width="200" :height="200" :delay="100" transition="scale">

        <div class="image">
          <img style="width: 23px; height: auto;" :src=" lightYellowStar "/>
        </div>
        <span style="font-family: Karla; color: cornsilk; text-align: center;"> LOADING... </span>

    </modal>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import places from 'places.js'
import carpet from '../assets/yellow_star.svg'
import star1 from '../assets/starOneLight.svg'
import star2 from '../assets/starTwoLight.svg'
import star3 from '../assets/starThreeLight.svg'
import logoFinal from '../assets/mauve2.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      logFin: logoFinal,
      lightYellowStar: carpet,
      starOne: star1,
      starTwo: star2,
      starThree: star3,
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
        // console.log(JSON.stringify(response.data, null, '\t'))
        const axiosUSVoteGet = axios.create()
        axiosUSVoteGet.get('/api/getVoterAPI').then(response => {
          // vAPI = response.data
          self.voterAPI = response.data
          console.log('getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n' + 'getUSVote went through' + '\n')
          // console.log('+ ---------------- self.voterAPI ---------------- +' + '\n' + JSON.stringify(self.voterAPI, null, '\t'))
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

      if (self.voterAPI.voterInfo.objects[0].lookup_tools) {
        var LTArray = self.voterAPI.voterInfo.objects[0].lookup_tools
        for (var dubs = 0; dubs < LTArray.length; dubs++) {
          if (LTArray[dubs].lookup_tool.id === 4) {
            if (!(LTArray[dubs].url === undefined)) {
              let ourURL = LTArray[dubs].url
              this.$store.commit('setUserBadgeURL', LTArray[dubs].url)
              console.log('\t' + '🖖' + '\n' + 'SUCCESS!' + '\n' + '\t' + '🎉' + '\n' + this.$store.getters.getUserBadgeURL)
              this.$store.commit('displayBadgeQuestionMark', true)
            }
          }
        }
      }
      this.$store.commit('setUSVoteElections', self.voterAPI.electionInfo)
      this.$store.commit('setVoterInformation', self.voterAPI.voterInfo)
      this.$router.push({path: 'main'})
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
#app {
  background-color: #4d5975;
}

#USVoteHeader {
  font-family: 'Karla', sans-serif;
  letter-spacing: .1em;
  color: #c5bfb9;
  padding-top: 5em;
  margin-bottom: .5em;
  position: relative;
  text-align: center;
  font-size: 1.2em;
}
a#usvLink {
  color: #c5bfb9 !important;
  text-decoration:none;
}
#usvLink:visited {
  color: #c5bfb9;
}
#topLine, #bottomLine {
  position: relative;
  width: 36em;
  top: 1em;
  margin: 0 auto;
  display: block;
  border: 0;
  border-top: 1px solid #c5bfb9;
  padding: 0;
}

#logoLink {
  z-index: 777;
  position: absolute;
  top: 3em;
  right: 8em;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
	-webkit-filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.3));
  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);
    filter:drop-shadow(4px 4px 0 #A57F70)*/
}

#siteTitle {
  z-index: 99;
  color: #F1AC6E;
  font-family: 'Karla', sans-serif !important;
  text-align: center;
  font-weight: 400;
  font-size: 2.5em;
  line-height: 110%;
  margin-top: 3.5em;
  position: relative;
  letter-spacing: .1em;
  /* text-shadow: 0.08em 0.08em 0 white; */
  /* -webkit-text-stroke: 3px #343434; */
}
#subtitle {
  position: relative;
  color: #c5bfb9;
  margin-top: 1.6em;
  text-align: center;
  letter-spacing: .1em;
  font-size: 85%;
}
#inputEverything {
  margin-top: 11em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin-bottom: 1.2em;
}
#address-input {
  padding-left: 15px;
  display:block;
  color: #c9bfb7;
  background-color: rgb(89, 99, 72);
  position: relative;
  width: 35em;
  margin: 0 auto;
  outline: none;
  font-size: 100%;
  letter-spacing: .08em;
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  transition: all 300ms ease-in-out;
  text-transform: uppercase;
  height: 34px;
  border-radius: .3em;
  box-shadow: inset 0px 2px 8px 0px rgba(51, 45, 40, 0.38), inset 0px 1px 3px -2px rgba(43, 40, 36, 0.43), 0 1px 1px 0px rgb(138, 125, 156);
}

input:focus {
  outline: none;
  color: #c9bfb7 !important;
  background-color: rgb(102, 113, 83);
}
input:hover::-webkit-input-placeholder {
  color: #c9bfb7 !important;
}
input:focus::-webkit-input-placeholder {
  color: #c9bfb7 !important;
}
#address-input:hover {
  background-color: rgb(102, 113, 83) !important;
}
#address-input:focus {
  color: #c9bfb7 !important;
  background-color: rgb(102, 113, 83)!important;
}
.ap-input {
  border: none !important;
}
.ap-input-icon svg {
  border: 0;
  background: transparent;
  position: relative;
  -webkit-transform: translateY(7%);
  transform: translateY(7%);
  outline: none;
  right: 7.5em;
}
.ap-icon-clear {
  right: 4.25rem;
}
.ap-dropdown-menu {
  margin-top: 0px;
  /* width: 26em;
  top: 3.1em !important;
  left: 5.1em !important; */
}
input:focus {
  outline: none;
  border: none;
  /* color: #6b6255 !important; */
  font-weight: 400;
  font-size: 100% !important;
}

input::placeholder {
  color: rgb(175, 168, 161) !important;
}

#infoAndStarsWrapper {
  width: 37em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 45px;
  margin-top: 1.5em;
}

.buttonWrapper {
  width: 100%;
}
.button {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  display: block;
  font-family: 'Karla', sans-serif;
  color: #c5bfb9;
  font-size: 1.2em;
  margin: 0 10px;
  position: relative;
  letter-spacing: .08em;
}
#aa, #bb, #cc {
  font-smoothing: antialiased !important;
  font-smooth: always;
}
.button.spin3d {
  height: 40px;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
}
.button.spin3d span {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  transition: all cubic-bezier(0, 0, 0.2, 1);
  text-align: left;
  line-height: 40px;
  left: 0;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}
.button.spin3d #aa {
  -webkit-animation: rollOutaa1 8s, rollOutaa2 8s 8s infinite;
  animation: rollOutaa1 8s, rollOutaa2 8s 8s infinite;
}
.button.spin3d #bb {
  -webkit-animation: rollOutbb 8s infinite;
  animation: rollOutbb 8s infinite;
}
.button.spin3d #cc {
  -webkit-animation: rollOutcc 8s infinite;
  animation: rollOutcc 8s infinite;
}
img.star {
  height: 23px;
  width: auto;
  margin-left: .5em;
}
#starsWrapper {
  position: absolute;
  right: .8em;
  top: 0.5em;
}

#landing {
  position: relative;
}

/* loading modal above this line ================================= */
@media screen and (min-width:250px) and (max-width:320px) {

  #inputEverything {
    font-size: 100%;
    margin-top: 3.1rem;
  }
  #address-input {
    padding-left: 9px;
    position: absolute;
  }
  #landingInfo {
    width: 95vw;
    right: 1rem;
  }
  .ap-dropdown-menu {
    left: -1vw !important;
  }

  .logoBlock {
    width: 14.6rem;
    height: 11rem;
    left: 0px;
    top: 1rem;
  }

}
@media screen and (min-width:320px) and (max-width:374px) {
  .logoBlock {
    top: 1.3rem;
    left: -1px;
  }
  #inputEverything {
    font-size: 100%;
    margin-top: 3.1rem;
  }
  #address-input {
    padding-left: 9px;
  }
  .ap-input-icon {
    right: -34vw !important;
  }
}
@media screen and (min-width:375px) and (max-width: 413px) {
  #inputEverything {
    font-size: 100%;
    margin-top: 2.5rem;
  }
  .logoBlock {
    top: 2rem;
    left: -2px;
    width: 18.5rem;
  }
}
@media screen and (min-width:414px) and (max-width: 500px) {
  .logoBlock {
    top: 2.5rem;
    left: -2px;
  }
  #inputEverything {
    margin-top: 4rem;
  }
}
@media screen and (min-width: 365px) and (max-width: 413px) {
  .ap-dropdown-menu {
    left: 6vw !important;
  }
  #brownType {
    top: -10rem;
    left: 3px;
  }
  .ap-input-icon {
    right: -34vw !important;
  }
}
@media screen and (min-width: 414px) and (max-width: 433px) {
  .ap-dropdown-menu {
    left: 6.5vw !important;
  }
}
@media screen and (min-width: 434px) and (max-width: 467px) {
  .ap-dropdown-menu {
    left: 7vw !important;
  }
}
@media screen and (min-width: 468px) and (max-width: 524px) {
  .ap-dropdown-menu {
    left: 7.5vw !important;
  }
}
@media screen and (min-width: 525px) and (max-width: 557px) {
  .ap-dropdown-menu {
    left: 8vw !important;
  }
}
@media screen and (min-width: 558px) and (max-width: 597px) {
  .ap-dropdown-menu {
    left: 8.25vw !important;
  }
}
@media screen and (min-width: 598px) and (max-width: 635px) {
  .ap-dropdown-menu {
    left: 8.5vw !important;
  }
}
@media screen and (min-width: 636px) and (max-width: 750px) {
  .ap-dropdown-menu {
    left: 9vw !important;
  }
}
@media screen and (max-width: 480px) {
  #landingInfo {
    width: 95vw;
    right: 1rem;
  }
}
@media screen and (max-width: 692px) {
  #logoLink {
    visibility: hidden;
  }
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  #landingInfo {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 750px) {
  #address-input {
    width: 76vw !important;
    padding-top: 6px;
    /* padding-bottom: .4em; */
  }
  .ap-dropdown-menu {
    width: 73vw !important;
  }
  .ap-input-icon {
    right: -35.5vw;
    left: unset;
  }
}
@keyframes rollOutaa1 {
  0% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
  }
  25% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
            transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  27% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
            transform: rotateX(-90deg) translateZ(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
            transform: rotateX(-90deg) translateZ(20px);
    opacity: 0;
  }
}
@keyframes rollOutbb {
  0% {
    -webkit-transform: rotateX(90deg);
            transform: rotateX(90deg);
    opacity: 0;
    }
  25% {
    -webkit-transform: rotateX(90deg) translateZ(20px);
    transform: rotateX(90deg) translateZ(20px);
  }
  26% {
    opacity: 0;
  }
  27% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
    transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  50% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
    transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  52% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
    transform: rotateX(-90deg) translateZ(20px);
  }
  100% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
    transform: rotateX(-90deg) translateZ(20px);
  }
}
@keyframes rollOutcc {
  0% {
    -webkit-transform: rotateX(90deg) translateZ(20px);
            transform: rotateX(90deg) translateZ(20px);
  }
  50% {
    -webkit-transform: rotateX(90deg) translateZ(20px);
            transform: rotateX(90deg) translateZ(20px);
    opacity: 0;
  }
  51% {
    opacity: 0;
  }
  52% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
    transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  97% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
    transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  98.1% {
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
    transform: rotateX(-90deg) translateZ(20px);
    opacity: 0;
  }
}
@keyframes rollOutaa2 {
  0% {
    -webkit-transform: rotateX(90deg) translateZ(20px);
            transform: rotateX(90deg) translateZ(20px);
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  2% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
            transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  25% {
    -webkit-transform: rotateX(0deg) translateZ(20px);
            transform: rotateX(0deg) translateZ(20px);
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  27% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
            transform: rotateX(-90deg) translateZ(20px);
  }
  100% {
    -webkit-transform: rotateX(-90deg) translateZ(20px);
            transform: rotateX(-90deg) translateZ(20px);
  }
}


</style>
