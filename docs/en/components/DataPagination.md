# Pagination

## Introduction

The Pagination component is used for displaying data in pages, improving user experience.
You can use `<MYPagination></MYPagination>` or `<MYPagination />` to implement a pagination component.

## Basic Pagination

<ShowCode
  title="Basic Pagination"
  :code="`
<template>
  <MYPagination 
    v-model:current-page='currentPage'
    v-model:page-size='pageSize'
    layout='prev, pager, next' 
    :total='50' 
  />
</template>
<script setup>
import { ref } from 'vue';
const currentPage = ref(1);
const pageSize = ref(10);
</script>
  `.trim()"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYPagination 
        v-model:current-page="currentPage" 
        v-model:page-size="pageSize" 
        layout="prev, pager, next" 
        :total="50" 
      />
    </div>
  </template>
</ShowCode>

## Complete Color Customization

<ShowCode
  title="Complete Color Customization"
  description="Combine all color customization properties to achieve fully custom styles"
  :code="`
<template>
  <MYPagination 
    v-model:current-page='currentPage9'
    v-model:page-size='pageSize9'
    :total='200'
    layout='prev, pager, next, jumper'
    prevColor='#6A5ACD'
    prevTextColor='#FFFFFF'
    itemColor='#F8F9FA'
    itemTextColor='#495057'
    activeItemColor='#6A5ACD'
    activeItemTextColor='#FFFFFF'
    background
  />
</template>
<script setup>
import { ref } from 'vue';
const currentPage9 = ref(5);
const pageSize9 = ref(10);
</script>
  `.trim()"
>
  <template #demo>
    <div style="margin: 20px 0;">
      <MYPagination 
        v-model:current-page="currentPage9" 
        v-model:page-size="pageSize9" 
        :total="200" 
        layout="prev, pager, next, jumper"
        prevColor="#6A5ACD"
        prevTextColor="#FFFFFF"
        item-color="#F8F9FA"
        item-text-color="#495057"
        active-item-color="#6A5ACD"
        active-item-text-color="#FFFFFF"
        background
      />
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| total | Total number of data items | number | — | `0` |
| pageSize | Number of items per page | number | — | `10` |
| currentPage | Current page number | number | — | `1` |
| maxPagerCount | Maximum number of page buttons | number | — | `7` |
| layout | Pagination component layout | string | — | `'prev, pager, next'` |
| pageSizes | Optional values for items per page | number[] | — | `[]` |
| background | Whether to add background color to pagination buttons | boolean | — | `false` |
| small | Whether to use small pagination style | boolean | — | `false` |
| hideOnSinglePage | Whether to hide pagination when only one page | boolean | — | `false` |
| disabled | Whether to disable the pagination component | boolean | — | `false` |
| prevColor | Previous/Next button background color | string | Supports hex colors or color names | `''` |
| prevTextColor | Previous/Next button text color | string | Supports hex colors or color names | `''` |
| itemColor | Page button background color | string | Supports hex colors or color names | `''` |
| itemTextColor | Page button text color | string | Supports hex colors or color names | `''` |
| activeItemColor | Active page button background color | string | Supports hex colors or color names | `''` |
| activeItemTextColor | Active page button text color | string | Supports hex colors or color names | `''` |

### Type Definitions

```typescript
interface PaginationProps {
  total?: number;
  pageSize?: number;
  currentPage?: number;
  maxPagerCount?: number;
  layout?: string;
  pageSizes?: number[];
  background?: boolean;
  small?: boolean;
  hideOnSinglePage?: boolean;
  disabled?: boolean;
  prevColor?: string;
  prevTextColor?: string;
  itemColor?: string;
  itemTextColor?: string;
  activeItemColor?: string;
  activeItemTextColor?: string;
}
```

<script setup> 
import { ref } from 'vue'; 
import MYPagination from '../../../packages/components/pagination/src/pagination.vue'
import '../../../packages/components/pagination/style/pagination.scss'
const currentPage = ref(1); 
const pageSize = ref(10); 
const currentPage2 = ref(1); 
const pageSize2 = ref(10); 
const currentPage3 = ref(1); 
const pageSize3 = ref(10); 
const currentPage4 = ref(1); 
const pageSize4 = ref(10); 
const currentPage5 = ref(1); 
const pageSize5 = ref(10); 
const currentPage6 = ref(1); 
const pageSize6 = ref(10); 
const currentPage7 = ref(1); 
const pageSize7 = ref(10); 
const currentPage8 = ref(3); 
const pageSize8 = ref(10);
const currentPage9 = ref(5);
const pageSize9 = ref(10); 
</script>
