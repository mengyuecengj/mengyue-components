<template>
    <div>
        <h2>Drawer Component Test</h2>

        <!-- 基础测试 -->
        <MYButton type="success" @click="showBasic = true">打开基础抽屉</MYButton>
        <MYDrawer v-model="showBasic" title="基础抽屉">
            <p>这是基础抽屉的内容</p>
        </MYDrawer>

        <!-- 不同方向测试 -->
        <MYButton type="success" @click="showLeft = true">从左侧打开</MYButton>
        <MYDrawer v-model="showLeft" title="左侧抽屉" direction="ltr">
            <p>从左侧滑出的抽屉</p>
        </MYDrawer>

        <MYButton type="success" @click="showTop = true">从顶部打开</MYButton>
        <MYDrawer v-model="showTop" title="顶部抽屉" direction="ttb">
            <p>从顶部滑下的抽屉</p>
        </MYDrawer>

        <MYButton type="success" @click="showRight = true">从右侧打开</MYButton>
        <MYDrawer  size="60%" v-model="showRight" direction="rtl" title="Drawer Title" backgroundColor="red">
            qq111
        </MYDrawer>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showBasic = ref(false)
const showLeft = ref(false)
const showTop = ref(false)
const showFooter = ref(false)
const showRight = ref(false)

const handleConfirm = () => {
    console.log('Confirmed!')
    showFooter.value = false
}
</script>