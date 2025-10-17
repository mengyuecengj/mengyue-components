<template>
    <div class="my-card" :style="cardStyle">
        <div class="my-card__header">
            <slot name="header"></slot>
        </div>
        <div class="my-card__body">
            <slot name="body"></slot>
        </div>
        <div class="my-card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { cardProps } from './card'
import { useStyleComputed } from '../../../hooks/useStyleComputed'
import '../style/card.scss'

defineOptions({
    name: 'MYCard'
})

const props = defineProps(cardProps)
const emit = defineEmits(['close'])

const cardStyle = useStyleComputed(props, {
    propToStyleMap: {
        backgroundColor: 'backgroundColor',
        width: 'width',
        height: 'height'
    }
})
</script>
