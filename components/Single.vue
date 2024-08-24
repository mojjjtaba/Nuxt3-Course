<template>
   <h1
     :class="{active: isActive, 'text-danger': hasError}"
   >Single Component title</h1>
   <h2 :style="{color: color, fontSize: size + 'px'}">
    H2 Title
   </h2>
   <h3 :class="$style['text-orange']">
    H3 Title
   </h3>
   <button @click="colorBlue = 'purple'">Change color</button>
</template>

<script setup>
const isActive = ref(false)
const hasError = ref(true)
const color = ref('red')
const size = ref(60)

const colorBlue = ref('blue')
</script>

<style module>
.text-blue {
    color: v-bind(colorBlue);
}

.text-orange {
    color: orange;
}
</style>