<template>
    <label class="my-checkbox" :class="checkboxClass">
        <span class="my-checkbox__input">
            <input v-bind="attrs" type="checkbox" class="my-checkbox__original"
                :checked="ischecked" @change="handleChange" />
            <span class="my-checkbox__inner"></span>
        </span>
        <span class="my-checkbox__label">
            <slot></slot>
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue'
import { checkboxProps } from './checkbox'
import '../style/checkbox.scss'

defineOptions({
    name: 'MYCheckbox'
})

const props = defineProps(checkboxProps)
const emit = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()

const checkboxGroup: any = inject('checkboxGroup', null)

const isDisabled = computed(() => {
  return props.disabled || (checkboxGroup?.disabled ?? false)
})

const ischecked = computed(() => {
  if(checkboxGroup) {
    // return String(checkboxGroup.modelValue.value) === String(props.value)
    return checkboxGroup.modelValue.value.includes(props.value)
  }
  if (Array.isArray(props.modelValue)) {
    // 明确排除 undefined
    if (props.value === undefined) return false
    return props.modelValue.includes(props.value as string | number)
  }
  return Boolean(props.modelValue)
})

// const handleChange = (e: Event) => {
//   if(isDisabled.value) return
//   const target = e.target as HTMLInputElement
//   let newValue: any

//   if(checkboxGroup) {
//     checkboxGroup.change(props.value)
//   } else {
//     emit('update:modelValue', props.value)
//   }

//   if (Array.isArray(props.modelValue)) {
//     if (props.value === undefined) return // 安全防御
//     const model = [...props.modelValue]
//     const index = model.indexOf(props.value as string | number)

//     if (target.checked && index === -1) {
//       model.push(props.value)
//     } else if (!target.checked && index !== -1) {
//       model.splice(index, 1)
//     }
//     newValue = model
//   } else {
//     newValue = target.checked
//   }

//   emit('update:modelValue', newValue)
//   emit('change', target.checked)
// }
const handleChange = (e: Event) => {
  if (isDisabled.value) return
  const target = e.target as HTMLInputElement

  // ✅ group 模式
  if (checkboxGroup) {
    const model: any[] = [...checkboxGroup.modelValue.value]
    const index = model.indexOf(props.value)
    
    if (target.checked && index === -1) {
      model.push(props.value)
    } else if (!target.checked && index !== -1) {
      model.splice(index, 1)
    }

    checkboxGroup.change(model) // ✅ 传完整的数组
    emit('change', target.checked) // ✅ 可保留，表示“是否勾选”
    return
  }

  // ✅ 非 group 模式
  let newValue: any

  if (Array.isArray(props.modelValue)) {
    const model = [...props.modelValue]
    const index = model.indexOf(props.value!)

    if (target.checked && index === -1) {
      model.push(props.value!)
    } else if (!target.checked && index !== -1) {
      model.splice(index, 1)
    }
    newValue = model
  } else {
    newValue = target.checked  // ✅ 非 group 模式才允许 boolean
  }

  emit('update:modelValue', newValue)
  emit('change', target.checked)
}


const checkboxClass = computed(() => {
    const cls: string[] = ['my-checkbox']
    if (ischecked.value) cls.push('my-checkbox--checked')
    if (props.disabled) cls.push('my-checkbox--disabled')
    return cls
})
</script>
