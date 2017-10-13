
<template>
  <div id="landing">

    <div class="mb-5" id="facingTitleBlock">
      <div class="ml-5 mt-5 mb-3" id="logoBlock">
        <h1 class="mb-3" id="brownType">The<br>Voter's<br>Companion</h1>
      </div>

    </div>
    <hr>
    <div id="bigInput" class="input-group mt-3" style="position: relative;">
      <input
        id="helloooo"
        type="search"
        style="background-color: #4f4f4f; border: 0px; border-radius: 1.5px; color: white;"
        class="form-control"
        placeholder="What is your address?"
        v-model="addy">
      <span class="input-group-btn">
        <button id="submitButton" class="mui-btn" type="button" style="border-radius: 1.5px; z-index: 2;" v-on:click="pushIt">Submit</button>
      </span>
      <div id="background-div" style="position: absolute;"></div>
    </div>
    <div id="bulk">
      <h2><router-link to="overview">Hello component</router-link></h2>
    </div>
    <div id="subtitleBlock">
      <div>
        <img id="USVoteImage" src="https://www.usvotefoundation.org/sites/all/themes/usvote_bootstrap_subtheme/logo.png">
      </div>
    </div>

    <h1 id="hiddenAddy"> {{ addy }} </h1>

    <h1 id="bolstarmessenger" hidden> {{ bolstarMsg }} </h1>

  </div>
</template>

<script>
// import axios from 'axios'
import Places from 'vue-places'

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
    bolstar () {
      var x = document.getElementById('#bolstarmessenger')
      if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible'
      } else {
        x.style.visibility = 'hidden'
      }
    },
    doItAlready () {
      var urlPath = location.pathname
      var toppy = document.getElementById('app')
      if (urlPath.length > 5) {
        toppy.style.background = '#F5F4EA'
        return false
      } else {
        toppy.style.background = '#B29772'
        return false
      }
    }
  },
  computed: {
    pushIt () {
      var charBar = document.getElementById('app')
      charBar.style.background = '#F5F4EA'
    }
  },
  mounted () {
    this.doItAlready()
  },

    // dataGrabber () {
    //   axios.get('https://www.googleapis.com/civicinfo/v2/representatives')
    // }
  components: {
    Places
  }
}

</script>

<style scoped>
input::-webkit-input-placeholder {
  color: white !important;
}

input:-moz-placeholder {
  /* Firefox 18- */
  color: white !important;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: white !important;
}

input:-ms-input-placeholder {
  /* IE 10+ */
  color: white !important;
}

input::-ms-input-placeholder {
  /* Edge */
  color: white !important;
}

.input-group {
  width: 675px;
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
}

.input-group {
  height: 36px !important;
}

</style>
