# Table
## Brief Introduction
The Table component is used to display structured data, supporting tree data, selection functionality, custom styles, and more.
You can use `<MYTable></MYTable>` to implement a table component. Column structure can be defined via `props.columns` or the child component `<MYTableColumn>`. Custom content requires named slots.

## Basic Table
<ShowCode
  title="Basic Table"
  description="Define table structure and data using columns and data properties."
  :code="`<template>
  <MYTable 
    :columns='columns' 
    :data='tableData'
  />
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns" 
        :data="tableData" 
      />
    </div>
  </template>
</ShowCode>

## Define Columns Using Slots
<ShowCode
  title="Define Columns Using Slots"
  description="Use the MYTableColumn component and slots to customize column content."
  :code="`<template>
  <MYTable :data='tableData2'>
    <MYTableColumn prop='name' label='Name' width='120' />
    <MYTableColumn prop='age' label='Age' width='80' />
    <MYTableColumn prop='address' label='Address' />
    <MYTableColumn prop='status' label='Status'>
      <template #default='{ row }'>
        <span :style='{ color: row.status === 'Success' ? '#67C23A' : '#F56C6C' }'>
          {{ row.status }}
        </span>
      </template>
    </MYTableColumn>
  </MYTable>
</template>
<script setup>
import { ref } from 'vue';
const tableData2 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing', status: 'Success' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai', status: 'Failed' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou', status: 'Success' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable :data="tableData2">
        <MYTableColumn prop="name" label="Name" width="120" />
        <MYTableColumn prop="age" label="Age" width="80" />
        <MYTableColumn prop="address" label="Address" />
        <MYTableColumn prop="status" label="Status">
          <template #default="{ row }">
            <span :style="{ color: row.status === 'Success' ? '#67C23A' : '#F56C6C' }">
              {{ row.status }}
            </span>
          </template>
        </MYTableColumn>
      </MYTable>
    </div>
  </template>
</ShowCode>

## Selection Feature
<ShowCode
  title="Selection Feature"
  description="Enable row selection using a type='selection' column."
  :code="`<template>
  <MYTable 
    :columns='columns3' 
    :data='tableData3' 
    v-model='selectedRows' 
    @selection-change='handleSelectionChange'
  />
  <div style='margin-top: 16px;'>
    Selected: {{ selectedRows.map(row => row.name).join(', ') }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
const columns3 = ref([
  { type: 'selection', width: '50px' },
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData3 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' }
]);
const selectedRows = ref([]);
const handleSelectionChange = (selection) => {
  console.log('Selected rows:', selection);
};
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns3" 
        :data="tableData3" 
        v-model="selectedRows" 
        @selection-change="handleSelectionChange"
      />
      <div style="margin-top: 16px; font-size: 14px; color: #606266;">
        Selected: {{ selectedRows.map(row => row.name).join(', ') }}
      </div>
    </div>
  </template>
</ShowCode>

## Tree Data
<ShowCode
  title="Tree Data"
  description="Use tree-structured data to display hierarchical relationships."
  :code="`<template>
  <MYTable 
    :columns='columns4' 
    :data='treeData' 
    :tree-props='{ children: 'children' }' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns4 = ref([
  { prop: 'name', label: 'Department', width: '200px' },
  { prop: 'manager', label: 'Manager', width: '120px' },
  { prop: 'count', label: 'Headcount', width: '80px' }
]);
const treeData = ref([
  {
    id: 1,
    name: 'Engineering',
    manager: 'Zhang',
    count: 20,
    children: [
      { id: 2, name: 'Frontend', manager: 'Li', count: 8 },
      { id: 3, name: 'Backend', manager: 'Wang', count: 12 }
    ]
  },
  {
    id: 4,
    name: 'Marketing',
    manager: 'Zhao',
    count: 15,
    children: [
      { id: 5, name: 'Promotion', manager: 'Qian', count: 7 },
      { id: 6, name: 'Operations', manager: 'Sun', count: 8 }
    ]
  }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns4" 
        :data="treeData" 
        :tree-props="{ children: 'children' }" 
      />
    </div>
  </template>
</ShowCode>

## Striped Table
<ShowCode
  title="Striped Table"
  description="Add zebra striping style using the stripe property."
  :code="`<template>
  <MYTable 
    :columns='columns5' 
    :data='tableData5' 
    stripe='#fafafa' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns5 = ref([
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'department', label: 'Department', width: '120px' },
  { prop: 'position', label: 'Position', width: '120px' },
  { prop: 'salary', label: 'Salary', width: '100px' }
]);
const tableData5 = ref([
  { id: 1, name: 'John', department: 'Engineering', position: 'Frontend Dev', salary: '15000' },
  { id: 2, name: 'Jane', department: 'Engineering', position: 'Backend Dev', salary: '16000' },
  { id: 3, name: 'Bob', department: 'Marketing', position: 'Marketing Mgr', salary: '14000' },
  { id: 4, name: 'Alice', department: 'HR', position: 'HR Specialist', salary: '12000' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns5" 
        :data="tableData5" 
        stripe="#fafafa" 
      />
    </div>
  </template>
</ShowCode>

## Column Alignment
<ShowCode
  title="Column Alignment"
  description="Control column content alignment using align, headerAlign, and bodyAlign."
  :code="`<template>
  <MYTable 
    :columns='columns8' 
    :data='tableData8' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns8 = ref([
  { prop: 'name', label: 'Name (Left)', width: '120px', align: 'left' },
  { prop: 'age', label: 'Age (Center)', width: '100px', align: 'center' },
  { prop: 'salary', label: 'Salary (Right)', width: '120px', align: 'right' },
  { 
    prop: 'bonus', 
    label: 'Bonus', 
    width: '120px', 
    headerAlign: 'center',
    bodyAlign: 'right'
  }
]);
const tableData8 = ref([
  { id: 1, name: 'John', age: 25, salary: '15000', bonus: '5000' },
  { id: 2, name: 'Jane', age: 30, salary: '16000', bonus: '6000' },
  { id: 3, name: 'Bob', age: 28, salary: '14000', bonus: '4500' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns8" 
        :data="tableData8" 
      />
    </div>
  </template>
</ShowCode>

## Table with Pagination
<ShowCode
  title="Table with Pagination"
  description="Implement table pagination using the pagination slot."
  :code="`<template>
  <MYTable 
    :columns='columns9' 
    :data='currentPageData' 
  >
    <template #pagination>
      <MYPagination 
        v-model:current-page='currentPage' 
        v-model:page-size='pageSize' 
        :total='tableData9.length' 
        layout='prev, pager, next' 
        @change='handlePageChange' 
      />
    </template>
  </MYTable>
</template>
<script setup>
import { ref, computed } from 'vue';
const columns9 = ref([
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData9 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' },
  { id: 4, name: 'Charlie', age: 32, address: 'Nanshan District, Shenzhen' },
  { id: 5, name: 'David', age: 26, address: 'Xihu District, Hangzhou' }
]);
const currentPage = ref(1);
const pageSize = ref(2);
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData9.value.slice(start, end);
});
const handlePageChange = (page, size) => {
  console.log('Page changed:', page, size);
};
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns9" 
        :data="currentPageData" 
      >
        <template #pagination>
          <MYPagination 
            v-model:current-page="currentPage" 
            v-model:page-size="pageSize" 
            :total="tableData9.length" 
            layout="prev, pager, next" 
            @change="handlePageChange" 
          />
        </template>
      </MYTable>
    </div>
  </template>
</ShowCode> 

## API Reference
### Table Props
| Parameter             | Description                 | Type                | Optional Values                    | Default                                     |
|-----------------------|-----------------------------|---------------------|------------------------------------|---------------------------------------------|
| data                  | Table data                  | Array               | —                                  | `[]`                                        |
| columns               | Column configuration        | TableColumnProps[]  | —                                  | `[]`                                        |
| width                 | Table width                 | string              | —                                  | `''`                                        |
| height                | Table height                | string              | —                                  | `''`                                        |
| headerBackgroundColor | Header background color     | string              | Hex or named colors                | `''`                                        |
| headerTextColor       | Header text color           | string              | Hex or named colors                | `''`                                        |
| stripe                | Stripe color                | string              | Hex or named colors                | `''`                                        |
| borderColor           | Border color                | string              | Hex or named colors                | `''`                                        |
| bodyBackgroundColor   | Table body background color | string              | Hex or named colors                | `''`                                        |
| bodyTextColor         | Table body text color       | string              | Hex or named colors                | `''`                                        |
| rowKey                | Row data key                | string              | —                                  | `'id'`                                      |
| treeProps             | Tree structure config       | object              | —                                  | `{ children: 'children', hasChildren: 'hasChildren' }` |
| indent                | Tree data indent            | number              | —                                  | `16`                                        |
| align                 | Content alignment           | string              | `left` / `center` / `right`        | `'left'`                                    |
| headerAlign           | Header alignment            | string              | `left` / `center` / `right`        | `''`                                        |
| bodyAlign             | Body alignment              | string              | `left` / `center` / `right`        | `''`                                        |

### TableColumn Props
| Parameter   | Description          | Type   | Optional Values             | Default     |
|-------------|----------------------|--------|-----------------------------|-------------|
| prop        | Column data key      | string | —                           | —           |
| label       | Column header label  | string | —                           | `undefined` |
| width       | Column width         | string | —                           | `''`        |
| type        | Column type          | string | `selection`                 | `''`        |
| align       | Content alignment    | string | `left` / `center` / `right` | `''`        |
| headerAlign | Header alignment     | string | `left` / `center` / `right` | `''`        |
| bodyAlign   | Body alignment       | string | `left` / `center` / `right` | `''`        |

### Table Events
| Event Name        | Description                            | Parameters      |
|-------------------|----------------------------------------|-----------------|
| selection-change  | Triggers when selection changes        | selection: any[]|
| update:modelValue | Triggers when selected row data changes| value: any[]    |

### Type Definitions
```typescript
interface TableColumnProps {
  className: string;
  prop: string;
  label?: string;
  width?: string;
  height?: string;
  fixed?: 'left' | 'right';
  sortable?: boolean;
  filterable?: boolean;
  filters?: Array<{ text: string; value: string | number }>;
  scopedSlot?: string;
  children?: TableColumnProps[];
  colspan?: number;
  rowspan?: number;
  type?: string;
  align?: 'left' | 'center' | 'right';
  headerAlign?: 'left' | 'center' | 'right';
  bodyAlign?: 'left' | 'center' | 'right';
}

interface TableProps {
  data?: Record<string, unknown>[];
  modelValue?: string;
  columns?: TableColumnProps[];
  width?: string;
  height?: string;
  headerColor?: string;
  headerTextColor?: string;
  stripe?: string;
  borderColor?: string;
  bodyBackgroundColor?: string;
  bodyTextColor?: string;
  [key: string]: unknown;
}
```
<script setup> 
import { ref, computed } from 'vue'; 
import MYTable from '../../../packages/components/table/src/table.vue'; 
import MYTableColumn from '../../../packages/components/table/src/tableColumn.vue'; 
import MYPagination from '../../../packages/components/pagination/src/pagination.vue'; 
// Basic table data 
const columns = ref([ 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'age', label: 'Age', width: '80px' }, 
    { prop: 'address', label: 'Address' } 
]); 
const tableData = ref([ 
    { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' }, 
    { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' }, 
    { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' } 
]); 
// Slot column data 
const tableData2 = ref([ 
    { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing', status: 'Success' }, 
    { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai', status: 'Failed' }, 
    { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou', status: 'Success' } 
]); 
// Selection feature data 
const columns3 = ref([ 
    { type: 'selection', width: '50px' }, 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'age', label: 'Age', width: '80px' }, 
    { prop: 'address', label: 'Address' } 
]); 
const tableData3 = ref([ 
    { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' }, 
    { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' }, 
    { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' } 
]); 
const selectedRows = ref([]); 
const handleSelectionChange = (selection) => { 
    console.log('Selected rows:', selection); 
}; 
// Tree data 
const columns4 = ref([ 
    { prop: 'name', label: 'Department', width: '200px' }, 
    { prop: 'manager', label: 'Manager', width: '120px' }, 
    { prop: 'count', label: 'Headcount', width: '80px' } 
]); 
const treeData = ref([ 
    { id: 1, name: 'Engineering', manager: 'Zhang', count: 20, children: [ 
        { id: 2, name: 'Frontend', manager: 'Li', count: 8 }, 
        { id: 3, name: 'Backend', manager: 'Wang', count: 12 } ] 
    }, 
    { id: 4, name: 'Marketing', manager: 'Zhao', count: 15, children: [ 
        { id: 5, name: 'Promotion', manager: 'Qian', count: 7 }, 
        { id: 6, name: 'Operations', manager: 'Sun', count: 8 }
    ]} 
]);
// Striped table data 
const columns5 = ref([ 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'department', label: 'Department', width: '120px' }, 
    { prop: 'position', label: 'Position', width: '120px' }, 
    { prop: 'salary', label: 'Salary', width: '100px' } 
]); 
const tableData5 = ref([ 
    { id: 1, name: 'John', department: 'Engineering', position: 'Frontend Dev', salary: '15000' }, 
    { id: 2, name: 'Jane', department: 'Engineering', position: 'Backend Dev', salary: '16000' }, 
    { id: 3, name: 'Bob', department: 'Marketing', position: 'Marketing Mgr', salary: '14000' }, 
    { id: 4, name: 'Alice', department: 'HR', position: 'HR Specialist', salary: '12000' } 
]); 
// Header style data 
const columns6 = ref([ 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'age', label: 'Age', width: '80px' }, 
    { prop: 'city', label: 'City', width: '120px' } 
]); 
const tableData6 = ref([ 
    { id: 1, name: 'John', age: 25, city: 'Beijing' }, 
    { id: 2, name: 'Jane', age: 30, city: 'Shanghai' }, 
    { id: 3, name: 'Bob', age: 28, city: 'Guangzhou' } 
]); 
// Body style data 
const columns7 = ref([ 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'age', label: 'Age', width: '80px' }, 
    { prop: 'city', label: 'City', width: '120px' } 
]); 
const tableData7 = ref([ 
    { id: 1, name: 'John', age: 25, city: 'Beijing' }, 
    { id: 2, name: 'Jane', age: 30, city: 'Shanghai' }, 
    { id: 3, name: 'Bob', age: 28, city: 'Guangzhou' } 
]); 
// Column alignment data
const columns8 = ref([ 
    { prop: 'name', label: 'Name (Left)', width: '120px', align: 'left' }, 
    { prop: 'age', label: 'Age (Center)', width: '100px', align: 'center' }, 
    { prop: 'salary', label: 'Salary (Right)', width: '120px', align: 'right' }, 
    { prop: 'bonus', label: 'Bonus', width: '120px', headerAlign: 'center', bodyAlign: 'right' } 
]); 
const tableData8 = ref([ 
    { id: 1, name: 'John', age: 25, salary: '15000', bonus: '5000' }, 
    { id: 2, name: 'Jane', age: 30, salary: '16000', bonus: '6000' }, 
    { id: 3, name: 'Bob', age: 28, salary: '14000', bonus: '4500' } 
]); 
// Pagination table data 
const columns9 = ref([ 
    { prop: 'name', label: 'Name', width: '100px' }, 
    { prop: 'age', label: 'Age', width: '80px' }, 
    { prop: 'address', label: 'Address' } 
]);
const tableData9 = ref([ 
    { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' }, 
    { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' }, 
    { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' }, 
    { id: 4, name: 'Charlie', age: 32, address: 'Nanshan District, Shenzhen' }, 
    { id: 5, name: 'David', age: 26, address: 'Xihu District, Hangzhou' } 
]); 
const currentPage = ref(1); 
const pageSize = ref(2); 
const currentPageData = computed(() => { 
    const start = (currentPage.value - 1) * pageSize.value; const end = start + pageSize.value; return tableData9.value.slice(start, end); 
}); 
const handlePageChange = (page, size) => { 
    console.log('Page changed:', page, size); 
}; 
</script>