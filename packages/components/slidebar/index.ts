import type { App, Plugin } from 'vue';
import slidebar from './src/slidebar.vue';
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MSlidebar: Plugin = {
    install(app: App) {
        app.component('MYSlidebar', slidebar);
    },
}

export const MYSlidebar = withInstall(slidebar)
export { slidebar, MSlidebar }

