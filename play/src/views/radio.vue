<template>
    <div class="radio-demo">
        <h3>单独使用 MYRadio (需要 v-model)</h3>
        <div class="demo-group">
            <MYRadio v-model="singleSelected" value="1">选项1</MYRadio>
            <MYRadio v-model="singleSelected" value="2">选项2</MYRadio>
            <div>当前选中: {{ singleSelected }}</div>
        </div>

        <h3>使用 MYRadio-group</h3>
        <div class="demo-group">
            <MYRadio-group v-model="groupSelected">
                <MYRadio value="1">选项1</MYRadio>
                <MYRadio value="2">选项2</MYRadio>
                <MYRadio value="3">选项3</MYRadio>
            </MYRadio-group>
            <div>当前选中: {{ groupSelected }}</div>
        </div>

        <h3>禁用状态</h3>
        <div class="demo-group">
            <MYRadio-group v-model="disabledSelected">
                <MYRadio value="1">禁用选项1</MYRadio>
                <MYRadio value="2" disabled>禁用选项2</MYRadio>
            </MYRadio-group>
        </div>

        <h3>全部禁用</h3>
        <div class="demo-group">
            <MYRadio-group v-model="disabledSelected" disabled>
                <MYRadio value="1">禁用选项1</MYRadio>
                <MYRadio value="2">禁用选项2</MYRadio>
            </MYRadio-group>
        </div>

        <h3>垂直排列</h3>
        <div class="demo-group">
            <MYRadio-group v-model="verticalSelected" direction="vertical">
                <MYRadio value="1">垂直选项1</MYRadio>
                <MYRadio value="2">垂直选项2</MYRadio>
            </MYRadio-group>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 测试数据
const singleSelected = ref('1') // 默认选中第一个
const groupSelected = ref('2')  // 默认选中第二个
const disabledSelected = ref('1')
const verticalSelected = ref('1')
</script>

<style scoped>
.radio-demo {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
}

.demo-group {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 4px;
}

h3 {
    color: #333;
    margin-bottom: 10px;
}
</style>
