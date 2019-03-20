<template>
  <div class="Officials">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
        Officials
      </div>
      <div id="overviewNotice">
        These are your elected officials, grouped by regional scope.
      </div>
    </div>

    <div class="hotBod">
      <div id="officialsBody">
        <div v-for="item in divisionsAndOfficials">
            <div class="sectionHeader">
              {{ item.division }}
            </div>
            <div v-for="rep in item.representatives">
              <img style="height: 200px; width: auto;":src="rep.repPhotoURL" /> <br/>
              <span>{{ rep.repName }}</span><br />
              <span>{{ rep.repTitle }}</span><br /></br/>
            </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Officials',
  data () {
    return {
      googleState: this.$store.getters.showMeDatState.googleResponse,
      divisionKeys: [],
      divisionsAndOfficials: [],
      phoneIconURL: 'https://i.imgur.com/kXKmZrE.png',
      linkIconURL: 'https://i.imgur.com/7O903TX.png',
      locationIconURL: 'https://i.imgur.com/6rxdk4T.png'
    }
  },
  methods: {
    toTitleCase: function (str) {
      // credit for toTitleCase() -> https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    importData: function () {
      var divisions = this.$store.getters.showMeDatState.googleResponse.data.divisions
      var divisionQuays = []
      divisionQuays = Object.getOwnPropertyNames(divisions)
      var storer = []
      // reversing the division keys and removing the "obj" add-on
      for (var i = divisionQuays.length - 1; i >= 0; i--) {
        storer.push(divisionQuays[i])
      }
      storer.shift()
      this.divisionKeys = storer
    },
    dataShaker: function () {
      var GState = this.googleState
      var divs = GState.data.divisions
      var keys = this.divisionKeys
      console.log(JSON.stringify(GState, null, '\t'))
      for (let ttt = 0; ttt < keys.length; ttt++) {
        if (divs[keys[ttt]].hasOwnProperty('officeIndices')) {
          var upperCasedDivisionName1 = this.toTitleCase(divs[keys[ttt]].name)
          if (upperCasedDivisionName1.endsWith('City')) {
            var upperCasedDivisionNameArray1 = upperCasedDivisionName1.split(' ')
            upperCasedDivisionNameArray1.pop()
            upperCasedDivisionName1 = 'City of ' + upperCasedDivisionNameArray1.join(' ')
          }
          var superSaver = {}
          superSaver.division = upperCasedDivisionName1
          superSaver.representatives = []
          console.log('🇲🇽 🇲🇽 🇲🇽  uno')
          divs[keys[ttt]].officeIndices.forEach(thing1 => {
            console.log('🇲🇽 🇲🇽 🇲🇽  dos')
            var GOffice1 = GState.data.offices[thing1]
            // below is the biodata for each representative using GOffice indices on GState.data e.g. GState.data.officials[GOffice1.officialIndices[1]]
            GOffice1.officialIndices.forEach(corazon => {
              console.log('🇲🇽 🇲🇽 🇲🇽  tres')
              var officialObject1 = {}
              officialObject1.index = corazon
              officialObject1.repTitle = GOffice1.name
              officialObject1.repName = GState.data.officials[corazon].name
              officialObject1.repPhotoURL = GState.data.officials[corazon].photoUrl || 'https://wabar.asn.au/staging/wp-content/themes/wabar/img/user-placeholder.jpg'
              if (corazon === 0) {
                officialObject1.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DEE46500000578-5035763-image-m-11_1509461782123.jpg'
              } else if (corazon === 1) {
                officialObject1.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DE40EA00000578-5035763-image-a-10_1509461772135.jpg'
              }
              console.log('🇨🇵🇨🇵🇨🇵')
              var theOfficial = GState.data.officials[corazon]
              var theOfficialPropertyNames = Object.getOwnPropertyNames(theOfficial)
              officialObject1.party = theOfficial.party
              var addressLine1 = 'not available'
              var addressLine2 = 'not available'
              if (theOfficial.address !== undefined) {
                var officialAddress = theOfficial.address[0]
                console.log('all them property names on the Official' + theOfficialPropertyNames)
                for (var yyy = 0; yyy < theOfficialPropertyNames.length; yyy++) {
                  console.log('🇧🇦🇧🇦🇧🇦')
                  if (theOfficialPropertyNames[yyy] === 'address') {
                    var theOfficialAddressPropertyNames = Object.getOwnPropertyNames(officialAddress)
                    var cityStateZip = officialAddress.city + ', ' + officialAddress.state + ' ' + officialAddress.zip
                    for (var vvv = 0; vvv < theOfficialAddressPropertyNames.length; vvv++) {
                      if (theOfficialAddressPropertyNames[vvv].includes('line')) {
                        addressLine1 = officialAddress[theOfficialAddressPropertyNames[vvv]]
                      }
                    }
                    addressLine2 = cityStateZip
                  }
                }
              }
              console.log('🇲🇽 🇲🇽 🇲🇽  cuatro')
              officialObject1.addressLine1 = addressLine1
              console.log('🇯🇵🇯🇵🇯🇵  coco')
              officialObject1.addressLine2 = addressLine2
              console.log('🇦🇶🇦🇶🇦🇶')
              var naw = 'not available'
              if (theOfficial.phones !== undefined) {
                officialObject1.phone = theOfficial.phones[0]
              } else {
                officialObject1.phone = naw
              }
              console.log('🇧🇷🇧🇷🇧🇷' + officialObject1.phone + 'official index on this loop is:   ' + corazon)
              if (theOfficial.urls !== undefined) {
                console.log('🇧🇬🇧🇬🇧🇬 nope it\'s here')
                officialObject1.website = theOfficial.urls[0]
                console.log('sup from the other side 🇧🇬🇧🇬🇧🇬')
              } else {
                officialObject1.website = naw
              }
              console.log('🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵  ' + officialObject1.website)
              officialObject1.channels = []
              console.log('🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵 ' + theOfficialPropertyNames.length + ' 🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵🇯🇵 ')
              // for (var ppp = 0; ppp < theOfficialPropertyNames.length; ppp++) {
              //   console.log('🇲🇽 🇲🇽 🇲🇽  cinco')
              //   if (theOfficialPropertyNames[ppp] === 'channels') {
              //     console.log('🇲🇽 🇲🇽 🇲🇽  seis')
              //     theOfficial.channels.forEach(Chanel => {
              //       console.log('🇲🇽 🇲🇽 🇲🇽  seite')
              //       var channelKeep = {}
              //       channelKeep.channelIcon = ''
              //       channelKeep.channelLink = ''
              //       if (!(Chanel.type === 'GooglePlus')) {
              //         if (Chanel.type === 'YouTube') {
              //           channelKeep.channelLink = 'http://www.youtube.com/' + Chanel.id
              //           channelKeep.channelIcon = 'https://i.imgur.com/b4J5pf1.png'
              //         } else if (Chanel.type === 'Facebook') {
              //           channelKeep.channelLink = 'http://www.facebook.com/' + Chanel.id
              //           channelKeep.channelIcon = 'https://i.imgur.com/MvZ9x3Z.png'
              //         } else if (Chanel.type === 'Twitter') {
              //           channelKeep.channelLink = 'http://www.twitter.com/' + Chanel.id
              //           channelKeep.channelIcon = 'https://i.imgur.com/ZnowWs0.png'
              //         }
              //       }
              //       officialObject1.channels.push(channelKeep)
              //     })
              //   } else {
              //     break
              //   }
              // }
              // complete push for an individual representative below
              superSaver.representatives.push(officialObject1)
            })
          })
          console.log('🇲🇽 🇲🇽 🇲🇽  ocho')
          this.divisionsAndOfficials.push(superSaver)
        }
      }
      console.log('📛📛📛 ➖➖➖➖➖➖➖➖ all rep info ➖➖➖➖➖➖➖➖  📛📛📛' + '\n' + JSON.stringify(this.divisionsAndOfficials, null, '\t'))
    }
  },
  beforeMount () {
    this.importData()
    this.dataShaker()
  },
  mounted () {

  }
}
</script>

<style >

.gridContainer {
  font-family: 'Karla', sans-serif;
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
  font-weight: 700;
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
  font-family: 'Karla', sans-serif;
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
  font-family: 'Karla', sans-serif;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  position: relative;
  font-size: 130%;
  padding-left: 2rem;
  margin-bottom: .5rem;
  letter-spacing: .08em;
}
.detailsAddress p {
  margin-block-start: 0em;
  margin-block-end: 0em;
}
#app {
  background-color: #f7f7f0;
  margin-bottom: 10em;
}

h1, h2 {
  font-weight: normal;
  color: black;
}

</style>
