<template>
  <div class="my-tree-node">
    <div class="my-tree-node__content" :class="{ expanded, leaf: isLeaf }" @click="toggle">
      <span v-if="!isLeaf" class="arrow">{{ expanded ? '▼' : '▶' }}</span>
      <span class="label">{{ node[treeProps.label] }}</span>
    </div>
    <div v-if="expanded && !isLeaf" class="my-tree-node__children">
      <TreeNode v-for="child in (node[treeProps.children] as TreeNode[])"
        :key="(child[treeProps.label] as string | number) || child.id || Math.random().toString()" :node="child"
        :treeProps="treeProps" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import TreeNode from './treeNode.vue'
import '../style/treeNode.scss'

// 定义 TreeNode 接口
interface TreeNode {
  [key: string]: unknown
  id?: string | number
}

const props = defineProps<{
  node: TreeNode
  treeProps: {
    label: string
    children: string
  }
}>()

const expanded = ref(false)
const toggle = () => {
  if (!isLeaf.value) expanded.value = !expanded.value
}
const isLeaf = computed(() => {
  const children = props.node[props.treeProps.children]
  return !children || (Array.isArray(children) && children.length === 0)
})
</script>