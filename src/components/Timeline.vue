<template>
  <div class="fullwidth">
    <div class="simple-navigation-header mt-2 mb-2">
      <button class="mui-btn"><router-link id="righty" to="district">District</router-link></button>
      <span class="mt-1" style="display: flex;">The Voter's Companion</span>
      <button class="mui-btn"><router-link id="lefty" to="overview">Overview</router-link></button>
    </div>

    <div class="timeline group">


    </div>

  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       dismissSecs: 10,
//       dismissCountDown: 0,
//       showDismissibleAlert: false
//     }
//   },
//   methods: {
//     countDownChanged (dismissCountDown) {
//       this.dismissCountDown = dismissCountDown
//     },
//     showAlert () {
//       this.dismissCountDown = this.dismissSecs
//     }
//   }
// }
</script>

<style scoped>

.simple-navigation-header {
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: auto;
  align-items: baseline;
}


#righty, #lefty {
  display: flex;
}

.fullwidth {
  font-family: 'Rasa', serif;
  line-height: 95%;
  font-size: 125%;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}

.fullwidth {
  width: 100%;
  height: 100%
}

</style>

<!-- alert.vue -->
