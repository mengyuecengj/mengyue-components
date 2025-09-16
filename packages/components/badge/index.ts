import { App, Plugin } from 'vue'
import badge from './src/badge.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MBadge: Plugin = {
    install(app: App) {
        app.component('MYBadge', badge)
    }
}

export const MYBadge = withInstall(badge)
export { badge, MBadge }