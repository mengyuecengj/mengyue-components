<!-- examples/DropdownDemo.vue -->
<template>
  <div style="padding:32px; display:flex; gap:24px; flex-wrap:wrap;">
    <!-- 基本 hover -->
    <MYDropdown type="default" size="md" @close="close">
      <template #default>默认操作</template>
      <template #dropdown>
        <MYDropdown-item command="a">选项 A</MYDropdown-item>
        <MYDropdown-item command="b">选项 B</MYDropdown-item>
        <MYDropdown-item command="c" disabled>选项 C（禁用）</MYDropdown-item>
        <MYDropdown-item command="d" divided>选项 D（分隔）</MYDropdown-item>
      </template>
    </MYDropdown>

    <!-- 点击触发 -->
    <MYDropdown trigger="click" type="primary">
      <template #default>点击触发</template>
      <template #dropdown>
        <MYDropdown-item command="1">操作 1</MYDropdown-item>
        <MYDropdown-item command="2">操作 2</MYDropdown-item>
      </template>
    </MYDropdown>

    <!-- split-button -->
    <MYDropdown splitButton type="primary" @click="onPrimary">
      <template #default>主操作</template>
      <template #dropdown>
        <MYDropdown-item command="x">删除</MYDropdown-item> 
        <MYDropdown-item command="y">重命名</MYDropdown-item>
      </template>
    </MYDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue' 
const visible = ref(false);
function onPrimary() {
  alert('主操作触发');
}

const close = () => {
  visible.value = false;  // 关闭菜单
};

</script>

<style scoped>
/* small styling for demo buttons not needed; components style included */
</style>
