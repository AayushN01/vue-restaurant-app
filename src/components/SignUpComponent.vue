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
        <p>Already have an account? <router-link to="/sign-in">Sign In</router-link></p>
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
                if(result.status == 201){
                    // store result in local storage
                    localStorage.setItem("user-info",JSON.stringify(result.data));
                    // Redirect to homepage
                    this.$router.push({name:'Home'});  
                }      
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
    },mounted(){
        // console.log('mounted');
        // if logged in do not show redirect to sign-up page
        // Get user from local storage
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'});
        }
    }
}
</script>
