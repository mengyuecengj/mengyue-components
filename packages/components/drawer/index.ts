import type { App, Plugin } from 'vue'
import drawer from './src/drawer.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MDrawer: Plugin = {
    install(app: App) {
        app.component('MYDrawer', drawer)
    }
}

export const MYDrawer = withInstall(drawer)
export const MYDialog = withInstall(drawer)
export { drawer, MDrawer }
