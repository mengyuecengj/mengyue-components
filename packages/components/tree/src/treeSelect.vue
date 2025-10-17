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
      <span class="arrow" :class="{ rotated: dropdownVisible }">▼</span>
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
          :default-expanded="defaultExpanded" :default-expanded-keys="defaultExpandedKeys" :selectedKeys="selectedKeys"
          :checked-keys="checkedKeys" :showCheckbox="showCheckbox" :checkStrictly="checkStrictly" :disabled="disabled"
          @node-click="handleNodeClick" @check-change="handleCheckChange" />
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

const props = defineProps(treeSelectProps)
const emit = defineEmits<{
  'update:modelValue': [value: typeof props.modelValue]
  change: [value: typeof props.modelValue]
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
const checkedKeys = ref<(string | number)[]>(props.defaultCheckedKeys)

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
    inputHeight: '--tree-input-height'
  },
  // getValue: (prop, val) => {
  //   if (prop === 'height' || prop === 'inputHeight') {
  //     if (typeof val === 'number') return val + 'px'
  //   }
  //   return val
  // }
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

<style lang="scss" scoped>
.my-tree-select {
  position: relative;
  display: inline-block;
  font-size: 14px;
  width: 100%;

  &.disabled { opacity: 0.7; cursor: not-allowed; }

  &__input {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: var(--tree-input-height, auto) !important;
    min-height: 0;
    line-height: normal;
    padding: 1px 30px 1px 10px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: var(--tree-bg-color, #fff);
    color: var(--tree-text-color, #606266);
    cursor: pointer;
    position: relative;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover { border-color: #c0c4cc; }
    &:focus-within { border-color: var(--tree-active-color, #409eff); outline: 0; box-shadow: 0 0 0 2px rgba(64,158,255,0.2); }

    &.size-small { font-size: 12px; .select-tag { height: 20px; line-height: 18px; padding: 0 6px; font-size: 12px; } }
    &.size-large { font-size: 16px; .select-tag { height: 26px; line-height: 24px; padding: 0 10px; font-size: 14px; } }

    &.loading .arrow { display: none; }

    .placeholder { color: #c0c4cc; flex: 1; &.selected { color: var(--tree-text-color, #606266); } }

    .select-tag { display: inline-flex; align-items: center; height: 24px; line-height: 22px; padding: 0 8px; margin: 2px; background-color: #f0f2f5; border-radius: 4px; font-size: 12px; color: #606266;
      &__close { margin-left: 4px; color: #909399; cursor: pointer; font-size: 14px; &:hover { color: #606266; } }
    }

    .arrow { position: absolute; right: 10px; transition: transform 0.3s; color: #c0c4cc; font-size: 12px; &.rotated { transform: rotate(180deg); } }
    .clear-btn { position: absolute; right: 25px; color: #c0c4cc; font-size: 14px; cursor: pointer; &:hover { color: #909399; } }
    .loading-spinner { position: absolute; right: 25px; width: 14px; height: 14px; border: 2px solid #f3f3f3; border-top: 2px solid var(--tree-active-color, #409eff); border-radius: 50%; animation: spin 1s linear infinite; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  }

  &__dropdown {
    position: absolute; top: 100%; left: 0; z-index: 1000; margin-top: 5px; border: 1px solid #e4e7ed; border-radius: 4px; background-color: var(--tree-bg-color, #fff); box-shadow: 0 2px 12px rgba(0,0,0,0.1); box-sizing: border-box;
    .search-input { width: 100%; padding: 10px; border: none; border-bottom: 1px solid #e4e7ed; outline: none; font-size: 14px; color: var(--tree-text-color, #606266); background-color: var(--tree-bg-color, #fff); }
    .tree-container { max-height: 300px; overflow-y: auto; padding: 6px 0; }
  }

  &.disabled .my-tree-select__input { background-color: #f5f7fa; cursor: not-allowed; &:hover { border-color: #e4e7ed; } }
}
</style>
