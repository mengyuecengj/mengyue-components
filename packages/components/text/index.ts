import { App, Plugin } from 'vue'
import Text from './src/text.vue'
import type { textProps } from './src/text'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MText: Plugin = {
    install(app: App) {
        app.component('MYText', Text)
    }
}
export const MYText = withInstall(Text)
export { Text, textProps, MText }
export default MText
