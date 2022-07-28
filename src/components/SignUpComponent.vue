<template>
    <img src="../assets/restaurant-logo.png" alt="logo" class="logo">
    <h1>Sign Up</h1>
    <div class="error" v-if="error">
        <ul>
            <li v-for="e in error" v-bind:key="e">{{e}}</li>
        </ul>
    </div>
    <form class="register-form" @submit="signUp">
        <input type="text" placeholder="Enter Name" name="name" v-model="name">
        <input type="email" placeholder="Enter Email" name="email" v-model="email">
        <input type="tel" placeholder="Enter Contact Number" name="contact" v-model="contact">
        <input type="password" placeholder="Enter Password" name="password" v-model="password">
        <button>Sign Up</button>
    </form>
</template>

<script>

import axios from 'axios'
export default {
    name:'SignUpComponent',
    data(){
        return{
            error:[],
            name: '',
            email:'',
            contact:'',
            password:''
        }
    },methods:{
        async signUp(e){
            e.preventDefault();
            // console.log("Form submit");
            this.error = [];
            if(this.name && this.email && this.contact && this.password){
                // console.log(this.name,this.email,this.contact,this.password);
                let result = await axios.post('http://localhost:3000/users',{
                    name:this.name,email:this.email,contact:this.contact,password:this.password
                }); 
                // console.log(result.data);      
                // store result in local storage
                localStorage.setItem("user-info",JSON.stringify(result.data));  
            }
            if(!this.name){
                this.error.push('Name is required *')
            }
            if(!this.email){
                this.error.push('Email is required *');
            }
            if(!this.contact){
                this.error.push('Contact Number is required *');
            }
            if(!this.password){
                this.error.push('Password is required *');
            }
        }
    }
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
        border-radius: 20px;
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