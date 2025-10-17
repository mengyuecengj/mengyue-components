import type { App, Plugin } from 'vue'
// import form from './src/form.vue'
// import { formProps } from './src/form'
import inputNumber from './src/inputNumber.vue'
// import { formItemProps } from './src/formItem'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MInputNumber: Plugin = {
    install(app: App) {
        app.component('MYInputNumber', MInputNumber)
    },
}

export const MYInputNumber = withInstall(inputNumber)
