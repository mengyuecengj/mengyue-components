<!-- .vitepress/theme/components/EcosystemSection.vue -->
<template>
  <section class="ecosystem-section">
    <h2>{{ frontmatter.ecosystem.title }}</h2>
    <p class="subtitle">{{ frontmatter.ecosystem.subtitle }}</p>
    <div class="ecosystem-grid">
      <div v-for="item in frontmatter.ecosystem.items" :key="item.title" class="ecosystem-card">
        <img :src="item.image" :alt="item.title" class="ecosystem-image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.ecosystem-section {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(to bottom right, #e2e8f0, #cbd5e0);
  border-radius: 10px;
}
.subtitle {
  color: #4a5568;
  margin-bottom: 2rem;
}
.ecosystem-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.ecosystem-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  width: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.ecosystem-card:hover {
  transform: scale(1.05);
}
.ecosystem-image {
  max-width: 100px;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .ecosystem-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>