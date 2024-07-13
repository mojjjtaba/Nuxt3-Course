<template>
    <div>
        <AdminHeader />
        <slot />
        <pre>{{$attrs.price}}</pre>
    </div>
</template>