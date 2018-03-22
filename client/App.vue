<template>
  <div id="app">
    <navbar/>
    <router-view id="body"/>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
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
}

#body {
  margin-top: 60px;
}
</style>
