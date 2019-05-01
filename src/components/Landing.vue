<template>
<!-- eslint-disable -->
  <div id="landing">
    <div id="USVoteHeader">
      MADE WITH SUPPORT FROM THE <a id="usvLink" href="https://www.usvotefoundation.org/" target="_blank">U.S. VOTE FOUNDATION</a>
    </div>

    <hr noshade  size="1" id="topLine"/>
    <img id="usVotersIcon" :src=" usVotersIcon "/>
    <h1 id="siteTitle" >The<br />Voter's<br /> Companion</h1>
    <div id="inputEverything">
      <!-- DO NOT CHANGE THE ID OF THIS INPUT! -->
      <input type="search" id="address-input" @input="updateValue($event.target.value)" placeholder="What is your address?" />
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
        <span style="font-family: 'Roboto', sans-serif; color: white; text-align: center;"> LOADING... </span>
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
import lagoc from '../assets/united-states.svg'

export default {
  name: 'landing',
  data () {
    return {
      lightYellowStar: carpet,
      starOne: star1,
      starTwo: star2,
      starThree: star3,
      usVotersIcon: lagoc,
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
      container: document.getElementById('address-input'),
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
      this.searchEvent()
    })

    placesAutocomplete.on('clear', function () {
      var blank = null
      this.updateValue(blank)
      this.updatePostcode(blank)
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

footer {
  display: none;
}
#app {
  background-color: #acb4c5;
}

#USVoteHeader {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  letter-spacing: .07em;
  color: #c5bfb9;
  padding-top: 5em;
  margin-bottom: .3em;
  position: relative;
  text-align: center;
  font-size: 1.2em;
}
#USVoteHeader, a#usvLink, a#usvLink:visited, #subtitle, .button {
  color: #fff !important;
}
a#usvLink {
  text-decoration:none;
}
#topLine, #bottomLine {
  position: relative;
  width: 36em;
  top: 1em;
  margin: 0 auto;
  display: block;
  border: 0;
  border-top: 2px solid #f5f4f4;
  padding: 0;
}
#usVotersIcon {
  height: 120px;
  position: absolute;
  top: 13em;
}
#siteTitle {
  z-index: 99;
  font-family: 'Roboto', sans-serif;
  color: #374584;
  text-align: left;
  font-size: 4.5em;
  line-height: 100%;
  font-weight: 900;
  margin-top: .9em;
  padding-left: 1.6em;
  position: relative;
  letter-spacing: .05em;
  top: .8em;
  /* text-shadow: 0.08em 0.08em 0 white; */
  /* -webkit-text-stroke: 3px #343434; */
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
  padding-top: 2px;
  display:block;
  color: #807b77;
  background-color: #e0e0e0;
  position: relative;
  width: 35em;
  margin: 0 auto;
  outline: none;
  font-size: 100%;
  letter-spacing: .08em;
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  transition: all 300ms ease-in-out;
  height: 34px;
  border-radius: .3em;
  box-shadow: inset 0px 2px 6px 0px rgb(150, 153, 158), inset 0px 3px 12px -7px rgba(115, 117, 119, 0.65), 0 1px 1px 0px rgb(227, 229, 236);
}

input:focus {
  outline: none;
  color: #605c59 !important;
  background-color: #dad7d5;
}
input:hover::-webkit-input-placeholder {
  color: #605c59 !important;
}
input:focus::-webkit-input-placeholder {
  color: #605c59 !important;
}
#address-input:hover {
  background-color: #ececec !important;
}
#address-input:focus {
  color: #605c59 !important;
  background-color: #ececec !important;
}
/* #address-input:focus, #address-input:hover {
  box-shadow: inset 0 1px 1px 0px rgb(249, 249, 249);
} */
.ap-input {
  border: none !important;
}
.ap-input:hover ~ .ap-input-icon svg {
  fill: #6f6b68 !important;
}
.ap-input-icon svg {
  fill: #98938f !important;
  border: 0;
  background: transparent;
  position: relative;
  -webkit-transform: translateY(7%);
  transform: translateY(7%);
  outline: none;
  right: 5em;
  top: .13em;
}
.ap-icon-clear {
  right: 1.5em;
}
.ap-dropdown-menu {
  margin-top: 0px;
  width: 35em;
  top: 2.8em !important;
  left: 5.45em !important;
}
input:focus {
  outline: none;
  border: none;
  /* color: #6b6255 !important; */
  font-weight: 400;
  font-size: 100% !important;
}

input::placeholder {
  color: #807b77 !important;
}

#infoAndStarsWrapper {
  width: 37em;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  height: 45px;
  margin-top: 1.7em;
}

.buttonWrapper {
  width: 100%;
}
.button {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.2em;
  margin: 0 10px;
  position: relative;
  letter-spacing: .06em;
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


@media screen and (min-width:250px) and (max-width:320px) {

  #inputEverything {
    font-size: 100%;
    margin-top: 3.1rem;
  }
  #address-input {
    padding-left: 9px;
    position: absolute;
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
/* for iPhone 5 below */
@media screen and (min-width:315px) and (max-width:374px) {
  .logoBlock {
    top: 1.3rem;
    left: -1px;
  }
  #siteTitle {
    font-size: 3.6em !important;
  }
  #USVoteHeader {
    padding-top: 3em;
    margin: 0 7vw;
  }
  #USVoteHeader, .button {
    font-size: 1em !important;
  }
  #inputEverything {
    font-size: 100%;
    margin-bottom: 4em !important;
  }
  #address-input {
    padding-left: 9px;
  }
  #usVotersIcon {
    height: 90px;
  }
}

@media screen and (min-width: 365px) and (max-width: 413px) {
  .ap-dropdown-menu {
    left: 6vw !important;
  }

  .ap-input-icon.ap-icon-clear {
    right: -34.5vw !important;
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
@media screen and (max-width: 450px) {
  #infoAndStarsWrapper, .buttonWrapper, .spin3d > span {
    width: unset;
  }
}
/* below for screens widths on iPhone 5-8 */
@media screen and (max-width: 375px) {
  #app, body, #landing {
    width: 100vw;
    height: 100vw;
  }
  .ap-dropdown-menu {
    width: 80vw !important;
    left: 10vw !important;
  }
  .ap-input-icon svg {
    right: 6vw;
  }
  #siteTitle {
    letter-spacing: .02em;
    font-size: 4em;
    padding-left: .6em;
  }
}
@media screen and (max-width: 415px) and (max-width: 450px) {
  #usVotersIcon {
    right: 11vw;
  }
}
@media screen and (max-width: 375px) and (max-height: 700px) {
  #siteTitle {
    margin-top: .7em;
    margin-bottom: 1.4em;
  }
  #infoAndStarsWrapper, .buttonWrapper, .button.spin3d span {
    width: unset;
  }
  #inputEverything {
    margin-top: 2.5em;
    margin-bottom: 5.2em;
  }
  #address-input {
    padding-top: 4px !important;
    width: 85vw !important;
  }
  #usVotersIcon {
    top: 12.3em;
  }
  #USVoteHeader {
    font-size: 1.2em;
    padding-top: 5em;
  }
  .buttonWrapper {
    font-size: .95em;
    margin-left: .75em;
  }
  #starsWrapper {
    visibility: hidden;
    right: unset;
  }
  #address-input {
    padding-top: 4px !important;
  }
}

/* iPhone X below */
@media screen and (max-width: 375px) and (min-height: 701px) and (max-height: 812px) {
  #USVoteHeader {
    font-size: 1.2em;
    padding-top: 6em;
  }
  #siteTitle {
    margin-top: .9em;
    margin-bottom: .7em;
  }
  #usVotersIcon {
    top: 15em;
    right: 4em;
  }
  #starsWrapper {
    display: none;
  }
  #inputEverything {
    margin-top: 5.5em;
    margin-bottom: 5.5em;
  }
}
@media screen and (min-width: 750px) {
  #usVotersIcon {
    right: 8em;
  }
}
@media screen and (min-width: 450px) and (max-width: 750px) {
  #siteTitle {
    padding-left: 12.5vw;
  }
  #usVotersIcon {
    right: 15vw;
  }
}
@media screen and (max-width: 692px) {
  #logoLink {
    display: none;
  }
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

}

/* below for iPhone 6/7/8 plus  */
@media screen and (min-width: 413px) and (max-width: 432px) {
  #siteTitle {
    padding-left: 8vw !important;
  }
  .ap-input-icon svg {
    right: 7vw;
  }
  #inputEverything {
    margin-top: 6em !important;
    margin-bottom: 6em !important;
  }
  #USVoteHeader {
    width: 91%;
    margin: 0 auto;
  }
  #infoAndStarsWrapper {
    margin-left: 4vw;
  }
}
@media screen and (min-width: 319px) and (max-width: 415px) {
  #usVotersIcon {
    right: 10vw;
  }
}
@media screen and (min-width: 430) and (max-width: 750px) {
  .ap-input-icon {
    right: calc(2vw - 3vw*.9) !important;
    left: unset;
  }
}
@media screen and (min-width: 418px) and (max-width: 515px) {
  #infoAndStarsWrapper {
    padding-left: 6.3vw !important;
  }
  #USVoteHeader {
    padding-top: 4em;
    padding-left: 9vw;
    width: 92%;
  }
  #siteTitle {
    padding-left: 10vw !important;
  }
}
@media screen and (max-width: 515px) {
  #starsWrapper {
    display: none;
  }

}
@media screen and (max-width: 750px) {
  #address-input {
    width: 82vw;
  }
  .ap-dropdown-menu {
    width: 73vw;
  }

  #topLine, #bottomLine {
    width: 90%;
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
