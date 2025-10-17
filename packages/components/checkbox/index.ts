import type { App, Plugin } from 'vue'
import checkbox from './src/checkbox.vue'
import { checkboxProps } from './src/checkbox'
import { withInstall } from '../../theme-chalk/utils/withInstall'
import checkboxGroup from './src/checkbox-group.vue'
import { checkboxGroupProps } from './src/checkbox-group'

const MCheckbox: Plugin = {
    install(app: App) {
        app.component('MYCheckbox', checkbox)
    }
}

const MCheckboxGroup: Plugin = {
    install(app: App) {
        app.component('MYCheckbox-group', checkboxGroup)
    }
}

export const MYCheckbox = withInstall(checkbox)
export const MYCheckboxGroup = withInstall(checkboxGroup)
export { checkbox, MCheckbox, checkboxProps, checkboxGroup, MCheckboxGroup, checkboxGroupProps }
