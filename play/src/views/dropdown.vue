<template>
  <MYDropdown trigger="click" placement="bottom-start" class="a">
    <span class="el-dropdown-link" style="cursor: pointer; display: flex; align-items: center;">
      Dropdown List
      <svg
        class="el-icon--right"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="16"
        height="16"
        viewBox="0 0 1024 1024"
        style="margin-left: 4px;"
      >
        <path d="M298 380l214 214 214-214z"/>
      </svg>
    </span>

    <template #dropdown>
      <MYDropdown-menu>
        <MYDropdown-item @click="onAction('Action 1')">Action 1</MYDropdown-item>
        <MYDropdown-item @click="onAction('Action 2')">Action 2</MYDropdown-item>
        <MYDropdown-item disabled>Action 3 (disabled)</MYDropdown-item>
        <MYDropdown-item divided @click="onAction('Action 4')">Action 4 (divided)</MYDropdown-item>
      </MYDropdown-menu>
    </template>
  </MYDropdown>
</template>

<script setup lang="ts">
function onAction(action: string) {
  alert(`You clicked ${action}`)
}
</script>
<style scoped>
.a {
  display: flex;
  /* justify-content: center; */
  margin-top: 100px;
}
</style>
