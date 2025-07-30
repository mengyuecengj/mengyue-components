<template>
    <!-- 返回按钮 -->
    <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

    <!-- 分隔线 -->
    <div style="margin-top: 10px; border: 5px solid #000;"></div>
    <div style="margin-top: 10px;"></div>

    <!-- 1. 基础边框测试 -->
    <div class="test-section">基础边框测试</div>
    <MYBorder borderStyle="solid" />
    <MYBorder borderStyle="dashed" />
    <MYBorder borderStyle="dotted" />
    <MYBorder borderStyle="double" />
    <MYBorder borderStyle="double" borderWidth="40px" />
    <MYBorder borderStyle="double" borderWidth="10px" borderColor="red" />

    <!-- 2. 边框反向测试 -->
    <div class="test-section">边框反向测试</div>
    <MYBorder Border="10px solid #000">所有边框为1px黑色实线</MYBorder>
    <MYBorder topColor="#f00" borderWidth="2px">上边框为红色</MYBorder>
    <MYBorder bottomColor="#0f0" borderWidth="2px">下边框为绿色</MYBorder>
    <MYBorder leftColor="#00f" borderWidth="2px">左边框为蓝色</MYBorder>
    <MYBorder rightColor="#ff0" borderWidth="2px">右边框为黄色</MYBorder>
    <MYBorder topColor="#f00" rightColor="#0f0" bottomColor="#00f" leftColor="#ff0" borderWidth="2px">
        四边不同颜色的边框
    </MYBorder>

    <!-- 3. 其他属性测试 -->
    <div class="test-section">其他属性测试</div>
    <MYBorder width="200px" height="100px">固定尺寸的边框</MYBorder>
    <MYBorder round width="100px" height="50px">圆角矩形</MYBorder>
    <MYBorder circle width="100px" height="100px">圆形边框</MYBorder>
    <MYBorder paddingText="20px">文字内边距20px</MYBorder>
    <MYBorder center>居中内容</MYBorder>
    <MYBorder colorBg="pink">粉色背景</MYBorder>
    <MYBorder textColor="#f00">红色文字</MYBorder>
    <MYBorder boxShadow="10px 2px 8px red">带阴影的边框</MYBorder>
    <MYBorder width="200px" height="100px" round center colorBg="pink" textColor="red" borderColor="pink"
        boxShadow="0 2px 8px red" paddingText="20px">
        组合所有属性的边框
    </MYBorder>
    <MYBorder Border="20px dashed #000">
        带有边框属性的边框
    </MYBorder>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
    router.push(path);
};
</script>

<style lang="scss" scoped>
.test-section {
    margin: 20px 0 10px;
    font-weight: bold;
    color: #333;
}
</style>