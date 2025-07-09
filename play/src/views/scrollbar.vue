<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <MYScrollbar widthX ScrollWidth="12px" style="width: 300px;" disabledWidth>
        <div style="display: inline-block; width: 600px; padding: 20px; background: #eee;">
            这是一段测试横向滚动的内容，宽度超过容器
        </div>
    </MYScrollbar>
    <MYScrollbar widthX ScrollWidth="12px" corner>
        <MYText size="30rem">11111111111111111111111111111</MYText>
    </MYScrollbar>
    <MYScrollbar height="500px" thumbColor="#ff0000" thumbHoverColor="#2c2" trackColor="#797">
        <MYText size="30rem">111</MYText>
        <MYText size="30rem">111</MYText>
    </MYScrollbar>
    <MYScrollbar height="500px" Maxheight="800px" disabledScroll>
        <MYText size="30rem">222</MYText>
        <MYText size="30rem">222</MYText>
    </MYScrollbar>
    <MYScrollbar height="500px" Maxheight="800px">
        <MYText size="30rem">333</MYText>
        <MYText size="30rem">333</MYText>
    </MYScrollbar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
</script>
