<template>
    <div id="search" class="pagefind-ui"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// onMounted(async () => {
//   if (typeof window !== 'undefined' && 'Pagefind' in window) {
//     const { Pagefind } = window as any
//     Pagefind.initialize({
//       appId: 'mengyue-components',
//       inputSelector: '#search',
//       resultsSelector: '#search-results',
//       suggestionsSelector: '#search-suggestions',
//     })
//   }
// })

onMounted(async () => {
  if (typeof window !== 'undefined' && 'Pagefind' in window) {
    const { PagefindUI } = await import('@pagefind/default-ui')
    new PagefindUI({
        element: '#search',
        showSubResults: true,
        autofocus: true,
    })
  }
})
</script>

<style lang="scss" scoped>
@import '@pagefind/default-ui/css/ui.css'
</style>