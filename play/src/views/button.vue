<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <!-- Type variants -->
    <MYButton>Default</MYButton>
    <MYButton type="primary">Primary</MYButton>
    <MYButton type="success">Success</MYButton>
    <MYButton type="warning">Warning</MYButton>
    <MYButton type="danger">Danger</MYButton>
    <MYButton type="info">Info</MYButton>

    <!-- Size variants -->
    <MYButton size="supersmall">Super Small</MYButton>
    <MYButton size="small">Small</MYButton>
    <MYButton size="medium">Medium</MYButton>
    <MYButton size="large">Large</MYButton>
    <MYButton size="superbig">Super Big</MYButton>

    <!-- Shape variants -->
    <MYButton round>Rounded</MYButton>
    <MYButton circle>Circle</MYButton>

    <!-- State variants -->
    <MYButton disabled>Disabled</MYButton>
    <MYButton plain>Plain</MYButton>

    <!-- Color customization -->
    <MYButton color-bg="#ffeb3b" color-text="#000" color-border="#ffc107">
        Custom Colors
    </MYButton>

    <!-- Tag customization -->
    <MYButton tag="a" href="#">Link Button</MYButton>
    <MYButton tag="div">Div Button</MYButton>

    <!-- Combination test -->
    <MYButton type="danger" size="large" round plain color-bg="#fff" color-text="#f44336" color-border="#f44336">
        Combined Props
    </MYButton>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
</style>