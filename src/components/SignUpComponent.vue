<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Sign Up</h1>
    <div class="register-form">
        <input type="text" placeholder="Enter Name">
        <input type="email" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <button>Sign Up</button>
    </div>
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
    .register-form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .register-form input{
        width: 250px;
        height: 30px;
        padding: 5px 10px;
        margin-bottom: 15px;
        border: 1px solid #8b0304;
    }
    .register-form button{
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
    .register-form button:hover{
        background-color: #fff;
        border: 1px solid #8b0304;
        color: #8b0304;
    }

</style>