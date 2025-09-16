import { App, Plugin } from 'vue'
import progress from './src/progress.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MProgress: Plugin = {
    install(app: App) {
        app.component('MYProgress', progress)
    }
}

export const MYProgress = withInstall(progress)
export { progress, MProgress }
