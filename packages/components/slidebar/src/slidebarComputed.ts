// slidebarComputed.ts
import { ref, computed } from 'vue';
import { SlidebarProps } from './slidebar';

export function useSlidebarComputed(props: SlidebarProps, emit: (event: 'update:modelValue', value: number | string) => void) {
  const num = ref<number | string>(1); // num 支持 number 或 string
  const progressWidth = ref(0);
  const track = ref<HTMLElement | null>(null);
  let isDragging = false;

  // 初始化时同步 modelValue
  const initializeValue = () => {
    if (props.modelValue !== '' && props.modelValue !== undefined) {
      const value = typeof props.modelValue === 'string' ? parseFloat(props.modelValue) : props.modelValue;
      if (!isNaN(value)) {
        num.value = value;
        progressWidth.value = value;
      }
    }
  };

  initializeValue();

  const containerStyle = computed(() => ({
    width: props.size || '100%',
    maxWidth: props.size ? 'none' : '320px',
  }));

  const updateValue = (clientX: number) => {
    if (!track.value || props.disabled) return;
    const rect = track.value.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    progressWidth.value = percentage;
    num.value = Math.round(percentage);

    // 根据输入 modelValue 的类型，决定发出 string 或 number
    const emitValue = typeof props.modelValue === 'string' ? String(num.value) : num.value;
    emit('update:modelValue', emitValue);
  };

  const startDrag = (e: MouseEvent) => {
    if (props.disabled) return;
    isDragging = true;
    updateValue(e.clientX);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || props.disabled) return;
    updateValue(e.clientX);
  };

  const stopDrag = () => {
    isDragging = false;
  };

  return {
    num,
    progressWidth,
    track,
    containerStyle,
    startDrag,
    onMouseMove,
    stopDrag,
  };
}