<template>
  <div id="app">
    <div id="warp">
      <v-header></v-header>
      <v-content></v-content>
    </div>
    <v-footer class="common_width"></v-footer>
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
@font-face {
  font-family: siyuan;
  src: url('./assets/SourceHanSansCN-Normal.otf');
}
html,
body {
  height: 100%;
  min-height: 100%;
  margin: 0;
  background-color: #fff;
  min-width: 1000px;
}
#app {
  height: 100%;
}
.common_width {
  width: 900px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
