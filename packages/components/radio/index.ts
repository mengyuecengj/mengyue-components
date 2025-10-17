import type { App, Plugin } from 'vue'
import radioGroup from './src/radio-group.vue'
import type { radioGroupProps } from './src/radio-group'
import radio from './src/radio.vue'
import type { radioProps } from './src/radio'
import radioButton from './src/radio-button.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MRadio: Plugin = {
    install(app: App) {
        app.component('MYRadio', radio);
    }
}

const MRadioGroup: Plugin = {
    install(app: App) {
        app.component('MYRadio-group', radioGroup);
    }
}

const MRadioButton: Plugin = {
    install(app: App) {
        app.component('MYRadioButton', radioButton);
    }
}

export const MYRadio = withInstall(radio);
export const MYRadioGroup = withInstall(radioGroup);
export const MYRadioButton = withInstall(radioButton);
export type { radioProps, radioGroupProps }
export { radio, MRadio, radioGroup, MRadioGroup, MRadioButton}
