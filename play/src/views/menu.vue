<template>
  <MYMenu
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <MYMenu-item index="1">首页</MYMenu-item>

    <MYMenu-submenu index="2">
      <template #title>工作区</template>
      <MYMenu-item index="2-1">项目一</MYMenu-item>
      <MYMenu-item index="2-2">项目二</MYMenu-item>

      <MYMenu-submenu index="2-3">
        <template #title>项目三</template>
        <MYMenu-item index="2-3-1">子项一</MYMenu-item>
        <MYMenu-item index="2-3-2">子项二</MYMenu-item>
      </MYMenu-submenu>
    </MYMenu-submenu>

    <MYMenu-item index="3" disabled>禁用</MYMenu-item>
    <MYMenu-item index="4">设置</MYMenu-item>
  </MYMenu>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
function handleSelect(index: string, path: string[]) {
  console.log('选中菜单:', index, path)
}
</script>
