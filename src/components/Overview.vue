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
      <div id="overviewBody" style="">
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
      msg: ''
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
    console.log('YOUR reversedKeys VARIABLE IS ---> ' + JSON.stringify(reversedKeys, null, '\t'))
    console.log('NUMBER OF DIVISIONS = ' + reversedKeys.length)
    /* eslint-disable */
    var indices = {
      placeOfficeIndices: [],
      countyOfficeIndices: [],
      congressionalOfficeIndices: [],
      stateOfficeIndices: [],
      countryOfficeIndices: []
    }
    var overviewBod = document.getElementById('overviewBody')
    // credit for toTitleCase() -> https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()})
    }

    // function faceFarmer (thingy) {
    //   console.log('thingy = ' + thingy)
    //   var officesList = []
    //   var GOffice = GState.data.offices[thingy]
    //   GOffice.officialIndices.forEach(function (corazon) {
    //     console.log(typeof corazon + ' and corazon itself = ' + corazon)
    //     var officialObject = {}
    //     officialObject.repTitle = GOffice.name
    //     officialObject.repName = GState.data.officials[corazon].name
    //     officialObject.repPhotoURL = GState.data.officials[corazon].photoUrl
    //     officesList.push(officialObject)
    //     console.log(JSON.stringify(officesList, null, '\t'))
    //   })
    //   console.log(JSON.stringify(officesList, null, '\t'))
    //   return officesList
    // }
      /* eslint-enable */
    if (divisions[reversedKeys[1]].hasOwnProperty('officeIndices') !== undefined) {
      var sectionHeader1 = document.createElement('h1')
      sectionHeader1.className = ('sectionHeader')
      var upperCasedCityName = toTitleCase(divisions[reversedKeys[1]].name)
      var aaa = document.createTextNode(upperCasedCityName)
      sectionHeader1.appendChild(aaa)
      overviewBod.appendChild(sectionHeader1)
      var officialFaceNameTitle1 = []
      divisions[reversedKeys[1]].officeIndices.forEach(thing1 => {
        var GOffice = GState.data.offices[thing1]
        GOffice.officialIndices.forEach(function (corazon) {
          var officialObject = {}
          officialObject.repTitle = GOffice.name
          officialObject.repName = GState.data.officials[corazon].name
          officialObject.repPhotoURL = GState.data.officials[corazon].photoUrl || 'http://www.polinef.ac.id/images/welcome/photo3x41.jpg'
          officialFaceNameTitle1.push(officialObject)
        })
        console.log('your FaceNameTitle var ----> ' + JSON.stringify(officialFaceNameTitle1, null, '\t'))
      })
      officialFaceNameTitle1.forEach(thing2 => {
        var tableElement = document.createElement('table')
        var tableRow1 = document.createElement('tr')
        var tableCell1 = document.createElement('td')
        var figureImage = document.createElement('img')
        figureImage.className = ('repImage')
        figureImage.setAttribute('src', thing2.repPhotoURL)
        tableCell1.appendChild(figureImage)
        tableRow1.appendChild(tableCell1)
        var tableRow2 = document.createElement('tr')
        var tableCell2 = document.createElement('td')
        tableCell2.className = ('repName')
        var textNope2 = document.createTextNode(thing2.repName)
        tableCell2.appendChild(textNope2)
        tableRow2.appendChild(tableCell2)
        var tableRow3 = document.createElement('tr')
        var tableCell3 = document.createElement('td')
        tableCell3.className = ('repTitle')
        var textNope3 = document.createTextNode(thing2.repTitle)
        tableCell3.appendChild(textNope3)
        tableRow3.appendChild(tableCell3)
        tableElement.appendChild(tableRow1)
        tableElement.appendChild(tableRow2)
        tableElement.appendChild(tableRow3)
        overviewBod.appendChild(tableElement)
      })
    }
    if (divisions[reversedKeys[2]].hasOwnProperty('officeIndices')) {
      var sectionheader2 = document.createElement('h1')
      sectionheader2.className = ('sectionHeader')
      var upperCasedName2 = toTitleCase(divisions[reversedKeys[2]].name)
      var bbb = document.createTextNode(upperCasedName2)
      sectionheader2.appendChild(bbb)
      overviewBod.appendChild(sectionheader2)
    }
    if (divisions[reversedKeys[3]].hasOwnProperty('officeIndices')) {
      var sectionheader3 = document.createElement('h1')
      sectionheader3.className = ('sectionHeader')
      var upperCasedName3 = toTitleCase(divisions[reversedKeys[3]].name)
      var ccc = document.createTextNode(upperCasedName3)
      sectionheader3.appendChild(ccc)
      overviewBod.appendChild(sectionheader3)
    }
    if (divisions[reversedKeys[4]].hasOwnProperty('officeIndices')) {
      var sectionheader4 = document.createElement('h1')
      sectionheader4.className = ('sectionHeader')
      var upperCasedName4 = toTitleCase(divisions[reversedKeys[4]].name)
      var ddd = document.createTextNode(upperCasedName4)
      sectionheader4.appendChild(ddd)
      overviewBod.appendChild(sectionheader4)
    }
    if (divisions[reversedKeys[5]].hasOwnProperty('officeIndices')) {
      var sectionheader5 = document.createElement('h1')
      sectionheader5.className = ('sectionHeader')
      var upperCasedName5 = toTitleCase(divisions[reversedKeys[5]].name)
      var eee = document.createTextNode(upperCasedName5)
      sectionheader5.appendChild(eee)
      overviewBod.appendChild(sectionheader5)
    }
    if (divisions[reversedKeys[6]].hasOwnProperty('officeIndices')) {
      var sectionheader6 = document.createElement('h1')
      sectionheader6.className = ('sectionHeader')
      var upperCasedName6 = toTitleCase(divisions[reversedKeys[6]].name)
      var fff = document.createTextNode(upperCasedName6)
      sectionheader6.appendChild(fff)
      overviewBod.appendChild(sectionheader6)
    }
    if (divisions[reversedKeys[7]].hasOwnProperty('officeIndices')) {
      var sectionheader7 = document.createElement('h1')
      sectionheader7.className = ('sectionHeader')
      var upperCasedName7 = toTitleCase(divisions[reversedKeys[7]].name)
      var ggg = document.createTextNode(upperCasedName7)
      sectionheader7.appendChild(ggg)
      overviewBod.appendChild(sectionheader7)
    }
    /* eslint-disable */
    if (divisions[reversedKeys[8]].hasOwnProperty('officeIndices')) {
      var sectionheader8 = document.createElement('h1')
      sectionheader8.className = ('sectionHeader')
      var upperCasedName8 = toTitleCase(divisions[reversedKeys[8]].name)
      var hhh = document.createTextNode(upperCasedName8)
      sectionheader8.appendChild(hhh)
      overviewBod.appendChild(sectionheader8)
    }
    if (divisions[reversedKeys[9]].hasOwnProperty('officeIndices') !== undefined) {
      var sectionheader9 = document.createElement('h1')
      sectionheader9.className = ('sectionHeader')
      var upperCasedName9 = toTitleCase(divisions[reversedKeys[9]].name)
      var iii = document.createTextNode(upperCasedName9)
      sectionheader9.appendChild(iii)
      overviewBod.appendChild(sectionheader9)
    }
    if (divisions[reversedKeys[10]].hasOwnProperty('officeIndices') !== undefined) {
      var sectionheader10 = document.createElement('h1')
      sectionheader10.className = ('sectionHeader')
      var upperCasedName10 = toTitleCase(divisions[reversedKeys[10]].name)
      var jjj = document.createTextNode(upperCasedName10)
      sectionheader10.appendChild(jjj)
      overviewBod.appendChild(sectionheader10)
    }
    if (divisions[reversedKeys[11]].hasOwnProperty('officeIndices') !== undefined) {
      var sectionheader11 = document.createElement('h1')
      sectionheader11.className = ('sectionHeader')
      var upperCasedName11 = toTitleCase(divisions[reversedKeys[11]].name)
      var lll = document.createTextNode(upperCasedName11)
      sectionheader11.appendChild(lll)
      overviewBod.appendChild(sectionheader11)
    }
    /* eslint-enable */
  }
}
</script>

<style >

.sectionHeader {
  border-top: 1px solid #C0C0C0;
  border-bottom: 1px solid #C0C0C0;
  margin-bottom: .25rem;
}

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
