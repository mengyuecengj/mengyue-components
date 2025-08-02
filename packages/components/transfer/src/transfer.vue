<template>
  <div class="my-transfer">
    <TransferPanel
      v-model:selected="leftSelected"
      title="源数据"
      :data="leftData"
    />
    <div class="my-transfer__buttons">
      <button :disabled="!leftSelected.length" @click="addToRight">→</button>
      <button :disabled="!rightSelected.length" @click="removeFromRight">←</button>
    </div>
    <TransferPanel
      v-model:selected="rightSelected"
      title="已选中"
      :data="rightData"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import TransferPanel from './transferPanel.vue'
import '../style/transfer.scss'

defineOptions({
  name: 'MYTransfer'
})

interface Option {
  key: number
  label: string
  disabled: boolean
}

const props = defineProps<{
  modelValue: number[]
  data: Option[]
}>()

const emit = defineEmits(['update:modelValue'])

// 左右选中项
const leftSelected = ref<number[]>([])
const rightSelected = ref<number[]>([])

// 拆分左右数据
const leftData = computed(() => props.data.filter(item => !props.modelValue.includes(item.key)))
const rightData = computed(() => props.data.filter(item => props.modelValue.includes(item.key)))

// 添加到右侧
const addToRight = () => {
  const newKeys = [...props.modelValue, ...leftSelected.value]
  emit('update:modelValue', newKeys)
  leftSelected.value = []
}

// 从右侧移除
const removeFromRight = () => {
  const newKeys = props.modelValue.filter(k => !rightSelected.value.includes(k))
  emit('update:modelValue', newKeys)
  rightSelected.value = []
}
</script>
