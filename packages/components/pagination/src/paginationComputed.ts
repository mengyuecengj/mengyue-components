// import { PaginationProps } from "./pagination";
import { computed } from 'vue'
export interface PaginationProps {
    total: number | string
    pageSize: number | string
    maxPagerCount: number | string  // 修改此处以匹配 props 定义
    currentPage: number | string    // 修改此处以匹配 props 定义
    prneColor: string
    prneTextColor: string
    itemColor: string
    itemTextColor: string
    activeItemColor?: string
    activeItemTextColor?: string
}

export function usePaginationComputed(props: PaginationProps, emit: (event: "update:current-page" | "update:page-size" | "change", ...args: any[]) => void) {
    const totalPages = computed(() => Math.ceil(Number(props.total) / Number(props.pageSize)));
    const pagerList = computed(() => {
        const pages = [];
        // 将 maxPagerCount 转换为数字类型
        const maxPagerCount = Number(props.maxPagerCount);
        const half = Math.floor(maxPagerCount / 2);
        // 将 currentPage 转换为数字类型
        const currentPage = Number(props.currentPage);
        let start, end;

        if (totalPages.value <= maxPagerCount) {
            // 显示所有页码
            start = 1;
            end = totalPages.value;
        } else {
            // 显示部分页码 + 省略号
            if (currentPage <= half) {
                start = 1;
                end = maxPagerCount - 2;
            } else if (currentPage >= totalPages.value - half) {
                start = totalPages.value - maxPagerCount + 3;
                end = totalPages.value;
            } else {
                start = currentPage - half + 1;
                end = currentPage + half - 1;
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
            backgroundColor: props.itemColor,
            color: props.itemTextColor,
        }
    })

    // 选中项样式（可以和未选中项相同或不同）
    const activeItemStyle = computed(() => {
        return {
            backgroundColor: props.activeItemColor || props.itemColor,
            color: props.activeItemTextColor || props.itemTextColor,
        }
    })
    return { totalPages, pagerList, stylePage, itemPageStyle, activeItemStyle }
}