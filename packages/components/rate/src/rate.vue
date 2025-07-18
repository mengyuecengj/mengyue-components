<template>
  <div class="MYRate">
    <span 
      v-for="star in maxStars" 
      :key="star"
      class="MYRate__star"
      :class="{
        'is-active': star <= displayValue,
        'is-half': showHalf && star === Math.ceil(displayValue) && displayValue % 1 > 0,
        'is-disabled': disabled
      }"
      @click="handleClick(star)"
      @mousemove="handleMouseMove(star, $event)"
      @mouseleave="resetHover"
    >
      <span class="MYRate__star-inner" :style="getStarStyle(star)">
        <Star />
      </span>
    </span>
    <span v-if="showText" class="MYRate__text">{{ currentText }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Star from './star.vue'
import '../style/rate.scss'

defineOptions({ name: 'MYRate' })

const props = withDefaults(defineProps<{
  modelValue: number
  max?: number
  colors?: [string, string, string]
  showText?: boolean
  texts?: string[]
  showHalf?: boolean
  disabled?: boolean
}>(), {
  max: 5,
  colors: () => ['#F7BA2A', '#F7BA2A', '#C6D1DE'],
  showText: false,
  texts: () => ['极差', '失望', '一般', '满意', '惊喜'],
  showHalf: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const hoverValue = ref(0)
const currentValue = ref(props.modelValue)

const maxStars = computed(() => props.max)
const displayValue = computed(() => hoverValue.value || currentValue.value)
const currentText = computed(() => {
  const index = Math.ceil(currentValue.value) - 1
  return props.texts[index] || ''
})

watch(() => props.modelValue, (newVal) => {
  currentValue.value = newVal
})

const handleClick = (star: number) => {
  if (props.disabled) return
  let newValue = star
  if (props.showHalf) {
    if (star === Math.ceil(currentValue.value) && currentValue.value % 1 > 0) {
      newValue = star - 0.5
    }
  }
  currentValue.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const handleMouseMove = (star: number, event: MouseEvent) => {
  if (props.disabled) return
  if (props.showHalf) {
    const target = event.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    hoverValue.value = mouseX <= rect.width / 2 ? star - 0.5 : star
  } else {
    hoverValue.value = star
  }
}

const resetHover = () => {
  if (props.disabled) return
  hoverValue.value = 0
}

const getStarStyle = (star: number) => {
  const isActive = star <= displayValue.value
  const isHalf = props.showHalf && star === Math.ceil(displayValue.value) && displayValue.value % 1 > 0
  return {
    color: isActive ? props.colors[0] : props.colors[2],
    width: isHalf ? '50%' : '100%'
  }
}
</script>

<style scoped>
.MYRate {
  display: inline-flex;
  align-items: center;
  font-size: 0;
}

.MYRate__star {
  position: relative;
  display: inline-block;
  margin-right: 6px;
  cursor: pointer;
  font-size: 20px;
}

.MYRate__star.is-disabled {
    cursor: not-allowed;
    opacity: 0.6;
}

.MYRate__star-inner {
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: color 0.2s;
    height: 2.0rem;
}

.MYRate__text {
  margin-left: 10px;
  font-size: 14px;
  vertical-align: middle;
}
</style>
