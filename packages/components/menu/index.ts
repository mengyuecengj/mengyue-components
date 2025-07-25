import { App, Plugin } from 'vue'
import menu from './src/menu.vue'
import menusubMenu from './src/menusubMenu.vue'
import menuItem from './src/menuItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MMenu: Plugin = {
    install(app: App) {
        app.component('MYMenu', menu);
    }
}

const MMenuSubMenu: Plugin = {
    install(app: App) {
        app.component('MYMenu-submenu', menusubMenu);
    }
}

const MMenuItem: Plugin = {
    install(app: App) {
        app.component('MYMenu-item', menuItem);
    }
}

export const MYMenu = withInstall(menu);
export const MYMenuSubMenu = withInstall(menusubMenu);
export const MYMenuItem = withInstall(menuItem);
export { menu, menusubMenu, menuItem, MMenu, MMenuSubMenu, MMenuItem }
