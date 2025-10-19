<template>
    <div class="my-upload" :class="{ 'is-avatar': avatar }">
        <input ref="fileInput" type="file" :accept="accept" :multiple="multiple" @change="handleChange"
            style="display: none" />

        <div v-if="avatar" class="avatar-wrapper" @click="triggerUpload">
            <img v-if="previewUrl || src" :src="previewUrl || src" class="avatar" />
            <div v-else class="avatar-placeholder">
                <slot name="icon"></slot>
                <slot>点击上传</slot>
            </div>
        </div>

        <button v-else class="upload-btn" @click="triggerUpload">
            <slot name="icon"></slot>
            <slot>点击上传</slot>
        </button>

        <ul v-if="!avatar && showFileList && fileList.length">
            <li v-for="(f, i) in fileList" :key="i">
                {{ f.name }} <span v-if="f.progress !== undefined">- {{ f.progress }}%</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { UploadProps } from './type';
import '../style/upload.scss'

const props = withDefaults(defineProps<UploadProps>(), {
    accept: '',
    multiple: false,
    avatar: false,
    showFileList: true
})

/** emits（推荐） */
const emit = defineEmits<{
    (e: 'success', res: any, file: File): void
    (e: 'error', err: any, file: File): void
    (e: 'progress', percent: number, file: File): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const fileList = ref<{ name: string; progress?: number }[]>([])
const previewUrl = ref<string>('')

const triggerUpload = () => fileInput.value?.click()

const safeCall = (fn: unknown, ...args: any[]) => {
    // 防止父组件传错（例如传了 handle() 的返回值）
    if (typeof fn === 'function') {
        ; (fn as Function)(...args)
    }
}

const handleChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files
    if (!files || files.length === 0) return

    // 只取第一个（头像场景）；普通文件可支持 multiple
    const toUpload = props.avatar ? files[0] : null

    if (props.avatar) {
        const f = toUpload as File
        previewUrl.value = URL.createObjectURL(f)
        fileList.value = [{ name: f.name, progress: 0 }]
        uploadFile(f)
    } else {
        const arr = Array.from(files)
        arr.forEach((file) => {
            fileList.value.push({ name: file.name, progress: 0 })
            uploadFile(file)
        })
    }

    ; (e.target as HTMLInputElement).value = ''
}

const uploadFile = (file: File) => {
    const fd = new FormData()
    fd.append('file', file)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', props.action, true)

    if (props.headers) {
        Object.entries(props.headers).forEach(([k, v]) => xhr.setRequestHeader(k, v))
    }

    xhr.upload.onprogress = (ev) => {
        if (!ev.lengthComputable) return
        const percent = Math.round((ev.loaded / ev.total) * 100)
        const target = fileList.value.find((f) => f.name === file.name)
        if (target) target.progress = percent
        safeCall(props.onProgress, percent, file)
        emit('progress', percent, file)
    }

    xhr.onload = () => {
        let parsed: any = null
        try { parsed = JSON.parse(xhr.responseText || '{}') } catch (e) { parsed = xhr.responseText }
        if (xhr.status >= 200 && xhr.status < 300) {
            safeCall(props.onSuccess, parsed, file)
            emit('success', parsed, file)
        } else {
            safeCall(props.onError, parsed, file)
            emit('error', parsed, file)
        }
    }

    xhr.onerror = () => {
        safeCall(props.onError, xhr.responseText, file)
        emit('error', xhr.responseText, file)
    }

    xhr.send(fd)
}
</script>
