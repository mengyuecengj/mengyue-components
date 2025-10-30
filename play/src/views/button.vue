<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <!-- Type variants -->
    <MYButton type="primary">Default</MYButton>
    <MYButton type="primary" icon="MYArrowRight">
        编辑按钮
    </MYButton>

    <MYButton type="primary" disabled>Primary</MYButton>
    <MYButton type="success">Success</MYButton>
    <MYButton type="warning">Warning</MYButton>
    <MYButton type="danger">Danger</MYButton>
    <MYButton type="info">Info</MYButton>

    <!-- Plain variants -->
    <MYButton plain>Plain</MYButton>
    <MYButton plain type="primary" icon="MYCheck">Plain Primary</MYButton>
    <MYButton plain type="success">Plain Success</MYButton>
    <MYButton plain type="warning">Plain Warning</MYButton>
    <MYButton plain type="danger">Plain Danger</MYButton>
    <MYButton plain type="info">Plain Info</MYButton>

    <!-- Size variants -->
    <MYButton type="success" size="supersmall">Super Small</MYButton>
    <MYButton type="success" size="small">Small</MYButton>
    <MYButton type="success" size="medium">Medium</MYButton>
    <MYButton type="success" size="large">Large</MYButton>
    <MYButton type="success" size="superbig">Super Big</MYButton>

    <!-- Shape variants -->
    <MYButton type="success" round>Rounded</MYButton>
    <MYButton type="success" circle>Circle</MYButton>

    <!-- State variants -->
    <MYButton type="success" disabled>Disabled</MYButton>

    <!-- Color customization -->
    <MYButton color-bg="#ffeb3b" color-text="#000" color-border="#ffc107">
        Custom Colors
    </MYButton>

    <!-- Tag customization -->
    <MYButton type="success" tag="a" href="#">Link Button</MYButton>
    <MYButton type="success" tag="div">Div Button</MYButton>

    <!-- Combination test -->
    <MYButton type="danger" size="large" round plain color-bg="#fff" color-text="#f44336" color-border="#f44336">
        Combined Props
    </MYButton>
    <MYButton type="danger" icon="MYCheck">check按钮</MYButton>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
</script>
