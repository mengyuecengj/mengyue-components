<template>
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

    <div class="layout-demo">
        <h2>MYRow & MYCol 组件测试</h2>

        <!-- 1. 基础布局 -->
        <div class="demo-section">
            <h3>1. 基础网格布局</h3>
            <MYRow>
                <MYCol :span="6">
                    <div class="demo-box">span=6</div>
                </MYCol>
                <MYCol :span="12">
                    <div class="demo-box">span=12</div>
                </MYCol>
                <MYCol :span="6">
                    <div class="demo-box">span=6</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 2. 带 gutter 的布局 -->
        <div class="demo-section">
            <h3>2. 带间距的布局 (gutter=16)</h3>
            <MYRow :gutter="16">
                <MYCol :span="8">
                    <div class="demo-box">左侧</div>
                </MYCol>
                <MYCol :span="8">
                    <div class="demo-box">中间</div>
                </MYCol>
                <MYCol :span="8">
                    <div class="demo-box">右侧</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 3. 两端对齐 -->
        <div class="demo-section">
            <h3>3. 两端对齐布局 (between)</h3>
            <MYRow between>
                <MYCol :span="6">
                    <div class="demo-box">左侧</div>
                </MYCol>
                <MYCol :span="6">
                    <div class="demo-box">右侧</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 4. 垂直排列 -->
        <div class="demo-section">
            <h3>4. 垂直排列 (aligns)</h3>
            <MYRow aligns>
                <MYCol :span="24">
                    <div class="demo-box">顶部</div>
                </MYCol>
                <MYCol :span="24">
                    <div class="demo-box">中部</div>
                </MYCol>
                <MYCol :span="24">
                    <div class="demo-box">底部</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 5. 垂直居中排列 -->
        <div class="demo-section">
            <h3>5. 垂直居中排列 (alignCenter)</h3>
            <MYRow alignCenter>
                <MYCol :span="24">
                    <div class="demo-box">顶部</div>
                </MYCol>
                <MYCol :span="24">
                    <div class="demo-box">中部</div>
                </MYCol>
                <MYCol :span="24">
                    <div class="demo-box">底部</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 6. 方向反转 -->
        <div class="demo-section">
            <h3>6. 方向反转 (direction)</h3>
            <MYRow direction>
                <MYCol :span="8">
                    <div class="demo-box">1 (视觉在右)</div>
                </MYCol>
                <MYCol :span="8">
                    <div class="demo-box">2</div>
                </MYCol>
                <MYCol :span="8">
                    <div class="demo-box">3 (视觉在左)</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 7. 偏移量演示 -->
        <div class="demo-section">
            <h3>7. 偏移量演示</h3>
            <MYRow>
                <MYCol :span="6" :offsetLeft="6">
                    <div class="demo-box">offsetLeft=6</div>
                </MYCol>
                <MYCol :span="6" :offsetRight="6">
                    <div class="demo-box">offsetRight=6</div>
                </MYCol>
            </MYRow>
        </div>

        <!-- 8. 自定义标签 -->
        <div class="demo-section">
            <h3>8. 自定义标签 (tag="section")</h3>
            <MYRow tag="section">
                <MYCol tag="article" :span="12">
                    <div class="demo-box">article标签</div>
                </MYCol>
                <MYCol tag="aside" :span="12">
                    <div class="demo-box">aside标签</div>
                </MYCol>
            </MYRow>
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

<style scoped>
.layout-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.demo-section {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px dashed #eee;
    border-radius: 4px;
}

.demo-box {
    padding: 12px 0;
    text-align: center;
    background: #f0f9ff;
    border: 1px solid #d1e9ff;
    border-radius: 4px;
    margin-bottom: 10px;
}

h2 {
    margin-bottom: 30px;
    color: #333;
}

h3 {
    margin-bottom: 15px;
    color: #666;
}
</style>
