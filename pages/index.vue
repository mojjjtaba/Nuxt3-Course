<template>
    <div>
        <h1>Landing page</h1>
        {{ url.port }}
    </div>
</template>

<script setup>
const url = useRequestURL()
console.log(window?.location)
</script>