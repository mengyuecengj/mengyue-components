import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { DialogProps, DialogEmits } from './type'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import { useClassComputed } from '../../../hooks/useClassComputed'

export function useDialog(props: DialogProps, emit: DialogEmits) {
  const visible = ref(props.modelValue)

  watch(
    () => props.modelValue,
    (val) => {
      visible.value = val
      if (val) emit('open')
    }
  )

  const close = () => {
    visible.value = false
    emit('update:modelValue', false)
    emit('close')
  }

  const handleOverlayClick = () => {
    if (props.closeOnClickModal) close()
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.closeOnPressEscape) close()
  }

  const dialogClass = useClassComputed({
    baseClass: 'my-dialog',
    flagClasses: {
      overflow: props.overflow
    }
  })

  const dialogStyle = useStyleComputed(props, {
    propToStyleMap: {
      width: 'width',
      height: 'height',
      backgroundColor: 'backgroundColor',
      textColor: 'color'
    }
  })

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown)
  })

  return {
    visible,
    close,
    handleOverlayClick,
    dialogStyle,
    dialogClass
  }
}
