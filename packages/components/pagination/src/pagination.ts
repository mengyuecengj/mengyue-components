export const paginationProps = {
    total: {
        type: [Number, String],
        default: 0
    },
    pageSize: {
        type: [Number, String],
        default: 10
    },
    currentPage: {
        type: [Number, String],
        default: 1
    },
    maxPagerCount: {
        type: [Number, String],
        default: 7
    },
    layout: {
        type: String,
        default: 'prev, pager, next'  // 修正拼写错误: deefault -> default
    },
    pageSizes: {
        type: Array as () => (number[]),
        default: () => []
    },
    background: {
        type: Boolean,
        default: false
    },
    small: {
        type: Boolean,
        default: false
    },
    hideOnSinglePage: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    prneColor: {
        type: String,
        default: ''
    },
    prneTextColor: {
        type: String,
        default: ''
    },
    itemColor: {
        type: String,
        default: ''
    },
    itemTextColor: {
        type: String,
        default: ''
    },
    activeItemColor: {
        type: String,
        default: ''
    },
    activeItemTextColor: {
        type: String,
        default: ''
    }
}