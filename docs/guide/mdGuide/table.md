# Table
## 简易介绍
Table 表格组件，用于展示结构化数据，支持列配置、排序、筛选等功能。mengyue-components 提供了 `MYTable` 和 `MYTableColumn` 组件来实现表格功能。

## 基本用法
### 基础表格
使用 `MYTable` 和 `MYTableColumn` 组件实现基础表格：
```vue
<MYTable :data="tableData" :columns="tableColumns">
  <MYTableColumn prop="id" label="Id" width="100px" />
  <MYTableColumn prop="date" label="Date" width="100px" />
  <MYTableColumn prop="name" label="Name" width="100px" />
  <MYTableColumn prop="address" label="Address" width="100px" />
  <MYTableColumn prop="number" label="Number" width="100px" />
</MYTable>
```

### 固定列
通过 `fixed` 属性固定列（`left` 或 `right`）：
```vue
<MYTable :data="tableData">
  <MYTableColumn prop="name" label="姓名" fixed="left" />
  <MYTableColumn prop="age" label="年龄" />
  <MYTableColumn prop="address" label="地址" fixed="right" />
</MYTable>
```

## 自定义样式
### 表头样式
通过 `headerBackgroundColor` 和 `headerTextColor` 自定义表头样式：
```vue
<MYTable 
  :data="tableData" 
  headerBackgroundColor="#f0f0f0" 
  headerTextColor="#333" 
>
  <MYTableColumn prop="name" label="姓名" />
  <MYTableColumn prop="age" label="年龄" />
</MYTable>
```

### 斑马纹
通过 `stripe` 属性启用斑马纹效果：
```vue
<MYTable :data="tableData" stripe="#2c2">
  <MYTableColumn prop="name" label="姓名" />
  <MYTableColumn prop="age" label="年龄" />
</MYTable>
```

## API 参考
### MYTable Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| data         | 表格数据     | Array   | —                                 | []     |
| columns      | 列配置       | Array   | —                                 | []     |
| width        | 表格宽度     | string  | px/%/em/rem/vw                       | —      |
| height       | 表格高度     | string  | px/%/em/rem/vh                         | —      |
| headerBackgroundColor | 表头背景色 | string  | 支持16进制和单词配色                     | —      |
| headerTextColor       | 表头文字颜色 | string  | 支持16进制和单词配色               |  -  |
| stripe       | 斑马纹       | string |   支持16进制和单词配色       | false  |
| borderColor  | 边框颜色     | string  | 支持16进制和单词配色              | —      |

### MYTableColumn Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| prop         | 列字段名     | string  | —                                 | —      |
| label        | 列标题       | string  | —                                 | —      |

### 类型定义
```ts
interface TableProps {
  data: Record<string, unknown>[];
  columns?: TableColumnProps[];
  width?: string;
  height?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  stripe?: boolean;
  borderColor?: string;
}

interface TableColumnProps {
  prop: string;
  label?: string;
}
```

<script setup>
import { ref } from 'vue'
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
</script>
