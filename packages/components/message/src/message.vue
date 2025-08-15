<template>
  <div
    class="my-message"
    :class="'my-message--' + type"
    @mouseenter="pause"
    @mouseleave="resume"
  >
    <!-- 正常情况走纯文本；仅当允许时才用 v-html -->
    <!-- <div class="my-message--content" v-if="!dangerouslyUseHTMLString"> -->
    <MYButton 
      class="my-message--content"
      v-if="!dangerouslyUseHTMLString"
      :type="buttonType"
      plain
      size="medium">
      {{ content }}
    </MYButton>
    <div class="my-message--content" v-else v-html="content"></div>

    <button class="my-message--close" v-if="showClose" @click="close">×</button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, computed } from 'vue'
import MYButton from '../../button/src/button.vue';
import type { MessageOption } from './type'
import '../style/message.scss'

const props = defineProps<MessageOption & { id: string }>()
const emit = defineEmits<{ (e: 'close', id: string): void }>()

const duration = props.duration ?? 3000
const content = props.content ?? ''
const type = props.type ?? 'info'
const showClose = props.showClose ?? false
const dangerouslyUseHTMLString = !!props.dangerouslyUseHTMLString

const buttonType = computed(() => {
  if (type === 'error') return 'danger';
  if (type === 'default') return undefined;
  return type;
})

let timer: number | null = null
let start = 0
let remaining = duration

function startTimer() {
  if (!duration || duration <= 0) return
  clearTimer()
  start = Date.now()
  timer = window.setTimeout(() => { doClose() }, remaining)
}
function clearTimer() {
  if (timer !== null) {
    clearTimeout(timer)
    timer = null
  }
}
function pause() {
  if (timer === null) return
  const elapsed = Date.now() - start
  remaining = Math.max(0, remaining - elapsed)
  clearTimer()
}
function resume() {
  if (duration && duration > 0) startTimer()
}

function doClose() {
  emit('close', props.id)
  props.onClose?.()
}
function close() {
  clearTimer()
  doClose()
}

onMounted(() => { if (duration && duration > 0) startTimer() })
onBeforeUnmount(() => { clearTimer() })
</script>
