// import { PaginationProps } from "./pagination";
import { computed } from 'vue'
export interface PaginationProps {
    total: number
    pageSize: number
    maxPagerCount: number
    currentPage: number
    prneColor: string
    prneTextColor: string
    itemColor: string
    itemTextColor: string
    activeItemColor?: string     // 添加选中项背景色
    activeItemTextColor?: string // 添加选中项文字颜色
}

export function usePaginationComputed(props: PaginationProps, emit: (event: "update:current-page" | "update:page-size" | "change", ...args: any[]) => void) {
    const totalPages = computed(() => Math.ceil(props.total / props.pageSize));
    const pagerList = computed(() => {
        const pages = [];
        const maxPagerCount = props.maxPagerCount;
        const half = Math.floor(maxPagerCount / 2);
        let start, end;

        if (totalPages.value <= maxPagerCount) {
            // 显示所有页码
            start = 1;
            end = totalPages.value;
        } else {
            // 显示部分页码 + 省略号
            if (props.currentPage <= half) {
                start = 1;
                end = maxPagerCount - 2;
            } else if (props.currentPage >= totalPages.value - half) {
                start = totalPages.value - maxPagerCount + 3;
                end = totalPages.value;
            } else {
                start = props.currentPage - half + 1;
                end = props.currentPage + half - 1;
            }
        }

        // 添加首页
        pages.push(1);
        if (start > 2) pages.push('...');

        // 添加中间页码
        for (let i = Math.max(2, start); i <= Math.min(totalPages.value - 1, end); i++) {
            pages.push(i);
        }

        // 添加末页
        if (end < totalPages.value - 1) pages.push('...');
        if (totalPages.value > 1) pages.push(totalPages.value);

        return pages;
    });

    const stylePage = computed(() => {
        return {
            backgroundColor: props.prneColor,
            color: props.prneTextColor,
        }
    })

    // backgroundColor
    const itemPageStyle = computed(() => {
        return {
            backgroundColor: props.itemColor,  // 未选中项也使用 itemColor
            color: props.itemTextColor,
        }
    })

    // 选中项样式（可以和未选中项相同或不同）
    const activeItemStyle = computed(() => {
        return {
            backgroundColor: props.activeItemColor || props.itemColor,  // 优先使用选中项颜色
            color: props.activeItemTextColor || props.itemTextColor,
        }
    })
    return { totalPages, pagerList, stylePage, itemPageStyle, activeItemStyle }
}