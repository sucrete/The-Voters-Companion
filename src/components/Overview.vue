<template>
  <div class="overview">
    <button class="mui-btn"><router-link id="lefty" to="timeline">timeline</router-link></button>
    <button class="mui-btn"><router-link id="righty" to="district">District</router-link></button>

    <img id="toungey"  class="animated-gif w:2of8" style="width: 100; height: auto;" src="https://www.tommoody.us/images/jun10/Adult_gecko_animation.gif"/>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  name: 'overview',
  data () {
    return {
      msg: 'This is your main component. This can be navigated away from.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: black;
}

.hello {
  background-color: olive;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
