<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="example-pagination-block">
    <div class="example-demonstration">Basic Pagination</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize" layout="prev, pager, next" :total="50"
      @change="handleChange" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">With Background and Sizes</div>
    <MYPagination v-model:current-page="currentPage" v-model:page-size="pageSize"
      layout="sizes, prev, pager, next, jumper, total" :total="1000" :page-sizes="[10, 20, 50, 100]" background
      @change="handleChange" prneColor="#fff000" prneTextColor="#ff0000" itemColor="#2c2" itemTextColor="#fff"
      activeItemColor="#f00" activeItemTextColor="#000" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
const currentPage = ref(1);
const pageSize = ref(10);

const handleChange = (page: string, size: string) => {
  console.log(`Current page: ${page}, Page size: ${size}`);
};
</script>

<style scoped>
.example-pagination-block+.example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>