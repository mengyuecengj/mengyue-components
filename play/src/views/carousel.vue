<template>
  <MYCarousel height="150px" trigger="click">
    <MYCarousel-item v-for="n in 4" :key="n" :index="n - 1">
      <div class="carousel-content">{{ n }}</div>
    </MYCarousel-item>
  </MYCarousel>
</template>

<style scoped>
.carousel-content {
  height: 150px;
  background-color: #99a9bf;
  color: white;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
