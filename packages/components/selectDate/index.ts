import type { App, Plugin } from 'vue'
import selectDate from './src/selectDate.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MselectDate: Plugin = {
    install(app: App) {
        app.component('MYSelect-date', selectDate)
    }
}

export const MYSelectDate = withInstall(selectDate)
export { MselectDate, selectDate }
