
<template>
  <!-- eslint-disable -->
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

      <TabRouter></TabRouter>

    </div>
  </div>
</template>

<script>
import TabRouter from './Tabs.vue'
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
  },
  components: {
    TabRouter
  }
}
</script>


<style >

md-button {
  margin-left: 1rem;
}

#activeBod {
  background-color: #F5F4EA;
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
  font-weight: 500;
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
  background-color: #F0FFF0;
}

nav {
  display: flex;
}
.tabItem {
  position: relative;
  cursor: pointer;
}
.tabButton {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  color: #62624c;
  background-color: #f5f4ea;
  padding: .5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: .5rem;
  outline: none;
  border-bottom: none;
  border: none;
  cursor: pointer;
}
.tabButton:focus {
  color: #353535;
  outline: 0;
  background-color: #f5f4ea;
}

.tabButton:active {
    color: #353535;
    background-color: #fff;
}
.tabButton:hover {
  color: #353535;
  background-color: #f5f4ea;
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


@import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Raleway:300,400";
/* colors */
/* tab setting */
/* breakpoints */
/* selectors relative to radio inputs */


.tabs {
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  position: relative;
  background: white;
  padding: 50px;
  padding-bottom: 80px;
  width: 70%;
  height: 700px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  min-width: 240px;
}

.tabs input[name="tab-control"] { display: none; }

.tabs .content section h2, .tabs ul li label {
  font-weight: bold;
  font-size: 18px;
  color: #428BFF;
}

.tabs ul {
  list-style-type: none;
  padding-left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  margin-bottom: 10px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.tabs ul li {
  box-sizing: border-box;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  width: 25%;
  padding: 0 10px;
  text-align: center;
}

.tabs ul li label {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #929daf;
  padding: 5px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tabs ul li label br { display: none; }

.tabs ul li label svg {
  fill: #929daf;
  height: 1.2em;
  vertical-align: bottom;
  margin-right: 0.2em;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.tabs ul li label:hover, .tabs ul li label:focus, .tabs ul li label:active {
  outline: 0;
  color: #bec5cf;
}

.tabs ul li label:hover svg, .tabs ul li label:focus svg, .tabs ul li label:active svg { fill: #bec5cf; }

.tabs .slider {
  position: relative;
  width: 25%;
  -webkit-transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
  transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);
}

.tabs .slider .indicator {
  position: relative;
  width: 50px;
  max-width: 100%;
  margin: 0 auto;
  height: 4px;
  background: #428BFF;
  border-radius: 1px;
}

.tabs .content { margin-top: 30px; }

.tabs .content section {
  display: none;
  -webkit-animation-name: content;
  animation-name: content;
  -webkit-animation-direction: normal;
  animation-direction: normal;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  line-height: 1.4;
}

.tabs .content section h2 {
  color: #428BFF;
  display: none;
}

.tabs .content section h2::after {
  content: "";
  position: relative;
  display: block;
  width: 30px;
  height: 3px;
  background: #428BFF;
  margin-top: 5px;
  left: 1px;
}

.tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label {
  cursor: default;
  color: #428BFF;
}

.tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label svg { fill: #428BFF; }
@media (max-width: 600px) {

.tabs input[name="tab-control"]:nth-of-type(1):checked ~ ul > li:nth-child(1) > label { background: rgba(0, 0, 0, 0.08); }
}

.tabs input[name="tab-control"]:nth-of-type(1):checked ~ .slider {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
}

.tabs input[name="tab-control"]:nth-of-type(1):checked ~ .content > section:nth-child(1) { display: block; }

.tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label {
  cursor: default;
  color: #428BFF;
}

.tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label svg { fill: #428BFF; }
@media (max-width: 600px) {

.tabs input[name="tab-control"]:nth-of-type(2):checked ~ ul > li:nth-child(2) > label { background: rgba(0, 0, 0, 0.08); }
}

.tabs input[name="tab-control"]:nth-of-type(2):checked ~ .slider {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.tabs input[name="tab-control"]:nth-of-type(2):checked ~ .content > section:nth-child(2) { display: block; }

.tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label {
  cursor: default;
  color: #428BFF;
}

.tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label svg { fill: #428BFF; }
@media (max-width: 600px) {

.tabs input[name="tab-control"]:nth-of-type(3):checked ~ ul > li:nth-child(3) > label { background: rgba(0, 0, 0, 0.08); }
}

.tabs input[name="tab-control"]:nth-of-type(3):checked ~ .slider {
  -webkit-transform: translateX(200%);
  transform: translateX(200%);
}

.tabs input[name="tab-control"]:nth-of-type(3):checked ~ .content > section:nth-child(3) { display: block; }

.tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label {
  cursor: default;
  color: #428BFF;
}

.tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label svg { fill: #428BFF; }
@media (max-width: 600px) {

.tabs input[name="tab-control"]:nth-of-type(4):checked ~ ul > li:nth-child(4) > label { background: rgba(0, 0, 0, 0.08); }
}

.tabs input[name="tab-control"]:nth-of-type(4):checked ~ .slider {
  -webkit-transform: translateX(300%);
  transform: translateX(300%);
}

.tabs input[name="tab-control"]:nth-of-type(4):checked ~ .content > section:nth-child(4) { display: block; }
@-webkit-keyframes
content {  from {
 opacity: 0;
 -webkit-transform: translateY(5%);
 transform: translateY(5%);
}

to {
  opacity: 1;
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
}
}
@keyframes
content {  from {
 opacity: 0;
 -webkit-transform: translateY(5%);
 transform: translateY(5%);
}

to {
  opacity: 1;
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
}
}
@media (max-width: 1000px) {

.tabs ul li label { white-space: initial; }

.tabs ul li label br { display: initial; }

.tabs ul li label svg { height: 1.5em; }
}
@media (max-width: 600px) {

.tabs ul li label {
  padding: 5px;
  border-radius: 5px;
}

.tabs ul li label span { display: none; }

.tabs .slider { display: none; }

.tabs .content { margin-top: 20px; }

.tabs .content section h2 { display: block; }
}
</style>
