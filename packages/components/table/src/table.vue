<template>
  <div class="my-table" :class="{ bordered: !!border, stripe: !!stripe }" :style="{ height: fluidHeight ? '100%' : height ? height + 'px' : 'auto', overflow: 'auto' }">
    <table>
      <thead>
        <tr v-for="(row, rowIndex) in headerRows" :key="rowIndex">
          <th v-if="selection && rowIndex === 0" :rowspan="headerRows.length" :class="{ 'fixed-left': selectionFixed }">
            <input v-if="selection === 'multiple'" v-model="selectAll" type="checkbox" />
          </th>
          <th
            v-for="col in row"
            :key="col.prop || col.label"
            :colspan="col.colspan || 1"
            :rowspan="col.rowspan || 1"
            :style="{ width: col.width }"
            :class="{ 'fixed-left': col.fixed === 'left', 'fixed-right': col.fixed === 'right' }"
          >
            {{ col.label }}
            <span v-if="col.sortable" class="sort-icon" @click="handleSort(col.prop)">{{ sortKey === col.prop ? (sortOrder === 'asc' ? '↑' : '↓') : '↕' }}</span>
            <span v-if="col.filterable" class="filter-icon" @click="showFilter(col.prop)">🔍</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedAndFilteredData" :key="index" :class="rowClassName?.({ row, index })">
          <td v-if="selection" :class="{ 'fixed-left': selectionFixed }">
            <input v-model="selectedRows" :type="selection === 'single' ? 'radio' : 'checkbox'" :value="row" />
          </td>
          <td
            v-for="column in leafColumns" :key="column.prop"
            v-tooltip="column.prop ? (typeof row[column.prop] === 'string' ? row[column.prop] : String(row[column.prop])) : ''"
            :class="{ 'fixed-left': column.fixed === 'left', 'fixed-right': column.fixed === 'right' }"
          >
            <slot
              v-if="column.scopedSlot"
              :name="column.scopedSlot"
              v-bind="{ row, column, index }"
            >
              {{ column.prop ? row[column.prop] : '' }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="currentFilterProp" class="filter-dropdown" :style="{ top: filterPosition.top + 'px', left: filterPosition.left + 'px' }">
      <div v-for="filter in currentFilters" :key="filter.value">
        <label>
          <input v-model="filters[currentFilterProp]" type="checkbox" :value="filter.value" />
          {{ filter.text }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots, watch, onMounted, onUnmounted } from 'vue';
import type { VNode, Slots } from 'vue';

defineOptions({
  name: 'MYTable'
})

// Define Props Interface
export interface Props {
  data: Array<Record<string, unknown>>;
  border?: boolean;
  stripe?: boolean;
  height?: number;
  fluidHeight?: boolean;
  selection?: 'single' | 'multiple';
  selectionFixed?: boolean;
  rowClassName?: (params: { row: Record<string, unknown>; index: number }) => string;
}

// Extract Props
const props = defineProps<Props>();

// Define Emits
const emit = defineEmits(['selection-change', 'sort-change', 'filter-change']);

// Column Interface
export interface Column {
  prop?: string;
  label: string;
  width?: string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  filters?: Array<{ text: string; value: string | number }>;
  scopedSlot?: string;
  children?: Column[];
  colspan?: number;
  rowspan?: number;
}

// Parse Columns from Slots
const slots = useSlots();
const columns = computed<Column[]>(() => {
  const slotVNodes: VNode[] = slots.default?.({ row: {} as Record<string, unknown>, column: {} as Column, index: 0 }) || [];
  return slotVNodes
    .filter((vnode: VNode) => (vnode.type as { name: string })?.name === 'MYTableColumn')
    .map((vnode: VNode) => {
      const props = vnode.props as Column;
      let children: VNode[] = [];
      if (vnode.children && typeof vnode.children === 'object' && 'default' in vnode.children) {
        children = (vnode.children as Slots).default?.() || [];
      } else if (Array.isArray(vnode.children)) {
        children = vnode.children as VNode[];
      }
      const childColumns = children
        .filter((child: VNode) => (child.type as { name: string })?.name === 'MYTableColumn')
        .map((child: VNode) => child.props as Column);
      return { ...props, children: childColumns.length ? childColumns : undefined };
    });
});

// Get Leaf Columns
const leafColumns = computed<Column[]>(() => {
  const flattenColumns = (cols: Column[], result: Column[] = []): Column[] => {
    cols.forEach((col) => {
      if (col.children) {
        flattenColumns(col.children, result);
      } else {
        result.push(col);
      }
    });
    return result;
  };
  return flattenColumns(columns.value);
});

// Compute Header Rows
const headerRows = computed<Column[][]>(() => {
  const result: Column[][] = [];
  const maxDepth = (cols: Column[]): number => Math.max(...cols.map((col) => (col.children ? 1 + maxDepth(col.children) : 1)));
  const depth = maxDepth(columns.value);

  const parseColumns = (cols: Column[], currentDepth: number) => {
    if (!result[currentDepth]) result[currentDepth] = [];
    cols.forEach((col) => {
      const colspan = col.children ? col.children.length : 1;
      const rowspan = col.children ? 1 : depth - currentDepth;
      result[currentDepth].push({ ...col, colspan, rowspan });
      if (col.children) parseColumns(col.children, currentDepth + 1);
    });
  };
  parseColumns(columns.value, 0);
  return result;
});

// Sorting
const sortKey = ref<string>('');
const sortOrder = ref<'asc' | 'desc'>('asc');
const handleSort = (prop: string | undefined) => {
  if (!prop) return;
  if (sortKey.value === prop) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = prop;
    sortOrder.value = 'asc';
  }
  emit('sort-change', { prop: sortKey.value, order: sortOrder.value });
};

// Filtering
const filters = ref<Record<string, unknown[]>>({});
const currentFilterProp = ref<string | null>(null);
const filterPosition = ref({ top: 30, left: 0 });
const currentFilters = computed(() => {
  const col = leafColumns.value.find((c: Column) => c.prop === currentFilterProp.value);
  return col?.filters || [];
});
const showFilter = (prop: string | undefined) => {
  if (!prop) return;
  currentFilterProp.value = currentFilterProp.value === prop ? null : prop;
};

// Sorted and Filtered Data
const sortedAndFilteredData = computed(() => {
  let result = [...props.data];

  // Apply filters
  if (currentFilterProp.value && currentFilterProp.value in filters.value) {
    const selectedValues = filters.value[currentFilterProp.value] || [];
    if (selectedValues.length) {
      result = result.filter((row) => {
        const prop = currentFilterProp.value!;
        return selectedValues.includes(row[prop]);
      });
    }
  }

  // Apply sorting
  if (sortKey.value) {
    result.sort((a, b) => {
      if (!sortKey.value) return 0;
      const valA = a[sortKey.value] as string | number;
      const valB = b[sortKey.value] as string | number;
      return sortOrder.value === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });
  }

  return result;
});

// Selection
const selectedRows = ref<unknown[]>([]);
const selectAll = ref(false);
watch(selectAll, (val) => {
  selectedRows.value = val ? [...props.data] : [];
});
watch(selectedRows, (val) => {
  emit('selection-change', val);
});

// Tooltip Directive
const vTooltip = {
  mounted(el: HTMLElement, binding: { value: unknown }) {
    if (el.scrollWidth > el.offsetWidth) {
      el.title = typeof binding.value === 'string' ? binding.value : (el.textContent || '');
    }
  },
};

// Click Outside Handler
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target && !target.closest('.filter-dropdown') && !target.closest('.filter-icon')) {
    currentFilterProp.value = null;
  }
};
onMounted(() => document.addEventListener('click', handleClickOutside));
onUnmounted(() => document.removeEventListener('click', handleClickOutside));
</script>

<style scoped>
.my-table {
  overflow: auto;
  position: relative;
}
.my-table table {
  width: 100%;
  border-collapse: collapse;
}
.my-table th,
.my-table td {
  padding: 8px;
  text-align: left;
}
.stripe tr:nth-child(even) {
  background-color: #f5f7fa;
}
.bordered th,
.bordered td {
  border: 1px solid #dfe6ec;
}
.fixed-left {
  position: sticky;
  left: 0;
  background-color: #fff;
  z-index: 5;
}
.fixed-right {
  position: sticky;
  right: 0;
  background-color: #fff;
  z-index: 5;
}
.my-table thead th {
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 10;
}
.sort-icon,
.filter-icon {
  cursor: pointer;
  margin-left: 4px;
}
.filter-dropdown {
  position: absolute;
  background: white;
  border: 1px solid #dfe6ec;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 15;
}
</style>