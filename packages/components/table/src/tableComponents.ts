import { computed, ref, useSlots, watch, onMounted, onUnmounted } from 'vue';
import type { VNode, Slots } from 'vue';
import { Props, Column } from './type'

export function useTableLogic(props: Props, emit: (event: string, ...args: unknown[]) => void) {
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

  return {
    columns,
    leafColumns,
    headerRows,
    sortKey,
    sortOrder,
    handleSort,
    filters,
    currentFilterProp,
    filterPosition,
    currentFilters,
    showFilter,
    sortedAndFilteredData,
    selectedRows,
    selectAll,
    vTooltip,
  };
}