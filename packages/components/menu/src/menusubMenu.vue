<template>
  <li
    class="my-submenu"
    :class="{ open }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="submenu-title" @click="toggleOpen">
      <slot name="title" />
      <svg
        class="icon arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        width="14"
        height="14"
      >
        <path fill="currentColor" d="M384 192l256 320-256 320z" />
      </svg>
    </div>
    <transition name="fade">
      <ul class="submenu-list" v-show="open">
        <slot />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineOptions({
  name: 'MYMenu-submenu'
})
const open = ref(false)

function toggleOpen() {
  open.value = !open.value
}

function onMouseEnter() {
  open.value = true
}

function onMouseLeave() {
  open.value = false
}
</script>

<style scoped lang="scss">
.my-submenu {
  position: relative;
  user-select: none;

  &.open > .submenu-title {
    background-color: #409eff44;
  }
}

.submenu-title {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  cursor: pointer;
  color: var(--menu-text, #fff);
  user-select: none;

  &:hover {
    background-color: #409eff22;
  }
}

.icon.arrow {
  transition: transform 0.3s ease;
  transform-origin: center;
}

.my-submenu.open .icon.arrow {
  transform: rotate(90deg);
}

.submenu-list {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background-color: var(--menu-bg, #2d2f33);
  border: 1px solid #444;
  padding: 4px 0;
  z-index: 999;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  user-select: none;
  list-style: none;
  margin: 0;
    list-style: none; /* 去掉子菜单的ul默认原点 */
  margin: 0;
  padding: 4px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
