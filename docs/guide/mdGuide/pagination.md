# Pagination
## 简易介绍
Pagination 分页组件，用于数据分页展示，提升用户体验。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYPagination></MYPagination>` 或者 `<MYPagination />` 来实现一个分页组件。

## 基础分页器
```vue
<MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="prev, pager, next" :total="50" />
<script setup>
import { ref } from 'vue';

const currentPage = ref(1);
const pageSize = ref(10);
</script>
```
<MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="prev, pager, next" :total="50" />

### 省略分页
```vue
<div class="example-pagination-block">
  <div class="example-demonstration">With Background and Sizes</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="sizes, prev, pager, next, jumper, total"
      :total="1000" :page-sizes="[10, 20, 50, 100]" background @change="handleChange" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">Small Pagination, Hide on Single Page</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="prev, pager, next" :total="10" small
      hide-on-single-page />
  </div>
```
<div class="example-pagination-block">
  <div class="example-demonstration">With Background and Sizes</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="sizes, prev, pager, next, jumper, total"
      :total="1000" :page-sizes="[10, 20, 50, 100]" background @change="handleChange" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">Small Pagination, Hide on Single Page</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="prev, pager, next" :total="10" small
      hide-on-single-page />
</div>

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

### 类型定义
```vue
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
}
```

<script setup>
import { ref } from 'vue';

const currentPage = ref(1);
const pageSize = ref(10);
</script>