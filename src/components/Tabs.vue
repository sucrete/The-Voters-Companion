<template>
  <div id="Tabs">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
      </div>
      <div id="overviewNotice">
      </div>
    </div>

    <v-tabs class="knowledgeTabs"
      v-model="active"
      style="margin: 0 auto; width: 27.75em;"
      hide-slider
      centered>
      <v-tab :key="i">
        {{ i }}
      </v-tab>
      <v-tab :key="ii">
        {{ ii }}
      </v-tab>
      <v-tab  :key="iii">
        {{ iii }}
      </v-tab>
      <v-tab :key="iv">
        {{ iv }}
      </v-tab>

      <v-tabs-items>
        <v-tab-item :key="i" v-html="generalInfo">
          <!-- {{ generalInfo }} -->
        </v-tab-item>
        <v-tab-item :key="ii" v-html="IDRequirements">
          <!-- {{ IDRequirements }} -->
        </v-tab-item>
        <v-tab-item :key="iii" v-html="eligibility">
          <!-- {{ eligibility }} -->
        </v-tab-item>
        <v-tab-item :key="iv" v-html="resources">
          <!-- {{ resources }} -->
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script>
var marked = require('marked')

export default {
  name: 'Tabs',
  data () {
    return {
      active: '...1',
      generalInfo: '',
      eligibility: '',
      IDRequirements: '',
      resources: '<div>nothing to see here</div>',
      i: 'General',
      ii: 'ID Requirements',
      iii: 'Eligibility',
      iv: 'Resources',
      styleObject: {
        color: '#716E10'
      }
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
      var tableElementsKeeper = ''
      voterInfo.lookup_tools.forEach(tooly => {
        var votersToolsName = '<td class="VTName VTCell">' + tooly.lookup_tool.name + '</td>'
        var votersToolsURL = '<td class="VTURL VTCell"><a href="' + tooly.url + '" target="_blank">' + tooly.url + '</a></td>'
        tableElementsKeeper += '<tr class="VTRow">' + votersToolsName + votersToolsURL + '</tr>'
      })
      var votersToolsTable = '<table class="VTTable">' + tableElementsKeeper + '</table>'
      this.resources = votersToolsTable
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
}
/* inactive tabs given lighter text */
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item:not(.v-tabs__item--active) {
  color: rgb(174,174,174) !important;
}
.v-tabs.knowledgeTabs .v-tabs__bar.theme--light .v-tabs__wrapper .v-tabs__container.v-tabs__container--centered .v-tabs__div .v-tabs__item.v-tabs__item--active {
  background-color: rgb(229,229,229);
}
</style>
