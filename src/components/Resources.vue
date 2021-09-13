<template>
  <div id="Resources">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee"></div>
      <div id="overviewNotice">
        Understand your eligibility and what you need to vote.
      </div>
    </div>
    <v-tabs
      class="knowledgeTabs"
      v-model="active"
      style="margin: 0 auto; margin-bottom: 1.5em;"
      hide-slider
      centered>
      <v-tab :key="i">{{ i }}</v-tab>
      <v-tab :key="ii">{{ ii }}</v-tab>
      <v-tab  :key="iii">{{ iii }}</v-tab>
      <v-tabs-items style="margin: 0 auto;">
        <v-tab-item :key="i" v-html="generalInfo">  </v-tab-item>
        <v-tab-item :key="ii" v-html="IDRequirements">  </v-tab-item>
        <v-tab-item :key="iii" v-html="eligibility">  </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <div id="resourcesSpacer"></div>
    <div id="additionalResources">
      <span class="headline">Additional Government Resources for {{ stateName }} Voters</span>
      <v-list class="govResourcesList">
        <v-list-tile v-for="lilinfos in resourcesObject">
          <v-list-tile-content class="text-xs-left">
            <v-list-tile-title>{{ lilinfos.votersToolsName }}</v-list-tile-title>
            <v-list-tile-sub-title class="govResourcesListSubtitle"><a :href="lilinfos.votersToolsURL" target="_blank">{{ lilinfos.votersToolsURL }}</a></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </div>
  </div>
</template>

<script>

var marked = require('marked')

export default {
  name: 'Resources',
  data () {
    return {
      generalInfo: '<span>NO INFO</span><br><a href="/">return to landing page</a>',
      eligibility: '',
      IDRequirements: '',
      resources: '<div>nothing to see here</div>',
      i: 'General',
      ii: 'ID Requirements',
      iii: 'Eligibility',
      styleObject: {
        color: '#716E10'
      },
      resourcesObject: [],
      dummyresourcesObject: [
        {
          'votersToolsName': 'State Elections Website',
          'votersToolsURL': 'http://www.elections.ny.gov/INDEX.html'
        },
        {
          'votersToolsName': 'Where is my Polling Place?',
          'votersToolsURL': 'https://voterlookup.elections.state.ny.us/votersearch.aspx'
        },
        {
          'votersToolsName': 'Can I Register to Vote Online?',
          'votersToolsURL': 'https://dmv.ny.gov/more-info/electronic-voter-registration-application'
      	},
      	{
          'votersToolsName': 'Am I Registered?',
          'votersToolsURL': 'https://voterlookup.elections.state.ny.us/'
      	},
      	{
          'votersToolsName': 'Overseas / Military Voter Information',
          'votersToolsURL': 'http://www.elections.ny.gov/VotingMilitaryFed.html'
      	},
      	{
          'votersToolsName': 'State Voter Registration FAQ',
          'votersToolsURL': 'http://www.elections.ny.gov/FAQ.html'
      	}
      ],
      stateName: 'New York'
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    capitalizeIt (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    fillItUp () {
      var voterInfo = this.$store.getters.getVoterInfo.objects[0]
      var generalInfo = voterInfo.voting_general_info
      this.generalInfo = marked(generalInfo)
      this.stateName = voterInfo.state.name
      voterInfo.eligibility_requirements.forEach(headly => {
        this.eligibility += '<span class="happiHeader">' + headly.header + '</span> <ul>'
        headly.items.forEach(itemys => {
          // removed capitalizeIt from itemys.item.name below e.g. "this.capitalizeIt(itemys.item.name)" (between the '<li>' tags)
          this.eligibility += '<li>' + this.capitalizeIt(itemys.item.name) + '</li>'
        })
        this.eligibility += '</ul>'
        if (headly.hasOwnProperty('footer')) {
          this.eligibility += '<p id="resourcesFooter"><em>' + headly.footer + '</em></p>'
        }
      })
      voterInfo.identification_requirements.forEach(credly => {
        this.IDRequirements += '<span class="happiHeader">' + credly.header + '</span> <ul>'
        credly.items.forEach(itemysis => {
          // removed capitalizeIt from itemysis.item.name below e.g. "this.capitalizeIt(itemysis.item.name)" (between the '<li>' tags)
          this.IDRequirements += '<li>' + this.capitalizeIt(itemysis.item.name) + '</li>'
        })
        this.IDRequirements += '</ul>'
        if (credly.hasOwnProperty('footer')) {
          this.IDRequirements += '<p id="resourcesFooter"><em>' + credly.footer + '</em></p>'
        }
      })
      voterInfo.lookup_tools.forEach(tooly => {
        var tableElementsKeeper = {}
        tableElementsKeeper.votersToolsName = tooly.lookup_tool.name
        tableElementsKeeper.votersToolsURL = tooly.url
        this.resourcesObject.push(tableElementsKeeper)
      })
    },
    insertIcon () {
      var ourHeading = document.getElementById('find-my-polling-place')
      var aLink = ourHeading.childNodes[0]
      var ourLink = aLink.getAttribute('href')
      var iconHTML = '<i aria-hidden="true" class="v-icon material-icons" style="color: white; font-size: 18px;">place</i>'
      var buttonHTML = '<form action="' + ourLink + '" method="get" target="_blank"><button id="find-my-trolling-place"> ' + iconHTML + ' Find My Polling Place </button></form>'
      ourHeading.insertAdjacentHTML('beforebegin', buttonHTML)
      ourHeading.parentNode.removeChild(ourHeading)
    },
    convertNewLines (str) {
      var flippedstring = str.split('\r\n').join('<br />')
      return flippedstring
    }
  },
  mounted () {
    this.fillItUp()
    this.$nextTick(function () {
      this.insertIcon()
    })
  }
}
</script>

<style>
#find-my-trolling-place {
  background-color: #ff9800;
  color: white !important;
  width: 95%;
  will-change: box-shadow;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  border-radius: 28px;
  align-items: center;
  border-radius: 2px;
  display: inline-flex;
  height: 36px;
  flex: 0 0 auto;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  margin: 6px 8px;
  min-width: 88px;
  outline: 0;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  position: relative;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#additionalResources {
  background-color: rgba(204, 219, 242, .3);
  /* position: absolute; */
  min-height: 10em;
  width: 97%;
  bottom: 0px;
  color: #3e3830;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 16px;
  border-radius: 3px;
  display: block;
}
/* the toolkit tabs container */
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  margin-top: 1.5em;
  margin-bottom: 2em;
  border-radius: 2px;
  height: 36px;
  text-align: left;
}
.v-tabs.knowledgeTabs {
  width: 21.1em;
}
.v-tabs.knowledgeTabs .v-window {
  font-family: 'Roboto', sans-serif;
  position: relative;
  width: 34em;
  left: -7.7em;
  line-height: 1.444444;
  font-size: 16px;
  font-style: normal;
}
.v-tabs.knowledgeTabs .v-window > * {
  text-align: left;
}
/* the individual tabs */
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item {
  color: rgb(54, 54, 54) !important;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  letter-spacing: .0em;
  font-size: 14px;
  padding: 6px 7px;
}
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div {
  height: 36px;
  margin-left: 0;
  margin-right: 0;
}
/* inactive tabs are a given lighter text */
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item:not(.v-tabs__item--active) {
  color: rgb(174,174,174) !important;
}
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item:not(.v-tabs__item--active):hover {
  color: rgb(124, 124, 124) !important;
  background-color: rgb(230, 230, 230) !important;
}
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item.v-tabs__item--active {
  background-color: rgb(229,229,229);
}
.v-window-item h1 {
  font-size: 18px;
  font-weight: 500;
  color: #2b3b80;
}
.v-window-item h2 {
  font-weight: 500;
  font-size: 16px;
}
.v-tabs.knowledgeTabs .v-window .v-window__container.v-window__container--is-active {
  min-height: 55em !important;
}
.v-tabs__container.v-tabs__container--centered.v-tabs__container--overflow {
  transform: translateX(0px) !important;
}
.tabItem {
  position: relative;
  cursor: pointer;
}
.govResourcesList {
  background-color: transparent !important;
  font-family: 'Roboto', sans-serif;
}

ul {
  margin: 0;
}
ul {
  list-style-type: none;
}
ul > li {
  list-style-type: none;
  text-indent: -.5em;
  padding-inline-start: 3px;
}
li:before {
  content: '· '
}
.happiHeader {
  margin-bottom: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
/* .happiHeader:first-of-type {
  margin-top: 0px !important;
} */
em {
  color: grey;
}
#find-my-trolling-place i {
  padding-right: .3em;
}
@media screen and (max-width: 321px) {
  .v-tabs.knowledgeTabs .v-window {
    left: 0em !important;
  }
}
@media screen and (max-width: 750px) {
  #additionalResources {
    width: 95%;
    margin-bottom: 20px;
  }
  .v-tabs.knowledgeTabs .v-window {
    width: 90vw;
  }
}
@media screen and (min-width: 430px) and (max-width: 470px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -12vw;
  }
}
@media screen and (min-width: 470px) and (max-width: 500px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -14vw;
  }
}
@media screen and (min-width: 500px) and (max-width: 550px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -16vw;
  }
}
@media screen and (min-width: 550px) and (max-width: 580px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -18vw;
  }
}
@media screen and (min-width: 580px) and (max-width: 650px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -20vw;
  }
}
@media screen and (min-width: 650px) and (max-width: 700px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -22vw;
  }
}
@media screen and (min-width: 700px) and (max-width: 750px) {
  .v-tabs.knowledgeTabs .v-window {
    left: -24vw;
  }
}
@media screen and (min-width: 375px) and (max-width: 503px) {
  button#find-my-trolling-place {
    width: 90%;
    left: 2.5%
  }
}
@media screen and (max-width: 700px) {
  .v-tabs.knowledgeTabs {
    width: 20.7em !important;
  }
}
@media screen and (min-width: 413px) and (max-width: 432px) {
  .v-tabs.knowledgeTabs .v-window {
    width: 90vw;
    left: -2.2em;
  }
}
@media only screen and (max-width: 375px) {
  button#find-my-trolling-place {
    width: 90%;
    left: 2.5%;
  }
  .v-tabs.knowledgeTabs .v-window {
    width: 90vw;
    left: -1.5em;
  }
  #additionalResources {
    width: 95%;
  }
}
</style>
