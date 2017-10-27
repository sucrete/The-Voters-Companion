
<template>
  <div id="landing">

    <div class="mb-3" id="facingTitleBlock">
      <div class="ml-5 mt-5 mb-1" id="logoBlock">
        <h1 class="mb-1" id="brownType" style="background-image: url('../../textures/paper-2.png');">The<br>Voter's<br>Companion</h1>
      </div>

    </div>

    <input id="addressbar" type="text" class="address mb-4" v-model="addy" placeholder="">

    <h1 class="mt-5" id="hiddenAddy"> {{ addy }} </h1>
    <div id="bulk">
      <h2 class="mb-5"><router-link  to="overview">Hello component</router-link></h2>
    </div>
    <div id="subtitleBlock">
      <div class="partnership">
        A
      </div>
      <div>
        <a href="https://www.usvotefoundation.org/"><img id="USVoteImage" src="../assets/logo.png"></a>
      </div>
      <div class="partnership">
      U.S. VOTE FOUNDATION PARTNER
      </div>
    </div>

    <h1 id="bolstarmessenger" hidden> {{ bolstarMsg }} </h1>
  </div>

</template>

<script>
// import axios from 'axios'
// import Places from 'vue-places'

import dynamics from 'dynamics.js'

export default {
  name: 'landing',
  data () {
    return {
      addy: '',
      bolstarMsg: 'you did it kiddo',
      civicData: '',
      params: '',
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
        toppy.style.background = '#BBA382'
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

<style scoped>

#subtitleBlock {
  text-align: center;
  display: inline-flex;
  border-width: thick;
  line-height: 200%;
  font-family: 'Assistant', sans-serif;
}

#USVoteImage {
  /*position: relative;
  bottom: 20px;*/
}

.partnership {
  font-size: 400%;
  color: #002247;
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
  color: #F5F4EA !important;
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

#app {
  background: #F5F4EA;
}

#brownType {
  color: #654321;
  font-family: 'Playfair Display', serif !important;
  text-align: left;
  font-size: 700%;
  line-height: 85%;
  z-index: 4;
}


</style>
