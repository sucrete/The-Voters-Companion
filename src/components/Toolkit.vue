/* eslint-disable */
<template>
  <div style="position: relative;" class="Toolkit">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee">
        Voter's Toolkit
      </div>
      <div id="overviewNotice">

      </div>
      <a id="bigButtonLink" v-if="presentBadge" target="_blank" v-bind:href="regURL">
        <img id="bigButton" :src=" register ">
      </a>
    </div>

    <!-- body -->

    <div class="hotBod">

      <TabRouter></TabRouter>

    </div>
  </div>
</template>

<script>
import TabRouter from './Tabs.vue'
import registerBi from '../assets/registerBadge.png'

export default {
  name: 'Toolkit',
  data () {
    return {
      register: registerBi,
      presentBadge: this.$store.getters.shouldIDisplayBadge,
      regURL: this.$store.getters.getUserBadgeURL
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
#app {
  padding-bottom: 16em;
}
footer {
  display: block;
}
#navTabs {
  margin-top: 1rem;
}
.md-tabs-navigation {
  background-color: #f7f7f0 !important;
}
.md-button-content {
  font-family: 'Karla', sans-serif;
  font-weight: 500;
  font-size: 105%;
  letter-spacing: .08em;
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
  font-family: 'Karla', sans-serif;
  line-height: 130%;
  color: #5b524a;;
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
