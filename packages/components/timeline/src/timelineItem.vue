<!-- MYTimelineItem.vue -->
<template>
  <div class="my-timeline-item">
    <div class="timeline-timestamp">
      <slot name="timestamp">{{ timestamp }}</slot>
    </div>
    <div class="timeline-node">
      <div class="timeline-dot" :style="{ backgroundColor: color }"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="timeline-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import '../style/timelineItem.scss'
defineOptions({
  name: 'MYTimeline-item'
})

defineProps<{
  timestamp: string;
  color?: string;
  icon?: string;
}>();
</script>

