import type { App, Plugin } from 'vue'
import Switch from './src/switch.vue'
import type { switchProps } from './src/switch'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MSwitch: Plugin = {
    install(app: App) {
        app.component('MYSwitch', Switch)
    }
}

export const MYSwitch = withInstall(Switch)
export { MSwitch, Switch }
