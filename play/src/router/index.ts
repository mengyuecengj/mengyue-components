import { 
  createRouter, 
  createWebHashHistory, 
  type RouteRecordRaw 
} from 'vue-router'

// 1. 显式声明 routes 的类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/Aindex.vue'),
  },
  {
    path: '/test/button',
    component: () => import('../views/button.vue'),
  },
  {
    path: '/test/border',
    component: () => import('../views/border.vue')
  },
  {
    path: '/test/text',
    component: () => import('../views/text.vue')
  },
  {
    path: '/test/a',
    component: () => import('../views/testa.vue')
  },
  {
    path: '/test/scroll',
    component: () => import('../views/scroll.vue')
  },
  {
    path: '/test/scrollbar',
    component: () => import('../views/scrollbar.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
