<template>
    <MYButton type="info" @click="navigateTo('/')" style="margin-top: 20px">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <div>
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

const navigateTo = (path: any) => {
    router.push(path)
}
</script>



<style lang="scss" scoped></style>