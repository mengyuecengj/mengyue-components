# Pagination
## 简易介绍
Pagination 分页组件，用于数据分页展示，提升用户体验。
可以使用 `<MYPagination></MYPagination>` 或者 `<MYPagination />` 来实现一个分页组件。

## 基础分页器
<ShowCode
  title="基础分页器"
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

### 完整颜色定制
<ShowCode
  title="完整颜色定制"
  description="组合使用所有颜色定制属性实现完整自定义样式"
  :code="`
<template>
  <MYPagination 
    v-model:current-page='currentPage9'
    v-model:page-size='pageSize9'
    :total='200'
    layout='prev, pager, next, jumper'
    prne-color='#6A5ACD'
    prne-text-color='#FFFFFF'
    item-color='#F8F9FA'
    item-text-color='#495057'
    active-item-color='#6A5ACD'
    active-item-text-color='#FFFFFF'
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
        prne-color="#6A5ACD"
        prne-text-color="#FFFFFF"
        item-color="#F8F9FA"
        item-text-color="#495057"
        active-item-color="#6A5ACD"
        active-item-text-color="#FFFFFF"
        background
      />
    </div>
  </template>
</ShowCode>

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| total  | 总数据条数      | number  | — | `0`  |
| pageSize  | 每页显示条数      | number  | — | `10`  |
| currentPage  | 当前页码      | number  | — | `1`  |
| maxPagerCount  | 页码按钮的最大数量      | number  | — | `7`  |
| layout  | 分页组件布局      | string  | — | `'prev, pager, next'`  |
| pageSizes  | 每页显示条数的可选值      | number[]  | — | `[]`  |
| background  | 是否为分页按钮添加背景色      | boolean  | — | `false`  |
| small  | 是否使用小型分页样式      | boolean  | — | `false`  |
| hideOnSinglePage  | 是否在只有一页时隐藏分页组件      | boolean  | — | `false`  |
| disabled  | 是否禁用分页组件      | boolean  | — | `false`  |
| prneColor | 上一页/下一页按钮背景色 | string | 支持16进制颜色或单词颜色 | `''` |
| prneTextColor | 上一页/下一页按钮文字颜色 | string | 支持16进制颜色或单词颜色 | `''` |
| itemColor | 页码按钮背景色 | string | 支持16进制颜色或单词颜色 | `''` |
| itemTextColor | 页码按钮文字颜色 | string | 支持16进制颜色或单词颜色 | `''` |
| activeItemColor | 当前选中页码按钮背景色 | string | 支持16进制颜色或单词颜色 | `''` |
| activeItemTextColor | 当前选中页码按钮文字颜色 | string | 支持16进制颜色或单词颜色 | `''` |

### 类型定义
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
  prneColor?: string;
  prneTextColor?: string;
  itemColor?: string;
  itemTextColor?: string;
  activeItemColor?: string;
  activeItemTextColor?: string;
}
```
<script setup> 
import { ref } from 'vue'; 
import MYPagination from '../../packages/components/pagination/src/pagination.vue'
import '../../packages/components/pagination/style/pagination.scss'
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