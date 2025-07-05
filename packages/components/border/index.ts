import { App, Plugin } from "vue"
import Border from './src/border.vue'
import type { BorderProps } from "./src/border"
import { withInstall } from "../../theme-chalk/utils/withInstall"

const MBorder: Plugin = {
    install(app: App) {
        app.component('MYBorder', Border)
    }
}
export const MYBorder = withInstall(Border)
export { Border, BorderProps, MBorder };

export default MBorder
