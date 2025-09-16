<!-- MYTimeline.vue -->
<template>
  <div class="my-timeline" :class="[direction]" :style="style">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import '../style/timeline.scss'
defineOptions({
  name: 'MYTimeline'
})
withDefaults(defineProps<{
  direction?: 'vertical' | 'horizontal';
  theme?: string;
  style?: import('vue').StyleValue;
}>(), {
  direction: 'vertical'
});
</script>

<style scoped>

</style>