<template>
  <div v-if="!hideOnSinglePage || totalPages > 1" class="my-pagination" :class="{ small, disabled }">
    <template v-for="item in (layout || '').split(',').map(s => s.trim())" :key="item">
      <!-- 上一页 -->
      <button v-if="item === 'prev'" class="btn-prev" :class="{ 'has-background': background }"
        :disabled="currentPageNumber  === 1 || disabled" @click="handlePageChange(currentPageNumber  - 1)" :style="stylePage">
        Prev
      </button>

      <!-- 页码 -->
      <div v-if="item === 'pager'" class="pager">
        <button v-for="page in pagerList" :key="page"
          :class="['pager-item', { active: currentPage === page, 'has-background': background }]" :disabled="disabled"
          @click="page !== '...' && handlePageChange(Number(page))"
          :style="currentPage === page ? activeItemStyle : itemPageStyle">
          {{ page }}
        </button>
      </div>

      <!-- 下一页 -->
      <button v-if="item === 'next'" class="btn-next" :class="{ 'has-background': background }"
        :disabled="currentPage === totalPages || disabled" @click="handlePageChange(currentPageNumber + 1)"
        :style="stylePage">
        Next
      </button>

      <!-- 每页条数 -->
      <select v-if="item === 'sizes' && pageSizes.length" class="page-sizes" :disabled="disabled" :value="pageSize"
        @change="handleSizeChange(($event.target as HTMLSelectElement).value)">
        <option v-for="size in pageSizes" :key="size" :value="size">
          {{ size }} / page
        </option>
      </select>

      <!-- 跳转 -->
      <div v-if="item === 'jumper'" class="jumper">
        Go to
        <input type="number" :value="currentPage" :disabled="disabled"
          @change="handleJumperChange(($event.target as HTMLInputElement).value)" />
      </div>

      <!-- 总条数 -->
      <span v-if="item === 'total'" class="total">Total: {{ total }}</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { paginationProps } from './pagination'
import { usePaginationComputed } from './paginationComputed';
import { computed } from 'vue';
import '../style/pagination.scss'

defineOptions({
  name: 'MYPagination'
})

const props = defineProps(paginationProps)
const emit = defineEmits(['update:current-page', 'update:page-size', 'change']);
const currentPageNumber = computed(() => Number(props.currentPage));

const { pagerList, totalPages, stylePage, itemPageStyle, activeItemStyle } = usePaginationComputed(props, emit)

// 页码变更
const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPageNumber.value) {
    emit('update:current-page', page);
    emit('change', page, props.pageSize);
  }
};

// 每页条数变更
const handleSizeChange = (size: string) => {
  const newSize = Number(size);
  emit('update:page-size', newSize);
  emit('update:current-page', 1); // 重置到第一页
  emit('change', 1, newSize);
};

// 跳转到指定页
const handleJumperChange = (value: string) => {
  let page = Number(value);
  if (isNaN(page) || page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;
  handlePageChange(page);
};
</script>
