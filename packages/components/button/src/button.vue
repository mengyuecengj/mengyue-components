<template>
  <component v-if="!props.iconOnly" :is="props.tag" :class="btnClass" :style="customStyle" :disabled="props.disabled"
    :type="props.nativeType || 'button'" @click="handleClick" @mouseover="onMouseOver" @mouseleave="onMouseOut"
    @mousedown="onMouseDown" @mouseup="onMouseUp">
    <component v-if="props.icon" :is="props.icon" class="my-btn-icon" />
    <slot />
  </component>
  <component v-else :is="props.icon" class="my-btn-icon" @click="handleClick" :class="[btnClass, 'my-btn--icon-only-icon']" :style="customStyle" />
</template>

<script setup lang="ts">
import { buttonProps } from './button'
import '../style/button.scss'
import { useButtonStyle } from './computedStyle'

defineSlots<{
  default?: (props: {}) => string
  icon?: (props: {}) => string
}>()

defineOptions({
  name: 'MYButton'
})

const props = defineProps(buttonProps)
const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

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