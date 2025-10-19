<template>
    <MYUpload action="/api/upload/avatar" :src="avatarUrl" @success="handleAvatarSuccess">
        <template #icon>
            <MYEdit size="18px" style="transform: translateY(-2px);"></MYEdit>
        </template>
    </MYUpload>

    <MYUpload action="/api/upload/avatar" avatar :src="avatarUrl" @success="handleAvatarSuccess">
        <template #icon>
            <MYEdit size="18px" style="transform: translateY(-2px);"></MYEdit>
        </template>
    </MYUpload>

    <!--  -->
    <MYButton type="primary" @click="triggerUpload">上传头像</MYButton>

    <!-- 隐藏的文件输入框 -->
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const avatarUrl = ref('...')
const fileInput = ref<HTMLInputElement | null>(null)

function handleAvatarSuccess(res: any) {
    avatarUrl.value = res.data?.url || avatarUrl.value
}

// 触发文件选择
function triggerUpload() {
    fileInput.value?.click()
}

// 处理文件选择后的逻辑
function handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
        // 将文件传递给MYUpload组件处理
        // 或者在这里实现上传逻辑
        console.log('选择了文件:', file.name)
    }
}
</script>