<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <!-- 基础边框测试 -->
    <MYBorder borderColor="#f00" borderWidth="2px" class="test-item">
        红色边框宽度2px
    </MYBorder>

    <MYBorder borderStyle="dashed" class="test-item">
        虚线边框
    </MYBorder>

    <!-- 单边边框测试 -->
    <MYBorder topColor="#f00" borderWidth="3px" class="test-item">
        只有上边框红色
    </MYBorder>

    <MYBorder topColor="#f00" rightColor="#0f0" bottomColor="#00f" leftColor="#ff0" borderWidth="2px" class="test-item">
        四边不同颜色
    </MYBorder>

    <!-- 形状测试 -->
    <MYBorder round width="100px" height="100px" class="test-item" paddingText="20px">
        圆角矩形
    </MYBorder>

    <MYBorder circle width="100px" height="100px" class="test-item">
        圆形
    </MYBorder>

    <!-- 组合测试 -->
    <MYBorder round center width="200px" height="100px" borderColor="#333" borderWidth="2px" colorBg="#f8f8f8"
        paddingText="20px" boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)" class="test-item">
        组合所有属性
    </MYBorder>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.a {
    display: block;
}
</style>