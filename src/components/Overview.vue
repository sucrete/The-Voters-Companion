<template>
  <div class="overview">
    <h1>{{ msg }}</h1>
    <img id="toungey"  class="animated-gif w:2of8" style="width: 100; height: auto;" src="https://www.tommoody.us/images/jun10/Adult_gecko_animation.gif"/>

  </div>
</template>

<script>

export default {
  name: 'overview',
  data () {
    return {
      msg: 'This is your main component. This can be navigated away from.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: white;
}

.hello {
  background-color: olive;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
