import { 
  createRouter, 
  createWebHashHistory, 
  type RouteRecordRaw 
} from 'vue-router'

// 1. 显式声明 routes 的类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/test/button',
    component: () => import('../views/button.vue'),
  },
  {
    path: '/test/border',
    component: () => import('../views/border.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
