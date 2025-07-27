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
import { computed, inject, useAttrs, ref, onMounted, onBeforeUnmount, watch, Ref } from 'vue'
import { checkboxProps } from './checkbox'
import '../style/checkbox.scss'

defineOptions({
    name: 'MYCheckbox'
})

const props = defineProps(checkboxProps)
const emit = defineEmits(['update:modelValue', 'change'])
const attrs = useAttrs()

interface CheckboxGroupContext {
    modelValue: Ref<string[]>;
    disabled: boolean;
    change: (value: string[]) => void;
}
const checkboxGroup = inject<CheckboxGroupContext | null>('checkboxGroup', null)
interface FormItemContext {
    validate: () => void;
    clearValidate?: () => void;
    addField?: (field: { prop?: string; resetField: () => void; validate: () => Promise<void>; clearValidate: () => void }) => void;
    removeField?: (prop: string) => void;
    prop?: string;
}
const formItemContext = inject<FormItemContext | null>('myFormItemContext', null)
const initalValue = ref(props.modelValue)

const isDisabled = computed(() => {
  return props.disabled || (checkboxGroup?.disabled ?? false)
})

const ischecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.modelValue.value.includes(props.value !== undefined ? String(props.value) : '') ?? false
  }
  if (Array.isArray(props.modelValue)) {
    if (props.value === undefined) return false
    return props.modelValue.includes(props.value as string | number)
  }
  return Boolean(props.modelValue)
})

const handleChange = (e: Event) => {
  if (isDisabled.value) return
  const target = e.target as HTMLInputElement

  if (checkboxGroup) {
    const model: string[] = [...checkboxGroup.modelValue.value]
    const index = model.indexOf(props.value !== undefined ? String(props.value) : '')
    
    if (target.checked && index === -1) {
      model.push(props.value !== undefined ? String(props.value) : '')
    } else if (!target.checked && index !== -1) {
      model.splice(index, 1)
    }

    checkboxGroup.change(model)
    emit('change', target.checked)
    return
  }

  let newValue

  if (Array.isArray(props.modelValue)) {
    const model = [...props.modelValue]
    const index = model.indexOf(props.value !== undefined ? String(props.value) : '')

    if (target.checked && index === -1) {
      model.push(props.value!)
    } else if (!target.checked && index !== -1) {
      model.splice(index, 1)
    }
    newValue = model
  } else {
    newValue = target.checked
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

const resetField = () => {
  if (checkboxGroup) {
    checkboxGroup.change(initalValue.value as string[])
  } else {
    emit('update:modelValue', initalValue.value)
  }
  formItemContext?.clearValidate?.()
}
const fieldProp = formItemContext?.prop

onMounted(() => {
    formItemContext?.addField?.({
        prop: fieldProp,
        resetField,
        validate: () => Promise.resolve(),
        clearValidate: () => formItemContext?.clearValidate?.()
    })
})

onBeforeUnmount(() => {
  const prop = formItemContext?.prop
  if (!prop) return
  formItemContext?.removeField?.(prop)
})

watch(() => props.modelValue, () => {
    formItemContext?.clearValidate?.()
})
</script>