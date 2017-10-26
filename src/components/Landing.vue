
<template>
  <div id="landing">

    <div class="mb-3" id="facingTitleBlock">
      <div class="ml-5 mt-5 mb-1" id="logoBlock">
        <h1 class="mb-1" id="brownType">The<br>Voter's<br>Companion</h1>
      </div>

    </div>

    <input id="addressbar" type="text" class="address mb-4" placeholder="">
    <!-- <div id="bigInput" class="input-group mt-4" style="position: relative;">
      <input
        id="helloooo"
        type="search"
        style="background-color: #B29772; border: 0px; border-radius: 1.5px; color: white;"
        class="form-control"
        placeholder="What is your address?"
        v-model="addy">
      <span class="input-group-btn">
        <button id="submitButton" class="mui-btn" type="button" style="border-radius: 1.5px; z-index: 2;" v-on:click="pushIt">Submit</button>
      </span>
      <div id="background-div" style="position: absolute;"></div>
    </div> -->
    <div id="bulk">
      <h2 class="mt-5 mb-5"><router-link  to="overview">Hello component</router-link></h2>
    </div>
    <div id="subtitleBlock">
      <div class="partnership">
        A
      </div>
      <div>
        <a href="https://www.usvotefoundation.org/"><img id="USVoteImage" src="https://www.usvotefoundation.org/sites/all/themes/usvote_bootstrap_subtheme/logo.png"></a>
      </div>
      <div class="partnership">
      PARTNER
      </div>
    </div>

    <h1 id="hiddenAddy"> {{ addy }} </h1>

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
        daletAyin.setAttribute('style', 'width: 610px; margin: 0 auto; display: block; font-size: 120%; padding: 10px 0; padding-bottom: 1px; padding-left: 20px; border: none; border-bottom: solid 2px #654321; color: #383838; background-color: #BBA382; background-image: linear-gradient(to bottom, transparent 98%, #654321 98%); background-repeat: no-repeat; background-size: 610px 100%; background-position: -610px 0; transition: background-position 0.2s cubic-bezier(0.64, 0.09, 0.08, 1); position: relative; left: 7px;')
        daletAyin.style.removeProperty('background')
      }, 3413)
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
  text-align: left;
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
  background-color: #BBA382;
  background-image: linear-gradient(to bottom, transparent 98%, #654321 98%);
  background-repeat: no-repeat;
  background-size: 610px 100%;
  background-position: -610px 0;
  transition: background-position 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
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

/*input {
  width: 100%;
  border-top: none;
  box-shadow: inset 2px 2px 2px rgba(0,0,0,.39);
  outline: 0;
  padding: 8px 6px;
}*/

input::-webkit-input-placeholder {
  color: #F5F4EA !important;
}

input:-moz-placeholder {
  /* Firefox 18- */
  color: #F5F4EA !important;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: #F5F4EA !important;
}

input:-ms-input-placeholder {
  /* IE 10+ */
  color: #F5F4EA !important;
}

input::-ms-input-placeholder {
  /* Edge */
  color: #F5F4EA !important;
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

.input-group {
  height: 36px !important;
}

</style>
