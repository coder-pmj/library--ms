import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/index',
      component: () => import('../components/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/Home.vue')
        }
      ]
    },
    {
      path: '/category/:name',
      component: () => import('../components/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/ShowCategory.vue')
        }
      ]
    },
    {
      path: '/connadmin',
      component: () => import('../components/Layout.vue'),
      children: [
        {
          path: '/',
          component: () => import('../views/ConnAdmin.vue')
        }
      ]
    }
  ]
})

export default router
