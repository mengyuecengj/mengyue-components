import type { App, Plugin } from 'vue'
import card from './src/card.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MCard: Plugin = {
    install(app: App) {
        app.component('MYCard', card)
    }
}

export const MYCard = withInstall(card)
export { card, MCard }
