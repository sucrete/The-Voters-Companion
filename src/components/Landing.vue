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
        Register to vote. <br />
        Connect with your representatives. <br />
        Stay informed.
      </div>
      <div id="landingLogoWrapper">
        <div id="logoBadge">
          <div id='warped'>
            <span class='w0'>M</span><span class='w1'>A</span><span class='w2'>D</span><span class='w3'>E</span><span class='w4'> </span><span class='w5'>W</span><span class='w6'>I</span><span class='w7'>T</span><span class='w8'>H</span><span class='w9'> </span><span class='w10'>G</span><span class='w11'>E</span><span class='w12'>N</span><span class='w13'>E</span><span class='w14'>R</span><span class='w15'>O</span><span class='w16'>U</span><span class='w17'>S</span><span class='w18'> </span><span class='w19'>S</span><span class='w20'>U</span><span class='w21'>P</span><span class='w22'>P</span><span class='w23'>O</span><span class='w24'>R</span><span class='w25'>T</span><span class='w26'> </span><span class='w27'>F</span><span class='w28'>R</span><span class='w29'>O</span><span class='w30'>M</span>
          </div>
          <div id="logoBooper">
            <img id="USVoteLogoCheck" :src=" USVoteLogoCheck "/><br />
            <img id="USVoteLogoText" :src=" USVoteLogoText" />
          </div>
          <div id="headerBridge">

          </div>
        </div>
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

#warped {
  color: #0e2b57;
  position: absolute;
  top: -6.89rem;
  left: -11.7rem;
}
#headerBridge {
  position: absolute;
  left: 0rem;
  top: -.7rem;
  width: 13.5rem;
  height: 13.5rem;
  border: 2px solid #0e2b57;
  padding: 0.5em;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: transparent;
}
#logoBadge {
  background-color: #A8A8A8;
  position: absolute;
  border-radius: 100%;
  left: 3.5rem;
  width: 13.3rem;
  height: 13.3rem;
  top: -1.5rem;
}
#landingInfoGrid {
  margin: 1rem;
  width: 39rem;
  display: grid;
  grid-template-columns: 55% 45%;
  padding: 2rem;
  height: 15rem;
}

#landingInfo {
  color: #F5F4EA;
  font-weight: 400;
  font-family: 'IBM Plex Serif', serif;
  font-style: italic;
  font-size: 110%;
  text-align: left;
  margin-top: -1rem;
  line-height: 300%;
  grid-column: 1 / 2;
  padding-left: 1rem;
}
#landingLogoWrapper {
  grid-column: 2 / -1;
  position: relative;
}
#logoBooper {
  position: absolute;
  left: 2.5rem;
  top: 2.75rem;
}
#USVoteLogoCheck {
  margin-top: .5rem;
  width: 5.5rem;
}
#USVoteLogoText {
  width: 8.9rem;
}
#app {
  background-color: rgb(17, 122, 63);
}

#verticalLine {
  position: absolute;
  width: inherit;
  height: 47.5rem;
  top: -.6rem;
  border-left: 2px solid rgb(19, 136, 70, .75);
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
  font-size: 8.5rem;
  line-height: 80%;
  left: 1.5rem;
  margin-top: 3.75rem;
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
  color: #7A3F11;
}
input::-webkit-input-placeholder {
  color: #7A3F11 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #7A3F11 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #7A3F11 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #7A3F11 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #7A3F11 !important;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 600;
}

#landing {
  position: relative;
}
#warped {position: relative; display: block; width:542px; height:422px;}

                #warped>span[class^=w]:nth-of-type(n+0){display:block; position:absolute;
                -moz-transform-origin:50% 100%; -webkit-transform-origin:50% 100%; -o-transform-origin:50%
                100%; -ms-transform-origin:50% 100%; transform-origin:50% 100%; }

                #warped span{font-family:'IBM Plex Serif';font-size:14px;font-weight:200;font-style:normal;
                line-height:0.65; white-space:pre; overflow:visible; padding:0px;}

                #warped .w0 {-moz-transform: rotate(4.6rad);-webkit-transform: rotate(4.6rad);-o-transform:
                rotate(4.6rad);-ms-transform: rotate(4.6rad); transform: rotate(4.6rad);
                width: 12px; height: 9px; left: 197.53px; top: 220.86px;}

                #warped .w1 {-moz-transform: rotate(4.74rad);-webkit-transform: rotate(4.74rad);-o-transform:
                rotate(4.74rad);-ms-transform: rotate(4.74rad); transform: rotate(4.74rad);
                width: 10px; height: 9px; left: 198.04px; top: 208.14px;}

                #warped .w2 {-moz-transform: rotate(4.87rad);-webkit-transform: rotate(4.87rad);-o-transform:
                rotate(4.87rad);-ms-transform: rotate(4.87rad); transform: rotate(4.87rad);
                width: 10px; height: 9px; left: 199.16px; top: 196.46px;}

                #warped .w3 {-moz-transform: rotate(4.99rad);-webkit-transform: rotate(4.99rad);-o-transform:
                rotate(4.99rad);-ms-transform: rotate(4.99rad); transform: rotate(4.99rad);
                width: 8px; height: 9px; left: 202.5px; top: 185.99px;}

                #warped .w4 {-moz-transform: rotate(5.07rad);-webkit-transform: rotate(5.07rad);-o-transform:
                rotate(5.07rad);-ms-transform: rotate(5.07rad); transform: rotate(5.07rad);
                width: 3px; height: 9px; left: 207.26px; top: 179.11px;}

                #warped .w5 {-moz-transform: rotate(5.18rad);-webkit-transform: rotate(5.18rad);-o-transform:
                rotate(5.18rad);-ms-transform: rotate(5.18rad); transform: rotate(5.18rad);
                width: 14px; height: 9px; left: 205.88px; top: 169.74px;}

                #warped .w6 {-moz-transform: rotate(5.3rad);-webkit-transform: rotate(5.3rad);-o-transform:
                rotate(5.3rad);-ms-transform: rotate(5.3rad); transform: rotate(5.3rad);
                width: 4px; height: 9px; left: 216.3px; top: 160.48px;}

                #warped .w7 {-moz-transform: rotate(5.39rad);-webkit-transform: rotate(5.39rad);-o-transform:
                rotate(5.39rad);-ms-transform: rotate(5.39rad); transform: rotate(5.39rad);
                width: 9px; height: 9px; left: 218.68px; top: 153.84px;}

                #warped .w8 {-moz-transform: rotate(5.52rad);-webkit-transform: rotate(5.52rad);-o-transform:
                rotate(5.52rad);-ms-transform: rotate(5.52rad); transform: rotate(5.52rad);
                width: 11px; height: 9px; left: 225.62px; top: 145.21px;}

                #warped .w9 {-moz-transform: rotate(5.61rad);-webkit-transform: rotate(5.61rad);-o-transform:
                rotate(5.61rad);-ms-transform: rotate(5.61rad); transform: rotate(5.61rad);
                width: 3px; height: 9px; left: 236.22px; top: 139.48px;}

                #warped .w10 {-moz-transform: rotate(5.71rad);-webkit-transform: rotate(5.71rad);-o-transform:
                rotate(5.71rad);-ms-transform: rotate(5.71rad); transform: rotate(5.71rad);
                width: 11px; height: 9px; left: 239.34px; top: 134.41px;}

                #warped .w11 {-moz-transform: rotate(5.83rad);-webkit-transform: rotate(5.83rad);-o-transform:
                rotate(5.83rad);-ms-transform: rotate(5.83rad); transform: rotate(5.83rad);
                width: 8px; height: 9px; left: 250.65px; top: 128.94px;}

                #warped .w12 {-moz-transform: rotate(5.95rad);-webkit-transform: rotate(5.95rad);-o-transform:
                rotate(5.95rad);-ms-transform: rotate(5.95rad); transform: rotate(5.95rad);
                width: 11px; height: 9px; left: 259.56px; top: 124.72px;}

                #warped .w13 {-moz-transform: rotate(6.08rad);-webkit-transform: rotate(6.08rad);-o-transform:
                rotate(6.08rad);-ms-transform: rotate(6.08rad); transform: rotate(6.08rad);
                width: 8px; height: 9px; left: 271.91px; top: 121.81px;}

                #warped .w14 {-moz-transform: rotate(6.19rad);-webkit-transform: rotate(6.19rad);-o-transform:
                rotate(6.19rad);-ms-transform: rotate(6.19rad); transform: rotate(6.19rad);
                width: 9px; height: 9px; left: 281.54px; top: 120.34px;}

                #warped .w15 {-moz-transform: rotate(6.31rad);-webkit-transform: rotate(6.31rad);-o-transform:
                rotate(6.31rad);-ms-transform: rotate(6.31rad); transform: rotate(6.31rad);
                width: 10px; height: 9px; left: 292.27px; top: 120.05px;}

                #warped .w16 {-moz-transform: rotate(6.44rad);-webkit-transform: rotate(6.44rad);-o-transform:
                rotate(6.44rad);-ms-transform: rotate(6.44rad); transform: rotate(6.44rad);
                width: 10px; height: 9px; left: 303.94px; top: 121.23px;}

                #warped .w17 {-moz-transform: rotate(6.56rad);-webkit-transform: rotate(6.56rad);-o-transform:
                rotate(6.56rad);-ms-transform: rotate(6.56rad); transform: rotate(6.56rad);
                width: 8px; height: 9px; left: 315.41px; top: 123.61px;}

                #warped .w18 {-moz-transform: rotate(6.64rad);-webkit-transform: rotate(6.64rad);-o-transform:
                rotate(6.64rad);-ms-transform: rotate(6.64rad); transform: rotate(6.64rad);
                width: 3px; height: 9px; left: 324.77px; top: 125.91px;}

                #warped .w19 {-moz-transform: rotate(6.72rad);-webkit-transform: rotate(6.72rad);-o-transform:
                rotate(6.72rad);-ms-transform: rotate(6.72rad); transform: rotate(6.72rad);
                width: 8px; height: 9px; left: 328.93px; top: 128.74px;}

                #warped .w20 {-moz-transform: rotate(6.84rad);-webkit-transform: rotate(6.84rad);-o-transform:
                rotate(6.84rad);-ms-transform: rotate(6.84rad); transform: rotate(6.84rad);
                width: 10px; height: 9px; left: 337.34px; top: 133.9px;}

                #warped .w21 {-moz-transform: rotate(6.96rad);-webkit-transform: rotate(6.96rad);-o-transform:
                rotate(6.96rad);-ms-transform: rotate(6.96rad); transform: rotate(6.96rad);
                width: 8px; height: 9px; left: 347.08px; top: 140.13px;}

                #warped .w22 {-moz-transform: rotate(7.06rad);-webkit-transform: rotate(7.06rad);-o-transform:
                rotate(7.06rad);-ms-transform: rotate(7.06rad); transform: rotate(7.06rad);
                width: 8px; height: 9px; left: 354.33px; top: 146.64px;}

                #warped .w23 {-moz-transform: rotate(7.18rad);-webkit-transform: rotate(7.18rad);-o-transform:
                rotate(7.18rad);-ms-transform: rotate(7.18rad); transform: rotate(7.18rad);
                width: 10px; height: 9px; left: 360.46px; top: 154.66px;}

                #warped .w24 {-moz-transform: rotate(7.3rad);-webkit-transform: rotate(7.3rad);-o-transform:
                rotate(7.3rad);-ms-transform: rotate(7.3rad); transform: rotate(7.3rad);
                width: 9px; height: 9px; left: 367.36px; top: 163.89px;}

                #warped .w25 {-moz-transform: rotate(7.42rad);-webkit-transform: rotate(7.42rad);-o-transform:
                rotate(7.42rad);-ms-transform: rotate(7.42rad); transform: rotate(7.42rad);
                width: 9px; height: 9px; left: 372.36px; top: 173.39px;}

                #warped .w26 {-moz-transform: rotate(7.51rad);-webkit-transform: rotate(7.51rad);-o-transform:
                rotate(7.51rad);-ms-transform: rotate(7.51rad); transform: rotate(7.51rad);
                width: 3px; height: 9px; left: 378.26px; top: 180.56px;}

                #warped .w27 {-moz-transform: rotate(7.59rad);-webkit-transform: rotate(7.59rad);-o-transform:
                rotate(7.59rad);-ms-transform: rotate(7.59rad); transform: rotate(7.59rad);
                width: 8px; height: 9px; left: 377.9px; top: 187.48px;}

                #warped .w28 {-moz-transform: rotate(7.7rad);-webkit-transform: rotate(7.7rad);-o-transform:
                rotate(7.7rad);-ms-transform: rotate(7.7rad); transform: rotate(7.7rad);
                width: 9px; height: 9px; left: 379.49px; top: 197.5px;}

                #warped .w29 {-moz-transform: rotate(7.82rad);-webkit-transform: rotate(7.82rad);-o-transform:
                rotate(7.82rad);-ms-transform: rotate(7.82rad); transform: rotate(7.82rad);
                width: 10px; height: 9px; left: 379.97px; top: 208.69px;}

                #warped .w30 {-moz-transform: rotate(7.96rad);-webkit-transform: rotate(7.96rad);-o-transform:
                rotate(7.96rad);-ms-transform: rotate(7.96rad); transform: rotate(7.96rad);
                width: 12px; height: 9px; left: 378.4px; top: 221.4px;}

</style>
