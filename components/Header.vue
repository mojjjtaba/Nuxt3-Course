<template>
    <header>
        <ul>
            <li><NuxtLink href="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about" activeClass="custom-active" prefetched-class="prefetched">About</NuxtLink></li>
            <li><NuxtLink :to="{name: 'products-productId', params: {productId: 78}}">Product detail</NuxtLink></li>
            <li><nuxt-link to="/favicon.ico" external>Download</nuxt-link></li>
            <li><nuxt-link to="https://nuxt.com" target="_blank" rel="noopener">Nuxt website</nuxt-link></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
</template>

<script setup>
// Static import
// import '~/assets/css/main.css'

// Dynamic import
// import('~/assets/css/main.css')
</script>

<style lang="scss" scoped>
//@import url('~/assets/css/main.css');

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    background: #070722;
    padding: 12px;
    box-sizing: border-box;

    li {
        font-size: 20px;
        margin-right: 16px;

        a {
            text-decoration: none;
            color: #fff;
            transition: all 0.3s;

            &:hover {
                color: #a9b1ffbd;
            }
        }
    }
}
</style>