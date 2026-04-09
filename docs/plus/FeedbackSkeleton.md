# Skeleton
## 简易介绍
Skeleton 骨架屏，用于在数据加载时展示占位内容，提升用户体验。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYSkeleton></MYSkeleton>` 或者 `<MYSkeleton />` 和`<MYSkeleton-item></MYSkeleton-item>`或者`<MYSkeleton-item />`来实现一个骨架屏。

## 基础用法
### 默认多行文本骨架屏
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton />
  </template>
</ShowCode>

## 自定义行数
使用`count`属性可以设置骨架屏的行数。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton :count="5" />
  </template>
</ShowCode>

## 圆形骨架屏
使用`variant`属性可以设置不同的骨架屏样式。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant="circle" style="width: 100px; height: 100px" />
        </template>
    </MYSkeleton>
  </template>
</ShowCode>

## 矩形骨架屏
使用`variant="rect"`可以创建矩形骨架屏。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant="rect" style="width: 200px; height: 100px" />
        </template>
    </MYSkeleton>
  </template>
</ShowCode>

## 随机宽度
使用`randomWidth`属性可以让骨架屏的宽度随机变化。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()"
>
  <template #demo>
    <MYSkeleton :randomWidth="true" :count="5" />
  </template>
</ShowCode>

## 动态加载
使用`loading`属性可以控制骨架屏的显示状态。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div>
        <MYButton @click='toggleLoading'>切换加载状态</MYButton>
        <MYSkeleton :loading='isLoading' style='margin-top: 20px'>
            <template #default>
                <div style='padding: 20px; background: #f5f5f5; border-radius: 4px;'>
                    <h3>实际内容标题</h3>
                    <p>这是实际加载完成后的内容...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div>
        <MYButton @click="toggleLoading">切换加载状态</MYButton>
        <MYSkeleton :loading="isLoading" style="margin-top: 20px">
            <template #default>
                <div style="padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>实际内容标题</h3>
                    <p>这是实际加载完成后的内容...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
  </template>
</ShowCode>

## 延迟显示
使用`throttle`属性可以设置骨架屏显示的延迟时间。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()"
>
  <template #demo>
    <div>
        <MYButton @click="toggleThrottleLoading">触发延迟加载 (1秒)</MYButton>
        <MYSkeleton :throttle="1000" :loading="throttleLoading" style="margin-top: 20px" />
    </div>
  </template>
</ShowCode>

## 主题样式
使用`theme`属性可以设置骨架屏的主题。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYSkeleton theme="light" />
        <div style="background: #333; padding: 20px; border-radius: 4px;">
            <MYSkeleton theme="dark" />
        </div>
    </div>
  </template>
</ShowCode>

## API 参考

### Skeleton Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| loading      | 是否显示骨架屏 | boolean | —                               | `true`  |
| count        | 占位行数     | number  | —                               | `3`     |
| randomWidth  | 占位宽度是否随机 | boolean \| string | —                 | `false` |
| throttle     | 显示延迟时间（毫秒） | number | —                    | `0`     |
| theme        | 主题样式     | string  | `'light'` \| `'dark'`          | `'light'` |

### SkeletonItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| variant      | 展示样式     | string  | `text` \| `circle` \| `rect`    | `'text'` |
| width        | 指定宽度     | number \| string | —                    | `'100%'` |
| height       | 指定高度     | number \| string | —                    | `16`     |

### Skeleton Slots
| 名称          | 说明         |
|--------------|-------------|
| default      | 实际内容     |
| template     | 自定义骨架屏模板 |

### 类型定义
```typescript
interface SkeletonProps {
  loading?: boolean;
  animated?: boolean;
  count?: number;
  randomWidth?: boolean | string;
  throttle?: number;
  theme?: 'light' | 'dark';
}

interface SkeletonItemProps {
  variant?: 'text' | 'circle' | 'rect';
  width?: number | string;
  height?: number | string;
}
```
<script setup> 
import { ref } from 'vue' 
import MYSkeleton from '../../packages/components/skeleton/src/skeleton.vue' 
import MYSkeletonItem from '../../packages/components/skeleton/src/skeletonItem.vue' 
import MYButton from '../../packages/components/button/src/button.vue' 
const isLoading = ref(true) 
const throttleLoading = ref(false) 
const toggleLoading = () => { 
    isLoading.value = !isLoading.value 
} 
const toggleThrottleLoading = () => { 
    throttleLoading.value = true 
    setTimeout(() => { 
        throttleLoading.value = false 
    }, 3000) 
}
</script>
