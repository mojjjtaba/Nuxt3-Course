<template>
  <div class="pl-5">
    <h1 class="animate__animated animate__slideInLeft">Landing page</h1>
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
  bodyAttrs: {
    id: "BodyTag",
  },
  htmlAttrs: {
    dir: "ltr",
    lang: "en",
  },
  title: "My Nuxt App",
  meta: [
    { name: "author", content: "Mojtaba" },
    { name: "keywords", content: "Javascript, Vue.js, Nuxt.js" },
  ],
  
});
</script>
