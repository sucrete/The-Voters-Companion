
/* eslint-disable */
<template>
  <div id="app" class="mb-5">
    <div id="delimiter">
      <img src="http://38.media.tumblr.com/f89af1dea2c8b2b7c3a54bedd8bfd425/tumblr_mon0aipzfH1rmu6i5o1_250.gif" id="toungey">
    </div>
    <div id="addyButtonGroup" class="input-group mt-3">
      <input id="yrAddy" type="text" class="form-control mt-3" placeholder="yr addy" v-model="addy">
      <span class="input-group-btn">
        <button v-on:click="bolstar" class="btn btn-info mt-3" type="button">Go!</button>
      </span>

    </div>

    <h1> {{ addy }} </h1>
    <h1 hidden id="bolstar"> {{ bolstarMsg }} </h1>
    <h2><router-link to="/timeline">Link to yr TIMELINE</router-link></h2>
    <h2><router-link to="/overview">Hello component</router-link></h2>
    <h2><router-link id="yogabba" to="/district">District vue</router-link></h2>

    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      addy: '',
      bolstarMsg: 'you did it kiddo'
    }
  },
  created () {
    bolstar: function () {
      document.getElementById("bolstar").style.visibility = "";
    }
  }
}

</script>

<style>
#delimiter {
  width: 100;
  height: auto;
}
#toungey {
  width: 100;
  height: auto;
}
#bolstar {
  font-size: 200%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  width: 800px;
  margin: auto;
  margin-top: 60px;
}
#yogabba:visited {
  color: pink;
}

#addyButtonGroup {

}
html,body {
  margin: 0;
  padding: 0;
  background: #ebebeb;
}

a {
  color: #4285f4;
}

body {
  background: #ebebeb;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
}



header {
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  height: 55px;
  padding: 10px 24px;
  position: relative;
  z-index: 5;
}

header img {
  height: 100px;
  width: auto;
}

header #logo {
  float: left;
  height: 100%;
  max-width: 50%;
}

h1, h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
}

h2 {
  font-size: 25px;
}

p {
  margin: 0;
}


</style>
