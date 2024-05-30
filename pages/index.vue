<template>
    <div>
        <h1>Landing page</h1>
        <button @click="isButtonVisible = !isButtonVisible">Toggle Component</button>
        <component :is="isButtonVisible ? mainButton : AppFooter" />
        <MainInput />
    </div>
</template>

<script setup>
import { AppFooter } from '#components';
const mainButton = resolveComponent('BaseMainButton')
let isButtonVisible = ref(true)
</script>