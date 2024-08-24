<template>
    <div>
        <h1>About page</h1>
        <!-- <button @click="changeLayout">Change Layout</button> -->
        <Single />
    </div>
</template>

<script setup>
function changeLayout() {
    setPageLayout('admin')
}
</script>