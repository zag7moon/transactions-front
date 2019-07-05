<template>
  <div id="app"><router-view /></div>
</template>

<script>
import { SET_MODEL, AUTH } from './vuex/types'

export default {
  name: 'App',
  created () {
    const access = localStorage.getItem('ACCESS_TOKEN')
    const refresh = localStorage.getItem('REFRESH_TOKEN')
    if (access && refresh) {
      this.$store.commit(SET_MODEL, {name: AUTH, model: { access, refresh }})
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
