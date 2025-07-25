import { App, Plugin } from 'vue'
import pagination from './src/pagination.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MPagination: Plugin = {
    install(app: App) {
        app.component('MYPagination', pagination);
    }
}

export const MYPagination = withInstall(pagination);
export { MPagination, pagination }
