<template>
  <div class="transfer-panel">
    <div class="transfer-panel__title">{{ title }}</div>
    <ul class="transfer-panel__list">
      <li
        v-for="item in data"
        :key="item.key"
        :class="['transfer-panel__item', { 'is-disabled': item.disabled, 'is-selected': selected.includes(item.key) }]"
        @click="toggleSelect(item)"
      >
        <input type="checkbox" :checked="selected.includes(item.key)" :disabled="item.disabled" />
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'MYTransferPanel'
})

interface Option {
  key: number
  label: string
  disabled: boolean
}

const props = defineProps<{
  title: string
  data: Option[]
  selected: number[]
}>()

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
</script>
