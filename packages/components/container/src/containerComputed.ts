import { computed } from 'vue';
export function useContainerComputed(props: any) {
    const styles = {
        container: computed(() => ['my-container']),
        header: computed(() => ['my-header']),
        main: computed(() => ['my-main']),
        footer: computed(() => ['my-footer']),
        aside: computed(() => ['my-aside']),
    };

    const styleContainer = computed(() => {
        const s: Record<string, string> = {};
        if (props.height) {
            s.height = props.height
        }
        return s;
    })

    return {
        ...styles,
        styleContainer
    }
}
