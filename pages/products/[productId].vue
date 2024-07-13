<template>
    <div>
        <h1>Dynamic route</h1>
        <h2>Params -> {{$route.params.productId}}</h2>
    </div>
</template>

<script setup>
// const route = useRoute()
// console.log(route)

definePageMeta({
    validate: (route) => {
        const productId = route.params.productId;
        // console.log(typeof productId)
        // if(typeof productId === 'string' && /^\d+$/.test(productId)) {
        //     return true
        // } else {
        //     return false
        // }
    
        return typeof productId === 'string' && /^\d+$/.test(productId)
    },
    middleware: [
        function(to, from) {
            console.log("Anonymous Route Middleware")
        },
        'product'
    ]
})
</script>