<template>
    <div class="button-test-container">
        <!-- 返回按钮 -->
        <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

        <!-- 类型变体 -->
        <h3 class="section-title">类型变体</h3>
        <div class="button-group">
            <MYButton type="primary">Default</MYButton>
            <MYButton type="primary" icon="MYArrowRight">编辑按钮</MYButton>
            <MYButton type="primary" disabled>Primary</MYButton>
            <MYButton type="success">Success</MYButton>
            <MYButton type="warning">Warning</MYButton>
            <MYButton type="danger">Danger</MYButton>
            <MYButton type="info">Info</MYButton>
        </div>

        <!-- 朴素变体 -->
        <h3 class="section-title">朴素变体</h3>
        <div class="button-group">
            <MYButton plain>Plain</MYButton>
            <MYButton plain type="primary" icon="MYCheck">Plain Primary</MYButton>
            <MYButton plain type="success">Plain Success</MYButton>
            <MYButton plain type="warning">Plain Warning</MYButton>
            <MYButton plain type="danger">Plain Danger</MYButton>
            <MYButton plain type="info">Plain Info</MYButton>
        </div>

        <!-- 尺寸变体 -->
        <h3 class="section-title">尺寸变体</h3>
        <div class="button-group">
            <MYButton type="success" size="supersmall">Super Small</MYButton>
            <MYButton type="success" size="small">Small</MYButton>
            <MYButton type="success" size="medium">Medium</MYButton>
            <MYButton type="success" size="large">Large</MYButton>
            <MYButton type="success" size="superbig">Super Big</MYButton>
        </div>

        <!-- 形状变体 -->
        <h3 class="section-title">形状变体</h3>
        <div class="button-group">
            <MYButton type="success" round>Rounded</MYButton>
            <MYButton type="success" circle>Circle</MYButton>
        </div>

        <!-- 状态变体 -->
        <h3 class="section-title">状态变体</h3>
        <div class="button-group">
            <MYButton type="success" disabled>Disabled</MYButton>
        </div>

        <!-- 自定义颜色 -->
        <h3 class="section-title">自定义颜色</h3>
        <div class="button-group">
            <MYButton color-bg="#ffeb3b" color-text="#000" color-border="#ffc107">Custom Colors</MYButton>
        </div>

        <!-- 自定义标签 -->
        <h3 class="section-title">自定义标签</h3>
        <div class="button-group">
            <MYButton type="success" tag="a" href="#">Link Button</MYButton>
            <MYButton type="success" tag="div">Div Button</MYButton>
        </div>

        <!-- 组合属性 -->
        <h3 class="section-title">组合属性</h3>
        <div class="button-group">
            <MYButton
                type="danger"
                size="large"
                round
                plain
                color-bg="#fff"
                color-text="#f44336"
                color-border="#f44336"
            >
                Combined Props
            </MYButton>
            <MYButton type="danger" icon="MYCheck">check按钮</MYButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
</script>

<style scoped>
.button-test-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.section-title {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.button-group .MYButton {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>