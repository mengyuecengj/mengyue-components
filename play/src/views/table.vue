<!-- TestTable.vue -->
<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div>
    <h2>Table Test Component</h2>
    <MYTable
      :data="tableData"
      border
      stripe
      :height="400"
      selection="multiple"
      selection-fixed
      :row-class-name="rowClassName"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
      @filter-change="handleFilterChange"
    >
      <!-- Multi-level header -->
      <MYTableColumn label="Group 1">
        <MYTableColumn prop="date" label="Date" width="180px" sortable filterable :filters="dateFilters" />
        <MYTableColumn prop="name" label="Name" width="180px">
          <template #default="{ row }">
            <span :style="{ color: row.status === 'success' ? 'green' : 'red' }">{{ row.name }}</span>
          </template>
        </MYTableColumn>
      </MYTableColumn>
      <MYTableColumn label="Details" fixed="right">
        <MYTableColumn prop="address" label="Address" width="200px" />
        <MYTableColumn prop="status" label="Status" width="120px" />
      </MYTableColumn>
    </MYTable>

    <!-- Display selected rows and event logs -->
    <div class="log-panel">
      <h3>Selected Rows:</h3>
      <pre>{{ selectedRows }}</pre>
      <h3>Event Logs:</h3>
      <ul>
        <li v-for="(log, index) in eventLogs" :key="index">{{ log }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
// Sample Data
const tableData = ref([
  { date: '2025-07-25', name: 'Alice', address: '123 Main St', status: 'success' },
  { date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', status: 'error' },
  { date: '2025-07-23', name: 'Charlie', address: '789 Pine Rd', status: 'success' },
  { date: '2025-07-22', name: 'David', address: '101 Elm St', status: 'error' },
]);

// Filters for Date Column
const dateFilters = [
  { text: '2025-07-25', value: '2025-07-25' },
  { text: '2025-07-24', value: '2025-07-24' },
];

// Row Class Name
const rowClassName = ({ row }: { row: any }) => {
  return row.status === 'success' ? 'success-row' : 'error-row';
};

// Selected Rows and Event Logs
const selectedRows = ref<any[]>([]);
const eventLogs = ref<string[]>([]);

const handleSelectionChange = (rows: any[]) => {
  selectedRows.value = rows;
  eventLogs.value.push(`Selection changed at ${new Date().toLocaleTimeString()}: ${rows.length} rows selected`);
};

const handleSortChange = ({ prop, order }: { prop: string; order: 'asc' | 'desc' }) => {
  eventLogs.value.push(`Sort changed at ${new Date().toLocaleTimeString()}: ${prop} ${order}`);
};

const handleFilterChange = (filters: Record<string, any[]>) => {
  eventLogs.value.push(`Filter changed at ${new Date().toLocaleTimeString()}: ${JSON.stringify(filters)}`);
};

// Computed to limit event logs (optional)
const limitedEventLogs = computed(() => eventLogs.value.slice(-5));
</script>

<style scoped>
.log-panel {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #eee;
}

.success-row {
  background-color: #e6ffe6;
}

.error-row {
  background-color: #ffe6e6;
}
</style>