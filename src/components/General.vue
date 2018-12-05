/* eslint-disable */
<template>
  <div class="district">
    <!-- simple nav header -->
    <div class="simple-navigation-header">
      <button id="lefty" type="button" class="mui-btn"><router-link to="Overview">Overview</router-link></button>
      <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">THE VOTER'S COMPANION</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="Timeline">Timeline</router-link></button>
    </div>
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
        Voter's Tools
      </div>
      <div id="overviewNotice">
        All the info you need to vote in your state.
      </div>
      <!-- <a id="bigButtonLink"><img id="bigButton" :src=" register " hidden></a> -->
    </div>

    <!-- body -->

    <div class="hotBod">

      <TabRouter :md-ripple="false"></TabRouter>

    </div>
  </div>
</template>

<script>
import TabRouter from './Tabs.vue'
// import registerBi from '../assets/76pix.png'
export default {
  name: 'district',
  data () {
    return {
      // register: registerBi
    }
  },
  methods: {
  },
  mounted () {
  },
  components: {
    TabRouter
  }
}
</script>

<style >

#navTabs {
  margin-top: 1rem;
}
.md-tabs-navigation {
  background-color: #f7f7f0 !important;
}
.md-button-content {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 500;
  font-size: 105%;
}
#activeBod {
  background-color: #f7f7f0;
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
#activeBod > * {
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
  text-indent: 3px;
}
.VTURL {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.VTName {
  width: 25rem;
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
  .md-button-content {
    font-size: 100%;
  }
  #activeBod {
    left: -2vw;
  }
  .VTName {
    width: 15vw;
  }
}
</style>
