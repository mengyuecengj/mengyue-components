import { App, Plugin } from 'vue'
import transfer from './src/transfer.vue'
import transferPanel from './src/transferPanel.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MTransfer: Plugin = {
    install(app: App) {
        app.component('MYTransfer', transfer)
    }
}

const MTransferPanel: Plugin = {
    install(app: App) {
        app.component('MYTransferPanel', transferPanel)
    }
}

export const MYTransfer = withInstall(transfer)
export const MYTransferPanel = withInstall(transferPanel)
export { transfer, transferPanel, MTransfer, MTransferPanel }
