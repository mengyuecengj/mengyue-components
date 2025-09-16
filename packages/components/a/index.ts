import { Plugin, App } from 'vue'
import a from './src/a.vue'
import type { aProps } from './src/a'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MA: Plugin = {
    install(app: App) {
        app.component('MYA', a)
    }
}
export const MYLink = withInstall(a)
export { a, aProps, MA }
export default MA