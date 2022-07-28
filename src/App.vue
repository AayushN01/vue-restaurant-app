<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
    .logo{
        width: 100px;
    }
    .register-form, .login-form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .register-form input, .login-form input{
        width: 250px;
        height: 30px;
        padding: 5px 10px;
        margin-bottom: 15px;
        border: 1px solid #8b0304;
        border-radius: 20px;
    }
    .register-form button, .login-form button{
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
    .register-form button:hover, .login-form button:hover{
        background-color: #fff;
        border: 1px solid #8b0304;
        color: #8b0304;
        transform: scale(1.02);
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
