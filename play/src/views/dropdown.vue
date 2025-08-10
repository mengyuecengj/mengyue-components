<!-- examples/DropdownDemo.vue -->
<template>
  <div style="padding:32px; display:flex; gap:24px; flex-wrap:wrap;">
    <!-- 基本 hover -->
    <MYDropdown type="default" size="md" @command="onCommand">
      <template #default>默认操作</template>
      <template #dropdown>
        <MYDropdown-item command="a">选项 A</MYDropdown-item>
        <MYDropdown-item command="b">选项 B</MYDropdown-item>
        <MYDropdown-item command="c" disabled>选项 C（禁用）</MYDropdown-item>
        <MYDropdown-item command="d" divided>选项 D（分隔）</MYDropdown-item>
      </template>
    </MYDropdown>

    <!-- 点击触发 -->
    <MYDropdown trigger="click" type="primary" @command="onCommand">
      <template #default>点击触发</template>
      <template #dropdown>
        <MYDropdown-item command="1">操作 1</MYDropdown-item>
        <MYDropdown-item command="2">操作 2</MYDropdown-item>
      </template>
    </MYDropdown>

    <!-- split-button -->
    <MYDropdown splitButton type="primary" @click="onPrimary" @command="onCommand">
      <template #default>主操作</template>
      <template #dropdown>
        <MYDropdown-item command="x">删除</MYDropdown-item>
        <MYDropdown-item command="y">重命名</MYDropdown-item>
      </template>
    </MYDropdown>

    <!-- contextmenu -->
    <div style="padding:12px; border:1px dashed #ddd;">
      <p>右键此区域（上下文菜单示例）</p>
      <MYDropdown trigger="contextmenu" teleported placement="bottom-start" @command="onCommand">
        <template #default><span style="padding:6px 8px; background:#fff; border:1px solid #eee;">右键区域</span></template>
        <template #dropdown>
          <MYDropdown-item command="ctx-1">上下文 1</MYDropdown-item>
          <MYDropdown-item command="ctx-2">上下文 2</MYDropdown-item>
        </template>
      </MYDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>

function onCommand(cmd: any) {
  console.log('命令：', cmd);
  alert(`选中: ${JSON.stringify(cmd)}`);
}
function onPrimary() {
  alert('主操作触发');
}
</script>

<style scoped>
/* small styling for demo buttons not needed; components style included */
</style>
