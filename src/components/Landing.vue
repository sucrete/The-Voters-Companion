<template>

  <div id="landing">
    <div id="siteTitleWrapper">
      <h1 class="siteTitle" title="The">The</h1><br />
      <h1 class="siteTitle" title="Voter's">Voter's</h1><br />
      <h1 class="siteTitle" title="Companion">Companion</h1>
    </div>
    <div id="informationWrapper">
      <div id="inputEverything">
        <!-- DO NOT CHANGE THE ID OF THIS INPUT! -->
        <input type="search" id="address-input" @input="updateValue($event.target.value)" placeholder="What is your address?" />
      </div>
      <div id="infoForTheUser">
        A voting utility designed to spark engagement, The Voter's Companion keeps you clued-in to elections happening in your region, how to vote, and who your representatives are. Enter your address. Get registered. Stay informed.
      </div>
      <div id="USVoteHeader">
        Made with support from the <br />
        <a id="usvLink" href="https://www.usvotefoundation.org/" target="_blank">U.S. Vote Foundation</a>.
      </div>
      <img id="USSign" src="../assets/flag.svg" hidden>
      <img id="voteWithThis" src="../assets/pencil2.svg" />
    </div>
    <modal name="v--modal-box" class="v--modal-box" :width="200" :height="200" :delay="100" transition="scale">
        <div class="image">
          <img style="width: 35px; height: auto;" src="../assets/tumblr_inline_ml8fq8GKH11roozkr.gif"/>
        </div>
        <span style="font-family: 'Roboto', sans-serif; color: white; text-align: center;"> LOADING... </span>
    </modal>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import places from 'places.js'
import carpet from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
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
      paperNPencils: pen15,
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
#USSign {
  width: 65px;
  height: auto;
  position: absolute;
  right: 7.1em;
  bottom: 1.2em;
}
#voteWithThis {
  width: 65px;
  height: auto;
  position: absolute;
  right: 7.1em;
  bottom: 2em;
}
#app {
  background-color: #668ee4;
}
#infoForTheUser {
  padding: 5px 35px 0px;
  color: orange;
}
#USVoteHeader {
  padding: 0px 35px 40px;
  color: #9cacce;
}
#USVoteHeader, #infoForTheUser {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  position: relative;
  text-align: left;
  font-size: 1.5em;
}
a#usvLink, a#usvLink:visited {
  color: #9cacce !important;
}
#usvLink {
  text-decoration: none;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
#usvLink::before {
  content: " ";
  display: block;
  position: absolute;
  border-bottom: solid 2px #dadee6;
  bottom: 38px;
  width: 39.9%;
  /* left: 6.3%; */
  margin: 0 auto;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  /* z-index:-1; */
}
a#usvLink:hover {
  color: #668ee4 !important;
}
#usvLink:hover::before {
  border-bottom:solid 2px #668ee4;
}
#usVotersIcon {
  height: 120px;
  position: absolute;
  top: 13em;
}
#siteTitleWrapper {
  padding-bottom: .8em;
  position: relative;
  top: .5em;
}
.siteTitle:first-of-type {
  margin-top: .6em;
}
.siteTitle {
  z-index: 9;
  font-family: 'Eczar', serif;
  color: white;
  text-align: left;
  font-size: 5.5em;
  line-height: 75%;
  font-weight: 500;
  padding-left: 1.05em;
  /* padding-top: .3em; */
  position: relative;
  top: .8em;
}
.siteTitle::before {
  content: attr(title);
  position: absolute;
  -webkit-text-stroke: 0.1em #668ee4;
  left: 0;
  top: 0;
  padding-left: 1.05em;
  z-index: -1;
}
#informationWrapper {
  background-color: rgb(249, 245, 240);
  width: 35em;
  height: 25em;
  border-radius: .5em;
  margin: 0 auto;
}
.ap-dataset-places * {
  font-family: 'Roboto', sans-serif;
}
#inputEverything {
  margin-top: 6.5em;
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
  background-color: #fbfbfb;
  position: relative;
  /* width: 35em !important; */
  margin: 0 auto;
  outline: none;
  font-size: 1.15em;
  letter-spacing: .05em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  transition: all 300ms ease-in-out;
  height: 38px;
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
  border-bottom-left-radius: 0em;
  border-bottom-right-radius: 0em;
  /* box-shadow: inset 0px 2px 6px 0px rgb(150, 153, 158), inset 0px 3px 12px -7px rgba(115, 117, 119, 0.65), 0 1px 1px 0px rgb(227, 229, 236); */
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
  background-color: white !important;
}
#address-input:focus {
  color: #605c59 !important;
  background-color: white !important;
}
#address-input:focus {
  border-color: rgba(230, 134, 23, 0.9);
  /* box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6); */
  outline: 1 none;
}

/* #address-input:focus, #address-input:hover {
  box-shadow: inset 0 1px 1px 0px rgb(249, 249, 249);
} */
.ap-input {
  border: none !important;
}
.ap-input-icon.ap-icon-pin {
  right: 10px;
}
.ap-input:hover ~ .ap-input-icon svg {
  fill: #6f6b68 !important;
}
.ap-input:focus ~ .ap-input-icon svg {
  fill: #6f6b68 !important;
}
.ap-input-icon svg {
  fill: #98938f !important;
  border: 0;
  background: transparent;
  position: relative;
  -webkit-transform: translateY(6%);
  transform: translateY(6%);
  outline: none;
  /* right: 5em; */
  /* top: .13em; */
}
.ap-icon-clear {
  right: 15px;
}
.ap-dropdown-menu {
  margin-top: 0px;
  width: 35em;
  top: 2.8em !important;
  /* left: 5.45em !important; */
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
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
  background-image: url('../assets/paperAndPencils.svg');
  background-repeat: no-repeat;
}
@media screen and (max-width: 750px) {
  #address-input {
    width: inherit;
    border-top-left-radius: .3em;
    border-top-right-radius: .3em;
  }
  #informationWrapper {
    width: 88vw;
    border-radius: .3em;
  }
  #landing {
    background-size: 110vw;
  }
  .ap-dropdown-menu {
    width: 73vw;
  }
  #topLine, #bottomLine {
    width: 90%;
  }
  .siteTitle:first-of-type {
    margin-top: unset;
  }
}
@media screen and (min-width:250px) and (max-width:320px) {
  #inputEverything {
    font-size: 100%;
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
/* for iPhone 5 below for widths on iPhone 5-X (not "plus" sizes)*/
@media screen and (min-width: 365px) and (max-width: 413px) {
  #informationWrapper {
    height: 27em;
  }
  .ap-dropdown-menu {
    width: 88vw !important;
  }
  .ap-input-icon.ap-icon-clear {
    right: -10px !important;
  }
  .ap-input-icon.ap-icon-pin {
    right: -13px;
  }
  #USVoteHeader, #infoForTheUser {
    font-size: 1.5em;
  }
  #USVoteHeader {
    padding: 0px 25px 0px;
  }
  #infoForTheUser {
    padding: 5px 25px 0px;
  }
  #landing {
    background-image: unset;
  }
  #voteWithThis {
    width: 95px;
    right: 3.4em;
    bottom: 17.5em;
  }
  #USSign {
    right: 3.5em;
    bottom: -16em;
    width: 50px;
  }
  .siteTitle::before {
    content: unset;
  }
  .siteTitle {
    line-height: 70%;
  }
  #inputEverything {
    margin-bottom: .7em;
  }
  #usvLink::before {
    width: 59.7%;
    bottom: -2px;
  }
  #siteTitleWrapper {
    top: unset;
    padding-bottom: .2em;
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
  .ap-input-icon svg {
    right: 6vw;
  }
  .siteTitle {
    font-size: 4em;
    padding-left: .6em;
  }
}
@media screen and (min-width:315px) and (max-width:374px) {
  .logoBlock {
    top: 1.3rem;
    left: -1px;
  }
  .siteTitle {
    font-size: 2.9em !important;
  }
  #USVoteHeader {

  }
  #USVoteHeader, .button {
    /* font-size: 1em !important; */
  }
  #inputEverything {
    /* font-size: 100%;
    margin-bottom: 4em !important; */
  }
  #address-input {
    /* padding-left: 9px; */
  }
}
@media screen and (max-width: 415px) and (max-width: 450px) {
  #usVotersIcon {

  }
}
@media screen and (max-width: 375px) and (max-height: 700px) {
  .siteTitle {

  }
  #inputEverything {
    margin-top: 4.8em;
  }
  #address-input {
    /* padding-top: 4px !important;
    width: 85vw !important; */
  }

  #USVoteHeader {

  }
  #address-input {
    /* padding-top: 4px !important; */
  }
}
/* iPhone X below */
@media screen and (max-width: 375px) and (min-height: 701px) and (max-height: 812px) {
  #USVoteHeader {
    /* font-size: 1.2em;
    padding-top: 6em; */
  }
  .siteTitle {
    /* margin-top: .9em;
    margin-bottom: .7em; */
  }

  #inputEverything {
    /* margin-top: 5.5em;
    margin-bottom: 5.5em; */
  }
}
@media screen and (min-width: 750px) {
  #usVotersIcon {
    right: 8em;
  }
}
@media screen and (min-width: 450px) and (max-width: 750px) {
  .siteTitle {
    padding-left: 12.5vw;
  }
  #usVotersIcon {
    right: 15vw;
  }
}
@media screen and (max-width: 692px) {
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
}

/* below for iPhone 6/7/8 plus  */
@media screen and (min-width: 413px) and (max-width: 432px) {
  .siteTitle {
    padding-left: 8vw !important;
    font-size: 5em;
  }
  .ap-dataset-places .ap-suggestions .ap-suggestion.ap-cursor {
    padding-left: .8vw;
  }
  .ap-input-icon svg {
    right: 7vw;
  }
  #inputEverything {
    margin-top: 6.5em !important;
    margin-bottom: 7em !important;
  }
  #USVoteHeader {
    width: 91%;
    margin: 0 auto;
  }
  #infoAndStarsWrapper {
    margin-left: 4vw;
  }
  .ap-dropdown-menu {
    width: 81.5vw !important;
    left: 2.7em !important;
  }
}
@media screen and (min-width: 319px) and (max-width: 415px) {

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
  .siteTitle {
    padding-left: 10vw !important;
  }
}


</style>
