<template>
  <div
    v-show="visible"
    class="my-carousel-item"
    :style="{ width: '100%', flexShrink: 0 }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, type Ref } from 'vue'

defineOptions({
    name: 'MYCarousel-item'
})

const props = defineProps({
  index: Number
})

const context = inject<{
  activeIndex: number
  registerItem: () => void
}>('carouselContext')

onMounted(() => {
  context?.registerItem()
})

const visible = computed(() => {
  return props.index === (context?.activeIndex as unknown as Ref<number>)?.value
})
</script>
