<template>
  <section class="breadcrumb-test">
    <h2>基础用法</h2>
    <MYBreadcrumb separator="/">
      <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
    </MYBreadcrumb>

    <h2 style="margin-top: 40px;">图标分隔</h2>
    <MYBreadcrumb :separator-icon="arrowright">
      <MYBreadcrumb-item :to="{ path: '/' }">Homepage</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
      <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
    </MYBreadcrumb>
  </section>
</template>

<script setup lang="ts">
import arrowright from '../../../packages/components/breadcrumb/src/arrowright.vue'
</script>

<style scoped>
.breadcrumb-test {
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>
