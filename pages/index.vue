<template>
    <div>
        <h1>Landing page</h1>
        <button @click="isButtonVisible = !isButtonVisible">Toggle Component</button>
        <LazyAppFooter v-if="isButtonVisible" />
    </div>
</template>

<script setup>
let isButtonVisible = ref(false)
</script>