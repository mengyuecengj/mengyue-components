<template>
  <div class="my-carousel" :style="{ height }" @mouseenter="pause" @mouseleave="play">
    <div class="my-carousel__container" :style="containerStyle">
      <slot />
    </div>

    <div class="my-carousel__indicators">
      <span v-for="index in itemCount" :key="index - 1" :class="['dot', { active: (index - 1) === activeIndex }]"
        @click="trigger === 'click' && setActive(index - 1)"
        @mouseenter="trigger === 'hover' && setActive(index - 1)"></span>
    </div>

    <button class="nav prev" @click="prev">‹</button>
    <button class="nav next" @click="next">›</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, provide } from 'vue'
import '../style/cartousel.scss'

defineOptions({
  name: 'MYCarousel'
})

const props = defineProps({
  height: { type: String, default: '200px' },
  interval: { type: Number, default: 3000 },
  trigger: { type: String as () => 'hover' | 'click', default: 'hover' },
  autoplay: { type: Boolean, default: true }
})

const activeIndex = ref(0)
const itemCount = ref(0)
const timer = ref<number | null>(null)

function setActive(index: number) {
  activeIndex.value = index
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % itemCount.value
}

function prev() {
  activeIndex.value = (activeIndex.value - 1 + itemCount.value) % itemCount.value
}

function play() {
  if (!props.autoplay) return
  stop()
  timer.value = window.setInterval(next, props.interval)
}

function pause() {
  stop()
}

function stop() {
  if (timer.value) clearInterval(timer.value)
  timer.value = null
}

onMounted(() => {
  play()
})

onBeforeUnmount(() => {
  stop()
})

provide('carouselContext', {
  activeIndex,
  registerItem: () => itemCount.value++
})

const containerStyle = computed(() => ({
  transform: `translateX(-${activeIndex.value * 100}%)`,
  transition: 'transform 0.5s ease',
  display: 'flex',
  width: '100%',
  backgroundColor: '#99A9BF'
}))
</script>
