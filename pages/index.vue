<template>
    <div>
        <h1>Landing page</h1>
        <button @click="increment">Increment</button>
        <h2>{{count}}</h2>
    </div>
</template>

<script setup>
const {message} = useBye()

function hi() {

}
const {count, increment} = useCounter()

console.log(useOther())
</script>