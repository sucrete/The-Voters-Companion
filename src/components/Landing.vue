
<template>
  <div id="landing">

    <div id="facingTitleBlock">
      <div class="ml-5 mt-4 mb-3" id="logoBlock">
        <h1 class="mb-3" id="brownType">The<br>Voter's<br>Companion</h1>
      </div>
    </div>
    <div id="bigInput" class="input-group mt-3">
      <input
        id="helloooo"
        type="search"
        style="background-color: #4f4f4f; border: 0px; border-radius: 1.5px; color: white;"
        class="form-control"
        placeholder="What is your address?"
        v-model="addy">
      <span class="input-group-btn">
        <button id="submitButton" class="btn mui-btn" type="button" style="border-radius: 1.5px;" v-on:click="pushIt">Submit</button>
      </span>
    </div>
    <h1 id="hiddenAddy"> {{ addy }} </h1>
    <div id="delimiter">
      <img class="mt-3 mb-2" src="http://38.media.tumblr.com/f89af1dea2c8b2b7c3a54bedd8bfd425/tumblr_mon0aipzfH1rmu6i5o1_250.gif" id="toungey">
    </div>
    <h1 id="bolstarmessenger" hidden> {{ bolstarMsg }} </h1>
    <div id="bulk">

      <h2><router-link to="overview">Hello component</router-link></h2>

    </div>
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
    }
  },
  computed: {
    pushIt () {
      var charBar = document.getElementById('app')
      charBar.style.background = '#F5F4EA'
    }
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


#app {
  background: #F5F4EA;
}

#helloooo {
  background-image: url("https://s1.postimg.org/4eruqhil67/ticks.png");
  background-repeat: repeat;
}

#submitButton {

}

#brownType {

  color: #654321;
  font-family: 'Playfair Display', serif !important;
  text-align: left;
  font-size: 700%;
  line-height: 90%;
}

.input-group {
  height: 36px !important;
}

</style>
