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
<style scoped>
.my-transfer {
  display: flex;
  align-items: center;

  :is(__buttons) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 16px;

    button {
      margin: 4px 0;
      padding: 4px 8px;
      cursor: pointer;
    }
  }
}

.transfer-panel {
  width: 200px;
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #fff;

  :is(__title) {
    font-weight: bold;
    margin-bottom: 8px;
  }

  :is(__list) {
    max-height: 200px;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  :is(__item) {
    padding: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;

    &.is-disabled {
      color: #aaa;
      cursor: not-allowed;
    }

    &.is-selected {
      background-color: #f0f0f0;
    }
  }
}
</style>