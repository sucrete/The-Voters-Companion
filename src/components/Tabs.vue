<template>
  <div>
    <!-- <md-tabs id="navTabs" md-alignment="centered">
      <md-tab v-bind:style="styleObject" id="tab-home" class="magicTab md-ripple-off md-no-ink" md-label="General" v-on:click="makeActive( generalInfo )"></md-tab>
      <md-tab id="tab-pages"  class="magicTab" md-label="Eligibility" v-on:click="makeActive( eligibility )"></md-tab>
      <md-tab id="tab-posts"  class="magicTab" md-label="ID Needed" v-on:click="makeActive( IDRequirements )"></md-tab>
      <md-tab id="tab-settings"  class="magicTab" md-label="Tools" v-on:click="makeActive( voteTools )"></md-tab>
    </md-tabs>

    <p id="activeBod" v-html="active">  </p> -->
  </div>
</template>

<script>
var marked = require('marked')

export default {
  name: 'TabRouter',
  data () {
    return {
      active: '...1',
      generalInfo: '',
      eligibility: '',
      IDRequirements: '',
      voteTools: '',
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
