<template>
  <div id="app">
    <div id="warp">
      <v-header></v-header>
      <v-content></v-content>
      <router-view></router-view>
      <div class="push"></div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './components/header/header'
import content from './components/content/content'
import footer from './components/footer/foot'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-footer': footer,
    'v-content': content
  }
}
</script>

<style>
html,body{
  height: 100%;
  min-height: 100%;
  margin: 0;
}
#app{
  height: 100%;
}
#warp {
  height: 100%;
  min-height: 100%;
  margin-bottom: -20px;
}
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab .tab-item {
  flex: 1;
  text-align: center;
}
.push{
  height: 20px;
}
</style>
