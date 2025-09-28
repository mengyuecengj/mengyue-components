<template>
  <div class="my-table" :style="{ '--table-border-color': props.borderColor, ...tableStyle }">
    <table>
      <thead :style="headerStyle">
        <tr>
          <th v-for="column in columnsWithWidth" :key="column.prop" :style="getColumnStyle(column, 'header')"
            :data-column="column.prop">
            <!-- 处理 selection 列的头部复选框（直接 input，无 wrapper） -->
            <input v-if="column.type === 'selection'" type="checkbox" class="selection-checkbox"
              :checked="isAllSelected" :indeterminate="isIndeterminate" @change="toggleSelectAll" />
            <template v-else>
              {{ column.label }}
            </template>
          </th>
        </tr>
      </thead>

      <tbody :style="bodyStyle">
        <tr v-for="(item, index) in flatTableData" :key="getRowKey(item.row)"
          :style="index % 2 === 1 ? { backgroundColor: props.stripe } : {}" class="my-table-row"
          :class="{ 'my-table-row--expanded': isRowExpanded(item.row) }">
          <td v-for="column in columnsWithWidth" :key="column.prop" :data-column="column.prop" :style="{
            paddingLeft: column.prop === firstColumnProp ? calcPadding(item.level) : '',
            ...getColumnStyle(column, 'body')
          }">
            <!-- 展开图标 -->
            <span v-if="column.prop === firstColumnProp && hasTreeData" class="my-table__expand-icon"
              :class="{ 'my-table__expand-icon--expanded': isRowExpanded(item.row) }"
              @click="toggleRowExpansion(item.row)" v-show="!item.isLeaf || hasChildren(item.row)">
              <svg v-if="!item.isLeaf || hasChildren(item.row)" viewBox="0 0 1024 1024" width="12" height="12">
                <path d="M256 128l512 384-512 384z" fill="currentColor"></path>
              </svg>
            </span>

            <!-- 处理 selection 列的行复选框（直接 input，无 wrapper） -->
            <input v-if="column.type === 'selection'" type="checkbox" class="selection-checkbox"
              :checked="isRowSelected(item.row)" @change="toggleRowSelection(item.row)" />

            <!-- 优先渲染具名 slot，否则渲染单元格值 -->
            <template v-else>
              <slot :name="column.prop" :row="item.row" :level="item.level" :index="index">
                {{ getCellValue(item.row, column.prop) }}
              </slot>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分页器插槽区域 -->
    <div class="pagination-container">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, useSlots, ref, watch } from 'vue';
import type { VNode } from 'vue';
import type { TableColumnProps, TableProps } from './type';
import { tableProps } from './table';
import { useTableComputed } from './tableComputed';
import '../style/table.scss';

/* ---------------------- props & helpers ---------------------- */
const propsRuntime = defineProps(tableProps);
const props = propsRuntime as unknown as TableProps;

// 定义 emit 事件
const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void;
  (e: 'selection-change', value: any[]): void;
}>();

/* 从你的 hook 获取样式对象（保持不变） */
const { tableStyle, headerStyle, bodyStyle } = useTableComputed(props);

/* slots */
const slots = useSlots();

/* 辅助：第一个展示列的 prop（用于缩进/展开图标） */
const firstColumnProp = computed(() => {
  // 优先取 props.columns 的第一个 prop，否则取合并后的 columnsWithWidth 的第一个
  const pc = (props.columns && props.columns[0] && (props.columns[0].prop as string | undefined)) ?? undefined;
  return pc ?? (columnsWithWidth.value[0]?.prop ?? '');
});

/* 检查是否有树形数据 */
const hasTreeData = computed(() => {
  return (props.data ?? []).some((row: Record<string, unknown>) => {
    const children = getChildren(row as Record<string, any>);
    return children && children.length > 0;
  });
});

/* 安全地把任意 "treeProps" 视为对象，进一步在访问具体字段前做类型保护 */
const getTreeProps = (): Record<string, any> => {
  return (props.treeProps ?? {}) as Record<string, any>;
};

/* 统一把 row 视为 Record<string, any>（便于索引访问） */
type RowRecord = Record<string, any>;

/* ---------------------- 状态：展开行 ---------------------- */
const expandedRowKeys = ref<(string | number)[]>([]);

/* 切换展开 */
const toggleRowExpansion = (row: RowRecord, expanded?: boolean) => {
  const key = getRowKey(row);
  const index = expandedRowKeys.value.indexOf(key);
  const isExpanded = index !== -1;

  if (expanded === undefined) expanded = !isExpanded;

  if (expanded && !isExpanded) {
    expandedRowKeys.value.push(key);
  } else if (!expanded && isExpanded) {
    expandedRowKeys.value.splice(index, 1);
  }
};

/* 获取行的 key（把 props.rowKey 强制为字符串键） */
const getRowKey = (row: RowRecord): string | number => {
  const rk = String(props.rowKey ?? 'id');
  return row[rk] as string | number;
};

const isRowExpanded = (row: RowRecord): boolean => {
  return expandedRowKeys.value.includes(getRowKey(row));
};

/* ---------------------- tree helpers（已收窄） ---------------------- */
/* children 字段名必须为 string（如果没有，默认 'children'） */
const getChildren = (row: RowRecord): RowRecord[] => {
  const tp = getTreeProps();
  const childrenProp = typeof tp.children === 'string' ? tp.children : 'children';
  const ch = (row as RowRecord)[childrenProp];
  return Array.isArray(ch) ? (ch as RowRecord[]) : [];
};

/* hasChildren：如果 treeProps.hasChildren 是 string，就用 row[thatKey]；否则回退到 getChildren 长度检查 */
const hasChildren = (row: RowRecord): boolean => {
  const tp = getTreeProps();
  const hasChildrenProp = tp.hasChildren;
  if (typeof hasChildrenProp === 'string') {
    // 强制把索引 key 转为 string，再访问 row
    return Boolean((row as RowRecord)[String(hasChildrenProp)]);
  }
  return getChildren(row).length > 0;
};

/* ---------------------- 扁平化树数据 ---------------------- */
const flattenTreeData = (
  data: RowRecord[],
  level = 0,
  parent: RowRecord | null = null
): Array<{ row: RowRecord; level: number; parent: RowRecord | null; isLeaf: boolean }> => {
  const result: Array<{ row: RowRecord; level: number; parent: RowRecord | null; isLeaf: boolean }> = [];

  data.forEach((item) => {
    const children = getChildren(item);
    const isLeaf = children.length === 0;

    result.push({
      row: item,
      level,
      parent,
      isLeaf,
    });

    if (!isLeaf && isRowExpanded(item)) {
      result.push(...flattenTreeData(children, level + 1, item));
    }
  });

  return result;
};

const flatTableData = computed(() => flattenTreeData((props.data ?? []) as RowRecord[]));

/* ---------------------- 模板安全访问帮助器 ---------------------- */
/* 计算缩进（把 props.indent 强制为 number 并提供默认值 16） */
const calcPadding = (level: number) => {
  const indent = Number(props.indent ?? 16);
  const lv = Number(level ?? 0);
  return `${lv * indent}px`;
};

/* 安全获取单元格值（避免 template 中直接用 unknown 索引） */
const getCellValue = (row: RowRecord, prop: string | number | undefined) => {
  const key = String(prop ?? '');
  return (row as Record<string, any>)[key];
};

/* ---------------------- 选择功能 ---------------------- */
// 存储选中的行（支持 v-model 双向绑定）
const selectedRows = ref<any[]>([]);

// 初始化 selectedRows 从 modelValue（如果需要，可扩展为解析 modelValue）
watch(() => props.modelValue, (val) => {
  if (val && Array.isArray(val)) {
    selectedRows.value = val;
  }
}, { immediate: true });

// 判断单行是否选中
const isRowSelected = (row: RowRecord): boolean => {
  const key = getRowKey(row);
  return selectedRows.value.some((s) => getRowKey(s as RowRecord) === key);
};

// 切换单行选中
const toggleRowSelection = (row: RowRecord) => {
  const key = getRowKey(row);
  const index = selectedRows.value.findIndex((s) => getRowKey(s as RowRecord) === key);
  if (index > -1) {
    selectedRows.value.splice(index, 1);
  } else {
    selectedRows.value.push(row);
  }
  emitUpdate();
};

// 判断是否全选
const isAllSelected = computed(() => {
  return flatTableData.value.length > 0 && selectedRows.value.length === flatTableData.value.length;
});

// 判断是否部分选择（用于显示indeterminate状态）
const isIndeterminate = computed(() => {
  return selectedRows.value.length > 0 && selectedRows.value.length < flatTableData.value.length;
});

// 切换全选状态
const toggleSelectAll = () => {
  if (isAllSelected.value) {
    // 如果已经全选，则清空选择
    selectedRows.value = [];
  } else {
    // 如果没有全选，则选择所有可见行
    selectedRows.value = flatTableData.value.map((item) => item.row);
  }
  emitUpdate();
};

// 统一 emit 更新
const emitUpdate = () => {
  emit('update:modelValue', selectedRows.value);
  emit('selection-change', selectedRows.value);
};

// 监听选中行变化（移除原 watch，使用 emitUpdate 统一）
watch(selectedRows, emitUpdate, { deep: true });

/* ---------------------- 解析 slot 中的列声明 ---------------------- */
const isValidAlign = (align: any): align is 'left' | 'right' | 'center' => {
  return ['left', 'right', 'center'].includes(align);
};

const slotColumns = computed<TableColumnProps[]>(() => {
  const rawVnodes = slots.default ? slots.default({ row: {}, level: 0, index: 0 }) : [];
  const vnodes = (rawVnodes as VNode[]) ?? [];
  const cols: TableColumnProps[] = [];

  for (const v of vnodes) {
    if (!v || typeof v !== 'object') continue;

    const comp = (v as VNode).type as unknown;
    let compName: string | undefined;

    if (typeof comp === 'object' && comp !== null) {
      compName = (comp as { name?: string }).name || (comp as any).__name || (comp as any).displayName;
    } else if (typeof comp === 'function') {
      compName = (comp as { name?: string }).name;
    } else if (typeof comp === 'string') {
      compName = comp;
    }

    // 处理 MYTableColumn 组件
    if (compName && compName === 'MYTableColumn') {
      // 把 vnode.props 断言成 Record<string, any>，再做类型检查
      const p = ((v as VNode).props ?? {}) as Record<string, any>;
      const propVal = p.prop;
      const typeVal = p.type;  // 新增：提取 type
      if (typeof propVal !== 'string' && typeVal !== 'selection') continue;  // selection 无需 prop

      const effectiveProp = typeVal === 'selection' ? 'selection' : propVal;  // selection 列用特殊 prop
      const label = typeof p.label === 'string' ? p.label : (typeVal === 'selection' ? '' : undefined);  // selection 无 label
      const width = typeof p.width === 'string' ? p.width : undefined;
      const align = isValidAlign(p.align) ? p.align : (typeVal === 'selection' ? 'center' : undefined);  // selection 默认 center

      cols.push({
        prop: effectiveProp,
        label,
        width,
        type: typeVal,  // 新增
        align,  // 新增
        className: '',
      });
    }
    // 处理具名插槽（如序号列等自定义列）
    else if ((v as VNode).props && typeof (v as VNode).props === 'object') {
      // 检查是否是具名插槽
      const vnodeProps = (v as VNode).props as Record<string, any>;
      if (vnodeProps.slot) {
        // 对于具名插槽，我们创建一个虚拟的列定义
        cols.push({
          prop: vnodeProps.slot,
          label: vnodeProps.slot, // 默认使用slot名称作为label
          width: '',
          className: '',
        });
      }
    }
  }

  return cols;
});

/* ---------------------- 合并 columns（props 与 slot） ---------------------- */
const columnsWithWidth = computed<TableColumnProps[]>(() => {
  const propCols = (props.columns ?? []) as TableColumnProps[];

  if (!propCols || propCols.length === 0) {
    return slotColumns.value.map((c) => ({ ...c, width: c.width ?? '' }));
  }

  const merged = propCols.map((pc) => {
    const sc = slotColumns.value.find((s) => s.prop === pc.prop);
    const width = sc && sc.width ? sc.width : pc.width ?? '';
    const type = sc?.type ?? pc.type ?? '';
    const align = sc?.align ?? pc.align ?? '';
    return { ...pc, width, type, align } as TableColumnProps;
  });

  for (const s of slotColumns.value) {
    if (!merged.find((m) => m.prop === s.prop)) {
      merged.push({ ...s, width: s.width ?? '' });
    }
  }

  return merged;
});

/* ---------------------- 列样式计算（支持 align） ---------------------- */
const getColumnStyle = (column: TableColumnProps, part: 'header' | 'body') => {
  const align = part === 'header' ? column.headerAlign || column.align : column.bodyAlign || column.align;
  return {
    textAlign: align || 'left',
    width: column.width,
  };
};

/* ---------------------- provide 给子组件读取 ---------------------- */
provide(
  'myTable',
  computed(() => {
    return {
      width: props.width ?? '',
      height: props.height ?? '',
      // 提供选中行相关的方法给子组件使用
      selectedRows: selectedRows.value,
      toggleSelectAll,
      isAllSelected: isAllSelected.value,
      isIndeterminate: isIndeterminate.value,
      isRowSelected,
      toggleRowSelection
    };
  })
);
</script>
