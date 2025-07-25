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
        <MYButton type="success" @click="navigateTo('/test/badge')">
            badge components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/collapse')">
            collapse components
        </MYButton>
         <MYButton type="success" @click="navigateTo('/test/progress')">
            progress components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/result')">
            result components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/skeleton')">
            skeleton components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/pagination')">
            pagination components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/table')">
            table components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/timeline')">
            timeline components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/tree')">
            tree components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/backtop')">
            backtop components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/breadcrumb')">
            breadcrumb components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/dropdown')">
            dropdown components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/menu')">
            menu components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/step')">
            step components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/carousel')">
            carousel components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/transfer')">
            transfer components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/alert')">
            alert components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/loading')">
            loading components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/message')">
            message components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/messagebox')">
            messagebox components
        </MYButton>
        <MYButton type="success" @click="navigateTo('/test/notification')">
            notification components
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
