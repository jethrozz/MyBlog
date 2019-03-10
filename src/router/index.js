import Vue from 'vue'
import Router from 'vue-router'
import articleList from '../components/articleList/articleList.vue'
import article from '../components/ariticle/article'
Vue.use(Router)
const goods = { template: '<p>goodspage</p>' }
const seller = { template: '<div>seller page</div>' }
// const ratings = { template: '<p>ratings page   {{}} </p>' }

export default new Router({
  routes: [
    {
      path: '/index',
      component: app,
    },
    {
      path: '/type:nums',
      name: 'type',
      component: articleList,
      children: [
        {
          name: 'article',
          path: 'article:index',
          component: article,
          props: true
        }
      ]
    },
    {
      path: '/article',
      component: seller
    },
    {
      path: '/third',
      component: goods
    }
  ]
})
