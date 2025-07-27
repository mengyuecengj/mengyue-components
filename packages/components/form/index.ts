import { App, Plugin } from 'vue'
import form from './src/form.vue'
import { formProps } from './src/form'
import formItem from './src/formItem.vue'
import { formItemProps } from './src/formItem'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MForm: Plugin = {
    install(app: App) {
        app.component('MYForm', form)
    },
}

const MFormItem: Plugin = {
    install(app: App) {
        app.component('MYForm-item', formItem)
    }
}
export const MYForm = withInstall(form)
export const MYFormItem = withInstall(formItem)
export { form, formProps, MForm, formItem, formItemProps, MFormItem }