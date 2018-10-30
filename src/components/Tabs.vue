<template>
  <!-- eslint-disable -->
  <div>
    <md-tabs id="navTabs" md-alignment="centered">
      <md-tab v-bind:style="styleObject" id="tab-home" class="magicTab md-ripple-off md-no-ink" md-label="General" v-on:click="makeActive( generalInfo )"></md-tab>
      <md-tab id="tab-pages"  class="magicTab" md-label="Eligibility" v-on:click="makeActive( eligibility )"></md-tab>
      <md-tab id="tab-posts"  class="magicTab" md-label="Identification Requirements" v-on:click="makeActive( IDRequirements )"></md-tab>
      <md-tab id="tab-settings"  class="magicTab" md-label="Voter's Tools" v-on:click="makeActive( voteTools )"></md-tab>
    </md-tabs>

    <p id="activeBod" v-html="active">  </p>
  </div>
</template>

<script>
let marked = require('marked')

export default {
  name: 'TabRouter',
  data () {
    return {
      active: '...1',
      generalInfo: '...1',
      eligibility: '...2',
      IDRequirements: '...3',
      voteTools: '...4',
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
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    fillItUp () {
      var voterInfo = this.$store.getters.getVoterInfo.objects[0]
      var voterGenInfo = marked(voterInfo.voting_general_info)
      var voterEligibility = ''
      voterInfo.eligibility_requirements.forEach(headly => {
        voterEligibility += '<h6 class="happiHeader">' + headly.header + '</h6>'
        headly.items.forEach(itemys => {
          voterEligibility += '<li>- ' + this.capitalizeIt(itemys.item.name) + '</li>'
        })
        if (headly.hasOwnProperty('footer')) {
          voterEligibility += '<p><em>' + headly.footer + '</em></p>'
        }
      })
      this.eligibility = voterEligibility
      this.generalInfo = voterGenInfo
      this.active = voterGenInfo
      var voterIDRequirements = voterInfo.identification_requirements
      var voterIDRequirementsToShoveInTheDOM = ''
      voterIDRequirements.forEach(credly => {
        voterIDRequirementsToShoveInTheDOM += '<h6 class="happiHeader">' + credly.header + '</h6>'
        credly.items.forEach(itemysis => {
          voterIDRequirementsToShoveInTheDOM += '<li>- ' + this.capitalizeIt(itemysis.item.name) + '</li>'
        })
        if (credly.hasOwnProperty('footer')) {
          voterIDRequirementsToShoveInTheDOM += '<p><em>' + credly.footer + '</em></p>'
        }
      })
      this.IDRequirements = voterIDRequirementsToShoveInTheDOM
      var votersTools = voterInfo.lookup_tools
      var tableElementsKeeper = ''
      votersTools.forEach(tooly => {
        var votersToolsName = '<td class="VTName VTCell">' + tooly.lookup_tool.name + '</td>'
        var votersToolsURL = '<td class="VTURL VTCell"><a href="' + tooly.url + '" target="_blank">' + tooly.url + '</a></td>'
        tableElementsKeeper += '<tr class="VTRow">' + votersToolsName + votersToolsURL + '</tr>'
      })
      var votersToolsTable = '<table class="VTTable">' + tableElementsKeeper + '</table>'
      this.voteTools = votersToolsTable
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

</style>
