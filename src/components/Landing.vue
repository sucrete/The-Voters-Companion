
<template>

  <div id="landing">

    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;" hidden><router-link  to="overview" >Hello component</router-link></h2>
    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->
    <div id="info-div">
      <div id="infobject" :style="{ 'background-image': 'url(' + thirdTester + ')' }">
        <div class="infoline" style="letter-spacing: .04rem;">
          A GUIDE TO YOUR
        </div>
        <div class="infoline" style="letter-spacing: .10365rem;">
          DISTRICT, YOUR
        </div>
        <div class="infoline">
          REPRESENTATIVES,
        </div>
        <div class="infoline" style="letter-spacing: .14rem;">
          AND WHEN AND
        </div>
        <div class="infoline" style="letter-spacing: .1rem;">
          WHERE TO VOTE
        </div>
      </div>
      <div style="display: block;">
        <div id="stars">
          <img id="starborn" :src=" levelStar " >
        </div>
        <div>
          <h1 id="support"> Made with generous support from</h1>
        </div>
        <div style="display: block;">
          <div id="p-wrapper">
            <a style="position: relative;" rel="noopener noreferrer" target="_blank" href="https://www.usvotefoundation.org/">
              <div id="partnership">
                <a id="partnership-baby" rel="noopener noreferrer" target="_blank" href="https://www.usvotefoundation.org/"> THE U.S. VOTE FOUNDATION</a>
              </div>
              <div id="check-div"></div>
              <img id="partnership-graphic" :src=" USVoteLogo ">
              <!-- <img id="partnership-graphic-buddy" :src=" USVoteLogo " > -->
            </a>
          </div>
        </div>
      </div>

    </div>
    <div id="inputEverything">
      <input type="search" id="address-input" @input="updateValue($event.target.value)" placeholder="What is your address?" />
      <p>Selected: <strong id="address-value"> {{ callMe }} </strong></p>
      <p>Attempting to store: <strong id="address-value2">none</strong></p>
    </div>
    <div class="logoBlock" hidden>
      <span></span><div id="logoBlockSlider"></div></span>
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
    </div>
    <span style="position: relative; top: 10rem;" >
      <div style="color: red;">
        {{ form.country.label }}
      </div>
      <div style="color: blue;">
        <strong>{{ callMe }}</strong> SHOULD RETURN THE SAME AS ABOVE
      </div>
      <div style="color: green;">
        <strong>{{ ghostIt }}</strong> SHOULD READ 'ghost!'
      </div>
      <div style="color: pink; background-color: red;">
        <strong>{{ labelMaker2 }}</strong> SHOULD READ 'boy'
      </div>
    </span>

  </div>
</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'
import anime from 'animejs'
// import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
import places from 'places.js'
import zayin from '../assets/usvote-logo-small.png'
import bethBeth from '../assets/img-noise-500x500.png'
import zuperZayin from '../assets/star_plain.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      USVoteLogo: zayin,
      thirdTester: bethBeth,
      levelStar: zuperZayin,
      rican: 'challa!',
      form: {
        country: {
          label: null,
          data: {}
        }
      }
    }
  },
  computed: {
    callMe () {
      return this.$store.getters.showMeDatState
    },
    ghostIt () {
      return this.$store.getters.ghostGetter
    },
    labelMaker2 () {
      return this.$store.getters.labelMaker
    }
    // message: {
    //   get () {
    //     return this.$store.state.form.country.label
    //   },
    //   set (value) {
    //     this.$store.commit('setUsersAddress', value)
    //   }
    // }
  },
  methods: {
    // setUsersAddress (val) {
    //   var $address2 = document.querySelector('#address-value2')
    //   $address2.textContent = this.addy
    //   this.$store.commit('setUsersAddress', val)
    // },

    doItAlready () {
      var urlPath = location.pathname
      var toppy = document.getElementById('app')
      if (urlPath.length > 5) {
        toppy.style.background = '#F5F4EA'
        return false
      } else {
        toppy.style.cssText = 'background: #F5F5DC;'
        return false
      }
    },
    getOuttaMyWay () {
      anime({
        targets: '#logoBlockSlider',
        translateY: 60,
        delay: 5000
      })
    },
    focusHelper () {
      var daletShin = document.getElementById('address-input')
      var daletSemach = document.getElementById('inputEverything')
      setTimeout(function () {
        daletShin.focus()
        daletSemach.style.cssText = 'z-index: 700;'
      }, 5500)
    },
    starMaker () {
      var daletKaf = document.getElementById('starborn')
      var i
      for (i = 0; i < 7; i++) {
        var starclone = daletKaf.cloneNode(true)
        document.getElementById('stars').appendChild(starclone)
      }
    },
    updateValue (val) {
      console.log('updateValue was activated')
      this.$store.commit('setUsersAddress', val)
    }
  },
  mounted () {
    this.doItAlready()
    this.getOuttaMyWay()
    this.starMaker()
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
      const sar = e.suggestion
      console.log('on change you get: ' + e.suggestion.value)
      console.log('addy is: ' + sar.value + '. With type: ' + typeof e.suggestion.value)
      this.addy = sar.value
      this.updateValue(e.suggestion.value)
    })

    placesAutocomplete.on('clear', function () {
      var blank = null
      this.updateValue(blank)
    })
    placesAutocomplete.on('autocomplete:selected', function (e, suggestion, dataset) {
      console.log('selected autocomplete is: ' + suggestion, dataset)
      this.updateValue(e.suggestion.value)
    })
  },
  components: {
  },
  beforeDestroy () {
    this.placesAutocomplete.destroy()
  }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Chicle');


.infoline {
  line-height: 125%;
}

#stars {
  display: flex-start;
  margin-bottom: -.3rem;
  margin-left: .5rem;
  color: #e2b951;
  position: relative;
  justify-content: space-between;
}
#starborn {
  width: 8%;
  height: auto;
  display: inline-flex;
  position: relative;
  justify-content: space-between;
  top: .4rem;
  bottom: .5rem;
  margin-left: 1.2rem;
}
#support {
  font-family: 'Oswald', serif;
  letter-spacing: .1rem;
  font-size: 1.5rem;
  font-style: italic;
  display: block;
  color: #443133;
  margin: 1rem;
  margin-left: 1.6rem;
  margin-bottom: .2rem;
}
#info-div {
  margin-top: 1.3rem;
  position: relative;
  text-align: left;
  z-index: 99;
  width: 41.5rem;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
}

#p-wrapper {
  display: table;
  margin-left: 1rem;
}
#partnership {
  letter-spacing: .05rem;
  width: 24.5rem;
  border-width: 4px;
  border-style: solid;
  border-color: #654921;
  color: #654921;
  font-size: 1.7rem;
  background-color: #e0cb92;
  border-right-width: 2px;
  padding-top: .5rem;
  padding-left: 1.25rem;
  font-family: 'Oswald', serif;
  font-weight: 400;
  display: table-cell;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
  z-index: 80;
}
a#partnership-baby:visited {
  color: inherit;
}
#check-div, #partnership {
  height: 4rem;
}
#check-div {
  width: 4rem;
  border-width: 4px;
  border-style: solid;
  display: table-cell;
  border-left-width: 2px;
  border-color: #654921;
  background-color: transparent;
}
#partnership-graphic {
  z-index: 150;
  position: absolute;
  left: 25rem;
  top: -2.55rem;
  width: 17%;
  height: auto;
  -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.59)) drop-shadow(0 10px 5px rgba(0, 0, 0, 0.15));
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.59)) drop-shadow(0 10px 5px rgba(0, 0, 0, 0.15));
}

#infobject {
  font-family: 'Oswald', sans-serif;
  position: inherit;
  padding: .75rem;
  padding-top: .6rem;
  width: 14.2rem;
  height: 10rem;
  font-size: 1.4rem;
  line-height: 105%;
  color: #F5FFFA;
  border-radius: 2px;
}

#brownType {
  color: #f2cbbc;
  font-family: 'Chicle', serif !important;
  text-align: left;
  font-size: 6.4rem;
  line-height: 89%;
  left: 2.7rem;
  bottom: 2rem;
  position: absolute;
}
.logoBlock {
  position: relative;
  height: 23rem;
  margin: 0 auto;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 6;
  bottom: -6.2rem;
}
#logoBlockSlider, .logoBlock {
  width: 42rem;
  background-color: #334431;
  border-radius: 3px;
}
#logoBlockSlider {
  position: relative;
  height: 10rem;
  bottom: 5.2rem;
}

#inputEverything {
  position: absolute;
  z-index: 1;
  left: 1.2rem;
  top: 12.5rem;
  margin-left: auto;
  margin-right: auto;
}
#address-input {
  width: 40.5rem;
  margin: 0 auto;
  outline: none;
  border: none;
  font-family: 'Oswald', sans-serif;
}
input:focus {
  outline: none;
  border: none;
  color: #e24b11;
}
input::-webkit-input-placeholder {
  color: #3f0000 !important;
  font-family: 'Oswald', sans-serif;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #3f0000 !important;
  font-family: 'Oswald', sans-serif;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #3f0000 !important;
  font-family: 'Oswald', sans-serif;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #3f0000 !important;
  font-family: 'Oswald', sans-serif;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #3f0000 !important;
  font-family: 'Oswald', sans-serif;
}

#landing {
  position: relative;
}

</style>
