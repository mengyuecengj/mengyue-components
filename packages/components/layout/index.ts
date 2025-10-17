import type { Plugin, App } from 'vue'
import row from './src/row.vue'
import col from './src/col.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'
import type { layoutProps } from './src/layout'

export const MYRow = withInstall(row)
export const MYCol = withInstall(col)

const components = [MYRow, MYCol]

const LayoutsPlugin: Plugin = {
    install(app: App) {
        components.forEach(comp => {
            app.use(comp)
        })
    }
}

export type { layoutProps }
export default LayoutsPlugin
