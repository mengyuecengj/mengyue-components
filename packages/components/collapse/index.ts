import { App, Plugin } from 'vue'
import collapse from './src/collapse.vue'
import collapseItem from './src/collapseItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MCollapse: Plugin = {
    install(app: App) {
        app.component('MYCollapse', collapse)
    }
}

const MCollapseItem: Plugin = {
    install(app: App) {
        app.component('MYCollpase-item', collapseItem)
    }
}

export const MYCollapse = withInstall(collapse)
export const MYCollapseItem = withInstall(collapseItem)
export { collapse, collapseItem, MCollapse, MCollapseItem }
