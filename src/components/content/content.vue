<template>
  <div id="content" class="common_width">
      <div class="menu-tab" v-if="data_.showMenu">
        <router-link v-for='(item,$index) in items'
        @click.native='menuClick(item, $index)'
        :class="{'active':item.active,'unactive':!item.active}"
        class="menu-item" :to="{name:'type', params: { nums: $index }}"> {{item.select}}
        </router-link>
      </div>
      <router-view v-bind:data_="data_" v-on:hide-Menu="hideMenu" ></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data: function() {
    return {
      data_:{
        showMenu:true, //控制菜单
        showTitle:false, //控制标题显示
        isShowList:true, //控制文章列表显示
        isShowArticle:false, //控制文章内容显示
      },
      items: [
        {select: '第一类', active: true, path: '/type'},
        {select: '第二类', path: '/type'},
        {select: '第三类', path: '/type'},
        {select: '第四类', path: '/type'}
      ]
    }
  },
  methods: {
    menuClick: function(item, index) {
      this.$data.data_.isShow = true
      this.$data.data_.num = this.$route.params.nums
      this.items.forEach(function(item) {
        Vue.set(item, 'active', false)
      })
      this.items[index].active = true
    },
    hideMenu:function(){
      this.$data.data_.showMenu = false
      this.$data.data_.showTitle = true;
    },
    showMenu:function(){
      this.$data.data_.showMenu = true;
      this.$data.data_.showTitle = false;
      this.$data.data_.isShow = true;
    }
  }
}
</script>
<style scoped>
#content {
  min-height: 550px;
  background-color: #fff;
  margin: 40px auto 0 auto;
  overflow: hidden;
}
.menu-tab {
  width: 860px;
  display: flex;
  flex-flow: row;
}
 .menu-tab a{
    /* color: #b2b2b2; */
    text-decoration:none;
}
.menu-tab a:hover{
    color: #069a6b;
}
.menu-item {
  border-bottom: 2px solid #b2b2b2;
  text-align: center;
  display: block;
  float: left;
  flex: 1;
  font-family: siyuan;
  font-style: italic;
  /* font-weight: bold; */
  font-size: 20px;
  color: #b2b2b2;
  /* //border: 1px black solid; */
  box-sizing: border-box;
}

.menu-item:hover {
  color: #069a6b;
  border-color: #069a6b;
  cursor: pointer;
}
.active {
  color: #069a6b;
  border-color: #069a6b;
}
</style>
