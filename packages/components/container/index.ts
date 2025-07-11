import { App, Plugin } from 'vue'
import Container from './src/container.vue'
import type { containerProps } from './src/container'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MContainer: Plugin = {
    install(app: App) {
        app.component('MYContainer', Container)
    }
}
export const MYContainer = withInstall(Container);
export { Container, containerProps, MContainer };
export default MContainer
