<template>
  <div>
    <NuxtLayout title="test" price="3000" ref="layout">
      <NuxtPage :transition="{
        name: 'scale',
        mode: 'out-in'
      }" />
      <div class="text-2xl mt-2 text-center">
        <NuxtLink :to="prev">⬅️</NuxtLink>
        <NuxtLink :to="next">➡️</NuxtLink>
      </div>
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

const route = useRoute()
const id = computed(() => parseInt(route.params.productId))
const prev = computed(() => `/products/${id.value - 1}`)
const next = computed(() => `/products/${id.value + 1}`)
</script>

<style lang="scss">

</style>
