import { ref, computed } from 'vue'
import { SlidebarProps } from './slidebar'
export function useSlidebarComputed(props: SlidebarProps) {
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

    return {
        num,
        progressWidth,
        track,
        containerStyle,
        startDrag,
        onMouseMove,
        stopDrag
    }
}
