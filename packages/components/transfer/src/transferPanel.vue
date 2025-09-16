<template>
  <div class="transfer-panel" :style="{ ...transferStyle, '--hover-background': hoverBackground }">
    <div class="transfer-panel__title">{{ title }}</div>
    <ul class="transfer-panel__list">
      <li
        v-for="item in data"
        :key="item.key"
        :class="['transfer-panel__item', { 'is-disabled': item.disabled, 'is-selected': selected.includes(item.key) }]"
        :style="{ '--hover-background': hoverBackground }"
        @click="toggleSelect(item)"
      >
        <input class="transfer-panel__checkbox" type="checkbox" :checked="selected.includes(item.key)" :disabled="item.disabled" />
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { transferComputed } from './transferComputed'
import { transferPanelProps } from './transferPanel'
import { Option } from './type'

defineOptions({
  name: 'MYTransferPanel'
})


const props = defineProps(transferPanelProps)
// const props = defineProps<{
//   title: string
//   data: Option[]
//   selected: number[]
// }>()

const emit = defineEmits(['update:selected'])

const toggleSelect = (item: Option) => {
  if (item.disabled) return
  const selected = [...props.selected]
  const index = selected.indexOf(item.key)
  if (index > -1) {
    selected.splice(index, 1)
  } else {
    selected.push(item.key)
  }
  emit('update:selected', selected)
}

const { transferStyle } = transferComputed(props)
</script>
