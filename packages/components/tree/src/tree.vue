<template>
  <div class="my-tree" style="max-width: 600px">
    <TreeNode v-for="node in data"
      :key="getNodeKey(node)" :node="node"
      :treeProps="internalProps" 
      :defaultExpanded="defaultExpanded || defaultExpandedKeys?.includes(getNodeKey(node))" 
      :default-expanded-keys="defaultExpandedKeys"
      @node-click="handleNodeClick" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import TreeNode from './treeNode.vue'
import type { TreeProps, TreeNodes, ExpandedKeys } from './type'

const props = defineProps<{
  data: TreeNodes[]
  props: TreeProps
  defaultExpanded?: boolean
  defaultExpandedKeys?: ExpandedKeys
}>()

const emits = defineEmits<{
  (e: 'node-click', node: TreeNodes): void
}>()

const internalProps = computed(() => props.props)

const handleNodeClick = (node: TreeNodes) => {
  emits('node-click', node)
}

const getNodeKey = (node: TreeNodes): string => {
  return (node[internalProps.value.label] as string | number)?.toString() || (node.id as string)?.toString() || Math.random().toString()
}
</script>