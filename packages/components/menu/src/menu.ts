import type { PropType } from "vue";

export const menuProps = {
    defaultActive: {
        type: String,
        default: ''
    },
    mode: {
        type: String as PropType<'vertical' | 'horizontal'>, default: 'vertical'
    },
    collapse: {
        type: Boolean,
        default: false
    },
    backgroundColor: {
        type: String,
        default: '#2f3b46'
    },
    textColor: {
        type: String,
        default: '#bfcbd9'
    },
    activeTextColor: {
        type: String,
        default: '#409EFF'
    },
    trigger: {
        type: String as PropType<'click' | 'hover'>,
        default: 'click'
    },
    uniqueOpened: {
        type: Boolean,
        default: false
    },
    defaultOpeneds: {
        type: Array as PropType<string[]>,
        default: () => []
    },
    collapseTransition: {
        type: Boolean,
        default: true
    }
}