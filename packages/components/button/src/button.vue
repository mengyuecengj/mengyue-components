<template>
  <component
    :is="props.tag"
    :class="btnClass"
    :style="customStyle"
    :disabled="props.disabled"
    :type="props.nativeType || 'button'"
    @click="handleClick"
    @mouseover="onMouseOver"
    @mouseleave="onMouseOut"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { buttonProps } from './button'
import '../style/button.scss'
import { useButtonStyle } from './computedStyle'

defineSlots<{
  default?: (props: {}) => string
}>()

// **给组件取个名字，供 withInstall 注册使用**
defineOptions({
  name: 'MYButton'
})

const props = defineProps(buttonProps)
const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

// const formContext = inject<any>('myFormContext', null)
function handleClick(e: MouseEvent) {
  if (props.disabled) return
  emit('click', e)
}

const {
  btnClass,
  customStyle,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  onMouseUp
} = useButtonStyle(props)
</script>
