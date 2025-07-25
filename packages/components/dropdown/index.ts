import { App, Plugin } from 'vue'
import dropdown from './src/dropdown.vue'
import dropdownMenu from './src/dropdownMenu.vue'
import dropdownItem from './src/dropdownItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MDropdown: Plugin = {
    install(app: App) {
        app.component('MYDropdown', dropdown)
    },
}

const MDropdownMenu: Plugin = {
    install(app: App) {
        app.component('MYDropdown-menu', dropdownMenu)
    }
}

const MDropdownItem: Plugin = {
    install(app: App) {
        app.component('MYDropdown-item', dropdownItem)
    },
}

export const MYDropdown = withInstall(dropdown)
export const MYDropdownMenu = withInstall(dropdownMenu)
export const MYDropdownItem = withInstall(dropdownItem)
export { dropdown, dropdownMenu, dropdownItem, MDropdown, MDropdownMenu, MDropdownItem }
