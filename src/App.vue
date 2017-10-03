
<template>
  <div id="app" class="mb-3 mt-3">
    <div id="delimiter">
      <img class="mt-3 mb-2" src="http://38.media.tumblr.com/f89af1dea2c8b2b7c3a54bedd8bfd425/tumblr_mon0aipzfH1rmu6i5o1_250.gif" id="toungey">
    </div>
    <div class="input-group mt-3">
      <input
        id="helloooo"
        type="search"
        style="background: #7A7A78; border: 0px; border-radius: 0px; color: white;"
        class="form-control"
        placeholder="What is your address?"
        v-model="addy">
      <span class="input-group-btn">
        <button class="btn mui-btn" type="button" style="border-radius: 0px;" v-on:click="bolstar">Submit</button>
      </span>
    </div>

    <h1 id="hiddenAddy"> {{ addy }} </h1>
    <h1 id="bolstarmessenger" hidden> {{ bolstarMsg }} </h1>
    <div id="bulk">
      <h2><router-link id="daletPeh" to="/timeline">Link to yr TIMELINE</router-link></h2>
      <h2><router-link id="daletShin" to="/overview">Hello component</router-link></h2>
      <h2><router-link id="yogabba" to="/district">District vue</router-link></h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios'
import Places from 'vue-places'

export default {
  name: 'app',
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

<style>

[type="search"] {
    -moz-appearance:    textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
}

::-webkit-input-placeholder {
  color: blue;
}

:-moz-placeholder {
  /* Firefox 18- */
  color: blue;
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: blue;
}

:-ms-input-placeholder {
  /* IE 10+ */
  color: blue;
}

::-ms-input-placeholder {
  /* Edge */
  color: blue;
}

:placeholder-shown {
  /* Standard one last! */
  color: blue;
}
.input-group {
  width: 700px;
  margin: 0 auto;
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
  margin-top: 25px;
  background: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  height: 700px;
  padding: 10px 24px;
  position: relative;
}
#yogabba:visited {
  color: pink;
}

body {
  margin: 0;
  padding: 0;
  background: #ebebeb;
}

a {
  color: #4285f4;
}
*, *:before, *:after {
  box-sizing: inherit;
}

.button {
  color: platinum;
  display: flex;

  -webkit-transition: all 60ms ease-in-out;
  transition: all 60ms ease-in-out;
  text-decoration: none !important;

  color: #fff;
  border: 0 none;
  border-radius: 4px;
  font-weight: 500;

  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.button:hover {
  -webkit-transition: all 60ms ease;
  transition: all 60ms ease;
  opacity: .85;
}
.button:active {
  -webkit-transition: all 60ms ease;
  transition: all 60ms ease;
  opacity: .75;
}
.button:focus {
  outline: 1px dotted #959595;
  outline-offset: -4px;
}
.button.-regular {
  color: #202129;
  background-color: #f2f2f2;
}
.button.-regular:hover {
  color: #202129;
  background-color: #e1e2e2;
  opacity: 1;
}
.button.-regular:active {
  background-color: #d5d6d6;
  opacity: 1;
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
input {
  color: #fbf9f7;
}

.mui-btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  background-color: #FFF;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  height: 36px;
  padding: 0 26px;
  margin: 6px 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  background-image: none;
  text-align: center;
  line-height: 36px;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
}

.mui-btn:hover, .mui-btn:focus, .mui-btn:active {
  color: rgba(0, 0, 0, 0.87);
  background-color: white;
}

.mui-btn[disabled]:hover, .mui-btn[disabled]:focus, .mui-btn[disabled]:active {
  color: rgba(0, 0, 0, 0.87);
  background-color: #FFF;
}

.mui-btn.mui-btn--flat {
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
}

.mui-btn.mui-btn--flat:hover, .mui-btn.mui-btn--flat:focus, .mui-btn.mui-btn--flat:active {
  color: rgba(0, 0, 0, 0.87);
  background-color: #f2f2f2;
}

.mui-btn.mui-btn--flat[disabled]:hover, .mui-btn.mui-btn--flat[disabled]:focus, .mui-btn.mui-btn--flat[disabled]:active {
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
}

.mui-btn:hover, .mui-btn:focus, .mui-btn:active {
  outline: 0;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

.mui-btn:hover, .mui-btn:focus {
  -webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .mui-btn:hover, .mui-btn:focus {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
}

@supports (-ms-ime-align: auto) {
  .mui-btn:hover, .mui-btn:focus {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
}

.mui-btn:active:hover {
  -webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .mui-btn:active:hover {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
}

@supports (-ms-ime-align: auto) {
  .mui-btn:active:hover {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
}

.mui-btn:disabled, .mui-btn.mui--is-disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.60;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.mui-btn + .mui-btn {
  margin-left: 8px;
}

.mui-btn--flat {
  background-color: transparent;
}

.mui-btn--flat:hover, .mui-btn--flat:focus, .mui-btn--flat:active, .mui-btn--flat:active:hover {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: #f2f2f2;
}

.mui-btn--raised, .mui-btn--fab {
  -webkit-box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .mui-btn--raised, .mui-btn--fab {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
}

@supports (-ms-ime-align: auto) {
  .mui-btn--raised, .mui-btn--fab {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  }
}

.mui-btn--raised:active, .mui-btn--fab:active {
  -webkit-box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .mui-btn--raised:active, .mui-btn--fab:active {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
}

@supports (-ms-ime-align: auto) {
  .mui-btn--raised:active, .mui-btn--fab:active {
    -webkit-box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.12), -1px 0px 2px rgba(0, 0, 0, 0.12), 0 0px 4px rgba(0, 0, 0, 0.12), 1px 3px 4px rgba(0, 0, 0, 0.2);
  }
}

.mui-btn--fab {
  position: relative;
  padding: 0;
  width: 55px;
  height: 55px;
  line-height: 55px;
  border-radius: 50%;
  z-index: 1;
}

.mui-btn--primary {
  color: #FFF;
  background-color: #2196F3;
}

.mui-btn--primary:hover, .mui-btn--primary:focus, .mui-btn--primary:active {
  color: #FFF;
  background-color: #39a1f4;
}

.mui-btn--primary[disabled]:hover, .mui-btn--primary[disabled]:focus, .mui-btn--primary[disabled]:active {
  color: #FFF;
  background-color: #2196F3;
}

.mui-btn--primary.mui-btn--flat {
  color: #2196F3;
  background-color: transparent;
}

.mui-btn--primary.mui-btn--flat:hover, .mui-btn--primary.mui-btn--flat:focus, .mui-btn--primary.mui-btn--flat:active {
  color: #2196F3;
  background-color: #f2f2f2;
}

.mui-btn--primary.mui-btn--flat[disabled]:hover, .mui-btn--primary.mui-btn--flat[disabled]:focus, .mui-btn--primary.mui-btn--flat[disabled]:active {
  color: #2196F3;
  background-color: transparent;
}

.mui-btn--dark {
  color: #FFF;
  background-color: #424242;
}

.mui-btn--dark:hover, .mui-btn--dark:focus, .mui-btn--dark:active {
  color: #FFF;
  background-color: #4f4f4f;
}

.mui-btn--dark[disabled]:hover, .mui-btn--dark[disabled]:focus, .mui-btn--dark[disabled]:active {
  color: #FFF;
  background-color: #424242;
}

.mui-btn--dark.mui-btn--flat {
  color: #424242;
  background-color: transparent;
}

.mui-btn--dark.mui-btn--flat:hover, .mui-btn--dark.mui-btn--flat:focus, .mui-btn--dark.mui-btn--flat:active {
  color: #424242;
  background-color: #f2f2f2;
}

.mui-btn--dark.mui-btn--flat[disabled]:hover, .mui-btn--dark.mui-btn--flat[disabled]:focus, .mui-btn--dark.mui-btn--flat[disabled]:active {
  color: #424242;
  background-color: transparent;
}

.mui-btn--danger {
  color: #FFF;
  background-color: #F44336;
}

.mui-btn--danger:hover, .mui-btn--danger:focus, .mui-btn--danger:active {
  color: #FFF;
  background-color: #f55a4e;
}

.mui-btn--danger[disabled]:hover, .mui-btn--danger[disabled]:focus, .mui-btn--danger[disabled]:active {
  color: #FFF;
  background-color: #F44336;
}

.mui-btn--danger.mui-btn--flat {
  color: #F44336;
  background-color: transparent;
}

.mui-btn--danger.mui-btn--flat:hover, .mui-btn--danger.mui-btn--flat:focus, .mui-btn--danger.mui-btn--flat:active {
  color: #F44336;
  background-color: #f2f2f2;
}

.mui-btn--danger.mui-btn--flat[disabled]:hover, .mui-btn--danger.mui-btn--flat[disabled]:focus, .mui-btn--danger.mui-btn--flat[disabled]:active {
  color: #F44336;
  background-color: transparent;
}

.mui-btn--accent {
  color: #FFF;
  background-color: #FF4081;
}

.mui-btn--accent:hover, .mui-btn--accent:focus, .mui-btn--accent:active {
  color: #FFF;
  background-color: #ff5a92;
}

.mui-btn--accent[disabled]:hover, .mui-btn--accent[disabled]:focus, .mui-btn--accent[disabled]:active {
  color: #FFF;
  background-color: #FF4081;
}

.mui-btn--accent.mui-btn--flat {
  color: #FF4081;
  background-color: transparent;
}

.mui-btn--accent.mui-btn--flat:hover, .mui-btn--accent.mui-btn--flat:focus, .mui-btn--accent.mui-btn--flat:active {
  color: #FF4081;
  background-color: #f2f2f2;
}

.mui-btn--accent.mui-btn--flat[disabled]:hover, .mui-btn--accent.mui-btn--flat[disabled]:focus, .mui-btn--accent.mui-btn--flat[disabled]:active {
  color: #FF4081;
  background-color: transparent;
}

.mui-btn--small {
  height: 30.6px;
  line-height: 30.6px;
  padding: 0 16px;
  font-size: 13px;
}

.mui-btn--large {
  height: 54px;
  line-height: 54px;
  padding: 0 26px;
  font-size: 14px;
}

.mui-btn--fab.mui-btn--small {
  width: 44px;
  height: 44px;
  line-height: 44px;
}

.mui-btn--fab.mui-btn--large {
  width: 75px;
  height: 75px;
  line-height: 75px;
}

</style>
