<template>
  <div style="padding: 20px">
    <MYTransfer v-model="value" :data="data" />
    <div style="margin-top: 20px">
      <strong>当前选中：</strong> {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `选项 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref<number[]>([]) // 右侧被选中的 key 数组
</script>
