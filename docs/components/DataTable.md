# Table
## 简易介绍
Table 表格组件，用于展示结构化数据，支持树形数据、选择功能、自定义样式等。
可以使用 `<MYTable></MYTable>` 来实现一个表格组件。支持通过props.columns或子组件`<MYTableColumn>`定义列结构，自定义内容需使用命名插槽。

## 基础表格
<ShowCode
  title="基础表格"
  description="使用 columns 和 data 属性定义表格结构和数据"
  :code="`<template>
  <MYTable 
    :columns='columns' 
    :data='tableData' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' }
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

## 使用插槽定义列
<ShowCode
  title="使用插槽定义列"
  description="使用 MYTableColumn 组件和插槽自定义列内容"
  :code="`<template>
  <MYTable :data='tableData2'>
    <MYTableColumn prop='name' label='姓名' width='120' />
    <MYTableColumn prop='age' label='年龄' width='80' />
    <MYTableColumn prop='address' label='地址' />
    <MYTableColumn prop='status' label='状态'>
      <template #default='{ row }'>
        <span :style='{ color: row.status === '成功' ? '#67C23A' : '#F56C6C' }'>
          {{ row.status }}
        </span>
      </template>
    </MYTableColumn>
  </MYTable>
</template>
<script setup>
import { ref } from 'vue';
const tableData2 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区', status: '成功' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区', status: '失败' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区', status: '成功' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable :data="tableData2">
        <MYTableColumn prop="name" label="姓名" width="120" />
        <MYTableColumn prop="age" label="年龄" width="80" />
        <MYTableColumn prop="address" label="地址" />
        <MYTableColumn prop="status" label="状态">
          <template #default="{ row }">
            <span :style="{ color: row.status === '成功' ? '#67C23A' : '#F56C6C' }">
              {{ row.status }}
            </span>
          </template>
        </MYTableColumn>
      </MYTable>
    </div>
  </template>
</ShowCode>

## 选择功能
<ShowCode
  title="选择功能"
  description="使用 type='selection' 列启用行选择功能"
  :code="`<template>
  <MYTable 
    :columns='columns3' 
    :data='tableData3' 
    v-model='selectedRows' 
    @selection-change='handleSelectionChange'
  />
  <div style='margin-top: 16px;'>
    已选择: {{ selectedRows.map(row => row.name).join(', ') }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
const columns3 = ref([
  { type: 'selection', width: '50px' },
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData3 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' }
]);
const selectedRows = ref([]);
const handleSelectionChange = (selection) => {
  console.log('选中行:', selection);
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
        已选择: {{ selectedRows.map(row => row.name).join(', ') }}
      </div>
    </div>
  </template>
</ShowCode>

## 树形数据
<ShowCode
  title="树形数据"
  description="使用树形结构数据展示层级关系"
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
  { prop: 'name', label: '部门', width: '200px' },
  { prop: 'manager', label: '负责人', width: '120px' },
  { prop: 'count', label: '人数', width: '80px' }
]);
const treeData = ref([
  {
    id: 1,
    name: '技术部',
    manager: '张工',
    count: 20,
    children: [
      { id: 2, name: '前端组', manager: '李工', count: 8 },
      { id: 3, name: '后端组', manager: '王工', count: 12 }
    ]
  },
  {
    id: 4,
    name: '市场部',
    manager: '赵总',
    count: 15,
    children: [
      { id: 5, name: '推广组', manager: '钱经理', count: 7 },
      { id: 6, name: '运营组', manager: '孙经理', count: 8 }
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

## 斑马纹表格
<ShowCode
  title="斑马纹表格"
  description="使用 stripe 属性添加斑马纹样式"
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
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'department', label: '部门', width: '120px' },
  { prop: 'position', label: '职位', width: '120px' },
  { prop: 'salary', label: '薪资', width: '100px' }
]);
const tableData5 = ref([
  { id: 1, name: '张三', department: '技术部', position: '前端工程师', salary: '15000' },
  { id: 2, name: '李四', department: '技术部', position: '后端工程师', salary: '16000' },
  { id: 3, name: '王五', department: '市场部', position: '市场经理', salary: '14000' },
  { id: 4, name: '赵六', department: '人事部', position: 'HR', salary: '12000' }
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

## 自定义样式
### 表头样式
<ShowCode
  title="自定义表头样式"
  description="使用 headerBackgroundColor 和 headerTextColor 自定义表头样式"
  :code="`<template>
  <MYTable 
    :columns='columns6' 
    :data='tableData6' 
    header-background-color='#409EFF' 
    header-text-color='#FFFFFF' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns6 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'city', label: '城市', width: '120px' }
]);
const tableData6 = ref([
  { id: 1, name: '张三', age: 25, city: '北京' },
  { id: 2, name: '李四', age: 30, city: '上海' },
  { id: 3, name: '王五', age: 28, city: '广州' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns6" 
        :data="tableData6" 
        header-background-color="#409EFF" 
        header-text-color="#FFFFFF" 
      />
    </div>
  </template>
</ShowCode>

### 表格体样式
<ShowCode
  title="自定义表格体样式"
  description="使用 bodyBackgroundColor 和 bodyTextColor 自定义表格体样式"
  :code="`<template>
  <MYTable 
    :columns='columns7' 
    :data='tableData7' 
    body-background-color='#f0f9ff' 
    body-text-color='#333' 
    border-color='#409EFF' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns7 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'city', label: '城市', width: '120px' }
]);
const tableData7 = ref([
  { id: 1, name: '张三', age: 25, city: '北京' },
  { id: 2, name: '李四', age: 30, city: '上海' },
  { id: 3, name: '王五', age: 28, city: '广州' }
]);
</script>`"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYTable 
        :columns="columns7" 
        :data="tableData7" 
        body-background-color="#f0f9ff" 
        body-text-color="#333" 
        border-color="#409EFF" 
      />
    </div>
  </template>
</ShowCode>

## 列对齐
<ShowCode
  title="列对齐"
  description="使用 align、headerAlign、bodyAlign 控制列内容对齐方式"
  :code="`<template>
  <MYTable 
    :columns='columns8' 
    :data='tableData8' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns8 = ref([
  { prop: 'name', label: '姓名（左对齐）', width: '120px', align: 'left' },
  { prop: 'age', label: '年龄（居中）', width: '100px', align: 'center' },
  { prop: 'salary', label: '薪资（右对齐）', width: '120px', align: 'right' },
  { 
    prop: 'bonus', 
    label: '奖金', 
    width: '120px', 
    headerAlign: 'center',
    bodyAlign: 'right'
  }
]);
const tableData8 = ref([
  { id: 1, name: '张三', age: 25, salary: '15000', bonus: '5000' },
  { id: 2, name: '李四', age: 30, salary: '16000', bonus: '6000' },
  { id: 3, name: '王五', age: 28, salary: '14000', bonus: '4500' }
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

## 带分页的表格
<ShowCode
  title="带分页的表格"
  description="使用分页插槽实现表格分页功能"
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
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData9 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' },
  { id: 4, name: '赵六', age: 32, address: '深圳市南山区' },
  { id: 5, name: '钱七', age: 26, address: '杭州市西湖区' }
]);
const currentPage = ref(1);
const pageSize = ref(2);
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData9.value.slice(start, end);
});
const handlePageChange = (page, size) => {
  console.log('页码变化:', page, size);
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

## API 参考
### Table Props
| 参数                  | 说明                     | 类型                | 可选值                              | 默认值                                      |
|----------------------|-------------------------|--------------------|------------------------------------|--------------------------------------------|
| data                 | 表格数据                 | Array              | —                                  | `[]`                                       |
| columns              | 列配置                   | TableColumnProps[] | —                                  | `[]`                                       |
| width                | 表格宽度                 | string             | —                                  | `''`                                       |
| height               | 表格高度                 | string             | —                                  | `''`                                       |
| headerBackgroundColor | 表头背景色               | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| headerTextColor      | 表头文字颜色             | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| stripe               | 斑马纹颜色               | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| borderColor          | 边框颜色                 | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| bodyBackgroundColor  | 表格体背景色             | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| bodyTextColor        | 表格体文字颜色           | string             | 支持16进制颜色或单词颜色           | `''`                                       |
| rowKey               | 行数据的 Key             | string             | —                                  | `'id'`                                     |
| treeProps            | 树形结构的配置           | object             | —                                  | `{ children: 'children', hasChildren: 'hasChildren' }` |
| indent               | 树形数据缩进             | number             | —                                  | `16`                                       |
| align  | 表格内容对齐方式      | string  | `left`/`center`/`right` | `'left'`  |
| headerAlign  | 表头对齐方式      | string  | `left`/`center`/`right` | `''`  |
| bodyAlign  | 表格体对齐方式      | string  | `left`/`center`/`right` | `''`  |

### TableColumn Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| prop  | 列对应数据的 key      | string  | — | —  |
| label  | 列标题      | string  | — | `undefined`  |
| width  | 列宽度      | string  | — | `''`  |
| type  | 列类型      | string  | `selection` | `''`  |
| align  | 列内容对齐方式      | string  | `left`/`center`/`right` | `''`  |
| headerAlign  | 列表头对齐方式      | string  | `left`/`center`/`right` | `''`  |
| bodyAlign  | 列内容对齐方式      | string  | `left`/`center`/`right` | `''`  |

### Table Events
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| selection-change  | 当选择项发生变化时触发      | selection: any[]  |
| update:modelValue  | 选中的行数据变化时触发      | value: any[]  |

### 类型定义
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
import MYTable from '../../packages/components/table/src/table.vue'; 
import MYTableColumn from '../../packages/components/table/src/tableColumn.vue'; 
import MYPagination from '../../packages/components/pagination/src/pagination.vue'; 
// 基础表格数据 
const columns = ref([ 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'age', label: '年龄', width: '80px' }, 
    { prop: 'address', label: '地址' } 
]); 
const tableData = ref([ 
    { id: 1, name: '张三', age: 25, address: '北京市朝阳区' }, 
    { id: 2, name: '李四', age: 30, address: '上海市浦东新区' }, 
    { id: 3, name: '王五', age: 28, address: '广州市天河区' } 
]); 
// 插槽列数据 
const tableData2 = ref([ 
    { id: 1, name: '张三', age: 25, address: '北京市朝阳区', status: '成功' }, 
    { id: 2, name: '李四', age: 30, address: '上海市浦东新区', status: '失败' }, 
    { id: 3, name: '王五', age: 28, address: '广州市天河区', status: '成功' } 
]); 
// 选择功能数据 
const columns3 = ref([ 
    { type: 'selection', width: '50px' }, 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'age', label: '年龄', width: '80px' }, 
    { prop: 'address', label: '地址' } 
]); 
const tableData3 = ref([ 
    { id: 1, name: '张三', age: 25, address: '北京市朝阳区' }, 
    { id: 2, name: '李四', age: 30, address: '上海市浦东新区' }, 
    { id: 3, name: '王五', age: 28, address: '广州市天河区' } 
]); 
const selectedRows = ref([]); 
const handleSelectionChange = (selection) => { 
    console.log('选中行:', selection); 
}; 
// 树形数据 
const columns4 = ref([ 
    { prop: 'name', label: '部门', width: '200px' }, 
    { prop: 'manager', label: '负责人', width: '120px' }, 
    { prop: 'count', label: '人数', width: '80px' } 
]); 
const treeData = ref([ 
    { id: 1, name: '技术部', manager: '张工', count: 20, children: [ 
        { id: 2, name: '前端组', manager: '李工', count: 8 }, 
        { id: 3, name: '后端组', manager: '王工', count: 12 } ] 
    }, 
    { id: 4, name: '市场部', manager: '赵总', count: 15, children: [ 
        { id: 5, name: '推广组', manager: '钱经理', count: 7 }, 
        { id: 6, name: '运营组', manager: '孙经理', count: 8 }
    ]} 
]);
// 斑马纹数据 
const columns5 = ref([ 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'department', label: '部门', width: '120px' }, 
    { prop: 'position', label: '职位', width: '120px' }, 
    { prop: 'salary', label: '薪资', width: '100px' } 
]); 
const tableData5 = ref([ 
    { id: 1, name: '张三', department: '技术部', position: '前端工程师', salary: '15000' }, 
    { id: 2, name: '李四', department: '技术部', position: '后端工程师', salary: '16000' }, 
    { id: 3, name: '王五', department: '市场部', position: '市场经理', salary: '14000' }, 
    { id: 4, name: '赵六', department: '人事部', position: 'HR', salary: '12000' } 
]); 
// 表头样式数据 
const columns6 = ref([ 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'age', label: '年龄', width: '80px' }, 
    { prop: 'city', label: '城市', width: '120px' } 
]); 
const tableData6 = ref([ 
    { id: 1, name: '张三', age: 25, city: '北京' }, 
    { id: 2, name: '李四', age: 30, city: '上海' }, 
    { id: 3, name: '王五', age: 28, city: '广州' } 
]); 
// 表格体样式数据 
const columns7 = ref([ 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'age', label: '年龄', width: '80px' }, 
    { prop: 'city', label: '城市', width: '120px' } 
]); 
const tableData7 = ref([ 
    { id: 1, name: '张三', age: 25, city: '北京' }, 
    { id: 2, name: '李四', age: 30, city: '上海' }, 
    { id: 3, name: '王五', age: 28, city: '广州' } 
]); 
// 列对齐数据
const columns8 = ref([ 
    { prop: 'name', label: '姓名（左对齐）', width: '120px', align: 'left' }, 
    { prop: 'age', label: '年龄（居中）', width: '100px', align: 'center' }, 
    { prop: 'salary', label: '薪资（右对齐）', width: '120px', align: 'right' }, 
    { prop: 'bonus', label: '奖金', width: '120px', headerAlign: 'center', bodyAlign: 'right' } 
]); 
const tableData8 = ref([ 
    { id: 1, name: '张三', age: 25, salary: '15000', bonus: '5000' }, 
    { id: 2, name: '李四', age: 30, salary: '16000', bonus: '6000' }, 
    { id: 3, name: '王五', age: 28, salary: '14000', bonus: '4500' } 
]); 
// 分页表格数据 
const columns9 = ref([ 
    { prop: 'name', label: '姓名', width: '100px' }, 
    { prop: 'age', label: '年龄', width: '80px' }, 
    { prop: 'address', label: '地址' } 
]);
const tableData9 = ref([ 
    { id: 1, name: '张三', age: 25, address: '北京市朝阳区' }, 
    { id: 2, name: '李四', age: 30, address: '上海市浦东新区' }, 
    { id: 3, name: '王五', age: 28, address: '广州市天河区' }, 
    { id: 4, name: '赵六', age: 32, address: '深圳市南山区' }, 
    { id: 5, name: '钱七', age: 26, address: '杭州市西湖区' } 
]); 
const currentPage = ref(1); 
const pageSize = ref(2); 
const currentPageData = computed(() => { 
    const start = (currentPage.value - 1) * pageSize.value; const end = start + pageSize.value; return tableData9.value.slice(start, end); 
}); 
const handlePageChange = (page, size) => { 
    console.log('页码变化:', page, size); 
}; 
</script>