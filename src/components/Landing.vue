
<template>

  <div id="landing">

    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;"><router-link  to="overview" hidden>Hello component</router-link></h2>

    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->

    <div id="info-div">
      <div id="infobject" :style="{ 'background-image': 'url(' + thirdTester + ')' }">
        A GUIDE TO YOUR DISTRICT, YOUR REPRESENTATIVES, AND WHEN AND WHERE TO VOTE
      </div>
      <div id="partnershipWrapper">
        <div class="p-block">
          <div id="partnership">
            Created with generous support from
            <a id="partnership-baby" href="https://www.usvotefoundation.org/"> THE U.S. VOTE FOUNDATION</a>

          </div>
        </div>
        <div class="p-block">
          <div id="check-div"></div>
        </div>
        <div id="partnership-check" :style="{ 'background-image': 'url(' + USVoteLogo + ')' }" href="https://www.usvotefoundation.org/"></div>
      </div>
    </div>
    <div id="logoBlock">
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
    </div>
    <!-- <div id="inputEverything">
      <input id="addressbar" type="text" class="address" v-model="addy" placeholder="" hidden>
    </div> -->
  </div>
</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'
// import dynamics from 'dynamics.js'
// import image from '../assets/tumblr_inline_ml8fq8GKH11roozkr.gif'
// import marsh from '../assets/04.png'
import zayin from '../assets/usvote-logo-small.png'
import bethBeth from '../assets/img-noise-361x370.png'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      bolstarMsg: 'you did it, kiddo',
      civicData: '',
      params: '',
      USVoteLogo: zayin,
      thirdTester: bethBeth,
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
        toppy.style.cssText = 'background: #F5F5DC; background: -webkit-linear-gradient(315deg, #e8f4f8, #F5F5DC); background: linear-gradient(315deg, #e8f4f8, #F5F5DC);'
        return false
      }
    },
    injectPlaceholder () {
      var bethMem = document.getElementById('addressbar')
      bethMem.placeholder = 'What is your address?'
    },
    focusHelper () {
      setTimeout(function () {
        var bethSamach = document.getElementById('addressbar')
        bethSamach.focus()
      }, 3500)
    },
    consoleLogger () {
      console.log(document.styleSheets[0])
    }
  },
  mounted () {
    this.doItAlready()
    this.injectPlaceholder()
    this.focusHelper()
    this.consoleLogger()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chicle');

.p-block {
  display: inline-block;
}
#partnership {
  width: 15rem;
  border-width: 3px;
  border-style: solid;
  border-color: #cba46a;
  color: #49412c;
  font-size: 190%;
  padding: 5px;
  padding-left: 6px;
  font-family: 'Oswald', serif;
  font-weight: 400;
  line-height: 115%;
  margin-left: 1rem;
  height: 10rem;
  display: block;
  -moz-box-sizing:border-box;
  -webkit-box-sizing:border-box;
}
a#partnership-baby:visited {
  color: inherit;
}
#check-div {
  height: 10rem;
  width: 10rem;
  border-width: 3px;
  border-style: solid;
  display: block;
}
#info-div {
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  text-align: left;
  z-index: 99;
  width: 41.5rem;
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-start;
}
#infobject {
  font-family: 'Oswald', sans-serif;
  position: inherit;
  padding: .75rem;
  width: 14rem;
  height: 12rem;
  font-size: 145%;
  line-height: 105%;
  color: white;
  border-radius: 2px;
}
#partnership-check {
  background: transparent;
}


#brownType {
  color: #f2cbbc;
  font-family: 'Chicle', serif !important;
  text-align: left;
  font-size: 5.5rem;
  line-height: 89%;
  left: 2rem;
  bottom: 2rem;
  position: absolute;
}
#logoBlock {
  position: relative;
  background-color: #334431;
  height: 25rem;
  width: 42rem;
  margin: 0 auto;
  border-radius: 2px;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 6;
  bottom: -3.4vh;
}

#USVoteImage {
  width: 49px;
  height: auto;
}

#inputEverything {
  position: relative;
}
.address {
  width: 44rem;
  margin: 0 auto;
  height: 25rem;
  position: relative;
  float: left;
  padding-bottom: 23rem;
  border: none;
  outline: none;
  background-color: #903C3C;
  padding-left: 25px;
  border-radius: 1.5px;
  font-family: 'Oswald', sans-serif;
  bottom: 21.5rem;
  font-size: 110%;
}

input:focus {
  outline: none;
  border: none;
  color: #f2cbbc;
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
