<template>
  <component
    :is="props.tag"
    :class="btnClass"
    :style="customStyle"
    @click="handleClick"
    @mouseover="onMouseOver"
    @mouseleave="onMouseOut"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    :disabled="props.disabled || undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { buttonProps } from './button'
import '../style/button.scss'
import { useButtonStyle } from './computedStyle'

// **给组件取个名字，供 withInstall 注册使用**
defineOptions({
  name: 'MYButton'
})

const props = defineProps(buttonProps)
const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

function handleClick(e: MouseEvent) {
  if (!props.disabled) emit('click', e)
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
