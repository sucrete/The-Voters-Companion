<template>
  <div class="timeline">

    <h2>Timeline Here</h2>

    <h6>{{ msg }}</h6>

  </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
      msg: 'Where you at? (this is your data "message" object inserted into the DOM)'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline {
  background-color: teal;
}
h1, h2, h6 {
  font-weight: normal;
  color: white;
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
