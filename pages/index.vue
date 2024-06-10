<template>
    <div>
        <h1>Landing page</h1>
        <div>
            <label :for="uniqueId">Name</label>
            <input type="text" :id="uniqueId">
        </div>
    </div>
</template>

<script setup>
const uniqueId = useId()
console.log(uniqueId)
</script>