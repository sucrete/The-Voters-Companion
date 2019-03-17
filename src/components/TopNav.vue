
<template>
  <v-tabs
    right
    color="#4d5975"
  >
    <v-tabs-slider color="white"></v-tabs-slider>

    <v-tab :key="1">
      {{ i }}
    </v-tab>
    <v-tab :key="ii">
      {{ ii }}
    </v-tab>
    <v-tab :key="iii">
      {{ iii }}
    </v-tab>

    <v-tabs-items>
      <v-tab-item :key="1">
          Goob
          <Timeline></Timeline>
      </v-tab-item>
      <v-tab-item :key="ii">
        <Toolkit></Toolkit>
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
</style>
