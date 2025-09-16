import { App, Plugin } from 'vue'
import alert from './src/alert.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MAlert: Plugin = {
    install(app: App) {
        app.component('MYAlert', alert)
    },
}

export const MYAlert = withInstall(alert)
export { alert, MAlert }
