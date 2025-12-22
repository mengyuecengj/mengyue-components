# Pagination 组件设计文档

## 概述

Pagination 组件是本组件库中用于实现分页功能的核心组件。它延续了我们组件库一贯的设计理念，采用"关注点分离"和"逻辑抽象"的原则，通过 pagination.vue 和 paginationComputed.ts 等核心逻辑实现了一套完整且易用的分页解决方案。

Pagination 组件专注于处理数据分页展示、页码导航和用户交互，为用户提供了一套强大、灵活的分页管理功能，支持多种布局配置、自定义样式和交互行为，有效提升用户在处理大量数据时的体验。


## 设计理念

### 分层架构

Pagination 组件严格按照三层架构设计：

1. **结构层** pagination.vue - 负责组件的 DOM 结构和基本布局
2. **逻辑层** pagination.ts, paginationComputed.ts - 处理复杂的响应式计算和交互逻辑
3. **表现层** pagination.scss - 定义组件的视觉呈现和样式规则

### 逻辑抽象

Pagination 组件将复杂的逻辑抽象为核心函数：

- usePaginationComputed - 处理分页的核心逻辑
- pagerList - 计算页码列表
- totalPages - 计算总页数

这种设计使得组件本身只需要声明所需逻辑，而具体的计算由逻辑函数完成。

---

## 核心功能设计

### Props 结构化设计

Pagination 组件的 props 设计简洁明了：

```typescript
export const paginationProps = {
  /** 总数据条数 */
  total: {
    type: [Number, String],
    default: 0
  },
  /** 每页显示条数 */
  pageSize: {
    type: [Number, String],
    default: 10
  },
  /** 当前页码 */
  currentPage: {
    type: [Number, String],
    default: 1
  },
  /** 最大显示页码数 */
  maxPagerCount: {
    type: [Number, String],
    default: 7
  },
  /** 布局配置 */
  layout: {
    type: String,
    default: 'prev, pager, next'
  },
  /** 可选的每页条数列表 */
  pageSizes: {
    type: Array as () => (number[]),
    default: () => []
  },
  /** 是否显示背景色 */
  background: {
    type: Boolean,
    default: false
  },
  /** 是否小尺寸 */
  small: {
    type: Boolean,
    default: false
  },
  /** 单页时是否隐藏 */
  hideOnSinglePage: {
    type: Boolean,
    default: false
  },
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    default: false
  },
  /** 上下页按钮背景色 */
  prneColor: {
    type: String,
    default: ''
  },
  /** 上下页按钮文本颜色 */
  prneTextColor: {
    type: String,
    default: ''
  },
  /** 页码按钮背景色 */
  itemColor: {
    type: String,
    default: ''
  },
  /** 页码按钮文本颜色 */
  itemTextColor: {
    type: String,
    default: ''
  },
  /** 激活页码背景色 */
  activeItemColor: {
    type: String,
    default: ''
  },
  /** 激活页码文本颜色 */
  activeItemTextColor: {
    type: String,
    default: ''
  }
}
```

#### 参数说明：
- total：总数据条数。
- pageSize：每页显示的条数。
- currentPage：当前页码。
- maxPagerCount：最大显示的页码数量。
- layout：布局配置，支持 `'prev'`, `'pager'`, `'next'`, `'sizes'`, `'jumper'`, `'total'`。
- pageSizes：可选的每页条数列表。
- hideOnSinglePage：当只有一页时是否隐藏分页组件。

### 布局系统

Pagination 组件支持灵活的布局配置，通过 layout 属性配置：

```vue
<MYPagination layout="prev, pager, next, sizes, jumper, total" />
```

#### 布局选项：
- prev：上一页按钮
- pager：页码列表
- next：下一页按钮
- sizes：每页条数选择
- jumper：页码跳转
- total：总条数显示

## 样式系统设计

### CSS 变量控制

Pagination 组件通过 props 实现样式控制：

1. prneColor - 上下页按钮背景色
2. prneTextColor - 上下页按钮文本色
3. itemColor - 页码按钮背景色
4. itemTextColor- 页码按钮文本色
5. activeItemColor - 激活页码背景色
6. activeItemTextColor - 激活页码文本色

### 布局系统

Pagination 组件支持灵活的布局控制：

1. **响应式布局** - 根据页码数量自动调整显示
2. **省略号显示** - 当页码过多时显示省略号
3. **多种尺寸** - 通过 small属性控制

### 状态样式

Pagination 组件根据不同状态提供相应的样式：

1. **默认状态** - 标准分页样式
2. **激活状态** - 当前页码高亮显示
3. **禁用状态** - 通过 disabled 属性控制
4. **小尺寸状态** - 通过 small 属性控制

## 组件结构设计

### 整体结构

Pagination 组件的整体结构如下：

```html
<div v-if="!hideOnSinglePage || totalPages > 1" class="my-pagination" :class="{ small, disabled }">
  <template v-for="item in (layout || '').split(',').map(s => s.trim())" :key="item">
    <!-- 上一页 -->
    <button v-if="item === 'prev'" class="btn-prev" :class="{ 'has-background': background }"
      :disabled="currentPageNumber === 1 || disabled" @click="handlePageChange(currentPageNumber - 1)" :style="stylePage">
      Prev
    </button>

    <!-- 页码 -->
    <div v-if="item === 'pager'" class="pager">
      <button v-for="page in pagerList" :key="page"
        :class="['pager-item', { active: currentPage === page, 'has-background': background }]" :disabled="disabled"
        @click="page !== '...' && handlePageChange(Number(page))"
        :style="currentPage === page ? activeItemStyle : itemPageStyle">
        {{ page }}
      </button>
    </div>

    <!-- 下一页 -->
    <button v-if="item === 'next'" class="btn-next" :class="{ 'has-background': background }"
      :disabled="currentPage === totalPages || disabled" @click="handlePageChange(currentPageNumber + 1)"
      :style="stylePage">
      Next
    </button>

    <!-- 每页条数 -->
    <select v-if="item === 'sizes' && pageSizes.length" class="page-sizes" :disabled="disabled" :value="pageSize"
      @change="handleSizeChange(($event.target as HTMLSelectElement).value)">
      <option v-for="size in pageSizes" :key="size" :value="size">
        {{ size }} / page
      </option>
    </select>

    <!-- 跳转 -->
    <div v-if="item === 'jumper'" class="jumper">
      Go to
      <input type="number" :value="currentPage" :disabled="disabled"
        @change="handleJumperChange(($event.target as HTMLInputElement).value)" />
    </div>

    <!-- 总条数 -->
    <span v-if="item === 'total'" class="total">Total: {{ total }}</span>
  </template>
</div>
```

### 组件层次

Pagination 组件包含多个主要部分：

1. **容器** - `.my-pagination` - 包裹整个分页组件
2. **上一页按钮** - `.btn-prev` - 导航至上一页
3. **页码列表** - `.pager` - 包含页码的容器
4. **页码项** - `.pager-item` - 单个页码
5. **下一页按钮** - `.btn-next` - 导航至下一页
6. **每页条数选择** - `.page-sizes` - 每页条数选择器
7. **页码跳转** - `.jumper` - 页码跳转输入框
8. **总条数** - `.total` - 显示总条数

## 交互设计

### 页码计算

Pagination 组件通过 pagerList 计算页码列表：

```typescript
const pagerList = computed(() => {
  const pages = [];
  const maxPagerCount = Number(props.maxPagerCount);
  const half = Math.floor(maxPagerCount / 2);
  const currentPage = Number(props.currentPage);
  let start, end;

  if (totalPages.value <= maxPagerCount) {
    // 显示所有页码
    start = 1;
    end = totalPages.value;
  } else {
    // 显示部分页码 + 省略号
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

  // 添加首页
  pages.push(1);
  if (start > 2) pages.push('...');

  // 添加中间页码
  for (let i = Math.max(2, start); i <= Math.min(totalPages.value - 1, end); i++) {
    pages.push(i);
  }

  // 添加末页
  if (end < totalPages.value - 1) pages.push('...');
  if (totalPages.value > 1) pages.push(totalPages.value);

  return pages;
});
```

### 事件处理

Pagination 组件提供丰富的事件支持：

```typescript
// 页码变更
const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value && page !== currentPageNumber.value) {
    emit('update:current-page', page);
    emit('change', page, props.pageSize);
  }
};

// 每页条数变更
const handleSizeChange = (size: string) => {
  const newSize = Number(size);
  emit('update:page-size', newSize);
  emit('update:current-page', 1); // 重置到第一页
  emit('change', 1, newSize);
};

// 跳转到指定页
const handleJumperChange = (value: string) => {
  let page = Number(value);
  if (isNaN(page) || page < 1) page = 1;
  if (page > totalPages.value) page = totalPages.value;
  handlePageChange(page);
};
```

#### 事件说明：
- update:current-page：当前页码变化时触发
- update:page-size：每页条数变化时触发
- change：页码或每页条数变化时触发


## 扩展性设计

Pagination 组件具备良好的扩展性：

1. **布局配置**：通过 layout 属性灵活配置组件布局
2. **样式定制**：通过多种颜色属性自定义组件样式
3. **尺寸控制**：通过 small 属性控制组件尺寸
4. **状态管理**：通过 disabled属性控制组件状态
5. **单页隐藏**：通过 hideOnSinglePage 属性控制单页时是否显示

## 样式细节

Pagination 组件在样式处理上有以下特点：

1. **响应式设计**：支持灵活的布局适配
2. **一致性**：与组件库其他组件保持样式一致性
3. **无障碍设计**：确保键盘导航和屏幕阅读器友好
4. **状态反馈**：提供清晰的视觉反馈（如禁用状态、激活状态）
5. **动画效果**：使用 CSS 过渡实现平滑的交互效果

## 性能优化

通过以下方式优化性能：

1. 使用计算属性缓存页码列表计算结果
2. 将复杂逻辑移至独立的函数中
3. 避免不必要的重新渲染
4. 使用 Vue 3 Composition API 提高运行效率
5. 按需渲染组件元素，如单页时可选择隐藏
6. 使用 CSS 过渡而不是 JavaScript 动画

## 设计价值

Pagination 组件延续了我们组件库的设计哲学：

1. **关注点分离**：结构、样式、逻辑完全解耦
2. **高度复用**：通过函数抽象通用逻辑
3. **易于维护**：清晰的代码结构和命名规范
4. **可扩展性强**：支持丰富的定制选项
5. **一致性**：与 Table、List 等其他组件保持一致的设计语言
