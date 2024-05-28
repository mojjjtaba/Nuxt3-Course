<template>
    <div>
        <h1>About page</h1>
        <button @click="goTo">Go To</button>
    </div>
</template>

<script setup>
console.log(window.history)
async function goTo() {
    await navigateTo('/', {
        replace: true
    })
}
</script>