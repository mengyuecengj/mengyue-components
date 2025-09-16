// rateComputed.ts
import { computed, ref, watch } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { rateProps } from './rate'

type RateProps = ExtractPropTypes<typeof rateProps>

export function useRateLogic(
  props: RateProps,
  emit: (...args: any[]) => void // 宽泛类型，避免类型冲突
) {
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

  return {
    showHalf: props.showHalf,
    disabled: props.disabled,
    maxStars,
    displayValue,
    currentText,
    handleClick,
    handleMouseMove,
    resetHover,
    getStarStyle
  }
}
