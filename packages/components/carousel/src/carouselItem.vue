<template>
  <div
    class="my-carousel-item"
    :style="{ width: '100%', flexShrink: 0 }"
    v-show="visible"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted } from 'vue'

defineOptions({
    name: 'MYCarousel-item'
})

const props = defineProps({
  index: Number
})

const context = inject<{
  activeIndex: any
  registerItem: () => void
}>('carouselContext')

onMounted(() => {
  context?.registerItem()
})

const visible = computed(() => {
  return props.index === context?.activeIndex.value
})
</script>
