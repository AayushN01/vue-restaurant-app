<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/add-restaurant">Add restaurant</router-link></li>
            <li><router-link to="/update-restaurant">Update restaurant</router-link></li>
            <li><a v-on:click="logout"> Logout</a></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'HeaderComponent',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'SignIn'});
        }
    }
}
</script>
<style>
    nav{
        background: #8b0304;
        padding: 10px;
        margin-top: -10px !important;
        margin-left: -8px !important;
        margin-right: -8px!important;
        max-width: 100% !important;
    }
    nav ul{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        list-style-type: none;
        padding-right: 30px;
    }
    nav ul li, nav ul li a{
        font-size: 20px;
        padding: 10px 15px;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
    }
    nav ul li:hover, nav ul li:hover a{
        background-color: #fff;
        color: #8b0304;
    }
    nav ul li a{
        text-decoration: none;
    }
</style>