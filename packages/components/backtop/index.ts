import { Plugin, App } from 'vue'
import backtop from './src/backtop.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MBacktop: Plugin = {
    install(app: App) {
        app.component('MYBacktop', backtop)
    }
}
export const MYBacktop = withInstall(backtop)
export { backtop, MBacktop }
