<template>
    <div>
        <h1>Dynamic route</h1>
        <h2>Params -> {{$route.params.productId}}</h2>
    </div>
</template>

<script setup>
const route = useRoute()
console.log(route)

definePageMeta({
    description: "This is a description"
})
</script>