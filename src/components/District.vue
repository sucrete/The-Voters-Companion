<template>
  <div class="district">
    <!-- simple nav header -->
    <div class="simple-navigation-header">
      <button id="lefty" type="button" class="mui-btn"><router-link to="overview">Overview</router-link></button>
      <a href="/"><p id="takeMeOmh">The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="timeline">timeline</router-link></button>
    </div>
    <!-- body -->
    <div class="hotBod">
      <nav v-bind:class="active" v-on:click.prevent>
        <a class="home tabItem" v-on:click="makeActive( generalInfo )"><button>General</button></a>
        <a class="projects tabItem" v-on:click="makeActive( eligibility )"><button>Eligibility</button></a>
        <a class="services tabItem" v-on:click="makeActive( IDRequirements )"><button>ID Requirements</button></a>
        <a class="contact tabItem" v-on:click="makeActive( voteTools )"><button>Voter Tools</button></a>
      </nav>

      <p id="activeBod" v-html="active">
      </p>
      <ul class="nav nav-tabs" id="myTab" role="tablist" v-bind:class="active" v-on:click.prevent>
        <li class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>
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

#activeBod {
  background-color: #fff;
  border-top: 1px solid #716E10;
  padding: 1rem;
  min-height: 75vh;
  text-align: left;
}
nav {
  display: flex;
}

a {
  border-top-right-radius: 2px;
  border-top: 1px solid rgba(#716e10, 0.77);
  border-left: 1px solid rgba(#716e10, 0.77);
  border-right: 1px solid rgba(#716e10, 0.77);
}
button {
  background-color: #f5f4ea;
  border-top-left-radius: 2px;
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: .5rem;
  outline: none;
  border: none;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
}
button:hover {
  background-color: #d5d755;
}
button:focus {
  outline: 0;
}
.tabItem:link, .tabItem:visited {
    cursor: auto;
    text-decoration: none;
}
button:active {
    background-color: #fff !important;
}
</style>
