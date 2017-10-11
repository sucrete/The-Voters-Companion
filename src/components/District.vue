<template>
  <div class="district">
    <div class="simple-navigation-header mt-2 mb-2">
      <button id="lefty" type="button" class="mui-btn"><router-link to="overview">Overview</router-link></button>
      <div class="mt-1" style="display: flex;">The Voter's Companion</div>
      <button id="righty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
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

</style>
