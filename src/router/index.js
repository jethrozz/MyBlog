import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const goods = { template: '<p>goods page</p>' }
const seller = { template: '<p>seller page</p>' }
const ratings = { template: '<p>ratings page</p>' }
export default new Router({
  routes: [
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/goods',
      component: goods
    }
  ]
})
