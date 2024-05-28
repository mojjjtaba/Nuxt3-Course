<template>
    <div>
        <h1>Landing page</h1>
        <button @click="goTo">Go To</button>
    </div>
</template>

<script setup>
const router = useRouter()
console.log(router)
async function goTo() {
//    console.log(router.currentRoute.value)
    // router.back()
    // console.log(router.getRoutes())
    console.log(router.hasRoute('portfolio'))
}
</script>