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
      <div id="overviewBody" style="">
<!--
█▀▀█ █░░ █░░█ █▀▀▀ 　 █░░█ ▀▀█▀▀ █▀▄▀█ █░░ 　 ▀█▀ █▀▀▄　  █░░█ █▀▀ █▀▀█ █▀▀
█░░█ █░░ █░░█ █░▀█ 　 █▀▀█ ░░█░░ █░▀░█ █░░ 　 ▒█░ █░░█ 　 █▀▀█ █▀▀ █▄▄▀ █▀▀
█▀▀▀ ▀▀▀ ░▀▀▀ ▀▀▀▀ 　 ▀░░▀ ░░▀░░ ▀░░░▀ ▀▀▀ 　 ▄█▄ ▀░░▀ 　 ▀░░▀ ▀▀▀ ▀░▀▀ ▀▀▀
 -->
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
    // addRepCardListener () {
    //   var allRepCardElements = document.getElementsByClassName('repCard')
    //   console.log('the first element in allRepCardElements is ---> ' + allRepCardElements[0])
    //   var allDeselectElements = Array.from(document.getElementsByClassName('deselect-rep'))
    //   console.log(allRepCardElements)
    //   console.log(allDeselectElements)
    //   console.log('tryinn to add eventlistener')
    //   for (var uuu = 0; uuu < allRepCardElements.length; uuu++) {
    //     console.log('EVENTLISTENER ADDED')
    //     allRepCardElements[uuu].addEventListener('click', function () {
    //       var hohoho = document.querySelector('.simple-navigation-header')
    //       hohoho.style.cssText = 'background-color: blue;'
    //       var bobobo = document.querySelectorAll('.repCard')[uuu]
    //       bobobo.classList.add('selected')
    //       console.log('BOBOBO CLASS NAME IS ---> ' + bobobo.classList)
    //     })
    //   }
    //   for (var vvv = 0; vvv < allDeselectElements.length; vvv++) {
    //     allDeselectElements[vvv].addEventListener('click', function () {
    //       allRepCardElements[vvv].classList.remove = ('selected')
    //     })
    //   }
    // }
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

    var overviewBod = document.getElementById('overviewBody')
    // credit for toTitleCase() -> https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
    function toTitleCase (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
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

    // credit for insertAfter() -> https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

    const DOMMaker = function () {
      for (let ttt = 1; ttt < reversedKeys.length; ttt++) {
        if (divisions[reversedKeys[ttt]].hasOwnProperty('officeIndices')) {
          console.log('1111111')
          var sectionHeader = document.createElement('h1')
          sectionHeader.className = ('sectionHeader')
          var sectionBody = document.createElement('div')
          sectionBody.className = ('sectionBody')
          var upperCasedDivisionName = toTitleCase(divisions[reversedKeys[ttt]].name)
          var aaa = document.createTextNode(upperCasedDivisionName)
          sectionHeader.appendChild(aaa)
          overviewBod.appendChild(sectionHeader)
          overviewBod.appendChild(sectionBody)
          var officialFaceNameTitle = []
          divisions[reversedKeys[ttt]].officeIndices.forEach(thing1 => {
            console.log('22222222')
            var GOffice = GState.data.offices[thing1]
            GOffice.officialIndices.forEach(function (corazon) {
              console.log('333333333')
              var officialObject = {}
              officialObject.repTitle = GOffice.name
              officialObject.repName = GState.data.officials[corazon].name
              officialObject.repPhotoURL = GState.data.officials[corazon].photoUrl || 'http://www.polinef.ac.id/images/welcome/photo3x41.jpg'
              if (corazon === 0) {
                officialObject.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DEE46500000578-5035763-image-m-11_1509461782123.jpg'
              } else if (corazon === 1) {
                officialObject.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DE40EA00000578-5035763-image-a-10_1509461772135.jpg'
              }
              officialFaceNameTitle.push(officialObject)
            })
          })
          officialFaceNameTitle.forEach(thing2 => {
            console.log('44444444')
            var lilDivvy = document.createElement('div')
            var lilDivvyNode = document.createTextNode('✕')
            lilDivvy.className = ('deselect-rep')
            lilDivvy.appendChild(lilDivvyNode)
            var tableElement = document.createElement('div')
            tableElement.classList.add('repCard')
            tableElement.addEventListener('click', function () {
              this.classList.add('selected')
              var superchunk = document.querySelector('.simple-navigation-header')
              superchunk.style.cssText = 'background-color: blue;'
            })
            var figureImage = document.createElement('img')
            figureImage.className = ('repImage')
            figureImage.setAttribute('src', thing2.repPhotoURL)
            var tableWrapper = document.createElement('div')
            tableWrapper.className = ('tableWrapper')
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
            tableWrapper.appendChild(tableRow2)
            tableWrapper.appendChild(tableRow3)
            tableElement.appendChild(figureImage)
            tableElement.appendChild(tableWrapper)
            tableElement.appendChild(lilDivvy)
            lilDivvy.addEventListener('click', function () {
              this.parentElement.classList.remove('selected')
            })
            sectionBody.appendChild(tableElement)
          })
        }
      }
    }
    DOMMaker()
    // if (divisions[reversedKeys[1]].hasOwnProperty('officeIndices')) {
    //   var sectionHeader1 = document.createElement('h1')
    //   sectionHeader1.className = ('sectionHeader')
    //   var sectionBody1 = document.createElement('div')
    //   var upperCasedCityName = toTitleCase(divisions[reversedKeys[1]].name)
    //   var aaa = document.createTextNode(upperCasedCityName)
    //   sectionHeader1.appendChild(aaa)
    //   overviewBod.appendChild(sectionHeader1)
    //   overviewBod.appendChild(sectionBody1)
    //   var officialFaceNameTitle1 = []
    //   divisions[reversedKeys[1]].officeIndices.forEach(thing1 => {
    //     var GOffice = GState.data.offices[thing1]
    //     GOffice.officialIndices.forEach(function (corazon) {
    //       var officialObject = {}
    //       officialObject.repTitle = GOffice.name
    //       officialObject.repName = GState.data.officials[corazon].name
    //       officialObject.repPhotoURL = GState.data.officials[corazon].photoUrl || 'http://www.polinef.ac.id/images/welcome/photo3x41.jpg'
    //       officialFaceNameTitle1.push(officialObject)
    //     })
    //   })
    //   officialFaceNameTitle1.forEach(thing2 => {
    //     var lilDivvy = document.createElement('div')
    //     var lilDivvyNode = document.createTextNode('✕')
    //     lilDivvy.className = ('deselect-rep')
    //     lilDivvy.appendChild(lilDivvyNode)
    //     var tableElement = document.createElement('div')
    //     tableElement.className = ('repCard')
    //     var figureImage = document.createElement('img')
    //     figureImage.className = ('repImage')
    //     figureImage.setAttribute('src', thing2.repPhotoURL)
    //     var tableWrapper = document.createElement('div')
    //     tableWrapper.className = ('tableWrapper')
    //     var tableRow2 = document.createElement('tr')
    //     var tableCell2 = document.createElement('td')
    //     tableCell2.className = ('repName')
    //     var textNope2 = document.createTextNode(thing2.repName)
    //     tableCell2.appendChild(textNope2)
    //     tableRow2.appendChild(tableCell2)
    //     var tableRow3 = document.createElement('tr')
    //     var tableCell3 = document.createElement('td')
    //     tableCell3.className = ('repTitle')
    //     var textNope3 = document.createTextNode(thing2.repTitle)
    //     tableCell3.appendChild(textNope3)
    //     tableRow3.appendChild(tableCell3)
    //     tableWrapper.appendChild(tableRow2)
    //     tableWrapper.appendChild(tableRow3)
    //     tableElement.appendChild(figureImage)
    //     tableElement.appendChild(tableWrapper)
    //     tableElement.appendChild(lilDivvy)
    //     sectionBody1.appendChild(tableElement)
    //   })
    // }
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Overlock:400,700,900');

/* much of the expandable repCard UI is built on a design by Nathan Taylor https://codepen.io/nathantaylor/pen/qRmWeW */

.tableWrapper {
  position: relative;
  left: .85rem;
  top: .2rem;
  -webkit-transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: 800ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.repCard.selected .tableWrapper {
  opacity: 0;
  -webkit-transform: translatey(70rem) perspective(100rem) translatez(-10rem);
  transform: translatey(70rem) perspective(100rem) translatez(-10rem);
}

.repCard {
  display: inline-block;
  cursor: pointer;
  height: 14rem;
  width: 9rem;
  margin: .5rem;
  padding-left: .5rem;
  border-top: 1px solid white;
  word-wrap: normal;
  position: relative;
  display: inline-block;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.18);
  -webkit-transition: opacity 800ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 800ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 800ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 800ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.repCard .repImage {
  display: inline-block;
  position: relative;
  /* -webkit-transform-origin: 100% 0%;
        transform-origin: 100% 0%; */
  -webkit-transition: -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.deselect-rep {
  position: relative;
  right: 0;
  top: 0;
  color: #bbb8b8;
  z-index: 70;
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 100;
}
.repCard.selected {
  -webkit-transform: translatey(0rem) perspective(100rem) translatez(0rem);
        transform: translatey(0rem) perspective(100rem) translatez(0rem);
  height: 15rem;
  width: 80%;
  cursor: default;
  z-index: 10;
  -webkit-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  -moz-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  -webkit-transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), width 300ms cubic-bezier(0.645, 0.045, 0.355, 1), height 300ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1), width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1), width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 800ms cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-box-shadow 800ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.repCard.selected::after {
  -webkit-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  -moz-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
}
.repCard.selected .deselect-rep {
  opacity: 1;
  pointer-events: auto;
  z-index: 20;
}
.repCard.selected .repImage {
  -webkit-transform: scale(1.5) translatex(-107.5%) translatey(14.5%);
          transform: scale(1.5) translatex(-107.5%) translatey(14.5%);
}
.repCard::after {
  content: "";
  border-radius: 2px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  -moz-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  opacity: 0;
  -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1));
}

.repCard:hover {
  /* -webkit-transform: scale(1.0, 1.0);
  transform: scale(1.0, 1.0); */
  background-color: #fff;
}

.repCard:hover::after {
    opacity: 1;
}
.imageCell {
  height: 9rem;
  width: 8rem;
}
.repImage {
  height: 9rem;
  width: 7rem;
  top: .5rem;
  position: relative;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 2px;
  margin: .5rem;
}
.repName {
  left: .55rem;
  top: .25rem;
  width: 7rem;
  margin-left: .75rem;
  position: relative;
  font-family: 'Overlock', serif;
  line-height: 115%;
  font-weight: 700;
  font-size: 80%;
}
.repTitle {
  top: .35rem;
  position: relative;
  word-wrap: normal;
  width: 7rem;
  left: .55rem;
  line-height: 115%;
  font-family: 'Overlock', serif;
  font-size: 80%;
  font-weight: 400;
  text-overflow: ellipsis;
}
.sectionHeader {
  border-top: 1px solid #d1cccc;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: .5rem;
  padding-top: .35rem;
}

#app {
  background-color: #F5F4EA;
}

h1, h2 {
  font-weight: normal;
  color: black;
}
.selected {
  color: blue;
}

</style>
