<template>
  <div class="district">
    <!-- simple nav header -->
    <div class="simple-navigation-header">
      <button id="lefty" type="button" class="mui-btn"><router-link to="Overview">Overview</router-link></button>
      <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="Timeline">Timeline</router-link></button>
    </div>
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
        Voter's Tools
      </div>
      <div id="overviewNotice">
        This page is devoted to your elected officials. They are grouped by regional scope. Each card can be expanded for gateways to your representative officals.
      </div>
    </div>

    <!-- body -->

    <div class="hotBod">
      <nav v-bind:class="active" v-on:click.prevent>
        <a class="home tabItem" v-on:click="makeActive( generalInfo )"><button class="tabButton" id="activated">General</button></a>
        <a class="projects tabItem" v-on:click="makeActive( eligibility )"><button class="tabButton">Eligibility</button></a>
        <a class="services tabItem" v-on:click="makeActive( IDRequirements )"><button class="tabButton">Identification Requirements</button></a>
        <a class="contact tabItem" v-on:click="makeActive( voteTools )"><button class="tabButton">Voter Tools</button></a>
      </nav>

      <p id="activeBod" v-html="active">  </p>

    </div>
  </div>
</template>

<script>
let marked = require('marked')

export default {
  name: 'district',
  data () {
    return {
      active: '...',
      generalInfo: '...',
      eligibility: '...',
      IDRequirements: '...',
      voteTools: '...'
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
    },
    superSizeThisTab () {
      document.getElementById('activated').focus()
    },
    capitalizeIt (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    fillItUp () {
      var voterInfo = this.$store.getters.getVoterInfo.data.objects[0]
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
    this.superSizeThisTab()
    this.fillItUp()
  }
}
</script>


<style >

#activeBod {
  background-color: WHITE;
  border-radius: 3px;
  padding: 1.5rem;
  min-height: 75vh;
  text-align: left;
  z-index: 5;
  position: relative;
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  color: #353839;
}
#activeBod > h1, h1 > * {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: #ff9900;
  font-size: 1.2rem;
}
#activeBod > h1:not(:first-child) {
  margin-top: .5rem;
}
#activeBod > h2 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 120%;
  font-size: 1rem;
}
#activeBod > p {
  color: #6aa84f;
  line-height: 120%;
  margin-top: .75rem;
}
#activeBod > li {
  list-style-type: none;
}
.VTURL {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.VTName {
  width: 30rem;
}
.VTTable {
  width: 40rem;
  margin: 0 auto;
  position: relative;
}
.VTRow {
  height: 1.5rem;
}
.VTCell {
  padding: .75rem;
  border: 2px solid white;
  background-color: #c6d4ce;
}
h2 > a {
  -webkit-transition: all 0.1s linear;
          transition: all 0.1s linear;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0 140px 0 0;
  display: inline;
  margin-bottom: 0;
  text-align: center;
  color: rgba(255,255,255,0.1);
  background: #03001e;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #353535, #ec38bc,  #7303c0, #353535);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #353535, #ec38bc,  #7303c0, #353535); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-size: 125px 100%;
  -moz-background-size: 125px 100%;
  background-size: 125px 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-animation-name: shimmer;
  -moz-animation-name: shimmer;
  animation-name: shimmer;
  -webkit-animation-duration: 7s;
  -moz-animation-duration: 7s;
  animation-duration: 7s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-repeat: no-repeat;
  background-position: -50% 0%;
  background-color: #222;
}
@-moz-keyframes shimmer {
  0% {
    background-position: -75% 0%;
  }
  85% {
    background-position: -75% 0%;
  }
  100% {
    background-position: top right;
  }
}
@-webkit-keyframes shimmer {
  0% {
    background-position: -75% 0%;
  }
  80% {
    background-position: -75% 0%;
  }
  100% {
    background-position: top right;
  }
}
@-o-keyframes shimmer {
  0% {
    background-position: -75% 0%;
  }
  80% {
    background-position: -75% 0%;
  }
  100% {
    background-position: top right;
  }
}
@keyframes shimmer {
  0% {
    background-position: -75% 0%;
  }
  80% {
    background-position: -75% 0%;
  }
  100% {
    background-position: top right;
  }
}

nav {
  display: flex;
}
.tabItem {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top: 1px solid rgba(#716e10, 0.77);
  border-left: 1px solid rgba(#716e10, 0.77);
  border-right: 1px solid rgba(#716e10, 0.77);
  position: relative;
  cursor: pointer;
}
.tabButton {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  color: #62624c;
  background-color: #f5f4ea;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  padding: .5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: .5rem;
  outline: none;
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border-bottom: none;
  border: none;
  cursor: pointer;
}
.tabButton:focus {
  color: #353535;
  outline: 0;
  background-color: #f5f4ea;
  background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #FFFFFF);
  background-image: -moz-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: -ms-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: -o-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: linear-gradient(to bottom, #f5f4ea, #FFFFFF);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#FFFFFF);
}

.tabButton:active {
    color: #353535;
    background-color: #fff;
    background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #FFFFFF);
    background-image: -moz-linear-gradient(top, #f5f4ea, #FFFFFF);
    background-image: -ms-linear-gradient(top, #f5f4ea #FFFFFF);
    background-image: -o-linear-gradient(top, #f5f4ea, #FFFFFF);
    background-image: linear-gradient(to bottom, #f5f4ea, #FFFFFF);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#FFFFFF);
}
.tabButton:hover {
  color: #353535;
  background-color: #f5f4ea;
background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #f5f4ea, #ffffff);
background-image: -moz-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: -ms-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: -o-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: linear-gradient(to bottom, #f5f4ea, #f5f4ea, #ffffff);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#cdceff);
}

ul {
  margin: 0;
}
ul {
  list-style-type: none;
}
#activeBod ul > li {
  text-indent: -5px;
}
#activeBod ul > li:before {
  content: "- ";
  text-indent: -5px;
}
.happiHeader {
  margin-bottom: .75rem;
}
h2, h6 {
  line-height: 120%;
}

</style>
