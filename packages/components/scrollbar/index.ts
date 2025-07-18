import { Plugin, App } from 'vue'
import scrollbar from './src/scrollbar.vue'
import type { scrollbarProps } from './src/scrollbar'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MScrollbar: Plugin = {
    install(app: App) {
        app.component('MYScrollbar', scrollbar)
    }
}
export const MYScrollbar = withInstall(scrollbar)
export { scrollbar, scrollbarProps, MScrollbar }
export default MScrollbar
