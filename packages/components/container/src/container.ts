import { PropType } from "vue"

export const containerProps = {
    height: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'div'
    },
    background: {
        type: String,
        default: ''
    }
}

export const headerProps = {
    ...containerProps,
    fixed: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    tag: {
        type: String,
        default: 'header'
    }
}

export const asideProps = {
    ...containerProps,
    position: {
        type: String as PropType<'left' | 'right'>,
        default: 'left'
    },
    tag: {
        type: String,
        default: 'aside'
    }
}

export const mainProps = {
    ...containerProps,
    tag: {
        type: String,
        default: 'main'
    }
}

export const footerProps = {
    // 其他组件通用containerProps功能
    ...containerProps,
    tag: {
        type: String,
        default: 'footer'
    }
}
