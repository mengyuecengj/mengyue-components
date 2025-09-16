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
import { backTopProps } from './backtop'
import '../style/backtop.scss'

defineOptions({
    name: 'MYBacktop'
})

const props = defineProps(backTopProps)
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
