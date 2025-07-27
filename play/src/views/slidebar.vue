<template>
    <MYButton type="info" style="margin-top: 20px" @click="navigateTo('/')">返回/首页</MYButton>

    <div>
        <MYSlidebar ref="slider" :size="size" :thumbColor="thumbColor" :trackColor="trackColor" :disabled="disabled"
            :noNum="noNum" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}
const size = ref('400px')
const thumbColor = ref('#ff0000')
const trackColor = ref('#2c2')
const disabled = ref(false)
const noNum = ref(false)
</script>
