import { App, Plugin } from 'vue'
import result from './src/result.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MResult: Plugin = {
    install(app: App) {
        app.component('MYResult', result)
    }
}
export const MYResult = withInstall(result)
export { result, MResult }
