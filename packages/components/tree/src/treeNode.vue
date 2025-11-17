<template>
  <div class="my-tree-node">
    <div class="my-tree-node__content" :class="{ expanded, leaf: isLeaf, selected: isSelected }"
      @click="handleContentClick">
      <!-- 展开箭头 - 根据 showArrow 控制显示 -->
      <span 
        v-if="showArrow && !isLeaf" 
        class="arrow" 
        :class="{ expanded }" 
        @click.stop="toggle"
      >
        {{ expanded ? '▼' : '▶' }}
      </span>
      
      <!-- 占位符 - 当不显示箭头时用于保持对齐 -->
      <span 
        v-else-if="showCheckbox || !isLeaf" 
        class="arrow-placeholder"
      ></span>
      
      <!-- 复选框 - 当 showCheckbox 为 true 时显示 -->
      <MYCheckbox 
        v-if="showCheckbox" 
        :modelValue="isChecked" 
        :indeterminate="isIndeterminate"
        :disabled="isDisabled" 
        value="nodeKey"
        @update:modelValue="handleCheck"
        class="tree-checkbox"
      />
      
      <!-- 节点标签 -->
      <span class="label" @click.stop="handleLabelClick">
        {{ node[treeProps.label] }}
      </span>
    </div>

    <!-- 子节点 -->
    <div v-if="expanded && !isLeaf" class="my-tree-node__children">
      <TreeNode 
        v-for="child in children" 
        :key="getNodeKey(child)" 
        :node="child"
        :treeProps="treeProps" 
        :showCheckbox="showCheckbox"
        :showArrow="showArrow"
        :checkedKeys="checkedKeys"
        :checkStrictly="checkStrictly"
        @node-click="$emit('node-click', $event)"
        @check-change="$emit('check-change', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { MYCheckbox } from '../../checkbox'
import type { TreeProps, TreeNodes, TreeNodesArray } from './type'
import '../style/treeNode.scss'

const props = defineProps<{
  node: TreeNodes
  treeProps: TreeProps
  defaultExpanded?: boolean
  selectedKeys?: (string | number)[]
  checkedKeys?: (string | number)[]
  showCheckbox?: boolean
  showArrow?: boolean
  checkStrictly?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'node-click', node: TreeNodes): void
  (e: 'check-change', keys: (string | number)[]): void
}>()

const expanded = ref(props.defaultExpanded || false)

// 计算属性
const nodeValueKey = computed(() => props.treeProps.value || 'id')
const nodeKey = computed(() => props.node[nodeValueKey.value] as string | number)
const children = computed(() => {
  return (props.node[props.treeProps.children] as TreeNodesArray) || []
})
const isLeaf = computed(() => children.value.length === 0)

const isSelected = computed(() => {
  const nodeKey = props.node[nodeValueKey.value]
  return props.selectedKeys?.includes(nodeKey as string | number)
})

const isDisabled = computed(() => props.disabled || false)

const isChecked = computed(() => {
  return props.checkedKeys?.includes(nodeKey.value) || false
})

const isIndeterminate = computed(() => {
  if (props.checkStrictly || isLeaf.value) return false

  const checkedChildren = children.value.filter(child =>
    props.checkedKeys?.includes(child[nodeValueKey.value] as string | number)
  )

  // 如果所有子节点都被选中，则父节点应该是全选状态，而不是部分选中
  if (checkedChildren.length === children.value.length) return false

  // 如果有部分子节点被选中，则父节点是部分选中状态
  return checkedChildren.length > 0
})

// 方法
const handleContentClick = () => {
  // 在复选框模式下，点击内容区域不做任何事
  if (props.showCheckbox) {
    return
  }
  
  // 在非复选框模式下，点击内容区域切换展开状态（如果是非叶子节点）
  if (!isLeaf.value) {
    toggle()
  }
}

const handleLabelClick = (event: Event) => {
  // 阻止事件冒泡，避免触发 handleContentClick
  event.stopPropagation()
  
  // 在纯复选框模式下（没有箭头），点击标签应该能够展开/折叠节点
  if (props.showCheckbox && !props.showArrow && !isLeaf.value) {
    toggle()
  } else {
    // 其他情况下触发节点点击事件
    emit('node-click', props.node)
  }
}

const toggle = () => {
  if (!isLeaf.value) {
    expanded.value = !expanded.value
  }
}

const handleCheck = (checked: boolean) => {
  const nodeKey = props.node[nodeValueKey.value] as string | number
  let newCheckedKeys = [...(props.checkedKeys || [])]

  if (checked) {
    // 添加当前节点
    if (!newCheckedKeys.includes(nodeKey)) {
      newCheckedKeys.push(nodeKey)
    }

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
      addChildKeys(children.value)
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
      removeChildKeys(children.value)
    }
  }

  // 发送 check-change 事件，通知父组件更新 checkedKeys
  emit('check-change', newCheckedKeys)
}

const getNodeKey = (child: TreeNodes): string => {
  return (child[props.treeProps.label] as string | number)?.toString() || 
         (child.id as string)?.toString() || 
         Math.random().toString()
}
</script>
