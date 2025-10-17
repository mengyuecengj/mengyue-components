import type { App, Plugin } from 'vue'
import scroll from './src/scroll.vue'
import type { scrollProps } from './src/scroll'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MScroll: Plugin = {
    install(app: App) {
        app.component('MYScroll', scroll)
    }
}
export const MYScroll = withInstall(scroll)
export { scroll, scrollProps, MScroll }
export default MScroll