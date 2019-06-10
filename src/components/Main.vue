<template>
  <div>
    <TopNav class="topnav"></TopNav>
  </div>
</template>

<script>
import TopNav from './TopNav.vue'
export default {
  name: 'Main',
  components: {
    TopNav
  }
}
</script>

<style>
#app, body::after, body::before, html::after, html::before {
  background-color: rgb(253, 253, 253);
  background-image: unset;
}
</style>
