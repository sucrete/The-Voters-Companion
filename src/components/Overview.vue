<template>
  <div class="overview">
    <div class="simple-navigation-header">
      <button class="mui-btn float-left"><router-link id="lefty" to="timeline">timeline</router-link></button>
      <button class="mui-btn float-right"><router-link id="righty" to="district">District</router-link></button>
    </div>
    <img id="toungey" class="animated-gif" src="https://www.tommoody.us/images/jun10/Adult_gecko_animation.gif"/>
    <h1 class="mt-2">{{ msg }}</h1>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'overview',
  data () {
    return {
      msg: 'This is your main component. This can be navigated away from.'
    }
  },
  methods: {
    blancher () {
      $('#app').css(
        'background', '#F5F4EA'
      )
    }
  },
  mounted () {
    this.blancher()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.simple-navigation-header {
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: auto;
}

.overview {
  display: block;
  width: 700;
  height: auto;
}
#toungey {
  width: 200px !important;
  height: auto !important;
}
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


</style>
