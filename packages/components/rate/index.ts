import { App, Plugin } from 'vue'
// import { props } from './src/rate'
import rate from './src/rate.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MRate: Plugin = {
    install(app: App) {
        app.component('MYRate', rate)
    }
}

export const MYRate = withInstall(rate)
export { rate, MRate}