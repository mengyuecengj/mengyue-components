<template>
  <div class="my-tree" :style="treeStyle">
    <TreeNode 
      v-for="node in data"
      :key="getNodeKey(node)" 
      :node="node"
      :treeProps="internalProps" 
      :defaultExpanded="defaultExpanded || defaultExpandedKeys?.includes(getNodeKey(node))" 
      :showCheckbox="showCheckbox"
      :showArrow="showArrow"
      :checkedKeys="checkedKeys"
      :checkStrictly="checkStrictly"
      @node-click="handleNodeClick"
      @check-change="handleCheckChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import TreeNode from './treeNode.vue'
import type { TreeProps, TreeNodes, ExpandedKeys } from './type'
import '../style/tree.scss'

const props = defineProps<{
  data: TreeNodes[]
  props: TreeProps
  defaultExpanded?: boolean
  defaultExpandedKeys?: ExpandedKeys
  showCheckbox?: boolean
  showArrow?: boolean
  checkedKeys?: (string | number)[]
  checkStrictly?: boolean
  width?: string
  height?: string
}>()

const emits = defineEmits<{
  (e: 'node-click', node: TreeNodes): void
  (e: 'check-change', keys: (string | number)[]): void
}>()

const internalProps = computed(() => props.props)

const treeStyle = computed(() => ({
  width: props.width || '100%',
  height: props.height || 'auto',
  maxWidth: props.width || '600px'
}))

const handleNodeClick = (node: TreeNodes) => {
  emits('node-click', node)
}

const handleCheckChange = (keys: (string | number)[]) => {
  emits('check-change', keys)
}

const getNodeKey = (node: TreeNodes): string => {
  return (node[internalProps.value.value || 'id'] as string | number)?.toString() || Math.random().toString()
}
</script>
