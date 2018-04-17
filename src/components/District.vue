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
      <b-nav fill tabs v-bind:class="active" v-on:click.prevent>
        <b-nav-item class="home" v-on:click="makeActive( generalInfo )">General</b-nav-item>
        <b-nav-item class="projects" v-on:click="makeActive( eligibility )">Eligibility</b-nav-item>
        <b-nav-item class="services" v-on:click="makeActive( IDRequirements )">ID Requirements</b-nav-item>
        <b-nav-item class="contact" v-on:click="makeActive( voteTools )">Voter Tools</b-nav-item>
      </b-nav>

      <p id="activeBod">
        {{ active }}
      </p>

    </div>
  </div>
</template>

<script>

export default {
  name: 'district',
  data () {
    return {
      active: 'This is your landing General Info spot',
      generalInfo: 'This is your landing General Info spot',
      eligibility: 'are you eligibile?',
      IDRequirements: 'this is what you need',
      voteTools: '<h1>Voter\'s tools.</h1><br /> Can I vote?'
    }
  },
  methods: {
    makeActive: function (item) {
      this.active = item
      this.classList.toggle('imBlue')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  b-nav-item:hover {
    background-color: white;
  }
  .imBlue {
    background-color: blue;
  }
</style>
