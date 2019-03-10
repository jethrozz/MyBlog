<template>
    <div class="article" v-show="data1.isShowArticle">
        <pre>
            {{articleList[index].content}}
        </pre>
    </div>
</template>
<script>
export default {
    props:['data1'],
    data:function(){
        return {
            index:0,
            articleList: [
                {
                id:0,
                title:"《春1》",
                content:"我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。",
                path: "./article/:"
                },
                {
                id:1,
                title:"《春2》",
                content:"我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。",
                path: "./article/:"
                }
            ]
        }
    },
    mounted(){
        this.index = this.$route.params.index
        console.log(this.$props.data1)
        console.log(this.index)
    }
}
</script>
<style scoped>
.article{
    margin-top: 10px;
    font-family: siyuan;
}
pre{
    font-size: 0.8em;
    font-family: siyuan;
    white-space:pre-wrap;
    word-wrap:break-word;
}
</style>

