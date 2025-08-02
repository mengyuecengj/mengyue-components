<template>
  <div class="slider-container" :style="containerStyle" :class="{ disabled: disabled }">
    <div
      ref="track"
      class="slider-track"
      :style="{ background: props.trackColor || defaultTrackBg }"
      @mousedown="startDrag"
    >
      <div
        class="slider-progress"
        :style="{ width: progressWidth + '%', background: props.thumbColor || defaultProgressColor }"
      ></div>
      <div
        class="slider-thumb"
        :style="{ left: progressWidth + '%', borderColor: props.thumbColor || defaultProgressColor }"
        @mousedown.stop="startDrag"
      >
        <span v-if="!noNum" class="slider-value">{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { silderbarProps } from './slidebar'
import { useSlidebarComputed } from './slidebarComputed'
import '../style/sildebar.scss'

defineOptions({ name: 'MYSlidebar' })

const props = defineProps(silderbarProps)

const defaultTrackBg = '#e0e0e0'
const defaultProgressColor = '#42b983'

const {
  num,
  progressWidth,
  track,
  containerStyle,
  startDrag,
  onMouseMove,
  stopDrag
} = useSlidebarComputed(props)

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', stopDrag)
})
</script>
