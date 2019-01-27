<template>
<!-- eslint-disable -->
  <div class="overview">
    <!-- simple nav header -->
    <div class="simple-navigation-header">
      <button id="lefty" type="button" class="mui-btn"><router-link to="timeline">Timeline</router-link></button>
      <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">THE VOTER'S COMPANION</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="general">General</router-link></button>
    </div>
    <!-- body -->
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
        Officials
      </div>
      <div id="overviewNotice">
        These are your elected officials, grouped by regional scope. Each card can be expanded for more information on how to connect with your representatives.
      </div>
      <a id="bigButtonLink" v-if="presentBadge" target="_blank" v-bind:href="regURL">
        <img id="bigButton" :src=" register ">
      </a>
    </div>

    <div id="dimScreen"></div>

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
/* eslint-disable */
import anime from '../../node_modules/animejs/lib/anime.js'
import registerBi from '../assets/registerBadge.png'
export default {
  name: 'overview',
  data () {
    return {
      register: registerBi,
      msg: '',
      presentBadge: this.$store.getters.shouldIDisplayBadge,
      regURL: this.$store.getters.getUserBadgeURL
    }
  },
  methods: {

  },
  mounted () {
    if (this.$store.getters.shouldIDisplayBadge) {
      let bigButtn = document.getElementById('bigButton')

      // var buttonEl = document.querySelector('button');

      function animateButton(scale, duration, elasticity) {
        anime.remove(bigButtn)
        anime({
          targets: bigButtn,
          scale: scale,
          duration: duration,
          elasticity: 200,
          rotate:
            {value: [-3, 3], duration: 250, elasticity: 100}
        })
      }
      function animateButtonBack(scale, duration, elasticity) {
        anime.remove(bigButtn)
        anime({
          targets: bigButtn,
          scale: scale,
          duration: duration,
          elasticity: 200
        })
      }
      function enterButton() { animateButton(1.03, 350) }
      function leaveButton() { animateButtonBack(1.0, 200) }

      bigButtn.addEventListener('mouseenter', enterButton, false)
      bigButtn.addEventListener('mouseleave', leaveButton, false)
    }

    var state = this.$store.getters.showMeDatState
    var GState = state.googleResponse
    var divisions = GState.data.divisions
    var divisionKeys = []
    divisionKeys = Object.getOwnPropertyNames(divisions)
    var reversedKeys = []
    for (var i = divisionKeys.length - 1; i >= 0; i--) {
      reversedKeys.push(divisionKeys[i])
    }
    // console.log(JSON.stringify(GState.data, null, '\t'))
    // console.log('YOUR reversedKeys VARIABLE IS ---> ' + JSON.stringify(reversedKeys, null, '\t'))
    // console.log('NUMBER OF DIVISIONS = ' + reversedKeys.length)

    var overviewBod = document.getElementById('overviewBody')
    // credit for toTitleCase() -> https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
    function toTitleCase (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }

    const boppeddd = document.getElementById('dimScreen')
    const toggleIt = function () {
      boppeddd.classList.toggle('bopped')
    }
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
            // console.log(upperCasedDivisionNameArray)
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
            tableElement.addEventListener('click', function (e) {
              if (!(this.classList.contains('selected'))) {
                toggleIt()
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
                this.style.cssText = 'transform: translate(' + movementalongx + 'px, ' + movementalongy + 'px); -webkit-transform: translate(' + movementalongx + 'px, ' + movementalongy + 'px); z-index: 888;'
                var imageNode = null
                var sparklingDiamond = this.childNodes
                for (var hhh = 0; hhh < sparklingDiamond.length; hhh++) {
                  if (sparklingDiamond[hhh].className === 'repImageWrapper') {
                    imageNode = sparklingDiamond[hhh].firstChild
                    var imageSpecs = imageNode.getBoundingClientRect()
                    var imagex = imageSpecs.x + (imageSpecs.width / 2)
                    var moveimagealongx = movementalongx - ((windowx - imagex) - 66)
                    var moveimagealongy = 22.5
                    imageNode.style.cssText = 'transform: scale(1.5) translateX(' + moveimagealongx + 'px) translateY(' + moveimagealongy + 'px); -webkit-transform: scale(1.5) translateX(' + moveimagealongx + 'px) translateY(' + moveimagealongy + 'px);'
                  }
                }
                var gridWrapper = document.createElement('div')
                gridWrapper.className = ('gridContainer')
                var theOfficial = GState.data.officials[thing2.index]
                // console.log('THIS GUY/GALS PARTY ---> ' + theOfficial.party)
                var party = theOfficial.party
                var partyLetter = ''
                if (party === 'Republican') {
                  partyLetter = ' (R)'
                } else if (party === 'Democrat') {
                  partyLetter = ' (D)'
                } else if (party === 'Independent') {
                  partyLetter = ' (I)'
                }
                var expandedName = document.createElement('div')
                var expandedNameNode = document.createTextNode(thing2.repName + partyLetter)
                expandedName.appendChild(expandedNameNode)
                expandedName.className = ('detailsName')
                var expandedTitle = document.createElement('div')
                var expandedTitleNode = document.createTextNode(thing2.repTitle)
                expandedTitle.appendChild(expandedTitleNode)
                expandedTitle.className = ('detailsTitle')
                var expandedAddress = document.createElement('div')
                expandedAddress.className = ('detailsAddress')
                var theOfficialAddress = theOfficial.address[0] || null
                var addressSaver
                var theOfficialPropertyNames = Object.getOwnPropertyNames(theOfficial)
                for (var yyy = 0; yyy < theOfficialPropertyNames.length; yyy++) {
                  if (theOfficialPropertyNames[yyy] === 'address') {
                    addressSaver = ''
                    var theOfficialAddressPropertyNames = Object.getOwnPropertyNames(theOfficialAddress)
                    console.log('theOfficialAddressPropertyNames =======> ' + JSON.stringify(theOfficialAddressPropertyNames, null, '\t'))
                    var cityStateZip = theOfficialAddress.city + ', ' + theOfficialAddress.state + ' ' + theOfficialAddress.zip
                    for (var vvv = 0; vvv < theOfficialAddressPropertyNames.length; vvv++) {
                      if (theOfficialAddressPropertyNames[vvv].includes('line')) {
                        addressSaver += theOfficialAddress[theOfficialAddressPropertyNames[vvv]] + '<br />'
                      }
                    }
                    addressSaver += cityStateZip
                    // console.log(addressSaver)
                  }
                }
                console.log(addressSaver)
                expandedAddress.innerHTML = '<p>' + addressSaver + '</p>'
                var expandedPhone = document.createElement('div')
                var theOfficialPhone = theOfficial.phones[0] || 'unavailable'
                var expandedPhoneNode = document.createTextNode(theOfficialPhone)
                expandedPhone.appendChild(expandedPhoneNode)
                expandedPhone.className = ('detailsPhone')
                var expandedURL = document.createElement('a')
                var theOfficialURL = theOfficial.urls[0] || 'unavailable'
                var expandedURLNode = document.createTextNode(theOfficialURL)
                expandedURL.appendChild(expandedURLNode)
                expandedURL.setAttribute('rel', 'noopener noreferrer')
                expandedURL.setAttribute('href', theOfficialURL)
                expandedURL.setAttribute('target', '_blank')
                expandedURL.className = ('detailsURL')
                var channelsSubgrid = document.createElement('div')
                channelsSubgrid.className = ('detailsChannels')
                for (var ppp = 0; ppp < theOfficialPropertyNames.length; ppp++) {
                  if (theOfficialPropertyNames[ppp] === 'channels') {
                    var channels = theOfficial.channels
                    channels.forEach(Chanel => {
                      if (!(Chanel.type === 'GooglePlus')) {
                        var channel = Chanel.type
                        var channelID = Chanel.id
                        var channelIcon = document.createElement('a')
                        var channelIconPic = document.createElement('img')
                        channelIcon.className = ('iconBox')
                        channelIconPic.className = (channel)
                        if (channel === 'YouTube') {
                          channelIcon.href = 'http://www.youtube.com/' + channelID
                          channelIconPic.src = 'https://i.imgur.com/b4J5pf1.png'
                        } else if (channel === 'Facebook') {
                          channelIcon.href = 'http://www.facebook.com/' + channelID
                          channelIconPic.src = 'https://i.imgur.com/MvZ9x3Z.png'
                        } else if (channel === 'Twitter') {
                          channelIcon.href = 'http://www.twitter.com/' + channelID
                          channelIconPic.src = 'https://i.imgur.com/ZnowWs0.png'
                        }
                        channelIcon.setAttribute('target', '_blank')
                        channelIcon.setAttribute('rel', 'noopener noreferrer')
                        channelIcon.appendChild(channelIconPic)
                        channelsSubgrid.appendChild(channelIcon)
                      }
                    })
                  }
                }
                var phoneIcon = document.createElement('img')
                var URLIcon = document.createElement('img')
                var placeIcon = document.createElement('img')
                phoneIcon.className = ('detailsPhoneIcon')
                URLIcon.className = ('detailsURLIcon')
                placeIcon.className = ('detailsAddressIcon')
                phoneIcon.src = 'https://i.imgur.com/kXKmZrE.png'
                URLIcon.src = 'https://i.imgur.com/7O903TX.png'
                placeIcon.src = 'https://i.imgur.com/6rxdk4T.png'
                gridWrapper.appendChild(expandedName)
                gridWrapper.appendChild(expandedTitle)
                gridWrapper.appendChild(expandedAddress)
                gridWrapper.appendChild(expandedPhone)
                gridWrapper.appendChild(expandedURL)
                gridWrapper.appendChild(channelsSubgrid)
                gridWrapper.appendChild(phoneIcon)
                gridWrapper.appendChild(URLIcon)
                gridWrapper.appendChild(placeIcon)
                tableElement.appendChild(gridWrapper)
                setTimeout(function () {
                  gridWrapper.className += ' engaged'
                }, 200)
              }
              e.stopPropagation()
              e.preventDefault()
            })
            var imageWrapper = document.createElement('div')
            imageWrapper.className = ('repImageWrapper')
            var figureImage = document.createElement('img')
            figureImage.className = ('repImage')
            figureImage.classList.add('md-image')
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
              toggleIt()
              kunta.classList.remove('selected')
              kunta.style.transform = ''
              kunta.style.removeProperty('-webkit-transform')
              kunta.style.cssText = ('z-index: 555;')
              kunta.childNodes.forEach(sabotage => {
                if (sabotage.className === 'gridContainer engaged') {
                  sabotage.remove()
                }
              })
              for (var ggg = 0; ggg < kunta.childNodes.length; ggg++) {
                if (kunta.childNodes[ggg].className === 'repImageWrapper') {
                  var notes = kunta.childNodes[ggg].firstChild
                  notes.style.transform = ''
                  notes.style.removeProperty('-webkit-transform')
                }
              }
              setTimeout(function () {
                kunta.style.cssText = ('z-index: 1;')
              }, 500)
              // console.log('parentNode ======= ' + this.parentNode.className)
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
    document.addEventListener('click', function (event) {
      var neo = document.querySelector('.selected')
      var isClickInside = neo.contains(event.target)
      if (!isClickInside) {
        // the click was outside the specifiedElement, do something
        neo.classList.remove('selected')
        boppeddd.classList.remove('bopped')
        neo.style.transform = ''
        neo.style.removeProperty('-webkit-transform')
        neo.style.cssText = ('z-index: 556;')
        neo.childNodes.forEach(sabotage => {
          if (sabotage.className === 'gridContainer engaged') {
            sabotage.remove()
          }
        })
        setTimeout(function () {
          neo.style.cssText = ('z-index: 1;')
        }, 500)
        for (var ggg = 0; ggg < neo.childNodes.length; ggg++) {
          if (neo.childNodes[ggg].className === 'repImageWrapper') {
            var notes = neo.childNodes[ggg].firstChild
            notes.style.transform = ''
            notes.style.removeProperty('-webkit-transform')
          }
        }
      }
    })
  }
}

</script>

<style >

#dimScreen {
  position:fixed;
  padding:0;
  margin:0;

  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);

  top:0;
  left:0;

  width: 100%;
  height: 100%;
}
#dimScreen.bopped {
  opacity: 1;
  z-index: 777;
  background: rgba(255, 255, 255, 0.34);
}
.repCard .gridContainer {
}
.gridContainer {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  text-align: left;
  z-index: 5;
  top: .5rem;
  position: absolute;
  display: grid;
  grid-template-columns: 11.4rem 18.5rem;
  grid-template-rows: 1.75rem repeat(7, 1.5rem) [channels] 1rem;
  color: #3b3c36;
}
.gridContainer > * {
  -webkit-transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: 0;
}

.engaged .detailsName {
  grid-column-start: 2;
  grid-column-end: 3;
  font-size: 115%;
  font-weight: 500;
  border-bottom: 1px solid #d1cccc;
  opacity: 1;
  -webkit-transition-delay: 0ms;
          transition-delay: 0ms;
          opacity: 1;
}
.engaged .detailsTitle {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  -webkit-transition-delay: 30ms;
          transition-delay: 30ms;
          opacity: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
}
.engaged .detailsAddress {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 6;
  line-height: 100%;
  padding-top: .5rem;
  margin-left: 1.5rem;
  -webkit-transition-delay: 60ms;
          transition-delay: 60ms;
          opacity: 1;
}
.engaged .detailsAddressIcon {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  top: .6rem;
  opacity: 1;
  -webkit-transition-delay: 60ms;
          transition-delay: 60ms;
}
.engaged .detailsURLIcon {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 7;
  top: .25rem;
  grid-row-end: 8;
  opacity: 1;
  -webkit-transition-delay: 120ms;
          transition-delay: 120ms;
}
.engaged .detailsPhoneIcon {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  top: .25rem;
  opacity: 1;
  -webkit-transition-delay: 90ms;
          transition-delay: 90ms;
}
.detailsURLIcon, .detailsAddressIcon, .detailsPhoneIcon {
  z-index: 900;
  right: -1rem;
  position: absolute;
}
.engaged .detailsPhone {
  grid-column-start: 2;
  grid-column-end: 3;
  margin-left: 1.5rem;
  -webkit-transition-delay: 90ms;
          transition-delay: 90ms;
          opacity: 1;
}
.engaged .detailsURL {
  grid-column-start: 2;
  grid-column-end: 3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: 1.5rem;
  -webkit-transition-delay: 120ms;
          transition-delay: 120ms;
          opacity: 1;
}
.engaged .detailsChannels {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: channels;
  max-width: 100%;
  height: auto;
  align-self: end;
  display: inline-block;
  -webkit-transition-delay: 150ms;
          transition-delay: 150ms;
          opacity: 1;
}
.YouTube, .Twitter, .Facebook {
  max-width: 1.5rem;
  margin: .2rem;
  margin-right: 1rem;
}

/* CSS for .cardWrapper inset credit to Tara Jensen https://codepen.io/TLJens/pen/RPWBvY */
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
  top: -.65rem;
  -webkit-transition: opacity 70ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 70ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
.repCard.selected .tableWrapper {
  opacity: 0;
}
.repCard {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  width: inherit;
  height: inherit;
  cursor: pointer;
  padding-left: .5rem;
  position: absolute;
  background-color: #f7f7f0;
  border-radius: 2px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 0 1px 3px rgba(119, 105, 17,0.12), 0 1px 2px rgba(81, 89, 138,0.24);
  -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1),background-color 250ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), height 500ms cubic-bezier(0.645, 0.045, 0.355, 1), width 500ms cubic-bezier(0.645, 0.045, 0.355, 1), box-shadow 500ms cubic-bezier(.25,.8,.25,1);
}
.repCard:hover {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: rgb(252, 252, 250);
}
.repCard .repImageWrapper {
  display: inline-block;
  position: relative;
  height: 9rem;
  width: 7rem;
  top: .35rem;
  left: -.3rem;
  border-radius: 2px;
  margin: .5rem;
  z-index: 7;
}
.deselect-rep {
  position: absolute;
  right: .4rem;
  top: .4rem;
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
  z-index: 800;
  box-shadow: 0px 5px 10px 0 rgba(119, 105, 17, 0.35), 0px 15px 20px 0px rgba(81, 89, 138, 0.2);
  background-color: #fff;
}

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
  -webkit-transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), scale 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 500ms cubic-bezier(0.645, 0.045, 0.355, 1), scale 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

.repName {
  left: .55rem;
  top: .25rem;
  width: 7rem;
  margin-left: .75rem;
  position: relative;
  line-height: 115%;
  font-weight: 700;
  font-size: 80%;
}
.repTitle {
  top: .25rem;
  position: relative;
  overflow: hidden;
  word-wrap: normal;
  text-overflow: ellipsis;
  height: .5rem;
  width: 7rem;
  left: .55rem;
  line-height: 115%;
  font-size: 80%;
  font-weight: 400;
}
.sectionHeader {
  margin-top: .5rem;
  color: #343434;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  position: relative;
  font-size: 130%;
  padding-left: 2rem;
  margin-bottom: .5rem;
}
.detailsAddress p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
#app {
  background-color: #f7f7f0;
}

h1, h2 {
  font-weight: normal;
  color: black;
}

</style>
