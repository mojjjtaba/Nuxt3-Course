<template>
  <div>
    <!-- <NuxtLayout name="admin"> -->
    <h1 class="animate__animated animate__slideInLeft">Landing page</h1>
    <!-- <img src="/favicon.ico" alt=""> -->
    <!-- <img src="~/assets/nuxt.png" alt=""> -->
    <!-- </NuxtLayout> -->
  </div>
</template>

<script setup>
// definePageMeta({
//     layout: false
// })

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
});
</script>
