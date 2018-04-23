<template>
  <div class="district">
    <!-- simple nav header -->
    <div class="simple-navigation-header">
      <button id="lefty" type="button" class="mui-btn"><router-link to="Overview">Overview</router-link></button>
      <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">The Voter's Companion</p></a>
      <button id="righty" type="button" class="mui-btn"><router-link to="Timeline">Timeline</router-link></button>
    </div>
    <!-- body -->
    <div class="hotBod">
      <nav v-bind:class="active" v-on:click.prevent>
        <a class="home tabItem" v-on:click="makeActive( generalInfo )"><button class="tabButton" id="activated">General</button></a>
        <a class="projects tabItem" v-on:click="makeActive( eligibility )"><button class="tabButton">Eligibility</button></a>
        <a class="services tabItem" v-on:click="makeActive( IDRequirements )"><button class="tabButton">ID Requirements</button></a>
        <a class="contact tabItem" v-on:click="makeActive( voteTools )"><button class="tabButton">Voter Tools</button></a>
      </nav>

      <p id="activeBod" v-html="active">  </p>
      <p id="activeBod" > {{ active }} </p>
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
    },
    superSizeThisTab () {
      document.getElementById('activated').focus()
    },
    fillItUp () {
      var voterInfo = this.$store.getters.getVoterInfo.data
      this.generalInfo = voterInfo.objects[0].voting_general_info
    }
  },
  mounted () {
    this.superSizeThisTab()
    this.fillItUp()
  }
}
</script>


<style >

#activeBod {
  background-color: WHITE;
  border-top: 1px solid rgba(#716e10, 1);
  padding: 1.5rem;
  min-height: 75vh;
  text-align: left;
  z-index: 5;
}
nav {
  display: flex;
}
.tabItem {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top: 1px solid rgba(#716e10, 0.77);
  border-left: 1px solid rgba(#716e10, 0.77);
  border-right: 1px solid rgba(#716e10, 0.77);
  position: relative;
  cursor: pointer;
}
.tabButton {
  background-color: #f5f4ea;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: .5rem;
  outline: none;
  transition: all 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border-bottom: none;
  border: none;
  cursor: pointer;
}

.tabButton:focus {
  outline: 0;
  background-color: #f5f4ea;
  background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #FFFFFF);
  background-image: -moz-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: -ms-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: -o-linear-gradient(top, #f5f4ea, #FFFFFF);
  background-image: linear-gradient(to bottom, #f5f4ea, #FFFFFF);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#FFFFFF);
}

.tabButton:active {
    background-color: #fff;
    background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #FFFFFF);
    background-image: -moz-linear-gradient(top, #f5f4ea, #FFFFFF);
    background-image: -ms-linear-gradient(top, #f5f4ea #FFFFFF);
    background-image: -o-linear-gradient(top, #f5f4ea, #FFFFFF);
    background-image: linear-gradient(to bottom, #f5f4ea, #FFFFFF);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#FFFFFF);
}
.tabButton:hover {
  background-color: #f5f4ea;
background-image: -webkit-linear-gradient(to bottom, #f5f4ea, #f5f4ea, #ffffff);
background-image: -moz-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: -ms-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: -o-linear-gradient(top, #f5f4ea, #f5f4ea, #ffffff);
background-image: linear-gradient(to bottom, #f5f4ea, #f5f4ea, #ffffff);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#D3D3D3, endColorstr=#cdceff);
}

</style>
