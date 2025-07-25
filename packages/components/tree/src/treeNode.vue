<template>
  <div class="tree-node">
    <div class="node-label" @click="onNodeClick">
      <!-- 折叠图标 -->
      <span
        v-if="hasChildren"
        class="toggle-icon"
        @click.stop="toggle"
        :title="isExpanded ? '折叠' : '展开'"
      >
        {{ isExpanded ? '−' : '+' }}
      </span>
      <span class="node-text">
        {{ node[treeProps.label] }}
      </span>
    </div>

    <!-- 子节点 -->
    <div v-if="hasChildren && isExpanded" class="node-children">
      <TreeNode
        v-for="child in node[treeProps.children]"
        :key="child[treeProps.label] || child.id || Math.random()"
        :node="child"
        :treeProps="treeProps"
        @node-click="$emit('node-click', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed, ref } from 'vue'

interface TreeProps {
  children: string
  label: string
}

interface TreeNode {
  [key: string]: any
  label: string
  children?: TreeNode[]
  id?: string | number
}

const props = defineProps<{
  node: TreeNode
  treeProps: TreeProps
}>()

const emits = defineEmits<{
  (e: 'node-click', node: TreeNode): void
}>()

const isExpanded = ref(true)

const toggle = () => {
  isExpanded.value = !isExpanded.value
}

const hasChildren = computed(() => {
  return (
    props.node &&
    props.node[props.treeProps.children] &&
    Array.isArray(props.node[props.treeProps.children]) &&
    props.node[props.treeProps.children].length > 0
  )
})

const onNodeClick = () => {
  emits('node-click', props.node)
}
</script>

<style scoped>
.tree-node {
  margin-left: 18px;
  font-size: 14px;
  color: #ddd;
}

.node-label {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  border-radius: 4px;
  background-color: #2f2f2f;
  transition: background-color 0.2s;
  cursor: pointer;
}

.node-label:hover {
  background-color: #3d3d3d;
}

.toggle-icon {
  display: inline-block;
  width: 18px;
  font-weight: bold;
  color: #aaa;
  text-align: center;
  cursor: pointer;
  margin-right: 6px;
  user-select: none;
}

.node-text {
  flex: 1;
  color: #f0f0f0;
}

.node-children {
  margin-top: 4px;
  border-left: 1px dashed #444;
  padding-left: 10px;
}
</style>
