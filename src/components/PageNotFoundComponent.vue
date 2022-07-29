<template>
    <HeaderComponent/>
    <div class="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <h3>Sorry, the page you are looking for could not be found</h3>
        <router-link to="/">Back to Home</router-link>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
export default {
    name: "PageNotFoundComponent",
    components: { HeaderComponent }
}
</script>
<style>
    .not-found{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 75vh;
        width: 100%;
    }
    .not-found h1{
        font-size: 10em;
        padding: 0;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .not-found h2{
        font-size: 1.8em;
        margin: 0;
    }
    .not-found a{
        color: #fff;
        background-color: #8b0304;
        border: 1px solid #8b0304;
        border-radius: 4px;
        padding: 10px;
        width: 150px;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.2s all ease-in-out;
    }
    .not-found a:hover{
        color: #8b0304;
        background-color: #fff;
        border: 1px solid #8b0304;
        transform: scale(1.05);
    }
</style>