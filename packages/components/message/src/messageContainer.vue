<template>
  <div class="my-message-container" :class="positionClass" :style="{ zIndex }" ref="container">
    <div v-for="msg in list" :key="msg.id" class="my-message-wrapper" style="margin-top: 8px;">
      <MessageItem
        :id="msg.id!"
        v-bind="msg"
        @close="() => msg.id && onClose(msg.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { MessageOption } from './type'
import MessageItem from './message.vue'
import '../style/messageContainer.scss'

const container = ref(null)
const props = defineProps<{ list: MessageOption[]; position?: string; zIndex?: number }>()
const list = props.list
const positionClass = props.position ?? 'top-right'
const zIndex = props.zIndex ?? 9999

function onClose(id: string) {
  const idx = list.findIndex(x => x.id === id)
  if (idx >= 0) list.splice(idx, 1)
}

defineExpose({
  container
})
</script>