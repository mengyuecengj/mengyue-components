import type { Plugin, App } from 'vue'
import input from './src/input.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'
import type { inputProps } from './src/input'

export const MYInput = withInstall(input)

const components = [MYInput]

const InputsPlugin: Plugin = {
    install(app: App) {
        components.forEach(comp => {
            app.use(comp)
        })
    }
}

export default InputsPlugin
export type { inputProps }