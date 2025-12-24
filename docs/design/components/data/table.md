# Table 组件设计文档

## 概述

Table 组件是本组件库中用于展示表格数据的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 table.vue 和 tableColumn.vue等核心组件实现了一套完整且易用的表格解决方案。

Table 组件专注于处理表格数据的展示、交互和样式管理，为用户提供了一套强大、灵活的表格管理功能，支持基本表格、树形表格、行选择、行展开等多种功能，有效提升用户在处理结构化数据时的体验。

## 设计理念

### 分层架构

Table 组件严格按照三层架构设计：

1. **结构层** table.vue, tableColumn.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** table.ts, tableComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** table.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Table 组件将复杂的逻辑抽象为核心函数：

- useTableComputed - 处理表格的核心逻辑
- flattenTreeData - 处理树形数据的扁平化
- toggleRowExpansion - 处理行展开/折叠逻辑
- toggleRowSelection - 处理行选择逻辑

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

## 核心功能设计

### Props 结构化设计

Table 组件的 props 设计简洁明了：

```typescript
export const tableProps = {
  /** 表格数据 */
  data: {
    type: Array as () => Record<string, unknown>[],
    default: () => []
  },
  /** 列定义 */
  columns: {
    type: Array as () => TableColumnProps[],
    default: () => []
  },
  /** 选中行 */
  modelValue: {
    type: [Array, String] as PropType<string[] | number[] | string>,
    default: () => []
  },
  /** 表格宽度 */
  width: {
    type: String,
    default: ''
  },
  /** 表格高度 */
  height: {
    type: String,
    default: ''
  },
  /** 表头背景色 */
  headerBackgroundColor: {
    type: String,
    default: ''
  },
  /** 表头文字颜色 */
  headerTextColor: {
    type: String,
    default: ''
  },
  /** 斑马纹背景色 */
  stripe: {
    type: String,
    default: ''
  },
  /** 边框颜色 */
  borderColor: {
    type: String,
    default: ''
  },
  /** 表格体背景色 */
  bodyBackgroundColor: {
    type: String,
    default: ''
  },
  /** 悬停背景色 */
  hoverBackgroundColor: {
    type: String,
    default: ''
  },
  /** 表格体文字颜色 */
  bodyTextColor: {
    type: String,
    default: ''
  },
  /** 行唯一标识 */
  rowKey: {
    type: String,
    default: 'id'
  },
  /** 树形结构配置 */
  treeProps: {
    type: Object as () => {
      children?: string;
      hasChildren?: string;
    },
    default: () => ({
      children: 'children',
      hasChildren: 'hasChildren'
    })
  },
  /** 树形缩进 */
  indent: {
    type: Number,
    default: 16
  },
  /** 对齐方式 */
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  /** 表头对齐方式 */
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  },
  /** 表体对齐方式 */
  bodyAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  }
}
```

#### 参数说明：
- data：表格数据源。
- columns：列定义配置。
- modelValue：用于双向绑定选中的行。
- stripe：设置斑马纹背景色。
- treeProps：配置树形表格的子节点字段。
- indent：设置树形表格的缩进量。

### 列定义设计

TableColumn 组件的 props 设计：

```typescript
export const tableColumnProps = {
  /** 列属性 */
  prop: {
    type: String,
    required: true
  },
  /** 列标题 */
  label: {
    type: String,
    default: undefined
  },
  /** 列宽度 */
  width: {
    type: String,
    default: ''
  },
  /** 固定列 */
  fixed: {
    type: String as PropType<'left' | 'right'>,
    default: undefined
  },
  /** 是否可排序 */
  sortable: {
    type: Boolean,
    default: false
  },
  /** 对齐方式 */
  align: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** 表头对齐方式 */
  headerAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** 表体对齐方式 */
  bodyAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** 列类型 */
  type: {
    type: String,
    default: ''
  }
}
```

#### 列类型支持：
- **普通数据列**：通过 prop 和 label定义
- **选择列**：通过 `type="selection"` 定义
- **树形列**：通过 prop 和树形数据结构定义

## 样式系统设计

### CSS 变量控制

Table 组件通过 CSS 变量实现样式控制：

1. `--table-border-color` - 表格边框颜色
2. `--hover-bg-color` - 行悬停背景色

### 布局系统

Table 组件支持灵活的布局控制：

1. **表格布局** - 使用 `table-layout: auto` 实现自适应
2. **列宽控制** - 通过 width 属性控制列宽
3. **对齐方式** - 支持全局和列级别的对齐配置
4. **树形结构** - 通过缩进实现层次关系展示

### 状态样式

Table 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准表格样式
2. **悬停状态** - 行悬停时的背景色变化
3. **斑马纹状态** - 交替行背景色
4. **展开状态** - 树形表格展开/折叠状态
5. **选中状态** - 行选中状态

## 组件结构设计

### 整体结构

Table 组件的整体结构如下：

```html
<div class="my-table" :style="{ '--table-border-color': props.borderColor, ...tableStyle }">
  <table>
    <thead :style="headerStyle">
      <tr>
        <th v-for="column in columnsWithWidth" :key="column.prop" :style="getColumnStyle(column, 'header')">
          <!-- 列头内容 -->
        </th>
      </tr>
    </thead>
    <tbody :style="bodyStyle">
      <tr v-for="(item, index) in flatTableData" :key="getRowKey(item.row)" 
        :style="index % 2 === 1 ? { backgroundColor: props.stripe } : {}">
        <td v-for="column in columnsWithWidth" :key="column.prop" :style="getColumnStyle(column, 'body')">
          <!-- 单元格内容 -->
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pagination-container">
    <slot name="pagination"></slot>
  </div>
</div>
```

### 组件层次

Table 组件包含多个主要部分：

1. **容器** - `.my-table` - 包裹整个表格组件
2. **表头** - `thead` - 表格头部区域
3. **表体** - `tbody` - 表格主体区域
4. **行** - `tr` - 单个表格行
5. **单元格** - `td` - 单个单元格
6. **分页容器** - `.pagination-container` - 放置分页组件

TableColumn 组件作为声明性组件：

```html
<MYTableColumn prop="name" label="姓名" width="150px" />
```

## 交互设计

### 树形数据处理

Table 组件通过 flattenTreeData 处理树形数据：

```typescript
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
```

### 行展开/折叠

Table 组件通过 toggleRowExpansion 实现行展开/折叠：

```typescript
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
```

### 行选择功能

Table 组件通过 toggleRowSelection 实现行选择：

```typescript
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
```

#### 事件系统：
- update:modelValue：当选中行变化时触发
- selection-change：当选中行变化时触发

## 扩展性设计

Table 组件具备良好的扩展性：

1. **列定义**：通过 columns 属性和 tableColumn 组件灵活定义列
2. **插槽支持**：通过插槽机制自定义单元格内容
   ```vue
   <MYTable :data="data" :columns="columns">
     <template #name="{ row }">
       <span style="color: red">{{ row.name }}</span>
     </template>
   </MYTable>
   ```
3. **样式定制**：通过多种颜色属性自定义表格样式
4. **树形结构**：通过 treeProps 和 indent 支持树形表格
5. **分页集成**：通过 `pagination` 插槽集成分页组件

## 样式细节

Table 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保键盘导航和屏幕阅读器友好
4. **状态反馈**：提供清晰的视觉反馈（如悬停状态、选中状态）
5. **动画效果**：展开/折叠有平滑的过渡效果

## 性能优化

通过以下方式优化性能：

1. 使用计算属性缓存表格数据处理结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需渲染树形表格的子节点
6. 使用 CSS 变量动态调整样式

## 设计价值

Table 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 DataGrid、ListView 等其他组件保持一致的设计语言
