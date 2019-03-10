<template>
  <div class="header">
    <div class="search_area">
      <input type="text" name value class="searchLine" placeholder="内容搜索区">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 60px;
  margin: 90px auto 0 auto;
  position: relative;
}
.search_area{
  width: 50%;
  margin: 0 auto;
}
.header .searchLine {
  background-color: #fff;
  border: none;
  border-bottom: #b2b2b2 2px solid;
  height: 30px;
  width: 100%;
  line-height: 30px;
  font: 20px/1.5 siyuan, "Microsoft YaHei", "黑体", "宋体", sans-serif;
  color: #b2b2b2;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #b2b2b2;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #b2b2b2;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #b2b2b2;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #b2b2b2;
}

.header .searchLine:focus {
  /* border-bottom-left-radius: 10px; */
  height: 30px;
  outline: none;
  background-color: #fff;
  border: none;
  border-bottom: #069a6b 2px solid;
  color: black;
}
</style>
