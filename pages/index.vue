<template>
    <div>
        <h1>Landing page</h1>
        <ClientOnly>
            <Comments2 />
            <template #fallback>
                <article>
                    <h1>Loading...</h1>
                </article>
            </template>
        </ClientOnly>
    </div>
</template>

<script setup>

</script>