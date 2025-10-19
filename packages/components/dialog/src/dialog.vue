<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="visible"
        class="my-overlay"
        @click.self="handleOverlayClick"  
      >
        <div
          class="my-dialog"
          role="dialog"
          aria-modal="true"
          :style="dialogStyle"
          :class="dialogClass"
        >
          <header class="my-dialog__header">
            <slot name="header">
              <span class="my-dialog__title">{{ props.title }}</span>
            </slot>
            <button class="my-dialog__close" @click="close">×</button>
          </header>

          <div class="my-dialog__body">
            <slot />
          </div>

          <footer class="my-dialog__footer" v-if="$slots.footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import '../style/dialog.scss'
import { dialogProps } from './dialog'
import type { DialogEmits } from './type'
import { useDialog } from './dialogComputed'

defineOptions({
  name: 'MYDialog',
  inheritAttrs: false
})

const props = defineProps(dialogProps)
const emit = defineEmits<DialogEmits>()

const { visible, close, handleOverlayClick, dialogStyle, dialogClass } = useDialog(props, emit)
</script>
