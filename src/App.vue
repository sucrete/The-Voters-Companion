<template>
  <div id="app">
    <img id="toungey"  src="https://www.tommoody.us/images/jun10/Adult_gecko_animation.gif">
    <h2><router-link to="/timeline">Link to yr TIMELINE</router-link></h2>
    <h2><router-link to="/hello">Hello component</router-link></h2>
    <h2><router-link id="yogabba" to="/district">District vue</router-link></h2>
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app'
}
</script>

<style>

@import "shed-css/dist/index.css";

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
#toungey {
  width: 100;
  height: auto;
}

</style>
