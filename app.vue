<template>
  <div>
    <NuxtLayout title="test" price="3000" ref="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const layout = ref()

// onMounted(() => layout.value.layoutRef.greeting())

useHead({
  // titleTemplate: '%s - My Nuxt App',
  titleTemplate: (title) => {
    return title ? `${title} - My Nuxt App` : 'My Nuxt App'
  }
})
</script>

<style lang="scss">
//@use "~/assets/scss/main.scss"
</style>
