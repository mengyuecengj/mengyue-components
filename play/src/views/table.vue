<template>
  <div>
    <MYTable 
      :data="tableData"
      :columns="tableColumns"
      stripe="rgba(0, 0, 0, 0.05)"
      headerBackgroundColor="#f5f5f5"
      headerTextColor="#333"
      bodyBackgroundColor="#fff"
      bodyTextColor="#333"
    >
      <MYTableColumn prop="id" label="Id" width="100px" />
      <MYTableColumn prop="date" label="Date" width="100px" />
      <MYTableColumn prop="name" label="Name" width="100px" />
      <MYTableColumn prop="address" label="Address" width="100px" />
      <MYTableColumn prop="number" label="Number" width="100px" />
      <template #status="{ row }">
        <span :class="row.status === 'success' ? 'text-green' : 'text-red'">
          {{ row.status }}
        </span>
      </template>
    </MYTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 定义 tableData
const tableData = ref([
  { id: '1', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '2', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '3', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '4', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '5', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '6', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '7', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '8', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '9', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '10', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '11', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '12', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
]);

// 定义 tableColumns
const tableColumns = ref([
  { id: '0', prop: 'id', label: 'Id', width: '80px' },
  { id: '1', prop: 'date', label: 'Date', width: '180px' },
  { id: '2', prop: 'name', label: 'Name', width: '180px' },
  { id: '3', prop: 'address', label: 'Address', width: '200px' },
  { id: '4', prop: 'number', label: 'Number', width: '200px' },
  { id: '5', prop: 'status', label: 'Status', width: '120px' },
]);
</script>

<style>
.text-green {
  color: green;
}

.text-red {
  color: red;
}
</style>