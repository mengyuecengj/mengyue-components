<!-- MYTimeline.vue -->
<template>
  <div class="my-timeline" :class="[direction]" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'MYTimeline'
})
defineProps<{
  direction?: 'vertical' | 'horizontal';
  theme?: string;
  style?: string | object; // Support style prop for inline styles
}>();
</script>

<style scoped>
.my-timeline {
  display: flex;
  flex-direction: column;
  position: relative;
}

.my-timeline.horizontal {
  flex-direction: row;
}
</style>