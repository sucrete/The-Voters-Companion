
<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      a bunch of stuff
      <a id="logoLink" href="https://www.usvotefoundation.org/" target="_blank">
        <img :src=" logFin "/>
      </a>
    </footer>
  </div>
</template>

<script>
import logoFinal from './assets/mauve2.png'
export default {
  name: 'app',
  data () {
    return {
      logFin: logoFinal,
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

@import url('https://fonts.googleapis.com/css?family=Karla:400|Roboto:400,500,700,900');
.v-tabs__div {
  cursor: pointer;
}
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
footer {
/* position: absolute; */
background-color: rgb(243, 243, 243);
height: 15em;
width: 97%;
bottom: 10px;
color: #3e3830;
margin: 0 auto;
padding: 16px;
border-radius: 3px;
display: block;
}
#logoLink {
  z-index: 777;
  position: relative;
  top: .3em;
  float: right;

  filter: drop-shadow(0 2px 3px rgba(26, 47, 136, 0.46));
	-webkit-filter: drop-shadow(0 2px 3px rgba(26, 47, 136, 0.46));
  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);
    filter:drop-shadow(4px 4px 0 #A57F70)*/
}
html {
  background: linen url( "https://cl.ly/image/381U2k0A3L3S/bg.png" );
  height: 100%;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.v-tabs {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 46rem;
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 5em;
  text-align: center;
  /* box-shadow from Domenico on https://codepen.io/ryandom/pen/ALQkWq*/
  box-shadow: 0 0.4rem 0.4rem rgba(102, 111, 214, 0.17), 0 0.8rem 0.8rem rgba(18, 35, 72, 0.1), 0 1.6rem 1.5rem rgba(4, 15, 58, 0.1), 0 3.2rem 3.2rem rgba(65, 67, 111, 0.1);
  /* padding: 10px 24px; */
  min-height: 52em;
  position: relative;
  border-radius: 3px;
  padding-bottom: 9px;
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
  margin-bottom: 0em;
}
#overviewMarquee {
  font-size: 200%;
  color: #5b524a;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  margin-bottom: .5em;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.2);
  font-weight: 500;
  letter-spacing: .08em;
  padding-left: .4em;
}

a:hover {
  text-decoration: none !important;
}

body {
  margin: 0;
  padding: 0;
  /* 👇 the color behind the 'page' element */
  height: 100%;
  display: block;
}

a {
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
    width: 100vw;
    min-height: 100vh !important;
    margin-bottom: 0px !important;
    margin-top: 0px;
    box-shadow: 0 0 0 0 rgba(0,0,0, .0);
    border-radius: 0px;
  }
  #overviewNoticeWrapper {
    height: 225px;
  }
  #overviewMarquee {
    font-size: 250%;
    margin-bottom: .3em;
  }
  #overviewNotice {
    padding-right: 3em;
    padding-left: .2em;
  }
  #logoLink {
    right: -2.7em;
  }
  footer {
    width: 95%;
    margin: 0 auto;
    position: relative;
    margin-top: 2.5%
  }
}
@media only screen and (max-width: 375px) {
  footer {
    width: 95%;
  }
  #logoLink {
    top: .7em;
  }
  #overviewNoticeWrapper {
    height: 175px;
  }
}
</style>
