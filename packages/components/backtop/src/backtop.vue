<template>
  <Transition name="fade">
    <div
      v-if="visible"
      class="my-backtop"
      :style="{
        right: `${right}px`,
        bottom: `${bottom}px`
      }"
      @click="scrollToTop"
    >
      <slot>
        <div class="default-content">↑</div>
      </slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineOptions({
    name: 'MYBacktop'
})

interface Props {
  visibilityHeight?: number
  right?: number
  bottom?: number
  target?: string
}

const props = withDefaults(defineProps<Props>(), {
  visibilityHeight: 200,
  right: 40,
  bottom: 40,
  target: ''
})

const visible = ref(false)
let scrollEl: HTMLElement | Window = window

const getScrollTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    return el?.scrollTop || 0
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop
  }
}

const handleScroll = () => {
  visible.value = getScrollTop() >= props.visibilityHeight
}

const scrollToTop = () => {
  if (props.target) {
    const el = document.querySelector(props.target) as HTMLElement
    if (el) {
      el.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  scrollEl = props.target
    ? (document.querySelector(props.target) as HTMLElement)
    : window

  scrollEl?.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  scrollEl?.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.my-backtop {
  position: fixed;
  z-index: 1000;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgba(64, 158, 255, 0.7);
  color: #fff;
  text-align: center;
  line-height: 40px;
  transition: opacity 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.default-content {
  font-size: 18px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
