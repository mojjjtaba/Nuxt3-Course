<template>
  <div>
    <div class="pl-5">
      <h1 class="animate__animated animate__slideInLeft">Landing page</h1>
    </div>
    <Head>
      <Title>{{title}}</Title>
      <Meta name="description" :content="`${title} ++`" />
      <Style type="text/css" children="body {background: green !important;}"></Style>
      
    </Head>
  </div>
</template>

<script setup>
const title = "Landing"

definePageMeta({
  // layoutTransition: {
  //       name: "rotate", mode: "out-in"
  //   }
  pageTransition: {
    name: "page",
    mode: "out-in"
  }
})
</script>
