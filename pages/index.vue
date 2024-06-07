<template>
    <div>
        <h1>Landing page</h1>
        <DevOnly>
            <h1>Development code</h1>

            <template #fallback>
                <h1>
                    Placeholder
                </h1>
            </template>
        </DevOnly>
    </div>
</template>

<script setup>

</script>