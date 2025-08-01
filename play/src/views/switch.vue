<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

    <div class="switch-demo-container">
        <h1>Switch 组件测试</h1>

        <div class="demo-section">
            <h2>基础用法</h2>
            <div class="demo-row">
                <MYSwitch v-model="value1" />
                <span class="demo-label">当前状态: {{ value1 }}</span>
            </div>
        </div>

        <div class="demo-section">
            <h2>带文本的Switch</h2>
            <div class="demo-row">
                <MYSwitch v-model="value2" text="T" />
                <span class="demo-label">当前状态: {{ value2 }}</span>
            </div>
        </div>

        <div class="demo-section">
            <h2>不同尺寸</h2>
            <div class="demo-row">
                <MYSwitch v-model="value1" size="mini" text="S" />
                <span class="demo-label">mini 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value2" size="supersmall" text="S" />
                <span class="demo-label">supersmall 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value3" size="small" text="M" />
                <span class="demo-label">small 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value4" size="medium" text="L" />
                <span class="demo-label">medium 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value5" size="large" text="XL" />
                <span class="demo-label">large 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value6" size="biglarge" text="XL" />
                <span class="demo-label">biglarge 尺寸</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value7" size="superlarge" text="XL" />
                <span class="demo-label">superlarge 尺寸</span>
            </div>
        </div>

        <div class="demo-section">
            <h2>禁用状态</h2>
            <div class="demo-row">
                <MYSwitch v-model="value8" disabled />
                <span class="demo-label">禁用状态</span>
            </div>
            <div class="demo-row">
                <MYSwitch v-model="value9" disabled text="D" />
                <span class="demo-label">禁用带文本</span>
            </div>
        </div>

        <div class="demo-section">
            <h2>自定义内容</h2>
            <div class="demo-row">
                <MYSwitch v-model="value10">
                    <template #default>自定义内容</template>
                </MYSwitch>
                <span class="demo-label">使用插槽内容</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: string) => {
    router.push(path)
}
// 基础用法
const value1 = ref(true)
const value2 = ref(true)

// 不同尺寸
const value3 = ref(false)
const value4 = ref(true)
const value5 = ref(false)
const value6 = ref(true)

// 禁用状态
const value7 = ref(false)
const value8 = ref(true)

// 自定义内容
const value9 = ref(false)
const value10 = ref(true)
</script>

<style scoped>
.switch-demo-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.demo-section {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
}

.demo-row {
    display: flex;
    align-items: center;
    margin: 10px 0;
    gap: 15px;
}

.demo-label {
    font-size: 14px;
    color: #666;
}

h1 {
    color: #333;
    margin-bottom: 30px;
}

h2 {
    color: #444;
    margin-bottom: 15px;
    font-size: 18px;
}
</style>
