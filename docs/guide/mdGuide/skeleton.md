# Skeleton
## 简易介绍
Skeleton 骨架屏，用于在数据加载时展示占位内容，提升用户体验。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYSkeleton></MYSkeleton>` 或者 `<MYSkeleton />` 和`<MYSkeleton-item></MYSkeleton-item>`或者`<MYSkeleton-item />`来实现一个骨架屏。

## 基本用法
### 默认多行文本骨架屏
```vue
<MYSkeleton />
```
<MYSkeleton />

### 自定义圆形骨架屏
```vue
<MYSkeleton :animated="true"></MYSkeleton>
```
<MYSkeleton style="--el-skeleton-circle-size: 100px">
  <template #template>
    <MYSkeleton-item variant="circle"
          style="width: var(--el-skeleton-circle-size); height: var(--el-skeleton-circle-size)" />
  </template>
</MYSkeleton>

### 动态加载
```vue
<MYSkeleton :loading="isLoading">
  <template #default>
    <div>实际内容</div>
  </template>
</MYSkeleton>
```
<MYSkeleton :loading="isLoading">
  <template #default>
    <div>实际内容</div>
  </template>
</MYSkeleton>

### 随机宽度
```vue
<MYSkeleton :random-width="true" :count="5" />
```
<MYSkeleton :random-width="true" :count="5" />

## API 参考
### skeleton Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| loading  | 是否显示骨架屏      | boolean  | — | `true`  |
| animated  | 是否显示动画效果      | boolean  | — | `true`  |
| count  | 占位行数      | number  | — | `3`  |
| randomWidth  | 占位宽度是否随机      | boolean \| string  | — | `false`  |
| throttle  | 显示延迟时间（毫秒）      | number  | — | `0`  |
| theme  | 主题样式      | string  | `'light'` \| `'dark'` | `'light'`  |

### skeletonItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| variant  | 展示样式      | string  | — | `text`  |
| width  | 指定宽度      | boolean/number  | — | `100%`  |
| height  | 指定高度      | boolean/number  | — | `16`  |

### 类型定义
```vue
interface SkeletonProps {
  loading?: boolean;
  animated?: boolean;
  count?: number;
  randomWidth?: boolean | string;
  throttle?: number;
  theme?: string;
}

interface SkeletonItemProps {
  variant?: string;
  width?: boolean | number;
  height?: boolean | number;
}
```
