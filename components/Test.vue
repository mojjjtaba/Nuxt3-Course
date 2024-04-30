<template>
    <div>
        <h1>Test Component</h1>
    </div>
</template>

<script setup>
// import {ref, computed} from "#imports"
// const data = await $fetch("https://fakestoreapi.com/products")
// const {data} = await useFetch("https://fakestoreapi.com/products")

const count = ref(1)
const double = computed(() => count.value * 2)
console.log(count.value, double.value)
</script>