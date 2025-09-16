import { App, Plugin } from 'vue'
import selectTime from './src/selectTime.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MselectTime: Plugin = {
    install(app: App) {
        app.component('MYSelect-time', selectTime)
    }
}

export const MYSelectTime = withInstall(selectTime)
export { MselectTime, selectTime }
