
<template>
  <v-tabs
    right
    color="#acb4c5"
    class="topNavvy"
  >
    <a href="/">
      <img class="flagLogo" :src=" flagLogo ">
    </a>
    <v-spacer></v-spacer>
    <v-tabs-slider color="white"></v-tabs-slider>

    <v-tab :key="i">
      {{ i }}
    </v-tab>
    <v-tab :key="ii">
      {{ ii }}
    </v-tab>
    <v-tab class="mr-2" :key="iii">
      {{ iii }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item :key="i">
        <Timeline></Timeline>
      </v-tab-item>
      <v-tab-item :key="ii">
        <Resources></Resources>
      </v-tab-item>
      <v-tab-item :key="iii">
        <Officials></Officials>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Officials from './Officials.vue'
import Timeline from './Timeline.vue'
import Resources from './Resources.vue'
import Lagos from '../assets/flagLogo.svg'

export default {
  name: 'TopNav',
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      i: 'Timeline',
      ii: 'Resources',
      iii: 'Officials',
      flagLogo: Lagos
    }
  },
  components: {
    Officials,
    Timeline,
    Resources
  }
}
</script>

<style>
.v-tabs__item {
  font-family: 'Roboto', sans-serif;
  color: white !important;
  letter-spacing: .065em;
  font-weight: 500;
}
.v-tabs__container {
  height: 55px;
}
a .flagLogo {
  margin: 0;
  position: absolute;
  left: .7em;
  top: 50%;
  height: 2.5em;
  width: auto;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
@media only screen and (max-width: 750px) {
  .v-tabs {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
}
@media only screen and (max-width: 330px) {
  .v-tabs__item {
    font-size: .9em;
  }
}
@media only screen and (max-width: 700px) {
  .v-tabs__item {
    padding: 6px 6px !important;
  }
  .v-tabs__div {
    margin-right: 0px !important;
  }
}
</style>
