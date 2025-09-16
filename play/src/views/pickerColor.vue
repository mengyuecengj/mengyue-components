<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

    <div class="test-container">
        <h1>颜色选择器测试</h1>

        <div class="test-section">
            <h2>基础用法</h2>
            <MYSelect-color v-model="color1" />
            <p>当前颜色值: {{ color1 }}</p>
        </div>

        <div class="test-section">
            <h2>自定义大小</h2>
            <MYSelect-color v-model="color2" size="30px" />
            <MYSelect-color v-model="color2" size="50px" />
            <MYSelect-color v-model="color2" size="80px" />
            <p>当前颜色值: {{ color2 }}</p>
        </div>

        <div class="test-section">
            <h2>透明度控制</h2>
            <MYSelect-color v-model="color3" :rgba="opacity" />
            <div class="opacity-control">
                <span>透明度: </span>
                <input v-model="opacity" type="range" min="0" max="1" step="0.1">
                <span>{{ opacity }}</span>
            </div>
            <p>当前颜色值: {{ color3 }}</p>
        </div>

        <div class="test-section">
            <h2>无边框模式</h2>
            <MYSelect-color v-model="color4" no-border />
            <p>当前颜色值: {{ color4 }}</p>
        </div>

        <div class="test-section">
            <h2>圆形模式</h2>
            <MYSelect-color v-model="color5" circle />
            <p>当前颜色值: {{ color5 }}</p>
        </div>

        <div class="test-section">
            <h2>组合模式</h2>
            <MYSelect-color v-model="color6" size="60px" circle no-border rgba="0.3" />
            <p>当前颜色值: {{ color6 }}, 透明度0.3</p>
        </div>

        <div class="test-section">
            <h2>RGBA 颜色支持</h2>
            <MYSelect-color v-model="rgbaColor" />
            <p>当前颜色值: {{ rgbaColor }}</p>
            <button @click="setRgbaColor">设置为 rgba(255, 0, 0, 0.5)</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
};
// 测试数据
const color1 = ref('#3498db')
const color2 = ref('#e74c3c')
const color3 = ref('#2ecc71')
const color4 = ref('#f1c40f')
const color5 = ref('#9b59b6')
const color6 = ref('#1abc9c')
const rgbaColor = ref('rgba(100, 200, 50, 0.8)')
const opacity = ref(0.7)

// 设置RGBA颜色
const setRgbaColor = () => {
    rgbaColor.value = 'rgba(255, 0, 0, 0.5)'
}
</script>

<style scoped>
.test-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.test-section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
}

h1 {
    color: #333;
    text-align: center;
}

h2 {
    color: #555;
    margin-bottom: 15px;
}

.opacity-control {
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
</style>
