<template>
  <component v-if="!props.iconOnly" :is="props.tag" :class="btnClass" :style="customStyle" :disabled="isDisabled"
    :type="props.nativeType || 'button'" @click="onClick" @mouseover="onMouseOver" @mouseleave="onMouseOut"
    @mousedown="onMouseDown" @mouseup="onMouseUp">
    <!-- loading 优先显示 -->
    <span v-if="props.loading" class="my-btn__loading"></span>

    <component v-else-if="props.icon" :is="props.icon" class="my-btn-icon" />

    <slot />
  </component>

  <component v-else :is="props.icon" :class="[btnClass, 'my-btn--icon-only-icon']" :style="customStyle"
    @click="onClick" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { buttonProps } from './button'
import { useButtonStyle } from './computedStyle'
import { useDebounce } from '../../../utils/useDebounce'
import '../style/button.scss'

defineOptions({ name: 'MYButton' })

const props = defineProps(buttonProps)
const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()

const isDisabled = computed(() => props.disabled || props.loading)

function emitClick(e: MouseEvent) {
  emit('click', e)
}

const onClick = props.debounce > 0
  ? useDebounce((e) => {
    if (isDisabled.value) return
    emitClick(e as MouseEvent)
  }, props.debounce)
  : (e: MouseEvent) => {
    if (isDisabled.value) return
    emitClick(e)
  }

const {
  btnClass,
  customStyle,
  onMouseOver,
  onMouseOut,
  onMouseDown,
  onMouseUp
} = useButtonStyle({
  ...props,
  disabled: isDisabled.value
})
</script>