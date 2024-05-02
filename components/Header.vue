<template>
    <header>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
</template>

<style lang="scss">
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