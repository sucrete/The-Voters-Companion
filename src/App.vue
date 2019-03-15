
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
  },
  created () {
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Karla:400,700');
#bigButton {
  position: absolute;
  right: 1rem;
  z-index: 888;
  top: 6.7em;
  /* first drop shadow handles the v light shadow and the second handles the sharper shadow drop-shadow(1px 14px 6px rgba(15, 13, 2, 0.07)) */
  filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.2)) drop-shadow(0px -5px 5px rgb(173, 39, 15, .2));
  -webkit-filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.2)) drop-shadow(0px -5px 5px rgb(173, 39, 15, .2));
}
/* #bigButton:hover {
  filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));
  -webkit-filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));
} */

html {
  background-color: rgb(190, 190, 190);
  height: 100%;
  /* box-sizing: border-box; */
}

*, *:before, *:after {
  box-sizing: inherit;
}
#app {
  background-color:rgb(190, 190, 190);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 46rem;
  margin: auto;
  margin-top: 1.5rem;
  margin-bottom: 5em;
  text-align: center;
  /* box-shadow inspiration from Domenico on https://codepen.io/ryandom/pen/ALQkWq*/
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, .17), 0 0.8rem 0.8rem rgba(0, 0, 0, .1), 0 1.6rem 1.5rem rgba(0, 0, 0, .1), 0 3.2rem 3.2rem rgba(0, 0, 0, .1);
  padding: 10px 24px;
  min-height: 52em;
  position: relative;
  border-radius: 3px;
}

.hotBod {
  position: relative;
  top: 1rem;
  padding-bottom: 1rem;
}

#overviewNotice {
  color: rgb(94, 94, 90);
  font-size: 130%;
  width: 20rem;
  text-align: left;
  line-height: 150%;
  height: 12rem;
  padding-left: .7em;
  font-weight: 400;
  letter-spacing: .07em;
}
#overviewNoticeWrapper {
  background-color: rgba(230, 230, 230, 0.8);
  font-family: 'Karla', sans-serif;
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
  font-size: 200%;
  color: #5b524a;; /* color --> "jet black" */
  text-align: left;
  margin-bottom: .5em;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  font-weight: 400;
  letter-spacing: .06em;
  padding-left: .4em;
}
.simple-navigation-header {
  color: #3c9035;
  width: 47em;
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
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  font-size: 127%;
  color: rgb(242, 128, 63);
  transition: color 100ms ease-in-out;
  text-align: center;
  letter-spacing: .09em;
}
#takeMeOmh:hover {
  color: rgb(226, 119, 59);
}
#takeMeOmhDaddy {
  top: -.2em;
  position: relative;
  /* left: .2rem; */
}
.mui-btn {
  width: 125px;
  font-size: 84%;
  font-weight: 400;
  background-color: #f7f7f0;
  border: none;
  top: -.2rem;
  letter-spacing: .07em;
  box-sizing: border-box;
}
#lefty, #righty {
  position: relative;
}

.leftArrow, .rightArrow {
  transition: transform 120ms;
  height: 45%;
  width: auto;
  text-transform: uppercase;
  position: relative;
  top: -.1em;
}
.leftArrow {
  margin-right: .5em;
}
.rightArrow {
  margin-left: .5em;
}
#lefty:hover .leftArrow {
  transform: translate(-3px, 0px);
  -webkit-transform: translate(-3px, 0px);
}
#righty:hover .rightArrow {
  transform: translate(3px, 0px);
  -webkit-transform: translate(3px, 0px);
}
a:hover {
  text-decoration: none !important;
  font-weight: 400 !important;
  box-sizing: border-box !important;
}

body {
  margin: 0;
  padding: 0;
  /* 👇 the color behind the 'page' element */
  background: #fafafa;
  height: 100%;
}

a {
  color: rgb(91, 82, 74);
  text-decoration: none !important;
}
a:visited {
  color: #5b524a !important;
  text-decoration: none !important;
}

h1 {
  font-size: 34px;
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
  color: #5b524a !important;
}
#e9_texte {
  font-size: 1.5rem;
  font-family: 'Karla', sans-serif;
}

/* loading modal below this line ================================= */
/* The modal-loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN */
.v--modal {
  border-radius: 100% !important;
  box-sizing: none !important;
  position: relative;
}
.image {
  width: 100px;
  height: 160px;
  font-size: 40px;
  text-align: center;
  transform-origin: bottom center;
  animation: 3s rotate infinite !important;
  opacity: 0;
  color: blue;
  top: 2.1rem;
  left: 3.2rem;
  position: relative;
}
.v--modal-box span {
  color: white;
  display: block;
  font-size: 115%;
  width: 100%;
  text-align: center;
  position: absolute !important;
  z-index: 778;
  bottom: 50px;
}

/* The loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN  */
@keyframes rotate{
  0% {
    transform: rotate(90deg);
  }
  10% {
    opacity: 0;
  }
  35% {
    transform: rotate(0deg);

  }
  55% {
    opacity: 1;
  }
  65% {
    transform: rotate(0deg);
    opacity: 1;
  }
  75% {
    opacity: 0;
  }

  100%{
    transform: rotate(-90deg);
  }
}

.v--modal-overlay .v--modal-box {
  overflow: visible !important;
  position: relative !important;
  background-color: #888888;
  box-shadow: 0px 8px 12px rgba(58, 68, 41, 0.2), 0px 12px 20px rgba(0, 0, 0, .1), 0px 0px 17px rgba(0, 0, 0, .14)!important;
}

.v--modal-overlay {
  background-color: rgba(0, 0, 0, .4);
  border-radius: 0px;
  /* width: 100vw;
  height: 100vh; */
  border-style: none;
}
.scale-enter-active, .scale-leave-active {
 transition: all 0.5s;
}
.scale-enter, .scale-leave-active {
 opacity: 0;
 transform: scale(0.3) translateY(24px);
}
@media only screen and (max-width: 750px) {
    #app {
      width: 98vw;
      margin-top: 3px !important;
      min-height: 98.9vh !important;
      box-shadow: -1px 5px 9px rgba(0, 0, 0, 0.0), 1px 3px 7px rgba(0,0,0,0.0)
    }
    .simple-navigation-header {
      width: 85vw;
    }
    #overviewNoticeWrapper {
      height: 250px;
    }
    #overviewMarquee {
      font-size: 250%;
      margin-bottom: .3em;
    }
    #overviewNotice {
      padding-right: 3em;
      padding-left: .2em;
    }
    #bigButton {
      visibility: hidden;
    }
}
</style>
