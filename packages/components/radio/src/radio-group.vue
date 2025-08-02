<template>
  <div :class="['my-radio-group', directionClass]" :disabled="disabled">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { radioGroupProps } from './radio-group'
import '../style/radio-group.scss'

const props = defineProps(radioGroupProps)
const emit = defineEmits(['update:modelValue'])

const updateValue = (val: string | number) => {
  emit('update:modelValue', val)
}

const directionClass = computed(() => {
  return props.direction === 'vertical' ? 'is-vertical' : ''
})

provide('radioGroup', {
  modelValue: computed(() => props.modelValue),
  disabled: computed(() => props.disabled),
  changeEvent: updateValue
})
</script>

<style scoped>

</style>
