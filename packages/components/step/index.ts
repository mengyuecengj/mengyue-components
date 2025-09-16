import { App, Plugin } from 'vue'
import step from './src/step.vue'
import steps from './src/steps.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MStep: Plugin = {
    install(app: App) {
        app.component('MYStep', step)
    }
}

const MSteps: Plugin = {
    install(app: App) {
        app.component('MYSteps', steps)
    }
}
export const MYStep = withInstall(step)
export const MYSteps = withInstall(steps)
export { step, steps, MStep, MSteps }
