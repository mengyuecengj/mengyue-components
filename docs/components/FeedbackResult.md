# Result
## 简易介绍
result结果组件，用于展示操作结果的状态。<br />
可以使用`<MYResult></MYResult>`来实现一个结果展示。

## 基础用法
使用`title`属性设置主标题，`subTitle`属性设置副标题。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYResult title='操作成功' subTitle='您的操作已成功完成' />
</template>
  `.trim()"
>
  <template #demo>
    <MYResult title="操作成功" subTitle="您的操作已成功完成" />
  </template>
</ShowCode>

## 图标类型
通过`icon`属性可以设置结果图标。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='主要结果' subTitle='这是一个主要结果' />
        <MYResult icon='success' title='成功结果' subTitle='操作成功完成' />
        <MYResult icon='warning' title='警告结果' subTitle='请注意相关事项' />
        <MYResult icon='error' title='错误结果' subTitle='操作失败，请重试' />
        <MYResult icon='info' title='信息结果' subTitle='这是一条信息提示' />
    </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; flex-direction: column; gap: 20px;">
        <MYResult icon="primary" title="主要结果" subTitle="这是一个主要结果" />
        <MYResult icon="success" title="成功结果" subTitle="操作成功完成" />
        <MYResult icon="warning" title="警告结果" subTitle="请注意相关事项" />
        <MYResult icon="error" title="错误结果" subTitle="操作失败，请重试" />
        <MYResult icon="info" title="信息结果" subTitle="这是一条信息提示" />
    </div>
  </template>
</ShowCode>

## 插槽使用
使用插槽可以自定义副标题和额外内容。
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYResult title='操作成功' icon='success'>
        <template #sub-title>
            <div style='color: #52c41a; font-weight: bold;'>
                自定义副标题内容，支持HTML
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary'>返回首页</MYButton>
                <MYButton type='info'>查看详情</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()"
>
  <template #demo>
    <MYResult title="操作成功" icon="success">
        <template #sub-title>
            <div style="color: #52c41a; font-weight: bold;">
                自定义副标题内容，支持HTML
            </div>
        </template>
        <template #extra>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <MYButton type="primary">返回首页</MYButton>
                <MYButton type="info">查看详情</MYButton>
            </div>
        </template>
    </MYResult>
  </template>
</ShowCode>

## 组合使用
最后，实现个多种api组合使用实现个结果页面：
<ShowCode
  title="代码演示"
  :code="`
<template>
    <MYResult 
        title='组合使用示例'
        icon='success'
    >
        <template #sub-title>
            <div style='color: #409EFF;'>
                这是一个组合使用的完整示例
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary' size='large'>主要操作</MYButton>
                <MYButton type='info' size='large' plain>次要操作</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()"
>
  <template #demo>
    <MYResult 
        title="组合使用示例"
        icon="success"
    >
        <template #sub-title>
            <div style="color: #409EFF;">
                这是一个组合使用的完整示例
            </div>
        </template>
        <template #extra>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <MYButton type="primary" size="large">主要操作</MYButton>
                <MYButton type="info" size="large" plain>次要操作</MYButton>
            </div>
        </template>
    </MYResult>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title        | 主标题       | string  | —                               | `''`   |
| subTitle     | 副标题       | string  | —                               | `''`   |
| icon         | 图标类型     | string  | `primary`/`success`/`warning`/`error`/`info` | `'info'` |

### Slots
| 名称          | 说明         |
|--------------|-------------|
| sub-title    | 自定义副标题内容 |
| extra        | 额外内容区域 |

### 类型定义
```typescript
interface ResultProps {
  title?: string;
  subTitle?: string;
  icon?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}
```
<script setup> 
import MYResult from '../../packages/components/result/src/result.vue' 
import MYButton from '../../packages/components/button/src/button.vue' 
</script>
