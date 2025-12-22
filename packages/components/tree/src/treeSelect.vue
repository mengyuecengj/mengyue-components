<template>
  <div class="my-tree-select" :class="[selectClass, { disabled }]" :style="selectStyle" ref="selectRef">
    <!-- 输入触发器 -->
    <div v-if="!disabled" class="my-tree-select__input" :class="{ [`size-${size}`]: true, loading }"
      @click="toggleDropdown" tabindex="0">
      <template v-if="multiple && selectedLabels.length > 0">
        <span v-for="label in selectedLabels" :key="label" class="select-tag">
          {{ label }}
          <span v-if="clearable" class="select-tag__close" @click.stop="removeTag(label)">×</span>
        </span>
        <span v-if="selectedLabels.length < 2" class="placeholder selected">{{ placeholder }}</span>
      </template>
      <span v-else class="placeholder" :class="{ selected: !!selectedValue }">
        {{ selectedLabels.length ? selectedLabels.join(', ') : placeholder }}
      </span>
      
      <!-- 支持多种箭头类型 -->
      <template v-if="arrowType === 'css'" class="arrow-css">
        <span class="arrow-css" :class="{ rotated: dropdownVisible }"></span>
      </template>
      <template v-else>
        <span class="arrow" :class="{ rotated: dropdownVisible }">▼</span>
      </template>
      
      <span v-if="clearable && selectedValue && !multiple" class="clear-btn" @click.stop="clearAll">×</span>
      <div v-if="loading" class="loading-spinner"></div>
    </div>
    <div v-else class="my-tree-select__input disabled size-{{ size }}">{{ placeholder }}</div>

    <!-- 下拉层 -->
    <div v-show="dropdownVisible" ref="dropdownRef" class="my-tree-select__dropdown" :class="popperClass"
      :style="{ width: inputWidth + 'px' }">
      <input v-if="filterable" v-model="filterText" class="search-input" :placeholder="placeholder" :disabled="disabled"
        @input="handleFilter(($event.target as HTMLInputElement).value)" />
      <div class="tree-container">
        <TreeNode v-for="node in filteredData" :key="getNodeKey(node)" :node="node" :treeProps="internalProps"
          :defaultExpanded="defaultExpanded" :selectedKeys="selectedKeys" :checkedKeys="checkedKeys"
          :showCheckbox="showCheckbox" :checkStrictly="checkStrictly" :disabled="disabled" @node-click="handleNodeClick"
          @check-change="handleCheckChange" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import TreeNode from './treeNode.vue'
import type { TreeNodes, TreeNodesArray } from './type'
import '../style/treeSelect.scss'
import { treeSelectProps } from './treeSelect'
import { useStyleComputed } from '../../../hooks/useStyleComputed'

// const extendedTreeSelectProps = {
//   ...treeSelectProps,
//   arrowType: {
//     type: String,
//     default: 'unicode',
//     validator: (value: string) => ['unicode', 'css'].includes(value)
//   }
// }

const props = defineProps(treeSelectProps)
const emit = defineEmits<{
  'update:modelValue': [value: any]
  change: [value: any]
  clear: []
  'check-change': [data: { checkedKeys: (string | number)[]; checkedNodes: TreeNodes[] }]
}>()

// 状态
const selectRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const dropdownVisible = ref(false)
const filterText = ref('')
const inputWidth = ref(200)
const selectedKeys = ref<(string | number)[]>([])
const checkedKeys = ref<(string | number)[]>(Array.isArray(props.defaultCheckedKeys) ? props.defaultCheckedKeys : [])

// 计算
const internalProps = computed(() => props.props)
const nodeValueKey = computed(() => props.props.value || 'id')
const selectClass = computed(() => props.class || '')

// 处理样式，确保 height 生效
const selectStyle = useStyleComputed(props, {
  propToStyleMap: {
    width: 'width',
    height: 'height',
    textColor: '--tree-text-color',
    backgroundColor: '--tree-bg-color',
    activeColor: '--tree-active-color',
    inputHeight: '--tree-input-height',
    arrowColor: '--tree-arrow-color'
  }
})

const selectedValue = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  }
})

const selectedLabels = computed(() => {
  if (!props.data.length) return []
  return selectedKeys.value.map(key => {
    const node = findNodeByKey(props.data, key, nodeValueKey.value)
    return node ? node[props.props.label] as string : ''
  }).filter(Boolean)
})

const filteredData = computed(() => {
  if (!filterText.value) return props.data
  const filterNodes = (nodes: TreeNodesArray): TreeNodesArray => {
    return nodes.filter(node => {
      const label = node[props.props.label] as string
      const match = label.toLowerCase().includes(filterText.value.toLowerCase())
      if (match) return true
      const children = node[props.props.children] as TreeNodesArray || []
      if (children.length && filterNodes(children).length > 0) return true
      return false
    }).map(node => ({
      ...node,
      [props.props.children]: filterNodes(node[props.props.children] as TreeNodesArray || [])
    }))
  }
  return filterNodes(props.data)
})

// 方法
const toggleDropdown = async () => {
  if (props.disabled) return
  dropdownVisible.value = !dropdownVisible.value
  if (dropdownVisible.value) {
    await nextTick()
    inputWidth.value = selectRef.value?.offsetWidth || 200
  }
}

const handleFilter = (value: string) => { filterText.value = value }

const handleNodeClick = (node: TreeNodes) => {
  const key = node[nodeValueKey.value] as string | number
  if (props.showCheckbox) return
  if (props.multiple) {
    const idx = selectedKeys.value.indexOf(key)
    idx > -1 ? selectedKeys.value.splice(idx, 1) : selectedKeys.value.push(key)
  } else {
    selectedKeys.value = [key]
    dropdownVisible.value = false
  }
  selectedValue.value = props.multiple ? selectedKeys.value : (selectedKeys.value[0] || null)
}

const handleCheckChange = (newKeys: (string | number)[]) => {
  checkedKeys.value = newKeys
  const checkedNodes = newKeys.map(key => findNodeByKey(props.data, key, nodeValueKey.value)).filter(Boolean) as TreeNodes[]
  emit('check-change', { checkedKeys: newKeys, checkedNodes })
  if (props.validateEvent) selectedValue.value = props.multiple ? newKeys : (newKeys.length ? newKeys[0] : null)
}

const removeTag = (label: string) => {
  const key = selectedLabels.value.findIndex(l => l === label)
  if (key > -1) {
    selectedKeys.value.splice(key, 1)
    selectedValue.value = props.multiple ? selectedKeys.value : null
  }
}

const clearAll = () => {
  selectedKeys.value = []
  checkedKeys.value = []
  selectedValue.value = props.multiple ? [] : null
  emit('clear')
  dropdownVisible.value = false
}

const findNodeByKey = (nodes: TreeNodesArray, key: string | number, valueKey: string): TreeNodes | undefined => {
  for (const node of nodes) {
    if (node[valueKey] === key) return node
    const children = node[props.props.children] as TreeNodesArray || []
    const found = findNodeByKey(children, key, valueKey)
    if (found) return found
  }
  return undefined
}

const getNodeKey = (node: TreeNodes): string => (node[internalProps.value.value || 'id'] as string | number)?.toString() || Math.random().toString()

const handleClickOutside = (e: MouseEvent) => {
  if (!selectRef.value?.contains(e.target as Node) && !dropdownRef.value?.contains(e.target as Node)) {
    dropdownVisible.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))

watch(() => props.modelValue, (newVal) => {
  if (props.showCheckbox) checkedKeys.value = Array.isArray(newVal) ? newVal : (newVal ? [newVal] : [])
  else selectedKeys.value = Array.isArray(newVal) ? newVal : (newVal ? [newVal] : [])
}, { immediate: true })
</script>