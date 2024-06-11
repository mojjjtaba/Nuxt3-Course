<template>
    <header>
        <ul>
            <li><NuxtLink to="/">Dashboard</NuxtLink></li>
            <li><NuxtLink to="/">Invoices</NuxtLink></li>
            <li><NuxtLink to="/">Tickets</NuxtLink></li>
            <li><NuxtLink to="/">Users</NuxtLink></li>
            <li><NuxtLink to="/">Settings</NuxtLink></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
ul {
    display: inline-flex;
    flex-direction: column;
    //position: fixed;
    float: left;
    top: 0;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    background: #0e0ea6;
    padding: 18px;
    box-sizing: border-box;
    width: 230px;
    height: 100vh;
    margin-right: 16px;


    li {
        font-size: 20px;
        margin-right: 16px;
        margin-bottom: 16px;

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