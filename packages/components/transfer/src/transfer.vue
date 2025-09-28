<template>
  <div class="my-transfer">
    <TransferPanel
      v-model:selected="leftSelected"
      :title="leftTitle"
      :data="leftData"
      :style="transferStyle"
      :hoverBackground="hoverBackground"
    />
    <div class="my-transfer__buttons">
      <button :disabled="!leftSelected.length" @click="addToRight">→</button>
      <button :disabled="!rightSelected.length" @click="removeFromRight">←</button>
    </div>
    <TransferPanel
      v-model:selected="rightSelected"
      :title="rightTitle"
      :data="rightData"
      :style="transferStyle"
      :hoverBackground="hoverBackground"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import TransferPanel from './transferPanel.vue'
import '../style/transfer.scss'
import { transferProps } from './transfer'
import { transferComputed } from './transferComputed'

defineOptions({
  name: 'MYTransfer'
})

const props = defineProps(transferProps)
const emit = defineEmits(['update:modelValue'])

// 左右选中项
const leftSelected = ref<number[]>([])
const rightSelected = ref<number[]>([])

// 拆分左右数据
const leftData = computed(() => props.data.filter(item => !props.modelValue.includes(item.key)))
const rightData = computed(() => props.data.filter(item => props.modelValue.includes(item.key)))

// 默认标题
const leftTitle = computed(() => props.titles?.[0])
const rightTitle = computed(() => props.titles?.[1])

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

const { transferStyle } = transferComputed(props)
</script>
