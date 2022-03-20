<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  mounted () { },
  methods: {}
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
  background-color: #f5f6f7;
  min-width: 1080px;
  overflow: hidden;
}
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  background: #eaf0f6 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
