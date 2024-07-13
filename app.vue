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
</script>
