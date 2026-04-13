# Table Component Design Documentation

## Overview

The Table component is a core component in this library used for displaying tabular data. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core components like `table.vue` and `tableColumn.vue`, it provides a complete and user-friendly table solution.

The Table component focuses on handling data display, interaction, and style management for tables, offering users a powerful and flexible table management feature. It supports basic tables, tree tables, row selection, row expansion, and other functionalities, effectively enhancing the user experience when working with structured data.

## Design Philosophy

### Layered Architecture

The Table component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`table.vue`, `tableColumn.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`table.ts`, `tableComputed.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`table.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Table component abstracts complex logic into core functions:

- `useTableComputed` - Handles core table logic.
- `flattenTreeData` - Handles flattening of tree data.
- `toggleRowExpansion` - Handles row expand/collapse logic.
- `toggleRowSelection` - Handles row selection logic.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

## Core Feature Design

### Structured Props Design

The props design for the Table component is clean and straightforward:

```typescript
export const tableProps = {
  /** Table data */
  data: {
    type: Array as () => Record<string, unknown>[],
    default: () => []
  },
  /** Column definitions */
  columns: {
    type: Array as () => TableColumnProps[],
    default: () => []
  },
  /** Selected rows */
  modelValue: {
    type: [Array, String] as PropType<string[] | number[] | string>,
    default: () => []
  },
  /** Table width */
  width: {
    type: String,
    default: ''
  },
  /** Table height */
  height: {
    type: String,
    default: ''
  },
  /** Header background color */
  headerBackgroundColor: {
    type: String,
    default: ''
  },
  /** Header text color */
  headerTextColor: {
    type: String,
    default: ''
  },
  /** Stripe background color */
  stripe: {
    type: String,
    default: ''
  },
  /** Border color */
  borderColor: {
    type: String,
    default: ''
  },
  /** Body background color */
  bodyBackgroundColor: {
    type: String,
    default: ''
  },
  /** Hover background color */
  hoverBackgroundColor: {
    type: String,
    default: ''
  },
  /** Body text color */
  bodyTextColor: {
    type: String,
    default: ''
  },
  /** Row unique identifier key */
  rowKey: {
    type: String,
    default: 'id'
  },
  /** Tree structure configuration */
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
  /** Tree indent */
  indent: {
    type: Number,
    default: 16
  },
  /** Alignment */
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  /** Header alignment */
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  },
  /** Body alignment */
  bodyAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: ''
  }
}
```

#### Parameter Descriptions:
- data: The data source for the table.
- columns: Column definition configuration.
- modelValue: Used for two-way binding of selected rows.
- stripe: Sets the stripe background color.
- treeProps: Configures the child node field for tree tables.
- indent: Sets the indent amount for tree tables.
- Column Definition Design

### Column Definition Design
Props design for the TableColumn component:

```typescript
export const tableColumnProps = {
  /** Column property */
  prop: {
    type: String,
    required: true
  },
  /** Column header label */
  label: {
    type: String,
    default: undefined
  },
  /** Column width */
  width: {
    type: String,
    default: ''
  },
  /** Fixed column */
  fixed: {
    type: String as PropType<'left' | 'right'>,
    default: undefined
  },
  /** Whether sortable */
  sortable: {
    type: Boolean,
    default: false
  },
  /** Alignment */
  align: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** Header alignment */
  headerAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** Body alignment */
  bodyAlign: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: ''
  },
  /** Column type */
  type: {
    type: String,
    default: ''
  }
}
```

#### Supported Column Types:
- **Normal Data Column:** Defined via prop and label.
- **Selection Column:** Defined via type="selection".
- **Tree Column:** Defined via prop and tree data structure.

## Style System Design
### CSS Variable Control
The Table component achieves style control through CSS variables:
1. --table-border-color - Table border color.
2. --hover-bg-color - Row hover background color.

### Layout System
The Table component supports flexible layout control:

1. Table Layout - Uses table-layout: auto for self-adaptation.
2. Column Width Control - Controls column width via the width property.
3. Alignment - Supports global and column-level alignment configuration.
4. Tree Structure - Displays hierarchical relationships via indentation.

### State Styles
The Table component provides corresponding styles for different states:

1. **Default State** - Standard table style.
2. **Hover State** - Background color change on row hover.
3. **Stripe State** - Alternating row background colors.
4. **Expanded State** - Expand/collapse state for tree tables.
6. **Selected State** - Row selection state.

## Component Structure Design
### Overall Structure
The overall structure of the Table component is as follows:

```html
<div class="my-table" :style="{ '--table-border-color': props.borderColor, ...tableStyle }">
  <table>
    <thead :style="headerStyle">
      <tr>
        <th v-for="column in columnsWithWidth" :key="column.prop" :style="getColumnStyle(column, 'header')">
          <!-- Header content -->
        </th>
      </tr>
    </thead>
    <tbody :style="bodyStyle">
      <tr v-for="(item, index) in flatTableData" :key="getRowKey(item.row)" 
        :style="index % 2 === 1 ? { backgroundColor: props.stripe } : {}">
        <td v-for="column in columnsWithWidth" :key="column.prop" :style="getColumnStyle(column, 'body')">
          <!-- Cell content -->
        </td>
      </tr>
    </tbody>
  </table>
  <div class="pagination-container">
    <slot name="pagination"></slot>
  </div>
</div>
```

### Component Hierarchy
The Table component consists of several main parts:

1. Container - .my-table - Wraps the entire table component.
2. Header - thead - Table header area.
3. Body - tbody - Table body area.
4. Row - tr - Single table row.
5. Cell - td - Single cell.
6. Pagination Container - .pagination-container - Placeholder for pagination component.
The TableColumn component serves as a declarative component:

```html
<MYTableColumn prop="name" label="name" width="150px" />
```

## Interaction Design
### Tree Data Handling
The Table component processes tree data via flattenTreeData:

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

### Row Expand/Collapse
The Table component implements row expand/collapse via toggleRowExpansion:

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

### Row Selection Feature
The Table component implements row selection via toggleRowSelection

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

#### Event System:
- update:modelValue: Triggered when selected rows change.
- selection-change: Triggered when selected rows change.

## Extensibility Design
The Table component offers excellent extensibility:

1. Column Definition: Flexibly define columns via the columns property and tableColumn component.
2. Slot Support: Customize cell content via the slot mechanism.
   ```vue
   <MYTable :data="data" :columns="columns">
     <template #name="{ row }">
       <span style="color: red">{{ row.name }}</span>
     </template>
   </MYTable>
   ```
3. Style Customization: Customize table styles via various color properties.
4. Tree Structure: Support tree tables via treeProps and indent.
5. Pagination Integration: Integrate pagination components via the pagination slot.

## Style Details
The Table component features the following style handling characteristics:

1. Responsive Design: Supports flexible layout adaptation.
2. Consistency: Maintains style consistency with other library components.
3. Accessibility Design: Ensures keyboard navigation and screen reader friendliness.
4. State Feedback: Provides clear visual feedback (e.g., hover state, selected state).
5. Animation Effects: Smooth transition effects for expand/collapse.

## Performance Optimization
Performance is optimized through:

1. Caching table data processing results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Rendering tree table child nodes on demand.
6. Dynamically adjusting styles using CSS variables.

## Design Value
The Table component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via functions.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like DataGrid and ListView.