
<template>
  <v-tabs
    right
    color="#acb4c5"
  >
    <span><a class="tabTitle" href="/"><span>The</span>Voter's Companion</a></span>
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
        <Officials></Officials>
      </v-tab-item>
      <v-tab-item :key="ii">
        <Timeline></Timeline>
      </v-tab-item>
      <v-tab-item :key="iii">
        <Toolkit></Toolkit>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
import Officials from './Officials.vue'
import Timeline from './Timeline.vue'
import Toolkit from './Toolkit.vue'

export default {
  name: 'TopNav',
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      i: 'Officials',
      ii: 'Timeline',
      iii: 'Toolkit'
    }
  },
  components: {
    Officials,
    Timeline,
    Toolkit
  }
}
</script>

<style>
.v-tabs__item {
  color: white !important;
  letter-spacing: .065em;
  font-weight: 500;
}
.v-tabs__item.v-tabs__item--active {

}
.tabTitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  padding-left: 2.3em;
  color: #2b3b80 !important;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  letter-spacing: .05em;
}
.tabTitle:visited {
  color: #2b3b80 !important;
}
.tabTitle span {
  position:absolute;
  left: 1.5em;
  font-size: .6em;
  -ms-transform: translateY(-10%);
  transform: translateY(-10%);
}
</style>
