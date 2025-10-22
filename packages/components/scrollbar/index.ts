import type { Plugin, App } from 'vue'
import scrollbar from './src/scrollbar.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MScrollbar: Plugin = {
    install(app: App) {
        app.component('MYScrollbar', scrollbar)
    }
}
export const MYScrollbar = withInstall(scrollbar)
export { scrollbar, MScrollbar }
export default MScrollbar
