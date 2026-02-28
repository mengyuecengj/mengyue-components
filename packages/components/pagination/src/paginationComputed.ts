// paginationComputed.ts

import { computed } from 'vue'

export interface PaginationProps {
  total: number | string
  pageSize: number | string
  maxPagerCount: number | string
  modelValue: number | string
  prevColor: string
  prevTextColor: string
  itemColor: string
  itemTextColor: string
  activeItemColor?: string
  activeItemTextColor?: string
}

// 👇 定义 emit 的精确类型
interface PaginationEmits {
  (event: 'update:modelValue', value: number): void
  (event: 'update:page-size', size: number): void
  (event: 'change', page: number, size: number): void
}

export function usePaginationComputed(props: PaginationProps, emit: PaginationEmits) {
  const totalPages = computed(() => Math.ceil(Number(props.total) / Number(props.pageSize)))

  const pagerList = computed(() => {
    const pages = []
    const maxPagerCount = Number(props.maxPagerCount)
    const half = Math.floor(maxPagerCount / 2)
    const currentPage = Number(props.modelValue)
    let start, end

    if (totalPages.value <= maxPagerCount) {
      start = 1
      end = totalPages.value
    } else {
      if (currentPage <= half) {
        start = 1
        end = maxPagerCount - 2
      } else if (currentPage >= totalPages.value - half) {
        start = totalPages.value - maxPagerCount + 3
        end = totalPages.value
      } else {
        start = currentPage - half + 1
        end = currentPage + half - 1
      }
    }

    pages.push(1)
    if (start > 2) pages.push('...')

    for (let i = Math.max(2, start); i <= Math.min(totalPages.value - 1, end); i++) {
      pages.push(i)
    }

    if (end < totalPages.value - 1) pages.push('...')
    if (totalPages.value > 1) pages.push(totalPages.value)

    return pages
  })

  const stylePage = computed(() => ({
    backgroundColor: props.prevColor,
    color: props.prevTextColor,
  }))

  const itemPageStyle = computed(() => ({
    backgroundColor: props.itemColor,
    color: props.itemTextColor,
  }))

  const activeItemStyle = computed(() => ({
    backgroundColor: props.activeItemColor || props.itemColor,
    color: props.activeItemTextColor || props.itemTextColor,
  }))

  return { totalPages, pagerList, stylePage, itemPageStyle, activeItemStyle }
}