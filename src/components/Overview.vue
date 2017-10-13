<template>
  <div class="overview">
    <div id="header-plus-line">
      <div class="simple-navigation-header mt-2 mb-2">
        <button id="lefty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
        <a id="takeMeOmh" class="mt-1" style="display: flex;" href="/"><p>The Voter's Companion</p></a>
        <button id="righty" type="button" class="mui-btn"><router-link to="district">District</router-link></button>
      </div>
    <hr style="position: relative; bottom: 10px;">
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


#toungey {
  width: 200px !important;
  height: auto !important;
}
h1, h2 {
  font-weight: normal;
  color: black;
}



</style>
