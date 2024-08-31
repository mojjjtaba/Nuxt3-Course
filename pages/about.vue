<template>
    <div class="pl-5">
        <h1>About page</h1>
    </div>
</template>

<script setup>
function changeLayout() {
    setPageLayout('admin')
}

useHead({
    title: "About"
})

definePageMeta({
    pageTransition: {
        name: "scale"
    }
})
</script>