
<template>

  <div id="landing" class="mt-3">

    <div id="darkOverlay" style="z-index: 6;" :style="{ 'background-image': 'url(' + dark + ')' }"></div>
    <div id="lightOverlay" :style="{ 'background-image': 'url(' + light + ')' }"></div>

    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;"><router-link  to="overview">Hello component</router-link></h2>

    <!-- example of syntax needed to insert image with vue -->
    <div :style="{ 'background-image': 'url(' + secondTester + ')' }" hidden>
      HAIRY BOYS
    </div>

    <div id="logoBlock">
      <div id="logoBlockOverlay" :style="{ 'background-image': 'url(' + grungey + ')' }" ></div>
      <h1 id="brownType" >The<br>Voter's<br>Guidebook</h1>
    </div>
    <div id="inputEverything" hidden>
      <input id="addressbar" type="text" class="address" v-model="addy" placeholder="">
    </div>
    <div id="subtitleBlock">
      <div id="subtitleBlockOverlay" :style="{ 'background-image': 'url(' + bottomGrunge + ')' }"></div>
    </div>
    <div id="infobject">
      <span id="infobject-baby">
        A GUIDE TO YOUR DISTRICT, YOUR REPRESENTATIVES, AND WHEN AND WHERE TO VOTE
      </span>
    </div>
    <div id="partnership">
      <span id="partnership-baby">
      CREATED WITH HELP FROM THE <a id="partnership-baby-baby" href="https://www.usvotefoundation.org/">U.S. VOTE FOUNDATION</a>
      </span>
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'
// import dynamics from 'dynamics.js'
import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
import light from '../assets/rice-paper-2-tan.png'
import dark from '../assets/01-flecks-altered.png'
import grungey from '../assets/01-inverted-alpha-background-tan-stuff.png'
import bottomGrunge from '../assets/info-block-new-grunge.png'

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
      grungey: grungey,
      bottomGrunge: bottomGrunge,
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
      } else {
        toppy.style.background = '#c3a986'
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
    this.injectPlaceholder()
    this.focusHelper()
  }
}
</script>

<style scoped>

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
  opacity: .2;
  left: -24px;
  top: -26px;
  z-index: 7;
}

#subtitleBlock {
  width: 702px;
  position: relative;
  height: 17.5vh;
  margin: 0 auto;
  margin-top: 2vh;
  background-color: #6c785d;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 0 1px #6c785d;
  z-index: 6;
}
#partnership-baby {
  width: 250px;
  position: relative;
  float: right;
}
#partnership-baby-baby, #partnership-baby-baby:visited {
  color: inherit;
}
#infobject, #partnership {
  font-family: 'Assistant', sans-serif;
  position: relative;
  width: 650px;
  height: auto;
  top: -100px;
  margin: 0 auto;
  text-align: left;
  z-index: 99;
  justify-content: space-between;
  font-size: 85%;
  line-height: 105%;
  color: #c3a986;
}
#infobject-baby {
  width: 275px;
  float: left;
}
#subtitleBlockOverlay {
  width: inherit;
  height: inherit;
  position: relative;
  z-index: 3;
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
  background-color: #463321;
  height: 67vh;
  border-radius: 2px;
  box-shadow: 0 0 1px #3b2b1c;
  z-index: 6;
}
#logoBlockOverlay {
  height: inherit;
  width: inherit;
  opacity: .6;
}

#USVoteImage {
  width: 49px;
  height: auto;
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

#inputEverything {
  position: relative;
  top: 10px
}
.address {
  width: 700px;
  margin: 0 auto;
  height: 35px;
  position: relative;
  float: left;
  display: block;
  border: none;
  background: transparent;
  padding-left: 25px;
  border-radius: 1.5px;
  font-family: 'Assistant', sans-serif;
  top: 35px;
}
/*.address:focus {
  background-position: 0 0;
  outline: none;
  background-color: #FFFFF0 ;
}*/
/*
@-webkit-keyframes background {
  0% {
    background: transparent;
  }
  66% {
    background: #FFFFF0 ;
  }
  100% {
    background: #FFFFF0 ;
  }
}
@-moz-keyframes background {
  0% {
    background: transparent;
  }
  66% {
    background: #FFFFF0 ;
  }
  100% {
    background: #FFFFF0 ;
  }
}
@keyframes background {
  0% {
    background: transparent;
  }
  66% {
    background: #FFFFF0 ;
  }
  100% {
    background: #FFFFF0 ;
  }
}
input:active, input:focus {
  -webkit-animation: background 0.55s ease-in;
  -moz-animation: background 0.55s ease-in;
  animation: background 0.55s ease-in;
  background: #FFFFF0 ;
}*/
input::-webkit-input-placeholder {
  color: #3b2b1c !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input:-moz-placeholder {
  /* Firefox 18- */
  color: #3b2b1c !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input::-moz-placeholder {
  /* Firefox 19+ */
  color: #3b2b1c !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input:-ms-input-placeholder {
  /* IE 10+ */
  color: #3b2b1c !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}
input::-ms-input-placeholder {
  /* Edge */
  color: #3b2b1c !important;
  font-family: 'Assistant', sans-serif;
  font-weight: bold;
}

/*#background-div {
  background-image: url("https://s1.postimg.org/4eruqhil67/ticks.png");
  background-repeat: repeat;
  z-index: 5;
}*/

</style>
