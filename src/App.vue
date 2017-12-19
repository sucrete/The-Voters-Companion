
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


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
    doItAlready () {
      var urlPath = location.pathname
      var toppy = document.getElementById('app')
      if (urlPath.length > 5) {
        toppy.style.background = '#F5F4EA'
        return false
      } else {
        toppy.style.cssText = 'background: #F5F5DC; background: -webkit-linear-gradient(315deg, #e8f4f8, #F5F5DC); background: linear-gradient(315deg, #e8f4f8, #F5F5DC)'
        return false
      }
    }
  },
  mounted () {
    this.doItAlready()
  }
}

</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Rasa');
@import url('https://fonts.googleapis.com/css?family=Oswald:500,600');

html {
  background-color: #E1DCDC;
}

.hotBod {
  position: relative;
  overflow: scroll;
  top: 4rem;
  padding-bottom: 4rem;
}

.simple-navigation-header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  min-width: 35em;
  align-items: center;
  font-size: 125%;
  margin: 0 auto;
  position: fixed; /* Set the navbar to a fixed position */
  background-color: #F5F4EA;
  z-index: 5;
  box-shadow: 0 0 5px 10px #F5F4EA;
}

#righty, #lefty {
  display: flex;
}

#takeMeOmh {
  position: relative;
  bottom: 3px;
}

#takeMeOmh:visited {
  color: black;
}

a {
  text-decoration:none !important;
}

router-link:hover {
  text-decoration: none !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 46rem;
  margin: auto;
  margin-top: 1rem;
  /* background color called 'brown paper bag': #B29772*/
  background: #F5F4EA;
  font-family: 'Rasa', serif;
  font-weight: 300;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,.26);
  padding: 10px 24px;
  min-height: 43rem;
  position: relative;
}

body {
  margin: 0;
  padding: 0;
  background: #E1DCDC;
}

a {
  color: black;
}
a:visited {
  color: #716E10;
}


h1, h2 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 25px;
}

p {
  margin: 0;
}

.mui-btn {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  background-color: #F5F4EA;
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
  text-decoration: none !important;
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

input, input:focus {
  border: none;
  outline: none;
}
</style>
