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
  },
  {
    path: '/test/container',
    component: () => import('../views/container.vue')
  },
  {
    path: '/test/layout',
    component: () => import('../views/layout.vue')
  },
  {
    path: '/test/input',
    component: () => import('../views/input.vue')
  },
  {
    path: '/test/radio',
    component: () => import('../views/radio.vue')
  },
  {
    path: '/test/checkbox',
    component: () => import('../views/checkbox.vue')
  },
  {
    path: '/test/switch',
    component: () => import('../views/switch.vue')
  },
  {
    path: '/test/rate',
    component: () => import('../views/rate.vue')
  },
  {
    path: '/test/pickColor',
    component: () => import('../views/pickerColor.vue')
  },
    {
    path: '/test/selectDate',
    component: () => import('../views/selectDate.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
