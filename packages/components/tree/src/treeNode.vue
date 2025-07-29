<script lang="ts" setup>
import { ref, computed } from 'vue'
import TreeNode from './treeNode.vue'

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

<template>
  <div class="my-tree-node">
    <div
      class="my-tree-node__content"
      :class="{ expanded, leaf: isLeaf }"
      @click="toggle"
    >
      <span v-if="!isLeaf" class="arrow">{{ expanded ? '▼' : '▶' }}</span>
      <span class="label">{{ node[treeProps.label] }}</span>
    </div>
    <div v-if="expanded && !isLeaf" class="my-tree-node__children">
      <TreeNode
        v-for="child in (node[treeProps.children] as TreeNode[])"
        :key="(child[treeProps.label] as string | number) || child.id || Math.random().toString()"
        :node="child"
        :treeProps="treeProps"
      />
    </div>
  </div>
</template>

<style scoped>
.my-tree-node {
  margin-left: 14px;
}

.my-tree-node__content {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}

.my-tree-node__content:hover {
  background-color: #2c2c2c;
}

.my-tree-node__content.expanded {
  background-color: #3a3a3a;
}

.my-tree-node__content.leaf:hover {
  background-color: #333;
}

.arrow {
  margin-right: 6px;
  color: #bbb;
  font-size: 12px;
  width: 16px;
  display: inline-block;
  text-align: center;
}

.label {
  color: #eaeaea;
}

.my-tree-node__children {
  margin-left: 12px;
  border-left: 1px dashed #555;
  padding-left: 8px;
}
</style>
