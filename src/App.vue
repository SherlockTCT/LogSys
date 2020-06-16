<template>
  <div id="app">
    <homenavigation></homenavigation>
  </div>
</template>


<script>
import homenavigation from './homenavigation/Index'
export default {
  name: 'App',
  components:{
    homenavigation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
