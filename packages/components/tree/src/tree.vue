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
import { TreeProps, TreeNodes } from './type'

const props = defineProps<{
  data: TreeNodes[]
  props: TreeProps
}>()

const emits = defineEmits<{
  (e: 'node-click', node: TreeNodes): void
}>()

const internalProps = computed(() => props.props)

const handleNodeClick = (node: TreeNodes) => {
  emits('node-click', node)
}
</script>