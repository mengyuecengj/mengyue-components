import type { App, Plugin } from 'vue'
import tree from './src/tree.vue'
import treeNode from './src/treeNode.vue'
import treeSelect from './src/treeSelect.vue'
import { withInstall } from '../../theme-chalk/utils/withInstall'

const MTree: Plugin = {
    install(app: App) {
        app.component('MYTree', tree)
    }
}

const MTreeNode: Plugin = {
    install(app: App) {
        app.component('MYtree-node', treeNode)
    }
}

const MTreeSelect: Plugin = {
    install(app: App) {
        app.component('MYTree-select', treeSelect)
    }
}

export const MYTree: Plugin = withInstall(tree)
export const MYTreeNode: Plugin = withInstall(treeNode)
export const MYTreeSelect: Plugin = withInstall(treeSelect)
export { tree, MTree, treeNode, MTreeNode, MTreeSelect }
