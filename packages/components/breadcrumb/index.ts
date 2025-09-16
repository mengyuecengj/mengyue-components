import { App, Plugin } from 'vue';
import breadcrumb from './src/breadcrumb.vue';
import breadcrumbItem from './src/breadcrumbItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

// 定义组件库的插件对象
const MBreadcrumb: Plugin = {
  install(app: App) {
    app.component('MYBreadcrumb', breadcrumb);
  },
};

const MBreadcrumbItem: Plugin = {
  install(app: App) {
    app.component('MYBreadcrumb-item', breadcrumbItem);
  },
};


export const MYBreadcrumb = withInstall(breadcrumb)
export const MYBreadcrumbItem = withInstall(breadcrumbItem)
// 显式导出所有内容
export { breadcrumb, MBreadcrumb, breadcrumbItem, MBreadcrumbItem };