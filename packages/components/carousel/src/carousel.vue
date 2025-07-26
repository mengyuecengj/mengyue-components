<template>
  <div class="my-carousel" :style="{ height }" @mouseenter="pause" @mouseleave="play">
    <div class="my-carousel__container" :style="containerStyle">
      <slot />
    </div>

    <div class="my-carousel__indicators">
      <span
        v-for="index in itemCount"
        :key="index"
        class="dot"
        :class="{ active: index === activeIndex }"
        @click="trigger === 'click' && setActive(index)"
        @mouseenter="trigger === 'hover' && setActive(index)"
      ></span>
    </div>

    <button class="nav prev" @click="prev">‹</button>
    <button class="nav next" @click="next">›</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, provide } from 'vue'

defineOptions({
    name: 'MYCarousel'
})

const props = defineProps({
  height: { type: String, default: '200px' },
  interval: { type: Number, default: 3000 },
  trigger: { type: String as () => 'hover' | 'click', default: 'hover' }
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
  width: '100%'
}))
</script>

<style scoped>
.my-carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.my-carousel__container {
  display: flex;
  width: 100%;
}
.my-carousel__indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #c0c4cc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.dot.active {
  background: #409eff;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.25);
  color: white;
  border: none;
  font-size: 24px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.nav.prev {
  left: 10px;
}
.nav.next {
  right: 10px;
}
</style>
