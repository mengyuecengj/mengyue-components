<template>
  <div class="my-table" :class="{ bordered: !!border, stripe: !!stripe }"
    :style="{ height: fluidHeight ? '100%' : height ? height + 'px' : 'auto', overflow: 'auto' }">
    <table>
      <thead>
        <tr v-for="(row, rowIndex) in headerRows" :key="rowIndex">
          <th v-if="selection && rowIndex === 0" :rowspan="headerRows.length" :class="{ 'fixed-left': selectionFixed }">
            <input v-if="selection === 'multiple'" v-model="selectAll" type="checkbox" />
          </th>
          <th v-for="col in row" :key="col.prop || col.label" :colspan="col.colspan || 1" :rowspan="col.rowspan || 1"
            :style="{ width: col.width }"
            :class="{ 'fixed-left': col.fixed === 'left', 'fixed-right': col.fixed === 'right' }">
            {{ col.label }}
            <span v-if="col.sortable" class="sort-icon" @click="handleSort(col.prop)">{{ sortKey === col.prop ?
              (sortOrder === 'asc' ? '↑' : '↓') : '↕' }}</span>
            <span v-if="col.filterable" class="filter-icon" @click="showFilter(col.prop)">🔍</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortedAndFilteredData" :key="index" :class="rowClassName?.({ row, index })">
          <td v-if="selection" :class="{ 'fixed-left': selectionFixed }">
            <input v-model="selectedRows" :type="selection === 'single' ? 'radio' : 'checkbox'" :value="row" />
          </td>
          <td v-for="column in leafColumns" :key="column.prop"
            v-tooltip="column.prop ? (typeof row[column.prop] === 'string' ? row[column.prop] : String(row[column.prop])) : ''"
            :class="{ 'fixed-left': column.fixed === 'left', 'fixed-right': column.fixed === 'right' }">
            <slot v-if="column.scopedSlot" :name="column.scopedSlot" v-bind="{ row, column, index }">
              {{ column.prop ? row[column.prop] : '' }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="currentFilterProp" class="filter-dropdown"
      :style="{ top: filterPosition.top + 'px', left: filterPosition.left + 'px' }">
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
import { useTableLogic } from './tableComponents';
import { Props } from './type';
import '../style/table.scss'

defineOptions({
  name: 'MYTable'
});

const props = defineProps<Props>();
const emit = defineEmits<{
  (event: 'selection-change', rows: any[]): void;
  (event: string, ...args: unknown[]): void;
}>();

const {
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
} = useTableLogic(props, emit);

</script>

<style scoped></style>