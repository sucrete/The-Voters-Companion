
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
    <div id="inputEverything">
      <places
        id="places"
        v-model="form.country.label"
        placeholder="What is your address?"
        @change="val => { form.country.data = val }"
        :options="{ countries: ['US'] }">
      </places>
    </div>
    <div class="logoBlock">
      <span></span><div id="logoBlockSlider"></div></span>
      <h1 id="brownType" >The<br>Voter's<br>Companion</h1>
    </div>


  </div>
</template>

<script>
// import axios from 'axios'
import Places from 'vue-places'
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
      addyplaceholder: 'What is your address?',
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
    getOuttaMyWay () {
      anime({
        targets: '#logoBlockSlider',
        translateY: 59,
        delay: 3500
      })
    },
    focusHelper () {
      var daletShin = document.getElementById('places')
      var daletSemach = document.getElementById('inputEverything')
      setTimeout(function () {
        daletShin.focus()
        daletSemach.style.cssText = 'z-index: 700;'
      }, 4000)
    }
  },
  mounted () {
    this.doItAlready()
    this.getOuttaMyWay()
    this.focusHelper()
  },
  components: {
    Places
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
  position: absolute;
  z-index: 1;
  left: 1.4rem;
  top: 12.5rem;
  margin-left: auto;
  margin-right: auto;
}
#places {
  width: 40rem;
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
