import type { App, Plugin } from 'vue'
import dialog from "./src/dialog.vue";
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MDialog: Plugin = {
    install(app: App) {
        app.component('MYDialog', dialog)
    }
}

export const MYDialog = withInstall(dialog)
export { dialog, MDialog }