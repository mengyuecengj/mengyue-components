<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div class="input-test-container">
        <h1>MYInput 组件测试</h1>

        <div class="test-section">
            <h2>基础用法</h2>
            <MYInput v-model="basicValue" />
            <p>当前值: {{ basicValue }}</p>
        </div>

        <div class="test-section">
            <h2>禁用状态</h2>
            <MYInput v-model="disabledValue" disabled />
        </div>

        <div class="test-section">
            <h2>带清除按钮</h2>
            <MYInput v-model="clearableValue" clearable placeholder="输入内容可清除" />
            <p>当前值: {{ clearableValue }}</p>
        </div>

        <div class="test-section">
            <h2>密码输入框</h2>
            <MYInput v-model="passwordValue" tag="input" type="password" showPassword placeholder="输入密码" clearable :maxlength="10" word-limit
             form="password-form" width="400px" />
        </div>

        <div class="test-section">
            <h2>长度限制</h2>
            <MYInput v-model="limitedValue" :maxlength="10" word-limit placeholder="最多输入10个字符" />
        </div>

        <div class="test-section">
            <h2>自定义宽度高度</h2>
            <MYInput v-model="customSizeValue" width="600px" height="440px" placeholder="自定义尺寸" />
        </div> 

        <div class="test-section">
            <h2>文本域</h2>
            <MYInput v-model="textareaValue" tag="textarea" :height="100" placeholder="多行文本输入" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
import { ref } from 'vue'
const basicValue = ref('')
const disabledValue = ref('禁用状态的值')
const clearableValue = ref('')
const passwordValue = ref('')
const limitedValue = ref('')
const customSizeValue = ref('')
const textareaValue = ref('')
</script>

<style scoped lang="scss">
.input-test-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    text-align: center;
    margin-bottom: 30px;
}

.test-section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: #f9f9f9;
}

h2 {
    color: #444;
    margin-top: 0;
    margin-bottom: 15px;
}

p {
    margin-top: 10px;
    color: #666;
}

.custom-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    .custom-input {
        width: 100%;
        padding: 8px 35px 8px 15px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
    }

    .custom-icon {
        position: absolute;
        right: 10px;
        color: #999;
    }
}
</style>
