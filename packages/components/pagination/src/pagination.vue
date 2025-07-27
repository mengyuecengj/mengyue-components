<template>
  <div v-if="!hideOnSinglePage || totalPages > 1" class="my-pagination" :class="{ small, disabled }">
    <template v-for="item in layout.split(',').map(s => s.trim())" :key="item">
      <!-- 上一页 -->
      <button
        v-if="item === 'prev'"
        class="btn-prev"
        :class="{ 'has-background': background }"
        :disabled="currentPage === 1 || disabled"
        @click="handlePageChange(currentPage - 1)"
      >
        Prev
      </button>

      <!-- 页码 -->
      <div v-if="item === 'pager'" class="pager">
        <button
          v-for="page in pagerList"
          :key="page"
          :class="['pager-item', { active: currentPage === page, 'has-background': background }]"
          :disabled="disabled"
          @click="page !== '...' && handlePageChange(page)"
        >
          {{ page }}
        </button>
      </div>

      <!-- 下一页 -->
      <button
        v-if="item === 'next'"
        class="btn-next"
        :class="{ 'has-background': background }"
        :disabled="currentPage === totalPages || disabled"
        @click="handlePageChange(currentPage + 1)"
      >
        Next
      </button>

      <!-- 每页条数 -->
      <select
        v-if="item === 'sizes' && pageSizes.length"
        class="page-sizes"
        :disabled="disabled"
        :value="pageSize"
        @change="handleSizeChange($event.target.value)"
      >
        <option v-for="size in pageSizes" :key="size" :value="size">
          {{ size }} / page
        </option>
      </select>

      <!-- 跳转 -->
      <div v-if="item === 'jumper'" class="jumper">
        Go to
        <input
          type="number"
          :value="currentPage"
          :disabled="disabled"
          @change="handleJumperChange($event.target.value)"
        />
      </div>

      <!-- 总条数 -->
      <span v-if="item === 'total'" class="total">Total: {{ total }}</span>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({
    name: 'MYPagination'
})

// Props
const props = defineProps({
  total: { type: Number, default: 0 },
  pageSize: { type: Number, default: 10 },
  currentPage: { type: Number, default: 1 },
  maxPagerCount: { type: Number, default: 7 },
  layout: { type: String, default: 'prev, pager, next' },
  pageSizes: { type: Array, default: () => [] },
  background: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  hideOnSinglePage: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});

// Emits
const emit = defineEmits(['update:current-page', 'update:page-size', 'change']);

// 计算总页数
const totalPages = computed(() => Math.ceil(props.total / props.pageSize));

// 计算显示的页码列表
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

// 页码变更
const handlePageChange = (page) => {
  if (page >= 1 && page <= totalPages.value && page !== props.currentPage) {
    emit('update:current-page', page);
    emit('change', page, props.pageSize);
  }
};

// 每页条数变更
const handleSizeChange = (size) => {
  const newSize = Number(size);
  emit('update:page-size', newSize);
  emit('update:current-page', 1); // 重置到第一页
  emit('change', 1, newSize);
};

// 跳转到指定页
const handleJumperChange = (value) => {
  let page = Number(value);
  if (isNaN(page) || page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;
  handlePageChange(page);
};
</script>

<style scoped>
.my-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.my-pagination.small {
  font-size: 12px;
  gap: 4px;
}

.my-pagination.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-prev,
.btn-next,
.pager-item {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-prev:hover,
.btn-next:hover,
.pager-item:hover:not(.active) {
  background: #f5f5f5;
}

.has-background {
  background: #f0f0f0;
}

.has-background:hover {
  background: #e0e0e0;
}

.pager-item.active {
  background: #409eff;
  color: white;
  border-color: #409eff;
}

.pager-item[disabled],
.btn-prev[disabled],
.btn-next[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

.page-sizes {
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.jumper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.jumper input {
  width: 50px;
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.total {
  color: #666;
}
</style>