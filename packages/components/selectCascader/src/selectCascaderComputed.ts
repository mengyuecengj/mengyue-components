import { ref, computed, watch, nextTick } from 'vue'
import type { Option } from './type'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import type { SelectCascaderProps } from './selectCascader'

export function useSelectCascader(props: SelectCascaderProps, emit: (e: 'update:modelValue', val: string | number) => void) {
  const dropdownVisible = ref(false)
  const activeSubMenu = ref<string>('')
  const activeThirdMenu = ref<string | null>(null)
  const selectedLabel = ref('')
  const isFocused = ref(false)
  const subMenuPosition = ref({})
  const thirdMenuPosition = ref({})
  const activeOption = ref<Option | null>(null)
  const activeSecondLevelOption = ref<Option | null>(null)
  const selectDropdown = ref<HTMLElement | null>(null)
  const dropdownPosition = ref({})

  const activeSubMenuItems = computed(() => {
    const activeItem = props.options?.find(item => item.value.toString() === activeSubMenu.value)
    return activeItem?.children || []
  })

  const activeThirdMenuItems = computed(() => {
    const activeSecondItem = activeSubMenuItems.value.find(item => item.value.toString() === activeThirdMenu.value)
    return activeSecondItem?.children || []
  })

  const findOption = (options: Option[], value: string | number): Option | undefined => {
    for (const option of options) {
      if (option.value === value) return option
      if (option.children) {
        const found = findOption(option.children, value)
        if (found) return found
      }
    }
    return undefined
  }

  watch(() => props.modelValue, (newValue) => {
    if (newValue) {
      const selectedOption = props.options ? findOption(props.options, newValue) : undefined
      selectedLabel.value = selectedOption?.label || ''
    } else {
      selectedLabel.value = ''
    }
  }, { immediate: true })

  const toggleDropdown = () => {
    if (props.disabled) return
    dropdownVisible.value = !dropdownVisible.value
    if (!dropdownVisible.value) {
      activeSubMenu.value = ''
      activeThirdMenu.value = null
    } else {
      nextTick(() => {
        updateSubMenuPosition()
        updateThirdMenuPosition()
      })
    }
  }

  const handleMouseenter = (item: Option) => {
    if (props.disabled || item.disabled) return
    if (item.children) {
      activeSubMenu.value = item.value.toString()
      activeOption.value = item
      nextTick(() => updateSubMenuPosition())
    } else {
      activeSubMenu.value = ''
      activeThirdMenu.value = null
      activeOption.value = null
    }
  }

  const handleSecondLevelEnter = (item: Option) => {
    if (props.disabled || item.disabled) return
    if (item.children) {
      activeThirdMenu.value = item.value.toString()
      activeSecondLevelOption.value = item
      nextTick(() => updateThirdMenuPosition())
    } else {
      activeThirdMenu.value = null
      activeSecondLevelOption.value = null
    }
  }

  const handleClick = (item: Option) => {
    if (props.disabled || item.disabled) return
    selectedLabel.value = item.label
    dropdownVisible.value = false
    activeSubMenu.value = ''
    activeThirdMenu.value = null
    emit('update:modelValue', item.value)
  }

  const handleFocus = () => {
    isFocused.value = true
  }

  const handleBlur = () => {
    isFocused.value = false
    dropdownVisible.value = false
    activeSubMenu.value = ''
    activeThirdMenu.value = null
  }

  const handleContainerMouseleave = () => {
    activeSubMenu.value = ''
    activeThirdMenu.value = null
    activeOption.value = null
    activeSecondLevelOption.value = null
  }

  const updateSubMenuPosition = () => {
    if (activeOption.value && selectDropdown.value) {
      const containerRect = selectDropdown.value.parentElement?.getBoundingClientRect()
      if (containerRect) {
        subMenuPosition.value = {
          top: `45px`,
          left: '100%',
          width: '100%'
        }
      }
    }
  }

  const updateThirdMenuPosition = () => {
    if (activeSecondLevelOption.value && selectDropdown.value) {
      const containerRect = selectDropdown.value.parentElement?.getBoundingClientRect()
      if (containerRect) {
        thirdMenuPosition.value = {
          top: `45px`,
          left: '200%',
          width: '100%'
        }
      }
    }
  }

  const selectStyle = useStyleComputed(props, {
    propToStyleMap: { width: 'width', height: 'height' }
  })

  return {
    dropdownVisible,
    activeSubMenu,
    activeThirdMenu,
    selectedLabel,
    isFocused,
    subMenuPosition,
    thirdMenuPosition,
    activeOption,
    activeSecondLevelOption,
    selectDropdown,
    dropdownPosition,
    activeSubMenuItems,
    activeThirdMenuItems,
    toggleDropdown,
    handleMouseenter,
    handleSecondLevelEnter,
    handleClick,
    handleFocus,
    handleBlur,
    handleContainerMouseleave,
    updateSubMenuPosition,
    updateThirdMenuPosition,
    selectStyle
  }
}
