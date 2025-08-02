<template>
  <div ref="formItemRef" :class="formItemClass">
    <label v-if="props.label" :for="props.prop" class="my-form-item__label" :style="{ width: labelWidth }">
      {{ props.label }}
    </label>
    <div class="my-form-item__control">
      <slot />
      <div v-if="errorMessage" class="my-form-item__error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { formItemProps } from './formItem'
import { useFormItemComputed } from './formItemComputed'
import '../style/formItem.scss'
import { FormContext } from './type'

defineOptions({ name: 'MYForm-item' })

const form = inject<FormContext>('form', {
  modelValue: {},
  labelWidth: 'auto',
  emitter: { 
    on: () => { },
    off: () => { }
  }
})

if (!form) {
  throw new Error('FormItem must be used inside Form component')
}

const props = defineProps(formItemProps)

const { formItemRef, errorMessage, labelWidth, formItemClass, attachTrigger } = useFormItemComputed(props, form)
attachTrigger()
</script>
