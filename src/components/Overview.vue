<template>
  <div class="overview">
    <!-- simple nav header -->
    <div class="simple-navigation-header mt-2 mb-2">
      <button id="lefty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
      <a id="takeMeOmh" class="mt-1" style="display: flex;" href="/"><p>The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="district">District</router-link></button>
    </div>
    <!-- body -->
    <div id="overviewNoticWrapper">
      <div id="overviewNotice">
        This page is devoted to your elected officials. They are grouped according to geographic scope. Each card can be expanded for critical gateways to your representative officals.
      </div>
      <div id="overviewNoticeWrapperArrow">
        ⇣
      </div>
    </div>
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
    // credit for insertAfter() -> https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

    const DOMMaker = function () {
      for (let ttt = 1; ttt < reversedKeys.length; ttt++) {
        if (divisions[reversedKeys[ttt]].hasOwnProperty('officeIndices')) {
          var sectionHeader = document.createElement('h1')
          sectionHeader.className = ('sectionHeader')
          var sectionBody = document.createElement('div')
          sectionBody.className = ('sectionBody')
          var upperCasedDivisionName = toTitleCase(divisions[reversedKeys[ttt]].name)
          if (upperCasedDivisionName.endsWith('City')) {
            var upperCasedDivisionNameArray = upperCasedDivisionName.split(' ')
            console.log(upperCasedDivisionNameArray)
            upperCasedDivisionNameArray.pop()
            upperCasedDivisionName = 'City of ' + upperCasedDivisionNameArray.join(' ')
          }
          var aaa = document.createTextNode(upperCasedDivisionName)
          sectionHeader.appendChild(aaa)
          overviewBod.appendChild(sectionHeader)
          overviewBod.appendChild(sectionBody)
          var officialFaceNameTitle = []
          divisions[reversedKeys[ttt]].officeIndices.forEach(thing1 => {
            var GOffice = GState.data.offices[thing1]
            GOffice.officialIndices.forEach(function (corazon) {
              var officialObject = {}
              officialObject.index = corazon
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
            var repWrapper = document.createElement('div')
            repWrapper.className = ('cardWrapper')
            var lilDivvy = document.createElement('div')
            var lilDivvyNode = document.createTextNode('✕')
            lilDivvy.className = ('deselect-rep')
            lilDivvy.appendChild(lilDivvyNode)
            var tableElement = document.createElement('div')
            tableElement.classList.add('repCard')
            var deets = document.createElement('ul')
            deets.className = ('repDeets')
            tableElement.addEventListener('click', function (e) {
              if (!(this.classList.contains('selected'))) {
                this.classList.add('selected')
                var w = window
                var d = document
                var h = d.documentElement
                var g = d.getElementsByTagName('body')[0]
                var x = w.innerWidth || h.clientWidth || g.clientWidth
                var y = w.innerHeight || h.clientHeight || g.clientHeight
                var cardSpecs = this.getBoundingClientRect()
                var boxx = cardSpecs.x + (cardSpecs.width / 2)
                var boxy = cardSpecs.y + (cardSpecs.height / 2)
                var windowx = (x / 2)
                var windowy = (y / 2)
                var movementalongx = windowx - (boxx + 172)
                var movementalongy = windowy - (boxy + 15)
                this.style.cssText = 'transform: translate(' + movementalongx + 'px, ' + movementalongy + 'px); -webkit-transform: translate(' + movementalongx + 'px, ' + movementalongy + 'px); z-index: 10;'
                var imageNode = null
                var sparklingDiamond = this.childNodes
                for (var i = 0; i < sparklingDiamond.length; i++) {
                  if (sparklingDiamond[i].className === 'repImageWrapper') {
                    imageNode = sparklingDiamond[i].firstChild
                    var imageSpecs = imageNode.getBoundingClientRect()
                    var imagex = imageSpecs.x + (imageSpecs.width / 2)
                    var moveimagealongx = movementalongx - ((windowx - imagex) - 66)
                    var moveimagealongy = 22.5
                    imageNode.style.cssText = 'transform: scale(1.5) translateX(' + moveimagealongx + 'px) translateY(' + moveimagealongy + 'px); -webkit-transform: scale(1.5) translateX(' + moveimagealongx + 'px) translateY(' + moveimagealongy + 'px);'
                  }
                }
                // plug 'deets' generator in here
                // TODO take thing2.index and query GState.data.officials[thing2.index]
                // Evelyn Sanguinetti (D)
                // Lieutenant Whatever
                // Address:
                //  Office of the Lt. Governor 214 State House
                //  Springfield, IL 62706
              }
              e.stopPropagation()
              e.preventDefault()
            })
            var imageWrapper = document.createElement('div')
            imageWrapper.className = ('repImageWrapper')
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
            imageWrapper.appendChild(figureImage)
            tableElement.appendChild(imageWrapper)
            tableWrapper.appendChild(tableRow2)
            tableWrapper.appendChild(tableRow3)
            tableElement.appendChild(tableWrapper)
            tableElement.appendChild(lilDivvy)
            lilDivvy.addEventListener('click', function (e) {
              var kunta = this.parentNode
              kunta.classList.remove('selected')
              kunta.style.transform = ''
              kunta.style.removeProperty('-webkit-transform')
              kunta.style.cssText = ('z-index: 50;')
              for (var i = 0; i < kunta.childNodes.length; i++) {
                if (kunta.childNodes[i].className === 'repImageWrapper') {
                  var notes = kunta.childNodes[i].firstChild
                  notes.style.transform = ''
                  notes.style.removeProperty('-webkit-transform')
                }
              }
              setTimeout(function () {
                kunta.style.cssText = ('z-index: 1;')
              }, 500)
              console.log('parentNode ======= ' + this.parentNode.className)
              e.stopPropagation()
              e.preventDefault()
            })
            repWrapper.appendChild(tableElement)
            sectionBody.appendChild(repWrapper)
          })
        }
      }
    }
    DOMMaker()
  }
}
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Overlock:400,700,900');

/* much of the expandable repCard UI gleaned from a design by Nathan Taylor https://codepen.io/nathantaylor/pen/qRmWeW */
#overviewBody {
}

/* CSS for .cardWrapper credit to Tara Jensen https://codepen.io/TLJens/pen/RPWBvY */
.cardWrapper {
  display: inline-block;
  height: 14rem;
  width: 9rem;
  margin: .5rem;
  word-wrap: normal;
  position: relative;
  border-radius: 2px;
  background-image:
  radial-gradient(
    circle at bottom right,
    rgba(254, 196, 85, 0.20),
    #cfc7c1 90%
  );
-moz-box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
-webkit-box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
box-shadow: inset 1px 1px 5px rgba(154, 147, 140, 0.39), 1px 1px 5px rgba(255, 255, 255, 1);
}
.sectionBody {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tableWrapper {
  position: relative;
  top: -.7rem;
  -webkit-transition: opacity 70ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 70ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.repCard.selected .tableWrapper {
  opacity: 0;
}
.repCard {
  width: inherit;
  height: inherit;
  cursor: pointer;
  padding-left: .5rem;
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1), width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 500ms cubic-bezier(.25,.8,.25,1);
}
.repCard:hover {
  box-shadow: 0 5px 10px rgba(0,0,0,0.25), 0 5px 8px rgba(0,0,0,0.18);
}
.repCard .repImageWrapper {
  display: inline-block;
  position: relative;
  height: 9rem;
  width: 7rem;
  top: .4rem;
  left: -.25rem;
  border-radius: 2px;
  margin: .5rem;
  z-index: 7;
}
.deselect-rep {
  position: absolute;
  right: .4rem;
  top: 0;
  color: rgb(173, 172, 147);
  z-index: 70;
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 100;
}

.repCard.selected {
  height: 15rem;
  width: 32rem;
  cursor: default;
  z-index: 6;
  box-shadow: 0 5px 10px rgba(0,0,0,0.25), 0 5px 8px rgba(0,0,0,0.18);
}
/* .repCard.selected::after {
  -webkit-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  -moz-box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);
  box-shadow:  0 5px 20px 1px rgba(186, 102, 165, 0.18), 0 5px 10px rgba(20, 153, 33, 0.18);

} */

.repCard.selected .deselect-rep {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.repImage {
  height: 9rem;
  width: 7rem;
  z-index: 10;
  left: 0rem;
  position: absolute;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 2px;
  -webkit-transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), scale 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), scale 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
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
  top: .25rem;
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
  color: #343434;
  font-family: 'Oranienbaum', serif;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  position: relative;
  font-size: 130%;
  padding-left: 2rem;
  margin-bottom: .5rem;
  margin-top: .5rem;
  padding-top: .35rem;
}
#overviewNotice {
  color: #343434;
  font-size: 120%;
  width: 20rem;
  text-align: left;
}
#overviewNoticWrapper {
  background-color: #E3E3E3;
  width: 100%;
  padding-left: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
}
#overviewNoticeWrapperArrow {
  border-radius: 100%;
  font-size: 180%;
  text-align: center;
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
  position: absolute;
  color: white;
  background-color: #9c9a9a;
  z-index: 5;
  bottom: -1.5rem;
  left: calc(50% - 1.5rem);
  padding-top: .4rem;
}

#app {
  background-color: #F5F4EA;
}

h1, h2 {
  font-weight: normal;
  color: black;
}

</style>
