<template>
    <div>
        <Header />
        <slot />
        <!-- <pre>{{$attrs.price}}</pre> -->
         {{ attrs.title }}
    </div>
</template>

<script setup>
const attrs = useAttrs()

const greeting = () => console.log("Hello")
defineExpose({
    greeting
})
</script>