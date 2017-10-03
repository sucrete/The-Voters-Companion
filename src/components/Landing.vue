
<template>
  <div id="landing" class="mb-3 mt-3">
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
        <button class="btn mui-btn" type="button" style="border-radius: 0px;" v-on:click="pushIt">Submit</button>
      </span>

    </div>
    <div> {{ addy }} </div>
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

<style>


input {
  line-height: 18px !important;
}

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
  width: 700px;
  margin: 0 auto;
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
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  height: 700px;
  padding: 10px 24px;
  position: relative;
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

</style>
