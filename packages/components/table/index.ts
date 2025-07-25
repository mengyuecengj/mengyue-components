import { App, Plugin } from 'vue'
import table from './src/table.vue'
import tableColumn from './src/tableColumn.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MTable: Plugin = {
    install(app: App) {
        app.component('MYTable', table)
    }
}

const MTableColumn: Plugin = {
    install(app: App) {
        app.component('MYTableColumn', tableColumn)
    }
}
export const MYTable = withInstall(table)
export const MYTableColumn = withInstall(tableColumn)
export { table, tableColumn, MTable, MTableColumn }
