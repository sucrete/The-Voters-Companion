<template>
  <div id="Resources">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee"></div>
      <div id="overviewNotice"></div>
    </div>
    <v-tabs
      class="knowledgeTabs"
      v-model="active"
      style="margin: 0 auto; width: 21.1em; margin-bottom: 1.5em;"
      hide-slider
      centered>
      <v-tab :key="i">{{ i }}</v-tab>
      <v-tab :key="ii">{{ ii }}</v-tab>
      <v-tab  :key="iii">{{ iii }}</v-tab>
      <v-tabs-items>
        <v-tab-item :key="i" v-html="generalInfo">  </v-tab-item>
        <v-tab-item :key="ii" v-html="IDRequirements">  </v-tab-item>
        <v-tab-item :key="iii" v-html="eligibility">  </v-tab-item>
      </v-tabs-items>
    </v-tabs>
    <div id="resourcesSpacer"></div>
    <div id="additionalResources">
      <span class="headline">Additional Government Resources for {{ stateName }}</span>
      <v-list class="govResourcesList">
        <v-list-tile v-for="lilinfos in dummyResourcesAPI">
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
/* eslint-disable */
var marked = require('marked')

export default {
  name: 'Resources',
  data () {
    return {
      active: '...1',
      generalInfo: '<span>all kinds of great shi</span>',
      eligibility: '',
      IDRequirements: '',
      resources: '<div>nothing to see here</div>',
      i: 'General',
      ii: 'ID Requirements',
      iii: 'Eligibility',
      styleObject: {
        color: '#716E10'
      },
      resourcesAPI: [],
      dummyResourcesAPI: [
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
      return string.charAt(0).toLowerCase() + string.slice(1)
    },
    fillItUp () {
      var voterInfo = this.$store.getters.getVoterInfo.objects[0]
      this.generalInfo = marked(voterInfo.voting_general_info)
      this.active = this.generalInfo
      voterInfo.eligibility_requirements.forEach(headly => {
        this.eligibility += '<h3 class="happiHeader">' + headly.header + '</h3>'
        headly.items.forEach(itemys => {
          // removed capitalizeIt from itemys.item.name below e.g. "this.capitalizeIt(itemys.item.name)" (between the '<li>' tags)
          this.eligibility += '<li>- ' + this.capitalizeIt(itemys.item.name) + '</li>'
        })
        if (headly.hasOwnProperty('footer')) {
          this.eligibility += '<p><em>' + headly.footer + '</em></p>'
        }
      })
      voterInfo.identification_requirements.forEach(credly => {
        this.IDRequirements += '<h3 class="happiHeader">' + credly.header + '</h3>'
        credly.items.forEach(itemysis => {
          // removed capitalizeIt from itemysis.item.name below e.g. "this.capitalizeIt(itemysis.item.name)" (between the '<li>' tags)

          this.IDRequirements += '<li>- ' + this.capitalizeIt(itemysis.item.name) + '</li>'
        })
        if (credly.hasOwnProperty('footer')) {
          this.IDRequirements += '<p><em>' + credly.footer + '</em></p>'
        }
      })
      voterInfo.lookup_tools.forEach(tooly => {
        var tableElementsKeeper = {}
        tableElementsKeeper.votersToolsName = tooly.lookup_tool.name
        tableElementsKeeper.votersToolsURL = tooly.url
        this.resourcesAPI.push(tableElementsKeeper)
      })
    },
    convertNewLines (str) {
      var flippedstring = str.split('\r\n').join('<br />')
      return flippedstring
    }
  },
  mounted () {
    this.fillItUp()
  }
}
</script>

<style>
#resourcesSpacer {
  min-height: 27em;
}
#additionalResources {
  background-color: rgba(204, 219, 242, .3);
  position: absolute;
  min-height: 15em;
  width: 97%;
  bottom: 0px;
  color: #3e3830;
  margin: .67em .7em;
  padding: 16px;
  border-radius: 5px;
  display: block;
}
/* the toolkit tabs container */
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  margin-top: 1.5em;
  margin-bottom: 2em;
  border-radius: 2px;
  height: 36px;
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
/* inactive tabs given lighter text */
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

}
.v-tabs.knowledgeTabs .v-window .v-window__container.v-window__container--is-active {
  min-height: 55em !important;
}
.v-tabs__container.v-tabs__container--centered.v-tabs__container--overflow {
  transform: translateX(0px) !important;
}
.VTURL {
  /* white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
}
.VTName {
  width: 8em;
  font-weight: 500;
}
.VTTable {
  width: 37rem;
  margin: 0 auto;
  position: relative;
  border-spacing: 0;
  border: 3px solid white;
}
.VTRow {
  height: 1.5rem;
}
.VTCell {
  padding: .75rem;
  border: 2px solid white;
  background-color: rgba(230, 230, 230, 0.8);
}

.tabItem {
  position: relative;
  cursor: pointer;
}
.govResourcesList {
  background-color: transparent !important;
}
.tabButton {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  color: #62624c;
  background-color: #f7f7f0;
  padding: .5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: .5rem;
  outline: none;
  border-bottom: none;
  border: none;
  cursor: pointer;
}

ul {
  margin: 0;
}
ul {
  list-style-type: none;
}
ul > li {
  text-indent: -37px;
  padding-inline-start: 3px;
}
#activeBod ul > li:before {
  content: "- ";
  text-indent: -5px;
}
.happiHeader {
  margin-bottom: .75rem;
}
.happiHeader:first-of-type {
  margin-top: 0px !important;
}
h2, h6 {
  line-height: 120%;
}
@media screen and (max-width: 750px) {
  .VTName {
    width: 15vw;
  }
  #resourcesSpacer {
    min-height: 29em;
  }
}
</style>
