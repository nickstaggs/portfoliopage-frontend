<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: Consolas, monaco, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-x: hidden;
}

a.no-style:visited, a.no-style:link {
    text-decoration: inherit;
    color: inherit;
}
</style>
