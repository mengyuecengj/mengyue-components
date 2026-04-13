# Pagination Component Design Documentation

## Overview

The Pagination component is a core component in this library used for implementing pagination functionality. It adheres to the library's consistent design philosophy of "Separation of Concerns" and "Logic Abstraction." Through core logic implemented in `pagination.vue` and `paginationComputed.ts`, it provides a complete and user-friendly pagination solution.

The Pagination component focuses on handling data pagination display, page navigation, and user interaction, offering users a powerful and flexible pagination management feature. It supports multiple layout configurations, custom styles, and interaction behaviors, effectively enhancing the user experience when handling large datasets.

## Design Philosophy

### Layered Architecture

The Pagination component is strictly designed with a three-layer architecture:

1. **Structure Layer** (`pagination.vue`) - Responsible for the component's DOM structure and basic layout.
2. **Logic Layer** (`pagination.ts`, `paginationComputed.ts`) - Handles complex reactive computations and interaction logic.
3. **Presentation Layer** (`pagination.scss`) - Defines the component's visual presentation and style rules.

### Logic Abstraction

The Pagination component abstracts complex logic into core functions:

- `usePaginationComputed` - Handles core pagination logic.
- `pagerList` - Computes the list of page numbers.
- `totalPages` - Computes the total number of pages.

This design allows the component itself to simply declare the required logic, while the specific computations are handled by the logic functions.

---

## Core Feature Design

### Structured Props Design

The props design for the Pagination component is clean and straightforward:

```typescript
export const paginationProps = {
  /** Total number of data items */
  total: {
    type: [Number, String],
    default: 0
  },
  /** Number of items per page */
  pageSize: {
    type: [Number, String],
    default: 10
  },
  /** Current page number */
  currentPage: {
    type: [Number, String],
    default: 1
  },
  /** Maximum number of page buttons to display */
  maxPagerCount: {
    type: [Number, String],
    default: 7
  },
  /** Layout configuration */
  layout: {
    type: String,
    default: 'prev, pager, next'
  },
  /** Optional list of page size options */
  pageSizes: {
    type: Array as () => (number[]),
    default: () => []
  },
  /** Whether to show background color */
  background: {
    type: Boolean,
    default: false
  },
  /** Whether to use small size */
  small: {
    type: Boolean,
    default: false
  },
  /** Whether to hide when there is only one page */
  hideOnSinglePage: {
    type: Boolean,
    default: false
  },
  /** Whether disabled */
  disabled: {
    type: Boolean,
    default: false
  },
  /** Background color for prev/next buttons */
  prevColor: {
    type: String,
    default: ''
  },
  /** Text color for prev/next buttons */
  prevTextColor: {
    type: String,
    default: ''
  },
  /** Background color for page number buttons */
  itemColor: {
    type: String,
    default: ''
  },
  /** Text color for page number buttons */
  itemTextColor: {
    type: String,
    default: ''
  },
  /** Background color for active page number */
  activeItemColor: {
    type: String,
    default: ''
  },
  /** Text color for active page number */
  activeItemTextColor: {
    type: String,
    default: ''
  }
}
```

#### Parameter Descriptions:
· total: Total number of data items.
· pageSize: Number of items displayed per page.
· currentPage: Current page number.
· maxPagerCount: Maximum number of page buttons to display.
· layout: Layout configuration, supports `prev`, `pager`, `next`, `sizes`, `jumper`, `total`.
· pageSizes: Optional list of page size choices.
· hideOnSinglePage: Whether to hide the pagination component when only one page exists.

### Layout System
The Pagination component supports flexible layout configuration via the layout property:

```vue
<MYPagination layout="prev, pager, next, sizes, jumper, total" />
```

#### Layout Options:
- prev: Previous page button.
- pager: Page number list.
- next: Next page button.
- sizes: Page size selector.
- jumper: Page jump input.
- total: Total items display.

## Style System Design
### CSS Variable Control
The Pagination component achieves style control through props:

1. prneColor - Background color for prev/next buttons.
2. prneTextColor - Text color for prev/next buttons.
3. itemColor - Background color for page number buttons.
4. itemTextColor - Text color for page number buttons.
5. activeItemColor - Background color for active page.
6. activeItemTextColor - Text color for active page.

### Layout System
The Pagination component supports flexible layout control:

1. Responsive Layout - Automatically adjusts display based on page count.
2. Ellipsis Display - Shows ellipsis when there are too many pages.
3. Multiple Sizes - Controlled via the small property.

### State Styles
The Pagination component provides corresponding styles for different states:

1. Default State - Standard pagination style.
2. Active State - Highlighting for the current page.
3. Disabled State - Controlled via the disabled property.
4. Small Size State - Controlled via the small property.


## Component Structure Design
### Overall Structure
The overall structure of the Pagination component is as follows:

```html
<div v-if="!hideOnSinglePage || totalPages > 1" class="my-pagination" :class="{ small, disabled }">
  <template v-for="item in (layout || '').split(',').map(s => s.trim())" :key="item">
    <!-- Previous Page -->
    <button v-if="item === 'prev'" class="btn-prev" :class="{ 'has-background': background }"
      :disabled="currentPageNumber === 1 || disabled" @click="handlePageChange(currentPageNumber - 1)" :style="stylePage">
      Prev
    </button>

    <!-- Page Numbers -->
    <div v-if="item === 'pager'" class="pager">
      <button v-for="page in pagerList" :key="page"
        :class="['pager-item', { active: currentPage === page, 'has-background': background }]" :disabled="disabled"
        @click="page !== '...' && handlePageChange(Number(page))"
        :style="currentPage === page ? activeItemStyle : itemPageStyle">
        {{ page }}
      </button>
    </div>

    <!-- Next Page -->
    <button v-if="item === 'next'" class="btn-next" :class="{ 'has-background': background }"
      :disabled="currentPage === totalPages || disabled" @click="handlePageChange(currentPageNumber + 1)"
      :style="stylePage">
      Next
    </button>

    <!-- Page Sizes -->
    <select v-if="item === 'sizes' && pageSizes.length" class="page-sizes" :disabled="disabled" :value="pageSize"
      @change="handleSizeChange(($event.target as HTMLSelectElement).value)">
      <option v-for="size in pageSizes" :key="size" :value="size">
        {{ size }} / page
      </option>
    </select>

    <!-- Jumper -->
    <div v-if="item === 'jumper'" class="jumper">
      Go to
      <input type="number" :value="currentPage" :disabled="disabled"
        @change="handleJumperChange(($event.target as HTMLInputElement).value)" />
    </div>

    <!-- Total -->
    <span v-if="item === 'total'" class="total">Total: {{ total }}</span>
  </template>
</div>
```

### 组Component Hierarchy
The Pagination component consists of several main parts:

1. Container - .my-pagination - Wraps the entire pagination component.
2. Previous Page Button - .btn-prev - Navigates to the previous page.
3. Page List - .pager - Container for page numbers.
4. Page Item - .pager-item - Individual page number.
5. Next Page Button - .btn-next - Navigates to the next page.
6. Page Size Selector - .page-sizes - Selector for items per page.
7. Page Jumper - .jumper - Input for jumping to a specific page.
8. Total Count - .total - Displays total number of items.

## Interaction Design
### Page Number Calculation
The Pagination component computes the page number list via pagerList:

```typescript
const pagerList = computed(() => {
  const pages = [];
  const maxPagerCount = Number(props.maxPagerCount);
  const half = Math.floor(maxPagerCount / 2);
  const currentPage = Number(props.currentPage);
  let start, end;

  if (totalPages.value <= maxPagerCount) {
    // Show all pages
    start = 1;
    end = totalPages.value;
  } else {
    // Show partial pages + ellipsis
    if (currentPage <= half) {
      start = 1;
      end = maxPagerCount - 2;
    } else if (currentPage >= totalPages.value - half) {
      start = totalPages.value - maxPagerCount + 3;
      end = totalPages.value;
    } else {
      start = currentPage - half + 1;
      end = currentPage + half - 1;
    }
  }

  // Add first page
  pages.push(1);
  if (start > 2) pages.push('...');

  // Add middle pages
  for (let i = Math.max(2, start); i <= Math.min(totalPages.value - 1, end); i++) {
    pages.push(i);
  }

  // Add last page
  if (end < totalPages.value - 1) pages.push('...');
  if (totalPages.value > 1) pages.push(totalPages.value);

  return pages;
});
```

### Event Handling
The Pagination component provides rich event support:

```typescript
// Page change
const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPageNumber.value) {
    emit('update:current-page', page);
    emit('change', page, props.pageSize);
  }
};

// Page size change
const handleSizeChange = (size: string) => {
  const newSize = Number(size);
  emit('update:page-size', newSize);
  emit('update:current-page', 1); // Reset to first page
  emit('change', 1, newSize);
};

// Jump to specific page
const handleJumperChange = (value: string) => {
  let page = Number(value);
  if (isNaN(page) || page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;
  handlePageChange(page);
};
```

#### Event Descriptions:
· update:current-page: Triggered when the current page changes.
· update:page-size: Triggered when the page size changes.
· change: Triggered when either the page number or page size changes


## Extensibility Design
The Pagination component offers excellent extensibility:

1. Layout Configuration: Flexibly configure component layout via the layout property.
2. Style Customization: Customize component styles via various color properties.
3. Size Control: Control component size via the small property.
4. State Management: Control component state via the disabled property.
5. Single Page Hiding: Control visibility on single page via the hideOnSinglePage property.

## Style Details
The Pagination component features the following style handling characteristics:

1. Responsive Design: Supports flexible layout adaptation.
2. Consistency: Maintains style consistency with other library components.
3. Accessibility Design: Ensures keyboard navigation and screen reader friendliness.
4. State Feedback: Provides clear visual feedback (e.g., disabled state, active state).
5. Animation Effects: Uses CSS transitions for smooth interaction effects.

## Performance Optimization
Performance is optimized through:

1. Caching page list computation results using computed properties.
2. Moving complex logic into independent functions.
3. Avoiding unnecessary re-renders.
4. Leveraging Vue 3 Composition API for runtime efficiency.
5. Rendering component elements on demand (e.g., optionally hiding on single page).
6. Using CSS transitions instead of JavaScript animations.

## Design Value
The Pagination component embodies the design philosophy of our component library:

1. Separation of Concerns: Complete decoupling of structure, style, and logic.
2. High Reusability: Abstracting common logic via functions.
3. Ease of Maintenance: Clear code structure and naming conventions.
4. Strong Extensibility: Support for rich customization options.
5. Consistency: Maintains a consistent design language with other components like Table and List.