
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
    removeRipple () {
      var els = document.querySelectorAll('.md-ripple')
      this._removeClasses(els)
    },
    _removeClasses (hope) {
      for (var i = 0; i < hope.length; i++) {
        hope[i].classList.remove('md-ripple')
      }
    }
  },
  created () {
    this.removeRipple()
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed:400,500,600|Cambo|Chicle');
#bigButton {
  position: absolute;
  right: 1rem;
  z-index: 888;
  transition: all 250ms ease-in-out;
  top: 9.5rem;
  /* first drop shadow handles the v light shadow and the second handles the sharper shadow drop-shadow(1px 14px 6px rgba(15, 13, 2, 0.07)) */
  filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.25));
  -webkit-filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.25));
}
/* #bigButton:hover {
  filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));
  -webkit-filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));
} */
html {
  /* background-color: #E1DCDC; */
  background: #f2f2f2 url( https://cl.ly/image/381U2k0A3L3S/bg.png );
  height: 100%;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
#app {
  background-color: #F5F4EA;
  border-radius: 2px;
}

.hotBod {
  position: relative;
  top: 1rem;
  padding-bottom: 1rem;
}

#overviewNotice {
  color: rgb(113, 106, 56);
  font-size: 130%;
  width: 20rem;
  text-align: left;
  line-height: 140%;
  height: 12rem;
  padding-left: .4rem;
}
#overviewNoticeWrapper {
  background-color: rgba(230, 230, 230, 0.8);
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  width: 100%;
  padding-left: 1.75rem;
  padding-top: 2.2rem;
  padding-bottom: 1rem;
  position: relative;
  margin-bottom: -.99rem;
  border-radius: 3px;
  margin-top: .4rem;
}
#overviewMarquee {
  font-size: 350%;
  color: #353839;
  font-weight: 600;
  text-align: left;
  margin-bottom: 1.25rem;
}
.simple-navigation-header {
  color: #353839;
  width: 42.5rem;
  font-size: 105%;
  margin: 0 auto;
  position: relative;
  background-color: transparent;
  height: 4rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#takeMeOmh {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  font-size: 125%;
  color: #867933;
  transition: color 150ms ease-in-out;
}
#takeMeOmh:hover {
  color: #353839;
}
#takeMeOmhDaddy {
  top: .35rem;
  position: relative;
}
.mui-btn {
  width: 125px;
  font-weight: 500;
  font-size: 14px;
  background-color: #F5F4EA;
  transition: all 250ms ease-in-out;
  border: none;
  top: -.2rem;
}
.mui-btn:hover {
  color: #353839;
}
#righty:hover {
  transform: translate(3px, 0px);
  -webkit-transform: translate(3px, 0px);
}
#lefty:hover {
  transform: translate(-3px, 0px);
  -webkit-transform: translate(-3px, 0px);
}
router-link:hover {
  text-decoration: none !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 46rem;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  text-align: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.17);
  padding: 10px 24px;
  min-height: 45rem;
  position: relative;
}

body {
  margin: 0;
  padding: 0;
  /* 👇 the color behind the 'page' element */
  background: #f2f2f2 url( https://cl.ly/image/381U2k0A3L3S/bg.png );
  height: 100%;
}

a {
  color: #3b3c36;
  text-decoration:none !important;
}
a:visited:not(#takeMeOmh) {
  color: #716E10;
}


h1 {
  font-size: 34px;
  font-weight: 300;
  line-height: 40px;
  margin: 0;
  padding: 0;
}

h2 {
  font-size: 25px;
}

input, input:focus {
  border: none;
  outline: none;
}
#takeMeOmh:visited, #takeMeOmhDaddy:visited {
  color: #353839 !important;
}
</style>
