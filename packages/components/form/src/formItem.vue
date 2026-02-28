<template>
  <div ref="formItemRef" :class="formItemClass">
    <label v-if="label" class="my-form-item__label">{{ label }}</label>
    <div class="my-form-item__control">
      <slot />
      <div v-if="errorMessage" class="my-form-item__error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { formItemProps } from './formItem'
import type { FormContext } from './type'
import '../style/formItem.scss'
import { useFormItemComputed } from './formItemComputed'

defineOptions({ name: 'MYFormItem' })

const form = inject<FormContext>('form')!
const props = defineProps(formItemProps)

const { formItemRef, errorMessage, formItemClass } =
  useFormItemComputed(props, form)
</script>