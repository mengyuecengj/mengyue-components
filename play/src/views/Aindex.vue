<template>
    <div class="test">
        <MYButton type="success" @click="navigateTo('/test/button')">
            button components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/border')">
            border components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/text')">
            text components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/a')">
            a components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/scroll')">
            scroll components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/scrollbar')">
            scrollbar components
        </MYButton>
    </div>
    <!-- <a href="https://cn.bing.com">测试</a> -->
    <!-- <MYa type="success" disabled size="30px" href="https://cn.bing.com" target="_blank">测试</MYa> -->
    <!-- 自定义所有颜色 -->
</template>
<script setup>
import { useRouter } from 'vue-router'
import { MYButton, MYText } from '../../../packages/components'

const router = useRouter()

const navigateTo = (path) => {
    router.push(path)
}
</script>
<style scoped lang="scss">
.test {
    display: flex;
    gap: 20px;
}
.a {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
