<template>
  <MYButton type="primary" plain @click="dialogTableVisible = true">
    Open a Table nested Dialog
  </MYButton>

  <MYButton type="success" plain @click="dialogFormVisible = true">
    Open a Form nested Dialog
  </MYButton>

  <MYDialog v-model="dialogTableVisible" title="Shipping address" width="800px" height="500px">
    <MYTable :data="tableData">
      <MYTableColumn prop="id" label="Id" width="100px" />
      <MYTableColumn prop="date" label="Date" width="100px" />
      <MYTableColumn prop="name" label="Name" width="100px" />
    </MYTable>
  </MYDialog>

  <MYDialog v-model="dialogFormVisible" title="Shipping address" height="260px" overflow>
    <MYForm :model="form">
      <MYForm-item label="Promotion name" :label-width="formLabelWidth">
        <MYInput v-model="form.name" autocomplete="off" />
      </MYForm-item>
      <MYForm-item label="Zones" :label-width="formLabelWidth">
        <MYSelect v-model="form.region" backgroundColor="#f3f6fc" hoverbackgroundColor="#ffffff" placeholder="Please select a zone">
          <MYOption label="Zone No.1" value="shanghai" />
          <MYOption label="Zone No.2" value="beijing" />
        </MYSelect>
      </MYForm-item>
    </MYForm>
    <template #footer>
      <div class="dialog-footer">
        <MYButton @click="dialogFormVisible = false">Cancel</MYButton>
        <MYButton type="primary" @click="dialogFormVisible = false">
          Confirm
        </MYButton>
      </div>
    </template>
  </MYDialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const tableData = ref([
  { id: '1', date: '2025-07-25', name: 'Alice' },
  { id: '2', date: '2025-07-24', name: 'Bob' },
  { id: '3', date: '2025-07-25', name: 'Alice' },
  { id: '4', date: '2025-07-24', name: 'Bob' },
  { id: '5', date: '2025-07-25', name: 'Alice' },
  { id: '6', date: '2025-07-24', name: 'Bob' },
  { id: '7', date: '2025-07-25', name: 'Alice' },
  { id: '8', date: '2025-07-24', name: 'Bob' },
  { id: '9', date: '2025-07-25', name: 'Alice' },
  { id: '10', date: '2025-07-24', name: 'Bob' },
  { id: '11', date: '2025-07-25', name: 'Alice' },
  { id: '12', date: '2025-07-24', name: 'Bob' },
]);
</script>
