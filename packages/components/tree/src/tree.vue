<template>
  <div class="my-tree" style="max-width: 600px">
    <TreeNode
      v-for="node in data"
      :key="node[internalProps.label]?.toString() || node.id?.toString() || Math.random().toString()"
      :node="node"
      :treeProps="internalProps"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import TreeNode from './treeNode.vue'

interface TreeProps {
  children: string
  label: string
}

interface TreeNode {
  [key: string]: unknown
  id?: string | number
}

const props = defineProps<{
  data: TreeNode[]
  props: TreeProps
}>()

const emits = defineEmits<{
  (e: 'node-click', node: TreeNode): void
}>()

const internalProps = computed(() => props.props)

const handleNodeClick = (node: TreeNode) => {
  emits('node-click', node)
}
</script>