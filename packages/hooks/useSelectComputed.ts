import { ref, onMounted, onUnmounted, watch, type Ref } from 'vue';

/**
 * 通用 Select Hook
 *
 * @param modelValue    v-model 绑定的值
 * @param emit          用于触发 update:modelValue
 * @param disabled      组件的 disabled 状态
 */
export function useSelect<T>(
  modelValue: Ref<T>,
  emit: (e: 'update:modelValue', val: T) => void,
  disabled: Ref<boolean>
) {
  const dropdownVisible = ref(false);
  const isFocused = ref(false);

  function toggleDropdown() {
    if (disabled.value) return;
    dropdownVisible.value = !dropdownVisible.value;
  }

  function handleFocus() {
    isFocused.value = true;
  }

  function handleBlur() {
    isFocused.value = false;
    dropdownVisible.value = false;
  }

  function onClickOutside(e: MouseEvent) {
    // 这里假设根元素使用 class="select-e"
    if (!(e.target as HTMLElement).closest('.select-e')) {
      dropdownVisible.value = false;
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClickOutside);
  });
  onUnmounted(() => {
    document.removeEventListener('click', onClickOutside);
  });

  // 监听外部 v-model 改变
  watch(modelValue, (val) => {
    // 这里可以同步 selectedLabel 等
  });

  return {
    dropdownVisible,
    isFocused,
    toggleDropdown,
    handleFocus,
    handleBlur,
  };
}
