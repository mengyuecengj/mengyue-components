import type { App, Plugin } from 'vue';
import skeleton from './src/skeleton.vue';
import skeletonItem from './src/skeletonItem.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MSkeleton: Plugin = {
    install(app: App) {
        app.component('MYSkeleton', skeleton);
    },
}

const MSkeletonItem: Plugin = {
    install(app: App) {
        app.component('MYSkeleton-item', skeletonItem)
    }
}

export const MYSkeleton = withInstall(skeleton)
export const MYSkeletonItem = withInstall(skeletonItem)
export { skeleton, MSkeleton, skeletonItem, MSkeletonItem }