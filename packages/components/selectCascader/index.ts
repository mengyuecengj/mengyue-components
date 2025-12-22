import type { App, Plugin } from 'vue'
import selectCascader from './src/selectCascader.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MselectCascader: Plugin = {
    install(app: App) {
        app.component('MYSelect-cascader', selectCascader)
    }
}

export const MYSelectCascader = withInstall(selectCascader)
export { MselectCascader, selectCascader }
