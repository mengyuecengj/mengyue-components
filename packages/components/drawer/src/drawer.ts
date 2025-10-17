import type { PropType } from 'vue';
export const drawerProps = {
    modelValue: { 
        type: Boolean, 
        default: false 
    },
    title: { 
        type: String, 
        default: '' 
    },
    direction: { 
        type: String as PropType<'ltr' | 'rtl' | 'ttb' | 'btt'>, 
        default: 'rtl'
    },
    size: { 
        type: [String, Number], 
        default: '30%' 
    },
    withHeader: { 
        type: Boolean, 
        default: true 
    },
    showClose: { 
        type: Boolean, 
        default: true 
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    closeOnClickModal: { 
        type: Boolean, 
        default: true 
    },
    closeOnPressEscape: { 
        type: Boolean, 
        default: true 
    },
    beforeClose: Function as PropType<(done: () => void) => void>,
    lockScroll: { 
        type: Boolean, 
        default: true 
    },
};
