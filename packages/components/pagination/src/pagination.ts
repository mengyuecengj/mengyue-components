export const paginationProps = {
    total: {
        type: Number,
        default: 0
    },
    pageSize: {
        type: Number,
        default: 10
    },
    currentPage: {
        type: Number,
        default: 1
    },
    maxPagerCount: {
        type: Number,
        default: 7
    },
    layout: {
        type: String,
        deefault: 'prev, pager, next'
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
    }
}

export type PaginationProps = Partial<typeof paginationProps>