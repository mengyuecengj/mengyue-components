<!-- .vitepress/theme/components/PreviewSection.vue -->
<template>
  <section class="preview-section">
    <h2>{{ frontmatter.preview.title }}</h2>
    <p class="subtitle">{{ frontmatter.preview.subtitle }}</p>
    <div class="carousel">
      <div v-for="(item, index) in frontmatter.preview.components" :key="item.name" class="carousel-item" :class="{ active: index === activeIndex }">
        <img :src="item.image" :alt="item.name" class="component-image" />
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <div class="actions">
          <a :href="item.link" class="link">查看文档</a>
          <a v-if="item.demo" :href="item.demo" class="link demo">在线演示</a>
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="carousel-control prev">‹</button>
    <button @click="nextSlide" class="carousel-control next">›</button>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const activeIndex = ref(0)

const components = computed(() => frontmatter.value.preview.components)

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % components.value.length
}

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + components.value.length) % components.value.length
}
</script>

<style scoped>
.preview-section {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  border-radius: 10px;
  position: relative;
}
.subtitle {
  color: #4a5568;
  margin-bottom: 1.5rem;
}
.carousel {
  display: flex;
  overflow: hidden;
  justify-content: center;
}
.carousel-item {
  min-width: 300px;
  margin: 0 1rem;
  background: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.carousel-item.active {
  transform: scale(1.05);
}
.component-image {
  max-width: 150px;
  margin-bottom: 1rem;
}
.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.link {
  color: #3182ce;
  text-decoration: none;
  font-weight: 500;
}
.link.demo {
  color: #38a169;
}
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.prev { left: 1rem; }
.next { right: 1rem; }
@media (max-width: 768px) {
  .carousel-item {
    min-width: 100%;
  }
}
</style>