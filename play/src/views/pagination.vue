<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="example-pagination-block">
    <div class="example-demonstration">Basic Pagination</div>
    <MYPagination layout="prev, pager, next" :total="50" v-model:current-page="currentPage" v-model:page-size="pageSize"
      @change="handleChange" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">With Background and Sizes</div>
    <MYPagination layout="sizes, prev, pager, next, jumper, total" :total="1000" :page-sizes="[10, 20, 50, 100]"
      background v-model:current-page="currentPage" v-model:page-size="pageSize" @change="handleChange" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">Small Pagination, Hide on Single Page</div>
    <MYPagination layout="prev, pager, next" :total="10" small hide-on-single-page v-model:current-page="currentPage"
      v-model:page-size="pageSize" />
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

const handleChange = (page: any, size: any) => {
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