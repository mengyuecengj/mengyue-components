<template>
  <div class="my-table" :style="{ '--table-border-color': props.borderColor, ...tableStyle }">
    <table>
      <thead :style="headerStyle">
        <tr>
          <th class="my-table-header" v-for="column in columnsWithWidth" :key="column.prop"
            :style="{ width: column.width, ...headerStyle }" :data-column="column.prop">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody :style="bodyStyle">
        <!-- <tr v-for="(row, rowIndex) in props.data" :key="rowIndex" :style="rowIndex % 2 === 0 ? { backgroundColor: '#f5f5f5' } : {}"> -->
        <tr v-for="(row, rowIndex) in props.data" :key="rowIndex"
          :style="rowIndex % 2 === 1 ? { backgroundColor: props.stripe } : {}">
          <td v-for="column in columnsWithWidth" :key="column.prop" :data-column="column.prop">
            <!-- 动态命名 slot：如果父组件提供了 <template #propName>，则优先渲染该 slot -->
            <slot :name="column.prop" :row="row">
              {{ row[column.prop] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * 目的：
 * - 安全地从 slot 中解析 <MYTableColumn prop="..." width="..."> 的声明
 * - 将 slot 中声明的列与通过 props.columns 传入的数组合并
 * - 尽量避免 any，使用 unknown/类型收窄保证类型安全
 */

import { computed, provide, useSlots } from 'vue';
import type { VNode } from 'vue';
import type { TableColumnProps, TableProps } from './type';
import { tableProps } from './table'; // 运行时 props 验证
import { useTableComputed } from './tableComputed';
import '../style/table.scss'

/* ----------------------------------------------------------------------------
 * Props：两种常见写法说明
 *
 * A) 静态类型推断
 *    const props = defineProps<TableProps>();
 * ----------------------------------------------------------------------------
 */
const propsRuntime = defineProps(tableProps);
// 为了在后续代码里使用严格类型，我们把 runtime props 断言成 TableProps。
// 这里用两步是因为 Vue 的 runtime prop defs（tableProps）和 TS 的类型系统
// 在 defineProps 处不总是能同时满足。
const props = propsRuntime as unknown as TableProps;

/* 计算样式（你之前有的 useTableComputed，保持不变） */
const { tableStyle, headerStyle, bodyStyle } = useTableComputed(props as TableProps);

/* 获取默认 slot 的 vnode 列表（父组件模板中写的 MYTableColumn 都在这里） */
const slots = useSlots();

/* ----------------------------------------------------------------------------
 * slotColumns：从 slot vnode 中解析出列的静态声明（prop/label/width）
 *
 * 实现要点：
 * - vnode.type 的结构可能不同（字符串、函数或组件对象），因此先做类型收窄
 * - vnode.props 是 unknown，需要做 typeof 检查后安全读取字段
 * - 只处理 name 为 'MYTableColumn' 的组件（和你列组件的 defineOptions 名称对应）
 * ----------------------------------------------------------------------------
 */
const slotColumns = computed<TableColumnProps[]>(() => {
  // raw vnodes（可能包含文本节点、注释等）
  const rawVnodes = slots.default ? slots.default({ row: {} }) : [];
  // 明确地把它当作 VNode[] 处理
  const vnodes = (rawVnodes as VNode[]) ?? [];
  const cols: TableColumnProps[] = [];

  for (const v of vnodes) {
    if (!v || typeof v !== 'object') continue;

    // vnode.type 有多种可能：string | object | function | symbol
    const comp = (v as VNode).type as unknown;
    let compName: string | undefined;

    // 尝试从几种常见字段读取组件名（兼容性写法）
    if (typeof comp === 'object' && comp !== null) {
      compName =
        (comp as { name?: string }).name ||
        (comp as any).__name ||
        (comp as any).displayName;
    } else if (typeof comp === 'function') {
      compName = (comp as { name?: string }).name;
    } else if (typeof comp === 'string') {
      compName = comp;
    }

    // 只关心 MYTableColumn
    if (!compName || compName !== 'MYTableColumn') continue;

    // vnode.props 可能为 null/undefined 或者是对象；先安全取出
    const p = ((v as VNode).props ?? {}) as Record<string, unknown>;

    // 必须有 prop 字段并且为 string（列的 key）
    const propVal = p.prop;
    if (typeof propVal !== 'string') continue;

    // 可选字段：label / width，检查类型后再使用
    const label = typeof p.label === 'string' ? p.label : undefined;
    const width = typeof p.width === 'string' ? p.width : undefined;

    // push 到结果中（children/其它字段可按需扩展）
    cols.push({
      prop: propVal,
      label,
      width
    });
  }

  return cols;
});


/* ----------------------------------------------------------------------------
 * columnsWithWidth：合并 props.columns 与 slotColumns
 *
 * 这里用“slot 优先覆盖 props”的策略（slot 中声明的 width 会覆盖 props.columns 中对应列的 width）
 * 如果你希望反过来（props 优先），把合并逻辑改成 pc.width || sc?.width 即可。
 * ----------------------------------------------------------------------------
 */
const columnsWithWidth = computed<TableColumnProps[]>(() => {
  const propCols = props.columns ?? [];

  // 如果 props.columns 为空，则直接返回 slot 声明的列（适用于仅通过 slot 声明列的使用场景）
  if (!propCols || propCols.length === 0) {
    return slotColumns.value.map(c => ({ ...c, width: c.width ?? '' }));
  }

  // 否则把两边合并：slot 的 width 覆盖 props 中的 width（如果存在）
  const merged = propCols.map(pc => {
    const sc = slotColumns.value.find(s => s.prop === pc.prop);
    const width = sc && sc.width ? sc.width : (pc.width ?? '');
    return { ...pc, width } as TableColumnProps;
  });

  // 把仅在 slot 中声明但不在 props.columns 里的列追加进去
  for (const s of slotColumns.value) {
    if (!merged.find(m => m.prop === s.prop)) merged.push({ ...s });
  }

  return merged;
});

/* ----------------------------------------------------------------------------
 * Provide：把表格宽度或其它信息提供给子组件
 * 子组件可通过 inject('myTable') 读取
 * ----------------------------------------------------------------------------
 */
provide('myTable', computed(() => {
  props.width ?? '',
    props.height ?? ''
}));
</script>
