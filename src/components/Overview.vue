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
      <div id="overviewBody" style="background-color: rgb(155, 242, 133)">
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
  mounted () {
    var state = this.$store.getters.showMeDatState
    var GState = state.googleResponse
    var divisions = GState.data.divisions
    var divisionKeys = []
    divisionKeys = Object.getOwnPropertyNames(divisions)
    var reversedKeys = []
    for (var i = divisionKeys.length - 1; i >= 0; i--) {
      reversedKeys.push(divisionKeys[i])
    }
    console.log(JSON.stringify(GState.data, null, '\t'))
    console.log('YOUR reversedKeys VARIABLE IS ---> ' + reversedKeys)
    /* eslint-disable */
    var indices = {
      placeOfficeIndices: [],
      countyOfficeIndices: [],
      congressionalOfficeIndices: [],
      stateOfficeIndices: [],
      countryOfficeIndices: []
    }
    var sectionHeaderPlace
    var sectionHeaderCounty
    var sectionHeaderCD
    var sectionHeaderState
    var sectionHeaderCountry
    /* eslint-enable */
    console.log(divisions[reversedKeys[1]].hasOwnProperty('officeIndices'))
    if (divisions[reversedKeys[1]].hasOwnProperty('officeIndices')) {
      console.log('you got this far!')
      indices.placeOfficeIndices.push(divisions[reversedKeys[1]].officeIndices)
      sectionHeaderPlace = document.createElement('h1')
      var aaa = document.createTextNode(divisions[reversedKeys[1]].name)
      sectionHeaderPlace.appendChild(aaa)
      sectionHeaderPlace.style.cssText = 'border-top: 1px solid black; border-bottom: 1px solid black;'
      document.getElementById('overviewBody').appendChild(sectionHeaderPlace)
    } else {
      return false
    }
    if (divisions[reversedKeys[2]].hasOwnProperty('officeIndices')) {
      indices.countyOfficeIndices.push(divisions[reversedKeys[2]].officeIndices)
      sectionHeaderCounty = document.createElement('h1')
    }
    if (divisions[reversedKeys[3]].hasOwnProperty('officeIndices')) {
      indices.congressionalOfficeIndices.push(divisions[reversedKeys[3]].officeIndices)
      sectionHeaderCD = document.createElement('h1')
    }
    if (divisions[reversedKeys[4]].hasOwnProperty('officeIndices')) {
      indices.stateOfficeIndices.push(divisions[reversedKeys[4]].officeIndices)
      sectionHeaderState = document.createElement('h1')
    }
    if (divisions[reversedKeys[5]].hasOwnProperty('officeIndices')) {
      indices.countryOfficeIndices.push(divisions[reversedKeys[5]].officeIndices)
      sectionHeaderCountry = document.createElement('h1')
    }
  }
}
</script>

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
