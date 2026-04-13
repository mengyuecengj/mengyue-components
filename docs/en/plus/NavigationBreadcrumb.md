# Breadcrumb

## Introduction

The Breadcrumb component is used to display the current page's position within the system hierarchy. mengyue-components has encapsulated this component and conducted vitest testing.
You can use `<MYBreadcrumb></MYBreadcrumb>` or `<MYBreadcrumb />` to implement a breadcrumb component.

## Basic Usage

### Basic Breadcrumb

Use the `separator` prop to customize the separator.

<ShowCode
  title="Code Demo"
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

### Custom Separator

You can use any character as the separator.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYBreadcrumb separator='>'>
    <MYBreadcrumb-item :to='{ path: \'/\' }'>Home</MYBreadcrumb-item>
    <MYBreadcrumb-item>User Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>User List</MYBreadcrumb-item>
    <MYBreadcrumb-item>User Details</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()"
>
  <template #demo>
    <MYBreadcrumb separator=">">
      <MYBreadcrumb-item :to="{ path: '/' }">Home</MYBreadcrumb-item>
      <MYBreadcrumb-item>User Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>User List</MYBreadcrumb-item>
      <MYBreadcrumb-item>User Details</MYBreadcrumb-item>
    </MYBreadcrumb>
  </template>
</ShowCode>

## API Reference

### Breadcrumb Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| separator | Separator | string | — | `'/'` |
| separatorIcon | Custom separator icon | object \| function | — | `null` |

### BreadcrumbItem Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| to | Route navigation object | object | — | `null` |
| replace | Whether to use replace for route navigation | boolean | — | `false` |

### Type Definitions

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
import MYBreadcrumb from '../../../packages/components/breadcrumb/src/breadcrumb.vue' 
import MYBreadcrumbItem from '../../../packages/components/breadcrumb/src/breadcrumbItem.vue' 
</script>
