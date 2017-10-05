
<template>
  <div id="landing">
    <div id="delimiter">
      <img class="mt-3 mb-2" src="http://38.media.tumblr.com/f89af1dea2c8b2b7c3a54bedd8bfd425/tumblr_mon0aipzfH1rmu6i5o1_250.gif" id="toungey">
    </div>
    <div id="facingTitleBlock">
      <div id="logoBlock">
        <h1 id="brownType">The<br>Voter's<br>Companion</h1>
      </div>
    </div>
    <div id="bigInput" class="input-group mt-3">
      <input
        id="helloooo"
        type="search"
        style="background: #7A7A78; border: 0px; border-radius: 1.5px; color: white;"
        class="form-control"
        placeholder="What is your address?"
        v-model="addy">
      <span class="input-group-btn">
        <button class="btn mui-btn" type="button" style="border-radius: 1.5px;" v-on:click="pushIt">Submit</button>
      </span>
    </div>
    <h1 id="hiddenAddy"> {{ addy }} </h1>
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

    // dataGrabber () {
    //   axios.get('https://www.googleapis.com/civicinfo/v2/representatives')
    // }
  },
  components: {
    Places
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:900');

#brownType {
  color: #654321;
  font-family: 'Playfair Display', serif;
  text-align: left;
  font-size: 500%;
  line-height: 100%;
}

.input-group {
  height: 36px !important;
}

</style>
