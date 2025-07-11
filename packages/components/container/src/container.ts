export const containerProps = {
    height: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: 'div'
    },
}

export const headerProps = {
    ...containerProps,
    tag: {
        type: String,
        default: 'header'
    }
}

export const footerProps = {
    // 其他组件通用containerProps功能
    tag: {
        type: String,
        default: 'footer'
    }
}


export const mainProps = {
    tag: {
        type: String,
        default: 'main'
    }
}

export const asideProps = {
    tag: {
        type: String,
        default: 'aside'
    }
}
