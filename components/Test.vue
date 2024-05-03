<template>
    <div class="container">
        <h1>Test Component. count is {{count}}</h1>
        <button @click="increment">Increment</button>
    </div>
</template>

<script lang="ts" setup>
const count: Ref<number> = ref(1)
const increment = () => count.value++
</script>

<!-- <script>
export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    }
}
</script> -->

<style>
.container {
    text-align: center;
}

h1 {
    font-family: Verdana, sans-serif;
    color: red;
}
</style>