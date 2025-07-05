<template>
    <div class="test">
        <MYButton type="success" @click="navigateTo('/test/button')">
            button components
        </MYButton>
        <MYButton type="danger" @click="navigateTo('/test/border')">
            border components
        </MYButton>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
    router.push(path)
}
</script>
<style scoped>
.test {
    display: flex;
    gap: 20px;
}
</style>