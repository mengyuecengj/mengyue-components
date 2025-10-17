<template>
  <div class="my-tree-node">
    <div class="my-tree-node__content" :class="{ expanded, leaf: isLeaf, selected: isSelected }"
      @click="handleContentClick($event)">
      <MYCheckbox v-if="showCheckbox" :modelValue="isChecked" :value="node[nodeValueKey] as string | number"
        :disabled="isDisabled" :indeterminate="isIndeterminate" @update:modelValue="handleCheck"
        class="tree-checkbox" />
      <!-- 箭头独立处理，阻止冒泡 -->
      <span v-if="!isLeaf && !showCheckbox" class="arrow" @click.stop="toggle">{{ expanded ? '▼' : '▶' }}</span>
      <!-- 标签独立处理，阻止冒泡用于只选择不触发展开逻辑 -->
      <span class="label" @click.stop="handleLabelClick">{{ node[treeProps.label] }}</span>
    </div>

    <div v-if="expanded && !isLeaf" class="my-tree-node__children">
      <TreeNode v-for="child in (node[treeProps.children] as TreeNodesArray)" :key="getNodeKey(child)" :node="child"
        :treeProps="treeProps" :defaultExpanded="defaultExpanded" :selectedKeys="selectedKeys"
        :checkedKeys="checkedKeys" :showCheckbox="showCheckbox" :checkStrictly="checkStrictly" :disabled="disabled"
        @node-click="emitNodeClick" @check-change="handleChildCheckChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { MYCheckbox } from '../../checkbox'
import type { TreeProps, TreeNodes, TreeNodesArray } from './type'

const props = defineProps<{
  node: TreeNodes
  treeProps: TreeProps
  defaultExpanded?: boolean
  selectedKeys?: (string | number)[]
  checkedKeys?: (string | number)[]
  showCheckbox?: boolean
  checkStrictly?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'node-click', node: TreeNodes): void
  (e: 'check-change', keys: (string | number)[]): void
}>()

const expanded = ref(props.defaultExpanded || false)

const handleContentClick = (e: MouseEvent) => {
  // 如果点在 checkbox 上，什么也不做（checkbox 自己会处理）
  const target = e.target as HTMLElement
  if (target.closest('.tree-checkbox') || target.closest('.my-checkbox__input')) {
    return
  }

  // 如果点在箭头或标签上（这些节点有 .stop），handleContentClick 一般不会触发，
  // 但做个保险判断：如果是箭头或标签则直接返回
  if (target.closest('.arrow') || target.closest('.label')) {
    return
  }

  // 点击内容其它部分：如果不是叶子，则切换展开状态
  if (!isLeaf.value) toggle()

  // 如果不是复选框模式，点击内容也视为选中（label 的点击已被 label 单独处理）
  if (!props.showCheckbox) {
    emitNodeClick(props.node)
  }
}

const handleLabelClick = () => {
  // 仅当不是复选框模式才触发 node-click
  if (!props.showCheckbox) {
    emitNodeClick(props.node)
  }
}

const toggle = () => {
  if (!isLeaf.value) expanded.value = !expanded.value
}

const emitNodeClick = (node: TreeNodes) => {
  emit('node-click', node)
}

// checkbox 逻辑
const nodeValueKey = computed(() => props.treeProps.value || 'id')
const isLeaf = computed(() => {
  const children = props.node[props.treeProps.children]
  return !children || (Array.isArray(children) && (children as TreeNodesArray).length === 0)
})

const isSelected = computed(() => {
  const nodeKey = props.node[nodeValueKey.value]
  return props.selectedKeys?.includes(nodeKey as string | number)
})

const isDisabled = computed(() => props.disabled || false)

const isChecked = computed(() => {
  const nodeKey = props.node[nodeValueKey.value]
  return props.checkedKeys?.includes(nodeKey as string | number) || false
})

const isIndeterminate = computed(() => {
  if (props.checkStrictly || isLeaf.value) return false

  const children = props.node[props.treeProps.children] as TreeNodesArray || []
  if (children.length === 0) return false

  const checkedChildren = children.filter(child =>
    props.checkedKeys?.includes(child[nodeValueKey.value] as string | number)
  )

  // 如果所有子节点都被选中，则父节点应该是全选状态，而不是部分选中
  if (checkedChildren.length === children.length) return false

  // 如果有部分子节点被选中，则父节点是部分选中状态
  return checkedChildren.length > 0
})

const handleCheck = (checked: boolean) => {
  const nodeKey = props.node[nodeValueKey.value] as string | number
  let newCheckedKeys = [...(props.checkedKeys || [])]

  if (checked) {
    // 添加当前节点
    if (!newCheckedKeys.includes(nodeKey)) newCheckedKeys.push(nodeKey)

    // 如果不是严格模式且不是叶子节点，需要级联选择子节点
    if (!props.checkStrictly && !isLeaf.value) {
      const addChildKeys = (nodes: TreeNodesArray) => {
        nodes.forEach(child => {
          const childKey = child[nodeValueKey.value] as string | number
          if (!newCheckedKeys.includes(childKey)) {
            newCheckedKeys.push(childKey)
          }
          const childNodes = child[props.treeProps.children] as TreeNodesArray || []
          if (childNodes.length > 0) {
            addChildKeys(childNodes)
          }
        })
      }

      const children = props.node[props.treeProps.children] as TreeNodesArray || []
      addChildKeys(children)
    }
  } else {
    // 取消选中当前节点
    newCheckedKeys = newCheckedKeys.filter(k => k !== nodeKey)

    // 如果不是严格模式且不是叶子节点，需要级联取消子节点
    if (!props.checkStrictly && !isLeaf.value) {
      const removeChildKeys = (nodes: TreeNodesArray) => {
        nodes.forEach(child => {
          const childKey = child[nodeValueKey.value] as string | number
          newCheckedKeys = newCheckedKeys.filter(k => k !== childKey)
          const childNodes = child[props.treeProps.children] as TreeNodesArray || []
          if (childNodes.length > 0) {
            removeChildKeys(childNodes)
          }
        })
      }

      const children = props.node[props.treeProps.children] as TreeNodesArray || []
      removeChildKeys(children)
    }
  }

  // 发送 check-change 事件，通知父组件更新 checkedKeys
  emit('check-change', newCheckedKeys)
}

const handleChildCheckChange = (newKeys: (string | number)[]) => {
  emit('check-change', newKeys)
}

// 级联辅助函数
// function cascadeCheck(
//   nodes: TreeNodesArray,
//   checked: boolean,
//   keys: (string | number)[],
//   valueKey: string
// ): (string | number)[] {
//   return nodes.reduce((acc, node) => {
//     const key = node[valueKey] as string | number
//     if (checked) {
//       if (!acc.includes(key)) acc.push(key)
//     } else {
//       acc = acc.filter(k => k !== key)
//     }
//     const children = node[props.treeProps.children] as TreeNodesArray || []
//     return cascadeCheck(children, checked, acc, valueKey)
//   }, keys)
// }

const getNodeKey = (child: TreeNodes): string => {
  return (child[props.treeProps.label] as string | number)?.toString() || child.id?.toString() || Math.random().toString()
}
</script>

<style lang="scss" scoped>
.my-tree-node {
  margin-left: 14px;

  &__content {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background-color: #2c2c2c;
    }

    &.leaf:hover {
      background-color: #333;
    }

    &.selected {
      background-color: #409eff !important;
      color: white;
    }
  }

  .arrow {
    margin-right: 6px;
    color: #bbb;
    font-size: 8px;
    width: 16px;
    display: inline-block;
    text-align: center;
  }

  .label {
    color: #eaeaea;
  }

  &__children {
    margin-left: 12px;
    border-left: 1px dashed #555;
    padding-left: 8px;
  }

  .tree-checkbox {
    margin-right: 8px;
  }

  .my-checkbox__input {
    margin-right: 6px;
  }
}
</style>