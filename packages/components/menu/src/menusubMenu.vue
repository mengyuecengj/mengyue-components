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
      <ul v-show="open" class="submenu-list">
        <slot />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '../style/menusubMenu.scss'

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

