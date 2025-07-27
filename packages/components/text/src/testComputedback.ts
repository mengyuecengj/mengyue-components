// import { computed } from "vue"

// export function useTextComputed(props: any) {
//     const textClass = computed(() => [
//         'my-text',
//         `my-text--${props.type}`,
//         ['small', 'medium', 'large'].includes(props.size) && `my-text--${props.size}`
//     ])
//     const textStyle = computed(() => {
//         const style: Record<string, string> = {}
//         if (props.Tecolor) style.color = props.Tecolor

//         // 自定义size处理
//         if (props.size && !['small', 'medium', 'large'].includes(props.size)) {
//             style.fontSize = typeof props.size === 'number'
//                 ? `${props.size}px`
//                 : props.size
//         }
//         return style
//     })
//     return {
//         textClass,
//         textStyle
//     }
// }
