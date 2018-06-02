/* eslint-disable */
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
        All you need to know to vote in your state.
      </div>
      <a id="bigButtonLink"><img id="bigButton" :src=" register "/></a>
    </div>

    <!-- body -->

    <div class="hotBod">

      <TabRouter :md-ripple="false"></TabRouter>

    </div>
  </div>
</template>

<script>
import TabRouter from './Tabs.vue'
import registerBi from '../assets/76pix.png'
export default {
  name: 'district',
  data () {
    return {
      register: registerBi
    }
  },
  components: {
    TabRouter
  }
}
</script>

<style >

#navTabs {
  margin-top: 1rem;
  background-color: #F5F4EA !important;
}
.md-tabs-navigation {
  background-color: #F5F4EA !important;
}
.md-button-content {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  font-size: 105%;
}
.md-tabs-indicator {
  background-color: #867933;
}
#activeBod {
  background-color: #F5F4EA;
  width: 40rem;
  margin: 0 auto;
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
  color: #353839;
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
  border: 2px solid #F5F4EA;
  background-color: #F0FFF0;
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
