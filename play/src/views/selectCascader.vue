<template>
  <MYSelect-cascader v-model="selectedValue" :options="customOptions" placeholder="选择一项" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const selectedValue = ref('')
const customOptions = [
  {
    label: '选项1',
    value: '1',
    children: [
      {
        label: '选项1-1',
        value: '1-1',
        children: [
            { 
                label: '选项1-1-1', value: '1-1-1',
            }]
      },
      {
        label: '选项1-2',
        value: '1-2',
        children: [{ label: '选项1-2-1', value: '1-2-1' }]
      }
    ]
  },
  {
    label: '选项2',
    value: '2',
    children: [
      { label: '选项2-1', value: '2-1' },
      { label: '选项2-2', value: '2-2' }
    ]
  },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
  { label: '选项3', value: '3' },
]
</script>