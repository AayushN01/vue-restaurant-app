<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Sign In</h1>
    <form class="login-form" @submit="signUp">
        <input type="email" placeholder="Enter Email" name="email">
        <input type="password" placeholder="Enter Password" name="password">
        <button>Sign In</button>
        <p>Don't have account? <router-link to="/sign-up">Sign Up</router-link></p>
    </form>
</template>

<script>

export default {
    name:'SignUpComponent',
}
</script>

<style>
    .logo{
        width: 100px;
    }
    .login-form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .login-form input{
        width: 250px;
        height: 30px;
        padding: 5px 10px;
        margin-bottom: 15px;
        border: 1px solid #8b0304;
        border-radius: 20px;
    }
    .login-form button{
        width: 270px;
        height: 40px;
        background-color: #8b0304;
        border: 1px solid #8b0304;
        color: #fff;
        text-transform: uppercase;
        border-radius: 20px;
        cursor: pointer;
        transition: 0.2s all ease-in;
    }
    .login-form button:hover{
        background-color: #fff;
        border: 1px solid #8b0304;
        color: #8b0304;
        transform: scale(1.02);
    }
    .login-form a{
        color:#8b0304;
        transition: 0.2s all ease;
    }
    .login-form a:hover{
        color: #8b73be;
    }
    div.error{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .error ul{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid red;
    }

    .error ul li{
        padding: 5px;
        color: red;
        font-size: 14px;
        font-weight: 600;
    }

</style>