<template>
  <div class="overview">
    <!-- simple nav header -->
    <div class="simple-navigation-header mt-2 mb-2">
      <button id="lefty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
      <a id="takeMeOmh" class="mt-1" style="display: flex;" href="/"><p>The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="district">District</router-link></button>
    </div>
    <!-- body -->
    <div class="hotBod">
      <img id="toungey" src="https://www.tommoody.us/images/jun10/Adult_gecko_animation.gif"/>
      <h1 class="mt-2">{{ msg }}</h1>
      <div id="overviewBody">
<!--
█▀▀█ █░░ █░░█ █▀▀▀ 　 █░░█ ▀▀█▀▀ █▀▄▀█ █░░ 　 ▀█▀ █▀▀▄　  █░░█ █▀▀ █▀▀█ █▀▀
█░░█ █░░ █░░█ █░▀█ 　 █▀▀█ ░░█░░ █░▀░█ █░░ 　 ▒█░ █░░█ 　 █▀▀█ █▀▀ █▄▄▀ █▀▀
█▀▀▀ ▀▀▀ ░▀▀▀ ▀▀▀▀ 　 ▀░░▀ ░░▀░░ ▀░░░▀ ▀▀▀ 　 ▄█▄ ▀░░▀ 　 ▀░░▀ ▀▀▀ ▀░▀▀ ▀▀▀
 -->
      </div>
      <div>
        {{ stuper }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'overview',
  data () {
    return {
      msg: 'This is your main component. This can be navigated away from.'
    }
  },
  methods: {
    colorMeSlightlyYellow () {
      var toppy = document.getElementById('app')
      toppy.style.cssText = 'background-color: #F5F4EA'
    }
  },
  computed: {
    stuper () {
      return this.$store.getters.stuper
    }
  },
  beforeMount () {
    this.colorMeSlightlyYellow()
  },
  updated () {
    this.colorMeSlightlyYellow()
  },
  mounted () {
    var state = this.$store.getters.showMeDatState
    var GState = state.googleResponse
    var divisions = GState.data.divisions
    var keys = Object.keys(divisions)
    var reversedKeys = []
    console.log('YOUR DIVISIONS ---> ' + JSON.stringify(divisions, null, '\t'))
    console.log('YOUR DIVISION KEYS ---> ' + keys)
    console.log('THE TYPE OF OBJECT keys IS IS ---> ' + typeof keys)
    console.log('YOUR INDEX OF LAST DIVISION ---> ' + keys[keys.length - 1])
    for (var i = keys.length - 1; i >= 0; i--) {
      reversedKeys.push(keys[i])
    }
    console.log('YOUR reversedKeys VARIABLE IS ---> ' + reversedKeys)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#app {
  background-color: #F5F4EA;
}
#toungey {
  width: 200px !important;
  height: auto !important;
}

h1, h2 {
  font-weight: normal;
  color: black;
}



</style>
