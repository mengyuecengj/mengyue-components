<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <div class="a">
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
        <MYText size="30rem">1</MYText>
    </div>
    <MYScroll width="20px" thumbColor="#ff0000" thumbHoverColor="#000" trackColor="#2c2"></MYScroll>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
</script>
<style scoped>
.a {
    margin-top: 100px;
}
</style>