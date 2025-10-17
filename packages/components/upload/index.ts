import type { App, Plugin } from 'vue'
import upload from './src/upload.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MUpload: Plugin = {
    install(app: App) {
        app.component('MYTree', upload)
    }
}

export const MYUpload: Plugin = withInstall(upload)
export { upload, MUpload }
