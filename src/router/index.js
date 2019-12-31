import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // 空白页面  判断进入服务页面  还是  我的校园
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('@/views/ClassPage.vue')
    }
  ]
})
