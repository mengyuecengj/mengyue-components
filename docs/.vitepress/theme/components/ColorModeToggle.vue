<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

function toggle() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    aria-label="切换主题"
    class="color-mode-toggle"
    type="button"
  >
    <span v-if="colorMode === 'dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<style scoped>
.color-mode-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  padding: 4px 8px;
  color: var(--vp-c-text);
  transition: color 0.3s ease;
}

.color-mode-toggle:hover {
  color: var(--vp-c-brand);
}
</style>
