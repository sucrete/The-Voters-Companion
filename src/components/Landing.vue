
<template>

  <div id="landing" class="mt-3">
    <div id="darkOverlay" style="z-index: 5;" :style="{ 'background-image': 'url(' + dark + ')' }">
    </div>
    <div id="lightOverlay" style="z-index: 4;" :style="{ 'background-image': 'url(' + light + ')' }">
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
        CREATED WITH HELP FROM THE U.S. VOTE FOUNDATION
        </span>
      </div>
    </div>
    <!-- example of syntax needed to insert image with vue -->
    <div :style="{ 'background-image': 'url(' + secondTester + ')' }" hidden>
      HAIRY BOYS
    </div>
    <input id="addressbar" type="text" class="address" v-model="addy" placeholder="">
    <div id="logoBlock">
      <h1 id="brownType">The<br>Voter's<br>Companion</h1>
    </div>
  </div>


  </div>

</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'
// import dynamics from 'dynamics.js'
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
    injectPlaceholder () {
      var bethMem = document.getElementById('addressbar')
      bethMem.placeholder = 'WHAT IS YOUR ADDRESS?'
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
  font-size: 110%;
  line-height: 105%;
}
#partnership {
  position: relative;
  top: -30px;
  color: #3b2b1c;
  width: 650px;
  height: auto;
  text-align: left;
  margin-top: 1.7em;
}
#partnership-baby {
  width: 250px;
  float: right;

}
#infobject {
  display: flex;
  color: #3b2b1c;
  width: 650px;
  height: auto;
  margin: 0 auto;
  text-align: left;
}
#infobject-baby {
  width: 275px;
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
  position: relative;
  background-color: #3b2b1c;
  height: 500px;
  bottom: -40px;
  border-radius: 2px;
  box-shadow: 0 0 1px #3b2b1c;
  z-index: 3;
}

#USVoteImage {
  width: 49px;
  height: auto;
}

.address {
  width: 650px;
  margin: 0 auto;
  display: block;
  font-size: 110%;
  border: none;
  background-color: #c3a986;
}

.address:focus {
  background-position: 0 0;
  outline: none;
  background-color: #fe5e31;
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

input {

}
input::-webkit-input-placeholder {
  color: #2e4045 !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #2e4045 !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #2e4045 !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #2e4045 !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #2e4045 !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}

.input-group {
  width: 650px;
  margin: 0 auto;
  height: auto;
}

/*#background-div {
  background-image: url("https://s1.postimg.org/4eruqhil67/ticks.png");
  background-repeat: repeat;
  z-index: 5;
}*/

</style>
