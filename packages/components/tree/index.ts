import { App, Plugin } from 'vue'
import tree from './src/tree.vue'
import treeNode from './src/treeNode.vue'
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

export const MYTree = withInstall(tree)
export const MYTreeNode = withInstall(treeNode)
export { tree, MTree, treeNode, MTreeNode }
