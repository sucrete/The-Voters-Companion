
<template>

  <div id="landing" class="mt-3">
    <div id="darkOverlay" style="z-index: 4;" :style="{ 'background-image': 'url(' + dark + ')' }">
    </div>
    <div id="lightOverlay" style="z-index: 3;" :style="{ 'background-image': 'url(' + light + ')' }">
    </div>
    <div id="bulk">
      <h2 class="mb-5" hidden><router-link  to="overview">Hello component</router-link></h2>
    </div>
    <div id="subtitleBlock">
      <div id="infobject">
        <span id="infobject-baby">
          A GUIDE TO YOUR DISTRICT, YOUR REPRESENTATIVES, AND WHEN AND WHERE TO VOTE
        </span>
      </div>
      <div id="partnership">
        <span id="partnership-baby">
        CREATED WITH COOPERATION FROM THE <bold>U.S. VOTE FOUNDATION</bold>
        </span>
      </div>
    </div>
    <!-- example of syntax needed to insert image with vue -->
    <div :style="{ 'background-image': 'url(' + secondTester + ')' }" hidden>
      HAIRY BOYS
    </div>
    <input id="addressbar" type="text" class="address mb-4" v-model="addy" placeholder="" hidden>
    <div id="logoBlock">
      <h1 id="brownType">The<br>Voter's<br>Companion</h1>
    </div>
  </div>


  </div>

</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'

import dynamics from 'dynamics.js'
import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
import light from '../assets/rice-paper-2.png'
import dark from '../assets/asfalt-dark-altered.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      bolstarMsg: 'you did it, kiddo',
      civicData: '',
      params: '',
      secondTester: image,
      dark: dark,
      light: light,
      form: {
        country: {
          label: null,
          data: {}
        }
      }
    }
  },
  methods: {
    changeAddressBarTransparent () {
      var bethLamed = document.getElementById('addressbar')
      bethLamed.style.cssText = 'background: transparent'
    },
    doItAlready () {
      var urlPath = location.pathname
      var toppy = document.getElementById('app')
      if (urlPath.length > 5) {
        toppy.style.background = '#F5F4EA'
        return false
      } else {
        toppy.style.background = '#c3a986'
        return false
      }
    },
    animateAddressBar () {
      setTimeout(function () {
        var el = document.getElementById('addressbar')
        dynamics.animate(el, {
          translateY: 50
        }, {
          type: dynamics.easeInOut,
          duration: 1413,
          friction: 300
        })
      }, 2000)
    },
    injectPlaceholder () {
      setTimeout(function () {
        var bethMem = document.getElementById('addressbar')
        bethMem.placeholder = 'What is your address?'
      }, 3413)
    },
    changeAddressBarBack () {
      setTimeout(function () {
        var daletAyin = document.getElementById('addressbar')
        daletAyin.style.removeProperty('background')
      }, 3000)
    },
    focusHelper () {
      setTimeout(function () {
        var bethSamach = document.getElementById('addressbar')
        bethSamach.focus()
      }, 3500)
    }
  },
  mounted () {
    this.doItAlready()
    this.animateAddressBar()
    this.injectPlaceholder()
    this.changeAddressBarTransparent()
    this.changeAddressBarBack()
    this.focusHelper()
  }
}
</script>

<style>

#landing {
  position: relative;
}

#darkOverlay {
  position: absolute;
  width: 750px;
  height: 93vh;
  left: -24px;
  top: -24px;
}
#lightOverlay {
  position: absolute;
  width: 750px;
  height: 93vh;
  opacity: .4;
  left: -24px;
  top: -24px;
}

#subtitleBlock {
  font-family: 'Assistant', sans-serif;
  width: 690px;
  margin: 0 auto;
  height: auto;
  justify-content: space-between;
  font-size: 100%;
  line-height: 105%;
}
#partnership {
  color: #3b2b1c;
  width: 650px;
  height: auto;
  text-align: left;
  float: right;
}
#partnership-baby {
  width: 300px;
  float: right;
}
#infobject {
  display: flex;
  color: #3b2b1c;
  width: 690px;
  height: auto;
  margin: 0 auto;
  text-align: left;
  float: left;
  justify-content: flex-start;
}
#infobject-baby {
  width: 300px;
  float: left;
}

#brownType {
  color: #c3a986;
  font-family: 'Playfair Display', serif !important;
  text-align: left;
  font-size: 700%;
  line-height: 85%;
  left: 40px;
  bottom: 43px;
  position: absolute;
}
#logoBlock {
  position: fixed;
  background-color: #3b2b1c;
  height: 500px;
  bottom: -172px;
  position: inherit;
  border-radius: 2px;
  box-shadow: 0 0 1px #3b2b1c;
}

#USVoteImage {
  width: 49px;
  height: auto;
}

.address {
  width: 610px;
  margin: 0 auto;
  display: block;
  font-size: 120%;
  padding: 10px 0;
  padding-bottom: 1px;
  padding-left: 20px;
  border: none;
  border-bottom: solid 2px #654321;
  color: #383838;
  background-color: #c3a986;
  /*background-image: linear-gradient(to bottom, transparent 98%, #654321 98%);
  background-repeat: no-repeat;
  background-size: 610px 100%;
  background-position: -610px 0;
  transition: background-position 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);*/
  position: relative;
  left: 7px;
}

.address:focus {
  background-position: 0 0;
  outline: none;
}

hr {
  border: 0;
  border-top: 1px solid #654321;
  border-bottom: 1px solid #654321;
  width: 600px;
  size: 3px;
  text-align: center !important;
  margin: 0 auto;
}

input::-webkit-input-placeholder {
  color: #2e4045 !important;
}

input:-moz-placeholder {
  /* Firefox 18- */
  color: #2e4045 !important;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: #2e4045 !important;
}

input:-ms-input-placeholder {
  /* IE 10+ */
  color: #2e4045 !important;
}

input::-ms-input-placeholder {
  /* Edge */
  color: #2e4045 !important;
}

.input-group {
  width: 600px;
  margin: 0 auto;
}

/*#background-div {
  background-image: url("https://s1.postimg.org/4eruqhil67/ticks.png");
  background-repeat: repeat;
  z-index: 5;
}*/

</style>
