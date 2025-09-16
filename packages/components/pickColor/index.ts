import { App, Plugin } from 'vue'
import pickColor from './src/pickColor.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MPickColor: Plugin = {
    install(app: App) {
        app.component('MYSelect-color', pickColor);
    }
}

export const MYPickColor = withInstall(pickColor);
export { MPickColor, pickColor }