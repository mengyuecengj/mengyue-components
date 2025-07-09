<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>
    <div class="test-container">
        <h2>A 组件测试页面 (硬编码版)</h2>

        <!-- 1. 类型测试 -->
        <div class="test-section">
            <h3>1. 类型测试 (type)</h3>
            <MYa type="primary">primary 类型</MYa>
            <MYa type="success">success 类型</MYa>
            <MYa type="warning">warning 类型</MYa>
            <MYa type="danger">danger 类型</MYa>
            <MYa type="info">info 类型</MYa>
            <MYa>默认类型</MYa>
        </div>

        <!-- 2. 尺寸测试 -->
        <div class="test-section">
            <h3>2. 尺寸测试 (size)</h3>
            <MYa size="large">large 尺寸</MYa>
            <MYa size="medium">medium 尺寸</MYa>
            <MYa size="small">small 尺寸</MYa>
            <MYa size="mini">mini 尺寸</MYa>
            <MYa size="24px">自定义尺寸 (24px)</MYa>
            <MYa size="1.2rem">自定义尺寸 (1.2rem)</MYa>
            <MYa :size=30>:size尺寸30</MYa>
            <MYa>默认尺寸</MYa>
        </div>

        <!-- 3. 颜色测试 -->
        <div class="test-section">
            <h3>3. 颜色测试 (color)</h3>
            <MYa color="#ff0000">红色</MYa>
            <MYa color="#00ff00">绿色</MYa>
            <MYa color="#0000ff">蓝色</MYa>
            <MYa color="purple">紫色</MYa>
            <MYa>默认颜色</MYa>
        </div>

        <!-- 4. 禁用状态 -->
        <div class="test-section">
            <h3>4. 禁用状态 (disabled)</h3>
            <MYa disabled>禁用链接</MYa>
            <MYa>正常链接</MYa>
        </div>

        <!-- 5. 下划线控制 -->
        <div class="test-section">
            <h3>5. 下划线控制 (underline)</h3>
            <MYa>有下划线</MYa>
            <MYa underline>无下划线</MYa>
        </div>

        <!-- 7. 组合测试 -->
        <div class="test-section">
            <h3>7. 组合测试</h3>
            <MYa type="primary" size="large" color="#ff0000" class="b">
                组合1: primary + large + 红色 + 下划线
            </MYa>
            <MYa type="danger" size="small" disabled>
                组合2: danger + small + 禁用
            </MYa>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: any) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.a {
    display: block;
}

// .b {
    // text-decoration-color: #ff0000;
// }
</style>