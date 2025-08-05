<!-- .vitepress/theme/components/CommunitySection.vue -->
<template>
  <section class="community-section">
    <h2>{{ frontmatter.community.title }}</h2>
    <p class="subtitle">{{ frontmatter.community.subtitle }}</p>
    <div class="community-grid">
      <div v-for="item in frontmatter.community.items" :key="item.title" class="community-card">
        <span class="icon">{{ item.icon }}</span>
        <h3>{{ item.title }}</h3>
        <p>{{ item.details }}</p>
        <a :href="item.link" :class="{ external: item.external }" class="link">了解更多</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.community-section {
  padding: 2rem;
  text-align: center;
  background: #ffffff;
}
.subtitle {
  color: #718096;
  margin-bottom: 2rem;
}
.community-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.community-card {
  background: #f7fafc;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.community-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
.icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #3182ce;
}
.link {
  color: #2b6cb0;
  text-decoration: none;
  font-weight: 600;
}
.link.external::after {
  content: '↗';
  margin-left: 4px;
}
@media (max-width: 768px) {
  .community-grid {
    grid-template-columns: 1fr;
  }
}
</style>