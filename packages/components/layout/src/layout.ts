// 标签
// MYRow
// | -- gutter     // number/string 间隔，最大24间隔，默认或者gutter为空，默认0
// | -- jusctiy    // string 水平排列, start(从左到右排列), end(从右到左排列), center(居中), space-around(平均分布), space-between(两端对齐)
// | -- align      // boolean 从上到下排列并居中对齐

export const layoutProps = {
    gutter: {
        type: [Number, String],
        default: 0
    },
    between: {
        type: Boolean,
        default: false
    },
    direction: {
        type: Boolean,
        default: false
    },
    aligns: {
        type: Boolean,
        default: false
    },
    alignCenter: {
        type: Boolean,
        default: false
    },
    tag: {
        type: String,
        default: 'div'
    }
}

// MYCol
// | -- span       // number/string 1-24， 占用的宽度，1 - 24
// | -- offset     // number/string 1-24， 偏移量，1 - 24
// | -- pull       // number/string 1-24， 向左偏移量，1 - 24
// | -- push       // number/string 1-24， 向右偏移量，1 - 24
export const colProps = {
    span: {
        type: Number,
        default: 24
    },
    offsetLeft: {
        type: [Number, String],
        default: 0
    },
    offsetRight: {
        type: [Number, String],
        default: 0
    },
    tag: {
        type: String,
        default: 'div'
    }
}
