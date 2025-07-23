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
        <MYButton type="success" @click="navigateTo('/test/container')">
            container components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/layout')">
            layout components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/input')">
            input components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/radio')">
            radio components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/checkbox')">
            checkbox components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/switch')">
            switch components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/rate')">
            rate components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/pickColor')">
            pickColor components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/selectDate')">
            selectDate components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/selectTime')">
            selectTime components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/select')">
            select components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/selectCascader')">
            selectCascader components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/slidebar')">
            slidebar components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/form')">
            form components
        </MYButton>
    </div>
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
    flex-wrap: wrap;
}
</style>
