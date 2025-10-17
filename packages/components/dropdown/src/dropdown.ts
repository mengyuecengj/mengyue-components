import { type UseDropdownOptions } from './dropdownComputed';
export const dropdownProps = {
    type: {
        type: String,
        default: 'default'
    }, // default, primary
    size: {
        type: String,
        default: 'md'
    }, // sm, md, lg
    buttonProps: {
        type: Object,
        default: () => ({})
    },
    maxHeight: {
        type: [String, Number],
        default: null
    },
    splitButton: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    placement: {
        type: String,
        default: 'bottom'
    },
    trigger: {
        type: String as () => UseDropdownOptions['trigger'], default: 'hover'
    },
    triggerKeys: {
        type: Array as any,
        default: () => ['Enter', ' ', 'ArrowDown', 'NumpadEnter']
    },
    hideOnClick: {
        type: Boolean,
        default: true
    },
    showTimeout: {
        type: Number,
        default: 150
    },
    hideTimeout: {
        type: Number,
        default: 150
    },
    role: {
        type: String,
        default: 'menu'
    },
    tabindex: {
        type: [String, Number],
        default: 0
    },
    popperClass: {
        type: String,
        default: ''
    },
    popperOptions: {
        type: Object as any,
        default: () => ({})
    }, // reserved
    teleported: {
        type: Boolean,
        default: true
    },
    persistent: {
        type: Boolean,
        default: true
    },
    backGroundColor: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    noCaret: {
        type: Boolean,
        default: false
    }
};
