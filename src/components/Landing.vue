
<template>

  <div id="landing">

    <h2 class="mb-5" style="position: absolute; top: 0; left: -225px;"><router-link  to="overview" hidden>Hello component</router-link></h2>

    <!-- example of syntax needed to insert image with vue -->
    <!-- <div :style="{ 'background-image': 'url(' + secondTester + ')' }"></div> -->

    <div id="info-div">
      <div id="infobject" :style="{ 'background-image': 'url(' + thirdTester + ')' }">
        A GUIDE TO YOUR DISTRICT, YOUR REPRESENTATIVES, AND WHEN AND WHERE TO VOTE
      </div>
      <div style="display: block;">
        <div id="stars">
          ★  ★  ★  ★  ★
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
              <img id="partnership-graphic-buddy" :src=" USVoteLogo " >
            </a>
          </div>
        </div>
      </div>

    </div>
    <div class="logoBlock">
      <span></span><div id="logoBlockSlider"></div></span>
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
    </div>

    <!-- <div id="inputEverything">
      <input id="addressbar" type="text" class="address" v-model="addy" placeholder="">
    </div> -->
  </div>
</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'
import anime from 'animejs'
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
        toppy.style.cssText = 'background: #F5F5DC;'
        return false
      }
    },
    // injectPlaceholder () {
    //   var bethMem = document.getElementById('addressbar')
    //   bethMem.placeholder = 'What is your address?'
    // },
    focusHelper () {
      setTimeout(function () {
        var bethSamach = document.getElementById('addressbar')
        bethSamach.focus()
      }, 3500)
    },
    getOuttaMyWay () {
      console.log('NOOOOOOOOOOOOOOO')
      anime({
        targets: '#logoBlockSlider',
        translateY: 50,
        delay: 2000
      })
    }
  },
  mounted () {
    this.doItAlready()
    // this.injectPlaceholder()
    this.focusHelper()
    this.getOuttaMyWay()
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Chicle');

#stars {
  font-size: 2.5rem;
  display: block;
  margin-bottom: -2rem;
  margin-left: 1.5rem;
  color: #313344;
}
#support {
  font-family: 'Oswald', serif;
  font-size: 1.4rem;
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
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
#p-wrapper:hover {
  box-shadow: 0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22);
}
#partnership {
  width: 22rem;
  border-width: 4px;
  border-style: solid;
  border-color: #654921;
  color: #654921;
  font-size: 1.4rem;
  background-color: #e0cb92;
  border-right-width: 2px;
  padding-top: .7rem;
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
}
#partnership-graphic-buddy, #partnership-graphic {
  position: absolute;
  left: 22.5rem;
  top: -2.75rem;
  width: 20%;
  height: auto;
}
#partnership-graphic-buddy {
  z-index: 50;
  -webkit-filter: drop-shadow( 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
  -moz-filter: drop-shadow( 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
  -ms-filter: drop-shadow( 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
  -o-filter: drop-shadow( 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
  filter: drop-shadow( 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24));
  -webkit-transition: 0.3s cubic-bezier(.25,.8,.25,1);
  transition: 0.3s cubic-bezier(.25,.8,.25,1);
}
#partnership-graphic-buddy:hover {
  -webkit-filter: drop-shadow(0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22));
  -moz-filter: drop-shadow(0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22));
  -ms-filter: drop-shadow(0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22));
  -o-filter: drop-shadow(0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22));
  filter: drop-shadow(0 5px 25px rgba(0,0,0,0.25), 0 4px 7px rgba(0,0,0,0.22));
  -webkit-transition: 0.3s cubic-bezier(.25,.8,.25,1);
  -moz-transition: 0.3s cubic-bezier(.25,.8,.25,1);
  -o-transition: 0.3s cubic-bezier(.25,.8,.25,1);
  transition: 0.3s cubic-bezier(.25,.8,.25,1);
}


#infobject {
  font-family: 'Oswald', sans-serif;
  position: inherit;
  padding: .75rem;
  width: 14.2rem;
  height: 10rem;
  font-size: 1.2rem;
  line-height: 105%;
  color: white;
  border-radius: 2px;
}

#brownType {
  color: #f2cbbc;
  font-family: 'Chicle', serif !important;
  text-align: left;
  font-size: 6.4rem;
  line-height: 89%;
  left: 2.3rem;
  bottom: 2rem;
  position: absolute;
}
.logoBlock {
  position: relative;
  height: 24.5rem;
  margin: 0 auto;
  border-radius: 2px;
  /*box-shadow: 10px 10px 20px #334431;*/
  z-index: 6;
  bottom: -4.7rem;
}
#logoBlockSlider, .logoBlock {
  width: 42rem;
  background-color: #334431;
}
#logoBlockSlider {
  position: relative;
  height: 10rem;
  bottom: 3.8rem;
  border-radius: 2px;
}

#inputEverything {
  position: relative;
}
.address {
  width: 44rem;
  margin: 0 auto;
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
