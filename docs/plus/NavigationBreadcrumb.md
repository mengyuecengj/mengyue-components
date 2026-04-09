# Breadcrumb

## 简易介绍
Breadcrumb 面包屑组件，用于显示当前页面在系统层级结构中的位置。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYBreadcrumb></MYBreadcrumb>` 或者 `<MYBreadcrumb />` 来实现一个面包屑组件。

## 基本用法

### 基础面包屑
使用 `separator` 属性自定义分隔符。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBreadcrumb separator='/'>
    <MYBreadcrumb-item :to='{ path: \'/\' }'>Homepage</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()"
>
  <template #demo>
    <MYBreadcrumb separator="/">
      <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
    </MYBreadcrumb>
  </template>
</ShowCode>

### 自定义分隔符
可以使用任意字符作为分隔符。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYBreadcrumb separator='>'>
    <MYBreadcrumb-item :to='{ path: \'/\' }'>首页</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户管理</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户列表</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户详情</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()"
>
  <template #demo>
    <MYBreadcrumb separator=">">
      <MYBreadcrumb-item :to="{ path: '/' }">首页</MYBreadcrumb-item>
      <MYBreadcrumb-item>用户管理</MYBreadcrumb-item>
      <MYBreadcrumb-item>用户列表</MYBreadcrumb-item>
      <MYBreadcrumb-item>用户详情</MYBreadcrumb-item>
    </MYBreadcrumb>
  </template>
</ShowCode>

## API 参考

### Breadcrumb Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| separator  | 分隔符      | string  | — | `'/'`  |
| separatorIcon  | 自定义分隔符图标      | object \| function  | — | `null`  |

### BreadcrumbItem Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| to  | 路由跳转对象      | object  | — | `null`  |
| replace  | 是否使用 replace 进行路由跳转      | boolean  | — | `false`  |

### 类型定义
```typescript
interface BreadcrumbProps {
  separator?: string;
  separatorIcon?: Object | Function;
}

interface BreadcrumbItemProps {
  to?: Object;
  replace?: boolean;
}
```
<script setup> 
import MYBreadcrumb from '../../packages/components/breadcrumb/src/breadcrumb.vue' 
import MYBreadcrumbItem from '../../packages/components/breadcrumb/src/breadcrumbItem.vue' 
</script>