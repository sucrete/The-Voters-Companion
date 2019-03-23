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

      <!-- NEW CONTAINER FOR CREATING CARDS BELOW -->

      <div v-for="item in divisionsAndOfficials">
        <div class="sectionHeader">
          {{ item.division }}
        </div>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 class="cardWrapperFlex" v-for="rep in item.representatives">
              <v-card color="white" class="mb-2 pb-0">

                <v-layout row>

                  <v-flex xs7 class="pt-1 pr-0 pb-0 mb-0 pl-3 repTopText">
                    <v-card-title class="pt-4 pr-0 pb-2 mb-0" primary-title>
                      <div>
                        <div class="repName text-xs-left" xs7>
                          {{ rep.repName }}
                        </div>
                      </div>
                    </v-card-title>
                    <v-card-text class="text-xs-left mt-0 pt-0 pb-0 repTitle">
                      {{ rep.repTitle }}
                    </v-card-text>
                  </v-flex>
                  <!-- 🇺🇸 testing picture breakpoints below 🇺🇸 -->
                  <v-flex xs5 sm7 md7 class="pr-4 pt-0 mt-3 mb-0 pb-0">
                    <v-img :src="rep.repPhotoURL"></v-img>
                  </v-flex>

                </v-layout>

                <v-card-actions class="pt-0 mt-2">
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                     Info <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-slide-y-transition>
                  <v-card-text class="text-xs-left" v-show="show">
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </v-slide-y-transition>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

      <!-- OLD CONTAINER BELOW -->
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>

          <v-flex  xs12 sm6 md6>
            <v-card color="white" class="mb-2 pb-0">

              <v-layout row>

                <v-flex xs7 class="pt-1 pr-0 pb-0 mb-0 pl-3">
                  <v-card-title class="pt-4 pr-0 pb-2 mb-0" primary-title>
                    <div>
                      <div class="repName text-xs-left" xs7>Donald J. Trump</div>
                    </div>
                  </v-card-title>
                  <v-card-text class="text-xs-left mt-0 pt-0 pb-0 repTitle">
                    President of the United States
                  </v-card-text>
                </v-flex>
                <!-- 🇺🇸 testing picture breakpoints below 🇺🇸 -->
                <v-flex xs5 sm7 md7 class="pr-4 pt-0 mt-3 mb-0 pb-0">
                  <v-img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Nancy_Pelosi_2012.jpg"
                  ></v-img>
                </v-flex>

              </v-layout>

              <v-card-actions class="pt-0 mt-2">
                <v-spacer></v-spacer>
                <v-btn icon @click="show = !show">
                   Info <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-slide-y-transition>
                <v-card-text class="text-xs-left" v-show="show">
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </v-slide-y-transition>

            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
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
      locationIconURL: 'https://i.imgur.com/6rxdk4T.png',
      show: false,
      show2: false
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
              for (var ppp = 0; ppp < theOfficialPropertyNames.length; ppp++) {
                console.log('🇲🇽 🇲🇽 🇲🇽  cinco')
                if (theOfficialPropertyNames[ppp] === 'channels') {
                  console.log('🇲🇽 🇲🇽 🇲🇽  seis')
                  theOfficial.channels.forEach(Chanel => {
                    console.log('🇲🇽 🇲🇽 🇲🇽  seite')
                    var channelKeep = {}
                    channelKeep.channelIcon = ''
                    channelKeep.channelLink = ''
                    if (!(Chanel.type === 'GooglePlus')) {
                      if (Chanel.type === 'YouTube') {
                        channelKeep.channelLink = 'http://www.youtube.com/' + Chanel.id
                        channelKeep.channelIcon = 'https://i.imgur.com/b4J5pf1.png'
                      } else if (Chanel.type === 'Facebook') {
                        channelKeep.channelLink = 'http://www.facebook.com/' + Chanel.id
                        channelKeep.channelIcon = 'https://i.imgur.com/MvZ9x3Z.png'
                      } else if (Chanel.type === 'Twitter') {
                        channelKeep.channelLink = 'http://www.twitter.com/' + Chanel.id
                        channelKeep.channelIcon = 'https://i.imgur.com/ZnowWs0.png'
                      }
                    }
                    officialObject1.channels.push(channelKeep)
                  })
                } else {
                  break
                }
              }
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

  },
  components: {

  }
}
</script>

<style >
#app {
  background-color: rgb(250, 250, 250);
  padding-bottom: 16em;
}
footer {
  display: block;
}
.v-btn--icon, .v-btn--icon:before {
  border-radius: 20px;
}
.v-btn--icon {
  min-width: 4.5em;
  height: 36px;
  width: 45px;
  padding-left: .6em;
}
.v-btn {
  font-weight: 400;
  text-transform: none;
}
.headline {
  font-size: 20px !important;
}

.v-responsive.v-image {
  position: relative;
  border-radius: 50%;
  background-position: 50% 25%%;
  background-size: cover;
  background-repeat: no-repeat;
}

.layout.row {
  /* height: 160px; */
}
.sectionHeader {
  margin-top: .5rem;
  color: #343434;
  font-family: 'Karla', sans-serif;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  /* position: relative; */
  font-size: 130%;
  padding-left: 2rem;
  margin-bottom: .5rem;
  letter-spacing: .08em;
}

h1, h2 {
  font-weight: normal;
  color: black;
}

@media only screen and (min-width: 750px) {
  .v-responsive {
    right: .1em;
  }
}
@media only screen and (min-width: 600px) {
  .v-responsive.v-image {
    height: 115px;
    width: 115px;
  }
  .v-btn.v-btn--icon.theme--light {
    margin-right: .1em;
  }
  .container.grid-list-lg .layout:only-child {
    margin: 0em;
  }
  .repName {
    font-size: 100%;
  }
  .repTitle {
    font-size: 80%;
  }
}
@media only screen and (min-width: 700px) and (max-width: 749px) {
  .v-responsive.v-image {
    right: -.7em;
  }
}
@media screen and (min-width: 675px) and (max-width: 700px) {
  .v-responsive {
    /* top: -.4em; */
  }
}
@media screen and (min-width: 635px) and (max-width: 674px) {
  .v-responsive {
    /* top: -.6em; */
  }
}
@media screen and (min-width: 601px) and (max-width: 634px) {
  .v-responsive {
    /* top: -.9em; */
  }
}
@media only screen and (max-width: 599px) {
  .v-responsive.v-image {
    top: .3em;
    left: .5em;
    height: 155px;
    width: 155px;
  }
  .repTopText {
    position: relative;
    top: .5em;
    left: -.3em;
  }
  .v-card {
    margin: 0 auto;
    padding: 0 auto;
  }
  .v-btn.v-btn--icon.theme--light {
    position: relative !important;
    margin-top: 1em !important;
    margin-right: .2em !important;
    padding-bottom: 0px !important;
    margin-bottom: 0px !important;
  }
  .container.grid-list-lg .layout .flex {
    margin: 0 17px;
  }
  .repTitle {
    font-size: 140%;
  }
  .repName {
    font-size: 150%;
  }
}
</style>
