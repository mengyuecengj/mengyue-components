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
import Star from './star.vue'
import { useRateLogic } from './rateComputed'
import { rateProps } from './rate'
import '../style/rate.scss'

defineOptions({ name: 'MYRate' })

const props = defineProps(rateProps)

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()

const {
  showHalf,
  disabled,
  maxStars,
  displayValue,
  currentText,
  handleClick,
  handleMouseMove,
  resetHover,
  getStarStyle
} = useRateLogic(props, emit)
</script>
