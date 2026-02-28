<template>
  <div
    class="my-table"
    :class="{ 'is-loading': props.loading }"
    :style="{
      '--table-border-color': props.borderColor,
      '--hover-bg-color': props.hoverBackgroundColor,
      ...tableStyle
    }"
    :aria-busy="props.loading ? 'true' : 'false'"
  >
    <!-- 表格主体 -->
    <table>
      <thead :style="headerStyle">
        <tr>
          <th
            v-for="column in columnsWithWidth"
            :key="column.prop"
            :data-column="column.prop"
            :style="getColumnStyle(column, 'header')"
          >
            <!-- selection 表头 -->
            <input
              v-if="column.type === 'selection'"
              type="checkbox"
              class="selection-checkbox"
              :checked="isAllSelected"
              :indeterminate.prop="isIndeterminate"
              :disabled="props.loading"
              @change="toggleSelectAll"
            />
            <template v-else>
              {{ column.label }}
            </template>
          </th>
        </tr>
      </thead>

      <tbody :style="bodyStyle">
        <tr
          v-for="(item, index) in flatTableData"
          :key="getRowKey(item.row)"
          class="my-table-row"
          :class="{ 'my-table-row--expanded': isRowExpanded(item.row) }"
          :style="index % 2 === 1 ? { backgroundColor: props.stripe } : {}"
        >
          <td
            v-for="column in columnsWithWidth"
            :key="column.prop"
            :data-column="column.prop"
            :style="{
              paddingLeft:
                column.type !== 'selection' && column.prop === firstColumnProp
                  ? calcPadding(item.level)
                  : '',
              ...getColumnStyle(column, 'body')
            }"
          >
            <!-- selection 列 -->
            <input
              v-if="column.type === 'selection'"
              type="checkbox"
              class="selection-checkbox"
              :checked="isRowSelected(item.row)"
              :disabled="props.loading"
              @change="toggleRowSelection(item.row)"
            />

            <!-- 普通列 -->
            <template v-else>
              <!-- 树形展开图标（仅首列） -->
              <span
                v-if="column.prop === firstColumnProp && hasTreeData"
                class="my-table__expand-icon"
                :class="{ 'my-table__expand-icon--expanded': isRowExpanded(item.row) }"
                v-show="!item.isLeaf || hasChildren(item.row)"
                @click="toggleRowExpansion(item.row)"
              >
                <svg viewBox="0 0 1024 1024" width="12" height="12">
                  <path d="M256 128l512 384-512 384z" fill="currentColor" />
                </svg>
              </span>

              <slot
                :name="column.prop"
                :row="item.row"
                :level="item.level"
                :index="index"
              >
                {{ getCellValue(item.row, column.prop) }}
              </slot>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分页插槽 -->
    <div class="pagination-container">
      <slot name="pagination" />
    </div>

    <!-- loading 遮罩 -->
    <div v-if="props.loading" class="my-table__overlay">
      <div class="my-table__spinner" />
      <div class="my-table__loading-text">加载中...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, useSlots } from 'vue'
import type { Slots, VNode, CSSProperties } from 'vue'
import { tableProps } from './table'
import type { TableProps, TableColumnProps } from './type'
import { useTableComputed } from './tableComputed'
import '../style/table.scss'

/* props */
const propsRuntime = defineProps(tableProps)
const props = propsRuntime as unknown as TableProps

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown[]): void
  (e: 'selection-change', value: unknown[]): void
}>()

const { tableStyle, headerStyle, bodyStyle } = useTableComputed(props)
const slots: Slots = useSlots()

/* ---------- 行数据类型 ---------- */
type RowRecord = Record<string, unknown>

/* ---------- tree / expand ---------- */

const expandedRowKeys = ref<(string | number)[]>([])

const getRowKey = (row: RowRecord): string | number => {
  const rk = String(props.rowKey ?? 'id')
  return row[rk] as string | number
}

const isRowExpanded = (row: RowRecord) =>
  expandedRowKeys.value.includes(getRowKey(row))

const toggleRowExpansion = (row: RowRecord) => {
  if (props.loading) return
  const key = getRowKey(row)
  const index = expandedRowKeys.value.indexOf(key)
  index > -1
    ? expandedRowKeys.value.splice(index, 1)
    : expandedRowKeys.value.push(key)
}

/* treeProps 的最小安全定义 */
interface TreeProps {
  children?: string
  hasChildren?: string
}

const getTreeProps = (): TreeProps =>
  (props.treeProps as TreeProps | undefined) ?? {}

const getChildren = (row: RowRecord): RowRecord[] => {
  const { children = 'children' } = getTreeProps()
  const value = row[children]
  return Array.isArray(value) ? (value as RowRecord[]) : []
}

const hasChildren = (row: RowRecord) => {
  const { hasChildren } = getTreeProps()
  if (typeof hasChildren === 'string') {
    return Boolean(row[hasChildren])
  }
  return getChildren(row).length > 0
}

type FlatRow = { row: RowRecord; level: number; isLeaf: boolean }

const flattenTreeData = (
  data: RowRecord[],
  level = 0
): FlatRow[] => {
  const result: FlatRow[] = []
  data.forEach(row => {
    const children = getChildren(row)
    const isLeaf = children.length === 0
    result.push({ row, level, isLeaf })
    if (!isLeaf && isRowExpanded(row)) {
      result.push(...flattenTreeData(children, level + 1))
    }
  })
  return result
}

const flatTableData = computed(() =>
  flattenTreeData((props.data ?? []) as RowRecord[])
)

const hasTreeData = computed(() =>
  (props.data ?? []).some(row =>
    getChildren(row as RowRecord).length > 0
  )
)

/* ---------- selection ---------- */

const selectedRows = ref<RowRecord[]>([])

watch(
  () => props.modelValue,
  val => {
    if (Array.isArray(val)) {
      selectedRows.value = val as unknown as RowRecord[]
    }
  },
  { immediate: true }
)

const isRowSelected = (row: RowRecord) =>
  selectedRows.value.some(r => getRowKey(r) === getRowKey(row))

const toggleRowSelection = (row: RowRecord) => {
  if (props.loading) return
  const key = getRowKey(row)
  const index = selectedRows.value.findIndex(
    r => getRowKey(r) === key
  )
  index > -1
    ? selectedRows.value.splice(index, 1)
    : selectedRows.value.push(row)
  emitUpdate()
}

const isAllSelected = computed(
  () =>
    flatTableData.value.length > 0 &&
    selectedRows.value.length === flatTableData.value.length
)

const isIndeterminate = computed(
  () =>
    selectedRows.value.length > 0 &&
    selectedRows.value.length < flatTableData.value.length
)

const toggleSelectAll = () => {
  if (props.loading) return
  selectedRows.value = isAllSelected.value
    ? []
    : flatTableData.value.map(item => item.row)
  emitUpdate()
}

const emitUpdate = () => {
  emit('update:modelValue', selectedRows.value)
  emit('selection-change', selectedRows.value)
}

/* ---------- columns ---------- */

const slotColumns = computed<TableColumnProps[]>(() => {
  const nodes = (slots.default?.({}) ?? []) as VNode[]
  const cols: TableColumnProps[] = []

  nodes.forEach(v => {
    if (typeof v.type === 'object' && 'name' in v.type) {
      const compName = (v.type as { name?: string }).name
      if (compName === 'MYTableColumn' && v.props) {
        const props = v.props as Record<string, unknown>
        cols.push({
          ...props,
          prop: String(props.prop),
          label: props.label as string
        } as TableColumnProps)
      }
    }
  })
  return cols
})

const columnsWithWidth = computed(() =>
  props.columns?.length ? props.columns : slotColumns.value
)

const firstColumnProp = computed(() => {
  const col = columnsWithWidth.value.find(c => c.type !== 'selection')
  return col?.prop ?? ''
})

const getColumnStyle = (
  column: TableColumnProps,
  part: 'header' | 'body'
): CSSProperties => {
  const align =
    part === 'header'
      ? column.headerAlign || column.align
      : column.bodyAlign || column.align
  return {
    textAlign: align || 'left',
    width: column.width
  }
}

const calcPadding = (level: number) =>
  `${Number(level) * Number(props.indent ?? 16)}px`

const getCellValue = (row: RowRecord, prop: string) =>
  row[prop]
</script>