<template>
  <div class="slider-container" :style="containerStyle" :class="{ disabled: disabled }">
    <div class="slider-track" ref="track" @mousedown="startDrag">
      <div class="slider-progress" :style="{ width: progressWidth + '%' }"></div>
      <div 
        class="slider-thumb" 
        :style="{ left: progressWidth + '%' }"
        @mousedown.stop="startDrag"
      >
        <span v-if="!noNum" class="slider-value">{{ num }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'MYSlidebar'
})

const props = defineProps<{
  size?: string        // 滑块宽度，如 "400px" 或 "50%"
  thumbColor?: string  // 滑块和进度条颜色
  trackColor?: string  // 轨道颜色
  disabled?: boolean   // 禁用状态
  noNum?: boolean      // 是否隐藏数值
}>()

const defaultTrackBg = ref('#e0e0e0')
const defaultProgressColor = ref('#42b983')

const num = ref(1)
const progressWidth = ref(0)
const track = ref<HTMLElement | null>(null)
let isDragging = false

const containerStyle = computed(() => ({
  width: props.size || '100%',
  maxWidth: props.size ? 'none' : '320px'
}))

const updateValue = (clientX: number) => {
  if (!track.value || props.disabled) return
  const rect = track.value.getBoundingClientRect()
  let percentage = ((clientX - rect.left) / rect.width) * 100
  percentage = Math.max(0, Math.min(100, percentage))
  progressWidth.value = percentage
  num.value = Math.round(percentage)
}

const startDrag = (e: MouseEvent) => {
  if (props.disabled) return
  isDragging = true
  updateValue(e.clientX)
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging || props.disabled) return
  updateValue(e.clientX)
}

const stopDrag = () => {
  isDragging = false
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', stopDrag)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', stopDrag)
})
</script>

<style lang="scss" scoped>
$track-height: 6px;
$thumb-size: 18px;
$primary-color: #2c3e50;
$default-progress-color: #42b983;
$default-track-bg: #e0e0e0;
$thumb-bg: #ffffff;

.slider-container {
  padding: 24px 8px;
  user-select: none;
  margin: 0 auto;
  position: relative;

  &.disabled {
    opacity: 0.6;
    cursor: not-allowed;

    .slider-track,
    .slider-thumb {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}

.slider-track {
  position: relative;
  height: $track-height;
  background: v-bind('props.trackColor || defaultTrackBg');
  border-radius: $track-height / 2;
  cursor: pointer;
  margin-top: 8px;

  &:hover:not(.disabled) {
    background: v-bind('props.trackColor ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.1)"');
  }
}

.slider-progress {
  position: absolute;
  height: 100%;
  background: v-bind('props.thumbColor || defaultProgressColor');
  border-radius: $track-height / 2;
  transition: width 0.2s ease-out;
}

.slider-thumb {
  position: absolute;
  width: $thumb-size;
  height: $thumb-size;
  background: $thumb-bg;
  border: 2px solid v-bind('props.thumbColor || defaultProgressColor');
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;

  &:active:not(.disabled) {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.1);
  }

  &:hover:not(.disabled) {
    transform: translate(-50%, -50%) scale(1.15);
  }
}

.slider-value {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  font-weight: 600;
  color: $primary-color;
  background: $thumb-bg;
  padding: 2px 6px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
}
</style>