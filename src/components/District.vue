<template>
  <div class="district">
    <div class="simple-navigation-header mt-2 mb-2">
      <button class="mui-btn"><router-link id="lefty" to="overview">Overview</router-link></button>
      <span class="mt-1" style="display: flex;">The Voter's Companion</span>
      <button class="mui-btn"><router-link id="righty" to="timeline">timeline</router-link></button>
    </div>

    <h1>district</h1>

    <h2>{{ msg }}</h2>

  </div>
</template>

<script>
export default {
  name: 'district',
  data () {
    return {
      msg: 'the message space. updated with district designation?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.simple-navigation-header {
  display: flex;
  justify-content: space-between;
  width: 700px;
  margin: auto;
  line-height: 95%;
  font-size: 125%;
}

#righty, #lefty {
  display: flex;
}

</style>
