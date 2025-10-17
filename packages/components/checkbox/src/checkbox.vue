<template>
  <label :class="['my-checkbox', checkboxClass]">
    <span class="my-checkbox__input">
      <!-- 添加 value 属性绑定 -->
      <input 
        type="checkbox" 
        class="my-checkbox__original" 
        v-model="isChecked" 
        :disabled="isDisabled"
        :value="value" 
      />
      <span class="my-checkbox__inner" />
    </span>
    <span class="my-checkbox__label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { checkboxProps } from './checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(['update:modelValue', 'change'])

// 注入 group（如果存在）
const checkboxGroup = inject<{
  modelValue: import('vue').Ref<Array<string | number | boolean>>,
  disabled?: boolean,
  change: (val: Array<string | number | boolean>) => void
} | null>('checkboxGroup', null)

const isGroup = computed(() => !!checkboxGroup)

// 可写 computed：单个 checkbox 用 boolean；group 用数组包含判断
const isChecked = computed<boolean>({
  get() {
    if (isGroup.value) {
      // group.modelValue 是 Ref<Array>
      return checkboxGroup!.modelValue.value.includes(props.value)
    }
    return !!props.modelValue
  },
  set(val: boolean) {
    if (isGroup.value) {
      const groupValues = [...checkboxGroup!.modelValue.value]
      const index = groupValues.indexOf(props.value)

      if (val && index === -1) {
        groupValues.push(props.value)
      } else if (!val && index > -1) {
        groupValues.splice(index, 1)
      }

      // 通过 group 的 change 回调通知 group 更新（group 会 emit update:modelValue）
      checkboxGroup!.change(groupValues)
      emit('change', groupValues)
    } else {
      // 单个 checkbox：emit boolean
      emit('update:modelValue', val)
      emit('change', val)
    }
  }
})

const isDisabled = computed(() => {
  if (isGroup.value) {
    return !!checkboxGroup!.disabled
  }
  return !!props.disabled
})

const checkboxClass = computed(() => ({
  'my-checkbox--checked': isChecked.value,  // 从 'is-checked' 改为 'my-checkbox--checked'
  'my-checkbox--disabled': isDisabled.value  // 从 'is-disabled' 改为 'my-checkbox--disabled'
}))
</script>
