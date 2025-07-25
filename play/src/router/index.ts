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
  },
  {
    path: '/test/selectTime',
    component: () => import('../views/selectTime.vue')
  },
  {
    path: '/test/select',
    component: () => import('../views/select.vue')
  },
  {
    path: '/test/selectCascader',
    component: () => import('../views/selectCascader.vue')
  },
  {
    path: '/test/slidebar',
    component: () => import('../views/slidebar.vue')
  },
  {
    path: '/test/form',
    component: () => import('../views/form.vue')
  },
  {
    path: '/test/badge',
    component: () => import('../views/badge.vue')
  },
  {
    path: '/test/collapse',
    component: () => import('../views/collapse.vue')
  },
  {
    path: '/test/progress',
    component: () => import('../views/progress.vue')
  },
  {
    path: '/test/result',
    component: () => import('../views/result.vue')
  },
  {
    path: '/test/skeleton',
    component: () => import('../views/skeleton.vue')
  },
  {
    path: '/test/pagination',
    component: () => import('../views/pagination.vue')
  },
  {
    path: '/test/table',
    component: () => import('../views/table.vue')
  },
  {
    path: '/test/timeline',
    component: () => import('../views/timeline.vue')
  },
  {
    path: '/test/tree',
    component: () => import('../views/tree.vue')
  },
  {
    path: '/test/tree',
    component: () => import('../views/tree.vue')
  },
  {
    path: '/test/backtop',
    component: () => import('../views/backtop.vue')
  },
  {
    path: '/test/breadcrumb',
    component: () => import('../views/breadcrumb.vue')
  },
  {
    path: '/test/dropdown',
    component: () => import('../views/dropdown.vue')
  },
  {
    path: '/test/menu',
    component: () => import('../views/menu.vue')
  },
  {
    path: '/test/step',
    component: () => import('../views/step.vue')
  },
  {
    path: '/test/carousel',
    component: () => import('../views/carousel.vue')
  },
  {
    path: '/test/transfer',
    component: () => import('../views/transfer.vue')
  },
  {
    path: '/test/alert',
    component: () => import('../views/alert.vue')
  },
  // {
  //   path: '/test/loading',
  //   component: () => import('../views/loading.vue')
  // },
  //   {
  //   path: '/test/message',
  //   component: () => import('../views/message.vue')
  // },
  //   {
  //   path: '/test/messagebox',
  //   component: () => import('../views/messagebox.vue')
  // },
  //   {
  //   path: '/test/notification',
  //   component: () => import('../views/notification.vue')
  // },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
