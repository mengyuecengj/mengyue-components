import { App, Plugin } from 'vue'
import select from './src/select.vue'
import option from './src/option.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MSelect: Plugin = {
    install(app: App) {
        app.component('MYSelect', select)
    }
}

const MOption: Plugin = {
    install(app: App) {
        app.component('MYOption', option)
    }
}

export const MYSelect = withInstall(select)
export const MYOption = withInstall(option)
export { MSelect, select, MOption, option }
