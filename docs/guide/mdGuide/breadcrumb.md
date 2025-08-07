# Breadcrumb
## 简易介绍
Breadcrumb 面包屑组件，用于显示当前页面在系统层级结构中的位置。mengyue-components 进行了封装并进行了 vitest 测试。<br />
可以使用 `<MYBreadcrumb></MYBreadcrumb>` 或者 `<MYBreadcrumb />` 来实现一个面包屑组件。

## 基本用法
```vue
<MYBreadcrumb separator="/">
      <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
</MYBreadcrumb>
```
<MYBreadcrumb separator="/">
      <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
</MYBreadcrumb>

## 自定义分隔符
```vue
<MYBreadcrumb :separator-icon="arrowright">
    <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
</MYBreadcrumb>
```
<MYBreadcrumb :separator-icon="arrowright">
    <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
</MYBreadcrumb>

## API 参考
### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| separator  | 分隔符      | string  | — | `'/'`  |
| separatorIcon  | 自定义分隔符图标      | object \| function  | — | `null`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| default  | 面包屑项内容      |

### 类型定义
```vue
interface BreadcrumbItemProps {
    separator: string;
    separatorIcon: Object | Function 
}
```
