<template>
    <div class="my-inputNumber">
        <MYButton type="info" @click="count--">-</MYButton>
        <MYInput type="text" class="my-inputNumber__input" width="50px" v-model="count">{{ count }}</MYInput>
        <MYButton type="info" @click="count++">+</MYButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '../style/inputNumber.scss'

defineOptions({
    name: 'MYInputNumber'
})

const count = ref(0)
</script>
