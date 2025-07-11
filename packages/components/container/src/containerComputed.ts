import { computed } from 'vue';
export function useContainerComputed(props: any) {
    const classContainer = computed(() => ['my-container'])
    return { classContainer }
}
