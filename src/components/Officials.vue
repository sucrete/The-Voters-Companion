<template>
  <div class="Officials">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
      </div>
      <div id="overviewNotice">
        These are your elected officials, grouped by region.
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
              <v-hover>
                <v-card color="white" class="mb-2 pb-0" :class="`elevation-${rep.show ? 5 : 2}`">

                  <v-layout class="thisClass" row>

                    <v-flex xs7 class="pt-1 pr-0 pb-0 mb-0 pl-3 repTopText">
                      <v-card-title class="pt-3 pr-0 pb-2 mb-0" primary-title>
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
                      <v-img position="50% 2%" :src="rep.repPhotoURL"></v-img>
                    </v-flex>

                  </v-layout>

                  <v-card-actions class="pt-0 mt-2">
                    <div v-if="rep.website" class="text-xs-center">
                      <a :href="rep.website" target="_blank"><v-btn depressed round small outline class="repButton ml-1">Website</v-btn></a>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn class="infoButton mr-1" v-if="rep.phone || rep.addressLine1 || rep.addressLine2 || rep.channels[0]" icon @click="rep.show = !rep.show">
                       <v-icon style="font-size: 1.3em;">{{ rep.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-slide-y-transition v-if="rep.phone || rep.addressLine1 || rep.addressLine2 || rep.channels[0]">
                    <v-card-text class="text-xs-left repInfo" v-show="rep.show">
                      {{ rep.addressLine1 }} <br />
                      {{ rep.addressLine2 }} <br />
                      <br />
                      {{ rep.phone }}
                    </v-card-text>
                  </v-slide-y-transition>

                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
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
          divs[keys[ttt]].officeIndices.forEach(thing1 => {
            var GOffice1 = GState.data.offices[thing1]
            // below is the biodata for each representative using GOffice indices on GState.data e.g. GState.data.officials[GOffice1.officialIndices[1]]
            GOffice1.officialIndices.forEach(corazon => {
              var officialObject1 = {}
              officialObject1.index = corazon
              officialObject1.show = false
              officialObject1.repTitle = GOffice1.name
              officialObject1.repName = GState.data.officials[corazon].name
              officialObject1.repPhotoURL = GState.data.officials[corazon].photoUrl || 'https://wabar.asn.au/staging/wp-content/themes/wabar/img/user-placeholder.jpg'
              if (corazon === 0) {
                officialObject1.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DEE46500000578-5035763-image-m-11_1509461782123.jpg'
              } else if (corazon === 1) {
                officialObject1.repPhotoURL = 'http://i.dailymail.co.uk/i/pix/2017/10/31/14/45DE40EA00000578-5035763-image-a-10_1509461772135.jpg'
              }
              var theOfficial = GState.data.officials[corazon]
              officialObject1.party = theOfficial.party
              if (theOfficial.address !== undefined) {
                var _oa = theOfficial.address[0]
                officialObject1.addressLine1 = _oa.line2
                officialObject1.addressLine2 = _oa.city + ', ' + _oa.state + ' ' + _oa.zip
              }
              if (theOfficial.phones !== undefined) {
                officialObject1.phone = theOfficial.phones[0]
              } else {
                officialObject1.phone = null
              }
              if (theOfficial.urls !== undefined) {
                officialObject1.website = theOfficial.urls[0]
              } else {
                officialObject1.website = null
              }
              officialObject1.channels = []
              if (!(theOfficial.channels === undefined)) {
                theOfficial.channels.forEach(Chanel => {
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
              }
              // complete push for an individual representative below
              superSaver.representatives.push(officialObject1)
            })
          })
          this.divisionsAndOfficials.push(superSaver)
        }
      }
      // console.log('📛📛📛 ➖➖➖➖➖➖➖➖ all rep info ➖➖➖➖➖➖➖➖  📛📛📛' + '\n' + JSON.stringify(this.divisionsAndOfficials, null, '\t'))
    }
  },
  beforeMount () {
    this.importData()
    this.dataShaker()
  },
  computed: {
    // infoCondition (obj) {
    //   return obj.channels !== undefined || obj.addressLine1 !== null || obj.addressLine2 !== null || obj.phone !== null
    // }
  },
  components: {

  }
}
</script>

<style >
.repTitle {
  line-height: 125%;
  color: grey;
}
.buttonWrapper {
  margin-left: .5em;
}
.repButton {
  color: #8e8984 !important;
}
.repButton:hover {
  color: #363433 !important;
}
.repButton {
  font-size: 80%;
}
.spacer {
  min-height: 34px;
}

footer {
  display: block;
}

.headline {
  font-size: 20px !important;
}

.flex.pr-4.pt-0.mt-3.mb-0.pb-0.xs5.sm7.md7 .v-responsive.v-image .v-image__image.v-image__image--cover {
  position: relative;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
}

.layout.row {
  /* height: 160px; */
}
.sectionHeader {
  color: #343434;
  font-family: 'Karla', sans-serif;
  border-bottom: 1px solid #d1cccc;
  text-align: left;
  /* position: relative; */
  font-size: 130%;
  padding-left: 2em;
  letter-spacing: .08em;
  padding-bottom: .65em;
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
@media only screen and (max-width: 375px) {
  .container.grid-list-lg .layout .flex.cardWrapperFlex {
    margin: 0 auto;
  }
  .repButton {
    bottom: -.5em;
    font-size: 90%;
  }
  .repName {
    font-size: 125%;
  }
  .repTitle {
    font-size: 105%;
  }
  .v-card__title {
    padding-top: 7px !important;
  }
  .v-card__actions {
    margin-top: 0px !important;
    height: 55px;
  }
  .v-responsive.v-image {
    height: 125px;
    width: 125px;
    left: -.9em;
  }
  .sectionHeader {
  }
}
@media only screen and (min-width: 350px) and (max-width: 432) {
  .repButton {
    bottom: -.5em;
    font-size: 90%;
  }
  .repName {
    font-size: 125%;
  }
  .repTitle {
    font-size: 105%;
  }
  .v-card__title {
    padding-top: 7px !important;
  }
  .v-card__actions {
    margin-top: 0px !important;
    height: 55px;
  }
}
@media screen and (min-width: 350px) and (max-width: 500px) {
  .v-responsive.v-image {
    height: calc(155px - 5vw);
    width: calc(155px - 5vw);
  }
}
</style>
