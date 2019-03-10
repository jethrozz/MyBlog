<template>
    <div>
        <div class="articleTitle active" v-if="data_.showTitle">{{articleList[articleIndex].title}}   <span @click="showMenu" class="switch">切换</span></div>
        <div class="parent" v-show="data_.isShowList">
        <router-link v-for="(item,$index) in articleList" :to="{name:'article' ,params:{index:$index}}" @click.native='hideParent(data_.isShowList,$index)'>
            <div class="child">
            <span class="title">{{item.title}}</span>
            <br>
            <div class="interduce"> {{item.content}} </div>
            </div>
        </router-link>
        </div>
        <router-view v-bind:data1="data1"></router-view>
    </div>

</template>
<script>
export default {
    props:['data_'],
    data:function(){
        return {
            data1:{},
            index: 0,
            articleIndex:0,
            isShow:true,
            articleList: [
            {
              id:0,
              title:"《春1》",
              content:"我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。",
              path: "article/"
            },
            {
              id:1,
              title:"《春2》",
              content:"我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。",
              path: "article/"
            }
        ]
        }
    },
    methods:{
        hideParent:function(isShow,index){
         
          this.articleIndex = index
          this.$props.data_.isShowList = !isShow;
          this.$props.data_.showMenu = false;
          this.$props.data_.showTitle = true;
          this.$props.data_.isShowArticle = true;
          //this.$emit('hide-Menu');
        },
        showMenu:function(){
          this.$props.data_.showMenu = true;
          this.$props.data_.showTitle = false;
          this.$props.data_.isShowArticle = false;
          this.$props.data_.isShowList = !this.$props.data_.isShowList;
        }
    },
    mounted(){
      this.data1 = this.$props.data_
      this.index = this.$route.params.nums
      console.log(this.index);
    }
}
</script>
<style scoped>
.parent {
  overflow: hidden;
  margin-right: -20px;
  padding-top: 30px;
}
.child {
  border: 2px solid #069a6b;
  float: left;
  height: 160px;
  width: calc(33% - 50px);
  margin-right: 50px;
  margin-bottom: 35px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px 10px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 0 0 10px 10px rgba(0, 0, 0, 0.1) ; */
}

.child:hover{
     box-shadow:   0px 0px 0px 0px  rgba(0, 0, 0, 0),   /*上边阴影  x y 模糊度 模糊半径*/

                0px 0px 0px 0px rgba(0, 0, 0, 0),   /*左边阴影  */

                1px 0px 15px 0px  rgba(0, 0, 0, 0.1),    /*右边阴影  */

                0px 1px 15px 0px rgba(0, 0, 0, 0.1);    /*下边阴影  */
}

.title {
  font: 15px/1.5 siyuan, "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
.interduce {
  text-indent: 25px;
  font-family: siyuan, Consolas, Liberation Mono, Menlo, Courier, monospace;
  font-size: 12px;
  color: #666;
}
.parent a:active {
  color: black;
}
.parent a:visited {
  color: black;
}
.parent a{
  color: black;
}


.articleTitle{
  border-bottom: 2px solid #b2b2b2;
  font-size: 20px;
  color: #b2b2b2;
  box-sizing: border-box;
  text-align: center;
}
.switch{
  font-size: 0.5em;
  color: #fff;
}
.switch:hover{
  color: #069a6b;
  cursor: pointer;
}
.active {
  color: #069a6b;
  border-color: #069a6b;
}
</style>
