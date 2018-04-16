<template>
  <div class="district">
    <!-- simple nav header -->
    <div class="simple-navigation-header mt-2 mb-2">
      <button id="lefty" type="button" class="mui-btn"><router-link to="overview">Overview</router-link></button>
      <a id="takeMeOmh" class="mt-1" style="display: flex;" href="/"><p>The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
    </div>
    <!-- body -->
    <div class="hotBod">
      <b-nav fill tabs>
        <b-nav-item>General Information</b-nav-item>
        <b-nav-item>Identification Requirements</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item active>Lookup Tools</b-nav-item>
      </b-nav>

      <h1>district</h1>

      <h2>{{ msg }}</h2>
    </div>
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
<style>
  b-nav-item:hover {
    background-color: white;
  }
</style>
