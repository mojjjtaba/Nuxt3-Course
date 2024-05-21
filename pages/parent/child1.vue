<template>
    <div style="background: skyblue;">
        <h2>Child 1</h2>
    </div>
</template>

<script setup>
const props = defineProps(['message'])

console.log(props.message)
</script>