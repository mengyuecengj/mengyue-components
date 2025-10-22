# Progress
## 简易介绍
progress进度条组件，用于展示任务或操作的进度状态。<br />
可以使用`<MYProgress></MYProgress>`来实现一个进度条。

## 基础用法
使用`percentage`属性设置进度百分比。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYProgress :percentage='50' />
</template>
  `.trim()"
>
  <template #demo>
    <MYProgress :percentage="50" />
  </template>
</ShowCode>

## 不同状态
使用`status`属性可以设置进度条的状态。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYProgress :percentage='70' status='success' />
        <MYProgress :percentage='50' status='warning' />
        <MYProgress :percentage='30' status='exception' />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYProgress :percentage="70" status="success" />
        <MYProgress :percentage="50" status="warning" />
        <MYProgress :percentage="30" status="exception" />
        <MYProgress :percentage="50" status="exception" />
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| percentage   | 进度百分比   | number  | 0-100之间的值                    | `0`    |
| status       | 进度条状态   | string  | `success`/`warning`/`exception` | `''`   |
| format       | 格式化函数   | function | —                               | —      |

### 类型定义
```typescript
interface ProgressProps {
  percentage?: number;
  status?: 'success' | 'warning' | 'exception' | '';
  color?: string;
  format?: (percentage: number) => string;
  size?: 'small' | 'medium' | 'large';
}
```
<script setup>
import MYProgress from '../../packages/components/progress/src/progress.vue' 
</script>