<template>
  <div class="particles-container">
    <div 
      v-for="(particle, index) in particles" 
      :key="index"
      class="particle"
      :style="particle.style"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const particles = ref([])

onMounted(() => {
  // 创建粒子
  particles.value = Array.from({ length: 50 }, (_, i) => ({
    style: {
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
      opacity: Math.random() * 0.5 + 0.2,
      width: `${1 + Math.random() * 2}px`,
      height: `${1 + Math.random() * 2}px`
    }
  }))
})
</script>
