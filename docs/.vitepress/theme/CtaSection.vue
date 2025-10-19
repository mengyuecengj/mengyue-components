<!-- .vitepress/theme/components/CtaSection.vue -->
<template>
  <section class="cta-section">
    <h2>{{ frontmatter.cta.title }}</h2>
    <p class="subtitle">{{ frontmatter.cta.text }}</p>
    <div class="actions">
      <a :href="frontmatter.cta.action.link" class="primary-button">{{ frontmatter.cta.action.text }}</a>
      <a :href="frontmatter.cta.secondaryAction.link" class="secondary-button">{{ frontmatter.cta.secondaryAction.text }}</a>
    </div>
  </section>
</template>

<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<style scoped>
.cta-section {
  padding: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-radius: 12px;
  margin: 2rem 0;
}
.subtitle {
  margin-bottom: 2rem;
  font-size: 1.1rem;
}
.actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
.primary-button, .secondary-button {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease;
}
.primary-button {
  background: #f6e05e;
  color: #4a5568;
}
.primary-button:hover {
  background: #f6ad55;
  transform: translateY(-2px);
}
.secondary-button {
  background: transparent;
  border: 2px solid white;
  color: white;
}
.secondary-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .actions {
    flex-direction: column;
  }
}
</style>