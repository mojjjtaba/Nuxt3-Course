<template>
    <div>
        <h1>Landing page</h1>
        <button @click="goTo">Go To</button>
    </div>
</template>

<script setup>
async function goTo() {
    // await navigateTo('/about')
    // await navigateTo('/about', {
    //     redirectCode: 307
    // })
    // await navigateTo({path: '/about'})
    // await navigateTo({
    //     name: "about",
    //     query: {
    //         color: "red"
    //     }
    // })
    // await navigateTo('https://nuxt.com', {external: true})
    // await navigateTo('https://nuxt.com', {
    //     open: {
    //         target: "_blank",
    //         windowFeatures: {
    //             width: 600,
    //             height: 600,
    //             popup: true
    //         }
    //     }
    // })

    await navigateTo('/about', {
        replace: true
    })
}

console.log(window.history)
</script>